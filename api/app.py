from flask import Flask, request, jsonify, current_app
from sqlalchemy import create_engine, text


def create_app(test_config=None):  # 1)
    app = Flask(__name__)

    #app.json_encoder = CustomJSONEncoder

    if test_config is None:  # 2
        app.config.from_pyfile("config.py")
    else:
        app.config.update(test_config)

    database = create_engine(
        app.config['DB_URL'], encoding='utf-8', max_overflow=0)  # 3)c
    app.database = database  # 4)

    @app.route("/sign-up/id/<user_id>", methods=['GET'])
    def send_id(user_id):
        row = app.database.execute(text("""
            SELECT member.user_id FROM member
            WHERE member.user_id = :user_id
        """), {'user_id': user_id}).fetchone()
        print(row)
        return jsonify({'valid': False}) if row else jsonify({'valid': True})

    @app.route("/sign-up/register", methods=['POST'])
    def sign_up():
        new_user = request.json
        new_user_id = app.database.execute(text("""
            INSERT INTO member(
                user_id,
                email,
                pw,
                name,
                phone,
                address,
                old_address,
                detail_address,
                zonecode,
                agree__mandatory,
                agree__optional
            ) VALUES (
                :id,
                :email,
                :password,
                :name,
                :phone,
                :address,
                :old_address,
                :detail_address,
                :zonecode,
                :agree__mandatory,
                :agree__optional
            )
        """), new_user).lastrowid  # 2)
        row = current_app.database.execute(text("""
            SELECT
                id
            FROM member
            WHERE id = :id
        """), {
            'id': new_user_id
        }).fetchone()  # 3)

        result = {  # 4)
            'registered': True,
            'message': f'등록을 완료했습니다.\n- 등록된 회원번호: {row.id}'
        } if row else {
            'registered': False,
            'message': '등록을 실패했습니다.'
        }

        return jsonify(result)

    return app


create_app()

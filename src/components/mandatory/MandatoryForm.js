import React from "react";
import { connect } from "react-redux";
import Input from "../common/Input";
import ResultMessage from "../common/ResultMessage";
import SelectEmail from "./SelectEmail";
import Timer from "./Timer";
import { setClassName } from "../../lib/setClassName";
import * as actions__value from "../../redux-module/mandatoryFormState";
import * as actions__result from "../../redux-module/resultState";
import * as buttonEvent from "../../lib/buttonEvt";
import validation from "../../lib/validation";

const MandatoryForm = ({
  //form의 value값 props
  email2,
  password,
  phone_auth_digit,
  //결과값 props
  result__id,
  result__password,
  result__passwordCheck,
  result__email1,
  result__email2,
  result__name,
  result__phone,
  result__phone_auth,
  //form의 value값을 redux로 넣는 action props
  setID,
  setPw,
  setPwCheck,
  setEmail1,
  setEmail2,
  setEmail2Editable,
  setName,
  setPhone,
  setPhoneAuthDigit,
  //각 input의 개별 검증결과를 redux로 넣는 action props
  setIDResult,
  setPwResult,
  setPwCheckResult,
  setEmail1Result,
  setEmail2Result,
  setNameResult,
  setPhoneResult,
  setPhoneAuthResult,
  //타이머 관련 props, actions
  timer,
  setTimerOn,
  setTime,
  //ID 중복체크
  checkIDDuplicated,
}) => {
  return (
    <fieldset className="mandatory">
      <legend className="signup-guide">필수 정보를 입력해주세요.</legend>
      <div className="input-container--col">
        <Input
          className={setClassName(result__id)}
          guideMessage="아이디* (4~20자)"
          setValue={setID}
          setResult={(value) => {
            setIDResult(
              validation.ID( value, checkIDDuplicated ) // parameter: 인풋에 입력된 ID, 중복체크 액션 생성 함수
            );
          }}
        />
        <ResultMessage result={result__id} />
      </div>
      <div className="input-container--col">
        <Input
          className={setClassName(result__password)}
          inputType="password"
          guideMessage="비밀번호* (영문+숫자, 8~20자)"
          setValue={setPw}
          setResult={(value) => setPwResult(validation.PW(value))}
        />
        <ResultMessage result={result__password} />
      </div>
      <div className="input-container--col">
        <Input
          className={setClassName(result__passwordCheck)}
          inputType="password"
          guideMessage="비밀번호 재확인*"
          setValue={setPwCheck}
          setResult={(value) =>
            setPwCheckResult(validation.PW_CHECK(value, password))
          }
        />
        <ResultMessage result={result__passwordCheck} />
      </div>
      <div className="input-container--row">
        <Input
          className={setClassName(
            result__email1,
            "input__email",
            "input__email--fail"
          )}
          guideMessage="이메일 앞자리*"
          setValue={setEmail1}
          setResult={(value) => setEmail1Result(validation.EMAIL1(value))}
        />
        <span>@</span>
        <Input
          id="input__email"
          className={setClassName(
            result__email2,
            "input__email",
            "input__email--fail"
          )}
          guideMessage="이메일 뒷자리*"
          setValue={setEmail2}
          setResult={(value) => setEmail2Result(validation.EMAIL2(value))}
          isReadOnly={!email2.editable}
          isDisabled={!email2.editable}
        />
        <ResultMessage
          result={result__email1.message ? result__email1 : result__email2}
        />
      </div>
      <SelectEmail
        setEmail2={setEmail2}
        setEmail2Editable={setEmail2Editable}
        setEmail2Result={setEmail2Result}
      />
      <div className="input-container--col">
        <Input
          className={setClassName(result__name)}
          guideMessage="이름*"
          setValue={setName}
          setResult={(value) => setNameResult(validation.NAME(value))}
        />
        <ResultMessage result={result__name} />
      </div>
      <div className="input-container--row">
        <Input
          id="input__phone"
          className={setClassName(
            result__phone,
            "input__phone",
            "input__phone--fail"
          )}
          inputType="number"
          guideMessage="휴대폰*"
          setValue={setPhone}
          setResult={(value) => setPhoneResult(validation.PHONE(value))}
          setButtonActive={buttonEvent.setButtonActive}
        />
        <button
          id="button__auth_request"
          className="button"
          type="button"
          disabled={!result__phone.status}
          onClick={() => {
            buttonEvent.phoneAuthButtonEvt(setPhoneAuthDigit);
            timer.timerOn
              ? setTime({ min: 0, sec: 10, remainSec: 10 })
              : setTimerOn(true);
          }}
        >
          인증받기
        </button>
        <ResultMessage result={result__phone} />
      </div>
      <div className="input-container--row" id="auth-container">
        <Input
          id="input__auth"
          className={setClassName(
            result__phone_auth,
            "input__auth",
            "input__auth--fail"
          )}
          inputType="number"
          guideMessage="인증번호 6자리 입력"
        />
        {phone_auth_digit && timer.timerOn && (
          <Timer
            setPhoneAuthDigit={setPhoneAuthDigit}
            setPhoneAuthResult={setPhoneAuthResult}
            timer={timer}
            setTimerOn={setTimerOn}
            setTime={setTime}
            result__phone_auth={result__phone_auth}
          />
        )}
        <button
          className="button"
          type="button"
          onClick={() =>
            buttonEvent.phoneAuthDoneButtonEvt(
              setPhoneAuthResult,
              validation.PHONE_AUTH(phone_auth_digit)
            )
          }
        >
          확인
        </button>
        <ResultMessage result={result__phone_auth} />
      </div>
      <ul className="info-list">
        <li>인증번호 전송은 통신사에 따라 최대 1분까지 소요될 수 있습니다.</li>
        <li>인증번호가 도착하지 않을 경우 '인증번호 재전송'을 눌러주세요.</li>
      </ul>
    </fieldset>
  );
};

export default connect(
  ({ mandatory, result }) => ({ ...mandatory, ...result }),
  { ...actions__result, ...actions__value }
)(MandatoryForm);

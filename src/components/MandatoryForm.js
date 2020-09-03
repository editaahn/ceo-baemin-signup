import React, { useRef } from "react";
import { connect } from "react-redux";
import * as actions__value from "../module/mandatoryFormState";
import * as actions__result from "../module/resultState";
import validation from "../lib/validation";
import Input from "./Input";
import ResultMessage from "./ResultMessage";
import SelectEmail from "../lib/SelectEmail";
import { setClassName } from "../lib/setClassName";

const MandatoryForm = ({
  email2,
  password,
  result__id,
  result__password,
  result__passwordCheck,
  result__email1,
  result__email2,
  result__name,
  result__phone,
  setID,
  setIDMessage,
  setPw,
  setPwMessage,
  setPwCheck,
  setPwCheckMessage,
  setEmail1,
  setEmail1Message,
  setEmail2,
  setEmail2Message,
  setEmail2Editable,
  setName,
  setNameMessage,
  setPhone,
  setPhoneMessage
}) => {

  // 입력값 조건에 따라 활성/비활성되는 버튼 정의
  const certificationBtnEl = useRef(null);
  const setButtonActive = (condition) => {
    const currentDOM = certificationBtnEl.current;
    currentDOM.disabled = condition ? false : true
  };

  return (
    <fieldset className="mandatory">
      <legend className="signup-guide">
        필수 정보를 입력해주세요.
      </legend>
      <div className="input-container--col">
        <Input
          className={setClassName(result__id)}
          guideMessage="아이디* (4~20자)"
          setValue={setID}
          setMessage={(value) => setIDMessage(validation.ID(value))}
        />
        <ResultMessage result={result__id} />
      </div>
      <div className="input-container--col">
        <Input
          className={setClassName(result__password)}
          inputType="password"
          guideMessage="비밀번호* (영문+숫자, 8~20자)"
          setValue={setPw}
          setMessage={(value) => setPwMessage(validation.PW(value))}
        />
        <ResultMessage result={result__password} />
      </div>
      <div className="input-container--col">
        <Input
          className={setClassName(result__passwordCheck)}
          inputType="password"
          guideMessage="비밀번호 재확인*"
          setValue={setPwCheck}
          setMessage={(value) =>
            setPwCheckMessage(validation.PW_CHECK(value, password))
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
          setMessage={(value) =>
            setEmail1Message(validation.EMAIL1(value))
          }
        />
        <span>@</span>
        <Input
          className={setClassName(
            result__email2,
            "input__email",
            "input__email--fail"
          )}
          guideMessage="이메일 뒷자리*"
          setValue={setEmail2}
          setMessage={(value) =>
            setEmail2Message(validation.EMAIL2(value))
          }
          isReadOnly={!email2.editable}
          // value={email2.value}
          // editable={email2.editable}
        />
        <ResultMessage
          result={result__email1.message ? result__email1 : result__email2}
        />
      </div>
      <SelectEmail
        setEmail2={setEmail2}
        setEmail2Editable={setEmail2Editable}
      />
      <div className="input-container--col">
        <Input
          className={setClassName(result__name)}
          guideMessage="이름*"
          setValue={setName}
          setMessage={(value) => setNameMessage(validation.NAME(value))}
        />
        <ResultMessage result={result__name} />
      </div>
      <div className="input-container--row">
        <Input
          className={setClassName(
            result__phone,
            "input__phone",
            "input__phone--fail"
          )}
          inputType="number"
          guideMessage="휴대폰*"
          setValue={setPhone}
          setMessage={(value) => setPhoneMessage(validation.PHONE(value))}
          setButtonActive={setButtonActive}
        />
        <button 
          ref={certificationBtnEl}
          className="button" 
          disabled
        >
          인증받기
        </button>
        <ResultMessage result={result__phone} />
      <ul className="info-list">
        <li>인증번호 전송은 통신사에 따라 최대 1분까지 소요될 수 있습니다.</li>
        <li>인증번호가 도착하지 않을 경우 '인증번호 재전송'을 눌러주세요.</li>
      </ul>
      </div>
    </fieldset>
  );
};

export default connect(
  ({ mandatory, result }) => ({ ...mandatory, ...result }),
  { ...actions__result, ...actions__value }
)(MandatoryForm);

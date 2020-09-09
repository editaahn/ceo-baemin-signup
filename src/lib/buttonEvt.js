import axios from 'axios';

// 인증하기 버튼 활성/비활성
export const setButtonActive = (condition) => {
  const currentDOM = document.getElementById("button__auth_request");
  currentDOM.disabled = condition ? false : true;
};

// 인증하기 버튼 클릭
export const phoneAuthButtonEvt = (setPhoneAuthDigit) => {
  const authRequestButton = document.getElementById("button__auth_request");
  const authContainer = document.getElementById("auth-container");
  const randomDigit = Math.floor(Math.random(6) * 1000000 + 1);

  setPhoneAuthDigit(randomDigit);
  authRequestButton.textContent = "재전송";
  authContainer.style.display = "flex";
  alert("인증번호가 전송됐습니다! \n *테스트 인증번호:" + randomDigit);
};

// 인증번호 입력 후 '확인' 버튼
export const phoneAuthDoneButtonEvt = (setPhoneAuthResult, validationFn) => {
  const authRequestButton = document.getElementById("button__auth_request");
  const authContainer = document.getElementById("auth-container");
  const inputPhone = document.getElementById("input__phone");
  const result = validationFn;

  setPhoneAuthResult(result);

  if (result.status) {
    authContainer.style.display = "none";
    inputPhone.disabled = "true";
    authRequestButton.textContent = "인증완료";
    authRequestButton.disabled = true;
    authRequestButton.className = "button__auth--done";
  }
};

// 제출 버튼
export const onSubmitEvt = (e, toast, result, requestData) => {
  e.preventDefault();

  const isValid = Object.entries(result).every((field) => field[1].status);
  const isMandatoryChecked = requestData.agree__mandatory;

  !isValid &&
    // htmlDOM 프로퍼티를 이용해 focus, blur 이벤트 강제 트리거
    Array.from(document.getElementsByTagName("INPUT")).forEach((v) => {
      v.focus();
      v.blur();
    });

  !isMandatoryChecked && toast("회원가입을 위해 필수항목에 동의해주세요.");

  const postRegister = async () => {
    try {
      const fetchResponse = await axios.post('sign-up/register',requestData);
      const { message, registered } = fetchResponse.data;
      alert(message);
      registered === true && window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  isValid &&
    isMandatoryChecked &&
    postRegister();
};
export const phoneAuthButtonEvt = (setPhoneAuthDigit) => {
  const authRequestButton = document.getElementById("button__auth_request");
  const authContainer = document.getElementById("auth-container");
  const randomDigit = Math.floor(Math.random(6) * 1000000 + 1);

  setPhoneAuthDigit(randomDigit);
  authRequestButton.textContent = "재전송";
  authContainer.style.display = "flex";
  alert("인증번호가 전송됐습니다! \n *테스트 인증번호:" + randomDigit);
};

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

export const onSubmitEvt = (e) => {
  e.preventDefault();
  // htmlDOM 프로퍼티를 이용해 focus, blur 이벤트 강제 트리거
  Array.from(document.getElementsByTagName("INPUT")).forEach((v) => {
    v.focus();
    v.blur();
  });
};

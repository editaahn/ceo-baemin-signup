import React, { useEffect } from "react";

const Timer = ({
  setPhoneAuthDigit,
  setPhoneAuthResult,
  timer,
  setTime,
  setTimerOn,
  result__phone_auth,
}) => {
  const { timerOn, sec, min, remainSec } = timer;

  const authContainer = document.getElementById("auth-container");
  const inputAuth = document.getElementById("input__auth");

  // 인증번호 입력 영역 비노출하는 함수
  const initializeDOM = (timerID) => {
    clearInterval(timerID);
    authContainer.style.display = "none";
    inputAuth.value = "";
    setPhoneAuthDigit(null);
    setTimerOn(false);
  }

  useEffect(() => {
    const timerSet = setInterval(function () {
      clearInterval(timerSet);
      // 인증 성공한 경우 타이머 멈춤
      if (result__phone_auth.status) {
        initializeDOM(timerSet);
        setTime({
          remainSec: -1,
          min: -1,
          sec: -1,
        });
      // 타이머 정상 진행
      } else if (remainSec >= 0 && timerOn) {
        setTime({
          remainSec: remainSec - 1,
          min: parseInt(remainSec / 60),
          sec: (remainSec % 60 >= 10) ? (remainSec % 60) : ("0" + remainSec % 60),
        }); 
      // 타이머 잔여시간 소진 시 타이머 멈춤
      } else {
        initializeDOM(timerSet);
        setPhoneAuthResult({ status: false, message: "시간 초과하였습니다." });
        setTime({
          remainSec: 10,
          min: 0,
          sec: 10,
        });
      }
    }, 1000);

    return () => clearInterval(timerSet);
  }, [timer, setTime, setTimerOn, setPhoneAuthDigit]);

  return (
    <p className="timer">
      {min}:{sec}
    </p>
  );
};

export default Timer;
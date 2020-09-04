import React, { useEffect, useState } from "react";

const Timer = () => {
  // const timerEl = useRef(null);
  const [remainSec, setRemainSec] = useState(180);
  const [min, setMin] = useState('3');
  const [sec, setSec] = useState('00');

  useEffect(() => {
    const timer = setInterval(function () {
      if (remainSec >= 0) {
        setMin(parseInt(remainSec / 60)); // 60초로 나눈 몫
        setSec(remainSec % 60 >= 10 ? remainSec % 60 : '0'+remainSec % 60); // 나머지
        setRemainSec(remainSec - 1);
      } else clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [min, sec, remainSec]);
  return (
    <p className="timer">
      {min}:{sec}
    </p>
  );
};

export default Timer;

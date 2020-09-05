import React, { useState } from "react";
const emailOption = ["naver.com", "daum.net", "gmail.com", "nate.com"];

const SelectEmail = ({ setEmail2, setEmail2Editable }) => {
  const [option, setOption] = useState("이메일 선택");

  return (
    <select
      value={option}
      onChange={(e) => {
        setOption(e.target.value);
        if (emailOption.includes(e.target.value)) {
          setEmail2(e.target.value);
          setEmail2Editable(false);
        } else {
          setEmail2('');
          setEmail2Editable(true);
        }
      }}
    >
      <option disabled>이메일 선택</option>
      {emailOption.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
      <option>직접입력</option>
    </select>
  );
};

export default SelectEmail;

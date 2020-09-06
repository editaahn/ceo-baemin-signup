import React, { useState } from "react";
const emailOption = ["naver.com", "daum.net", "gmail.com", "nate.com"];

const SelectEmail = ({ setEmail2, setEmail2Editable, setEmail2Result }) => {
  const [option, setOption] = useState("이메일 선택");

  return (
    <select
      value={option}
      onChange={(e) => {
        const inputEmail = document.getElementById("input__email");
        setOption(e.target.value);
        if (emailOption.includes(e.target.value)) {
          setEmail2(e.target.value);
          setEmail2Editable(false);
          inputEmail.value = e.target.value;
          setEmail2Result({status: true, message: ""})
        } else {
          setEmail2("");
          setEmail2Editable(true);
          inputEmail.value = "";
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

import React from "react";
import Checkbox from "./Checkbox";

const AgreementHandler = ({ isChecked, evt, setAllAgreement}) => {
  return (
    <legend className="agree-container">
      <Checkbox
        evt={evt}
        term="전체 약관에 동의합니다"
        labelClass="agree__label--bold"
        isChecked={isChecked}
        setAllAgreement={setAllAgreement}
      />
    </legend>
  );
};
export default AgreementHandler;
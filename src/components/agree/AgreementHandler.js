import React from "react";
import Checkbox from "../common/Checkbox";

const AgreementHandler = ({ isChecked, evt, setAllAgreement}) => {
  return (
    <legend className="agree-container">
      <Checkbox
        evt={evt}
        term="전체 약관에 동의합니다"
        labelClass="agree-container__label--bold"
        isChecked={isChecked}
        setAllAgreement={setAllAgreement}
      />
    </legend>
  );
};
export default AgreementHandler;
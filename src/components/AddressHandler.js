import React from "react";
import Checkbox from "./Checkbox";

const AddressHandler = ({ setEditable }) => {
  return (
    <legend className="agree-container">
      <Checkbox
        name="addressHandler"
        evt={() => setEditable()}
        term="선택 정보를 입력하시겠어요?"
      />
      <a
        className="agree__detail--row"
        href="https://ceo.baemin.com/#/policy/history?position=collectionAndUsageNormal"
        target="_blank"
        rel="noopener noreferrer"
      >
        내용보기
      </a>
    </legend>
  );
};

export default AddressHandler;

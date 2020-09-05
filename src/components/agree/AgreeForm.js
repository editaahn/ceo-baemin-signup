import React from "react";
import AgreementHandler from "./AgreementHandler"
import Checkbox from "../common/Checkbox";
import { connect } from "react-redux";
import * as actions from "../../redux-module/agreeFormState";

const AgreeForm = ({
  agree__handler,
  agree__mandatory,
  agree__optional,
  setAgreeHandler,
  setAgreeMandatory,
  setAgreeOptional,
}) => {
  return (
    <fieldset className="agreement">
      <AgreementHandler
        isChecked={agree__handler}
        evt={() => {
          setAgreeHandler(!agree__handler);
          setAgreeMandatory(!agree__handler);
          setAgreeOptional(!agree__handler);
        }}
      />
      <div className="agree-container">
        <Checkbox
          name="term__mandatory"
          evt={() => setAgreeMandatory(!agree__mandatory)}
          term="필수 항목에 동의합니다."
          labelClass="agree__label--col"
          isChecked={agree__mandatory}
        />
        <a
          className="agree__detail"
          href="https://ceo.baemin.com/#/policy/history?position=collectionAndUsageNormal"
          target="_blank"
          rel="noopener noreferrer"
        >
          배민사장님광장 이용약관
        </a>
        <a
          className="agree__detail"
          href="https://ceo.baemin.com/#/policy/history?position=collectionAndUsageNormal"
          target="_blank"
          rel="noopener noreferrer"
        >
          개인정보 수집이용 동의
        </a>
      </div>
      <div className="agree-container">
        <Checkbox
          name="term__optional"
          evt={() => setAgreeOptional(!agree__optional)}
          term="광고성 정보 수신 동의 (선택)"
          labelClass="agree__label--col"
          isChecked={agree__optional}
        />
        <p className="agree__detail">
          배민사장님광장 회원에게 제공하는 서비스의 광고성 정보를 수신합니다.
        </p>
      </div>
      <ul className="info-list">
        <li>
          만 14세 이상 회원만 가입 가능합니다. 
          <a href="#">내용보기</a>
        </li>
      </ul>

    </fieldset>
  );
};

export default connect(({ agree }) => agree, actions)(AgreeForm);

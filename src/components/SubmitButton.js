import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onSubmitEvt } from "../lib/buttonEvt";
import { connect } from "react-redux";

const SubmitButton = ({mandatory, optional, agree, result}) => {
  const formResult = result;
  const formData = {
    id: mandatory.id,
    email1: mandatory.email1,
    email2: mandatory.email2.value,
    password: mandatory.password,
    passwordCheck: mandatory.passwordCheck,
    name: mandatory.name,
    phone: mandatory.phone,
    address: optional.address,
    old_address: optional.old_address,
    detail_address: optional.detail_address,
    zonecode: optional.zonecode,
    agree__mandatory: agree.agree__mandatory,
    agree__optional: agree.agree__optional,
  };
  
  return (
    <React.Fragment>
      <button type="submit" onClick={(e) => onSubmitEvt(e, toast, formResult, formData)}>
        가입완료
      </button>
      <ToastContainer />
    </React.Fragment>
  );
};

export default connect(state => state)(SubmitButton);
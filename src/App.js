import React from "react";
import Header from "./components/Header";
import MandatoryForm from "./components/MandatoryForm";
import OptionalForm from "./components/OptionalForm";
import AgreeForm from "./components/AgreeForm";
import SubmitButton from "./components/SubmitButton";
import "./style/style.scss";
//import { useSelector } from "react-redux";

const App = () => {
  //const formData = useSelector(state => ({...state.mandatory, ...state.optional, ...state.agree }));
  const onSubmitEvt = (e) => {
    e.preventDefault();
    // htmlDOM 프로퍼티를 이용해 focus, blur 이벤트 강제 트리거
    Array.from(document.getElementsByTagName("INPUT")).forEach((v) => {
      v.focus();
      v.blur();
    });
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <form className="form" onSubmit={onSubmitEvt}>
          <MandatoryForm />
          <OptionalForm />
          <AgreeForm />
          <SubmitButton />
        </form>
      </main>
    </div>
  );
};

export default App;

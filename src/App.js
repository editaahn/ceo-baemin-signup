import React from "react";
import Header from "./components/Header";
import MandatoryForm from "./components/mandatory/MandatoryForm";
import OptionalForm from "./components/optional/OptionalForm";
import AgreeForm from "./components/agree/AgreeForm";
import SubmitButton from "./components/SubmitButton";
import "./style/style.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <form className="form">
          <MandatoryForm />
          <OptionalForm />
          <AgreeForm />
          <SubmitButton/>
        </form>
      </main>
    </div>
  );
};

export default App;

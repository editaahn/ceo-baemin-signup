import React from "react";
import Header from "./components/Header";
import MandatoryForm from "./components/MandatoryForm";
import OptionalForm from "./components/OptionalForm";
import AgreeForm from "./components/AgreeForm";
import SubmitButton from "./components/SubmitButton";
import * as buttonEvent from "./lib/buttonClickEvt.js";
import "./style/style.scss";

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <form className="form" onSubmit={buttonEvent.onSubmitEvt}>
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

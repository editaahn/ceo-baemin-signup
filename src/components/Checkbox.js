import React from "react";

const Checkbox = ({ name, evt, term, labelClass, isChecked, }) => {
  return (
    <React.Fragment>
      <input
        className="agree__checkbox"
        type="checkbox"
        name={name || null}
        onClick={evt}
        checked={isChecked}
      />
      <label
        className={labelClass}
        htmlFor={name || null}
      >
        {term}
      </label>
    </React.Fragment>
  );
};

export default Checkbox;

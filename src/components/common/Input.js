import React from "react";

const Input = ({
  inputType,
  guideMessage,
  setValue,
  setResult,
  isReadOnly,
  isDisabled,
  className,
  setButtonActive,
  randomDigit,
  id,
}) => {
  return (
    <React.Fragment>
      <input
        id={id}
        className={className || "input"}
        type={inputType || "text"}
        placeholder={guideMessage}
        onBlur={(e, optionalParam) => {
          setValue && setValue(randomDigit || e.target.value);
          setResult && setResult(e.target.value, optionalParam);
        }}
        readOnly={isReadOnly}
        disabled={isDisabled}
        onChange={e => setButtonActive && setButtonActive(e.target.value.length >= 10)}
      />
    </React.Fragment>
  );
};

export default Input;

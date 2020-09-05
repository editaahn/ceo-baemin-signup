import React, { useRef } from "react";

const Input = ({
  inputType,
  guideMessage,
  setValue,
  setResult,
  isReadOnly,
  isDisabled,
  className,
  value,
  editable,
  setButtonActive,
  randomDigit,
  id,
}) => {
  const inputEl = useRef(null);
  return (
    <React.Fragment>
      <input
        ref={inputEl}
        className={className || "input"}
        type={inputType || "text"}
        placeholder={guideMessage}
        onBlur={(e, optionalParam) => {
          setValue && setValue(randomDigit || e.target.value);
          setResult && setResult(e.target.value, optionalParam);
        }}
        readOnly={isReadOnly}
        disabled={isDisabled}
        value={value}
        onChange={e => setButtonActive && setButtonActive(e.target.value.length >= 10)}
        id={id}
      />
    </React.Fragment>
  );
};

export default Input;

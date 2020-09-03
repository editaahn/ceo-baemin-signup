import React, { useRef } from "react";

const Input = ({
  inputType,
  guideMessage,
  setValue,
  setMessage,
  isReadOnly,
  isDisabled,
  className,
  value,
  editable,
  setButtonActive,
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
          setValue && setValue(e.target.value);
          setMessage && setMessage(e.target.value, optionalParam);
        }}
        readOnly={isReadOnly}
        disabled={isDisabled}
        value={value}
        onChange={e => setButtonActive && setButtonActive(e.target.value.length >= 10)}
      />
    </React.Fragment>
  );
};

export default Input;

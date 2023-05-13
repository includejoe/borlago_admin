import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

import { TextInputProps } from "./textInput";
import { InputArea, InputField, PasswordInputWrapper } from "./styles";

const PasswordInput: React.FC<TextInputProps> = ({
  width,
  background,
  id,
  name,
  placeholder,
  label,
  value,
  error,
  onChange,
  onBlur,
  isError,
}) => {
  const [hideText, setHideText] = useState(true);

  return (
    <InputArea width={width}>
      <label htmlFor={id}>{label}</label>
      <PasswordInputWrapper>
        <InputField
          id={id}
          background={background}
          name={name}
          type={hideText ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {hideText ? (
          <IoMdEye className="icon" onClick={() => setHideText(false)} />
        ) : (
          <IoMdEyeOff className="icon" onClick={() => setHideText(true)} />
        )}
      </PasswordInputWrapper>
      {isError ? <p>{error}</p> : null}
    </InputArea>
  );
};

export default PasswordInput;

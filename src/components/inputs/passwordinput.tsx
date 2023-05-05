import { useState } from "react";

import { TextInputProps } from "./textInput";
import { InputArea, InputField } from "./styles";

const PasswordInput: React.FC<TextInputProps> = ({
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
  const [hideText, setHidetext] = useState(true);

  return (
    <InputArea>
      <label htmlFor={id}>{label}</label>
      <InputField
        id={id}
        name={name}
        type={hideText ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isError ? <p>{error}</p> : null}
    </InputArea>
  );
};

export default PasswordInput;

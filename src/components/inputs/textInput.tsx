import { InputArea, InputField } from "./styles";

export interface TextInputProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  value: string;
  error?: string;
  width?: string;
  height?: string;
  background?: string;
  isError?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  width,
  height,
  background,
  id,
  name,
  placeholder,
  type,
  label,
  value,
  error,
  disabled,
  onChange,
  onBlur,
  isError,
}) => {
  return (
    <InputArea width={width}>
      <label htmlFor={id}>{label ? label : null}</label>
      <InputField
        height={height}
        background={background}
        id={id}
        name={name}
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled ? disabled : false}
      />
      {isError ? <p>{error}</p> : null}
    </InputArea>
  );
};

export default TextInput;

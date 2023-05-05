import { InputArea, InputField } from "./styles";

export interface TextInputProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isError: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  placeholder,
  type,
  label,
  value,
  error,
  onChange,
  onBlur,
  isError,
}) => {
  return (
    <InputArea>
      <label htmlFor={id}>{label}</label>
      <InputField
        id={id}
        name={name}
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isError ? <p>{error}</p> : null}
    </InputArea>
  );
};

export default TextInput;

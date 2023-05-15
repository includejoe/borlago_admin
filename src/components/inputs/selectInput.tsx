import { InputArea, SelectField } from "./styles";

interface SelectInputProps {
  label?: string;
  value: string;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[];
  error?: string;
  width?: string;
  height?: string;
  background?: string;
  placeholder: string;
  isError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  width,
  height,
  id,
  background,
  placeholder,
  options,
  label,
  value,
  error,
  onChange,
  isError,
}) => {
  return (
    <InputArea width={width}>
      <label htmlFor={value}>{label ? label : null}</label>
      <SelectField
        height={height}
        background={background}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </SelectField>
      {isError ? <p>{error}</p> : null}
    </InputArea>
  );
};

export default SelectInput;

import { useTranslation } from "react-i18next";

import { InputArea, SelectField } from "./styles";

interface GenderInputProps {
  label?: string;
  value: string;
  error?: string;
  width?: string;
  height?: string;
  background?: string;
  isError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

const GenderInput: React.FC<GenderInputProps> = ({
  width,
  height,
  background,
  label,
  value,
  error,
  onChange,
  onBlur,
  isError,
}) => {
  const { t } = useTranslation();

  return (
    <InputArea width={width}>
      <label htmlFor="gender">{label ? label : null}</label>
      <SelectField
        height={height}
        background={background}
        id="gender"
        name="gender"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="" disabled hidden>
          {t("gender.choose")}
        </option>
        <option value="male">{t("gender.male")}</option>
        <option value="female">{t("gender.female")}</option>
        <option value="other">{t("gender.other")}</option>
      </SelectField>
      {isError ? <p>{error}</p> : null}
    </InputArea>
  );
};

export default GenderInput;

import { SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { MdFilterList, MdFilterListOff } from "react-icons/md";
import { useFormik } from "formik";

import { Button } from "@components/button";
import TextInput from "@components/inputs/textInput";
import SelectInput from "../inputs/selectInput";
import { status, regions, countries } from "@utils/filterProperties";
import { useTheme } from "@utils/theme";
import { Properties, Wrapper, Header } from "./styles";

interface UnitFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUnits: React.Dispatch<SetStateAction<Array<never>>>;
}

const UnitFilter: React.FC<UnitFilterProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [showProperties, setShowProperties] = useState(false);
  const isScreenMobile = useMediaQuery({
    query: `(max-width: ${theme.breakPoint.lg})`,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      status: "",
      region: "",
      country: "",
    },
    onSubmit: (values) => {
      // pass
    },
  });

  return (
    <Wrapper>
      <Header onClick={() => setShowProperties(!showProperties)}>
        {showProperties ? (
          <MdFilterListOff className="icon" />
        ) : (
          <MdFilterList className="icon" />
        )}
        <h1>{t("page.collectorUnits.filter") as string}</h1>
      </Header>
      {showProperties ? (
        <form onSubmit={formik.handleSubmit}>
          <Properties>
            <TextInput
              id="name"
              name="name"
              width={isScreenMobile ? "100%" : "20%"}
              height="40px"
              placeholder={t("page.collectorUnits.search") as string}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <SelectInput
              width={isScreenMobile ? "100%" : "20%"}
              height="40px"
              id="status"
              placeholder={t("page.collectorUnits.status") as string}
              options={status}
              value={formik.values.status}
              onChange={formik.handleChange}
            />

            <SelectInput
              width={isScreenMobile ? "100%" : "20%"}
              height="40px"
              id="region"
              placeholder={t("page.collectorUnits.regions") as string}
              options={regions}
              value={formik.values.region}
              onChange={formik.handleChange}
            />

            <SelectInput
              width={isScreenMobile ? "100%" : "20%"}
              height="40px"
              id="country"
              placeholder={t("page.collectorUnits.countries") as string}
              options={countries}
              value={formik.values.country}
              onChange={formik.handleChange}
            />
          </Properties>
          <Button type="submit" width="20%">
            {t("btn.filter")}
          </Button>
        </form>
      ) : null}
    </Wrapper>
  );
};

export default UnitFilter;

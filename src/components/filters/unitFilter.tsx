import { SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { MdFilterList, MdFilterListOff } from "react-icons/md";
import { useFormik } from "formik";
import { useMutation } from "react-query";

import borlagoapi from "@/src/api";
import { Button } from "@components/button";
import TextInput from "@components/inputs/textInput";
import SelectInput from "../inputs/selectInput";
import { useAuthContext } from "@contexts/authContext";
import { countries, Country } from "@/src/utils/countries";
import { useTheme } from "@utils/theme";
import { Properties, Wrapper, Header } from "./styles";
import Loader from "../loader";
import { CollectorUnit } from "@/src/types/collectorUnit";

interface UnitFilterProps {
  setUnits: React.Dispatch<SetStateAction<Array<CollectorUnit>>>;
}

interface FilterData {
  name: string;
  status: string;
  country: string;
  region: string;
}

const UnitFilter: React.FC<UnitFilterProps> = ({ setUnits }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { token } = useAuthContext();
  const [showProperties, setShowProperties] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [regions, setRegions] = useState<string[]>([]);
  const countryNames = countries.map((country) => country.country);
  const isScreenMobile = useMediaQuery({
    query: `(max-width: ${theme.breakPoint.lg})`,
  });

  const { mutate } = useMutation({
    mutationKey: "filter-units",
    mutationFn: async (values: FilterData) => {
      return borlagoapi
        .get(
          `/administrator/collector-unit/filter/?name=${values.name}&status=${values.status}&country=${values.country}&region=${values.region}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => {
          setIsLoading(false);
          console.log(data);
          setUnits(data);
        })
        .catch(() => {
          setIsLoading(false);
        });
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      status: "",
      region: "",
      country: "",
    },
    onSubmit: (values) => {
      setIsLoading(true);
      mutate(values);
    },
  });

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = event.target.value;
    const selectedCountryData = countries.find(
      (c: Country) => c.country === country
    );

    if (selectedCountryData) {
      formik.setFieldValue("country", country);
      formik.setFieldValue("region", "");
      setRegions(selectedCountryData.regions);
    }
  };

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
              options={["Available", "Not Available"]}
              value={formik.values.status}
              onChange={formik.handleChange}
            />

            <SelectInput
              width={isScreenMobile ? "100%" : "20%"}
              height="40px"
              id="country"
              placeholder={t("page.collectorUnits.s_country") as string}
              options={countryNames}
              value={formik.values.country}
              onChange={handleCountryChange}
            />

            <SelectInput
              width={isScreenMobile ? "100%" : "20%"}
              height="40px"
              id="region"
              placeholder={t("page.collectorUnits.s_region") as string}
              options={regions}
              value={formik.values.region}
              onChange={formik.handleChange}
            />
          </Properties>
          {isLoading ? (
            <Loader size="sm" />
          ) : (
            <Button type="submit" width={isScreenMobile ? "100%" : "20%"}>
              {t("btn.filter")}
            </Button>
          )}
        </form>
      ) : null}
    </Wrapper>
  );
};

export default UnitFilter;

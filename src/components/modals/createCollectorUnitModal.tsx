/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, SetStateAction, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useMediaQuery } from "react-responsive";

import borlagoapi from "@src/api";
import Loader from "@components/loader";
import ResponseDialog from "@components/responseDialog";
import SelectInput from "@components/inputs/selectInput";
import { Button } from "@components/button";
import { useTheme } from "@utils/theme";
import { countries, Country } from "@/src/utils/countries";
import { useAuthContext } from "@contexts/authContext";
import { ModalContainer, FormWrapper as ModalWrapper } from "./styles";

interface CreateCollectorUnitModalProps {
  show: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const CreateCollectorUnitModal: React.FC<CreateCollectorUnitModalProps> = ({
  show,
  setShowModal,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { token } = useAuthContext();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [regions, setRegions] = useState<string[]>([]);
  const countryNames = countries.map((country) => country.country);
  const isScreenMobile = useMediaQuery({
    query: `(max-width: ${theme.breakPoint.lg})`,
  });

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);

  async function handleSubmit(values: any) {
    return borlagoapi
      .post("/administrator/collector-unit/create/", values, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        setShowModal(false);
        navigate(`/unit/${data.id}`);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }

  const formik = useFormik({
    initialValues: {
      country: "",
      region: "",
    },
    validationSchema: Yup.object({
      country: Yup.string().required(t("error.required") as string),
      region: Yup.string().required(t("error.required") as string),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      handleSubmit(values);
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

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current === e.target) {
      setShowModal(false);
    }
  };

  return show ? (
    <ModalContainer ref={ref} onClick={closeModal}>
      <ResponseDialog show={error} type="error" message={t("error.wrong")} />
      <ModalWrapper onSubmit={formik.handleSubmit}>
        {isLoading ? (
          <Loader size="md" />
        ) : (
          <>
            <h1>{t("page.collectorUnits.create")}</h1>

            <SelectInput
              width={isScreenMobile ? "82%" : "70%"}
              height="40px"
              id="country"
              placeholder={t("page.collectorUnits.s_country") as string}
              options={countryNames}
              value={formik.values.country}
              onChange={handleCountryChange}
              onBlur={formik.handleBlur}
              isError={
                (formik.touched.country && formik.errors.country) as boolean
              }
              error={formik.errors.country}
            />

            <SelectInput
              width={isScreenMobile ? "82%" : "70%"}
              height="40px"
              id="region"
              placeholder={t("page.collectorUnits.s_region") as string}
              options={regions}
              value={formik.values.region}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={
                (formik.touched.region && formik.errors.region) as boolean
              }
              error={formik.errors.region}
            />

            <Button width={isScreenMobile ? "82%" : "70%"} type="submit">
              {t("btn.create")}
            </Button>
          </>
        )}
      </ModalWrapper>
    </ModalContainer>
  ) : null;
};

export default CreateCollectorUnitModal;

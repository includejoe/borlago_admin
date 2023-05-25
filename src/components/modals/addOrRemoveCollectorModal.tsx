/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, SetStateAction, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMediaQuery } from "react-responsive";

import borlagoapi from "@src/api";
import Loader from "@components/loader";
import ResponseDialog from "@components/responseDialog";
import TextInput from "@components/inputs/textInput";
import { Button } from "@components/button";
import { useTheme } from "@utils/theme";
import { useAuthContext } from "@contexts/authContext";
import { ModalContainer, FormWrapper as ModalWrapper } from "./styles";

interface AddOrRemoveCollectorModalProps {
  show: boolean;
  type: string;
  unitName: string;
  collectorToRemoveId?: string;
  setShowModal: React.Dispatch<SetStateAction<any>>;
  setData: React.Dispatch<SetStateAction<any>>;
}

const AddOrRemoveCollectorModal: React.FC<AddOrRemoveCollectorModalProps> = ({
  show,
  type,
  unitName,
  setShowModal,
  setData,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { token } = useAuthContext();
  const ref = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const isScreenMobile = useMediaQuery({
    query: `(max-width: ${theme.breakPoint.lg})`,
  });

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);

  async function handleSubmit(values: any, resetForm: () => void) {
    return borlagoapi
      .patch("/administrator/collector-unit/add-or-remove/collector/", values, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        setData(data);
        resetForm();
        setShowModal({ show: false, type: "" });
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }

  const formik = useFormik({
    initialValues: {
      collector_id: "",
      collector_unit: unitName,
    },
    validationSchema: Yup.object({
      collector_id: Yup.string().required(t("error.required") as string),
    }),
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      handleSubmit({ ...values, type }, resetForm);
    },
  });

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current === e.target) {
      setShowModal({ show: false, type: "" });
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
            <h1>
              {type === "add"
                ? t("page.collectorUnitDetail.addCollector", { unitName })
                : t("page.collectorUnitDetail.removeCollector", { unitName })}
            </h1>

            <p className="info">
              {type === "add"
                ? t("page.collectorUnitDetail.addInfo")
                : t("page.collectorUnitDetail.removeInfo")}
            </p>

            <TextInput
              width={isScreenMobile ? "82%" : "70%"}
              height="40px"
              id="collector_id"
              name="collector_id"
              placeholder={t("placeholder.collectorId") as string}
              value={formik.values.collector_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={
                (formik.touched.collector_id &&
                  formik.errors.collector_id) as boolean
              }
              error={formik.errors.collector_id}
            />

            <Button
              color={type === "add" ? theme.color.primary : theme.color.error}
              width={isScreenMobile ? "82%" : "70%"}
              type="submit"
            >
              {type === "add"
                ? t("btn.addCollector")
                : t("btn.removeCollector")}
            </Button>
          </>
        )}
      </ModalWrapper>
    </ModalContainer>
  ) : null;
};

export default AddOrRemoveCollectorModal;

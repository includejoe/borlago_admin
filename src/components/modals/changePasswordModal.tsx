import { useRef, SetStateAction, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMediaQuery } from "react-responsive";

import borlagoapi from "@src/api";
import Loader from "@components/loader";
import ResponseDialog from "@components/responseDialog";
import PasswordInput from "@components/inputs/passwordInput";
import { Button } from "@components/button";
import { useTheme } from "@utils/theme";
import { useAuthContext } from "@contexts/authContext";
import { ModalContainer, FormWrapper as ModalWrapper } from "./styles";

interface ChangePasswordModalProps {
  show: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  show,
  setShowModal,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { token } = useAuthContext();
  const ref = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({
    error: false,
    success: false,
  });
  const isScreenMobile = useMediaQuery({
    query: `(max-width: ${theme.breakPoint.lg})`,
  });

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current === e.target) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSubmissionStatus({ error: false, success: false });
    }, 3000);
  }, [submissionStatus.error, submissionStatus.success]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(values: any, resetForm: () => void) {
    return borlagoapi
      .patch("/user/password/change/", values, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setSubmissionStatus({ error: false, success: true });
        resetForm();
        setIsLoading(false);
      })
      .catch(() => {
        setSubmissionStatus({ error: true, success: false });
        setIsLoading(false);
      });
  }

  const formik = useFormik({
    initialValues: {
      current_password: "",
      new_password: "",
      confirm_new_password: "",
    },
    validationSchema: Yup.object({
      current_password: Yup.string().required(t("error.required") as string),
      new_password: Yup.string().required(t("error.required") as string),
      confirm_new_password: Yup.string()
        .required(t("error.required") as string)
        .oneOf(
          [Yup.ref("new_password"), ""],
          t("error.match_password") as string
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      handleSubmit(values, resetForm);
    },
  });

  return show ? (
    <ModalContainer ref={ref} onClick={closeModal}>
      <ResponseDialog
        show={submissionStatus.error || submissionStatus.success}
        type={submissionStatus.error ? "error" : "success"}
        message={
          submissionStatus.error
            ? t("error.passwordChange")
            : t("success.passwordChange")
        }
      />
      <ModalWrapper onSubmit={formik.handleSubmit}>
        {isLoading ? (
          <Loader size="md" />
        ) : (
          <>
            <PasswordInput
              width={isScreenMobile ? "82%" : "70%"}
              id="current_password"
              name="current_password"
              type="text"
              label={t("label.currentPassword") as string}
              disabled={true}
              background={theme.color.white}
              value={formik.values.current_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={
                (formik.touched.current_password &&
                  formik.errors.current_password) as boolean
              }
              error={formik.errors.current_password}
            />

            <PasswordInput
              width={isScreenMobile ? "82%" : "70%"}
              id="new_password"
              name="new_password"
              type="text"
              label={t("label.newPassword") as string}
              disabled={true}
              background={theme.color.white}
              value={formik.values.new_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={
                (formik.touched.new_password &&
                  formik.errors.new_password) as boolean
              }
              error={formik.errors.new_password}
            />

            <PasswordInput
              width={isScreenMobile ? "82%" : "70%"}
              id="confirm_new_password"
              name="confirm_new_password"
              type="text"
              label={t("label.confirmNewPassword") as string}
              disabled={true}
              background={theme.color.white}
              value={formik.values.confirm_new_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={
                (formik.touched.confirm_new_password &&
                  formik.errors.confirm_new_password) as boolean
              }
              error={formik.errors.confirm_new_password}
            />

            <Button width={isScreenMobile ? "82%" : "70%"} type="submit">
              {t("btn.submit")}
            </Button>
          </>
        )}
      </ModalWrapper>
    </ModalContainer>
  ) : null;
};

export default ChangePasswordModal;

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";

import { useAuthContext } from "@contexts/authContext";
import ResponseDialog from "@components/responseDialog";
import TextInput from "@components/inputs/textInput";
import PasswordInput from "@components/inputs/passwordInput";
import { Button } from "@/src/components/button";
import borlagoapi from "@/src/api";
import { PageContainer, Dividend, FormWrapper } from "./styles";

interface LoginData {
  user_type: number;
  email: string;
  password: string;
}

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);

  const { mutate } = useMutation({
    mutationKey: "login",
    mutationFn: async (values: LoginData) => {
      return borlagoapi
        .post("/auth/login/", values)
        .then(({ data }) => {
          const { email, jwt } = data;
          borlagoapi
            .get(`/user/detail/${email}/`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
              },
            })
            .then(({ data }) => {
              login(jwt, data, stayLoggedIn);
              setIsLoading(false);
              navigate("/");
            })
            .catch(() => {
              setError(true);
              setIsLoading(false);
            });
        })
        .catch(() => {
          setError(true);
          setIsLoading(false);
        });
    },
  });

  const formik = useFormik({
    initialValues: {
      user_type: 1,
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("error.validEmail") as string)
        .required(t("error.required") as string),
      password: Yup.string().required(t("error.required") as string),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      mutate(values);
    },
  });

  return (
    <PageContainer>
      <ResponseDialog
        show={error}
        type="error"
        message={t("error.invalidCredentials")}
      />

      <Dividend>
        <FormWrapper autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="greeting">
            <h1>{t("page.login.welcome")}</h1>
            <h3>{t("page.login.login")}</h3>
          </div>

          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder={t("placeholder.email") as string}
            label={t("label.email") as string}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={(formik.touched.email && formik.errors.email) as boolean}
            error={formik.errors.email}
          />

          <PasswordInput
            id="password"
            name="password"
            placeholder={t("placeholder.password") as string}
            label={t("label.password") as string}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={
              (formik.touched.password && formik.errors.password) as boolean
            }
            error={formik.errors.password}
          />

          <div className="actions">
            <div className="stay-logged-in">
              <input
                type="checkbox"
                id="stayLoggedIn"
                checked={stayLoggedIn}
                onChange={() => setStayLoggedIn(!stayLoggedIn)}
              />
              <label htmlFor="stayLoggedIn">{t("label.stayLoggedIn")}</label>
            </div>
            <Link to="/forgot-password/">{t("page.login.forgotPassword")}</Link>
          </div>

          <Button height="45px" width="100%" disabled={isLoading} type="submit">
            {t("btn.login")}
          </Button>
        </FormWrapper>
      </Dividend>
      <Dividend></Dividend>
    </PageContainer>
  );
};

export default LoginPage;

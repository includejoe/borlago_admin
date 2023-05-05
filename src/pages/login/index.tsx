import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";

import borlagoapi from "@/src/api";
import TextInput from "@/src/components/inputs/textInput";
import PasswordInput from "@/src/components/inputs/passwordinput";
import { Button } from "@/src/components/button";
import { PageContainer, Dividend, FormWrapper } from "./styles";

interface LoginData {
  user_type: number;
  email: string;
  password: string;
}

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useMutation({
    mutationKey: "login",
    mutationFn: async (values: LoginData) => {
      return borlagoapi
        .post("/auth/login/", values)
        .then(({ data }) => {
          // do something
          console.log(data);
          setIsLoading(false);
          navigate("/");
        })
        .catch((err) => {
          // do something
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
            placeholder={t("placeholder.email")}
            label={t("label.email")}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={(formik.touched.email && formik.errors.email) as boolean}
            error={formik.errors.email}
          />

          <PasswordInput
            id="password"
            name="password"
            placeholder={t("placeholder.password")}
            label={t("label.password")}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={
              (formik.touched.password && formik.errors.password) as boolean
            }
            error={formik.errors.password}
          />
          <div className="actions">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">{t("label.rememberMe")}</label>
            </div>
            <Link to="/forgot-password/">{t("page.login.forgotPassword")}</Link>
          </div>

          <Button width="100%" disabled={isLoading} type="submit">
            {t("btn.login")}
          </Button>
        </FormWrapper>
      </Dividend>
      <Dividend></Dividend>
    </PageContainer>
  );
};

export default LoginPage;

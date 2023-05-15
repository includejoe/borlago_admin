import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdAdd } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMediaQuery } from "react-responsive";

import DarkAvatar from "../../assets/images/avatar_dark.png";
import LightAvatar from "../../assets/images/avatar_light.png";
import ChangePasswordModal from "@components/modals/changePasswordModal";
import { Button } from "@components/button";
import TextInput from "@components/inputs/textInput";
import SelectInput from "@/src/components/inputs/selectInput";
import { useAuthContext } from "@contexts/authContext";
import { useTheme } from "@utils/theme";
import { imageHandler } from "@utils/imageHandler";
import { PageContainer, ProfilePhoto, Section, Divider } from "./styles";

const SettingsPage = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { user } = useAuthContext();
  const [profilePhoto, setProfilePhoto] = useState("");
  const [newPassword, setNewPassword] = useState(false);
  const isScreenMobile = useMediaQuery({
    query: `(max-width: ${theme.breakPoint.lg})`,
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      gender: "",
      new_password: "",
      confirm_new_password: "",
      profile_photo: "",
    },
    validationSchema: Yup.object({
      confirm_new_password: Yup.string().oneOf(
        [Yup.ref("new_password"), ""],
        t("error.match_password") as string
      ),
    }),
    onSubmit: (values) => {
      // do something with values
      console.log(values);
    },
  });

  const genderChoices = [
    t("gender.male"),
    t("gender.female"),
    t("gender.other"),
  ];

  return (
    <>
      <ChangePasswordModal setShowModal={setNewPassword} show={newPassword} />
      <PageContainer onSubmit={formik.handleSubmit}>
        <Section>
          <ProfilePhoto>
            {profilePhoto ? (
              <img src={profilePhoto} alt="" />
            ) : user?.profile_photo ? (
              <img src={user.profile_photo} alt="" />
            ) : (
              <img src={theme.isDark ? LightAvatar : DarkAvatar} alt="" />
            )}

            <label htmlFor="profilePhoto">
              <MdAdd size={33} color="#ffffff" />
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => imageHandler(e, setProfilePhoto)}
              name="profilePhoto"
              id="profilePhoto"
            />
          </ProfilePhoto>
        </Section>

        <Section>
          <TextInput
            width={isScreenMobile ? "100%" : "49%"}
            id="currentEmail"
            name="currentEmail"
            type="email"
            label={t("label.email") as string}
            disabled={true}
            background={theme.color.backgroundVariant}
            value={user?.email as string}
          />
        </Section>

        <Section>
          <TextInput
            width={isScreenMobile ? "100%" : "49%"}
            id="currentFirstName"
            name="currentFirstName"
            type="text"
            label={t("label.firstName") as string}
            disabled={true}
            background={theme.color.backgroundVariant}
            value={user?.first_name as string}
          />
          <TextInput
            width={isScreenMobile ? "100%" : "49%"}
            id="first_name"
            name="first_name"
            type="text"
            label={t("page.settings.firstName") as string}
            background={theme.color.white}
            placeholder={t("placeholder.firstName") as string}
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={
              (formik.touched.first_name && formik.errors.first_name) as boolean
            }
            error={formik.errors.first_name}
          />
        </Section>

        <Section>
          <TextInput
            width={isScreenMobile ? "100%" : "49%"}
            id="currentLastName"
            name="currentLastName"
            type="text"
            label={t("label.lastName") as string}
            disabled={true}
            background={theme.color.backgroundVariant}
            value={user?.last_name as string}
          />
          <TextInput
            width={isScreenMobile ? "100%" : "49%"}
            id="last_name"
            name="last_name"
            type="text"
            label={t("page.settings.lastName") as string}
            background={theme.color.white}
            placeholder={t("placeholder.lastName") as string}
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={
              (formik.touched.last_name && formik.errors.last_name) as boolean
            }
            error={formik.errors.last_name}
          />
        </Section>

        <Section>
          <TextInput
            width={isScreenMobile ? "100%" : "49%"}
            id="currentPhoneNumber"
            name="currentPhoneNumber"
            type="text"
            label={t("label.phone") as string}
            disabled={true}
            background={theme.color.backgroundVariant}
            value={user?.phone as string}
          />
          <TextInput
            width={isScreenMobile ? "100%" : "49%"}
            id="phone"
            name="phone"
            type="text"
            label={t("page.settings.phone") as string}
            background={theme.color.white}
            placeholder={t("placeholder.phone") as string}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={(formik.touched.phone && formik.errors.phone) as boolean}
            error={formik.errors.phone}
          />
        </Section>

        <Section>
          <TextInput
            width={isScreenMobile ? "100%" : "49%"}
            id="currentGender"
            name="currentGender"
            type="text"
            label={t("label.gender") as string}
            disabled={true}
            background={theme.color.backgroundVariant}
            value={user?.gender as string}
          />
          <SelectInput
            width={isScreenMobile ? "100%" : "49%"}
            label={t("page.settings.gender") as string}
            id="gender"
            options={genderChoices}
            placeholder={t("gender.choose")}
            background={theme.color.white}
            value={formik.values.gender}
            onChange={formik.handleChange}
          />
        </Section>

        <Section>
          <Divider onClick={() => setNewPassword(true)}>
            {t("page.settings.password")}
          </Divider>
        </Section>

        <Section>
          <Button width="100%" type="submit">
            {t("btn.save")}
          </Button>
        </Section>
      </PageContainer>
    </>
  );
};

export default SettingsPage;

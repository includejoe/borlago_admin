import { useTranslation } from "react-i18next";

import { PageContainer } from "@layouts/dashboardLayout/styles";

const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>{t("sideBar.settings")}</h1>
    </PageContainer>
  );
};

export default SettingsPage;

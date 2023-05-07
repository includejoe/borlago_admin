import { useTranslation } from "react-i18next";

import { PageContainer } from "@layouts/dashboardLayout/styles";

const WasteCollectionRequestsPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>{t("sideBar.wcr")}</h1>
    </PageContainer>
  );
};

export default WasteCollectionRequestsPage;

import { useTranslation } from "react-i18next";

import { PageContainer } from "@layouts/dashboardLayout/styles";

const CollectorsPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>{t("sideBar.collectors")}</h1>
    </PageContainer>
  );
};

export default CollectorsPage;

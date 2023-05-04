import { useTranslation } from "react-i18next";

import { PageContainer } from "@src/commonStyles";

const CollectorUnitsPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>{t("sideBar.collectorUnits")}</h1>
    </PageContainer>
  );
};

export default CollectorUnitsPage;

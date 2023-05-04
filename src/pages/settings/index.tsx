import { useTranslation } from "react-i18next";

import { PageContainer } from "@src/commonStyles";

const CollectorsPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>{t("sideBar.settings")}</h1>
    </PageContainer>
  );
};

export default CollectorsPage;

import { useTranslation } from "react-i18next";

import { PageContainer } from "@layouts/dashboardLayout/styles";

const CollectorUnitDetailPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>Collector Unit Detail</h1>
    </PageContainer>
  );
};

export default CollectorUnitDetailPage;

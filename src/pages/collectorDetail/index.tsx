import { useTranslation } from "react-i18next";

import { PageContainer } from "@layouts/dashboardLayout/styles";

const CollectorDetailPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>Collector Detail</h1>
    </PageContainer>
  );
};

export default CollectorDetailPage;

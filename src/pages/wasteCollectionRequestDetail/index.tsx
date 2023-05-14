import { useTranslation } from "react-i18next";

import { PageContainer } from "@layouts/dashboardLayout/styles";

const WasteCollectionRequestDetailPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>Waste Collection Request Detail</h1>
    </PageContainer>
  );
};

export default WasteCollectionRequestDetailPage;

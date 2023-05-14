import { useTranslation } from "react-i18next";

import { PageContainer } from "@layouts/dashboardLayout/styles";
import { Heading } from "@/src/commonStyles";

const WasteCollectionRequestsPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Heading>
        <span>{t("page.wasteCollectionRequests.type")}</span>
        <span>{t("page.wasteCollectionRequests.location")}</span>
        <span>{t("page.wasteCollectionRequests.status")}</span>
        <span>{t("page.wasteCollectionRequests.createdAt")}</span>
      </Heading>
    </PageContainer>
  );
};

export default WasteCollectionRequestsPage;

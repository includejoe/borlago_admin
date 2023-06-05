import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import borlagoapi from "@/src/api";
import { useAuthContext } from "@contexts/authContext";
import WasteCollectionRequestTile from "@components/tiles/wasteCollectionRequestTile";
import Loader from "@components/loader";
import { Heading, PageContainer } from "@/src/commonStyles";

const WasteCollectionRequestsPage = () => {
  const { t } = useTranslation();
  const { token } = useAuthContext();

  const { data, isLoading } = useQuery("wcrs", () => {
    return borlagoapi.get("/administrator/wcr/all/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  });

  return (
    <PageContainer>
      <Heading>
        <span>{t("heading.id")}</span>
        <span>{t("heading.type")}</span>
        <span>{t("heading.status")}</span>
        <span>{t("heading.createdAt")}</span>
      </Heading>
      {isLoading ? (
        <Loader size="md" />
      ) : data ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.data.map((wcr: any) => (
          <WasteCollectionRequestTile
            key={wcr.id}
            id={wcr.id}
            publicId={wcr.public_id}
            createdAt={wcr.created_at}
            status={wcr.status}
            type={wcr.waste_type}
          />
        ))
      ) : (
        <h1>{t("error.wrong")}</h1>
      )}
    </PageContainer>
  );
};

export default WasteCollectionRequestsPage;

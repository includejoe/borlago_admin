import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import borlagoapi from "@/src/api";
import { useAuthContext } from "@contexts/authContext";
import Loader from "@components/loader";
import CollectorTile from "@components/tiles/collectorTile";
import { Heading, PageContainer } from "@src/commonStyles";

const CollectorsPage = () => {
  const { t } = useTranslation();
  const { token } = useAuthContext();

  const { data, isLoading } = useQuery("collectors", () => {
    return borlagoapi.get("/administrator/collector/all/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  });

  return (
    <PageContainer>
      <Heading>
        <span>{t("page.collectors.name")}</span>
        <span>{t("page.collectors.gender")}</span>
        <span>{t("page.collectors.unit")}</span>
        <span></span>
      </Heading>
      {isLoading ? (
        <Loader size="md" />
      ) : data ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.data.map((collector: any) => (
          <CollectorTile
            key={collector.id}
            id={collector.id}
            firstName={collector.first_name}
            lastName={collector.last_name}
            gender={collector.gender}
            profilePhoto={collector.profile_photo}
            unitName={collector.collector_unit.name}
          />
        ))
      ) : (
        <h1>{t("error.wrong")}</h1>
      )}
    </PageContainer>
  );
};

export default CollectorsPage;

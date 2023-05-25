/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
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
  const [data, setData] = useState<any>(null);

  const { isLoading, error } = useQuery("collector-units", async () => {
    const { data } = await borlagoapi.get("/administrator/collector/all/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setData(data);
  });

  return (
    <PageContainer>
      <Heading>
        <span>{t("page.collectors.collectorId")}</span>
        <span>{t("page.collectors.name")}</span>
        <span>{t("page.collectors.gender")}</span>
        <span></span>
      </Heading>
      {isLoading ? (
        <Loader size="md" />
      ) : data ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.map((collector: any) => (
          <CollectorTile
            key={collector.id}
            id={collector.id}
            firstName={collector.first_name}
            lastName={collector.last_name}
            collectorId={collector?.collector_id}
            gender={collector.gender}
            profilePhoto={collector.profile_photo}
            unitName={collector?.collector_unit?.name}
          />
        ))
      ) : error ? (
        <h1>{t("error.wrong")}</h1>
      ) : null}
    </PageContainer>
  );
};

export default CollectorsPage;

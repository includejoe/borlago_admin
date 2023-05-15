import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import borlagoapi from "@/src/api";
import { useAuthContext } from "@contexts/authContext";
import CollectorUnitTile from "@components/tiles/collectorUnitTile";
import Loader from "@components/loader";
import { Heading, PageContainer } from "@src/commonStyles";

const CollectorUnitsPage = () => {
  const { t } = useTranslation();
  const { token } = useAuthContext();

  const { data, isLoading } = useQuery("collectorUnits", () => {
    return borlagoapi.get("/administrator/collector-unit/all/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  });

  return (
    <PageContainer>
      <Heading>
        <span>{t("page.collectorUnits.name")}</span>
        <span>{t("page.collectorUnits.country")}</span>
        <span>{t("page.collectorUnits.region")}</span>
        <span>{t("page.collectorUnits.available")}</span>
      </Heading>
      {isLoading ? (
        <Loader size="md" />
      ) : data ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.data.map((unit: any) => (
          <CollectorUnitTile
            key={unit.id}
            id={unit.id}
            name={unit.name}
            country={unit.country}
            region={unit.region}
            available={unit.available}
          />
        ))
      ) : (
        <h1>{t("error.wrong")}</h1>
      )}
    </PageContainer>
  );
};

export default CollectorUnitsPage;

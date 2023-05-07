import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import borlagoapi from "@/src/api";
import { useAuthContext } from "@contexts/authContext";
import { PageContainer } from "@layouts/dashboardLayout/styles";
import CollectorUnitTile from "@components/collectorUnitTile";
import Loader from "@/src/components/loader";

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
      {isLoading ? (
        <Loader size="md" />
      ) : data ? (
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

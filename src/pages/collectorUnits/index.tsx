import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";
import { useQuery } from "react-query";
import { MdCreate } from "react-icons/md";
import "react-tooltip/dist/react-tooltip.css";

import borlagoapi from "@/src/api";
import { useAuthContext } from "@contexts/authContext";
import CollectorUnitTile from "@components/tiles/collectorUnitTile";
import Loader from "@components/loader";
import { Heading, PageContainer } from "@src/commonStyles";
import { CreateCollectorUnit } from "./styles";
import UnitFilter from "@components/unitFilter";

const CollectorUnitsPage = () => {
  const { t } = useTranslation();
  const { token } = useAuthContext();
  const [data, setData] = useState([]);

  const { isLoading } = useQuery("collector-units", async () => {
    const { data } = await borlagoapi.get(
      "/administrator/collector-unit/all/",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setData(data);
  });

  return (
    <PageContainer>
      <UnitFilter setUnits={setData} />

      <Heading>
        <span>{t("page.collectorUnits.name")}</span>
        <span>{t("page.collectorUnits.country")}</span>
        <span>{t("page.collectorUnits.region")}</span>
        <span>{t("page.collectorUnits.available")}</span>
      </Heading>
      {isLoading ? (
        <Loader size="md" />
      ) : data.length > 0 ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.map((unit: any) => (
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

      <CreateCollectorUnit
        data-tooltip-id="tt-create-unit"
        data-tooltip-content={t("page.collectorUnits.createUnit") as string}
        to="/create-unit/"
      >
        <MdCreate className="icon" />
      </CreateCollectorUnit>
      <Tooltip id="tt-create-unit" />
    </PageContainer>
  );
};

export default CollectorUnitsPage;

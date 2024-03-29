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
import UnitFilter from "@/src/components/filters/unitFilter";
import CreateCollectorUnitModal from "@/src/components/modals/createCollectorUnitModal";
import { CollectorUnit } from "@/src/types/collectorUnit";

const CollectorUnitsPage = () => {
  const { t } = useTranslation();
  const { token } = useAuthContext();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [data, setData] = useState<CollectorUnit[]>([]);

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
      {showCreateModal ? (
        <CreateCollectorUnitModal
          show={showCreateModal}
          setShowModal={setShowCreateModal}
        />
      ) : null}
      <UnitFilter setUnits={setData} />

      <Heading>
        <span>{t("heading.name")}</span>
        <span>{t("heading.country")}</span>
        <span>{t("heading.region")}</span>
        <span>{t("heading.available")}</span>
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
      ) : null}

      <CreateCollectorUnit
        data-tooltip-id="tt-create-unit"
        data-tooltip-content={t("page.collectorUnits.create") as string}
        onClick={() => setShowCreateModal(true)}
      >
        <MdCreate className="icon" />
      </CreateCollectorUnit>
      <Tooltip id="tt-create-unit" />
    </PageContainer>
  );
};

export default CollectorUnitsPage;

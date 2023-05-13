import { useTranslation } from "react-i18next";

import { Wrapper, Available } from "./styles";

interface CollectorUnitTileProps {
  id: string;
  name: string;
  country: string;
  region: string;
  available: boolean;
}

const CollectorUnitTile: React.FC<CollectorUnitTileProps> = ({
  id,
  name,
  country,
  region,
  available,
}) => {
  const { t } = useTranslation();

  return (
    <Wrapper to={`/unit/${id}/`}>
      <div className="name">{name}</div>
      <div className="country">{country}</div>
      <div className="region">{region}</div>
      <Available available={available}>
        {available
          ? t("page.collectorUnits.available")
          : t("page.collectorUnits.notAvailable")}
      </Available>
    </Wrapper>
  );
};

export default CollectorUnitTile;

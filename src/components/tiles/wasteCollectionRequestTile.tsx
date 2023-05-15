import { useTranslation } from "react-i18next";
import moment from "moment";
import "moment/locale/es";
import "moment/locale/fr";

import { Wrapper, WCRStatus } from "./styles";

interface WasteCollectionRequestTileProps {
  id: string;
  type: string;
  location: string;
  status: number;
  createdAt: string;
}

const WasteCollectionRequestTile: React.FC<WasteCollectionRequestTileProps> = ({
  id,
  type,
  location,
  status,
  createdAt,
}) => {
  const { t, i18n } = useTranslation();
  const formattedDate = moment(createdAt)
    .locale(i18n.language === "en" ? "en" : "fr")
    .format("ddd, MMM DD YYYY hh:mm A")
    .toString();

  return (
    <Wrapper to={`/wcr/${id}/`}>
      <span id="name">{type}</span>
      <span>{location}</span>
      <WCRStatus status={status}>
        {status === 1
          ? t("page.wasteCollectionRequests.pending")
          : status === 2
          ? t("page.wasteCollectionRequests.inProgress")
          : status === 3
          ? t("page.wasteCollectionRequests.completed")
          : t("page.wasteCollectionRequests.canceled")}
      </WCRStatus>
      <span>{formattedDate}</span>
    </Wrapper>
  );
};

export default WasteCollectionRequestTile;

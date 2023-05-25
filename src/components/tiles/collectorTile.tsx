import Avatar from "@components/avatar";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@utils/theme";
import { Wrapper } from "./styles";

interface CollectorTileProps {
  id: string;
  firstName: string;
  lastName: string;
  collectorId: string;
  gender: string;
  profilePhoto?: string;
  unitName?: string;
}

const CollectorTile: React.FC<CollectorTileProps> = ({
  id,
  collectorId,
  firstName,
  lastName,
  profilePhoto,
  gender,
}) => {
  const theme = useTheme();
  const isScreenMobile = useMediaQuery({
    query: `(max-width: ${theme.breakPoint.lg})`,
  });

  return (
    <Wrapper to={`/collector/${id}/`}>
      <span>{collectorId}</span>
      <span>{firstName + " " + lastName}</span>
      <span>{gender}</span>
      <span
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Avatar size={isScreenMobile ? 25 : 35} imgUrl={profilePhoto} />
      </span>
    </Wrapper>
  );
};

export default CollectorTile;

import { MdCheckCircle } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

import { useTheme } from "@utils/theme";
import { Wrapper } from "./styles";

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
  const theme = useTheme();

  return (
    <Wrapper to={`/unit/${id}/`}>
      <span id="name">{name}</span>
      <span>{country}</span>
      <span>{region}</span>
      <span>
        {available ? (
          <MdCheckCircle size={18} color={theme.color.success} />
        ) : (
          <IoMdCloseCircle size={18} color={theme.color.error} />
        )}
      </span>
    </Wrapper>
  );
};

export default CollectorUnitTile;

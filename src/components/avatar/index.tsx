import { MdAccountCircle } from "react-icons/md";

import { useTheme } from "@/src/utils/theme";
import { Wrapper } from "./styles";

interface AvatarProps {
  size?: number;
  imgUrl?: string;
  color?: string;
}

const Avatar: React.FC<AvatarProps> = ({ imgUrl, size, color }) => {
  const theme = useTheme();

  const getImgUrl = (imgUrl?: string) => {
    if (imgUrl !== "" && imgUrl !== null) {
      return imgUrl;
    }

    return undefined;
  };

  return (
    <Wrapper imgUrl={getImgUrl(imgUrl)} size={size}>
      {getImgUrl(imgUrl) ? (
        <img src={imgUrl} loading="lazy" alt="" />
      ) : (
        <div className="default">
          <MdAccountCircle
            size={size ? size : 45}
            color={color ? color : theme.color.gray}
          />
        </div>
      )}
    </Wrapper>
  );
};

export default Avatar;

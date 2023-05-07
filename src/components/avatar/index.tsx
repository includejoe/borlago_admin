import { MdAccountCircle } from "react-icons/md";

import { Wrapper } from "./styles";

interface AvatarProps {
  size?: number;
  imgUrl?: string;
}

const Avatar: React.FC<AvatarProps> = ({ imgUrl, size }) => {
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
        <MdAccountCircle className="default" />
      )}
    </Wrapper>
  );
};

export default Avatar;

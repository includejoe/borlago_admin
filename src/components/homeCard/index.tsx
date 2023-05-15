import { useTranslation } from "react-i18next";
import { MdCreate, MdAdd, MdEditDocument, MdSearch } from "react-icons/md";

import { CardWrapper } from "./styles";

interface HomeCardProps {
  type: number;
  to: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ type, to }) => {
  const { t } = useTranslation();

  return (
    <CardWrapper to={to}>
      {type === 1 ? (
        <>
          <MdCreate className="icon" />
          <h2>{t("page.home.create")}</h2>
        </>
      ) : type === 2 ? (
        <>
          <MdAdd className="icon" />
          <h2>{t("page.home.add")}</h2>
        </>
      ) : type === 3 ? (
        <>
          <MdEditDocument className="icon" />
          <h2>{t("page.home.edit")}</h2>
        </>
      ) : (
        <>
          <MdSearch className="icon" />
          <h2>{t("page.home.get")}</h2>
        </>
      )}
    </CardWrapper>
  );
};

export default HomeCard;

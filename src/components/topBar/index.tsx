import { useTranslation } from "react-i18next";
import { MdMenu } from "react-icons/md";

import Avatar from "@components/avatar";
import ToggleTheme from "@components/toggleTheme";
import { useSideBarContext } from "@contexts/sideBarContext";
import { useAuthContext } from "@/src/contexts/authContext";
import { TopBarWrapper, Left, Middle, Right } from "./styles";

const TopBar = () => {
  const { t } = useTranslation();
  const { toggleSideBar } = useSideBarContext();
  const { user } = useAuthContext();

  const onMenuClick = () => {
    toggleSideBar();
  };

  return (
    <TopBarWrapper>
      <Left>
        <div className="icon-wrapper" onClick={onMenuClick}>
          <MdMenu className="icon" />
        </div>
        <div className="logo">
          <h3>BorlaGo Administrator</h3>
        </div>
      </Left>
      <Middle></Middle>
      <Right>
        <span>{t("topBar.hi", { name: user?.first_name })}</span>
        <Avatar />
        <ToggleTheme />
      </Right>
    </TopBarWrapper>
  );
};

export default TopBar;

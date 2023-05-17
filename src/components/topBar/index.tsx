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

  const currentTime: Date = new Date();
  const currentHour: number = currentTime.getHours();
  let greeting;
  if (currentHour >= 0 && currentHour < 12) {
    greeting = t("topBar.goodMorning", { name: user?.first_name });
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = t("topBar.goodAfternoon", { name: user?.first_name });
  } else {
    greeting = t("topBar.goodEvening", { name: user?.first_name });
  }

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
        <span>{greeting}</span>
        <Avatar />
        <ToggleTheme />
      </Right>
    </TopBarWrapper>
  );
};

export default TopBar;

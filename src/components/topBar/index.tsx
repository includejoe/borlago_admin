import { MdMenu } from "react-icons/md";

import Avatar from "@components/avatar";
import ToggleTheme from "@components/toggleTheme";
import { useSideBarContext } from "@contexts/sideBarContext";
import { TopBarWrapper, Left, Middle, Right } from "./styles";

const TopBar = () => {
  const { toggleSideBar } = useSideBarContext();

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
        <span>Hi, Joel</span>
        <Avatar />
        <ToggleTheme />
      </Right>
    </TopBarWrapper>
  );
};

export default TopBar;

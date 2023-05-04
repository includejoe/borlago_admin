import { MdMenu } from "react-icons/md";

import Avatar from "@components/avatar";
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
        <div className="logo"></div>
      </Left>
      <Middle></Middle>
      <Right>
        <span>Hi, Joel</span>
        <Avatar />
      </Right>
    </TopBarWrapper>
  );
};

export default TopBar;

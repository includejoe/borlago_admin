import { useSideBarContext } from "@contexts/sideBarContext";

import { SideBarWrapper } from "./styles";

const SideBar = () => {
  const { isShowing } = useSideBarContext();
  return <SideBarWrapper isShowing={isShowing}></SideBarWrapper>;
};

export default SideBar;

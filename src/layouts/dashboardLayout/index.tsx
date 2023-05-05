import SideBar from "@components/sideBar";
import TopBar from "@components/topBar";
import { useSideBarContext } from "@contexts/sideBarContext";

import { InnerContainer } from "./styles";

interface DashboardProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardProps) => {
  const { isShowing } = useSideBarContext();

  return (
    <>
      <TopBar />
      <SideBar />
      <InnerContainer isShowing={isShowing}>{children}</InnerContainer>
    </>
  );
};

export default DashboardLayout;

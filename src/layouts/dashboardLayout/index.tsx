import SideBar from "@components/sideBar";
import TopBar from "@components/topBar";
import { useSideBarContext } from "@contexts/sideBarContext";
import AuthRoute from "@utils/authRoute";
import { InnerContainer } from "./styles";

interface DashboardProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardProps) => {
  const { isShowing } = useSideBarContext();

  return (
    <AuthRoute checkAuthenticated={true}>
      <TopBar />
      <SideBar />
      <InnerContainer isShowing={isShowing}>{children}</InnerContainer>
    </AuthRoute>
  );
};

export default DashboardLayout;

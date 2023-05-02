import styled from "styled-components";

import SideBar from "@components/sideBar";
import TopBar from "@components/topBar";
import { useSideBarContext } from "@contexts/sideBarContext";

interface DashboardProps {
  children: React.ReactNode;
}

interface InnerContainerProps {
  isShowing: boolean;
}

const InnerContainer = styled.div<InnerContainerProps>`
  width: ${({ isShowing }) => (isShowing ? "80%" : "100%")};
  margin-left: ${({ isShowing }) => (isShowing ? "20%" : "0")};
  margin-top: 70px;
  background: ${({ theme }) => theme.color.background};
  transition: all 200ms ease-in-out;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    width: 100%;
    margin-left: 0;
  }
`;

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

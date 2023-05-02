import styled from "styled-components";
import SideBar from "../../components/sideBar";

interface DashboardProps {
  children: React.ReactNode;
}

const InnerContainer = styled.div`
  width: 80%;
  margin-left: 20%;
  background: ${({ theme }) => theme.color.background};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    width: 100%;
    margin-left: 0;
  }
`;

const DashboardLayout = ({ children }: DashboardProps) => {
  return (
    <>
      <SideBar />
      <InnerContainer>{children}</InnerContainer>
    </>
  );
};

export default DashboardLayout;

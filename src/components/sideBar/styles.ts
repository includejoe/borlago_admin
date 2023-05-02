import styled from "styled-components";

interface SideBarWrapperProps {
  isShowing: boolean;
}

export const SideBarWrapper = styled.div<SideBarWrapperProps>`
  width: 20%;
  height: 100vh;
  position: fixed;
  display: flex;
  background: ${({ theme }) => theme.color.backgroundVariant};
  flex-direction: column;
  align-items: center;
  justify-content: start;
  transition: all 200ms ease-in-out;
  z-index: 999;
  top: 70px;
  left: ${({ isShowing }) => (isShowing ? 0 : "-1000px")};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    left: ${({ isShowing }) => (isShowing ? 0 : "-1000px")};
    width: 50%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.sm}) {
    width: 78%;
  }
`;

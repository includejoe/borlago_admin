import styled from "styled-components";

interface SideBarContainerProps {
  isShowing: boolean;
}

export const SideBarContainer = styled.div<SideBarContainerProps>`
  width: 20%;
  height: 100vh;
  position: fixed;
  display: flex;
  background: ${({ theme }) => theme.color.background};
  flex-direction: column;
  align-items: center;
  justify-content: start;
  box-shadow: 1px 1px 5px 7px ${({ theme }) => theme.color.backgroundVariant};
  transition: all 200ms ease-in-out;
  z-index: 999;
  left: ${({ isShowing }) => (isShowing ? 0 : "-1000px")};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    left: ${({ isShowing }) => (isShowing ? 0 : "-1000px")};
    width: 50%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.sm}) {
    width: 78%;
  }
`;

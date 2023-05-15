import styled from "styled-components";

interface InnerContainerProps {
  isShowing: boolean;
}

export const InnerContainer = styled.div<InnerContainerProps>`
  width: ${({ isShowing }) => (isShowing ? "80%" : "100%")};
  margin-left: ${({ isShowing }) => (isShowing ? "20%" : "0")};
  margin-top: 60px;
  background: ${({ theme }) => theme.color.background};
  transition: all 200ms ease-in-out;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    width: 100%;
    margin-left: 0;
  }
`;

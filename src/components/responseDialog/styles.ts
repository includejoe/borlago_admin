import styled from "styled-components";

interface WrapperProps {
  show: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 500px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundVariant};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  z-index: 99;
  padding: 10px;
  position: fixed;
  color: ${({ theme }) => theme.fontColor.primary};
  bottom: 20px;
  left: ${({ show }) => (show ? "40px" : "-1000px")};
  transition: all 200ms ease-in-out;

  .icon {
    font-size: 25px;
    margin-right: 20px;
  }

  .error {
    color: ${({ theme }) => theme.color.error};
  }

  .success {
    color: ${({ theme }) => theme.color.success};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.lg}) {
    width: 300px;
    font-size: 13px;
  }
`;

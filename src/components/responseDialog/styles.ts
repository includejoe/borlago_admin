import styled from "styled-components";

interface WrapperProps {
  show: boolean;
  error: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, error }) =>
    error ? theme.color.errorVariant : theme.color.successVariant};
  border: ${({ theme, error }) =>
    error
      ? `1px solid ${theme.color.error}`
      : `1px solid ${theme.color.success}`};
  border-radius: 5px;
  z-index: 99;
  padding: 10px;
  position: fixed;
  bottom: 20px;
  left: ${({ show }) => (show ? "50px" : "-1000px")};
  transition: all 200ms ease-in-out;

  .icon {
    font-size: 25px;
  }

  .error {
    color: ${({ theme }) => theme.color.error};
    cursor: pointer;
  }

  .close {
    color: ${({ theme }) => theme.color.error};
    cursor: pointer;
  }

  .success {
    color: ${({ theme }) => theme.color.success};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.lg}) {
    width: 300px;
  }
`;

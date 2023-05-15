import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  size?: string;
}

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div<Props>`
  width: ${({ size }) =>
    size === "sm"
      ? "25px"
      : size === "md"
      ? "40px"
      : size === "lg"
      ? "100px"
      : "60px"};
  height: ${({ size }) =>
    size === "sm"
      ? "25px"
      : size === "md"
      ? "40px"
      : size === "lg"
      ? "100px"
      : "60px"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: ${({ size, theme }) =>
    size === "sm"
      ? `2px solid ${theme.color.primaryVariant}`
      : size === "md"
      ? `3px solid ${theme.color.primaryVariant}`
      : size === "lg"
      ? `8px solid ${theme.color.primaryVariant}`
      : `5px solid ${theme.color.primaryVariant}`};
  border-top-color: ${({ theme }) => theme.color.primary};
  animation: ${spin} 1s infinite;
  padding: auto;
`;

const Loader: React.FC<Props> = ({ size }) => {
  return (
    <Container>
      <Spinner size={size} />
    </Container>
  );
};

export default Loader;

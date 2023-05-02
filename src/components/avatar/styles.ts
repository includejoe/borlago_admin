import styled from "styled-components";

interface WrapperProps {
  size?: number;
  imgUrl?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size ? size + "px" : "45px")};
  height: ${({ size }) => (size ? size + "px" : "45px")};
  border-radius: 50%;

  img {
    display: ${({ imgUrl }) => (!imgUrl ? "block" : "none")};
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .default {
    display: ${({ imgUrl }) => (imgUrl ? "none" : "flex")};
  }
`;

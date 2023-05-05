import styled from "styled-components";

interface ButtonProps {
  color?: string;
  fontColor?: string;
  width?: string;
  height?: string;
  cursor?: string;
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  border: none;
  background: ${({ theme, color }) => (color ? color : theme.color.primary)};
  border-radius: 5px;
  cursor: ${({ cursor }) => (cursor ? cursor : "pointer")};
  width: ${({ width }) => (width ? width : "150px")};
  height: ${({ height }) => (height ? height : "45px")};
  color: ${({ fontColor }) => (fontColor ? fontColor : "#ffffff")};
  font-weight: 500;
  transition: 0.35s all ease-in-out;
`;

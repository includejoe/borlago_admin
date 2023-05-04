import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardWrapper = styled(NavLink)`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.primaryVariant};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-in-out;
  margin: 15px;

  h2 {
    color: ${({ theme }) => theme.fontColor.primary};
    margin-top: 10px;
    font-size: 18px;
  }

  .icon {
    font-size: 50px;
    color: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    filter: brightness(0.7);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    width: 300px;
    height: 250px;
  }
`;

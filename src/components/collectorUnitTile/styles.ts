import styled from "styled-components";
import { Link } from "react-router-dom";

interface AvailableProps {
  available: boolean;
}

export const Wrapper = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.backgroundVariant};
  border-bottom: 1px solid ${({ theme }) => theme.color.background};
  transition: 200ms all ease-in-out;

  .name {
    width: 25%;
    color: ${({ theme }) => theme.color.primary};
    font-weight: 600;
  }

  .country {
    width: 25%;
    color: ${({ theme }) => theme.fontColor.primary};
  }

  .region {
    width: 25%;
    color: ${({ theme }) => theme.fontColor.primary};
  }

  .available {
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryVariant};
  }

  &:first-of-type {
    border-radius: 5px 5px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 5px 5px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    .name {
      font-size: 13px;
    }

    .country {
      font-size: 13px;
    }

    .region {
      font-size: 13px;
    }

    .available {
      font-size: 13px;
    }
  }
`;

export const Available = styled.div<AvailableProps>`
  width: 25%;
  color: ${({ theme, available }) =>
    available ? theme.color.success : theme.color.error};
  font-weight: 600;
  text-align: end;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    font-size: 13px;
  }
`;

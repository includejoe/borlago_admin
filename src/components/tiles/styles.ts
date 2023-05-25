import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.fontColor.primary};
  background-color: ${({ theme }) => theme.color.backgroundVariant};
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  span {
    width: 25%;
  }

  span:first-of-type {
    color: ${({ theme }) => theme.color.primary};
    font-weight: 600;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryVariant};
  }

  &:last-of-type {
    border-radius: 0 0 5px 5px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    min-height: 40px;

    span:last-of-type {
      text-align: center;
    }

    span {
      font-size: 12px;
    }
  }
`;

interface WCRStatusProps {
  status: number;
}

export const WCRStatus = styled.span<WCRStatusProps>`
  color: ${({ status, theme }) =>
    status === 1
      ? theme.fontColor.secondary
      : status === 2
      ? "#f76d31"
      : status === 3
      ? theme.color.success
      : theme.color.error};
`;

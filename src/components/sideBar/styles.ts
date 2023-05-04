import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface SideBarWrapperProps {
  isShowing: boolean;
}

export const SideBarWrapper = styled.div<SideBarWrapperProps>`
  width: 20%;
  height: calc(100vh - 60px);
  position: fixed;
  display: flex;
  background: ${({ theme }) => theme.color.backgroundVariant};
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  justify-content: start;
  transition: all 200ms ease-in-out;
  z-index: 999;
  top: 60px;
  left: ${({ isShowing }) => (isShowing ? 0 : "-1000px")};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    left: ${({ isShowing }) => (isShowing ? 0 : "-1000px")};
    width: 50%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.sm}) {
    width: 78%;
  }
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  li {
    width: 100%;
  }

  li:last-of-type {
    position: absolute;
    bottom: 0;
  }
`;

export const Link = styled(NavLink)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 18px, 0;
  padding-left: 35px;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor.secondary};
  border-radius: 5px;
  transition: all 200ms ease-in-out;

  .icon {
    margin-right: 25px;
    color: ${({ theme }) => theme.fontColor.secondary};
    font-size: 28px;
  }

  &:hover {
    background: ${({ theme }) => theme.color.primaryVariant};
  }

  &.active {
    background: ${({ theme }) => theme.color.primaryVariant};
    color: ${({ theme }) => theme.fontColor.primary};
    font-weight: 600;

    .icon {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.sm}) {
    padding-left: 25px;
    font-size: 14px;
    height: 55px;
  }
`;

export const Logout = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 18px, 0;
  padding-left: 35px;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor.secondary};
  transition: all 200ms ease-in-out;

  .icon {
    margin-right: 25px;
    color: ${({ theme }) => theme.color.error};
    font-size: 25px;
  }

  &:hover {
    background: rgba(186, 0, 0, 0.2);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.sm}) {
    padding-left: 25px;
    font-size: 14px;
    height: 55px;
  }
`;

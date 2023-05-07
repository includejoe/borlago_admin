import styled from "styled-components";

export const TopBarWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: ${({ theme }) => theme.color.backgroundVariant};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.color.gray};
  top: 0;
  display: flex;
  align-items: center;
  z-index: 1000;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  .icon-wrapper {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.fontColor.black};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 20px;

    .icon {
      font-size: 23px;
    }
  }

  .logo {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.primary};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    h3 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    .logo {
      display: none;
    }
  }
`;

export const Middle = styled.div``;

export const Right = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  span {
    margin-right: 15px;
    color: ${({ theme }) => theme.fontColor.primary};
    font-weight: 600;
  }
`;

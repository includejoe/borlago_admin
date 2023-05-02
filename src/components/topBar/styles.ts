import styled from "styled-components";

export const TopBarWrapper = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  background: ${({ theme }) => theme.color.gray};
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const Left = styled.div`
  display: flex;

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.backgroundVariant};
    color: ${({ theme }) => theme.fontColor.black};
    display: flex;
    align-items: center;
    font-size: 25px;
    justify-content: center;
    cursor: pointer;
    margin-right: 20px;
  }

  .logo {
    width: 200px;
    height: 50px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.black};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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

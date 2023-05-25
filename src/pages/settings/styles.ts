import styled from "styled-components";

export const PageContainer = styled.form`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  transition: all 200ms ease-in-out;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    padding: 20px;
  }
`;

export const Section = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    padding: 0 10px;
    flex-wrap: wrap;
    margin: 15px 0;
    justify-content: center;
  }
`;

export const Divider = styled.div`
  width: 100%;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 50px;
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
`;

export const ProfilePhoto = styled.div`
  width: 300px;
  height: 300px;
  margin-bottom: 30px;
  position: relative;
  background: ${({ theme }) => theme.color.backgroundVariant};
  border-radius: 50%;
  display: flex;
  transition: 200ms all ease-in-out;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  input {
    display: none;
  }

  label {
    position: absolute;
    bottom: 5px;
    right: 30px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.color.primary};
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.color.background};
    transition: 200ms all ease-in-out;
    cursor: pointer;
  }

  .icon {
    font-size: 300px;
    color: ${({ theme }) => theme.fontColor.secondary};
  }
`;

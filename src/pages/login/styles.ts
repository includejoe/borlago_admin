import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  transition: all 200ms ease-in-out;
`;

export const Dividend = styled.div`
  height: 100%;
  width: 35%;
  background-color: ${({ theme }) => theme.color.white};

  &:last-of-type {
    width: 65%;
    background-color: ${({ theme }) => theme.color.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.lg}) {
    width: 100%;

    &:last-of-type {
      display: none;
    }
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 15%;

  .greeting {
    width: 100%;
    margin-bottom: 30px;
    line-height: 1.5;
    text-align: start;
    font-weight: 600;

    h1 {
      font-size: 35px;
    }

    h3 {
      color: ${({ theme }) => theme.fontColor.secondary};
      font-weight: 500;
    }
  }

  .actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    a {
      color: ${({ theme }) => theme.color.primary};
      font-weight: 500;
      font-size: 13px;
    }
  }

  .stay-logged-in {
    color: ${({ theme }) => theme.color.primary};
    display: flex;

    input {
      cursor: pointer;
      margin-right: 5px;
    }

    label {
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.lg}) {
    padding: 0 8%;
  }
`;

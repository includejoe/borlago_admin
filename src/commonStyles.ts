import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    padding: 15px;
  }
`;

export const Heading = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.backgroundVariant};
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 5px 5px 0 0;

  span {
    width: 25%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    height: 40px;

    span {
      font-size: 12px;
    }

    span:last-of-type {
      text-align: center;
    }
  }
`;

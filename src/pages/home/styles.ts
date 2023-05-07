import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  transition: all 200ms ease-in-out;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 70px;
  margin-bottom: 50px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.lg}) {
    padding: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoint.md}) {
    padding: 0;
    margin-bottom: 0;
  }
`;

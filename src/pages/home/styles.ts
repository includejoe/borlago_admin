import styled from "styled-components";

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

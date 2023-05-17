import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.backgroundVariant};

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.lg}) {
    padding: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .icon {
    font-size: 25px;
    margin-right: 10px;
  }

  h1 {
    font-size: 17px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.lg}) {
    h1 {
      font-size: 15px;
    }

    .icon {
      font-size: 23px;
    }
  }
`;

export const Properties = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .details {
    width: 100%;
    display: flex;
  }

  .main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Name = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 30px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  span:first-of-type {
    width: 100px;
    font-weight: 600;
    margin-right: 15px;
  }
`;

export const CurrentLocation = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  p {
    font-weight: 600;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.sm}) {
    width: 100%;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.color.primaryVariant};
  border-radius: 5px;
`;

export const Collectors = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;

  .button-area {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  p {
    font-weight: 600;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.sm}) {
    width: 100%;
  }
`;

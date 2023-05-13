import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 300px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  z-index: 10;
  padding: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .message-text {
    text-align: center;
    margin-bottom: 3em;
    font-weight: 500;
  }

  .buttons-area {
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.sm}) {
    width: 350px;
    height: 250px;
    padding: 30px;

    .buttons-area {
      width: 100%;
    }
  }
`;

export const FormWrapper = styled.form`
  width: 48%;
  height: 70%;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  z-index: 10;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.md}) {
    width: 90%;
  }
`;

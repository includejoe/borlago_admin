import styled from "styled-components";

export const CreateCollectorUnit = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  z-index: 99;

  .icon {
    font-size: 27px;
    color: #ffffff;
  }
`;

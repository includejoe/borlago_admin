import styled from "styled-components";

export const InputArea = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 15px;

  label {
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.color.error};
    font-weight: 600;
    font-size: 10px;
    margin: 0;
    width: 100%;
  }
`;

export const InputField = styled.input`
  height: 45px;
  width: 100%;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.background};
  border-radius: 5px;
  padding: 0 20px;
  outline: none;
  transition: all 200ms ease-in;

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;

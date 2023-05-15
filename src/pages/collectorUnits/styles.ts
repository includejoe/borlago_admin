import { Link } from "react-router-dom";
import styled from "styled-components";

export const CreateCollectorUnit = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;

  .icon {
    font-size: 27px;
    color: #ffffff;
  }
`;

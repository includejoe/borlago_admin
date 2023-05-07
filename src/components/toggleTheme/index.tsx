import styled from "styled-components";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useThemeContext } from "@contexts/themeContext";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;

  .icon {
    font-size: 35px;
    color: ${({ theme }) => theme.fontColor.secondary};
  }
`;

const ToggleTheme = () => {
  const { toggleTheme, isDark } = useThemeContext();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <Wrapper onClick={handleClick}>
      {isDark ? (
        <MdLightMode className="icon" />
      ) : (
        <MdDarkMode className="icon" />
      )}
    </Wrapper>
  );
};
export default ToggleTheme;

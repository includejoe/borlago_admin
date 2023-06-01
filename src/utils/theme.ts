import { createGlobalStyle } from "styled-components";

import { useThemeContext } from "@contexts/themeContext";
import { Theme } from "@src/types/theme";

const breakPoint: Theme["breakPoint"] = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

// colors
const primaryColor = "#d16e11";
const primaryVariantColor = "#d16e1147";
const secondaryColor = "#940a28";
const secondaryColorVariant = "#940a2857";

export const light: Theme = {
  isDark: false,
  breakPoint,
  fontColor: {
    primary: "#000000",
    secondary: "#525252",
  },
  color: {
    primary: primaryColor,
    primaryVariant: primaryVariantColor,
    secondary: secondaryColor,
    secondaryVariant: secondaryColorVariant,
    background: "#e6e6e6",
    backgroundVariant: "#F4F4F6",
    error: "#ba0000",
    errorVariant: "rgba(186, 0, 0, 0.2)",
    success: "#02a836",
    successVariant: "#02a83760",
    gray: "#a1a1a1",
    white: "#ffffff",
    black: "#000000",
  },
};

export const dark: Theme = {
  isDark: true,
  breakPoint,
  fontColor: {
    primary: "#FFFFFF",
    secondary: "#e3e3e3",
  },
  color: {
    primary: primaryColor,
    primaryVariant: primaryVariantColor,
    secondary: secondaryColor,
    secondaryVariant: secondaryColorVariant,
    background: "#010100",
    backgroundVariant: "#121212",
    error: "#ED374D",
    errorVariant: "rgba(186, 0, 0, 0.2)",
    success: "#17cf50",
    successVariant: "#02a83760",
    gray: "#383838",
    white: "#171717",
    black: "#FFFFFF",
  },
};

interface IGlobalStylesProps {
  theme: Theme;
}

export const useTheme = () => {
  const { isDark } = useThemeContext();

  return isDark ? dark : light;
};

export const GlobalStyles = createGlobalStyle<IGlobalStylesProps>`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-size: 15px;
      font-family: -apple-system, BlinkMacSystemFont, "Poppins", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
      width: 0;
  }

  body {
      background-color: ${({ theme }) => theme.color.background};
      color: ${({ theme }) => theme.color.black}
  }
`;

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
const primaryColor = "#421ed4";
const primaryColorVariant = "#421ed437";
const secondaryColor = "#8a4699";

export const light: Theme = {
  breakPoint,
  fontColor: {
    primary: "#000000", // done
    secondary: "#525252", // done
  },
  color: {
    primary: primaryColor, // done
    primaryVariant: primaryColorVariant, // done
    secondary: secondaryColor, // done
    secondaryVariant: "#e6b802",
    background: "#d4d4d4", // done
    backgroundVariant: "#F4F4F6", // done
    error: "#ba0000", // done
    gray: "#a1a1a1", // done
    white: "#ffffff", // done
    black: "#000000", // done
  },
};

export const dark: Theme = {
  breakPoint,
  fontColor: {
    primary: "#FFFFFF", // done
    secondary: "#e3e3e3", // done
  },
  color: {
    primary: primaryColor, // done
    primaryVariant: primaryColorVariant, // done
    secondary: secondaryColor, // done
    secondaryVariant: "#e6b802",
    background: "#2e2e2e", // done
    backgroundVariant: "#202124", // done
    error: "#ED374D", // done
    gray: "#383838", // done
    white: "#171717", // done
    black: "#FFFFFF", // done
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

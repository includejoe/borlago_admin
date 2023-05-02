import { createGlobalStyle } from "styled-components";

interface ITheme {
  breakPoint: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  fontColor: {
    primary: string;
    secondary: string;
  };
  color: {
    primary: string;
    primaryVariant: string;
    secondary: string;
    secondaryVariant: string;
    background: string;
    error: string;
    gray: string;
    white: string;
    black: string;
  };
}

const breakPoint: ITheme["breakPoint"] = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

const primaryColor = "#421ed4";
const secondaryColor = "#d41e3f";

export const light: ITheme = {
  breakPoint,
  fontColor: {
    primary: "#000000", // done
    secondary: "#525252", // done
  },
  color: {
    primary: primaryColor, // done
    primaryVariant: "rgba(53, 189, 14, 0.2)",
    secondary: secondaryColor, // done
    secondaryVariant: "#e6b802",
    background: "#F4F4F6", // done
    error: "#ba0000", // done
    gray: "#a1a1a1", // done
    white: "#ffffff", // done
    black: "#000000", // done
  },
};

export const dark: ITheme = {
  breakPoint,
  fontColor: {
    primary: "#FFFFFF", // done
    secondary: "#e3e3e3", // done
  },
  color: {
    primary: primaryColor, // done
    primaryVariant: "rgba(53, 189, 14, 0.2)",
    secondary: secondaryColor, // done
    secondaryVariant: "#e6b802",
    background: "#202124", // done
    error: "#ED374D", // done
    gray: "#a1a1a1", // done
    white: "#171717", // done
    black: "#FFFFFF", // done
  },
};

interface IGlobalStylesProps {
  theme: ITheme;
}

export const GlobalStyles = createGlobalStyle<IGlobalStylesProps>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
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

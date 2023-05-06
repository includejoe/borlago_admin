export type Theme = {
  isDark: boolean;
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
    backgroundVariant: string;
    error: string;
    errorVariant: string;
    success: string;
    successVariant: string;
    gray: string;
    white: string;
    black: string;
  };
};

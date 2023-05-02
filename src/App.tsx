import { ThemeProvider } from "styled-components";

import { light, dark, GlobalStyles } from "./utils/theme";
import { useThemeContext } from "./contexts/ThemeContext";

const App: React.FC = () => {
  const { isDark, toggleTheme } = useThemeContext();

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyles />
      <h1>BorlaGo Administrator Dashboard</h1>
      <button onClick={changeTheme}>Change Theme</button>
    </ThemeProvider>
  );
};

export default App;

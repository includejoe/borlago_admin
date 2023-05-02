import { ThemeProvider } from "styled-components";

import { light, dark, GlobalStyles } from "./utils/theme";

const App: React.FC = () => {
  const isDark = false;

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyles />
      <h1>BorlaGo Administrator Dashboard</h1>
    </ThemeProvider>
  );
};

export default App;

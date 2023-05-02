import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

import { light, dark, GlobalStyles } from "./utils/theme";
import { useThemeContext } from "./contexts/themeContext";

// layouts
import DashboardLayout from "./layouts/dashboardLayout";

// pages
import LoginPage from "./pages/login";
import HomePage from "./pages/home";

const App: React.FC = () => {
  const { isDark } = useThemeContext();

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <HomePage />
            </DashboardLayout>
          }
        />
        <Route path="/login/" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

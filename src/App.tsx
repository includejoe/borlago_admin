import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

import { light, dark, GlobalStyles } from "@utils/theme";
import { useThemeContext } from "@contexts/themeContext";
import { SideBarContextProvider } from "@contexts/sideBarContext";
import DashboardLayout from "@layouts/dashboardLayout";

// pages
import LoginPage from "@pages/login";
import HomePage from "@pages/home";
import CollectorsPage from "@pages/collectors";
import CollectorUnitsPage from "@pages/collectorUnits";
import SettingsPage from "@pages/settings";

const App: React.FC = () => {
  const { isDark } = useThemeContext();

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyles />
      <SideBarContextProvider>
        <Routes>
          <Route path="/login/" element={<LoginPage />} />

          <Route
            path="/"
            element={
              <DashboardLayout>
                <HomePage />
              </DashboardLayout>
            }
          />

          <Route
            path="/collectors/"
            element={
              <DashboardLayout>
                <CollectorsPage />
              </DashboardLayout>
            }
          />

          <Route
            path="/collector-units/"
            element={
              <DashboardLayout>
                <CollectorUnitsPage />
              </DashboardLayout>
            }
          />

          <Route
            path="/settings/"
            element={
              <DashboardLayout>
                <SettingsPage />
              </DashboardLayout>
            }
          />
        </Routes>
      </SideBarContextProvider>
    </ThemeProvider>
  );
};

export default App;

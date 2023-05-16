import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

import { light, dark, GlobalStyles } from "@utils/theme";
import AuthRoute from "@utils/authRoute";
import { useThemeContext } from "@contexts/themeContext";
import { SideBarContextProvider } from "@contexts/sideBarContext";
import DashboardLayout from "@layouts/dashboardLayout";

// pages
import LoginPage from "@pages/login";
import CreateCollectorUnitPage from "@pages/createCollectorUnit";
import CollectorsPage from "@pages/collectors";
import CollectorUnitsPage from "@pages/collectorUnits";
import CollectorUnitDetailPage from "@pages/collectorUnitDetail";
import CollectorDetailPage from "@pages/collectorDetail";
import WasteCollectionRequestsPage from "@pages/wasteCollectionRequests";
import WasteCollectionRequestDetailPage from "@pages/wasteCollectionRequestDetail";
import SettingsPage from "@pages/settings";

// TODO: re-edit response dialogue
// TODO: create collector unit page
// TODO: save profile image to storage bucket
// TODO: make update user details request
// TODO: + all detail pages
// TODO: + back button to all detail pages

const App: React.FC = () => {
  const { isDark } = useThemeContext();

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyles />
      <SideBarContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute checkAuthenticated={false}>
                <LoginPage />
              </AuthRoute>
            }
          />

          <Route
            path="/create-unit/"
            element={
              <DashboardLayout>
                <CreateCollectorUnitPage />
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
            path="/units/"
            element={
              <DashboardLayout>
                <CollectorUnitsPage />
              </DashboardLayout>
            }
          />

          <Route
            path="/collector/:id/"
            element={
              <DashboardLayout>
                <CollectorDetailPage />
              </DashboardLayout>
            }
          />

          <Route
            path="/unit/:id/"
            element={
              <DashboardLayout>
                <CollectorUnitDetailPage />
              </DashboardLayout>
            }
          />

          <Route
            path="/wcrs/"
            element={
              <DashboardLayout>
                <WasteCollectionRequestsPage />
              </DashboardLayout>
            }
          />

          <Route
            path="/wcr/:id/"
            element={
              <DashboardLayout>
                <WasteCollectionRequestDetailPage />
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

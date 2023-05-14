import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

import { light, dark, GlobalStyles } from "@utils/theme";
import AuthRoute from "@utils/authRoute";
import { useThemeContext } from "@contexts/themeContext";
import { SideBarContextProvider } from "@contexts/sideBarContext";
import DashboardLayout from "@layouts/dashboardLayout";

// pages
import LoginPage from "@pages/login";
import HomePage from "@pages/home";
import CollectorsPage from "@pages/collectors";
import CollectorUnitsPage from "@pages/collectorUnits";
import CollectorUnitDetailPage from "@pages/collectorUnitDetail";
import CollectorDetailPage from "@pages/collectorDetail";
import WasteCollectionRequestsPage from "@pages/wasteCollectionRequests";
import WasteCollectionRequestDetailPage from "@pages/wasteCollectionRequestDetail";
import SettingsPage from "@pages/settings";

// TODO: save profile image to storage bucket
// TODO: make update user details request
// TODO: collector unit header filter
// TODO: create collector unit page
// TODO: add back button to all detail pages
// TODO: collector unit detail page
// TODO: collectors page
// TODO: collector detail page

const App: React.FC = () => {
  const { isDark } = useThemeContext();

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <GlobalStyles />
      <SideBarContextProvider>
        <Routes>
          <Route
            path="/login/"
            element={
              <AuthRoute checkAuthenticated={false}>
                <LoginPage />
              </AuthRoute>
            }
          />

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
            path="/wcr/"
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

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "@utils/i18n";
import App from "@src/App.tsx";
import { ThemeContextProvider } from "@contexts/themeContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={"Loading..."}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </QueryClientProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

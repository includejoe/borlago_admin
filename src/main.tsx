import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@utils/i18n";
import App from "@src/App.tsx";
import { ThemeContextProvider } from "@contexts/themeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Suspense fallback={"Loading..."}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </ThemeContextProvider>
  </React.StrictMode>
);

import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "app/providers/ThemeProvider";

import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

const domNode = document.getElementById("root");

if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
} else {
  console.error("element #root not found");
}

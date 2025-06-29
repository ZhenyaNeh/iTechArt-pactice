import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvidor from "./theme/ThemeProvidor";

const domNode = document.getElementById("root");

if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <BrowserRouter>
      <ThemeProvidor>
        <App />
      </ThemeProvidor>
    </BrowserRouter>
  );
} else {
  console.error("element #root not found");
}

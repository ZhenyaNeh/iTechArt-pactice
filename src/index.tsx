import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter";

const domNode = document.getElementById("root");

if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <div>
      <Counter />
    </div>
  );
} else {
  console.error("element #root not found");
}

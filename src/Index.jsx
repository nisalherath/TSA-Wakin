import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./screens/HomePage/HomePage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);

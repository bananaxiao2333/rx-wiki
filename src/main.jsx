import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/inter";
import { CssBaseline } from "@mui/joy";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </StrictMode>
);

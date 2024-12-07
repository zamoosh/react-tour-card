import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.tsx";
import "./assets/fontawesome-pro/css/fontawesome.css";
import "./assets/fontawesome-pro/css/regular.css";
import "./assets/fontawesome-pro/css/thin.css";
import "./assets/fontawesome-pro/css/solid.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);

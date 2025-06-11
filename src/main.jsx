import * as React from "react";
import "@fontsource/inter";
import { Box, CssBaseline, CssVarsProvider } from "@mui/joy";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Data.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import loadMdxFiles from "./utils/DataManage";
import App from "./App.jsx";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";

//TODO: change black to grey black background theme

const root = new createRoot(document.getElementById("root"));
export function Main() {
  const componentRef = React.useRef(null);
  const reactToPrintFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "AwesomeFileName",
  });
  return (
    <StrictMode>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <Box sx={{ display: "flex", minHeight: "100dvh" }}>
          <Sidebar reactToPrintFn={reactToPrintFn} />
          <Topbar />
          <Box
            component="main"
            className="MainContent"
            sx={{
              overflow: "auto",
            }}
          >
            <div
              ref={componentRef}
              style={{
                padding: 30,
                pt: { xs: "calc(12px + var(--Header-height))", md: 3 },
                pb: { xs: 2, sm: 2, md: 3 },
                flex: 1,
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                height: "100dvh",
                gap: 1,
                backgroundImage: "url('/rwn-bg.svg')",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            >
              <App />
            </div>
          </Box>
        </Box>
      </CssVarsProvider>
    </StrictMode>
  );
}

root.render(<Main />);

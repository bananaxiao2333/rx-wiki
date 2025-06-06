import "@fontsource/inter";
import { Box, CssBaseline, CssVarsProvider } from "@mui/joy";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Data.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import loadMdxFiles from "./utils/DataManage";
import App from "./App.jsx";

//TODO: change black to grey black background theme

export function Prepair() {
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    const fetchFiles = async () => {
      const data = await loadMdxFiles();
      setFiles(data);
    };

    fetchFiles();
  }, []);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Sidebar />
        <Topbar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            pt: { xs: "calc(12px + var(--Header-height))", md: 3 },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100dvh",
            gap: 1,
            overflow: "auto",
            padding: 3,
            backgroundImage: "url('/rwn-bg.svg')",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <App />
        </Box>
      </Box>
    </CssVarsProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/inter";
import { Box, CssBaseline, Typography } from "@mui/joy";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RouterBreadcrumbs from "./components/Path.jsx";
import HomeHero from "./components/HomeHero.jsx";
import About from "./About.jsx";
import setupI18n from "./Data.jsx";
//TODO: change black to grey black background theme
setupI18n();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline>
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Sidebar />
        <Topbar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: "calc(12px + var(--Header-height))",
              sm: "calc(12px + var(--Header-height))",
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100dvh",
            gap: 1,
          }}
        >
          <HashRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Box>
                    <RouterBreadcrumbs />
                    <HomeHero />
                  </Box>
                }
              />
              <Route
                path="/about"
                element={
                  <Box>
                    <RouterBreadcrumbs />
                    <About />
                  </Box>
                }
              />
              <Route path="/siteIndex" element={<RouterBreadcrumbs />} />
              <Route
                path="/*"
                element={
                  <Box>
                    <Typography level="h1" sx={{ fontSize: "10" }}>
                      404 Page Not Found
                    </Typography>
                    <Typography sx={{ fontSize: "10" }}>
                      This page does not exist. You may need to go back to the
                      homepage.
                    </Typography>
                  </Box>
                }
              />
            </Routes>
          </HashRouter>
        </Box>
      </Box>
    </CssBaseline>
  </StrictMode>
);

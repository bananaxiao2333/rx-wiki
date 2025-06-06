import { Box, CircularProgress, Sheet, Typography } from "@mui/joy";
import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import HomeHero from "./components/HomeHero";
import RouterBreadcrumbs from "./components/Path";
import NotFoundPage from "./NotFoundPage";
import SiteIndexPage from "./SiteIndex";
import { MDXProvider } from "@mdx-js/react";
import { useTranslation } from "react-i18next";

import { loadMdxFiles, parseMdxFilesBrowser } from "./utils/DataManage";

const components = {
  h1: (props) => <Typography level="h1" {...props} />,
  h2: (props) => <Typography level="h2" {...props} />,
  h3: (props) => <Typography level="h3" {...props} />,
  h4: (props) => <Typography level="h4" {...props} />,
  p: (props) => <Typography level="body-md" {...props} />,
  a: (props) => <Typography component="a" {...props} color="primary" />,
  pre: (props) => (
    <Box component="pre" {...props} sx={{ borderRadius: "sm" }} />
  ),
  code: (props) => <Box component="code" {...props} />,
};

export const ContentRenderer = ({ contentPath }) => {
  const { t, i18n } = useTranslation();
  const Content = React.lazy(() => import(`/content/${contentPath}`));
  const [lang] = i18n.resolvedLanguage;

  return (
    <MDXProvider components={components} key={lang}>
      <React.Suspense
        fallback={
          <Box display="flex" justifyContent="center" py={5}>
            <CircularProgress />
          </Box>
        }
      >
        <Content />
      </React.Suspense>
    </MDXProvider>
  );
};

function App() {
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    const fetchFiles = async () => {
      const mdxFiles = await loadMdxFiles();

      // 2. 解析文件
      const parsedFiles = await parseMdxFilesBrowser(mdxFiles);

      // 3. 验证数据类型
      if (!Array.isArray(parsedFiles)) {
        throw new Error("解析后数据不是数组");
      }

      // 4. 过滤草稿
      const publishedFiles = parsedFiles.filter(
        (file) => file.frontmatter.draft !== true
      );
      setFiles(publishedFiles);
    };

    fetchFiles();
  }, []);

  return (
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
        <Route
          path="/siteIndex"
          element={
            <Box>
              <RouterBreadcrumbs />
              <SiteIndexPage />
            </Box>
          }
        />

        {files.map((file, index) => (
          <Route
            path={("/" + file.path).replace(".mdx", "")}
            element={
              <Box>
                <RouterBreadcrumbs />
                <ContentRenderer contentPath={file.path} />
              </Box>
            }
          />
        ))}

        <Route
          path="/*"
          element={
            <Box>
              <RouterBreadcrumbs />
              <NotFoundPage />
            </Box>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;

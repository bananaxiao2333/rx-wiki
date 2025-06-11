import { Box, CircularProgress, Sheet, Skeleton, Typography } from "@mui/joy";
import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import HomeHero from "./components/HomeHero";
import RouterBreadcrumbs from "./components/Path";
import NotFoundPage from "./NotFoundPage";
import SiteIndexPage from "./SiteIndex";
import { MDXProvider } from "@mdx-js/react";
import { useTranslation } from "react-i18next";
const contentModules = import.meta.glob("./content/**/*.mdx", { eager: false });

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
  const [Component, setComponent] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // 重置状态
    setError(null);
    setLoading(true);
    setComponent(null);

    // 规范路径：移除可能的扩展名
    const normalizedContentPath = contentPath.replace(/\.(mdx|md)$/, "");
    const fullPath = `./content/${normalizedContentPath}.mdx`;

    if (contentModules[fullPath]) {
      // 调用函数返回Promise，然后处理
      contentModules[fullPath]()
        .then((module) => {
          if (module.default) {
            setComponent(() => module.default);
          } else {
            throw new Error("MDX file has no default export");
          }
        })
        .catch((err) => {
          setError({
            type: "load-error",
            message: t("load_error"),
            details: err.message,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setError({
        type: "not-found",
        message: t("not_found_error"),
        details: t("not_found_detail", { path: fullPath }),
      });
    }
  }, [contentPath, t]);
  const [lang] = i18n.resolvedLanguage;

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" py={5}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <MDXProvider components={components} key={lang}>
      <Component />
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

  const componentRef = React.useRef(null);

  return (
    <div ref={componentRef}>
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
                  <ContentRenderer
                    contentPath={file.path.replace(".mdx", "")}
                  />
                </Box>
              }
            />
          ))}

          <Route
            path="/*"
            element={
              <Box>
                <NotFoundPage />
              </Box>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

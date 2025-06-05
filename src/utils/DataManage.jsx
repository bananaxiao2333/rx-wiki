// src/utils/loadMdxFiles.js
export const loadMdxFiles = async () => {
  const mdxModules = import.meta.glob("../content/**/*.mdx", {
    query: "?raw",
    import: "default",
  });

  return Promise.all(
    Object.entries(mdxModules).map(async ([filePath, getContent]) => ({
      path: filePath.replace("../content/", ""),
      rawContent: await getContent(),
    }))
  );
};

export default loadMdxFiles;

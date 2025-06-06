import jsYaml from "js-yaml";
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

/**
 * 浏览器友好的 MDX 解析器
 * @param {string} rawContent - MDX 原始内容
 * @returns {{ content: string, frontmatter: Record<string, any> }}
 */
export const parseMdxBrowser = (rawContent) => {
  // 使用简单的分隔符查找而不是依赖 Buffer
  const frontmatterRegex = /^---\s*\n([\s\S]+?)\n---\s*\n/;
  const match = rawContent.match(frontmatterRegex);

  if (!match) {
    return { content: rawContent, frontmatter: {} };
  }

  const yamlString = match[1];
  const content = rawContent.slice(match[0].length);

  try {
    return {
      content,
      frontmatter: jsYaml.load(yamlString) || {},
    };
  } catch (error) {
    console.error("YAML 解析错误:", error);
    return { content, frontmatter: {} };
  }
};

/**
 * 批量解析 MDX 文件（浏览器兼容）
 * @param {Array<{path: string, rawContent: string}>} files
 */
export const parseMdxFilesBrowser = (files) => {
  return files.map((file) => ({
    ...file,
    ...parseMdxBrowser(file.rawContent),
  }));
};

export default loadMdxFiles;

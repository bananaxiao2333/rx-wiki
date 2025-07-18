import * as React from "react";
import { loadMdxFiles } from "./utils/DataManage";
import { parseMdxFilesBrowser } from "./utils/DataManage";
import {
  Card,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Skeleton,
  Stack,
  Typography,
} from "@mui/joy";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/joy/styles";
import { useParams } from "react-router-dom";
import queryString from "query-string";
import { SearchRounded } from "@mui/icons-material";

const Item = styled(Sheet)(({ theme }) => ({
  ...theme.typography["body-sm"],
  textAlign: "left",
  fontWeight: theme.fontWeight.md,
  color: theme.vars.palette.text.secondary,
  border: "1px solid",
  borderColor: theme.palette.divider,
  padding: theme.spacing(1),
  borderRadius: theme.radius.md,
  flexGrow: 1,
}));
export default function SiteIndexPage() {
  const params = queryString.parse(window.location.search);
  const [files, setFiles] = React.useState([]);
  const { t, i18n } = useTranslation();

  const [inputKeyword, setinputKeyword] = React.useState(params.q ?? "");
  const handelinputKeyword = (event) => {
    setinputKeyword(event.target.value);
  };
  const handleKeywordChange = (event) => {
    if (event.keyCode == 13) {
      window.location.href = "/?q=" + inputKeyword + "#/siteIndex";
    }
  };

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
      var publishedFiles = parsedFiles.filter(
        (file) => file.frontmatter.draft !== true
      );
      if (params.q != undefined) {
        publishedFiles = publishedFiles.filter((file) =>
          t("pages.factions" + file.frontmatter.key + ".description")
            .toLocaleLowerCase()
            .includes(params.q.toString().toLocaleLowerCase())
        );
      }
      setFiles(publishedFiles);
    };

    fetchFiles();
  }, []);
  return (
    <>
      {params.q ? (
        <div
          style={{
            display: "flex",
            gap: "20px",
            paddingBottom: "10px",
          }}
        >
          <FormControl>
            <FormLabel>{t("sideBar.search")}</FormLabel>
            <Input
              size="sm"
              value={inputKeyword}
              startDecorator={<SearchRounded />}
              placeholder={t("sideBar.search")}
              onKeyDown={handleKeywordChange}
              onChange={handelinputKeyword}
            />
          </FormControl>
        </div>
      ) : (
        ""
      )}
      <Stack spacing={1} direction="row" useFlexGap sx={{ flexWrap: "wrap" }}>
        {files.map((file, index) => (
          <Item
            key={index}
            sx={{
              wordWrap: "break-word",
              wordBreak: "normal",
              textDecoration: "none",
            }}
            component="a"
            href={("/#/" + file.path).replace(".mdx", "")}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              {Item ? (
                <img src={file.frontmatter.icon} style={{ height: 30 }} />
              ) : (
                <Skeleton variant="circular" width={30} height={30} />
              )}
              <Typography level="h2">
                {file.path.replace(".mdx", "")}
              </Typography>
            </div>
            <Typography sx={{ whiteSpace: "pre-wrap" }}>
              {t("pages.factions" + file.frontmatter.key + ".description")}
            </Typography>
          </Item>
        ))}
      </Stack>
    </>
  );
}

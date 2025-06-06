import { Box, Typography } from "@mui/joy";
import { useTranslation } from "react-i18next";
import icon404 from "./assets/404.svg";
export default function NotFoundPage() {
  const { t, i18n } = useTranslation();
  return (
    <Box>
      <Typography level="h1" sx={{ fontSize: "10" }}>
        {i18n.t("msgType.404")}
      </Typography>
      <Typography sx={{ fontSize: "10" }}>
        {i18n.t("msgType.404Notice")}
      </Typography>
      <img src={icon404} width={200} />
    </Box>
  );
}

import * as React from "react";
import PropTypes from "prop-types";
import Link from "@mui/joy/Link";

import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { Link as RouterLink, useLocation } from "react-router";
import { HomeOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

function ListItemLink(props) {
  const { t, i18n } = useTranslation();
  const breadcrumbNameMap = {
    "/about": t("sideBar.About"),
    "/siteIndex": t("sideBar.Index"),
  };
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to] ?? to.split("/").slice(-1)[0];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItemButton component={RouterLink} to={to} {...other}>
        <ListItemContent primary={primary} />
        {icon}
      </ListItemButton>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

function LinkRouter(props) {
  return (
    <Link {...props} component={RouterLink} sx={{ color: "text.primary" }} />
  );
}

function Page() {
  const { t, i18n } = useTranslation();

  const breadcrumbNameMap = {
    "/about": t("sideBar.About"),
    "/siteIndex": t("sideBar.Index"),
  };
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        <HomeOutlined />
        {t("sideBar.Home")}
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography key={to} sx={{ color: "text.primary" }}>
            {breadcrumbNameMap[to] ?? to.split("/").slice(-1)[0]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to] ?? to.split("/").slice(-1)[0]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

export default function RouterBreadcrumbs() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return <Page />;
}

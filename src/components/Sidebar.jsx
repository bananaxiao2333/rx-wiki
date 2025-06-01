import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RxwikiIcon from "../assets/rxwiki-icon.svg";

import { closeSidebar } from "./utils";
import { AllOutRounded, InfoRounded, ListRounded } from "@mui/icons-material";
import ColorSchemeToggle from "./ColorSchemeToggle";
import { CssVarsProvider, ListDivider } from "@mui/joy";
import wikiData from "../Data";

function Toggler({ defaultExpanded = false, renderToggle, children }) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: "grid",
            transition: "0.2s ease",
            "& > *": {
              overflow: "hidden",
            },
          },
          open ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" },
        ]}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <a href="/" style={{ textDecoration: "none" }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <IconButton variant="soft" color="primary" size="sm">
            <img src={RxwikiIcon} width={30} />
          </IconButton>
          <Typography level="title-lg">RXWIKI</Typography>
          <CssVarsProvider>
            <ColorSchemeToggle sx={{ ml: "auto" }} />
          </CssVarsProvider>
        </Box>{" "}
      </a>
      <Input
        size="sm"
        startDecorator={<SearchRoundedIcon />}
        placeholder="Search"
      />
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <ListItemButton role="menuitem" component="a" href="/">
              <HomeRoundedIcon />
              <ListItemContent>
                <Typography level="title-sm">Home</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton role="menuitem" component="a" href="/about">
              <InfoRounded />
              <ListItemContent>
                <Typography level="title-sm">About</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton role="menuitem" component="a" href="/siteIndex">
              <ListRounded />
              <ListItemContent>
                <Typography level="title-sm">Index</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListDivider />

          {Object.keys(wikiData).map((type, index) => (
            // this layer is for factions or items etc
            <ListItem nested key={index}>
              <Toggler
                renderToggle={({ open, setOpen }) => (
                  <ListItemButton onClick={() => setOpen(!open)}>
                    {wikiData[type].icon}
                    <ListItemContent>
                      <Typography level="title-sm">{type}</Typography>
                    </ListItemContent>
                    <KeyboardArrowDownIcon
                      sx={[
                        open
                          ? {
                              transform: "rotate(180deg)",
                            }
                          : {
                              transform: "none",
                            },
                      ]}
                    />
                  </ListItemButton>
                )}
              >
                <List sx={{ gap: 0.5 }}>
                  {Object.keys(wikiData[type].childrens).map(
                    // this layer is for items like class-d
                    (item, itemIndex) => (
                      <ListItem
                        key={itemIndex}
                        component="a"
                        href={"/" + type + "/" + item}
                        sx={{ textDecoration: "inherit" }}
                      >
                        <img
                          src={wikiData[type].childrens[item].icon}
                          width={23}
                          style={{ zIndex: "1000" }}
                        />
                        <ListItemButton
                          sx={{
                            color:
                              wikiData[type].childrens[item].color ?? "inherit",
                          }}
                        >
                          {item}
                        </ListItemButton>
                      </ListItem>
                    )
                  )}
                </List>
              </Toggler>
            </ListItem>
          ))}
        </List>
        <List
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "8px",
            mb: 2,
          }}
        >
          <ListItem>
            <ListItemButton>
              <SupportRoundedIcon />
              Support
            </ListItemButton>
          </ListItem>
        </List>
        <Card
          invertedColors
          variant="soft"
          color="warning"
          size="sm"
          sx={{ boxShadow: "none" }}
        >
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography level="title-sm">Warning</Typography>
          </Stack>
          <Typography level="body-xs">RXWIKI is under construction!</Typography>
          <LinearProgress variant="outlined" sx={{ my: 1 }} />
        </Card>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">
            Site under{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              CC BY-NC-SA
            </a>
          </Typography>
          <Typography level="body-xs">♡Made By Fans</Typography>
        </Box>
      </Box>
    </Sheet>
  );
}

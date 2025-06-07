import { Box, Divider, Typography } from "@mui/joy";
import RouterBreadcrumbs from "./components/Path";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListDivider,
  Stack,
  IconButton,
  Sheet,
} from "@mui/joy";
import {
  InfoRounded,
  GamesRounded,
  PeopleAltRounded,
  LanguageRounded,
  CodeRounded,
  QuestionMarkRounded,
} from "@mui/icons-material";

import { useTranslation, initReactI18next, Trans } from "react-i18next";
export default function About() {
  const { t, i18n } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Sheet
        sx={{
          minHeight: "100vh",
          p: 2,
          fontFamily: "Poppins, sans-serif",
          backgroundColor: "transparent",
        }}
      >
        <Stack
          spacing={1}
          sx={{
            textAlign: "center",
            my: 4,
            position: "sticky",
            top: 0,
            zIndex: 9995,
          }}
        >
          <Typography
            level="h2"
            fontWeight="xl"
            sx={{ backgroundColor: "divider" }}
          >
            <Box component="span" color="text.primary">
              Rxsend
            </Box>
            <Box component="span" color="text.secondary">
              {" "}
              Wiki Next
            </Box>
          </Typography>
        </Stack>
        {/* 主标题 */}
        <Stack
          spacing={1}
          sx={{ textAlign: "center", my: 4, backgroundColor: "transparent" }}
        >
          <Typography level="body-md">{t("pageAbout.title")}</Typography>
        </Stack>

        {/* 内容卡片 */}
        <Card variant="soft" sx={{ mb: 3, backgroundColor: "transparent" }}>
          <CardContent>
            <Stack spacing={2}>
              <Typography
                level="title-lg"
                startDecorator={<QuestionMarkRounded color="primary" />}
              >
                {t("pageAbout.aboutRWN")}
              </Typography>
              <Typography>{t("pageAbout.aboutRWNtxt")}</Typography>
            </Stack>
          </CardContent>
          <CardContent>
            <Stack spacing={2}>
              <Typography
                level="title-lg"
                startDecorator={<QuestionMarkRounded color="primary" />}
              >
                {t("pageAbout.aboutRX")}
              </Typography>
              <Typography>{t("pageAbout.aboutRXtxt")}</Typography>
              <Typography>{t("pageAbout.aboutRXtxt2")}</Typography>
            </Stack>
          </CardContent>
          <CardContent>
            <Stack spacing={2}>
              <Typography
                level="title-lg"
                startDecorator={<InfoRounded color="primary" />}
              >
                {t("pageAbout.ourGoal")}
              </Typography>
              <Typography>{t("pageAbout.ourGoaltxt")}</Typography>
            </Stack>
          </CardContent>
        </Card>

        {/* 关键信息列表 */}
        <List variant="outlined" sx={{ borderRadius: "sm" }}>
          <ListItem>
            <ListItemButton>
              <ListItemContent>
                <Typography level="title-sm">
                  {t("pageAbout.serverDev")}
                </Typography>
                <Typography level="body-sm">ragger</Typography>
              </ListItemContent>
              <CodeRounded color="primary" />
            </ListItemButton>
          </ListItem>
          <ListDivider />

          <ListItem>
            <ListItemButton>
              <ListItemContent>
                <Typography level="title-sm">
                  {t("pageAbout.belong")}
                </Typography>
                <Typography level="body-sm">Garry's Mod (GMod)</Typography>
              </ListItemContent>
              <GamesRounded color="primary" />
            </ListItemButton>
          </ListItem>
          <ListDivider />

          <ListItem>
            <ListItemButton>
              <ListItemContent>
                <Typography level="title-sm">
                  {t("pageAbout.gameDev")}
                </Typography>
                <Typography level="body-sm">Valve Corporation</Typography>
              </ListItemContent>
              <CodeRounded color="primary" />
            </ListItemButton>
          </ListItem>
          <ListDivider />

          <ListItem>
            <ListItemButton>
              <ListItemContent>
                <Typography level="title-sm">
                  {t("pageAbout.commuScale")}
                </Typography>
                <Typography level="body-sm">
                  {t("pageAbout.topPlayersNum")} 750+
                </Typography>
              </ListItemContent>
              <PeopleAltRounded color="primary" />
            </ListItemButton>
          </ListItem>
          <ListDivider />

          <ListItem>
            <ListItemButton>
              <ListItemContent>
                <Typography level="title-sm">
                  {t("pageAbout.wikiSupportLngs")}
                </Typography>
                <Typography level="body-sm">
                  中文/English/Русский язык
                </Typography>
              </ListItemContent>
              <LanguageRounded color="primary" />
            </ListItemButton>
          </ListItem>
        </List>

        {/* 社区特色 */}
        <Card variant="outlined" sx={{ mt: 3, backgroundColor: "transparent" }}>
          <CardContent>
            <Typography
              level="title-lg"
              mb={1}
              startDecorator={<QuestionMarkRounded color="primary" />}
            >
              {t("pageAbout.ourFeature")}
            </Typography>
            <List marker="circle" sx={{ "--ListItem-minHeight": "32px" }}>
              <ListItem>
                <Typography>{t("pageAbout.ourFeature1")}</Typography>
              </ListItem>
              <ListItem>
                <Typography>{t("pageAbout.ourFeature2")}</Typography>
              </ListItem>
              <ListItem>
                <Typography>{t("pageAbout.ourFeature3")}</Typography>
              </ListItem>
              <ListItem>
                <Typography>{t("pageAbout.ourFeature4")}</Typography>
              </ListItem>
              <ListItem>
                <Typography>{t("pageAbout.ourFeature5")}</Typography>
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* 版权信息 */}
        <Typography
          level="body-xs"
          textColor="text.tertiary"
          sx={{ textAlign: "center", mt: 2 }}
        >
          © {new Date().getFullYear()} RxsendWN Community.
        </Typography>
      </Sheet>
    </Box>
  );
}

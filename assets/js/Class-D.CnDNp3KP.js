const n=`---
title: "Class-d"
date: 2023-11-05
icon: "/img/class_d.png"
draft: false
key: ".classD"
---

import i18next from "../../Data";

# {i18next.t('route.Class-D')}

<center>
  <img
    src="/img/class_d.png"
    style={{
      maxWidth: "300px",
      width: "100%",
      objectFit: "contain",
    }}
  />
</center>

<center>
  <h2>{i18next.t("pages.COM.description")}</h2>
  <h3>{i18next.t("pages.factions.classD.description")}</h3>
</center>

<h2>{i18next.t("pages.COM.task")}</h2>
<h3>{i18next.t("pages.factions.classD.task")}</h3>

<h2 style={{ color: "red" }}>{i18next.t("pages.COM.enermy")}</h2>
<h3>{i18next.t("pages.factions.classD.enermy")}</h3>

<h2 style={{ color: "gold" }}>{i18next.t("pages.COM.neutral")}</h2>
<h3>{i18next.t("pages.factions.classD.neutral")}</h3>

<h2 style={{ color: "green" }}>{i18next.t("pages.COM.friend")}</h2>
<h3>{i18next.t("pages.factions.classD.friend")}</h3>

<h2>{i18next.t("pages.COM.extra")}</h2>
<div>
  <h3>{i18next.t("pages.COM.roundStartSound")}</h3>
  <audio controls>
    <source src="/media/Start_round_classd.mp3" type="audio/mp3" />
  </audio>
</div>
<h3 style={{ whiteSpace: "pre-wrap" }}>
  {i18next.t("pages.factions.classD.extra")}
</h3>
`;export{n as default};

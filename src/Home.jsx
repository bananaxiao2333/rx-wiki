import { Box, Typography } from "@mui/joy";
import HomeHero from "./components/HomeHero";
import "./Home.css";
import { useTranslation, initReactI18next, Trans } from "react-i18next";

{
  /*
const imgModules = import.meta.glob("./swiperimg/icon/*", { eager: true });
const swiperImg = Object.values(imgModules).map((mod) => mod.default);

const contentImgCharModules = import.meta.glob("./swiperimg/char/*", {
  eager: true,
});
const swiperImgChar = Object.values(contentImgCharModules).map(
  (mod) => mod.default
);

const swipers = { swiperImg, swiperImgChar };
*/
}

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <Box>
      <HomeHero />
      {/*
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 30, // 确保文字在 Swiper 上方
            textAlign: "center",
          }}
        >
          <Typography
            level="h2"
            fontSize={{ sm: 50, md: 60 }}
            color="primary"
            sx={{ whiteSpace: "pre", textWrap: "wrap" }}
          >
            {t("pageHome.swiper")}
          </Typography>
        </div>
        <div style={{ position: "relative", zIndex: "20" }}>
          {Object.keys(swipers).map((swiperName, swiperindex) => (
            <swiper-container
              loop
              slidesPerView="auto"
              freeMode="true"
              autoHeight="true"
              speed={1000}
              spaceBetween={-50}
              autoplay={{
                delay: 0,
                reverseDirection: swiperindex % 2,
              }}
            >
              {Object.keys(swipers[swiperName]).map((keyname, index) => (
                <swiper-slide lazy="true">
                  <img
                    src={swipers[swiperName][index]}
                    id={index}
                    loading="lazy"
                    style={{
                      display: "block",
                      width: "200px",
                    }}
                  />
                </swiper-slide>
              ))}
            </swiper-container>
          ))}
        </div>
      </div>
      */}
    </Box>
  );
}

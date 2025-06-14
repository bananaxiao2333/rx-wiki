import { Box } from "@mui/joy";
import HomeHero from "./components/HomeHero";
import "./Home.css";

const imgModules = import.meta.glob("./swiperimg/icon/*", { eager: true });
const swiperImg = Object.values(imgModules).map((mod) => mod.default);

const contentImgCharModules = import.meta.glob("./swiperimg/char/*", {
  eager: true,
});
const swiperImgChar = Object.values(contentImgCharModules).map(
  (mod) => mod.default
);

const swipers = { swiperImg, swiperImgChar };

export default function Home() {
  return (
    <Box>
      <HomeHero />
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
                loading="lazy"
                id={index}
                style={{
                  width: "100%",
                  display: "block",
                  height: "100%",
                }}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      ))}
    </Box>
  );
}

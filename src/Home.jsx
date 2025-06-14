import { Box } from "@mui/joy";
import HomeHero from "./components/HomeHero";
import "./Home.css";

const contentImgModules = import.meta.glob("./swiperimg/icon/*", {
  eager: false,
});
const swiperImg = Object.keys(contentImgModules).map(
  (keyname, index) => new URL(keyname, import.meta.url).href
);

const contentImgCharModules = import.meta.glob("./swiperimg/char/*", {
  eager: false,
});
const swiperImgChar = Object.keys(contentImgCharModules).map(
  (keyname, index) => new URL(keyname, import.meta.url).href
);

const contentImgItemModules = import.meta.glob("./swiperimg/item/*", {
  eager: false,
});
const swiperItemChar = Object.keys(contentImgItemModules).map(
  (keyname, index) => new URL(keyname, import.meta.url).href
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

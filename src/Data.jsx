import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

export default function setupI18n() {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        en: {
          translation: {
            sideBar: {
              Home: "Home",
              About: "About",
              Index: "Index",
              Factions: "Factions",
              Support: "Support",
              RWDunderConstruct: "RxsendWN is under construction!",
              SiteUnder: "Site under",
              MadeBy: "♡Made By Fans",
              changeLang: "Change Language",
              search: "Search",
            },
            pageHome: {
              blueTitle: "The power of learning more",
              bigTitle: "A Wiki website designed for RXSEND players",
            },
            msgType: {
              warning: "warning",
            },
          },
        },
        zh: {
          translation: {
            sideBar: {
              Home: "首页",
              About: "关于",
              Index: "索引",
              Factions: "阵营",
              Support: "支持",
              RWDunderConstruct: "RxsendWN正在搭建当中！",
              SiteUnder: "站点遵循",
              MadeBy: "♡粉丝制作",
              changeLang: "更换语言",
              search: "搜索",
            },
            pageHome: {
              blueTitle: "认识更多的力量",
              bigTitle: "为RXSEND玩家创建的维基网站",
            },
            msgType: {
              warning: "警告",
            },
          },
        },
      },
      lng: "zh", // if you're using a language detector, do not define the lng option
      fallbackLng: "en",

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
}

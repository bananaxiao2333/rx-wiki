import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

const resources = {
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
        Print: "打印本页",
      },
      pageHome: {
        blueTitle: "认识更多的力量",
        bigTitle: "为RXSEND玩家创建的维基网站",
        secondary: "维基的存在，是为了让每回合对局都更有准备，而非盲目混乱。",
        getStarted: "开始",
        viewMateirals: "直接查看资料？",
        swiper: "众多阵营\n大量角色",
      },
      msgType: {
        warning: "警告",
        404: "404 页面未找到",
        "404Notice": "该页面不存在。您可能需要返回主页。",
      },
      pageAbout: {
        title:
          "无论你是初次接触RXSEND的新玩家，还是已无数次经历收容失效事件的老兵，欢迎访问RxsendWN。",
        aboutRWN: "关于RxsendWN",
        aboutRWNtxt:
          "RxsendWN(Rxsend Wiki Next)是为Rxsend服务器社区打造的下一代信息平台。",
        aboutRX: "关于Rxsend",
        aboutRXtxt:
          "RXSEND BREACH 是基于 Garry's Mod的多人联机游戏服务器，前身为俄国制作团队开发的NextOren服务器。游戏以经典恐怖解密游戏“SCP收容失效”为框架，玩家将扮演不同阵营（如科研部、安保人员、收容部队、同行组织势力、各增派支援、D级人员、异常等）在混乱爆发的地下设施中生存、逃脱或完成任务目标。",
        aboutRXtxt2:
          "该服务器由多个语言社区共同维护，目前已存在中文、俄文、英文三种语言支持，并分别建立了对应的维基站点。值得注意的是，中国服务器相较于原版俄国服务器拥有大量差异化内容，包括阵营机制、游戏平衡、地图结构与特殊规则设定。本中文维基将以中国社区为核心，记录并整理与本地版本相关的全部机制与内容。",
        ourGoal: "我们的目标",
        ourGoaltxt:
          "我们建立本维基的初衷，是为了减少信息仅通过玩家口耳相传所带来的不确定性与学习门槛，帮助新玩家更快速地理解游戏机制与基本规则，降低玩家流失率；同时也希望为经验丰富的玩家提供一个更系统的内容归纳平台，以提升操作技巧与游戏理解的深度，并进一步推动社区内各语言版本的差异记录与知识互通。维基的存在，是为了让每回合对局都更有准备，而非盲目混乱。",
        serverDev: "服务器开发者",
        belong: "所属游戏",
        gameDev: "游戏开发者",
        commuScale: "社区规模",
        topPlayersNum: "峰值在线玩家",
        wikiSupportLngs: "本站支持语言",
        ourFeature: "我们的特色",
        ourFeature1: "创新的角色扮演(RP)系统",
        ourFeature2: "高度自定义的游戏内容",
        ourFeature3: "活跃友好的社区管理",
        ourFeature4: "每周活动和新内容更新",
        ourFeature5: "新手友好的引导教程",
      },
      route: {
        factions: "阵营",
        "Class-D": "D级人员",
      },
      pages: {
        COM: {
          description: "描述",
          task: "任务",
          enermy: "敌对阵营",
          neutral: "中立阵营",
          friend: "友好阵营",
          extra: "附加信息",
          roundStartSound: "回合开始音效",
        },
        factions: {
          description:
            "这是一个大类别，其中包括多种阵营。每种阵营的页面会提供此阵营的相关内容。",
          classD: {
            description:
              "D级人员是被指定用于与危险异常接触的特殊员工。D级人员通常从被判死刑的囚犯中招募，并被用于执行与异常相关的高危任务。\n在设施发生灾难性事件时，除非本地安保部作出另行决定，所有D级人员应立即被处决。",
            task: "逃离设施。",
            enermy:
              "机动特遣队、快速反应部队、机动特遣队Epsilon-11(九尾狐)/Nu-7(落锤)、科研部、特殊科研、特异事故处、蛇之手、猩红之王之子、SCPs",
            neutral: "全球超自然联盟、安保部门",
            friend: "混沌分裂者",
            extra: `除GOC间谍外，所有D级人员均可从混沌分裂者指挥官处获得混沌分裂者制服。
混沌分裂者在其盟友视野中带有绿色外发光轮廓标识。窃皮者在其盟友视野中带有白色外发光标识。
伦理监察官可以将2名D级人员转化为科研人员，所有能力和特殊道具将失效，但被动技能除外（如“运动员”的能力）。
GOC间谍不会变更阵营，尽管他们会获得制服，但仍会失去匕首。
穿着科学家服装的D级人员可使用直升机进行撤离,但会被扣除___点经验。
`,
          },
        },
      },
    },
  },
  ru: {
    translation: {
      sideBar: {
        Home: "Главная",
        About: "О Вики",
        Index: "Индекс",
        Factions: "Фракции",
        Support: "Поддержка",
        RWDunderConstruct: "RxsendWN находится в разработке!",
        SiteUnder: "Сайт соответствует",
        MadeBy: "♡ Фанатский проект",
        changeLang: "Сменить язык",
        search: "Поиск",
        Print: "Распечатать страницу",
      },
      pageHome: {
        blueTitle: "Познай множество сил",
        bigTitle: "ВИКИ ДЛЯ ИГРОКОВ RXSEND",
        secondary:
          "Вики нужен, чтобы каждый раунд был подготовленным, а не слепым хаосом.",
        getStarted: "Начать",
        viewMateirals: "Сразу посмотреть материалы?",
        swiper: "Множество фракций\nОгромное количество персонажей",
      },
      msgType: {
        warning: "Внимание",
        404: "404 Страница не найдена",
        "404Notice":
          "Эта страница не существует. Возможно, вам следует вернуться на главную страницу.",
      },
      pageAbout: {
        title:
          "Неважно, новичок ли вы в RXSEND или ветеран, переживший множество нарушений сдержанности – добро пожаловать в RxsendWN.",
        aboutRWN: "О RxsendWN",
        aboutRWNtxt:
          "RxsendWN (Rxsend Wiki Next) – информационная платформа нового поколения для сообщества серверов Rxsend.",
        aboutRX: "О Rxsend",
        aboutRXtxt:
          "RXSEND BREACH – это сервер в Garry's Mod с многочисленными игроками, ранее известный как NextOren (разработан российской командой). Игра использует концепцию классического хоррора/побега «SCP: Содержание нарушено». Игроки берут на себя роль различных фракций (таких как Научный Отдел, Служба Безопасности, Отряд Сдерживания, Группы Соперников, Подкрепления, Персонал Класса D, Аномалии и другие), выживая, убегая или выполняя задачи в хаосе подземного объекта.",
        aboutRXtxt2:
          "Сервер поддерживается несколькими языковыми сообществами; на данный момент есть поддержка китайского, русского и английского языков, а также соответствующие вики-сайты. Важно отметить, что китайские серверы имеют множество различий по сравнению с оригинальными российскими в плане фракций, баланса, структуры карт и уникальных игровых механик. Эта китайская вики фокусируется на записи и систематизации всего контента, относящегося к китайской версии.",
        ourGoal: "Наша цель",
        ourGoaltxt:
          "Мы создали эту вики, чтобы уменьшить неопределённость и сложность обучения из-за распространения информации только через игроков, помочь новичкам быстрее понять механики и правила и снизить отток игроков. Мы также хотим предоставить опытным игрокам более системную платформу для изучения углублённой механики и тактик, а также способствовать фиксации различий между языковыми версиями и обмену знаниями внутри сообщества. Вики нужен, чтобы каждый раунд был подготовленным, а не слепым хаосом.",
        serverDev: "Разработчики сервера",
        belong: "Движок игры",
        gameDev: "Разработчик игры",
        commuScale: "Размер сообщества",
        topPlayersNum: "Пик онлайн игроков",
        wikiSupportLngs: "Поддерживаемые языки",
        ourFeature: "Наши особенности",
        ourFeature1: "Инновационная Ролевая Игра (RP)",
        ourFeature2: "Высокий уровень кастомизации",
        ourFeature3: "Активное и дружелюбное администрирование",
        ourFeature4: "Еженедельные ивенты и обновления",
        ourFeature5: "Новичкам: удобные обучающие материалы",
      },
      route: {
        factions: "Фракции",
        "Class-D": "Класс-D",
      },
      pages: {
        COM: {
          description: "Описание",
          task: "Задача",
          enermy: "Враждебные фракции",
          neutral: "Нейтральные фракции",
          friend: "Дружественные фракции",
          extra: "Дополнительная информация",
          roundStartSound: "Звук начала раунда",
        },
        factions: {
          description:
            "Это большая категория, которая включает в себя различные фракции. На страницах каждой фракции будет представлена соответствующая ей информация.",
          classD: {
            description:
              "Персонал класса D - это специалисты, назначенные для опасных взаимодействий с аномалиями. Обычно набираемые из приговорённых к смертной казни заключённых, они используются для выполнения высокорисковых заданий, связанных с аномалиями.\nВ случае катастрофических событий на объекте, весь персонал класса D должен быть немедленно ликвидирован, если служба безопасности объекта не распорядится иначе.",
            task: "Покинуть объект.",
            enermy:
              "Мобильная оперативная группа, Группа быстрого реагирования, МОГ Epsilon-11 (Nine-Tailed Fox)/Nu-7 (Hammer Down), Научный отдел, Особые исследования, Отдел особых происшествий, Змеиные Руки, Дети Алого Короля, SCP-объекты",
            neutral: "Глобальная Оккультная Коалиция, Отдел безопасности",
            friend: "Хаос Инсерджент",
            extra: `Все персоналы класса D, кроме шпионов ГОК, могут получить форму Хаос Инсерджент от их командира.\nСоюзники Хаос Инсерджент выделяются зелёным свечением для своих союзников. Скинстилы выделяются белым свечением для своих союзников.\nЭтический надзиратель может преобразовать двух персоналов класса D в учёных, при этом все способности и специальные предметы будут отключены, за исключением пассивных навыков (например, способность "атлет").\nШпионы ГОК не меняют свою фракцию и, хотя получают форму, теряют кинжал.\nПерсонал класса D в форме учёного может использовать вертолёт для эвакуации, но потеряет ___ очков опыта.`,
          },
        },
      },
    },
  },
  en: {
    translation: {
      sideBar: {
        Home: "Home",
        About: "About",
        Index: "Index",
        Factions: "Factions",
        Support: "Support",
        RWDunderConstruct: "RxsendWN is Under Construction!",
        SiteUnder: "Site Adheres to",
        MadeBy: "♡ Fan-made Project",
        changeLang: "Change Language",
        search: "Search",
        Print: "Print this page",
      },
      pageHome: {
        blueTitle: "Know the Many Forces",
        bigTitle: "WIKI FOR RXSEND PLAYERS",
        secondary:
          "The wiki exists so every round is prepared, not blind chaos.",
        getStarted: "Get Started",
        viewMateirals: "View Materials Directly?",
        swiper: "Numerous factions\nAbundant characters",
      },
      msgType: {
        warning: "Warning",
        404: "404 Page Not Found",
        "404Notice":
          "This page does not exist. You may need to go back to the homepage.",
      },
      pageAbout: {
        title:
          "Whether you're new to RXSEND or a veteran who has faced countless containment breaches, welcome to RxsendWN.",
        aboutRWN: "About RxsendWN",
        aboutRWNtxt:
          "RxsendWN (Rxsend Wiki Next) is a next-generation information platform built for the Rxsend server community.",
        aboutRX: "About Rxsend",
        aboutRXtxt:
          'RXSEND BREACH is a multiplayer game server based on Garry\'s Mod, formerly known as the NextOren server developed by a Russian team. The game uses the framework of the classic horror/escape game "SCP: Containment Breach". Players take on the roles of various factions (such as Science Department, Security Personnel, Mobile Task Force, Rival Groups, Reinforcements, Class-D Personnel, Anomalies, etc.), surviving, escaping, or completing objectives within the chaos of an underground facility.',
        aboutRXtxt2:
          "The server is maintained by multiple language communities; Chinese, Russian, and English are currently supported, with corresponding wiki sites established. It's important to note that Chinese servers have significant differences from the original Russian servers in terms of faction mechanics, game balance, map structure, and special rules. This Chinese wiki will focus on the Chinese community, documenting and organizing all mechanics and content related to the local version.",
        ourGoal: "Our Goal",
        ourGoaltxt:
          "Our goal in building this wiki is to reduce the uncertainty and learning barrier caused by information spread solely through word-of-mouth among players, helping new players grasp game mechanics and basic rules faster to reduce player attrition. We also aim to provide experienced players with a more systematic platform for documenting content to enhance tactical depth and understanding, and to further encourage the recording of differences between language versions and knowledge sharing within the community. The wiki exists so every round is prepared, not blind chaos.",
        serverDev: "Server Developers",
        belong: "Game Engine",
        gameDev: "Game Developer",
        commuScale: "Community Size",
        topPlayersNum: "Peak Online Players",
        wikiSupportLngs: "Languages Supported by This Wiki",
        ourFeature: "Our Features",
        ourFeature1: "Innovative Roleplay (RP) System",
        ourFeature2: "Highly Customized Game Content",
        ourFeature3: "Active & Friendly Community Management",
        ourFeature4: "Weekly Events & New Content Updates",
        ourFeature5: "Beginner-Friendly Tutorials",
      },
      route: {
        factions: "Factions",
        "Class-D": "Class-D",
      },
      pages: {
        COM: {
          description: "Description",
          task: "Tasks",
          enermy: "Hostile Factions",
          neutral: "Neutral Factions",
          friend: "Friendly Factions",
          extra: "Additional Information",
          roundStartSound: "Round Start Sound",
        },
        factions: {
          description:
            "This is a broad category that encompasses multiple factions. Each faction's page will provide relevant content for that faction.",
          classD: {
            description:
              "Class-D Personnel are designated staff for hazardous interactions with anomalies. Typically recruited from death row inmates, they are used for high-risk tasks related to anomalies.\nIn the event of catastrophic incidents at the facility, all Class-D personnel should be immediately terminated unless local security makes alternative arrangements.",
            task: "Escape the facility.",
            enermy:
              "Mobile Task Force, Rapid Response Team, MTF Epsilon-11(Nine-Tailed Fox)/Nu-7(Hammer Down), Science Department, Special Research, Department of Unusual Incidents, Serpent's Hand, Children of the Scarlet King, SCPs",
            neutral: "Global Occult Coalition, Security Department",
            friend: "Chaos Insurgency",
            extra: `All Class-D personnel except GOC spies can obtain Chaos Insurgency uniforms from their commander.\nChaos Insurgency allies are highlighted with green glow to their allies. Skinstealers are highlighted with white glow to their allies.\nEthics Overseers can transform two Class-D personnel into researchers, disabling all abilities and special items except passive skills (such as the "Athlete" ability).\nGOC spies do not change factions and will lose their dagger even if they obtain a uniform.\nClass-D personnel in scientist uniforms can use helicopters for evacuation but will lose ___ experience points.`,
          },
        },
      },
    },
  },
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    fallbackLng: "en",
  });

export default i18n;

import { defineValaxyConfig } from "valaxy";
import type { UserThemeConfig } from "valaxy-theme-yun";
import { addonWaline } from "valaxy-addon-waline";
// add icons what you will need
const safelist = ["i-ri-home-line"];

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: "yun",

  themeConfig: {
    colors: {
      primary: "#fd684c",
    },
    banner: {
      enable: true,
      title: "思米米",
      cloud: {
        enable: true,
      },
    },
    bg_image: {
      enable: true,
      url: "/images/background/bg-white.png",
      dark: "/images/background/bg-dark.png",
    },
    say: {
      enable: true,
      api: "https://el-bot-api.elpsy.cn/api/words/young",
      hitokoto: {
        enable: false,
        api: "https://v1.hitokoto.cn",
      },
    },

    notice: {
      enable: true,
      content: "欢迎访问「思米米」",
    },
    pages: [
      // {
      //   name: "我的小伙伴们",
      //   url: "/links/",
      //   icon: "i-ri-genderless-line",
      //   color: "dodgerblue",
      // },
      // {
      //   name: "喜欢的女孩子",
      //   url: "/girls/",
      //   icon: "i-ri-women-line",
      //   color: "hotpink",
      // },
    ],

    footer: {
      since: 2022,
      icon: {
        enable: true,
        name: "ri:github-line",
        url: "https://github.com/hqw567",
        animated: true,
        color: "var(--va-c-primary)",
        title: "GitHub",
      },
      beian: {
        enable: true,
        icp: "湘ICP备2022002172号",
      },

      powered: false,
    },

    types: {
      link: {
        color: "var(--va-c-primary)",
        icon: "i-ri-external-link-line",
      },
      bilibili: {
        color: "#FF8EB3",
        icon: "i-ri-bilibili-line",
      },
      douban: {
        color: "#007722",
        icon: "i-ri-douban-line",
      },
      github: {
        color: "var(--va-c-text)",
        icon: "i-ri-github-line",
      },
      "netease-cloud-music": {
        color: "#C10D0C",
        icon: "i-ri-netease-cloud-music-line",
      },
      notion: {
        color: "var(--va-c-text)",
        icon: "i-simple-icons-notion",
      },
      twitter: {
        color: "#1da1f2",
        icon: "i-ri-twitter-line",
      },
      wechat: {
        color: "#1AAD19",
        icon: "i-ri-wechat-2-line",
      },
      weibo: {
        color: "#E6162D",
        icon: "i-ri-weibo-line",
      },
      yuque: {
        color: "#25b864",
        icon: "i-ant-design-yuque-outlined",
      },
      zhihu: {
        color: "#0084FF",
        icon: "i-ri-zhihu-line",
      },
    },
    menu: {
      custom: {
        title: "button.about",
        icon: "i-ri-clipboard-line",
        url: "/about",
      },
    },

  },

  unocss: { safelist },

  markdown: {
    blocks: {
      tip: {
        icon: "i-carbon-thumbs-up",
        text: "ヒント",
        langs: {
          "zh-CN": "提示",
        },
      },
      warning: {
        icon: "i-carbon-warning-alt",
        text: "注意",
      },
      danger: {
        icon: "i-carbon-warning",
        text: "警告",
      },
      info: {
        text: "información",
      },
    },
  },

  addons: [
    addonWaline({
      serverURL: "https://waline.simimi.cn",
      pageview: true,
      comment: true,
    }),
    // addonTwikoo({
    //   envId: 'https://twikoo.vercel.app',
    // }),
  ],
});

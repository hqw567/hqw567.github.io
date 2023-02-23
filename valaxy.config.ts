import { defineValaxyConfig } from "valaxy";
import type { UserThemeConfig } from "valaxy-theme-yun";
import type { VitePWAOptions } from "vite-plugin-pwa";
import { VitePWA } from "vite-plugin-pwa";
// import { addonAlgolia } from 'valaxy-addon-algolia'
// import { addonTwikoo } from 'valaxy-addon-twikoo'
import { addonWaline } from "valaxy-addon-waline";

// const pwaOptions: Partial<VitePWAOptions> = {
//   mode: "production",
//   base: "/",
//   includeAssets: [
//     "favicon.svg",
//     "robots.txt",
//     "apple-touch-icon.png",
//     "masked-icon.svg",
//   ],
//   manifest: {
//     name: "思米米(SIMIMI)",
//     short_name: "思米米",
//     description: "山有木兮木有枝，心悦君兮君不知。",
//     display: "standalone",
//     theme_color: "#fd684c",
//     lang: "zh-CN",
//     icons: [
//       {
//         src: "pwa-192x192.png", // <== don't add slash, for testing
//         sizes: "192x192",
//         type: "image/png",
//       },
//       {
//         src: "/pwa-512x512.png", // <== don't remove slash, for testing
//         sizes: "512x512",
//         type: "image/png",
//       },
//       {
//         src: "pwa-512x512.png", // <== don't add slash, for testing
//         sizes: "512x512",
//         type: "image/png",
//         purpose: "any maskable",
//       },
//     ],
//   },
//   devOptions: {
//     enabled: true,
//     /* when using generateSW the PWA plugin will switch to classic */
//     type: "module",
//     navigateFallback: "index.html",
//   },
//   workbox: {
//     navigateFallbackDenylist: [/^\/atom\.xml$/],
//     globPatterns: [
//       // "**/*.{css,js,html,svg,png,jpg,ico,txt,ttf,woff,woff2,json,xml,webmanifest,webm}",
//       "**/*.*",
//     ],
//     globIgnores: ["**/auto.xml"],
//     skipWaiting: true,
//     clientsClaim: true,
//     navigateFallback: "/index.html",
//   },
// };

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: ["**/*.{js,css,html,json,ico,png,jpg,jpeg,svg}"],
  manifest: {
    name: "思米米(SIMIMI)",
    short_name: "思米米",
    description: "山有木兮木有枝，心悦君兮君不知。",
    lang: "zh-CN",
    theme_color: "#fd684c",
    icons: [
      {
        src: "/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
  workbox: {
    navigateFallback: "/index.html",
    navigateFallbackDenylist: [/^\/atom\.xml$/],
    globPatterns: [
      "**/*.{js,css,html,json,xml,ico,svg,png,jpg,jpeg,webp,woff2,ttf,eot}",
    ],
    globIgnores: ["**/auto.xml"],
    skipWaiting: true,
    clientsClaim: true,
  },
};

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: "yun",
  vite: {
    plugins: [VitePWA(pwaOptions)],
  },
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
      url: "https://img.simimi.cn/img/background/bg-white.png",
      dark: "https://img.simimi.cn/img/background/bg-dark.png",
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
      //   name: '我的小伙伴们',
      //   url: '/links/',
      //   icon: 'i-ri-genderless-line',
      //   color: 'dodgerblue',
      // },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
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
  unocss: {
    safelist: ["i-ri-home-line"],
  },
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

import { defineSiteConfig } from "valaxy";

export default defineSiteConfig({
  search: {
    enable: false,
    // 设置类型为 Fuse
    type: "fuse",
  },
  url: "http://simimi.cn/valaxy-test2/",
  lang: "zh-CN",
  title: "思米米(SIMIMI)",
  subtitle: "All at sea.",
  author: {
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=79099400&s=640",
    status: {
      emoji: "😣",
    },
    name: "Herway",
    email: "hqw567@gmail.com",
  },
  favicon: "/favicon.svg",
  description: "山有木兮木有枝，心悦君兮君不知。",
  mediumZoom: { enable: true },
  social: [
    // {
    //   name: "RSS",
    //   link: "/atom.xml",
    //   icon: "i-ri-rss-line",
    //   color: "orange",
    // },
    {
      name: "GitHub",
      link: "https://github.com/hqw567",
      icon: "i-ri-github-line",
      color: "#6e5494",
    },
  ],
  comment: {
    enable: true,
  },
  sponsor: {
    enable: true,
    title: "我很可爱，请给我钱！",
    methods: [
      {
        name: "支付宝",
        url: "/images/pay/zfb.jpg",
        color: "#00A3EE",
        icon: "i-ri-alipay-line",
      },
      {
        name: "QQ 支付",
        url: "/images/pay/qq.png",
        color: "#12B7F5",
        icon: "i-ri-qq-line",
      },
      {
        name: "微信支付",
        url: "/images/pay/wx.png",
        color: "#2DC100",
        icon: "i-ri-wechat-pay-line",
      },
    ],
  },
});

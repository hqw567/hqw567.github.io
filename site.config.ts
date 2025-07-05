import { defineSiteConfig } from "valaxy";

export default defineSiteConfig({
	timezone: "Asia/Shanghai",
	encrypt: {
		enable: true,
	},
	search: {
		enable: true,
		type: "fuse",
	},
	url: "https://simimi.cn",
	lang: "zh-CN",
	languages: ["zh-CN"],
	title: "思米米(SIMIMI)",
	subtitle: "All at sea.",
	frontmatter: {},
	author: {
		avatar: "https://q1.qlogo.cn/g?b=qq&nk=79099400&s=640",
		status: {
			emoji: "😣",
			message: "Hi",
		},
		name: "Herway",
		intro: "All at sea.",
		link: "https://simimi.cn",
		email: "hqw567@gmail.com",
	},
	lastUpdated: true,
	favicon: "/favicon.svg",
	description: "山有木兮木有枝，心悦君兮君不知。",
	mediumZoom: { enable: true },
	/**
	 * 开启阅读统计
	 */
	statistics: {
		enable: true,
	},
	social: [
		{
			name: "RSS",
			link: "/atom.xml",
			icon: "i-ri-rss-line",
			color: "orange",
		},
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
		enable: false,
		title: "我很可爱，请给我钱！",
		description: "如果你觉得我的文章对你有帮助，欢迎赞助我！",
		methods: [
			{
				name: "支付宝",
				url: "/images/donate/alipay-qrcode.webp",
				color: "#1677FF",
				icon: "i-ri-alipay-line",
			},
			{
				name: "QQ 支付",
				url: "/images/donate/qqpay-qrcode.webp",
				color: "#0099FF",
				icon: "i-ri-qq-line",
			},
			{
				name: "微信支付",
				url: "/images/donate/wechatpay-qrcode.webp",
				color: "#2AAE67",
				icon: "i-ri-wechat-pay-line",
			},
		],
	},
});

import { defineAppSetup } from "valaxy";
import { install as installClarity } from "./clarity";
import { install as installGtag } from "./gtag";

export default defineAppSetup((ctx) => {
	// 只在生产环境执行分析工具
	// if (import.meta.env.PROD) {
	// 	installGtag(ctx);
	// 	installClarity(ctx);
	// }
});

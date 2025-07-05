import type { UserModule } from "valaxy";

export const install: UserModule = () => {
	if (!import.meta.env.SSR) {
		// 使用动态导入避免 SSG 构建问题
		import("@microsoft/clarity")
			.then((clarity) => {
				clarity.default.init("sa1161jks2");
			})
			.catch((error) => {
				console.warn("Failed to load Microsoft Clarity:", error);
			})
			.then(() => {
				console.log("Microsoft Clarity loaded");
			});
	}
};

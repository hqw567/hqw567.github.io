import type { UserModule } from "valaxy";
import VueGtag, { trackRouter } from "vue-gtag-next";

export const install: UserModule = ({ app, router }) => {
	if (!import.meta.env.SSR) {
		app.use(VueGtag, {
			property: { id: "G-4KNE7DCHW1" },
		});

		trackRouter(router);
	}
};

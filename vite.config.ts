import ViteYaml from "@modyfi/vite-plugin-yaml";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tailwindcss(),
		ViteYaml(),
		VitePWA({ registerType: "prompt", devOptions: { enabled: true } }),
		sveltekit()
	]
});

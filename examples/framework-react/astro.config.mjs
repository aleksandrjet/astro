import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
	// Enable React to support React JSX components.
	integrations: [react()],
	vite: {
		plugins: [svgr()],
	}
});

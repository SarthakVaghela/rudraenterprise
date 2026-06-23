import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import prerender from "@prerenderer/rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Generates static HTML for each route at build time so crawlers and
    // social scrapers (Google, Bing, WhatsApp, Facebook, X) see fully
    // rendered pages with their per-page <title>, meta, and JSON-LD.
    prerender({
      routes: ["/", "/about", "/services", "/contact"],
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        // Wait until React + react-helmet-async have populated <head>.
        renderAfterTime: 2000,
        headless: true,
        launchOptions: {
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

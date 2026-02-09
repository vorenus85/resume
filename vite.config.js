import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/resume/",
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "mixed-decls",
          "color-functions",
          "global-builtin",
          "import",
        ],
      },
    },
  },
  server: {
    hmr: {
      protocol: "ws", // websockets
      host: "localhost",
      port: 24678, // opcionális, random is lehet
    },
    watch: {
      // ha public mappa változásait is figyelni akarod:
      ignored: [], // alapból a node_modules van ignorálva
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  build: {
    target: "esnext",
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
      name: "@pocs/motor-busca",
      fileName: "motor-busca",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@pocs/motor-busca",
        "@pocs/page-1",
        "@pocs/page-2",
        "@pocs/page-3",
      ],
    },
  },
});

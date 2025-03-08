import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    build: {
      outDir: "../dist",
    },
    base: env.VITE_BASEPATH,
    plugins: [react(), tailwindcss()],
    server: {
      allowedHosts: [env.VITE_HOSTNAME],
    },
  };
});

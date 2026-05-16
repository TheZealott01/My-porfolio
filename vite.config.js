import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "My-porfolio";

export default defineConfig(({ command }) => ({
  base: command === "build" ? `/${repoName}/` : "/",
  build: {
    outDir: "docs",
  },
  plugins: [react()],
}));

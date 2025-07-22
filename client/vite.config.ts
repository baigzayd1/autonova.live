import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async () => {
  // Dynamically import cartographer plugin if in Replit dev environment
  const plugins = [react(), runtimeErrorOverlay()];

  if (
    process.env.NODE_ENV !== "production" &&
    typeof process.env.REPL_ID !== "undefined"
  ) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@shared": path.resolve(__dirname, "../shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname),
    build: {
      outDir: path.resolve(__dirname, "build"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 REQUIRED
    port: 5173,
    allowedHosts: [
      "2b30be497264.ngrok-free.app",
      ".ngrok-free.app",
      ".ngrok.app",
    ],
  },
});

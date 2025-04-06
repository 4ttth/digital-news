import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

dotenv.config();

// https://vite.dev/config/
const FRONT_PORT = parseInt(process.env.FRONT_PORT || "3000");

const HOST = process.env.HOST || "localhost";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: HOST,
    port: FRONT_PORT,
    open: true,
    hmr: {
      protocol: "ws",
      host: HOST,
      port: FRONT_PORT,
    },
  },
})

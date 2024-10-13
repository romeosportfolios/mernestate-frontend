import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'https://mernestate-backend-4v8u.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
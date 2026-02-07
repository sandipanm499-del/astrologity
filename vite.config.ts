import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Lumina - AI Palm & Tarot Reader',
        short_name: 'Lumina',
        description: 'Deep spiritual reflection via AI-powered Palmistry and Tarot readings.',
        theme_color: '#0a0118',
        background_color: '#0a0118',
        display: 'standalone',
        orientation: 'portrait-primary',
        icons: [
          {
            src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%230a0118"/%3E%3Cpath d="M50 20 L50 80 M20 50 L80 50" stroke="%2300f0ff" stroke-width="4"/%3E%3C/svg%3E',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%230a0118"/%3E%3Cpath d="M50 20 L50 80 M20 50 L80 50" stroke="%238a2be2" stroke-width="4"/%3E%3C/svg%3E',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

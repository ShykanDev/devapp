/// <reference types="vitest" />
/// <reference types="vite-plugin-pwa/client" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
import { defineConfig } from 'vite'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), legacy(), vueDevTools(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.png', 'apple-touch-icon.png'],
    manifest: {
      name: 'DevApp',
      short_name: 'DevApp',
      description: 'Aplicación de estudio de programación: organiza temas, exámenes, artículos y chats con IA.',
      theme_color: '#0a68d6',
      background_color: '#f5f5f7',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      lang: 'es',
      icons: [
        {
          src: '/pwa-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/maskable-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: 'index.html',
      globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'google-fonts-stylesheets',
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-webfonts',
            expiration: {
              maxEntries: 30,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /\/(chat|generate-page|edit-page|generate-exam|generate-suggestions|edit-article)(\/|$)/,
          handler: 'NetworkOnly',
          method: 'GET',
        },
        {
          urlPattern: /\/(chat|generate-page|edit-page|generate-exam|generate-suggestions|edit-article)(\/|$)/,
          handler: 'NetworkOnly',
          method: 'POST',
        },
      ],
    },
    devOptions: {
      enabled: true,
    },
  }), cloudflare()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 20000,
    hookTimeout: 20000,
    exclude: ['node_modules/**', 'dist/**', 'ai-worker/**', '.git/**']
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: ['favicon.svg'],

      manifest: {
        name: 'Study Tracker',
        short_name: 'Tracker',
        description: 'Track study progress',

        theme_color: '#ffffff',
        background_color: '#ffffff',

        display: 'standalone',
        start_url: '/',

        icons: [
          {
            src: '/favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
})
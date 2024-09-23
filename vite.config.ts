import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginRadar } from 'vite-plugin-radar'
import sitemapPlugin from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      analytics: {
        id: '',
      },
    }),
    sitemapPlugin({
      changefreq: "monthly",
      dynamicRoutes: [
        "/",
      ],
      generateRobotsTxt: true,
    }),
  ],
  server: {
    hmr: true,
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    cssMinify: true,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    sourcemap: false,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    },
  },
})

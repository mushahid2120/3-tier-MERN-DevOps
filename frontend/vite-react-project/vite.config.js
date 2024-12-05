import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/submit': {
        target: `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/submit/, '/submit'),
      },
      '/fetch': {
        target: `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fetch/, '/fetch'),
      },
    },
  },
})

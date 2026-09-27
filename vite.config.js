import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Sem manualChunks: dividir à mão fazia a v2 baixar o framer-motion da v1.
    // O Rollup separa sozinho o que só a landing antiga (lazy) usa.
    chunkSizeWarningLimit: 600,
  },
})

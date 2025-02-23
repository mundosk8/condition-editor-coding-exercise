import path from 'path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: [
      '**/src/__tests__/e2e/**',
      '**/node_modules/**',
      '**/dist/**',
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
});
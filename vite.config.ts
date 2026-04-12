import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/portfolio/', // nama github repository
  build: {
    outDir: 'docs' // supaya langsung ke docs/ tanpa perlu dist/ (untuk github pages)
  }
}))

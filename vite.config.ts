import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.DEPLOY_TARGET === 'github' ? '/portfolio/' : '/', // '/portfolio' untuk github pages, '/' untuk default deploy
  build: {
    outDir: process.env.DEPLOY_TARGET === 'github' ? 'docs' : 'dist' // '/docs' untuk github pages, '/dist' untuk default deploy
  }
}))
// Run "npm run build:github" untuk deploy via github pages sebelum push & merge ke main
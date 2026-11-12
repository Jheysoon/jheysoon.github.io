import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site (jheysoon.github.io) is served from the domain root.
export default defineConfig({
  base: '/',
  plugins: [react()],
})

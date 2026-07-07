import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Serve the Vite app that lives in ./premium-sneakers
export default defineConfig({
  plugins: [react()],
  root: 'premium-sneakers',
})


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Force Vite to listen on localhost (instead of 127.0.0.1)
    // and specify the port you want
    host: 'localhost',
    port: 5173, 
    // If you still have issues with HMR, try specifying hmr options:
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  },
})
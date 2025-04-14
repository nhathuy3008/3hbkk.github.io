import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/3hbkk.github.io/', // Adjust this to match the deployment path
  plugins: [react()],
});


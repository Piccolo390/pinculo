import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/pinculo/", // Substitua pelo nome do repositório no GitHub
  plugins: [react()],
})
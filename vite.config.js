import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
server: {
  historyApiFallback: true
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

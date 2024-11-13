import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: false, // Deshabilitar la generación de source maps
  },
  plugins: [react()],
})

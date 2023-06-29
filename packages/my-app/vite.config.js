import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true, // This ensures symlinked modules are resolved to their real paths, required for Yarn Spaces etc
  },
})

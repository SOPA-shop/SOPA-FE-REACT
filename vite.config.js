import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import image from '@rollup/plugin-image'

export default defineConfig({
  plugins: [react(), image()],
})

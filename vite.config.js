import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ghPages from 'vite-plugin-gh-pages';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
  base: 'alx-react/dashboard/', // <-- important for GitHub Pages!
  plugins: [react(), ghPages()],
})

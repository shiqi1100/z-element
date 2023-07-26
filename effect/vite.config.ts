import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3001
  },
  resolve: {
    alias: [
      {
        find: 'my-element',
        replacement: `${path.resolve(__dirname, '../packages')}`
      }
    ]
  }
})

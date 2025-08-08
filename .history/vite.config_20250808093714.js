import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
      babel: {
        presets: [['@babel/preset-react', { pragma: 'jCreateElement' }]],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // 這一定要有
    },
    outDir: 'dist', // 可省略，預設就是
  },
})

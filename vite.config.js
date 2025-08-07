import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
      babel: {
        presets: [['@babel/preset-react', { pragma: 'jCreateElement' }]],
      },
    }),
  ],
});

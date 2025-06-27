// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/', 
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
});

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // Add this line
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
});
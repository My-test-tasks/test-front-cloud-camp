import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@styles', replacement: path.resolve(__dirname, './src/styles') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@configs', replacement: path.resolve(__dirname, './src/configs') },
      { find: '@store', replacement: path.resolve(__dirname, './src/store') },
    ],
  },
  base: 'https://my-test-tasks.github.io/test-front-cloud-camp/',
});

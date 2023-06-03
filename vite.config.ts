/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './',
  publicDir: 'public',

  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/**/*.js', 'src/main.tsx'],
      all: true,
      lines: 90,
      functions: 90,
      branches: 90,
      statements: 90,
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },

  resolve: {
    alias: [
      {
        find: '@functions',
        replacement: path.resolve(__dirname, './src/functions'),
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, './src/services'),
      },
      {
        find: '@interfaces',
        replacement: path.resolve(__dirname, './src/interfaces'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: '@fixtures',
        replacement: path.resolve(__dirname, './src/fixtures'),
      },
    ],
  },
});

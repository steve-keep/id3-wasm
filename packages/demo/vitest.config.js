import { defineConfig } from 'vitest/config';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
  ],
  resolve: {
    alias: {
      'id3-wasm': path.resolve(__dirname, '../lib/wasm/id3_wasm.js'),
    },
  },
  test: {
    include: ['tests/**/*.test.js'],
  },
});

import { defineConfig } from 'vitest/config';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  plugins: [
    wasm()
  ],
  test: {
    // No browser-mode configuration needed
  },
});

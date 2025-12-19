import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait()
  ],
  server: {
    port: 8080,
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
  },
  worker: {
    format: 'es',
    plugins: () => [
      wasm(),
      topLevelAwait()
    ],
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
});

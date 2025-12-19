import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  plugins: [
    wasm(),
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
  },
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
});

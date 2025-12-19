import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const plugins = [
    wasm(),
    topLevelAwait()
  ];

  const config = {
    plugins,
    server: {
      port: 8080,
    },
    build: {
      outDir: 'dist',
      target: 'esnext',
    },
    worker: {
      format: 'es',
      plugins: () => plugins,
    },
    esbuild: {
      supported: {
        'top-level-await': true,
      },
    },
    test: {
      alias: {
        'id3-wasm': path.resolve(__dirname, '../id3-wasm/test-build'),
      },
    },
  };

  if (mode === 'production') {
    config.base = '/id3-wasm/';
  }

  return config;
});

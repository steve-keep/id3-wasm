import { defineConfig, searchForWorkspaceRoot } from 'vite';
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
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd()), 'tests']
      }
    },
    publicDir: 'tests',
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
    resolve: {
      alias: {
        'id3-wasm': path.resolve(__dirname, '../lib/wasm/id3_wasm.js'),
      },
    },
  };

  if (mode === 'production') {
    config.base = '/id3-wasm/';
  }

  return config;
});

import { describe, it, expect, beforeAll } from 'vitest';
import * as id3 from '../src/index';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('id3-wasm', () => {
  beforeAll(() => {
    const wasmBuffer = readFileSync(path.join(__dirname, '../wasm/id3_wasm_bg.wasm'));
    id3.initSync({ module: wasmBuffer });
  });

  it('should export hasId3v2Tag function', () => {
    expect(id3.hasId3v2Tag).toBeInstanceOf(Function);
  });
});

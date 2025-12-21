import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as id3Wasm from 'id3-wasm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mp3 = path.join(__dirname, 'tis-a-faded-picture.mp3');

const expectedMetadata = {
  "artist": "Florrie Forde\r",
  "title": "'Tis a faded picture\r",
  "album": "Edison Amberol: 12255\r",
};

beforeAll(async () => {
  // In a Node.js test environment, we can't rely on Vite's URL resolution for wasm files.
  // Instead, we read the wasm file from the filesystem and pass the buffer to the init function.
  const wasmPath = path.join(__dirname, '../../lib/wasm/id3_wasm_bg.wasm');
  const wasmBuffer = fs.readFileSync(wasmPath);
  await id3Wasm.default(wasmBuffer);
});

describe('Reading a tag', () => {
  it('should extract the correct text metadata', async () => {
    const mp3Buffer = fs.readFileSync(mp3);
    const uint8Array = new Uint8Array(mp3Buffer);
    const tagController = id3Wasm.TagController.from(uint8Array);
    const metadata = tagController.getMetadata();
    const extractedMetadata = {
      artist: metadata.artist,
      title: metadata.title,
      album: metadata.album,
    };
    expect(extractedMetadata).toEqual(expectedMetadata);
    tagController.free();
  });

  it('should get metadata from the end of the file', async () => {
    const mp3Buffer = fs.readFileSync(path.resolve(__dirname, 'tis-a-faded-picture.mp3'));
    const head = new Uint8Array(0); // Pass an empty head to force it to check the tail
    const tail = mp3Buffer.slice(mp3Buffer.length - 128);
    const tagController = id3Wasm.TagController.fromPartial(head, tail);
    const metadata = tagController.getMetadata();
    const extractedMetadata = {
      artist: metadata.artist,
      title: metadata.title,
      album: metadata.album,
    };
    expect(extractedMetadata).toEqual(expectedMetadata);
    tagController.free();
  });

  it('should get metadata from the beginning of the file', async () => {
    const mp3Buffer = fs.readFileSync(path.resolve(__dirname, 'tis-a-faded-picture.mp3'));
    const head = mp3Buffer.slice(0, 4096);
    const tail = mp3Buffer.slice(mp3Buffer.length - 128);
    const tagController = id3Wasm.TagController.fromPartial(head, tail);
    const metadata = tagController.getMetadata();
    const extractedMetadata = {
      artist: metadata.artist,
      title: metadata.title,
      album: metadata.album,
    };
    expect(extractedMetadata).toEqual(expectedMetadata);
    tagController.free();
  });
});

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const mp3 = path.join('tests', 'tis-a-faded-picture.mp3');

const expectedMetadata = {
  "artist": "Florrie Forde\r",
  "title": "'Tis a faded picture\r",
  "album": "Edison Amberol: 12255\r",
};

describe('Reading a tag', () => {
  it('should extract the correct text metadata', async () => {
    const { TagController } = await import('id3-wasm');
    const mp3Buffer = fs.readFileSync(mp3);
    const uint8Array = new Uint8Array(mp3Buffer);
    const tagController = TagController.from(uint8Array);
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
    const { TagController } = await import('id3-wasm');
    const mp3Buffer = fs.readFileSync(path.resolve(__dirname, 'tis-a-faded-picture.mp3'));
    const head = new Uint8Array(0); // Pass an empty head to force it to check the tail
    const tail = mp3Buffer.slice(mp3Buffer.length - 128);
    const tagController = TagController.fromPartial(head, tail);
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
    const { TagController } = await import('id3-wasm');
    const mp3Buffer = fs.readFileSync(path.resolve(__dirname, 'tis-a-faded-picture.mp3'));
    const head = mp3Buffer.slice(0, 4096);
    const tail = mp3Buffer.slice(mp3Buffer.length - 128);
    const tagController = TagController.fromPartial(head, tail);
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

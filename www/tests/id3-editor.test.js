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
    const { TagController } = await import('id3-rw');
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
});

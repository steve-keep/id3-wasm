# id3-wasm

A high-performance library for reading and writing ID3 tags, powered by Rust and WebAssembly.

This package provides the core JavaScript interface for the `id3-wasm` module. For a live demonstration of its capabilities, please see the [demo application](https://steve-keep.github.io/id3-wasm/).

## Installation

```bash
pnpm add id3-wasm
```
or
```bash
npm install id3-wasm
```

## Usage

The library can be used in both Node.js and modern browsers. It's fully compatible with Web Workers.

### Initializing the Module

Before using any functions, you must initialize the WebAssembly module. In a browser environment with a bundler like Vite, this is often handled automatically. In Node.js or a test environment, you may need to do it explicitly.

```javascript
import init from 'id3-wasm';

// This returns a promise that resolves when the Wasm module is ready.
await init();
```

### Reading Metadata from an MP3 File

To read ID3 tags, create a `TagController` from a file buffer (`Uint8Array`) and then get the metadata from it.

```javascript
import init, { TagController } from 'id3-wasm';
import * as fs from 'fs/promises';

// Initialize the Wasm module
await init();

// Example of reading a file in Node.js
const buffer = await fs.readFile('path/to/your/song.mp3');
const uint8Array = new Uint8Array(buffer);

let tagController;
let metadata;
try {
  tagController = TagController.from(uint8Array);
  metadata = tagController.getMetadata();

  console.log('Title:', metadata.title);
  console.log('Artist:', metadata.artist);
  console.log('Album:', metadata.album);
  console.log('Year:', metadata.year);

} catch (e) {
  console.error('Failed to read metadata:', e);
} finally {
  // IMPORTANT: The objects hold pointers to Wasm memory.
  // You MUST free them when you are done to avoid memory leaks.
  if (metadata) {
    metadata.free();
  }
  if (tagController) {
    tagController.free();
  }
}
```

### Modifying Metadata

The `TagController` also allows you to modify tags and write them back into a new buffer.

```javascript
import init, { TagController } from 'id3-wasm';
import * as fs from 'fs/promises';

await init();

const buffer = await fs.readFile('path/to/your/song.mp3');
const uint8Array = new Uint8Array(buffer);

let tagController;
try {
  tagController = TagController.from(uint8Array);

  // Change the metadata
  tagController.setTitle('A New Title');
  tagController.setArtist('A New Artist');
  tagController.setYear(2024);

  // The putTagInto method returns a *new* buffer with the updated tags.
  const newBuffer = tagController.putTagInto(uint8Array);

  // You can now save the newBuffer to a file
  await fs.writeFile('path/to/your/new-song.mp3', newBuffer);
  console.log('New file saved!');

} catch (e) {
  console.error('Failed to modify metadata:', e);
} finally {
  // IMPORTANT: The tagController also needs to be freed.
  if (tagController) {
    tagController.free();
  }
}
```

## API

The full API is exposed via the `TagController` and `Metadata` classes. Refer to the TypeScript definitions in `index.d.ts` for a complete list of available methods and properties.

## Contributing

Interested in contributing? Please refer to the main [README.md](../../README.md) at the root of the repository for setup, build, and testing instructions.

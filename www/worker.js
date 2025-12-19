import * as id3 from 'id3-wasm';

// The wasm-pack module self-initializes when imported as an ES module.
// No explicit `init()` call is required.

self.onmessage = async (event) => {
  const { type, payload } = event.data;

  if (type === 'process') {
    const { file, HEAD_CHUNK_SIZE } = payload;
    const { TagController, hasId3v2Tag } = id3;

    try {
      const head = new Uint8Array(await file.slice(0, HEAD_CHUNK_SIZE).arrayBuffer());
      let tail;
      if (!hasId3v2Tag(head)) {
        tail = file.size >= 128 ? new Uint8Array(await file.slice(file.size - 128).arrayBuffer()) : null;
      }
      let tagController;
      try {
        tagController = TagController.fromPartial(head, tail);
        const metadata = tagController.getMetadata();
        const simplifiedMetadata = {
          title: metadata.title || '',
          artist: metadata.artist || '',
          album: metadata.album || '',
          year: metadata.year || '',
          genre: metadata.genre || '',
        };
        self.postMessage({ type: 'result', payload: { metadata: simplifiedMetadata } });
      } catch (e) {
        self.postMessage({ type: 'error', payload: `Error processing ${file.name}: ${e.message}` });
      } finally {
        if (tagController) {
          tagController.free();
        }
      }
    } catch (error) {
      self.postMessage({ type: 'error', payload: `Failed to process file ${file.name}: ${error.message}` });
    }
  }
};

self.postMessage({ type: 'ready' });

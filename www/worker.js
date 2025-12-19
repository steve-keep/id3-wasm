// The worker will be initialized with the compiled Wasm module from the main thread.
let id3Module = null;

self.onmessage = async (event) => {
  const { type, payload } = event.data;

  if (type === 'init') {
    // The wasm-bindgen generated glue code needs to be imported to bootstrap the module.
// The wasm module is imported by the build tool (Vite).
    const wasm = await import('id3-rw');
    await wasm.default(payload.module);
    id3Module = wasm;
    self.postMessage({ type: 'ready' });
    return;
  }

  if (type === 'process') {
    if (!id3Module) {
      self.postMessage({ type: 'error', payload: 'Worker not initialized.' });
      return;
    }

    const { file, HEAD_CHUNK_SIZE } = payload;
    const { TagController, hasId3v2Tag } = id3Module;

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

import('id3-rw').then(({ TagController, hasId3v2Tag }) => {
  console.log('Wasm module loaded');
  const startButton = document.getElementById('start-button');
  const timingOutput = document.getElementById('timing-output');
  const metadataTableBody = document.querySelector('#metadata-table tbody');

  startButton.addEventListener('click', async () => {
    if (!window.showDirectoryPicker) {
      alert('File System Access API is not supported in this browser.');
      return;
    }

    try {
      const directoryHandle = await window.showDirectoryPicker();
      timingOutput.textContent = 'Scanning...';
      metadataTableBody.innerHTML = '';
      const startTime = performance.now();
      let fileCount = 0;

      const HEAD_CHUNK_SIZE = 4096; // 4KB
      for await (const entry of directoryHandle.values()) {
        if (entry.kind === 'file' && entry.name.endsWith('.mp3')) {
          fileCount++;
          const file = await entry.getFile();
          const head = new Uint8Array(await file.slice(0, HEAD_CHUNK_SIZE).arrayBuffer());
          let tail;
          if (!hasId3v2Tag(head)) {
            tail = file.size >= 128 ? new Uint8Array(await file.slice(file.size - 128).arrayBuffer()) : null;
          }
          let tagController;
          try {
            tagController = TagController.fromPartial(head, tail);
            const metadata = tagController.getMetadata();

            const row = document.createElement('tr');
            const titleCell = document.createElement('td');
            titleCell.textContent = metadata.title || '';
            row.appendChild(titleCell);

            const artistCell = document.createElement('td');
            artistCell.textContent = metadata.artist || '';
            row.appendChild(artistCell);

            const albumCell = document.createElement('td');
            albumCell.textContent = metadata.album || '';
            row.appendChild(albumCell);

            const yearCell = document.createElement('td');
            yearCell.textContent = metadata.year || '';
            row.appendChild(yearCell);

            const genreCell = document.createElement('td');
            genreCell.textContent = metadata.genre || '';
            row.appendChild(genreCell);

            metadataTableBody.appendChild(row);
          } catch (e) {
            console.error(`Error processing ${entry.name}:`, e);
          } finally {
            if (tagController) {
              tagController.free();
            }
          }
        }
      }

      const endTime = performance.now();
      const totalTime = (endTime - startTime) / 1000;
      timingOutput.textContent = `Scanned ${fileCount} files in ${totalTime.toFixed(2)} seconds.`;

    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Error selecting directory:', err);
        timingOutput.textContent = `Error: ${err.message}`;
      }
    }
  });
});

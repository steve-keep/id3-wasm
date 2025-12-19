import('id3-wasm').then(({ TagController }) => {
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

      for await (const entry of directoryHandle.values()) {
        if (entry.kind === 'file' && entry.name.endsWith('.mp3')) {
          fileCount++;
          const file = await entry.getFile();
          const arrayBuffer = await file.arrayBuffer();
          const uint8Array = new Uint8Array(arrayBuffer);
          let tagController;
          try {
            tagController = TagController.from(uint8Array);
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

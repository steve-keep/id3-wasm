const startButton = document.getElementById('start-button');
const timingOutput = document.getElementById('timing-output');
const workerCountOutput = document.getElementById('worker-count-output');
const metadataTableBody = document.querySelector('#metadata-table tbody');

startButton.addEventListener('click', async () => {
  if (!window.showDirectoryPicker) {
    alert('File System Access API is not supported in this browser.');
    return;
  }

  try {
    const directoryHandle = await window.showDirectoryPicker();
    timingOutput.textContent = 'Collecting files...';
    metadataTableBody.innerHTML = '';
    const files = [];

    for await (const entry of directoryHandle.values()) {
      if (entry.kind === 'file' && entry.name.endsWith('.mp3')) {
        files.push(await entry.getFile());
      }
    }

    const numWorkers = navigator.hardwareConcurrency || 4;
    workerCountOutput.textContent = `Using ${numWorkers} workers.`;
    timingOutput.textContent = 'Starting processing...';
    const startTime = performance.now();
    let processedFileCount = 0;
    let activeWorkers = 0;

    const fileQueue = [...files];
    const workers = [];

    const processFiles = () => {
      return new Promise((resolve) => {
        const onWorkerDone = () => {
          activeWorkers--;
          if (activeWorkers === 0 && fileQueue.length === 0) {
            resolve();
          }
        };

        const processNextFile = (worker) => {
          if (fileQueue.length > 0) {
            const file = fileQueue.shift();
            activeWorkers++;
            worker.postMessage({ type: 'process', payload: { file, HEAD_CHUNK_SIZE: 4096 } });
          }
        };

        for (let i = 0; i < numWorkers; i++) {
          const worker = new Worker(new URL('worker.js', import.meta.url));
          workers.push(worker);

          worker.onmessage = (event) => {
            const { type, payload } = event.data;

            if (type === 'ready') {
              processNextFile(worker);
              return;
            }

            processedFileCount++;

            if (type === 'result') {
              const { metadata } = payload;
              const row = document.createElement('tr');

              const titleCell = document.createElement('td');
              titleCell.textContent = metadata.title;
              row.appendChild(titleCell);

              const artistCell = document.createElement('td');
              artistCell.textContent = metadata.artist;
              row.appendChild(artistCell);

              const albumCell = document.createElement('td');
              albumCell.textContent = metadata.album;
              row.appendChild(albumCell);

              const yearCell = document.createElement('td');
              yearCell.textContent = metadata.year;
              row.appendChild(yearCell);

              const genreCell = document.createElement('td');
              genreCell.textContent = metadata.genre;
              row.appendChild(genreCell);

              metadataTableBody.appendChild(row);
            } else if (type === 'error') {
              console.error(payload);
            }

            timingOutput.textContent = `Scanning... Processed ${processedFileCount} of ${files.length} files.`;
            onWorkerDone();
            processNextFile(worker);
          };

          worker.onerror = (error) => {
            console.error('Worker error:', error);
            processedFileCount++;
            onWorkerDone();
            processNextFile(worker);
          };
        }
      });
    };

    await processFiles();

    workers.forEach(worker => worker.terminate());

    const endTime = performance.now();
    const totalTime = (endTime - startTime) / 1000;
    timingOutput.textContent = `Scanned ${files.length} files in ${totalTime.toFixed(2)} seconds.`;

  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error('Error selecting directory:', err);
      timingOutput.textContent = `Error: ${err.message}`;
    }
  }
});

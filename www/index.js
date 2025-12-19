const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const timingOutput = document.getElementById('timing-output');
const workerCountOutput = document.getElementById('worker-count-output');
const metadataTableBody = document.querySelector('#metadata-table tbody');

let isScanning = false;

async function* getFilesRecursively(directoryHandle) {
  if (!isScanning) return;
  for await (const entry of directoryHandle.values()) {
    if (!isScanning) return;
    if (entry.kind === 'file' && entry.name.endsWith('.mp3')) {
      yield entry.getFile();
    } else if (entry.kind === 'directory') {
      yield* getFilesRecursively(entry);
    }
  }
}

function addResultToTable(fragment, metadata) {
  const row = document.createElement('tr');
  const titleCell = document.createElement('td');
  titleCell.textContent = metadata.title || metadata.fileName || 'Unknown';
  row.appendChild(titleCell);

  const artistCell = document.createElement('td');
  artistCell.textContent = metadata.artist || 'Unknown';
  row.appendChild(artistCell);

  const albumCell = document.createElement('td');
  albumCell.textContent = metadata.album || 'Unknown';
  row.appendChild(albumCell);

  const yearCell = document.createElement('td');
  yearCell.textContent = metadata.year || 'Unknown';
  row.appendChild(yearCell);

  const genreCell = document.createElement('td');
  genreCell.textContent = metadata.genre || 'Unknown';
  row.appendChild(genreCell);
  fragment.appendChild(row);
}


startButton.addEventListener('click', async () => {
  if (!window.showDirectoryPicker) {
    alert('File System Access API is not supported in this browser.');
    return;
  }

  if (isScanning) {
    return;
  }

  try {
    const directoryHandle = await window.showDirectoryPicker();
    isScanning = true;
    startButton.disabled = true;
    stopButton.style.display = 'inline-block';
    stopButton.disabled = false;
    metadataTableBody.innerHTML = '';
    timingOutput.textContent = 'Starting scan...';

    const numWorkers = Math.max(1, (navigator.hardwareConcurrency || 2) - 1);
    workerCountOutput.textContent = `Using ${numWorkers} workers.`;
    const workers = [];
    const fileIterator = getFilesRecursively(directoryHandle);
    const workerFileMap = new Map();

    let processedFileCount = 0;
    let totalFilesFound = 0;
    const startTime = performance.now();

    let rowFragment = document.createDocumentFragment();
    let rowCount = 0;

    const processFiles = () => {
      return new Promise((resolve) => {
        let activeWorkers = 0;
        let iteratorDone = false;

        const onDone = () => {
          if (iteratorDone && activeWorkers === 0) {
            if (rowCount > 0) {
              metadataTableBody.appendChild(rowFragment);
            }
            resolve();
          }
        }

        const processNextFile = async (worker) => {
          if (!isScanning) {
            onDone();
            return;
          }

          const next = await fileIterator.next();
          if (next.done) {
            iteratorDone = true;
            onDone();
            return;
          }

          totalFilesFound++;
          activeWorkers++;
          workerFileMap.set(worker, next.value.name);
          worker.postMessage({ type: 'process', payload: { file: next.value, HEAD_CHUNK_SIZE: 4096 } });
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
            activeWorkers--;
            workerFileMap.delete(worker);

            if (type === 'result') {
              addResultToTable(rowFragment, { ...payload.metadata, fileName: payload.fileName });
            } else if (type === 'error') {
              addResultToTable(rowFragment, { fileName: payload.fileName });
              console.error(payload.message);
            }

            rowCount++;
            if (rowCount >= 100) {
              metadataTableBody.appendChild(rowFragment);
              rowFragment = document.createDocumentFragment();
              rowCount = 0;
            }

            timingOutput.textContent = `Scanning... Processed ${processedFileCount} of ${totalFilesFound} files found.`;
            processNextFile(worker);
          };

          worker.onerror = (error) => {
            console.error('Worker error:', error);
            processedFileCount++;
            activeWorkers--;
            const fileName = workerFileMap.get(worker) || 'Unknown file';
            addResultToTable(rowFragment, { fileName });
            workerFileMap.delete(worker);
            processNextFile(worker);
          };
        }
      });
    };

    await processFiles();

    workers.forEach(worker => worker.terminate());
    isScanning = false;
    startButton.disabled = false;
    stopButton.style.display = 'none';

    const endTime = performance.now();
    const totalTime = (endTime - startTime) / 1000;
    if (stopButton.disabled) {
      timingOutput.textContent = `Scan stopped. Processed ${processedFileCount} files in ${totalTime.toFixed(2)} seconds.`;
    } else {
      timingOutput.textContent = `Scanned ${processedFileCount} files in ${totalTime.toFixed(2)} seconds.`;
    }

  } catch (err) {
    isScanning = false;
    startButton.disabled = false;
    stopButton.style.display = 'none';
    if (err.name !== 'AbortError') {
      console.error('Error selecting directory:', err);
      timingOutput.textContent = `Error: ${err.message}`;
    }
  }
});

stopButton.addEventListener('click', () => {
  isScanning = false;
  stopButton.disabled = true;
});

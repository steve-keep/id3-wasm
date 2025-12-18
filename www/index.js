import('id3-rw').then(({ TagController }) => {
  console.log('Wasm module loaded');
  const fileInput = document.getElementById('file-input');
  const metadataOutput = document.getElementById('metadata-output');

  fileInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      const uint8Array = new Uint8Array(arrayBuffer);
      let tagController;
      try {
        tagController = TagController.from(uint8Array);
        const metadata = tagController.getMetadata();
        const metadataString = JSON.stringify({
          artist: metadata.artist,
          title: metadata.title,
          album: metadata.album,
          album_artist: metadata.albumArtist,
          genre: metadata.genre,
          track_index: metadata.track_index,
          track_count: metadata.track_count,
          disc_index: metadata.disc_index,
          disc_count: metadata.disc_count,
          year: metadata.year,
          date_recorded: metadata.dateRecorded,
          date_released: metadata.dateReleased,
          duration: metadata.duration,
          publisher: metadata.publisher,
          album_cover: metadata.albumCover ? 'present' : 'not present',
          lyrics: metadata.lyrics.length > 0 ? 'present' : 'not present',
          comments: metadata.comments.length > 0 ? 'present' : 'not present'
        }, null, 2);
        metadataOutput.textContent = metadataString;
      } catch (e) {
        metadataOutput.textContent = `Error: ${e.message}`;
      } finally {
        if (tagController) {
          tagController.free();
        }
      }
    };
    reader.readAsArrayBuffer(file);
  });
});

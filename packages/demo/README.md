# id3-wasm Demo Application

This directory contains a web-based demonstration application for the `id3-wasm` library.

## Overview

The application showcases the capabilities of `id3-wasm` by allowing users to select a directory of local MP3 files and view their ID3 tag metadata. It is built with Vite and demonstrates modern web platform features.

### Key Features Demonstrated

-   **ID3 Tag Parsing**: Reads and displays metadata from MP3 files using the `id3-wasm` library.
-   **Web Workers**: Performs the file parsing off the main thread in a pool of Web Workers to keep the UI responsive, even with a large number of files.
-   **File System Access API**: Uses the `window.showDirectoryPicker()` API to allow users to select a directory from their local filesystem.

## Development

### Running the Demo

To start the Vite development server for the demo:

```bash
# From the root of the repository
pnpm start
```

The application will be available at `http://localhost:8080`.

## Testing

The tests for this application are located in the `tests/` subdirectory and are run from the repository root.

-   **Unit Tests (Vitest)**:
    ```bash
    # From the root of the repository
    pnpm test
    ```

-   **End-to-End Tests (Playwright)**:
    ```bash
    # From the root of the repository
    pnpm test:e2e
    ```

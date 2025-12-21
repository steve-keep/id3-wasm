import { test, expect } from '@playwright/test';

test('should not have worker initialization error', async ({ page }) => {
  let workerError = null;

  // Listen for the 'worker' event to get a handle to the worker
  page.on('worker', async (worker) => {
    // Listen for console events within the worker
    worker.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        if (text.includes("Cannot use 'import.meta' outside a module") || text.includes("importScripts")) {
           workerError = text;
        }
      }
    });
  });


  // Navigate to the app
  await page.goto('http://localhost:8080');

  // Mock the directory picker to return a fake handle with one file
  await page.evaluate(() => {
    window.showDirectoryPicker = async () => {
      return {
        values: async function*() {
          yield {
            kind: 'file',
            name: 'fake.mp3',
            getFile: async () => new File([''], 'fake.mp3', { type: 'audio/mpeg' })
          };
        }
      };
    };
  });

  // Click the start button, which will attempt to create workers
  await page.click('#start-button');

  // Wait for a short period to allow the worker to be created and potentially log an error
  await page.waitForTimeout(2000);

  // The test will fail if the error is found
  expect(workerError).toBeNull();
});

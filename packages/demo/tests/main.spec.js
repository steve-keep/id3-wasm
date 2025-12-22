import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('should correctly display artist and album metadata', async ({ page }) => {
  // Navigate to the app
  await page.goto('/');

  // Mock the directory picker to return a file handle that fetches the test MP3
  await page.evaluate(() => {
    window.showDirectoryPicker = async () => {
      return {
        values: async function*() {
          yield {
            kind: 'file',
            name: 'tis-a-faded-picture.mp3',
            getFile: async () => {
              const response = await fetch('/tis-a-faded-picture.mp3');
              const blob = await response.blob();
              return new File([blob], 'tis-a-faded-picture.mp3', { type: 'audio/mpeg' });
            },
          };
        },
      };
    };
  });

  // Click the start button
  await page.waitForSelector('#start-button', { state: 'visible' });
  await page.click('#start-button');

  // Wait for the table row to appear
  const row = page.locator('#metadata-table tbody tr');
  await row.waitFor();

  // Check the artist and album in the table
  const artist = await row.locator('td:nth-child(2)').textContent();
  const album = await row.locator('td:nth-child(3)').textContent();

  expect(artist).toBe('Florrie Forde\r');
  expect(album).toBe('Edison Amberol: 12255\r');
});

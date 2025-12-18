import { describe, it, expect } from 'vitest';
import { chromium } from 'playwright';

describe('README', () => {
  it('should not have any broken links', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/');

    const links = await page.$$eval('a', (anchors) =>
      anchors.map((a) => a.href)
    );

    for (const link of links) {
      const newPage = await browser.newPage();
      try {
        const response = await newPage.goto(link);
        expect(response.status()).toBeLessThan(400);
      } finally {
        await newPage.close();
      }
    }

    await browser.close();
  });
});

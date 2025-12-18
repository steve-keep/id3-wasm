const path = require('path');

const mp3 = path.join(__dirname, 'tis-a-faded-picture.mp3');

const expectedMetadata = {
  "artist": "Florrie Forde\r",
  "title": "'Tis a faded picture\r",
  "album": "Edison Amberol: 12255\r",
};

jest.setTimeout(30000);

describe('Reading a tag', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/', { waitUntil: 'load' });
    await page.waitForSelector('#file-input');
    const fileInput = await page.$('#file-input');
    await fileInput.uploadFile(mp3);
    await page.waitForSelector('#metadata-output:not(:empty)');
  });

  it('should output the correct text metadata', async () => {
    expect.assertions(1);
    const metadataText = await page.$eval('#metadata-output', el => el.textContent);
    const metadata = JSON.parse(metadataText);
    expect(metadata).toEqual(expect.objectContaining(expectedMetadata));
  });
});

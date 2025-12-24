import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import * as tar from 'tar';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PACKAGE_ROOT = path.resolve(__dirname, '..');

describe('npm package', () => {
  let tarballName: string;
  let tarballPath: string;

  beforeAll(() => {
    // Build the package to ensure /dist and /wasm are up to date
    execSync('pnpm build', { cwd: PACKAGE_ROOT, stdio: 'inherit' });

    // Pack the package into a .tgz file
    execSync('pnpm pack', { cwd: PACKAGE_ROOT, stdio: 'inherit' });

    // Determine the tarball name from package.json version
    const pkgJsonPath = path.join(PACKAGE_ROOT, 'package.json');
    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
    // pnpm pack uses '-' to separate name and version, not '@'
    tarballName = `id3-wasm-${pkgJson.version}.tgz`;
    tarballPath = path.join(PACKAGE_ROOT, tarballName);

    if (!fs.existsSync(tarballPath)) {
        // Fallback for different pnpm versions that might use @
        const scopedTarballName = `id3-wasm-${pkgJson.version}.tgz`.replace('/', '-');
        const fallbackPath = path.join(PACKAGE_ROOT, scopedTarballName);
        if (fs.existsSync(fallbackPath)) {
            tarballPath = fallbackPath;
        } else {
            throw new Error(`Tarball not found at ${tarballPath} or ${fallbackPath}`);
        }
    }
  });

  afterAll(() => {
    // Clean up the created tarball
    if (fs.existsSync(tarballPath)) {
      fs.unlinkSync(tarballPath);
    }
  });

  it('should include wasm files in the final package', async () => {
    const fileList: string[] = [];
    await tar.list({
      file: tarballPath,
      // The files inside the tarball are prefixed with 'package/'
      onentry: (entry) => {
        fileList.push(entry.path as string);
      },
    });

    // Assert that critical files are present in the package
    expect(fileList).toContain('package/wasm/id3_wasm_bg.wasm');
    expect(fileList).toContain('package/wasm/id3_wasm.js');
    expect(fileList).toContain('package/dist/index.js');
    expect(fileList).toContain('package/package.json');
    expect(fileList).toContain('package/README.md');
  });
});

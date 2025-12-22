# AGENTS.md

This document provides instructions and guidelines for AI agents working on this repository.

## Project Overview

This is a pnpm monorepo containing a Rust-based WebAssembly library (`id3-wasm`) for parsing ID3 tags, a JavaScript wrapper for the Wasm module, and a demo application.

### Key Technologies

-   **Rust**: For the core ID3 parsing logic.
-   **WebAssembly (Wasm)**: The compilation target for the Rust code.
-   **`wasm-pack`**: For building the Rust code into a Wasm module with JavaScript bindings.
-   **pnpm**: For managing dependencies and running scripts in the monorepo.
-   **Vite**: For the demo application's build and development server.
-   **Vitest**: For unit testing.
-   **Playwright**: For end-to-end testing.
-   **GitHub Actions**: For CI/CD.

### Project Structure

-   `packages/rust`: The Rust crate source code.
-   `packages/lib`: The JavaScript wrapper for the Wasm module, which is published to npm as `id3-wasm`.
-   `packages/demo`: The Vite-based demo application that consumes the `id3-wasm` package.
-   `.github/workflows`: Contains the GitHub Actions workflows for testing (`test.yml`) and deployment (`gh-pages.yml`).

## Development Workflow

### Initial Setup

1.  Ensure you have the following installed:
    -   Node.js (v22 or later)
    -   pnpm (v9 or later)
    -   Rust (stable toolchain)
    -   `wasm-pack`

2.  Install all dependencies from the root of the repository:
    ```bash
    pnpm install
    ```

### Building the Project

The entire project is built using a single command from the root directory. This command respects the dependency graph within the monorepo, building packages in the correct order.

```bash
pnpm build
```

**Build Process Details:**
1.  The root `pnpm build` command triggers the `build` script in the `demo` package's `package.json`.
2.  Because `demo` depends on `id3-wasm` (`workspace:*`), `pnpm` first runs the `build` script in the `id3-wasm` package (`packages/lib`).
3.  The `id3-wasm` build script, in turn, runs the build for the Rust crate, compiling it to Wasm using `wasm-pack`.
4.  The compiled Wasm artifacts are then placed within the `packages/lib/wasm` directory.
5.  Finally, the `demo` package is built by Vite.

### Running the Demo Application

To run the demo application locally, use the following command:

```bash
pnpm start
```

This starts the Vite development server, typically available at `http://localhost:8080`.

## Testing

The project has both unit and end-to-end tests, located in the `packages/demo/tests` directory.

### Running Unit Tests

Unit tests are run with Vitest.

```bash
pnpm test
```

### Running End-to-End Tests

End-to-end tests are run with Playwright. These tests require the application to be built and the Vite dev server to be running.

To run the E2E tests:

1.  Make sure browsers are installed: `npx playwright install --with-deps`
2.  The CI workflow uses the following command, which is recommended:
    ```bash
    kill $(lsof -t -i :8080) 2>/dev/null || true && pnpm start > /dev/null 2>&1 & pnpm run test:e2e
    ```
    This ensures any existing server on the port is stopped, starts the dev server in the background, and then runs the tests.

## Coding Conventions & Important Notes

*   **Dependency Management**: This project uses `pnpm` and `pnpm-lock.yaml`. Do not use `npm` or `yarn`, and do not commit `package-lock.json` or `yarn.lock` files.
*   **Wasm Artifacts**: The compiled `.wasm` files and their JavaScript bindings in `packages/lib/wasm` are build artifacts. Do not edit them directly. Modify the Rust source code in `packages/rust/src` and rebuild the project.
*   **Vite Configuration**: The `packages/demo/vite.config.js` file is configured with `vite-plugin-wasm` to handle Wasm imports correctly. Be aware of this when making changes to the build process.
*   **GitHub Actions**: The CI/CD process is defined in `.github/workflows`. Refer to `test.yml` for the testing pipeline and `gh-pages.yml` for the deployment pipeline to GitHub Pages.

## Deployment

The demo application is automatically deployed to GitHub Pages on every push to the `main` branch. The deployment process builds the `demo` package and pushes the contents of the `packages/demo/dist` directory to the `gh-pages` branch.

# id3-wasm

This repository contains the `id3-wasm` library, a high-performance ID3 tag parsing library written in Rust and compiled to WebAssembly, along with a demo application to showcase its capabilities.

## Project Structure

This is a pnpm monorepo with the following packages:

-   `packages/rust`: The core Rust crate that contains the ID3 parsing logic.
-   `packages/lib`: A JavaScript wrapper around the WebAssembly module, published to npm as `id3-wasm`.
-   `packages/demo`: A Vite-based web application that demonstrates the usage of `id3-wasm` in the browser, including in Web Workers.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v22 or later)
-   [pnpm](https://pnpm.io/installation)
-   [Rust](https://www.rust-lang.org/tools/install)
-   [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/steve-keep/id3-wasm.git
    cd id3-wasm
    ```

2.  Install dependencies using pnpm:
    ```bash
    pnpm install
    ```

## Development

### Building the Project

To build the entire project (including the Rust crate, the Wasm wrapper, and the demo app), run the following command from the root directory:

```bash
pnpm build
```

This command will compile the Rust code to WebAssembly, create the necessary JavaScript bindings, and build the demo application.

### Running the Demo

To start the development server for the demo application, run:

```bash
pnpm start
```

This will open the demo app in your browser, usually at `http://localhost:8080`.

### Running Tests

The project uses Vitest for unit tests and Playwright for end-to-end tests.

-   To run all unit tests:
    ```bash
    pnpm test
    ```

-   To run the end-to-end tests:
    ```bash
    pnpm test:e2e
    ```

    **Note:** The end-to-end tests require the demo application to be running. The test script will automatically start the development server.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

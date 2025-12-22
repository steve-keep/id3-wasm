# Rust Crate for `id3-wasm`

This directory contains the core Rust crate that powers the `id3-wasm` library.

## Overview

This crate is responsible for all the low-level ID3 tag parsing and manipulation. It is built upon the excellent [`id3` crate](https://crates.io/crates/id3) and exposes a simplified API for common operations, which is then compiled to WebAssembly.

The primary interface is exposed through a `TagController` struct, which is designed to be used via `wasm-bindgen` from JavaScript.

## Building

This crate is not intended to be built or used as a standalone package. It is an integral part of the `id3-wasm` monorepo.

To build the crate, you should use the root-level build command, which orchestrates the entire process of compiling the Rust code to WebAssembly and integrating it into the final JavaScript package.

For detailed instructions on how to build and test the entire project, please refer to the main [README.md](../../README.md) at the root of the repository.

### Dependencies

-   `id3`: For the core ID3 logic.
-   `wasm-bindgen`: For generating the JavaScript bindings for the WebAssembly module.
-   `js-sys`: To interact with JavaScript types.

## Contributing

If you wish to contribute to the Rust portion of the codebase, please follow the development and testing workflow outlined in the root `README.md`. All changes to this crate should be tested through the main project's testing suite.

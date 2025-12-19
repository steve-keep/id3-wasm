build:
	wasm-pack build --out-dir 'package/wasm' --release
	cp README.md package/README.md
	cp LICENSE package/LICENSE
	rm package/wasm/README.md
	rm package/wasm/package.json
	rm package/wasm/.gitignore

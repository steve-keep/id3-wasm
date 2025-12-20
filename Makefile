build:
	rm -rf id3-wasm/wasm/*
	rm -rf id3-wasm/test-build
	npm install --prefix id3-wasm --legacy-peer-deps
	wasm-pack build --out-dir 'id3-wasm/wasm' --release
	cp README.md id3-wasm/README.md
	cp LICENSE id3-wasm/LICENSE
	rm id3-wasm/wasm/README.md
	rm id3-wasm/wasm/package.json
	rm id3-wasm/wasm/.gitignore

build-test:
	rm -rf id3-wasm/test-build
	wasm-pack build --target nodejs --out-dir 'id3-wasm/test-build' --release

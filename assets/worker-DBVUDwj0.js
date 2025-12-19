(async ()=>{
    let s = null;
    self.onmessage = async (n)=>{
        const { type: l, payload: i } = n.data;
        if (l === "init") {
            const e = await import("./id3_rw-BZDNj7Zl.js").then(async (m)=>{
                await m.__tla;
                return m;
            });
            await e.default(i.module), s = e, self.postMessage({
                type: "ready"
            });
            return;
        }
        if (l === "process") {
            if (!s) {
                self.postMessage({
                    type: "error",
                    payload: "Worker not initialized."
                });
                return;
            }
            const { file: e, HEAD_CHUNK_SIZE: f } = i, { TagController: y, hasId3v2Tag: p } = s;
            try {
                const t = new Uint8Array(await e.slice(0, f).arrayBuffer());
                let o;
                p(t) || (o = e.size >= 128 ? new Uint8Array(await e.slice(e.size - 128).arrayBuffer()) : null);
                let r;
                try {
                    r = y.fromPartial(t, o);
                    const a = r.getMetadata(), d = {
                        title: a.title || "",
                        artist: a.artist || "",
                        album: a.album || "",
                        year: a.year || "",
                        genre: a.genre || ""
                    };
                    self.postMessage({
                        type: "result",
                        payload: {
                            metadata: d
                        }
                    });
                } catch (a) {
                    self.postMessage({
                        type: "error",
                        payload: `Error processing ${e.name}: ${a.message}`
                    });
                } finally{
                    r && r.free();
                }
            } catch (t) {
                self.postMessage({
                    type: "error",
                    payload: `Failed to process file ${e.name}: ${t.message}`
                });
            }
        }
    };
})();

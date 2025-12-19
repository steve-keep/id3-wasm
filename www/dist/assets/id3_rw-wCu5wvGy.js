let x, f, F, v, b, P, U, O, B, $, N, E, V, ge;
let __tla = (async ()=>{
    var M = "/assets/id3_rw_bg-DuZp6mjs.wasm", z = async (a = {}, t)=>{
        let _;
        if (t.startsWith("data:")) {
            const n = t.replace(/^data:.*?base64,/, "");
            let o;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(n, "base64");
            else if (typeof atob == "function") {
                const d = atob(n);
                o = new Uint8Array(d.length);
                for(let s = 0; s < d.length; s++)o[s] = d.charCodeAt(s);
            } else throw new Error("Cannot decode base64-encoded data URL");
            _ = await WebAssembly.instantiate(o, a);
        } else {
            const n = await fetch(t), o = n.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) _ = await WebAssembly.instantiateStreaming(n, a);
            else {
                const d = await n.arrayBuffer();
                _ = await WebAssembly.instantiate(d, a);
            }
        }
        return _.instance.exports;
    };
    let e;
    E = function(a) {
        e = a;
    };
    function W(a, t) {
        if (!(a instanceof t)) throw new Error(`expected instance of ${t.name}`);
    }
    function j(a, t) {
        return a = a >>> 0, w().subarray(a / 1, a / 1 + t);
    }
    function l(a, t) {
        return a = a >>> 0, Y(a, t);
    }
    let A = null;
    function w() {
        return (A === null || A.byteLength === 0) && (A = new Uint8Array(e.memory.buffer)), A;
    }
    function m(a) {
        return a == null;
    }
    function h(a, t) {
        const _ = t(a.length * 1, 1) >>> 0;
        return w().set(a, _ / 1), c = a.length, _;
    }
    function g(a, t, _) {
        if (_ === void 0) {
            const i = y.encode(a), p = t(i.length, 1) >>> 0;
            return w().subarray(p, p + i.length).set(i), c = i.length, p;
        }
        let n = a.length, o = t(n, 1) >>> 0;
        const d = w();
        let s = 0;
        for(; s < n; s++){
            const i = a.charCodeAt(s);
            if (i > 127) break;
            d[o + s] = i;
        }
        if (s !== n) {
            s !== 0 && (a = a.slice(s)), o = _(o, n, n = s + a.length * 3, 1) >>> 0;
            const i = w().subarray(o + s, o + n), p = y.encodeInto(a, i);
            s += p.written, o = _(o, n, s, 1) >>> 0;
        }
        return c = s, o;
    }
    function u(a) {
        const t = e.__wbindgen_externrefs.get(a);
        return e.__externref_table_dealloc(a), t;
    }
    let T = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    T.decode();
    const L = 2146435072;
    let I = 0;
    function Y(a, t) {
        return I += t, I >= L && (T = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), T.decode(), I = t), T.decode(w().subarray(a, a + t));
    }
    const y = new TextEncoder;
    "encodeInto" in y || (y.encodeInto = function(a, t) {
        const _ = y.encode(a);
        return t.set(_), {
            read: a.length,
            written: _.length
        };
    });
    let c = 0;
    const C = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((a)=>e.__wbg_albumcovermetadatum_free(a >>> 0, 1)), k = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((a)=>e.__wbg_commentmetadatum_free(a >>> 0, 1)), G = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((a)=>e.__wbg_extendedtextmetadatum_free(a >>> 0, 1)), D = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((a)=>e.__wbg_metadata_free(a >>> 0, 1)), R = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((a)=>e.__wbg_tagcontroller_free(a >>> 0, 1));
    x = class {
        static __wrap(t) {
            t = t >>> 0;
            const _ = Object.create(x.prototype);
            return _.__wbg_ptr = t, C.register(_, _.__wbg_ptr, _), _;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, C.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            e.__wbg_albumcovermetadatum_free(t, 0);
        }
        get data() {
            return e.albumcovermetadatum_data(this.__wbg_ptr);
        }
        get mimeType() {
            let t, _;
            try {
                const n = e.albumcovermetadatum_mimeType(this.__wbg_ptr);
                return t = n[0], _ = n[1], l(n[0], n[1]);
            } finally{
                e.__wbindgen_free(t, _, 1);
            }
        }
    };
    Symbol.dispose && (x.prototype[Symbol.dispose] = x.prototype.free);
    f = class {
        static __wrap(t) {
            t = t >>> 0;
            const _ = Object.create(f.prototype);
            return _.__wbg_ptr = t, k.register(_, _.__wbg_ptr, _), _;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, k.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            e.__wbg_commentmetadatum_free(t, 0);
        }
        get description() {
            let t, _;
            try {
                const n = e.commentmetadatum_description(this.__wbg_ptr);
                return t = n[0], _ = n[1], l(n[0], n[1]);
            } finally{
                e.__wbindgen_free(t, _, 1);
            }
        }
        get lang() {
            let t, _;
            try {
                const n = e.commentmetadatum_lang(this.__wbg_ptr);
                return t = n[0], _ = n[1], l(n[0], n[1]);
            } finally{
                e.__wbindgen_free(t, _, 1);
            }
        }
        get text() {
            let t, _;
            try {
                const n = e.commentmetadatum_text(this.__wbg_ptr);
                return t = n[0], _ = n[1], l(n[0], n[1]);
            } finally{
                e.__wbindgen_free(t, _, 1);
            }
        }
    };
    Symbol.dispose && (f.prototype[Symbol.dispose] = f.prototype.free);
    F = class {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, G.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            e.__wbg_extendedtextmetadatum_free(t, 0);
        }
        get description() {
            let t, _;
            try {
                const n = e.extendedtextmetadatum_description(this.__wbg_ptr);
                return t = n[0], _ = n[1], l(n[0], n[1]);
            } finally{
                e.__wbindgen_free(t, _, 1);
            }
        }
        get value() {
            let t, _;
            try {
                const n = e.extendedtextmetadatum_value(this.__wbg_ptr);
                return t = n[0], _ = n[1], l(n[0], n[1]);
            } finally{
                e.__wbindgen_free(t, _, 1);
            }
        }
    };
    Symbol.dispose && (F.prototype[Symbol.dispose] = F.prototype.free);
    v = class {
        static __wrap(t) {
            t = t >>> 0;
            const _ = Object.create(v.prototype);
            return _.__wbg_ptr = t, D.register(_, _.__wbg_ptr, _), _;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, D.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            e.__wbg_metadata_free(t, 0);
        }
        get trackIndex() {
            const t = e.__wbg_get_metadata_trackIndex(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set trackIndex(t) {
            e.__wbg_set_metadata_trackIndex(this.__wbg_ptr, m(t) ? 4294967297 : t >>> 0);
        }
        get trackCount() {
            const t = e.__wbg_get_metadata_trackCount(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set trackCount(t) {
            e.__wbg_set_metadata_trackCount(this.__wbg_ptr, m(t) ? 4294967297 : t >>> 0);
        }
        get discIndex() {
            const t = e.__wbg_get_metadata_discIndex(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set discIndex(t) {
            e.__wbg_set_metadata_discIndex(this.__wbg_ptr, m(t) ? 4294967297 : t >>> 0);
        }
        get discCount() {
            const t = e.__wbg_get_metadata_discCount(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set discCount(t) {
            e.__wbg_set_metadata_discCount(this.__wbg_ptr, m(t) ? 4294967297 : t >>> 0);
        }
        get year() {
            const t = e.__wbg_get_metadata_year(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set year(t) {
            e.__wbg_set_metadata_year(this.__wbg_ptr, m(t) ? 4294967297 : t >> 0);
        }
        get duration() {
            const t = e.__wbg_get_metadata_duration(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set duration(t) {
            e.__wbg_set_metadata_duration(this.__wbg_ptr, m(t) ? 4294967297 : t >>> 0);
        }
        get albumCover() {
            const t = e.metadata_albumCover(this.__wbg_ptr);
            return t === 0 ? void 0 : x.__wrap(t);
        }
        get albumArtist() {
            const t = e.metadata_albumArtist(this.__wbg_ptr);
            let _;
            return t[0] !== 0 && (_ = l(t[0], t[1]).slice(), e.__wbindgen_free(t[0], t[1] * 1, 1)), _;
        }
        get dateRecorded() {
            const t = e.metadata_dateRecorded(this.__wbg_ptr);
            let _;
            return t[0] !== 0 && (_ = l(t[0], t[1]).slice(), e.__wbindgen_free(t[0], t[1] * 1, 1)), _;
        }
        get dateReleased() {
            const t = e.metadata_dateReleased(this.__wbg_ptr);
            let _;
            return t[0] !== 0 && (_ = l(t[0], t[1]).slice(), e.__wbindgen_free(t[0], t[1] * 1, 1)), _;
        }
        get album() {
            const t = e.metadata_album(this.__wbg_ptr);
            let _;
            return t[0] !== 0 && (_ = l(t[0], t[1]).slice(), e.__wbindgen_free(t[0], t[1] * 1, 1)), _;
        }
        get genre() {
            const t = e.metadata_genre(this.__wbg_ptr);
            let _;
            return t[0] !== 0 && (_ = l(t[0], t[1]).slice(), e.__wbindgen_free(t[0], t[1] * 1, 1)), _;
        }
        get title() {
            const t = e.metadata_title(this.__wbg_ptr);
            let _;
            return t[0] !== 0 && (_ = l(t[0], t[1]).slice(), e.__wbindgen_free(t[0], t[1] * 1, 1)), _;
        }
        get artist() {
            const t = e.metadata_artist(this.__wbg_ptr);
            let _;
            return t[0] !== 0 && (_ = l(t[0], t[1]).slice(), e.__wbindgen_free(t[0], t[1] * 1, 1)), _;
        }
        get lyrics() {
            return e.metadata_lyrics(this.__wbg_ptr);
        }
        get comments() {
            return e.metadata_comments(this.__wbg_ptr);
        }
        get publisher() {
            const t = e.metadata_publisher(this.__wbg_ptr);
            let _;
            return t[0] !== 0 && (_ = l(t[0], t[1]).slice(), e.__wbindgen_free(t[0], t[1] * 1, 1)), _;
        }
    };
    Symbol.dispose && (v.prototype[Symbol.dispose] = v.prototype.free);
    b = class {
        static __wrap(t) {
            t = t >>> 0;
            const _ = Object.create(b.prototype);
            return _.__wbg_ptr = t, R.register(_, _.__wbg_ptr, _), _;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, R.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            e.__wbg_tagcontroller_free(t, 0);
        }
        addLyrics(t) {
            W(t, f);
            var _ = t.__destroy_into_raw();
            e.tagcontroller_addLyrics(this.__wbg_ptr, _);
        }
        setArtist(t) {
            const _ = g(t, e.__wbindgen_malloc, e.__wbindgen_realloc), n = c;
            e.tagcontroller_setArtist(this.__wbg_ptr, _, n);
        }
        removeYear() {
            e.tagcontroller_removeYear(this.__wbg_ptr);
        }
        static fromPartial(t, _) {
            const n = h(t, e.__wbindgen_malloc), o = c;
            var d = m(_) ? 0 : h(_, e.__wbindgen_malloc), s = c;
            const i = e.tagcontroller_fromPartial(n, o, d, s);
            if (i[2]) throw u(i[1]);
            return b.__wrap(i[0]);
        }
        getMetadata() {
            const t = e.tagcontroller_getMetadata(this.__wbg_ptr);
            return v.__wrap(t);
        }
        putTagInto(t) {
            const _ = h(t, e.__wbindgen_malloc), n = c, o = e.tagcontroller_putTagInto(this.__wbg_ptr, _, n);
            if (o[2]) throw u(o[1]);
            return u(o[0]);
        }
        removeAlbum() {
            e.tagcontroller_removeAlbum(this.__wbg_ptr);
        }
        removeGenre() {
            e.tagcontroller_removeGenre(this.__wbg_ptr);
        }
        removeTitle() {
            e.tagcontroller_removeTitle(this.__wbg_ptr);
        }
        setDuration(t) {
            e.tagcontroller_setDuration(this.__wbg_ptr, t);
        }
        removeArtist() {
            e.tagcontroller_removeArtist(this.__wbg_ptr);
        }
        setPublisher(t) {
            const _ = g(t, e.__wbindgen_malloc, e.__wbindgen_realloc), n = c;
            e.tagcontroller_setPublisher(this.__wbg_ptr, _, n);
        }
        setDiscCount(t) {
            e.tagcontroller_setDiscCount(this.__wbg_ptr, t);
        }
        setDiscIndex(t) {
            e.tagcontroller_setDiscIndex(this.__wbg_ptr, t);
        }
        setTrackCount(t) {
            e.tagcontroller_setTrackCount(this.__wbg_ptr, t);
        }
        setTrackIndex(t) {
            e.tagcontroller_setTrackIndex(this.__wbg_ptr, t);
        }
        setAlbumArtist(t) {
            const _ = g(t, e.__wbindgen_malloc, e.__wbindgen_realloc), n = c;
            e.tagcontroller_setAlbumArtist(this.__wbg_ptr, _, n);
        }
        removeDiscCount() {
            e.tagcontroller_removeDiscCount(this.__wbg_ptr);
        }
        removeDiscIndex() {
            e.tagcontroller_removeDiscIndex(this.__wbg_ptr);
        }
        setDateRecorded(t) {
            const _ = g(t, e.__wbindgen_malloc, e.__wbindgen_realloc), n = c, o = e.tagcontroller_setDateRecorded(this.__wbg_ptr, _, n);
            if (o[1]) throw u(o[0]);
        }
        setDateReleased(t) {
            const _ = g(t, e.__wbindgen_malloc, e.__wbindgen_realloc), n = c, o = e.tagcontroller_setDateReleased(this.__wbg_ptr, _, n);
            if (o[1]) throw u(o[0]);
        }
        removeTrackCount() {
            e.tagcontroller_removeTrackCount(this.__wbg_ptr);
        }
        removeTrackIndex() {
            e.tagcontroller_removeTrackIndex(this.__wbg_ptr);
        }
        removeAlbumArtist() {
            e.tagcontroller_removeAlbumArtist(this.__wbg_ptr);
        }
        static new() {
            const t = e.tagcontroller_new();
            return b.__wrap(t);
        }
        static from(t) {
            const _ = h(t, e.__wbindgen_malloc), n = c, o = e.tagcontroller_from(_, n);
            if (o[2]) throw u(o[1]);
            return b.__wrap(o[0]);
        }
        setYear(t) {
            e.tagcontroller_setYear(this.__wbg_ptr, t);
        }
        setAlbum(t) {
            const _ = g(t, e.__wbindgen_malloc, e.__wbindgen_realloc), n = c;
            e.tagcontroller_setAlbum(this.__wbg_ptr, _, n);
        }
        setGenre(t) {
            const _ = g(t, e.__wbindgen_malloc, e.__wbindgen_realloc), n = c;
            e.tagcontroller_setGenre(this.__wbg_ptr, _, n);
        }
        setTitle(t) {
            const _ = g(t, e.__wbindgen_malloc, e.__wbindgen_realloc), n = c;
            e.tagcontroller_setTitle(this.__wbg_ptr, _, n);
        }
    };
    Symbol.dispose && (b.prototype[Symbol.dispose] = b.prototype.free);
    ge = function(a) {
        const t = h(a, e.__wbindgen_malloc), _ = c;
        return e.hasId3v2Tag(t, _) !== 0;
    };
    P = function(a, t) {
        throw new Error(l(a, t));
    };
    U = function(a) {
        return f.__wrap(a);
    };
    O = function() {
        return new Array;
    };
    B = function(a, t) {
        return new Error(l(a, t));
    };
    $ = function(a, t) {
        return new Uint8Array(j(a, t));
    };
    N = function(a, t) {
        return a.push(t);
    };
    V = function() {
        const a = e.__wbindgen_externrefs, t = a.grow(4);
        a.set(0, void 0), a.set(t + 0, void 0), a.set(t + 1, null), a.set(t + 2, !0), a.set(t + 3, !1);
    };
    URL = globalThis.URL;
    const r = await z({
        "./id3_rw_bg.js": {
            __wbg_commentmetadatum_new: U,
            __wbg_new_25f239778d6112b9: O,
            __wbg_new_from_slice_f9c22b9153b26992: $,
            __wbg_push_7d9be8f38fc13975: N,
            __wbg_new_df1173567d5ff028: B,
            __wbg___wbindgen_throw_dd24417ed36fc46e: P,
            __wbindgen_init_externref_table: V
        }
    }, M), X = r.memory, Z = r.__wbg_albumcovermetadatum_free, q = r.__wbg_commentmetadatum_free, H = r.__wbg_extendedtextmetadatum_free, J = r.__wbg_get_metadata_discCount, K = r.__wbg_get_metadata_discIndex, Q = r.__wbg_get_metadata_duration, tt = r.__wbg_get_metadata_trackCount, et = r.__wbg_get_metadata_trackIndex, _t = r.__wbg_get_metadata_year, rt = r.__wbg_metadata_free, at = r.__wbg_set_metadata_discCount, nt = r.__wbg_set_metadata_discIndex, ot = r.__wbg_set_metadata_duration, st = r.__wbg_set_metadata_trackCount, ct = r.__wbg_set_metadata_trackIndex, lt = r.__wbg_set_metadata_year, it = r.__wbg_tagcontroller_free, dt = r.albumcovermetadatum_data, gt = r.albumcovermetadatum_mimeType, mt = r.commentmetadatum_description, bt = r.commentmetadatum_lang, ut = r.commentmetadatum_text, wt = r.extendedtextmetadatum_description, ft = r.extendedtextmetadatum_value, pt = r.hasId3v2Tag, ht = r.metadata_album, yt = r.metadata_albumArtist, xt = r.metadata_albumCover, vt = r.metadata_artist, At = r.metadata_comments, Tt = r.metadata_dateRecorded, It = r.metadata_dateReleased, Ct = r.metadata_genre, kt = r.metadata_lyrics, Dt = r.metadata_publisher, Rt = r.metadata_title, Ft = r.tagcontroller_addLyrics, St = r.tagcontroller_from, Mt = r.tagcontroller_fromPartial, zt = r.tagcontroller_getMetadata, Et = r.tagcontroller_new, Wt = r.tagcontroller_putTagInto, jt = r.tagcontroller_removeAlbum, Lt = r.tagcontroller_removeAlbumArtist, Yt = r.tagcontroller_removeArtist, Gt = r.tagcontroller_removeDiscCount, Pt = r.tagcontroller_removeDiscIndex, Ut = r.tagcontroller_removeGenre, Ot = r.tagcontroller_removeTitle, Bt = r.tagcontroller_removeTrackCount, $t = r.tagcontroller_removeTrackIndex, Nt = r.tagcontroller_removeYear, Vt = r.tagcontroller_setAlbum, Xt = r.tagcontroller_setAlbumArtist, Zt = r.tagcontroller_setArtist, qt = r.tagcontroller_setDateRecorded, Ht = r.tagcontroller_setDateReleased, Jt = r.tagcontroller_setDiscCount, Kt = r.tagcontroller_setDiscIndex, Qt = r.tagcontroller_setDuration, te = r.tagcontroller_setGenre, ee = r.tagcontroller_setPublisher, _e = r.tagcontroller_setTitle, re = r.tagcontroller_setTrackCount, ae = r.tagcontroller_setTrackIndex, ne = r.tagcontroller_setYear, oe = r.__wbindgen_externrefs, se = r.__wbindgen_malloc, ce = r.__wbindgen_realloc, le = r.__externref_table_dealloc, ie = r.__wbindgen_free, S = r.__wbindgen_start;
    var de = Object.freeze({
        __proto__: null,
        __externref_table_dealloc: le,
        __wbg_albumcovermetadatum_free: Z,
        __wbg_commentmetadatum_free: q,
        __wbg_extendedtextmetadatum_free: H,
        __wbg_get_metadata_discCount: J,
        __wbg_get_metadata_discIndex: K,
        __wbg_get_metadata_duration: Q,
        __wbg_get_metadata_trackCount: tt,
        __wbg_get_metadata_trackIndex: et,
        __wbg_get_metadata_year: _t,
        __wbg_metadata_free: rt,
        __wbg_set_metadata_discCount: at,
        __wbg_set_metadata_discIndex: nt,
        __wbg_set_metadata_duration: ot,
        __wbg_set_metadata_trackCount: st,
        __wbg_set_metadata_trackIndex: ct,
        __wbg_set_metadata_year: lt,
        __wbg_tagcontroller_free: it,
        __wbindgen_externrefs: oe,
        __wbindgen_free: ie,
        __wbindgen_malloc: se,
        __wbindgen_realloc: ce,
        __wbindgen_start: S,
        albumcovermetadatum_data: dt,
        albumcovermetadatum_mimeType: gt,
        commentmetadatum_description: mt,
        commentmetadatum_lang: bt,
        commentmetadatum_text: ut,
        extendedtextmetadatum_description: wt,
        extendedtextmetadatum_value: ft,
        hasId3v2Tag: pt,
        memory: X,
        metadata_album: ht,
        metadata_albumArtist: yt,
        metadata_albumCover: xt,
        metadata_artist: vt,
        metadata_comments: At,
        metadata_dateRecorded: Tt,
        metadata_dateReleased: It,
        metadata_genre: Ct,
        metadata_lyrics: kt,
        metadata_publisher: Dt,
        metadata_title: Rt,
        tagcontroller_addLyrics: Ft,
        tagcontroller_from: St,
        tagcontroller_fromPartial: Mt,
        tagcontroller_getMetadata: zt,
        tagcontroller_new: Et,
        tagcontroller_putTagInto: Wt,
        tagcontroller_removeAlbum: jt,
        tagcontroller_removeAlbumArtist: Lt,
        tagcontroller_removeArtist: Yt,
        tagcontroller_removeDiscCount: Gt,
        tagcontroller_removeDiscIndex: Pt,
        tagcontroller_removeGenre: Ut,
        tagcontroller_removeTitle: Ot,
        tagcontroller_removeTrackCount: Bt,
        tagcontroller_removeTrackIndex: $t,
        tagcontroller_removeYear: Nt,
        tagcontroller_setAlbum: Vt,
        tagcontroller_setAlbumArtist: Xt,
        tagcontroller_setArtist: Zt,
        tagcontroller_setDateRecorded: qt,
        tagcontroller_setDateReleased: Ht,
        tagcontroller_setDiscCount: Jt,
        tagcontroller_setDiscIndex: Kt,
        tagcontroller_setDuration: Qt,
        tagcontroller_setGenre: te,
        tagcontroller_setPublisher: ee,
        tagcontroller_setTitle: _e,
        tagcontroller_setTrackCount: re,
        tagcontroller_setTrackIndex: ae,
        tagcontroller_setYear: ne
    });
    E(de);
    S();
})();
export { x as AlbumCoverMetadatum, f as CommentMetadatum, F as ExtendedTextMetadatum, v as Metadata, b as TagController, P as __wbg___wbindgen_throw_dd24417ed36fc46e, U as __wbg_commentmetadatum_new, O as __wbg_new_25f239778d6112b9, B as __wbg_new_df1173567d5ff028, $ as __wbg_new_from_slice_f9c22b9153b26992, N as __wbg_push_7d9be8f38fc13975, E as __wbg_set_wasm, V as __wbindgen_init_externref_table, ge as hasId3v2Tag, __tla };

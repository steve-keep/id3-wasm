(async ()=>{
    var O = "/id3-wasm/assets/id3_wasm_bg--ph7RF0A.wasm", $ = async (a = {}, t)=>{
        let e;
        if (t.startsWith("data:")) {
            const r = t.replace(/^data:.*?base64,/, "");
            let o;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(r, "base64");
            else if (typeof atob == "function") {
                const d = atob(r);
                o = new Uint8Array(d.length);
                for(let s = 0; s < d.length; s++)o[s] = d.charCodeAt(s);
            } else throw new Error("Cannot decode base64-encoded data URL");
            e = await WebAssembly.instantiate(o, a);
        } else {
            const r = await fetch(t), o = r.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(r, a);
            else {
                const d = await r.arrayBuffer();
                e = await WebAssembly.instantiate(d, a);
            }
        }
        return e.instance.exports;
    };
    let _;
    function S(a) {
        _ = a;
    }
    function N(a, t) {
        if (!(a instanceof t)) throw new Error(`expected instance of ${t.name}`);
    }
    function H(a, t) {
        return a = a >>> 0, y().subarray(a / 1, a / 1 + t);
    }
    function i(a, t) {
        return a = a >>> 0, V(a, t);
    }
    let C = null;
    function y() {
        return (C === null || C.byteLength === 0) && (C = new Uint8Array(_.memory.buffer)), C;
    }
    function w(a) {
        return a == null;
    }
    function v(a, t) {
        const e = t(a.length * 1, 1) >>> 0;
        return y().set(a, e / 1), c = a.length, e;
    }
    function m(a, t, e) {
        if (e === void 0) {
            const l = A.encode(a), g = t(l.length, 1) >>> 0;
            return y().subarray(g, g + l.length).set(l), c = l.length, g;
        }
        let r = a.length, o = t(r, 1) >>> 0;
        const d = y();
        let s = 0;
        for(; s < r; s++){
            const l = a.charCodeAt(s);
            if (l > 127) break;
            d[o + s] = l;
        }
        if (s !== r) {
            s !== 0 && (a = a.slice(s)), o = e(o, r, r = s + a.length * 3, 1) >>> 0;
            const l = y().subarray(o + s, o + r), g = A.encodeInto(a, l);
            s += g.written, o = e(o, r, s, 1) >>> 0;
        }
        return c = s, o;
    }
    function p(a) {
        const t = _.__wbindgen_externrefs.get(a);
        return _.__externref_table_dealloc(a), t;
    }
    let I = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    I.decode();
    const K = 2146435072;
    let k = 0;
    function V(a, t) {
        return k += t, k >= K && (I = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), I.decode(), k = t), I.decode(y().subarray(a, a + t));
    }
    const A = new TextEncoder;
    "encodeInto" in A || (A.encodeInto = function(a, t) {
        const e = A.encode(a);
        return t.set(e), {
            read: a.length,
            written: e.length
        };
    });
    let c = 0;
    const R = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((a)=>_.__wbg_albumcovermetadatum_free(a >>> 0, 1)), M = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((a)=>_.__wbg_commentmetadatum_free(a >>> 0, 1)), X = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((a)=>_.__wbg_extendedtextmetadatum_free(a >>> 0, 1)), F = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((a)=>_.__wbg_metadata_free(a >>> 0, 1)), z = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((a)=>_.__wbg_tagcontroller_free(a >>> 0, 1));
    class h {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(h.prototype);
            return e.__wbg_ptr = t, R.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, R.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            _.__wbg_albumcovermetadatum_free(t, 0);
        }
        get data() {
            return _.albumcovermetadatum_data(this.__wbg_ptr);
        }
        get mimeType() {
            let t, e;
            try {
                const r = _.albumcovermetadatum_mimeType(this.__wbg_ptr);
                return t = r[0], e = r[1], i(r[0], r[1]);
            } finally{
                _.__wbindgen_free(t, e, 1);
            }
        }
    }
    Symbol.dispose && (h.prototype[Symbol.dispose] = h.prototype.free);
    class f {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(f.prototype);
            return e.__wbg_ptr = t, M.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, M.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            _.__wbg_commentmetadatum_free(t, 0);
        }
        get description() {
            let t, e;
            try {
                const r = _.commentmetadatum_description(this.__wbg_ptr);
                return t = r[0], e = r[1], i(r[0], r[1]);
            } finally{
                _.__wbindgen_free(t, e, 1);
            }
        }
        get lang() {
            let t, e;
            try {
                const r = _.commentmetadatum_lang(this.__wbg_ptr);
                return t = r[0], e = r[1], i(r[0], r[1]);
            } finally{
                _.__wbindgen_free(t, e, 1);
            }
        }
        get text() {
            let t, e;
            try {
                const r = _.commentmetadatum_text(this.__wbg_ptr);
                return t = r[0], e = r[1], i(r[0], r[1]);
            } finally{
                _.__wbindgen_free(t, e, 1);
            }
        }
    }
    Symbol.dispose && (f.prototype[Symbol.dispose] = f.prototype.free);
    class D {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, X.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            _.__wbg_extendedtextmetadatum_free(t, 0);
        }
        get description() {
            let t, e;
            try {
                const r = _.extendedtextmetadatum_description(this.__wbg_ptr);
                return t = r[0], e = r[1], i(r[0], r[1]);
            } finally{
                _.__wbindgen_free(t, e, 1);
            }
        }
        get value() {
            let t, e;
            try {
                const r = _.extendedtextmetadatum_value(this.__wbg_ptr);
                return t = r[0], e = r[1], i(r[0], r[1]);
            } finally{
                _.__wbindgen_free(t, e, 1);
            }
        }
    }
    Symbol.dispose && (D.prototype[Symbol.dispose] = D.prototype.free);
    class x {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(x.prototype);
            return e.__wbg_ptr = t, F.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, F.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            _.__wbg_metadata_free(t, 0);
        }
        get trackIndex() {
            const t = _.__wbg_get_metadata_trackIndex(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set trackIndex(t) {
            _.__wbg_set_metadata_trackIndex(this.__wbg_ptr, w(t) ? 4294967297 : t >>> 0);
        }
        get trackCount() {
            const t = _.__wbg_get_metadata_trackCount(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set trackCount(t) {
            _.__wbg_set_metadata_trackCount(this.__wbg_ptr, w(t) ? 4294967297 : t >>> 0);
        }
        get discIndex() {
            const t = _.__wbg_get_metadata_discIndex(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set discIndex(t) {
            _.__wbg_set_metadata_discIndex(this.__wbg_ptr, w(t) ? 4294967297 : t >>> 0);
        }
        get discCount() {
            const t = _.__wbg_get_metadata_discCount(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set discCount(t) {
            _.__wbg_set_metadata_discCount(this.__wbg_ptr, w(t) ? 4294967297 : t >>> 0);
        }
        get year() {
            const t = _.__wbg_get_metadata_year(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set year(t) {
            _.__wbg_set_metadata_year(this.__wbg_ptr, w(t) ? 4294967297 : t >> 0);
        }
        get duration() {
            const t = _.__wbg_get_metadata_duration(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set duration(t) {
            _.__wbg_set_metadata_duration(this.__wbg_ptr, w(t) ? 4294967297 : t >>> 0);
        }
        get albumCover() {
            const t = _.metadata_albumCover(this.__wbg_ptr);
            return t === 0 ? void 0 : h.__wrap(t);
        }
        get albumArtist() {
            const t = _.metadata_albumArtist(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = i(t[0], t[1]).slice(), _.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get dateRecorded() {
            const t = _.metadata_dateRecorded(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = i(t[0], t[1]).slice(), _.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get dateReleased() {
            const t = _.metadata_dateReleased(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = i(t[0], t[1]).slice(), _.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get album() {
            const t = _.metadata_album(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = i(t[0], t[1]).slice(), _.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get genre() {
            const t = _.metadata_genre(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = i(t[0], t[1]).slice(), _.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get title() {
            const t = _.metadata_title(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = i(t[0], t[1]).slice(), _.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get artist() {
            const t = _.metadata_artist(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = i(t[0], t[1]).slice(), _.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get lyrics() {
            return _.metadata_lyrics(this.__wbg_ptr);
        }
        get comments() {
            return _.metadata_comments(this.__wbg_ptr);
        }
        get publisher() {
            const t = _.metadata_publisher(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = i(t[0], t[1]).slice(), _.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
    }
    Symbol.dispose && (x.prototype[Symbol.dispose] = x.prototype.free);
    class b {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(b.prototype);
            return e.__wbg_ptr = t, z.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, z.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            _.__wbg_tagcontroller_free(t, 0);
        }
        addLyrics(t) {
            N(t, f);
            var e = t.__destroy_into_raw();
            _.tagcontroller_addLyrics(this.__wbg_ptr, e);
        }
        setArtist(t) {
            const e = m(t, _.__wbindgen_malloc, _.__wbindgen_realloc), r = c;
            _.tagcontroller_setArtist(this.__wbg_ptr, e, r);
        }
        removeYear() {
            _.tagcontroller_removeYear(this.__wbg_ptr);
        }
        static fromPartial(t, e) {
            const r = v(t, _.__wbindgen_malloc), o = c;
            var d = w(e) ? 0 : v(e, _.__wbindgen_malloc), s = c;
            const l = _.tagcontroller_fromPartial(r, o, d, s);
            if (l[2]) throw p(l[1]);
            return b.__wrap(l[0]);
        }
        getMetadata() {
            const t = _.tagcontroller_getMetadata(this.__wbg_ptr);
            return x.__wrap(t);
        }
        putTagInto(t) {
            const e = v(t, _.__wbindgen_malloc), r = c, o = _.tagcontroller_putTagInto(this.__wbg_ptr, e, r);
            if (o[2]) throw p(o[1]);
            return p(o[0]);
        }
        removeAlbum() {
            _.tagcontroller_removeAlbum(this.__wbg_ptr);
        }
        removeGenre() {
            _.tagcontroller_removeGenre(this.__wbg_ptr);
        }
        removeTitle() {
            _.tagcontroller_removeTitle(this.__wbg_ptr);
        }
        setDuration(t) {
            _.tagcontroller_setDuration(this.__wbg_ptr, t);
        }
        removeArtist() {
            _.tagcontroller_removeArtist(this.__wbg_ptr);
        }
        setPublisher(t) {
            const e = m(t, _.__wbindgen_malloc, _.__wbindgen_realloc), r = c;
            _.tagcontroller_setPublisher(this.__wbg_ptr, e, r);
        }
        setDiscCount(t) {
            _.tagcontroller_setDiscCount(this.__wbg_ptr, t);
        }
        setDiscIndex(t) {
            _.tagcontroller_setDiscIndex(this.__wbg_ptr, t);
        }
        setTrackCount(t) {
            _.tagcontroller_setTrackCount(this.__wbg_ptr, t);
        }
        setTrackIndex(t) {
            _.tagcontroller_setTrackIndex(this.__wbg_ptr, t);
        }
        setAlbumArtist(t) {
            const e = m(t, _.__wbindgen_malloc, _.__wbindgen_realloc), r = c;
            _.tagcontroller_setAlbumArtist(this.__wbg_ptr, e, r);
        }
        removeDiscCount() {
            _.tagcontroller_removeDiscCount(this.__wbg_ptr);
        }
        removeDiscIndex() {
            _.tagcontroller_removeDiscIndex(this.__wbg_ptr);
        }
        setDateRecorded(t) {
            const e = m(t, _.__wbindgen_malloc, _.__wbindgen_realloc), r = c, o = _.tagcontroller_setDateRecorded(this.__wbg_ptr, e, r);
            if (o[1]) throw p(o[0]);
        }
        setDateReleased(t) {
            const e = m(t, _.__wbindgen_malloc, _.__wbindgen_realloc), r = c, o = _.tagcontroller_setDateReleased(this.__wbg_ptr, e, r);
            if (o[1]) throw p(o[0]);
        }
        removeTrackCount() {
            _.tagcontroller_removeTrackCount(this.__wbg_ptr);
        }
        removeTrackIndex() {
            _.tagcontroller_removeTrackIndex(this.__wbg_ptr);
        }
        removeAlbumArtist() {
            _.tagcontroller_removeAlbumArtist(this.__wbg_ptr);
        }
        static new() {
            const t = _.tagcontroller_new();
            return b.__wrap(t);
        }
        static from(t) {
            const e = v(t, _.__wbindgen_malloc), r = c, o = _.tagcontroller_from(e, r);
            if (o[2]) throw p(o[1]);
            return b.__wrap(o[0]);
        }
        setYear(t) {
            _.tagcontroller_setYear(this.__wbg_ptr, t);
        }
        setAlbum(t) {
            const e = m(t, _.__wbindgen_malloc, _.__wbindgen_realloc), r = c;
            _.tagcontroller_setAlbum(this.__wbg_ptr, e, r);
        }
        setGenre(t) {
            const e = m(t, _.__wbindgen_malloc, _.__wbindgen_realloc), r = c;
            _.tagcontroller_setGenre(this.__wbg_ptr, e, r);
        }
        setTitle(t) {
            const e = m(t, _.__wbindgen_malloc, _.__wbindgen_realloc), r = c;
            _.tagcontroller_setTitle(this.__wbg_ptr, e, r);
        }
    }
    Symbol.dispose && (b.prototype[Symbol.dispose] = b.prototype.free);
    function Z(a) {
        const t = v(a, _.__wbindgen_malloc), e = c;
        return _.hasId3v2Tag(t, e) !== 0;
    }
    function E(a, t) {
        throw new Error(i(a, t));
    }
    function U(a) {
        return f.__wrap(a);
    }
    function W() {
        return new Array;
    }
    function j(a, t) {
        return new Error(i(a, t));
    }
    function L(a, t) {
        return new Uint8Array(H(a, t));
    }
    function P(a, t) {
        return a.push(t);
    }
    function Y() {
        const a = _.__wbindgen_externrefs, t = a.grow(4);
        a.set(0, void 0), a.set(t + 0, void 0), a.set(t + 1, null), a.set(t + 2, !0), a.set(t + 3, !1);
    }
    URL = globalThis.URL;
    const n = await $({
        "./id3_wasm_bg.js": {
            __wbg_commentmetadatum_new: U,
            __wbg_new_25f239778d6112b9: W,
            __wbg_new_from_slice_f9c22b9153b26992: L,
            __wbg_push_7d9be8f38fc13975: P,
            __wbg_new_df1173567d5ff028: j,
            __wbg___wbindgen_throw_dd24417ed36fc46e: E,
            __wbindgen_init_externref_table: Y
        }
    }, O), q = n.memory, J = n.__wbg_albumcovermetadatum_free, Q = n.__wbg_commentmetadatum_free, tt = n.__wbg_extendedtextmetadatum_free, et = n.__wbg_get_metadata_discCount, _t = n.__wbg_get_metadata_discIndex, rt = n.__wbg_get_metadata_duration, at = n.__wbg_get_metadata_trackCount, nt = n.__wbg_get_metadata_trackIndex, ot = n.__wbg_get_metadata_year, st = n.__wbg_metadata_free, lt = n.__wbg_set_metadata_discCount, ct = n.__wbg_set_metadata_discIndex, it = n.__wbg_set_metadata_duration, dt = n.__wbg_set_metadata_trackCount, gt = n.__wbg_set_metadata_trackIndex, mt = n.__wbg_set_metadata_year, bt = n.__wbg_tagcontroller_free, ut = n.albumcovermetadatum_data, wt = n.albumcovermetadatum_mimeType, ft = n.commentmetadatum_description, pt = n.commentmetadatum_lang, yt = n.commentmetadatum_text, ht = n.extendedtextmetadatum_description, xt = n.extendedtextmetadatum_value, vt = n.hasId3v2Tag, At = n.metadata_album, Tt = n.metadata_albumArtist, Ct = n.metadata_albumCover, It = n.metadata_artist, kt = n.metadata_comments, Dt = n.metadata_dateRecorded, Rt = n.metadata_dateReleased, Mt = n.metadata_genre, Ft = n.metadata_lyrics, zt = n.metadata_publisher, St = n.metadata_title, Et = n.tagcontroller_addLyrics, Ut = n.tagcontroller_from, Wt = n.tagcontroller_fromPartial, jt = n.tagcontroller_getMetadata, Lt = n.tagcontroller_new, Pt = n.tagcontroller_putTagInto, Yt = n.tagcontroller_removeAlbum, Bt = n.tagcontroller_removeAlbumArtist, Gt = n.tagcontroller_removeArtist, Ot = n.tagcontroller_removeDiscCount, $t = n.tagcontroller_removeDiscIndex, Nt = n.tagcontroller_removeGenre, Ht = n.tagcontroller_removeTitle, Kt = n.tagcontroller_removeTrackCount, Vt = n.tagcontroller_removeTrackIndex, Xt = n.tagcontroller_removeYear, Zt = n.tagcontroller_setAlbum, qt = n.tagcontroller_setAlbumArtist, Jt = n.tagcontroller_setArtist, Qt = n.tagcontroller_setDateRecorded, te = n.tagcontroller_setDateReleased, ee = n.tagcontroller_setDiscCount, _e = n.tagcontroller_setDiscIndex, re = n.tagcontroller_setDuration, ae = n.tagcontroller_setGenre, ne = n.tagcontroller_setPublisher, oe = n.tagcontroller_setTitle, se = n.tagcontroller_setTrackCount, le = n.tagcontroller_setTrackIndex, ce = n.tagcontroller_setYear, ie = n.__wbindgen_externrefs, de = n.__wbindgen_malloc, ge = n.__wbindgen_realloc, me = n.__externref_table_dealloc, be = n.__wbindgen_free, B = n.__wbindgen_start;
    var ue = Object.freeze({
        __proto__: null,
        __externref_table_dealloc: me,
        __wbg_albumcovermetadatum_free: J,
        __wbg_commentmetadatum_free: Q,
        __wbg_extendedtextmetadatum_free: tt,
        __wbg_get_metadata_discCount: et,
        __wbg_get_metadata_discIndex: _t,
        __wbg_get_metadata_duration: rt,
        __wbg_get_metadata_trackCount: at,
        __wbg_get_metadata_trackIndex: nt,
        __wbg_get_metadata_year: ot,
        __wbg_metadata_free: st,
        __wbg_set_metadata_discCount: lt,
        __wbg_set_metadata_discIndex: ct,
        __wbg_set_metadata_duration: it,
        __wbg_set_metadata_trackCount: dt,
        __wbg_set_metadata_trackIndex: gt,
        __wbg_set_metadata_year: mt,
        __wbg_tagcontroller_free: bt,
        __wbindgen_externrefs: ie,
        __wbindgen_free: be,
        __wbindgen_malloc: de,
        __wbindgen_realloc: ge,
        __wbindgen_start: B,
        albumcovermetadatum_data: ut,
        albumcovermetadatum_mimeType: wt,
        commentmetadatum_description: ft,
        commentmetadatum_lang: pt,
        commentmetadatum_text: yt,
        extendedtextmetadatum_description: ht,
        extendedtextmetadatum_value: xt,
        hasId3v2Tag: vt,
        memory: q,
        metadata_album: At,
        metadata_albumArtist: Tt,
        metadata_albumCover: Ct,
        metadata_artist: It,
        metadata_comments: kt,
        metadata_dateRecorded: Dt,
        metadata_dateReleased: Rt,
        metadata_genre: Mt,
        metadata_lyrics: Ft,
        metadata_publisher: zt,
        metadata_title: St,
        tagcontroller_addLyrics: Et,
        tagcontroller_from: Ut,
        tagcontroller_fromPartial: Wt,
        tagcontroller_getMetadata: jt,
        tagcontroller_new: Lt,
        tagcontroller_putTagInto: Pt,
        tagcontroller_removeAlbum: Yt,
        tagcontroller_removeAlbumArtist: Bt,
        tagcontroller_removeArtist: Gt,
        tagcontroller_removeDiscCount: Ot,
        tagcontroller_removeDiscIndex: $t,
        tagcontroller_removeGenre: Nt,
        tagcontroller_removeTitle: Ht,
        tagcontroller_removeTrackCount: Kt,
        tagcontroller_removeTrackIndex: Vt,
        tagcontroller_removeYear: Xt,
        tagcontroller_setAlbum: Zt,
        tagcontroller_setAlbumArtist: qt,
        tagcontroller_setArtist: Jt,
        tagcontroller_setDateRecorded: Qt,
        tagcontroller_setDateReleased: te,
        tagcontroller_setDiscCount: ee,
        tagcontroller_setDiscIndex: _e,
        tagcontroller_setDuration: re,
        tagcontroller_setGenre: ae,
        tagcontroller_setPublisher: ne,
        tagcontroller_setTitle: oe,
        tagcontroller_setTrackCount: se,
        tagcontroller_setTrackIndex: le,
        tagcontroller_setYear: ce
    });
    S(ue);
    B();
    var we = Object.freeze({
        __proto__: null,
        AlbumCoverMetadatum: h,
        CommentMetadatum: f,
        ExtendedTextMetadatum: D,
        Metadata: x,
        TagController: b,
        __wbg___wbindgen_throw_dd24417ed36fc46e: E,
        __wbg_commentmetadatum_new: U,
        __wbg_new_25f239778d6112b9: W,
        __wbg_new_df1173567d5ff028: j,
        __wbg_new_from_slice_f9c22b9153b26992: L,
        __wbg_push_7d9be8f38fc13975: P,
        __wbg_set_wasm: S,
        __wbindgen_init_externref_table: Y,
        hasId3v2Tag: Z
    });
    self.onmessage = async (a)=>{
        const { type: t, payload: e } = a.data;
        if (t === "process") {
            const { file: r, HEAD_CHUNK_SIZE: o } = e, { TagController: d, hasId3v2Tag: s } = we;
            try {
                const l = new Uint8Array(await r.slice(0, o).arrayBuffer());
                let g;
                s(l) || (g = r.size >= 128 ? new Uint8Array(await r.slice(r.size - 128).arrayBuffer()) : null);
                let T;
                try {
                    T = d.fromPartial(l, g);
                    const u = T.getMetadata(), G = {
                        title: u.title || "",
                        artist: u.artist || "",
                        album: u.album || "",
                        year: u.year || "",
                        genre: u.genre || ""
                    };
                    self.postMessage({
                        type: "result",
                        payload: {
                            metadata: G,
                            fileName: r.name
                        }
                    });
                } catch (u) {
                    self.postMessage({
                        type: "error",
                        payload: {
                            message: `Error processing ${r.name}: ${u.message}`,
                            fileName: r.name
                        }
                    });
                } finally{
                    T && T.free();
                }
            } catch (l) {
                self.postMessage({
                    type: "error",
                    payload: {
                        message: `Failed to process file ${r.name}: ${l.message}`,
                        fileName: r.name
                    }
                });
            }
        }
    };
    self.postMessage({
        type: "ready"
    });
})();

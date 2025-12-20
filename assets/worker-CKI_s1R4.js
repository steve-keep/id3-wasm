(async ()=>{
    var rt = "/id3-wasm/assets/id3_wasm_bg--ph7RF0A.wasm", _t = async (_ = {}, t)=>{
        let e;
        if (t.startsWith("data:")) {
            const a = t.replace(/^data:.*?base64,/, "");
            let s;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") s = Buffer.from(a, "base64");
            else if (typeof atob == "function") {
                const m = atob(a);
                s = new Uint8Array(m.length);
                for(let i = 0; i < m.length; i++)s[i] = m.charCodeAt(i);
            } else throw new Error("Cannot decode base64-encoded data URL");
            e = await WebAssembly.instantiate(s, _);
        } else {
            const a = await fetch(t), s = a.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && s.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(a, _);
            else {
                const m = await a.arrayBuffer();
                e = await WebAssembly.instantiate(m, _);
            }
        }
        return e.instance.exports;
    };
    let o;
    function at(_, t) {
        return _ = _ >>> 0, X().subarray(_ / 1, _ / 1 + t);
    }
    function l(_, t) {
        return _ = _ >>> 0, ot(_, t);
    }
    let T = null;
    function X() {
        return (T === null || T.byteLength === 0) && (T = new Uint8Array(o.memory.buffer)), T;
    }
    function p(_) {
        return _ == null;
    }
    let k = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    k.decode();
    const nt = 2146435072;
    let z = 0;
    function ot(_, t) {
        return z += t, z >= nt && (k = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), k.decode(), z = t), k.decode(X().subarray(_, _ + t));
    }
    const S = new TextEncoder;
    "encodeInto" in S || (S.encodeInto = function(_, t) {
        const e = S.encode(_);
        return t.set(e), {
            read: _.length,
            written: e.length
        };
    });
    const B = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>o.__wbg_albumcovermetadatum_free(_ >>> 0, 1)), L = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>o.__wbg_commentmetadatum_free(_ >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((_)=>o.__wbg_extendedtextmetadatum_free(_ >>> 0, 1));
    const W = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>o.__wbg_metadata_free(_ >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((_)=>o.__wbg_tagcontroller_free(_ >>> 0, 1));
    let $ = class K {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(K.prototype);
            return e.__wbg_ptr = t, B.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, B.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_albumcovermetadatum_free(t, 0);
        }
        get data() {
            return o.albumcovermetadatum_data(this.__wbg_ptr);
        }
        get mimeType() {
            let t, e;
            try {
                const a = o.albumcovermetadatum_mimeType(this.__wbg_ptr);
                return t = a[0], e = a[1], l(a[0], a[1]);
            } finally{
                o.__wbindgen_free(t, e, 1);
            }
        }
    };
    Symbol.dispose && ($.prototype[Symbol.dispose] = $.prototype.free);
    let j = class V {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(V.prototype);
            return e.__wbg_ptr = t, L.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, L.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_commentmetadatum_free(t, 0);
        }
        get description() {
            let t, e;
            try {
                const a = o.commentmetadatum_description(this.__wbg_ptr);
                return t = a[0], e = a[1], l(a[0], a[1]);
            } finally{
                o.__wbindgen_free(t, e, 1);
            }
        }
        get lang() {
            let t, e;
            try {
                const a = o.commentmetadatum_lang(this.__wbg_ptr);
                return t = a[0], e = a[1], l(a[0], a[1]);
            } finally{
                o.__wbindgen_free(t, e, 1);
            }
        }
        get text() {
            let t, e;
            try {
                const a = o.commentmetadatum_text(this.__wbg_ptr);
                return t = a[0], e = a[1], l(a[0], a[1]);
            } finally{
                o.__wbindgen_free(t, e, 1);
            }
        }
    };
    Symbol.dispose && (j.prototype[Symbol.dispose] = j.prototype.free);
    let Y = class Z {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Z.prototype);
            return e.__wbg_ptr = t, W.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, W.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_metadata_free(t, 0);
        }
        get trackIndex() {
            const t = o.__wbg_get_metadata_trackIndex(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set trackIndex(t) {
            o.__wbg_set_metadata_trackIndex(this.__wbg_ptr, p(t) ? 4294967297 : t >>> 0);
        }
        get trackCount() {
            const t = o.__wbg_get_metadata_trackCount(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set trackCount(t) {
            o.__wbg_set_metadata_trackCount(this.__wbg_ptr, p(t) ? 4294967297 : t >>> 0);
        }
        get discIndex() {
            const t = o.__wbg_get_metadata_discIndex(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set discIndex(t) {
            o.__wbg_set_metadata_discIndex(this.__wbg_ptr, p(t) ? 4294967297 : t >>> 0);
        }
        get discCount() {
            const t = o.__wbg_get_metadata_discCount(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set discCount(t) {
            o.__wbg_set_metadata_discCount(this.__wbg_ptr, p(t) ? 4294967297 : t >>> 0);
        }
        get year() {
            const t = o.__wbg_get_metadata_year(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set year(t) {
            o.__wbg_set_metadata_year(this.__wbg_ptr, p(t) ? 4294967297 : t >> 0);
        }
        get duration() {
            const t = o.__wbg_get_metadata_duration(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set duration(t) {
            o.__wbg_set_metadata_duration(this.__wbg_ptr, p(t) ? 4294967297 : t >>> 0);
        }
        get albumCover() {
            const t = o.metadata_albumCover(this.__wbg_ptr);
            return t === 0 ? void 0 : $.__wrap(t);
        }
        get albumArtist() {
            const t = o.metadata_albumArtist(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = l(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get dateRecorded() {
            const t = o.metadata_dateRecorded(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = l(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get dateReleased() {
            const t = o.metadata_dateReleased(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = l(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get album() {
            const t = o.metadata_album(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = l(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get genre() {
            const t = o.metadata_genre(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = l(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get title() {
            const t = o.metadata_title(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = l(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get artist() {
            const t = o.metadata_artist(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = l(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get lyrics() {
            return o.metadata_lyrics(this.__wbg_ptr);
        }
        get comments() {
            return o.metadata_comments(this.__wbg_ptr);
        }
        get publisher() {
            const t = o.metadata_publisher(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = l(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
    };
    Symbol.dispose && (Y.prototype[Symbol.dispose] = Y.prototype.free);
    function st(_, t) {
        throw new Error(l(_, t));
    }
    function it(_) {
        return j.__wrap(_);
    }
    function dt() {
        return new Array;
    }
    function ct(_, t) {
        return new Error(l(_, t));
    }
    function lt(_, t) {
        return new Uint8Array(at(_, t));
    }
    function gt(_, t) {
        return _.push(t);
    }
    function mt() {
        const _ = o.__wbindgen_externrefs, t = _.grow(4);
        _.set(0, void 0), _.set(t + 0, void 0), _.set(t + 1, null), _.set(t + 2, !0), _.set(t + 3, !1);
    }
    URL = globalThis.URL;
    const n = await _t({
        "./id3_wasm_bg.js": {
            __wbg_commentmetadatum_new: it,
            __wbg_new_25f239778d6112b9: dt,
            __wbg_new_from_slice_f9c22b9153b26992: lt,
            __wbg_push_7d9be8f38fc13975: gt,
            __wbg_new_df1173567d5ff028: ct,
            __wbg___wbindgen_throw_dd24417ed36fc46e: st,
            __wbindgen_init_externref_table: mt
        }
    }, rt), bt = n.memory, ut = n.__wbg_albumcovermetadatum_free, wt = n.__wbg_commentmetadatum_free, ft = n.__wbg_extendedtextmetadatum_free, pt = n.__wbg_get_metadata_discCount, yt = n.__wbg_get_metadata_discIndex, ht = n.__wbg_get_metadata_duration, vt = n.__wbg_get_metadata_trackCount, xt = n.__wbg_get_metadata_trackIndex, Ct = n.__wbg_get_metadata_year, At = n.__wbg_metadata_free, Tt = n.__wbg_set_metadata_discCount, It = n.__wbg_set_metadata_discIndex, kt = n.__wbg_set_metadata_duration, Rt = n.__wbg_set_metadata_trackCount, Dt = n.__wbg_set_metadata_trackIndex, Mt = n.__wbg_set_metadata_year, Ft = n.__wbg_tagcontroller_free, zt = n.albumcovermetadatum_data, St = n.albumcovermetadatum_mimeType, Et = n.commentmetadatum_description, $t = n.commentmetadatum_lang, jt = n.commentmetadatum_text, Ot = n.extendedtextmetadatum_description, Ut = n.extendedtextmetadatum_value, Bt = n.hasId3v2Tag, Lt = n.metadata_album, Wt = n.metadata_albumArtist, Yt = n.metadata_albumCover, Pt = n.metadata_artist, Gt = n.metadata_comments, Nt = n.metadata_dateRecorded, Ht = n.metadata_dateReleased, Xt = n.metadata_genre, Kt = n.metadata_lyrics, Vt = n.metadata_publisher, Zt = n.metadata_title, qt = n.tagcontroller_addLyrics, Jt = n.tagcontroller_from, Qt = n.tagcontroller_fromPartial, te = n.tagcontroller_getMetadata, ee = n.tagcontroller_new, re = n.tagcontroller_putTagInto, _e = n.tagcontroller_removeAlbum, ae = n.tagcontroller_removeAlbumArtist, ne = n.tagcontroller_removeArtist, oe = n.tagcontroller_removeDiscCount, se = n.tagcontroller_removeDiscIndex, ie = n.tagcontroller_removeGenre, de = n.tagcontroller_removeTitle, ce = n.tagcontroller_removeTrackCount, le = n.tagcontroller_removeTrackIndex, ge = n.tagcontroller_removeYear, me = n.tagcontroller_setAlbum, be = n.tagcontroller_setAlbumArtist, ue = n.tagcontroller_setArtist, we = n.tagcontroller_setDateRecorded, fe = n.tagcontroller_setDateReleased, pe = n.tagcontroller_setDiscCount, ye = n.tagcontroller_setDiscIndex, he = n.tagcontroller_setDuration, ve = n.tagcontroller_setGenre, xe = n.tagcontroller_setPublisher, Ce = n.tagcontroller_setTitle, Ae = n.tagcontroller_setTrackCount, Te = n.tagcontroller_setTrackIndex, Ie = n.tagcontroller_setYear, ke = n.__wbindgen_externrefs, Re = n.__wbindgen_malloc, De = n.__wbindgen_realloc, Me = n.__externref_table_dealloc, Fe = n.__wbindgen_free, q = n.__wbindgen_start;
    var ze = Object.freeze({
        __proto__: null,
        __externref_table_dealloc: Me,
        __wbg_albumcovermetadatum_free: ut,
        __wbg_commentmetadatum_free: wt,
        __wbg_extendedtextmetadatum_free: ft,
        __wbg_get_metadata_discCount: pt,
        __wbg_get_metadata_discIndex: yt,
        __wbg_get_metadata_duration: ht,
        __wbg_get_metadata_trackCount: vt,
        __wbg_get_metadata_trackIndex: xt,
        __wbg_get_metadata_year: Ct,
        __wbg_metadata_free: At,
        __wbg_set_metadata_discCount: Tt,
        __wbg_set_metadata_discIndex: It,
        __wbg_set_metadata_duration: kt,
        __wbg_set_metadata_trackCount: Rt,
        __wbg_set_metadata_trackIndex: Dt,
        __wbg_set_metadata_year: Mt,
        __wbg_tagcontroller_free: Ft,
        __wbindgen_externrefs: ke,
        __wbindgen_free: Fe,
        __wbindgen_malloc: Re,
        __wbindgen_realloc: De,
        __wbindgen_start: q,
        albumcovermetadatum_data: zt,
        albumcovermetadatum_mimeType: St,
        commentmetadatum_description: Et,
        commentmetadatum_lang: $t,
        commentmetadatum_text: jt,
        extendedtextmetadatum_description: Ot,
        extendedtextmetadatum_value: Ut,
        hasId3v2Tag: Bt,
        memory: bt,
        metadata_album: Lt,
        metadata_albumArtist: Wt,
        metadata_albumCover: Yt,
        metadata_artist: Pt,
        metadata_comments: Gt,
        metadata_dateRecorded: Nt,
        metadata_dateReleased: Ht,
        metadata_genre: Xt,
        metadata_lyrics: Kt,
        metadata_publisher: Vt,
        metadata_title: Zt,
        tagcontroller_addLyrics: qt,
        tagcontroller_from: Jt,
        tagcontroller_fromPartial: Qt,
        tagcontroller_getMetadata: te,
        tagcontroller_new: ee,
        tagcontroller_putTagInto: re,
        tagcontroller_removeAlbum: _e,
        tagcontroller_removeAlbumArtist: ae,
        tagcontroller_removeArtist: ne,
        tagcontroller_removeDiscCount: oe,
        tagcontroller_removeDiscIndex: se,
        tagcontroller_removeGenre: ie,
        tagcontroller_removeTitle: de,
        tagcontroller_removeTrackCount: ce,
        tagcontroller_removeTrackIndex: le,
        tagcontroller_removeYear: ge,
        tagcontroller_setAlbum: me,
        tagcontroller_setAlbumArtist: be,
        tagcontroller_setArtist: ue,
        tagcontroller_setDateRecorded: we,
        tagcontroller_setDateReleased: fe,
        tagcontroller_setDiscCount: pe,
        tagcontroller_setDiscIndex: ye,
        tagcontroller_setDuration: he,
        tagcontroller_setGenre: ve,
        tagcontroller_setPublisher: xe,
        tagcontroller_setTitle: Ce,
        tagcontroller_setTrackCount: Ae,
        tagcontroller_setTrackIndex: Te,
        tagcontroller_setYear: Ie
    }), r;
    function Se(_) {
        r = _;
    }
    function Ee(_, t) {
        if (!(_ instanceof t)) throw new Error(`expected instance of ${t.name}`);
    }
    function g(_, t) {
        return _ = _ >>> 0, je(_, t);
    }
    var I = null;
    function x() {
        return (I === null || I.byteLength === 0) && (I = new Uint8Array(r.memory.buffer)), I;
    }
    function f(_) {
        return _ == null;
    }
    function h(_, t) {
        const e = t(_.length * 1, 1) >>> 0;
        return x().set(_, e / 1), c = _.length, e;
    }
    function u(_, t, e) {
        if (e === void 0) {
            const d = C.encode(_), b = t(d.length, 1) >>> 0;
            return x().subarray(b, b + d.length).set(d), c = d.length, b;
        }
        let a = _.length, s = t(a, 1) >>> 0;
        const m = x();
        let i = 0;
        for(; i < a; i++){
            const d = _.charCodeAt(i);
            if (d > 127) break;
            m[s + i] = d;
        }
        if (i !== a) {
            i !== 0 && (_ = _.slice(i)), s = e(s, a, a = i + _.length * 3, 1) >>> 0;
            const d = x().subarray(s + i, s + a), b = C.encodeInto(_, d);
            i += b.written, s = e(s, a, i, 1) >>> 0;
        }
        return c = i, s;
    }
    function y(_) {
        const t = r.__wbindgen_externrefs.get(_);
        return r.__externref_table_dealloc(_), t;
    }
    var R = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    R.decode();
    var $e = 2146435072, E = 0;
    function je(_, t) {
        return E += t, E >= $e && (R = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), R.decode(), E = t), R.decode(x().subarray(_, _ + t));
    }
    var C = new TextEncoder;
    "encodeInto" in C || (C.encodeInto = function(_, t) {
        const e = C.encode(_);
        return t.set(e), {
            read: _.length,
            written: e.length
        };
    });
    var c = 0, P = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>r.__wbg_albumcovermetadatum_free(_ >>> 0, 1)), G = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>r.__wbg_commentmetadatum_free(_ >>> 0, 1)), Oe = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>r.__wbg_extendedtextmetadatum_free(_ >>> 0, 1)), N = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>r.__wbg_metadata_free(_ >>> 0, 1)), H = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>r.__wbg_tagcontroller_free(_ >>> 0, 1)), D = class J {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(J.prototype);
            return e.__wbg_ptr = t, P.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, P.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            r.__wbg_albumcovermetadatum_free(t, 0);
        }
        get data() {
            return r.albumcovermetadatum_data(this.__wbg_ptr);
        }
        get mimeType() {
            let t, e;
            try {
                const a = r.albumcovermetadatum_mimeType(this.__wbg_ptr);
                return t = a[0], e = a[1], g(a[0], a[1]);
            } finally{
                r.__wbindgen_free(t, e, 1);
            }
        }
    };
    Symbol.dispose && (D.prototype[Symbol.dispose] = D.prototype.free);
    var M = class Q {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(Q.prototype);
            return e.__wbg_ptr = t, G.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, G.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            r.__wbg_commentmetadatum_free(t, 0);
        }
        get description() {
            let t, e;
            try {
                const a = r.commentmetadatum_description(this.__wbg_ptr);
                return t = a[0], e = a[1], g(a[0], a[1]);
            } finally{
                r.__wbindgen_free(t, e, 1);
            }
        }
        get lang() {
            let t, e;
            try {
                const a = r.commentmetadatum_lang(this.__wbg_ptr);
                return t = a[0], e = a[1], g(a[0], a[1]);
            } finally{
                r.__wbindgen_free(t, e, 1);
            }
        }
        get text() {
            let t, e;
            try {
                const a = r.commentmetadatum_text(this.__wbg_ptr);
                return t = a[0], e = a[1], g(a[0], a[1]);
            } finally{
                r.__wbindgen_free(t, e, 1);
            }
        }
    };
    Symbol.dispose && (M.prototype[Symbol.dispose] = M.prototype.free);
    var O = class {
        __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Oe.unregister(this), _;
        }
        free() {
            const _ = this.__destroy_into_raw();
            r.__wbg_extendedtextmetadatum_free(_, 0);
        }
        get description() {
            let _, t;
            try {
                const e = r.extendedtextmetadatum_description(this.__wbg_ptr);
                return _ = e[0], t = e[1], g(e[0], e[1]);
            } finally{
                r.__wbindgen_free(_, t, 1);
            }
        }
        get value() {
            let _, t;
            try {
                const e = r.extendedtextmetadatum_value(this.__wbg_ptr);
                return _ = e[0], t = e[1], g(e[0], e[1]);
            } finally{
                r.__wbindgen_free(_, t, 1);
            }
        }
    };
    Symbol.dispose && (O.prototype[Symbol.dispose] = O.prototype.free);
    var F = class tt {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(tt.prototype);
            return e.__wbg_ptr = t, N.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, N.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            r.__wbg_metadata_free(t, 0);
        }
        get trackIndex() {
            const t = r.__wbg_get_metadata_trackIndex(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set trackIndex(t) {
            r.__wbg_set_metadata_trackIndex(this.__wbg_ptr, f(t) ? 4294967297 : t >>> 0);
        }
        get trackCount() {
            const t = r.__wbg_get_metadata_trackCount(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set trackCount(t) {
            r.__wbg_set_metadata_trackCount(this.__wbg_ptr, f(t) ? 4294967297 : t >>> 0);
        }
        get discIndex() {
            const t = r.__wbg_get_metadata_discIndex(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set discIndex(t) {
            r.__wbg_set_metadata_discIndex(this.__wbg_ptr, f(t) ? 4294967297 : t >>> 0);
        }
        get discCount() {
            const t = r.__wbg_get_metadata_discCount(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set discCount(t) {
            r.__wbg_set_metadata_discCount(this.__wbg_ptr, f(t) ? 4294967297 : t >>> 0);
        }
        get year() {
            const t = r.__wbg_get_metadata_year(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set year(t) {
            r.__wbg_set_metadata_year(this.__wbg_ptr, f(t) ? 4294967297 : t >> 0);
        }
        get duration() {
            const t = r.__wbg_get_metadata_duration(this.__wbg_ptr);
            return t === 4294967297 ? void 0 : t;
        }
        set duration(t) {
            r.__wbg_set_metadata_duration(this.__wbg_ptr, f(t) ? 4294967297 : t >>> 0);
        }
        get albumCover() {
            const t = r.metadata_albumCover(this.__wbg_ptr);
            return t === 0 ? void 0 : D.__wrap(t);
        }
        get albumArtist() {
            const t = r.metadata_albumArtist(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = g(t[0], t[1]).slice(), r.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get dateRecorded() {
            const t = r.metadata_dateRecorded(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = g(t[0], t[1]).slice(), r.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get dateReleased() {
            const t = r.metadata_dateReleased(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = g(t[0], t[1]).slice(), r.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get album() {
            const t = r.metadata_album(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = g(t[0], t[1]).slice(), r.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get genre() {
            const t = r.metadata_genre(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = g(t[0], t[1]).slice(), r.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get title() {
            const t = r.metadata_title(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = g(t[0], t[1]).slice(), r.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get artist() {
            const t = r.metadata_artist(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = g(t[0], t[1]).slice(), r.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
        get lyrics() {
            return r.metadata_lyrics(this.__wbg_ptr);
        }
        get comments() {
            return r.metadata_comments(this.__wbg_ptr);
        }
        get publisher() {
            const t = r.metadata_publisher(this.__wbg_ptr);
            let e;
            return t[0] !== 0 && (e = g(t[0], t[1]).slice(), r.__wbindgen_free(t[0], t[1] * 1, 1)), e;
        }
    };
    Symbol.dispose && (F.prototype[Symbol.dispose] = F.prototype.free);
    var U = class v {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(v.prototype);
            return e.__wbg_ptr = t, H.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, H.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            r.__wbg_tagcontroller_free(t, 0);
        }
        addLyrics(t) {
            Ee(t, M);
            var e = t.__destroy_into_raw();
            r.tagcontroller_addLyrics(this.__wbg_ptr, e);
        }
        setArtist(t) {
            const e = u(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = c;
            r.tagcontroller_setArtist(this.__wbg_ptr, e, a);
        }
        removeYear() {
            r.tagcontroller_removeYear(this.__wbg_ptr);
        }
        static fromPartial(t, e) {
            const a = h(t, r.__wbindgen_malloc), s = c;
            var m = f(e) ? 0 : h(e, r.__wbindgen_malloc), i = c;
            const d = r.tagcontroller_fromPartial(a, s, m, i);
            if (d[2]) throw y(d[1]);
            return v.__wrap(d[0]);
        }
        getMetadata() {
            const t = r.tagcontroller_getMetadata(this.__wbg_ptr);
            return F.__wrap(t);
        }
        putTagInto(t) {
            const e = h(t, r.__wbindgen_malloc), a = c, s = r.tagcontroller_putTagInto(this.__wbg_ptr, e, a);
            if (s[2]) throw y(s[1]);
            return y(s[0]);
        }
        removeAlbum() {
            r.tagcontroller_removeAlbum(this.__wbg_ptr);
        }
        removeGenre() {
            r.tagcontroller_removeGenre(this.__wbg_ptr);
        }
        removeTitle() {
            r.tagcontroller_removeTitle(this.__wbg_ptr);
        }
        setDuration(t) {
            r.tagcontroller_setDuration(this.__wbg_ptr, t);
        }
        removeArtist() {
            r.tagcontroller_removeArtist(this.__wbg_ptr);
        }
        setPublisher(t) {
            const e = u(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = c;
            r.tagcontroller_setPublisher(this.__wbg_ptr, e, a);
        }
        setDiscCount(t) {
            r.tagcontroller_setDiscCount(this.__wbg_ptr, t);
        }
        setDiscIndex(t) {
            r.tagcontroller_setDiscIndex(this.__wbg_ptr, t);
        }
        setTrackCount(t) {
            r.tagcontroller_setTrackCount(this.__wbg_ptr, t);
        }
        setTrackIndex(t) {
            r.tagcontroller_setTrackIndex(this.__wbg_ptr, t);
        }
        setAlbumArtist(t) {
            const e = u(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = c;
            r.tagcontroller_setAlbumArtist(this.__wbg_ptr, e, a);
        }
        removeDiscCount() {
            r.tagcontroller_removeDiscCount(this.__wbg_ptr);
        }
        removeDiscIndex() {
            r.tagcontroller_removeDiscIndex(this.__wbg_ptr);
        }
        setDateRecorded(t) {
            const e = u(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = c, s = r.tagcontroller_setDateRecorded(this.__wbg_ptr, e, a);
            if (s[1]) throw y(s[0]);
        }
        setDateReleased(t) {
            const e = u(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = c, s = r.tagcontroller_setDateReleased(this.__wbg_ptr, e, a);
            if (s[1]) throw y(s[0]);
        }
        removeTrackCount() {
            r.tagcontroller_removeTrackCount(this.__wbg_ptr);
        }
        removeTrackIndex() {
            r.tagcontroller_removeTrackIndex(this.__wbg_ptr);
        }
        removeAlbumArtist() {
            r.tagcontroller_removeAlbumArtist(this.__wbg_ptr);
        }
        static new() {
            const t = r.tagcontroller_new();
            return v.__wrap(t);
        }
        static from(t) {
            const e = h(t, r.__wbindgen_malloc), a = c, s = r.tagcontroller_from(e, a);
            if (s[2]) throw y(s[1]);
            return v.__wrap(s[0]);
        }
        setYear(t) {
            r.tagcontroller_setYear(this.__wbg_ptr, t);
        }
        setAlbum(t) {
            const e = u(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = c;
            r.tagcontroller_setAlbum(this.__wbg_ptr, e, a);
        }
        setGenre(t) {
            const e = u(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = c;
            r.tagcontroller_setGenre(this.__wbg_ptr, e, a);
        }
        setTitle(t) {
            const e = u(t, r.__wbindgen_malloc, r.__wbindgen_realloc), a = c;
            r.tagcontroller_setTitle(this.__wbg_ptr, e, a);
        }
    };
    Symbol.dispose && (U.prototype[Symbol.dispose] = U.prototype.free);
    function Ue(_) {
        const t = h(_, r.__wbindgen_malloc), e = c;
        return r.hasId3v2Tag(t, e) !== 0;
    }
    Se(ze);
    q();
    var Be = Object.freeze({
        __proto__: null,
        AlbumCoverMetadatum: D,
        CommentMetadatum: M,
        ExtendedTextMetadatum: O,
        Metadata: F,
        TagController: U,
        hasId3v2Tag: Ue
    });
    self.onmessage = async (_)=>{
        const { type: t, payload: e } = _.data;
        if (t === "process") {
            const { file: a, HEAD_CHUNK_SIZE: s } = e, { TagController: m, hasId3v2Tag: i } = Be;
            try {
                const d = new Uint8Array(await a.slice(0, s).arrayBuffer());
                let b;
                i(d) || (b = a.size >= 128 ? new Uint8Array(await a.slice(a.size - 128).arrayBuffer()) : null);
                let A;
                try {
                    A = m.fromPartial(d, b);
                    const w = A.getMetadata(), et = {
                        title: w.title || "",
                        artist: w.artist || "",
                        album: w.album || "",
                        year: w.year || "",
                        genre: w.genre || ""
                    };
                    self.postMessage({
                        type: "result",
                        payload: {
                            metadata: et,
                            fileName: a.name
                        }
                    });
                } catch (w) {
                    self.postMessage({
                        type: "error",
                        payload: {
                            message: `Error processing ${a.name}: ${w.message}`,
                            fileName: a.name
                        }
                    });
                } finally{
                    A && A.free();
                }
            } catch (d) {
                self.postMessage({
                    type: "error",
                    payload: {
                        message: `Failed to process file ${a.name}: ${d.message}`,
                        fileName: a.name
                    }
                });
            }
        }
    };
    self.postMessage({
        type: "ready"
    });
})();

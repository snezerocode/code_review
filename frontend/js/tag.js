﻿(function () {
    try {
        (function () {
            function Pe(a, c, b, d) {
                var e = this;
                return z(window, "c.i", function () {
                    function f(D) {
                        (D = Qe(l, m, "", D)(l, m)) && (T(D.then) ? D.then(g) : g(D));
                        return D
                    }

                    function g(D) {
                        D && (T(D) ? p.push(D) : ha(D) && x(function (O) {
                            var M = O[0];
                            O = O[1];
                            T(O) && ("u" === M ? p.push(O) : h(O, M))
                        }, Ba(D)))
                    }

                    function h(D, O, M) {
                        e[O] = wl(l, m, M || q, O, D)
                    }
                    var k, l = window;
                    (!l || isNaN(a) && !a) && Kd();
                    var m = xl(a, Ld, c, b, d),
                        p = [],
                        q = [Yg, Qe, Zg];
                    q.unshift(yl);
                    var r = A(U, Qa),
                        t = J(m);
                    m.id || Ra(Ma("Invalid Metrika id: " + m.id, !0));
                    var y = Zc.C("counters", {});
                    if (y[t]) return Cb(l,
                        t, "dc", (k = {}, k.key = t, k)), y[t];
                    zl(l, t, $g(a, c, b, d));
                    y[t] = e;
                    Zc.D("counters", y);
                    Zc.Ea("counter", e);
                    x(function (D) {
                        D(l, m)
                    }, Re);
                    x(f, Md);
                    f(Al);
                    h(Bl(l, m, p), "destruct", [Yg, Zg]);
                    Nb(l, E([l, r, f, 1, "a.i"], ah));
                    x(f, X)
                })()
            }

            function Yg(a, c, b, d) {
                return z(a, "cm." + b, d)
            }

            function Zg(a, c, b, d) {
                return function () {
                    var e = Ia(arguments);
                    e = d.apply(void 0, e);
                    return Y(e) ? Ea(a, c) : e
                }
            }

            function Cl(a, c) {
                delete H(a).C("cok", {})[c]
            }

            function zl(a, c, b) {
                a = H(a);
                var d = a.C("cok", {});
                d[c] = b;
                a.D("cok", d)
            }

            function Dl(a, c) {
                var b = "" + c,
                    d = {
                        id: 1,
                        $: "0"
                    },
                    e = El(b);
                e ? d.id = e : -1 === kb(b, ":") ? (b = Fa(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Fa(b[0]), d.$ = Nd(e) ? "1" : "0");
                return [Ea(a, d), d]
            }

            function bh(a, c, b, d) {
                var e;
                c = (e = {}, e.code = [
                    [1, "ym_debug", [18, ["a", [37, [40, "require"], "loadScript"]],
                        ["b", [37, [40, "require"], "callFromWindow"]]
                    ],
                        [2, [37, [40, "a"], ch + "/" + c + ".js?ver=" + ua.$a, [24, null, [],
                            [3, [2, [37, [40, "b"], "Ya._metrika.ytmm." + c + ".init", b, Se(d), ua.$a]]]
                        ]]]
                    ]
                ], e);
                dh(a)(c)
            }

            function Se(a) {
                if (N(a)) return a = A(Se, a), Cc([22], a);
                if (ha(a)) return a = A(function (c) {
                    return [c[0], Se(c[1])]
                },
                    Ba(a)), Cc([23], a);
                if (eh(a)) return a;
                Ra(Ja("npv"))
            }

            function Fl(a) {
                return ha(a) && N(a.code)
            }

            function Gl(a, c) {
                var b, d = c.slice(2),
                    e = [(b = {}, b.require = {
                        kind: 0,
                        value: w(Hl, Dc([a, {}]))
                    }, b)];
                Te(e, Cc([3], d))
            }

            function Te(a, c, b) {
                c = c.slice(1);
                a.push(b || {});
                x(function (d) {
                    N(d) && 3 === d[0] ? Te(a, d) : !N(d) || 18 !== d[0] && 19 !== d[0] ? N(d) && 2 === d[0] && Ob(a, d[1]) : Il(a, d)
                }, c);
                a.pop()
            }

            function Il(a, c) {
                var b = 18 === c[0];
                x(function (d) {
                    var e = d[0],
                        f = d[1];
                    if (b && 1 === d.length) throw Ma("mca");
                    d = a[a.length - 1];
                    if (Db(d, e)) throw Ma("vr");
                    f = Ob(a,
                        f);
                    d[e] = {
                        kind: b ? 0 : 1,
                        value: f
                    }
                }, c.slice(1))
            }

            function Ob(a, c) {
                if (eh(c)) return c;
                if (N(c) && 40 === c[0]) {
                    a: {
                        var b = c[1];
                        for (var d = a.length; 0 < d;) {
                            var e = a[--d];
                            if (Db(e, b)) {
                                b = e[b];
                                break a
                            }
                        }
                        b = void 0
                    }
                    if (!b) throw Ma("vnd");
                    return b.value
                }
                if (N(c) && 37 === c[0]) {
                    d = c.slice(2);
                    b = Ob(a, c[1]);
                    if (!T(b)) throw Ma("tenf");
                    d = A(v(a, Ob), d);
                    return b.apply(null, d)
                }
                if (N(c) && 24 === c[0]) return Jl(a, c);
                if (N(c) && 35 === c[0]) {
                    d = c[2];
                    b = Ob(a, c[1]);
                    d = Ob(a, d);
                    if (!b) throw Ma("noma");
                    return b["" + d]
                }
                if (N(c) && 23 === c[0]) return Kl(a, c);
                if (N(c) && 22 ===
                    c[0]) return Ll(a, c)
            }

            function Ll(a, c) {
                return A(function (b) {
                    return Ob(a, b)
                }, c.slice(1))
            }

            function Kl(a, c) {
                return P(function (b, d) {
                    var e = d[1],
                        f = Ob(a, d[0]);
                    e = Ob(a, e);
                    b["" + f] = e;
                    return b
                }, {}, c.slice(1))
            }

            function eh(a) {
                return fa(a) || "[object Number]" === Object.prototype.toString.call(a) || !!a === a || Z(a)
            }

            function Jl(a, c) {
                var b = c[1],
                    d = c[2],
                    e = c[3],
                    f = A(U, a);
                return function () {
                    var g = arguments,
                        h = P(function (k, l, m) {
                            if (k[l]) throw Ma("da");
                            k[l] = {
                                kind: 1,
                                value: g[m]
                            };
                            return k
                        }, {}, d);
                    b && !G(b, d) && (h[b] = {
                        kind: 0,
                        value: b
                    });
                    Te(f,
                        e, h)
                }
            }

            function Hl(a) {
                return Ml[a]
            }

            function Ue(a, c) {
                return function () {
                    try {
                        return c.apply(null, arguments)
                    } catch (b) {
                        fh(a, b)
                    }
                }
            }

            function Nl(a, c, b, d) {
                function e() {
                    g.state = 1;
                    b()
                }

                function f() {
                    g.state = 2;
                    d && d()
                }
                var g = Ol(a, c);
                c = g.mi;
                var h = g.state;
                c && 2 !== h ? 1 === h ? e() : (a = ka(a), a.F(c, ["load"], e), a.F(c, ["error"], f)) : f()
            }

            function Ol(a, c) {
                Ve[c] || (Ve[c] = {
                    mi: Ec(a, {
                        src: c
                    }),
                    state: 0
                });
                return Ve[c]
            }

            function gh(a, c) {
                if (Z(a)) throw Ma("noma");
                if (1 === c.length) return a;
                var b = n(a, L(".", c.slice(0, -1)));
                if (!b) throw Ma("noma");
                return b
            }

            function Pl(a) {
                return P(function (c, b) {
                    Db(a, b) && (c[b] = a[b]);
                    return c
                }, {}, ea(a))
            }

            function Ql(a) {
                x(function (c) {
                    var b = c.event;
                    c = c.data;
                    var d = v(b, Rl);
                    "bidTimeout" === b ? x(d, c) : d(c)
                }, a)
            }

            function Rl(a, c) {
                if (G(a, Sl)) {
                    var b = n(c, "auctionId") || n(c, "bid.auctionId") || void 0;
                    if (b) {
                        Yb[b] || (Yb[b] = {
                            Fc: {}
                        });
                        b = Yb[b];
                        var d = "auctionInit" === a,
                            e = "auctionEnd" === a,
                            f = "adRenderFailed" === a || "adRenderSucceeded" === a;
                        f || b.Pc && !d || (b.Pc = n(c, "auctionStart") || void 0, !b.Pc && d && (b.Pc = c.timestamp));
                        var g = E([a, b], Tl);
                        "bidRequested" === a ?
                            x(g, c.bids) : f ? Ul(a, b, c) : e ? (b.Ke = c.auctionEnd || c.timestamp, b.li = ia(function (h, k, l) {
                                return We(h, l) === k
                            }, A(V("bidderCode"), c.bidderRequests))) : d || g(c);
                        b.Ke && (b.ba = !0)
                    }
                }
            }

            function Ul(a, c, b) {
                var d, e = b.bid,
                    f = e.bidderCode || e.bidder;
                e = e.adUnitCode;
                f && e && (c = hh(c, e), c.Kb || (c.Kb = {}), a = "adRenderSucceeded" === a, c.Kb[f] = (d = {}, d.success = a, d), a || (c.Kb[f].reason = b.reason, c.Kb[f].message = b.message))
            }

            function Tl(a, c, b) {
                var d = b.adUnitCode,
                    e = b.bidderCode || b.bidder;
                e && d && (c = hh(c, d), !c.mf && b.mediaTypes && (c.mf = b.mediaTypes),
                    "bidTimeout" === a ? (c.timeout || (c.timeout = {}), c.timeout[e] = !0) : (c.fc[a] || (c.fc[a] = {}), c.fc[a][e] = P(function (f, g) {
                        Z(b[g]) || (f[g] = b[g]);
                        return f
                    }, {}, Vl)))
            }

            function hh(a, c) {
                a.Fc[c] || (a.Fc[c] = {
                    fc: {}
                });
                return a.Fc[c]
            }

            function Wl(a, c) {
                x(function (b) {
                    Yb[b].ba && Xl(a, c, b)
                }, ea(Yb))
            }

            function Xl(a, c, b) {
                var d = Yb[b];
                d.ba = !1;
                d.Ma && la(a, d.Ma);
                d.Ma = R(a, function () {
                    var e, f, g = Yl(b);
                    c((e = {}, e.__ym = (f = {}, f.pbjs = g, f), e));
                    delete Yb[b]
                }, 2E3)
            }

            function Yl(a) {
                var c = Yb[a],
                    b = c.Pc,
                    d = c.Ke,
                    e = c.li;
                return A(function (f) {
                    var g, h = f[0],
                        k =
                            f[1];
                    f = k.Kb;
                    var l = k.mf,
                        m = k.timeout;
                    k = k.fc;
                    return C((g = {}, g.renderState = f, g.mediaTypes = l, g.auctionId = a, g.adUnitCode = h, g.startStamp = b, g.endStamp = d, g.requestedBidders = e, g.bidTimeout = m, g), k)
                }, Ba(c.Fc))
            }

            function Zl(a) {
                var c = n(a, "featurePolicy");
                return c ? "browsingTopics" in a && c.allowsFeature("browsing-topics") : !1
            }

            function $l(a, c, b, d) {
                var e = n(d, "data");
                if (fa(e)) {
                    var f = e.split("*");
                    e = f[0];
                    var g = f[1];
                    f = f[2];
                    "sc.topics-response" === e ? (g && ("1" === g && f ? (a = Eb(a, f), N(a) && c.D("cta", a)) : c.D("cta.e", g)), b()) : "sc.frame" ===
                        e && d.source && d.source.postMessage("sc.topics", "*")
                }
            }

            function am(a, c) {
                var b;
                if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) {
                    var d = c.source,
                        e = (b = {}, b._ym_uid = a, b);
                    d.postMessage(e, "https://oauth.yandex.ru")
                }
            }

            function ih(a) {
                return {
                    O: function (c, b) {
                        bm(a).then(function (d) {
                            c.J || (c.J = {});
                            c.J.uah = d;
                            b()
                        }, b)
                    }
                }
            }

            function cm(a) {
                var c = P(function (b, d) {
                    var e = d[1],
                        f = dm(a[d[0]]);
                    f && b.push("" + e + "\n" + f);
                    return b
                }, [], Ba(em));
                return L("\n", c)
            }

            function fm(a) {
                return "che\n" +
                    a
            }

            function dm(a) {
                return fa(a) ? a : N(a) ? L(",", A(function (c) {
                    return '"' + c.brand + '";v="' + c.version + '"'
                }, a)) : Z(a) ? "" : a ? "?1" : "?0"
            }

            function gm(a, c) {
                var b = hm(a),
                    d = [im(a) || jm(a)];
                km(a) && d.push(b);
                d.unshift("com");
                var e = ja(a);
                b = Ua(a);
                var f = b.C("synced", {});
                d = ia(function (g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(lb);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.D("synced", f);
                return A(function (g) {
                    return {
                        zi: c[g],
                        Ph: g
                    }
                }, d)
            }

            function jm(a) {
                a = lm(a);
                return mm[a] || a
            }

            function hm(a) {
                a = jh(a);
                return nm[a] || "com"
            }

            function om(a, c, b, d) {
                if (!b.K ||
                    Nd(c.$)) d();
                else {
                    var e = Od(a),
                        f = v(e, pm),
                        g = Pd(a, ""),
                        h = function () {
                            var q = L(",", A(qm(Xe), Qd(e)));
                            q = "" + q + rm(q, g);
                            Ye(b, "gdpr", q);
                            d()
                        };
                    if (c.Oi) f("31"), h();
                    else if (3 === c.id) h();
                    else {
                        var k = H(a),
                            l = k.C("f1");
                        if (l) l(h);
                        else if (l = Qd(e), Va(lc(Xe), l)) h();
                        else if (g.C("yandex_login")) f("13"), g.D("gdpr", Fc, 525600), h();
                        else {
                            l = Rd(a);
                            var m = S(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                version: 2,
                                kf: sm,
                                tf: "_inversed_buttons"
                            } : void 0;
                            l || p ? (l = g.C("gdpr"),
                                G(l, mc) ? (f(l === Ze ? "12" : "3"), h()) : $e(a) || tm(a) ? (f("17"), h()) : um(a).then(U, F).then(function (q) {
                                    q ? (f("28"), h()) : (kh(h), k.D("f1", kh), (0, lh[0])(a).then(V("params.eu")).then(function (r) {
                                        if (r || fb(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) {
                                            g.D("gdpr_popup", Ze);
                                            vm(a, c);
                                            if (qb(a)) return wm(a, f, c);
                                            var t = mh(a, e);
                                            if (t) return r = xm(a, f, t, c, p), r.then(E([a, c], zm)), r
                                        }
                                        r || f("8");
                                        return K.resolve({
                                            value: Fc,
                                            Hd: !0
                                        })
                                    }).then(function (r) {
                                        g.cc("gdpr_popup");
                                        if (r) {
                                            var t = r.value;
                                            r = r.Hd;
                                            G(t, mc) && g.D("gdpr", t, r ? void 0 : 525600)
                                        }
                                        t =
                                            Zb(nh, va);
                                        $c(a, t, 20)(Wa(z(a, "gdr"), F));
                                        k.D("f1", va)
                                    })["catch"](z(a, "gdp.a")))
                                })) : (f("14"), h())
                        }
                    }
                }
            }

            function zm(a, c) {
                if (Rd(a)) {
                    var b = Od(a),
                        d = Ea(a, c);
                    d = d && d.params;
                    b = A(v(Am, n), Qd(b));
                    d && b.length && d("gdpr", Ka(b))
                }
            }

            function wm(a, c, b) {
                var d = Sd(a, b);
                return new K(function (e) {
                    var f;
                    if (d) {
                        var g = d.Y,
                            h = w(v("4", c), v(null, e)),
                            k = R(a, h, 2E3, "gdp.f.t");
                        d.Pf((f = {}, f.type = "isYandex", f)).then(function (l) {
                            l.isYandex ? (c("5"), g.F(oh, function (m) {
                                e({
                                    value: ph(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(E([a, k], la))
                    } else e({
                        value: Ze,
                        Hd: !0
                    })
                })
            }

            function vm(a, c) {
                var b = Sd(a, c);
                b && b.Y.F(["isYandex"], function () {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = Rd(a), d
                });
                return b
            }

            function Bm(a, c, b) {
                a = b || jh(a);
                return G(a, c) ? a : "en"
            }

            function ph(a) {
                if (G(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Fc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return G(a, mc) ? a : Fc
            }

            function qh(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d, "init");
                if (e) try {
                    I(e, d)(Fb(a, c))
                } catch (f) { } else rh = R(a, E([a, c, 2 * b], qh), b, "ai.d");
                return function () {
                    return la(a,
                        rh)
                }
            }

            function sh(a, c, b, d) {
                var e, f, g, h = b.Kh,
                    k = b.Fh,
                    l = b.isTrusted;
                b = b.Id;
                a = af(a, k);
                k = k.readOnly;
                d = (e = {}, e.fi = bf((f = {}, f.a = h ? 1 : 0, f.b = a, f.c = d || 0, f.d = k ? 1 : null, f)).Da(), e);
                Z(l) || (d.ite = rb(l));
                b && (d.ifs = 1);
                c.params((g = {}, g.__ym = d, g))
            }

            function th(a, c) {
                var b = n(c, "target");
                if (b) {
                    var d = n(b, "value");
                    if ((d = Xa(d)) && !(100 <= Ya(d))) {
                        var e = "tel" === n(b, "type"),
                            f = 0 < kb(d, "@") && !e,
                            g = Td(d),
                            h = Ya(g);
                        if (f || !f && (e || h)) {
                            if (f) {
                                if (d = uh(d), 5 > Ya(d) || 100 < Ya(d)) return
                            } else {
                                if (Cm(d) || Ya(d) - h > h || 10 > Ya(g) || 16 < Ya(g)) return;
                                e = g[0];
                                g = d[1];
                                if ("+" === d[0] && g !== e) return;
                                d = vh(a, d)
                            }
                            e = n(c, "isTrusted");
                            return {
                                Fh: b,
                                Kh: f,
                                Gh: d,
                                isTrusted: e,
                                Id: c.Id
                            }
                        }
                    }
                }
            }

            function wh(a, c, b, d, e) {
                if (!Ud(a)) return F;
                var f = [],
                    g = ka(a);
                nc(a)(Wa(F, function () {
                    var h = gb(c, a.document.body);
                    e && (h = ia(e, h));
                    x(function (l) {
                        f.push(g.F(l, b, d))
                    }, h);
                    if (Na("MutationObserver", a.MutationObserver)) {
                        var k = c.toUpperCase();
                        h = new a.MutationObserver(z(a, "de.m", function (l) {
                            x(function (m) {
                                var p = m.addedNodes;
                                m = m.removedNodes;
                                p && p.length && x(function (q) {
                                    Vd(a, q, function (r) {
                                        r.nodeName !== k || e && !e(r) ||
                                            f.push(g.F(r, b, d))
                                    }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                }, p);
                                m && m.length && x(function (q) {
                                    Vd(a, q, function (r) {
                                        r.nodeName !== k || e && !e(r) || g.tb(r, b, d)
                                    }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                                }, m)
                            }, l)
                        }));
                        h.observe(a.document.body, {
                            childList: !0,
                            subtree: !0
                        });
                        f.push(I(h.disconnect, h))
                    }
                }));
                return E([va, f], x)
            }

            function Dm(a, c, b, d) {
                c = d.C("cc");
                d = E(["cc", ""], d.D);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    (e = (e = e[1]) && Fa(e)) && 1440 < ja(a)(lb) - e ? d() : b.D("cc", c)
                } else za(0)(c) || d()
            }

            function Em(a, c, b, d) {
                return na(c, function (e) {
                    if (!Wd(e) &&
                        !Xd(a))
                        if (e = d.C("zzlc"), Y(e) || Za(e) || "na" === e) {
                            var f = Pb(a);
                            if (f && (e = $b(a))) {
                                var g = f("iframe");
                                C(g.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                f = cf(a, 68);
                                var h = df(a, 79);
                                g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + xh("L21ldHJpa2EvenpsYy5odG1s");
                                e.appendChild(g);
                                var k = 0,
                                    l = ka(a).F(a, ["message"], z(a, "zz.m", function (m) {
                                        (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (oc(g), m = m.substr(8), d.D("zzlc", m), b.D("zzlc", m), l(), la(a, k))
                                    }));
                                k = R(a, w(l, v(g, oc)), 3E3)
                            }
                        } else b.D("zzlc",
                            e)
                })
            }

            function Fm(a, c, b) {
                var d, e = ad(a, c);
                if (e) {
                    e.Y.F(["gpu-get"], function () {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.C("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = R(a, E([a, c, b], yh), 200, "pu.m");
                        e.fe(f, (d = {}, d.type = "gpu-get", d), function (h, k) {
                            var l = n(k, "pu");
                            l && (la(a, g), b.D("pu", l))
                        })
                    } else yh(a, c, b)
                }
            }

            function yh(a, c, b) {
                var d = n(a, "location.host");
                a = bd(a, c);
                b.D("pu", "" + pc(d) + a)
            }

            function Gm(a, c) {
                if (n(c, "settings.ins")) {
                    var b = H(a);
                    if (!b.C("scip")) {
                        var d = Ua(a),
                            e = ja(a)(lb),
                            f = Yd(d.C("sci"));
                        if (!(f && 1440 >= e - f)) {
                            f =
                                oa(a, "ci");
                            var g = ["sync.cook.int"],
                                h = function (l) {
                                    l = b.C("scip", "") + l;
                                    b.D("scip", l)
                                },
                                k = v("a", h);
                            b.D("scip", "0");
                            return f({
                                X: {
                                    fa: g,
                                    La: 3E3,
                                    wb: !0
                                }
                            }, ["https://yandex.com/an/sync_cookie"]).then(function (l) {
                                l = n(l.Jc, "CookieMatchUrls");
                                if (N(l) && Ya(l)) {
                                    h("1");
                                    var m = oa(a, "c");
                                    l = A(function (p, q) {
                                        return m({
                                            X: {
                                                fa: g,
                                                La: 3E3
                                            }
                                        }, ["https://" + p])["catch"](w(v("b", h), v("" + q, h)))
                                    }, ia(fa, l));
                                    return K.all(l)
                                }
                                k()
                            }, k).then(function () {
                                var l = b.C("scip");
                                !l || fb(l, "a") || fb(l, "b") || (d.D("sci", e), h("2"))
                            }, F)
                        }
                    }
                }
            }

            function zh(a) {
                return {
                    O: function (c,
                        b) {
                        if (!c.K) return b();
                        var d = H(a).C("fid");
                        !Ah && d && (Ye(c, "fid", d), Ah = !0);
                        return b()
                    }
                }
            }

            function Hm(a, c) {
                var b = a.document;
                if (G(b.readyState, ["interactive", "complete"])) Nb(a, c);
                else {
                    var d = ka(a),
                        e = d.F,
                        f = d.tb,
                        g = function () {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function ef(a) {
                return {
                    O: function (c, b) {
                        var d = c.K;
                        if (d) {
                            var e = H(a).C("adBlockEnabled");
                            e && d.D("adb", e)
                        }
                        b()
                    }
                }
            }

            function Im(a) {
                var c = z(a, "i.clch", Jm);
                ka(a).F(a.document, ["click"], v(a, c), {
                    passive: !1
                });
                return function (b) {
                    var d = ua.Oa,
                        e = a.Ya[ua.Yb],
                        f = !!e._informer;
                    e._informer = C({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || Ec(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function Km(a, c) {
                var b = Ua(a),
                    d = b.C,
                    e = b.D;
                if ("" === d("cc")) {
                    e("cc", 0);
                    var f = ja(a),
                        g = H(a);
                    oa(a, "6", c)({
                        X: {
                            wb: !0,
                            Be: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(function (h) {
                        h = n(h.Jc, "c");
                        e("cc", h + "&" + f(lb));
                        g.D("cc", h)
                    })["catch"](function (h) {
                        var k = f(lb);
                        e("cc", "&" + k);
                        Gc(a, "cc", h)
                    })
                }
            }

            function Zd(a, c) {
                if (!c) return !1;
                var b = S(a);
                return (new RegExp(c)).test("" +
                    b.pathname + b.hash + b.search)
            }

            function Lm(a, c) {
                return na(c, function (b) {
                    var d = n(b, "settings.dr");
                    return {
                        Lg: Mm(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function Nm(a, c, b, d, e) {
                b = ff(a.document.body, b);
                d = ff(a.document.body, d);
                G(e.target, [b, d]) && gf(a, c)
            }

            function Bh(a, c, b, d) {
                (b = Om(a, d, b)) && gf(a, c, b)
            }

            function Ch(a, c) {
                var b = Dh(a, c);
                return Pm(a, b)
            }

            function Dh(a, c) {
                var b = ff(a.document.body, c);
                return b ? Qm(a, b) : ""
            }

            function gf(a, c, b) {
                if (c = Ea(a, c)) a = $d(["dr", b || "" + Sa(a, 10, 99)]), c.params($d(["__ym", a]))
            }

            function ff(a,
                c) {
                var b = null;
                try {
                    b = c ? Hc(c, a) : b
                } catch (d) { }
                return b
            }

            function Eh(a) {
                a = La(xh(a));
                return A(function (c) {
                    c = c.charCodeAt(0).toString(2);
                    return Fh("0", 8, c)
                }, a)
            }

            function Qm(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                Vd(a, c, function (e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && Xa(f)) && b.push(f)
                });
                return 0 === b.length ? "" : L(" ", b)
            }

            function Rm(a, c, b) {
                a = Ia(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    ec: b
                })
            }

            function Sm(a,
                c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(Tm, d + "." + b.ec)) && (c && G(b, Um) || a("ym-" + b + "-" + d))
                }
            }

            function Vm(a, c, b) {
                if ("rt" === b) return "https://" + Gh(a, c) + ".mc.yandex.ru/watch/3/1";
                if ("mf" === b) {
                    b = S(a);
                    b = ae(b.protocol + "//" + b.hostname + b.pathname);
                    c = bd(a, c);
                    var d = "";
                    do d += Sa(a); while (d.length < c.length);
                    d = d.slice(0, c.length);
                    a = "";
                    for (var e = 0; e < c.length; e += 1) a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
                    a = [d, a];
                    return "https://adstat.yandex.ru/track?service=metrika&id=" + a[1] + "&mask=" + a[0] + "&ref=" + b
                }
            }

            function Wm(a, c, b) {
                var d,
                    e = hf(c).Jb;
                return oa(a, "pi", c)({
                    K: Ca((d = {}, d[e] = 1, d))
                }, [b])
            }

            function Xm(a, c, b) {
                return new K(function (d, e) {
                    if (Hh(a, be, "isp")) {
                        var f = F,
                            g = function (h) {
                                ("1" === h ? d : e)();
                                f();
                                Ih(be, "isp")
                            };
                        f = ka(a).F(a, ["message"], E([b, g], z(a, "isp.stat.m", Ym)));
                        R(a, g, 1500)
                    } else e()
                })
            }

            function Ym(a, c, b) {
                var d = n(b, "data");
                if (fa(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d && b.source ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
                }
            }

            function Zm(a, c) {
                var b = Ua(a),
                    d = "wv2rf:" + J(c),
                    e = c.Wb,
                    f = jf(a),
                    g = b.C(d),
                    h = c.Hi;
                return Y(f) || Za(g) ? Aa(function (k, l) {
                    na(c, function (m) {
                        var p = !!n(m, "settings.webvisor.forms");
                        p = !n(m, "settings.x3") && p;
                        f = jf(a) || n(m, "settings.eu");
                        b.D(d, rb(p));
                        l({
                            Wb: e,
                            Gd: !!f,
                            xf: p,
                            ag: h
                        })
                    })
                }) : kf({
                    Wb: e,
                    Gd: f,
                    xf: !!Fa(g),
                    ag: h
                })
            }

            function $m() {
                var a = P(function (c, b) {
                    c[b[0]] = {
                        Yc: 0,
                        wg: 1 / b[1]
                    };
                    return c
                }, {}, [
                    ["blur", .0034],
                    ["change", .0155],
                    ["click", .01095],
                    ["deviceRotation", 2E-4],
                    ["focus", .0061],
                    ["mousemove", .5132],
                    ["scroll", .4795],
                    ["selection", .0109],
                    ["touchcancel", 2E-4],
                    ["touchend", .0265],
                    ["touchforcechange",
                        .0233
                    ],
                    ["touchmove", .1442],
                    ["touchstart", .027],
                    ["zoom", .0014]
                ]);
                return {
                    rg: function (c) {
                        if (c.length) return {
                            type: "activity",
                            data: P(function (b, d) {
                                var e = a[d];
                                return Math.round(b + e.Yc * e.wg)
                            }, 0, ea(a))
                        }
                    },
                    Uh: function (c) {
                        c && (c = a[c.data.type || c.event]) && (c.Yc += 1)
                    }
                }
            }

            function an(a) {
                return {
                    dh: function () {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    fh: function () {
                        if (a.document.doctype) {
                            var c = C({
                                name: "html",
                                publicId: "",
                                systemId: ""
                            }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " + L("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                        }
                        return null
                    }
                }
            }

            function bn(a, c, b) {
                var d = cd(a),
                    e = ka(a),
                    f = qb(a),
                    g = c.rd(),
                    h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"),
                    k = v(d, U);
                if (h) {
                    if (!g) return R(a, I(d.Z, d, "i", {
                        sa: !1
                    }), 10), {
                        qd: k,
                        Lf: F,
                        stop: F
                    };
                    Ra(Ja())
                }
                d.F(["sr"], function (r) {
                    var t, y = Jh(a, r.source);
                    y && lf(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.qa().V(y), t))
                });
                d.F(["sd"], function (r) {
                    var t = r.data;
                    r = r.source;
                    (a === r || Jh(a, r)) && d.Z("sdr", {
                        data: t.data,
                        frameId: t.frameId
                    })
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function () {
                            var r;
                            lf(a, a.parent, (r = {}, r.type = "sr", r));
                            m = R(a, p, 100, "if.i")
                        };
                    p();
                    var q = function (r) {
                        d.ea(["\u043d"], q);
                        la(a, m);
                        var t = Ic(a, r.origin).host;
                        l || r.source !== a.parent || !r.data.frameId || "about:blank" !== S(a).host && !G(t, b) || (l = !0, d.Z("i", {
                            frameId: r.data.frameId,
                            sa: !0
                        }))
                    };
                    d.F(["\u043d"], q);
                    R(a, function () {
                        d.ea(["\u043d"], q);
                        la(a, m);
                        l || (l = !0, d.Z("i", {
                            sa: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.F(a, ["message"], function (r) {
                    var t = Eb(a, r.data);
                    t && t.type && G(t.type, cn) && d.Z(t.type, {
                        data: t,
                        source: r.source,
                        origin: r.origin
                    })
                });
                return {
                    qd: k,
                    Lf: function (r) {
                        var t;
                        return lf(a, a.parent, (t = {}, t.frameId = c.rd(), t.data = r, t.type = "sd", t))
                    },
                    stop: e
                }
            }

            function Jh(a, c) {
                try {
                    return Gb(w(V("contentWindow"), za(c)), La(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function lf(a, c, b) {
                c || Ra(Ja());
                a = Fb(a, b);
                c.postMessage(a, "*")
            }

            function Kh() {
                return ac() + ac() + "-" + ac() + "-" + ac() + "-" + ac() + "-" + ac() + ac() + ac()
            }

            function ac() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function dn(a, c) {
                if (fa(c)) return c;
                var b = a.textContent;
                if (fa(b)) return b;
                b = a.data;
                if (fa(b)) return b;
                b = a.nodeValue;
                return fa(b) ? b : ""
            }

            function en(a, c, b, d, e) {
                void 0 === d && (d = {});
                void 0 === e && (e = Ga(c));
                var f = C(P(function (h, k) {
                    h[k.name] = k.value;
                    return h
                }, {}, La(c.attributes)), d);
                C(f, fn(c, e, f));
                var g = (d = sb(function (h, k) {
                    var l = k[0],
                        m = ce(a, c, l, k[1], b, e),
                        p = m.value;
                    Z(p) ? delete f[l] : f[l] = p;
                    return h || m.kb
                }, !1, Ba(f))) && dd(c);
                g && (f.width = g.width, f.height = g.height);
                return {
                    kb: d,
                    sg: f
                }
            }

            function fn(a, c, b) {
                var d = {};
                mf(a) ?
                    d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                return d
            }

            function ce(a, c, b, d, e, f) {
                void 0 === f && (f = Ga(c));
                var g = {
                    kb: !1,
                    value: d
                };
                if (mf(c)) "value" === b ? !Z(d) && "" !== d && (b = e.Gd, f = e.xf, e = ed(a, c), f ? (b = Jc(a, c, b), a = b.lb, c = b.cb, b = b.Ta, g.kb = !c && (e || a)) : (g.kb = e, b = !(c && bc("ym-record-keys", c))), b || e) && (d = "" + d, g.value = 0 < d.length ? Lh("\u2022", d.length) : "") : "checked" === b && G((c.getAttribute("type") || "").toLowerCase(), gn) ? g.value = c.checked ? "checked" : null : hn.test(b) && nf(a, c) && (g.value = null);
                else if ("IMG" === f && "src" ===
                    b) (e = ed(a, c)) ? (g.kb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (G(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === kb(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && G(b, ["src", "type"])) g.value = null;
                return g
            }

            function of(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    H: function (e, f) {
                        return z(a, d +
                            "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function jn(a, c, b, d, e) {
                function f() {
                    l && l.stop()
                }
                if (!c.vb) return K.resolve(F);
                var g = oa(a, "4", c),
                    h = {
                        K: Ca()
                    },
                    k = new kn(a, b, function (m, p, q) {
                        if (!g) return K.resolve();
                        var r = "wv-data=" + de(m, !0),
                            t = z(a, "m.n.m.s");
                        p = {};
                        p["wv-part"] = "" + q;
                        q = m.length;
                        for (var y = 0, D = 255, O = 255, M, qa, ra; q;) {
                            M = 21 < q ? 21 : q;
                            q -= M;
                            do qa = "string" === typeof m ? m.charCodeAt(y) : m[y], y += 1, 255 < qa && (ra = qa >> 8, qa &= 255, qa ^= ra), D += qa, O += D; while (--M);
                            D = (D & 255) + (D >> 8);
                            O = (O & 255) + (O >> 8)
                        }
                        m = (D & 255) + (D >> 8) << 8 | (O & 255) + (O >> 8);
                        return g(C({},
                            h, {
                            X: {
                                aa: r
                            },
                            J: (p["wv-check"] = "" + (65535 === m ? 0 : m), p["wv-type"] = b.type, p)
                        }), c)["catch"](t)
                    }),
                    l = ln(a, k, d, e);
                return na(c, function (m) {
                    m && H(a).D("isEU", n(m, "settings.eu"));
                    H(a).C("oo") || l && Mh(a, m) && l.start();
                    return f
                })
            }

            function ln(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = ka(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = I(c.flush, c),
                    m = sa(function (r, t) {
                        z(a, "hfv." + r, function () {
                            try {
                                var y = t.type
                            } catch (D) {
                                return
                            }
                            y = G(y, d);
                            c.push(t, {
                                type: r
                            });
                            y && l()
                        })()
                    }),
                    p = z(a, "sfv", function () {
                        var r = b(a),
                            t = mn(a);
                        x(function (y) {
                            f.push(g.F(y.target, [y.event], m(y.type)))
                        }, r);
                        x(function (y) {
                            f.push(g.F(y.target, [y.event], z(a, "hff." + y.type + "." + y.event, function (D) {
                                x(Aa({
                                    l: a,
                                    ja: D,
                                    flush: l
                                }), y.N)
                            })))
                        }, t);
                        k = Nh(a, "form", e);
                        e.attachEvent && (r = Nh(a, "form *", e), x(function (y) {
                            f.push(g.F(y, ["submit"], m("form")))
                        }, k), x(function (y) {
                            pf(y) && f.push(g.F(y, ["change"], m("formInput")))
                        }, r));
                        x(function (y) {
                            var D = y.submit;
                            if (T(D) || "object" === typeof D && nn.test("" + D)) y[h] = D, y.submit = z(a, "fv", function () {
                                var O = {
                                    target: y,
                                    type: "submit"
                                };
                                m("document")(O);
                                return y[h]()
                            })
                        }, k)
                    }),
                    q = z(a, "ufv", function () {
                        x(va, f);
                        x(function (r) {
                            r && (r.submit = r[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: q
                }
            }

            function on(a, c) {
                var b = ia(function (e) {
                    return 0 < e.N.length
                }, c),
                    d = Oh({
                        target: a.document,
                        type: "document"
                    });
                return A(w(U, d, pn(a)), b)
            }

            function Ph(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Ta] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        ee(h) && !h[Ta] && wa(d, qc(b, h))
                    }
                } else wa(d, qc(b, c));
                return d
            }

            function qf(a) {
                if (fd) {
                    fd = !1;
                    var c = tb(a.l),
                        b = [];
                    hb(a.l, b, 15) ? a = [] : (Q(b, c), a = b);
                    return a
                }
            }

            function Qh(a) {
                if (!fd) {
                    fd = !0;
                    a = tb(a.l);
                    var c = [];
                    Qb(c, 14);
                    Q(c, a);
                    return c
                }
            }

            function qn(a, c, b) {
                var d = c[Ta];
                if (d) {
                    a: {
                        var e = tb(a),
                            f = c[Ta];
                        if (0 < f) {
                            var g = [];
                            c = rf(a, c);
                            var h = rc[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.sf) {
                                h.sf = k;
                                if (hb(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                Q(g, e);
                                Q(g, f);
                                Q(g, c[0]);
                                Q(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (hb(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                Q(g, e);
                                Q(g, f);
                                Q(g, c[2]);
                                Q(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    wa(b, a)
                }
                return d
            }

            function Jc(a, c, b) {
                void 0 === b && (b = !1);
                if (!c) return {
                    Ta: !1,
                    cb: !1,
                    lb: !1
                };
                var d = c.getAttribute("type") || c.type;
                if ("button" === d) return {
                    Ta: !1,
                    cb: !1,
                    lb: !1
                };
                var e = ia(Rh, [c.className, c.id, c.name]),
                    f = c && bc("ym-record-keys", c);
                d = d && G(d, Sh) || Va(bb(rn), e);
                var g;
                (g = d) || (g = c.placeholder, g = Va(bb(sn), e) || Rh(g) && tn.test(g || ""));
                e = g;
                return {
                    Ta: !f && (sf(a, c) || e && b || e && !d && !b),
                    cb: f,
                    lb: e
                }
            }

            function sf(a, c) {
                return nf(a, c) || gd(a, c) ? !0 : ed(a, c)
            }

            function Rh(a) {
                return !!(a && 2 < a.length)
            }

            function mf(a) {
                try {
                    var c = Ga(a);
                    if (G(c, tf)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || G(b.toLocaleLowerCase(), un)
                        }
                        return !0
                    }
                } catch (d) { }
                return !1
            }

            function Th(a,
                c) {
                return c && bc("(ym-disable-submit|-metrika-noform)", c)
            }

            function vn(a, c) {
                return L("", A(function (b) {
                    return a.isNaN(b) ? wn.test(b) ? (b = b.toUpperCase() === b ? xn : yn, String.fromCharCode(Sa(a, b[0], b[1]))) : b : "" + Sa(a, 0, 9)
                }, c.split("")))
            }

            function ed(a, c) {
                if (Z(c)) return !1;
                if (uf(c)) {
                    var b = c.parentNode;
                    return (Z(b) ? 0 : 11 === b.nodeType) ? !1 : ed(a, c.parentNode)
                }
                b = Uh(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
                return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
            }

            function Mh(a,
                c) {
                var b = Kc(a),
                    d = b.C("visorc");
                G(d, ["w", "b"]) || (d = "");
                Vh(a) && Wh(a, fe, "visorc") && !zn.test(ub(a) || "") || (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = H(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.D("visorc", d, 30);
                return "w" === d
            }

            function An(a, c) {
                return {
                    O: function (b, d) {
                        b.K.Ob("we", Hb(c.vb));
                        Xh(a, c, b, "rn");
                        d()
                    }
                }
            }

            function Yh(a, c, b) {
                if (Zh.isEnabled(a)) return new Zh(a, c);
                if ($h.isEnabled(a)) return new $h(a, b)
            }

            function ai(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return Zb([b],
                    function (f, g) {
                        if (!f) return e;
                        f[0](a, f[2], e, d);
                        d += f[1];
                        g.push(f[3]);
                        return e
                    })
            }

            function bi(a, c, b) {
                a = c(b);
                c = [F, 0, 0];
                var d = [0, c, c, void 0];
                return Zb(a, function (e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1) sc(d, W(l)), h = k(h), l & 2 && sc(d, W(h[1])), sc(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g;) {
                            var m = k(h[g]);
                            m.push([0, 0, vf]);
                            m.push([0, W(l), sc]);
                            m.unshift([0, 0, wf]);
                            wa(f, m);
                            --g
                        } else if (g & 2) {
                            k = e[2];
                            var p = e[3],
                                q = e[4],
                                r = e[5],
                                t = ea(h);
                            for (g = t.length - 1; 0 <= g;) m =
                                t[g], m = [
                                    [0, 0, wf],
                                    [q, h[m], r],
                                    [k, m, p],
                                    [0, 0, vf],
                                    [0, W(l), sc]
                                ], wa(f, m), --g
                        } else m = k(h), m.push([0, 0, vf]), m.push([0, W(l), sc]), m.unshift([0, 0, wf]), wa(f, m);
                    return d
                })
            }

            function wf(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [F, 0, 0], a[2] = a[1]);
                sc(a, W(b));
                b && (a[2][3] = c[3], a[2] = d, a[0] += b)
            }

            function vf(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [F, 0, 0];
                a[2] = a[1];
                a[0] = 0
            }

            function sc(a, c) {
                a[0] += c[1];
                a[2][3] = c;
                a[2] = c
            }

            function ci(a) {
                return [
                    [1857, a.partsTotal, W],
                    [1793, a.activity,
                        W
                    ],
                    [1744, a.textChangeMutation, Bn],
                    [1680, a.removedNodesMutation, Cn],
                    [1616, a.addedNodesMutation, Dn],
                    [1552, a.attributesChangeMutation, En],
                    [1488, a.publishersHeader, Fn],
                    [1424, a.articleInfo, Gn],
                    [1360, a.focusEvent, Hn],
                    [1296, a.fatalErrorEvent, In],
                    [1232, a.deviceRotationEvent, Jn],
                    [1168, a.keystrokesEvent, Kn],
                    [1104, a.resizeEvent, Ln],
                    [1040, a.zoomEvent, Mn],
                    [976, a.touchEvent, Nn],
                    [912, a.changeEvent, On],
                    [848, a.selectionEvent, Pn],
                    [784, a.scrollEvent, Qn],
                    [720, a.mouseEvent, Rn],
                    [656, a.rj, Sn],
                    [592, a.page, Tn],
                    [513, a.end,
                        tc
                    ],
                    [449, a.partNum, W],
                    [401, a.chunk, Un],
                    [257, a.frameId, pa],
                    [193, a.event, W],
                    [129, a.type, W],
                    [65, a.stamp, W]
                ]
            }

            function Vn(a) {
                return [
                    [84, a.ji, ci]
                ]
            }

            function Wn(a) {
                return [
                    [129, a.position, pa],
                    [81, a.name, ca]
                ]
            }

            function Xn(a) {
                return [
                    [81, a.name, ca]
                ]
            }

            function Yn(a) {
                return [
                    [81, a.name, ca]
                ]
            }

            function Gn(a) {
                return [
                    [593, a.updateDate, ca],
                    [532, a.rubric, Wn],
                    [449, a.chars, pa],
                    [401, a.publicationDate, ca],
                    [340, a.topics, Xn],
                    [276, a.authors, Yn],
                    [209, a.pageTitle, ca],
                    [145, a.pageUrlCanonical, ca],
                    [65, a.id, W]
                ]
            }

            function Zn(a) {
                return [
                    [513,
                        a.chars, pa
                    ],
                    [489, a.maxScrolled, hd],
                    [385, a.involvedTime, pa],
                    [321, a.height, pa],
                    [257, a.width, pa],
                    [193, a.y, pa],
                    [129, a.x, pa],
                    [65, a.id, W]
                ]
            }

            function Fn(a) {
                return [
                    [129, a.involvedTime, pa],
                    [84, a.articleMeta, Zn]
                ]
            }

            function Hn(a) {
                return [
                    [65, a.target, pa]
                ]
            }

            function In(a) {
                return [
                    [209, a.stack, ca],
                    [145, a.Qg, ca],
                    [81, a.code, ca]
                ]
            }

            function Jn(a) {
                return [
                    [193, a.orientation, pa],
                    [129, a.height, W],
                    [65, a.width, W]
                ]
            }

            function Kn(a) {
                return [
                    [84, a.keystrokes, $n]
                ]
            }

            function $n(a) {
                return [
                    [273, a.modifier, ca],
                    [193, a.isMeta, tc],
                    [145, a.key,
                        ca
                    ],
                    [65, a.id, W]
                ]
            }

            function Ln(a) {
                return [
                    [257, a.pageHeight, W],
                    [193, a.pageWidth, W],
                    [129, a.height, W],
                    [65, a.width, W]
                ]
            }

            function Mn(a) {
                return [
                    [193, a.y, pa],
                    [129, a.x, pa],
                    [105, a.level, hd]
                ]
            }

            function Nn(a) {
                return [
                    [129, a.target, pa],
                    [84, a.touches, ao]
                ]
            }

            function ao(a) {
                return [
                    [297, a.force, hd],
                    [233, a.y, hd],
                    [169, a.x, hd],
                    [81, a.id, ca]
                ]
            }

            function On(a) {
                return [
                    [257, a.target, pa],
                    [193, a.hidden, tc],
                    [129, a.checked, tc],
                    [81, a.value, ca]
                ]
            }

            function Pn(a) {
                return [
                    [257, a.endNode, W],
                    [193, a.startNode, W],
                    [129, a.end, pa],
                    [65, a.start, pa]
                ]
            }

            function Qn(a) {
                return [
                    [257, a.target, pa],
                    [193, a.page, tc],
                    [129, a.y, pa],
                    [65, a.x, pa]
                ]
            }

            function Rn(a) {
                return [
                    [193, a.target, pa],
                    [129, a.y, W],
                    [65, a.x, W]
                ]
            }

            function Sn(a) {
                return [
                    [148, a.changes, bo],
                    [65, a.target, pa]
                ]
            }

            function bo(a) {
                return [
                    [193, a.index, W],
                    [145, a.op, ca],
                    [81, a.style, ca]
                ]
            }

            function Bn(a) {
                return [
                    [209, a.value, ca],
                    [129, a.index, W],
                    [65, a.target, W]
                ]
            }

            function Cn(a) {
                return [
                    [129, a.index, W],
                    [69, a.nodes, pa]
                ]
            }

            function Dn(a) {
                return [
                    [129, a.index, W],
                    [84, a.nodes, di]
                ]
            }

            function En(a) {
                return [
                    [210, a.attributes, 81, ca,
                        145, ca
                    ],
                    [129, a.index, W],
                    [65, a.target, W]
                ]
            }

            function Tn(a) {
                return [
                    [852, a.content, di],
                    [785, a.tabId, ca],
                    [705, a.recordStamp, co],
                    [656, a.location, eo],
                    [592, a.viewport, ei],
                    [528, a.screen, ei],
                    [449, a.hasBase, tc],
                    [401, a.base, ca],
                    [337, a.referrer, ca],
                    [273, a.ua, ca],
                    [209, a.address, ca],
                    [145, a.title, ca],
                    [81, a.doctype, ca]
                ]
            }

            function eo(a) {
                return [
                    [209, a.path, ca],
                    [145, a.protocol, ca],
                    [81, a.host, ca]
                ]
            }

            function ei(a) {
                return [
                    [129, a.height, pa],
                    [65, a.width, pa]
                ]
            }

            function di(a) {
                return [
                    [513, a.hidden, tc],
                    [449, a.prev, W],
                    [385, a.next,
                        W
                    ],
                    [337, a.content, ca],
                    [257, a.parent, W],
                    [210, a.attributes, 81, ca, 145, ca],
                    [145, a.name, ca],
                    [65, a.id, W]
                ]
            }

            function ca(a) {
                var c = fo({}, a, [], 0);
                return c ? [go, c, a] : [fi, 0, 0]
            }

            function Un(a) {
                return [ho, a.length, a]
            }

            function tc(a) {
                return [fi, 1, a ? 1 : 0]
            }

            function co(a) {
                a = gi(a);
                var c = a[0],
                    b = a[1],
                    d = (b >>> 28 | c << 4) >>> 0;
                c >>>= 24;
                return [hi, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
            }

            function hd(a) {
                return [io, 4, a]
            }

            function pa(a) {
                return 0 > a ? [hi, 10, gi(a)] : W(a)
            }

            function W(a) {
                return [jo,
                    128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a
                ]
            }

            function jo(a, c, b, d) {
                for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
                b[d] = a
            }

            function fi(a, c, b, d) {
                b[d] = c
            }

            function ho(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a]
            }

            function ii(a) {
                return function (c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue
                                }
                                d[e++] = c >> 6 | 192
                            } else {
                                if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                    if (a) {
                                        g += 4;
                                        continue
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = c >> 18 |
                                        240;
                                    d[e++] = c >> 12 & 63 | 128
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue
                                    }
                                    d[e++] = c >> 12 | 224
                                }
                                d[e++] = c >> 6 & 63 | 128
                            }
                            d[e++] = c & 63 | 128
                        }
                    return a ? g : e
                }
            }

            function io(a, c, b, d) {
                return ko(a)(a, c, b, d)
            }

            function lo(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) id(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) id(2143289344, b, d);
                else if (3.4028234663852886E38 < c) id((e << 31 | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875E-38 > c) id((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    id((e << 31 | f + 127 << 23 | Math.round(c *
                        a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }

            function id(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }

            function hi(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
                for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
                b[d++] = c
            }

            function gi(a) {
                if (!a) return [0, 0];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return [a, b]
            }

            function Xh(a, c, b, d) {
                var e, f = b.J;
                f.wmode = "0";
                f["wv-hit"] = f["wv-hit"] || "" + uc(a);
                f["page-url"] = f["page-url"] || S(a).href;
                d && (f[d] = f[d] || "" + Sa(a));
                a = {
                    ia: {
                        ya: "webvisor/" + c.id
                    },
                    X: C(b.X || {}, {
                        Wa: (e = {}, e["Content-Type"] = "text/plain", e),
                        Sc: "POST"
                    }),
                    J: f
                };
                C(b, a)
            }

            function mo(a, c) {
                return na(c, function (b) {
                    var d = H(a),
                        e = d.C,
                        f = v("dSync", d.D);
                    J(c);
                    if (e("dSync", !1)) f(1);
                    else return f(!0), ji(a, b, {
                        ab: c,
                        Jb: "s",
                        Md: "ds",
                        Oc: f,
                        xi: function (g, h, k) {
                            var l = g.Jc;
                            g = g.host;
                            if (n(l, "settings")) return Ra(Ja("ds.e"));
                            h = h(da) - k;
                            k = g[1];
                            var m, p;
                            l = Ca((m = {}, m.di = l, m.dit = h, m.dip = k, m));
                            m = (p = {}, p["page-url"] = S(a).href, p);
                            return oa(a, "S", ki)({
                                K: l,
                                J: m
                            }, ki).then(v(10, f), z(a, "ds.rs"))
                        }
                    })
                })
            }

            function ji(a, c, b) {
                var d, e = b.ab,
                    f = b.Oc;
                f = void 0 === f ? F : f;
                var g = ja(a),
                    h = no(a, c.userData, e),
                    k = oo(a),
                    l = w(li, E([po, qo], ge))(a),
                    m = n(c, "settings.sbp");
                b.Oc = f;
                m && (b.data = C({}, m, (d = {}, d.c = e.id, d)));
                return k.length ? ro(a, g, h, c, l, b).then(function () {
                    return so(a, k, h, g, l, b)
                }, F) : (f(2), K.resolve())
            }

            function oo(a) {
                var c = he(a);
                a = w(xf, lc(["iPhone", "iPad"]))(a);
                return c ? to : a ? uo : []
            }

            function so(a, c, b, d, e, f) {
                e = f.xi;
                var g = void 0 === e ? F : e,
                    h = f.Md;
                e = f.Oc;
                var k =
                    void 0 === e ? F : e,
                    l = d(da);
                return vo(a, c, f)(Wa(function (m) {
                    k(6);
                    x(function (p) {
                        p && Gc(a, h + ".s", p)
                    }, m);
                    m = d(lb);
                    b.D(h, m).then(v(7, k))
                }, function (m) {
                    k(8);
                    b.D(h, d(lb)).then(v(9, k));
                    g(m, d, l)
                }))
            }

            function ro(a, c, b, d, e, f) {
                var g = f.Md,
                    h = f.ab,
                    k = f.Oc;
                return new K(function (l, m) {
                    var p = b.C(g, 0);
                    p = parseInt("" + p, 10);
                    return c(lb) - p <= e.Wf ? (k(3), m()) : wo(a) ? l(void 0) : Wd(d) ? (k(4), m()) : l(xo(a, h)["catch"](w(Lc(v(5, k)), Ra)))
                })
            }

            function vo(a, c, b) {
                var d = b.Jb,
                    e = b.data,
                    f = oa(a, d, b.ab);
                a = C({}, mi);
                e && C(a.J, e);
                return yo(A(function (g) {
                    return zo(f(C({
                        X: {
                            Be: !1,
                            ce: !0
                        }
                    }, mi), A(function (h) {
                        var k = h[1],
                            l = h[2];
                        h = L("", A(function (m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + Ao[d]
                    }, g)).then(function (h) {
                        return C({}, h, {
                            host: g[h.cg]
                        })
                    }))
                }, c))
            }

            function no(a, c, b) {
                var d = c || {},
                    e = oa(a, "u", b),
                    f = Ua(a);
                return {
                    C: function (g, h) {
                        return Y(d[g]) ? f.C(g, h) : d[g]
                    },
                    D: function (g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.D(g, l);
                        return e({
                            J: (k = {}, k.key = g, k.value = l, k)
                        }, [ua.Oa + "//" + cc + "/user_storage_set"], {})["catch"](z(a, "u.d.s.s"))
                    }
                }
            }

            function Bo(a) {
                return {
                    O: function (c,
                        b) {
                        H(a).C("oo") || b()
                    }
                }
            }

            function Co(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function () {
                        return K.resolve()
                    }
                }
                return function (e) {
                    var f, g = (f = {}, f["browser-info"] = Do, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = Fb(a, e)) ? d(Eo, {
                        Xa: g,
                        fa: [],
                        aa: "site-info=" + ae(e)
                    })["catch"](F) : K.resolve()
                }
            }

            function Fo(a, c) {
                var b = yf(function (d, e) {
                    return d[1].ca > e[1].ca ? 1 : -1
                }, Ba(Ld));
                b = A(function (d) {
                    var e = d[0],
                        f = d[1].Ka;
                    d = Db(c, e) && !Z(c[e]);
                    e = c[e] !== (f || U)(void 0);
                    return rb(d && e)
                }, b);
                return ie(L("", b))
            }

            function Go(a,
                c) {
                if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
                    var b = J(c);
                    delete H(a).C("counters", {})[b];
                    Ra(Ja("oo.e"))
                }
            }

            function Ho(a) {
                if (je(a)) return null;
                var c = Io(a),
                    b = c.wf;
                Y(b) && (c.wf = null, Jo(a).then(function (d) {
                    c.wf = d
                }));
                return b ? 1 : null
            }

            function Ko(a, c, b) {
                b = b.J;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = jd(a);
                if (!a) return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Lo);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = Mo, d = e)
                }
                if (!b) return null;
                a = No(a, d, b);
                c = J(c);
                c =
                    Oo(c);
                return (c = Po(c, a)) && L(",", c)
            }

            function Po(a, c) {
                var b = a.length ? A(function (d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                x(w(U, cb("push", a)), c);
                return ia(za(null), b).length === a.length ? null : b
            }

            function No(a, c, b) {
                return A(function (d) {
                    var e = d[0],
                        f = d[1];
                    if (T(e)) return e(a, c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(ni[d[0]] || ni[g]));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }

            function ke(a,
                c) {
                try {
                    var b = c.localStorage.getItem(a);
                    return b && de(zf(b))
                } catch (d) { }
                return null
            }

            function zf(a) {
                for (var c = [], b = 0; b < a.length; b++) {
                    var d = a.charCodeAt(b);
                    128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                }
                return c
            }

            function de(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >>
                        12 & 63
                    ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >>
                            6 & 63
                        ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=")
                }
                e = L("", e);
                return c ? oi(e, !0) : e
            }

            function xh(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = oi(b)); b.length % 4;) b += "=";
                do {
                    var f = dc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        g = dc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        h = dc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++)),
                        k = dc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function oi(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
                    return Qo[b] || b
                }) : ""
            }

            function Ro(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function So(a, c, b, d, e, f, g, h) {
                var k = b.C(f);
                Z(k) && (b.D(f, g), e(a, c, b, d), k = b.C(f, g));
                Y(h) || h.Ob(f, "" + k);
                return k
            }

            function le(a,
                c, b) {
                return function (d) {
                    var e, f, g = Ea(c, b);
                    g && To(a, d, c) && (g = I(g.params, g), (d = Af({
                        event: a,
                        Ga: "products",
                        va: ec,
                        sh: "goods"
                    }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function To(a, c, b) {
                var d = !1,
                    e = "";
                if (!ha(c)) return Cb(b, "", "ecomeo"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        N(f) && f.length ? (d = pi(function (g) {
                            return ha(g) && (fa(g.id) || fc(b, g.id) || fa(g.name))
                        }, f)) || (e = "ecomgi") : e = "ecomgei";
                        break;
                    case "purchase":
                        fc(b, c.id) || fa(c.id) ? d = !0 : e = "ecompi"
                }
                Cb(b, "", e);
                return d
            }

            function kd(a,
                c) {
                return {
                    O: function (b, d) {
                        Bf(b) ? d() : na(c, function (e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.J = C(b.J || {}, e);
                            d()
                        })
                    }
                }
            }

            function Uo(a, c) {
                var b = n(c, "origin"),
                    d;
                if (d = b) d = Vo.test(b) || Wo.test(b);
                d && (b = Eb(a, c.data), "appendremote" === n(b, "action") && Xo(a, c, b))
            }

            function qi(a, c, b) {
                var d, e, f;
                void 0 === b && (b = "");
                var g = H(a),
                    h = {};
                h.getCachedTags = ri;
                h.form = (d = {}, d.closest = v(a, si), d.select = Yo, d.getData = v(a, ti), d);
                h.button = (e = {}, e.closest = v(a, ui), e.select = vi, e.getData = v(a, wi), e);
                h.status = (f = {}, f.checkStatus =
                    E([a, Fa(b)], Zo), f);
                g.D("_u", h);
                c && Ec(a, {
                    src: c
                })
            }

            function xi(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ? "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" : d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = L(".", Ka(A(w(U, Fa), b.split("."))));
                if (!G(d, $o) || !G(c, ["ru", "en", "tr"])) return "";
                c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js");
                return yi(c) ? c : ""
            }

            function ap(a, c) {
                var b = Pb(a);
                if (b) {
                    var d = b("div"),
                        e = $b(a);
                    if (e) {
                        d.innerHTML =
                            '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function () {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            Ec(f.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ? g = d.attachShadow({
                            mode: "open"
                        }) : d.createShadowRoot ?
                            g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer = f)
                    }
                }
            }

            function Zo(a) {
                var c, b = zi(a);
                a = H(a).C("getCounters", ld)();
                a = A(V("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && G(b, a), c
            }

            function Ai(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ? Vd(a, c, cb("push", e), d) : wa(e, Bi(a, c, d)));
                    x(b, e)
                }
            }

            function Vd(a, c, b, d, e, f) {
                function g(k) {
                    return T(d) ? d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT :
                        a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                void 0 === f && (f = !1);
                var h = g(c);
                if (T(b) && (f || h === a.NodeFilter.FILTER_ACCEPT) && (h && b(c), !uf(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                        acceptNode: g
                    } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function Bi(a, c, b) {
                var d = [],
                    e = w(U, cb("push", d));
                T(b) ? (b = b(c), (Z(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = Bi(a, c[b]);
                        x(e, g)
                    }
                }
                return d
            }

            function Ci(a, c, b) {
                var d;
                a = [Di(a, c, function (e) {
                    d = e;
                    e.xa.F(b)
                }), function () {
                    d && d.unsubscribe()
                }];
                return E([me, a], x)
            }

            function bp(a, c, b, d) {
                var e, f, g;
                if (b) {
                    var h = n(d, "ecommerce") || {};
                    var k = n(d, "event") || "";
                    h = ha(h) && fa(k) ? Af(k, h) : void 0;
                    if (!h) a: {
                        var l = d; !N(d) && fc(a, Ya(d)) && (l = Ia(l));
                        if (N(l) && (h = l[0], k = l[1], l = l[2], fa(k) && ha(l) && "event" === h)) {
                            h = Af(k, l);
                            break a
                        }
                        h = void 0
                    }
                    if (d = h || cp(d)) mb(a, (e = {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)), b((f = {}, f.__ym = (g = {}, g.ecommerce = [d], g), f))
                }
            }

            function cp(a) {
                var c = n(a, "ecommerce");
                if (ha(c)) return a =
                    ia(lc(dp), ea(c)), a = P(function (b, d) {
                        b[d] = c[d];
                        return b
                    }, {}, a), 0 === ea(a).length ? void 0 : a
            }

            function Af(a, c) {
                var b, d, e = fa(a) ? ep[a] : a;
                if (e) {
                    var f = e.event,
                        g = e.Ga,
                        h = e.sh,
                        k = void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if (h = l[k]) {
                        e = A(v(e.va, fp), h);
                        var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
                        b = ea(l);
                        g && 1 < b.length && (m[f].actionField = sb(function (p, q) {
                            if (q === k) return p;
                            if ("currency" === q) return m.currencyCode = l.currency, p;
                            p[gp[q] || Cf[q] || q] = l[q];
                            return p
                        }, {}, b));
                        return m
                    }
                }
            }

            function fp(a, c) {
                var b = {};
                x(function (d) {
                    var e = a[d] ||
                        Cf[d] || d; - 1 !== kb(d, "item_category") ? (e = Cf.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                }, ea(c));
                return b
            }

            function hp(a, c, b) {
                var d, e, f, g = n(b, "target");
                if (g && (g = ui(a, g), g = wi(a, g))) {
                    g = "?" + vc(g);
                    var h = gc(a, c, "gbn", (d = {}, d.id = c.id, d.query = g, d));
                    b = n(b, "isTrusted");
                    b = Z(b) ? void 0 : (e = {}, e.__ym = (f = {}, f.ite = rb(b), f), e);
                    ne(a, c, "btn", h).reachGoal(g, b)
                }
            }

            function Qe(a, c, b, d) {
                return function () {
                    if (Ea(a, c)) {
                        var e = Ia(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function ip(a, c, b, d) {
                var e = n(d, "target");
                e && (d = n(d,
                    "isTrusted"), (e = hc("button,input", a, e)) && "submit" === e.type && (e = si(a, e))) && (b.push(e), R(a, E([!1, a, c, b, e, d], Ei), 300))
            }

            function Ei(a, c, b, d, e, f) {
                var g, h, k, l = Ib(c)(e, d),
                    m = -1 !== l;
                if (a || m) m && d.splice(l, 1), a = ti(c, e), a = "?" + vc(a), d = E([c, b, "fg", (g = {}, g.id = b.id, g.query = a, g)], Fi), f = Z(f) ? void 0 : (h = {}, h.__ym = (k = {}, k.ite = rb(f), k), h), ne(c, b, "form", d).reachGoal(a, f)
            }

            function Fi(a, c, b, d) {
                return jp(a, c).then(w(E([gc(a, c, b, d), F], ge), va))
            }

            function ti(a, c, b) {
                return Gi(a, c, ["i", "n", "p"], void 0, b)
            }

            function kp(a, c) {
                var b;
                a((b = {}, b.clickmap = Y(c) ? !0 : c, b))
            }

            function lp(a, c, b, d, e) {
                var f, g = "clmap/" + e.id;
                c = (f = {}, f["page-url"] = c, f["pointer-click"] = b, f);
                f = {
                    K: Ca(),
                    J: c,
                    ia: {
                        ya: g
                    }
                };
                d(f, e)["catch"](z(a, "c.s.c"))
            }

            function mp(a, c, b, d, e) {
                if (Db(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = Ga(c.element);
                if (e && !e(c.element, a) || G(c.button, [2, 3]) && "A" !== a || Va(za(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element ===
                        d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (np(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function op(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) { }
                return b
            }

            function pp(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function Hi(a, c) {
                var b = $b(a),
                    d = Df(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function oe(a,
                c) {
                return {
                    O: function (b, d) {
                        var e, f = b.K,
                            g = b.Fa,
                            h = b.J,
                            k = b.X;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = ja(a);
                            f.Ob("rqnl", 1);
                            for (var m = md(a), p = 1; m[p];) p += 1;
                            b.M || (b.M = {});
                            b.M.Lb = p;
                            m[p] = (e = {}, e.protocol = ua.Oa, e.host = cc, e.resource = b.ia.ya, e.postParams = k.aa, e.time = l(da), e.counterType = c.$, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = uc(a), e);
                            g && (m[p].telemetry = g.l());
                            Ef(a)
                        }
                        d()
                    },
                    ma: function (b, d) {
                        Ii(a, b);
                        d()
                    }
                }
            }

            function Ii(a, c) {
                var b = md(a);
                c.K && !Za(b) && c.M && (delete b[c.M.Lb], Ef(a))
            }

            function Ef(a) {
                var c = md(a);
                Ua(a).D("retryReqs", c)
            }

            function qp(a, c) {
                if (a.Fi()) {
                    var b = Ji(c);
                    if (b && !bc("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.Gg,
                            f = a.ab,
                            g = a.sender,
                            h = a.Sg,
                            k = f.kc,
                            l = b.href;
                        var m = Xa(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m || (m = (m = b.querySelector("img")) ? Xa(m.getAttribute("title") || m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        var p = n(c, "isTrusted");
                        if (bc("ym-external-link", b)) pe(d, f, {
                            url: l,
                            jb: !0,
                            title: m,
                            vc: p,
                            sender: g
                        });
                        else {
                            k = k ? Ic(d, k).hostname : S(d).hostname;
                            h = RegExp("\\.(" + L("|", A(rp, h)) + ")$", "i");
                            var q =
                                b.protocol + "//" + b.hostname + b.pathname;
                            h = Ki.test(q) || Ki.test(l) || h.test(l) || h.test(q);
                            b = b.hostname;
                            qe(k) === qe(b) ? h ? pe(d, f, {
                                url: l,
                                sc: !0,
                                vc: p,
                                title: m,
                                sender: g
                            }) : m && e.D("il", Xa(m).slice(0, 100)) : l && sp.test(l) || pe(d, f, {
                                url: l,
                                xc: !0,
                                jb: !0,
                                sc: h,
                                vc: p,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function pe(a, c, b) {
                var d, e, f, g, h = Ca();
                void 0 !== b.vc && h.D("ite", rb(b.vc));
                b.sc && h.D("dl", 1);
                b.jb && h.D("ln", 1);
                var k = b.eg || {};
                h = {
                    K: h,
                    M: {
                        title: k.title || b.title,
                        xc: !!b.xc,
                        T: k.params
                    },
                    J: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.kc || S(a).href, d)
                };
                d = "Link";
                b.sc ? d = b.jb ? "Ext link - File" : "File" : b.jb && (d = "Ext link");
                mb(a, (e = {}, e.counterKey = J(c), e.name = "event", e.data = (f = {}, f.schema = "Link click", f.name = (b.jb ? "external" : "internal") + " url: " + b.url, f), e));
                c = b.sender(h, c).then(gc(a, c, "lcl", (g = {}, g.prefix = d, g.id = c.id, g.url = b.url, g), b.eg));
                return Mc(a, "cl.p.s", c, k.callback || F, k.ctx)
            }

            function tp(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function up(a, c, b, d) {
                var e = S(a),
                    f = e.hostname;
                e = e.href;
                if (c = nd(c).url) a = Ic(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function Li(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function vp(a, c, b, d) {
                var e;
                if (a = Ea(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    G(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Pf((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function mh(a, c, b) {
                void 0 === b && (b = U);
                var d = cd(a);
                b(d);
                var e = v(d, wp);
                re(a, c, function (f) {
                    f.xa.F(e)
                });
                return d
            }

            function wp(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.Z(n(b, "type"), b)
            }

            function re(a, c, b, d) {
                void 0 === b && (b = F);
                void 0 === d && (d = !1);
                var e = Mi(a);
                if (c && T(c.push)) {
                    var f = c.push;
                    c.push = function () {
                        var g = Ia(arguments),
                            h = g[0];
                        d && e.Z(h);
                        g = f.apply(c, g);
                        d || e.Z(h);
                        return g
                    };
                    a = {
                        xa: e,
                        unsubscribe: function () {
                            c.push = f
                        }
                    };
                    b(a);
                    x(e.Z, c);
                    return a
                }
            }

            function Od(a) {
                a = H(a);
                var c = a.C("dataLayer", []);
                a.D("dataLayer", c);
                return c
            }

            function pm(a, c) {
                var b, d;
                G(c, A(V("ymetrikaEvent.type"), a)) || a.push((b = {}, b.ymetrikaEvent = (d = {},
                    d.type = c, d), b))
            }

            function Ni(a, c) {
                var b = ad(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = E([a, b.fe], xp),
                    g = v(f, yp);
                b.Y.F(["initToParent"], function (h) {
                    g(d, b.children[h[1].counterId])
                }).F(["parentConnect"], function (h) {
                    g(e, b.Ca[h[1].counterId])
                });
                return {
                    Y: b.Y,
                    qj: function (h, k) {
                        return new K(function (l, m) {
                            b.fe(h, k, function (p, q) {
                                l([p, q])
                            });
                            R(a, v(Ja(), m), 5100, "is.o")
                        })
                    },
                    Of: function (h) {
                        var k = {
                            Rf: [],
                            ue: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    Pf: function (h) {
                        var k = {
                            Rf: [],
                            ue: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.Ca, k,
                            h)
                    }
                }
            }

            function yp(a, c, b) {
                c = ia(function (d) {
                    return !G(b.info.counterId, d.ue)
                }, c);
                x(function (d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function xp(a, c, b, d, e) {
                return (new K(function (f, g) {
                    var h = ea(b),
                        k = w(d.resolve || U, Lc(f)),
                        l = w(d.reject || U, Lc(g));
                    d.resolve = k;
                    d.reject = l;
                    x(function (m) {
                        var p;
                        d.ue.push(+m);
                        var q = b[m],
                            r = R(a, v(Ja(), l), 5100, "is.m");
                        c(q.window, C(e, (p = {}, p.toCounter = Fa(m), p)), function (t, y) {
                            la(a, r);
                            d.Rf.push(m);
                            d.resolve && d.resolve(y)
                        })
                    }, h)
                }))["catch"](z(a, "if.b"))
            }

            function zp(a) {
                var c = F,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    T(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    T(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        Ig: b,
                        Tb: c,
                        T: 1 === d.length ? a[0] : $d(d)
                    }
                }
            }

            function Mc(a, c, b, d, e) {
                var f = E([a, d, e], Ff);
                return b.then(f, function (g) {
                    f();
                    Gc(a, c, g)
                })
            }

            function Gf(a, c) {
                return {
                    O: function (b, d) {
                        var e, f, g = (b.M || {}).T,
                            h = b.X;
                        h = void 0 === h ? {} : h;
                        if (g && (Oi(c, g), !h.aa && b.K && b.J)) {
                            var k = Fb(a, g),
                                l = Pi(a),
                                m = b.K.C("pv");
                            k && !b.J.nohit && (mb(a, (e = {}, e.counterKey =
                                J(c), e.name = "params", e.data = (f = {}, f.val = g, f), e)), m ? encodeURIComponent(k).length > ua.jg ? l.push([b.K, g]) : b.J["site-info"] = k : (h.aa = k, b.X = h, b.Gc || (b.Gc = {}), b.Gc.Sh = !0))
                        }
                        d()
                    },
                    ma: function (b, d) {
                        var e = Pi(a),
                            f = Ea(a, c),
                            g = f && f.params;
                        g && (f = ia(w(od, za(b.K)), e), x(function (h) {
                            g(h[1]);
                            h = se(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }

            function te(a, c) {
                return function (b) {
                    Hf(a, c, b)
                }
            }

            function Ap(a, c) {
                If(a)(function (b) {
                    delete b[c]
                })
            }

            function Hf(a, c, b) {
                If(a)(function (d) {
                    d[c] = C(d[c] || {}, b)
                })
            }

            function If(a) {
                a = H(a);
                var c = a.C("dsjf") ||
                    Aa({});
                a.Ea("dsjf", c);
                return c
            }

            function Bp(a, c) {
                return function (b) {
                    var d, e, f = Ea(a, c);
                    if (f) {
                        var g = ic(a, J(c));
                        ha(b) ? Ya(ea(b)) ? (b = Qi(a, b)) && Ya(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : g.log("fpeo") : g.log("fpno")
                    }
                }
            }

            function Qi(a, c) {
                return P(function (b, d) {
                    var e = d[0],
                        f = d[1],
                        g = f;
                    f = ha(f);
                    if (!f && (fc(a, g) && (g = "" + g), !fa(g))) return b;
                    g = f ? Qi(a, g) : g;
                    Ya(g) && b.push([e, g]);
                    return b
                }, [], Ba(c))
            }

            function Ri(a, c, b) {
                void 0 === b && (b = 0);
                c = Ba(c);
                c = P(function (d, e) {
                    var f = e[0],
                        g = e[1],
                        h = ha(g);
                    if (!h && (fc(a, g) && (g = "" + g), !fa(g))) return d;
                    h ? g = Ri(a, g, b + 1) : !b && G(f, Cp) ? g = K.resolve(g) : ("phone_number" === f ? g = vh(a, g) : "email" === f && (g = uh(g)), g = Si(a, g));
                    d.push(g.then(function (k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return K.all(c)
            }

            function uh(a) {
                var c = Xa(a).replace(/^\++/gm, "").toLowerCase(),
                    b = c.lastIndexOf("@");
                if (-1 === b) return c;
                a = c.substr(0, b);
                b = c.substr(b + 1);
                if (!b || !Dp(a)) return c;
                b = b.replace("googlemail.com", "gmail.com");
                Ti(b) && (b = "yandex.ru");
                "yandex.ru" === b ? a = a.replace(Jf, "-") : "gmail.com" === b && (a = a.replace(Jf, ""));
                c = kb(a, "+"); -
                    1 !== c && (a = a.slice(0, c));
                return a + "@" + b
            }

            function Dp(a) {
                return 1 > a.length || 64 < a.length ? !1 : pi(function (c) {
                    if (1 > c.length) c = !1;
                    else if ('"' === c[0] && '"' === c[c.length - 1] && 2 < c.length) a: {
                        for (var b = 1; b + 2 < c.length; b += 1) {
                            var d = c.charCodeAt(b);
                            if (32 > d || 34 === d || 126 < d) {
                                c = !1;
                                break a
                            }
                            if (92 === d) {
                                if (b + 2 === c.length || 32 > c.charCodeAt(b + 1)) {
                                    c = !1;
                                    break a
                                }
                                b += 1
                            }
                        }
                        c = !0
                    }
                    else c = Ep.test(c) ? !0 : !1;
                    return c
                }, a.split("."))
            }

            function vh(a, c) {
                var b = Fp(c),
                    d = Td(c);
                return 10 > d.length || 13 < d.length || b.startsWith("+8") ? Xa(c) : "8" === b[0] ? "7" +
                    d.slice(1) : "+" === b[0] || fc(a, +b[0]) ? d : "7" + d
            }

            function Si(a, c) {
                return new K(function (b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function (f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function (h) {
                            h = n(h, "target.result") || "";
                            var k = kb(h, ","); - 1 !== k ? b(h.substring(k + 1)) : d(Ma("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function yl(a, c, b, d) {
                var e = Ui[b];
                return e ? function () {
                    var f = Ia(arguments);
                    f = d.apply(void 0, f);
                    var g = H(a);
                    g.Ea("mt", {});
                    g = g.C("mt");
                    var h = g[e];
                    g[e] = h ? h + 1 : 1;
                    return f
                } : d
            }

            function Ea(a, c) {
                var b = H(a).C("counters", {}),
                    d = J(c);
                return b[d]
            }

            function gc(a, c, b, d, e) {
                return E([a, J(c), e ? [b + ".p", e] : b, d], Cb)
            }

            function Cb(a, c, b, d) {
                ic(a, c).log(b, d)
            }

            function Gp(a, c) {
                function b(d, e, f) {
                    var g, h;
                    mb(a, (g = {}, g.name = "log", g.counterKey = c, g.data = (h = {}, h.args = N(e) ? e : [e], h.type = d, h.variables = f, h), g))
                }
                return {
                    log: v("log", b),
                    error: v("error", b),
                    warn: v("warn", b)
                }
            }

            function na(a, c) {
                var b = J(a);
                return Vi()(Hp(b)).then(c)
            }

            function Ip(a, c, b) {
                var d, e;
                c = J(c);
                var f = Kf(a);
                b = C({
                    Ug: f(da)
                }, b);
                mb(a, (d = {}, d.counterKey = c, d.name = "counterSettings", d.data = (e = {}, e.settings = b, e), d));
                return Vi()(Jp(c, b))
            }

            function Jp(a, c) {
                return function (b) {
                    var d = b[a];
                    d ? (d.Bf = !0, d.Af(c)) : b[a] = {
                        promise: K.resolve(c),
                        Bf: !0,
                        Af: F
                    }
                }
            }

            function Lf(a) {
                return !je(a) && Mf(a)
            }

            function pd(a) {
                return Pb(a) ? v(a, Kp) : !1
            }

            function vb(a) {
                if (a.fetch) {
                    var c = n(a, "AbortController");
                    return E([a, c ? new c : void 0], Lp)
                }
                return !1
            }

            function Mf(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Na("sendBeacon", c) ? E([a, I(c, n(a,
                    "navigator"))], Mp) : !1
            }

            function Mp(a, c, b, d) {
                return new K(function (e, f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = C(d.Xa, (g = {}, g["force-urlencoded"] = 1, g));
                    g = b + "?" + vc(h) + (d.aa ? "&" + d.aa : "");
                    return 2E3 < g.length ? f(Ja("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function Kp(a, c, b) {
                return new K(function (d, e) {
                    var f, g, h = "_ymjsp" + Sa(a),
                        k = C((f = {}, f.callback = h, f), b.Xa),
                        l = E([a, h], Np);
                    a[h] = function (p) {
                        try {
                            l(), oc(m), d(p)
                        } catch (q) {
                            e(q)
                        }
                    };
                    k.wmode = "5";
                    var m = Ec(a, (g = {}, g.src = Wi(c, b, k), g));
                    if (!m) return l(), e(Ma("jp.s"));
                    f = v(m,
                        oc);
                    f = w(f, v(Ja(b.fa), e));
                    g = qd(a, f, b.La || 1E4);
                    g = E([a, g], la);
                    m.onload = g;
                    m.onerror = w(l, g, f)
                })
            }

            function Np(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Nc(a) {
                var c = Pb(a);
                return c ? E([a, c], Op) : !1
            }

            function Op(a, c, b, d) {
                return new K(function (e, f) {
                    var g = $b(a),
                        h = c("img"),
                        k = w(v(h, oc), v(Ja(d.fa), f)),
                        l = qd(a, k, d.La || 3E3);
                    h.onerror = k;
                    h.onload = w(v(h, oc), v(null, e), E([a, l], la));
                    k = C({}, d.Xa);
                    delete k.wmode;
                    h.src = Wi(b, d, k);
                    ue(a) && (C(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function Lp(a, c, b, d) {
                var e, f = C(d.wb ? (e = {}, e.wmode = "7", e) : {}, d.Xa),
                    g = c || {
                        signal: void 0,
                        abort: F
                    },
                    h = a.fetch(b + "?" + vc(f), {
                        method: d.Sc,
                        body: d.aa,
                        credentials: !1 === d.Be ? "omit" : "include",
                        headers: d.Wa,
                        signal: g.signal
                    }),
                    k = v(d.fa, Ja);
                return new K(function (l, m) {
                    d.La && qd(a, function () {
                        try {
                            g.abort()
                        } catch (p) { }
                        m(k())
                    }, d.La);
                    return h.then(function (p) {
                        if (!p.ok) {
                            if (d.ce) return Ra(Xi(p));
                            Kd(d.fa)
                        }
                        return d.ce ? p.text() : d.wb ? p.json() : null
                    }).then(l)["catch"](v(k(), m))
                })
            }

            function wb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c =
                        "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (Pp.test(a.location.host) && a.opera && T(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    }
                return c ? v(a, Qp) : !1
            }

            function Qp(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.aa,
                    g = C(b.wb ? (d = {}, d.wmode = "7", d) : {}, b.Xa);
                return new K(function (h, k) {
                    e.open(b.Sc || "GET", c + "?" + vc(g), !0);
                    e.withCredentials = !1 !== b.Be;
                    b.La && (e.timeout = b.La);
                    Rp(Ba, Oc(function (m) {
                        e.setRequestHeader(m[0], m[1])
                    }))(b.Wa);
                    var l = E([a, e, Ja(b.fa),
                        b.wb, b.ce, h, k
                    ], Sp);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) { }
                })
            }

            function Sp(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(Xi(c));
                    else {
                        e = null;
                        if (d) try {
                            (e = Eb(a, c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    }
                return h
            }

            function Wi(a, c, b) {
                (b = vc(b)) && (a += "?" + b);
                c.aa && (a += (b ? "&" : "?") + c.aa);
                return a
            }

            function Tp(a, c, b) {
                var d = A(od, Rb[c] || Sb);
                x(function (e) {
                    return d.unshift(e)
                }, ve);
                return A(w(Dc([a, b]), va), d)
            }

            function Yi(a) {
                return {
                    O: function (c, b) {
                        var d = c.J;
                        if (!c.K || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] = Zi(a, e) : delete d["page-ref"];
                        d["page-url"] = Zi(a, f).slice(0, ua.lg);
                        return b()
                    }
                }
            }

            function Zi(a, c) {
                var b = S(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!fa(c) || Y(c)) return d;
                b = c.replace($i, "");
                if (-1 !== b.search(Up)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = kb(d, e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"),
                    d[d.length - 1] = b, L("/", d);
                return ""
            }

            function we(a, c) {
                return {
                    O: function (b, d) {
                        var e = aj(c);
                        e = E([b, e, d], Vp);
                        Wp(a, c, e)
                    },
                    ma: function (b, d) {
                        var e = b.K,
                            f = aj(c);
                        if (e) {
                            var g = f.ra;
                            f.Re === e && g && (x(va, g), f.ra = null)
                        }
                        d()
                    }
                }
            }

            function Vp(a, c, b) {
                var d = a.K;
                d ? Bf(a) ? (c.Re = d, b()) : c.ra ? c.ra.push(b) : b() : b()
            }

            function Bf(a) {
                return (a = a.K) && a.C("pv") && !a.C("ar")
            }

            function Wp(a, c, b) {
                if (xe(a) && qb(a)) {
                    var d = Xp(c);
                    if (!d.Ih) {
                        d.Ih = !0;
                        c = ad(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.ra = [];
                        var e = function () {
                            d.ra && (x(va, d.ra), d.ra = null)
                        };
                        R(a, e, 3E3);
                        c.Y.F(["initToChild"],
                            e)
                    }
                    d.ra ? d.ra.push(b) : b()
                } else b()
            }

            function bj(a, c) {
                return {
                    O: function (b, d) {
                        var e = b.K;
                        if (e && (!c || c.Nf)) {
                            var f = a.document.title;
                            b.M && b.M.title && (f = b.M.title);
                            var g = wc("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, ua.kg);
                            e.D("t", f)
                        }
                        d()
                    }
                }
            }

            function Jb(a) {
                return function (c, b) {
                    return {
                        O: function (d, e) {
                            var f = d.K,
                                g = d.J;
                            f && g && x(function (h) {
                                var k = rd[h],
                                    l = "bi",
                                    m = f;
                                k || (k = Nf[h], l = "tel", m = Ye(d));
                                k && (k = B(l + ":" + h, k, null)(c, b, d), m.Ob(h, k))
                            }, a || Yp());
                            e()
                        }
                    }
                }
            }

            function Zp(a, c) {
                var b = sd(a);
                c.F(["initToParent"], function (d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).F(["initToChild"], function (d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.Z("parentConnect", [e, d])
                }).F(["parentConnect"], function (d) {
                    var e = d[1];
                    e.counterId && (b.Ca[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function $p(a) {
                if (Na("MutationObserver", a.MutationObserver)) {
                    var c = sd(a).children,
                        b = new a.MutationObserver(function () {
                            x(function (d) {
                                n(c[d], "window.window") ||
                                    delete c[d]
                            }, ea(c))
                        });
                    nc(a)(Wa(F, function () {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }

            function aq(a, c) {
                return function (b, d) {
                    var e, f = {
                        bc: ja(a)(da),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.bc = Fa(b[0]), f.key = parseFloat(b[1]), f.dir = Fa(b[2]));
                    C(d, c);
                    var g = (e = {
                        data: d
                    }, e.__yminfo = L(":", ["__yminfo", f.bc, f.key, f.dir]), e);
                    return {
                        meta: f,
                        Uf: Fb(a, g) || ""
                    }
                }
            }

            function nc(a, c) {
                function b(e) {
                    n(c, d) ? e() : R(a, v(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Aa(function (e,
                    f) {
                    b(f)
                })
            }

            function td(a, c) {
                var b = c.Nd,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = Kc(a),
                    f = Ua(a),
                    g = ja(a)(Of),
                    h = cj(a, c),
                    k = h[0];
                h = h[1];
                var l = e.C("d");
                dj(a, c);
                var m = !1;
                !h && k && (h = k, m = !0);
                if (!h) h = L("", [g, Sa(a, 1E6, 999999999)]), m = !0;
                else if (!l || 15768E3 < g - Fa(l)) m = !0;
                m && !c.Sa && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
                f.D(d, h);
                return h
            }

            function bq(a, c) {
                return !c.Sa && dj(a, c)
            }

            function cj(a, c) {
                var b = Ua(a),
                    d = Kc(a),
                    e = c.Nd || "uid";
                return [b.C(e), d.C(e)]
            }

            function uc(a) {
                var c = H(a),
                    b = c.C("hitId");
                b || (b = Sa(a), c.D("hitId",
                    b));
                return b
            }

            function wi(a, c, b) {
                var d = Ga(c);
                return d && Gi(a, c, Ka(["p", cq[d], "c"]), vi, b)
            }

            function ui(a, c) {
                var b = hc(Pf, a, c);
                if (!b) {
                    var d = hc("div", a, c);
                    d && (gb(Pf + ",div", d).length || (b = d))
                }
                return b
            }

            function Gi(a, c, b, d, e) {
                return P(function (f, g) {
                    var h = null;
                    g in ej ? h = c.getAttribute && c.getAttribute(ej[g]) : g in Pc && (h = "p" === g ? Pc[g](a, c, e) : "c" === g ? Pc[g](a, c, d) : Pc[g](a, c));
                    h && (h = h.slice(0, fj[g] || 100), f[g] = Qf[g] ? "" + pc(h) : h);
                    return f
                }, {}, b)
            }

            function Nh(a, c, b) {
                if (Ud(a)) return La(b.querySelectorAll(c));
                var d = gj(c.split(" "),
                    b);
                return ia(function (e, f) {
                    return Ib(a)(e, d) === f
                }, d)
            }

            function gj(a, c) {
                var b = wa([], a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? ud(v(b, gj), La(d)) : La(d)
            }

            function Hc(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = gb(a, c);
                return b && b.length ? b[0] : null
            }

            function gb(a, c) {
                if (!c || !c.querySelectorAll) return [];
                var b = c.querySelectorAll(a);
                return b ? La(b) : []
            }

            function Ji(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) { }
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName &&
                        ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function Ec(a, c) {
                var b = Pb(a);
                if (b) {
                    var d = a.document,
                        e = b("script");
                    e.src = c.src;
                    e.type = c.type || "text/javascript";
                    e.charset = c.charset || "utf-8";
                    e.async = c.async || !0;
                    try {
                        var f = d.getElementsByTagName("head")[0];
                        if (!f) {
                            var g = d.getElementsByTagName("html")[0];
                            f = b("head");
                            g && g.appendChild(f)
                        }
                        f.insertBefore(e,
                            f.firstChild);
                        return e
                    } catch (h) { }
                }
            }

            function Ih(a, c) {
                var b = hj(a);
                G(c, b.ob) && (b.ob = ia(w(za(c), xc), b.ob), b.ob.length || (oc(b.eb), b.eb = null))
            }

            function Hh(a, c, b) {
                var d = hj(c);
                G(b, d.ob) || d.ob.push(b);
                if (Za(d.eb)) {
                    b = Pb(a);
                    if (!b) return null;
                    b = b("iframe");
                    C(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = $b(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.eb = b
                } else (a = n(d.eb, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.eb
            }

            function dq(a, c) {
                var b = N(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = L(", ", A(function (e) {
                        return "." + e
                    }, b));
                    return La(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return ud(w(cb("getElementsByClassName", c), La), b);
                d = c.getElementsByTagName("*");
                b = "(" + L("|", b) + ")";
                return ia(v(b, bc), La(d))
            }

            function af(a, c, b) {
                for (var d = "", e = ri(), f = Ga(c) || "*"; c && c.parentNode && !G(f, ["BODY", "HTML"]);) d += e[f] || "*", d += ij(a, c, b) || "", c = c.parentElement, f = Ga(c) || "*";
                return Xa(d, 128)
            }

            function ij(a, c, b) {
                if (a = ye(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f <
                        a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function ye(a, c) {
                var b = n(a, "document");
                return c && c !== b.documentElement ? c === yc(a) ? b.documentElement : n(c, "parentNode") : null
            }

            function rf(a, c) {
                var b = Rf(a, c),
                    d = b.left;
                b = b.top;
                var e = ze(a, c);
                return [d, b, e[0], e[1]]
            }

            function ze(a, c) {
                var b = n(a, "document");
                if (c === yc(a) || c === b.documentElement) {
                    b = $b(a);
                    var d = vd(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = dd(c)) ? [b.width, b.height] : [c.offsetWidth,
                c.offsetHeight
                ]
            }

            function Rf(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = Ga(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === yc(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = dd(b)) return b = Df(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function hc(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && Na("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = Uh(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (Ud(c)) {
                    for (a = La((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Ib(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function Ud(a) {
                return !(!Na("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function jj(a) {
                return Ae(a) && !Va(za(a.type), eq) ? Be(a) ? !a.checked : !a.value : fq(a) ?
                    !a.value : gq(a) ? 0 > a.selectedIndex : !0
            }

            function Ga(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (fa(c)) return c;
                    c = a.tagName;
                    if (fa(c)) return c
                } catch (b) { }
            }

            function kj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Ib(a)(c, La(b))
            }

            function hq(a, c, b) {
                b = wc("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (Na("(Event|Object|constructor)", e) || Sf(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = wc("createEvent", n(a, "document"))) && T(a)) {
                        try {
                            d = a(c)
                        } catch (g) { }
                        d &&
                            d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function dd(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.qf && c.qf & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function Df(a) {
                var c = yc(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function vd(a) {
                var c = Tf(a);
                if (c) {
                    var b =
                        c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = $b(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function Tf(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return Z(c) || Z(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function $b(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : yc(a) || b
            }

            function yc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function bc(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function zc(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) { }
                return c
            }

            function oc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Tb(a) {
                return a ? a.innerText || "" : ""
            }

            function uf(a) {
                if (Z(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function lj(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" +
                    b + c;
                d && (d += "_");
                return {
                    Fd: iq(a),
                    C: function (e, f) {
                        var g = mj(a, "" + d + e);
                        return Za(g) && !Y(f) ? f : g
                    },
                    D: function (e, f) {
                        nj(a, "" + d + e, f);
                        return this
                    },
                    cc: function (e) {
                        oj(a, "" + d + e);
                        return this
                    }
                }
            }

            function nj(a, c, b) {
                var d = Uf(a);
                a = Fb(a, b);
                if (!Za(a)) try {
                    d.setItem(c, a)
                } catch (e) { }
            }

            function mj(a, c) {
                var b = Uf(a);
                try {
                    return Eb(a, b.getItem(c))
                } catch (d) { }
                return null
            }

            function oj(a, c) {
                var b = Uf(a);
                try {
                    b.removeItem(c)
                } catch (d) { }
            }

            function Uf(a) {
                try {
                    return a.localStorage
                } catch (c) { }
                return null
            }

            function Fb(a, c, b) {
                try {
                    return a.JSON.stringify(c,
                        null, b)
                } catch (d) {
                    return null
                }
            }

            function Ye(a, c, b) {
                void 0 === b && (b = null);
                a.Fa || (a.Fa = bf());
                c && a.Fa.Ob(c, b);
                return a.Fa
            }

            function Ce(a) {
                return {
                    O: function (c, b) {
                        var d = a.document,
                            e = c.K;
                        if (e && Vf(a)) {
                            var f = ka(a),
                                g = function (h) {
                                    Vf(a) || (f.tb(d, pj, g), b());
                                    return h
                                };
                            f.F(d, pj, g);
                            e.D("pr", "1")
                        } else b()
                    }
                }
            }

            function wd(a) {
                return function (c, b, d) {
                    return function (e, f) {
                        var g = A(w(od, Dc([c, f]), va), qj[a] || []);
                        g = wa(g, d);
                        return rj(c, b, g)(e)
                    }
                }
            }

            function rj(a, c, b) {
                var d = Kb(a, c);
                return function (e) {
                    return sj(b, e, !0).then(function () {
                        var f =
                            e.ia || {},
                            g = f.Ah,
                            h = void 0 === g ? "" : g;
                        g = f.ya;
                        var k = void 0 === g ? "" : g;
                        f = f.Bh;
                        f = A(function (l) {
                            return ua.Oa + "//" + ("" + h + l || cc) + "/" + k
                        }, void 0 === f ? [cc] : f);
                        return d(e, f)
                    }).then(function (f) {
                        var g = f.Jc;
                        f = f.cg;
                        e.Cf = g;
                        e.pj = f;
                        return sj(b, e).then(v(g, U))
                    })
                }
            }

            function Kb(a, c) {
                return function (b, d) {
                    return tj(a, c, d, b)
                }
            }

            function tj(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = C({
                    fa: []
                }, d.X),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                h.Wa && h.Wa["Content-Type"] || !h.aa || (h.Wa = C({}, h.Wa, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded",
                    g)), h.aa = "site-info=" + ae(h.aa));
                h.Sc = h.aa ? "POST" : "GET";
                h.Xa = jq(a, d, l);
                h.ya = (d.ia || {}).ya;
                h.fa.push(l);
                C(d.X, h);
                g = "" + m + (d.Gc && d.Gc.Sh ? "/1" : "");
                var p = 0;
                p = kq(a, g, h);
                return k(g, h).then(function (q) {
                    var r = p,
                        t, y;
                    mb(a, (t = {}, t.name = "requestSuccess", t.data = (y = {}, y.body = q, y.requestId = r, y), t));
                    return {
                        Jc: q,
                        cg: e
                    }
                })["catch"](function (q) {
                    var r = p,
                        t, y;
                    mb(a, (t = {}, t.name = "requestFail", t.data = (y = {}, y.error = q, y.requestId = r, y), t));
                    r = f + 1 >= c.length;
                    t = e + 1 >= b.length;
                    r && t && Ra(q);
                    return tj(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1)
                })
            }

            function jq(a,
                c, b) {
                var d = C({}, c.J);
                a = ja(a);
                c.K && (d["browser-info"] = Ca(c.K.l()).D("st", a(Of)).Da());
                !d.t && (c = c.Fa) && (c.D("ti", b), d.t = c.Da());
                return d
            }

            function kq(a, c, b) {
                var d, e, f, g = Sa(a),
                    h = b.fa,
                    k = b.aa,
                    l = b.Wa,
                    m = b.Xa;
                b = b.Sc;
                mb(a, (d = {}, d.name = "request", d.data = (e = {}, e.url = c, e.requestId = g, e.senderParams = (f = {}, f.rBody = k, f.debugStack = h, f.rHeaders = l, f.rQuery = m, f.verb = b, f), e), d));
                return g
            }

            function uj(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !Z(d) && vj(a[c], b, d)
            }

            function vj(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function sj(a, c, b) {
                void 0 === b && (b = !1);
                return new K(function (d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        O: f,
                        ma: f
                    });
                    var h = Zb(g, function (k, l) {
                        var m = b ? k.O : k.ma;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(lq), e(p)
                        } else l()
                    });
                    h(wj)
                })
            }

            function Nb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ka(a);
                    var e = "__ym__promise_" + Sa(a) + "_" + Sa(a),
                        f = F;
                    d = z(a, d, function (g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation &&
                            g.stopPropagation(), c())
                    });
                    f = b.F(a, ["message"], d);
                    a.postMessage(e, "*")
                } else R(a, c, 0, d)
            }

            function ah(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = Zb(c, b);
                $c(a, c, d)(Wa(z(a, e), F))
            }

            function $c(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = xj);
                Wf = Infinity === b;
                return Aa(function (e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(mq);
                        if (c(xd)) return f(h), yj(a);
                        Wf ? (c(d(a, 1E4)), f(h), yj(a)) : R(a, g, 100)
                    }
                    var h = [];
                    nq(g)
                })
            }

            function yj(a) {
                if (Xf.length) {
                    var c = Xf.shift();
                    Wf ? c() : R(a, c, 100)
                } else Yf = !1
            }

            function nq(a) {
                Yf ? Xf.push(a) : (Yf = !0, a())
            }

            function kf(a) {
                return Aa(function (c, b) {
                    b(a)
                })
            }

            function zo(a) {
                return Aa(function (c, b) {
                    a.then(b, c)
                })
            }

            function oq(a) {
                var c = [],
                    b = 0;
                return Aa(function (d, e) {
                    x(function (f, g) {
                        f(Wa(d, function (h) {
                            try {
                                c[g] = h, b += 1, b === a.length && e(c)
                            } catch (k) {
                                d(k)
                            }
                        }))
                    }, a)
                })
            }

            function yo(a) {
                var c = [],
                    b = !1;
                return Aa(function (d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    x(function (g) {
                        g(Wa(f, function (h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function Wa(a, c) {
                return function (b) {
                    return b(a,
                        c)
                }
            }

            function Zb(a, c) {
                return Aa({
                    Ra: a,
                    Jd: c || U,
                    ne: !1,
                    ta: 0
                })
            }

            function wj(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.ta += 1
                    }
                    b = !1;
                    a.Jd(a.Ra[a.ta], function () {
                        d()
                    });
                    b || (a.ta += 1, d = v(a, wj))
                }
                for (var b = !0; !xd(a) && b;) c()
            }

            function xj(a, c) {
                return function (b) {
                    var d = ja(a),
                        e = d(da);
                    return zj(function (f, g) {
                        d(da) - e >= c && g(Aj)
                    })(b)
                }
            }

            function Zf(a, c) {
                return function (b) {
                    var d = ja(a),
                        e = d(da);
                    return $f(function (f) {
                        d(da) - e >= c && Aj(f)
                    })(b)
                }
            }

            function $f(a) {
                return function (c) {
                    for (var b; c.Ra.length && !xd(c);) b = c.Ra.pop(), b = c.Jd(b, c.Ra), a(c);
                    return b
                }
            }

            function pq(a) {
                xd(a) && Ra(Ma("i"));
                var c = a.Jd(a.Ra[a.ta]);
                a.ta += 1;
                return c
            }

            function mq(a) {
                a.ne = !1
            }

            function Aj(a) {
                a.ne = !0
            }

            function lq(a) {
                a.ta = a.Ra.length
            }

            function xd(a) {
                return a.ne || a.Ra.length <= a.ta
            }

            function tb(a) {
                a = ja(a);
                return Math.round(a(Bj) / 50)
            }

            function Bj(a) {
                var c = a.Ec,
                    b = c[1];
                a = c[0] && b ? b() : da(a) - a.Ch;
                return Math.round(a)
            }

            function Of(a) {
                return Math.round(da(a) / 1E3)
            }

            function lb(a) {
                return Math.floor(da(a) / 1E3 / 60)
            }

            function da(a) {
                var c = a.we;
                return 0 !== c ? c : ag(a.l, a.Ec)
            }

            function Kf(a) {
                var c =
                    ka(a),
                    b = Cj(a),
                    d = {
                        l: a,
                        we: 0,
                        Ec: b,
                        Ch: ag(a, b)
                    },
                    e = b[1];
                b[0] && e || c.F(a, ["beforeunload", "unload"], function () {
                    0 === d.we && (d.we = ag(a, d.Ec))
                });
                return Aa(d)
            }

            function qq(a) {
                return (10 > a ? "0" : "") + a
            }

            function rq(a, c) {
                return a.clearInterval(c)
            }

            function sq(a, c, b, d) {
                return a.setInterval(z(a, "i.err." + (d || "def"), c), b)
            }

            function R(a, c, b, d) {
                return qd(a, z(a, "d.err." + (d || "def"), c), b)
            }

            function cd(a) {
                var c = {};
                return {
                    F: function (b, d) {
                        x(function (e) {
                            n(c, e) || (c[e] = Mi(a));
                            c[e].F(d)
                        }, b);
                        return this
                    },
                    ea: function (b, d) {
                        x(function (e) {
                            n(c,
                                e) && c[e].ea(d)
                        }, b);
                        return this
                    },
                    Z: function (b, d) {
                        return n(c, b) ? z(a, "e." + d, c[b].Z)(d) : []
                    }
                }
            }

            function Mi(a) {
                var c = [],
                    b = {};
                b.ij = c;
                b.F = w(cb("push", c), v(b, U));
                b.ea = w(nb(Ib(a))(c), nb(cb("splice", c))(1), v(b, U));
                b.Z = w(U, nb(va), tq(c));
                return b
            }

            function Dj(a, c, b, d, e, f) {
                a = uq(a);
                var g = a.F,
                    h = a.ea;
                f = f ? h : g;
                if (c[f])
                    if (a.yi)
                        if (e) c[f](b, d, e);
                        else c[f](b, d);
                    else c[f]("on" + b, d)
            }

            function B(a, c, b) {
                return function () {
                    return z(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function z(a, c, b, d, e) {
                var f = b || Ra;
                return function () {
                    var g =
                        d;
                    try {
                        g = f.apply(e || null, arguments)
                    } catch (h) {
                        Gc(a, c, h)
                    }
                    return g
                }
            }

            function ag(a, c) {
                var b = c || Cj(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && T(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function Cj(a) {
                a = jd(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = I(b, a));
                return [c, b]
            }

            function jd(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function Gc(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b && ("object" === typeof b ? (b.unk && Ra(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g,
                    "\\n") || "n.s.e.s") : d = "" + b);
                vq(d) || Va(v(d, fb), wq) || xq(d) && .1 <= a.Math.random() || x(w(U, Dc(["jserrs", d, c, e]), va), Ej)
            }

            function Kd() {
                var a = Ia(arguments);
                return Ra(Ja(a))
            }

            function Ja(a) {
                var c = "";
                N(a) ? c = L(".", a) : fa(a) && (c = a);
                return Ma("err.kn(" + ua.$a + ")" + c)
            }

            function Xi(a) {
                return Ma("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50))
            }

            function yq(a) {
                this.message = a
            }

            function mb(a, c) {
                if (De(a)) {
                    var b = c.counterKey;
                    if (b) {
                        var d = b.split(":");
                        b = d[1];
                        d = bg(Yd(d[0]));
                        if ("1" === b || d) return
                    }
                    b =
                        zq(a);
                    1E3 === b.length && b.shift();
                    b.push(c)
                }
            }

            function Vh(a, c, b) {
                cg(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = Fj(a);
                (d = d && d.metrika_enabled) && Gj(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function cg(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (Wh(a, fe, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + Aq(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(Bq, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")), g || (Hj(a)[c] = b)
                    } catch (l) { }
                }
            }

            function fe(a,
                c) {
                var b = Hj(a);
                return b ? b[c] || null : null
            }

            function Fj(a) {
                try {
                    var c = a.document.cookie;
                    if (!Z(c)) {
                        var b = {};
                        x(function (d) {
                            d = d.split("=");
                            var e = d[1];
                            b[Xa(d[0])] = Xa(Ij(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) { }
                return null
            }

            function Wh(a, c, b) {
                return !dg.length || G(b, Ee) ? !0 : P(function (d, e) {
                    return d && e(a, c, b)
                }, !0, dg)
            }

            function vc(a) {
                return a ? w(Ba, Jj(function (c, b) {
                    var d = b[0],
                        e = b[1];
                    Y(e) || Z(e) || c.push(d + "=" + ae(e));
                    return c
                }, []), Cq("&"))(a) : ""
            }

            function Dq(a) {
                return a ? w(Oc(function (c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0],
                    Z(b) ? void 0 : Ij(b)
                    ]
                }), Jj(function (c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function Ij(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) { }
                return c
            }

            function ae(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) { }
                a = L("", ia(function (c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function Xa(a, c) {
                if (a) {
                    var b = Kj ? Kj.call(a) : ("" + a).replace($i, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function Ti(a) {
                var c = a.match(Lj);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return G(c, eg) ? c : !1;
                    if (a) return eg[0]
                }
                return !1
            }

            function S(a) {
                return P(function (c, b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, Eq)
            }

            function Mj(a) {
                return P(function (c, b) {
                    c[Ld[b[0]].ca] = b[1];
                    return c
                }, {}, Ba(a))
            }

            function jc(a) {
                x(function (c) {
                    var b = c[1];
                    Ld[c[0]] = {
                        ca: b.ca,
                        Ka: b.Ka
                    }
                }, Ba(a))
            }

            function xl(a, c, b, d, e) {
                var f = $g(a, b, d, e);
                a = P(function (g, h) {
                    var k = h[1],
                        l = k.Ka;
                    k = f[k.ca];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, Ba(c));
                Oi(a, a.T || {});
                return a
            }

            function $g(a, c, b, d) {
                var e;
                return ha(a) ? a : (e = {}, e.id = a, e.type = b, e.defer = d, e.params = c, e)
            }

            function Fq(a) {
                a = J(a);
                return kc[a] && kc[a].Ei || null
            }

            function Nj(a) {
                a = J(a);
                return kc[a] && kc[a].Di
            }

            function Oi(a, c) {
                var b = J(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                kc[b] || (kc[b] = {});
                if (d || e) kc[b].Di = d, kc[b].Ei = e
            }

            function cf(a, c) {
                if (Fe(a) && c) {
                    var b = ub(a).match(fg);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function df(a, c) {
                var b = ub(a);
                return b && (b = b.match(Gq)) && 1 < b.length ? Fa(b[1]) >= c : !1
            }

            function Vf(a) {
                return G("prerender", A(v(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Sa(a, c, b) {
                var d =
                    Y(b);
                Y(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function Hq() {
                var a = Ia(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) Db(b, d) && (c[d] = b[d]);
                    Db(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function Iq(a) {
                return function (c) {
                    return c ? a(c) : []
                }
            }

            function Jq(a) {
                return Y(a) ? [] : gg(function (c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], Oj(a))
            }

            function Oj(a) {
                var c = [],
                    b;
                for (b in a) Db(a, b) && c.push(b);
                return c
            }

            function Yd(a) {
                try {
                    return parseInt(a,
                        10)
                } catch (c) {
                    return null
                }
            }

            function fc(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c)
            }

            function Kq(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function wa(a, c) {
                x(w(U, cb("push", a)), c);
                return a
            }

            function yf(a, c) {
                return Array.prototype.sort.call(c, a)
            }

            function Ge(a) {
                return a.splice(0, a.length)
            }

            function La(a) {
                return a ? N(a) ? a : yd ? yd(a) : "number" === typeof a.length && 0 <= a.length ? Pj(a) : [] : []
            }

            function Lq(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (b in
                        c && a.call(c, c[b], b)) return !0;
                return !1
            }

            function Mq(a, c) {
                return P(function (b, d, e) {
                    d = a(d, e);
                    return b.concat(N(d) ? d : [d])
                }, [], c)
            }

            function Nq(a, c) {
                return P(function (b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function Oq(a, c) {
                if (!Fe(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function () {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function Pq(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function Qq(a, c) {
                return 1 <= Qj(za(a), c).length
            }

            function Rq(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c,
                        c[b], b)) return c[b]
            }

            function Qj(a, c) {
                return gg(function (b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function ge(a, c, b) {
                return b ? a : c
            }

            function Sq(a, c) {
                return P(function (b, d, e) {
                    return b ? !!a(d, e) : !1
                }, !0, c)
            }

            function Ff(a, c, b) {
                try {
                    if (T(c)) {
                        var d = Ia(arguments).slice(3);
                        Z(b) ? c.apply(null, d) : c.apply(b, d)
                    }
                } catch (e) {
                    qd(a, v(e, Ra), 0)
                }
            }

            function Ra(a) {
                throw a;
            }

            function qd(a, c, b) {
                return wc("setTimeout", a)(c, b)
            }

            function la(a, c) {
                return wc("clearTimeout", a)(c)
            }

            function ld() {
                return []
            }

            function Ac() {
                return {}
            }

            function wc(a,
                c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function () {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function ob(a, c, b) {
                return function () {
                    var d = H(arguments[0]),
                        e = b ? "global" : "m1382",
                        f = d.C(e, {}),
                        g = n(f, a);
                    g || (g = u(c), f[a] = g, d.D(e, f));
                    return g.apply(null, arguments)
                }
            }

            function $d(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                sb(function (b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : Db(b, d) || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function zd(a) {
                a =
                    a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    Ea: function (b, d) {
                        hg.call(c, b) || (c[b] = d);
                        return this
                    },
                    D: function (b, d) {
                        c[b] = d;
                        return this
                    },
                    C: function (b, d) {
                        var e = c[b];
                        return hg.call(c, b) || Y(d) ? e : d
                    }
                }
            }

            function Db(a, c) {
                return Z(a) ? !1 : hg.call(a, c)
            }

            function u(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : U;
                return function () {
                    var f = Ia(arguments),
                        g = e.apply(void 0, f),
                        h = We(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function Ib(a) {
                if (ig) return ig;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) { }
                var b =
                    a.Array && a.Array.prototype && xa(a.Array.prototype.indexOf, "indexOf");
                a = void 0;
                return ig = a = c && b ? function (d, e) {
                    return b.call(e, d)
                } : Tq
            }

            function Tq(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function va(a, c) {
                return c ? a(c) : a()
            }

            function w() {
                var a = Ia(arguments),
                    c = a.shift();
                return function () {
                    var b = c.apply(void 0, arguments);
                    return P(Rj, b, a)
                }
            }

            function Jj(a, c) {
                return E([a, c], P)
            }

            function gg(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function bb(a) {
                return cb("test", a)
            }

            function cb(a,
                c) {
                return I(c[a], c)
            }

            function v(a, c) {
                return I(c, null, a)
            }

            function E(a, c) {
                return I.apply(void 0, Cc([c, null], a))
            }

            function Uq(a) {
                return function () {
                    var c = Ia(arguments);
                    return a.apply(c[0], [c[1]].concat(c.slice(2)))
                }
            }

            function Vq() {
                var a = Ia(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function () {
                    var e = Cc(d, Ia(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, Cc([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && Sj(f, e, b);
                        delete b[f];
                        return e
                    }
                    return Sj(c, e)
                }
            }

            function Sj(a,
                c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                T(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function Ia(a) {
                if (yd) try {
                    return yd(a)
                } catch (c) { }
                return Pj(a)
            }

            function Pj(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function ha(a) {
                return !Za(a) && !Y(a) && "[object Object]" === Object.prototype.toString.call(a)
            }

            function Z(a) {
                return Y(a) || Za(a)
            }

            function T(a) {
                return "function" === typeof a
            }

            function nb(a) {
                return function (c) {
                    return function (b) {
                        return a(b, c)
                    }
                }
            }

            function sa(a) {
                return function (c) {
                    return function (b) {
                        return a(c, b)
                    }
                }
            }

            function Rj(a, c) {
                return c(a)
            }

            function rp(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(Jf, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function Wq(a) {
                return "" + a
            }

            function fb(a,
                c) {
                return !(!a || -1 === kb(a, c))
            }

            function dc(a, c) {
                return kb(a, c)
            }

            function Xq(a, c) {
                for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
                    b = a[e] === c[b] ? b + 1 : 0;
                    if (b === c.length) return e - c.length + 1;
                    if (!b && e > d) break
                }
                return -1
            }

            function fa(a) {
                return "string" === typeof a
            }

            function xa(a, c) {
                return Na(c, a) && a
            }

            function Na(a, c) {
                var b = He(a, c);
                c && !b && jg.push([a, c]);
                return b
            }

            function He(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g =
                    8; g < d; g += 1) {
                    f = "[native code]"[f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function F() { }

            function kg(a, c) {
                kg = Object.setPrototypeOf || {
                    __proto__: []
                }
                    instanceof Array && function (b, d) {
                        b.__proto__ = d
                    } || function (b, d) {
                        for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                    };
                return kg(a, c)
            }

            function xc(a) {
                return !a
            }

            function db(a, c) {
                return c
            }

            function U(a) {
                return a
            }

            function Ha(a, c) {
                function b() {
                    this.constructor = a
                }
                kg(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function Cc() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function n(a, c) {
                return a ? P(function (b, d) {
                    if (Z(b)) return b;
                    try {
                        return b[d]
                    } catch (e) { }
                    return null
                }, a, c.split(".")) : null
            }

            function Yq(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }

            function Zq() { }

            function $q(a, c) {
                return function () {
                    a.apply(c, arguments)
                }
            }

            function Da(a) {
                if (!(this instanceof Da)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.Ha = 0;
                this.Ce = !1;
                this.Na = void 0;
                this.xb = [];
                Tj(a, this)
            }

            function Uj(a, c) {
                for (; 3 === a.Ha;) a = a.Na;
                0 === a.Ha ? a.xb.push(c) : (a.Ce = !0, Da.De(function () {
                    var b = 1 === a.Ha ? c.Vh : c.Zh;
                    if (null === b) (1 === a.Ha ? lg : Ad)(c.promise, a.Na);
                    else {
                        try {
                            var d = b(a.Na)
                        } catch (e) {
                            Ad(c.promise, e);
                            return
                        }
                        lg(c.promise, d)
                    }
                }))
            }

            function lg(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b =
                            c.then;
                        if (c instanceof Da) {
                            a.Ha = 3;
                            a.Na = c;
                            mg(a);
                            return
                        }
                        if ("function" === typeof b) {
                            Tj($q(b, c), a);
                            return
                        }
                    }
                    a.Ha = 1;
                    a.Na = c;
                    mg(a)
                } catch (d) {
                    Ad(a, d)
                }
            }

            function Ad(a, c) {
                a.Ha = 2;
                a.Na = c;
                mg(a)
            }

            function mg(a) {
                2 === a.Ha && 0 === a.xb.length && Da.De(function () {
                    a.Ce || Da.qg(a.Na)
                });
                for (var c = 0, b = a.xb.length; c < b; c++) Uj(a, a.xb[c]);
                a.xb = null
            }

            function ar(a, c, b) {
                this.Vh = "function" === typeof a ? a : null;
                this.Zh = "function" === typeof c ? c : null;
                this.promise = b
            }

            function Tj(a, c) {
                var b = !1;
                try {
                    a(function (d) {
                        b || (b = !0, lg(c, d))
                    }, function (d) {
                        b || (b = !0, Ad(c, d))
                    })
                } catch (d) {
                    b || (b = !0, Ad(c, d))
                }
            }

            function Gj(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return cg(a, c, "", -100, b, d, e)
            }

            function Pd(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = br(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    cc: function (g, h, k) {
                        Gj(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    C: function (g) {
                        return fe(a, "" + c + g + f)
                    },
                    D: function (g, h, k, l, m) {
                        cg(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function Eb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function pc(a) {
                a = "" +
                    a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function Ic(a, c) {
                var b = cr(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function Vj(a) {
                return (a = S(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function dr(a, c) {
                var b = Vj(a);
                Wj = sq(a, function () {
                    var d = Vj(a);
                    d !== b &&
                        (c(), b = d)
                }, 200, "t.h");
                return I(rq, null, a, Wj)
            }

            function er(a, c, b, d) {
                var e, f, g = c.$,
                    h = c.ze,
                    k = c.kc,
                    l = H(a),
                    m = Ca((e = {}, e.wh = 1, e.pv = 1, e));
                e = n(d, "isTrusted");
                d && !Z(e) && m.D("ite", rb(e));
                Nd(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
                h && m.D("ut", "1");
                g = l.C("lastReferrer");
                d = S(a).href;
                k = {
                    J: (f = {}, f["page-url"] = k || d, f["page-ref"] = g, f),
                    K: m
                };
                b(k, c)["catch"](z(a, "g.s"));
                l.D("lastReferrer", d)
            }

            function fr(a, c, b) {
                function d() {
                    r || (q = !0, t = !1, r = !0, f())
                }

                function e() {
                    m = !0;
                    k(!1);
                    c()
                }

                function f() {
                    la(a, l);
                    if (m) k(!1);
                    else {
                        var M = Math.max(0,
                            b - (t ? y : y + p(da) - D));
                        M ? l = R(a, e, M, "u.t.d.c") : e()
                    }
                }

                function g() {
                    t = q = r = !0;
                    y += p(da) - D;
                    D = p(da);
                    f()
                }

                function h() {
                    q || r || (y = 0);
                    D = p(da);
                    q = r = !0;
                    t = !1;
                    f()
                }

                function k(M) {
                    M = M ? O.F : O.tb;
                    M(a, ["blur"], g);
                    M(a, ["focus"], h);
                    M(a.document, ["click", "mousemove", "keydown", "scroll"], d)
                }
                var l = 0,
                    m = !1;
                if (Sf(a)) return l = R(a, c, b, "u.t.d"), E([a, l], la);
                var p = ja(a),
                    q = !1,
                    r = !1,
                    t = !0,
                    y = 0,
                    D = p(da),
                    O = ka(a);
                k(!0);
                f();
                return function () {
                    la(a, l);
                    k(!1)
                }
            }

            function Bd(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = gb('[itemprop~="' + b + '"]', c);
                return d ? ia(function (e) {
                    return e.parentNode &&
                        hc("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function eb(a, c, b) {
                return (a = Bd(a, c, b)) && a.length ? a[0] : null
            }

            function $a(a) {
                if (!a) return "";
                a = N(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Tb(a[0]) : ""
            }

            function Xj(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : $a(a) : ""
            }

            function gd(a, c, b) {
                a = c && (fb(c.className, "ym-disable-keys") || fb(c.className, "-metrika-nokeys"));
                return b && c ? a || !!dq(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function nf(a, c) {
                return Ae(c) ? "password" ===
                    c.type || c.name && G(c.name.toLowerCase(), Yj) || c.id && G(c.id.toLowerCase(), Yj) : !1
            }

            function Zj(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                wa(a, [b >> 8, b & 255])
            }

            function Qb(a, c) {
                wa(a, [c & 255])
            }

            function hb(a, c, b) {
                return -1 !== Ib(a)(b, gr) ? (Qb(c, b), !1) : !0
            }

            function Q(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) wa(a, [b & 127 | 128]), b >>= 7;
                wa(a, [b])
            }

            function ng(a, c) {
                Q(a, c.length);
                for (var b = 0; b < c.length; b += 1) Q(a, c.charCodeAt(b))
            }

            function og(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d +=
                    1) Zj(a, b.charCodeAt(d))
            }

            function hr(a, c) {
                var b = [];
                if (hb(a, b, 27)) return [];
                Q(b, c);
                return b
            }

            function ir(a, c) {
                var b = Ga(c);
                if (!b) return c[Ta] = -1, null;
                var d = +c[Ta];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.Vi) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = ye(a, c),
                    g = f && f[Ta] ? f[Ta] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = jr()[b];
                h || (e |= 2);
                var k = ij(a, c);
                k || (e |= 4);
                var l = rf(a, c);
                (f = f ? rf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                rc[d].sf = l[0] +
                    "x" + l[1];
                rc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (hb(a, f, 1)) return null;
                Q(f, d);
                Qb(f, e);
                Q(f, g);
                h ? Qb(f, h) : og(f, b);
                k && Q(f, k);
                e & 8 || (Q(f, l[0]), Q(f, l[1]), Q(f, l[2]), Q(f, l[3]));
                e & 32 && og(f, c.id);
                Qb(f, 0);
                return f
            }

            function kr(a, c) {
                var b = c[Ta];
                if (!b || 0 > b || !pf(c) || !c.form || Th(a, c.form)) return [];
                var d = kj(a, c.form);
                if (0 > d) return [];
                if (Ae(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        bc: 0,
                        Zi: 0,
                        "datetime-local": 0,
                        email: 0,
                        qf: 0,
                        oj: 0,
                        search: 0,
                        tj: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        uj: 0,
                        password: 2,
                        nj: 3,
                        Xi: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        Si: 1,
                        Ti: 5
                    };
                    var f = Ga(c);
                    e = Y(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    }
                if (0 > f) return [];
                g = [];
                if (hb(a, g, 7)) return [];
                Q(g, b);
                Q(g, d);
                Q(g, e);
                ng(g, c.name || "");
                Q(g, f);
                return g
            }

            function qc(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !qn(a, c, b); c = ye(a, c)) d.push(c);
                x(function (e) {
                    rc.counter += 1;
                    var f = rc.counter;
                    e[Ta] = f;
                    rc[f] = {};
                    f = ir(a, e);
                    e = kr(a, e);
                    f && e && (wa(b, f), wa(b, e))
                }, lr(d));
                return b
            }

            function mr(a) {
                var c = a.ja;
                if (!fd || c && !c.fromElement) return Qh(a)
            }

            function nr(a) {
                var c = a.ja;
                if (c && !c.toElement) return qf(a)
            }

            function ak(a) {
                var c = zc(a.ja);
                if (c && ee(c)) {
                    var b = Ph(a, c),
                        d = b.concat;
                    var e = tb(a.l),
                        f = [];
                    hb(a.l, f, 17) ? a = [] : (Q(f, e), Q(f, c[Ta]), a = f);
                    return d.call(b, a)
                }
            }

            function bk(a) {
                var c = a.l,
                    b = a.ja.target;
                if (b && ee(b)) {
                    c = qc(c, b);
                    var d = c.concat;
                    var e = tb(a.l),
                        f = [];
                    hb(a.l, f, 18) ? a = [] : (Q(f, e), Q(f, b[Ta]), a = f);
                    return d.call(c, a)
                }
            }

            function ck(a) {
                var c = a.l,
                    b = zc(a.ja);
                if (!b || nf(c, b) || gd(c, b)) return [];
                if (pf(b)) {
                    var d =
                        H(c).C("isEU"),
                        e = Jc(c, b, d),
                        f = e.Ta;
                    d = e.lb;
                    e = e.cb;
                    if (Be(b)) var g = b.checked;
                    else g = b.value, g = f ? L("", dk(g.split(""))) : g;
                    c = qc(c, b);
                    f = c.concat;
                    var h = tb(a.l);
                    d = d && !e;
                    e = [];
                    hb(a.l, e, 39) ? a = [] : (Q(e, h), Q(e, b[Ta]), og(e, String(g)), Qb(e, d ? 1 : 0), a = e);
                    return f.call(c, a)
                }
            }

            function Ie(a) {
                var c = a.l,
                    b = a.ja,
                    d = zc(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = v(e, wa);
                d && ee(d) ? f(Ph(a, d)) : f(qc(c, d));
                var g = Hi(c, b);
                f = e.concat;
                a = tb(a.l);
                var h = b.type,
                    k = [g.x, g.y];
                g = b.which;
                b = b.button;
                var l;
                var m = ze(c, d);
                var p = m[0];
                for (m =
                    m[1]; d && (!p || !m);)
                    if (d = ye(c, d)) m = ze(c, d), p = m[0], m = m[1];
                d ? (p = d[Ta], !p || 0 > p ? c = [] : (m = (l = {}, l.mousemove = 2, l.click = 32, l.dblclick = 33, l.mousedown = 4, l.mouseup = 30, l.touch = 12, l)[h]) ? (l = [], d = Rf(c, d), hb(c, l, m) ? c = [] : (Q(l, a), Q(l, p), Q(l, Math.max(0, k[0] - d.left)), Q(l, Math.max(0, k[1] - d.top)), /^mouse(up|down)|click$/.test(h) && (c = g || b, Qb(l, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = l)) : c = []) : c = [];
                return f.call(e, c)
            }

            function or(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Za(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = Jc(b, c).Ta || gd(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = Jc(b, d).Ta || gd(b, d, !0), f += 1;
                if (e !== pg) return pg = e, d = d ? L("", dk(e.split(""))) : e, e = tb(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) :
                    (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], hb(a.l, c, 29) ? a = [] : (Q(c, e), ng(c, b), ng(c, d), a = c), a
            }

            function pr(a) {
                return Ie(a).concat(or(a) || [])
            }

            function ek(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function fk(a) {
                var c = [];
                qg || (qg = !0, pg && wa(c, hr(a.l, tb(a.l))), Nb(a.l, function () {
                    qg = !1
                }, "fv.c"));
                return c
            }

            function gk(a, c, b, d) {
                c = zc(c);
                if (!c || sf(a, c)) return [];
                var e = Jc(a, c),
                    f = e.lb,
                    g = e.cb;
                e = e.Ta;
                var h = H(a);
                if (!g && (f && h.C("isEU") || gd(a, c))) a = [];
                else {
                    f =
                        qc(a, c);
                    g = f.concat;
                    var k = tb(a);
                    h = [];
                    if (hb(a, h, 38)) a = [];
                    else {
                        Q(h, k);
                        Zj(h, b);
                        Qb(h, d);
                        a = c[Ta];
                        if (!a || 0 > a) a = 0;
                        Q(h, a);
                        Qb(h, e ? 1 : 0);
                        a = h
                    }
                    a = g.call(f, a)
                }
                return a
            }

            function qr(a) {
                var c = a.l,
                    b = a.ja,
                    d = b.keyCode,
                    e = ek(b),
                    f = [],
                    g = v(f, wa);
                if ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(gk(c, b, d, e | 16)), rg = !1, Nb(c, function () {
                    rg = !0
                }, "fv.kd"), !(67 === d &&
                    e & 4) || e & 1 || e & 2 || g(fk(a));
                return f
            }

            function rr(a) {
                var c = a.l;
                a = a.ja;
                var b = [];
                rg && !sg && 0 !== a.which && (wa(b, gk(c, a, a.charCode || a.keyCode, ek(a))), sg = !0, Nb(c, function () {
                    sg = !1
                }, "fv.kp"));
                return b
            }

            function hk(a) {
                var c = a.l,
                    b = zc(a.ja);
                if (!b || Th(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) jj(e[f]) || wa(d, qc(c, e[f]));
                    a = tb(a.l);
                    e = kj(c, b);
                    if (0 > e) c = [];
                    else {
                        f = b.elements;
                        var g = f.length;
                        b = [];
                        for (var h = 0; h < g; h += 1)
                            if (!jj(f[h])) {
                                var k = f[h][Ta];
                                k && 0 < k && b.push(k)
                            }
                        f = [];
                        if (hb(c, f,
                            11)) c = [];
                        else {
                            Q(f, a);
                            Q(f, e);
                            Q(f, b.length);
                            for (c = 0; c < b.length; c += 1) Q(f, b[c]);
                            c = f
                        }
                    }
                    wa(d, c)
                }
                return d
            }

            function sr(a) {
                var c = a.flush;
                a = zc(a.ja);
                "BODY" === Ga(a) && c()
            }

            function Jm(a, c) {
                var b, d = zc(c),
                    e = ua.Yb,
                    f = zd(a);
                if (d && bc("ym-advanced-informer", d)) {
                    var g = f.C("ifc", 0) + 1;
                    f.D("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Fa(d.getAttribute("data-cid") || "");
                    if (h || 0 === h) (e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.D("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function wl(a, c, b, d, e) {
                if (!b.length) return e;
                b = A(function (f) {
                    return E([a, c, d], f)
                }, b);
                return w.apply(void 0, b)(e)
            }
            var Qc = {
                construct: "Metrika2",
                callbackPostfix: "2",
                version: "byif4b2szwsjgf7xv79i57r93v",
                host: "mc.yandex.com"
            },
                jg = [],
                Jf = /\./g,
                ik = xa(String.prototype.indexOf, "indexOf"),
                kb = ik ? function (a, c) {
                    return ik.call(a, c)
                } : Xq,
                za = sa(function (a, c) {
                    return a === c
                }),
                Lc = sa(function (a, c) {
                    a(c);
                    return c
                }),
                Aa = sa(Rj),
                Za = za(null),
                Y = za(void 0),
                yd = xa(Array.from, "from"),
                jk = xa(Function.prototype.bind, "bind"),
                I = jk ? Uq(jk) :
                    Vq,
                kk = xa(Array.prototype.reduce, "reduce"),
                sb = kk ? function (a, c, b) {
                    return kk.call(b, a, c)
                } : gg,
                P = sb,
                Rp = w,
                me = w(U, va),
                ig, We = Ib(window),
                qm = nb(We),
                hg = Object.prototype.hasOwnProperty,
                H = u(zd),
                V = nb(n),
                Ya = V("length"),
                Dc = sa(E),
                tr = sa(cb),
                lk = xa(Array.prototype.every, "every"),
                pi = lk ? function (a, c) {
                    return lk.call(c, a)
                } : Sq,
                Hb = E([1, null], ge),
                rb = E([1, 0], ge),
                xb = Boolean,
                mk = xa(Array.prototype.filter, "filter"),
                ia = mk ? function (a, c) {
                    return mk.call(c, a)
                } : Qj,
                Ka = v(xb, ia),
                ur = sa(ia),
                nk = xa(Array.prototype.find, "find"),
                Gb = nk ? function (a,
                    c) {
                    return nk.call(c, a)
                } : Rq,
                ok = xa(Array.prototype.includes, "includes"),
                G = ok ? function (a, c, b) {
                    return ok.call(c, a, b)
                } : Qq,
                lc = nb(G),
                pk = xa(Array.prototype.join, "join"),
                L = pk ? function (a, c) {
                    return pk.call(c, a)
                } : Pq,
                Cq = sa(L),
                qk = u(function (a) {
                    var c = n(a, "navigator") || {};
                    a = n(c, "userAgent") || "";
                    c = n(c, "vendor") || "";
                    return {
                        gf: -1 < kb(c, "Apple"),
                        dg: a
                    }
                }),
                ub = u(V("navigator.userAgent")),
                fg = /Firefox\/([0-9]+)/i,
                Fe = u(function (a) {
                    var c = n(a, "document.documentElement.style"),
                        b = n(a, "InstallTrigger");
                    a = -1 !== (n(a, "navigator.userAgent") ||
                        "").toLowerCase().search(fg);
                    fg.lastIndex = 0;
                    return !(!(c && "MozAppearance" in c) || Z(b)) || a
                }),
                rk = xa(Array.isArray, "isArray"),
                N = rk ? function (a) {
                    return rk(a)
                } : Yq,
                sk = xa(Array.prototype.map, "map"),
                tk = sk && Oq(window, Array.prototype.map) ? function (a, c) {
                    return c && 0 < c.length ? sk.call(c, a) : []
                } : Nq,
                A = tk,
                x = tk,
                uk = xa(Array.prototype.flatMap, "flatMap"),
                ud = uk ? function (a, c) {
                    return uk.call(c, a)
                } : Mq,
                Oc = sa(A),
                tq = nb(A),
                vk = xa(Array.prototype.some, "some"),
                Va = vk ? function (a, c) {
                    return vk.call(c, a)
                } : Lq,
                se = u(Ib),
                od = V("0"),
                wk = xa(Array.prototype.reverse,
                    "reverse"),
                lr = wk ? function (a) {
                    return wk.call(a)
                } : Kq,
                xk = nb(parseInt),
                Fa = xk(10),
                ie = xk(2),
                yk = xa(Object.keys, "keys"),
                zk = xa(Object.entries, "entries"),
                Ba = zk ? Iq(zk) : Jq,
                ea = yk ? function (a) {
                    return yk(a)
                } : Oj,
                C = Object.assign || Hq,
                Oh = sa(function (a, c) {
                    return C({}, a, c)
                }),
                Xd = u(w(V("String.fromCharCode"), v("fromCharCode", Na), xc)),
                tg = u(w(ub, bb(/ipad|iphone|ipod/i))),
                xf = u(function (a) {
                    return n(a, "navigator.platform") || ""
                }),
                ue = u(function (a) {
                    a = qk(a);
                    var c = a.dg;
                    return a.gf && !c.match("CriOS")
                }),
                vr = bb(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                wr = bb(/; wv\)/),
                je = u(function (a) {
                    a = ub(a);
                    return wr(a) || vr(a)
                }),
                xr = /Chrome\/(\d+)\./,
                yr = u(function (a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(xr)) && a.length ? 76 <= Fa(a[1]) : !1
                }),
                he = u(function (a) {
                    var c = (ub(a) || "").toLowerCase();
                    a = xf(a);
                    return fb(c, "android") && fb(c, "mobile") && /^android|linux armv/i.test(a)
                }),
                zr = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                Ar = u(function (a) {
                    var c = n(a, "navigator.connection.type");
                    if (Y(c)) return null;
                    a = se(a)(c, zr);
                    return -1 === a ? c : "" + a
                }),
                Sf = u(w(V("document.addEventListener"), xc)),
                Ak = u(function (a) {
                    var c = n(a, "navigator") || {};
                    return P(function (b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                jh = u(function (a) {
                    var c = n(a, "navigator") || {};
                    a = Ak(a);
                    fa(a) || (a = "", c = n(c, "languages.0"), fa(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                qb = u(function (a) {
                    return (n(a, "top") || a) !== a
                }),
                Br = u(V("top.contentWindow")),
                Cr = u(function (a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) { }
                    return c
                }),
                Dr = u(function (a) {
                    var c =
                        "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = n(b, "toString") ? "" + b.toString() : "";
                    b = -1 !== kb(b, "Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(Va(v(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Va(v(n(a, "document"), n),
                        c) || b || d && Va(I(d.getAttribute, d), e))
                }),
                Er = u(function (a) {
                    return !!(Va(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(ub(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                Fr = u(function (a) {
                    return !(!n(a, "ia_document.shareURL") || !n(a, "ia_document.referrer"))
                }),
                Cd = u(function (a) {
                    var c = ub(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (tg(a) || 10 < b[0] || 10 === b[0] &&
                        13 <= b[1]) && ue(a)
                }),
                Gq = /Edg\/(\d+)\./,
                xe = u(function (a) {
                    return Cd(a) || cf(a, 68) || df(a, 79)
                }),
                Gr = Qc.construct,
                cc = Qc.host,
                ug = Sf(window),
                ua = {
                    mg: 24226447,
                    gg: 26302566,
                    pg: 51533966,
                    Qi: 65446441,
                    Oa: "https:",
                    $a: "1382",
                    Yb: Gr,
                    lg: ug ? 512 : 2048,
                    jg: ug ? 512 : 2048,
                    kg: ug ? 100 : 400,
                    Ri: 100,
                    ng: "noindex"
                },
                Dd = [],
                J = u(function (a) {
                    return a.id + ":" + a.$
                }),
                kc = {},
                Nd = za("1"),
                Hr = setTimeout;
            Da.prototype["catch"] = function (a) {
                return this.then(null, a)
            };
            Da.prototype.then = function (a, c) {
                var b = new this.constructor(Zq);
                Uj(this, new ar(a, c, b));
                return b
            };
            Da.prototype["finally"] = function (a) {
                var c = this.constructor;
                return this.then(function (b) {
                    return c.resolve(a()).then(function () {
                        return b
                    })
                }, function (b) {
                    return c.resolve(a()).then(function () {
                        return c.reject(b)
                    })
                })
            };
            Da.all = function (a) {
                return new Da(function (c, b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function (m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            Da.resolve = function (a) {
                return a && "object" === typeof a && a.constructor === Da ? a : new Da(function (c) {
                    c(a)
                })
            };
            Da.reject = function (a) {
                return new Da(function (c, b) {
                    b(a)
                })
            };
            Da.race = function (a) {
                return new Da(function (c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) Da.resolve(a[d]).then(c, b)
                })
            };
            Da.De = "function" === typeof setImmediate &&
                function (a) {
                    setImmediate(a)
                } || function (a) {
                    Hr(a, 0)
                };
            Da.qg = function (a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var K = window.Promise,
                Ir = xa(K, "Promise"),
                Bk = xa(n(K, "resolve"), "resolve"),
                Ck = xa(n(K, "reject"), "reject"),
                Dk = xa(n(K, "all"), "all");
            if (Ir && Bk && Ck && Dk) {
                var Je = function (a) {
                    return new Promise(a)
                };
                Je.resolve = I(Bk, K);
                Je.reject = I(Ck, K);
                Je.all = I(Dk, K);
                K = Je
            } else K = Da;
            var Re = [],
                Md = [],
                X = [],
                Qa = [],
                vg = [],
                Ed = [],
                bg = lc([26812653]),
                Jr = u(w(V("id"), bg), J),
                Ub = {
                    id: "id",
                    ze: "ut",
                    $: "type",
                    Nd: "ldc",
                    Sa: "nck",
                    kc: "url",
                    ah: "referrer"
                },
                Kr = /^\d+$/,
                Rc = {
                    id: function (a) {
                        a = "" + (a || "0");
                        Kr.test(a) || (a = "0");
                        try {
                            var c = Fa(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    $: function (a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    Sa: xb,
                    ze: xb
                };
            Ub.dd = "defer";
            Rc.dd = xb;
            Ub.T = "params";
            Rc.T = function (a) {
                return ha(a) || N(a) ? a : null
            };
            Ub.ye = "userParams";
            Ub.$f = "triggerEvent";
            Rc.$f = xb;
            Ub.Nf = "sendTitle";
            Rc.Nf = function (a) {
                return !!a || Y(a)
            };
            Ub.te = "trackHash";
            Rc.te = xb;
            Ub.Zf = "trackLinks";
            Ub.Mg = "enableAll";
            var Ld = P(function (a, c) {
                var b =
                    c[0];
                a[b] = {
                    ca: c[1],
                    Ka: Rc[b]
                };
                return a
            }, {}, Ba(Ub)),
                Eq = "hash host hostname href pathname port protocol search".split(" "),
                eg = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "),
                Lj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                qe = u(function (a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                li = u(function (a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Lj));
                    return c
                }),
                Ek = w(S, V("protocol"), za("https:")),
                Aq = u(function (a) {
                    return yr(a) && Ek(a) ? "SameSite=None;Secure;" :
                        ""
                }),
                $i = /^\s+|\s+$/g,
                Kj = xa(String.prototype.trim, "trim"),
                wg = sa(function (a, c) {
                    return c.replace(a, "")
                }),
                Lr = wg(/\s/g),
                Td = wg(/\D/g),
                Ee = ["metrika_enabled"],
                dg = [],
                Hj = ob("gsc", Fj),
                Bq = /:\d+$/,
                br = u(function (a) {
                    var c = (S(a).host || "").split(".");
                    return 1 === c.length ? c[0] : P(function (b, d, e) {
                        e += 1;
                        2 <= e && !b && (e = L(".", c.slice(-e)), Vh(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                Kc = u(Pd),
                De = u(function (a) {
                    var c = Kc(a),
                        b = "1" === c.C("debug"),
                        d = -1 < dc(S(a).href, "_ym_debug=1") || -1 < dc(S(a).href, "_ym_debug=2"),
                        e = a._ym_debug;
                    !e && !d || b || (a = S(a),
                        c.D("debug", "1", void 0, a.host));
                    return !!(b || e || d)
                }),
                zq = ob("debuggerEvents", ld, !0),
                wq = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                Fd, Ma = function (a) {
                    return function (c, b) {
                        void 0 === b && (b = !1);
                        if (Fd) var d = new Fd(c);
                        else Na("Error", a.Error) ? (Fd = a.Error, d = new a.Error(c)) : (Fd = yq, d = new Fd(c));
                        b && (d.unk = !0);
                        return d
                    }
                }(window),
                xq = bb(/^http./),
                vq = bb(/^err.kn/),
                Ej = [],
                uq = u(function (a) {
                    a = !(!a.addEventListener || !a.removeEventListener);
                    return {
                        yi: a,
                        F: a ? "addEventListener" : "attachEvent",
                        ea: a ? "removeEventListener" : "detachEvent"
                    }
                }),
                Mr = u(function (a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function () {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", F, b)
                    } catch (d) { }
                    return c
                }),
                Nr = sa(function (a, c) {
                    if (null !== c) return a ? C({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                ka = u(function (a) {
                    var c = Mr(a),
                        b = Nr(c),
                        d = {};
                    return C(d, {
                        F: function (e, f, g, h) {
                            x(function (k) {
                                var l = b(h);
                                Dj(a, e, k, g, l, !1)
                            }, f);
                            return I(d.tb, d, e, f, g, h)
                        },
                        tb: function (e, f, g, h) {
                            x(function (k) {
                                var l =
                                    b(h);
                                Dj(a, e, k, g, l, !0)
                            }, f)
                        }
                    })
                }),
                ja = u(Kf),
                zj = sa(function (a, c) {
                    for (var b = []; !xd(c);) {
                        var d = pq(c);
                        a(d, function (e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                Fk = sa(function (a, c) {
                    return Aa(function (b, d) {
                        return c(b, function (e) {
                            try {
                                d(a(e))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                xg = sa(function (a, c) {
                    return Aa(function (b, d) {
                        return c(b, function (e) {
                            try {
                                a(e)(Wa(b, d))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                Xf = [],
                Yf = !1,
                Wf = !1,
                Gk = sa(function (a, c) {
                    var b = c || {};
                    return {
                        l: v(b, U),
                        C: function (d, e) {
                            var f = b[d];
                            return Y(f) && !Y(e) ? e : f
                        },
                        D: function (d, e) {
                            b[d] = e;
                            return this
                        },
                        Ob: function (d, e) {
                            return "" === e || Z(e) ? this : this.D(d, e)
                        },
                        Da: v(b, a)
                    }
                }),
                Ca = Gk(function (a) {
                    var c = "";
                    a = sb(function (b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], Ba(a));
                    c && a.push(c);
                    return L(":", a)
                }),
                yg, qj = (yg = {}, yg.w = [
                    [function (a, c) {
                        return {
                            O: function (b, d) {
                                var e, f = b.J;
                                f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                                "0" !== c.$ && (f["cnt-class"] = c.$);
                                b.K || (b.K = Ca());
                                e = b.K;
                                var g = b.X;
                                f = {
                                    ia: {
                                        ya: "watch/" + c.id
                                    },
                                    X: C(void 0 === g ? {} : g, {
                                        wb: !!e.C("pv") && !e.C("ar") && !e.C("wh")
                                    }),
                                    J: C(b.J || {}, f)
                                };
                                C(b, f);
                                d()
                            }
                        }
                    }, 1]
                ], yg),
                zg = v(qj, uj),
                ib = wd("w"),
                pj = ["webkitvisibilitychange", "visibilitychange"],
                bf = Gk(function (a) {
                    a = Ba(a);
                    return L("", A(function (c) {
                        var b = c[0];
                        c = c[1];
                        return Za(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                Hk = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                sp = /^\s*(data|javascript):/i,
                Ki = new RegExp(L("", ["\\.(" + L("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Oa, Ui = (Oa = {}, Oa.hit = "h", Oa.params = "p", Oa.reachGoal = "g", Oa.userParams = "up",
                    Oa.trackHash = "th", Oa.accurateTrackBounce = "atb", Oa.notBounce = "nb", Oa.addFileExtension = "fe", Oa.extLink = "el", Oa.file = "fc", Oa.trackLinks = "tl", Oa.destruct = "d", Oa.setUserID = "ui", Oa.getClientID = "ci", Oa.clickmap = "cm", Oa.enableAll = "ea", Oa),
                Or = u(function () {
                    var a = 0;
                    return function () {
                        return a += 1
                    }
                }),
                Pr = w(J, Or, va),
                Nf = {
                    mc: function (a) {
                        a = zd(a).C("mt", {});
                        a = Ba(a);
                        return a.length ? P(function (c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    },
                    clc: function (a) {
                        var c = H(a).C("cls", {
                            Xb: 0,
                            x: 0,
                            y: 0
                        }),
                            b = c.Xb,
                            d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    },
                    rqnt: function (a, c, b) {
                        a = b.J;
                        return !a || a.nohit ? null : Pr(c)
                    }
                },
                iq = u(function (a) {
                    nj(a, "_ymBRC", "1");
                    var c = "1" !== mj(a, "_ymBRC");
                    c || oj(a, "_ymBRC");
                    return c
                }),
                Ua = u(lj),
                Sc = u(lj, function (a, c, b) {
                    return "" + c + b
                }),
                Qr = u(V("document.documentElement")),
                Rr = u(function (a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                Pb = u(w(V("document"), v("createElement", wc))),
                Uh = u(function (a) {
                    var c = n(a, "Element.prototype");
                    return c ?
                        (a = Gb(function (b) {
                            var d = c[b];
                            return !!d && Na(b, d)
                        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                Sr = za("INPUT"),
                Ae = w(Ga, Sr),
                Tr = za("TEXTAREA"),
                fq = w(Ga, Tr),
                Ur = za("SELECT"),
                gq = w(Ga, Ur),
                Be = w(V("type"), bb(/^(checkbox|radio)$/)),
                pf = w(Ga, bb(/^INPUT|SELECT|TEXTAREA$/)),
                ee = w(Ga, bb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                tf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                eq = ["submit", "image", "hidden"],
                ri = u(function () {
                    for (var a = 59, c = {},
                        b = 0; b < Hk.length; b += 1) c[Hk[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                hj = u(function (a) {
                    return {
                        aj: a,
                        eb: null,
                        ob: []
                    }
                }),
                fj = {},
                Qf = {};
            fj.p = 500;
            var ej = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            Qf.h = !0;
            Qf.c = !0;
            var Pc = {};
            Pc.p = af;
            Pc.c = function (a, c, b) {
                (a = Xa(n(c, "textContent"))) && b && (b = b(c), b.length && Va(w(V("textContent"), Xa, za(a)), b) && (a = ""));
                Ae(c) && (a = Xa(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var Tc, Pf = "button," + L(",", A(function (a) {
                return 'input[type="' + a + '"]'
            }, ["button", "submit", "reset", "file"])) +
                ",a",
                vi = v(Pf, gb),
                cq = (Tc = {}, Tc.A = "h", Tc.BUTTON = "i", Tc.DIV = "i", Tc.INPUT = "ty", Tc),
                Ik = /\/$/,
                dj = ob("r", function (a, c) {
                    var b = cj(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                sd = u(function () {
                    return {
                        Ca: {},
                        pending: {},
                        children: {}
                    }
                }),
                Ag = V("postMessage"),
                Vr = B("s.f", function (a, c, b, d, e) {
                    c = c(d);
                    var f = sd(a),
                        g = L(":", [c.meta.bc, c.meta.key]);
                    if (Ag(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.Uf, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        R(a, function () {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                Wr = B("s.fh", function (a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k =
                            sd(a),
                        l = null;
                    try {
                        g = Eb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!Z(h) && h.substring && "__yminfo" === h.substring(0, 8) && !Z(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2], g = g[3], !N(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) { } !Za(k) && Ag(k) && (f = d.Z(l.type, [f, l]), e = A(w(U, Oh(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.Uf, "*"))
                            }
                        } else g === "" + h && N(l) && ia(function (m) {
                            return !(!m.hid || !m.counterId)
                        }, l).length === l.length &&
                            (b = k.pending[L(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                ad = u(function (a, c) {
                    var b, d = wc("getElementsByTagName", n(a, "document")),
                        e = sd(a),
                        f = Ag(a),
                        g = cd(a),
                        h = ka(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + uc(a), b);
                    xe(a) && (f.duid = td(a, c));
                    Zp(a, g);
                    $p(a);
                    b = aq(a, f);
                    var k = E([a, v([], b)], Vr);
                    x(function (l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) { }
                        m && k(m, {
                            type: "initToChild"
                        }, function (p, q) {
                            g.Z("initToParent", [p, q])
                        })
                    }, d);
                    qb(a) && k(a.parent, {
                        type: "initToParent"
                    }, function (l,
                        m) {
                        g.Z("parentConnect", [l, m])
                    });
                    h.F(a, ["message"], E([a, c, b, g, f], Wr));
                    return {
                        Y: g,
                        Ca: e.Ca,
                        children: e.children,
                        fe: k
                    }
                }, w(db, J)),
                bd = u(function (a, c) {
                    if (!xe(a) || !qb(a)) return td(a, c);
                    var b = ad(a, c);
                    return b && b.Ca[c.id] ? b.Ca[c.id].info.duid || td(a, c) : td(a, c)
                }, function (a, c) {
                    return "{" + c.Nd + c.Sa
                }),
                Xr = u(w(ja, Aa(function (a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                Yr = w(ja, Aa(function (a) {
                    a = new a.l.Date;
                    return L("", A(qq, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })),
                Zr = w(ja, Aa(Of)),
                Jk = u(w(ja, Aa(function (a) {
                    return a.Ec[0]
                }))),
                $r = u(function (a) {
                    a = H(a);
                    var c = a.C("counterNum", 0) + 1;
                    a.D("counterNum", c);
                    return c
                }, w(db, J)),
                ma, rd = (ma = {}, ma.vf = v(Qc.version, U), ma.nt = Ar, ma.fu = function (a, c, b) {
                    var d = b.J;
                    if (!d) return null;
                    c = (n(a, "document.referrer") || "").replace(Ik, "");
                    b = (d["page-ref"] || "").replace(Ik, "");
                    d = d["page-url"];
                    a = S(a).href !== d;
                    c = c !== b;
                    b = 0;
                    a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                    return b
                }, ma.en = Rr, ma.la = Ak, ma.ut = function (a, c, b) {
                    var d = b.M;
                    b = b.J;
                    d = d && d.xc;
                    b && (li(a) || c.ze || d) && (b.ut =
                        ua.ng);
                    return null
                }, ma.v = v(ua.$a, U), ma.cn = $r, ma.dp = function (a) {
                    var c = H(a),
                        b = c.C("bt", {});
                    if (Y(c.C("bt"))) {
                        var d = n(a, "navigator.getBattery");
                        try {
                            b.p = d && d.call(a.navigator)
                        } catch (e) { }
                        c.D("bt", b);
                        b.p && b.p.then && b.p.then(z(a, "bi:dp.p", function (e) {
                            b.Mi = n(e, "charging") && 0 === n(e, "chargingTime")
                        }))
                    }
                    return rb(b.Mi)
                }, ma.ls = u(function (a, c) {
                    var b = Sc(a, c.id),
                        d = ja(a),
                        e = b.C("lsid");
                    return +e ? e : (d = Sa(a, 0, d(da)), b.D("lsid", d), d)
                }, db), ma.hid = uc, ma.phid = function (a, c) {
                    if (!qb(a)) return null;
                    var b = ad(a, c);
                    if (!b) return null;
                    var d = ea(b.Ca);
                    return d.length ? b.Ca[d[0]].info.hid : null
                }, ma.z = Xr, ma.i = Yr, ma.et = Zr, ma.c = w(V("navigator.cookieEnabled"), Hb), ma.rn = w(U, Sa), ma.rqn = function (a, c, b) {
                    b = b.J;
                    if (!b || b.nohit) return null;
                    c = J(c);
                    a = Sc(a, c);
                    c = (a.C("reqNum", 0) || 0) + 1;
                    a.D("reqNum", c);
                    if (a.C("reqNum") === c) return c;
                    a.cc("reqNum");
                    return null
                }, ma.u = bd, ma.w = function (a) {
                    a = vd(a);
                    return a[0] + "x" + a[1]
                }, ma.s = function (a) {
                    var c = n(a, "screen");
                    if (c) {
                        a = n(c, "width");
                        var b = n(c, "height");
                        c = n(c, "colorDepth") || n(c, "pixelDepth");
                        return L("x", [a, b, c])
                    }
                    return null
                },
                    ma.sk = V("devicePixelRatio"), ma.ifr = w(qb, Hb), ma.j = w(Cr, Hb), ma.sti = function (a) {
                        return qb(a) && Br(a) ? "1" : null
                    }, ma),
                Yp = u(function () {
                    return wa(ea(rd), ea(Nf))
                }),
                Xp = u(Ac, J),
                aj = u(function () {
                    return {
                        Re: null,
                        ra: []
                    }
                }, J),
                Up = /^[a-z][\w.+-]+:/i,
                Bg, Sb = [
                    [Ce, 1],
                    [we, 2],
                    [Jb(), 3],
                    [bj, 4]
                ],
                ve = [],
                yb = v(Sb, vj),
                Rb = (Bg = {}, Bg.h = Sb, Bg),
                aa = v(Rb, uj);
            yb(Yi, -100);
            var Pp = /[^a-z0-9.:-]/,
                Cg, Dg = {},
                Kk = Ka([Lf && [Lf, 0], vb && [vb, 1],
                [wb, 2], pd && [pd, 3],
                [Nc, 4]
                ]),
                Vb = Ka([Lf, vb, wb, pd, Nc]),
                Eg = [wb];
            Eg.unshift(vb);
            Eg.push(pd);
            var Lk = Ka(Eg),
                Uc = Ka([Nc]);
            Ka([vb, wb]);
            var Mk = Ka([vb, Nc]),
                as = Ka([vb, wb, pd, Nc]),
                ta = (Cg = {}, Cg.h = Lk, Cg),
                Fg = u(function (a, c) {
                    var b = Dg["*"] ? Dg["*"] : c && Dg[c];
                    b || (b = c ? ta[c] || [] : Vb);
                    b = P(function (d, e) {
                        var f = e(a);
                        if (f) {
                            var g = Gb(w(od, za(e)), Kk);
                            g && d.push([g[1], f])
                        }
                        return d
                    }, [], b);
                    b.length || Kd();
                    return b
                }, db),
                Gg, bs = I(K.reject, K, Ja()),
                ya = (Gg = {}, Gg.h = ib, Gg),
                oa = B("g.sen", function (a, c, b) {
                    var d = Fg(a, c);
                    b = b ? Tp(a, c, b) : [];
                    var e = ya[c],
                        f = e ? e(a, d, b) : ib(a, d, b);
                    return function () {
                        var g = Ia(arguments),
                            h = g[0];
                        g = g.slice(1);
                        var k = h.X;
                        h = C(h, {
                            X: C(void 0 ===
                                k ? {} : k, {
                                fa: [c]
                            })
                        });
                        return f.apply(null, [h].concat(g))
                    }
                }, bs),
                Hp = sa(function (a, c) {
                    if (!c[a]) {
                        var b, d = new K(function (e) {
                            b = e
                        });
                        c[a] = {
                            Af: b,
                            promise: d,
                            Bf: !1
                        }
                    }
                    return c[a].promise
                }),
                Vi = u(w(Ac, Aa)),
                cs = B("dc.init", function (a, c) {
                    return c && bg(Yd(c.split(":")[0])) ? {
                        log: F,
                        warn: F,
                        error: F
                    } : Gp(a, c)
                }),
                ic = u(cs, db),
                Al = B("h.p", function (a, c) {
                    var b, d, e = oa(a, "h", c),
                        f = c.kc || "" + S(a).href,
                        g = c.ah || a.document.referrer,
                        h = {
                            K: Ca((b = {}, b.pv = 1, b)),
                            J: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
                            M: {}
                        };
                    h.M.T = c.T;
                    h.M.ye = c.ye;
                    c.dd && h.J && (h.J.nohit =
                        "1");
                    return e(h, c).then(function (k) {
                        var l;
                        k && (c.dd || gc(a, c, "h", (l = {}, l.id = c.id, l.url = f, l.ref = g, l), c.T)(), Nb(a, E([a, c, k], Ip)))
                    })["catch"](z(a, "h.g.s"))
                }),
                Hg = ["yandex_metrika_callback" + Qc.callbackPostfix, "yandex_metrika_callbacks" + Qc.callbackPostfix],
                ds = B("cb.i", function (a) {
                    var c = Hg[0],
                        b = Hg[1];
                    if (T(a[c])) a[c]();
                    "object" === typeof a[b] && x(function (d, e) {
                        a[b][e] = null;
                        Ff(a, d)
                    }, a[b]);
                    x(function (d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, Hg)
                }),
                Ep = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/,
                Nk = u(function (a) {
                    return !!n(a,
                        "crypto.subtle.digest") && !!n(a, "TextEncoder") && !!n(a, "FileReader") && !!n(a, "Blob")
                }),
                Fp = wg(/[^\d+()]/g),
                Cp = ["yandex_cid", "yandex_public_id"],
                es = B("fpm", function (a, c) {
                    if (!Ek(a)) return F;
                    var b = J(c);
                    if (!Nk(a)) return Cb(a, b, "ns"), F;
                    var d = Ea(a, c);
                    return d ? function (e) {
                        return (new K(function (f, g) {
                            return ha(e) ? ea(e).length ? f(Ri(a, e).then(function (h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                            }, F)) : g(Ja("fpm.l")) : g(Ja("fpm.o"))
                        }))["catch"](z(a, "fpm.en"))
                    } : F
                }),
                Ke = sa(function (a, c) {
                    var b = {};
                    If(a)(function (d) {
                        b = d[c] || {}
                    });
                    return b
                }),
                fs = B("c.c.cc", function (a) {
                    var c = H(a),
                        b = w(Ke(a), function (d) {
                            var e, f = (e = {}, e.clickmap = !!d.clickmap, e);
                            return C({}, d, f)
                        });
                    return z(a, "g.c.cc", w(I(c.C, c, "counters", {}), ea, Oc(b)))
                }),
                gs = B("gt.c.rs", function (a, c) {
                    var b, d = J(c),
                        e = c.id,
                        f = c.$,
                        g = c.Cg,
                        h = c.te,
                        k = E([a, d], Ap);
                    Hf(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                    return k
                }),
                Pi = u(ld),
                nd = u(Ac, J),
                hs = B("pa.int", function (a, c) {
                    var b;
                    return b = {}, b.params = function () {
                        var d, e, f, g = Ia(arguments),
                            h = zp(g);
                        if (!h) return null;
                        g = h.Ig;
                        var k = h.T;
                        h = h.Tb;
                        if (!ha(k) && !N(k)) return null;
                        var l = oa(a, "1", c),
                            m = nd(c).url,
                            p = !Jr(c),
                            q = "pa",
                            r = (d = {}, d.id = c.id, d);
                        d = k;
                        var t = "";
                        if (t = n(k, "__ym.user_id")) q = "pau", r.uid = t;
                        G("__ymu", ea(k)) && (q = "paup");
                        d.__ym && (d = C({}, k), d.__ym = P(function (y, D) {
                            var O = n(k, "__ym." + D);
                            O && (y[D] = O);
                            return y
                        }, {}, Dd), ea(d.__ym).length || delete d.__ym, p = !!ea(d).length);
                        d = t ? void 0 : JSON.stringify(d);
                        d = gc(a, c, q, r, d);
                        l = l({
                            M: {
                                T: k
                            },
                            K: Ca((e = {}, e.pa = 1, e.ar = 1, e)),
                            J: (f = {}, f["page-url"] = m || S(a).href, f)
                        }, c).then(p ? d : F);
                        return Mc(a, "p.s",
                            l, h, g)
                    }, b
                }),
                Sd = u(Ni, w(db, J)),
                is = B("y.p", function (a, c) {
                    var b = Ni(a, c);
                    if (b) {
                        var d = Od(a),
                            e = E([a, b, c], vp);
                        mh(a, d, function (f) {
                            f.F(["params"], e)
                        });
                        b.Y.F(["params"], w(V("1"), e))
                    }
                }),
                cr = u(function (a) {
                    if (a = Pb(a)) return a("a")
                }),
                Ok = {
                    ej: bb(/[/&=?#]/)
                },
                ne = B("go.in", function (a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return e = {}, e.reachGoal = function (f, g, h, k) {
                        var l, m, p;
                        if (!f || Ok[b] && Ok[b](f)) return null;
                        var q = g,
                            r = h || F;
                        T(g) && (r = g, q = void 0, k = h);
                        var t = gc(a, c, "gr", (l = {}, l.id = c.id, l.goal = f, l), q),
                            y = "goal" === b;
                        g = oa(a, "g", c);
                        l = up(a, c, f, b);
                        h = l[0];
                        l = l[1];
                        q = g({
                            M: {
                                T: q
                            },
                            K: Ca((m = {}, m.ar = 1, m)),
                            J: (p = {}, p["page-url"] = h, p["page-ref"] = l, p)
                        }, c).then(function () {
                            var D, O;
                            y && t();
                            mb(a, (D = {}, D.counterKey = J(c), D.name = "event", D.data = (O = {}, O.schema = b, O.name = f, O), D));
                            d && d()
                        });
                        return Mc(a, "g.s", q, r, k)
                    }, e
                }),
                js = B("guid.int", function (a, c) {
                    var b;
                    return b = {}, b.getClientID = function (d) {
                        var e = td(a, c);
                        d && Ff(a, d, null, e);
                        return e
                    }, b
                }),
                Wj, ks = B("th.e", function (a, c) {
                    function b() {
                        g || (k = Db(a, "onhashchange") ? ka(a).F(a, ["hashchange"], h) : dr(a, h))
                    }
                    var d, e = oa(a,
                        "t", c),
                        f = te(a, J(c)),
                        g = !1,
                        h = z(a, "h.h.ch", I(er, null, a, c, e)),
                        k = F;
                    c.te && (b(), g = !0);
                    e = z(a, "tr.hs.h", function (l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f((m = {}, m.trackHash = g, m))
                    });
                    return d = {}, d.trackHash = e, d.u = k, d
                }),
                ls = sa(function (a, c) {
                    fa(c) ? a.push(c) : x(w(U, cb("push", a)), c)
                }),
                md = ob("retryReqs", function (a) {
                    var c = Ua(a),
                        b = c.C("retryReqs", {}),
                        d = ja(a)(da);
                    x(function (e) {
                        var f = e[0];
                        e = e[1];
                        (!e || !e.time || e.time + 864E5 < d) && delete b[f]
                    }, Ba(b));
                    c.D("retryReqs", b);
                    return b
                }, !0),
                Ig = w(dc, za(0)),
                Pk = nb(Ig),
                ms = [Pk("watch"), Pk("clmap")],
                ns =
                    B("g.r", function (a) {
                        var c = ja(a),
                            b = md(a),
                            d = c(da),
                            e = uc(a);
                        return sb(function (f, g) {
                            var h = g[0],
                                k = g[1];
                            k && Va(Aa(k.resource), ms) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
                                protocol: k.protocol,
                                host: k.host,
                                ya: k.resource,
                                hi: k.postParams,
                                T: k.params,
                                vg: k.browserInfo,
                                cj: k.ghid,
                                time: k.time,
                                Lb: Fa(h),
                                Fg: k.counterId,
                                $: k.counterType
                            }, k.telemetry && (h.Fa = k.telemetry), f.push(h));
                            return f
                        }, [], Ba(b))
                    }),
                os = B("nb.p", function (a, c) {
                    function b(D) {
                        l() || (D = "number" === typeof D ?
                            D : 15E3, y = fr(a, d(!1), D), m())
                    }

                    function d(D) {
                        return function (O) {
                            var M, qa, ra;
                            void 0 === O && (O = (M = {}, M.ctx = {}, M.callback = F, M));
                            if (D || !r && !k.Fd) {
                                r = !0;
                                m();
                                y && y();
                                var Pa = p(da);
                                M = (Fa(k.C("lastHit")) || 0) < Pa - 18E5;
                                var Jg = .1 > Math.random();
                                k.D("lastHit", Pa);
                                Pa = Ca((qa = {}, qa.nb = 1, qa.cl = t, qa.ar = 1, qa));
                                qa = nd(c);
                                qa = {
                                    J: (ra = {}, ra["page-url"] = qa.url || S(a).href, ra),
                                    K: Pa,
                                    M: {
                                        force: D
                                    }
                                };
                                ra = ic(a, J(c)).warn;
                                !O.callback && O.ctx && ra("nbnc");
                                (ra = D || M || Jg) || (ra = a.location.href, M = a.document.referrer, ra = !(ra && M ? Li(ra) === Li(M) : !ra && !M));
                                if (ra) return ra = g(qa, c), Mc(a, "l.o.l", ra, O.callback, O.ctx)
                            }
                            return null
                        }
                    }
                    var e, f, g = oa(a, "n", c),
                        h = J(c),
                        k = Sc(a, c.id),
                        l = v(v(h, Ke(a)), w(va, V("accurateTrackBounce"))),
                        m = v((e = {}, e.accurateTrackBounce = !0, e), te(a, h)),
                        p = ja(a),
                        q = p(da),
                        r = !1,
                        t = 0,
                        y;
                    na(c, function (D) {
                        t = D.Ug - q
                    });
                    c.Ee && b(c.Ee);
                    e = (f = {}, f.notBounce = d(!0), f.u = y, f);
                    e.accurateTrackBounce = b;
                    return e
                }),
                np = sa(bc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                ps = B("clm.p", function (a, c) {
                    if (Xd(a)) return F;
                    var b = oa(a, "m", c),
                        d = J(c),
                        e = ja(a),
                        f = e(da),
                        g = v(v(d, Ke(a)),
                            w(va, V("clickmap"))),
                        h, k = null;
                    d = z(a, "clm.p.c", function (l) {
                        var m = g();
                        if (m) {
                            var p = H(a),
                                q = p.C("cls", {
                                    Xb: 0,
                                    x: 0,
                                    y: 0
                                });
                            p.D("cls", {
                                Xb: q.Xb + 1,
                                x: q.x + l.clientX,
                                y: q.y + l.clientY
                            });
                            p = "object" === typeof m ? m : {};
                            q = p.filter;
                            m = p.isTrackHash || !1;
                            var r = A(function (y) {
                                return ("" + y).toUpperCase()
                            }, p.ignoreTags || []);
                            Y(h) && (h = p.quota || null);
                            var t = !!p.quota;
                            l = {
                                element: op(a, l),
                                position: Hi(a, l),
                                button: pp(l),
                                time: e(da)
                            };
                            p = S(a).href;
                            if (mp(a, l, k, r, q)) {
                                if (t) {
                                    if (!h) return;
                                    --h
                                }
                                r = ze(a, l.element);
                                q = r[0];
                                r = r[1];
                                t = Rf(a, l.element);
                                q = ["rn",
                                    Sa(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", af(a, l.element), "X", l.position.x, "Y", l.position.y
                                ];
                                q = L(":", q);
                                m && (q += ":wh:1");
                                lp(a, p, q, b, c);
                                k = l
                            }
                        }
                    });
                    return ka(a).F(n(a, "document"), ["click"], d)
                }),
                qs = B("trigger.in", function (a, c) {
                    c.$f && Nb(a, E([a, "yacounter" + c.id + "inited"], hq), "t.i")
                }),
                rs = B("c.m.p", function (a, c) {
                    var b, d = J(c);
                    return b = {}, b.clickmap = v(te(a, d), kp), b
                }),
                si = v("form", hc),
                Yo = v("form", gb),
                jp = u(w(db, nb(na)(V("settings.form_goals"))),
                    db),
                ss = B("s.f.i", function (a, c) {
                    var b, d = [],
                        e = [],
                        f = ka(a);
                    d.push(f.F(a, ["click"], z(a, "s.f.c", E([a, c, e], ip))));
                    d.push(f.F(a, ["submit"], z(a, "s.f.e", function (g) {
                        var h = n(g, "target");
                        g = n(g, "isTrusted");
                        Ei(!0, a, c, e, h, g)
                    })));
                    Fi(a, c, "fgi", (b = {}, b.id = c.id, b));
                    return E([me, d], x)
                }),
                ts = B("s.f.i", function (a, c) {
                    return na(c, function (b) {
                        var d;
                        if (n(b, "settings.button_goals")) return b = ka(a).F(a, ["click"], z(a, "c.t.c", w(E([a, c], Qe(a, c, "", hp))))), gc(a, c, "gbi", (d = {}, d.id = c.id, d))(), b
                    })
                }),
                Wb, Gd, Kg, Vc, zb, Cf = (Wb = {}, Wb.transaction_id =
                    "id", Wb.item_brand = "brand", Wb.index = "position", Wb.item_variant = "variant", Wb.value = "revenue", Wb.item_category = "category", Wb.item_list_name = "list", Wb),
                ec = (Gd = {}, Gd.item_id = "id", Gd.item_name = "name", Gd.promotion_name = "coupon", Gd),
                gp = (Kg = {}, Kg.promotion_name = "name", Kg),
                Qk = (Vc = {}, Vc.promotion_name = "name", Vc.promotion_id = "id", Vc.item_id = "product_id", Vc.item_name = "product_name", Vc),
                dp = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "),
                ep = (zb = {}, zb.view_item = {
                    event: "detail",
                    va: ec,
                    Ga: "products"
                }, zb.add_to_cart = {
                    event: "add",
                    va: ec,
                    Ga: "products"
                }, zb.remove_from_cart = {
                    event: "remove",
                    va: ec,
                    Ga: "products"
                }, zb.begin_checkout = {
                    event: "checkout",
                    va: ec,
                    Ga: "products"
                }, zb.purchase = {
                    event: "purchase",
                    va: ec,
                    Ga: "products"
                }, zb.view_item_list = {
                    event: "impressions",
                    va: ec
                }, zb.select_item = {
                    event: "click",
                    Ga: "products",
                    va: ec
                }, zb.view_promotion = {
                    event: "promoView",
                    Ga: "promotions",
                    va: Qk
                }, zb.select_promotion = {
                    event: "promoClick",
                    Ga: "promotions",
                    va: Qk
                }, zb),
                Di = B("dl.w", function (a, c, b) {
                    function d() {
                        var g =
                            n(a, c);
                        (e = N(g) && re(a, g, b)) || (f = R(a, d, 1E3, "ec.dl"))
                    }
                    var e, f = 0;
                    d();
                    return function () {
                        return la(a, f)
                    }
                }),
                us = B("p.e", function (a, c) {
                    var b = Ea(a, c);
                    if (b) {
                        var d = H(a);
                        b = b.params;
                        var e = z(a, "h.ee", E([a, J(c), b], bp));
                        return c.kd ? (d.D("ecs", 0), Ci(a, c.kd, e)) : na(c, function (f) {
                            if ((f = n(f, "settings.ecommerce")) && fa(f)) return d.D("ecs", 1), Ci(a, f, e)
                        })
                    }
                }),
                Rk = u(function (a) {
                    a = S(a);
                    a = Dq(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a
                }),
                zi = w(Rk, V("_ym_status-check"),
                    Fa),
                vs = w(Rk, V("_ym_lang")),
                Vo = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
                Wo = /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/,
                yi = bb(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                $o = ["form", "button", "status"],
                Lg = [],
                Xo = u(function (a, c, b) {
                    x(w(Dc([a, c, b]), va), Lg);
                    b.inline ? (c = xi(b), b = b.id, qi(a, c, void 0 === b ? "" : b)) : b.resource && yi(b.resource) && (a._ym__postMessageEvent =
                        c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, ap(a, b.resource))
                }, function (a, c, b) {
                    return b.id
                }),
                ws = B("cs.init", function (a, c) {
                    var b, d = zi(a);
                    if (d && c.id === d && "0" === c.$) {
                        var e = xi((b = {}, b.lang = vs(a), b.fileId = "status", b));
                        R(a, E([a, e, "" + d], qi), 0, "cs")
                    }
                }),
                xs = B("suid.int", function (a, c) {
                    var b;
                    return b = {}, b.setUserID = function (d, e, f) {
                        if (fa(d) || fc(a, d)) {
                            var g = Ea(a, c);
                            d = $d(["__ym", "user_id", d]);
                            g.params(d, e || F, f)
                        } else ic(a, J(c)).error("wuid")
                    }, b
                }),
                ys = B("up.int", function (a, c) {
                    var b;
                    return b = {},
                        b.userParams = z(a, "up.c", function (d, e, f) {
                            var g, h = Ea(a, c),
                                k = ic(a, J(c)).warn;
                            h ? ha(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || F, f)) : k("wup") : k("nci")
                        }), b
                }),
                zs = /[\*\.\?\(\)]/g,
                As = u(function (a, c, b) {
                    var d;
                    try {
                        var e = b.replace("\\s", " ").replace(zs, "");
                        ic(a, "").warn("nnw", (d = {}, d.name = e, d))
                    } catch (f) { }
                }, db),
                Bs = B("r.nn", function (a) {
                    De(a) && re(a, jg, function (c) {
                        c.xa.F(function (b) {
                            As(a, b[1], b[0]);
                            jg.splice(100)
                        })
                    })
                }),
                Cs = B("e.a.p", function (a, c) {
                    var b, d = Ea(a, c);
                    d = E([w(U, Aa(!0)), Ka(A(v(d, n), ["clickmap", "trackLinks",
                        "accurateTrackBounce"
                    ]))], A);
                    c.Mg && d();
                    return b = {}, b.enableAll = d, b
                }),
                Ds = u(Ac, J),
                Es = B("fpi", function (a) {
                    var c = jd(a);
                    if (c && !a.document.hidden) {
                        var b = H(a).Ea;
                        b("fpe", 1);
                        var d = ka(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function () {
                            a.document.hidden && (b("fht", c.now()), d())
                        })
                    }
                }),
                Fs = u(function (a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = He("log", c) ? I(c, a) : F;
                    var b = n(a, "warn");
                    b = He("warn", b) ? I(b, a) : c;
                    var d = n(a, "error");
                    a = He("error", d) ? I(d, a) : c;
                    return {
                        log: c,
                        error: a,
                        warn: b
                    }
                }),
                Gs = v("add", le),
                Hs = v("remove",
                    le),
                Is = v("detail", le),
                Js = v("purchase", le),
                Ks = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                $e = u(function (a) {
                    var c = qk(a);
                    a = c.dg;
                    if (!c.gf) return !1;
                    c = cb("indexOf", a);
                    c = Va(w(c, za(-1), xc), Ks);
                    var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || d && e || !/Safari/.test(a) && e
                }),
                tm = u(function (a) {
                    var c = ub(a);
                    return c ? fb(c, "YangoEats") || je(a) : !1
                }),
                Ls = /\sYptp\/\d\.(\d+)\s/,
                Ms = u(function (a) {
                    var c;
                    a: {
                        if ((c = ub(a)) && (c = Ls.exec(c)) && 1 < c.length) {
                            c = Fa(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || df(a, 79) ? !1 : !Cd(a) || $e(a)
                }),
                Sk = xa(String.prototype.repeat, "repeat"),
                Lh = Sk ? function (a, c) {
                    return Sk.call(a, c)
                } : Ro,
                Fh = v(!0, function (a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = Lh(c, b);
                    return a ? c + d : d + c
                }),
                Ns = B("p.cd", function (a) {
                    if (he(a) || tg(a)) {
                        var c = Ua(a);
                        if (Z(c.C("jn"))) {
                            c.D("jn", !1);
                            var b = a.chrome || ue(a) ? function () { } : /./;
                            a = Fs(a);
                            b.toString = function () {
                                c.D("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            a.log("%c%s", "color: inherit", b)
                        }
                    }
                }),
                Os = u(function (a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Ya(a) && Va(w(V("name"), bb(/Chrome PDF Viewer/)), a))
                }),
                Lb = sa(function (a, c) {
                    return H(c).C(a, null)
                }),
                Qo = {
                    "*": "+",
                    "-": "/",
                    Ui: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                Ps = u(function (a) {
                    return T(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
                }),
                Qs = u(v("panoramaId", ke)),
                Rs = u(function (a) {
                    return ke("pubcid.org", a) || ke("_pubCommonId", a)
                }),
                Ss = u(v("_sharedid", ke)),
                Ts = u(function (a, c) {
                    if (c.Sa) return null;
                    var b = Pd(a, "").C("_ga");
                    return b && de(zf(b))
                }, w(db, J)),
                Mo = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function (a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                pb, Lo = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                ni = (pb = {}, pb.responseEnd = 1, pb.domInteractive = 1, pb.domContentLoadedEventStart =
                    1, pb.domContentLoadedEventEnd = 1, pb.domComplete = 1, pb.loadEventStart = 1, pb.loadEventEnd = 1, pb.unloadEventStart = 1, pb.unloadEventEnd = 1, pb.secureConnectionStart = 1, pb),
                Oo = u(ld),
                Io = u(Ac),
                Jo = u(function (a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (T(c) && !he(a)) return (new K(I(c, a, 0, 0))).then(function () {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function (d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](v(!0, U));
                    if (Fe(a)) return c = n(a, "navigator.serviceWorker"), K.resolve(Y(c));
                    c = n(a,
                        "openDatabase");
                    if (ue(a) && T(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return K.resolve(b)
                    }
                    return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                Us = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                Vs = u(function (a, c) {
                    var b = Kc(a),
                        d = S(a).search.match(Us);
                    return d && 2 <= d.length ? (d = d[2], c.Sa || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
                }),
                to = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                uo = [
                    [
                        ["oWdZ[nc[jh_YW$Yec",
                            30103, 1
                        ]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                mi = {
                    J: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                qo = {
                    Wf: 60,
                    error: 15
                },
                po = {
                    Wf: 5,
                    error: 1
                },
                ki = {
                    id: 42822899,
                    $: "0"
                },
                Ws = B("pa.plgn", function (a, c) {
                    var b = Sd(a, c);
                    b && b.Y.F(["pluginInfo"], z(a, "c.plgn", function () {
                        var d = H(a);
                        d.D("cmc", d.C("cmc", 0) + 1);
                        return Mj(c)
                    }))
                }),
                Mb, jb, mm = (Mb = {}, Mb.am = "com.am", Mb.tr = "com.tr", Mb.ge = "com.ge", Mb.il = "co.il", Mb["\u0440\u0444"] = "ru", Mb["xn--p1ai"] = "ru", Mb["\u0431\u0435\u043b"] = "by", Mb["xn--90ais"] = "by", Mb),
                Tk = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                nm = (jb = {}, jb.ka = "ge", jb.ro = "md", jb.tg = "tj", jb.tk = "tm", jb.et = "ee", jb.hy = "com.am", jb.he = "co.li", jb.ky = "kg", jb.be = "by", jb.tr = "com.tr", jb.kk = "kz", jb),
                Uk = /^https?:\/\//,
                Xs = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1,
                    3015043526: 1
                },
                Vk = u(function () {
                    return P(function (a, c) {
                        var b = pc(c + "/tag.js");
                        a[b] = 1;
                        return a
                    }, {}, ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }),
                Ys = u(function (a) {
                    a = jd(a);
                    if (!a || !T(a.getEntriesByType)) return null;
                    a = a.getEntriesByType("resource");
                    var c = Vk();
                    return (a = Gb(function (b) {
                        b = b.name.replace(Uk, "").split("?")[0];
                        b = pc(b);
                        return c[b]
                    }, a)) ? rb(a.transferSize) : null
                }),
                Do = "ar:1:pv:1:v:" + ua.$a + ":vf:" + Qc.version,
                Eo = ua.Oa + "//" + cc + "/watch/" + ua.gg,
                Wk = {},
                Zs = B("exps.int",
                    function (a, c) {
                        var b;
                        return b = {}, b.experiments = function (d, e, f) {
                            var g, h;
                            void 0 === e && (e = F);
                            if (d && 0 < d.length) {
                                var k = oa(a, "e", c),
                                    l = nd(c).url;
                                d = k({
                                    K: Ca((g = {}, g.ex = 1, g.ar = 1, g)),
                                    J: (h = {}, h["page-url"] = l || S(a).href, h.exp = d, h)
                                }, c);
                                return Mc(a, "exps.s", d, e, f)
                            }
                        }, b
                    }),
                lh = [],
                $s = B("p.fh", function (a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Ua(a),
                        f = ja(a),
                        g = e.C("wasSynced"),
                        h = {
                            id: 3,
                            $: "0"
                        };
                    return c && g && g.time + 864E5 > f(da) ? K.resolve(g) : oa(a, "f", h)({
                        K: Ca((b = {}, b.pv = 1, b)),
                        J: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = a.document.referrer,
                            d)
                    }, h).then(function (k) {
                        var l;
                        k = (l = {}, l.time = f(da), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
                        e.D("wasSynced", k);
                        return k
                    })["catch"](z(a, "f.h"))
                }),
                at = sa(function (a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.Od.D("ymoo" + a.oa, a.Yf(lb)), a.ed && a.ed.destruct && a.ed.destruct())
                }),
                Wd = w(V("settings.pcs"), za("1")),
                Xk = cc.split("."),
                bt = Xk.pop(),
                Mg = L(".", Xk),
                lm = u(function (a) {
                    a = S(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                km = u(function (a) {
                    return -1 !== S(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                ct = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech)$/,
                Rd = u(function (a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(ct));
                    return c
                }),
                dt = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                wo = u(function (a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(dt));
                    return c
                }),
                ch = ua.Oa +
                    "//" + cc + "/metrika",
                be = ch + "/metrika_match.html",
                Le, Ao = (Le = {}, Le.s = "p", Le["8"] = "i", Le),
                xo = ob("csp", function (a, c) {
                    return oa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                Ng = "et w v z i u vf".split(" "),
                Yk = wd("wv"),
                et = wd("pub"),
                $h = function () {
                    function a(c, b) {
                        this.l = c;
                        this.type = b
                    }
                    a.isEnabled = function (c) {
                        return !!c.JSON
                    };
                    a.prototype.Da = function (c) {
                        return kf(Fb(this.l, c))
                    };
                    a.prototype.qb = function (c) {
                        var b = c.data;
                        "string" !== typeof b && (b = Fb(this.l, c.data));
                        return b
                    };
                    a.prototype.hb = function (c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.ke = function (c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    return a
                }(),
                ko = u(function (a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0]
                    }

                    function b(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3]
                    }
                    if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return lo;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c
                }),
                go = ii(!1),
                fo = ii(!0),
                ba, Bc, Zk = (ba = {}, ba.mousemove =
                    0, ba.mouseup = 1, ba.mousedown = 2, ba.click = 3, ba.scroll = 4, ba.windowblur = 5, ba.windowfocus = 6, ba.focus = 7, ba.blur = 8, ba.eof = 9, ba.selection = 10, ba.change = 11, ba.input = 12, ba.touchmove = 13, ba.touchstart = 14, ba.touchend = 15, ba.touchcancel = 16, ba.touchforcechange = 17, ba.zoom = 18, ba.resize = 19, ba.keystroke = 20, ba.deviceRotation = 21, ba.fatalError = 22, ba.hashchange = 23, ba.stylechange = 24, ba.articleInfo = 25, ba.publishersHeader = 26, ba.pageData = 27, ba.mutationAdd = 28, ba.mutationRemove = 29, ba.mutationTextChange = 30, ba.mutationAttributesChange =
                    31, ba),
                $k = (Bc = {}, Bc.page = 0, Bc.event = 1, Bc.mutation = 2, Bc.publishers = 3, Bc.activity = 4, Bc),
                Zh = function () {
                    function a(c, b) {
                        var d, e, f = this;
                        this.isSync = !1;
                        this.Ab = [];
                        this.Og = (d = {}, d.ad = "mutationAdd", d.re = "mutationRemove", d.tc = "mutationTextChange", d.ac = "mutationAttributesChange", d.page = "pageData", d);
                        this.Jg = (e = {}, e.ad = "addedNodesMutation", e.re = "removedNodesMutation", e.tc = "textChangeMutation", e.ac = "attributesChangeMutation", e.touchmove = "touchEvent", e.touchstart = "touchEvent", e.touchend = "touchEvent", e.touchforcechange =
                            "touchEvent", e.touchcancel = "touchEvent", e.resize = "resizeEvent", e.scroll = "scrollEvent", e.change = "changeEvent", e.mousemove = "mouseEvent", e.mousedown = "mouseEvent", e.mouseup = "mouseEvent", e.click = "mouseEvent", e.focus = "focusEvent", e.blur = "focusEvent", e.deviceRotation = "deviceRotationEvent", e.zoom = "zoomEvent", e.keystroke = "keystrokesEvent", e.selection = "selectionEvent", e.stylechange = "styleChangeEvent", e.fatalError = "fatalErrorEvent", e.pageData = "page", e);
                        this.hh = function (g) {
                            var h = g.type;
                            return g.event || "publishersHeader" !==
                                h && "articleInfo" !== h ? {
                                type: $k[h],
                                event: Zk[f.Og[g.event] || g.event]
                            } : {
                                type: $k.publishers,
                                event: Zk[h]
                            }
                        };
                        this.pf = function (g) {
                            var h = !Y(g.partNum),
                                k = f.hh(g);
                            k = {
                                stamp: g.stamp,
                                type: k.type,
                                event: k.event,
                                frameId: g.frameId,
                                chunk: h ? g.data : void 0,
                                partNum: g.partNum,
                                end: g.end
                            };
                            !h && g.data && (h = f.Jg[g.event] || g.event || g.type) && (k[h] = g.data);
                            return k
                        };
                        this.l = c;
                        this.type = b
                    }
                    a.prototype.Da = function (c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = Zb(c, this.pf),
                            f = this.isSync || b ? Infinity : 10;
                        e = $c(this.l, e, f);
                        var g = [e];
                        this.Ab.push(e);
                        return e(xg(function (h) {
                            h = bi(d.l, Vn, {
                                ji: h
                            });
                            h = $c(d.l, h, f, Zf);
                            g.push(h);
                            d.Ab.push(h);
                            return h
                        }))(xg(function (h) {
                            h = ai(d.l, h.slice(-4));
                            h = $c(d.l, h, f, Zf);
                            g.push(h);
                            d.Ab.push(h);
                            return h
                        }))(Fk(function (h) {
                            h = h[h.length - 1];
                            x(function (k) {
                                k = se(d.l)(k, d.Ab);
                                d.Ab.splice(k, 1)
                            }, g);
                            return h
                        }))
                    };
                    a.prototype.qb = function (c) {
                        return bi(this.l, ci, this.pf(c))($f(F))
                    };
                    a.prototype.hb = function (c) {
                        return c[0]
                    };
                    a.prototype.ke = function (c, b) {
                        for (var d = ai(this.l, c)($f(F)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g *
                            e, e * (g + 1)));
                        return f
                    };
                    a.isEnabled = function (c) {
                        var b = De(c),
                            d = !1;
                        try {
                            d = (d = 2 === (new c.Blob(["\u00e4"])).size) && 2 === (new c.Blob([new c.Uint8Array([1, 2])])).size
                        } catch (e) { }
                        return !b && d && !(!c.Uint8Array || !n(c, "Uint8Array.prototype.slice"))
                    };
                    return a
                }(),
                al = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                ft = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                gt = function () {
                    function a(c,
                        b, d, e, f) {
                        var g = this;
                        this.uc = !1;
                        this.meta = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.involvedTime = this.lf = 0;
                        this.Pd = this.uf = "";
                        this.da = [];
                        this.ie = this.Ma = 0;
                        this.ub = {
                            h: 0,
                            w: 0
                        };
                        this.buffer = [];
                        this.hg = ft;
                        this.flush = function () {
                            g.ie = R(g.l, g.flush, 2500);
                            var h = g.ud();
                            if (g.buffer.length || h) {
                                var k = Ge(g.buffer);
                                h && k.push(h);
                                g.uf = g.Pd;
                                g.ha.Da(k)(Wa(z(g.l, "p.b.st"), function (l) {
                                    l && g.Nb(l)
                                }))
                            }
                        };
                        this.Nb = e;
                        this.ha = d;
                        this.Sb = I(this.Sb, this);
                        this.ud = I(this.ud, this);
                        this.flush = I(this.flush, this);
                        this.l = c;
                        this.oa = f;
                        this.Kc = b;
                        this.Kd =
                            "pai" + b.id;
                        this.Eb();
                        this.Me = ka(this.l);
                        this.time = ja(this.l);
                        this.bg();
                        this.xd = H(this.l);
                        this.xe = null
                    }
                    a.prototype.start = function () {
                        this.ie = R(this.l, this.flush, 2500);
                        if (!this.uc) {
                            this.wi();
                            var c = this.xd.C(this.Kd, []),
                                b = !c.length;
                            c.push(I(this.Mh, this));
                            this.xd.Ea(this.Kd, c);
                            b && this.Ff();
                            this.xe = ka(this.l).F(this.l, ["click"], I(this.ui, this));
                            this.Sb({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function () {
                        this.Ji();
                        this.uc = !0;
                        this.flush();
                        la(this.l, this.ie)
                    };
                    a.prototype.hf = function (c) {
                        return hc("html",
                            this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.Ff = function () {
                        var c = this;
                        z(this.l, "p.ic" + this.Kc.id, function () {
                            if (!c.uc) {
                                var b = c.xd.C(c.Kd),
                                    d = c.Kc.Tg();
                                x(function (e) {
                                    var f = A(function (g) {
                                        return C({}, g)
                                    }, d);
                                    T(e) && e(f)
                                }, b);
                                c.Ma = R(c.l, I(c.Ff, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.Mh = function (c) {
                        this.uc || (this.Ki(c), this.Li(), this.yg())
                    };
                    a.prototype.Dg = function (c, b) {
                        return (c.de || 0) <= (b.de || 0) ? b : c
                    };
                    a.prototype.ui = function (c) {
                        if (this.da.length) {
                            c = Ji(c);
                            var b = S(this.l).hostname,
                                d;
                            if (d = c) d = qe(c.hostname) ===
                                qe(b);
                            d && (c = P(this.Dg, this.da[0], this.da).id, b = uc(this.l), Sc(this.l, this.oa.split(":")[0]).D("pai", c + "-" + b))
                        }
                    };
                    a.prototype.Sb = function (c) {
                        var b = this;
                        z(this.l, "p.ec." + this.Kc.id, function () {
                            var d, e;
                            try {
                                var f = c.type;
                                var g = c.target
                            } catch (p) {
                                return
                            }
                            var h = "page" === f;
                            if ("scroll" === f || h) {
                                var k = [b.l, b.l.document, b.l.document.documentElement, yc(b.l)];
                                G(g, k) && b.Eb()
                            } ("resize" === f || h) && b.bg();
                            f = b.time(da);
                            var l = Math.min(f - b.lf, 5E3);
                            b.involvedTime += Math.round(l);
                            b.lf = f;
                            if (b.meta && b.scroll && b.ub) {
                                var m = b.ub.h *
                                    b.ub.w;
                                b.da = A(function (p) {
                                    var q = C({}, p),
                                        r = b.meta[q.id],
                                        t = dd(p.zb);
                                    if (!r || b.hf(q.element) || !t) return q;
                                    p = b.l.Math;
                                    r = p.max((b.scroll.y + b.ub.h - r.y) / r.height, 0);
                                    var y = t.height * t.width,
                                        D = b.ub,
                                        O = t.top,
                                        M = t.bottom,
                                        qa = t.left,
                                        ra = D.w;
                                    D = D.h;
                                    var Pa = b.l.Math;
                                    t = Pa.min(Pa.max(t.right, 0), ra) - Pa.min(Pa.max(qa, 0), ra);
                                    t *= Pa.min(Pa.max(M, 0), D) - Pa.min(Pa.max(O, 0), D);
                                    q.de = t / m;
                                    q.visibility = t / y;
                                    if (.9 <= q.visibility || .1 <= q.de) q.involvedTime += l;
                                    q.maxScrolled = p.round(1E4 * r) / 1E4;
                                    return q
                                }, b.da);
                                mb(b.l, (d = {}, d.name = "publishers",
                                    d.counterKey = b.oa, d.data = (e = {}, e.involvedTime = b.involvedTime, e.contentItems = A(function (p) {
                                        var q;
                                        return C((q = {}, q.contentElement = p.zb, q), p)
                                    }, b.da), e), d))
                            }
                        })()
                    };
                    a.prototype.Ki = function (c) {
                        var b = A(function (d) {
                            return d.id
                        }, this.da);
                        this.da = this.da.concat(ia(function (d) {
                            return !G(d.id, b)
                        }, c))
                    };
                    a.prototype.bg = function () {
                        var c = Tf(this.l) || vd(this.l);
                        this.ub = {
                            w: c[0],
                            h: c[1]
                        }
                    };
                    a.prototype.Li = function () {
                        var c = this;
                        z(this.l, "p.um." + this.Kc.id, function () {
                            var b = [];
                            c.Eb();
                            c.meta = sb(function (d, e) {
                                var f;
                                if (c.hf(e.element)) b.push(e),
                                    delete d[e.id];
                                else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                    e.zb && (f = dd(e.zb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                    d[e.id] = g
                                }
                                return d
                            }, {}, c.da);
                            x(function (d) {
                                d = se(c.l)(d, c.da);
                                c.da.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.ud = function () {
                        var c, b, d = A(v(this.meta, n), ea(this.meta));
                        return d.length &&
                            (this.Pd = Fb(this.l, d), this.uf !== this.Pd) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null
                    };
                    a.prototype.yg = function () {
                        var c = this;
                        if (this.da.length) {
                            var b = A(function (d) {
                                var e, f = P(function (g, h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.hg);
                                d.Qf = !0;
                                return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e
                            }, ia(function (d) {
                                return !d.Qf
                            }, this.da));
                            b.length && (this.buffer = this.buffer.concat(b), Cb(this.l, this.oa, ["pdf", b]))
                        }
                    };
                    a.prototype.wi = function () {
                        this.Me.F(this.l,
                            al, this.Sb)
                    };
                    a.prototype.Ji = function () {
                        this.xe && this.xe();
                        this.Me.tb(this.l, al, this.Sb)
                    };
                    a.prototype.Eb = function () {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                            y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                Hd, Og = (Hd = {}, Hd[1] = 500, Hd[2] = 500, Hd[3] = 0, Hd),
                ht = ["topics", "rubric", "authors"],
                Pg = function () {
                    function a(c, b) {
                        var d, e = this;
                        this.id = "a";
                        this.Ed = !1;
                        this.Bb = {};
                        this.pb = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            rf: ["article"]
                        };
                        this.ve = (d = {}, d.Answer = 3, d.Review = 2, d);
                        this.Pe = u(function (f, g, h) {
                            var k;
                            Cb(e.l, e.oa, "pfi", (k = {}, k.field = f, k.itemField = g, k.value = h, k))
                        }, function (f, g, h) {
                            return "" + f + g + h
                        });
                        this.Ni = function (f) {
                            ht.forEach(function (g) {
                                f[g] && (f[g] = f[g].reduce(function (h, k) {
                                    var l = k.name,
                                        m = k.position;
                                    if (!l) return e.Pe(g, "name", l), h;
                                    if ("string" === typeof m) {
                                        l = Yd(m);
                                        if (null === l || e.l.isNaN(l)) return e.Pe(g, "position", m), h;
                                        k.position = l
                                    }
                                    h.push(k);
                                    return h
                                }, []))
                            });
                            return f
                        };
                        this.Eg = u(function (f, g) {
                            var h;
                            Cb(e.l, e.oa, ["pcs", g], (h = {}, h.chars = g.chars, h.limit = Og[g.type], h))
                        });
                        this.l = c;
                        this.root = $b(c);
                        this.oa = b
                    }
                    a.prototype.Ia = function (c) {
                        return c.element
                    };
                    a.prototype.Xe = function (c, b) {
                        var d = this,
                            e;
                        z(this.l, "P.s." + b, function () {
                            e = d.Bb[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.ii = function (c) {
                        var b = C({}, c);
                        this.Ed && !b.id && G(c.type, [3, 2]) && (c = L(", ", A(V("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.qh(b.zb));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ?
                            b.id : this.oh());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.Aa = function (c) {
                        var b = this,
                            d = {},
                            e = this.Ia(c);
                        if (!e) return null;
                        d.type = c.type;
                        x(function (g) {
                            d[g] = b.Xe(c, g)
                        }, ea(this.Bb));
                        var f = ja(this.l);
                        d.stamp = f(Bj);
                        d.element = c.element;
                        d.zb = e;
                        d = this.Ni(this.ii(d));
                        d.id = d.id ? pc(d.id) : 1;
                        d.update = function (g) {
                            return b.Ia(c) ? b.Xe(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.qh = function (c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = $a(Hc("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.oh = function () {
                        var c = Hc('[rel="canonical"]',
                            this.root);
                        if (c) return c.href
                    };
                    a.prototype.bf = function () {
                        return 1
                    };
                    a.prototype.jc = function () {
                        return []
                    };
                    a.prototype.Tg = function () {
                        var c = this,
                            b = this.jc(),
                            d = 1;
                        return sb(function (e, f) {
                            var g = c.Aa({
                                element: f,
                                type: c.bf(f)
                            }) || [];
                            N(g) || (g = [g]);
                            g = sb(function (h, k) {
                                var l = h.values,
                                    m = h.df;
                                k && k.chars > Og[k.type] && !G(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= Og[k.type] && c.Eg(k.id, k);
                                return {
                                    values: l,
                                    df: m
                                }
                            }, {
                                values: [],
                                df: A(V("id"), e)
                            }, g).values;
                            return e.concat(A(function (h) {
                                var k;
                                h = C((k = {
                                    index: d,
                                    Qf: !1
                                }, k.involvedTime =
                                    0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                bl = function (a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Ed = !0;
                        d.Ie = L(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.Bb = (b = {}, b.id = function (e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity || e.data.mainEntityOfPage;
                            !f && ha(e) && (f = e["@id"]);
                            return f
                        }, b.chars = function (e) {
                            var f = e.data;
                            return fa(f.text) ? f.text.length : Tb(this.Ia(e)).length
                        }, b.authors =
                            function (e) {
                                e = e.data;
                                var f = [];
                                f = f.concat(this.ic(e, "author"));
                                f = f.concat(this.ic(e.mainEntity, "author"));
                                return f.concat(this.ic(e.mainEntityOfPage, "author"))
                            }, b.pageTitle = function (e) {
                                var f = e.data,
                                    g = f.headline || "";
                                f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                                "" === g && (f.name ? g = f.name : f.itemReviewed && (g = f.itemReviewed));
                                3 === e.type && ha(f.parentItem) && (g = f.parentItem.text);
                                return g
                            }, b.updateDate = function (e) {
                                return e.data.dateModified || ""
                            }, b.publicationDate = function (e) {
                                return e.data.datePublished ||
                                    ""
                            }, b.pageUrlCanonical = function (e) {
                                return e.data.url
                            }, b.topics = function (e) {
                                return this.ic(e.data, "about", ["name", "alternateName"])
                            }, b.rubric = function (e) {
                                var f = this,
                                    g = this.Ia(e);
                                e = Ka(A(function (h) {
                                    h = Eb(f.l, Tb(h));
                                    if (ha(h) || N(h)) {
                                        var k = f.Ye(h);
                                        if (k) return P(function (l, m) {
                                            return l ? l : ha(m) && "BreadcrumbList" === m["@type"] ? m : l
                                        }, null, k);
                                        if ("BreadcrumbList" === h["@type"]) return h
                                    }
                                    return null
                                }, [e.element].concat(gb(this.Ie, document.body === g ? document.documentElement : g))));
                                return e.length && (e = e[0].itemListElement,
                                    N(e)) ? Ka(A(function (h) {
                                        return ha(h) && h.item && ha(h.item) && !f.l.isNaN(h.position) ? {
                                            name: h.item.name || h.name,
                                            position: h.position
                                        } : null
                                    }, e)) : []
                            }, b);
                        return d
                    }
                    Ha(c, a);
                    c.prototype.ic = function (b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = N(b[d]) ? b[d] : [b[d]];
                        b = Ka(A(function (f) {
                            return f ? "string" === typeof f ? f : P(function (g, h) {
                                return g || "" + f[h]
                            }, "", e) : null
                        }, b));
                        return A(function (f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.Ia = function (b) {
                        var d = b.element,
                            e = b.data || {};
                        b = e["@id"];
                        var f = e.url;
                        e = null;
                        f && fa(f) && (e = this.Oe(f));
                        !e && b && fa(b) && (e = this.Oe(b));
                        e || (e = b = d.parentNode, !hc("head", this.l, d) && b && 0 !== Tb(b).length) || (e = this.l.document.body);
                        return e
                    };
                    c.prototype.Oe = function (b) {
                        try {
                            var d = Ic(this.l, b).hash;
                            if (d) {
                                var e = Hc(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) { }
                        return null
                    };
                    c.prototype.Vd = function (b) {
                        return this.ve[b["@type"]] || 1
                    };
                    c.prototype.Aa = function (b) {
                        var d = this,
                            e = b.element,
                            f = b.data;
                        if (!f && (f = Eb(this.l, Tb(e)), !f || !/schema\.org/.test(f["@context"]) && !N(f))) return null;
                        var g = this.Ye(f);
                        if (g) return A(function (k) {
                            return ha(k) && G(k["@type"], d.pb["schema.org"]) ? a.prototype.Aa.call(d, {
                                element: e,
                                data: k,
                                type: d.Vd(k)
                            }) : null
                        }, g);
                        b.data = f;
                        if ("QAPage" === b.data["@type"]) {
                            var h = b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!h) return null
                        }
                        "Question" === b.data["@type"] && (h = b.data);
                        return h ? (b = ud(v(h, n), ["acceptedAnswer", "suggestedAnswer"]), A(function (k) {
                            var l;
                            if (!ha(k) || !G(k["@type"], d.pb["schema.org"])) return null;
                            k = {
                                element: e,
                                type: d.Vd(k),
                                data: C((l = {}, l.parentItem = h, l), k)
                            };
                            return a.prototype.Aa.call(d,
                                k)
                        }, b)) : G(b.data["@type"], this.pb["schema.org"]) ? a.prototype.Aa.call(this, C(b, {
                            type: this.Vd(b.data)
                        })) : null
                    };
                    c.prototype.jc = function () {
                        return gb(this.Ie, this.root)
                    };
                    c.prototype.Ye = function (b) {
                        if (N(b)) return b;
                        if (b && N(b["@graph"])) return b["@graph"]
                    };
                    return c
                }(Pg),
                Qg = function (a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Ed = !0;
                        d.Ii = cb("exec", new RegExp("schema.org\\/(" + L("|", ea(d.ve)) + ")$"));
                        d.Bb = (b = {}, b.id = function (e) {
                            e = e.element;
                            var f = eb(this.l, e, "identifier");
                            return f ?
                                $a(f) : (f = eb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function (e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                                var k = eb(this.l, e, g[h]);
                                if (k) {
                                    f = $a(k).length;
                                    break
                                }
                            }
                            e = Tb(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function (e) {
                            var f = this,
                                g = Bd(this.l, e.element, "about");
                            return A(function (h) {
                                var k = {
                                    name: $a(h)
                                };
                                if (g = eb(f.l, h, "name")) k.name = $a(g);
                                return k
                            }, g)
                        }, b.rubric = function (e) {
                            var f =
                                this;
                            (e = Hc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = Hc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                            return e ? A(function (g) {
                                return {
                                    name: $a(eb(f.l, g, "name")),
                                    position: $a(eb(f.l, g, "position"))
                                }
                            }, Bd(this.l, e, "itemListElement")) : []
                        }, b.updateDate = function (e) {
                            return (e = eb(this.l, e.element, "dateModified")) ? Xj(e) : ""
                        }, b.publicationDate = function (e) {
                            return (e = eb(this.l, e.element, "datePublished")) ? Xj(e) : ""
                        }, b.pageUrlCanonical = function (e) {
                            e = Bd(this.l, e.element, "url");
                            if (e.length) {
                                var f =
                                    e[0];
                                return f.href ? f.href : $a(e)
                            }
                            return null
                        }, b.pageTitle = function (e) {
                            var f = "",
                                g = e.element,
                                h = eb(this.l, g, "headline");
                            h && (f += $a(h));
                            (h = eb(this.l, g, "alternativeHeadline")) && (f += " " + $a(h));
                            "" === f && ((h = eb(this.l, g, "name")) || (h = eb(this.l, g, "itemReviewed")), h && (f += $a(h)));
                            3 === e.type && (e = hc('[itemtype$="schema.org/Question"]', this.l, g)) && (e = eb(this.l, e, "text")) && (f += $a(e));
                            return f
                        }, b.authors = function (e) {
                            var f = this;
                            e = Bd(this.l, e.element, "author");
                            return A(function (g) {
                                var h, k = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") ||
                                    "") && (h = eb(f.l, g, "name")) && (k.name = $a(h));
                                k.name || (k.name = g.getAttribute("content") || Tb(g) || g.getAttribute("href"));
                                return k
                            }, e)
                        }, b);
                        return d
                    }
                    Ha(c, a);
                    c.prototype.bf = function (b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.Ii(b)) ? this.ve[b[1]] : 1
                    };
                    c.prototype.Aa = function (b) {
                        return b.element && Tb(b.element).length ? a.prototype.Aa.call(this, b) : null
                    };
                    c.prototype.jc = function () {
                        var b = L(",", A(function (d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.pb["schema.org"]));
                        return gb(b, this.root)
                    };
                    return c
                }(Pg),
                cl = function (a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Bb = (e = {}, e.chars = function (g) {
                            g = this.Ia(g);
                            return Tb(g).length
                        }, e.authors = function (g) {
                            return this.pd(g.data.author)
                        }, e.pageTitle = function (g) {
                            return this.oc(g.data.title) || ""
                        }, e.updateDate = function (g) {
                            return this.oc(g.data.modified_time)
                        }, e.publicationDate = function (g) {
                            return this.oc(g.data.published_time)
                        }, e.pageUrlCanonical = function (g) {
                            return this.oc(g.data.url)
                        }, e.rubric = function (g) {
                            return this.pd(g.data.section)
                        }, e.topics = function (g) {
                            return this.pd(g.data.tag)
                        },
                            e);
                        f.Ng = new RegExp("^(og:)?((" + L("|", f.pb.rf) + "):)?");
                        return f
                    }
                    Ha(c, a);
                    c.prototype.pd = function (b) {
                        var d;
                        return b ? N(b) ? A(function (e) {
                            var f;
                            return f = {}, f.name = e ? "" + e : null, f
                        }, b) : [(d = {}, d.name = b ? "" + b : null, d)] : []
                    };
                    c.prototype.oc = function (b) {
                        return N(b) ? b.length ? "" + b[0] : null : b ? "" + b : null
                    };
                    c.prototype.jc = function () {
                        var b = gb('meta[property="og:type"]', this.l.document.body);
                        return [this.l.document.head].concat(b)
                    };
                    c.prototype.gh = function (b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.Ia(b);
                        e = gb("meta[property]", e ===
                            this.l.document.head ? e : g);
                        if (e.length) x(function (h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Ng, ""),
                                        l = $a(h);
                                    f[k] ? N(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                Gc(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return G(f.type, this.pb.rf) ? C(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.Ia = function (b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.Aa = function (b) {
                        return (b = this.gh(b)) ? a.prototype.Aa.call(this, b) : null
                    };
                    return c
                }(Pg),
                Id = {};
            bl && (Id.json_ld = bl);
            Qg && (Id.schema = Qg, Id.microdata = Qg);
            cl && (Id.opengraph = cl);
            var it = B("p.p", function (a, c) {
                function b(m) {
                    var p = C({}, l);
                    p.X.aa = m;
                    return f(p, c)["catch"](z(a, "s.ww.p"))
                }
                var d, e = Yh(a, "9", "8");
                if (!Na("querySelectorAll", a.document.querySelectorAll) || !e) return K.resolve();
                var f = oa(a, "p", c),
                    g = Ca(),
                    h = Sc(a, c.id),
                    k = h.C("pai");
                k && (h.cc("pai"), g.D("pai", k));
                var l = {
                    J: (d = {}, d["wv-type"] = e.type, d),
                    K: g,
                    X: {}
                };
                return na(c, z(a, "ps.s", function (m) {
                    var p;
                    if (m = n(m, "settings.publisher.schema")) {
                        Nj(c) &&
                            (m = "microdata");
                        var q = Id[m];
                        if (q && e) {
                            var r = J(c);
                            q = new q(a, r);
                            q = new gt(a, q, e, b, r);
                            q.start();
                            Cb(a, r, "ps", (p = {}, p.schema = m, p));
                            return I(q.stop, q)
                        }
                    }
                }))
            }),
                jt = function () {
                    function a(c, b) {
                        this.type = "0";
                        this.l = c;
                        this.eh = b
                    }
                    a.prototype.Da = function (c) {
                        return kf(ud(I(this.qb, this), c))
                    };
                    a.prototype.qb = function (c, b) {
                        var d = this,
                            e = [],
                            f = this.eh(this.l, b && b.type, c.type);
                        f && (e = ud(function (g) {
                            return g({
                                l: d.l,
                                ja: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.hb = function (c) {
                        return c.length
                    };
                    a.prototype.ke = function (c) {
                        return [c]
                    };
                    a.prototype.isEnabled =
                        function () {
                            return !0
                        };
                    return a
                }(),
                dl = function () {
                    function a(c, b, d) {
                        this.Je = 0;
                        this.Wd = 1;
                        this.Tc = 5E3;
                        this.l = c;
                        this.ha = b;
                        this.Nb = d
                    }
                    a.prototype.Nc = function () {
                        this.Je = R(this.l, w(I(this.flush, this), I(this.Nc, this)), this.Tc, "b.f")
                    };
                    a.prototype.send = function (c, b) {
                        var d = this.Nb(c, b || [], this.Wd);
                        this.Wd += 1;
                        return d
                    };
                    a.prototype.push = function () { };
                    a.prototype.flush = function () { };
                    return a
                }(),
                kn = function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.ig = 7500;
                        b.Tc = 3E4;
                        b.Nc();
                        return b
                    }
                    Ha(c, a);
                    c.prototype.push =
                        function (b, d) {
                            var e = this.ha.qb(b, d);
                            wa(this.buffer, e);
                            this.ha.hb(this.buffer) > this.ig && this.flush()
                        };
                    c.prototype.flush = function () {
                        var b = this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(dl),
                zn = /opera mini/i,
                Sh = ["phone", "email"],
                el = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                wn = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                xn = [65, 90],
                yn = [97, 122],
                un = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                sn = new RegExp("(" + L("|", el) + ")", "i"),
                rn = new RegExp("(" + L("|", Sh) + ")", "i"),
                Yj = ["password", "passwd", "pswd"],
                tn = new RegExp("(" + L("|", el.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                Ta = "metrikaId_" + Math.random(),
                rc = {
                    counter: 0
                },
                jr = u(function () {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }),
                gr = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                kt = function () {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        bj: new RegExp("(" + L("|", a) + ")", "i"),
                        mj: new RegExp("(" + L("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        $i: /ym-record-keys/i,
                        Th: "\u2022",
                        jj: 88
                    }
                }(),
                dk = Oc(v(kt.Th, U)),
                fd = !0,
                pg = "",
                qg = !1,
                rg = !0,
                sg = !1,
                pn = sa(function (a, c) {
                    var b = E([a, "efv." + c.event], z);
                    c.N = A(w(U, b), c.N);
                    return c
                }),
                fl = u(function (a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(qf), b.push(mr), b.push(nr));
                    a.document.addEventListener ? c.push(bk) : (b.push(ak), d.push(bk));
                    return on(a, ("onpagehide" in a ? [] : [{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        N: [F]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        N: [F]
                    }]).concat([{
                        event: "click",
                        N: [Ie]
                    }, {
                        event: "dblclick",
                        N: [Ie]
                    }, {
                        event: "mousedown",
                        N: [Ie]
                    }, {
                        event: "mouseup",
                        N: [pr]
                    }, {
                        event: "keydown",
                        N: [qr]
                    }, {
                        event: "keypress",
                        N: [rr]
                    }, {
                        event: "copy",
                        N: [fk]
                    }, {
                        event: "blur",
                        N: c
                    }, {
                        event: "focusin",
                        N: b
                    }, {
                        event: "focusout",
                        N: d
                    }]).concat(!a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        N: [Qh]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        N: [qf]
                    }] : []).concat(a.document.addEventListener ? [{
                        event: "focus",
                        N: [ak]
                    }, {
                        event: "change",
                        N: [ck]
                    }, {
                        event: "submit",
                        N: [hk]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        N: [ck]
                    }, {
                        type: "form",
                        event: "submit",
                        N: [hk]
                    }]))
                }),
                mn = u(function (a) {
                    var c = [];
                    yc(a) && c.push({
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        N: [sr]
                    });
                    "onpagehide" in a && c.push({
                        target: a,
                        type: "window",
                        event: "pagehide",
                        N: [function (b) {
                            b = b.flush;
                            b()
                        }]
                    });
                    return c
                }),
                lt = ["submit", "beforeunload", "unload"],
                mt = u(function (a, c) {
                    var b = c(a);
                    return P(function (d, e) {
                        d[e.type + ":" + e.event] = e.N;
                        return d
                    }, {}, b)
                }),
                nt = v(fl, function (a, c, b, d) {
                    return mt(c, a)[b + ":" + d] || []
                }),
                nn = /^\s*function submit\(\)/,
                ot = B("fw.p", function (a, c) {
                    var b;
                    if (!(b = c.Kg || !c.vb)) {
                        var d = H(a),
                            e = !1;
                        b = d.C("hitParam", {});
                        var f = J(c);
                        b[f] && (d = d.C("counters", {}), e = Nd(c.$) && !d[f]);
                        b[f] = 1;
                        b = e
                    }
                    if (b) return K.resolve(F);
                    b = new jt(a, nt);
                    return jn(a, c, b, fl, lt)
                }),
                Rg, gl = (Rg = function (a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.se = 0;
                        d.yb = 0;
                        d.qe = 0;
                        d.buffer = [];
                        d.Tc = 2E3;
                        d.Y = cd(b);
                        d.Nc();
                        d.qe = f;
                        return d
                    }
                    Ha(c, a);
                    c.prototype.Ve = function (b) {
                        return Ka(this.Y.Z("ag", b))
                    };
                    c.prototype.Ue = function (b, d) {
                        var e = this;
                        b(Wa(z(this.l, "wv2.b.st"), function (f) {
                            e.send(f,
                                d)
                        }))
                    };
                    c.prototype.vi = function (b, d) {
                        var e = this;
                        la(this.l, this.Je);
                        var f = Math.ceil(this.ha.hb(d) / 63E4),
                            g = this.ha.ke(d, f);
                        x(function (h, k) {
                            var l, m = C({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l.partsTotal = g.length, l));
                            l = e.ha.Da([m], !1);
                            e.Ue(l, [m])
                        }, g);
                        this.Nc()
                    };
                    c.prototype.send = function (b, d) {
                        var e = this;
                        this.Y.Z("se", d);
                        return a.prototype.send.call(this, b, d).then(U, function () {
                            e.Y.Z("see", d)
                        })
                    };
                    c.We = function (b, d, e, f, g) {
                        c.Wc["" + b + d] || (this.Wc[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.Wc[d]
                    };
                    c.prototype.Lh = function () {
                        return this.qe && this.se >= this.qe
                    };
                    c.prototype.push = function (b) {
                        var d = this;
                        if (!this.Lh()) {
                            this.Y.Z("p", b);
                            var e = this.ha.qb(b),
                                f = this.ha.hb(e);
                            7E5 < f ? this.vi(b, e) : (e = this.Ve(this.buffer.concat([b])), e = sb(function (g, h) {
                                return g + d.ha.hb(d.ha.qb(h))
                            }, 0, e), this.yb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.yb += f)
                        }
                    };
                    c.prototype.F = function (b, d) {
                        this.Y.F([b], d)
                    };
                    c.prototype.ea = function (b, d) {
                        this.Y.ea([b], d)
                    };
                    c.prototype.flush = function (b) {
                        var d = this.buffer.concat(this.Ve(this.buffer));
                        d.length && (this.buffer = [], this.se += this.yb, this.yb = 0, b = this.ha.Da(d, b), this.Ue(b, d))
                    };
                    return c
                }(dl), Rg.Wc = {}, Rg),
                ab = function () {
                    function a(c, b, d) {
                        this.Oh = "wv2.c";
                        this.mb = [];
                        this.ga = [];
                        this.l = c;
                        this.L = of(c, this, d, this.Oh);
                        this.G = b;
                        this.Pa = this.G.jh();
                        this.start = this.L.H(this.start, "st");
                        this.stop = this.L.H(this.stop, "sp")
                    }
                    a.prototype.start = function () {
                        var c = this;
                        this.mb = A(function (b) {
                            var d = b[0],
                                e = b[2];
                            b = I(c.L.H(b[1], d[0]), c);
                            return c.Pa.F(e || c.l, d, b)
                        }, this.ga)
                    };
                    a.prototype.stop = function () {
                        x(va, this.mb)
                    };
                    a.prototype.V = function (c) {
                        return this.G.qa().V(c)
                    };
                    return a
                }(),
                gn = ["checkbox", "radio"],
                hn = /pwd|value|password/i,
                Sg = V("location.href"),
                pt = function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.na = {
                            elements: [],
                            attributes: []
                        };
                        d.index = 0;
                        d.Rd = d.L.H(d.Rd, "o");
                        d.fd = d.L.H(d.fd, "io");
                        d.Uc = d.L.H(d.Uc, "ao");
                        d.Zd = d.L.H(d.Zd, "a");
                        d.Xd = d.L.H(d.Xd, "at");
                        d.$d = d.L.H(d.$d, "r");
                        d.Yd = d.L.H(d.Yd, "c");
                        d.xa = new b.MutationObserver(d.Rd);
                        return d
                    }
                    Ha(c, a);
                    c.prototype.start = function () {
                        this.xa.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function () {
                        this.xa.disconnect()
                    };
                    c.prototype.Uc = function (b) {
                        var d = b.target,
                            e = b.attributeName,
                            f = b.oldValue;
                        b = d.getAttribute(e);
                        if (b === f) return !1;
                        f = Ib(this.l)(d, this.na.elements); - 1 === f && (f = this.na.elements.push(d) - 1, this.na.attributes[f] = {});
                        this.na.attributes[f] || (this.na.attributes[f] = {});
                        this.na.attributes[f][e] = ce(this.l, d, e, b, this.G.Db()).value;
                        return !0
                    };
                    c.prototype.fd = function (b) {
                        function d(k) {
                            var l =
                                Ib(e.l)(k, f);
                            return -1 === l ? (f.push(k), k = {
                                nd: {}
                            }, g.push(k), k) : g[l]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        x(function (k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                q = k.target,
                                r = k.nextSibling,
                                t = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    if (e.Uc(k)) {
                                        var y = d(q);
                                        y.nd[l] || (y.nd[l] = ce(e.l, q, l, p, e.G.Db()).value)
                                    }
                                    break;
                                case "childList":
                                    m && x(function (D) {
                                        y = d(D);
                                        y.Se || C(y, {
                                            Se: q,
                                            Zg: r ? r : void 0,
                                            $g: t ? t : void 0
                                        })
                                    }, La(m));
                                    break;
                                case "characterData":
                                    y = d(q), y.Te || (y.Te = p)
                            }
                        }, b);
                        var h = this.G.qa();
                        x(function (k, l) {
                            h.je(k, g[l])
                        },
                            f)
                    };
                    c.prototype.Rd = function (b) {
                        var d = this;
                        if (Sg(this.l)) {
                            var e = this.G.stamp();
                            this.fd(b);
                            x(function (f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h && h.length && d.$d(La(h), e);
                                        g && g.length && d.Zd(La(g), e);
                                        break;
                                    case "characterData":
                                        d.Yd(k, e)
                                }
                            }, b);
                            this.Xd(e)
                        } else this.stop()
                    };
                    c.prototype.Xd = function (b) {
                        var d = this;
                        x(function (e, f) {
                            var g = d.lc();
                            d.G.R("mutation", {
                                index: g,
                                attributes: d.na.attributes[f],
                                target: d.V(e)
                            }, "ac", b)
                        }, this.na.elements);
                        this.na.elements = [];
                        this.na.attributes = []
                    };
                    c.prototype.Zd = function (b, d) {
                        var e = this,
                            f = this.lc();
                        this.G.qa().qc({
                            nodes: b,
                            Mc: function (g) {
                                g = A(function (h) {
                                    h.node = void 0;
                                    return h
                                }, g);
                                e.G.R("mutation", {
                                    index: f,
                                    nodes: g
                                }, "ad", d)
                            }
                        })
                    };
                    c.prototype.$d = function (b, d) {
                        var e = this,
                            f = this.lc(),
                            g = this.G.qa(),
                            h = A(function (k) {
                                var l = g.removeNode(k);
                                Ai(e.l, k, function (m) {
                                    g.removeNode(m)
                                });
                                return l
                            }, b);
                        this.G.R("mutation", {
                            index: f,
                            nodes: h
                        }, "re", d)
                    };
                    c.prototype.Yd = function (b, d) {
                        var e = this.lc();
                        this.G.R("mutation", {
                            value: b.textContent,
                            target: this.V(b),
                            index: e
                        }, "tc",
                            d)
                    };
                    c.prototype.lc = function () {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }(ab),
                qt = function () {
                    function a(c, b) {
                        var d = this;
                        this.hc = [];
                        this.bb = [];
                        this.Qd = 1;
                        this.Ge = this.Mf = 0;
                        this.wa = {};
                        this.Qa = {};
                        this.Cb = [];
                        this.Bd = function (f) {
                            return d.bb.length ? G(f, d.bb) : !1
                        };
                        this.removeNode = function (f) {
                            var g = d.V(f),
                                h = Ga(f);
                            if (h) return h = "NR:" + h.toLowerCase(), d.Bd(h) && d.Y.Z(h, {
                                data: {
                                    node: f,
                                    id: g
                                }
                            }), g
                        };
                        this.gb = function (f) {
                            var g = Ga(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                return h ? h : (h = d.Qd, f.__ym_indexer = h, d.Qd += 1, g = "NA:" + g.toLowerCase(),
                                    d.Bd(g) && d.Y.Z(g, {
                                        data: {
                                            node: f,
                                            id: h
                                        }
                                    }), h)
                            }
                            return null
                        };
                        this.Gf = function () {
                            d.Mf = R(d.l, w(I(d.ba, d, !1), d.Gf), 50, "i.s")
                        };
                        this.Ef = function () {
                            d.Ge = R(d.l, w(I(d.Zc, d, !1), d.Ef), 50, "i.g")
                        };
                        this.ki = function (f) {
                            null === d.wa[f] && delete d.wa[f];
                            null === d.Qa[f] && delete d.Qa[f]
                        };
                        this.l = c;
                        var e = of(c, this, "i");
                        this.Y = cd(c);
                        this.options = b;
                        this.start = e.H(this.start, "st");
                        this.stop = e.H(this.stop, "sp");
                        this.V = e.H(this.V, "i");
                        this.je = e.H(this.je, "o");
                        this.qc = e.H(this.qc, "a");
                        this.removeNode = e.H(this.removeNode, "r");
                        this.ba =
                            e.H(this.ba, "s");
                        this.Zc = e.H(this.Zc, "g")
                    }
                    a.prototype.je = function (c, b) {
                        var d = this.gb(c);
                        Za(d) || (this.Qa[d] && this.V(c), this.Qa[d] = b)
                    };
                    a.prototype.F = function (c, b, d) {
                        c = "" + b + c;
                        this.bb.push(c);
                        this.Bd(c) || this.bb.push(c);
                        this.Y.F([c], d)
                    };
                    a.prototype.ea = function (c, b, d) {
                        var e = "" + b + c;
                        this.bb = ia(function (f) {
                            return f !== e
                        }, this.bb);
                        this.Y.ea([e], d)
                    };
                    a.prototype.start = function () {
                        this.Gf();
                        this.Ef()
                    };
                    a.prototype.stop = function () {
                        this.flush();
                        la(this.l, this.Ge);
                        la(this.l, this.Mf);
                        this.hc = [];
                        this.Cb = [];
                        this.wa = {};
                        this.Qa = {}
                    };
                    a.prototype.qc = function (c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = {
                                Mc: c.Mc,
                                result: [],
                                rc: 0,
                                nodes: d
                            };
                        this.hc.push(f);
                        x(function (g) {
                            Ai(b.l, g, function (h) {
                                var k = b.gb(h);
                                Za(k) || (d.push(h), b.wa[k] && b.V(h), b.wa[k] = {
                                    node: h,
                                    event: f,
                                    Gi: e
                                }, e += 1)
                            })
                        }, c.nodes)
                    };
                    a.prototype.V = function (c) {
                        if (c === this.l) return 0;
                        var b = this.gb(c),
                            d = this.wa[b],
                            e = this.bh(b),
                            f = e.Se,
                            g = e.nd,
                            h = e.Te,
                            k = e.Zg,
                            l = e.$g;
                        if (d) {
                            e = d.event;
                            d = d.Gi;
                            var m = Qr(this.l) === c;
                            k = k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.gb(k) : null;
                            p = !m && p ? this.gb(p) :
                                null;
                            m = this.l;
                            k = this.options;
                            f = this.gb(f || c.parentNode || c.parentElement) || 0;
                            var q = g,
                                r = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 === q && (q = {});
                            void 0 === r && (r = Ga(c));
                            if (Y(r)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    prev: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: r.toLowerCase(),
                                    node: c
                                };
                                if (uf(c)) {
                                    if (h = dn(c, h), g.attributes = {}, g.content = h)
                                        if (c = ed(m, c)) g.content = "" !== Xa(h) ? vn(m, h) : h, g.hidden = c
                                } else h = en(m, c, k, q, r), m = h.kb, g.attributes = h.sg, m && (g.hidden = m), c.namespaceURI && fb(c.namespaceURI, "svg") && (g.namespace =
                                    c.namespaceURI);
                                c = g
                            }
                            if (Y(c)) return;
                            this.wa[b] = null;
                            this.Cb.push(b);
                            e.result[d] = c;
                            e.rc += 1;
                            e.nodes.length === e.rc && e.Mc(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function () {
                        this.ba(!0)
                    };
                    a.prototype.Zc = function () {
                        if (this.Cb.length) {
                            var c = Zb(this.Cb, this.ki),
                                b = Zf(this.l, 30);
                            c(b)
                        }
                    };
                    a.prototype.ba = function (c) {
                        var b = this;
                        if (Sg(this.l)) {
                            var d = ea(this.wa);
                            d = P(function (e, f) {
                                b.wa[f] && e.push(b.wa[f].node);
                                return e
                            }, [], d);
                            d = Zb(d, this.V);
                            c = c ? zj(F) : xj(this.l, 20);
                            d(c);
                            this.hc = ia(function (e) {
                                return e.rc !== e.result.length
                            },
                                this.hc)
                        }
                    };
                    a.prototype.bh = function (c) {
                        if (Za(c)) return {};
                        var b = this.Qa[c];
                        return b ? (this.Qa[c] = null, this.Cb.push(c), b) : {}
                    };
                    return a
                }(),
                rt = ["input", "change", "keyup", "paste", "cut"],
                st = function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.jd = !1;
                        b.zc = b.L.H(b.zc, "ii");
                        b.Ac = b.L.H(b.Ac, "ir");
                        b.Hc = b.L.H(b.Hc, "ri");
                        b.Rc = b.L.H(b.Rc, "ur");
                        b.zd = b.L.H(b.zd, "ce");
                        b.pc = b.L.H(b.pc, "vc");
                        return b
                    }
                    Ha(c, a);
                    c.prototype.start = function () {
                        var b = this,
                            d = this.G.qa();
                        this.jd = this.zg();
                        x(function (e) {
                            e = e.toLowerCase();
                            d.F(e, "NA:", I(b.zc, b));
                            d.F(e, "NR:", I(b.Ac, b))
                        }, tf);
                        this.mb = [this.Pa.F(this.l.document, rt, I(this.zd, this)), function () {
                            x(function (e) {
                                e = e.toLowerCase();
                                d.ea(e, "NA:", b.zc);
                                d.ea(e, "NR:", b.Ac)
                            }, tf);
                            x(b.Rc, ea(b.inputs))
                        }]
                    };
                    c.prototype.Rc = function (b) {
                        var d = this.inputs[b];
                        if (d) {
                            if (this.jd) {
                                var e = d.bi;
                                d = d.element;
                                e && this.l.Object.defineProperty(d, this.nc(d), e)
                            }
                            delete this.inputs[b]
                        }
                    };
                    c.prototype.Ac = function (b) {
                        b && this.Rc(b.data.id)
                    };
                    c.prototype.zc = function (b) {
                        b && (b = b.data, this.Hc(b.node, b.id))
                    };
                    c.prototype.nc =
                        function (b) {
                            return Be(b) ? "checked" : "value"
                        };
                    c.prototype.zd = function (b) {
                        if (b = b.target) {
                            var d = this.nc(b);
                            this.pc(b[d], b)
                        }
                    };
                    c.prototype.pc = function (b, d) {
                        var e = this.V(d),
                            f = this.inputs[e];
                        if (!f && (f = this.Hc(f, e), !f)) return;
                        e = f.Bg;
                        var g = f.value,
                            h = this.nc(d),
                            k = !b || G(typeof b, ["string", "boolean", "number"]),
                            l = this.G.Db().Gd;
                        k && b !== g && (g = ce(this.l, d, h, b, this.G.Db()).value, e ? this.G.R("event", {
                            target: this.V(d),
                            checked: !!b
                        }, "change") : (e = Jc(this.l, d, l), l = e.cb, this.G.R("event", {
                            value: g,
                            hidden: e.lb && !l,
                            target: this.V(d)
                        },
                            "change")), f.value = b)
                    };
                    c.prototype.Hc = function (b, d) {
                        var e = this;
                        if (!mf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                        var f = Be(b),
                            g = this.nc(b),
                            h = {
                                element: b,
                                Bg: f,
                                value: b[g]
                            };
                        this.inputs[d] = h;
                        this.jd && Nb(this.l, function () {
                            var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                                m = C({}, k, l);
                            if (Na("((set)?(\\s?" + g + ")?)?", m.set)) {
                                try {
                                    e.l.Object.defineProperty(b, g, C({}, m, {
                                        configurable: !0,
                                        set: function (p) {
                                            e.pc(p,
                                                this);
                                            return m.set.call(this, p)
                                        }
                                    }))
                                } catch (p) { }
                                h.bi = m
                            }
                        });
                        return h
                    };
                    c.prototype.zg = function () {
                        var b = !0,
                            d = Pb(this.l)("input");
                        try {
                            d = Pb(this.l)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                                g = C({}, e, f);
                            this.l.Object.defineProperty(d, "value", C({}, g, {
                                configurable: !0,
                                set: function (h) {
                                    return g.set.call(d, h)
                                }
                            }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1)
                        } catch (h) {
                            b = !1
                        }
                        return b
                    };
                    return c
                }(ab),
                tt = function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Va = {
                            width: 0,
                            height: 0,
                            pageHeight: 0,
                            pageWidth: 0,
                            orientation: 0
                        };
                        b.ga.push([
                            ["resize"], b.$h
                        ]);
                        b.ga.push([
                            ["orientationchange"], b.Yh
                        ]);
                        return b
                    }
                    Ha(c, a);
                    c.prototype.start = function () {
                        a.prototype.start.call(this);
                        this.Jf()
                    };
                    c.prototype.$h = function () {
                        var b = this.wd();
                        this.zh(b) && (this.Va =
                            b, this.Kf(b))
                    };
                    c.prototype.Yh = function () {
                        var b = this.wd();
                        this.Va.orientation !== b.orientation && (this.Va = b, this.oi(b))
                    };
                    c.prototype.jf = function (b) {
                        return !b.height || !b.width || !b.pageWidth || !b.pageHeight
                    };
                    c.prototype.zh = function (b) {
                        return b.height !== this.Va.height || b.width !== this.Va.width
                    };
                    c.prototype.wd = function () {
                        var b = this.G.fb(),
                            d = vd(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.vd();
                        return {
                            width: e,
                            height: d,
                            pageWidth: b ? b.scrollWidth : 0,
                            pageHeight: b ? b.scrollHeight : 0,
                            orientation: this.G.fb().lh()
                        }
                    };
                    c.prototype.oi = function (b) {
                        var d;
                        void 0 === d && (d = this.G.stamp());
                        this.G.R("event", {
                            width: b.width,
                            height: b.height,
                            orientation: b.orientation
                        }, "deviceRotation", d)
                    };
                    c.prototype.Kf = function (b, d) {
                        void 0 === d && (d = this.G.stamp());
                        this.G.R("event", {
                            width: b.width,
                            height: b.height,
                            pageWidth: b.pageWidth,
                            pageHeight: b.pageHeight
                        }, "resize", d)
                    };
                    c.prototype.Jf = function () {
                        var b = this.wd();
                        this.jf(b) ? R(this.l, I(this.Jf, this), 300) : (this.jf(this.Va) && (this.Va = b), this.Kf(b, 0))
                    };
                    return c
                }(ab),
                Me = function () {
                    function a(c) {
                        this.index = 0;
                        this.sb = {};
                        this.l = c
                    }
                    a.prototype.$b =
                        function (c, b, d) {
                            void 0 === d && (d = {});
                            var e = ja(this.l),
                                f = this.index;
                            this.index += 1;
                            this.sb[f] = {
                                Ma: 0,
                                Mb: !1,
                                Xg: c,
                                Vc: [],
                                Ld: e(da)
                            };
                            var g = this;
                            return function () {
                                var h = Ia(arguments),
                                    k = d.Qe && !g.sb[f].Mb,
                                    l = g.sb[f];
                                la(g.l, l.Ma);
                                l.Vc = h;
                                l.Mb = !0;
                                var m = e(da);
                                if (k || m - l.Ld >= b) c.apply(void 0, h), l.Ld = m;
                                l.Ma = R(g.l, function () {
                                    k || (c.apply(void 0, h), l.Ld = e(da));
                                    l.Mb = !1;
                                    l.Vc = []
                                }, b, "th")
                            }
                        };
                    a.prototype.flush = function () {
                        var c = this;
                        x(function (b) {
                            var d = c.sb[b],
                                e = d.Ma,
                                f = d.Xg,
                                g = d.Vc;
                            d.Mb && (c.sb[b].Mb = !1, f.apply(void 0, g), la(c.l,
                                e))
                        }, ea(this.sb))
                    };
                    return a
                }(),
                ut = function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Xf = [];
                        d.Ae = {
                            x: 0,
                            y: 0
                        };
                        d.za = new Me(b);
                        d.Dc = d.L.H(d.Dc, "o");
                        d.ga.push([
                            ["scroll"], d.ai
                        ]);
                        return d
                    }
                    Ha(c, a);
                    c.prototype.start = function () {
                        a.prototype.start.call(this);
                        this.G.R("event", {
                            x: Math.max(this.l.scrollX, 0),
                            y: Math.max(this.l.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        this.za.flush()
                    };
                    c.prototype.ai = function (b) {
                        if (this.G.fb().ff()) this.Dc(b);
                        else {
                            var d =
                                b.target,
                                e = ia(function (f) {
                                    return f[0] === d
                                }, this.Xf).pop();
                            e ? e = e[1] : (e = this.za.$b(I(this.Dc, this), 100, {
                                Qe: !0
                            }), this.Xf.push([d, e]));
                            e(b)
                        }
                    };
                    c.prototype.Dc = function (b) {
                        var d = this.G.fb().vd();
                        b = b.target;
                        var e = this.Eb(b);
                        d = d === b || this.l === b || this.l.document === b;
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Ae.x === f && this.Ae.y === e) return;
                            this.Ae = {
                                x: f,
                                y: e
                            }
                        }
                        this.G.R("event", {
                            x: f,
                            y: e,
                            page: d,
                            target: d ? -1 : this.V(b)
                        }, "scroll")
                    };
                    c.prototype.Eb = function (b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window ===
                            b) return {
                                top: b.scrollY || 0,
                                left: b.scrollX || 0
                            };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || (b = this.G.fb().vd(), b) ? G(b, [f, h]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop || 0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }(ab),
                vt = ["mousemove", "mousedown", "mouseup", "click"],
                wt = function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ga.push([vt, d.Xh]);
                        d.za = new Me(b);
                        d.yc = d.L.H(d.yc, "n");
                        d.Ai = d.L.H(d.za.$b(I(d.yc, d), 100), "t");
                        return d
                    }
                    Ha(c, a);
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        this.za.flush()
                    };
                    c.prototype.Xh = function (b) {
                        var d = null;
                        try {
                            d = b.type
                        } catch (e) {
                            return
                        }
                        "mousemove" === d ? this.Ai(b) : this.yc(b)
                    };
                    c.prototype.yc = function (b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 === e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.G.R("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.V(b)
                        }, d)
                    };
                    return c
                }(ab),
                xt = ["focus", "blur"],
                yt = function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ga.push([xt,
                            b.Yg
                        ]);
                        return b
                    }
                    Ha(c, a);
                    c.prototype.Yg = function (b) {
                        var d = b.target;
                        b = b.type;
                        this.G.R("event", {
                            target: this.V(d === this.l ? this.l.document.documentElement : d)
                        }, b)
                    };
                    return c
                }(ab),
                zt = u(function (a) {
                    var c = xa(a.getSelection, "getSelection");
                    return c ? I(c, a) : F
                }),
                At = w(zt, va),
                Bt = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                Ct = /text|search|password|tel|url/,
                Dt = function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Cd = !1;
                        b.ga.push([Bt, b.xh]);
                        return b
                    }
                    Ha(c, a);
                    c.prototype.xh = function (b) {
                        var d = this.G,
                            e = b.type,
                            f = b.which;
                        b = b.target;
                        if ("mousemove" !== e || 1 === f) (e = "select" === e ? this.ph(b) : this.nh()) && e.start !== e.end ? (this.Cd = !0, d.R("event", e, "selection")) : this.Cd && (this.Cd = !1, d.R("event", {
                            start: 0,
                            end: 0
                        }, "selection"))
                    };
                    c.prototype.nh = function () {
                        var b = At(this.l);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.l.document.createRange();
                            var d = this.V(b.startContainer),
                                e = this.V(b.endContainer);
                            if (!Y(d) && !Y(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                startNode: d,
                                endNode: e
                            }
                        }
                    };
                    c.prototype.ph = function (b) {
                        if (Ct.test(b.type ||
                            "")) {
                            var d = this.V(b);
                            if (!Y(d)) return {
                                start: b.selectionStart,
                                end: b.selectionEnd,
                                target: d
                            }
                        }
                    };
                    return c
                }(ab),
                hl = {
                    focus: "windowfocus",
                    blur: "windowblur",
                    lj: "windowfocus",
                    kj: "windowblur"
                },
                Et = function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        Y(b.l.document.hidden) ? Y(b.l.document.msHidden) ? Y(b.l.document.webkitHidden) || (b.visibility = {
                            hidden: "webkitHidden",
                            event: "webkitvisibilitychange"
                        }) : b.visibility = {
                            hidden: "msHidden",
                            event: "msvisibilitychange"
                        } : b.visibility = {
                            hidden: "hidden",
                            event: "visibilitychange"
                        };
                        b.yd = b.L.H(b.yd, "fbe");
                        b.Ad = b.L.H(b.Ad, "she");
                        return b
                    }
                    Ha(c, a);
                    c.prototype.start = function () {
                        this.mb = [this.Pa.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], I(this.yd, this))];
                        "onpagehide" in this.l && this.mb.push(this.Pa.F(this.l, ["pageshow", "pagehide"], I(this.Ad, this), null))
                    };
                    c.prototype.Ad = function (b) {
                        this.G.R("event", {}, hl[b.type])
                    };
                    c.prototype.yd = function (b) {
                        this.G.R("event", {}, hl[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                    };
                    return c
                }(ab),
                Ft = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                Gt = function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Qc = {};
                        d.scrolling = !1;
                        d.Hf = 0;
                        d.ga.push([
                            ["scroll"], d.ni, d.l.document
                        ]);
                        d.ga.push([Ft, d.Ci, d.l.document]);
                        d.za = new Me(b);
                        d.Hb = d.L.H(d.Hb, "nh");
                        d.Bi = d.L.H(d.za.$b(d.Hb, d.G.fb().ff() ? 0 : 50, {
                            Qe: !0
                        }), "th");
                        return d
                    }
                    Ha(c, a);
                    c.prototype.ni = function () {
                        var b = this;
                        this.scrolling = !0;
                        la(this.l, this.Hf);
                        this.Hf = R(this.l, function () {
                            b.scrolling = !1
                        }, 150)
                    };
                    c.prototype.Ci = function (b) {
                        var d =
                            this,
                            e = "touchcancel" === b.type || "touchend" === b.type;
                        b.changedTouches && 0 < b.changedTouches.length && x(function (f) {
                            var g = d.rh(f);
                            f.__ym_touch_id = g;
                            e && delete d.Qc[f.identifier]
                        }, La(b.changedTouches));
                        "touchmove" === b.type ? this.scrolling ? this.Hb(b) : this.Bi(b, this.G.stamp()) : this.Hb(b)
                    };
                    c.prototype.rh = function (b) {
                        this.Qc[b.identifier] || (this.Qc[b.identifier] = Kh());
                        return this.Qc[b.identifier]
                    };
                    c.prototype.Hb = function (b, d) {
                        void 0 === d && (d = this.G.stamp());
                        var e = b.type,
                            f = A(function (g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, La(b.changedTouches));
                        0 < f.length && this.G.R("event", {
                            touches: f,
                            target: this.V(b.target)
                        }, e, d)
                    };
                    return c
                }(ab),
                Ht = function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ga.push([
                            ["load"], b.Wh, b.l.document
                        ]);
                        return b
                    }
                    Ha(c, a);
                    c.prototype.Wh = function (b) {
                        b = b.target;
                        "IMG" === Ga(b) && b.getAttribute("srcset") && this.G.R("mutation", {
                            target: this.V(b),
                            attributes: {
                                src: b.currentSrc
                            }
                        }, "ac")
                    };
                    return c
                }(ab),
                It = function (a) {
                    function c(b, d, e) {
                        d = a.call(this,
                            b, d, e) || this;
                        d.fg = 1;
                        d.za = new Me(b);
                        d.Vb = d.L.H(d.Vb, "z");
                        return d
                    }
                    Ha(c, a);
                    c.prototype.start = function () {
                        if (this.cf()) {
                            a.prototype.start.call(this);
                            this.Vb();
                            var b = this.Pa.F(n(this.l, "visualViewport"), ["resize"], this.za.$b(this.Vb, 10));
                            this.mb.push(b)
                        }
                    };
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        this.za.flush()
                    };
                    c.prototype.Vb = function () {
                        var b = this.cf();
                        b && b !== this.fg && (this.fg = b, this.ri(b))
                    };
                    c.prototype.cf = function () {
                        var b = Tf(this.l);
                        return b ? b[2] : null
                    };
                    c.prototype.ri = function (b) {
                        var d =
                            Df(this.l);
                        this.G.R("event", {
                            x: d.x,
                            y: d.y,
                            level: b
                        }, "zoom")
                    };
                    return c
                }(ab),
                Jd, Ne = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                il = {
                    "super": 1,
                    Yi: 2,
                    alt: 3,
                    shift: 4,
                    sj: 5,
                    "delete": 6,
                    Wi: 6
                },
                Jt = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                jl = (Jd = {}, Jd["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, Jd["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                },
                    Jd.Qh = {
                        32: "SPACEBAR",
                        37: "&larr;",
                        38: "&uarr;",
                        39: "&rarr;",
                        40: "&darr;",
                        13: "Enter"
                    }, Jd),
                Kt = /flash/,
                Lt = /ym-disable-keys/,
                Mt = /^&#/,
                Nt = function (a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ib = {};
                        d.Ja = 0;
                        d.Ba = [];
                        d.Vf = [];
                        d.dc = 0;
                        d.zf = 0;
                        d.ga.push([
                            ["keydown"], d.th
                        ]);
                        d.ga.push([
                            ["keyup"], d.uh
                        ]);
                        d.og = -1 !== dc(n(b, "navigator.appVersion") || "", "Mac") ? "1" : "2";
                        d.wc = d.L.H(d.wc, "v");
                        d.ld = d.L.H(d.ld, "ec");
                        d.Lc = d.L.H(d.Lc, "sk");
                        d.sd = d.L.H(d.sd, "gk");
                        d.le = d.L.H(d.le, "sc");
                        d.Ub = d.L.H(d.Ub, "cc");
                        d.reset = d.L.H(d.reset,
                            "r");
                        d.Ic = d.L.H(d.Ic, "rs");
                        return d
                    }
                    Ha(c, a);
                    c.prototype.th = function (b) {
                        if (this.wc(b) && !this.Jh(b)) {
                            var d = b.keyCode;
                            b.repeat || this.ib[d] || (this.ib[b.keyCode] = !0, Ne[b.keyCode] && !this.Ja ? (this.Ja += 1, this.le(b), this.reset(300)) : this.Ja ? (this.xg(), this.ae(b), this.ld()) : (this.reset(), this.ae(b)))
                        }
                    };
                    c.prototype.uh = function (b) {
                        if (this.wc(b)) {
                            var d = b.keyCode,
                                e = Ne[b.keyCode];
                            this.ib[b.keyCode] && (this.ib[d] = !1);
                            e && this.Ja && (this.Ja = 0, this.ib = {});
                            1 === this.Ba.length && (b = this.Ba[0], G(b.keyCode, Jt) && (this.Lc([b], !0), this.reset()));
                            this.Ba = ia(w(V("keyCode"), za(d), xc), this.Ba);
                            la(this.l, this.dc)
                        }
                    };
                    c.prototype.wc = function (b) {
                        var d = this.l.document.activeElement;
                        d = d && "OBJECT" === d.nodeName && Kt.test(d.getAttribute("type") || "");
                        b = b.target;
                        if (!b) return !d;
                        b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && Lt.test(b.className);
                        return !d && !b
                    };
                    c.prototype.ld = function () {
                        this.Vf = this.Ba.slice(0);
                        la(this.l, this.dc);
                        this.dc = R(this.l, v(this.Vf, I(this.Lc, this)), 0, "e.c")
                    };
                    c.prototype.Lc = function (b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.sd(b);
                            this.G.R("event", {
                                keystrokes: e
                            }, "keystroke")
                        }
                    };
                    c.prototype.sd = function (b) {
                        var d = this;
                        b = A(function (e) {
                            e = e.keyCode;
                            var f = Ne[e],
                                g = d.kh(e);
                            return {
                                id: e,
                                key: g,
                                isMeta: !!f && Mt.test(g),
                                modifier: f
                            }
                        }, b);
                        return yf(function (e, f) {
                            return (il[e.modifier] || 100) - (il[f.modifier] || 100)
                        }, b)
                    };
                    c.prototype.kh = function (b) {
                        return jl[this.og][b] || jl.Qh[b] || String.fromCharCode(b)
                    };
                    c.prototype.ae = function (b) {
                        G(b, this.Ba) || this.Ba.push(b)
                    };
                    c.prototype.le = function (b) {
                        this.ae(b);
                        this.Ub()
                    };
                    c.prototype.Ub = function () {
                        this.Ja ? R(this.l, this.Ub, 100) : this.Ba = []
                    };
                    c.prototype.xg = function () {
                        la(this.l, this.zf)
                    };
                    c.prototype.reset = function (b) {
                        b ? this.zf = R(this.l, I(this.Ic, this), b) : this.Ic()
                    };
                    c.prototype.Ic = function () {
                        this.Ja = 0;
                        this.Ba = [];
                        this.ib = {};
                        la(this.l, this.dc)
                    };
                    c.prototype.Jh = function (b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === Ne[b.keyCode] : !1
                    };
                    return c
                }(ab),
                cn = ["sr", "sd", "\u043d"],
                Ot = /allow-same-origin/,
                Pt = function (a) {
                    function c(b, d, e) {
                        d = a.call(this,
                            b, d, e) || this;
                        d.Pb = [];
                        d.od = {};
                        d.Sd = d.L.H(d.Sd, "fi");
                        d.Td = d.L.H(d.Td, "sd");
                        d.Ud = d.L.H(d.Ud, "src");
                        d.xa = new b.MutationObserver(d.Ud);
                        return d
                    }
                    Ha(c, a);
                    c.prototype.start = function () {
                        a.prototype.start.call(this);
                        this.G.Db().Wb && this.G.qa().F("iframe", "NA:", I(this.Sd, this));
                        this.G.Ze().qd().F(["sdr"], I(this.Td, this))
                    };
                    c.prototype.stop = function () {
                        a.prototype.stop.call(this);
                        x(function (b) {
                            b.G.stop()
                        }, this.Pb)
                    };
                    c.prototype.Ud = function (b) {
                        var d = b.pop().target;
                        if (b = Gb(function (f) {
                            return f.ef === d
                        }, this.Pb)) {
                            this.Pb =
                                ia(function (f) {
                                    return f.ef !== d
                                }, this.Pb);
                            var e = b.G.rd();
                            try {
                                b.G.stop()
                            } catch (f) { }
                            this.Zb(d, e)
                        }
                    };
                    c.prototype.Sd = function (b) {
                        if (b) {
                            var d = b.data.node;
                            this.xa.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            });
                            this.Zb(d, b.data.id)
                        }
                    };
                    c.prototype.Zb = function (b, d) {
                        var e = this;
                        this.Hh(b) && nc(this.l, b)(Wa(F, function () {
                            var f = e.G.Zb(b.contentWindow, d);
                            e.Pb.push({
                                G: f,
                                ef: b
                            })
                        }))
                    };
                    c.prototype.Td = function (b) {
                        var d = this,
                            e = b.frameId;
                        b = b.data;
                        this.od[e] || (this.od[e] = {
                            data: []
                        });
                        var f = this.od[e];
                        f.data = f.data.concat(b);
                        this.l.isNaN(f.hd) && x(function (g) {
                            "page" === g.type && (f.hd = g.data.recordStamp - d.G.$e())
                        }, f.data);
                        this.l.isNaN(f.hd) || (this.G.ba(A(function (g) {
                            g.stamp += f.hd;
                            g.stamp = d.l.Math.max(0, g.stamp);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.Hh = function (b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") || e && !e.match(Ot) || d && "about:blank" !== d && (d = Ic(this.l, d).host) && S(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
                    };
                    return c
                }(ab),
                Qt = u(function (a) {
                    var c = n(a, "sessionStorage");
                    if (!c) return null;
                    try {
                        var b = c.getItem("__ym_tab_guid");
                        c = !1;
                        var d = n(a, "opener.sessionStorage");
                        try {
                            c = !!d && b === d.getItem("__ym_tab_guid")
                        } catch (e) {
                            c = !0
                        }
                        if (!b || c) b = Kh(), a.sessionStorage.setItem("__ym_tab_guid", b);
                        return b
                    } catch (e) {
                        return null
                    }
                }),
                Rt = function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ee = b.L.H(b.ee, "ps");
                        return b
                    }
                    Ha(c, a);
                    c.prototype.start = function () {
                        this.G.qa().qc({
                            nodes: [this.l.document.documentElement],
                            Mc: this.ee
                        })
                    };
                    c.prototype.ee = function (b) {
                        var d = this.G.mh(),
                            e = d.dh(),
                            f = S(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = vd(this.l),
                            l = k[0];
                        k = k[1];
                        this.G.R("page", {
                            content: A(function (m) {
                                m.node = void 0;
                                return m
                            }, b),
                            base: e || "",
                            hasBase: !!e,
                            viewport: {
                                width: l,
                                height: k
                            },
                            title: this.l.document.title,
                            doctype: d.fh() || "",
                            address: this.l.location.href,
                            ua: this.l.navigator.userAgent,
                            referrer: this.l.document.referrer,
                            screen: {
                                width: this.l.screen.width,
                                height: this.l.screen.height
                            },
                            location: {
                                host: g,
                                protocol: h,
                                path: f
                            },
                            recordStamp: this.G.$e(),
                            tabId: Qt(this.l)
                        }, "page", 0)
                    };
                    return c
                }(ab),
                St = ["addRule",
                    "removeRule", "insertRule", "deleteRule"
                ],
                Tg = [
                    [function (a) {
                        function c(b, d, e) {
                            b = a.call(this, b, d, e) || this;
                            b.Za = {};
                            b.Qb = {};
                            b.Fe = 0;
                            b.Bc = b.L.H(b.Bc, "a");
                            b.rb = b.L.H(b.rb, "sr");
                            b.Cc = b.L.H(b.Cc, "r");
                            b.ba = b.L.H(b.ba, "d");
                            return b
                        }
                        Ha(c, a);
                        c.prototype.start = function () {
                            var b = this.G.qa();
                            b.F("style", "NA:", this.Bc);
                            b.F("style", "NR:", this.Cc);
                            this.ba()
                        };
                        c.prototype.stop = function () {
                            var b = this;
                            a.prototype.stop.call(this);
                            var d = this.G.qa();
                            d.ea("style", "NA:", this.Bc);
                            d.ea("style", "NR:", this.Cc);
                            this.ba();
                            la(this.l, this.Fe);
                            x(function (e) {
                                b.Za[e].sheet && b.Df(b.Za[e].sheet)
                            }, ea(this.Za));
                            this.Za = {}
                        };
                        c.prototype.ba = function () {
                            var b = this;
                            x(function (d) {
                                var e = d[0];
                                d = d[1];
                                if (d.length) {
                                    for (var f = [], g = d[0].stamp, h = [], k = 0; k < d.length; k += 1) {
                                        var l = d[k],
                                            m = l.stamp;
                                        delete l.stamp;
                                        m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l])
                                    }
                                    f.length && h.push(f);
                                    h.length && x(function (p) {
                                        b.G.R("event", {
                                            target: Fa(e),
                                            changes: p
                                        }, "stylechange", g)
                                    }, h);
                                    delete b.Qb[e]
                                }
                            }, Ba(this.Qb));
                            this.Fe = R(this.l, this.ba, 100)
                        };
                        c.prototype.rb = function (b, d, e, f, g) {
                            void 0 === f && (f = "");
                            void 0 === g && (g = -1);
                            this.Qb[b] || (this.Qb[b] = []);
                            this.Qb[b].push({
                                op: d,
                                style: f,
                                index: g,
                                stamp: e
                            })
                        };
                        c.prototype.ei = function (b, d) {
                            var e = this,
                                f = b.addRule,
                                g = b.removeRule,
                                h = b.insertRule,
                                k = b.deleteRule;
                            T(f) && (b.addRule = function (l, m, p) {
                                e.rb(d, "a", e.G.stamp(), l + "{" + m + "}", p);
                                return f.call(b, l, m, p)
                            });
                            T(g) && (b.removeRule = function (l) {
                                e.rb(d, "r", e.G.stamp(), "", l);
                                return g.call(b, l)
                            });
                            T(h) && (b.insertRule = function (l, m) {
                                e.rb(d, "a", e.G.stamp(), l, m);
                                return h.call(b, l, m)
                            });
                            T(k) && (b.deleteRule = function (l) {
                                e.rb(d, "r", e.G.stamp(),
                                    "", l);
                                return k.call(b, l)
                            })
                        };
                        c.prototype.Df = function (b) {
                            var d = this;
                            x(function (e) {
                                var f = d.l.CSSStyleSheet.prototype[e];
                                T(f) && (b[e] = I(f, b))
                            }, St)
                        };
                        c.prototype.Rg = function (b) {
                            try {
                                return b.cssRules || b.rules
                            } catch (d) {
                                return null
                            }
                        };
                        c.prototype.Bc = function (b) {
                            var d = b.data;
                            b = d.id;
                            d = d.node;
                            if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                var e = d.sheet,
                                    f = this.Rg(e);
                                if (f && f.length) {
                                    for (var g = [], h = 0; h < f.length; h += 1) g.push({
                                        style: f[h].cssText,
                                        index: h,
                                        op: "a"
                                    });
                                    this.G.R("event", {
                                        changes: g,
                                        target: b
                                    }, "stylechange")
                                }
                                this.ei(e,
                                    b);
                                this.Za[b] = d
                            }
                        };
                        c.prototype.Cc = function (b) {
                            b = b.data.id;
                            var d = this.Za[b];
                            d && (delete this.Za[b], d.sheet && this.Df(d.sheet))
                        };
                        return c
                    }(ab), "ss"],
                    [st, "in"],
                    [pt, "mu"],
                    [tt, "r"],
                    [ut, "sc"],
                    [wt, "mo"],
                    [yt, "f"],
                    [Dt, "se"],
                    [Et, "wf"],
                    [Gt, "t"],
                    [Ht, "src"],
                    [It, "z"],
                    [Nt, "ks"]
                ];
            Tg.push([Pt, "if"]);
            Tg.push([Rt, "pa"]);
            var Tt = u(function (a) {
                var c = a.document;
                return {
                    vd: function () {
                        if (c.scrollingElement) return c.scrollingElement;
                        var b = 0 === kb(c.compatMode, "CSS1") ? c.documentElement : c.body;
                        return n(c, "documentElement.scrollHeight") >=
                            n(c, "body.scrollHeight") ? b : null
                    },
                    lh: function () {
                        var b = a.screen;
                        if (!b) return 0;
                        var d = Gb(v(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                        return n(b, d + ".angle") || 0
                    },
                    hj: v(a, qb),
                    ff: v(a, he),
                    gj: v(a, tg)
                }
            }),
                Ut = function () {
                    function a(c, b) {
                        var d = this;
                        this.Gb = 0;
                        this.gd = [];
                        this.Fb = null;
                        this.sa = this.Rb = this.Tf = !1;
                        this.recordStamp = 0;
                        this.stopped = !1;
                        this.mh = function () {
                            return d.page
                        };
                        this.rd = function () {
                            return d.Gb
                        };
                        this.$e = function () {
                            return d.recordStamp
                        };
                        this.jh = function () {
                            return d.Pa
                        };
                        this.Ze = function () {
                            return d.Fb
                        };
                        this.qa = function () {
                            return d.Dd
                        };
                        this.stamp = function () {
                            return d.pe ? d.l.Math.max(d.pe(da) - d.recordStamp, 0) : 0
                        };
                        this.Db = function () {
                            return d.options
                        };
                        this.fb = function () {
                            return d.ug
                        };
                        this.R = function (f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            f = d.ih(f, g, h, k);
                            d.ba(f)
                        };
                        this.ih = function (f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            return {
                                type: f,
                                data: g,
                                stamp: k,
                                frameId: d.Gb,
                                event: h
                            }
                        };
                        this.ba = function (f) {
                            f = N(f) ? f : [f];
                            d.Tf && !d.Rb ? d.sa ? (f = A(function (g) {
                                return g.frameId ? g : C(g, {
                                    frameId: d.Gb
                                })
                            }, f), d.Ze().Lf(f)) : d.Nb(f) : d.gd = d.gd.concat(f)
                        };
                        this.l = c;
                        var e = of(c, this, "R");
                        this.me = e.H(this.me, "s");
                        this.ba = e.H(this.ba, "sd");
                        e = H(c);
                        e.C("wv2e") && Kd();
                        e.D("wv2e", !0);
                        this.options = b;
                        this.Pa = ka(c);
                        this.Dd = new qt(this.l, b);
                        this.ug = Tt(c);
                        this.He = A(function (f) {
                            return new f[0](c, d, f[1])
                        }, Tg);
                        this.Eh();
                        this.page = an(this.l);
                        this.me()
                    }
                    a.prototype.start = function (c) {
                        this.Tf = !0;
                        this.Nb = c;
                        this.If()
                    };
                    a.prototype.stop = function () {
                        this.stopped || (this.stopped = !0, Sg(this.l) && (x(function (c) {
                            return c.stop()
                        }, this.He), this.Dd.stop(), this.Fb && this.Fb.stop(), this.sa ||
                            this.R("event", {}, "eof")))
                    };
                    a.prototype.Zb = function (c, b) {
                        var d = new a(c, C({}, this.options, {
                            frameId: b
                        }));
                        d.start(F);
                        return d
                    };
                    a.prototype.Eh = function () {
                        var c = this;
                        this.sa = !!this.options.frameId;
                        this.Gb = this.options.frameId || 0;
                        this.Rb = !this.sa;
                        var b = this.options.ag || [];
                        b.push(S(this.l).host);
                        this.Fb = bn(this.l, this, b);
                        b = this.Fb.qd();
                        qb(this.l) ? this.Rb && b.F(["i"], function (d) {
                            c.sa = d.sa;
                            c.Rb = !1;
                            d.frameId && (c.Gb = d.frameId);
                            c.If()
                        }) : this.Rb = this.sa = !1
                    };
                    a.prototype.If = function () {
                        var c = Ge(this.gd);
                        this.ba(c)
                    };
                    a.prototype.me = function () {
                        this.pe = Kf(this.l);
                        this.recordStamp = this.pe(da);
                        x(function (c) {
                            c.start()
                        }, this.He);
                        this.Dd.start()
                    };
                    return a
                }(),
                Vt = function () {
                    return function (a, c, b) {
                        var d = this;
                        this.Xc = this.Ib = !1;
                        this.Ua = [];
                        this.nf = [];
                        this.Le = [];
                        this.send = function (e, f, g) {
                            e = d.sender(e, d.Hg);
                            f && g && e.then(f, g);
                            return e
                        };
                        this.oe = function (e, f, g) {
                            return new K(function (h, k) {
                                e.push([f, h, k, g])
                            })
                        };
                        this.yh = function () {
                            d.Ua = yf(function (g, h) {
                                return g[3].partNum - h[3].partNum
                            }, d.Ua);
                            var e = P(function (g, h, k) {
                                h = h[3];
                                return g &&
                                    k + 1 === h.partNum
                            }, !0, d.Ua),
                                f = !!d.Ua[d.Ua.length - 1][3].end;
                            return e && f
                        };
                        this.md = function (e) {
                            ah(d.l, e.slice(), function (f) {
                                d.send(f[0], f[1], f[2])
                            }, 20, "s.w2.sf.fes");
                            Ge(e)
                        };
                        this.Wg = function () {
                            d.Xc || (d.Xc = !0, d.md(d.nf), d.md(d.Le))
                        };
                        this.Ag = function (e) {
                            return P(function (f, g) {
                                var h = "page" === g.type && !g.frameId,
                                    k = "eof" === g.data.type || "eof" === g.event,
                                    l = h && !!g.partNum;
                                return {
                                    cd: f.cd || l,
                                    bd: f.bd || h,
                                    $c: f.$c || k
                                }
                            }, {
                                bd: !1,
                                $c: !1,
                                cd: !1
                            }, e)
                        };
                        this.vh = function (e, f, g) {
                            g ? (e = d.oe(d.Ua, e, f[0]), d.yh() && (d.md(d.Ua), d.Ib = !0)) :
                                (d.Ib = !0, e = d.send(e));
                            return e
                        };
                        this.af = function (e, f, g) {
                            var h;
                            f = {
                                J: (h = {}, h["wv-part"] = "" + g, h["wv-type"] = d.ti, h),
                                K: Ca(),
                                X: {
                                    aa: f
                                }
                            };
                            e && f.K.D("bt", 1);
                            return f
                        };
                        this.Pg = function (e, f, g) {
                            e = d.af(!1, e, g);
                            return d.Ib ? d.send(e) : d.oe(d.Le, e, f)
                        };
                        this.Rh = function (e, f, g) {
                            e = d.af(!0, e, g);
                            if (d.Ib) return d.send(e);
                            var h = d.Ag(f);
                            g = h.bd;
                            var k = h.$c;
                            h = h.cd;
                            var l;
                            g && (l = d.vh(e, f, h));
                            d.Xc ? g || (l = d.send(e)) : (g || (l = d.oe(d.nf, e, f)), (d.Ib || k) && d.Wg());
                            return l
                        };
                        this.l = a;
                        this.ti = b;
                        this.sender = oa(a, "W", c);
                        this.Hg = c
                    }
                }(),
                kl = u(function (a) {
                    var c =
                        H(a),
                        b = c.C("isEU");
                    if (Y(b)) {
                        var d = Fa(fe(a, "is_gdpr") || "");
                        if (G(d, [0, 1])) c.D("isEU", d), b = !!d;
                        else if (a = Ua(a).C("wasSynced"), a = n(a, "params.eu")) c.D("isEU", a), b = !!a
                    }
                    return b
                }, function (a) {
                    return H(a).C("isEU")
                }),
                jf = B("i.e", kl),
                Wt = B("i.ep", function (a) {
                    kl(a)
                }),
                Xt = B("w2", function (a, c) {
                    function b() {
                        h = !0
                    }
                    var d = H(a),
                        e = J(c);
                    if (!c.vb || Xd(a) || !a.MutationObserver || !Na("Element", a.Element)) return F;
                    Na("MutationObserver", a.MutationObserver) || ic(a, e).warn("w2mo");
                    var f = Aa(function (k, l) {
                        na(c, l)["catch"](k)
                    }),
                        g = nc(a)(xg(E([a,
                            c
                        ], Zm)))(Fk(function (k) {
                            return new Ut(a, k)
                        })),
                        h = !1;
                    oq([g, f])(Wa(z(a, "wv2.R.c"), function (k) {
                        var l = k[0];
                        k = k[1];
                        if (!h) {
                            b = I(l.stop, l);
                            var m = d.C("wv2Counter");
                            if (!Mh(a, k) || m) b();
                            else if (d.D("wv2Counter", e), d.D("stopRecorder", b), k = Yh(a, "7", "6")) {
                                m = new Vt(a, c, k.type);
                                var p = gl.We(e, "m", I(m.Rh, m), k, a),
                                    q = gl.We(e, "e", I(m.Pg, m), k, a);
                                "onpagehide" in a ? ka(a).F(a, ["pagehide"], function (t) {
                                    t.persisted ? (p.flush(!0), q.flush(!0)) : b()
                                }, null) : ka(a).F(a, ["beforeunload", "unload"], b);
                                k = $m();
                                m = k.Uh;
                                q.F("ag", k.rg);
                                q.F("p", m);
                                p.F("see", function (t) {
                                    var y = !1;
                                    x(function (D) {
                                        "page" === D.type && (y = !0)
                                    }, t);
                                    y && (h || q.push({
                                        type: "event",
                                        event: "fatalError",
                                        data: {
                                            code: "invalid-snapshot",
                                            Qg: "p.s.f",
                                            stack: ""
                                        }
                                    }), b())
                                });
                                var r = Oc(function (t) {
                                    "eof" === n(t, "data.type") || "eof" === t.event ? (q.push(t), p.push(t), q.flush(!0), p.flush(!0)) : ("event" === t.type ? q : p).push(t)
                                });
                                R(a, b, 864E5);
                                Nb(a, function () {
                                    var t, y;
                                    mb(a, (t = {}, t.counterKey = e, t.name = "webvisor", t.data = (y = {}, y.version = 2, y), t));
                                    l.start(r)
                                })
                            }
                        }
                    }));
                    return function () {
                        return b()
                    }
                }),
                Yt = B("w2.cs", function (a,
                    c) {
                    var b, d = J(c);
                    Hf(a, d, (b = {}, b.webvisor = !!c.vb, b))
                }),
                Zt = ["rt", "mf"],
                hf = u(Ac, J),
                Gh = w(bd, pc),
                $t = ob("isp", function (a, c) {
                    na(c, function (b) {
                        var d = Gb(function (h) {
                            return n(b, "settings." + h)
                        }, Zt);
                        if (d && Cd(a)) {
                            var e = Wd(b) && !Rd(a),
                                f = hf(c);
                            C(f, {
                                Jb: d,
                                status: e ? 3 : 4
                            });
                            if (!e) {
                                e = Vm(a, c, d);
                                var g = function (h) {
                                    f.status = h
                                };
                                return ("mf" === d ? Xm : Wm)(a, c, e).then(v(1, g))["catch"](v(2, g))
                            }
                        }
                    })["catch"](z(a, "l.isp"))
                }),
                ll = B("fbq.o", function (a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function () {
                            var g = Ia(arguments),
                                h = d.apply(void 0,
                                    g);
                            c(g);
                            return h
                        };
                        C(e, d);
                        b && x(c, b);
                        a.fbq = e
                    } else var f = R(a, E([a, c].concat(La(d && d.queue)), ll), 1E3, "fbq.d");
                    return I(la, null, a, f)
                }),
                Wc, Ab, Xc, Ug = (Wc = {}, Wc.add_to_wishlist = "add-to-wishlist", Wc.begin_checkout = "begin-checkout", Wc.generate_lead = "submit-lead", Wc.add_payment_info = "add-payment-info", Wc),
                Vg = (Ab = {}, Ab.AddToCart = "add-to-cart", Ab.Lead = "submit-lead", Ab.InitiateCheckout = "begin-checkout", Ab.Purchase = "purchase", Ab.CompleteRegistration = "register", Ab.Contact = "submit-contact", Ab.AddPaymentInfo = "add-payment-info",
                    Ab.AddToWishlist = "add-to-wishlist", Ab.Subscribe = "subscribe", Ab),
                Tm = (Xc = {}, Xc["1"] = Ug, Xc["2"] = Ug, Xc["3"] = Ug, Xc["0"] = Vg, Xc),
                Um = [Vg.AddToCart, Vg.Purchase],
                au = sa(function (a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && {
                        version: "3",
                        ec: d
                    })) a: {
                        if (N(c) || Ya(c))
                            if (b = Ia(c), d = b[1], "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    ec: d
                                };
                                break a
                            }
                        b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        ec: L(",", ea(b))
                    });
                    b && a(b)
                }),
                bu = B("ag.e", function (a, c) {
                    if ("0" === c.$) {
                        var b = [],
                            d = z(a, "ag.s", E([va, b], x));
                        na(c, function (e) {
                            if (n(e,
                                "settings.auto_goals") && Ea(a, c) && (e = ne(a, c, "autogoal").reachGoal)) {
                                e = E([e, c.kd], Sm);
                                var f = au(e);
                                e = E([a, e], Rm);
                                b.push(ll(a, e));
                                b.push(Di(a, "dataLayer", function (g) {
                                    g.xa.F(f)
                                }))
                            }
                        });
                        return d
                    }
                }),
                cu = /[^\d.,]/g,
                du = /[.,]$/,
                Pm = B("ep.pp", function (a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(cu, "").replace(du, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (G(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(Td(b[0]) + "." + Td(d));
                    d = Math.pow(10,
                        8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                eu = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
                ],
                fu = u(function (a) {
                    return new RegExp(L("|",
                        a), "i")
                }),
                gu = B("ep.cp", function (a) {
                    if (!a) return "643";
                    var c = Lr(a);
                    return (a = Gb(function (b) {
                        return fu(b[0]).test(c)
                    }, eu)) ? a[1] : "643"
                }),
                hu = u(function () {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h + "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = L("", Eh("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")),
                        e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                Mm = B("ep.dec", function (a, c) {
                    if (!c || Xd(a)) return [];
                    var b = Eh(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== ie(b[0])) return [];
                    b = hu();
                    f = L("", f);
                    e = ie(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(ie(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = Eb(a, b);
                    return N(d) ? A(Wq, d) : []
                }),
                Om = B("ep.ent", function (a, c, b) {
                    a = "" + Sa(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Ya(b)) return "";
                    b = Fh("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                ml = w(Dh, gu),
                nl = B("ep.ctp", function (a, c, b, d) {
                    var e = ml(a, b),
                        f = Ch(a, d);
                    Bh(a, c, e, f);
                    Na("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function () {
                        var g = ml(a, b),
                            h = Ch(a, d);
                        if (e !== g || f !== h) e = g, f = h, Bh(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                iu = B("ep.chp", function (a, c, b, d, e) {
                    b && gf(a, c);
                    return d || e ? ka(a).F(a.document, ["click"], z(a, "ep.chp.cl", E([a, c, d, e], Nm))) : F
                }),
                nu = B("ep.i", function (a, c) {
                    if (Ud(a)) return Lm(a, c).then(function (b) {
                        var d = b.Lg,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            q = d[8],
                            r = d[9],
                            t = d[10],
                            y = d[11],
                            D = d[12],
                            O = d[13],
                            M = d[14],
                            qa = d[15];
                        if (!b.isEnabled) return K.resolve(F);
                        var ra = Zd(a, e),
                            Pa = Zd(a, h),
                            Jg = Zd(a, m),
                            ju = Zd(a, q),
                            ku = "" + e + f + g === "" + h + k + l;
                        return new K(function (lu,
                            mu) {
                            nc(a)(Wa(mu, function () {
                                ra && nl(a, c, f, g, t, y, D);
                                Pa && !ku && nl(a, c, k, l, O, M, qa);
                                lu(iu(a, c, Jg || ju, p, r))
                            }))
                        })
                    })
                }),
                ou = B("cc.i", function (a, c) {
                    var b = E([a, c], Km);
                    b = E([a, b, 300, void 0], R);
                    na(c, b)
                }),
                pu = v("9-d5ve+.r%7", U),
                qu = B("ad", function (a, c) {
                    if (!c.Sa) {
                        var b = H(a);
                        if (!b.C("adBlockEnabled")) {
                            var d = function (m) {
                                G(m, ["2", "1"]) && b.D("adBlockEnabled", m)
                            },
                                e = Kc(a),
                                f = e.C("isad");
                            if (f) d(f);
                            else {
                                var g = v("adStatus", b.D),
                                    h = function (m) {
                                        m = m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.D("isad", m, 1200);
                                        return m
                                    },
                                    k = oa(a, "adb", c);
                                if (!b.C("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + pu().replace(/[^a-v]+/g, "") + "t.gif";
                                    Hm(a, function () {
                                        return k({
                                            ia: {
                                                ya: l
                                            }
                                        }).then(v(!1, h))["catch"](v(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                ru = B("pr.p", function (a, c) {
                    var b, d;
                    if (Vf(a)) {
                        var e = oa(a, "5", c),
                            f = Ca((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            K: f,
                            J: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](z(a, "pr.p.s"))
                    }
                }),
                Ah = !1,
                su = B("fid", function (a) {
                    var c, b = F;
                    if (!T(a.PerformanceObserver)) return b;
                    var d = H(a);
                    if (d.C("fido")) return b;
                    d.D("fido", !0);
                    var e = new a.PerformanceObserver(z(a,
                        "fid",
                        function (f) {
                            f = f.getEntries()[0];
                            d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                            b()
                        }));
                    b = function () {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) { }
                    return b
                }),
                tu = B("lt.p", ob("lt.p", function (a) {
                    var c;
                    if (Na("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(z(a, "lt.o", function (e) {
                                e && e.getEntries && (e = e.getEntries(), b = P(function (f, g) {
                                    return f + g.duration
                                }, b, e), zd(a).D("lt", b))
                            }));
                        try {
                            d.observe((c = {}, c.type = "longtask",
                                c.buffered = !0, c))
                        } catch (e) {
                            return
                        }
                        return function () {
                            return d.disconnect()
                        }
                    }
                }));
            v(Ja("ccf"), Ra);
            var Wg = u(function (a, c) {
                var b = H(a),
                    d = Ua(a),
                    e = [],
                    f = E([a, c, b, d], So),
                    g = !Ms(a) || cf(a, 68);
                g && e.push(E([Fm, "pu", ""], f));
                !g || d.Fd || Cd(a) || (e.push(E([Em, "zzlc", "na"], f)), e.push(E([Dm, "cc", ""], f)));
                return e.length ? {
                    ma: function (h, k) {
                        if (0 === b.C("isEU")) try {
                            x(me, e)
                        } catch (l) { }
                        k()
                    },
                    O: function (h, k) {
                        var l = h.K;
                        if (l && 0 === b.C("isEU")) try {
                            x(Aa(l), e)
                        } catch (m) { }
                        k()
                    }
                } : {}
            }, w(db, J)),
                Cm = bb(/[a-z\u0430-\u044f\u0451,.]/gi),
                uu = B("ice",
                    function (a, c, b) {
                        if (c = Ea(a, c))
                            if (b = th(a, b)) return sh(a, c, b), !0
                    }),
                vu = B("ice", function (a, c, b) {
                    if (c = Ea(a, c))
                        if (b = th(a, b)) return Si(a, b.Gh).then(E([a, c, b], sh), z(a, "ice.s")), !0
                }),
                wu = ["text", "email", "tel"],
                xu = ["cc-", "name", "shipping"],
                yu = B("icei", function (a, c) {
                    if (Nk(a)) {
                        var b = !1,
                            d = F,
                            e = F;
                        na(c, function (f) {
                            if (!(jf(a) || n(f, "settings.eu") || b)) {
                                f = n(f, "settings.cf") ? vu : uu;
                                var g = E([a, c], f),
                                    h = function (k) {
                                        return sf(a, k) || !G(k.type, wu) || Va(xb, A(v(k.autocomplete, fb), xu)) ? !1 : !0
                                    };
                                d = wh(a, "input", ["blur"], g, h);
                                e = wh(a, "form", ["submit"], function (k) {
                                    var l = k.target;
                                    if (l) {
                                        l = gb("input", l);
                                        var m = 0;
                                        x(function (p) {
                                            20 <= m || !h(p) || g({
                                                target: p,
                                                isTrusted: k.isTrusted,
                                                Id: !0
                                            }) && (m += 1)
                                        }, l)
                                    }
                                })
                            }
                        });
                        return function () {
                            b = !0;
                            d();
                            e()
                        }
                    }
                }),
                rh, zu = B("p.ai", function (a, c) {
                    if (je(a) || $e(a)) return na(c, function (b) {
                        var d;
                        if (b = n(b, "settings.sbp")) return qh(a, C({}, b, (d = {}, d.c = c.id, d)), 10)
                    })
                }),
                Au = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "),
                ol = ob("uah", function (a) {
                    if (!Na("getHighEntropyValues", n(a, "navigator.userAgentData.getHighEntropyValues"))) return K.reject("0");
                    try {
                        return a.navigator.userAgentData.getHighEntropyValues(Au).then(function (c) {
                            if (!ha(c)) throw "2";
                            return c
                        }, function () {
                            throw "1";
                        })
                    } catch (c) {
                        return K.reject("3")
                    }
                }),
                pl = new RegExp(L("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")),
                um = u(function (a) {
                    var c = ub(a);
                    return (c =
                        pl.test(c)) ? K.resolve(c) : ol(a).then(function (b) {
                            try {
                                return P(function (d, e) {
                                    return d || pl.test(e.brand)
                                }, !1, b.brands)
                            } catch (d) {
                                return !1
                            }
                        }, v(!1, U))
                }),
                mc = ["0", "1", "2", "3"],
                Fc = mc[0],
                Ze = mc[1],
                Bu = mc[2],
                ql = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"],
                oh = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(ql),
                Xe = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(ql).concat(["28",
                    "29", "30", "31"
                ]),
                Cu = "3 13 14 31 15 16 17 28".split(" "),
                Qd = w(Oc(V("ymetrikaEvent.type")), ur(lc(Xe))),
                Du = {
                    Nh: !0,
                    url: "https://yastatic.net/s3/gdpr/v3/gdpr",
                    tf: "",
                    kf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
                },
                xm = ob("gdpr", function (a, c, b, d, e) {
                    function f(p) {
                        c("10");
                        b.F(oh, function (q) {
                            var r;
                            q = q.type;
                            l.Of((r = {}, r.type = q, r));
                            p({
                                value: ph(q)
                            })
                        })
                    }
                    var g = void 0 === e ? Du : e;
                    e = g.url;
                    var h = g.tf,
                        k = g.Nh;
                    g = Bm(a, g.kf, d.Pi);
                    var l = Sd(a, d);
                    if (!l) return K.resolve({
                        value: Fc,
                        Hd: !0
                    });
                    if (a._yaGdprLoaded) return new K(function (p) {
                        c("7");
                        f(p)
                    });
                    var m = Ec(a, {
                        src: "" + e + (k ? "" : g) + h + ".js"
                    });
                    return new K(function (p, q) {
                        m ? (c("7"), m.onerror = function () {
                            var r;
                            c("9");
                            l.Of((r = {}, r.type = "GDPR-ok-view-default", r));
                            p(null)
                        }, m.onload = v(p, f)) : (c("9"), q(Ja("gdp.e")))
                    })
                }),
                Xb, Am = (Xb = {}, Xb["GDPR-ok"] = "ok", Xb["GDPR-ok-view-default"] = "ok-default", Xb["GDPR-ok-view-detailed"] = "ok-detailed", Xb["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Xb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Xb["GDPR-ok-view-detailed-2"] =
                    "ok-detailed-tech-analytics", Xb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", Xb),
                sm = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "),
                nh = [],
                kh = cb("push", nh),
                rm = u(function (a, c) {
                    var b = c.C("gdpr");
                    return G(b, mc) ? "-" + b : ""
                }),
                Xg = u(ld),
                Eu = u(function () {
                    var a = P(function (c, b) {
                        "ru" !== b && (c[b] = Mg + "." + b);
                        return c
                    }, {}, eg);
                    x(function (c) {
                        a[c] = c
                    }, ea(Tk));
                    a.com = Mg + ".com";
                    return a
                }),
                im = u(function (a) {
                    a = S(a).hostname;
                    return (a = Gb(w(V("1"), tr("test"), nb(va)(a)), Ba(Tk))) &&
                        a[0]
                }),
                rl = function (a, c) {
                    return function (b, d) {
                        var e = J(d);
                        e = Eu(e);
                        var f = gm(b, e),
                            g = H(b),
                            h = qb(b);
                        return Cd(b) || Fe(b) ? {} : {
                            O: function (k, l) {
                                var m = k.K;
                                m = !(m && m.C("pv"));
                                if (h || m || !f.length) return l();
                                g.C("startSync") ? Xg(b).push(l) : (g.D("startSync", !0), E([b, f, F, !1], a)().then(l, w(Lc(l), z(b, c)))["catch"](F))
                            },
                            ma: function (k, l) {
                                if (!n(k.Cf, "settings.nss")) return l();
                                var m = k.K;
                                m = !(m && m.C("pv"));
                                if (h || m || !f.length) return l();
                                if (g.C("startSync")) Xg(b).push(l);
                                else return g.D("startSync", !0), a(b, f, F, !0).then(l, w(Lc(l),
                                    z(b, c)))
                            }
                        }
                    }
                }(function (a, c, b, d) {
                    var e = ja(a),
                        f = H(a),
                        g = Ua(a);
                    b = Fg(a, "c");
                    var h = Kb(a, b);
                    return sb(function (k, l) {
                        function m() {
                            var r = g.C("synced");
                            f.D("startSync", !1);
                            r && (r[l.Ph] = p, g.D("synced", r));
                            r = Xg(a);
                            x(va, r);
                            Ge(r)
                        }
                        var p, q = h({
                            X: {
                                fa: ["sync.cook"],
                                La: 1500
                            }
                        }, [ua.Oa + "//" + l.zi + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function () {
                            p = e(lb);
                            m()
                        })["catch"](function () {
                            p = e(lb) - 1435;
                            m()
                        });
                        q = v(q, U);
                        return k.then(q)
                    }, K.resolve(), c)["catch"](z(a, "ctl"))
                }, "sy.c"),
                Bb, em = (Bb = {}, Bb.brands = "chu", Bb.architecture =
                    "cha", Bb.bitness = "chb", Bb.uaFullVersion = "chf", Bb.fullVersionList = "chl", Bb.mobile = "chm", Bb.model = "cho", Bb.platform = "chp", Bb.platformVersion = "chv", Bb),
                bm = u(function (a) {
                    return ol(a).then(cm, fm)
                }),
                Fu = ob("ot", function (a, c) {
                    if (xe(a)) {
                        var b = ka(a);
                        return na(c, z(a, "ot.s", function (d) {
                            if (n(d, "settings.oauth")) {
                                var e = [],
                                    f = bd(a, c);
                                e.push(b.F(a, ["message"], z(a, "ot.m", v(f, am))));
                                nc(a)(Wa(F, z(a, "ot.b", function () {
                                    function g(q) {
                                        var r, t = q.href;
                                        t && Ig(t, "https://oauth.yandex.ru/") && !fb(t, "_ym_uid=") && (t = fb(t, "?") ? "&" :
                                            "?", q.href += "" + t + vc((r = {}, r._ym_uid = f, r.mc = "v", r)), b.F(q, ["click"], z(a, "ot.click", function () {
                                                var y = "et=" + l(da);
                                                q.href += "&" + y
                                            })))
                                    }
                                    var h, k = a.document.body,
                                        l = ja(a),
                                        m = gb("a", k);
                                    x(g, m);
                                    if (Na("MutationObserver", a.MutationObserver)) {
                                        m = new a.MutationObserver(z(a, "ot.m", v(function (q) {
                                            q = q.addedNodes;
                                            for (var r = 0; r < q.length; r += 1) {
                                                var t = q[r];
                                                "A" === t.nodeName && g(t)
                                            }
                                        }, x)));
                                        var p = (h = {}, h.childList = !0, h.subtree = !0, h);
                                        m.observe(k, p);
                                        e.push(I(m.disconnect, m))
                                    }
                                })));
                                return E([me, e], x)
                            }
                        }))
                    }
                }),
                Gu = B("p.cta", function (a) {
                    nc(a)(Wa(F,
                        function () {
                            var c = H(a);
                            if (Zl(a.document)) {
                                var b = 0;
                                if (Hh(a, be, "cta")) {
                                    var d = F,
                                        e = function () {
                                            Ih(be, "cta");
                                            d();
                                            la(a, b)
                                        };
                                    d = ka(a).F(a, ["message"], B("p.cta.o", E([a, c, e], $l)));
                                    b = R(a, e, 1500)
                                } else c.D("cta.e", "if")
                            } else c.D("cta.e", "ns")
                        }))
                }),
                Sl = "bidRequested bidAdjustment bidWon bidResponse bidTimeout auctionInit auctionEnd adRenderSucceeded adRenderFailed".split(" "),
                Vl = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"],
                Yb = {},
                Hu = B("pj", function (a, c) {
                    var b, d = Ea(a, c),
                        e = d && d.params;
                    return e ?
                        (b = {}, b.pbjs = function (f) {
                            N(f) && (f = ia(xb, A(function (g) {
                                if (ha(g) && g.data && g.event && (ha(g.data) || N(g.data))) {
                                    var h = n(g, "data.args");
                                    return h ? {
                                        event: g.event,
                                        data: h
                                    } : g
                                }
                            }, f)), Ql(f), Wl(a, e))
                        }, b) : F
                }),
                Oe = "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(" "),
                Ve = {},
                fh = F,
                Iu = u(function (a, c) {
                    fh = c
                }),
                Yc, Ml = (Yc = {}, Yc.copyFromWindow = function (a, c, b) {
                    if (G(b, Oe) || Ig(b, "on")) throw Ma("rwp");
                    c = a[b];
                    if (Z(c) || fc(a, c) || fa(c) || T(c)) return c;
                    if (N(c)) return yd(c);
                    if (ha(c)) return Pl(c)
                }, Yc.loadScript = function (a, c, b, d, e) {
                    c = T(d) ? Ue("ls.ol", function () {
                        return d.apply(null)
                    }) : F;
                    var f = T(e) ? Ue("ls.ol", function () {
                        return e.apply(null)
                    }) : void 0;
                    Nl(a, b, c, f)
                }, Yc.callFromWindow = function (a, c, b) {
                    for (var d = [], e = 3; e < arguments.length; e++) d[e - 3] = arguments[e];
                    if (G(b, Oe)) throw Ma("rwp");
                    e = n(a,
                        b);
                    if (!T(e)) throw Ma("wenf");
                    return e.apply(void 0, d)
                }, Yc.createArgumentsQueue = function (a, c, b, d) {
                    function e() {
                        for (var g = 0; g < arguments.length; g++);
                        f.push(arguments)
                    }
                    if (0 !== b.length && 0 !== d.length && !n(a, b) && !n(a, d)) {
                        c = b.split(".");
                        d = d.split(".");
                        if (G(c[0], Oe) || G(d[0], Oe)) throw Ma("rwp");
                        var f = [];
                        gh(a, c)[c[c.length - 1]] = e;
                        gh(a, d)[d[d.length - 1]] = f;
                        return e
                    }
                }, Yc),
                Ju = ["ymab", "rcmx", "yaSurvey", "ym_debug"],
                dh = u(function (a) {
                    Iu(a, function (c, b) {
                        Gc(a, "ytm." + c, b)
                    });
                    return function (c) {
                        Fl(c) && x(function (b) {
                            if (N(b) &&
                                1 === b[0]) {
                                var d = b[1];
                                G(d, Ju) && Ue("p." + d, Gl)(a, b)
                            }
                        }, c.code)
                    }
                }),
                Ku = B("y.t.m", function (a, c) {
                    return na(c, z(a, "y.t.t", function (b) {
                        if (b = n(b, "settings.aytm")) b = Eb(a, b), dh(a)(b)
                    }))
                }),
                Lu = B("p.ips", function (a, c) {
                    na(c, function (b) {
                        (n(b, "settings.phchange") || n(b, "settings.phhide")) && bh(a, "tag_phone", J(c), b)
                    })
                }),
                sl = {},
                tl = u(Ac),
                El = w(cb("exec", /counterID=(\d+)/), V("1")),
                ul = sa(function (a, c) {
                    var b, d = tl(a),
                        e = La(c),
                        f = e[0],
                        g = e[1],
                        h = e.slice(2);
                    if (g) {
                        e = Dl(a, f);
                        var k = e[0],
                            l = e[1];
                        e = J(l);
                        d[e] || (d[e] = {});
                        d = d[e];
                        c.Ne || sl[g] &&
                            P(function (m, p) {
                                return m || !!p(a, l, h, k)
                            }, !1, sl[g]) || ("init" === g ? (c.Ne = !0, k ? Cb(a, "" + f, "dc", (b = {}, b.key = f, b)) : a["yaCounter" + l.id] = new a.Ya[ua.Yb](C({}, h[0], l))) : k && k[g] && d.Dh ? (k[g].apply(k, h), c.Ne = !0) : (b = d.Sf, b || (b = [], d.Sf = b), b.push(wa([f, g], h))))
                    }
                }),
                Bl = B("destruct.e", function (a, c, b) {
                    return function () {
                        var d = H(a),
                            e = c.id;
                        x(function (f, g) {
                            return T(f) && z(a, "dest.fr." + g, f)()
                        }, b);
                        Cl(a, J(c));
                        delete d.C("counters")[J(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                Zc = H(window);
            Zc.Ea("hitParam", {});
            Zc.Ea("lastReferrer", window.location.href);
            (function () {
                X.push(function (a, c) {
                    var b;
                    return b = {}, b.firstPartyParams = es(a, c), b.firstPartyParamsHashed = Bp(a, c), b
                });
                Dd.push("fpp");
                Dd.push("fpmh")
            })();
            (function () {
                var a = H(window);
                a.Ea("getCounters", fs(window));
                Md.push(gs);
                vg.push(function (c, b) {
                    b.counters = a.C("getCounters")
                })
            })();
            (function () {
                X.push(function (a, c) {
                    var b;
                    mb(a, (b = {}, b.counterKey = J(c), b.name = "counter", b.data = Mj(c), b))
                })
            })();
            ya["1"] = ib;
            X.push(hs);
            ta["1"] = Vb;
            yb(Gf, -1);
            Rb["1"] = [
                [Gf, -1],
                [Ce, 1],
                [we, 2],
                [Jb(), 3],
                [Yi, 4]
            ];
            X.push(is);
            X.push(B("p.ar",
                function (a, c) {
                    var b, d = oa(a, "a", c);
                    return b = {}, b.hit = function (e, f, g, h, k, l) {
                        var m, p, q, r = {
                            J: {},
                            K: Ca((m = {}, m.pv = 1, m.ar = 1, m))
                        };
                        f = ha(f) ? {
                            title: f.title,
                            yf: f.referer,
                            T: f.params,
                            Tb: f.callback,
                            l: f.ctx
                        } : {
                            title: f,
                            yf: g,
                            T: h,
                            Tb: k,
                            l: l
                        };
                        h = nd(c);
                        g = e || S(a).href;
                        h.url !== g && (h.ref = h.url, h.url = e);
                        e = f.yf || h.ref || a.document.referrer;
                        h = gc(a, c, "pv", (p = {}, p.id = c.id, p.url = g, p.ref = e, p), f.T);
                        p = C(r.M || {}, {
                            T: f.T,
                            title: f.title
                        });
                        r = d(C(r, {
                            M: p,
                            J: C(r.J || {}, (q = {}, q["page-url"] = g, q["page-ref"] = e, q))
                        }), c).then(h);
                        return Mc(a, "p.ar.s",
                            r, f.Tb || F, f.l)
                    }, b
                }));
            ya.a = ib;
            Rb.a = Sb;
            ta.a = Vb;
            X.push(ne);
            ya.g = ib;
            ta.g = Vb;
            Rb.g = Sb;
            X.push(js);
            X.push(ks);
            Rb.t = Sb;
            ya.t = ib;
            ta.t = Vb;
            X.push(B("cl.p", function (a, c) {
                function b(p, q, r, t) {
                    void 0 === t && (t = {});
                    r ? pe(a, c, {
                        url: r,
                        jb: !0,
                        sc: p,
                        xc: q,
                        sender: e,
                        eg: t
                    }) : h.warn("clel")
                }
                var d, e = oa(a, "2", c),
                    f = [],
                    g = J(c),
                    h = ic(a, g),
                    k = z(a, "s.s.tr", v(te(a, g), tp));
                g = {
                    l: a,
                    ab: c,
                    Sg: f,
                    sender: e,
                    dj: H(a),
                    Gg: Sc(a, c.id),
                    fj: uc(a),
                    Fi: v(v(g, Ke(a)), w(va, V("trackLinks")))
                };
                g = z(a, "cl.p.c", v(g, qp));
                g = ka(a).F(a, ["click"], g);
                c.Zf && k(c.Zf);
                var l = z(a, "file.clc",
                    E([!0, !1], b)),
                    m = z(a, "e.l.l.clc", E([!1, !0], b));
                f = z(a, "add.f.e.clc", ls(f));
                return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = g, d
            }));
            Rb["2"] = Sb;
            ya["2"] = ib;
            ta["2"] = Vb;
            ya.r = wd("r");
            ta.r = as;
            Qa.push(B("p.r", function (a, c) {
                var b = ns(a),
                    d = oa(a, "r", c),
                    e = z(a, "rts.p");
                return na(c, E([function (f, g) {
                    var h = {
                        id: g.Fg,
                        $: g.$
                    },
                        k = {
                            X: {
                                aa: g.hi
                            },
                            K: Ca(g.vg),
                            J: g.T,
                            M: {
                                Lb: g.Lb
                            },
                            ia: {
                                ya: g.ya
                            }
                        };
                    g.Fa && (k.Fa = bf(g.Fa));
                    h = d(k, h)["catch"](e);
                    return f.then(v(h, U))
                }, K.resolve(), b], P))["catch"](e)
            }));
            aa("r", function (a) {
                return {
                    O: function (c,
                        b) {
                        var d = c.K,
                            e = void 0 === d ? Ca() : d,
                            f = c.M.Lb,
                            g = md(a);
                        d = e.C("rqnl", 0) + 1;
                        e.D("rqnl", d);
                        if (e = n(g, L(".", [f, "browserInfo"]))) e.rqnl = d, Ef(a);
                        b()
                    },
                    ma: function (c, b) {
                        Ii(a, c);
                        b()
                    }
                }
            }, 1);
            yb(oe, 100);
            aa("1", oe, 100);
            X.push(os);
            aa("n", Ce, 1);
            aa("n", we, 2);
            aa("n", Jb(), 3);
            aa("n", oe, 100);
            ya.n = ib;
            ta.n = Vb;
            jc({
                Ee: {
                    ca: "accurateTrackBounce"
                }
            });
            X.push(ps);
            ya.m = wd("cm");
            ta.m = Mk;
            aa("m", Jb(["u", "v", "vf"]), 1);
            aa("m", oe, 2);
            jc({
                Cg: {
                    ca: "clickmap"
                }
            });
            X.push(qs);
            X.push(rs);
            X.push(ss);
            X.push(ts);
            (function () {
                X.push(us);
                Dd.push("ecommerce");
                jc({
                    kd: {
                        ca: "ecommerce",
                        Ka: function (a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                })
            })();
            Qa.push(ws);
            X.push(xs);
            Dd.push("user_id");
            X.push(ys);
            yb(function (a, c) {
                return {
                    ma: function (b, d) {
                        var e = Ea(a, c);
                        e = e && e.userParams;
                        var f = (b.M || {}).ye;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            Ee.push("_ym_debug");
            Ed.unshift(Bs);
            X.push(Cs);
            Ed.push(function (a) {
                var c = H(a);
                c.C("i") || (c.D("i", !0), ka(a).F(a, ["message"], v(a, Uo)))
            });
            (function () {
                var a, c = (a = {}, a.tp = w(db, Nj, Hb), a.tpid = w(db, Fq), a);
                C(rd, c)
            })();
            yb(kd, 20);
            aa("n", kd, 20);
            aa("1", kd, 20);
            Ed.unshift(Es);
            rd.fp = function (a, c, b) {
                if (b.J && b.J.nohit) return null;
                b = H(a).C;
                if (!b("fpe")) return null;
                c = Ds(c);
                if (c.Vg) return null;
                b = b("fht", Infinity);
                a: {
                    var d = n(a, "performance.getEntriesByType");
                    if (T(d)) {
                        if (a = ia(w(U, V("name"), za("first-contentful-paint")), d.call(a.performance, "paint")), a.length) {
                            a = a[0].startTime;
                            break a
                        }
                    } else {
                        var e = n(a, "chrome.loadTimes");
                        d = Jk(a);
                        if (T(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                            a = 1E3 * e - d;
                            break a
                        }
                        if (a = n(a, "performance.timing.msFirstPaint")) {
                            a -= d;
                            break a
                        }
                    }
                    a = void 0
                }
                return a &&
                    b > a ? (c.Vg = a, Math.round(a)) : null
            };
            X.push(function (a, c) {
                var b;
                return b = {}, b.ecommerceAdd = B("ecm.a", Gs(a, c)), b.ecommerceRemove = B("ecm.r", Hs(a, c)), b.ecommerceDetail = B("ecm.d", Is(a, c)), b.ecommercePurchase = B("ecm.p", Js(a, c)), b
            });
            (function () {
                var a, c = {};
                c.bu = Ps;
                c.pri = Ho;
                c.wv = v(2, U);
                c.ds = Ko;
                c.co = function (b) {
                    return rb(H(b).C("jn"))
                };
                c.td = Vs;
                C(c, (a = {}, a.iss = w(Dr, Hb), a.hdl = w(Er, Hb), a.iia = w(Fr, Hb), a.cpf = w(Os, Hb), a.ntf = u(function (b) {
                    b = n(b, "Notification.permission");
                    b = "denied" === b ? !1 : "granted" === b ? !0 : null;
                    return Za(b) ?
                        null : b ? 2 : 1
                }), a.eu = Lb("isEU"), a.ns = Jk, a.np = function (b) {
                    return Sa(b, 0, 100) ? null : de(zf(Xa(xf(b), 100)))
                }, a));
                c.pani = Qs;
                c.pci = Rs;
                c.si = Ss;
                c.gi = Ts;
                C(rd, c)
            })();
            (function () {
                var a = {};
                a.oo = Lb("oo");
                a.pmc = Lb("cmc");
                a.lt = function (c) {
                    var b = zd(c).C("lt", null);
                    return b ? c.Math.round(100 * b) : b
                };
                a.re = w(bq, Hb);
                a.aw = function (c) {
                    c = Gb(w(Z, xc), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                    return Z(c) ? null : rb(!c)
                };
                a.rcm = Ys;
                a.yu = function (c) {
                    return (c = Pd(c, "").C("yandexuid")) && c.substring(0, 25)
                };
                a.ifc = Lb("ifc");
                a.ifb = Lb("ifb");
                a.ecs = Lb("ecs");
                a.csi = Lb("scip");
                a.cdl = Lb("cdl");
                a.eco = u(Fo, w(db, J));
                a.dss = Lb("dSync");
                a.pis = Lb("pis");
                C(Nf, a)
            })();
            ta.er = Uc;
            (function (a) {
                try {
                    var c = Fg(a, "er"),
                        b = Co(a, c);
                    Ej.push(function (d, e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[ua.$a] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) { }
            })(window);
            (function () {
                Re.push(Go);
                ve.unshift(Bo);
                Lg.push(function (a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    H(a).D("oo", c)
                })
            })();
            yb(function (a,
                c) {
                return {
                    O: function (b, d) {
                        var e = b.J,
                            f = b.K;
                        !Wk[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp, Wk[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            X.push(Zs);
            Rb.e = Sb;
            ya.e = ib;
            ta.e = Vb;
            jc({
                exp: {
                    ca: "experiments"
                }
            });
            Ui.experiments = "ex";
            (function () {
                var a;
                lh.push($s);
                ya.f = ib;
                C(ta, (a = {}, a.f = Lk, a));
                aa("f", Jb(), 1);
                aa("f", bj, 2);
                aa("f", kd, 20)
            })();
            Re.push(function (a, c) {
                var b = {
                    oa: J(c),
                    ed: Ea(a, c),
                    Yf: ja(a),
                    Od: Ua(a)
                },
                    d = b.Yf(lb);
                if (!b.Od.Fd) {
                    var e = b.Od.C("ymoo" + b.oa);
                    if (e && 30 > d - e) b = b.oa, delete H(a).C("counters", {})[b], Ra(Ja("uws"));
                    else na(c,
                        at(b))["catch"](z(a, "d.f"))
                }
            });
            (function () {
                var a, c, b = [wb];
                C(ta, (a = {}, a.s = b, a.S = b, a.u = Uc, a));
                C(ya, (c = {}, c.s = Kb, c.S = ib, c.u = Kb, c));
                aa("s");
                aa("u");
                aa("S", Jb(["v", "hid", "u", "vf", "rn"]), 1);
                X.push(B("s", mo))
            })();
            ya["8"] = Kb;
            ta["8"] = [Mf];
            Kk.push([Mf, 0]);
            X.push(B("p.us", function (a, c) {
                return na(c, function (b) {
                    if (n(b, "settings.sbp")) return ji(a, b, {
                        ab: c,
                        Jb: "8",
                        Md: "cs"
                    })
                })
            }));
            aa("p", Jb(Ng), 1);
            zg("pub", function (a, c) {
                return {
                    O: function (b, d) {
                        Xh(a, c, b);
                        d()
                    }
                }
            }, 1);
            ya.p = et;
            ta.p = Ka([vb, wb]);
            Qa.push(it);
            jc({
                vb: {
                    ca: "webvisor",
                    Ka: xb
                },
                Kg: {
                    ca: "disableFormAnalytics",
                    Ka: xb
                }
            });
            aa("4", Jb(Ng), 1);
            ya["4"] = Yk;
            ta["4"] = Ka([vb, wb, Nc]);
            Qa.push(ot);
            (function () {
                aa("W", Jb(Ng), 1);
                zg("wv", An, 1);
                ta.W = Ka([vb, wb]);
                ya.W = Yk;
                Qa.push(Xt);
                X.push(Yt);
                jc({
                    vb: {
                        ca: "webvisor"
                    }
                });
                jc({
                    Hi: {
                        ca: "trustedDomains"
                    },
                    Wb: {
                        ca: "childIframe",
                        Ka: xb
                    }
                });
                Lg.push(function (a) {
                    H(a).C("stopRecorder", F)()
                })
            })();
            X.push($t);
            aa("pi");
            ya.pi = Kb;
            ta.pi = Uc;
            zg("w", function (a, c) {
                return {
                    O: function (b, d) {
                        if (b.K) {
                            var e = hf(c),
                                f = e.status;
                            "rt" === e.Jb && f && (b.K.D("rt", f), b.ia || (b.ia = {}), b.ia.Ah =
                                1 === f ? Gh(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            X.push(bu);
            X.push(nu);
            ta["6"] = Ka([vb, wb]);
            ya["6"] = Kb;
            X.push(ou);
            X.push(Ws);
            (function () {
                vg.push(function (a, c) {
                    c.informer = Im(a)
                })
            })();
            yb(ef, 6);
            aa("1", ef, 6);
            aa("adb");
            aa("n", ef, 4);
            ta.adb = Uc;
            ya.adb = rj;
            Md.push(qu);
            ta["5"] = Vb;
            ya["5"] = ib;
            Rb["5"] = ia(w(od, lc([Ce, we]), xc), Sb);
            X.push(ru);
            aa("5", kd, 20);
            yb(zh, 7);
            aa("n", zh, 6);
            Qa.push(su);
            ya.d = ib;
            aa("d", Jb(["hid", "u", "v", "vf"]), 1);
            ta.d = Uc;
            aa("n", function (a, c) {
                return {
                    ma: function (b, d) {
                        if (!b.M || !b.M.force) {
                            var e = .002,
                                f = c.id === ua.mg ?
                                    1 : .002,
                                g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = jd(a);
                            if (p && T(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = p.getEntriesByType("resource");
                                for (var q = {}, r = {}, t = {}, y = Vk(), D = S(a).href, O = 0; O < p.length; O += 1) {
                                    var M = p[O],
                                        qa = M.name.replace(Uk, "").split("?")[0],
                                        ra = pc(qa),
                                        Pa = (g = {}, g.dns = Math.round(M.domainLookupEnd - M.domainLookupStart), g.tcp = Math.round(M.connectEnd - M.connectStart), g.duration = Math.round(M.duration), g.response = Math.round(M.responseEnd - M.requestStart), g);
                                    "script" !==
                                        M.initiatorType || e || (r[qa] = C(Pa, (h = {}, h.name = M.name, h.decodedBodySize = M.decodedBodySize, h.transferSize = Math.round(M.transferSize), h)));
                                    !Xs[ra] && !y[ra] || q[qa] || f || (q[qa] = C(Pa, (k = {}, k.pages = D, k)))
                                }
                                ea(q).length && (t.timings8 = q);
                                ea(r).length && (t.scripts = r);
                                if (ea(t).length) oa(a, "d", c)({
                                    K: Ca((l = {}, l.ar = 1, l.pv = 1, l)),
                                    X: {
                                        aa: Fb(a, t) || void 0
                                    },
                                    J: (m = {}, m["page-url"] = D, m)
                                }, {
                                    id: ua.pg,
                                    $: "0"
                                })["catch"](z(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            ta.ci = [wb];
            ya.ci = Kb;
            Qa.push(B("p.sci", function (a, c) {
                return na(c, v(a, Gm))["catch"](z(a,
                    "ins.cs"))
            }));
            X.push(tu);
            Qa.push(Ns);
            yb(Wg, 8);
            aa("f", Wg, 3);
            aa("n", Wg, 5);
            aa("h", function (a) {
                return {
                    ma: function (c, b) {
                        var d = c.Cf;
                        Bf(c) && d && H(a).D("isEU", n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            Md.push(Wt);
            Qa.push(yu);
            X.push(zu);
            jc({
                Oi: {
                    ca: "yaDisableGDPR"
                },
                Pi: {
                    ca: "yaGDPRLang"
                }
            });
            ve.push(function (a, c) {
                return {
                    O: E([a, c], om)
                }
            });
            Ee.push("gdpr");
            Ee.push("gdpr_popup");
            dg.push(function (a, c) {
                var b = Od(a);
                b = Qd(b);
                if (ia(lc(Cu), b).length) return !0;
                b = c(a, "gdpr");
                return G(b, [Fc, Bu])
            });
            ve.push(function (a) {
                return {
                    O: function (c, b) {
                        var d =
                            c.ia || {},
                            e;
                        (e = n(a, "document.referrer")) ? (e = Ic(a, e).host, e = Ti(e), e = Mg + "." + (e || bt)) : e = cc;
                        c.ia = C(d, {
                            Bh: [e]
                        });
                        b()
                    }
                }
            });
            yb(rl, 5);
            aa("1", rl, 6);
            ta.c = Uc;
            ya.c = Kb;
            aa("1", ih, 7);
            yb(ih, 7);
            Qa.push(B("p.ot", Fu));
            Qa.push(ob("cta", Gu, !0));
            aa("n", function (a) {
                var c = H(a);
                return {
                    O: function (b, d) {
                        var e = b.M || {},
                            f = c.C("cta"),
                            g = c.C("cta.e");
                        if (f || g) {
                            e.T || (e.T = {});
                            e.T.__ym || (e.T.__ym = {});
                            var h = {};
                            f ? (f = A(function (k) {
                                var l, m = n(k, "topic");
                                k = n(k, "version");
                                return l = {}, l.topic = m, l.version = k, l
                            }, f), h.ct = f) : g && (h["ct.e"] = g);
                            C(e.T.__ym,
                                h);
                            b.M = C(b.M || {}, e)
                        }
                        d()
                    }
                }
            }, 7);
            aa("n", Gf, 8);
            X.push(Hu);
            Ed.push(B("cdl", function (a) {
                var c = H(a).Ea;
                if (a = n(a, "navigator.cookieDeprecationLabel")) try {
                    a.getValue().then(v("cdl", c), E(["cdl", "e"], c))
                } catch (b) {
                    c("cdl", "d")
                } else c("cdl", "na")
            }));
            Qa.push(Ku);
            Qa.push(Lu);
            ta.pis = Mk;
            ya.pis = Kb;
            Qa.push(B("p.sci", function (a, c) {
                return na(c, function (b) {
                    var d = n(b, "settings.pis");
                    if (d && !Wd(b)) {
                        b = H(a);
                        var e = b.C;
                        b = b.D;
                        e = e("pis");
                        if (Z(e)) return e = oa(a, "pis"), b("pis", "0"), e({
                            X: {
                                fa: ["pis"]
                            }
                        }, [d]).then(E(["pis", "1"], b), Lc(E(["pis",
                            "a"
                        ], b)))
                    }
                })["catch"](z(a, "pis"))
            }));
            X.push(function (a, c) {
                var b = tl(a),
                    d = J(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.Dh = !0;
                if (b = e.Sf) d = ul(a), x(d, b)
            });
            Qa.unshift(ob("is", function (a, c) {
                na(c, function (b) {
                    (De(a) || n(b, "settings.sm")) && bh(a, "tag_debug", J(c), b)
                })
            }));
            x(nb(va)(window), Ed);
            if (window.Ya && Pe) {
                var vl = ua.Yb;
                window.Ya[vl] = Pe;
                ds(window);
                x(w(Dc([window, window.Ya[vl]]), va), vg)
            } (function (a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = ul(a);
                    re(a, b, function (e) {
                        e.xa.F(d)
                    }, !0)
                }
            })(window)
        })()
    } catch (Pe) { };
}).call(this)
﻿/*
 Highcharts JS v6.0.3 (2017-11-14)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/

(function (S, N) { "object" === typeof module && module.exports ? module.exports = S.document ? N(S) : N : S.Highcharts = N(S) })("undefined" !== typeof window ? window : this, function (S) {
    var N = function () {
        var a = "undefined" === typeof S ? window : S, D = a.document, B = a.navigator && a.navigator.userAgent || "", G = D && D.createElementNS && !!D.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, p = /(edge|msie|trident)/i.test(B) && !a.opera, g = /Firefox/.test(B), l = g && 4 > parseInt(B.split("Firefox/")[1], 10); return a.Highcharts ? a.Highcharts.error(16,
            !0) : { product: "Highcharts", version: "6.0.3", deg2rad: 2 * Math.PI / 360, doc: D, hasBidiBug: l, hasTouch: D && void 0 !== D.documentElement.ontouchstart, isMS: p, isWebKit: /AppleWebKit/.test(B), isFirefox: g, isTouchDevice: /(Mobile|Android|Windows Phone)/.test(B), SVG_NS: "http://www.w3.org/2000/svg", chartCount: 0, seriesTypes: {}, symbolSizes: {}, svg: G, win: a, marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"], noop: function () { }, charts: [] }
    }(); (function (a) {
        a.timers = []; var D = a.charts, B = a.doc, G = a.win; a.error = function (p,
            g) { p = a.isNumber(p) ? "Highcharts error #" + p + ": www.highcharts.com/errors/" + p : p; if (g) throw Error(p); G.console && console.log(p) }; a.Fx = function (a, g, l) { this.options = g; this.elem = a; this.prop = l }; a.Fx.prototype = {
                dSetter: function () { var a = this.paths[0], g = this.paths[1], l = [], r = this.now, n = a.length, w; if (1 === r) l = this.toD; else if (n === g.length && 1 > r) for (; n--;)w = parseFloat(a[n]), l[n] = isNaN(w) ? g[n] : r * parseFloat(g[n] - w) + w; else l = g; this.elem.attr("d", l, null, !0) }, update: function () {
                    var a = this.elem, g = this.prop, l = this.now, r =
                        this.options.step; if (this[g + "Setter"]) this[g + "Setter"](); else a.attr ? a.element && a.attr(g, l, null, !0) : a.style[g] = l + this.unit; r && r.call(a, l, this)
                }, run: function (p, g, l) {
                    var r = this, n = r.options, w = function (a) { return w.stopped ? !1 : r.step(a) }, v = G.requestAnimationFrame || function (a) { setTimeout(a, 13) }, e = function () { a.timers = a.grep(a.timers, function (a) { return a() }); a.timers.length && v(e) }; p === g ? (delete n.curAnim[this.prop], n.complete && 0 === a.keys(n.curAnim).length && n.complete()) : (this.startTime = +new Date, this.start =
                        p, this.end = g, this.unit = l, this.now = this.start, this.pos = 0, w.elem = this.elem, w.prop = this.prop, w() && 1 === a.timers.push(w) && v(e))
                }, step: function (p) {
                    var g = +new Date, l, r = this.options, n = this.elem, w = r.complete, v = r.duration, e = r.curAnim; n.attr && !n.element ? p = !1 : p || g >= v + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), l = e[this.prop] = !0, a.objectEach(e, function (a) { !0 !== a && (l = !1) }), l && w && w.call(n), p = !1) : (this.pos = r.easing((g - this.startTime) / v), this.now = this.start + (this.end - this.start) * this.pos, this.update(),
                        p = !0); return p
                }, initPath: function (p, g, l) {
                    function r(a) { var b, f; for (d = a.length; d--;)b = "M" === a[d] || "L" === a[d], f = /[a-zA-Z]/.test(a[d + 3]), b && f && a.splice(d + 1, 0, a[d + 1], a[d + 2], a[d + 1], a[d + 2]) } function n(a, b) { for (; a.length < f;) { a[0] = b[f - a.length]; var e = a.slice(0, c);[].splice.apply(a, [0, 0].concat(e)); y && (e = a.slice(a.length - c), [].splice.apply(a, [a.length, 0].concat(e)), d--) } a[0] = "M" } function w(a, d) {
                        for (var e = (f - a.length) / c; 0 < e && e--;)b = a.slice().splice(a.length / H - c, c * H), b[0] = d[f - c - e * c], m && (b[c - 6] = b[c - 2], b[c - 5] =
                            b[c - 1]), [].splice.apply(a, [a.length / H, 0].concat(b)), y && e--
                    } g = g || ""; var v, e = p.startX, h = p.endX, m = -1 < g.indexOf("C"), c = m ? 7 : 3, f, b, d; g = g.split(" "); l = l.slice(); var y = p.isArea, H = y ? 2 : 1, J; m && (r(g), r(l)); if (e && h) { for (d = 0; d < e.length; d++)if (e[d] === h[0]) { v = d; break } else if (e[0] === h[h.length - e.length + d]) { v = d; J = !0; break } void 0 === v && (g = []) } g.length && a.isNumber(v) && (f = l.length + v * H * c, J ? (n(g, l), w(l, g)) : (n(l, g), w(g, l))); return [g, l]
                }
            }; a.Fx.prototype.fillSetter = a.Fx.prototype.strokeSetter = function () {
                this.elem.attr(this.prop,
                    a.color(this.start).tweenTo(a.color(this.end), this.pos), null, !0)
            }; a.extend = function (a, g) { var l; a || (a = {}); for (l in g) a[l] = g[l]; return a }; a.merge = function () { var p, g = arguments, l, r = {}, n = function (l, v) { "object" !== typeof l && (l = {}); a.objectEach(v, function (e, h) { !a.isObject(e, !0) || a.isClass(e) || a.isDOMElement(e) ? l[h] = v[h] : l[h] = n(l[h] || {}, e) }); return l }; !0 === g[0] && (r = g[1], g = Array.prototype.slice.call(g, 2)); l = g.length; for (p = 0; p < l; p++)r = n(r, g[p]); return r }; a.pInt = function (a, g) { return parseInt(a, g || 10) }; a.isString =
                function (a) { return "string" === typeof a }; a.isArray = function (a) { a = Object.prototype.toString.call(a); return "[object Array]" === a || "[object Array Iterator]" === a }; a.isObject = function (p, g) { return !!p && "object" === typeof p && (!g || !a.isArray(p)) }; a.isDOMElement = function (p) { return a.isObject(p) && "number" === typeof p.nodeType }; a.isClass = function (p) { var g = p && p.constructor; return !(!a.isObject(p, !0) || a.isDOMElement(p) || !g || !g.name || "Object" === g.name) }; a.isNumber = function (a) { return "number" === typeof a && !isNaN(a) }; a.erase =
                    function (a, g) { for (var l = a.length; l--;)if (a[l] === g) { a.splice(l, 1); break } }; a.defined = function (a) { return void 0 !== a && null !== a }; a.attr = function (p, g, l) { var r; a.isString(g) ? a.defined(l) ? p.setAttribute(g, l) : p && p.getAttribute && (r = p.getAttribute(g)) : a.defined(g) && a.isObject(g) && a.objectEach(g, function (a, l) { p.setAttribute(l, a) }); return r }; a.splat = function (p) { return a.isArray(p) ? p : [p] }; a.syncTimeout = function (a, g, l) { if (g) return setTimeout(a, g, l); a.call(0, l) }; a.pick = function () {
                        var a = arguments, g, l, r = a.length; for (g =
                            0; g < r; g++)if (l = a[g], void 0 !== l && null !== l) return l
                    }; a.css = function (p, g) { a.isMS && !a.svg && g && void 0 !== g.opacity && (g.filter = "alpha(opacity\x3d" + 100 * g.opacity + ")"); a.extend(p.style, g) }; a.createElement = function (p, g, l, r, n) { p = B.createElement(p); var w = a.css; g && a.extend(p, g); n && w(p, { padding: 0, border: "none", margin: 0 }); l && w(p, l); r && r.appendChild(p); return p }; a.extendClass = function (p, g) { var l = function () { }; l.prototype = new p; a.extend(l.prototype, g); return l }; a.pad = function (a, g, l) {
                        return Array((g || 2) + 1 - String(a).length).join(l ||
                            0) + a
                    }; a.relativeLength = function (a, g, l) { return /%$/.test(a) ? g * parseFloat(a) / 100 + (l || 0) : parseFloat(a) }; a.wrap = function (a, g, l) { var r = a[g]; a[g] = function () { var a = Array.prototype.slice.call(arguments), g = arguments, v = this; v.proceed = function () { r.apply(v, arguments.length ? arguments : g) }; a.unshift(r); a = l.apply(this, a); v.proceed = null; return a } }; a.getTZOffset = function (p) { var g = a.Date; return 6E4 * (g.hcGetTimezoneOffset && g.hcGetTimezoneOffset(p) || g.hcTimezoneOffset || 0) }; a.dateFormat = function (p, g, l) {
                        if (!a.defined(g) ||
                            isNaN(g)) return a.defaultOptions.lang.invalidDate || ""; p = a.pick(p, "%Y-%m-%d %H:%M:%S"); var r = a.Date, n = new r(g - a.getTZOffset(g)), w = n[r.hcGetHours](), v = n[r.hcGetDay](), e = n[r.hcGetDate](), h = n[r.hcGetMonth](), m = n[r.hcGetFullYear](), c = a.defaultOptions.lang, f = c.weekdays, b = c.shortWeekdays, d = a.pad, r = a.extend({
                                a: b ? b[v] : f[v].substr(0, 3), A: f[v], d: d(e), e: d(e, 2, " "), w: v, b: c.shortMonths[h], B: c.months[h], m: d(h + 1), y: m.toString().substr(2, 2), Y: m, H: d(w), k: w, I: d(w % 12 || 12), l: w % 12 || 12, M: d(n[r.hcGetMinutes]()), p: 12 > w ? "AM" :
                                    "PM", P: 12 > w ? "am" : "pm", S: d(n.getSeconds()), L: d(Math.round(g % 1E3), 3)
                            }, a.dateFormats); a.objectEach(r, function (a, b) { for (; -1 !== p.indexOf("%" + b);)p = p.replace("%" + b, "function" === typeof a ? a(g) : a) }); return l ? p.substr(0, 1).toUpperCase() + p.substr(1) : p
                    }; a.formatSingle = function (p, g) { var l = /\.([0-9])/, r = a.defaultOptions.lang; /f$/.test(p) ? (l = (l = p.match(l)) ? l[1] : -1, null !== g && (g = a.numberFormat(g, l, r.decimalPoint, -1 < p.indexOf(",") ? r.thousandsSep : ""))) : g = a.dateFormat(p, g); return g }; a.format = function (p, g) {
                        for (var l =
                            "{", r = !1, n, w, v, e, h = [], m; p;) { l = p.indexOf(l); if (-1 === l) break; n = p.slice(0, l); if (r) { n = n.split(":"); w = n.shift().split("."); e = w.length; m = g; for (v = 0; v < e; v++)m && (m = m[w[v]]); n.length && (m = a.formatSingle(n.join(":"), m)); h.push(m) } else h.push(n); p = p.slice(l + 1); l = (r = !r) ? "}" : "{" } h.push(p); return h.join("")
                    }; a.getMagnitude = function (a) { return Math.pow(10, Math.floor(Math.log(a) / Math.LN10)) }; a.normalizeTickInterval = function (p, g, l, r, n) {
                        var w, v = p; l = a.pick(l, 1); w = p / l; g || (g = n ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10],
                            !1 === r && (1 === l ? g = a.grep(g, function (a) { return 0 === a % 1 }) : .1 >= l && (g = [1 / l]))); for (r = 0; r < g.length && !(v = g[r], n && v * l >= p || !n && w <= (g[r] + (g[r + 1] || g[r])) / 2); r++); return v = a.correctFloat(v * l, -Math.round(Math.log(.001) / Math.LN10))
                    }; a.stableSort = function (a, g) { var l = a.length, r, n; for (n = 0; n < l; n++)a[n].safeI = n; a.sort(function (a, n) { r = g(a, n); return 0 === r ? a.safeI - n.safeI : r }); for (n = 0; n < l; n++)delete a[n].safeI }; a.arrayMin = function (a) { for (var g = a.length, l = a[0]; g--;)a[g] < l && (l = a[g]); return l }; a.arrayMax = function (a) {
                        for (var g =
                            a.length, l = a[0]; g--;)a[g] > l && (l = a[g]); return l
                    }; a.destroyObjectProperties = function (p, g) { a.objectEach(p, function (a, r) { a && a !== g && a.destroy && a.destroy(); delete p[r] }) }; a.discardElement = function (p) { var g = a.garbageBin; g || (g = a.createElement("div")); p && g.appendChild(p); g.innerHTML = "" }; a.correctFloat = function (a, g) { return parseFloat(a.toPrecision(g || 14)) }; a.setAnimation = function (p, g) { g.renderer.globalAnimation = a.pick(p, g.options.chart.animation, !0) }; a.animObject = function (p) {
                        return a.isObject(p) ? a.merge(p) :
                            { duration: p ? 500 : 0 }
                    }; a.timeUnits = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 }; a.numberFormat = function (p, g, l, r) {
                        p = +p || 0; g = +g; var n = a.defaultOptions.lang, w = (p.toString().split(".")[1] || "").split("e")[0].length, v, e, h = p.toString().split("e"); -1 === g ? g = Math.min(w, 20) : a.isNumber(g) || (g = 2); e = (Math.abs(h[1] ? h[0] : p) + Math.pow(10, -Math.max(g, w) - 1)).toFixed(g); w = String(a.pInt(e)); v = 3 < w.length ? w.length % 3 : 0; l = a.pick(l, n.decimalPoint); r = a.pick(r, n.thousandsSep);
                        p = (0 > p ? "-" : "") + (v ? w.substr(0, v) + r : ""); p += w.substr(v).replace(/(\d{3})(?=\d)/g, "$1" + r); g && (p += l + e.slice(-g)); h[1] && (p += "e" + h[1]); return p
                    }; Math.easeInOutSine = function (a) { return -.5 * (Math.cos(Math.PI * a) - 1) }; a.getStyle = function (p, g, l) {
                        if ("width" === g) return Math.min(p.offsetWidth, p.scrollWidth) - a.getStyle(p, "padding-left") - a.getStyle(p, "padding-right"); if ("height" === g) return Math.min(p.offsetHeight, p.scrollHeight) - a.getStyle(p, "padding-top") - a.getStyle(p, "padding-bottom"); G.getComputedStyle || a.error(27,
                            !0); if (p = G.getComputedStyle(p, void 0)) p = p.getPropertyValue(g), a.pick(l, "opacity" !== g) && (p = a.pInt(p)); return p
                    }; a.inArray = function (p, g) { return (a.indexOfPolyfill || Array.prototype.indexOf).call(g, p) }; a.grep = function (p, g) { return (a.filterPolyfill || Array.prototype.filter).call(p, g) }; a.find = Array.prototype.find ? function (a, g) { return a.find(g) } : function (a, g) { var l, r = a.length; for (l = 0; l < r; l++)if (g(a[l], l)) return a[l] }; a.map = function (a, g) { for (var l = [], r = 0, n = a.length; r < n; r++)l[r] = g.call(a[r], a[r], r, a); return l };
        a.keys = function (p) { return (a.keysPolyfill || Object.keys).call(void 0, p) }; a.reduce = function (p, g, l) { return (a.reducePolyfill || Array.prototype.reduce).call(p, g, l) }; a.offset = function (a) { var g = B.documentElement; a = a.parentElement ? a.getBoundingClientRect() : { top: 0, left: 0 }; return { top: a.top + (G.pageYOffset || g.scrollTop) - (g.clientTop || 0), left: a.left + (G.pageXOffset || g.scrollLeft) - (g.clientLeft || 0) } }; a.stop = function (p, g) {
            for (var l = a.timers.length; l--;)a.timers[l].elem !== p || g && g !== a.timers[l].prop || (a.timers[l].stopped =
                !0)
        }; a.each = function (p, g, l) { return (a.forEachPolyfill || Array.prototype.forEach).call(p, g, l) }; a.objectEach = function (a, g, l) { for (var r in a) a.hasOwnProperty(r) && g.call(l, a[r], r, a) }; a.addEvent = function (p, g, l) { var r, n, w = p.addEventListener || a.addEventListenerPolyfill; p.hcEvents && !p.hasOwnProperty("hcEvents") && (n = {}, a.objectEach(p.hcEvents, function (a, e) { n[e] = a.slice(0) }), p.hcEvents = n); r = p.hcEvents = p.hcEvents || {}; w && w.call(p, g, l, !1); r[g] || (r[g] = []); r[g].push(l); return function () { a.removeEvent(p, g, l) } }; a.removeEvent =
            function (p, g, l) { function r(e, m) { var c = p.removeEventListener || a.removeEventListenerPolyfill; c && c.call(p, e, m, !1) } function n() { var e, m; p.nodeName && (g ? (e = {}, e[g] = !0) : e = v, a.objectEach(e, function (a, f) { if (v[f]) for (m = v[f].length; m--;)r(f, v[f][m]) })) } var w, v = p.hcEvents, e; v && (g ? (w = v[g] || [], l ? (e = a.inArray(l, w), -1 < e && (w.splice(e, 1), v[g] = w), r(g, l)) : (n(), v[g] = [])) : (n(), p.hcEvents = {})) }; a.fireEvent = function (p, g, l, r) {
                var n; n = p.hcEvents; var w, v; l = l || {}; if (B.createEvent && (p.dispatchEvent || p.fireEvent)) n = B.createEvent("Events"),
                    n.initEvent(g, !0, !0), a.extend(n, l), p.dispatchEvent ? p.dispatchEvent(n) : p.fireEvent(g, n); else if (n) for (n = n[g] || [], w = n.length, l.target || a.extend(l, { preventDefault: function () { l.defaultPrevented = !0 }, target: p, type: g }), g = 0; g < w; g++)(v = n[g]) && !1 === v.call(p, l) && l.preventDefault(); r && !l.defaultPrevented && r(l)
            }; a.animate = function (p, g, l) {
                var r, n = "", w, v, e; a.isObject(l) || (e = arguments, l = { duration: e[2], easing: e[3], complete: e[4] }); a.isNumber(l.duration) || (l.duration = 400); l.easing = "function" === typeof l.easing ? l.easing :
                    Math[l.easing] || Math.easeInOutSine; l.curAnim = a.merge(g); a.objectEach(g, function (e, m) { a.stop(p, m); v = new a.Fx(p, l, m); w = null; "d" === m ? (v.paths = v.initPath(p, p.d, g.d), v.toD = g.d, r = 0, w = 1) : p.attr ? r = p.attr(m) : (r = parseFloat(a.getStyle(p, m)) || 0, "opacity" !== m && (n = "px")); w || (w = e); w && w.match && w.match("px") && (w = w.replace(/px/g, "")); v.run(r, w, n) })
            }; a.seriesType = function (p, g, l, r, n) {
                var w = a.getOptions(), v = a.seriesTypes; w.plotOptions[p] = a.merge(w.plotOptions[g], l); v[p] = a.extendClass(v[g] || function () { }, r); v[p].prototype.type =
                    p; n && (v[p].prototype.pointClass = a.extendClass(a.Point, n)); return v[p]
            }; a.uniqueKey = function () { var a = Math.random().toString(36).substring(2, 9), g = 0; return function () { return "highcharts-" + a + "-" + g++ } }(); G.jQuery && (G.jQuery.fn.highcharts = function () { var p = [].slice.call(arguments); if (this[0]) return p[0] ? (new (a[a.isString(p[0]) ? p.shift() : "Chart"])(this[0], p[0], p[1]), this) : D[a.attr(this[0], "data-highcharts-chart")] })
    })(N); (function (a) {
        var D = a.each, B = a.isNumber, G = a.map, p = a.merge, g = a.pInt; a.Color = function (l) {
            if (!(this instanceof
                a.Color)) return new a.Color(l); this.init(l)
        }; a.Color.prototype = {
            parsers: [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (a) { return [g(a[1]), g(a[2]), g(a[3]), parseFloat(a[4], 10)] } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (a) { return [g(a[1]), g(a[2]), g(a[3]), 1] } }], names: { none: "rgba(255,255,255,0)", white: "#ffffff", black: "#000000" }, init: function (l) {
                var g, n, w, v; if ((this.input = l = this.names[l &&
                    l.toLowerCase ? l.toLowerCase() : ""] || l) && l.stops) this.stops = G(l.stops, function (e) { return new a.Color(e[1]) }); else if (l && l.charAt && "#" === l.charAt() && (g = l.length, l = parseInt(l.substr(1), 16), 7 === g ? n = [(l & 16711680) >> 16, (l & 65280) >> 8, l & 255, 1] : 4 === g && (n = [(l & 3840) >> 4 | (l & 3840) >> 8, (l & 240) >> 4 | l & 240, (l & 15) << 4 | l & 15, 1])), !n) for (w = this.parsers.length; w-- && !n;)v = this.parsers[w], (g = v.regex.exec(l)) && (n = v.parse(g)); this.rgba = n || []
            }, get: function (a) {
                var l = this.input, n = this.rgba, g; this.stops ? (g = p(l), g.stops = [].concat(g.stops),
                    D(this.stops, function (n, e) { g.stops[e] = [g.stops[e][0], n.get(a)] })) : g = n && B(n[0]) ? "rgb" === a || !a && 1 === n[3] ? "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")" : "a" === a ? n[3] : "rgba(" + n.join(",") + ")" : l; return g
            }, brighten: function (a) { var l, n = this.rgba; if (this.stops) D(this.stops, function (n) { n.brighten(a) }); else if (B(a) && 0 !== a) for (l = 0; 3 > l; l++)n[l] += g(255 * a), 0 > n[l] && (n[l] = 0), 255 < n[l] && (n[l] = 255); return this }, setOpacity: function (a) { this.rgba[3] = a; return this }, tweenTo: function (a, g) {
                var n = this.rgba, l = a.rgba; l.length && n && n.length ?
                    (a = 1 !== l[3] || 1 !== n[3], g = (a ? "rgba(" : "rgb(") + Math.round(l[0] + (n[0] - l[0]) * (1 - g)) + "," + Math.round(l[1] + (n[1] - l[1]) * (1 - g)) + "," + Math.round(l[2] + (n[2] - l[2]) * (1 - g)) + (a ? "," + (l[3] + (n[3] - l[3]) * (1 - g)) : "") + ")") : g = a.input || "none"; return g
            }
        }; a.color = function (g) { return new a.Color(g) }
    })(N); (function (a) {
        var D, B, G = a.addEvent, p = a.animate, g = a.attr, l = a.charts, r = a.color, n = a.css, w = a.createElement, v = a.defined, e = a.deg2rad, h = a.destroyObjectProperties, m = a.doc, c = a.each, f = a.extend, b = a.erase, d = a.grep, y = a.hasTouch, H = a.inArray, J =
            a.isArray, t = a.isFirefox, K = a.isMS, x = a.isObject, C = a.isString, L = a.isWebKit, q = a.merge, A = a.noop, E = a.objectEach, F = a.pick, k = a.pInt, u = a.removeEvent, R = a.stop, M = a.svg, P = a.SVG_NS, I = a.symbolSizes, Q = a.win; D = a.SVGElement = function () { return this }; f(D.prototype, {
                opacity: 1, SVG_NS: P, textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "), init: function (a, k) {
                    this.element = "span" === k ? w(k) : m.createElementNS(this.SVG_NS, k); this.renderer =
                        a
                }, animate: function (z, k, b) { k = a.animObject(F(k, this.renderer.globalAnimation, !0)); 0 !== k.duration ? (b && (k.complete = b), p(this, z, k)) : (this.attr(z, null, b), k.step && k.step.call(this)); return this }, colorGradient: function (z, k, b) {
                    var u = this.renderer, f, O, d, e, y, m, h, M, A, I, x = [], t; z.radialGradient ? O = "radialGradient" : z.linearGradient && (O = "linearGradient"); O && (d = z[O], y = u.gradients, h = z.stops, I = b.radialReference, J(d) && (z[O] = d = { x1: d[0], y1: d[1], x2: d[2], y2: d[3], gradientUnits: "userSpaceOnUse" }), "radialGradient" === O && I &&
                        !v(d.gradientUnits) && (e = d, d = q(d, u.getRadialAttr(I, e), { gradientUnits: "userSpaceOnUse" })), E(d, function (a, z) { "id" !== z && x.push(z, a) }), E(h, function (a) { x.push(a) }), x = x.join(","), y[x] ? I = y[x].attr("id") : (d.id = I = a.uniqueKey(), y[x] = m = u.createElement(O).attr(d).add(u.defs), m.radAttr = e, m.stops = [], c(h, function (z) { 0 === z[1].indexOf("rgba") ? (f = a.color(z[1]), M = f.get("rgb"), A = f.get("a")) : (M = z[1], A = 1); z = u.createElement("stop").attr({ offset: z[0], "stop-color": M, "stop-opacity": A }).add(m); m.stops.push(z) })), t = "url(" + u.url +
                        "#" + I + ")", b.setAttribute(k, t), b.gradient = x, z.toString = function () { return t })
                }, applyTextOutline: function (z) {
                    var k = this.element, u, f, d, q, e; -1 !== z.indexOf("contrast") && (z = z.replace(/contrast/g, this.renderer.getContrast(k.style.fill))); z = z.split(" "); f = z[z.length - 1]; if ((d = z[0]) && "none" !== d && a.svg) {
                        this.fakeTS = !0; z = [].slice.call(k.getElementsByTagName("tspan")); this.ySetter = this.xSetter; d = d.replace(/(^[\d\.]+)(.*?)$/g, function (a, z, k) { return 2 * z + k }); for (e = z.length; e--;)u = z[e], "highcharts-text-outline" ===
                            u.getAttribute("class") && b(z, k.removeChild(u)); q = k.firstChild; c(z, function (a, z) { 0 === z && (a.setAttribute("x", k.getAttribute("x")), z = k.getAttribute("y"), a.setAttribute("y", z || 0), null === z && k.setAttribute("y", 0)); a = a.cloneNode(1); g(a, { "class": "highcharts-text-outline", fill: f, stroke: f, "stroke-width": d, "stroke-linejoin": "round" }); k.insertBefore(a, q) })
                    }
                }, attr: function (a, k, b, u) {
                    var z, f = this.element, d, c = this, O, q; "string" === typeof a && void 0 !== k && (z = a, a = {}, a[z] = k); "string" === typeof a ? c = (this[a + "Getter"] || this._defaultGetter).call(this,
                        a, f) : (E(a, function (z, k) { O = !1; u || R(this, k); this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(k) && (d || (this.symbolAttr(a), d = !0), O = !0); !this.rotation || "x" !== k && "y" !== k || (this.doTransform = !0); O || (q = this[k + "Setter"] || this._defaultSetter, q.call(this, z, k, f), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(k) && this.updateShadows(k, z, q)) }, this), this.afterSetters()); b && b(); return c
                }, afterSetters: function () {
                    this.doTransform && (this.updateTransform(), this.doTransform =
                        !1)
                }, updateShadows: function (a, k, b) { for (var z = this.shadows, u = z.length; u--;)b.call(z[u], "height" === a ? Math.max(k - (z[u].cutHeight || 0), 0) : "d" === a ? this.d : k, a, z[u]) }, addClass: function (a, k) { var z = this.attr("class") || ""; -1 === z.indexOf(a) && (k || (a = (z + (z ? " " : "") + a).replace("  ", " ")), this.attr("class", a)); return this }, hasClass: function (a) { return -1 !== H(a, (this.attr("class") || "").split(" ")) }, removeClass: function (a) { return this.attr("class", (this.attr("class") || "").replace(a, "")) }, symbolAttr: function (a) {
                    var z =
                        this; c("x y r start end width height innerR anchorX anchorY".split(" "), function (k) { z[k] = F(a[k], z[k]) }); z.attr({ d: z.renderer.symbols[z.symbolName](z.x, z.y, z.width, z.height, z) })
                }, clip: function (a) { return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none") }, crisp: function (a, k) {
                    var z = this, b = {}, u; k = k || a.strokeWidth || 0; u = Math.round(k) % 2 / 2; a.x = Math.floor(a.x || z.x || 0) + u; a.y = Math.floor(a.y || z.y || 0) + u; a.width = Math.floor((a.width || z.width || 0) - 2 * u); a.height = Math.floor((a.height || z.height || 0) -
                        2 * u); v(a.strokeWidth) && (a.strokeWidth = k); E(a, function (a, k) { z[k] !== a && (z[k] = b[k] = a) }); return b
                }, css: function (a) {
                    var z = this.styles, b = {}, u = this.element, d, c = "", q, e = !z, y = ["textOutline", "textOverflow", "width"]; a && a.color && (a.fill = a.color); z && E(a, function (a, k) { a !== z[k] && (b[k] = a, e = !0) }); e && (z && (a = f(z, b)), d = this.textWidth = a && a.width && "auto" !== a.width && "text" === u.nodeName.toLowerCase() && k(a.width), this.styles = a, d && !M && this.renderer.forExport && delete a.width, K && !M ? n(this.element, a) : (q = function (a, z) {
                        return "-" +
                            z.toLowerCase()
                    }, E(a, function (a, z) { -1 === H(z, y) && (c += z.replace(/([A-Z])/g, q) + ":" + a + ";") }), c && g(u, "style", c)), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline))); return this
                }, strokeWidth: function () { return this["stroke-width"] || 0 }, on: function (a, k) {
                    var z = this, b = z.element; y && "click" === a ? (b.ontouchstart = function (a) { z.touchEventFired = Date.now(); a.preventDefault(); k.call(b, a) }, b.onclick = function (a) {
                        (-1 === Q.navigator.userAgent.indexOf("Android") ||
                            1100 < Date.now() - (z.touchEventFired || 0)) && k.call(b, a)
                    }) : b["on" + a] = k; return this
                }, setRadialReference: function (a) { var z = this.renderer.gradients[this.element.gradient]; this.element.radialReference = a; z && z.radAttr && z.animate(this.renderer.getRadialAttr(a, z.radAttr)); return this }, translate: function (a, k) { return this.attr({ translateX: a, translateY: k }) }, invert: function (a) { this.inverted = a; this.updateTransform(); return this }, updateTransform: function () {
                    var a = this.translateX || 0, k = this.translateY || 0, b = this.scaleX,
                        u = this.scaleY, f = this.inverted, d = this.rotation, c = this.matrix, q = this.element; f && (a += this.width, k += this.height); a = ["translate(" + a + "," + k + ")"]; v(c) && a.push("matrix(" + c.join(",") + ")"); f ? a.push("rotate(90) scale(-1,1)") : d && a.push("rotate(" + d + " " + F(this.rotationOriginX, q.getAttribute("x"), 0) + " " + F(this.rotationOriginY, q.getAttribute("y") || 0) + ")"); (v(b) || v(u)) && a.push("scale(" + F(b, 1) + " " + F(u, 1) + ")"); a.length && q.setAttribute("transform", a.join(" "))
                }, toFront: function () {
                    var a = this.element; a.parentNode.appendChild(a);
                    return this
                }, align: function (a, k, u) {
                    var z, f, d, c, q = {}; f = this.renderer; d = f.alignedObjects; var e, O; if (a) { if (this.alignOptions = a, this.alignByTranslate = k, !u || C(u)) this.alignTo = z = u || "renderer", b(d, this), d.push(this), u = null } else a = this.alignOptions, k = this.alignByTranslate, z = this.alignTo; u = F(u, f[z], f); z = a.align; f = a.verticalAlign; d = (u.x || 0) + (a.x || 0); c = (u.y || 0) + (a.y || 0); "right" === z ? e = 1 : "center" === z && (e = 2); e && (d += (u.width - (a.width || 0)) / e); q[k ? "translateX" : "x"] = Math.round(d); "bottom" === f ? O = 1 : "middle" === f && (O =
                        2); O && (c += (u.height - (a.height || 0)) / O); q[k ? "translateY" : "y"] = Math.round(c); this[this.placed ? "animate" : "attr"](q); this.placed = !0; this.alignAttr = q; return this
                }, getBBox: function (a, k) {
                    var z, b = this.renderer, u, d = this.element, q = this.styles, O, y = this.textStr, m, h = b.cache, M = b.cacheKeys, A; k = F(k, this.rotation); u = k * e; O = q && q.fontSize; v(y) && (A = y.toString(), -1 === A.indexOf("\x3c") && (A = A.replace(/[0-9]/g, "0")), A += ["", k || 0, O, q && q.width, q && q.textOverflow].join()); A && !a && (z = h[A]); if (!z) {
                        if (d.namespaceURI === this.SVG_NS ||
                            b.forExport) { try { (m = this.fakeTS && function (a) { c(d.querySelectorAll(".highcharts-text-outline"), function (z) { z.style.display = a }) }) && m("none"), z = d.getBBox ? f({}, d.getBBox()) : { width: d.offsetWidth, height: d.offsetHeight }, m && m("") } catch (W) { } if (!z || 0 > z.width) z = { width: 0, height: 0 } } else z = this.htmlGetBBox(); b.isSVG && (a = z.width, b = z.height, q && "11px" === q.fontSize && 17 === Math.round(b) && (z.height = b = 14), k && (z.width = Math.abs(b * Math.sin(u)) + Math.abs(a * Math.cos(u)), z.height = Math.abs(b * Math.cos(u)) + Math.abs(a * Math.sin(u))));
                        if (A && 0 < z.height) { for (; 250 < M.length;)delete h[M.shift()]; h[A] || M.push(A); h[A] = z }
                    } return z
                }, show: function (a) { return this.attr({ visibility: a ? "inherit" : "visible" }) }, hide: function () { return this.attr({ visibility: "hidden" }) }, fadeOut: function (a) { var z = this; z.animate({ opacity: 0 }, { duration: a || 150, complete: function () { z.attr({ y: -9999 }) } }) }, add: function (a) {
                    var z = this.renderer, k = this.element, b; a && (this.parentGroup = a); this.parentInverted = a && a.inverted; void 0 !== this.textStr && z.buildText(this); this.added = !0; if (!a ||
                        a.handleZ || this.zIndex) b = this.zIndexSetter(); b || (a ? a.element : z.box).appendChild(k); if (this.onAdd) this.onAdd(); return this
                }, safeRemoveChild: function (a) { var z = a.parentNode; z && z.removeChild(a) }, destroy: function () {
                    var a = this, k = a.element || {}, u = a.renderer.isSVG && "SPAN" === k.nodeName && a.parentGroup, f = k.ownerSVGElement; k.onclick = k.onmouseout = k.onmouseover = k.onmousemove = k.point = null; R(a); a.clipPath && f && (c(f.querySelectorAll("[clip-path],[CLIP-PATH]"), function (k) {
                        k.getAttribute("clip-path").match(RegExp('[("]#' +
                            a.clipPath.element.id + '[)"]')) && k.removeAttribute("clip-path")
                    }), a.clipPath = a.clipPath.destroy()); if (a.stops) { for (f = 0; f < a.stops.length; f++)a.stops[f] = a.stops[f].destroy(); a.stops = null } a.safeRemoveChild(k); for (a.destroyShadows(); u && u.div && 0 === u.div.childNodes.length;)k = u.parentGroup, a.safeRemoveChild(u.div), delete u.div, u = k; a.alignTo && b(a.renderer.alignedObjects, a); E(a, function (k, z) { delete a[z] }); return null
                }, shadow: function (a, k, b) {
                    var z = [], u, f, d = this.element, c, q, e, y; if (!a) this.destroyShadows(); else if (!this.shadows) {
                        q =
                            F(a.width, 3); e = (a.opacity || .15) / q; y = this.parentInverted ? "(-1,-1)" : "(" + F(a.offsetX, 1) + ", " + F(a.offsetY, 1) + ")"; for (u = 1; u <= q; u++)f = d.cloneNode(0), c = 2 * q + 1 - 2 * u, g(f, { isShadow: "true", stroke: a.color || "#000000", "stroke-opacity": e * u, "stroke-width": c, transform: "translate" + y, fill: "none" }), b && (g(f, "height", Math.max(g(f, "height") - c, 0)), f.cutHeight = c), k ? k.element.appendChild(f) : d.parentNode && d.parentNode.insertBefore(f, d), z.push(f); this.shadows = z
                    } return this
                }, destroyShadows: function () {
                    c(this.shadows || [], function (a) { this.safeRemoveChild(a) },
                        this); this.shadows = void 0
                }, xGetter: function (a) { "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy")); return this._defaultGetter(a) }, _defaultGetter: function (a) { a = F(this[a], this.element ? this.element.getAttribute(a) : null, 0); /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a)); return a }, dSetter: function (a, k, b) { a && a.join && (a = a.join(" ")); /(NaN| {2}|^$)/.test(a) && (a = "M 0 0"); this[k] !== a && (b.setAttribute(k, a), this[k] = a) }, dashstyleSetter: function (a) {
                    var b, u = this["stroke-width"]; "inherit" === u && (u = 1); if (a =
                        a && a.toLowerCase()) { a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (b = a.length; b--;)a[b] = k(a[b]) * u; a = a.join(",").replace(/NaN/g, "none"); this.element.setAttribute("stroke-dasharray", a) }
                }, alignSetter: function (a) { this.element.setAttribute("text-anchor", { left: "start", center: "middle", right: "end" }[a]) }, opacitySetter: function (a,
                    k, b) { this[k] = a; b.setAttribute(k, a) }, titleSetter: function (a) { var k = this.element.getElementsByTagName("title")[0]; k || (k = m.createElementNS(this.SVG_NS, "title"), this.element.appendChild(k)); k.firstChild && k.removeChild(k.firstChild); k.appendChild(m.createTextNode(String(F(a), "").replace(/<[^>]*>/g, ""))) }, textSetter: function (a) { a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this)) }, fillSetter: function (a, k, b) {
                        "string" === typeof a ? b.setAttribute(k, a) : a && this.colorGradient(a,
                            k, b)
                    }, visibilitySetter: function (a, k, b) { "inherit" === a ? b.removeAttribute(k) : this[k] !== a && b.setAttribute(k, a); this[k] = a }, zIndexSetter: function (a, b) {
                        var u = this.renderer, z = this.parentGroup, f = (z || u).element || u.box, d, c = this.element, q, e, u = f === u.box; d = this.added; var y; v(a) && (c.zIndex = a, a = +a, this[b] === a && (d = !1), this[b] = a); if (d) {
                            (a = this.zIndex) && z && (z.handleZ = !0); b = f.childNodes; for (y = b.length - 1; 0 <= y && !q; y--)if (z = b[y], d = z.zIndex, e = !v(d), z !== c) if (0 > a && e && !u && !y) f.insertBefore(c, b[y]), q = !0; else if (k(d) <= a || e &&
                                (!v(a) || 0 <= a)) f.insertBefore(c, b[y + 1] || null), q = !0; q || (f.insertBefore(c, b[u ? 3 : 0] || null), q = !0)
                        } return q
                    }, _defaultSetter: function (a, k, b) { b.setAttribute(k, a) }
            }); D.prototype.yGetter = D.prototype.xGetter; D.prototype.translateXSetter = D.prototype.translateYSetter = D.prototype.rotationSetter = D.prototype.verticalAlignSetter = D.prototype.rotationOriginXSetter = D.prototype.rotationOriginYSetter = D.prototype.scaleXSetter = D.prototype.scaleYSetter = D.prototype.matrixSetter = function (a, k) { this[k] = a; this.doTransform = !0 };
        D.prototype["stroke-widthSetter"] = D.prototype.strokeSetter = function (a, k, b) { this[k] = a; this.stroke && this["stroke-width"] ? (D.prototype.fillSetter.call(this, this.stroke, "stroke", b), b.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === k && 0 === a && this.hasStroke && (b.removeAttribute("stroke"), this.hasStroke = !1) }; B = a.SVGRenderer = function () { this.init.apply(this, arguments) }; f(B.prototype, {
            Element: D, SVG_NS: P, init: function (a, k, b, u, f, d) {
                var z; u = this.createElement("svg").attr({
                    version: "1.1",
                    "class": "highcharts-root"
                }).css(this.getStyle(u)); z = u.element; a.appendChild(z); g(a, "dir", "ltr"); -1 === a.innerHTML.indexOf("xmlns") && g(z, "xmlns", this.SVG_NS); this.isSVG = !0; this.box = z; this.boxWrapper = u; this.alignedObjects = []; this.url = (t || L) && m.getElementsByTagName("base").length ? Q.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : ""; this.createElement("desc").add().element.appendChild(m.createTextNode("Created with Highcharts 6.0.3")); this.defs =
                    this.createElement("defs").add(); this.allowHTML = d; this.forExport = f; this.gradients = {}; this.cache = {}; this.cacheKeys = []; this.imgCount = 0; this.setSize(k, b, !1); var c; t && a.getBoundingClientRect && (k = function () { n(a, { left: 0, top: 0 }); c = a.getBoundingClientRect(); n(a, { left: Math.ceil(c.left) - c.left + "px", top: Math.ceil(c.top) - c.top + "px" }) }, k(), this.unSubPixelFix = G(Q, "resize", k))
            }, getStyle: function (a) {
                return this.style = f({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" },
                    a)
            }, setStyle: function (a) { this.boxWrapper.css(this.getStyle(a)) }, isHidden: function () { return !this.boxWrapper.getBBox().width }, destroy: function () { var a = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); h(this.gradients || {}); this.gradients = null; a && (this.defs = a.destroy()); this.unSubPixelFix && this.unSubPixelFix(); return this.alignedObjects = null }, createElement: function (a) { var k = new this.Element; k.init(this, a); return k }, draw: A, getRadialAttr: function (a, k) {
                return {
                    cx: a[0] - a[2] / 2 + k.cx * a[2], cy: a[1] -
                    a[2] / 2 + k.cy * a[2], r: k.r * a[2]
                }
            }, getSpanWidth: function (a, k) { var b = a.getBBox(!0).width; !M && this.forExport && (b = this.measureSpanWidth(k.firstChild.data, a.styles)); return b }, applyEllipsis: function (a, k, b, u) {
                var f = a.rotation, z = b, d, c = 0, q = b.length, e = function (a) { k.removeChild(k.firstChild); a && k.appendChild(m.createTextNode(a)) }, y; a.rotation = 0; z = this.getSpanWidth(a, k); if (y = z > u) { for (; c <= q;)d = Math.ceil((c + q) / 2), z = b.substring(0, d) + "\u2026", e(z), z = this.getSpanWidth(a, k), c === q ? c = q + 1 : z > u ? q = d - 1 : c = d; 0 === q && e("") } a.rotation =
                    f; return y
            }, escapes: { "\x26": "\x26amp;", "\x3c": "\x26lt;", "\x3e": "\x26gt;", "'": "\x26#39;", '"': "\x26quot" }, buildText: function (a) {
                var b = a.element, u = this, f = u.forExport, z = F(a.textStr, "").toString(), q = -1 !== z.indexOf("\x3c"), e = b.childNodes, y, h, A, I, x = g(b, "x"), t = a.styles, H = a.textWidth, l = t && t.lineHeight, C = t && t.textOutline, v = t && "ellipsis" === t.textOverflow, R = t && "nowrap" === t.whiteSpace, w = t && t.fontSize, Q, J, r = e.length, t = H && !a.added && this.box, K = function (a) {
                    var f; f = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize :
                        w || u.style.fontSize || 12; return l ? k(l) : u.fontMetrics(f, a.getAttribute("style") ? a : b).h
                }, p = function (a) { E(u.escapes, function (k, b) { a = a.replace(new RegExp(k, "g"), b) }); return a }; Q = [z, v, R, l, C, w, H].join(); if (Q !== a.textCache) {
                    for (a.textCache = Q; r--;)b.removeChild(e[r]); q || C || v || H || -1 !== z.indexOf(" ") ? (y = /<.*class="([^"]+)".*>/, h = /<.*style="([^"]+)".*>/, A = /<.*href="([^"]+)".*>/, t && t.appendChild(b), z = q ? z.replace(/<(b|strong)>/g, '\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g, '\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,
                        "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g, "\x3c/span\x3e").split(/<br.*?>/g) : [z], z = d(z, function (a) { return "" !== a }), c(z, function (k, z) {
                            var d, q = 0; k = k.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||"); d = k.split("|||"); c(d, function (k) {
                                if ("" !== k || 1 === d.length) {
                                    var c = {}, e = m.createElementNS(u.SVG_NS, "tspan"), t, E; y.test(k) && (t = k.match(y)[1], g(e, "class", t)); h.test(k) && (E = k.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), g(e, "style", E)); A.test(k) && !f && (g(e,
                                        "onclick", 'location.href\x3d"' + k.match(A)[1] + '"'), g(e, "class", "highcharts-anchor"), n(e, { cursor: "pointer" })); k = p(k.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " "); if (" " !== k) {
                                            e.appendChild(m.createTextNode(k)); q ? c.dx = 0 : z && null !== x && (c.x = x); g(e, c); b.appendChild(e); !q && J && (!M && f && n(e, { display: "block" }), g(e, "dy", K(e))); if (H) {
                                                c = k.replace(/([^\^])-/g, "$1- ").split(" "); t = 1 < d.length || z || 1 < c.length && !R; var O = [], l, C = K(e), F = a.rotation; for (v && (I = u.applyEllipsis(a, e, k, H)); !v && t && (c.length || O.length);)a.rotation = 0,
                                                    l = u.getSpanWidth(a, e), k = l > H, void 0 === I && (I = k), k && 1 !== c.length ? (e.removeChild(e.firstChild), O.unshift(c.pop())) : (c = O, O = [], c.length && !R && (e = m.createElementNS(P, "tspan"), g(e, { dy: C, x: x }), E && g(e, "style", E), b.appendChild(e)), l > H && (H = l)), c.length && e.appendChild(m.createTextNode(c.join(" ").replace(/- /g, "-"))); a.rotation = F
                                            } q++
                                        }
                                }
                            }); J = J || b.childNodes.length
                        }), I && a.attr("title", a.textStr), t && t.removeChild(b), C && a.applyTextOutline && a.applyTextOutline(C)) : b.appendChild(m.createTextNode(p(z)))
                }
            }, getContrast: function (a) {
                a =
                    r(a).rgba; return 510 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF"
            }, button: function (a, k, b, u, d, c, e, y, m) {
                var z = this.label(a, k, b, m, null, null, null, null, "button"), h = 0; z.attr(q({ padding: 8, r: 2 }, d)); var A, M, I, t; d = q({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontWeight: "normal" } }, d); A = d.style; delete d.style; c = q(d, { fill: "#e6e6e6" }, c); M = c.style; delete c.style; e = q(d, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, e); I = e.style; delete e.style; y = q(d, { style: { color: "#cccccc" } },
                    y); t = y.style; delete y.style; G(z.element, K ? "mouseover" : "mouseenter", function () { 3 !== h && z.setState(1) }); G(z.element, K ? "mouseout" : "mouseleave", function () { 3 !== h && z.setState(h) }); z.setState = function (a) { 1 !== a && (z.state = h = a); z.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]); z.attr([d, c, e, y][a || 0]).css([A, M, I, t][a || 0]) }; z.attr(d).css(f({ cursor: "default" }, A)); return z.on("click", function (a) { 3 !== h && u.call(z, a) })
            }, crispLine: function (a,
                k) { a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - k % 2 / 2); a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + k % 2 / 2); return a }, path: function (a) { var k = { fill: "none" }; J(a) ? k.d = a : x(a) && f(k, a); return this.createElement("path").attr(k) }, circle: function (a, k, b) { a = x(a) ? a : { x: a, y: k, r: b }; k = this.createElement("circle"); k.xSetter = k.ySetter = function (a, k, b) { b.setAttribute("c" + k, a) }; return k.attr(a) }, arc: function (a, k, b, u, d, f) { x(a) ? (u = a, k = u.y, b = u.r, a = u.x) : u = { innerR: u, start: d, end: f }; a = this.symbol("arc", a, k, b, b, u); a.r = b; return a }, rect: function (a,
                    k, b, u, d, f) { d = x(a) ? a.r : d; var c = this.createElement("rect"); a = x(a) ? a : void 0 === a ? {} : { x: a, y: k, width: Math.max(b, 0), height: Math.max(u, 0) }; void 0 !== f && (a.strokeWidth = f, a = c.crisp(a)); a.fill = "none"; d && (a.r = d); c.rSetter = function (a, k, b) { g(b, { rx: a, ry: a }) }; return c.attr(a) }, setSize: function (a, k, b) {
                        var u = this.alignedObjects, d = u.length; this.width = a; this.height = k; for (this.boxWrapper.animate({ width: a, height: k }, {
                            step: function () { this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") }) }, duration: F(b, !0) ?
                                void 0 : 0
                        }); d--;)u[d].align()
                    }, g: function (a) { var k = this.createElement("g"); return a ? k.attr({ "class": "highcharts-" + a }) : k }, image: function (a, k, b, u, d) { var c = { preserveAspectRatio: "none" }; 1 < arguments.length && f(c, { x: k, y: b, width: u, height: d }); c = this.createElement("image").attr(c); c.element.setAttributeNS ? c.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : c.element.setAttribute("hc-svg-href", a); return c }, symbol: function (a, k, b, u, d, q) {
                        var e = this, z, y = /^url\((.*?)\)$/, h = y.test(a), A = !h && (this.symbols[a] ?
                            a : "circle"), M = A && this.symbols[A], t = v(k) && M && M.call(this.symbols, Math.round(k), Math.round(b), u, d, q), x, E; M ? (z = this.path(t), z.attr("fill", "none"), f(z, { symbolName: A, x: k, y: b, width: u, height: d }), q && f(z, q)) : h && (x = a.match(y)[1], z = this.image(x), z.imgwidth = F(I[x] && I[x].width, q && q.width), z.imgheight = F(I[x] && I[x].height, q && q.height), E = function () { z.attr({ width: z.width, height: z.height }) }, c(["width", "height"], function (a) {
                                z[a + "Setter"] = function (a, k) {
                                    var b = {}, u = this["img" + k], d = "width" === k ? "translateX" : "translateY";
                                    this[k] = a; v(u) && (this.element && this.element.setAttribute(k, u), this.alignByTranslate || (b[d] = ((this[k] || 0) - u) / 2, this.attr(b)))
                                }
                            }), v(k) && z.attr({ x: k, y: b }), z.isImg = !0, v(z.imgwidth) && v(z.imgheight) ? E() : (z.attr({ width: 0, height: 0 }), w("img", {
                                onload: function () {
                                    var a = l[e.chartIndex]; 0 === this.width && (n(this, { position: "absolute", top: "-999em" }), m.body.appendChild(this)); I[x] = { width: this.width, height: this.height }; z.imgwidth = this.width; z.imgheight = this.height; z.element && E(); this.parentNode && this.parentNode.removeChild(this);
                                    e.imgCount--; if (!e.imgCount && a && a.onload) a.onload()
                                }, src: x
                            }), this.imgCount++)); return z
                    }, symbols: {
                        circle: function (a, k, b, u) { return this.arc(a + b / 2, k + u / 2, b / 2, u / 2, { start: 0, end: 2 * Math.PI, open: !1 }) }, square: function (a, k, b, u) { return ["M", a, k, "L", a + b, k, a + b, k + u, a, k + u, "Z"] }, triangle: function (a, k, b, u) { return ["M", a + b / 2, k, "L", a + b, k + u, a, k + u, "Z"] }, "triangle-down": function (a, k, b, u) { return ["M", a, k, "L", a + b, k, a + b / 2, k + u, "Z"] }, diamond: function (a, k, b, u) { return ["M", a + b / 2, k, "L", a + b, k + u / 2, a + b / 2, k + u, a, k + u / 2, "Z"] }, arc: function (a,
                            k, b, u, d) { var f = d.start, c = d.r || b, q = d.r || u || b, e = d.end - .001; b = d.innerR; u = F(d.open, .001 > Math.abs(d.end - d.start - 2 * Math.PI)); var z = Math.cos(f), y = Math.sin(f), h = Math.cos(e), e = Math.sin(e); d = .001 > d.end - f - Math.PI ? 0 : 1; c = ["M", a + c * z, k + q * y, "A", c, q, 0, d, 1, a + c * h, k + q * e]; v(b) && c.push(u ? "M" : "L", a + b * h, k + b * e, "A", b, b, 0, d, 0, a + b * z, k + b * y); c.push(u ? "" : "Z"); return c }, callout: function (a, k, b, u, d) {
                                var f = Math.min(d && d.r || 0, b, u), c = f + 6, q = d && d.anchorX; d = d && d.anchorY; var e; e = ["M", a + f, k, "L", a + b - f, k, "C", a + b, k, a + b, k, a + b, k + f, "L", a + b, k + u -
                                    f, "C", a + b, k + u, a + b, k + u, a + b - f, k + u, "L", a + f, k + u, "C", a, k + u, a, k + u, a, k + u - f, "L", a, k + f, "C", a, k, a, k, a + f, k]; q && q > b ? d > k + c && d < k + u - c ? e.splice(13, 3, "L", a + b, d - 6, a + b + 6, d, a + b, d + 6, a + b, k + u - f) : e.splice(13, 3, "L", a + b, u / 2, q, d, a + b, u / 2, a + b, k + u - f) : q && 0 > q ? d > k + c && d < k + u - c ? e.splice(33, 3, "L", a, d + 6, a - 6, d, a, d - 6, a, k + f) : e.splice(33, 3, "L", a, u / 2, q, d, a, u / 2, a, k + f) : d && d > u && q > a + c && q < a + b - c ? e.splice(23, 3, "L", q + 6, k + u, q, k + u + 6, q - 6, k + u, a + f, k + u) : d && 0 > d && q > a + c && q < a + b - c && e.splice(3, 3, "L", q - 6, k, q, k - 6, q + 6, k, b - f, k); return e
                            }
                    }, clipRect: function (k, b, u,
                        d) { var f = a.uniqueKey(), c = this.createElement("clipPath").attr({ id: f }).add(this.defs); k = this.rect(k, b, u, d, 0).add(c); k.id = f; k.clipPath = c; k.count = 0; return k }, text: function (a, k, b, u) {
                            var d = {}; if (u && (this.allowHTML || !this.forExport)) return this.html(a, k, b); d.x = Math.round(k || 0); b && (d.y = Math.round(b)); if (a || 0 === a) d.text = a; a = this.createElement("text").attr(d); u || (a.xSetter = function (a, k, b) {
                                var u = b.getElementsByTagName("tspan"), d, f = b.getAttribute(k), c; for (c = 0; c < u.length; c++)d = u[c], d.getAttribute(k) === f && d.setAttribute(k,
                                    a); b.setAttribute(k, a)
                            }); return a
                        }, fontMetrics: function (a, b) { a = a || b && b.style && b.style.fontSize || this.style && this.style.fontSize; a = /px/.test(a) ? k(a) : /em/.test(a) ? parseFloat(a) * (b ? this.fontMetrics(null, b.parentNode).f : 16) : 12; b = 24 > a ? a + 3 : Math.round(1.2 * a); return { h: b, b: Math.round(.8 * b), f: a } }, rotCorr: function (a, k, b) { var u = a; k && b && (u = Math.max(u * Math.cos(k * e), 4)); return { x: -a / 3 * Math.sin(k * e), y: u } }, label: function (k, b, d, e, y, h, m, A, M) {
                            var z = this, I = z.g("button" !== M && "label"), x = I.text = z.text("", 0, 0, m).attr({ zIndex: 1 }),
                                t, E, H = 0, n = 3, l = 0, g, C, R, F, w, Q = {}, P, J, r = /^url\((.*?)\)$/.test(e), K = r, p, O, L, T; M && I.addClass("highcharts-" + M); K = r; p = function () { return (P || 0) % 2 / 2 }; O = function () {
                                    var a = x.element.style, k = {}; E = (void 0 === g || void 0 === C || w) && v(x.textStr) && x.getBBox(); I.width = (g || E.width || 0) + 2 * n + l; I.height = (C || E.height || 0) + 2 * n; J = n + z.fontMetrics(a && a.fontSize, x).b; K && (t || (I.box = t = z.symbols[e] || r ? z.symbol(e) : z.rect(), t.addClass(("button" === M ? "" : "highcharts-label-box") + (M ? " highcharts-" + M + "-box" : "")), t.add(I), a = p(), k.x = a, k.y = (A ? -J :
                                        0) + a), k.width = Math.round(I.width), k.height = Math.round(I.height), t.attr(f(k, Q)), Q = {})
                                }; L = function () { var a = l + n, k; k = A ? 0 : J; v(g) && E && ("center" === w || "right" === w) && (a += { center: .5, right: 1 }[w] * (g - E.width)); if (a !== x.x || k !== x.y) x.attr("x", a), void 0 !== k && x.attr("y", k); x.x = a; x.y = k }; T = function (a, k) { t ? t.attr(a, k) : Q[a] = k }; I.onAdd = function () { x.add(I); I.attr({ text: k || 0 === k ? k : "", x: b, y: d }); t && v(y) && I.attr({ anchorX: y, anchorY: h }) }; I.widthSetter = function (k) { g = a.isNumber(k) ? k : null }; I.heightSetter = function (a) { C = a }; I["text-alignSetter"] =
                                    function (a) { w = a }; I.paddingSetter = function (a) { v(a) && a !== n && (n = I.padding = a, L()) }; I.paddingLeftSetter = function (a) { v(a) && a !== l && (l = a, L()) }; I.alignSetter = function (a) { a = { left: 0, center: .5, right: 1 }[a]; a !== H && (H = a, E && I.attr({ x: R })) }; I.textSetter = function (a) { void 0 !== a && x.textSetter(a); O(); L() }; I["stroke-widthSetter"] = function (a, k) { a && (K = !0); P = this["stroke-width"] = a; T(k, a) }; I.strokeSetter = I.fillSetter = I.rSetter = function (a, k) { "r" !== k && ("fill" === k && a && (K = !0), I[k] = a); T(k, a) }; I.anchorXSetter = function (a, k) {
                                        y = I.anchorX =
                                            a; T(k, Math.round(a) - p() - R)
                                    }; I.anchorYSetter = function (a, k) { h = I.anchorY = a; T(k, a - F) }; I.xSetter = function (a) { I.x = a; H && (a -= H * ((g || E.width) + 2 * n)); R = Math.round(a); I.attr("translateX", R) }; I.ySetter = function (a) { F = I.y = Math.round(a); I.attr("translateY", F) }; var U = I.css; return f(I, {
                                        css: function (a) { if (a) { var k = {}; a = q(a); c(I.textProps, function (b) { void 0 !== a[b] && (k[b] = a[b], delete a[b]) }); x.css(k) } return U.call(I, a) }, getBBox: function () { return { width: E.width + 2 * n, height: E.height + 2 * n, x: E.x - n, y: E.y - n } }, shadow: function (a) {
                                            a &&
                                                (O(), t && t.shadow(a)); return I
                                        }, destroy: function () { u(I.element, "mouseenter"); u(I.element, "mouseleave"); x && (x = x.destroy()); t && (t = t.destroy()); D.prototype.destroy.call(I); I = z = O = L = T = null }
                                    })
                        }
        }); a.Renderer = B
    })(N); (function (a) {
        var D = a.attr, B = a.createElement, G = a.css, p = a.defined, g = a.each, l = a.extend, r = a.isFirefox, n = a.isMS, w = a.isWebKit, v = a.pick, e = a.pInt, h = a.SVGRenderer, m = a.win, c = a.wrap; l(a.SVGElement.prototype, {
            htmlCss: function (a) {
                var b = this.element; if (b = a && "SPAN" === b.tagName && a.width) delete a.width, this.textWidth =
                    b, this.updateTransform(); a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden"); this.styles = l(this.styles, a); G(this.element, a); return this
            }, htmlGetBBox: function () { var a = this.element; return { x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight } }, htmlUpdateTransform: function () {
                if (this.added) {
                    var a = this.renderer, b = this.element, d = this.translateX || 0, c = this.translateY || 0, h = this.x || 0, m = this.y || 0, t = this.textAlign || "left", n = { left: 0, center: .5, right: 1 }[t], x = this.styles;
                    G(b, { marginLeft: d, marginTop: c }); this.shadows && g(this.shadows, function (a) { G(a, { marginLeft: d + 1, marginTop: c + 1 }) }); this.inverted && g(b.childNodes, function (d) { a.invertChild(d, b) }); if ("SPAN" === b.tagName) {
                        var l = this.rotation, v = e(this.textWidth), q = x && x.whiteSpace, A = [l, t, b.innerHTML, this.textWidth, this.textAlign].join(); A !== this.cTT && (x = a.fontMetrics(b.style.fontSize).b, p(l) && this.setSpanRotation(l, n, x), G(b, { width: "", whiteSpace: q || "nowrap" }), b.offsetWidth > v && /[ \-]/.test(b.textContent || b.innerText) && G(b, {
                            width: v +
                            "px", display: "block", whiteSpace: q || "normal"
                        }), this.getSpanCorrection(b.offsetWidth, x, n, l, t)); G(b, { left: h + (this.xCorr || 0) + "px", top: m + (this.yCorr || 0) + "px" }); w && (x = b.offsetHeight); this.cTT = A
                    }
                } else this.alignOnAdd = !0
            }, setSpanRotation: function (a, b, d) { var c = {}, f = this.renderer.getTransformKey(); c[f] = c.transform = "rotate(" + a + "deg)"; c[f + (r ? "Origin" : "-origin")] = c.transformOrigin = 100 * b + "% " + d + "px"; G(this.element, c) }, getSpanCorrection: function (a, b, d) { this.xCorr = -a * d; this.yCorr = -b }
        }); l(h.prototype, {
            getTransformKey: function () {
                return n &&
                    !/Edge/.test(m.navigator.userAgent) ? "-ms-transform" : w ? "-webkit-transform" : r ? "MozTransform" : m.opera ? "-o-transform" : ""
            }, html: function (a, b, d) {
                var f = this.createElement("span"), e = f.element, h = f.renderer, m = h.isSVG, w = function (a, b) { g(["opacity", "visibility"], function (d) { c(a, d + "Setter", function (a, d, f, c) { a.call(this, d, f, c); b[f] = d }) }) }; f.textSetter = function (a) { a !== e.innerHTML && delete this.bBox; this.textStr = a; e.innerHTML = v(a, ""); f.htmlUpdateTransform() }; m && w(f, f.element.style); f.xSetter = f.ySetter = f.alignSetter =
                    f.rotationSetter = function (a, b) { "align" === b && (b = "textAlign"); f[b] = a; f.htmlUpdateTransform() }; f.attr({ text: a, x: Math.round(b), y: Math.round(d) }).css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize, position: "absolute" }); e.style.whiteSpace = "nowrap"; f.css = f.htmlCss; m && (f.add = function (a) {
                        var b, d = h.box.parentNode, c = []; if (this.parentGroup = a) {
                            if (b = a.div, !b) {
                                for (; a;)c.push(a), a = a.parentGroup; g(c.reverse(), function (a) {
                                    function e(k, b) {
                                        a[b] = k; n ? q[h.getTransformKey()] = "translate(" + (a.x || a.translateX) +
                                            "px," + (a.y || a.translateY) + "px)" : "translateX" === b ? q.left = k + "px" : q.top = k + "px"; a.doTransform = !0
                                    } var q, k = D(a.element, "class"); k && (k = { className: k }); b = a.div = a.div || B("div", k, { position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px", display: a.display, opacity: a.opacity, pointerEvents: a.styles && a.styles.pointerEvents }, b || d); q = b.style; l(a, {
                                        classSetter: function (a) { this.element.setAttribute("class", a); b.className = a }, on: function () { c[0].div && f.on.apply({ element: c[0].div }, arguments); return a }, translateXSetter: e,
                                        translateYSetter: e
                                    }); w(a, q)
                                })
                            }
                        } else b = d; b.appendChild(e); f.added = !0; f.alignOnAdd && f.htmlUpdateTransform(); return f
                    }); return f
            }
        })
    })(N); (function (a) {
        function D() { var n = a.defaultOptions.global, l = r.moment; if (n.timezone) { if (l) return function (a) { return -l.tz(a, n.timezone).utcOffset() }; a.error(25) } return n.useUTC && n.getTimezoneOffset } function B() {
            var n = a.defaultOptions.global, g, v = n.useUTC, e = v ? "getUTC" : "get", h = v ? "setUTC" : "set", m = "Minutes Hours Day Date Month FullYear".split(" "), c = m.concat(["Milliseconds",
                "Seconds"]); a.Date = g = n.Date || r.Date; g.hcTimezoneOffset = v && n.timezoneOffset; g.hcGetTimezoneOffset = D(); g.hcMakeTime = function (a, b, d, c, e, h) { var f; v ? (f = g.UTC.apply(0, arguments), f += p(f)) : f = (new g(a, b, l(d, 1), l(c, 0), l(e, 0), l(h, 0))).getTime(); return f }; for (n = 0; n < m.length; n++)g["hcGet" + m[n]] = e + m[n]; for (n = 0; n < c.length; n++)g["hcSet" + c[n]] = h + c[n]
        } var G = a.color, p = a.getTZOffset, g = a.merge, l = a.pick, r = a.win; a.defaultOptions = {
            colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: { useUTC: !0 }, chart: {
                borderRadius: 0,
                defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 20 }, position: { align: "right", x: -10, y: 10 } }, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc"
            }, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, plotOptions: {}, labels: { style: { position: "absolute", color: "#333333" } }, legend: {
                enabled: !0, align: "center", layout: "horizontal", labelFormatter: function () { return this.name },
                borderColor: "#999999", borderRadius: 0, navigation: { activeColor: "#003399", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
            }, loading: {
                labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: {
                    position: "absolute",
                    backgroundColor: "#ffffff", opacity: .5, textAlign: "center"
                }
            }, tooltip: {
                enabled: !0, animation: a.svg, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", padding: 8, snap: a.isTouchDevice ? 25 : 10, backgroundColor: G("#f7f7f7").setOpacity(.85).get(), borderWidth: 1, headerFormat: '\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e', shadow: !0, style: { color: "#333333", cursor: "default", fontSize: "12px", pointerEvents: "none", whiteSpace: "nowrap" }
            }, credits: { enabled: !0, href: "http://www.highcharts.com", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com" }
        }; a.setOptions = function (n) {
            a.defaultOptions = g(!0, a.defaultOptions, n); B();
            return a.defaultOptions
        }; a.getOptions = function () { return a.defaultOptions }; a.defaultPlotOptions = a.defaultOptions.plotOptions; B()
    })(N); (function (a) {
        var D = a.correctFloat, B = a.defined, G = a.destroyObjectProperties, p = a.isNumber, g = a.merge, l = a.pick, r = a.deg2rad; a.Tick = function (a, g, l, e) { this.axis = a; this.pos = g; this.type = l || ""; this.isNewLabel = this.isNew = !0; l || e || this.addLabel() }; a.Tick.prototype = {
            addLabel: function () {
                var a = this.axis, w = a.options, v = a.chart, e = a.categories, h = a.names, m = this.pos, c = w.labels, f = a.tickPositions,
                    b = m === f[0], d = m === f[f.length - 1], h = e ? l(e[m], h[m], m) : m, e = this.label, f = f.info, y; a.isDatetimeAxis && f && (y = w.dateTimeLabelFormats[f.higherRanks[m] || f.unitName]); this.isFirst = b; this.isLast = d; w = a.labelFormatter.call({ axis: a, chart: v, isFirst: b, isLast: d, dateTimeLabelFormat: y, value: a.isLog ? D(a.lin2log(h)) : h, pos: m }); B(e) ? e && e.attr({ text: w }) : (this.labelLength = (this.label = e = B(w) && c.enabled ? v.renderer.text(w, 0, 0, c.useHTML).css(g(c.style)).add(a.labelGroup) : null) && e.getBBox().width, this.rotation = 0)
            }, getLabelSize: function () {
                return this.label ?
                    this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
            }, handleOverflow: function (a) {
                var g = this.axis, n = a.x, e = g.chart.chartWidth, h = g.chart.spacing, m = l(g.labelLeft, Math.min(g.pos, h[3])), h = l(g.labelRight, Math.max(g.pos + g.len, e - h[1])), c = this.label, f = this.rotation, b = { left: 0, center: .5, right: 1 }[g.labelAlign], d = c.getBBox().width, y = g.getSlotWidth(), H = y, J = 1, t, p = {}; if (f) 0 > f && n - b * d < m ? t = Math.round(n / Math.cos(f * r) - m) : 0 < f && n + b * d > h && (t = Math.round((e - n) / Math.cos(f * r))); else if (e = n + (1 - b) * d, n - b * d < m ? H = a.x + H * (1 - b) - m :
                    e > h && (H = h - a.x + H * b, J = -1), H = Math.min(y, H), H < y && "center" === g.labelAlign && (a.x += J * (y - H - b * (y - Math.min(d, H)))), d > H || g.autoRotation && (c.styles || {}).width) t = H; t && (p.width = t, (g.options.labels.style || {}).textOverflow || (p.textOverflow = "ellipsis"), c.css(p))
            }, getPosition: function (a, g, l, e) {
                var h = this.axis, m = h.chart, c = e && m.oldChartHeight || m.chartHeight; return {
                    x: a ? h.translate(g + l, null, null, e) + h.transB : h.left + h.offset + (h.opposite ? (e && m.oldChartWidth || m.chartWidth) - h.right - h.left : 0), y: a ? c - h.bottom + h.offset - (h.opposite ?
                        h.height : 0) : c - h.translate(g + l, null, null, e) - h.transB
                }
            }, getLabelPosition: function (a, g, l, e, h, m, c, f) { var b = this.axis, d = b.transA, y = b.reversed, n = b.staggerLines, v = b.tickRotCorr || { x: 0, y: 0 }, t = h.y; B(t) || (t = 0 === b.side ? l.rotation ? -8 : -l.getBBox().height : 2 === b.side ? v.y + 8 : Math.cos(l.rotation * r) * (v.y - l.getBBox(!1, 0).height / 2)); a = a + h.x + v.x - (m && e ? m * d * (y ? -1 : 1) : 0); g = g + t - (m && !e ? m * d * (y ? 1 : -1) : 0); n && (l = c / (f || 1) % n, b.opposite && (l = n - l - 1), g += b.labelOffset / n * l); return { x: a, y: Math.round(g) } }, getMarkPath: function (a, g, l, e, h, m) {
                return m.crispLine(["M",
                    a, g, "L", a + (h ? 0 : -l), g + (h ? l : 0)], e)
            }, renderGridLine: function (a, g, l) {
                var e = this.axis, h = e.options, m = this.gridLine, c = {}, f = this.pos, b = this.type, d = e.tickmarkOffset, y = e.chart.renderer, n = b ? b + "Grid" : "grid", v = h[n + "LineWidth"], t = h[n + "LineColor"], h = h[n + "LineDashStyle"]; m || (c.stroke = t, c["stroke-width"] = v, h && (c.dashstyle = h), b || (c.zIndex = 1), a && (c.opacity = 0), this.gridLine = m = y.path().attr(c).addClass("highcharts-" + (b ? b + "-" : "") + "grid-line").add(e.gridGroup)); if (!a && m && (a = e.getPlotLinePath(f + d, m.strokeWidth() * l, a, !0))) m[this.isNew ?
                    "attr" : "animate"]({ d: a, opacity: g })
            }, renderMark: function (a, g, v) { var e = this.axis, h = e.options, m = e.chart.renderer, c = this.type, f = c ? c + "Tick" : "tick", b = e.tickSize(f), d = this.mark, y = !d, n = a.x; a = a.y; var r = l(h[f + "Width"], !c && e.isXAxis ? 1 : 0), h = h[f + "Color"]; b && (e.opposite && (b[0] = -b[0]), y && (this.mark = d = m.path().addClass("highcharts-" + (c ? c + "-" : "") + "tick").add(e.axisGroup), d.attr({ stroke: h, "stroke-width": r })), d[y ? "attr" : "animate"]({ d: this.getMarkPath(n, a, b[0], d.strokeWidth() * v, e.horiz, m), opacity: g })) }, renderLabel: function (a,
                g, v, e) { var h = this.axis, m = h.horiz, c = h.options, f = this.label, b = c.labels, d = b.step, y = h.tickmarkOffset, H = !0, n = a.x; a = a.y; f && p(n) && (f.xy = a = this.getLabelPosition(n, a, f, m, b, y, e, d), this.isFirst && !this.isLast && !l(c.showFirstLabel, 1) || this.isLast && !this.isFirst && !l(c.showLastLabel, 1) ? H = !1 : !m || h.isRadial || b.step || b.rotation || g || 0 === v || this.handleOverflow(a), d && e % d && (H = !1), H && p(a.y) ? (a.opacity = v, f[this.isNewLabel ? "attr" : "animate"](a), this.isNewLabel = !1) : (f.attr("y", -9999), this.isNewLabel = !0)) }, render: function (a,
                    g, v) { var e = this.axis, h = e.horiz, m = this.getPosition(h, this.pos, e.tickmarkOffset, g), c = m.x, f = m.y, e = h && c === e.pos + e.len || !h && f === e.pos ? -1 : 1; v = l(v, 1); this.isActive = !0; this.renderGridLine(g, v, e); this.renderMark(m, v, e); this.renderLabel(m, g, v, a); this.isNew = !1 }, destroy: function () { G(this, this.axis) }
        }
    })(N); var V = function (a) {
        var D = a.addEvent, B = a.animObject, G = a.arrayMax, p = a.arrayMin, g = a.color, l = a.correctFloat, r = a.defaultOptions, n = a.defined, w = a.deg2rad, v = a.destroyObjectProperties, e = a.each, h = a.extend, m = a.fireEvent,
            c = a.format, f = a.getMagnitude, b = a.grep, d = a.inArray, y = a.isArray, H = a.isNumber, J = a.isString, t = a.merge, K = a.normalizeTickInterval, x = a.objectEach, C = a.pick, L = a.removeEvent, q = a.splat, A = a.syncTimeout, E = a.Tick, F = function () { this.init.apply(this, arguments) }; a.extend(F.prototype, {
                defaultOptions: {
                    dateTimeLabelFormats: { millisecond: "%H:%M:%S.%L", second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y" }, endOnTick: !1, labels: {
                        enabled: !0, style: {
                            color: "#666666", cursor: "default",
                            fontSize: "11px"
                        }, x: 0
                    }, maxPadding: .01, minorTickLength: 2, minorTickPosition: "outside", minPadding: .01, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", title: { align: "middle", style: { color: "#666666" } }, type: "linear", minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6", tickColor: "#ccd6eb"
                }, defaultYAxisOptions: {
                    endOnTick: !0, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 },
                    maxPadding: .05, minPadding: .05, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: { allowOverlap: !1, enabled: !1, formatter: function () { return a.numberFormat(this.total, -1) }, style: { fontSize: "11px", fontWeight: "bold", color: "#000000", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0
                }, defaultLeftAxisOptions: { labels: { x: -15 }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { x: 15 }, title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, defaultTopAxisOptions: {
                    labels: {
                        autoRotation: [-45],
                        x: 0
                    }, title: { rotation: 0 }
                }, init: function (a, b) {
                    var k = b.isX, u = this; u.chart = a; u.horiz = a.inverted && !u.isZAxis ? !k : k; u.isXAxis = k; u.coll = u.coll || (k ? "xAxis" : "yAxis"); u.opposite = b.opposite; u.side = b.side || (u.horiz ? u.opposite ? 0 : 2 : u.opposite ? 1 : 3); u.setOptions(b); var f = this.options, c = f.type; u.labelFormatter = f.labels.formatter || u.defaultLabelFormatter; u.userOptions = b; u.minPixelPadding = 0; u.reversed = f.reversed; u.visible = !1 !== f.visible; u.zoomEnabled = !1 !== f.zoomEnabled; u.hasNames = "category" === c || !0 === f.categories; u.categories =
                        f.categories || u.hasNames; u.names = u.names || []; u.plotLinesAndBandsGroups = {}; u.isLog = "logarithmic" === c; u.isDatetimeAxis = "datetime" === c; u.positiveValuesOnly = u.isLog && !u.allowNegativeLog; u.isLinked = n(f.linkedTo); u.ticks = {}; u.labelEdge = []; u.minorTicks = {}; u.plotLinesAndBands = []; u.alternateBands = {}; u.len = 0; u.minRange = u.userMinRange = f.minRange || f.maxZoom; u.range = f.range; u.offset = f.offset || 0; u.stacks = {}; u.oldStacks = {}; u.stacksTouched = 0; u.max = null; u.min = null; u.crosshair = C(f.crosshair, q(a.options.tooltip.crosshairs)[k ?
                            0 : 1], !1); b = u.options.events; -1 === d(u, a.axes) && (k ? a.axes.splice(a.xAxis.length, 0, u) : a.axes.push(u), a[u.coll].push(u)); u.series = u.series || []; a.inverted && !u.isZAxis && k && void 0 === u.reversed && (u.reversed = !0); x(b, function (a, k) { D(u, k, a) }); u.lin2log = f.linearToLogConverter || u.lin2log; u.isLog && (u.val2lin = u.log2lin, u.lin2val = u.lin2log)
                }, setOptions: function (a) {
                    this.options = t(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions,
                    this.defaultLeftAxisOptions][this.side], t(r[this.coll], a))
                }, defaultLabelFormatter: function () {
                    var k = this.axis, b = this.value, d = k.categories, f = this.dateTimeLabelFormat, e = r.lang, q = e.numericSymbols, e = e.numericSymbolMagnitude || 1E3, h = q && q.length, m, y = k.options.labels.format, k = k.isLog ? Math.abs(b) : k.tickInterval; if (y) m = c(y, this); else if (d) m = b; else if (f) m = a.dateFormat(f, b); else if (h && 1E3 <= k) for (; h-- && void 0 === m;)d = Math.pow(e, h + 1), k >= d && 0 === 10 * b % d && null !== q[h] && 0 !== b && (m = a.numberFormat(b / d, -1) + q[h]); void 0 ===
                        m && (m = 1E4 <= Math.abs(b) ? a.numberFormat(b, -1) : a.numberFormat(b, -1, void 0, "")); return m
                }, getSeriesExtremes: function () {
                    var a = this, u = a.chart; a.hasVisibleSeries = !1; a.dataMin = a.dataMax = a.threshold = null; a.softThreshold = !a.isXAxis; a.buildStacks && a.buildStacks(); e(a.series, function (k) {
                        if (k.visible || !u.options.chart.ignoreHiddenSeries) {
                            var d = k.options, f = d.threshold, c; a.hasVisibleSeries = !0; a.positiveValuesOnly && 0 >= f && (f = null); if (a.isXAxis) d = k.xData, d.length && (k = p(d), c = G(d), H(k) || k instanceof Date || (d = b(d, H),
                                k = p(d)), a.dataMin = Math.min(C(a.dataMin, d[0], k), k), a.dataMax = Math.max(C(a.dataMax, d[0], c), c)); else if (k.getExtremes(), c = k.dataMax, k = k.dataMin, n(k) && n(c) && (a.dataMin = Math.min(C(a.dataMin, k), k), a.dataMax = Math.max(C(a.dataMax, c), c)), n(f) && (a.threshold = f), !d.softThreshold || a.positiveValuesOnly) a.softThreshold = !1
                        }
                    })
                }, translate: function (a, b, d, f, c, e) {
                    var k = this.linkedParent || this, u = 1, q = 0, h = f ? k.oldTransA : k.transA; f = f ? k.oldMin : k.min; var m = k.minPixelPadding; c = (k.isOrdinal || k.isBroken || k.isLog && c) && k.lin2val;
                    h || (h = k.transA); d && (u *= -1, q = k.len); k.reversed && (u *= -1, q -= u * (k.sector || k.len)); b ? (a = (a * u + q - m) / h + f, c && (a = k.lin2val(a))) : (c && (a = k.val2lin(a)), a = H(f) ? u * (a - f) * h + q + u * m + (H(e) ? h * e : 0) : void 0); return a
                }, toPixels: function (a, b) { return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos) }, toValue: function (a, b) { return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0) }, getPlotLinePath: function (a, b, d, f, c) {
                    var k = this.chart, u = this.left, q = this.top, e, h, m = d && k.oldChartHeight || k.chartHeight, y = d && k.oldChartWidth ||
                        k.chartWidth, A; e = this.transB; var t = function (a, k, b) { if (a < k || a > b) f ? a = Math.min(Math.max(k, a), b) : A = !0; return a }; c = C(c, this.translate(a, null, null, d)); a = d = Math.round(c + e); e = h = Math.round(m - c - e); H(c) ? this.horiz ? (e = q, h = m - this.bottom, a = d = t(a, u, u + this.width)) : (a = u, d = y - this.right, e = h = t(e, q, q + this.height)) : (A = !0, f = !1); return A && !f ? null : k.renderer.crispLine(["M", a, e, "L", d, h], b || 1)
                }, getLinearTickPositions: function (a, b, d) {
                    var k, u = l(Math.floor(b / a) * a); d = l(Math.ceil(d / a) * a); var f = [], c; l(u + a) === u && (c = 20); if (this.single) return [b];
                    for (b = u; b <= d;) { f.push(b); b = l(b + a, c); if (b === k) break; k = b } return f
                }, getMinorTickInterval: function () { var a = this.options; return !0 === a.minorTicks ? C(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval }, getMinorTickPositions: function () {
                    var a = this, b = a.options, d = a.tickPositions, f = a.minorTickInterval, c = [], q = a.pointRangePadding || 0, h = a.min - q, q = a.max + q, m = q - h; if (m && m / f < a.len / 3) if (a.isLog) e(this.paddedTicks, function (k, b, u) { b && c.push.apply(c, a.getLogTickPositions(f, u[b - 1], u[b], !0)) }); else if (a.isDatetimeAxis &&
                        "auto" === this.getMinorTickInterval()) c = c.concat(a.getTimeTicks(a.normalizeTimeTickInterval(f), h, q, b.startOfWeek)); else for (b = h + (d[0] - h) % f; b <= q && b !== c[0]; b += f)c.push(b); 0 !== c.length && a.trimTicks(c); return c
                }, adjustForMinRange: function () {
                    var a = this.options, b = this.min, d = this.max, f, c, q, h, m, y, A, t; this.isXAxis && void 0 === this.minRange && !this.isLog && (n(a.min) || n(a.max) ? this.minRange = null : (e(this.series, function (a) { y = a.xData; for (h = A = a.xIncrement ? 1 : y.length - 1; 0 < h; h--)if (m = y[h] - y[h - 1], void 0 === q || m < q) q = m }),
                        this.minRange = Math.min(5 * q, this.dataMax - this.dataMin))); d - b < this.minRange && (c = this.dataMax - this.dataMin >= this.minRange, t = this.minRange, f = (t - d + b) / 2, f = [b - f, C(a.min, b - f)], c && (f[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), b = G(f), d = [b + t, C(a.max, b + t)], c && (d[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), d = p(d), d - b < t && (f[0] = d - t, f[1] = C(a.min, d - t), b = G(f))); this.min = b; this.max = d
                }, getClosest: function () {
                    var a; this.categories ? a = 1 : e(this.series, function (k) {
                        var b = k.closestPointRange, u = k.visible ||
                            !k.chart.options.chart.ignoreHiddenSeries; !k.noSharedTooltip && n(b) && u && (a = n(a) ? Math.min(a, b) : b)
                    }); return a
                }, nameToX: function (a) { var k = y(this.categories), b = k ? this.categories : this.names, f = a.options.x, c; a.series.requireSorting = !1; n(f) || (f = !1 === this.options.uniqueNames ? a.series.autoIncrement() : d(a.name, b)); -1 === f ? k || (c = b.length) : c = f; void 0 !== c && (this.names[c] = a.name); return c }, updateNames: function () {
                    var a = this; 0 < this.names.length && (this.names.length = 0, this.minRange = this.userMinRange, e(this.series || [],
                        function (k) { k.xIncrement = null; if (!k.points || k.isDirtyData) k.processData(), k.generatePoints(); e(k.points, function (b, u) { var d; b.options && (d = a.nameToX(b), void 0 !== d && d !== b.x && (b.x = d, k.xData[u] = d)) }) }))
                }, setAxisTranslation: function (a) {
                    var k = this, b = k.max - k.min, d = k.axisPointRange || 0, f, c = 0, q = 0, h = k.linkedParent, m = !!k.categories, y = k.transA, A = k.isXAxis; if (A || m || d) f = k.getClosest(), h ? (c = h.minPointOffset, q = h.pointRangePadding) : e(k.series, function (a) {
                        var b = m ? 1 : A ? C(a.options.pointRange, f, 0) : k.axisPointRange || 0;
                        a = a.options.pointPlacement; d = Math.max(d, b); k.single || (c = Math.max(c, J(a) ? 0 : b / 2), q = Math.max(q, "on" === a ? 0 : b))
                    }), h = k.ordinalSlope && f ? k.ordinalSlope / f : 1, k.minPointOffset = c *= h, k.pointRangePadding = q *= h, k.pointRange = Math.min(d, b), A && (k.closestPointRange = f); a && (k.oldTransA = y); k.translationSlope = k.transA = y = k.options.staticScale || k.len / (b + q || 1); k.transB = k.horiz ? k.left : k.bottom; k.minPixelPadding = y * c
                }, minFromRange: function () { return this.max - this.range }, setTickInterval: function (k) {
                    var b = this, d = b.chart, c = b.options,
                        q = b.isLog, h = b.log2lin, y = b.isDatetimeAxis, A = b.isXAxis, t = b.isLinked, x = c.maxPadding, g = c.minPadding, E = c.tickInterval, v = c.tickPixelInterval, F = b.categories, r = b.threshold, J = b.softThreshold, p, w, L, B; y || F || t || this.getTickAmount(); L = C(b.userMin, c.min); B = C(b.userMax, c.max); t ? (b.linkedParent = d[b.coll][c.linkedTo], d = b.linkedParent.getExtremes(), b.min = C(d.min, d.dataMin), b.max = C(d.max, d.dataMax), c.type !== b.linkedParent.options.type && a.error(11, 1)) : (!J && n(r) && (b.dataMin >= r ? (p = r, g = 0) : b.dataMax <= r && (w = r, x = 0)), b.min =
                            C(L, p, b.dataMin), b.max = C(B, w, b.dataMax)); q && (b.positiveValuesOnly && !k && 0 >= Math.min(b.min, C(b.dataMin, b.min)) && a.error(10, 1), b.min = l(h(b.min), 15), b.max = l(h(b.max), 15)); b.range && n(b.max) && (b.userMin = b.min = L = Math.max(b.dataMin, b.minFromRange()), b.userMax = B = b.max, b.range = null); m(b, "foundExtremes"); b.beforePadding && b.beforePadding(); b.adjustForMinRange(); !(F || b.axisPointRange || b.usePercentage || t) && n(b.min) && n(b.max) && (h = b.max - b.min) && (!n(L) && g && (b.min -= h * g), !n(B) && x && (b.max += h * x)); H(c.softMin) && (b.min =
                                Math.min(b.min, c.softMin)); H(c.softMax) && (b.max = Math.max(b.max, c.softMax)); H(c.floor) && (b.min = Math.max(b.min, c.floor)); H(c.ceiling) && (b.max = Math.min(b.max, c.ceiling)); J && n(b.dataMin) && (r = r || 0, !n(L) && b.min < r && b.dataMin >= r ? b.min = r : !n(B) && b.max > r && b.dataMax <= r && (b.max = r)); b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : t && !E && v === b.linkedParent.options.tickPixelInterval ? E = b.linkedParent.tickInterval : C(E, this.tickAmount ? (b.max - b.min) / Math.max(this.tickAmount - 1, 1) : void 0, F ? 1 : (b.max - b.min) *
                                    v / Math.max(b.len, v)); A && !k && e(b.series, function (a) { a.processData(b.min !== b.oldMin || b.max !== b.oldMax) }); b.setAxisTranslation(!0); b.beforeSetTickPositions && b.beforeSetTickPositions(); b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval)); b.pointRange && !E && (b.tickInterval = Math.max(b.pointRange, b.tickInterval)); k = C(c.minTickInterval, b.isDatetimeAxis && b.closestPointRange); !E && b.tickInterval < k && (b.tickInterval = k); y || q || E || (b.tickInterval = K(b.tickInterval, null, f(b.tickInterval),
                                        C(c.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount)); this.tickAmount || (b.tickInterval = b.unsquish()); this.setTickPositions()
                }, setTickPositions: function () {
                    var a = this.options, b, d = a.tickPositions; b = this.getMinorTickInterval(); var c = a.tickPositioner, f = a.startOnTick, q = a.endOnTick; this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval = "auto" === b && this.tickInterval ? this.tickInterval / 5 : b; this.single =
                        this.min === this.max && n(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals); this.tickPositions = b = d && d.slice(); !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()],
                            b[0] === b[1] && (b.length = 1)), this.tickPositions = b, c && (c = c.apply(this, [this.min, this.max]))) && (this.tickPositions = b = c); this.paddedTicks = b.slice(0); this.trimTicks(b, f, q); this.isLinked || (this.single && 2 > b.length && (this.min -= .5, this.max += .5), d || c || this.adjustTickAmount())
                }, trimTicks: function (a, b, d) {
                    var k = a[0], c = a[a.length - 1], f = this.minPointOffset || 0; if (!this.isLinked) {
                        if (b && -Infinity !== k) this.min = k; else for (; this.min - f > a[0];)a.shift(); if (d) this.max = c; else for (; this.max + f < a[a.length - 1];)a.pop(); 0 === a.length &&
                            n(k) && a.push((c + k) / 2)
                    }
                }, alignToOthers: function () { var a = {}, b, d = this.options; !1 === this.chart.options.chart.alignTicks || !1 === d.alignTicks || this.isLog || e(this.chart[this.coll], function (k) { var d = k.options, d = [k.horiz ? d.left : d.top, d.width, d.height, d.pane].join(); k.series.length && (a[d] ? b = !0 : a[d] = 1) }); return b }, getTickAmount: function () {
                    var a = this.options, b = a.tickAmount, d = a.tickPixelInterval; !n(a.tickInterval) && this.len < d && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2); !b && this.alignToOthers() &&
                        (b = Math.ceil(this.len / d) + 1); 4 > b && (this.finalTickAmt = b, b = 5); this.tickAmount = b
                }, adjustTickAmount: function () { var a = this.tickInterval, b = this.tickPositions, d = this.tickAmount, c = this.finalTickAmt, f = b && b.length; if (f < d) { for (; b.length < d;)b.push(l(b[b.length - 1] + a)); this.transA *= (f - 1) / (d - 1); this.max = b[b.length - 1] } else f > d && (this.tickInterval *= 2, this.setTickPositions()); if (n(c)) { for (a = d = b.length; a--;)(3 === c && 1 === a % 2 || 2 >= c && 0 < a && a < d - 1) && b.splice(a, 1); this.finalTickAmt = void 0 } }, setScale: function () {
                    var a, b; this.oldMin =
                        this.min; this.oldMax = this.max; this.oldAxisLength = this.len; this.setAxisSize(); b = this.len !== this.oldAxisLength; e(this.series, function (b) { if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) a = !0 }); b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty =
                            b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
                }, setExtremes: function (a, b, d, c, f) { var k = this, q = k.chart; d = C(d, !0); e(k.series, function (a) { delete a.kdTree }); f = h(f, { min: a, max: b }); m(k, "setExtremes", f, function () { k.userMin = a; k.userMax = b; k.eventArgs = f; d && q.redraw(c) }) }, zoom: function (a, b) {
                    var k = this.dataMin, d = this.dataMax, c = this.options, f = Math.min(k, C(c.min, k)), c = Math.max(d, C(c.max, d)); if (a !== this.min || b !== this.max) this.allowZoomOutside || (n(k) && (a < f && (a = f), a > c && (a = c)),
                        n(d) && (b < f && (b = f), b > c && (b = c))), this.displayBtn = void 0 !== a || void 0 !== b, this.setExtremes(a, b, !1, void 0, { trigger: "zoom" }); return !0
                }, setAxisSize: function () {
                    var b = this.chart, d = this.options, c = d.offsets || [0, 0, 0, 0], f = this.horiz, q = this.width = Math.round(a.relativeLength(C(d.width, b.plotWidth - c[3] + c[1]), b.plotWidth)), e = this.height = Math.round(a.relativeLength(C(d.height, b.plotHeight - c[0] + c[2]), b.plotHeight)), h = this.top = Math.round(a.relativeLength(C(d.top, b.plotTop + c[0]), b.plotHeight, b.plotTop)), d = this.left = Math.round(a.relativeLength(C(d.left,
                        b.plotLeft + c[3]), b.plotWidth, b.plotLeft)); this.bottom = b.chartHeight - e - h; this.right = b.chartWidth - q - d; this.len = Math.max(f ? q : e, 0); this.pos = f ? d : h
                }, getExtremes: function () { var a = this.isLog, b = this.lin2log; return { min: a ? l(b(this.min)) : this.min, max: a ? l(b(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax } }, getThreshold: function (a) {
                    var b = this.isLog, k = this.lin2log, d = b ? k(this.min) : this.min, b = b ? k(this.max) : this.max; null === a ? a = d : d > a ? a = d : b < a && (a = b); return this.translate(a,
                        0, 1, 0, 1)
                }, autoLabelAlign: function (a) { a = (C(a, 0) - 90 * this.side + 720) % 360; return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center" }, tickSize: function (a) { var b = this.options, k = b[a + "Length"], d = C(b[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0); if (d && k) return "inside" === b[a + "Position"] && (k = -k), [k, d] }, labelMetrics: function () { var a = this.tickPositions && this.tickPositions[0] || 0; return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label) }, unsquish: function () {
                    var a =
                        this.options.labels, b = this.horiz, d = this.tickInterval, c = d, f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d), q, h = a.rotation, m = this.labelMetrics(), y, A = Number.MAX_VALUE, t, x = function (a) { a /= f || 1; a = 1 < a ? Math.ceil(a) : 1; return a * d }; b ? (t = !a.staggerLines && !a.step && (n(h) ? [h] : f < C(a.autoRotationLimit, 80) && a.autoRotation)) && e(t, function (a) { var b; if (a === h || a && -90 <= a && 90 >= a) y = x(Math.abs(m.h / Math.sin(w * a))), b = y + Math.abs(a / 360), b < A && (A = b, q = a, c = y) }) : a.step || (c = x(m.h)); this.autoRotation = t; this.labelRotation = C(q,
                            h); return c
                }, getSlotWidth: function () { var a = this.chart, b = this.horiz, d = this.options.labels, c = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), f = a.margin[3]; return b && 2 > (d.step || 0) && !d.rotation && (this.staggerLines || 1) * this.len / c || !b && (d.style && parseInt(d.style.width, 10) || f && f - a.spacing[3] || .33 * a.chartWidth) }, renderUnsquish: function () {
                    var a = this.chart, b = a.renderer, d = this.tickPositions, c = this.ticks, f = this.options.labels, q = this.horiz, h = this.getSlotWidth(), m = Math.max(1, Math.round(h - 2 * (f.padding ||
                        5))), y = {}, A = this.labelMetrics(), x = f.style && f.style.textOverflow, g, E = 0, l, n; J(f.rotation) || (y.rotation = f.rotation || 0); e(d, function (a) { (a = c[a]) && a.labelLength > E && (E = a.labelLength) }); this.maxLabelLength = E; if (this.autoRotation) E > m && E > A.h ? y.rotation = this.labelRotation : this.labelRotation = 0; else if (h && (g = { width: m + "px" }, !x)) for (g.textOverflow = "clip", l = d.length; !q && l--;)if (n = d[l], m = c[n].label) m.styles && "ellipsis" === m.styles.textOverflow ? m.css({ textOverflow: "clip" }) : c[n].labelLength > h && m.css({ width: h + "px" }),
                            m.getBBox().height > this.len / d.length - (A.h - A.f) && (m.specCss = { textOverflow: "ellipsis" }); y.rotation && (g = { width: (E > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px" }, x || (g.textOverflow = "ellipsis")); if (this.labelAlign = f.align || this.autoLabelAlign(this.labelRotation)) y.align = this.labelAlign; e(d, function (a) { var b = (a = c[a]) && a.label; b && (b.attr(y), g && b.css(t(g, b.specCss)), delete b.specCss, a.rotation = y.rotation) }); this.tickRotCorr = b.rotCorr(A.b, this.labelRotation || 0, 0 !== this.side)
                }, hasData: function () {
                    return this.hasVisibleSeries ||
                        n(this.min) && n(this.max) && this.tickPositions && 0 < this.tickPositions.length
                }, addTitle: function (a) {
                    var b = this.chart.renderer, k = this.horiz, d = this.opposite, c = this.options.title, f; this.axisTitle || ((f = c.textAlign) || (f = (k ? { low: "left", middle: "center", high: "right" } : { low: d ? "right" : "left", middle: "center", high: d ? "left" : "right" })[c.align]), this.axisTitle = b.text(c.text, 0, 0, c.useHTML).attr({ zIndex: 7, rotation: c.rotation || 0, align: f }).addClass("highcharts-axis-title").css(c.style).add(this.axisGroup), this.axisTitle.isNew =
                        !0); c.style.width || this.isRadial || this.axisTitle.css({ width: this.len }); this.axisTitle[a ? "show" : "hide"](!0)
                }, generateTick: function (a) { var b = this.ticks; b[a] ? b[a].addLabel() : b[a] = new E(this, a) }, getOffset: function () {
                    var a = this, b = a.chart, d = b.renderer, c = a.options, f = a.tickPositions, q = a.ticks, h = a.horiz, m = a.side, y = b.inverted && !a.isZAxis ? [1, 0, 3, 2][m] : m, A, t, g = 0, E, l = 0, H = c.title, v = c.labels, F = 0, r = b.axisOffset, b = b.clipOffset, J = [-1, 1, 1, -1][m], p = c.className, w = a.axisParent, K = this.tickSize("tick"); A = a.hasData(); a.showAxis =
                        t = A || C(c.showEmpty, !0); a.staggerLines = a.horiz && v.staggerLines; a.axisGroup || (a.gridGroup = d.g("grid").attr({ zIndex: c.gridZIndex || 1 }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (p || "")).add(w), a.axisGroup = d.g("axis").attr({ zIndex: c.zIndex || 2 }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (p || "")).add(w), a.labelGroup = d.g("axis-labels").attr({ zIndex: v.zIndex || 7 }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (p || "")).add(w)); A || a.isLinked ? (e(f, function (b, k) {
                            a.generateTick(b,
                                k)
                        }), a.renderUnsquish(), !1 === v.reserveSpace || 0 !== m && 2 !== m && { 1: "left", 3: "right" }[m] !== a.labelAlign && "center" !== a.labelAlign || e(f, function (a) { F = Math.max(q[a].getLabelSize(), F) }), a.staggerLines && (F *= a.staggerLines, a.labelOffset = F * (a.opposite ? -1 : 1))) : x(q, function (a, b) { a.destroy(); delete q[b] }); H && H.text && !1 !== H.enabled && (a.addTitle(t), t && !1 !== H.reserveSpace && (a.titleOffset = g = a.axisTitle.getBBox()[h ? "height" : "width"], E = H.offset, l = n(E) ? 0 : C(H.margin, h ? 5 : 10))); a.renderLine(); a.offset = J * C(c.offset, r[m]); a.tickRotCorr =
                            a.tickRotCorr || { x: 0, y: 0 }; d = 0 === m ? -a.labelMetrics().h : 2 === m ? a.tickRotCorr.y : 0; l = Math.abs(F) + l; F && (l = l - d + J * (h ? C(v.y, a.tickRotCorr.y + 8 * J) : v.x)); a.axisTitleMargin = C(E, l); r[m] = Math.max(r[m], a.axisTitleMargin + g + J * a.offset, l, A && f.length && K ? K[0] + J * a.offset : 0); c = c.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2); b[y] = Math.max(b[y], c)
                }, getLinePath: function (a) {
                    var b = this.chart, k = this.opposite, d = this.offset, c = this.horiz, f = this.left + (k ? this.width : 0) + d, d = b.chartHeight - this.bottom - (k ? this.height : 0) + d; k && (a *= -1);
                    return b.renderer.crispLine(["M", c ? this.left : f, c ? d : this.top, "L", c ? b.chartWidth - this.right : f, c ? d : b.chartHeight - this.bottom], a)
                }, renderLine: function () { this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 })) }, getTitlePosition: function () {
                    var a = this.horiz, b = this.left, d = this.top, c = this.len, f = this.options.title, q = a ? b : d, e = this.opposite, h = this.offset, m = f.x ||
                        0, y = f.y || 0, A = this.axisTitle, t = this.chart.renderer.fontMetrics(f.style && f.style.fontSize, A), A = Math.max(A.getBBox(null, 0).height - t.h - 1, 0), c = { low: q + (a ? 0 : c), middle: q + c / 2, high: q + (a ? c : 0) }[f.align], b = (a ? d + this.height : b) + (a ? 1 : -1) * (e ? -1 : 1) * this.axisTitleMargin + [-A, A, t.f, -A][this.side]; return { x: a ? c + m : b + (e ? this.width : 0) + h + m, y: a ? b + y - (e ? this.height : 0) + h : c + y }
                }, renderMinorTick: function (a) {
                    var b = this.chart.hasRendered && H(this.oldMin), d = this.minorTicks; d[a] || (d[a] = new E(this, a, "minor")); b && d[a].isNew && d[a].render(null,
                        !0); d[a].render(null, !1, 1)
                }, renderTick: function (a, b) { var d = this.isLinked, k = this.ticks, c = this.chart.hasRendered && H(this.oldMin); if (!d || a >= this.min && a <= this.max) k[a] || (k[a] = new E(this, a)), c && k[a].isNew && k[a].render(b, !0, .1), k[a].render(b) }, render: function () {
                    var b = this, d = b.chart, c = b.options, f = b.isLog, q = b.lin2log, h = b.isLinked, m = b.tickPositions, y = b.axisTitle, t = b.ticks, g = b.minorTicks, l = b.alternateBands, n = c.stackLabels, C = c.alternateGridColor, v = b.tickmarkOffset, F = b.axisLine, r = b.showAxis, J = B(d.renderer.globalAnimation),
                        p, w; b.labelEdge.length = 0; b.overlap = !1; e([t, g, l], function (a) { x(a, function (a) { a.isActive = !1 }) }); if (b.hasData() || h) b.minorTickInterval && !b.categories && e(b.getMinorTickPositions(), function (a) { b.renderMinorTick(a) }), m.length && (e(m, function (a, d) { b.renderTick(a, d) }), v && (0 === b.min || b.single) && (t[-1] || (t[-1] = new E(b, -1, null, !0)), t[-1].render(-1))), C && e(m, function (c, k) {
                            w = void 0 !== m[k + 1] ? m[k + 1] + v : b.max - v; 0 === k % 2 && c < b.max && w <= b.max + (d.polar ? -v : v) && (l[c] || (l[c] = new a.PlotLineOrBand(b)), p = c + v, l[c].options = {
                                from: f ?
                                    q(p) : p, to: f ? q(w) : w, color: C
                            }, l[c].render(), l[c].isActive = !0)
                        }), b._addedPlotLB || (e((c.plotLines || []).concat(c.plotBands || []), function (a) { b.addPlotBandOrLine(a) }), b._addedPlotLB = !0); e([t, g, l], function (a) { var b, c = [], k = J.duration; x(a, function (a, b) { a.isActive || (a.render(b, !1, 0), a.isActive = !1, c.push(b)) }); A(function () { for (b = c.length; b--;)a[c[b]] && !a[c[b]].isActive && (a[c[b]].destroy(), delete a[c[b]]) }, a !== l && d.hasRendered && k ? k : 0) }); F && (F[F.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(F.strokeWidth()) }),
                            F.isPlaced = !0, F[r ? "show" : "hide"](!0)); y && r && (c = b.getTitlePosition(), H(c.y) ? (y[y.isNew ? "attr" : "animate"](c), y.isNew = !1) : (y.attr("y", -9999), y.isNew = !0)); n && n.enabled && b.renderStackTotals(); b.isDirty = !1
                }, redraw: function () { this.visible && (this.render(), e(this.plotLinesAndBands, function (a) { a.render() })); e(this.series, function (a) { a.isDirty = !0 }) }, keepProps: "extKey hcEvents names series userMax userMin".split(" "), destroy: function (a) {
                    var b = this, c = b.stacks, k = b.plotLinesAndBands, f; a || L(b); x(c, function (a, b) {
                        v(a);
                        c[b] = null
                    }); e([b.ticks, b.minorTicks, b.alternateBands], function (a) { v(a) }); if (k) for (a = k.length; a--;)k[a].destroy(); e("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function (a) { b[a] && (b[a] = b[a].destroy()) }); for (f in b.plotLinesAndBandsGroups) b.plotLinesAndBandsGroups[f] = b.plotLinesAndBandsGroups[f].destroy(); x(b, function (a, c) { -1 === d(c, b.keepProps) && delete b[c] })
                }, drawCrosshair: function (a, b) {
                    var d, c = this.crosshair, k = C(c.snap, !0), f, q = this.cross; a || (a = this.cross && this.cross.e);
                    this.crosshair && !1 !== (n(b) || !k) ? (k ? n(b) && (f = this.isXAxis ? b.plotX : this.len - b.plotY) : f = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos), n(f) && (d = this.getPlotLinePath(b && (this.isXAxis ? b.x : C(b.stackY, b.y)), null, null, null, f) || null), n(d) ? (b = this.categories && !this.isRadial, q || (this.cross = q = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (b ? "category " : "thin ") + c.className).attr({ zIndex: C(c.zIndex, 2) }).add(), q.attr({
                        stroke: c.color || (b ? g("#ccd6eb").setOpacity(.25).get() :
                            "#cccccc"), "stroke-width": C(c.width, 1)
                    }).css({ "pointer-events": "none" }), c.dashStyle && q.attr({ dashstyle: c.dashStyle })), q.show().attr({ d: d }), b && !c.width && q.attr({ "stroke-width": this.transA }), this.cross.e = a) : this.hideCrosshair()) : this.hideCrosshair()
                }, hideCrosshair: function () { this.cross && this.cross.hide() }
            }); return a.Axis = F
    }(N); (function (a) {
        var D = a.Axis, B = a.Date, G = a.dateFormat, p = a.defaultOptions, g = a.defined, l = a.each, r = a.extend, n = a.getMagnitude, w = a.getTZOffset, v = a.normalizeTickInterval, e = a.pick, h = a.timeUnits;
        D.prototype.getTimeTicks = function (a, c, f, b) {
            var d = [], m = {}, n = p.global.useUTC, v, t = new B(c - Math.max(w(c), w(f))), K = B.hcMakeTime, x = a.unitRange, C = a.count, L, q; if (g(c)) {
                t[B.hcSetMilliseconds](x >= h.second ? 0 : C * Math.floor(t.getMilliseconds() / C)); if (x >= h.second) t[B.hcSetSeconds](x >= h.minute ? 0 : C * Math.floor(t.getSeconds() / C)); if (x >= h.minute) t[B.hcSetMinutes](x >= h.hour ? 0 : C * Math.floor(t[B.hcGetMinutes]() / C)); if (x >= h.hour) t[B.hcSetHours](x >= h.day ? 0 : C * Math.floor(t[B.hcGetHours]() / C)); if (x >= h.day) t[B.hcSetDate](x >= h.month ?
                    1 : C * Math.floor(t[B.hcGetDate]() / C)); x >= h.month && (t[B.hcSetMonth](x >= h.year ? 0 : C * Math.floor(t[B.hcGetMonth]() / C)), v = t[B.hcGetFullYear]()); if (x >= h.year) t[B.hcSetFullYear](v - v % C); if (x === h.week) t[B.hcSetDate](t[B.hcGetDate]() - t[B.hcGetDay]() + e(b, 1)); v = t[B.hcGetFullYear](); b = t[B.hcGetMonth](); var A = t[B.hcGetDate](), E = t[B.hcGetHours](); if (B.hcTimezoneOffset || B.hcGetTimezoneOffset) q = (!n || !!B.hcGetTimezoneOffset) && (f - c > 4 * h.month || w(c) !== w(f)), t = t.getTime(), L = w(t), t = new B(t + L); n = t.getTime(); for (c = 1; n < f;)d.push(n),
                        n = x === h.year ? K(v + c * C, 0) : x === h.month ? K(v, b + c * C) : !q || x !== h.day && x !== h.week ? q && x === h.hour ? K(v, b, A, E + c * C, 0, 0, L) - L : n + x * C : K(v, b, A + c * C * (x === h.day ? 1 : 7)), c++; d.push(n); x <= h.hour && 1E4 > d.length && l(d, function (a) { 0 === a % 18E5 && "000000000" === G("%H%M%S%L", a) && (m[a] = "day") })
            } d.info = r(a, { higherRanks: m, totalRange: x * C }); return d
        }; D.prototype.normalizeTimeTickInterval = function (a, c) {
            var f = c || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]],
            ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]]; c = f[f.length - 1]; var b = h[c[0]], d = c[1], e; for (e = 0; e < f.length && !(c = f[e], b = h[c[0]], d = c[1], f[e + 1] && a <= (b * d[d.length - 1] + h[f[e + 1][0]]) / 2); e++); b === h.year && a < 5 * b && (d = [1, 2, 5]); a = v(a / b, d, "year" === c[0] ? Math.max(n(a / b), 1) : 1); return { unitRange: b, count: a, unitName: c[0] }
        }
    })(N); (function (a) {
        var D = a.Axis, B = a.getMagnitude, G = a.map, p = a.normalizeTickInterval, g = a.pick; D.prototype.getLogTickPositions = function (a, r, n, w) {
            var l = this.options, e = this.len, h = this.lin2log,
                m = this.log2lin, c = []; w || (this._minorAutoInterval = null); if (.5 <= a) a = Math.round(a), c = this.getLinearTickPositions(a, r, n); else if (.08 <= a) for (var e = Math.floor(r), f, b, d, y, H, l = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; e < n + 1 && !H; e++)for (b = l.length, f = 0; f < b && !H; f++)d = m(h(e) * l[f]), d > r && (!w || y <= n) && void 0 !== y && c.push(y), y > n && (H = !0), y = d; else r = h(r), n = h(n), a = w ? this.getMinorTickInterval() : l.tickInterval, a = g("auto" === a ? null : a, this._minorAutoInterval, l.tickPixelInterval / (w ? 5 : 1) * (n - r) / ((w ? e / this.tickPositions.length :
                    e) || 1)), a = p(a, null, B(a)), c = G(this.getLinearTickPositions(a, r, n), m), w || (this._minorAutoInterval = a / 5); w || (this.tickInterval = a); return c
        }; D.prototype.log2lin = function (a) { return Math.log(a) / Math.LN10 }; D.prototype.lin2log = function (a) { return Math.pow(10, a) }
    })(N); (function (a, D) {
        var B = a.arrayMax, G = a.arrayMin, p = a.defined, g = a.destroyObjectProperties, l = a.each, r = a.erase, n = a.merge, w = a.pick; a.PlotLineOrBand = function (a, e) { this.axis = a; e && (this.options = e, this.id = e.id) }; a.PlotLineOrBand.prototype = {
            render: function () {
                var g =
                    this, e = g.axis, h = e.horiz, m = g.options, c = m.label, f = g.label, b = m.to, d = m.from, y = m.value, l = p(d) && p(b), r = p(y), t = g.svgElem, K = !t, x = [], C = m.color, L = w(m.zIndex, 0), q = m.events, x = { "class": "highcharts-plot-" + (l ? "band " : "line ") + (m.className || "") }, A = {}, E = e.chart.renderer, F = l ? "bands" : "lines", k = e.log2lin; e.isLog && (d = k(d), b = k(b), y = k(y)); r ? (x = { stroke: C, "stroke-width": m.width }, m.dashStyle && (x.dashstyle = m.dashStyle)) : l && (C && (x.fill = C), m.borderWidth && (x.stroke = m.borderColor, x["stroke-width"] = m.borderWidth)); A.zIndex = L; F +=
                        "-" + L; (C = e.plotLinesAndBandsGroups[F]) || (e.plotLinesAndBandsGroups[F] = C = E.g("plot-" + F).attr(A).add()); K && (g.svgElem = t = E.path().attr(x).add(C)); if (r) x = e.getPlotLinePath(y, t.strokeWidth()); else if (l) x = e.getPlotBandPath(d, b, m); else return; K && x && x.length ? (t.attr({ d: x }), q && a.objectEach(q, function (a, b) { t.on(b, function (a) { q[b].apply(g, [a]) }) })) : t && (x ? (t.show(), t.animate({ d: x })) : (t.hide(), f && (g.label = f = f.destroy()))); c && p(c.text) && x && x.length && 0 < e.width && 0 < e.height && !x.flat ? (c = n({
                            align: h && l && "center", x: h ?
                                !l && 4 : 10, verticalAlign: !h && l && "middle", y: h ? l ? 16 : 10 : l ? 6 : -4, rotation: h && !l && 90
                        }, c), this.renderLabel(c, x, l, L)) : f && f.hide(); return g
            }, renderLabel: function (a, e, h, m) {
                var c = this.label, f = this.axis.chart.renderer; c || (c = { align: a.textAlign || a.align, rotation: a.rotation, "class": "highcharts-plot-" + (h ? "band" : "line") + "-label " + (a.className || "") }, c.zIndex = m, this.label = c = f.text(a.text, 0, 0, a.useHTML).attr(c).add(), c.css(a.style)); m = e.xBounds || [e[1], e[4], h ? e[6] : e[1]]; e = e.yBounds || [e[2], e[5], h ? e[7] : e[2]]; h = G(m); f = G(e);
                c.align(a, !1, { x: h, y: f, width: B(m) - h, height: B(e) - f }); c.show()
            }, destroy: function () { r(this.axis.plotLinesAndBands, this); delete this.axis; g(this) }
        }; a.extend(D.prototype, {
            getPlotBandPath: function (a, e) {
                var h = this.getPlotLinePath(e, null, null, !0), m = this.getPlotLinePath(a, null, null, !0), c = [], f = this.horiz, b = 1, d; a = a < this.min && e < this.min || a > this.max && e > this.max; if (m && h) for (a && (d = m.toString() === h.toString(), b = 0), a = 0; a < m.length; a += 6)f && h[a + 1] === m[a + 1] ? (h[a + 1] += b, h[a + 4] += b) : f || h[a + 2] !== m[a + 2] || (h[a + 2] += b, h[a + 5] +=
                    b), c.push("M", m[a + 1], m[a + 2], "L", m[a + 4], m[a + 5], h[a + 4], h[a + 5], h[a + 1], h[a + 2], "z"), c.flat = d; return c
            }, addPlotBand: function (a) { return this.addPlotBandOrLine(a, "plotBands") }, addPlotLine: function (a) { return this.addPlotBandOrLine(a, "plotLines") }, addPlotBandOrLine: function (g, e) { var h = (new a.PlotLineOrBand(this, g)).render(), m = this.userOptions; h && (e && (m[e] = m[e] || [], m[e].push(g)), this.plotLinesAndBands.push(h)); return h }, removePlotBandOrLine: function (a) {
                for (var e = this.plotLinesAndBands, h = this.options, m = this.userOptions,
                    c = e.length; c--;)e[c].id === a && e[c].destroy(); l([h.plotLines || [], m.plotLines || [], h.plotBands || [], m.plotBands || []], function (f) { for (c = f.length; c--;)f[c].id === a && r(f, f[c]) })
            }, removePlotBand: function (a) { this.removePlotBandOrLine(a) }, removePlotLine: function (a) { this.removePlotBandOrLine(a) }
        })
    })(N, V); (function (a) {
        var D = a.dateFormat, B = a.each, G = a.extend, p = a.format, g = a.isNumber, l = a.map, r = a.merge, n = a.pick, w = a.splat, v = a.syncTimeout, e = a.timeUnits; a.Tooltip = function () { this.init.apply(this, arguments) }; a.Tooltip.prototype =
            {
                init: function (a, e) { this.chart = a; this.options = e; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden = !0; this.split = e.split && !a.inverted; this.shared = e.shared || this.split }, cleanSplit: function (a) { B(this.chart.series, function (e) { var c = e && e.tt; c && (!c.isActive || a ? e.tt = c.destroy() : c.isActive = !1) }) }, getLabel: function () {
                    var a = this.chart.renderer, e = this.options; this.label || (this.split ? this.label = a.g("tooltip") : (this.label = a.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                        padding: e.padding,
                        r: e.borderRadius
                    }), this.label.attr({ fill: e.backgroundColor, "stroke-width": e.borderWidth }).css(e.style).shadow(e.shadow)), this.label.attr({ zIndex: 8 }).add()); return this.label
                }, update: function (a) { this.destroy(); r(!0, this.chart.options.tooltip.userOptions, a); this.init(this.chart, r(!0, this.options, a)) }, destroy: function () { this.label && (this.label = this.label.destroy()); this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()); clearTimeout(this.hideTimer); clearTimeout(this.tooltipTimeout) },
                move: function (a, e, c, f) { var b = this, d = b.now, h = !1 !== b.options.animation && !b.isHidden && (1 < Math.abs(a - d.x) || 1 < Math.abs(e - d.y)), m = b.followPointer || 1 < b.len; G(d, { x: h ? (2 * d.x + a) / 3 : a, y: h ? (d.y + e) / 2 : e, anchorX: m ? void 0 : h ? (2 * d.anchorX + c) / 3 : c, anchorY: m ? void 0 : h ? (d.anchorY + f) / 2 : f }); b.getLabel().attr(d); h && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () { b && b.move(a, e, c, f) }, 32)) }, hide: function (a) {
                    var e = this; clearTimeout(this.hideTimer); a = n(a, this.options.hideDelay, 500); this.isHidden || (this.hideTimer =
                        v(function () { e.getLabel()[a ? "fadeOut" : "hide"](); e.isHidden = !0 }, a))
                }, getAnchor: function (a, e) {
                    var c, f = this.chart, b = f.inverted, d = f.plotTop, h = f.plotLeft, m = 0, g = 0, t, n; a = w(a); c = a[0].tooltipPos; this.followPointer && e && (void 0 === e.chartX && (e = f.pointer.normalize(e)), c = [e.chartX - f.plotLeft, e.chartY - d]); c || (B(a, function (a) { t = a.series.yAxis; n = a.series.xAxis; m += a.plotX + (!b && n ? n.left - h : 0); g += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!b && t ? t.top - d : 0) }), m /= a.length, g /= a.length, c = [b ? f.plotWidth - g : m, this.shared &&
                        !b && 1 < a.length && e ? e.chartY - d : b ? f.plotHeight - m : g]); return l(c, Math.round)
                }, getPosition: function (a, e, c) {
                    var f = this.chart, b = this.distance, d = {}, h = f.inverted && c.h || 0, m, g = ["y", f.chartHeight, e, c.plotY + f.plotTop, f.plotTop, f.plotTop + f.plotHeight], t = ["x", f.chartWidth, a, c.plotX + f.plotLeft, f.plotLeft, f.plotLeft + f.plotWidth], l = !this.followPointer && n(c.ttBelow, !f.inverted === !!c.negative), x = function (a, c, f, k, e, q) {
                        var m = f < k - b, y = k + b + f < c, u = k - b - f; k += b; if (l && y) d[a] = k; else if (!l && m) d[a] = u; else if (m) d[a] = Math.min(q - f, 0 >
                            u - h ? u : u - h); else if (y) d[a] = Math.max(e, k + h + f > c ? k : k + h); else return !1
                    }, C = function (a, c, f, k) { var e; k < b || k > c - b ? e = !1 : d[a] = k < f / 2 ? 1 : k > c - f / 2 ? c - f - 2 : k - f / 2; return e }, r = function (a) { var b = g; g = t; t = b; m = a }, q = function () { !1 !== x.apply(0, g) ? !1 !== C.apply(0, t) || m || (r(!0), q()) : m ? d.x = d.y = 0 : (r(!0), q()) }; (f.inverted || 1 < this.len) && r(); q(); return d
                }, defaultFormatter: function (a) { var e = this.points || w(this), c; c = [a.tooltipFooterHeaderFormatter(e[0])]; c = c.concat(a.bodyFormatter(e)); c.push(a.tooltipFooterHeaderFormatter(e[0], !0)); return c },
                refresh: function (a, e) {
                    var c, f = this.options, b, d = a, h, m = {}, g = []; c = f.formatter || this.defaultFormatter; var m = this.shared, t; f.enabled && (clearTimeout(this.hideTimer), this.followPointer = w(d)[0].series.tooltipOptions.followPointer, h = this.getAnchor(d, e), e = h[0], b = h[1], !m || d.series && d.series.noSharedTooltip ? m = d.getLabelConfig() : (B(d, function (a) { a.setState("hover"); g.push(a.getLabelConfig()) }), m = { x: d[0].category, y: d[0].y }, m.points = g, d = d[0]), this.len = g.length, m = c.call(m, this), t = d.series, this.distance = n(t.tooltipOptions.distance,
                        16), !1 === m ? this.hide() : (c = this.getLabel(), this.isHidden && c.attr({ opacity: 1 }).show(), this.split ? this.renderSplit(m, w(a)) : (f.style.width || c.css({ width: this.chart.spacingBox.width }), c.attr({ text: m && m.join ? m.join("") : m }), c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + n(d.colorIndex, t.colorIndex)), c.attr({ stroke: f.borderColor || d.color || t.color || "#666666" }), this.updatePosition({ plotX: e, plotY: b, negative: d.negative, ttBelow: d.ttBelow, h: h[2] || 0 })), this.isHidden = !1))
                }, renderSplit: function (e,
                    m) {
                    var c = this, f = [], b = this.chart, d = b.renderer, h = !0, g = this.options, l = 0, t = this.getLabel(); a.isString(e) && (e = [!1, e]); B(e.slice(0, m.length + 1), function (a, e) {
                        if (!1 !== a) {
                            e = m[e - 1] || { isHeader: !0, plotX: m[0].plotX }; var y = e.series || c, x = y.tt, q = e.series || {}, A = "highcharts-color-" + n(e.colorIndex, q.colorIndex, "none"); x || (y.tt = x = d.label(null, null, null, "callout", null, null, g.useHTML).addClass("highcharts-tooltip-box " + A).attr({
                                padding: g.padding, r: g.borderRadius, fill: g.backgroundColor, stroke: g.borderColor || e.color || q.color ||
                                "#333333", "stroke-width": g.borderWidth
                            }).add(t)); x.isActive = !0; x.attr({ text: a }); x.css(g.style).shadow(g.shadow); a = x.getBBox(); q = a.width + x.strokeWidth(); e.isHeader ? (l = a.height, q = Math.max(0, Math.min(e.plotX + b.plotLeft - q / 2, b.chartWidth - q))) : q = e.plotX + b.plotLeft - n(g.distance, 16) - q; 0 > q && (h = !1); a = (e.series && e.series.yAxis && e.series.yAxis.pos) + (e.plotY || 0); a -= b.plotTop; f.push({ target: e.isHeader ? b.plotHeight + l : a, rank: e.isHeader ? 1 : 0, size: y.tt.getBBox().height + 1, point: e, x: q, tt: x })
                        }
                    }); this.cleanSplit(); a.distribute(f,
                        b.plotHeight + l); B(f, function (a) { var d = a.point, c = d.series; a.tt.attr({ visibility: void 0 === a.pos ? "hidden" : "inherit", x: h || d.isHeader ? a.x : d.plotX + b.plotLeft + n(g.distance, 16), y: a.pos + b.plotTop, anchorX: d.isHeader ? d.plotX + b.plotLeft : d.plotX + c.xAxis.pos, anchorY: d.isHeader ? a.pos + b.plotTop - 15 : d.plotY + c.yAxis.pos }) })
                }, updatePosition: function (a) {
                    var e = this.chart, c = this.getLabel(), c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a); this.move(Math.round(c.x), Math.round(c.y || 0), a.plotX + e.plotLeft,
                        a.plotY + e.plotTop)
                }, getDateFormat: function (a, m, c, f) { var b = D("%m-%d %H:%M:%S.%L", m), d, h, g = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, l = "millisecond"; for (h in e) { if (a === e.week && +D("%w", m) === c && "00:00:00.000" === b.substr(6)) { h = "week"; break } if (e[h] > a) { h = l; break } if (g[h] && b.substr(g[h]) !== "01-01 00:00:00.000".substr(g[h])) break; "week" !== h && (l = h) } h && (d = f[h]); return d }, getXDateFormat: function (a, e, c) {
                    e = e.dateTimeLabelFormats; var f = c && c.closestPointRange; return (f ? this.getDateFormat(f, a.x, c.options.startOfWeek,
                        e) : e.day) || e.year
                }, tooltipFooterHeaderFormatter: function (a, e) { e = e ? "footer" : "header"; var c = a.series, f = c.tooltipOptions, b = f.xDateFormat, d = c.xAxis, h = d && "datetime" === d.options.type && g(a.key), m = f[e + "Format"]; h && !b && (b = this.getXDateFormat(a, f, d)); h && b && B(a.point && a.point.tooltipDateKeys || ["key"], function (a) { m = m.replace("{point." + a + "}", "{point." + a + ":" + b + "}") }); return p(m, { point: a, series: c }) }, bodyFormatter: function (a) {
                    return l(a, function (a) {
                        var c = a.series.tooltipOptions; return (c[(a.point.formatPrefix || "point") +
                            "Formatter"] || a.point.tooltipFormatter).call(a.point, c[(a.point.formatPrefix || "point") + "Format"])
                    })
                }
            }
    })(N); (function (a) {
        var D = a.addEvent, B = a.attr, G = a.charts, p = a.color, g = a.css, l = a.defined, r = a.each, n = a.extend, w = a.find, v = a.fireEvent, e = a.isObject, h = a.offset, m = a.pick, c = a.splat, f = a.Tooltip; a.Pointer = function (a, d) { this.init(a, d) }; a.Pointer.prototype = {
            init: function (a, d) {
                this.options = d; this.chart = a; this.runChartClick = d.chart.events && !!d.chart.events.click; this.pinchDown = []; this.lastValidTouch = {}; f && (a.tooltip =
                    new f(a, d.tooltip), this.followTouchMove = m(d.tooltip.followTouchMove, !0)); this.setDOMEvents()
            }, zoomOption: function (a) { var b = this.chart, c = b.options.chart, f = c.zoomType || "", b = b.inverted; /touch/.test(a.type) && (f = m(c.pinchType, f)); this.zoomX = a = /x/.test(f); this.zoomY = f = /y/.test(f); this.zoomHor = a && !b || f && b; this.zoomVert = f && !b || a && b; this.hasZoom = a || f }, normalize: function (a, d) {
                var b; b = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a; d || (this.chartPosition = d = h(this.chart.container)); return n(a,
                    { chartX: Math.round(b.pageX - d.left), chartY: Math.round(b.pageY - d.top) })
            }, getCoordinates: function (a) { var b = { xAxis: [], yAxis: [] }; r(this.chart.axes, function (d) { b[d.isXAxis ? "xAxis" : "yAxis"].push({ axis: d, value: d.toValue(a[d.horiz ? "chartX" : "chartY"]) }) }); return b }, findNearestKDPoint: function (a, d, c) {
                var b; r(a, function (a) {
                    var f = !(a.noSharedTooltip && d) && 0 > a.options.findNearestPointBy.indexOf("y"); a = a.searchPoint(c, f); if ((f = e(a, !0)) && !(f = !e(b, !0))) var f = b.distX - a.distX, h = b.dist - a.dist, m = (a.series.group && a.series.group.zIndex) -
                        (b.series.group && b.series.group.zIndex), f = 0 < (0 !== f && d ? f : 0 !== h ? h : 0 !== m ? m : b.series.index > a.series.index ? -1 : 1); f && (b = a)
                }); return b
            }, getPointFromEvent: function (a) { a = a.target; for (var b; a && !b;)b = a.point, a = a.parentNode; return b }, getChartCoordinatesFromPoint: function (a, d) { var b = a.series, c = b.xAxis, b = b.yAxis, f = m(a.clientX, a.plotX); if (c && b) return d ? { chartX: c.len + c.pos - f, chartY: b.len + b.pos - a.plotY } : { chartX: f + c.pos, chartY: a.plotY + b.pos } }, getHoverData: function (b, c, f, h, g, t, l) {
                var d, y = [], n = l && l.isBoosting; h = !(!h ||
                    !b); l = c && !c.stickyTracking ? [c] : a.grep(f, function (a) { return a.visible && !(!g && a.directTouch) && m(a.options.enableMouseTracking, !0) && a.stickyTracking }); c = (d = h ? b : this.findNearestKDPoint(l, g, t)) && d.series; d && (g && !c.noSharedTooltip ? (l = a.grep(f, function (a) { return a.visible && !(!g && a.directTouch) && m(a.options.enableMouseTracking, !0) && !a.noSharedTooltip }), r(l, function (a) { var b = w(a.points, function (a) { return a.x === d.x && !a.isNull }); e(b) && (n && (b = a.getPoint(b)), y.push(b)) })) : y.push(d)); return {
                        hoverPoint: d, hoverSeries: c,
                        hoverPoints: y
                    }
            }, runPointActions: function (b, c) {
                var d = this.chart, f = d.tooltip && d.tooltip.options.enabled ? d.tooltip : void 0, e = f ? f.shared : !1, h = c || d.hoverPoint, g = h && h.series || d.hoverSeries, g = this.getHoverData(h, g, d.series, !!c || g && g.directTouch && this.isDirectTouch, e, b, { isBoosting: d.isBoosting }), l, h = g.hoverPoint; l = g.hoverPoints; c = (g = g.hoverSeries) && g.tooltipOptions.followPointer; e = e && g && !g.noSharedTooltip; if (h && (h !== d.hoverPoint || f && f.isHidden)) {
                    r(d.hoverPoints || [], function (b) { -1 === a.inArray(b, l) && b.setState() });
                    r(l || [], function (a) { a.setState("hover") }); if (d.hoverSeries !== g) g.onMouseOver(); d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut"); if (!h.series) return; h.firePointEvent("mouseOver"); d.hoverPoints = l; d.hoverPoint = h; f && f.refresh(e ? l : h, b)
                } else c && f && !f.isHidden && (h = f.getAnchor([{}], b), f.updatePosition({ plotX: h[0], plotY: h[1] })); this.unDocMouseMove || (this.unDocMouseMove = D(d.container.ownerDocument, "mousemove", function (b) { var c = G[a.hoverChartIndex]; if (c) c.pointer.onDocumentMouseMove(b) })); r(d.axes, function (c) {
                    var d =
                        m(c.crosshair.snap, !0), f = d ? a.find(l, function (a) { return a.series[c.coll] === c }) : void 0; f || !d ? c.drawCrosshair(b, f) : c.hideCrosshair()
                })
            }, reset: function (a, d) {
                var b = this.chart, f = b.hoverSeries, e = b.hoverPoint, h = b.hoverPoints, g = b.tooltip, m = g && g.shared ? h : e; a && m && r(c(m), function (b) { b.series.isCartesian && void 0 === b.plotX && (a = !1) }); if (a) g && m && (g.refresh(m), e && (e.setState(e.state, !0), r(b.axes, function (a) { a.crosshair && a.drawCrosshair(null, e) }))); else {
                    if (e) e.onMouseOut(); h && r(h, function (a) { a.setState() }); if (f) f.onMouseOut();
                    g && g.hide(d); this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()); r(b.axes, function (a) { a.hideCrosshair() }); this.hoverX = b.hoverPoints = b.hoverPoint = null
                }
            }, scaleGroups: function (a, c) { var b = this.chart, d; r(b.series, function (f) { d = a || f.getPlotBox(); f.xAxis && f.xAxis.zoomEnabled && f.group && (f.group.attr(d), f.markerGroup && (f.markerGroup.attr(d), f.markerGroup.clip(c ? b.clipRect : null)), f.dataLabelsGroup && f.dataLabelsGroup.attr(d)) }); b.clipRect.attr(c || b.clipBox) }, dragStart: function (a) {
                var b = this.chart;
                b.mouseIsDown = a.type; b.cancelClick = !1; b.mouseDownX = this.mouseDownX = a.chartX; b.mouseDownY = this.mouseDownY = a.chartY
            }, drag: function (a) {
                var b = this.chart, c = b.options.chart, f = a.chartX, e = a.chartY, h = this.zoomHor, g = this.zoomVert, m = b.plotLeft, l = b.plotTop, n = b.plotWidth, q = b.plotHeight, A, E = this.selectionMarker, F = this.mouseDownX, k = this.mouseDownY, u = c.panKey && a[c.panKey + "Key"]; E && E.touch || (f < m ? f = m : f > m + n && (f = m + n), e < l ? e = l : e > l + q && (e = l + q), this.hasDragged = Math.sqrt(Math.pow(F - f, 2) + Math.pow(k - e, 2)), 10 < this.hasDragged &&
                    (A = b.isInsidePlot(F - m, k - l), b.hasCartesianSeries && (this.zoomX || this.zoomY) && A && !u && !E && (this.selectionMarker = E = b.renderer.rect(m, l, h ? 1 : n, g ? 1 : q, 0).attr({ fill: c.selectionMarkerFill || p("#335cad").setOpacity(.25).get(), "class": "highcharts-selection-marker", zIndex: 7 }).add()), E && h && (f -= F, E.attr({ width: Math.abs(f), x: (0 < f ? 0 : f) + F })), E && g && (f = e - k, E.attr({ height: Math.abs(f), y: (0 < f ? 0 : f) + k })), A && !E && c.panning && b.pan(a, c.panning)))
            }, drop: function (a) {
                var b = this, c = this.chart, f = this.hasPinched; if (this.selectionMarker) {
                    var e =
                        { originalEvent: a, xAxis: [], yAxis: [] }, h = this.selectionMarker, m = h.attr ? h.attr("x") : h.x, x = h.attr ? h.attr("y") : h.y, C = h.attr ? h.attr("width") : h.width, p = h.attr ? h.attr("height") : h.height, q; if (this.hasDragged || f) r(c.axes, function (c) { if (c.zoomEnabled && l(c.min) && (f || b[{ xAxis: "zoomX", yAxis: "zoomY" }[c.coll]])) { var d = c.horiz, h = "touchend" === a.type ? c.minPixelPadding : 0, k = c.toValue((d ? m : x) + h), d = c.toValue((d ? m + C : x + p) - h); e[c.coll].push({ axis: c, min: Math.min(k, d), max: Math.max(k, d) }); q = !0 } }), q && v(c, "selection", e, function (a) {
                            c.zoom(n(a,
                                f ? { animation: !1 } : null))
                        }); this.selectionMarker = this.selectionMarker.destroy(); f && this.scaleGroups()
                } c && (g(c.container, { cursor: c._cursor }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
            }, onContainerMouseDown: function (a) { a = this.normalize(a); this.zoomOption(a); a.preventDefault && a.preventDefault(); this.dragStart(a) }, onDocumentMouseUp: function (b) { G[a.hoverChartIndex] && G[a.hoverChartIndex].pointer.drop(b) }, onDocumentMouseMove: function (a) {
                var b = this.chart,
                    c = this.chartPosition; a = this.normalize(a, c); !c || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset()
            }, onContainerMouseLeave: function (b) { var c = G[a.hoverChartIndex]; c && (b.relatedTarget || b.toElement) && (c.pointer.reset(), c.pointer.chartPosition = null) }, onContainerMouseMove: function (b) {
                var c = this.chart; l(a.hoverChartIndex) && G[a.hoverChartIndex] && G[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex = c.index); b = this.normalize(b); b.returnValue = !1;
                "mousedown" === c.mouseIsDown && this.drag(b); !this.inClass(b.target, "highcharts-tracker") && !c.isInsidePlot(b.chartX - c.plotLeft, b.chartY - c.plotTop) || c.openMenu || this.runPointActions(b)
            }, inClass: function (a, c) { for (var b; a;) { if (b = B(a, "class")) { if (-1 !== b.indexOf(c)) return !0; if (-1 !== b.indexOf("highcharts-container")) return !1 } a = a.parentNode } }, onTrackerMouseOut: function (a) {
                var b = this.chart.hoverSeries; a = a.relatedTarget || a.toElement; this.isDirectTouch = !1; if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") ||
                    this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut()
            }, onContainerClick: function (a) { var b = this.chart, c = b.hoverPoint, f = b.plotLeft, e = b.plotTop; a = this.normalize(a); b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (v(c.series, "click", n(a, { point: c })), b.hoverPoint && c.firePointEvent("click", a)) : (n(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - f, a.chartY - e) && v(b, "click", a))) }, setDOMEvents: function () {
                var b = this, c = b.chart.container, f = c.ownerDocument;
                c.onmousedown = function (a) { b.onContainerMouseDown(a) }; c.onmousemove = function (a) { b.onContainerMouseMove(a) }; c.onclick = function (a) { b.onContainerClick(a) }; this.unbindContainerMouseLeave = D(c, "mouseleave", b.onContainerMouseLeave); a.unbindDocumentMouseUp || (a.unbindDocumentMouseUp = D(f, "mouseup", b.onDocumentMouseUp)); a.hasTouch && (c.ontouchstart = function (a) { b.onContainerTouchStart(a) }, c.ontouchmove = function (a) { b.onContainerTouchMove(a) }, a.unbindDocumentTouchEnd || (a.unbindDocumentTouchEnd = D(f, "touchend", b.onDocumentTouchEnd)))
            },
            destroy: function () { var b = this; b.unDocMouseMove && b.unDocMouseMove(); this.unbindContainerMouseLeave(); a.chartCount || (a.unbindDocumentMouseUp && (a.unbindDocumentMouseUp = a.unbindDocumentMouseUp()), a.unbindDocumentTouchEnd && (a.unbindDocumentTouchEnd = a.unbindDocumentTouchEnd())); clearInterval(b.tooltipTimeout); a.objectEach(b, function (a, c) { b[c] = null }) }
        }
    })(N); (function (a) {
        var D = a.charts, B = a.each, G = a.extend, p = a.map, g = a.noop, l = a.pick; G(a.Pointer.prototype, {
            pinchTranslate: function (a, g, l, p, e, h) {
                this.zoomHor &&
                    this.pinchTranslateDirection(!0, a, g, l, p, e, h); this.zoomVert && this.pinchTranslateDirection(!1, a, g, l, p, e, h)
            }, pinchTranslateDirection: function (a, g, l, p, e, h, m, c) {
                var f = this.chart, b = a ? "x" : "y", d = a ? "X" : "Y", y = "chart" + d, n = a ? "width" : "height", r = f["plot" + (a ? "Left" : "Top")], t, v, x = c || 1, C = f.inverted, w = f.bounds[a ? "h" : "v"], q = 1 === g.length, A = g[0][y], E = l[0][y], F = !q && g[1][y], k = !q && l[1][y], u; l = function () { !q && 20 < Math.abs(A - F) && (x = c || Math.abs(E - k) / Math.abs(A - F)); v = (r - E) / x + A; t = f["plot" + (a ? "Width" : "Height")] / x }; l(); g = v; g < w.min ?
                    (g = w.min, u = !0) : g + t > w.max && (g = w.max - t, u = !0); u ? (E -= .8 * (E - m[b][0]), q || (k -= .8 * (k - m[b][1])), l()) : m[b] = [E, k]; C || (h[b] = v - r, h[n] = t); h = C ? 1 / x : x; e[n] = t; e[b] = g; p[C ? a ? "scaleY" : "scaleX" : "scale" + d] = x; p["translate" + d] = h * r + (E - h * A)
            }, pinch: function (a) {
                var n = this, r = n.chart, v = n.pinchDown, e = a.touches, h = e.length, m = n.lastValidTouch, c = n.hasZoom, f = n.selectionMarker, b = {}, d = 1 === h && (n.inClass(a.target, "highcharts-tracker") && r.runTrackerClick || n.runChartClick), y = {}; 1 < h && (n.initiated = !0); c && n.initiated && !d && a.preventDefault();
                p(e, function (a) { return n.normalize(a) }); "touchstart" === a.type ? (B(e, function (a, b) { v[b] = { chartX: a.chartX, chartY: a.chartY } }), m.x = [v[0].chartX, v[1] && v[1].chartX], m.y = [v[0].chartY, v[1] && v[1].chartY], B(r.axes, function (a) { if (a.zoomEnabled) { var b = r.bounds[a.horiz ? "h" : "v"], c = a.minPixelPadding, f = a.toPixels(l(a.options.min, a.dataMin)), d = a.toPixels(l(a.options.max, a.dataMax)), e = Math.max(f, d); b.min = Math.min(a.pos, Math.min(f, d) - c); b.max = Math.max(a.pos + a.len, e + c) } }), n.res = !0) : n.followTouchMove && 1 === h ? this.runPointActions(n.normalize(a)) :
                    v.length && (f || (n.selectionMarker = f = G({ destroy: g, touch: !0 }, r.plotBox)), n.pinchTranslate(v, e, b, f, y, m), n.hasPinched = c, n.scaleGroups(b, y), n.res && (n.res = !1, this.reset(!1, 0)))
            }, touch: function (g, n) {
                var r = this.chart, p, e; if (r.index !== a.hoverChartIndex) this.onContainerMouseLeave({ relatedTarget: !0 }); a.hoverChartIndex = r.index; 1 === g.touches.length ? (g = this.normalize(g), (e = r.isInsidePlot(g.chartX - r.plotLeft, g.chartY - r.plotTop)) && !r.openMenu ? (n && this.runPointActions(g), "touchmove" === g.type && (n = this.pinchDown, p = n[0] ?
                    4 <= Math.sqrt(Math.pow(n[0].chartX - g.chartX, 2) + Math.pow(n[0].chartY - g.chartY, 2)) : !1), l(p, !0) && this.pinch(g)) : n && this.reset()) : 2 === g.touches.length && this.pinch(g)
            }, onContainerTouchStart: function (a) { this.zoomOption(a); this.touch(a, !0) }, onContainerTouchMove: function (a) { this.touch(a) }, onDocumentTouchEnd: function (g) { D[a.hoverChartIndex] && D[a.hoverChartIndex].pointer.drop(g) }
        })
    })(N); (function (a) {
        var D = a.addEvent, B = a.charts, G = a.css, p = a.doc, g = a.extend, l = a.noop, r = a.Pointer, n = a.removeEvent, w = a.win, v = a.wrap;
        if (!a.hasTouch && (w.PointerEvent || w.MSPointerEvent)) {
            var e = {}, h = !!w.PointerEvent, m = function () { var c = []; c.item = function (a) { return this[a] }; a.objectEach(e, function (a) { c.push({ pageX: a.pageX, pageY: a.pageY, target: a.target }) }); return c }, c = function (c, b, d, e) { "touch" !== c.pointerType && c.pointerType !== c.MSPOINTER_TYPE_TOUCH || !B[a.hoverChartIndex] || (e(c), e = B[a.hoverChartIndex].pointer, e[b]({ type: d, target: c.currentTarget, preventDefault: l, touches: m() })) }; g(r.prototype, {
                onContainerPointerDown: function (a) {
                    c(a, "onContainerTouchStart",
                        "touchstart", function (a) { e[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget } })
                }, onContainerPointerMove: function (a) { c(a, "onContainerTouchMove", "touchmove", function (a) { e[a.pointerId] = { pageX: a.pageX, pageY: a.pageY }; e[a.pointerId].target || (e[a.pointerId].target = a.currentTarget) }) }, onDocumentPointerUp: function (a) { c(a, "onDocumentTouchEnd", "touchend", function (a) { delete e[a.pointerId] }) }, batchMSEvents: function (a) {
                    a(this.chart.container, h ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                    a(this.chart.container, h ? "pointermove" : "MSPointerMove", this.onContainerPointerMove); a(p, h ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                }
            }); v(r.prototype, "init", function (a, b, c) { a.call(this, b, c); this.hasZoom && G(b.container, { "-ms-touch-action": "none", "touch-action": "none" }) }); v(r.prototype, "setDOMEvents", function (a) { a.apply(this); (this.hasZoom || this.followTouchMove) && this.batchMSEvents(D) }); v(r.prototype, "destroy", function (a) { this.batchMSEvents(n); a.call(this) })
        }
    })(N); (function (a) {
        var D = a.addEvent,
            B = a.css, G = a.discardElement, p = a.defined, g = a.each, l = a.isFirefox, r = a.marginNames, n = a.merge, w = a.pick, v = a.setAnimation, e = a.stableSort, h = a.win, m = a.wrap; a.Legend = function (a, f) { this.init(a, f) }; a.Legend.prototype = {
                init: function (a, f) { this.chart = a; this.setOptions(f); f.enabled && (this.render(), D(this.chart, "endResize", function () { this.legend.positionCheckboxes() })) }, setOptions: function (a) {
                    var c = w(a.padding, 8); this.options = a; this.itemStyle = a.itemStyle; this.itemHiddenStyle = n(this.itemStyle, a.itemHiddenStyle); this.itemMarginTop =
                        a.itemMarginTop || 0; this.padding = c; this.initialItemY = c - 5; this.itemHeight = this.maxItemWidth = 0; this.symbolWidth = w(a.symbolWidth, 16); this.pages = []
                }, update: function (a, f) { var b = this.chart; this.setOptions(n(!0, this.options, a)); this.destroy(); b.isDirtyLegend = b.isDirtyBox = !0; w(f, !0) && b.redraw() }, colorizeItem: function (a, f) {
                    a.legendGroup[f ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"); var b = this.options, c = a.legendItem, e = a.legendLine, h = a.legendSymbol, g = this.itemHiddenStyle.color, b = f ? b.itemStyle.color :
                        g, m = f ? a.color || g : g, l = a.options && a.options.marker, x = { fill: m }; c && c.css({ fill: b, color: b }); e && e.attr({ stroke: m }); h && (l && h.isMarker && (x = a.pointAttribs(), f || (x.stroke = x.fill = g)), h.attr(x))
                }, positionItem: function (a) { var c = this.options, b = c.symbolPadding, c = !c.rtl, d = a._legendItemPos, e = d[0], d = d[1], h = a.checkbox; (a = a.legendGroup) && a.element && a.translate(c ? e : this.legendWidth - e - 2 * b - 4, d); h && (h.x = e, h.y = d) }, destroyItem: function (a) {
                    var c = a.checkbox; g(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) {
                        a[b] &&
                            (a[b] = a[b].destroy())
                    }); c && G(a.checkbox)
                }, destroy: function () { function a(a) { this[a] && (this[a] = this[a].destroy()) } g(this.getAllItems(), function (c) { g(["legendItem", "legendGroup"], a, c) }); g("clipRect up down pager nav box title group".split(" "), a, this); this.display = null }, positionCheckboxes: function () {
                    var a = this.group && this.group.alignAttr, f, b = this.clipHeight || this.legendHeight, d = this.titleHeight; a && (f = a.translateY, g(this.allItems, function (c) {
                        var e = c.checkbox, h; e && (h = f + d + e.y + (this.scrollOffset || 0) + 3, B(e,
                            { left: a.translateX + c.checkboxOffset + e.x - 20 + "px", top: h + "px", display: h > f - 6 && h < f + b - 6 ? "" : "none" }))
                    }, this))
                }, renderTitle: function () { var a = this.options, f = this.padding, b = a.title, d = 0; b.text && (this.title || (this.title = this.chart.renderer.label(b.text, f - 3, f - 4, null, null, null, a.useHTML, null, "legend-title").attr({ zIndex: 1 }).css(b.style).add(this.group)), a = this.title.getBBox(), d = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: d })); this.titleHeight = d }, setText: function (c) {
                    var f = this.options; c.legendItem.attr({
                        text: f.labelFormat ?
                            a.format(f.labelFormat, c) : f.labelFormatter.call(c)
                    })
                }, renderItem: function (a) {
                    var c = this.chart, b = c.renderer, d = this.options, e = "horizontal" === d.layout, h = this.symbolWidth, g = d.symbolPadding, m = this.itemStyle, l = this.itemHiddenStyle, x = this.padding, C = e ? w(d.itemDistance, 20) : 0, r = !d.rtl, q = d.width, A = d.itemMarginBottom || 0, E = this.itemMarginTop, F = a.legendItem, k = !a.series, u = !k && a.series.drawLegendSymbol ? a.series : a, p = u.options, v = this.createCheckboxForItem && p && p.showCheckbox, p = h + g + C + (v ? 20 : 0), P = d.useHTML, I = a.options.className;
                    F || (a.legendGroup = b.g("legend-item").addClass("highcharts-" + u.type + "-series highcharts-color-" + a.colorIndex + (I ? " " + I : "") + (k ? " highcharts-series-" + a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), a.legendItem = F = b.text("", r ? h + g : -g, this.baseline || 0, P).css(n(a.visible ? m : l)).attr({ align: r ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (h = m.fontSize, this.fontMetrics = b.fontMetrics(h, F), this.baseline = this.fontMetrics.f + 3 + E, F.attr("y", this.baseline)), this.symbolHeight = d.symbolHeight || this.fontMetrics.f,
                        u.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, F, P), v && this.createCheckboxForItem(a)); this.colorizeItem(a, a.visible); m.width || F.css({ width: (d.itemWidth || d.width || c.spacingBox.width) - p }); this.setText(a); b = F.getBBox(); m = a.checkboxOffset = d.itemWidth || a.legendItemWidth || b.width + p; this.itemHeight = b = Math.round(a.legendItemHeight || b.height || this.symbolHeight); e && this.itemX - x + m > (q || c.spacingBox.width - 2 * x - d.x) && (this.itemX = x, this.itemY += E + this.lastLineHeight + A, this.lastLineHeight = 0); this.maxItemWidth =
                            Math.max(this.maxItemWidth, m); this.lastItemY = E + this.itemY + A; this.lastLineHeight = Math.max(b, this.lastLineHeight); a._legendItemPos = [this.itemX, this.itemY]; e ? this.itemX += m : (this.itemY += E + b + A, this.lastLineHeight = b); this.offsetWidth = q || Math.max((e ? this.itemX - x - (a.checkbox ? 0 : C) : m) + x, this.offsetWidth)
                }, getAllItems: function () { var a = []; g(this.chart.series, function (c) { var b = c && c.options; c && w(b.showInLegend, p(b.linkedTo) ? !1 : void 0, !0) && (a = a.concat(c.legendItems || ("point" === b.legendType ? c.data : c))) }); return a },
                adjustMargins: function (a, f) { var b = this.chart, c = this.options, e = c.align.charAt(0) + c.verticalAlign.charAt(0) + c.layout.charAt(0); c.floating || g([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (d, h) { d.test(e) && !p(a[h]) && (b[r[h]] = Math.max(b[r[h]], b.legend[(h + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][h] * c[h % 2 ? "x" : "y"] + w(c.margin, 12) + f[h])) }) }, render: function () {
                    var a = this, f = a.chart, b = f.renderer, d = a.group, h, m, l, t, p = a.box, x = a.options, r = a.padding; a.itemX = r; a.itemY = a.initialItemY; a.offsetWidth =
                        0; a.lastItemY = 0; d || (a.group = d = b.g("legend").attr({ zIndex: 7 }).add(), a.contentGroup = b.g().attr({ zIndex: 1 }).add(d), a.scrollGroup = b.g().add(a.contentGroup)); a.renderTitle(); h = a.getAllItems(); e(h, function (a, b) { return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0) }); x.reversed && h.reverse(); a.allItems = h; a.display = m = !!h.length; a.lastLineHeight = 0; g(h, function (b) { a.renderItem(b) }); l = (x.width || a.offsetWidth) + r; t = a.lastItemY + a.lastLineHeight + a.titleHeight; t = a.handleOverflow(t); t +=
                            r; p || (a.box = p = b.rect().addClass("highcharts-legend-box").attr({ r: x.borderRadius }).add(d), p.isNew = !0); p.attr({ stroke: x.borderColor, "stroke-width": x.borderWidth || 0, fill: x.backgroundColor || "none" }).shadow(x.shadow); 0 < l && 0 < t && (p[p.isNew ? "attr" : "animate"](p.crisp.call({}, { x: 0, y: 0, width: l, height: t }, p.strokeWidth())), p.isNew = !1); p[m ? "show" : "hide"](); a.legendWidth = l; a.legendHeight = t; g(h, function (b) { a.positionItem(b) }); m && d.align(n(x, { width: l, height: t }), !0, "spacingBox"); f.isResizing || this.positionCheckboxes()
                },
                handleOverflow: function (a) {
                    var c = this, b = this.chart, d = b.renderer, e = this.options, h = e.y, m = this.padding, b = b.spacingBox.height + ("top" === e.verticalAlign ? -h : h) - m, h = e.maxHeight, l, n = this.clipRect, x = e.navigation, p = w(x.animation, !0), r = x.arrowSize || 12, q = this.nav, A = this.pages, E, F = this.allItems, k = function (a) { "number" === typeof a ? n.attr({ height: a }) : n && (c.clipRect = n.destroy(), c.contentGroup.clip()); c.contentGroup.div && (c.contentGroup.div.style.clip = a ? "rect(" + m + "px,9999px," + (m + a) + "px,0)" : "auto") }; "horizontal" !== e.layout ||
                        "middle" === e.verticalAlign || e.floating || (b /= 2); h && (b = Math.min(b, h)); A.length = 0; a > b && !1 !== x.enabled ? (this.clipHeight = l = Math.max(b - 20 - this.titleHeight - m, 0), this.currentPage = w(this.currentPage, 1), this.fullHeight = a, g(F, function (a, b) { var c = a._legendItemPos[1]; a = Math.round(a.legendItem.getBBox().height); var d = A.length; if (!d || c - A[d - 1] > l && (E || c) !== A[d - 1]) A.push(E || c), d++; b === F.length - 1 && c + a - A[d - 1] > l && A.push(c); c !== E && (E = c) }), n || (n = c.clipRect = d.clipRect(0, m, 9999, 0), c.contentGroup.clip(n)), k(l), q || (this.nav =
                            q = d.g().attr({ zIndex: 1 }).add(this.group), this.up = d.symbol("triangle", 0, 0, r, r).on("click", function () { c.scroll(-1, p) }).add(q), this.pager = d.text("", 15, 10).addClass("highcharts-legend-navigation").css(x.style).add(q), this.down = d.symbol("triangle-down", 0, 0, r, r).on("click", function () { c.scroll(1, p) }).add(q)), c.scroll(0), a = b) : q && (k(), this.nav = q.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0); return a
                }, scroll: function (a, f) {
                    var b = this.pages, c = b.length; a = this.currentPage + a; var e = this.clipHeight,
                        h = this.options.navigation, g = this.pager, m = this.padding; a > c && (a = c); 0 < a && (void 0 !== f && v(f, this.chart), this.nav.attr({ translateX: m, translateY: e + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ "class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), g.attr({ text: a + "/" + c }), this.down.attr({ x: 18 + this.pager.getBBox().width, "class": a === c ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), this.up.attr({ fill: 1 === a ? h.inactiveColor : h.activeColor }).css({
                            cursor: 1 ===
                                a ? "default" : "pointer"
                        }), this.down.attr({ fill: a === c ? h.inactiveColor : h.activeColor }).css({ cursor: a === c ? "default" : "pointer" }), this.scrollOffset = -b[a - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = a, this.positionCheckboxes())
                }
            }; a.LegendSymbolMixin = {
                drawRectangle: function (a, f) { var b = a.symbolHeight, c = a.options.squareSymbol; f.legendSymbol = this.chart.renderer.rect(c ? (a.symbolWidth - b) / 2 : 0, a.baseline - b + 1, c ? b : a.symbolWidth, b, w(a.options.symbolRadius, b / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(f.legendGroup) },
                drawLineMarker: function (a) {
                    var c = this.options, b = c.marker, d = a.symbolWidth, e = a.symbolHeight, h = e / 2, g = this.chart.renderer, m = this.legendGroup; a = a.baseline - Math.round(.3 * a.fontMetrics.b); var l; l = { "stroke-width": c.lineWidth || 0 }; c.dashStyle && (l.dashstyle = c.dashStyle); this.legendLine = g.path(["M", 0, a, "L", d, a]).addClass("highcharts-graph").attr(l).add(m); b && !1 !== b.enabled && (c = Math.min(w(b.radius, h), h), 0 === this.symbol.indexOf("url") && (b = n(b, { width: e, height: e }), c = 0), this.legendSymbol = b = g.symbol(this.symbol, d /
                        2 - c, a - c, 2 * c, 2 * c, b).addClass("highcharts-point").add(m), b.isMarker = !0)
                }
            }; (/Trident\/7\.0/.test(h.navigator.userAgent) || l) && m(a.Legend.prototype, "positionItem", function (a, f) { var b = this, c = function () { f._legendItemPos && a.call(b, f) }; c(); setTimeout(c) })
    })(N); (function (a) {
        var D = a.addEvent, B = a.animate, G = a.animObject, p = a.attr, g = a.doc, l = a.Axis, r = a.createElement, n = a.defaultOptions, w = a.discardElement, v = a.charts, e = a.css, h = a.defined, m = a.each, c = a.extend, f = a.find, b = a.fireEvent, d = a.grep, y = a.isNumber, H = a.isObject, J =
            a.isString, t = a.Legend, K = a.marginNames, x = a.merge, C = a.objectEach, L = a.Pointer, q = a.pick, A = a.pInt, E = a.removeEvent, F = a.seriesTypes, k = a.splat, u = a.svg, R = a.syncTimeout, M = a.win, P = a.Chart = function () { this.getArgs.apply(this, arguments) }; a.chart = function (a, b, c) { return new P(a, b, c) }; c(P.prototype, {
                callbacks: [], getArgs: function () { var a = [].slice.call(arguments); if (J(a[0]) || a[0].nodeName) this.renderTo = a.shift(); this.init(a[0], a[1]) }, init: function (b, c) {
                    var d, f, k = b.series, e = b.plotOptions || {}; b.series = null; d = x(n, b); for (f in d.plotOptions) d.plotOptions[f].tooltip =
                        e[f] && x(e[f].tooltip) || void 0; d.tooltip.userOptions = b.chart && b.chart.forExport && b.tooltip.userOptions || b.tooltip; d.series = b.series = k; this.userOptions = b; b = d.chart; f = b.events; this.margin = []; this.spacing = []; this.bounds = { h: {}, v: {} }; this.labelCollectors = []; this.callback = c; this.isResizing = 0; this.options = d; this.axes = []; this.series = []; this.hasCartesianSeries = b.showAxes; var q = this; q.index = v.length; v.push(q); a.chartCount++; f && C(f, function (a, b) { D(q, b, a) }); q.xAxis = []; q.yAxis = []; q.pointCount = q.colorCounter = q.symbolCounter =
                            0; q.firstRender()
                }, initSeries: function (b) { var c = this.options.chart; (c = F[b.type || c.type || c.defaultSeriesType]) || a.error(17, !0); c = new c; c.init(this, b); return c }, orderSeries: function (a) { var b = this.series; for (a = a || 0; a < b.length; a++)b[a] && (b[a].index = a, b[a].name = b[a].name || "Series " + (b[a].index + 1)) }, isInsidePlot: function (a, b, c) { var d = c ? b : a; a = c ? a : b; return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight }, redraw: function (d) {
                    var f = this.axes, k = this.series, e = this.pointer, q = this.legend, h = this.isDirtyLegend,
                        g, l, u = this.hasCartesianSeries, A = this.isDirtyBox, E, t = this.renderer, n = t.isHidden(), x = []; this.setResponsive && this.setResponsive(!1); a.setAnimation(d, this); n && this.temporaryDisplay(); this.layOutTitles(); for (d = k.length; d--;)if (E = k[d], E.options.stacking && (g = !0, E.isDirty)) { l = !0; break } if (l) for (d = k.length; d--;)E = k[d], E.options.stacking && (E.isDirty = !0); m(k, function (a) { a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), h = !0); a.isDirtyData && b(a, "updatedData") }); h && q.options.enabled &&
                            (q.render(), this.isDirtyLegend = !1); g && this.getStacks(); u && m(f, function (a) { a.updateNames(); a.setScale() }); this.getMargins(); u && (m(f, function (a) { a.isDirty && (A = !0) }), m(f, function (a) { var d = a.min + "," + a.max; a.extKey !== d && (a.extKey = d, x.push(function () { b(a, "afterSetExtremes", c(a.eventArgs, a.getExtremes())); delete a.eventArgs })); (A || g) && a.redraw() })); A && this.drawChartBox(); b(this, "predraw"); m(k, function (a) { (A || a.isDirty) && a.visible && a.redraw(); a.isDirtyData = !1 }); e && e.reset(!0); t.draw(); b(this, "redraw"); b(this,
                                "render"); n && this.temporaryDisplay(!0); m(x, function (a) { a.call() })
                }, get: function (a) { function b(b) { return b.id === a || b.options && b.options.id === a } var c, d = this.series, k; c = f(this.axes, b) || f(this.series, b); for (k = 0; !c && k < d.length; k++)c = f(d[k].points || [], b); return c }, getAxes: function () { var a = this, b = this.options, c = b.xAxis = k(b.xAxis || {}), b = b.yAxis = k(b.yAxis || {}); m(c, function (a, b) { a.index = b; a.isX = !0 }); m(b, function (a, b) { a.index = b }); c = c.concat(b); m(c, function (b) { new l(a, b) }) }, getSelectedPoints: function () {
                    var a =
                        []; m(this.series, function (b) { a = a.concat(d(b.data || [], function (a) { return a.selected })) }); return a
                }, getSelectedSeries: function () { return d(this.series, function (a) { return a.selected }) }, setTitle: function (a, b, c) {
                    var d = this, f = d.options, k; k = f.title = x({ style: { color: "#333333", fontSize: f.isStock ? "16px" : "18px" } }, f.title, a); f = f.subtitle = x({ style: { color: "#666666" } }, f.subtitle, b); m([["title", a, k], ["subtitle", b, f]], function (a, b) {
                        var c = a[0], f = d[c], k = a[1]; a = a[2]; f && k && (d[c] = f = f.destroy()); a && !f && (d[c] = d.renderer.text(a.text,
                            0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + c, zIndex: a.zIndex || 4 }).add(), d[c].update = function (a) { d.setTitle(!b && a, b && a) }, d[c].css(a.style))
                    }); d.layOutTitles(c)
                }, layOutTitles: function (a) {
                    var b = 0, d, f = this.renderer, k = this.spacingBox; m(["title", "subtitle"], function (a) {
                        var d = this[a], e = this.options[a]; a = "title" === a ? -3 : e.verticalAlign ? 0 : b + 2; var q; d && (q = e.style.fontSize, q = f.fontMetrics(q, d).b, d.css({ width: (e.width || k.width + e.widthAdjust) + "px" }).align(c({ y: a + q }, e), !1, "spacingBox"), e.floating ||
                            e.verticalAlign || (b = Math.ceil(b + d.getBBox(e.useHTML).height)))
                    }, this); d = this.titleOffset !== b; this.titleOffset = b; !this.isDirtyBox && d && (this.isDirtyBox = d, this.hasRendered && q(a, !0) && this.isDirtyBox && this.redraw())
                }, getChartSize: function () {
                    var b = this.options.chart, c = b.width, b = b.height, d = this.renderTo; h(c) || (this.containerWidth = a.getStyle(d, "width")); h(b) || (this.containerHeight = a.getStyle(d, "height")); this.chartWidth = Math.max(0, c || this.containerWidth || 600); this.chartHeight = Math.max(0, a.relativeLength(b,
                        this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                }, temporaryDisplay: function (b) {
                    var c = this.renderTo; if (b) for (; c && c.style;)c.hcOrigStyle && (a.css(c, c.hcOrigStyle), delete c.hcOrigStyle), c.hcOrigDetached && (g.body.removeChild(c), c.hcOrigDetached = !1), c = c.parentNode; else for (; c && c.style;) {
                        g.body.contains(c) || c.parentNode || (c.hcOrigDetached = !0, g.body.appendChild(c)); if ("none" === a.getStyle(c, "display", !1) || c.hcOricDetached) c.hcOrigStyle = { display: c.style.display, height: c.style.height, overflow: c.style.overflow },
                            b = { display: "block", overflow: "hidden" }, c !== this.renderTo && (b.height = 0), a.css(c, b), c.offsetWidth || c.style.setProperty("display", "block", "important"); c = c.parentNode; if (c === g.body) break
                    }
                }, setClassName: function (a) { this.container.className = "highcharts-container " + (a || "") }, getContainer: function () {
                    var b, d = this.options, f = d.chart, k, e; b = this.renderTo; var q = a.uniqueKey(), h; b || (this.renderTo = b = f.renderTo); J(b) && (this.renderTo = b = g.getElementById(b)); b || a.error(13, !0); k = A(p(b, "data-highcharts-chart")); y(k) && v[k] &&
                        v[k].hasRendered && v[k].destroy(); p(b, "data-highcharts-chart", this.index); b.innerHTML = ""; f.skipClone || b.offsetWidth || this.temporaryDisplay(); this.getChartSize(); k = this.chartWidth; e = this.chartHeight; h = c({ position: "relative", overflow: "hidden", width: k + "px", height: e + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)" }, f.style); this.container = b = r("div", { id: q }, h, b); this._cursor = b.style.cursor; this.renderer = new (a[f.renderer] || a.Renderer)(b, k, e, null, f.forExport,
                            d.exporting && d.exporting.allowHTML); this.setClassName(f.className); this.renderer.setStyle(f.style); this.renderer.chartIndex = this.index
                }, getMargins: function (a) {
                    var b = this.spacing, c = this.margin, d = this.titleOffset; this.resetMargins(); d && !h(c[0]) && (this.plotTop = Math.max(this.plotTop, d + this.options.title.margin + b[0])); this.legend && this.legend.display && this.legend.adjustMargins(c, b); this.extraMargin && (this[this.extraMargin.type] = (this[this.extraMargin.type] || 0) + this.extraMargin.value); this.adjustPlotArea &&
                        this.adjustPlotArea(); a || this.getAxisMargins()
                }, getAxisMargins: function () { var a = this, b = a.axisOffset = [0, 0, 0, 0], c = a.margin; a.hasCartesianSeries && m(a.axes, function (a) { a.visible && a.getOffset() }); m(K, function (d, f) { h(c[f]) || (a[d] += b[f]) }); a.setChartSize() }, reflow: function (b) {
                    var c = this, d = c.options.chart, f = c.renderTo, k = h(d.width) && h(d.height), e = d.width || a.getStyle(f, "width"), d = d.height || a.getStyle(f, "height"), f = b ? b.target : M; if (!k && !c.isPrinting && e && d && (f === M || f === g)) {
                        if (e !== c.containerWidth || d !== c.containerHeight) clearTimeout(c.reflowTimeout),
                            c.reflowTimeout = R(function () { c.container && c.setSize(void 0, void 0, !1) }, b ? 100 : 0); c.containerWidth = e; c.containerHeight = d
                    }
                }, initReflow: function () { var a = this, b; b = D(M, "resize", function (b) { a.reflow(b) }); D(a, "destroy", b) }, setSize: function (c, d, f) {
                    var k = this, q = k.renderer; k.isResizing += 1; a.setAnimation(f, k); k.oldChartHeight = k.chartHeight; k.oldChartWidth = k.chartWidth; void 0 !== c && (k.options.chart.width = c); void 0 !== d && (k.options.chart.height = d); k.getChartSize(); c = q.globalAnimation; (c ? B : e)(k.container, {
                        width: k.chartWidth +
                        "px", height: k.chartHeight + "px"
                    }, c); k.setChartSize(!0); q.setSize(k.chartWidth, k.chartHeight, f); m(k.axes, function (a) { a.isDirty = !0; a.setScale() }); k.isDirtyLegend = !0; k.isDirtyBox = !0; k.layOutTitles(); k.getMargins(); k.redraw(f); k.oldChartHeight = null; b(k, "resize"); R(function () { k && b(k, "endResize", null, function () { --k.isResizing }) }, G(c).duration)
                }, setChartSize: function (a) {
                    var b = this.inverted, c = this.renderer, d = this.chartWidth, k = this.chartHeight, f = this.options.chart, e = this.spacing, q = this.clipOffset, h, g, l, u; this.plotLeft =
                        h = Math.round(this.plotLeft); this.plotTop = g = Math.round(this.plotTop); this.plotWidth = l = Math.max(0, Math.round(d - h - this.marginRight)); this.plotHeight = u = Math.max(0, Math.round(k - g - this.marginBottom)); this.plotSizeX = b ? u : l; this.plotSizeY = b ? l : u; this.plotBorderWidth = f.plotBorderWidth || 0; this.spacingBox = c.spacingBox = { x: e[3], y: e[0], width: d - e[3] - e[1], height: k - e[0] - e[2] }; this.plotBox = c.plotBox = { x: h, y: g, width: l, height: u }; d = 2 * Math.floor(this.plotBorderWidth / 2); b = Math.ceil(Math.max(d, q[3]) / 2); c = Math.ceil(Math.max(d,
                            q[0]) / 2); this.clipBox = { x: b, y: c, width: Math.floor(this.plotSizeX - Math.max(d, q[1]) / 2 - b), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(d, q[2]) / 2 - c)) }; a || m(this.axes, function (a) { a.setAxisSize(); a.setAxisTranslation() })
                }, resetMargins: function () {
                    var a = this, b = a.options.chart; m(["margin", "spacing"], function (c) { var d = b[c], k = H(d) ? d : [d, d, d, d]; m(["Top", "Right", "Bottom", "Left"], function (d, f) { a[c][f] = q(b[c + d], k[f]) }) }); m(K, function (b, c) { a[b] = q(a.margin[c], a.spacing[c]) }); a.axisOffset = [0, 0, 0, 0]; a.clipOffset =
                        [0, 0, 0, 0]
                }, drawChartBox: function () {
                    var a = this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, k = this.chartBackground, f = this.plotBackground, e = this.plotBorder, q, h = this.plotBGImage, g = a.backgroundColor, m = a.plotBackgroundColor, l = a.plotBackgroundImage, u, A = this.plotLeft, E = this.plotTop, t = this.plotWidth, n = this.plotHeight, x = this.plotBox, y = this.clipRect, F = this.clipBox, p = "animate"; k || (this.chartBackground = k = b.rect().addClass("highcharts-background").add(), p = "attr"); q = a.borderWidth || 0; u = q + (a.shadow ?
                        8 : 0); g = { fill: g || "none" }; if (q || k["stroke-width"]) g.stroke = a.borderColor, g["stroke-width"] = q; k.attr(g).shadow(a.shadow); k[p]({ x: u / 2, y: u / 2, width: c - u - q % 2, height: d - u - q % 2, r: a.borderRadius }); p = "animate"; f || (p = "attr", this.plotBackground = f = b.rect().addClass("highcharts-plot-background").add()); f[p](x); f.attr({ fill: m || "none" }).shadow(a.plotShadow); l && (h ? h.animate(x) : this.plotBGImage = b.image(l, A, E, t, n).add()); y ? y.animate({ width: F.width, height: F.height }) : this.clipRect = b.clipRect(F); p = "animate"; e || (p = "attr", this.plotBorder =
                            e = b.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()); e.attr({ stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth || 0, fill: "none" }); e[p](e.crisp({ x: A, y: E, width: t, height: n }, -e.strokeWidth())); this.isDirtyBox = !1
                }, propFromSeries: function () { var a = this, b = a.options.chart, c, d = a.options.series, k, f; m(["inverted", "angular", "polar"], function (e) { c = F[b.type || b.defaultSeriesType]; f = b[e] || c && c.prototype[e]; for (k = d && d.length; !f && k--;)(c = F[d[k].type]) && c.prototype[e] && (f = !0); a[e] = f }) }, linkSeries: function () {
                    var a =
                        this, b = a.series; m(b, function (a) { a.linkedSeries.length = 0 }); m(b, function (b) { var c = b.options.linkedTo; J(c) && (c = ":previous" === c ? a.series[b.index - 1] : a.get(c)) && c.linkedParent !== b && (c.linkedSeries.push(b), b.linkedParent = c, b.visible = q(b.options.visible, c.options.visible, b.visible)) })
                }, renderSeries: function () { m(this.series, function (a) { a.translate(); a.render() }) }, renderLabels: function () {
                    var a = this, b = a.options.labels; b.items && m(b.items, function (d) {
                        var k = c(b.style, d.style), f = A(k.left) + a.plotLeft, e = A(k.top) +
                            a.plotTop + 12; delete k.left; delete k.top; a.renderer.text(d.html, f, e).attr({ zIndex: 2 }).css(k).add()
                    })
                }, render: function () {
                    var a = this.axes, b = this.renderer, c = this.options, d, k, f; this.setTitle(); this.legend = new t(this, c.legend); this.getStacks && this.getStacks(); this.getMargins(!0); this.setChartSize(); c = this.plotWidth; d = this.plotHeight = Math.max(this.plotHeight - 21, 0); m(a, function (a) { a.setScale() }); this.getAxisMargins(); k = 1.1 < c / this.plotWidth; f = 1.05 < d / this.plotHeight; if (k || f) m(a, function (a) {
                        (a.horiz && k || !a.horiz &&
                            f) && a.setTickInterval(!0)
                    }), this.getMargins(); this.drawChartBox(); this.hasCartesianSeries && m(a, function (a) { a.visible && a.render() }); this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels(); this.addCredits(); this.setResponsive && this.setResponsive(); this.hasRendered = !0
                }, addCredits: function (a) {
                    var b = this; a = x(!0, this.options.credits, a); a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click",
                        function () { a.href && (M.location.href = a.href) }).attr({ align: a.position.align, zIndex: 8 }).css(a.style).add().align(a.position), this.credits.update = function (a) { b.credits = b.credits.destroy(); b.addCredits(a) })
                }, destroy: function () {
                    var c = this, d = c.axes, k = c.series, f = c.container, e, q = f && f.parentNode; b(c, "destroy"); c.renderer.forExport ? a.erase(v, c) : v[c.index] = void 0; a.chartCount--; c.renderTo.removeAttribute("data-highcharts-chart"); E(c); for (e = d.length; e--;)d[e] = d[e].destroy(); this.scroller && this.scroller.destroy &&
                        this.scroller.destroy(); for (e = k.length; e--;)k[e] = k[e].destroy(); m("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function (a) { var b = c[a]; b && b.destroy && (c[a] = b.destroy()) }); f && (f.innerHTML = "", E(f), q && w(f)); C(c, function (a, b) { delete c[b] })
                }, isReadyToRender: function () {
                    var a = this; return u || M != M.top || "complete" === g.readyState ? !0 : (g.attachEvent("onreadystatechange", function () {
                        g.detachEvent("onreadystatechange",
                            a.firstRender); "complete" === g.readyState && a.firstRender()
                    }), !1)
                }, firstRender: function () { var a = this, c = a.options; if (a.isReadyToRender()) { a.getContainer(); b(a, "init"); a.resetMargins(); a.setChartSize(); a.propFromSeries(); a.getAxes(); m(c.series || [], function (b) { a.initSeries(b) }); a.linkSeries(); b(a, "beforeRender"); L && (a.pointer = new L(a, c)); a.render(); if (!a.renderer.imgCount && a.onload) a.onload(); a.temporaryDisplay(!0) } }, onload: function () {
                    m([this.callback].concat(this.callbacks), function (a) {
                        a && void 0 !== this.index &&
                            a.apply(this, [this])
                    }, this); b(this, "load"); b(this, "render"); h(this.index) && !1 !== this.options.chart.reflow && this.initReflow(); this.onload = null
                }
            })
    })(N); (function (a) {
        var D, B = a.each, G = a.extend, p = a.erase, g = a.fireEvent, l = a.format, r = a.isArray, n = a.isNumber, w = a.pick, v = a.removeEvent; a.Point = D = function () { }; a.Point.prototype = {
            init: function (a, h, g) {
                this.series = a; this.color = a.color; this.applyOptions(h, g); a.options.colorByPoint ? (h = a.options.colors || a.chart.options.colors, this.color = this.color || h[a.colorCounter],
                    h = h.length, g = a.colorCounter, a.colorCounter++ , a.colorCounter === h && (a.colorCounter = 0)) : g = a.colorIndex; this.colorIndex = w(this.colorIndex, g); a.chart.pointCount++; return this
            }, applyOptions: function (a, h) {
                var e = this.series, c = e.options.pointValKey || e.pointValKey; a = D.prototype.optionsToObject.call(this, a); G(this, a); this.options = this.options ? G(this.options, a) : a; a.group && delete this.group; c && (this.y = this[c]); this.isNull = w(this.isValid && !this.isValid(), null === this.x || !n(this.y, !0)); this.selected && (this.state =
                    "select"); "name" in this && void 0 === h && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this)); void 0 === this.x && e && (this.x = void 0 === h ? e.autoIncrement(this) : h); return this
            }, optionsToObject: function (a) {
                var e = {}, g = this.series, c = g.options.keys, f = c || g.pointArrayMap || ["y"], b = f.length, d = 0, l = 0; if (n(a) || null === a) e[f[0]] = a; else if (r(a)) for (!c && a.length > b && (g = typeof a[0], "string" === g ? e.name = a[0] : "number" === g && (e.x = a[0]), d++); l < b;)c && void 0 === a[d] || (e[f[l]] = a[d]), d++ , l++; else "object" === typeof a && (e = a, a.dataLabels &&
                    (g._hasPointLabels = !0), a.marker && (g._hasPointMarkers = !0)); return e
            }, getClassName: function () { return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "") }, getZone: function () {
                var a = this.series,
                    h = a.zones, a = a.zoneAxis || "y", g = 0, c; for (c = h[g]; this[a] >= c.value;)c = h[++g]; c && c.color && !this.options.color && (this.color = c.color); return c
            }, destroy: function () { var a = this.series.chart, h = a.hoverPoints, g; a.pointCount--; h && (this.setState(), p(h, this), h.length || (a.hoverPoints = null)); if (this === a.hoverPoint) this.onMouseOut(); if (this.graphic || this.dataLabel) v(this), this.destroyElements(); this.legendItem && a.legend.destroyItem(this); for (g in this) this[g] = null }, destroyElements: function () {
                for (var a = ["graphic", "dataLabel",
                    "dataLabelUpper", "connector", "shadowGroup"], h, g = 6; g--;)h = a[g], this[h] && (this[h] = this[h].destroy())
            }, getLabelConfig: function () { return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal } }, tooltipFormatter: function (a) {
                var e = this.series, g = e.tooltipOptions, c = w(g.valueDecimals, ""), f = g.valuePrefix || "", b = g.valueSuffix || ""; B(e.pointArrayMap || ["y"], function (d) {
                    d = "{point." +
                        d; if (f || b) a = a.replace(d + "}", f + d + "}" + b); a = a.replace(d + "}", d + ":,." + c + "f}")
                }); return l(a, { point: this, series: this.series })
            }, firePointEvent: function (a, h, m) { var c = this, f = this.series.options; (f.point.events[a] || c.options && c.options.events && c.options.events[a]) && this.importEvents(); "click" === a && f.allowPointSelect && (m = function (a) { c.select && c.select(null, a.ctrlKey || a.metaKey || a.shiftKey) }); g(this, a, h, m) }, visible: !0
        }
    })(N); (function (a) {
        var D = a.addEvent, B = a.animObject, G = a.arrayMax, p = a.arrayMin, g = a.correctFloat,
            l = a.Date, r = a.defaultOptions, n = a.defaultPlotOptions, w = a.defined, v = a.each, e = a.erase, h = a.extend, m = a.fireEvent, c = a.grep, f = a.isArray, b = a.isNumber, d = a.isString, y = a.merge, H = a.objectEach, J = a.pick, t = a.removeEvent, K = a.splat, x = a.SVGElement, C = a.syncTimeout, L = a.win; a.Series = a.seriesType("line", null, {
                lineWidth: 2, allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: {
                    lineWidth: 0, lineColor: "#ffffff", radius: 4, states: {
                        hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: {
                            fillColor: "#cccccc",
                            lineColor: "#000000", lineWidth: 2
                        }
                    }
                }, point: { events: {} }, dataLabels: { align: "center", formatter: function () { return null === this.y ? "" : a.numberFormat(this.y, -1) }, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0, padding: 5 }, cropThreshold: 300, pointRange: 0, softThreshold: !0, states: { hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } }, select: { marker: {} } }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x"
            },
                {
                    isCartesian: !0, pointClass: a.Point, sorted: !0, requireSorting: !0, directTouch: !1, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], coll: "series", init: function (a, b) {
                        var c = this, d, k = a.series, f; c.chart = a; c.options = b = c.setOptions(b); c.linkedSeries = []; c.bindAxes(); h(c, { name: b.name, state: "", visible: !1 !== b.visible, selected: !0 === b.selected }); d = b.events; H(d, function (a, b) { D(c, b, a) }); if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0; c.getColor();
                        c.getSymbol(); v(c.parallelArrays, function (a) { c[a + "Data"] = [] }); c.setData(b.data, !1); c.isCartesian && (a.hasCartesianSeries = !0); k.length && (f = k[k.length - 1]); c._i = J(f && f._i, -1) + 1; a.orderSeries(this.insert(k))
                    }, insert: function (a) { var c = this.options.index, d; if (b(c)) { for (d = a.length; d--;)if (c >= J(a[d].options.index, a[d]._i)) { a.splice(d + 1, 0, this); break } -1 === d && a.unshift(this); d += 1 } else a.push(this); return J(d, a.length - 1) }, bindAxes: function () {
                        var b = this, c = b.options, d = b.chart, f; v(b.axisTypes || [], function (k) {
                            v(d[k],
                                function (a) { f = a.options; if (c[k] === f.index || void 0 !== c[k] && c[k] === f.id || void 0 === c[k] && 0 === f.index) b.insert(a.series), b[k] = a, a.isDirty = !0 }); b[k] || b.optionalAxis === k || a.error(18, !0)
                        })
                    }, updateParallelArrays: function (a, c) { var d = a.series, f = arguments, k = b(c) ? function (b) { var f = "y" === b && d.toYData ? d.toYData(a) : a[b]; d[b + "Data"][c] = f } : function (a) { Array.prototype[c].apply(d[a + "Data"], Array.prototype.slice.call(f, 2)) }; v(d.parallelArrays, k) }, autoIncrement: function () {
                        var a = this.options, b = this.xIncrement, c, d = a.pointIntervalUnit,
                            b = J(b, a.pointStart, 0); this.pointInterval = c = J(this.pointInterval, a.pointInterval, 1); d && (a = new l(b), "day" === d ? a = +a[l.hcSetDate](a[l.hcGetDate]() + c) : "month" === d ? a = +a[l.hcSetMonth](a[l.hcGetMonth]() + c) : "year" === d && (a = +a[l.hcSetFullYear](a[l.hcGetFullYear]() + c)), c = a - b); this.xIncrement = b + c; return b
                    }, setOptions: function (a) {
                        var b = this.chart, c = b.options, d = c.plotOptions, f = (b.userOptions || {}).plotOptions || {}, e = d[this.type]; this.userOptions = a; b = y(e, d.series, a); this.tooltipOptions = y(r.tooltip, r.plotOptions.series &&
                            r.plotOptions.series.tooltip, r.plotOptions[this.type].tooltip, c.tooltip.userOptions, d.series && d.series.tooltip, d[this.type].tooltip, a.tooltip); this.stickyTracking = J(a.stickyTracking, f[this.type] && f[this.type].stickyTracking, f.series && f.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : b.stickyTracking); null === e.marker && delete b.marker; this.zoneAxis = b.zoneAxis; a = this.zones = (b.zones || []).slice(); !b.negativeColor && !b.negativeFillColor || b.zones || a.push({
                                value: b[this.zoneAxis +
                                "Threshold"] || b.threshold || 0, className: "highcharts-negative", color: b.negativeColor, fillColor: b.negativeFillColor
                            }); a.length && w(a[a.length - 1].value) && a.push({ color: this.color, fillColor: this.fillColor }); return b
                    }, getCyclic: function (a, b, c) { var d, f = this.chart, e = this.userOptions, h = a + "Index", q = a + "Counter", g = c ? c.length : J(f.options.chart[a + "Count"], f[a + "Count"]); b || (d = J(e[h], e["_" + h]), w(d) || (f.series.length || (f[q] = 0), e["_" + h] = d = f[q] % g, f[q] += 1), c && (b = c[d])); void 0 !== d && (this[h] = d); this[a] = b }, getColor: function () {
                        this.options.colorByPoint ?
                            this.options.color = null : this.getCyclic("color", this.options.color || n[this.type].color, this.chart.options.colors)
                    }, getSymbol: function () { this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols) }, drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker, setData: function (c, e, h, g) {
                        var k = this, q = k.points, m = q && q.length || 0, l, t = k.options, A = k.chart, n = null, x = k.xAxis, E = t.turboThreshold, y = this.xData, p = this.yData, r = (l = k.pointArrayMap) && l.length; c = c || []; l = c.length; e = J(e, !0); if (!1 !== g && l && m === l && !k.cropped &&
                            !k.hasGroupedData && k.visible) v(c, function (a, b) { q[b].update && a !== t.data[b] && q[b].update(a, !1, null, !1) }); else {
                            k.xIncrement = null; k.colorCounter = 0; v(this.parallelArrays, function (a) { k[a + "Data"].length = 0 }); if (E && l > E) { for (h = 0; null === n && h < l;)n = c[h], h++; if (b(n)) for (h = 0; h < l; h++)y[h] = this.autoIncrement(), p[h] = c[h]; else if (f(n)) if (r) for (h = 0; h < l; h++)n = c[h], y[h] = n[0], p[h] = n.slice(1, r + 1); else for (h = 0; h < l; h++)n = c[h], y[h] = n[0], p[h] = n[1]; else a.error(12) } else for (h = 0; h < l; h++)void 0 !== c[h] && (n = { series: k }, k.pointClass.prototype.applyOptions.apply(n,
                                [c[h]]), k.updateParallelArrays(n, h)); p && d(p[0]) && a.error(14, !0); k.data = []; k.options.data = k.userOptions.data = c; for (h = m; h--;)q[h] && q[h].destroy && q[h].destroy(); x && (x.minRange = x.userMinRange); k.isDirty = A.isDirtyBox = !0; k.isDirtyData = !!q; h = !1
                        } "point" === t.legendType && (this.processData(), this.generatePoints()); e && A.redraw(h)
                    }, processData: function (b) {
                        var c = this.xData, d = this.yData, f = c.length, k; k = 0; var e, h, q = this.xAxis, g, l = this.options; g = l.cropThreshold; var m = this.getExtremesFromAll || l.getExtremesFromAll, n =
                            this.isCartesian, l = q && q.val2lin, t = q && q.isLog, x = this.requireSorting, y, p; if (n && !this.isDirty && !q.isDirty && !this.yAxis.isDirty && !b) return !1; q && (b = q.getExtremes(), y = b.min, p = b.max); if (n && this.sorted && !m && (!g || f > g || this.forceCrop)) if (c[f - 1] < y || c[0] > p) c = [], d = []; else if (c[0] < y || c[f - 1] > p) k = this.cropData(this.xData, this.yData, y, p), c = k.xData, d = k.yData, k = k.start, e = !0; for (g = c.length || 1; --g;)f = t ? l(c[g]) - l(c[g - 1]) : c[g] - c[g - 1], 0 < f && (void 0 === h || f < h) ? h = f : 0 > f && x && (a.error(15), x = !1); this.cropped = e; this.cropStart = k;
                        this.processedXData = c; this.processedYData = d; this.closestPointRange = h
                    }, cropData: function (a, b, c, d) { var f = a.length, e = 0, h = f, g = J(this.cropShoulder, 1), q; for (q = 0; q < f; q++)if (a[q] >= c) { e = Math.max(0, q - g); break } for (c = q; c < f; c++)if (a[c] > d) { h = c + g; break } return { xData: a.slice(e, h), yData: b.slice(e, h), start: e, end: h } }, generatePoints: function () {
                        var a = this.options, b = a.data, c = this.data, d, f = this.processedXData, e = this.processedYData, h = this.pointClass, g = f.length, l = this.cropStart || 0, m, n = this.hasGroupedData, a = a.keys, t, x = [], y;
                        c || n || (c = [], c.length = b.length, c = this.data = c); a && n && (this.options.keys = !1); for (y = 0; y < g; y++)m = l + y, n ? (t = (new h).init(this, [f[y]].concat(K(e[y]))), t.dataGroup = this.groupMap[y]) : (t = c[m]) || void 0 === b[m] || (c[m] = t = (new h).init(this, b[m], f[y])), t && (t.index = m, x[y] = t); this.options.keys = a; if (c && (g !== (d = c.length) || n)) for (y = 0; y < d; y++)y !== l || n || (y += g), c[y] && (c[y].destroyElements(), c[y].plotX = void 0); this.data = c; this.points = x
                    }, getExtremes: function (a) {
                        var c = this.yAxis, d = this.processedXData, e, k = [], h = 0; e = this.xAxis.getExtremes();
                        var g = e.min, q = e.max, l, m, n, t; a = a || this.stackedYData || this.processedYData || []; e = a.length; for (t = 0; t < e; t++)if (m = d[t], n = a[t], l = (b(n, !0) || f(n)) && (!c.positiveValuesOnly || n.length || 0 < n), m = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (d[t + 1] || m) >= g && (d[t - 1] || m) <= q, l && m) if (l = n.length) for (; l--;)null !== n[l] && (k[h++] = n[l]); else k[h++] = n; this.dataMin = p(k); this.dataMax = G(k)
                    }, translate: function () {
                        this.processedXData || this.processData(); this.generatePoints(); var a = this.options, c = a.stacking,
                            d = this.xAxis, f = d.categories, k = this.yAxis, e = this.points, h = e.length, l = !!this.modifyValue, m = a.pointPlacement, n = "between" === m || b(m), t = a.threshold, x = a.startFromThreshold ? t : 0, y, p, r, C, v = Number.MAX_VALUE; "between" === m && (m = .5); b(m) && (m *= J(a.pointRange || d.pointRange)); for (a = 0; a < h; a++) {
                                var K = e[a], H = K.x, L = K.y; p = K.low; var B = c && k.stacks[(this.negStacks && L < (x ? 0 : t) ? "-" : "") + this.stackKey], D; k.positiveValuesOnly && null !== L && 0 >= L && (K.isNull = !0); K.plotX = y = g(Math.min(Math.max(-1E5, d.translate(H, 0, 0, 0, 1, m, "flags" === this.type)),
                                    1E5)); c && this.visible && !K.isNull && B && B[H] && (C = this.getStackIndicator(C, H, this.index), D = B[H], L = D.points[C.key], p = L[0], L = L[1], p === x && C.key === B[H].base && (p = J(t, k.min)), k.positiveValuesOnly && 0 >= p && (p = null), K.total = K.stackTotal = D.total, K.percentage = D.total && K.y / D.total * 100, K.stackY = L, D.setOffset(this.pointXOffset || 0, this.barW || 0)); K.yBottom = w(p) ? k.translate(p, 0, 1, 0, 1) : null; l && (L = this.modifyValue(L, K)); K.plotY = p = "number" === typeof L && Infinity !== L ? Math.min(Math.max(-1E5, k.translate(L, 0, 1, 0, 1)), 1E5) : void 0;
                                K.isInside = void 0 !== p && 0 <= p && p <= k.len && 0 <= y && y <= d.len; K.clientX = n ? g(d.translate(H, 0, 0, 0, 1, m)) : y; K.negative = K.y < (t || 0); K.category = f && void 0 !== f[K.x] ? f[K.x] : K.x; K.isNull || (void 0 !== r && (v = Math.min(v, Math.abs(y - r))), r = y); K.zone = this.zones.length && K.getZone()
                            } this.closestPointRangePx = v
                    }, getValidPoints: function (a, b) { var d = this.chart; return c(a || this.points || [], function (a) { return b && !d.isInsidePlot(a.plotX, a.plotY, d.inverted) ? !1 : !a.isNull }) }, setClip: function (a) {
                        var b = this.chart, c = this.options, d = b.renderer,
                            f = b.inverted, e = this.clipBox, h = e || b.clipBox, g = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, h.height, c.xAxis, c.yAxis].join(), q = b[g], m = b[g + "m"]; q || (a && (h.width = 0, f && (h.x = b.plotSizeX), b[g + "m"] = m = d.clipRect(f ? b.plotSizeX + 99 : -99, f ? -b.plotLeft : -b.plotTop, 99, f ? b.chartWidth : b.chartHeight)), b[g] = q = d.clipRect(h), q.count = { length: 0 }); a && !q.count[this.index] && (q.count[this.index] = !0, q.count.length += 1); !1 !== c.clip && (this.group.clip(a || e ? q : b.clipRect), this.markerGroup.clip(m), this.sharedClipKey = g);
                        a || (q.count[this.index] && (delete q.count[this.index], --q.count.length), 0 === q.count.length && g && b[g] && (e || (b[g] = b[g].destroy()), b[g + "m"] && (b[g + "m"] = b[g + "m"].destroy())))
                    }, animate: function (a) { var b = this.chart, c = B(this.options.animation), d; a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({ width: b.plotSizeX, x: 0 }, c), b[d + "m"] && b[d + "m"].animate({ width: b.plotSizeX + 99, x: 0 }, c), this.animate = null) }, afterAnimate: function () { this.setClip(); m(this, "afterAnimate"); this.finishedAnimating = !0 }, drawPoints: function () {
                        var a =
                            this.points, b = this.chart, c, d, f, e, h = this.options.marker, g, m, l, n = this[this.specialGroup] || this.markerGroup, t, x = J(h.enabled, this.xAxis.isRadial ? !0 : null, this.closestPointRangePx >= 2 * h.radius); if (!1 !== h.enabled || this._hasPointMarkers) for (c = 0; c < a.length; c++)d = a[c], e = d.graphic, g = d.marker || {}, m = !!d.marker, f = x && void 0 === g.enabled || g.enabled, l = d.isInside, f && !d.isNull ? (f = J(g.symbol, this.symbol), d.hasImage = 0 === f.indexOf("url"), t = this.markerAttribs(d, d.selected && "select"), e ? e[l ? "show" : "hide"](!0).animate(t) : l &&
                                (0 < t.width || d.hasImage) && (d.graphic = e = b.renderer.symbol(f, t.x, t.y, t.width, t.height, m ? g : h).add(n)), e && e.attr(this.pointAttribs(d, d.selected && "select")), e && e.addClass(d.getClassName(), !0)) : e && (d.graphic = e.destroy())
                    }, markerAttribs: function (a, b) { var c = this.options.marker, d = a.marker || {}, f = J(d.radius, c.radius); b && (c = c.states[b], b = d.states && d.states[b], f = J(b && b.radius, c && c.radius, f + (c && c.radiusPlus || 0))); a.hasImage && (f = 0); a = { x: Math.floor(a.plotX) - f, y: a.plotY - f }; f && (a.width = a.height = 2 * f); return a }, pointAttribs: function (a,
                        b) { var c = this.options.marker, d = a && a.options, f = d && d.marker || {}, e = this.color, h = d && d.color, g = a && a.color, d = J(f.lineWidth, c.lineWidth); a = a && a.zone && a.zone.color; e = h || a || g || e; a = f.fillColor || c.fillColor || e; e = f.lineColor || c.lineColor || e; b && (c = c.states[b], b = f.states && f.states[b] || {}, d = J(b.lineWidth, c.lineWidth, d + J(b.lineWidthPlus, c.lineWidthPlus, 0)), a = b.fillColor || c.fillColor || a, e = b.lineColor || c.lineColor || e); return { stroke: e, "stroke-width": d, fill: a } }, destroy: function () {
                            var a = this, b = a.chart, c = /AppleWebKit\/533/.test(L.navigator.userAgent),
                                d, f, h = a.data || [], g, l; m(a, "destroy"); t(a); v(a.axisTypes || [], function (b) { (l = a[b]) && l.series && (e(l.series, a), l.isDirty = l.forceRedraw = !0) }); a.legendItem && a.chart.legend.destroyItem(a); for (f = h.length; f--;)(g = h[f]) && g.destroy && g.destroy(); a.points = null; clearTimeout(a.animationTimeout); H(a, function (a, b) { a instanceof x && !a.survive && (d = c && "group" === b ? "hide" : "destroy", a[d]()) }); b.hoverSeries === a && (b.hoverSeries = null); e(b.series, a); b.orderSeries(); H(a, function (b, c) { delete a[c] })
                        }, getGraphPath: function (a, b, c) {
                            var d =
                                this, f = d.options, e = f.step, h, g = [], m = [], l; a = a || d.points; (h = a.reversed) && a.reverse(); (e = { right: 1, center: 2 }[e] || e && 3) && h && (e = 4 - e); !f.connectNulls || b || c || (a = this.getValidPoints(a)); v(a, function (k, h) {
                                    var q = k.plotX, t = k.plotY, n = a[h - 1]; (k.leftCliff || n && n.rightCliff) && !c && (l = !0); k.isNull && !w(b) && 0 < h ? l = !f.connectNulls : k.isNull && !b ? l = !0 : (0 === h || l ? h = ["M", k.plotX, k.plotY] : d.getPointSpline ? h = d.getPointSpline(a, k, h) : e ? (h = 1 === e ? ["L", n.plotX, t] : 2 === e ? ["L", (n.plotX + q) / 2, n.plotY, "L", (n.plotX + q) / 2, t] : ["L", q, n.plotY],
                                        h.push("L", q, t)) : h = ["L", q, t], m.push(k.x), e && m.push(k.x), g.push.apply(g, h), l = !1)
                                }); g.xMap = m; return d.graphPath = g
                        }, drawGraph: function () {
                            var a = this, b = this.options, c = (this.gappedPath || this.getGraphPath).call(this), d = [["graph", "highcharts-graph", b.lineColor || this.color, b.dashStyle]]; v(this.zones, function (c, f) { d.push(["zone-graph-" + f, "highcharts-graph highcharts-zone-graph-" + f + " " + (c.className || ""), c.color || a.color, c.dashStyle || b.dashStyle]) }); v(d, function (d, f) {
                                var e = d[0], k = a[e]; k ? (k.endX = a.preventGraphAnimation ?
                                    null : c.xMap, k.animate({ d: c })) : c.length && (a[e] = a.chart.renderer.path(c).addClass(d[1]).attr({ zIndex: 1 }).add(a.group), k = { stroke: d[2], "stroke-width": b.lineWidth, fill: a.fillGraph && a.color || "none" }, d[3] ? k.dashstyle = d[3] : "square" !== b.linecap && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), k = a[e].attr(k).shadow(2 > f && b.shadow)); k && (k.startX = c.xMap, k.isArea = c.isArea)
                            })
                        }, applyZones: function () {
                            var a = this, b = this.chart, c = b.renderer, d = this.zones, f, e, h = this.clips || [], g, l = this.graph, m = this.area, t = Math.max(b.chartWidth,
                                b.chartHeight), n = this[(this.zoneAxis || "y") + "Axis"], x, y, p = b.inverted, r, C, w, K, L = !1; d.length && (l || m) && n && void 0 !== n.min && (y = n.reversed, r = n.horiz, l && l.hide(), m && m.hide(), x = n.getExtremes(), v(d, function (d, k) {
                                    f = y ? r ? b.plotWidth : 0 : r ? 0 : n.toPixels(x.min); f = Math.min(Math.max(J(e, f), 0), t); e = Math.min(Math.max(Math.round(n.toPixels(J(d.value, x.max), !0)), 0), t); L && (f = e = n.toPixels(x.max)); C = Math.abs(f - e); w = Math.min(f, e); K = Math.max(f, e); n.isXAxis ? (g = { x: p ? K : w, y: 0, width: C, height: t }, r || (g.x = b.plotHeight - g.x)) : (g = {
                                        x: 0,
                                        y: p ? K : w, width: t, height: C
                                    }, r && (g.y = b.plotWidth - g.y)); p && c.isVML && (g = n.isXAxis ? { x: 0, y: y ? w : K, height: g.width, width: b.chartWidth } : { x: g.y - b.plotLeft - b.spacingBox.x, y: 0, width: g.height, height: b.chartHeight }); h[k] ? h[k].animate(g) : (h[k] = c.clipRect(g), l && a["zone-graph-" + k].clip(h[k]), m && a["zone-area-" + k].clip(h[k])); L = d.value > x.max
                                }), this.clips = h)
                        }, invertGroups: function (a) {
                            function b() {
                                v(["group", "markerGroup"], function (b) {
                                    c[b] && (d.renderer.isVML && c[b].attr({ width: c.yAxis.len, height: c.xAxis.len }), c[b].width =
                                        c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(a))
                                })
                            } var c = this, d = c.chart, f; c.xAxis && (f = D(d, "resize", b), D(c, "destroy", f), b(a), c.invertGroups = b)
                        }, plotGroup: function (a, b, c, d, f) {
                            var e = this[a], k = !e; k && (this[a] = e = this.chart.renderer.g().attr({ zIndex: d || .1 }).add(f)); e.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (w(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (e.hasClass("highcharts-tracker") ? " highcharts-tracker" :
                                ""), !0); e.attr({ visibility: c })[k ? "attr" : "animate"](this.getPlotBox()); return e
                        }, getPlotBox: function () { var a = this.chart, b = this.xAxis, c = this.yAxis; a.inverted && (b = c, c = this.xAxis); return { translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1 } }, render: function () {
                            var a = this, b = a.chart, c, d = a.options, f = !!a.animate && b.renderer.isSVG && B(d.animation).duration, e = a.visible ? "inherit" : "hidden", h = d.zIndex, g = a.hasRendered, l = b.seriesGroup, m = b.inverted; c = a.plotGroup("group", "series", e, h, l); a.markerGroup =
                                a.plotGroup("markerGroup", "markers", e, h, l); f && a.animate(!0); c.inverted = a.isCartesian ? m : !1; a.drawGraph && (a.drawGraph(), a.applyZones()); a.drawDataLabels && a.drawDataLabels(); a.visible && a.drawPoints(); a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker(); a.invertGroups(m); !1 === d.clip || a.sharedClipKey || g || c.clip(b.clipRect); f && a.animate(); g || (a.animationTimeout = C(function () { a.afterAnimate() }, f)); a.isDirty = !1; a.hasRendered = !0
                        }, redraw: function () {
                            var a = this.chart, b = this.isDirty || this.isDirtyData,
                                c = this.group, d = this.xAxis, f = this.yAxis; c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }), c.animate({ translateX: J(d && d.left, a.plotLeft), translateY: J(f && f.top, a.plotTop) })); this.translate(); this.render(); b && delete this.kdTree
                        }, kdAxisArray: ["clientX", "plotY"], searchPoint: function (a, b) { var c = this.xAxis, d = this.yAxis, f = this.chart.inverted; return this.searchKDTree({ clientX: f ? c.len - a.chartY + c.pos : a.chartX - c.pos, plotY: f ? d.len - a.chartX + d.pos : a.chartY - d.pos }, b) }, buildKDTree: function () {
                            function a(c,
                                d, f) { var e, k; if (k = c && c.length) return e = b.kdAxisArray[d % f], c.sort(function (a, b) { return a[e] - b[e] }), k = Math.floor(k / 2), { point: c[k], left: a(c.slice(0, k), d + 1, f), right: a(c.slice(k + 1), d + 1, f) } } this.buildingKdTree = !0; var b = this, c = -1 < b.options.findNearestPointBy.indexOf("y") ? 2 : 1; delete b.kdTree; C(function () { b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c); b.buildingKdTree = !1 }, b.options.kdNow ? 0 : 1)
                        }, searchKDTree: function (a, b) {
                            function c(a, b, k, g) {
                                var l = b.point, m = d.kdAxisArray[k % g], q, n, t = l; n = w(a[f]) && w(l[f]) ?
                                    Math.pow(a[f] - l[f], 2) : null; q = w(a[e]) && w(l[e]) ? Math.pow(a[e] - l[e], 2) : null; q = (n || 0) + (q || 0); l.dist = w(q) ? Math.sqrt(q) : Number.MAX_VALUE; l.distX = w(n) ? Math.sqrt(n) : Number.MAX_VALUE; m = a[m] - l[m]; q = 0 > m ? "left" : "right"; n = 0 > m ? "right" : "left"; b[q] && (q = c(a, b[q], k + 1, g), t = q[h] < t[h] ? q : l); b[n] && Math.sqrt(m * m) < t[h] && (a = c(a, b[n], k + 1, g), t = a[h] < t[h] ? a : t); return t
                            } var d = this, f = this.kdAxisArray[0], e = this.kdAxisArray[1], h = b ? "distX" : "dist"; b = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1; this.kdTree || this.buildingKdTree ||
                                this.buildKDTree(); if (this.kdTree) return c(a, this.kdTree, b, b)
                        }
                })
    })(N); (function (a) {
        var D = a.Axis, B = a.Chart, G = a.correctFloat, p = a.defined, g = a.destroyObjectProperties, l = a.each, r = a.format, n = a.objectEach, w = a.pick, v = a.Series; a.StackItem = function (a, h, g, c, f) {
            var b = a.chart.inverted; this.axis = a; this.isNegative = g; this.options = h; this.x = c; this.total = null; this.points = {}; this.stack = f; this.rightCliff = this.leftCliff = 0; this.alignOptions = {
                align: h.align || (b ? g ? "left" : "right" : "center"), verticalAlign: h.verticalAlign || (b ?
                    "middle" : g ? "bottom" : "top"), y: w(h.y, b ? 4 : g ? 14 : -6), x: w(h.x, b ? g ? -6 : 6 : 0)
            }; this.textAlign = h.textAlign || (b ? g ? "right" : "left" : "center")
        }; a.StackItem.prototype = {
            destroy: function () { g(this, this.axis) }, render: function (a) { var e = this.options, g = e.format, g = g ? r(g, this) : e.formatter.call(this); this.label ? this.label.attr({ text: g, visibility: "hidden" }) : this.label = this.axis.chart.renderer.text(g, null, null, e.useHTML).css(e.style).attr({ align: this.textAlign, rotation: e.rotation, visibility: "hidden" }).add(a) }, setOffset: function (a,
                h) { var e = this.axis, c = e.chart, f = e.translate(e.usePercentage ? 100 : this.total, 0, 0, 0, 1), e = e.translate(0), e = Math.abs(f - e); a = c.xAxis[0].translate(this.x) + a; f = this.getStackBox(c, this, a, f, h, e); if (h = this.label) h.align(this.alignOptions, null, f), f = h.alignAttr, h[!1 === this.options.crop || c.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0) }, getStackBox: function (a, h, g, c, f, b) {
                    var d = h.axis.reversed, e = a.inverted; a = a.plotHeight; h = h.isNegative && !d || !h.isNegative && d; return {
                        x: e ? h ? c : c - b : g, y: e ? a - g - f : h ? a - c - b : a - c, width: e ? b : f, height: e ?
                            f : b
                    }
                }
        }; B.prototype.getStacks = function () { var a = this; l(a.yAxis, function (a) { a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks) }); l(a.series, function (e) { !e.options.stacking || !0 !== e.visible && !1 !== a.options.chart.ignoreHiddenSeries || (e.stackKey = e.type + w(e.options.stack, "")) }) }; D.prototype.buildStacks = function () { var a = this.series, h = w(this.options.reversedStacks, !0), g = a.length, c; if (!this.isXAxis) { this.usePercentage = !1; for (c = g; c--;)a[h ? c : g - c - 1].setStackedPoints(); for (c = 0; c < g; c++)a[c].modifyStacks() } }; D.prototype.renderStackTotals =
            function () { var a = this.chart, h = a.renderer, g = this.stacks, c = this.stackTotalGroup; c || (this.stackTotalGroup = c = h.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add()); c.translate(a.plotLeft, a.plotTop); n(g, function (a) { n(a, function (a) { a.render(c) }) }) }; D.prototype.resetStacks = function () { var a = this, h = a.stacks; a.isXAxis || n(h, function (e) { n(e, function (c, f) { c.touched < a.stacksTouched ? (c.destroy(), delete e[f]) : (c.total = null, c.cum = null) }) }) }; D.prototype.cleanStacks = function () {
                var a; this.isXAxis || (this.oldStacks &&
                    (a = this.stacks = this.oldStacks), n(a, function (a) { n(a, function (a) { a.cum = a.total }) }))
            }; v.prototype.setStackedPoints = function () {
                if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                    var e = this.processedXData, h = this.processedYData, g = [], c = h.length, f = this.options, b = f.threshold, d = f.startFromThreshold ? b : 0, l = f.stack, f = f.stacking, n = this.stackKey, r = "-" + n, t = this.negStacks, v = this.yAxis, x = v.stacks, C = v.oldStacks, L, q, A, E, F, k, u; v.stacksTouched += 1; for (F = 0; F < c; F++)k = e[F], u = h[F],
                        L = this.getStackIndicator(L, k, this.index), E = L.key, A = (q = t && u < (d ? 0 : b)) ? r : n, x[A] || (x[A] = {}), x[A][k] || (C[A] && C[A][k] ? (x[A][k] = C[A][k], x[A][k].total = null) : x[A][k] = new a.StackItem(v, v.options.stackLabels, q, k, l)), A = x[A][k], null !== u && (A.points[E] = A.points[this.index] = [w(A.cum, d)], p(A.cum) || (A.base = E), A.touched = v.stacksTouched, 0 < L.index && !1 === this.singleStacks && (A.points[E][0] = A.points[this.index + "," + k + ",0"][0])), "percent" === f ? (q = q ? n : r, t && x[q] && x[q][k] ? (q = x[q][k], A.total = q.total = Math.max(q.total, A.total) + Math.abs(u) ||
                            0) : A.total = G(A.total + (Math.abs(u) || 0))) : A.total = G(A.total + (u || 0)), A.cum = w(A.cum, d) + (u || 0), null !== u && (A.points[E].push(A.cum), g[F] = A.cum); "percent" === f && (v.usePercentage = !0); this.stackedYData = g; v.oldStacks = {}
                }
            }; v.prototype.modifyStacks = function () { var a = this, h = a.stackKey, g = a.yAxis.stacks, c = a.processedXData, f, b = a.options.stacking; a[b + "Stacker"] && l([h, "-" + h], function (d) { for (var e = c.length, h, l; e--;)if (h = c[e], f = a.getStackIndicator(f, h, a.index, d), l = (h = g[d] && g[d][h]) && h.points[f.key]) a[b + "Stacker"](l, h, e) }) };
        v.prototype.percentStacker = function (a, h, g) { h = h.total ? 100 / h.total : 0; a[0] = G(a[0] * h); a[1] = G(a[1] * h); this.stackedYData[g] = a[1] }; v.prototype.getStackIndicator = function (a, h, g, c) { !p(a) || a.x !== h || c && a.key !== c ? a = { x: h, index: 0, key: c } : a.index++; a.key = [g, h, a.index].join(); return a }
    })(N); (function (a) {
        var D = a.addEvent, B = a.animate, G = a.Axis, p = a.createElement, g = a.css, l = a.defined, r = a.each, n = a.erase, w = a.extend, v = a.fireEvent, e = a.inArray, h = a.isNumber, m = a.isObject, c = a.isArray, f = a.merge, b = a.objectEach, d = a.pick, y = a.Point,
            H = a.Series, J = a.seriesTypes, t = a.setAnimation, K = a.splat; w(a.Chart.prototype, {
                addSeries: function (a, b, c) { var f, e = this; a && (b = d(b, !0), v(e, "addSeries", { options: a }, function () { f = e.initSeries(a); e.isDirtyLegend = !0; e.linkSeries(); b && e.redraw(c) })); return f }, addAxis: function (a, b, c, e) { var h = b ? "xAxis" : "yAxis", g = this.options; a = f(a, { index: this[h].length, isX: b }); b = new G(this, a); g[h] = K(g[h] || {}); g[h].push(a); d(c, !0) && this.redraw(e); return b }, showLoading: function (a) {
                    var b = this, c = b.options, d = b.loadingDiv, f = c.loading,
                        e = function () { d && g(d, { left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px" }) }; d || (b.loadingDiv = d = p("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, b.container), b.loadingSpan = p("span", { className: "highcharts-loading-inner" }, null, d), D(b, "redraw", e)); d.className = "highcharts-loading"; b.loadingSpan.innerHTML = a || c.lang.loading; g(d, w(f.style, { zIndex: 10 })); g(b.loadingSpan, f.labelStyle); b.loadingShown || (g(d, { opacity: 0, display: "" }), B(d, {
                            opacity: f.style.opacity ||
                            .5
                        }, { duration: f.showDuration || 0 })); b.loadingShown = !0; e()
                }, hideLoading: function () { var a = this.options, b = this.loadingDiv; b && (b.className = "highcharts-loading highcharts-loading-hidden", B(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function () { g(b, { display: "none" }) } })); this.loadingShown = !1 }, propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
                propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "), update: function (a, c, g) {
                    var m = this, n = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle" }, t = a.chart, x, k, y = []; if (t) {
                        f(!0, m.options.chart, t); "className" in t && m.setClassName(t.className); if ("inverted" in t || "polar" in t) m.propFromSeries(), x = !0; "alignTicks" in t && (x = !0); b(t, function (a, b) {
                            -1 !== e("chart." + b, m.propsRequireUpdateSeries) && (k = !0); -1 !== e(b, m.propsRequireDirtyBox) &&
                                (m.isDirtyBox = !0)
                        }); "style" in t && m.renderer.setStyle(t.style)
                    } a.colors && (this.options.colors = a.colors); a.plotOptions && f(!0, this.options.plotOptions, a.plotOptions); b(a, function (a, b) { if (m[b] && "function" === typeof m[b].update) m[b].update(a, !1); else if ("function" === typeof m[n[b]]) m[n[b]](a); "chart" !== b && -1 !== e(b, m.propsRequireUpdateSeries) && (k = !0) }); r("xAxis yAxis zAxis series colorAxis pane".split(" "), function (b) {
                        a[b] && (r(K(a[b]), function (a, c) {
                            (c = l(a.id) && m.get(a.id) || m[b][c]) && c.coll === b && (c.update(a,
                                !1), g && (c.touched = !0)); if (!c && g) if ("series" === b) m.addSeries(a, !1).touched = !0; else if ("xAxis" === b || "yAxis" === b) m.addAxis(a, "xAxis" === b, !1).touched = !0
                        }), g && r(m[b], function (a) { a.touched ? delete a.touched : y.push(a) }))
                    }); r(y, function (a) { a.remove(!1) }); x && r(m.axes, function (a) { a.update({}, !1) }); k && r(m.series, function (a) { a.update({}, !1) }); a.loading && f(!0, m.options.loading, a.loading); x = t && t.width; t = t && t.height; h(x) && x !== m.chartWidth || h(t) && t !== m.chartHeight ? m.setSize(x, t) : d(c, !0) && m.redraw()
                }, setSubtitle: function (a) {
                    this.setTitle(void 0,
                        a)
                }
            }); w(y.prototype, {
                update: function (a, b, c, f) {
                    function e() {
                        h.applyOptions(a); null === h.y && k && (h.graphic = k.destroy()); m(a, !0) && (k && k.element && a && a.marker && void 0 !== a.marker.symbol && (h.graphic = k.destroy()), a && a.dataLabels && h.dataLabel && (h.dataLabel = h.dataLabel.destroy()), h.connector && (h.connector = h.connector.destroy())); l = h.index; g.updateParallelArrays(h, l); n.data[l] = m(n.data[l], !0) || m(a, !0) ? h.options : a; g.isDirty = g.isDirtyData = !0; !g.fixedBox && g.hasCartesianSeries && (t.isDirtyBox = !0); "point" === n.legendType &&
                            (t.isDirtyLegend = !0); b && t.redraw(c)
                    } var h = this, g = h.series, k = h.graphic, l, t = g.chart, n = g.options; b = d(b, !0); !1 === f ? e() : h.firePointEvent("update", { options: a }, e)
                }, remove: function (a, b) { this.series.removePoint(e(this, this.series.data), a, b) }
            }); w(H.prototype, {
                addPoint: function (a, b, c, f) {
                    var e = this.options, h = this.data, g = this.chart, k = this.xAxis, k = k && k.hasNames && k.names, l = e.data, m, t, n = this.xData, q, x; b = d(b, !0); m = { series: this }; this.pointClass.prototype.applyOptions.apply(m, [a]); x = m.x; q = n.length; if (this.requireSorting &&
                        x < n[q - 1]) for (t = !0; q && n[q - 1] > x;)q--; this.updateParallelArrays(m, "splice", q, 0, 0); this.updateParallelArrays(m, q); k && m.name && (k[x] = m.name); l.splice(q, 0, a); t && (this.data.splice(q, 0, null), this.processData()); "point" === e.legendType && this.generatePoints(); c && (h[0] && h[0].remove ? h[0].remove(!1) : (h.shift(), this.updateParallelArrays(m, "shift"), l.shift())); this.isDirtyData = this.isDirty = !0; b && g.redraw(f)
                }, removePoint: function (a, b, c) {
                    var f = this, e = f.data, h = e[a], g = f.points, k = f.chart, l = function () {
                        g && g.length === e.length &&
                            g.splice(a, 1); e.splice(a, 1); f.options.data.splice(a, 1); f.updateParallelArrays(h || { series: f }, "splice", a, 1); h && h.destroy(); f.isDirty = !0; f.isDirtyData = !0; b && k.redraw()
                    }; t(c, k); b = d(b, !0); h ? h.firePointEvent("remove", null, l) : l()
                }, remove: function (a, b, c) { function f() { e.destroy(); h.isDirtyLegend = h.isDirtyBox = !0; h.linkSeries(); d(a, !0) && h.redraw(b) } var e = this, h = e.chart; !1 !== c ? v(e, "remove", null, f) : f() }, update: function (a, b) {
                    var c = this, e = c.chart, h = c.userOptions, g = c.oldType || c.type, l = a.type || h.type || e.options.chart.type,
                        k = J[g].prototype, m, t = ["group", "markerGroup", "dataLabelsGroup"], n = ["navigatorSeries", "baseSeries"], y = c.finishedAnimating && { animation: !1 }; if (Object.keys && "data" === Object.keys(a).toString()) return this.setData(a.data, b); if (l && l !== g || void 0 !== a.zIndex) t.length = 0; n = t.concat(n); r(n, function (a) { n[a] = c[a]; delete c[a] }); a = f(h, y, { index: c.index, pointStart: c.xData[0] }, { data: c.options.data }, a); c.remove(!1, null, !1); for (m in k) c[m] = void 0; w(c, J[l || g].prototype); r(n, function (a) { c[a] = n[a] }); c.init(e, a); c.oldType =
                            g; e.linkSeries(); d(b, !0) && e.redraw(!1)
                }
            }); w(G.prototype, {
                update: function (a, b) { var c = this.chart; a = c.options[this.coll][this.options.index] = f(this.userOptions, a); this.destroy(!0); this.init(c, w(a, { events: void 0 })); c.isDirtyBox = !0; d(b, !0) && c.redraw() }, remove: function (a) {
                    for (var b = this.chart, f = this.coll, e = this.series, h = e.length; h--;)e[h] && e[h].remove(!1); n(b.axes, this); n(b[f], this); c(b.options[f]) ? b.options[f].splice(this.options.index, 1) : delete b.options[f]; r(b[f], function (a, b) { a.options.index = b }); this.destroy();
                    b.isDirtyBox = !0; d(a, !0) && b.redraw()
                }, setTitle: function (a, b) { this.update({ title: a }, b) }, setCategories: function (a, b) { this.update({ categories: a }, b) }
            })
    })(N); (function (a) {
        var D = a.color, B = a.each, G = a.map, p = a.pick, g = a.Series, l = a.seriesType; l("area", "line", { softThreshold: !1, threshold: 0 }, {
            singleStacks: !1, getStackPoints: function (g) {
                var l = [], r = [], v = this.xAxis, e = this.yAxis, h = e.stacks[this.stackKey], m = {}, c = this.index, f = e.series, b = f.length, d, y = p(e.options.reversedStacks, !0) ? 1 : -1, H; g = g || this.points; if (this.options.stacking) {
                    for (H =
                        0; H < g.length; H++)g[H].leftNull = g[H].rightNull = null, m[g[H].x] = g[H]; a.objectEach(h, function (a, b) { null !== a.total && r.push(b) }); r.sort(function (a, b) { return a - b }); d = G(f, function () { return this.visible }); B(r, function (a, f) {
                            var g = 0, n, t; if (m[a] && !m[a].isNull) l.push(m[a]), B([-1, 1], function (e) { var g = 1 === e ? "rightNull" : "leftNull", l = 0, p = h[r[f + e]]; if (p) for (H = c; 0 <= H && H < b;)n = p.points[H], n || (H === c ? m[a][g] = !0 : d[H] && (t = h[a].points[H]) && (l -= t[1] - t[0])), H += y; m[a][1 === e ? "rightCliff" : "leftCliff"] = l }); else {
                                for (H = c; 0 <= H && H <
                                    b;) { if (n = h[a].points[H]) { g = n[1]; break } H += y } g = e.translate(g, 0, 1, 0, 1); l.push({ isNull: !0, plotX: v.translate(a, 0, 0, 0, 1), x: a, plotY: g, yBottom: g })
                            }
                        })
                } return l
            }, getGraphPath: function (a) {
                var l = g.prototype.getGraphPath, r = this.options, v = r.stacking, e = this.yAxis, h, m, c = [], f = [], b = this.index, d, y = e.stacks[this.stackKey], H = r.threshold, J = e.getThreshold(r.threshold), t, r = r.connectNulls || "percent" === v, K = function (h, g, l) {
                    var m = a[h]; h = v && y[m.x].points[b]; var t = m[l + "Null"] || 0; l = m[l + "Cliff"] || 0; var n, p, m = !0; l || t ? (n = (t ? h[0] :
                        h[1]) + l, p = h[0] + l, m = !!t) : !v && a[g] && a[g].isNull && (n = p = H); void 0 !== n && (f.push({ plotX: d, plotY: null === n ? J : e.getThreshold(n), isNull: m, isCliff: !0 }), c.push({ plotX: d, plotY: null === p ? J : e.getThreshold(p), doCurve: !1 }))
                }; a = a || this.points; v && (a = this.getStackPoints(a)); for (h = 0; h < a.length; h++)if (m = a[h].isNull, d = p(a[h].rectPlotX, a[h].plotX), t = p(a[h].yBottom, J), !m || r) r || K(h, h - 1, "left"), m && !v && r || (f.push(a[h]), c.push({ x: h, plotX: d, plotY: t })), r || K(h, h + 1, "right"); h = l.call(this, f, !0, !0); c.reversed = !0; m = l.call(this, c, !0,
                    !0); m.length && (m[0] = "L"); m = h.concat(m); l = l.call(this, f, !1, r); m.xMap = h.xMap; this.areaPath = m; return l
            }, drawGraph: function () {
                this.areaPath = []; g.prototype.drawGraph.apply(this); var a = this, l = this.areaPath, w = this.options, v = [["area", "highcharts-area", this.color, w.fillColor]]; B(this.zones, function (e, h) { v.push(["zone-area-" + h, "highcharts-area highcharts-zone-area-" + h + " " + e.className, e.color || a.color, e.fillColor || w.fillColor]) }); B(v, function (e) {
                    var h = e[0], g = a[h]; g ? (g.endX = a.preventGraphAnimation ? null : l.xMap,
                        g.animate({ d: l })) : (g = a[h] = a.chart.renderer.path(l).addClass(e[1]).attr({ fill: p(e[3], D(e[2]).setOpacity(p(w.fillOpacity, .75)).get()), zIndex: 0 }).add(a.group), g.isArea = !0); g.startX = l.xMap; g.shiftUnit = w.step ? 2 : 1
                })
            }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
        })
    })(N); (function (a) {
        var D = a.pick; a = a.seriesType; a("spline", "line", {}, {
            getPointSpline: function (a, G, p) {
                var g = G.plotX, l = G.plotY, r = a[p - 1]; p = a[p + 1]; var n, w, v, e; if (r && !r.isNull && !1 !== r.doCurve && !G.isCliff && p && !p.isNull && !1 !== p.doCurve && !G.isCliff) {
                    a =
                        r.plotY; v = p.plotX; p = p.plotY; var h = 0; n = (1.5 * g + r.plotX) / 2.5; w = (1.5 * l + a) / 2.5; v = (1.5 * g + v) / 2.5; e = (1.5 * l + p) / 2.5; v !== n && (h = (e - w) * (v - g) / (v - n) + l - e); w += h; e += h; w > a && w > l ? (w = Math.max(a, l), e = 2 * l - w) : w < a && w < l && (w = Math.min(a, l), e = 2 * l - w); e > p && e > l ? (e = Math.max(p, l), w = 2 * l - e) : e < p && e < l && (e = Math.min(p, l), w = 2 * l - e); G.rightContX = v; G.rightContY = e
                } G = ["C", D(r.rightContX, r.plotX), D(r.rightContY, r.plotY), D(n, g), D(w, l), g, l]; r.rightContX = r.rightContY = null; return G
            }
        })
    })(N); (function (a) {
        var D = a.seriesTypes.area.prototype, B = a.seriesType;
        B("areaspline", "spline", a.defaultPlotOptions.area, { getStackPoints: D.getStackPoints, getGraphPath: D.getGraphPath, drawGraph: D.drawGraph, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle })
    })(N); (function (a) {
        var D = a.animObject, B = a.color, G = a.each, p = a.extend, g = a.isNumber, l = a.merge, r = a.pick, n = a.Series, w = a.seriesType, v = a.svg; w("column", "line", {
            borderRadius: 0, crisp: !0, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: {
                hover: { halo: !1, brightness: .1 }, select: {
                    color: "#cccccc",
                    borderColor: "#000000"
                }
            }, dataLabels: { align: null, verticalAlign: null, y: null }, softThreshold: !1, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff"
        }, {
                cropShoulder: 0, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function () { n.prototype.init.apply(this, arguments); var a = this, h = a.chart; h.hasRendered && G(h.series, function (e) { e.type === a.type && (e.isDirty = !0) }) }, getColumnMetrics: function () {
                    var a = this, h = a.options, g = a.xAxis, c = a.yAxis, f = g.reversed,
                        b, d = {}, l = 0; !1 === h.grouping ? l = 1 : G(a.chart.series, function (f) { var e = f.options, g = f.yAxis, h; f.type !== a.type || !f.visible && a.chart.options.chart.ignoreHiddenSeries || c.len !== g.len || c.pos !== g.pos || (e.stacking ? (b = f.stackKey, void 0 === d[b] && (d[b] = l++), h = d[b]) : !1 !== e.grouping && (h = l++), f.columnIndex = h) }); var n = Math.min(Math.abs(g.transA) * (g.ordinalSlope || h.pointRange || g.closestPointRange || g.tickInterval || 1), g.len), p = n * h.groupPadding, t = (n - 2 * p) / (l || 1), h = Math.min(h.maxPointWidth || g.len, r(h.pointWidth, t * (1 - 2 * h.pointPadding)));
                    a.columnMetrics = { width: h, offset: (t - h) / 2 + (p + ((a.columnIndex || 0) + (f ? 1 : 0)) * t - n / 2) * (f ? -1 : 1) }; return a.columnMetrics
                }, crispCol: function (a, g, l, c) { var f = this.chart, b = this.borderWidth, d = -(b % 2 ? .5 : 0), b = b % 2 ? .5 : 1; f.inverted && f.renderer.isVML && (b += 1); this.options.crisp && (l = Math.round(a + l) + d, a = Math.round(a) + d, l -= a); c = Math.round(g + c) + b; d = .5 >= Math.abs(g) && .5 < c; g = Math.round(g) + b; c -= g; d && c && (--g, c += 1); return { x: a, y: g, width: l, height: c } }, translate: function () {
                    var a = this, g = a.chart, l = a.options, c = a.dense = 2 > a.closestPointRange *
                        a.xAxis.transA, c = a.borderWidth = r(l.borderWidth, c ? 0 : 1), f = a.yAxis, b = l.threshold, d = a.translatedThreshold = f.getThreshold(b), p = r(l.minPointLength, 5), v = a.getColumnMetrics(), w = v.width, t = a.barW = Math.max(w, 1 + 2 * c), K = a.pointXOffset = v.offset; g.inverted && (d -= .5); l.pointPadding && (t = Math.ceil(t)); n.prototype.translate.apply(a); G(a.points, function (c) {
                            var e = r(c.yBottom, d), h = 999 + Math.abs(e), h = Math.min(Math.max(-h, c.plotY), f.len + h), l = c.plotX + K, m = t, n = Math.min(h, e), y, k = Math.max(h, e) - n; p && Math.abs(k) < p && (k = p, y = !f.reversed &&
                                !c.negative || f.reversed && c.negative, c.y === b && a.dataMax <= b && f.min < b && (y = !y), n = Math.abs(n - d) > p ? e - p : d - (y ? p : 0)); c.barX = l; c.pointWidth = w; c.tooltipPos = g.inverted ? [f.len + f.pos - g.plotLeft - h, a.xAxis.len - l - m / 2, k] : [l + m / 2, h + f.pos - g.plotTop, k]; c.shapeType = "rect"; c.shapeArgs = a.crispCol.apply(a, c.isNull ? [l, d, m, 0] : [l, n, m, k])
                        })
                }, getSymbol: a.noop, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, drawGraph: function () { this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data") }, pointAttribs: function (a,
                    g) {
                    var e = this.options, c, f = this.pointAttrToOptions || {}; c = f.stroke || "borderColor"; var b = f["stroke-width"] || "borderWidth", d = a && a.color || this.color, h = a && a[c] || e[c] || this.color || d, n = a && a[b] || e[b] || this[b] || 0, f = e.dashStyle; a && this.zones.length && (d = a.getZone(), d = a.options.color || d && d.color || this.color); g && (a = l(e.states[g], a.options.states && a.options.states[g] || {}), g = a.brightness, d = a.color || void 0 !== g && B(d).brighten(a.brightness).get() || d, h = a[c] || h, n = a[b] || n, f = a.dashStyle || f); c = { fill: d, stroke: h, "stroke-width": n };
                    f && (c.dashstyle = f); return c
                }, drawPoints: function () { var a = this, h = this.chart, m = a.options, c = h.renderer, f = m.animationLimit || 250, b; G(a.points, function (d) { var e = d.graphic; if (g(d.plotY) && null !== d.y) { b = d.shapeArgs; if (e) e[h.pointCount < f ? "animate" : "attr"](l(b)); else d.graphic = e = c[d.shapeType](b).add(d.group || a.group); m.borderRadius && e.attr({ r: m.borderRadius }); e.attr(a.pointAttribs(d, d.selected && "select")).shadow(m.shadow, null, m.stacking && !m.borderRadius); e.addClass(d.getClassName(), !0) } else e && (d.graphic = e.destroy()) }) },
                animate: function (a) { var e = this, g = this.yAxis, c = e.options, f = this.chart.inverted, b = {}, d = f ? "translateX" : "translateY", l; v && (a ? (b.scaleY = .001, a = Math.min(g.pos + g.len, Math.max(g.pos, g.toPixels(c.threshold))), f ? b.translateX = a - g.len : b.translateY = a, e.group.attr(b)) : (l = e.group.attr(d), e.group.animate({ scaleY: 1 }, p(D(e.options.animation), { step: function (a, c) { b[d] = l + c.pos * (g.pos - l); e.group.attr(b) } })), e.animate = null)) }, remove: function () {
                    var a = this, g = a.chart; g.hasRendered && G(g.series, function (e) {
                        e.type === a.type &&
                            (e.isDirty = !0)
                    }); n.prototype.remove.apply(a, arguments)
                }
            })
    })(N); (function (a) { a = a.seriesType; a("bar", "column", null, { inverted: !0 }) })(N); (function (a) {
        var D = a.Series; a = a.seriesType; a("scatter", "line", { lineWidth: 0, findNearestPointBy: "xy", marker: { enabled: !0 }, tooltip: { headerFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e', pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e" } },
            { sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1, drawGraph: function () { this.options.lineWidth && D.prototype.drawGraph.call(this) } })
    })(N); (function (a) {
        var D = a.deg2rad, B = a.isNumber, G = a.pick, p = a.relativeLength; a.CenteredSeriesMixin = {
            getCenter: function () {
                var a = this.options, l = this.chart, r = 2 * (a.slicedOffset || 0), n = l.plotWidth - 2 * r, l = l.plotHeight - 2 * r, w = a.center, w = [G(w[0], "50%"), G(w[1], "50%"), a.size || "100%", a.innerSize || 0], v = Math.min(n,
                    l), e, h; for (e = 0; 4 > e; ++e)h = w[e], a = 2 > e || 2 === e && /%$/.test(h), w[e] = p(h, [n, l, v, w[2]][e]) + (a ? r : 0); w[3] > w[2] && (w[3] = w[2]); return w
            }, getStartAndEndRadians: function (a, l) { a = B(a) ? a : 0; l = B(l) && l > a && 360 > l - a ? l : a + 360; return { start: D * (a + -90), end: D * (l + -90) } }
        }
    })(N); (function (a) {
        var D = a.addEvent, B = a.CenteredSeriesMixin, G = a.defined, p = a.each, g = a.extend, l = B.getStartAndEndRadians, r = a.inArray, n = a.noop, w = a.pick, v = a.Point, e = a.Series, h = a.seriesType, m = a.setAnimation; h("pie", "line", {
            center: [null, null], clip: !1, colorByPoint: !0, dataLabels: {
                distance: 30,
                enabled: !0, formatter: function () { return this.point.isNull ? void 0 : this.point.name }, x: 0
            }, ignoreHiddenPoint: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, states: { hover: { brightness: .1, shadow: !1 } }
        }, {
                isCartesian: !1, requireSorting: !1, directTouch: !0, noSharedTooltip: !0, trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttribs: a.seriesTypes.column.prototype.pointAttribs, animate: function (a) {
                    var c =
                        this, b = c.points, d = c.startAngleRad; a || (p(b, function (a) { var b = a.graphic, f = a.shapeArgs; b && (b.attr({ r: a.startR || c.center[3] / 2, start: d, end: d }), b.animate({ r: f.r, start: f.start, end: f.end }, c.options.animation)) }), c.animate = null)
                }, updateTotals: function () { var a, f = 0, b = this.points, d = b.length, e, g = this.options.ignoreHiddenPoint; for (a = 0; a < d; a++)e = b[a], f += g && !e.visible ? 0 : e.isNull ? 0 : e.y; this.total = f; for (a = 0; a < d; a++)e = b[a], e.percentage = 0 < f && (e.visible || !g) ? e.y / f * 100 : 0, e.total = f }, generatePoints: function () {
                    e.prototype.generatePoints.call(this);
                    this.updateTotals()
                }, translate: function (a) {
                    this.generatePoints(); var c = 0, b = this.options, d = b.slicedOffset, e = d + (b.borderWidth || 0), g, h, m, n = l(b.startAngle, b.endAngle), p = this.startAngleRad = n.start, n = (this.endAngleRad = n.end) - p, r = this.points, v, q = b.dataLabels.distance, b = b.ignoreHiddenPoint, A, E = r.length, F; a || (this.center = a = this.getCenter()); this.getX = function (b, c, d) { m = Math.asin(Math.min((b - a[1]) / (a[2] / 2 + d.labelDistance), 1)); return a[0] + (c ? -1 : 1) * Math.cos(m) * (a[2] / 2 + d.labelDistance) }; for (A = 0; A < E; A++) {
                        F = r[A];
                        F.labelDistance = w(F.options.dataLabels && F.options.dataLabels.distance, q); this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, F.labelDistance); g = p + c * n; if (!b || F.visible) c += F.percentage / 100; h = p + c * n; F.shapeType = "arc"; F.shapeArgs = { x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: Math.round(1E3 * g) / 1E3, end: Math.round(1E3 * h) / 1E3 }; m = (h + g) / 2; m > 1.5 * Math.PI ? m -= 2 * Math.PI : m < -Math.PI / 2 && (m += 2 * Math.PI); F.slicedTranslation = { translateX: Math.round(Math.cos(m) * d), translateY: Math.round(Math.sin(m) * d) }; h = Math.cos(m) * a[2] /
                            2; v = Math.sin(m) * a[2] / 2; F.tooltipPos = [a[0] + .7 * h, a[1] + .7 * v]; F.half = m < -Math.PI / 2 || m > Math.PI / 2 ? 1 : 0; F.angle = m; g = Math.min(e, F.labelDistance / 5); F.labelPos = [a[0] + h + Math.cos(m) * F.labelDistance, a[1] + v + Math.sin(m) * F.labelDistance, a[0] + h + Math.cos(m) * g, a[1] + v + Math.sin(m) * g, a[0] + h, a[1] + v, 0 > F.labelDistance ? "center" : F.half ? "right" : "left", m]
                    }
                }, drawGraph: null, drawPoints: function () {
                    var a = this, f = a.chart.renderer, b, d, e, h, l = a.options.shadow; l && !a.shadowGroup && (a.shadowGroup = f.g("shadow").add(a.group)); p(a.points, function (c) {
                        d =
                            c.graphic; if (c.isNull) d && (c.graphic = d.destroy()); else { h = c.shapeArgs; b = c.getTranslate(); var m = c.shadowGroup; l && !m && (m = c.shadowGroup = f.g("shadow").add(a.shadowGroup)); m && m.attr(b); e = a.pointAttribs(c, c.selected && "select"); d ? d.setRadialReference(a.center).attr(e).animate(g(h, b)) : (c.graphic = d = f[c.shapeType](h).setRadialReference(a.center).attr(b).add(a.group), c.visible || d.attr({ visibility: "hidden" }), d.attr(e).attr({ "stroke-linejoin": "round" }).shadow(l, m)); d.addClass(c.getClassName()) }
                    })
                }, searchPoint: n,
                sortByAngle: function (a, f) { a.sort(function (a, c) { return void 0 !== a.angle && (c.angle - a.angle) * f }) }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, getCenter: B.getCenter, getSymbol: n
            }, {
                init: function () { v.prototype.init.apply(this, arguments); var a = this, f; a.name = w(a.name, "Slice"); f = function (b) { a.slice("select" === b.type) }; D(a, "select", f); D(a, "unselect", f); return a }, isValid: function () { return a.isNumber(this.y, !0) && 0 <= this.y }, setVisible: function (a, f) {
                    var b = this, c = b.series, e = c.chart, g = c.options.ignoreHiddenPoint;
                    f = w(f, g); a !== b.visible && (b.visible = b.options.visible = a = void 0 === a ? !b.visible : a, c.options.data[r(b, c.data)] = b.options, p(["graphic", "dataLabel", "connector", "shadowGroup"], function (c) { if (b[c]) b[c][a ? "show" : "hide"](!0) }), b.legendItem && e.legend.colorizeItem(b, a), a || "hover" !== b.state || b.setState(""), g && (c.isDirty = !0), f && e.redraw())
                }, slice: function (a, f, b) {
                    var c = this.series; m(b, c.chart); w(f, !0); this.sliced = this.options.sliced = G(a) ? a : !this.sliced; c.options.data[r(this, c.data)] = this.options; this.graphic.animate(this.getTranslate());
                    this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
                }, getTranslate: function () { return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 } }, haloPath: function (a) { var c = this.shapeArgs; return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.x, c.y, c.r + a, c.r + a, { innerR: this.shapeArgs.r, start: c.start, end: c.end }) }
            })
    })(N); (function (a) {
        var D = a.addEvent, B = a.arrayMax, G = a.defined, p = a.each, g = a.extend, l = a.format, r = a.map, n = a.merge, w = a.noop, v = a.pick, e = a.relativeLength, h = a.Series,
            m = a.seriesTypes, c = a.stableSort; a.distribute = function (a, b) {
                function d(a, b) { return a.target - b.target } var f, e = !0, g = a, h = [], l; l = 0; for (f = a.length; f--;)l += a[f].size; if (l > b) { c(a, function (a, b) { return (b.rank || 0) - (a.rank || 0) }); for (l = f = 0; l <= b;)l += a[f].size, f++; h = a.splice(f - 1, a.length) } c(a, d); for (a = r(a, function (a) { return { size: a.size, targets: [a.target], align: v(a.align, .5) } }); e;) {
                    for (f = a.length; f--;)e = a[f], l = (Math.min.apply(0, e.targets) + Math.max.apply(0, e.targets)) / 2, e.pos = Math.min(Math.max(0, l - e.size * e.align),
                        b - e.size); f = a.length; for (e = !1; f--;)0 < f && a[f - 1].pos + a[f - 1].size > a[f].pos && (a[f - 1].size += a[f].size, a[f - 1].targets = a[f - 1].targets.concat(a[f].targets), a[f - 1].align = .5, a[f - 1].pos + a[f - 1].size > b && (a[f - 1].pos = b - a[f - 1].size), a.splice(f, 1), e = !0)
                } f = 0; p(a, function (a) { var b = 0; p(a.targets, function () { g[f].pos = a.pos + b; b += g[f].size; f++ }) }); g.push.apply(g, h); c(g, d)
            }; h.prototype.drawDataLabels = function () {
                function c(a, b) {
                    var c = b.filter; return c ? (b = c.operator, a = a[c.property], c = c.value, "\x3e" === b && a > c || "\x3c" === b && a <
                        c || "\x3e\x3d" === b && a >= c || "\x3c\x3d" === b && a <= c || "\x3d\x3d" === b && a == c || "\x3d\x3d\x3d" === b && a === c ? !0 : !1) : !0
                } var b = this, d = b.options, e = d.dataLabels, g = b.points, h, m, r = b.hasRendered || 0, x, w, B = v(e.defer, !!d.animation), q = b.chart.renderer; if (e.enabled || b._hasPointLabels) b.dlProcessOptions && b.dlProcessOptions(e), w = b.plotGroup("dataLabelsGroup", "data-labels", B && !r ? "hidden" : "visible", e.zIndex || 6), B && (w.attr({ opacity: +r }), r || D(b, "afterAnimate", function () {
                    b.visible && w.show(!0); w[d.animation ? "animate" : "attr"]({ opacity: 1 },
                        { duration: 200 })
                })), m = e, p(g, function (f) {
                    var g, t = f.dataLabel, k, p, r = f.connector, y = !t, C; h = f.dlOptions || f.options && f.options.dataLabels; (g = v(h && h.enabled, m.enabled) && !f.isNull) && (g = !0 === c(f, h || e)); g && (e = n(m, h), k = f.getLabelConfig(), C = e[f.formatPrefix + "Format"] || e.format, x = G(C) ? l(C, k) : (e[f.formatPrefix + "Formatter"] || e.formatter).call(k, e), C = e.style, k = e.rotation, C.color = v(e.color, C.color, b.color, "#000000"), "contrast" === C.color && (f.contrastColor = q.getContrast(f.color || b.color), C.color = e.inside || 0 > v(f.labelDistance,
                        e.distance) || d.stacking ? f.contrastColor : "#000000"), d.cursor && (C.cursor = d.cursor), p = { fill: e.backgroundColor, stroke: e.borderColor, "stroke-width": e.borderWidth, r: e.borderRadius || 0, rotation: k, padding: e.padding, zIndex: 1 }, a.objectEach(p, function (a, b) { void 0 === a && delete p[b] })); !t || g && G(x) ? g && G(x) && (t ? p.text = x : (t = f.dataLabel = q[k ? "text" : "label"](x, 0, -9999, e.shape, null, null, e.useHTML, null, "data-label"), t.addClass("highcharts-data-label-color-" + f.colorIndex + " " + (e.className || "") + (e.useHTML ? "highcharts-tracker" :
                            ""))), t.attr(p), t.css(C).shadow(e.shadow), t.added || t.add(w), b.alignDataLabel(f, t, e, null, y)) : (f.dataLabel = t = t.destroy(), r && (f.connector = r.destroy()))
                })
            }; h.prototype.alignDataLabel = function (a, b, c, e, h) {
                var d = this.chart, f = d.inverted, l = v(a.dlBox && a.dlBox.centerX, a.plotX, -9999), m = v(a.plotY, -9999), n = b.getBBox(), p, q = c.rotation, r = c.align, w = this.visible && (a.series.forceDL || d.isInsidePlot(l, Math.round(m), f) || e && d.isInsidePlot(l, f ? e.x + 1 : e.y + e.height - 1, f)), y = "justify" === v(c.overflow, "justify"); if (w && (p = c.style.fontSize,
                    p = d.renderer.fontMetrics(p, b).b, e = g({ x: f ? this.yAxis.len - m : l, y: Math.round(f ? this.xAxis.len - l : m), width: 0, height: 0 }, e), g(c, { width: n.width, height: n.height }), q ? (y = !1, l = d.renderer.rotCorr(p, q), l = { x: e.x + c.x + e.width / 2 + l.x, y: e.y + c.y + { top: 0, middle: .5, bottom: 1 }[c.verticalAlign] * e.height }, b[h ? "attr" : "animate"](l).attr({ align: r }), m = (q + 720) % 360, m = 180 < m && 360 > m, "left" === r ? l.y -= m ? n.height : 0 : "center" === r ? (l.x -= n.width / 2, l.y -= n.height / 2) : "right" === r && (l.x -= n.width, l.y -= m ? 0 : n.height)) : (b.align(c, null, e), l = b.alignAttr),
                    y ? a.isLabelJustified = this.justifyDataLabel(b, c, l, n, e, h) : v(c.crop, !0) && (w = d.isInsidePlot(l.x, l.y) && d.isInsidePlot(l.x + n.width, l.y + n.height)), c.shape && !q)) b[h ? "attr" : "animate"]({ anchorX: f ? d.plotWidth - a.plotY : a.plotX, anchorY: f ? d.plotHeight - a.plotX : a.plotY }); w || (b.attr({ y: -9999 }), b.placed = !1)
            }; h.prototype.justifyDataLabel = function (a, b, c, e, g, h) {
                var d = this.chart, f = b.align, l = b.verticalAlign, m, n, q = a.box ? 0 : a.padding || 0; m = c.x + q; 0 > m && ("right" === f ? b.align = "left" : b.x = -m, n = !0); m = c.x + e.width - q; m > d.plotWidth && ("left" ===
                    f ? b.align = "right" : b.x = d.plotWidth - m, n = !0); m = c.y + q; 0 > m && ("bottom" === l ? b.verticalAlign = "top" : b.y = -m, n = !0); m = c.y + e.height - q; m > d.plotHeight && ("top" === l ? b.verticalAlign = "bottom" : b.y = d.plotHeight - m, n = !0); n && (a.placed = !h, a.align(b, null, g)); return n
            }; m.pie && (m.pie.prototype.drawDataLabels = function () {
                var c = this, b = c.data, d, e = c.chart, g = c.options.dataLabels, l = v(g.connectorPadding, 10), m = v(g.connectorWidth, 1), n = e.plotWidth, r = e.plotHeight, w, D = c.center, q = D[2] / 2, A = D[1], E, F, k, u, N = [[], []], M, P, I, Q, z = [0, 0, 0, 0]; c.visible &&
                    (g.enabled || c._hasPointLabels) && (p(b, function (a) { a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1) }), h.prototype.drawDataLabels.apply(c), p(b, function (a) { a.dataLabel && a.visible && (N[a.half].push(a), a.dataLabel._pos = null) }), p(N, function (b, f) {
                        var h, m, t = b.length, x = [], w; if (t) for (c.sortByAngle(b, f - .5), 0 < c.maxLabelDistance && (h = Math.max(0, A - q - c.maxLabelDistance), m = Math.min(A + q + c.maxLabelDistance, e.plotHeight),
                            p(b, function (a) { 0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, A - q - a.labelDistance), a.bottom = Math.min(A + q + a.labelDistance, e.plotHeight), w = a.dataLabel.getBBox().height || 21, a.positionsIndex = x.push({ target: a.labelPos[1] - a.top + w / 2, size: w, rank: a.y }) - 1) }), a.distribute(x, m + w - h)), Q = 0; Q < t; Q++)d = b[Q], m = d.positionsIndex, k = d.labelPos, E = d.dataLabel, I = !1 === d.visible ? "hidden" : "inherit", P = h = k[1], x && G(x[m]) && (void 0 === x[m].pos ? I = "hidden" : (u = x[m].size, P = d.top + x[m].pos)), delete d.positionIndex, M = g.justify ? D[0] + (f ?
                                -1 : 1) * (q + d.labelDistance) : c.getX(P < d.top + 2 || P > d.bottom - 2 ? h : P, f, d), E._attr = { visibility: I, align: k[6] }, E._pos = { x: M + g.x + ({ left: l, right: -l }[k[6]] || 0), y: P + g.y - 10 }, k.x = M, k.y = P, v(g.crop, !0) && (F = E.getBBox().width, h = null, M - F < l ? (h = Math.round(F - M + l), z[3] = Math.max(h, z[3])) : M + F > n - l && (h = Math.round(M + F - n + l), z[1] = Math.max(h, z[1])), 0 > P - u / 2 ? z[0] = Math.max(Math.round(-P + u / 2), z[0]) : P + u / 2 > r && (z[2] = Math.max(Math.round(P + u / 2 - r), z[2])), E.sideOverflow = h)
                    }), 0 === B(z) || this.verifyDataLabelOverflow(z)) && (this.placeDataLabels(),
                        m && p(this.points, function (a) { var b; w = a.connector; if ((E = a.dataLabel) && E._pos && a.visible && 0 < a.labelDistance) { I = E._attr.visibility; if (b = !w) a.connector = w = e.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + a.colorIndex).add(c.dataLabelsGroup), w.attr({ "stroke-width": m, stroke: g.connectorColor || a.color || "#666666" }); w[b ? "attr" : "animate"]({ d: c.connectorPath(a.labelPos) }); w.attr("visibility", I) } else w && (a.connector = w.destroy()) }))
            }, m.pie.prototype.connectorPath = function (a) {
                var b =
                    a.x, c = a.y; return v(this.options.dataLabels.softConnector, !0) ? ["M", b + ("left" === a[6] ? 5 : -5), c, "C", b, c, 2 * a[2] - a[4], 2 * a[3] - a[5], a[2], a[3], "L", a[4], a[5]] : ["M", b + ("left" === a[6] ? 5 : -5), c, "L", a[2], a[3], "L", a[4], a[5]]
            }, m.pie.prototype.placeDataLabels = function () {
                p(this.points, function (a) {
                    var b = a.dataLabel; b && a.visible && ((a = b._pos) ? (b.sideOverflow && (b._attr.width = b.getBBox().width - b.sideOverflow, b.css({ width: b._attr.width + "px", textOverflow: "ellipsis" }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](a),
                        b.moved = !0) : b && b.attr({ y: -9999 }))
                }, this)
            }, m.pie.prototype.alignDataLabel = w, m.pie.prototype.verifyDataLabelOverflow = function (a) {
                var b = this.center, c = this.options, f = c.center, g = c.minSize || 80, h, l = null !== c.size; l || (null !== f[0] ? h = Math.max(b[2] - Math.max(a[1], a[3]), g) : (h = Math.max(b[2] - a[1] - a[3], g), b[0] += (a[3] - a[1]) / 2), null !== f[1] ? h = Math.max(Math.min(h, b[2] - Math.max(a[0], a[2])), g) : (h = Math.max(Math.min(h, b[2] - a[0] - a[2]), g), b[1] += (a[0] - a[2]) / 2), h < b[2] ? (b[2] = h, b[3] = Math.min(e(c.innerSize || 0, h), h), this.translate(b),
                    this.drawDataLabels && this.drawDataLabels()) : l = !0); return l
            }); m.column && (m.column.prototype.alignDataLabel = function (a, b, c, e, g) {
                var d = this.chart.inverted, f = a.series, l = a.dlBox || a.shapeArgs, m = v(a.below, a.plotY > v(this.translatedThreshold, f.yAxis.len)), p = v(c.inside, !!this.options.stacking); l && (e = n(l), 0 > e.y && (e.height += e.y, e.y = 0), l = e.y + e.height - f.yAxis.len, 0 < l && (e.height -= l), d && (e = { x: f.yAxis.len - e.y - e.height, y: f.xAxis.len - e.x - e.width, width: e.height, height: e.width }), p || (d ? (e.x += m ? 0 : e.width, e.width = 0) : (e.y +=
                    m ? e.height : 0, e.height = 0))); c.align = v(c.align, !d || p ? "center" : m ? "right" : "left"); c.verticalAlign = v(c.verticalAlign, d || p ? "middle" : m ? "top" : "bottom"); h.prototype.alignDataLabel.call(this, a, b, c, e, g); a.isLabelJustified && a.contrastColor && a.dataLabel.css({ color: a.contrastColor })
            })
    })(N); (function (a) {
        var D = a.Chart, B = a.each, G = a.objectEach, p = a.pick; a = a.addEvent; a(D.prototype, "render", function () {
            var a = []; B(this.labelCollectors || [], function (g) { a = a.concat(g()) }); B(this.yAxis || [], function (g) {
                g.options.stackLabels &&
                    !g.options.stackLabels.allowOverlap && G(g.stacks, function (g) { G(g, function (g) { a.push(g.label) }) })
            }); B(this.series || [], function (g) { var l = g.options.dataLabels, n = g.dataLabelCollections || ["dataLabel"]; (l.enabled || g._hasPointLabels) && !l.allowOverlap && g.visible && B(n, function (l) { B(g.points, function (g) { g[l] && (g[l].labelrank = p(g.labelrank, g.shapeArgs && g.shapeArgs.height), a.push(g[l])) }) }) }); this.hideOverlappingLabels(a)
        }); D.prototype.hideOverlappingLabels = function (a) {
            var g = a.length, p, n, w, v, e, h, m, c, f, b = function (a,
                b, c, f, e, g, h, l) { return !(e > a + c || e + h < a || g > b + f || g + l < b) }; for (n = 0; n < g; n++)if (p = a[n]) p.oldOpacity = p.opacity, p.newOpacity = 1, p.width || (w = p.getBBox(), p.width = w.width, p.height = w.height); a.sort(function (a, b) { return (b.labelrank || 0) - (a.labelrank || 0) }); for (n = 0; n < g; n++)for (w = a[n], p = n + 1; p < g; ++p)if (v = a[p], w && v && w !== v && w.placed && v.placed && 0 !== w.newOpacity && 0 !== v.newOpacity && (e = w.alignAttr, h = v.alignAttr, m = w.parentGroup, c = v.parentGroup, f = 2 * (w.box ? 0 : w.padding || 0), e = b(e.x + m.translateX, e.y + m.translateY, w.width - f, w.height -
                    f, h.x + c.translateX, h.y + c.translateY, v.width - f, v.height - f))) (w.labelrank < v.labelrank ? w : v).newOpacity = 0; B(a, function (a) { var b, c; a && (c = a.newOpacity, a.oldOpacity !== c && a.placed && (c ? a.show(!0) : b = function () { a.hide() }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b)), a.isOld = !0) })
        }
    })(N); (function (a) {
        var D = a.addEvent, B = a.Chart, G = a.createElement, p = a.css, g = a.defaultOptions, l = a.defaultPlotOptions, r = a.each, n = a.extend, w = a.fireEvent, v = a.hasTouch, e = a.inArray, h = a.isObject, m = a.Legend, c = a.merge,
            f = a.pick, b = a.Point, d = a.Series, y = a.seriesTypes, H = a.svg, J; J = a.TrackerMixin = {
                drawTrackerPoint: function () {
                    var a = this, b = a.chart.pointer, c = function (a) { var c = b.getPointFromEvent(a); void 0 !== c && (b.isDirectTouch = !0, c.onMouseOver(a)) }; r(a.points, function (a) { a.graphic && (a.graphic.element.point = a); a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a : a.dataLabel.element.point = a) }); a._hasTracking || (r(a.trackerGroups, function (d) {
                        if (a[d]) {
                            a[d].addClass("highcharts-tracker").on("mouseover", c).on("mouseout", function (a) { b.onTrackerMouseOut(a) });
                            if (v) a[d].on("touchstart", c); a.options.cursor && a[d].css(p).css({ cursor: a.options.cursor })
                        }
                    }), a._hasTracking = !0)
                }, drawTrackerGraph: function () {
                    var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), f = d.length, e = a.chart, g = e.pointer, h = e.renderer, l = e.options.tooltip.snap, k = a.tracker, m, n = function () { if (e.hoverSeries !== a) a.onMouseOver() }, p = "rgba(192,192,192," + (H ? .0001 : .002) + ")"; if (f && !c) for (m = f + 1; m--;)"M" === d[m] && d.splice(m + 1, 0, d[m + 1] - l, d[m + 2], "L"), (m && "M" === d[m] || m === f) && d.splice(m,
                        0, "L", d[m - 2] + l, d[m - 1]); k ? k.attr({ d: d }) : a.graph && (a.tracker = h.path(d).attr({ "stroke-linejoin": "round", visibility: a.visible ? "visible" : "hidden", stroke: p, fill: c ? p : "none", "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * l), zIndex: 2 }).add(a.group), r([a.tracker, a.markerGroup], function (a) { a.addClass("highcharts-tracker").on("mouseover", n).on("mouseout", function (a) { g.onTrackerMouseOut(a) }); b.cursor && a.css({ cursor: b.cursor }); if (v) a.on("touchstart", n) }))
                }
            }; y.column && (y.column.prototype.drawTracker = J.drawTrackerPoint);
        y.pie && (y.pie.prototype.drawTracker = J.drawTrackerPoint); y.scatter && (y.scatter.prototype.drawTracker = J.drawTrackerPoint); n(m.prototype, {
            setItemEvents: function (a, b, d) {
                var f = this, e = f.chart.renderer.boxWrapper, g = "highcharts-legend-" + (a.series ? "point" : "series") + "-active"; (d ? b : a.legendGroup).on("mouseover", function () { a.setState("hover"); e.addClass(g); b.css(f.options.itemHoverStyle) }).on("mouseout", function () { b.css(c(a.visible ? f.itemStyle : f.itemHiddenStyle)); e.removeClass(g); a.setState() }).on("click", function (b) {
                    var c =
                        function () { a.setVisible && a.setVisible() }; b = { browserEvent: b }; a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : w(a, "legendItemClick", b, c)
                })
            }, createCheckboxForItem: function (a) { a.checkbox = G("input", { type: "checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container); D(a.checkbox, "click", function (b) { w(a.series || a, "checkboxClick", { checked: b.target.checked, item: a }, function () { a.select() }) }) }
        }); g.legend.itemStyle.cursor = "pointer"; n(B.prototype, {
            showResetZoom: function () {
                var a =
                    this, b = g.lang, c = a.options.chart.resetZoomButton, d = c.theme, f = d.states, e = "chart" === c.relativeTo ? null : "plotBox"; this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () { a.zoomOut() }, d, f && f.hover).attr({ align: c.position.align, title: b.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(c.position, !1, e)
            }, zoomOut: function () { var a = this; w(a, "selection", { resetSelection: !0 }, function () { a.zoom() }) }, zoom: function (a) {
                var b, c = this.pointer, d = !1, e; !a || a.resetSelection ? (r(this.axes, function (a) {
                    b =
                        a.zoom()
                }), c.initiated = !1) : r(a.xAxis.concat(a.yAxis), function (a) { var f = a.axis; c[f.isXAxis ? "zoomX" : "zoomY"] && (b = f.zoom(a.min, a.max), f.displayBtn && (d = !0)) }); e = this.resetZoomButton; d && !e ? this.showResetZoom() : !d && h(e) && (this.resetZoomButton = e.destroy()); b && this.redraw(f(this.options.chart.animation, a && a.animation, 100 > this.pointCount))
            }, pan: function (a, b) {
                var c = this, d = c.hoverPoints, f; d && r(d, function (a) { a.setState() }); r("xy" === b ? [1, 0] : [1], function (b) {
                    b = c[b ? "xAxis" : "yAxis"][0]; var d = b.horiz, e = a[d ? "chartX" :
                        "chartY"], d = d ? "mouseDownX" : "mouseDownY", g = c[d], k = (b.pointRange || 0) / 2, h = b.getExtremes(), l = b.toValue(g - e, !0) + k, k = b.toValue(g + b.len - e, !0) - k, m = k < l, g = m ? k : l, l = m ? l : k, k = Math.min(h.dataMin, b.toValue(b.toPixels(h.min) - b.minPixelPadding)), m = Math.max(h.dataMax, b.toValue(b.toPixels(h.max) + b.minPixelPadding)), n; n = k - g; 0 < n && (l += n, g = k); n = l - m; 0 < n && (l = m, g -= n); b.series.length && g !== h.min && l !== h.max && (b.setExtremes(g, l, !1, !1, { trigger: "pan" }), f = !0); c[d] = e
                }); f && c.redraw(!1); p(c.container, { cursor: "move" })
            }
        }); n(b.prototype,
            {
                select: function (a, b) { var c = this, d = c.series, g = d.chart; a = f(a, !c.selected); c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () { c.selected = c.options.selected = a; d.options.data[e(c, d.data)] = c.options; c.setState(a && "select"); b || r(g.getSelectedPoints(), function (a) { a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[e(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect")) }) }) }, onMouseOver: function (a) {
                    var b = this.series.chart, c = b.pointer; a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this,
                        b.inverted); c.runPointActions(a, this)
                }, onMouseOut: function () { var a = this.series.chart; this.firePointEvent("mouseOut"); r(a.hoverPoints || [], function (a) { a.setState() }); a.hoverPoints = a.hoverPoint = null }, importEvents: function () { if (!this.hasImportedEvents) { var b = this, d = c(b.series.options.point, b.options).events; b.events = d; a.objectEach(d, function (a, c) { D(b, c, a) }); this.hasImportedEvents = !0 } }, setState: function (a, b) {
                    var c = Math.floor(this.plotX), d = this.plotY, e = this.series, g = e.options.states[a] || {}, h = l[e.type].marker &&
                        e.options.marker, m = h && !1 === h.enabled, p = h && h.states && h.states[a] || {}, k = !1 === p.enabled, t = e.stateMarkerGraphic, r = this.marker || {}, v = e.chart, w = e.halo, y, B = h && e.markerAttribs; a = a || ""; if (!(a === this.state && !b || this.selected && "select" !== a || !1 === g.enabled || a && (k || m && !1 === p.enabled) || a && r.states && r.states[a] && !1 === r.states[a].enabled)) {
                            B && (y = e.markerAttribs(this, a)); if (this.graphic) this.state && this.graphic.removeClass("highcharts-point-" + this.state), a && this.graphic.addClass("highcharts-point-" + a), this.graphic.animate(e.pointAttribs(this,
                                a), f(v.options.chart.animation, g.animation)), y && this.graphic.animate(y, f(v.options.chart.animation, p.animation, h.animation)), t && t.hide(); else { if (a && p) { h = r.symbol || e.symbol; t && t.currentSymbol !== h && (t = t.destroy()); if (t) t[b ? "animate" : "attr"]({ x: y.x, y: y.y }); else h && (e.stateMarkerGraphic = t = v.renderer.symbol(h, y.x, y.y, y.width, y.height).add(e.markerGroup), t.currentSymbol = h); t && t.attr(e.pointAttribs(this, a)) } t && (t[a && v.isInsidePlot(c, d, v.inverted) ? "show" : "hide"](), t.element.point = this) } (c = g.halo) && c.size ?
                                    (w || (e.halo = w = v.renderer.path().add((this.graphic || t).parentGroup)), w[b ? "animate" : "attr"]({ d: this.haloPath(c.size) }), w.attr({ "class": "highcharts-halo highcharts-color-" + f(this.colorIndex, e.colorIndex) }), w.point = this, w.attr(n({ fill: this.color || e.color, "fill-opacity": c.opacity, zIndex: -1 }, c.attributes))) : w && w.point && w.point.haloPath && w.animate({ d: w.point.haloPath(0) }); this.state = a
                        }
                }, haloPath: function (a) { return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a) }
            });
        n(d.prototype, {
            onMouseOver: function () { var a = this.chart, b = a.hoverSeries; if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver && w(this, "mouseOver"); this.setState("hover"); a.hoverSeries = this }, onMouseOut: function () { var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint; b.hoverSeries = null; if (d) d.onMouseOut(); this && a.events.mouseOut && w(this, "mouseOut"); !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide(); this.setState() }, setState: function (a) {
                var b = this, c = b.options, d = b.graph, e = c.states,
                    g = c.lineWidth, c = 0; a = a || ""; if (b.state !== a && (r([b.group, b.markerGroup, b.dataLabelsGroup], function (c) { c && (b.state && c.removeClass("highcharts-series-" + b.state), a && c.addClass("highcharts-series-" + a)) }), b.state = a, !e[a] || !1 !== e[a].enabled) && (a && (g = e[a].lineWidth || g + (e[a].lineWidthPlus || 0)), d && !d.dashstyle)) for (g = { "stroke-width": g }, d.animate(g, f(b.chart.options.chart.animation, e[a] && e[a].animation)); b["zone-graph-" + c];)b["zone-graph-" + c].attr(g), c += 1
            }, setVisible: function (a, b) {
                var c = this, d = c.chart, e = c.legendItem,
                    f, g = d.options.chart.ignoreHiddenSeries, h = c.visible; f = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !h : a) ? "show" : "hide"; r(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function (a) { if (c[a]) c[a][f]() }); if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut(); e && d.legend.colorizeItem(c, a); c.isDirty = !0; c.options.stacking && r(d.series, function (a) { a.options.stacking && a.visible && (a.isDirty = !0) }); r(c.linkedSeries, function (b) { b.setVisible(a, !1) }); g && (d.isDirtyBox =
                        !0); !1 !== b && d.redraw(); w(c, f)
            }, show: function () { this.setVisible(!0) }, hide: function () { this.setVisible(!1) }, select: function (a) { this.selected = a = void 0 === a ? !this.selected : a; this.checkbox && (this.checkbox.checked = a); w(this, a ? "select" : "unselect") }, drawTracker: J.drawTrackerGraph
        })
    })(N); (function (a) {
        var D = a.Chart, B = a.each, G = a.inArray, p = a.isArray, g = a.isObject, l = a.pick, r = a.splat; D.prototype.setResponsive = function (g) {
            var l = this.options.responsive, n = [], e = this.currentResponsive; l && l.rules && B(l.rules, function (e) {
                void 0 ===
                    e._id && (e._id = a.uniqueKey()); this.matchResponsiveRule(e, n, g)
            }, this); var h = a.merge.apply(0, a.map(n, function (e) { return a.find(l.rules, function (a) { return a._id === e }).chartOptions })), n = n.toString() || void 0; n !== (e && e.ruleIds) && (e && this.update(e.undoOptions, g), n ? (this.currentResponsive = { ruleIds: n, mergedOptions: h, undoOptions: this.currentOptions(h) }, this.update(h, g)) : this.currentResponsive = void 0)
        }; D.prototype.matchResponsiveRule = function (a, g) {
            var n = a.condition; (n.callback || function () {
                return this.chartWidth <=
                    l(n.maxWidth, Number.MAX_VALUE) && this.chartHeight <= l(n.maxHeight, Number.MAX_VALUE) && this.chartWidth >= l(n.minWidth, 0) && this.chartHeight >= l(n.minHeight, 0)
            }).call(this) && g.push(a._id)
        }; D.prototype.currentOptions = function (l) {
            function n(e, h, l, c) { var f; a.objectEach(e, function (a, d) { if (!c && -1 < G(d, ["series", "xAxis", "yAxis"])) for (a = r(a), l[d] = [], f = 0; f < a.length; f++)h[d][f] && (l[d][f] = {}, n(a[f], h[d][f], l[d][f], c + 1)); else g(a) ? (l[d] = p(a) ? [] : {}, n(a, h[d] || {}, l[d], c + 1)) : l[d] = h[d] || null }) } var v = {}; n(l, this.options, v,
                0); return v
        }
    })(N); return N
});
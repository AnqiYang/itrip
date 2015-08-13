(function () {
    var d;
    window.AmCharts ? d = window.AmCharts : (d = {}, window.AmCharts = d, d.themes = {}, d.maps = {}, d.inheriting = {}, d.charts = [], d.onReadyArray = [], d.useUTC = !1, d.updateRate = 30, d.uid = 0, d.lang = {}, d.translations = {}, d.mapTranslations = {}, d.windows = {}, d.initHandlers = []);
    d.Class = function (a) {
        var b = function () {
            arguments[0] !== d.inheriting && (this.events = {}, this.construct.apply(this, arguments))
        };
        a.inherits ? (b.prototype = new a.inherits(d.inheriting), b.base = a.inherits.prototype, delete a.inherits) : (b.prototype.createEvents =
            function () {
                for (var a = 0, b = arguments.length; a < b; a++) this.events[arguments[a]] = []
            }, b.prototype.listenTo = function (a, b, c) {
            this.removeListener(a, b, c);
            a.events[b].push({
                handler: c,
                scope: this
            })
        }, b.prototype.addListener = function (a, b, c) {
            this.removeListener(this, a, b);
            this.events[a].push({
                handler: b,
                scope: c
            })
        }, b.prototype.removeListener = function (a, b, c) {
            if (a && a.events)
                for (a = a.events[b], b = a.length - 1; 0 <= b; b--) a[b].handler === c && a.splice(b, 1)
        }, b.prototype.fire = function (a, b) {
            for (var c = this.events[a], d = 0, k = c.length; d <
            k; d++) {
                var l = c[d];
                l.handler.call(l.scope, b)
            }
        });
        for (var c in a) b.prototype[c] = a[c];
        return b
    };
    d.addChart = function (a) {
        d.updateInt || (d.updateInt = setInterval(function () {
            d.update()
        }, Math.round(1E3 / d.updateRate)));
        d.charts.push(a)
    };
    d.removeChart = function (a) {
        for (var b = d.charts, c = b.length - 1; 0 <= c; c--) b[c] == a && b.splice(c, 1);
        0 === b.length && d.updateInt && (clearInterval(d.updateInt), d.updateInt = NaN)
    };
    d.isModern = !0;
    d.getIEVersion = function () {
        var a = 0,
            b, c;
        "Microsoft Internet Explorer" == navigator.appName && (b = navigator.userAgent,
            c = /MSIE ([0-9]{1,}[.0-9]{0,})/, null !== c.exec(b) && (a = parseFloat(RegExp.$1)));
        return a
    };
    d.applyLang = function (a, b) {
        var c = d.translations;
        b.dayNames = d.extend({}, d.dayNames);
        b.shortDayNames = d.extend({}, d.shortDayNames);
        b.monthNames = d.extend({}, d.monthNames);
        b.shortMonthNames = d.extend({}, d.shortMonthNames);
        c && (c = c[a]) && (d.lang = c, c.monthNames && (b.dayNames = d.extend({}, c.dayNames), b.shortDayNames = d.extend({}, c.shortDayNames), b.monthNames = d.extend({}, c.monthNames), b.shortMonthNames = d.extend({}, c.shortMonthNames)))
    };
    d.IEversion = d.getIEVersion();
    9 > d.IEversion && 0 < d.IEversion && (d.isModern = !1, d.isIE = !0);
    d.dx = 0;
    d.dy = 0;
    if (document.addEventListener || window.opera) d.isNN = !0, d.isIE = !1, d.dx = .5, d.dy = .5;
    document.attachEvent && (d.isNN = !1, d.isIE = !0, d.isModern || (d.dx = 0, d.dy = 0));
    window.chrome && (d.chrome = !0);
    d.handleMouseUp = function (a) {
        for (var b = d.charts, c = 0; c < b.length; c++) {
            var g = b[c];
            g && g.handleReleaseOutside && g.handleReleaseOutside(a)
        }
    };
    d.handleMouseMove = function (a) {
        for (var b = d.charts, c = 0; c < b.length; c++) {
            var g = b[c];
            g && g.handleMouseMove &&
            g.handleMouseMove(a)
        }
    };
    d.handleWheel = function (a) {
        for (var b = d.charts, c = 0; c < b.length; c++) {
            var g = b[c];
            if (g && g.mouseIsOver) {
                g.mouseWheelScrollEnabled || g.mouseWheelZoomEnabled ? g.handleWheel && g.handleWheel(a) : a.stopPropagation && a.stopPropagation();
                break
            }
        }
    };
    d.resetMouseOver = function () {
        for (var a = d.charts, b = 0; b < a.length; b++) {
            var c = a[b];
            c && (c.mouseIsOver = !1)
        }
    };
    d.ready = function (a) {
        d.onReadyArray.push(a)
    };
    d.handleLoad = function () {
        d.isReady = !0;
        for (var a = d.onReadyArray, b = 0; b < a.length; b++) {
            var c = a[b];
            isNaN(d.processDelay) ?
                c() : setTimeout(c, d.processDelay * b)
        }
    };
    d.addInitHandler = function (a, b) {
        d.initHandlers.push({
            method: a,
            types: b
        })
    };
    d.callInitHandler = function (a) {
        var b = d.initHandlers;
        if (d.initHandlers)
            for (var c = 0; c < b.length; c++) {
                var g = b[c];
                g.types ? d.isInArray(g.types, a.type) && g.method(a) : g.method(a)
            }
    };
    d.getUniqueId = function () {
        d.uid++;
        return "AmChartsEl-" + d.uid
    };
    d.isNN && (document.addEventListener("mousemove", d.handleMouseMove, !0), document.addEventListener("mouseup", d.handleMouseUp, !0), window.addEventListener("load", d.handleLoad, !0), window.addEventListener("DOMMouseScroll", d.handleWheel, !0), document.addEventListener("mousewheel", d.handleWheel, !0));
    d.isIE && (document.attachEvent("onmousemove", d.handleMouseMove), document.attachEvent("onmouseup", d.handleMouseUp), window.attachEvent("onload", d.handleLoad));
    d.clear = function () {
        var a = d.charts;
        if (a)
            for (var b = a.length - 1; 0 <= b; b--) a[b].clear();
        d.updateInt && clearInterval(d.updateInt);
        d.charts = [];
        d.isNN && (document.removeEventListener("mousemove", d.handleMouseMove, !0), document.removeEventListener("mouseup",
            d.handleMouseUp, !0), window.removeEventListener("load", d.handleLoad, !0), window.removeEventListener("DOMMouseScroll", d.handleWheel, !0), document.removeEventListener("mousewheel", d.handleWheel, !0));
        d.isIE && (document.detachEvent("onmousemove", d.handleMouseMove), document.detachEvent("onmouseup", d.handleMouseUp), window.detachEvent("onload", d.handleLoad))
    };
    d.makeChart = function (a, b, c) {
        var g = b.type,
            f = b.theme;
        d.isString(f) && (f = d.themes[f], b.theme = f);
        var e;
        switch (g) {
            case "serial":
                e = new d.AmSerialChart(f);
                break;
            case "xy":
                e = new d.AmXYChart(f);
                break;
            case "pie":
                e = new d.AmPieChart(f);
                break;
            case "radar":
                e = new d.AmRadarChart(f);
                break;
            case "gauge":
                e = new d.AmAngularGauge(f);
                break;
            case "funnel":
                e = new d.AmFunnelChart(f);
                break;
            case "map":
                e = new d.AmMap(f);
                break;
            case "stock":
                e = new d.AmStockChart(f);
                break;
            case "gantt":
                e = new d.AmGanttChart(f)
        }
        d.extend(e, b);
        d.isReady ? isNaN(c) ? e.write(a) : setTimeout(function () {
            d.realWrite(e, a)
        }, c) : d.ready(function () {
            isNaN(c) ? e.write(a) : setTimeout(function () {
                d.realWrite(e, a)
            }, c)
        });
        return e
    };
    d.realWrite = function (a, b) {
        a.write(b)
    };
    d.updateCount = 0;
    d.validateAt = Math.round(d.updateRate / 5);
    d.update = function () {
        var a = d.charts;
        d.updateCount++;
        var b = !1;
        d.updateCount == d.validateAt && (b = !0, d.updateCount = 0);
        if (a)
            for (var c = 0; c < a.length; c++) a[c].update && a[c].update(), b && a[c].autoResize && a[c].validateSize && a[c].validateSize()
    };
    d.bezierX = 3;
    d.bezierY = 6
})();
(function () {
    var d = window.AmCharts;
    d.toBoolean = function (a, b) {
        if (void 0 === a) return b;
        switch (String(a).toLowerCase()) {
            case "true":
            case "yes":
            case "1":
                return !0;
            case "false":
            case "no":
            case "0":
            case null:
                return !1;
            default:
                return Boolean(a)
        }
    };
    d.removeFromArray = function (a, b) {
        var c;
        if (void 0 !== b && void 0 !== a)
            for (c = a.length - 1; 0 <= c; c--) a[c] == b && a.splice(c, 1)
    };
    d.normalizeUrl = function (a) {
        return "" !== a && -1 === a.search(/\/$/) ? a + "/" : a
    };
    d.isAbsolute = function (a) {
        return 0 === a.search(/^http[s]?:|^\//)
    };
    d.isInArray = function (a,
                            b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    d.getDecimals = function (a) {
        var b = 0;
        isNaN(a) || (a = String(a), -1 != a.indexOf("e-") ? b = Number(a.split("-")[1]) : -1 != a.indexOf(".") && (b = a.split(".")[1].length));
        return b
    };
    d.wrappedText = function (a, b, c, g, f, e, h, k, l) {
        var m = d.text(a, b, c, g, f, e, h),
            n = "\n";
        d.isModern || (n = "<br>");
        if (10 < l) return m;
        if (m) {
            var q = m.getBBox();
            if (q.width > k) {
                q = Math.ceil(q.width / k);
                m.remove();
                for (var m = [], u = 0; -1 < (u = b.indexOf(" ", u));) m.push(u), u += 1;
                for (var p, u = 0; u < m.length; u += Math.ceil(m.length /
                q)) p = m[u], b = b.substr(0, p) + n + b.substr(p + 1);
                if (isNaN(p)) {
                    if (0 === l)
                        for (u = 1; u < q; u++) p = Math.round(b.length / q * u), b = b.substr(0, p) + n + b.substr(p);
                    return d.text(a, b, c, g, f, e, h)
                }
                return d.wrappedText(a, b, c, g, f, e, h, k, l + 1)
            }
            return m
        }
    };
    d.getStyle = function (a, b) {
        var c = "";
        document.defaultView && document.defaultView.getComputedStyle ? c = document.defaultView.getComputedStyle(a, "").getPropertyValue(b) : a.currentStyle && (b = b.replace(/\-(\w)/g, function (a, b) {
            return b.toUpperCase()
        }), c = a.currentStyle[b]);
        return c
    };
    d.removePx = function (a) {
        if (void 0 !==
            a) return Number(a.substring(0, a.length - 2))
    };
    d.getURL = function (a, b) {
        if (a)
            if ("_self" != b && b)
                if ("_top" == b && window.top) window.top.location.href = a;
                else if ("_parent" == b && window.parent) window.parent.location.href = a;
                else if ("_blank" == b) window.open(a);
                else {
                    var c = document.getElementsByName(b)[0];
                    c ? c.src = a : (c = d.windows[b]) ? c.opener && !c.opener.closed ? c.location.href = a : d.windows[b] = window.open(a) : d.windows[b] = window.open(a)
                } else window.location.href = a
    };
    d.ifArray = function (a) {
        return a && 0 < a.length ? !0 : !1
    };
    d.callMethod =
        function (a, b) {
            var c;
            for (c = 0; c < b.length; c++) {
                var g = b[c];
                if (g) {
                    if (g[a]) g[a]();
                    var d = g.length;
                    if (0 < d) {
                        var e;
                        for (e = 0; e < d; e++) {
                            var h = g[e];
                            if (h && h[a]) h[a]()
                        }
                    }
                }
            }
        };
    d.toNumber = function (a) {
        return "number" == typeof a ? a : Number(String(a).replace(/[^0-9\-.]+/g, ""))
    };
    d.toColor = function (a) {
        if ("" !== a && void 0 !== a)
            if (-1 != a.indexOf(",")) {
                a = a.split(",");
                var b;
                for (b = 0; b < a.length; b++) {
                    var c = a[b].substring(a[b].length - 6, a[b].length);
                    a[b] = "#" + c
                }
            } else a = a.substring(a.length - 6, a.length), a = "#" + a;
        return a
    };
    d.toCoordinate = function (a,
                               b, c) {
        var g;
        void 0 !== a && (a = String(a), c && c < b && (b = c), g = Number(a), -1 != a.indexOf("!") && (g = b - Number(a.substr(1))), -1 != a.indexOf("%") && (g = b * Number(a.substr(0, a.length - 1)) / 100));
        return g
    };
    d.fitToBounds = function (a, b, c) {
        a < b && (a = b);
        a > c && (a = c);
        return a
    };
    d.isDefined = function (a) {
        return void 0 === a ? !1 : !0
    };
    d.stripNumbers = function (a) {
        return a.replace(/[0-9]+/g, "")
    };
    d.roundTo = function (a, b) {
        if (0 > b) return a;
        var c = Math.pow(10, b);
        return Math.round(a * c) / c
    };
    d.toFixed = function (a, b) {
        var c = String(Math.round(a * Math.pow(10, b)));
        if (0 < b) {
            var g = c.length;
            if (g < b) {
                var d;
                for (d = 0; d < b - g; d++) c = "0" + c
            }
            g = c.substring(0, c.length - b);
            "" === g && (g = 0);
            return g + "." + c.substring(c.length - b, c.length)
        }
        return String(c)
    };
    d.formatDuration = function (a, b, c, g, f, e) {
        var h = d.intervals,
            k = e.decimalSeparator;
        if (a >= h[b].contains) {
            var l = a - Math.floor(a / h[b].contains) * h[b].contains;
            "ss" == b && (l = d.formatNumber(l, e), 1 == l.split(k)[0].length && (l = "0" + l));
            ("mm" == b || "hh" == b) && 10 > l && (l = "0" + l);
            c = l + "" + g[b] + "" + c;
            a = Math.floor(a / h[b].contains);
            b = h[b].nextInterval;
            return d.formatDuration(a,
                b, c, g, f, e)
        }
        "ss" == b && (a = d.formatNumber(a, e), 1 == a.split(k)[0].length && (a = "0" + a));
        ("mm" == b || "hh" == b) && 10 > a && (a = "0" + a);
        c = a + "" + g[b] + "" + c;
        if (h[f].count > h[b].count)
            for (a = h[b].count; a < h[f].count; a++) b = h[b].nextInterval, "ss" == b || "mm" == b || "hh" == b ? c = "00" + g[b] + "" + c : "DD" == b && (c = "0" + g[b] + "" + c);
        ":" == c.charAt(c.length - 1) && (c = c.substring(0, c.length - 1));
        return c
    };
    d.formatNumber = function (a, b, c, g, f) {
        a = d.roundTo(a, b.precision);
        isNaN(c) && (c = b.precision);
        var e = b.decimalSeparator;
        b = b.thousandsSeparator;
        var h;
        h = 0 > a ? "-" : "";
        a = Math.abs(a);
        var k = String(a),
            l = !1;
        -1 != k.indexOf("e") && (l = !0);
        0 <= c && !l && (k = d.toFixed(a, c));
        var m = "";
        if (l) m = k;
        else {
            var k = k.split("."),
                l = String(k[0]),
                n;
            for (n = l.length; 0 <= n; n -= 3) m = n != l.length ? 0 !== n ? l.substring(n - 3, n) + b + m : l.substring(n - 3, n) + m : l.substring(n - 3, n);
            void 0 !== k[1] && (m = m + e + k[1]);
            void 0 !== c && 0 < c && "0" != m && (m = d.addZeroes(m, e, c))
        }
        m = h + m;
        "" === h && !0 === g && 0 !== a && (m = "+" + m);
        !0 === f && (m += "%");
        return m
    };
    d.addZeroes = function (a, b, c) {
        a = a.split(b);
        void 0 === a[1] && 0 < c && (a[1] = "0");
        return a[1].length < c ? (a[1] += "0",
            d.addZeroes(a[0] + b + a[1], b, c)) : void 0 !== a[1] ? a[0] + b + a[1] : a[0]
    };
    d.scientificToNormal = function (a) {
        var b;
        a = String(a).split("e");
        var c;
        if ("-" == a[1].substr(0, 1)) {
            b = "0.";
            for (c = 0; c < Math.abs(Number(a[1])) - 1; c++) b += "0";
            b += a[0].split(".").join("")
        } else {
            var g = 0;
            b = a[0].split(".");
            b[1] && (g = b[1].length);
            b = a[0].split(".").join("");
            for (c = 0; c < Math.abs(Number(a[1])) - g; c++) b += "0"
        }
        return b
    };
    d.toScientific = function (a, b) {
        if (0 === a) return "0";
        var c = Math.floor(Math.log(Math.abs(a)) * Math.LOG10E),
            g = String(g).split(".").join(b);
        return String(g) + "e" + c
    };
    d.randomColor = function () {
        return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6)
    };
    d.hitTest = function (a, b, c) {
        var g = !1,
            f = a.x,
            e = a.x + a.width,
            h = a.y,
            k = a.y + a.height,
            l = d.isInRectangle;
        g || (g = l(f, h, b));
        g || (g = l(f, k, b));
        g || (g = l(e, h, b));
        g || (g = l(e, k, b));
        g || !0 === c || (g = d.hitTest(b, a, !0));
        return g
    };
    d.isInRectangle = function (a, b, c) {
        return a >= c.x - 5 && a <= c.x + c.width + 5 && b >= c.y - 5 && b <= c.y + c.height + 5 ? !0 : !1
    };
    d.isPercents = function (a) {
        if (-1 != String(a).indexOf("%")) return !0
    };
    d.findPosX =
        function (a) {
            var b = a,
                c = a.offsetLeft;
            if (a.offsetParent) {
                for (; a = a.offsetParent;) c += a.offsetLeft;
                for (;
                    (b = b.parentNode) && b != document.body;) c -= b.scrollLeft || 0
            }
            return c
        };
    d.findPosY = function (a) {
        var b = a,
            c = a.offsetTop;
        if (a.offsetParent) {
            for (; a = a.offsetParent;) c += a.offsetTop;
            for (;
                (b = b.parentNode) && b != document.body;) c -= b.scrollTop || 0
        }
        return c
    };
    d.findIfFixed = function (a) {
        if (a.offsetParent)
            for (; a = a.offsetParent;)
                if ("fixed" == d.getStyle(a, "position")) return !0;
        return !1
    };
    d.findIfAuto = function (a) {
        return a.style && "auto" ==
        d.getStyle(a, "overflow") ? !0 : a.parentNode ? d.findIfAuto(a.parentNode) : !1
    };
    d.findScrollLeft = function (a, b) {
        a.scrollLeft && (b += a.scrollLeft);
        return a.parentNode ? d.findScrollLeft(a.parentNode, b) : b
    };
    d.findScrollTop = function (a, b) {
        a.scrollTop && (b += a.scrollTop);
        return a.parentNode ? d.findScrollTop(a.parentNode, b) : b
    };
    d.formatValue = function (a, b, c, g, f, e, h, k) {
        if (b) {
            void 0 === f && (f = "");
            var l;
            for (l = 0; l < c.length; l++) {
                var m = c[l],
                    n = b[m];
                void 0 !== n && (n = e ? d.addPrefix(n, k, h, g) : d.formatNumber(n, g), a = a.replace(new RegExp("\\[\\[" +
                f + "" + m + "\\]\\]", "g"), n))
            }
        }
        return a
    };
    d.formatDataContextValue = function (a, b) {
        if (a) {
            var c = a.match(/\[\[.*?\]\]/g),
                g;
            for (g = 0; g < c.length; g++) {
                var d = c[g],
                    d = d.substr(2, d.length - 4);
                void 0 !== b[d] && (a = a.replace(new RegExp("\\[\\[" + d + "\\]\\]", "g"), b[d]))
            }
        }
        return a
    };
    d.massReplace = function (a, b) {
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                var d = b[c];
                void 0 === d && (d = "");
                a = a.replace(c, d)
            }
        return a
    };
    d.cleanFromEmpty = function (a) {
        return a.replace(/\[\[[^\]]*\]\]/g, "")
    };
    d.addPrefix = function (a, b, c, g, f) {
        var e = d.formatNumber(a,
                g),
            h = "",
            k, l, m;
        if (0 === a) return "0";
        0 > a && (h = "-");
        a = Math.abs(a);
        if (1 < a)
            for (k = b.length - 1; -1 < k; k--) {
                if (a >= b[k].number && (l = a / b[k].number, m = Number(g.precision), 1 > m && (m = 1), c = d.roundTo(l, m), m = d.formatNumber(c, {
                        precision: -1,
                        decimalSeparator: g.decimalSeparator,
                        thousandsSeparator: g.thousandsSeparator
                    }), !f || l == c)) {
                    e = h + "" + m + "" + b[k].prefix;
                    break
                }
            } else
            for (k = 0; k < c.length; k++)
                if (a <= c[k].number) {
                    l = a / c[k].number;
                    m = Math.abs(Math.round(Math.log(l) * Math.LOG10E));
                    l = d.roundTo(l, m);
                    e = h + "" + l + "" + c[k].prefix;
                    break
                }
        return e
    };
    d.remove = function (a) {
        a && a.remove()
    };
    d.getEffect = function (a) {
        ">" == a && (a = "easeOutSine");
        "<" == a && (a = "easeInSine");
        "elastic" == a && (a = "easeOutElastic");
        return a
    };
    d.getObjById = function (a, b) {
        var c, d;
        for (d = 0; d < a.length; d++) {
            var f = a[d];
            f.id == b && (c = f)
        }
        return c
    };
    d.applyTheme = function (a, b, c) {
        b || (b = d.theme);
        b && b[c] && d.extend(a, b[c])
    };
    d.isString = function (a) {
        return "string" == typeof a ? !0 : !1
    };
    d.extend = function (a, b, c) {
        var d;
        a || (a = {});
        for (d in b) c ? a.hasOwnProperty(d) || (a[d] = b[d]) : a[d] = b[d];
        return a
    };
    d.copyProperties =
        function (a, b) {
            for (var c in a) a.hasOwnProperty(c) && "events" != c && void 0 !== a[c] && "function" != typeof a[c] && "cname" != c && (b[c] = a[c])
        };
    d.processObject = function (a, b, c, g) {
        !1 === a instanceof b && (a = g ? d.extend(new b(c), a) : d.extend(a, new b(c), !0));
        return a
    };
    d.fixNewLines = function (a) {
        var b = RegExp("\\n", "g");
        a && (a = a.replace(b, "<br />"));
        return a
    };
    d.fixBrakes = function (a) {
        if (d.isModern) {
            var b = RegExp("<br>", "g");
            a && (a = a.replace(b, "\n"))
        } else a = d.fixNewLines(a);
        return a
    };
    d.deleteObject = function (a, b) {
        if (a) {
            if (void 0 ===
                b || null === b) b = 20;
            if (0 !== b)
                if ("[object Array]" === Object.prototype.toString.call(a))
                    for (var c = 0; c < a.length; c++) d.deleteObject(a[c], b - 1), a[c] = null;
                else if (a && !a.tagName) try {
                    for (c in a) a[c] && ("object" == typeof a[c] && d.deleteObject(a[c], b - 1), "function" != typeof a[c] && (a[c] = null))
                } catch (g) {
                }
        }
    };
    d.bounce = function (a, b, c, d, f) {
        return (b /= f) < 1 / 2.75 ? 7.5625 * d * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    };
    d.easeInSine = function (a,
                             b, c, d, f) {
        return -d * Math.cos(b / f * (Math.PI / 2)) + d + c
    };
    d.easeOutSine = function (a, b, c, d, f) {
        return d * Math.sin(b / f * (Math.PI / 2)) + c
    };
    d.easeOutElastic = function (a, b, c, d, f) {
        a = 1.70158;
        var e = 0,
            h = d;
        if (0 === b) return c;
        if (1 == (b /= f)) return c + d;
        e || (e = .3 * f);
        h < Math.abs(d) ? (h = d, a = e / 4) : a = e / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * f - a) * Math.PI / e) + d + c
    };
    d.fixStepE = function (a) {
        a = a.toExponential(0).split("e");
        var b = Number(a[1]);
        9 == Number(a[0]) && b++;
        return d.generateNumber(1, b)
    };
    d.generateNumber = function (a,
                                 b) {
        var c = "",
            d;
        d = 0 > b ? Math.abs(b) - 1 : Math.abs(b);
        var f;
        for (f = 0; f < d; f++) c += "0";
        return 0 > b ? Number("0." + c + String(a)) : Number(String(a) + c)
    };
    d.setCN = function (a, b, c, d) {
        if (a.addClassNames && b && (b = b.node) && c) {
            var f = b.getAttribute("class");
            a = a.classNamePrefix + "-";
            d && (a = "");
            f ? b.setAttribute("class", f + " " + a + c) : b.setAttribute("class", a + c)
        }
    };
    d.parseDefs = function (a, b) {
        for (var c in a) {
            var g = typeof a[c];
            if (0 < a[c].length && "object" == g)
                for (var f = 0; f < a[c].length; f++) g = document.createElementNS(d.SVG_NS, c), b.appendChild(g),
                    d.parseDefs(a[c][f], g);
            else "object" == g ? (g = document.createElementNS(d.SVG_NS, c), b.appendChild(g), d.parseDefs(a[c], g)) : b.setAttribute(c, a[c])
        }
    }
})();
(function () {
    var d = window.AmCharts;
    d.AmDraw = d.Class({
        construct: function (a, b, c, g) {
            d.SVG_NS = "http://www.w3.org/2000/svg";
            d.SVG_XLINK = "http://www.w3.org/1999/xlink";
            d.hasSVG = !!document.createElementNS && !!document.createElementNS(d.SVG_NS, "svg").createSVGRect;
            1 > b && (b = 10);
            1 > c && (c = 10);
            this.div = a;
            this.width = b;
            this.height = c;
            this.rBin = document.createElement("div");
            d.hasSVG ? (d.SVG = !0, b = this.createSvgElement("svg"), a.appendChild(b), this.container = b, this.addDefs(g), this.R = new d.SVGRenderer(this)) : d.isIE && d.VMLRenderer &&
            (d.VML = !0, d.vmlStyleSheet || (document.namespaces.add("amvml", "urn:schemas-microsoft-com:vml"), 31 > document.styleSheets.length ? (b = document.createStyleSheet(), b.addRule(".amvml", "behavior:url(#default#VML); display:inline-block; antialias:true"), d.vmlStyleSheet = b) : document.styleSheets[0].addRule(".amvml", "behavior:url(#default#VML); display:inline-block; antialias:true")), this.container = a, this.R = new d.VMLRenderer(this, g), this.R.disableSelection(a))
        },
        createSvgElement: function (a) {
            return document.createElementNS(d.SVG_NS,
                a)
        },
        circle: function (a, b, c, g) {
            var f = new d.AmDObject("circle", this);
            f.attr({
                r: c,
                cx: a,
                cy: b
            });
            this.addToContainer(f.node, g);
            return f
        },
        ellipse: function (a, b, c, g, f) {
            var e = new d.AmDObject("ellipse", this);
            e.attr({
                rx: c,
                ry: g,
                cx: a,
                cy: b
            });
            this.addToContainer(e.node, f);
            return e
        },
        setSize: function (a, b) {
            0 < a && 0 < b && (this.container.style.width = a + "px", this.container.style.height = b + "px")
        },
        rect: function (a, b, c, g, f, e, h) {
            var k = new d.AmDObject("rect", this);
            d.VML && (f = Math.round(100 * f / Math.min(c, g)), c += 2 * e, g += 2 * e, k.bw = e, k.node.style.marginLeft = -e, k.node.style.marginTop = -e);
            1 > c && (c = 1);
            1 > g && (g = 1);
            k.attr({
                x: a,
                y: b,
                width: c,
                height: g,
                rx: f,
                ry: f,
                "stroke-width": e
            });
            this.addToContainer(k.node, h);
            return k
        },
        image: function (a, b, c, g, f, e) {
            var h = new d.AmDObject("image", this);
            h.attr({
                x: b,
                y: c,
                width: g,
                height: f
            });
            this.R.path(h, a);
            this.addToContainer(h.node, e);
            return h
        },
        addToContainer: function (a, b) {
            b || (b = this.container);
            b.appendChild(a)
        },
        text: function (a, b, c) {
            return this.R.text(a, b, c)
        },
        path: function (a, b, c, g) {
            var f = new d.AmDObject("path", this);
            g || (g = "100,100");
            f.attr({
                cs: g
            });
            c ? f.attr({
                dd: a
            }) : f.attr({
                d: a
            });
            this.addToContainer(f.node, b);
            return f
        },
        set: function (a) {
            return this.R.set(a)
        },
        remove: function (a) {
            if (a) {
                var b = this.rBin;
                b.appendChild(a);
                b.innerHTML = ""
            }
        },
        renderFix: function () {
            var a = this.container,
                b = a.style,
                c;
            try {
                c = a.getScreenCTM() || a.createSVGMatrix()
            } catch (d) {
                c = a.createSVGMatrix()
            }
            a = 1 - c.e % 1;
            c = 1 - c.f % 1;
            .5 < a && --a;
            .5 < c && --c;
            a && (b.left = a + "px");
            c && (b.top = c + "px")
        },
        update: function () {
            this.R.update()
        },
        addDefs: function (a) {
            if (d.hasSVG) {
                var b = this.createSvgElement("desc"),
                    c = this.container;
                c.setAttribute("version", "1.1");
                c.style.position = "absolute";
                this.setSize(this.width, this.height);
                d.rtl && (c.setAttribute("direction", "rtl"), c.style.left = "auto", c.style.right = "0px");
                b.appendChild(document.createTextNode("JavaScript chart by amCharts " + a.version));
                c.appendChild(b);
                a.defs && (b = this.createSvgElement("defs"), c.appendChild(b), d.parseDefs(a.defs, b), this.defs = b)
            }
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.AmDObject = d.Class({
        construct: function (a, b) {
            this.D = b;
            this.R = b.R;
            this.node = this.R.create(this, a);
            this.y = this.x = 0;
            this.scale = 1
        },
        attr: function (a) {
            this.R.attr(this, a);
            return this
        },
        getAttr: function (a) {
            return this.node.getAttribute(a)
        },
        setAttr: function (a, b) {
            this.R.setAttr(this, a, b);
            return this
        },
        clipRect: function (a, b, c, d) {
            this.R.clipRect(this, a, b, c, d)
        },
        translate: function (a, b, c, d) {
            d || (a = Math.round(a), b = Math.round(b));
            this.R.move(this, a, b, c);
            this.x = a;
            this.y = b;
            this.scale =
                c;
            this.angle && this.rotate(this.angle)
        },
        rotate: function (a, b) {
            this.R.rotate(this, a, b);
            this.angle = a
        },
        animate: function (a, b, c) {
            for (var g in a)
                if (a.hasOwnProperty(g)) {
                    var f = g,
                        e = a[g];
                    c = d.getEffect(c);
                    this.R.animate(this, f, e, b, c)
                }
        },
        push: function (a) {
            if (a) {
                var b = this.node;
                b.appendChild(a.node);
                var c = a.clipPath;
                c && b.appendChild(c);
                (a = a.grad) && b.appendChild(a)
            }
        },
        text: function (a) {
            this.R.setText(this, a)
        },
        remove: function () {
            this.R.remove(this)
        },
        clear: function () {
            var a = this.node;
            if (a.hasChildNodes())
                for (; 1 <= a.childNodes.length;) a.removeChild(a.firstChild)
        },
        hide: function () {
            this.setAttr("visibility", "hidden")
        },
        show: function () {
            this.setAttr("visibility", "visible")
        },
        getBBox: function () {
            return this.R.getBBox(this)
        },
        toFront: function () {
            var a = this.node;
            if (a) {
                this.prevNextNode = a.nextSibling;
                var b = a.parentNode;
                b && b.appendChild(a)
            }
        },
        toPrevious: function () {
            var a = this.node;
            a && this.prevNextNode && (a = a.parentNode) && a.insertBefore(this.prevNextNode, null)
        },
        toBack: function () {
            var a = this.node;
            if (a) {
                this.prevNextNode = a.nextSibling;
                var b = a.parentNode;
                if (b) {
                    var c = b.firstChild;
                    c && b.insertBefore(a, c)
                }
            }
        },
        mouseover: function (a) {
            this.R.addListener(this, "mouseover", a);
            return this
        },
        mouseout: function (a) {
            this.R.addListener(this, "mouseout", a);
            return this
        },
        click: function (a) {
            this.R.addListener(this, "click", a);
            return this
        },
        dblclick: function (a) {
            this.R.addListener(this, "dblclick", a);
            return this
        },
        mousedown: function (a) {
            this.R.addListener(this, "mousedown", a);
            return this
        },
        mouseup: function (a) {
            this.R.addListener(this, "mouseup", a);
            return this
        },
        touchstart: function (a) {
            this.R.addListener(this,
                "touchstart", a);
            return this
        },
        touchend: function (a) {
            this.R.addListener(this, "touchend", a);
            return this
        },
        contextmenu: function (a) {
            this.node.addEventListener ? this.node.addEventListener("contextmenu", a, !0) : this.R.addListener(this, "contextmenu", a);
            return this
        },
        stop: function () {
            d.removeFromArray(this.R.animations, this.an_x);
            d.removeFromArray(this.R.animations, this.an_y)
        },
        length: function () {
            return this.node.childNodes.length
        },
        gradient: function (a, b, c) {
            this.R.gradient(this, a, b, c)
        },
        pattern: function (a, b, c) {
            a && this.R.pattern(this,
                a, b, c)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.SVGRenderer = d.Class({
        construct: function (a) {
            this.D = a;
            this.animations = []
        },
        create: function (a, b) {
            return document.createElementNS(d.SVG_NS, b)
        },
        attr: function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && this.setAttr(a, c, b[c])
        },
        setAttr: function (a, b, c) {
            void 0 !== c && a.node.setAttribute(b, c)
        },
        animate: function (a, b, c, g, f) {
            var e = a.node;
            a["an_" + b] && d.removeFromArray(this.animations, a["an_" + b]);
            "translate" == b ? (e = (e = e.getAttribute("transform")) ? String(e).substring(10, e.length - 1) : "0,0",
                e = e.split(", ").join(" "), e = e.split(" ").join(","), 0 === e && (e = "0,0")) : e = Number(e.getAttribute(b));
            c = {
                obj: a,
                frame: 0,
                attribute: b,
                from: e,
                to: c,
                time: g,
                effect: f
            };
            this.animations.push(c);
            a["an_" + b] = c
        },
        update: function () {
            var a, b = this.animations;
            for (a = b.length - 1; 0 <= a; a--) {
                var c = b[a],
                    g = 1E3 * c.time / d.updateRate,
                    f = c.frame + 1,
                    e = c.obj,
                    h = c.attribute,
                    k, l, m;
                f <= g ? (c.frame++, "translate" == h ? (k = c.from.split(","), h = Number(k[0]), k = Number(k[1]), isNaN(k) && (k = 0), l = c.to.split(","), m = Number(l[0]), l = Number(l[1]), m = 0 === m - h ? m : Math.round(d[c.effect](0,
                    f, h, m - h, g)), c = 0 === l - k ? l : Math.round(d[c.effect](0, f, k, l - k, g)), h = "transform", c = "translate(" + m + "," + c + ")") : (l = Number(c.from), k = Number(c.to), m = k - l, c = d[c.effect](0, f, l, m, g), isNaN(c) && (c = k), 0 === m && this.animations.splice(a, 1)), this.setAttr(e, h, c)) : ("translate" == h ? (l = c.to.split(","), m = Number(l[0]), l = Number(l[1]), e.translate(m, l)) : (k = Number(c.to), this.setAttr(e, h, k)), this.animations.splice(a, 1))
            }
        },
        getBBox: function (a) {
            if (a = a.node) try {
                return a.getBBox()
            } catch (b) {
            }
            return {
                width: 0,
                height: 0,
                x: 0,
                y: 0
            }
        },
        path: function (a,
                        b) {
            a.node.setAttributeNS(d.SVG_XLINK, "xlink:href", b)
        },
        clipRect: function (a, b, c, g, f) {
            var e = a.node,
                h = a.clipPath;
            h && this.D.remove(h);
            var k = e.parentNode;
            k && (e = document.createElementNS(d.SVG_NS, "clipPath"), h = d.getUniqueId(), e.setAttribute("id", h), this.D.rect(b, c, g, f, 0, 0, e), k.appendChild(e), b = "#", d.baseHref && !d.isIE && (b = this.removeTarget(window.location.href) + b), this.setAttr(a, "clip-path", "url(" + b + h + ")"), this.clipPathC++, a.clipPath = e)
        },
        text: function (a, b, c) {
            var g = new d.AmDObject("text", this.D);
            a = String(a).split("\n");
            var f = b["font-size"],
                e;
            for (e = 0; e < a.length; e++) {
                var h = this.create(null, "tspan");
                h.appendChild(document.createTextNode(a[e]));
                h.setAttribute("y", (f + 2) * e + Math.round(f / 2));
                h.setAttribute("x", 0);
                h.style.fontSize = f + "px";
                g.node.appendChild(h)
            }
            g.node.setAttribute("y", Math.round(f / 2));
            this.attr(g, b);
            this.D.addToContainer(g.node, c);
            return g
        },
        setText: function (a, b) {
            var c = a.node;
            c && (c.removeChild(c.firstChild), c.appendChild(document.createTextNode(b)))
        },
        move: function (a, b, c, d) {
            isNaN(b) && (b = 0);
            isNaN(c) && (c = 0);
            b =
                "translate(" + b + "," + c + ")";
            d && (b = b + " scale(" + d + ")");
            this.setAttr(a, "transform", b)
        },
        rotate: function (a, b) {
            var c = a.node.getAttribute("transform"),
                d = "rotate(" + b + ")";
            c && (d = c + " " + d);
            this.setAttr(a, "transform", d)
        },
        set: function (a) {
            var b = new d.AmDObject("g", this.D);
            this.D.container.appendChild(b.node);
            if (a) {
                var c;
                for (c = 0; c < a.length; c++) b.push(a[c])
            }
            return b
        },
        addListener: function (a, b, c) {
            a.node["on" + b] = c
        },
        gradient: function (a, b, c, g) {
            var f = a.node,
                e = a.grad;
            e && this.D.remove(e);
            b = document.createElementNS(d.SVG_NS,
                b);
            e = d.getUniqueId();
            b.setAttribute("id", e);
            if (!isNaN(g)) {
                var h = 0,
                    k = 0,
                    l = 0,
                    m = 0;
                90 == g ? l = 100 : 270 == g ? m = 100 : 180 == g ? h = 100 : 0 === g && (k = 100);
                b.setAttribute("x1", h + "%");
                b.setAttribute("x2", k + "%");
                b.setAttribute("y1", l + "%");
                b.setAttribute("y2", m + "%")
            }
            for (g = 0; g < c.length; g++) h = document.createElementNS(d.SVG_NS, "stop"), k = 100 * g / (c.length - 1), 0 === g && (k = 0), h.setAttribute("offset", k + "%"), h.setAttribute("stop-color", c[g]), b.appendChild(h);
            f.parentNode.appendChild(b);
            c = "#";
            d.baseHref && !d.isIE && (c = this.removeTarget(window.location.href) +
            c);
            f.setAttribute("fill", "url(" + c + e + ")");
            a.grad = b
        },
        removeTarget: function (a) {
            return a.split("#")[0]
        },
        pattern: function (a, b, c, g) {
            var f = a.node;
            isNaN(c) && (c = 1);
            var e = a.patternNode;
            e && this.D.remove(e);
            var e = document.createElementNS(d.SVG_NS, "pattern"),
                h = d.getUniqueId(),
                k = b;
            b.url && (k = b.url);
            d.isAbsolute(k) || (k = g + k);
            g = Number(b.width);
            isNaN(g) && (g = 4);
            var l = Number(b.height);
            isNaN(l) && (l = 4);
            g /= c;
            l /= c;
            c = b.x;
            isNaN(c) && (c = 0);
            var m = -Math.random() * Number(b.randomX);
            isNaN(m) || (c = m);
            m = b.y;
            isNaN(m) && (m = 0);
            var n = -Math.random() *
                Number(b.randomY);
            isNaN(n) || (m = n);
            e.setAttribute("id", h);
            e.setAttribute("width", g);
            e.setAttribute("height", l);
            e.setAttribute("patternUnits", "userSpaceOnUse");
            e.setAttribute("xlink:href", k);
            b.color && (n = document.createElementNS(d.SVG_NS, "rect"), n.setAttributeNS(null, "height", g), n.setAttributeNS(null, "width", l), n.setAttributeNS(null, "fill", b.color), e.appendChild(n));
            this.D.image(k, 0, 0, g, l, e).translate(c, m);
            k = "#";
            d.baseHref && !d.isIE && (k = this.removeTarget(window.location.href) + k);
            f.setAttribute("fill",
                "url(" + k + h + ")");
            a.patternNode = e;
            f.parentNode.appendChild(e)
        },
        remove: function (a) {
            a.clipPath && this.D.remove(a.clipPath);
            a.grad && this.D.remove(a.grad);
            a.patternNode && this.D.remove(a.patternNode);
            this.D.remove(a.node)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.AmChart = d.Class({
        construct: function (a) {
            this.theme = a;
            this.classNamePrefix = "amcharts";
            this.addClassNames = !1;
            this.version = "3.14.2";
            d.addChart(this);
            this.createEvents("dataUpdated", "init", "rendered", "drawn", "failed", "resized");
            this.height = this.width = "100%";
            this.dataChanged = !0;
            this.chartCreated = !1;
            this.previousWidth = this.previousHeight = 0;
            this.backgroundColor = "#FFFFFF";
            this.borderAlpha = this.backgroundAlpha = 0;
            this.color = this.borderColor = "#000000";
            this.fontFamily = "Verdana";
            this.fontSize = 11;
            this.usePrefixes = !1;
            this.autoResize = !0;
            this.path = "amcharts/";
            this.precision = -1;
            this.percentPrecision = 2;
            this.decimalSeparator = ".";
            this.thousandsSeparator = ",";
            this.labels = [];
            this.allLabels = [];
            this.titles = [];
            this.marginRight = this.marginLeft = this.autoMarginOffset = 0;
            this.timeOuts = [];
            this.creditsPosition = "top-left";
            var b = document.createElement("div"),
                c = b.style;
            c.overflow = "hidden";
            c.position = "relative";
            c.textAlign = "left";
            this.chartDiv = b;
            b = document.createElement("div");
            c = b.style;
            c.overflow =
                "hidden";
            c.position = "relative";
            c.textAlign = "left";
            this.legendDiv = b;
            this.titleHeight = 0;
            this.hideBalloonTime = 150;
            this.handDrawScatter = 2;
            this.handDrawThickness = 1;
            this.prefixesOfBigNumbers = [{
                number: 1E3,
                prefix: "k"
            }, {
                number: 1E6,
                prefix: "M"
            }, {
                number: 1E9,
                prefix: "G"
            }, {
                number: 1E12,
                prefix: "T"
            }, {
                number: 1E15,
                prefix: "P"
            }, {
                number: 1E18,
                prefix: "E"
            }, {
                number: 1E21,
                prefix: "Z"
            }, {
                number: 1E24,
                prefix: "Y"
            }];
            this.prefixesOfSmallNumbers = [{
                number: 1E-24,
                prefix: "y"
            }, {
                number: 1E-21,
                prefix: "z"
            }, {
                number: 1E-18,
                prefix: "a"
            }, {
                number: 1E-15,
                prefix: "f"
            }, {
                number: 1E-12,
                prefix: "p"
            }, {
                number: 1E-9,
                prefix: "n"
            }, {
                number: 1E-6,
                prefix: "\u03bc"
            }, {
                number: .001,
                prefix: "m"
            }];
            this.panEventsEnabled = !0;
            this.product = "amcharts";
            this.animations = [];
            this.balloon = new d.AmBalloon(this.theme);
            this.balloon.chart = this;
            d.applyTheme(this, a, "AmChart")
        },
        drawChart: function () {
            this.drawBackground();
            this.redrawLabels();
            this.drawTitles();
            this.brr()
        },
        drawBackground: function () {
            d.remove(this.background);
            var a = this.container,
                b = this.backgroundColor,
                c = this.backgroundAlpha,
                g = this.set;
            d.isModern || 0 !== c || (c = .001);
            var f = this.updateWidth();
            this.realWidth = f;
            var e = this.updateHeight();
            this.realHeight = e;
            b = d.polygon(a, [0, f - 1, f - 1, 0], [0, 0, e - 1, e - 1], b, c, 1, this.borderColor, this.borderAlpha);
            d.setCN(this, b, "bg");
            this.background = b;
            g.push(b);
            if (b = this.backgroundImage) this.path && (b = this.path + b), a = a.image(b, 0, 0, f, e), d.setCN(this, b, "bg-image"), this.bgImg = a, g.push(a)
        },
        drawTitles: function () {
            var a = this.titles;
            if (d.ifArray(a)) {
                var b = 20,
                    c;
                for (c = 0; c < a.length; c++) {
                    var g = a[c],
                        g = d.processObject(g, d.Title,
                            this.theme);
                    if (!1 !== g.enabled) {
                        var f = g.color;
                        void 0 === f && (f = this.color);
                        var e = g.size;
                        isNaN(e) && (e = this.fontSize + 2);
                        isNaN(g.alpha);
                        var h = this.marginLeft,
                            f = d.text(this.container, g.text, f, this.fontFamily, e);
                        f.translate(h + (this.realWidth - this.marginRight - h) / 2, b);
                        f.node.style.pointerEvents = "none";
                        d.setCN(this, f, "title");
                        g.id && d.setCN(this, f, "title-" + g.id);
                        h = !0;
                        void 0 !== g.bold && (h = g.bold);
                        h && f.attr({
                            "font-weight": "bold"
                        });
                        f.attr({
                            opacity: g.alpha
                        });
                        b += e + 6;
                        this.freeLabelsSet.push(f)
                    }
                }
            }
        },
        write: function (a) {
            if (a =
                    "object" != typeof a ? document.getElementById(a) : a) {
                for (; a.firstChild;) a.removeChild(a.firstChild);
                this.div = a;
                a.style.overflow = "hidden";
                a.style.textAlign = "left";
                var b = this.chartDiv,
                    c = this.legendDiv,
                    g = this.legend,
                    f = c.style,
                    e = b.style;
                this.measure();
                this.previousHeight = this.divRealHeight;
                this.previousWidth = this.divRealWidth;
                var h, k = document.createElement("div");
                h = k.style;
                h.position = "relative";
                this.containerDiv = k;
                k.className = this.classNamePrefix + "-main-div";
                b.className = this.classNamePrefix + "-chart-div";
                a.appendChild(k);
                var l = this.exportConfig;
                l && d.AmExport && !this.AmExport && (this.AmExport = new d.AmExport(this, l));
                this.amExport && d.AmExport && (this.AmExport = d.extend(this.amExport, new d.AmExport(this), !0));
                this.AmExport && this.AmExport.init && this.AmExport.init();
                if (g)
                    if (g = this.addLegend(g, g.divId), g.enabled) switch (g.position) {
                        case "bottom":
                            k.appendChild(b);
                            k.appendChild(c);
                            break;
                        case "top":
                            k.appendChild(c);
                            k.appendChild(b);
                            break;
                        case "absolute":
                            h.width = a.style.width;
                            h.height = a.style.height;
                            f.position =
                                "absolute";
                            e.position = "absolute";
                            void 0 !== g.left && (f.left = g.left + "px");
                            void 0 !== g.right && (f.right = g.right + "px");
                            void 0 !== g.top && (f.top = g.top + "px");
                            void 0 !== g.bottom && (f.bottom = g.bottom + "px");
                            g.marginLeft = 0;
                            g.marginRight = 0;
                            k.appendChild(b);
                            k.appendChild(c);
                            break;
                        case "right":
                            h.width = a.style.width;
                            h.height = a.style.height;
                            f.position = "relative";
                            e.position = "absolute";
                            k.appendChild(b);
                            k.appendChild(c);
                            break;
                        case "left":
                            h.width = a.style.width;
                            h.height = a.style.height;
                            f.position = "absolute";
                            e.position = "relative";
                            k.appendChild(b);
                            k.appendChild(c);
                            break;
                        case "outside":
                            k.appendChild(b)
                    } else k.appendChild(b);
                else k.appendChild(b);
                this.listenersAdded || (this.addListeners(), this.listenersAdded = !0);
                this.initChart()
            }
        },
        createLabelsSet: function () {
            d.remove(this.labelsSet);
            this.labelsSet = this.container.set();
            this.freeLabelsSet.push(this.labelsSet)
        },
        initChart: function () {
            window.AmCharts_path && (this.path = window.AmCharts_path);
            this.path = d.normalizeUrl(this.path);
            void 0 === this.pathToImages && (this.pathToImages = this.path + "images/");
            this.initHC || (d.callInitHandler(this), this.initHC = !0);
            this.renderFix();
            d.applyLang(this.language, this);
            var a = this.numberFormatter;
            a && (isNaN(a.precision) || (this.precision = a.precision), void 0 !== a.thousandsSeparator && (this.thousandsSeparator = a.thousandsSeparator), void 0 !== a.decimalSeparator && (this.decimalSeparator = a.decimalSeparator));
            (a = this.percentFormatter) && !isNaN(a.precision) && (this.percentPrecision = a.precision);
            this.nf = {
                precision: this.precision,
                thousandsSeparator: this.thousandsSeparator,
                decimalSeparator: this.decimalSeparator
            };
            this.pf = {
                precision: this.percentPrecision,
                thousandsSeparator: this.thousandsSeparator,
                decimalSeparator: this.decimalSeparator
            };
            this.divIsFixed = d.findIfFixed(this.chartDiv);
            this.destroy();
            a = 0;
            document.attachEvent && !window.opera && (a = 1);
            this.dmouseX = this.dmouseY = 0;
            var b = document.getElementsByTagName("html")[0];
            b && window.getComputedStyle && (b = window.getComputedStyle(b, null)) && (this.dmouseY = d.removePx(b.getPropertyValue("margin-top")), this.dmouseX = d.removePx(b.getPropertyValue("margin-left")));
            this.mouseMode =
                a;
            (a = this.container) ? (a.container.innerHTML = "", a.width = this.realWidth, a.height = this.realHeight, a.addDefs(this), this.chartDiv.appendChild(a.container)) : a = new d.AmDraw(this.chartDiv, this.realWidth, this.realHeight, this);
            a.chart = this;
            d.VML || d.SVG ? (a.handDrawn = this.handDrawn, a.handDrawScatter = this.handDrawScatter, a.handDrawThickness = this.handDrawThickness, this.container = a, this.set && this.set.remove(), this.set = a.set(), this.gridSet && this.gridSet.remove(), this.gridSet = a.set(), this.cursorLineSet && this.cursorLineSet.remove(),
                this.cursorLineSet = a.set(), this.graphsBehindSet && this.graphsBehindSet.remove(), this.graphsBehindSet = a.set(), this.bulletBehindSet && this.bulletBehindSet.remove(), this.bulletBehindSet = a.set(), this.columnSet && this.columnSet.remove(), this.columnSet = a.set(), this.graphsSet && this.graphsSet.remove(), this.graphsSet = a.set(), this.trendLinesSet && this.trendLinesSet.remove(), this.trendLinesSet = a.set(), this.axesSet && this.axesSet.remove(), this.axesSet = a.set(), this.cursorSet && this.cursorSet.remove(), this.cursorSet =
                a.set(), this.scrollbarsSet && this.scrollbarsSet.remove(), this.scrollbarsSet = a.set(), this.bulletSet && this.bulletSet.remove(), this.bulletSet = a.set(), this.freeLabelsSet && this.freeLabelsSet.remove(), this.axesLabelsSet && this.axesLabelsSet.remove(), this.axesLabelsSet = a.set(), this.freeLabelsSet = a.set(), this.balloonsSet && this.balloonsSet.remove(), this.balloonsSet = a.set(), this.zoomButtonSet && this.zoomButtonSet.remove(), this.zbSet && (this.zbSet.remove(), this.zbSet = null), this.zoomButtonSet = a.set(), this.linkSet &&
            this.linkSet.remove(), this.linkSet = a.set()) : this.fire("failed", {
                type: "failed",
                chart: this
            })
        },
        premeasure: function () {
            var a = this.div;
            if (a) {
                var b = a.offsetWidth,
                    c = a.offsetHeight;
                a.clientHeight && (b = a.clientWidth, c = a.clientHeight);
                if (b != this.mw || c != this.mh) this.mw = b, this.mh = c, this.measure()
            }
        },
        measure: function () {
            var a = this.div;
            if (a) {
                var b = this.chartDiv,
                    c = a.offsetWidth,
                    g = a.offsetHeight,
                    f = this.container;
                a.clientHeight && (c = a.clientWidth, g = a.clientHeight);
                var e = d.removePx(d.getStyle(a, "padding-left")),
                    h = d.removePx(d.getStyle(a,
                        "padding-right")),
                    k = d.removePx(d.getStyle(a, "padding-top")),
                    l = d.removePx(d.getStyle(a, "padding-bottom"));
                isNaN(e) || (c -= e);
                isNaN(h) || (c -= h);
                isNaN(k) || (g -= k);
                isNaN(l) || (g -= l);
                e = a.style;
                a = e.width;
                e = e.height;
                -1 != a.indexOf("px") && (c = d.removePx(a));
                -1 != e.indexOf("px") && (g = d.removePx(e));
                g = Math.round(g);
                c = Math.round(c);
                a = Math.round(d.toCoordinate(this.width, c));
                e = Math.round(d.toCoordinate(this.height, g));
                (c != this.previousWidth || g != this.previousHeight) && 0 < a && 0 < e && (b.style.width = a + "px", b.style.height = e + "px",
                f && f.setSize(a, e), this.balloon = d.processObject(this.balloon, d.AmBalloon, this.theme), this.balloon.setBounds(2, 2, a - 2, e));
                this.balloon.chart = this;
                this.realWidth = a;
                this.realHeight = e;
                this.divRealWidth = c;
                this.divRealHeight = g
            }
        },
        destroy: function () {
            this.chartDiv.innerHTML = "";
            this.clearTimeOuts();
            this.legend && this.legend.destroy()
        },
        clearTimeOuts: function () {
            var a = this.timeOuts;
            if (a) {
                var b;
                for (b = 0; b < a.length; b++) clearTimeout(a[b])
            }
            this.timeOuts = []
        },
        clear: function (a) {
            d.callMethod("clear", [this.chartScrollbar,
                this.scrollbarV, this.scrollbarH, this.chartCursor
            ]);
            this.chartCursor = this.scrollbarH = this.scrollbarV = this.chartScrollbar = null;
            this.clearTimeOuts();
            this.container && (this.container.remove(this.chartDiv), this.container.remove(this.legendDiv));
            a || d.removeChart(this);
            if (a = this.div)
                for (; a.firstChild;) a.removeChild(a.firstChild);
            this.legend && this.legend.destroy()
        },
        setMouseCursor: function (a) {
            "auto" == a && d.isNN && (a = "default");
            this.chartDiv.style.cursor = a;
            this.legendDiv.style.cursor = a
        },
        redrawLabels: function () {
            this.labels =
                [];
            var a = this.allLabels;
            this.createLabelsSet();
            var b;
            for (b = 0; b < a.length; b++) this.drawLabel(a[b])
        },
        drawLabel: function (a) {
            if (this.container && !1 !== a.enabled) {
                a = d.processObject(a, d.Label, this.theme);
                var b = a.y,
                    c = a.text,
                    g = a.align,
                    f = a.size,
                    e = a.color,
                    h = a.rotation,
                    k = a.alpha,
                    l = a.bold,
                    m = d.toCoordinate(a.x, this.realWidth),
                    b = d.toCoordinate(b, this.realHeight);
                m || (m = 0);
                b || (b = 0);
                void 0 === e && (e = this.color);
                isNaN(f) && (f = this.fontSize);
                g || (g = "start");
                "left" == g && (g = "start");
                "right" == g && (g = "end");
                "center" == g && (g = "middle",
                    h ? b = this.realHeight - b + b / 2 : m = this.realWidth / 2 - m);
                void 0 === k && (k = 1);
                void 0 === h && (h = 0);
                b += f / 2;
                c = d.text(this.container, c, e, this.fontFamily, f, g, l, k);
                c.translate(m, b);
                d.setCN(this, c, "label");
                a.id && d.setCN(this, c, "label-" + a.id);
                0 !== h && c.rotate(h);
                a.url ? (c.setAttr("cursor", "pointer"), c.click(function () {
                    d.getURL(a.url)
                })) : c.node.style.pointerEvents = "none";
                this.labelsSet.push(c);
                this.labels.push(c)
            }
        },
        addLabel: function (a, b, c, d, f, e, h, k, l, m) {
            a = {
                x: a,
                y: b,
                text: c,
                align: d,
                size: f,
                color: e,
                alpha: k,
                rotation: h,
                bold: l,
                url: m,
                enabled: !0
            };
            this.container && this.drawLabel(a);
            this.allLabels.push(a)
        },
        clearLabels: function () {
            var a = this.labels,
                b;
            for (b = a.length - 1; 0 <= b; b--) a[b].remove();
            this.labels = [];
            this.allLabels = []
        },
        updateHeight: function () {
            var a = this.divRealHeight,
                b = this.legend;
            if (b) {
                var c = this.legendDiv.offsetHeight,
                    b = b.position;
                if ("top" == b || "bottom" == b) {
                    a -= c;
                    if (0 > a || isNaN(a)) a = 0;
                    this.chartDiv.style.height = a + "px"
                }
            }
            return a
        },
        updateWidth: function () {
            var a = this.divRealWidth,
                b = this.divRealHeight,
                c = this.legend;
            if (c) {
                var d = this.legendDiv,
                    f = d.offsetWidth;
                isNaN(c.width) || (f = c.width);
                c.ieW && (f = c.ieW);
                var e = d.offsetHeight,
                    d = d.style,
                    h = this.chartDiv.style,
                    c = c.position;
                if ("right" == c || "left" == c) {
                    a -= f;
                    if (0 > a || isNaN(a)) a = 0;
                    h.width = a + "px";
                    "left" == c ? (h.left = f + "px", d.left = "0px") : (h.left = "0px", d.left = a + "px");
                    b > e && (d.top = (b - e) / 2 + "px")
                }
            }
            return a
        },
        getTitleHeight: function () {
            var a = 0,
                b = this.titles,
                c = !0;
            if (0 < b.length) {
                var a = 20,
                    d;
                for (d = 0; d < b.length; d++) {
                    var f = b[d];
                    !1 !== f.enabled && (c = !1, f = f.size, isNaN(f) && (f = this.fontSize + 2), a += f + 6)
                }
                c && (a = 0)
            }
            return a
        },
        addTitle: function (a, b, c, d, f) {
            isNaN(b) && (b = this.fontSize + 2);
            a = {
                text: a,
                size: b,
                color: c,
                alpha: d,
                bold: f,
                enabled: !0
            };
            this.titles.push(a);
            return a
        },
        handleWheel: function (a) {
            var b = 0;
            a || (a = window.event);
            a.wheelDelta ? b = a.wheelDelta / 120 : a.detail && (b = -a.detail / 3);
            b && this.handleWheelReal(b, a.shiftKey);
            a.preventDefault && a.preventDefault()
        },
        handleWheelReal: function () {
        },
        addListeners: function () {
            var a = this,
                b = a.chartDiv;
            document.addEventListener ? (a.panEventsEnabled && (b.style.msTouchAction = "none"), "ontouchstart" in document.documentElement &&
            (b.addEventListener("touchstart", function (b) {
                a.handleTouchMove.call(a, b);
                a.handleTouchStart.call(a, b)
            }, !0), b.addEventListener("touchmove", function (b) {
                a.handleTouchMove.call(a, b)
            }, !0), b.addEventListener("touchend", function (b) {
                a.handleTouchEnd.call(a, b)
            }, !0)), b.addEventListener("mousedown", function (b) {
                a.mouseIsOver = !0;
                a.handleMouseMove.call(a, b);
                a.handleMouseDown.call(a, b)
            }, !0), b.addEventListener("mouseover", function (b) {
                a.handleMouseOver.call(a, b)
            }, !0), b.addEventListener("mouseout", function (b) {
                a.handleMouseOut.call(a,
                    b)
            }, !0)) : (b.attachEvent("onmousedown", function (b) {
                a.handleMouseDown.call(a, b)
            }), b.attachEvent("onmouseover", function (b) {
                a.handleMouseOver.call(a, b)
            }), b.attachEvent("onmouseout", function (b) {
                a.handleMouseOut.call(a, b)
            }))
        },
        dispDUpd: function () {
            if (!this.skipEvents) {
                var a;
                this.dispatchDataUpdated && (this.dispatchDataUpdated = !1, a = "dataUpdated", this.fire(a, {
                    type: a,
                    chart: this
                }));
                this.chartCreated || (a = "init", this.fire(a, {
                    type: a,
                    chart: this
                }));
                this.chartRendered || (a = "rendered", this.fire(a, {
                    type: a,
                    chart: this
                }),
                    this.chartRendered = !0);
                a = "drawn";
                this.fire(a, {
                    type: a,
                    chart: this
                })
            }
            this.skipEvents = !1
        },
        validateSize: function () {
            var a = this;
            a.premeasure();
            if (a.divRealWidth != a.previousWidth || a.divRealHeight != a.previousHeight) {
                var b = a.legend;
                if (0 < a.realWidth && 0 < a.realHeight) {
                    a.sizeChanged = !0;
                    if (b) {
                        clearTimeout(a.legendInitTO);
                        var c = setTimeout(function () {
                            b.invalidateSize()
                        }, 100);
                        a.timeOuts.push(c);
                        a.legendInitTO = c
                    }
                    "xy" != a.type ? a.marginsUpdated = !1 : (a.marginsUpdated = !0, a.selfZoom = !0);
                    clearTimeout(a.initTO);
                    c = setTimeout(function () {
                            a.initChart()
                        },
                        10);
                    a.timeOuts.push(c);
                    a.initTO = c
                }
                a.fire("resized", {
                    type: "resized",
                    chart: a
                });
                a.renderFix();
                b && b.renderFix && b.renderFix();
                a.previousHeight = a.divRealHeight;
                a.previousWidth = a.divRealWidth
            }
        },
        invalidateSize: function () {
            this.previousHeight = this.previousWidth = NaN;
            this.invalidateSizeReal()
        },
        invalidateSizeReal: function () {
            var a = this;
            a.marginsUpdated = !1;
            clearTimeout(a.validateTO);
            var b = setTimeout(function () {
                a.validateSize()
            }, 5);
            a.timeOuts.push(b);
            a.validateTO = b
        },
        validateData: function (a) {
            this.chartCreated && (this.dataChanged = !0, this.marginsUpdated = "xy" != this.type ? !1 : !0, this.initChart(a))
        },
        validateNow: function (a, b) {
            this.initTO && clearTimeout(this.initTO);
            a && (this.dataChanged = !0);
            this.skipEvents = b;
            this.chartRendered = !1;
            this.write(this.div)
        },
        showItem: function (a) {
            a.hidden = !1;
            this.initChart()
        },
        hideItem: function (a) {
            a.hidden = !0;
            this.initChart()
        },
        hideBalloon: function () {
            var a = this;
            clearTimeout(a.hoverInt);
            clearTimeout(a.balloonTO);
            a.hoverInt = setTimeout(function () {
                a.hideBalloonReal.call(a)
            }, a.hideBalloonTime)
        },
        cleanChart: function () {
        },
        hideBalloonReal: function () {
            var a = this.balloon;
            a && a.hide()
        },
        showBalloon: function (a, b, c, d, f) {
            var e = this;
            clearTimeout(e.balloonTO);
            clearTimeout(e.hoverInt);
            e.balloonTO = setTimeout(function () {
                e.showBalloonReal.call(e, a, b, c, d, f)
            }, 1)
        },
        showBalloonReal: function (a, b, c, d, f) {
            this.handleMouseMove();
            var e = this.balloon;
            e.enabled && (e.followCursor(!1), e.changeColor(b), !c || e.fixedPosition ? (e.setPosition(d, f), e.followCursor(!1)) : e.followCursor(!0), a && e.showBalloon(a))
        },
        handleTouchMove: function (a) {
            this.hideBalloon();
            var b = this.chartDiv;
            a.touches && (a = a.touches.item(0), this.mouseX = a.pageX - d.findPosX(b), this.mouseY = a.pageY - d.findPosY(b))
        },
        handleMouseOver: function () {
            this.outTO && clearTimeout(this.outTO);
            d.resetMouseOver();
            this.mouseIsOver = !0
        },
        handleMouseOut: function () {
            var a = this;
            a.outTO && clearTimeout(a.outTO);
            a.outTO = setTimeout(function () {
                a.handleMouseOutReal()
            }, 10)
        },
        handleMouseOutReal: function () {
            d.resetMouseOver();
            this.mouseIsOver = !1
        },
        handleMouseMove: function (a) {
            if (this.mouseIsOver) {
                var b = this.chartDiv;
                a || (a = window.event);
                var c, g;
                if (a) {
                    this.posX = d.findPosX(b);
                    this.posY = d.findPosY(b);
                    switch (this.mouseMode) {
                        case 1:
                            c = a.clientX - this.posX;
                            g = a.clientY - this.posY;
                            if (!this.divIsFixed) {
                                var b = document.body,
                                    f, e, h, k;
                                b && (f = b.scrollLeft, h = b.scrollTop);
                                if (b = document.documentElement) e = b.scrollLeft, k = b.scrollTop;
                                f = Math.max(f, e);
                                h = Math.max(h, k);
                                c += f;
                                g += h
                            }
                            break;
                        case 0:
                            this.divIsFixed ? (c = a.clientX - this.posX, g = a.clientY - this.posY) : (c = a.pageX - this.posX, g = a.pageY - this.posY)
                    }
                    a.touches && (a = a.touches.item(0), c = a.pageX - this.posX, g = a.pageY - this.posY);
                    this.mouseX = c - this.dmouseX;
                    this.mouseY = g - this.dmouseY
                }
            }
        },
        handleTouchStart: function (a) {
            this.handleMouseDown(a)
        },
        handleTouchEnd: function (a) {
            d.resetMouseOver();
            this.handleReleaseOutside(a)
        },
        handleReleaseOutside: function () {
        },
        handleMouseDown: function (a) {
            d.resetMouseOver();
            this.mouseIsOver = !0;
            a && a.preventDefault && (this.panEventsEnabled ? a.preventDefault() : a.touches || a.preventDefault())
        },
        addLegend: function (a, b) {
            a = d.processObject(a, d.AmLegend, this.theme);
            a.divId = b;
            var c;
            c = "object" != typeof b && b ? document.getElementById(b) :
                b;
            this.legend = a;
            a.chart = this;
            c ? (a.div = c, a.position = "outside", a.autoMargins = !1) : a.div = this.legendDiv;
            c = this.handleLegendEvent;
            this.listenTo(a, "showItem", c);
            this.listenTo(a, "hideItem", c);
            this.listenTo(a, "clickMarker", c);
            this.listenTo(a, "rollOverItem", c);
            this.listenTo(a, "rollOutItem", c);
            this.listenTo(a, "rollOverMarker", c);
            this.listenTo(a, "rollOutMarker", c);
            this.listenTo(a, "clickLabel", c);
            return a
        },
        removeLegend: function () {
            this.legend = void 0;
            this.legendDiv.innerHTML = ""
        },
        handleResize: function () {
            (d.isPercents(this.width) ||
            d.isPercents(this.height)) && this.invalidateSizeReal();
            this.renderFix()
        },
        renderFix: function () {
            if (!d.VML) {
                var a = this.container;
                a && a.renderFix()
            }
        },
        getSVG: function () {
            if (d.hasSVG) return this.container
        },
        animate: function (a, b, c, g, f, e, h) {
            a["an_" + b] && d.removeFromArray(this.animations, a["an_" + b]);
            c = {
                obj: a,
                frame: 0,
                attribute: b,
                from: c,
                to: g,
                time: f,
                effect: e,
                suffix: h
            };
            a["an_" + b] = c;
            this.animations.push(c);
            return c
        },
        setLegendData: function (a) {
            var b = this.legend;
            b && b.setData(a)
        },
        stopAnim: function (a) {
            d.removeFromArray(this.animations,
                a)
        },
        updateAnimations: function () {
            var a;
            this.container && this.container.update();
            if (this.animations)
                for (a = this.animations.length - 1; 0 <= a; a--) {
                    var b = this.animations[a],
                        c = 1E3 * b.time / d.updateRate,
                        g = b.frame + 1,
                        f = b.obj,
                        e = b.attribute;
                    if (g <= c) {
                        b.frame++;
                        var h = Number(b.from),
                            k = Number(b.to) - h,
                            c = d[b.effect](0, g, h, k, c);
                        0 === k ? (this.animations.splice(a, 1), f.node.style[e] = Number(b.to) + b.suffix) : f.node.style[e] = c + b.suffix
                    } else f.node.style[e] = Number(b.to) + b.suffix, this.animations.splice(a, 1)
                }
        },
        update: function () {
            this.updateAnimations()
        },
        inIframe: function () {
            try {
                return window.self !== window.top
            } catch (a) {
                return !0
            }
        },
        brr: function () {
            var a = window.location.hostname.split("."),
                b;
            2 <= a.length && (b = a[a.length - 2] + "." + a[a.length - 1]);
            this.amLink && (a = this.amLink.parentNode) && a.removeChild(this.amLink);
            a = this.creditsPosition;
            if ("amcharts.com" != b || !0 === this.inIframe()) {
                var c = b = 0,
                    d = this.realWidth,
                    f = this.realHeight,
                    e = this.type;
                if ("serial" == e || "xy" == e || "gantt" == e) b = this.marginLeftReal, c = this.marginTopReal, d = b + this.plotAreaWidth, f = c + this.plotAreaHeight;
                var h = "http://www.amcharts.com/javascript-charts/",
                    k = "JavaScript charts",
                    l = "JS chart by amCharts";
                "ammap" == this.product && (h = "http://www.ammap.com/javascript-maps/", k = "Interactive JavaScript maps", l = "JS map by amCharts");
                e = document.createElement("a");
                l = document.createTextNode(l);
                e.setAttribute("href", h);
                e.setAttribute("title", k);
                e.appendChild(l);
                this.chartDiv.appendChild(e);
                this.amLink = e;
                h = e.style;
                h.position = "absolute";
                h.textDecoration = "none";
                h.color = this.color;
                h.fontFamily = this.fontFamily;
                h.fontSize =
                    this.fontSize + "px";
                h.opacity = .7;
                h.display = "block";
                var k = e.offsetWidth,
                    e = e.offsetHeight,
                    l = 5 + b,
                    m = c + 5;
                "bottom-left" == a && (l = 5 + b, m = f - e - 3);
                "bottom-right" == a && (l = d - k - 5, m = f - e - 3);
                "top-right" == a && (l = d - k - 5, m = c + 5);
                h.left = l + "px";
                h.top = m + "px"
            }
        }
    });
    d.Slice = d.Class({
        construct: function () {
        }
    });
    d.SerialDataItem = d.Class({
        construct: function () {
        }
    });
    d.GraphDataItem = d.Class({
        construct: function () {
        }
    });
    d.Guide = d.Class({
        construct: function (a) {
            this.cname = "Guide";
            d.applyTheme(this, a, this.cname)
        }
    });
    d.Title = d.Class({
        construct: function (a) {
            this.cname =
                "Title";
            d.applyTheme(this, a, this.cname)
        }
    });
    d.Label = d.Class({
        construct: function (a) {
            this.cname = "Label";
            d.applyTheme(this, a, this.cname)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.AmBalloon = d.Class({
        construct: function (a) {
            this.cname = "AmBalloon";
            this.enabled = !0;
            this.fillColor = "#FFFFFF";
            this.fillAlpha = .8;
            this.borderThickness = 2;
            this.borderColor = "#FFFFFF";
            this.borderAlpha = 1;
            this.cornerRadius = 0;
            this.maxWidth = 220;
            this.horizontalPadding = 8;
            this.verticalPadding = 4;
            this.pointerWidth = 6;
            this.pointerOrientation = "V";
            this.color = "#000000";
            this.adjustBorderColor = !0;
            this.show = this.follow = this.showBullet = !1;
            this.bulletSize = 3;
            this.shadowAlpha = .4;
            this.shadowColor =
                "#000000";
            this.fadeOutDuration = this.animationDuration = .3;
            this.fixedPosition = !1;
            this.offsetY = 6;
            this.offsetX = 1;
            this.textAlign = "center";
            d.isModern || (this.offsetY *= 1.5);
            d.applyTheme(this, a, this.cname)
        },
        draw: function () {
            var a = this.pointToX,
                b = this.pointToY;
            this.deltaSignX = this.deltaSignY = 1;
            var c = this.chart;
            d.VML && (this.fadeOutDuration = 0);
            this.xAnim && c.stopAnim(this.xAnim);
            this.yAnim && c.stopAnim(this.yAnim);
            if (!isNaN(a)) {
                var g = this.follow,
                    f = c.container,
                    e = this.set;
                d.remove(e);
                this.removeDiv();
                e = f.set();
                e.node.style.pointerEvents =
                    "none";
                this.set = e;
                c.balloonsSet.push(e);
                if (this.show) {
                    var h = this.l,
                        k = this.t,
                        l = this.r,
                        m = this.b,
                        n = this.balloonColor,
                        q = this.fillColor,
                        u = this.borderColor,
                        p = q;
                    void 0 != n && (this.adjustBorderColor ? p = u = n : q = n);
                    var z = this.horizontalPadding,
                        C = this.verticalPadding,
                        w = this.pointerWidth,
                        D = this.pointerOrientation,
                        x = this.cornerRadius,
                        A = c.fontFamily,
                        r = this.fontSize;
                    void 0 == r && (r = c.fontSize);
                    var n = document.createElement("div"),
                        v = c.classNamePrefix;
                    n.className = v + "-balloon-div";
                    this.className && (n.className = n.className +
                    " " + v + "-balloon-div-" + this.className);
                    v = n.style;
                    v.pointerEvents = "none";
                    v.position = "absolute";
                    var t = this.minWidth,
                        y = "";
                    isNaN(t) || (y = "min-width:" + (t - 2 * z) + "px; ");
                    n.innerHTML = "<div style='text-align:" + this.textAlign + "; " + y + "max-width:" + this.maxWidth + "px; font-size:" + r + "px; color:" + this.color + "; font-family:" + A + "'>" + this.text + "</div>";
                    c.chartDiv.appendChild(n);
                    this.textDiv = n;
                    r = n.offsetWidth;
                    A = n.offsetHeight;
                    n.clientHeight && (r = n.clientWidth, A = n.clientHeight);
                    A += 2 * C;
                    y = r + 2 * z;
                    !isNaN(t) && y < t && (y = t);
                    window.opera &&
                    (A += 2);
                    var E = !1,
                        r = this.offsetY;
                    c.handDrawn && (r += c.handDrawScatter + 2);
                    "H" != D ? (t = a - y / 2, b < k + A + 10 && "down" != D ? (E = !0, g && (b += r), r = b + w, this.deltaSignY = -1) : (g && (b -= r), r = b - A - w, this.deltaSignY = 1)) : (2 * w > A && (w = A / 2), r = b - A / 2, a < h + (l - h) / 2 ? (t = a + w, this.deltaSignX = -1) : (t = a - y - w, this.deltaSignX = 1));
                    r + A >= m && (r = m - A);
                    r < k && (r = k);
                    t < h && (t = h);
                    t + y > l && (t = l - y);
                    var k = r + C,
                        m = t + z,
                        C = this.shadowAlpha,
                        G = this.shadowColor,
                        z = this.borderThickness,
                        F = this.bulletSize,
                        B;
                    0 < x || 0 === w ? (0 < C && (a = d.rect(f, y, A, q, 0, z + 1, G, C, this.cornerRadius), d.isModern ?
                        a.translate(1, 1) : a.translate(4, 4), e.push(a)), q = d.rect(f, y, A, q, this.fillAlpha, z, u, this.borderAlpha, this.cornerRadius), this.showBullet && (B = d.circle(f, F, p, this.fillAlpha), e.push(B))) : (p = [], x = [], "H" != D ? (h = a - t, h > y - w && (h = y - w), h < w && (h = w), p = [0, h - w, a - t, h + w, y, y, 0, 0], x = E ? [0, 0, b - r, 0, 0, A, A, 0] : [A, A, b - r, A, A, 0, 0, A]) : (p = b - r, p > A - w && (p = A - w), p < w && (p = w), x = [0, p - w, b - r, p + w, A, A, 0, 0], p = a < h + (l - h) / 2 ? [0, 0, t < a ? 0 : a - t, 0, 0, y, y, 0] : [y, y, t + y > a ? y : a - t, y, y, 0, 0, y]), 0 < C && (a = d.polygon(f, p, x, q, 0, z, G, C), a.translate(1, 1), e.push(a)), q = d.polygon(f,
                        p, x, q, this.fillAlpha, z, u, this.borderAlpha));
                    this.bg = q;
                    e.push(q);
                    q.toFront();
                    d.setCN(c, q, "balloon-bg");
                    this.className && d.setCN(c, q, "balloon-bg-" + this.className);
                    f = 1 * this.deltaSignX;
                    v.left = m + "px";
                    v.top = k + "px";
                    e.translate(t - f, r);
                    q = q.getBBox();
                    this.bottom = r + A + 1;
                    this.yPos = q.y + r;
                    B && B.translate(this.pointToX - t + f, b - r);
                    b = this.animationDuration;
                    0 < this.animationDuration && !g && !isNaN(this.prevX) && (e.translate(this.prevX, this.prevY), e.animate({
                        translate: t - f + "," + r
                    }, b, "easeOutSine"), n && (v.left = this.prevTX + "px", v.top =
                        this.prevTY + "px", this.xAnim = c.animate({
                        node: n
                    }, "left", this.prevTX, m, b, "easeOutSine", "px"), this.yAnim = c.animate({
                        node: n
                    }, "top", this.prevTY, k, b, "easeOutSine", "px")));
                    this.prevX = t - f;
                    this.prevY = r;
                    this.prevTX = m;
                    this.prevTY = k
                }
            }
        },
        followMouse: function () {
            if (this.follow && this.show) {
                var a = this.chart.mouseX - this.offsetX * this.deltaSignX,
                    b = this.chart.mouseY;
                this.pointToX = a;
                this.pointToY = b;
                if (a != this.previousX || b != this.previousY)
                    if (this.previousX = a, this.previousY = b, 0 === this.cornerRadius) this.draw();
                    else {
                        var c = this.set;
                        if (c) {
                            var d = c.getBBox(),
                                a = a - d.width / 2,
                                f = b - d.height - 10;
                            a < this.l && (a = this.l);
                            a > this.r - d.width && (a = this.r - d.width);
                            f < this.t && (f = b + 10);
                            c.translate(a, f);
                            b = this.textDiv.style;
                            b.left = a + this.horizontalPadding + "px";
                            b.top = f + this.verticalPadding + "px"
                        }
                    }
            }
        },
        changeColor: function (a) {
            this.balloonColor = a
        },
        setBounds: function (a, b, c, d) {
            this.l = a;
            this.t = b;
            this.r = c;
            this.b = d;
            this.destroyTO && clearTimeout(this.destroyTO)
        },
        showBalloon: function (a) {
            this.text = a;
            this.show = !0;
            this.destroyTO && clearTimeout(this.destroyTO);
            a = this.chart;
            this.fadeAnim1 && a.stopAnim(this.fadeAnim1);
            this.fadeAnim2 && a.stopAnim(this.fadeAnim2);
            this.draw()
        },
        hide: function () {
            var a = this,
                b = a.fadeOutDuration,
                c = a.chart;
            if (0 < b) {
                a.destroyTO = setTimeout(function () {
                    a.destroy.call(a)
                }, 1E3 * b);
                a.follow = !1;
                a.show = !1;
                var d = a.set;
                d && (d.setAttr("opacity", a.fillAlpha), a.fadeAnim1 = d.animate({
                    opacity: 0
                }, b, "easeInSine"));
                a.textDiv && (a.fadeAnim2 = c.animate({
                    node: a.textDiv
                }, "opacity", 1, 0, b, "easeInSine", ""))
            } else a.show = !1, a.follow = !1, a.destroy()
        },
        setPosition: function (a, b, c) {
            this.pointToX =
                a;
            this.pointToY = b;
            c && (a == this.previousX && b == this.previousY || this.draw());
            this.previousX = a;
            this.previousY = b
        },
        followCursor: function (a) {
            var b = this;
            (b.follow = a) ? (b.pShowBullet = b.showBullet, b.showBullet = !1) : void 0 !== b.pShowBullet && (b.showBullet = b.pShowBullet);
            clearInterval(b.interval);
            var c = b.chart.mouseX,
                d = b.chart.mouseY;
            !isNaN(c) && a && (b.pointToX = c - b.offsetX * b.deltaSignX, b.pointToY = d, b.followMouse(), b.interval = setInterval(function () {
                b.followMouse.call(b)
            }, 40))
        },
        removeDiv: function () {
            if (this.textDiv) {
                var a =
                    this.textDiv.parentNode;
                a && a.removeChild(this.textDiv)
            }
        },
        destroy: function () {
            clearInterval(this.interval);
            d.remove(this.set);
            this.removeDiv();
            this.set = null
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.circle = function (a, b, c, g, f, e, h, k, l) {
        0 >= b && (b = .001);
        if (void 0 == f || 0 === f) f = .01;
        void 0 === e && (e = "#000000");
        void 0 === h && (h = 0);
        g = {
            fill: c,
            stroke: e,
            "fill-opacity": g,
            "stroke-width": f,
            "stroke-opacity": h
        };
        a = isNaN(l) ? a.circle(0, 0, b).attr(g) : a.ellipse(0, 0, b, l).attr(g);
        k && a.gradient("radialGradient", [c, d.adjustLuminosity(c, -.6)]);
        return a
    };
    d.text = function (a, b, c, g, f, e, h, k) {
        e || (e = "middle");
        "right" == e && (e = "end");
        "left" == e && (e = "start");
        isNaN(k) && (k = 1);
        void 0 !== b && (b = String(b), d.isIE && !d.isModern && (b = b.replace("&amp;", "&"), b = b.replace("&", "&amp;")));
        c = {
            fill: c,
            "font-family": g,
            "font-size": f,
            opacity: k
        };
        !0 === h && (c["font-weight"] = "bold");
        c["text-anchor"] = e;
        return a.text(b, c)
    };
    d.polygon = function (a, b, c, g, f, e, h, k, l, m, n) {
        isNaN(e) && (e = .01);
        isNaN(k) && (k = f);
        var q = g,
            u = !1;
        "object" == typeof q && 1 < q.length && (u = !0, q = q[0]);
        void 0 === h && (h = q);
        f = {
            fill: q,
            stroke: h,
            "fill-opacity": f,
            "stroke-width": e,
            "stroke-opacity": k
        };
        void 0 !== n && 0 < n && (f["stroke-dasharray"] = n);
        n = d.dx;
        e = d.dy;
        a.handDrawn && (c = d.makeHD(b, c,
            a.handDrawScatter), b = c[0], c = c[1]);
        h = Math.round;
        m && (h = d.doNothing);
        m = "M" + (h(b[0]) + n) + "," + (h(c[0]) + e);
        for (k = 1; k < b.length; k++) m += " L" + (h(b[k]) + n) + "," + (h(c[k]) + e);
        a = a.path(m + " Z").attr(f);
        u && a.gradient("linearGradient", g, l);
        return a
    };
    d.rect = function (a, b, c, g, f, e, h, k, l, m, n) {
        if (isNaN(b) || isNaN(c)) return a.set();
        isNaN(e) && (e = 0);
        void 0 === l && (l = 0);
        void 0 === m && (m = 270);
        isNaN(f) && (f = 0);
        var q = g,
            u = !1;
        "object" == typeof q && (q = q[0], u = !0);
        void 0 === h && (h = q);
        void 0 === k && (k = f);
        b = Math.round(b);
        c = Math.round(c);
        var p = 0,
            z =
                0;
        0 > b && (b = Math.abs(b), p = -b);
        0 > c && (c = Math.abs(c), z = -c);
        p += d.dx;
        z += d.dy;
        f = {
            fill: q,
            stroke: h,
            "fill-opacity": f,
            "stroke-opacity": k
        };
        void 0 !== n && 0 < n && (f["stroke-dasharray"] = n);
        a = a.rect(p, z, b, c, l, e).attr(f);
        u && a.gradient("linearGradient", g, m);
        return a
    };
    d.bullet = function (a, b, c, g, f, e, h, k, l, m, n, q) {
        var u;
        "circle" == b && (b = "round");
        switch (b) {
            case "round":
                u = d.circle(a, c / 2, g, f, e, h, k);
                break;
            case "square":
                u = d.polygon(a, [-c / 2, c / 2, c / 2, -c / 2], [c / 2, c / 2, -c / 2, -c / 2], g, f, e, h, k, m - 180);
                break;
            case "rectangle":
                u = d.polygon(a, [-c,
                    c, c, -c
                ], [c / 2, c / 2, -c / 2, -c / 2], g, f, e, h, k, m - 180);
                break;
            case "diamond":
                u = d.polygon(a, [-c / 2, 0, c / 2, 0], [0, -c / 2, 0, c / 2], g, f, e, h, k);
                break;
            case "triangleUp":
                u = d.triangle(a, c, 0, g, f, e, h, k);
                break;
            case "triangleDown":
                u = d.triangle(a, c, 180, g, f, e, h, k);
                break;
            case "triangleLeft":
                u = d.triangle(a, c, 270, g, f, e, h, k);
                break;
            case "triangleRight":
                u = d.triangle(a, c, 90, g, f, e, h, k);
                break;
            case "bubble":
                u = d.circle(a, c / 2, g, f, e, h, k, !0);
                break;
            case "line":
                u = d.line(a, [-c / 2, c / 2], [0, 0], g, f, e, h, k);
                break;
            case "yError":
                u = a.set();
                u.push(d.line(a, [0, 0], [-c / 2, c / 2], g, f, e));
                u.push(d.line(a, [-l, l], [-c / 2, -c / 2], g, f, e));
                u.push(d.line(a, [-l, l], [c / 2, c / 2], g, f, e));
                break;
            case "xError":
                u = a.set(), u.push(d.line(a, [-c / 2, c / 2], [0, 0], g, f, e)), u.push(d.line(a, [-c / 2, -c / 2], [-l, l], g, f, e)), u.push(d.line(a, [c / 2, c / 2], [-l, l], g, f, e))
        }
        u && u.pattern(n, NaN, q);
        return u
    };
    d.triangle = function (a, b, c, d, f, e, h, k) {
        if (void 0 === e || 0 === e) e = 1;
        void 0 === h && (h = "#000");
        void 0 === k && (k = 0);
        d = {
            fill: d,
            stroke: h,
            "fill-opacity": f,
            "stroke-width": e,
            "stroke-opacity": k
        };
        b /= 2;
        var l;
        0 === c && (l = " M" + -b +
        "," + b + " L0," + -b + " L" + b + "," + b + " Z");
        180 == c && (l = " M" + -b + "," + -b + " L0," + b + " L" + b + "," + -b + " Z");
        90 == c && (l = " M" + -b + "," + -b + " L" + b + ",0 L" + -b + "," + b + " Z");
        270 == c && (l = " M" + -b + ",0 L" + b + "," + b + " L" + b + "," + -b + " Z");
        return a.path(l).attr(d)
    };
    d.line = function (a, b, c, g, f, e, h, k, l, m, n) {
        if (a.handDrawn && !n) return d.handDrawnLine(a, b, c, g, f, e, h, k, l, m, n);
        e = {
            fill: "none",
            "stroke-width": e
        };
        void 0 !== h && 0 < h && (e["stroke-dasharray"] = h);
        isNaN(f) || (e["stroke-opacity"] = f);
        g && (e.stroke = g);
        g = Math.round;
        m && (g = d.doNothing);
        m = d.dx;
        f = d.dy;
        h =
            "M" + (g(b[0]) + m) + "," + (g(c[0]) + f);
        for (k = 1; k < b.length; k++) h += " L" + (g(b[k]) + m) + "," + (g(c[k]) + f);
        if (d.VML) return a.path(h, void 0, !0).attr(e);
        l && (h += " M0,0 L0,0");
        return a.path(h).attr(e)
    };
    d.makeHD = function (a, b, c) {
        for (var d = [], f = [], e = 1; e < a.length; e++)
            for (var h = Number(a[e - 1]), k = Number(b[e - 1]), l = Number(a[e]), m = Number(b[e]), n = Math.sqrt(Math.pow(l - h, 2) + Math.pow(m - k, 2)), n = Math.round(n / 50) + 1, l = (l - h) / n, m = (m - k) / n, q = 0; q <= n; q++) {
                var u = h + q * l + Math.random() * c,
                    p = k + q * m + Math.random() * c;
                d.push(u);
                f.push(p)
            }
        return [d, f]
    };
    d.handDrawnLine = function (a, b, c, g, f, e, h, k, l, m) {
        var n, q = a.set();
        for (n = 1; n < b.length; n++)
            for (var u = [b[n - 1], b[n]], p = [c[n - 1], c[n]], p = d.makeHD(u, p, a.handDrawScatter), u = p[0], p = p[1], z = 1; z < u.length; z++) q.push(d.line(a, [u[z - 1], u[z]], [p[z - 1], p[z]], g, f, e + Math.random() * a.handDrawThickness - a.handDrawThickness / 2, h, k, l, m, !0));
        return q
    };
    d.doNothing = function (a) {
        return a
    };
    d.wedge = function (a, b, c, g, f, e, h, k, l, m, n, q, u) {
        var p = Math.round;
        e = p(e);
        h = p(h);
        k = p(k);
        var z = p(h / e * k),
            C = d.VML,
            w = 359.5 + e / 100;
        359.94 < w && (w = 359.94);
        f >= w &&
        (f = w);
        var D = 1 / 180 * Math.PI,
            w = b + Math.sin(g * D) * k,
            x = c - Math.cos(g * D) * z,
            A = b + Math.sin(g * D) * e,
            r = c - Math.cos(g * D) * h,
            v = b + Math.sin((g + f) * D) * e,
            t = c - Math.cos((g + f) * D) * h,
            y = b + Math.sin((g + f) * D) * k,
            D = c - Math.cos((g + f) * D) * z,
            E = {
                fill: d.adjustLuminosity(m.fill, -.2),
                "stroke-opacity": 0,
                "fill-opacity": m["fill-opacity"]
            },
            G = 0;
        180 < Math.abs(f) && (G = 1);
        g = a.set();
        var F;
        C && (w = p(10 * w), A = p(10 * A), v = p(10 * v), y = p(10 * y), x = p(10 * x), r = p(10 * r), t = p(10 * t), D = p(10 * D), b = p(10 * b), l = p(10 * l), c = p(10 * c), e *= 10, h *= 10, k *= 10, z *= 10, 1 > Math.abs(f) && 1 >= Math.abs(v -
        A) && 1 >= Math.abs(t - r) && (F = !0));
        f = "";
        var B;
        q && (E["fill-opacity"] = 0, E["stroke-opacity"] = m["stroke-opacity"] / 2, E.stroke = m.stroke);
        0 < l && (B = " M" + w + "," + (x + l) + " L" + A + "," + (r + l), C ? (F || (B += " A" + (b - e) + "," + (l + c - h) + "," + (b + e) + "," + (l + c + h) + "," + A + "," + (r + l) + "," + v + "," + (t + l)), B += " L" + y + "," + (D + l), 0 < k && (F || (B += " B" + (b - k) + "," + (l + c - z) + "," + (b + k) + "," + (l + c + z) + "," + y + "," + (l + D) + "," + w + "," + (l + x)))) : (B += " A" + e + "," + h + ",0," + G + ",1," + v + "," + (t + l) + " L" + y + "," + (D + l), 0 < k && (B += " A" + k + "," + z + ",0," + G + ",0," + w + "," + (x + l))), B = a.path(B + " Z", void 0,
            void 0, "1000,1000").attr(E), g.push(B), B = a.path(" M" + w + "," + x + " L" + w + "," + (x + l) + " L" + A + "," + (r + l) + " L" + A + "," + r + " L" + w + "," + x + " Z", void 0, void 0, "1000,1000").attr(E), l = a.path(" M" + v + "," + t + " L" + v + "," + (t + l) + " L" + y + "," + (D + l) + " L" + y + "," + D + " L" + v + "," + t + " Z", void 0, void 0, "1000,1000").attr(E), g.push(B), g.push(l));
        C ? (F || (f = " A" + p(b - e) + "," + p(c - h) + "," + p(b + e) + "," + p(c + h) + "," + p(A) + "," + p(r) + "," + p(v) + "," + p(t)), e = " M" + p(w) + "," + p(x) + " L" + p(A) + "," + p(r) + f + " L" + p(y) + "," + p(D)) : e = " M" + w + "," + x + " L" + A + "," + r + (" A" + e + "," + h + ",0," +
        G + ",1," + v + "," + t) + " L" + y + "," + D;
        0 < k && (C ? F || (e += " B" + (b - k) + "," + (c - z) + "," + (b + k) + "," + (c + z) + "," + y + "," + D + "," + w + "," + x) : e += " A" + k + "," + z + ",0," + G + ",0," + w + "," + x);
        a.handDrawn && (b = d.line(a, [w, A], [x, r], m.stroke, m.thickness * Math.random() * a.handDrawThickness, m["stroke-opacity"]), g.push(b));
        a = a.path(e + " Z", void 0, void 0, "1000,1000").attr(m);
        if (n) {
            b = [];
            for (c = 0; c < n.length; c++) b.push(d.adjustLuminosity(m.fill, n[c]));
            0 < b.length && a.gradient("linearGradient", b)
        }
        a.pattern(q, NaN, u);
        g.wedge = a;
        g.push(a);
        return g
    };
    d.adjustLuminosity =
        function (a, b) {
            a = String(a).replace(/[^0-9a-f]/gi, "");
            6 > a.length && (a = String(a[0]) + String(a[0]) + String(a[1]) + String(a[1]) + String(a[2]) + String(a[2]));
            b = b || 0;
            var c = "#",
                d, f;
            for (f = 0; 3 > f; f++) d = parseInt(a.substr(2 * f, 2), 16), d = Math.round(Math.min(Math.max(0, d + d * b), 255)).toString(16), c += ("00" + d).substr(d.length);
            return c
        }
})();
(function () {
    var d = window.AmCharts;
    d.AmLegend = d.Class({
        construct: function (a) {
            this.enabled = !0;
            this.cname = "AmLegend";
            this.createEvents("rollOverMarker", "rollOverItem", "rollOutMarker", "rollOutItem", "showItem", "hideItem", "clickMarker", "rollOverItem", "rollOutItem", "clickLabel");
            this.position = "bottom";
            this.borderColor = this.color = "#000000";
            this.borderAlpha = 0;
            this.markerLabelGap = 5;
            this.verticalGap = 10;
            this.align = "left";
            this.horizontalGap = 0;
            this.spacing = 10;
            this.markerDisabledColor = "#AAB3B3";
            this.markerType =
                "square";
            this.markerSize = 16;
            this.markerBorderThickness = this.markerBorderAlpha = 1;
            this.marginBottom = this.marginTop = 0;
            this.marginLeft = this.marginRight = 20;
            this.autoMargins = !0;
            this.valueWidth = 50;
            this.switchable = !0;
            this.switchType = "x";
            this.switchColor = "#FFFFFF";
            this.rollOverColor = "#CC0000";
            this.reversedOrder = !1;
            this.labelText = "[[title]]";
            this.valueText = "[[value]]";
            this.useMarkerColorForLabels = !1;
            this.rollOverGraphAlpha = 1;
            this.textClickEnabled = !1;
            this.equalWidths = !0;
            this.dateFormat = "DD-MM-YYYY";
            this.backgroundColor =
                "#FFFFFF";
            this.backgroundAlpha = 0;
            this.useGraphSettings = !1;
            this.showEntries = !0;
            d.applyTheme(this, a, this.cname)
        },
        setData: function (a) {
            this.legendData = a;
            this.invalidateSize()
        },
        invalidateSize: function () {
            this.destroy();
            this.entries = [];
            this.valueLabels = [];
            var a = this.legendData;
            this.enabled && (d.ifArray(a) || d.ifArray(this.data)) && this.drawLegend()
        },
        drawLegend: function () {
            var a = this.chart,
                b = this.position,
                c = this.width,
                g = a.divRealWidth,
                f = a.divRealHeight,
                e = this.div,
                h = this.legendData;
            this.data && (h = this.data);
            isNaN(this.fontSize) &&
            (this.fontSize = a.fontSize);
            if ("right" == b || "left" == b) this.maxColumns = 1, this.autoMargins && (this.marginLeft = this.marginRight = 10);
            else if (this.autoMargins) {
                this.marginRight = a.marginRight;
                this.marginLeft = a.marginLeft;
                var k = a.autoMarginOffset;
                "bottom" == b ? (this.marginBottom = k, this.marginTop = 0) : (this.marginTop = k, this.marginBottom = 0)
            }
            c = void 0 !== c ? d.toCoordinate(c, g) : a.realWidth;
            "outside" == b ? (c = e.offsetWidth, f = e.offsetHeight, e.clientHeight && (c = e.clientWidth, f = e.clientHeight)) : (isNaN(c) || (e.style.width = c + "px"),
                e.className = "amChartsLegend " + a.classNamePrefix + "-legend-div");
            this.divWidth = c;
            (b = this.container) ? (b.container.innerHTML = "", e.appendChild(b.container), b.width = c, b.height = f, b.addDefs(a)) : b = new d.AmDraw(e, c, f, a);
            this.container = b;
            this.lx = 0;
            this.ly = 8;
            f = this.markerSize;
            f > this.fontSize && (this.ly = f / 2 - 1);
            0 < f && (this.lx += f + this.markerLabelGap);
            this.titleWidth = 0;
            if (f = this.title) f = d.text(this.container, f, this.color, a.fontFamily, this.fontSize, "start", !0), d.setCN(a, f, "legend-title"), f.translate(this.marginLeft,
                this.marginTop + this.verticalGap + this.ly + 1), a = f.getBBox(), this.titleWidth = a.width + 15, this.titleHeight = a.height + 6;
            this.index = this.maxLabelWidth = 0;
            if (this.showEntries) {
                for (a = 0; a < h.length; a++) this.createEntry(h[a]);
                for (a = this.index = 0; a < h.length; a++) this.createValue(h[a])
            }
            this.arrangeEntries();
            this.updateValues()
        },
        arrangeEntries: function () {
            var a = this.position,
                b = this.marginLeft + this.titleWidth,
                c = this.marginRight,
                g = this.marginTop,
                f = this.marginBottom,
                e = this.horizontalGap,
                h = this.div,
                k = this.divWidth,
                l = this.maxColumns,
                m = this.verticalGap,
                n = this.spacing,
                q = k - c - b,
                u = 0,
                p = 0,
                z = this.container;
            this.set && this.set.remove();
            var C = z.set();
            this.set = C;
            var w = z.set();
            C.push(w);
            var D = this.entries,
                x, A;
            for (A = 0; A < D.length; A++) {
                x = D[A].getBBox();
                var r = x.width;
                r > u && (u = r);
                x = x.height;
                x > p && (p = x)
            }
            var r = p = 0,
                v = e,
                t = 0,
                y = 0;
            for (A = 0; A < D.length; A++) {
                var E = D[A];
                this.reversedOrder && (E = D[D.length - A - 1]);
                x = E.getBBox();
                var G;
                this.equalWidths ? G = e + r * (u + n + this.markerLabelGap) : (G = v, v = v + x.width + e + n);
                x.height > y && (y = x.height);
                G + x.width > q && 0 < A && 0 !== r && (p++, r = 0,
                    G = e, v = G + x.width + e + n, t = t + y + m, y = 0);
                E.translate(G, t);
                r++;
                !isNaN(l) && r >= l && (r = 0, p++, t = t + y + m, y = 0);
                w.push(E)
            }
            x = w.getBBox();
            l = x.height + 2 * m - 1;
            "left" == a || "right" == a ? (n = x.width + 2 * e, k = n + b + c, h.style.width = k + "px", this.ieW = k) : n = k - b - c - 1;
            c = d.polygon(this.container, [0, n, n, 0], [0, 0, l, l], this.backgroundColor, this.backgroundAlpha, 1, this.borderColor, this.borderAlpha);
            d.setCN(this.chart, c, "legend-bg");
            C.push(c);
            C.translate(b, g);
            c.toBack();
            b = e;
            if ("top" == a || "bottom" == a || "absolute" == a || "outside" == a) "center" == this.align ? b =
                e + (n - x.width) / 2 : "right" == this.align && (b = e + n - x.width);
            w.translate(b, m + 1);
            this.titleHeight > l && (l = this.titleHeight);
            a = l + g + f + 1;
            0 > a && (a = 0);
            a > this.chart.divRealHeight && (h.style.top = "0px");
            h.style.height = Math.round(a) + "px";
            z.setSize(this.divWidth, a)
        },
        createEntry: function (a) {
            if (!1 !== a.visibleInLegend) {
                var b = this.chart,
                    c = a.markerType;
                a.legendEntryWidth = this.markerSize;
                c || (c = this.markerType);
                var g = a.color,
                    f = a.alpha;
                a.legendKeyColor && (g = a.legendKeyColor());
                a.legendKeyAlpha && (f = a.legendKeyAlpha());
                var e;
                !0 ===
                a.hidden && (e = g = this.markerDisabledColor);
                var h = a.pattern,
                    k = a.customMarker;
                k || (k = this.customMarker);
                var l = this.container,
                    m = this.markerSize,
                    n = 0,
                    q = 0,
                    u = m / 2;
                if (this.useGraphSettings) {
                    c = a.type;
                    this.switchType = void 0;
                    if ("line" == c || "step" == c || "smoothedLine" == c || "ohlc" == c) h = l.set(), a.hidden || (g = a.lineColorR, e = a.bulletBorderColorR), n = d.line(l, [0, 2 * m], [m / 2, m / 2], g, a.lineAlpha, a.lineThickness, a.dashLength), d.setCN(b, n, "graph-stroke"), h.push(n), a.bullet && (a.hidden || (g = a.bulletColorR), n = d.bullet(l, a.bullet, a.bulletSize,
                        g, a.bulletAlpha, a.bulletBorderThickness, e, a.bulletBorderAlpha)) && (d.setCN(b, n, "graph-bullet"), n.translate(m + 1, m / 2), h.push(n)), u = 0, n = m, q = m / 3;
                    else {
                        var p;
                        a.getGradRotation && (p = a.getGradRotation());
                        n = a.fillColorsR;
                        !0 === a.hidden && (n = g);
                        if (h = this.createMarker("rectangle", n, a.fillAlphas, a.lineThickness, g, a.lineAlpha, p, h)) u = m, h.translate(u, m / 2);
                        n = m
                    }
                    d.setCN(b, h, "graph-" + c);
                    d.setCN(b, h, "graph-" + a.id)
                } else k ? (b.path && (k = b.path + k), h = l.image(k, 0, 0, m, m)) : (h = this.createMarker(c, g, f, void 0, void 0, void 0, void 0, h)) &&
                h.translate(m / 2, m / 2);
                d.setCN(b, h, "legend-marker");
                this.addListeners(h, a);
                l = l.set([h]);
                this.switchable && a.switchable && l.setAttr("cursor", "pointer");
                void 0 !== a.id && d.setCN(b, l, "legend-item-" + a.id);
                d.setCN(b, l, a.className, !0);
                (e = this.switchType) && "none" != e && ("x" == e ? (c = this.createX(), c.translate(m / 2, m / 2)) : c = this.createV(), c.dItem = a, !0 !== a.hidden ? "x" == e ? c.hide() : c.show() : "x" != e && c.hide(), this.switchable || c.hide(), this.addListeners(c, a), a.legendSwitch = c, l.push(c), d.setCN(b, c, "legend-switch"));
                e = this.color;
                a.showBalloon && this.textClickEnabled && void 0 !== this.selectedColor && (e = this.selectedColor);
                this.useMarkerColorForLabels && (e = g);
                !0 === a.hidden && (e = this.markerDisabledColor);
                g = d.massReplace(this.labelText, {
                    "[[title]]": a.title
                });
                c = this.fontSize;
                h && (m <= c && h.translate(u, m / 2 + this.ly - c / 2 + (c + 2 - m) / 2 - q), a.legendEntryWidth = h.getBBox().width);
                var z;
                g && (g = d.fixBrakes(g), a.legendTextReal = g, z = this.labelWidth, z = isNaN(z) ? d.text(this.container, g, e, b.fontFamily, c, "start") : d.wrappedText(this.container, g, e, b.fontFamily,
                    c, "start", !1, z, 0), d.setCN(b, z, "legend-label"), z.translate(this.lx + n, this.ly), l.push(z), b = z.getBBox().width, this.maxLabelWidth < b && (this.maxLabelWidth = b));
                this.entries[this.index] = l;
                a.legendEntry = this.entries[this.index];
                a.legendLabel = z;
                this.index++
            }
        },
        addListeners: function (a, b) {
            var c = this;
            a && a.mouseover(function (a) {
                c.rollOverMarker(b, a)
            }).mouseout(function (a) {
                c.rollOutMarker(b, a)
            }).click(function (a) {
                c.clickMarker(b, a)
            })
        },
        rollOverMarker: function (a, b) {
            this.switchable && this.dispatch("rollOverMarker", a,
                b);
            this.dispatch("rollOverItem", a, b)
        },
        rollOutMarker: function (a, b) {
            this.switchable && this.dispatch("rollOutMarker", a, b);
            this.dispatch("rollOutItem", a, b)
        },
        clickMarker: function (a, b) {
            this.switchable && (!0 === a.hidden ? this.dispatch("showItem", a, b) : this.dispatch("hideItem", a, b));
            this.dispatch("clickMarker", a, b)
        },
        rollOverLabel: function (a, b) {
            a.hidden || (this.textClickEnabled && a.legendLabel && a.legendLabel.attr({
                fill: this.rollOverColor
            }), this.dispatch("rollOverItem", a, b))
        },
        rollOutLabel: function (a, b) {
            if (!a.hidden) {
                if (this.textClickEnabled &&
                    a.legendLabel) {
                    var c = this.color;
                    void 0 !== this.selectedColor && a.showBalloon && (c = this.selectedColor);
                    this.useMarkerColorForLabels && (c = a.lineColor, void 0 === c && (c = a.color));
                    a.legendLabel.attr({
                        fill: c
                    })
                }
                this.dispatch("rollOutItem", a, b)
            }
        },
        clickLabel: function (a, b) {
            this.textClickEnabled ? a.hidden || this.dispatch("clickLabel", a, b) : this.switchable && (!0 === a.hidden ? this.dispatch("showItem", a, b) : this.dispatch("hideItem", a, b))
        },
        dispatch: function (a, b, c) {
            this.fire(a, {
                type: a,
                dataItem: b,
                target: this,
                event: c,
                chart: this.chart
            })
        },
        createValue: function (a) {
            var b = this,
                c = b.fontSize,
                g = b.chart;
            if (!1 !== a.visibleInLegend) {
                var f = b.maxLabelWidth;
                b.forceWidth && (f = b.labelWidth);
                b.equalWidths || (b.valueAlign = "left");
                "left" == b.valueAlign && (f = a.legendEntry.getBBox().width);
                var e = f;
                if (b.valueText && 0 < b.valueWidth) {
                    var h = b.color;
                    b.useMarkerColorForValues && (h = a.color, a.legendKeyColor && (h = a.legendKeyColor()));
                    !0 === a.hidden && (h = b.markerDisabledColor);
                    var k = b.valueText,
                        f = f + b.lx + b.markerLabelGap + b.valueWidth,
                        l = "end";
                    "left" == b.valueAlign && (f -= b.valueWidth,
                        l = "start");
                    h = d.text(b.container, k, h, b.chart.fontFamily, c, l);
                    d.setCN(g, h, "legend-value");
                    h.translate(f, b.ly);
                    b.entries[b.index].push(h);
                    e += b.valueWidth + 2 * b.markerLabelGap;
                    h.dItem = a;
                    b.valueLabels.push(h)
                }
                b.index++;
                g = b.markerSize;
                g < c + 7 && (g = c + 7, d.VML && (g += 3));
                c = b.container.rect(a.legendEntryWidth, 0, e, g, 0, 0).attr({
                    stroke: "none",
                    fill: "#fff",
                    "fill-opacity": .005
                });
                c.dItem = a;
                b.entries[b.index - 1].push(c);
                c.mouseover(function (c) {
                    b.rollOverLabel(a, c)
                }).mouseout(function (c) {
                    b.rollOutLabel(a, c)
                }).click(function (c) {
                    b.clickLabel(a,
                        c)
                })
            }
        },
        createV: function () {
            var a = this.markerSize;
            return d.polygon(this.container, [a / 5, a / 2, a - a / 5, a / 2], [a / 3, a - a / 5, a / 5, a / 1.7], this.switchColor)
        },
        createX: function () {
            var a = (this.markerSize - 4) / 2,
                b = {
                    stroke: this.switchColor,
                    "stroke-width": 3
                },
                c = this.container,
                g = d.line(c, [-a, a], [-a, a]).attr(b),
                a = d.line(c, [-a, a], [a, -a]).attr(b);
            return this.container.set([g, a])
        },
        createMarker: function (a, b, c, g, f, e, h, k) {
            var l = this.markerSize,
                m = this.container;
            f || (f = this.markerBorderColor);
            f || (f = b);
            isNaN(g) && (g = this.markerBorderThickness);
            isNaN(e) && (e = this.markerBorderAlpha);
            return d.bullet(m, a, l, b, c, g, f, e, l, h, k, this.chart.path)
        },
        validateNow: function () {
            this.invalidateSize()
        },
        updateValues: function () {
            var a = this.valueLabels,
                b = this.chart,
                c, d = this.data;
            for (c = 0; c < a.length; c++) {
                var f = a[c],
                    e = f.dItem,
                    h = " ";
                if (d) e.value ? f.text(e.value) : f.text("");
                else {
                    var k;
                    if (void 0 !== e.type) {
                        k = e.currentDataItem;
                        var l = this.periodValueText;
                        e.legendPeriodValueText && (l = e.legendPeriodValueText);
                        k ? (h = this.valueText, e.legendValueText && (h = e.legendValueText), h = b.formatString(h,
                            k)) : l && (h = b.formatPeriodString(l, e))
                    } else h = b.formatString(this.valueText, e);
                    if (l = this.valueFunction) k && (e = k), h = l(e, h);
                    f.text(h)
                }
            }
        },
        renderFix: function () {
            if (!d.VML) {
                var a = this.container;
                a && a.renderFix()
            }
        },
        destroy: function () {
            this.div.innerHTML = "";
            d.remove(this.set)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.AmMap = d.Class({
        inherits: d.AmChart,
        construct: function (a) {
            this.cname = "AmMap";
            this.type = "map";
            this.theme = a;
            this.version = "3.14.2";
            this.svgNotSupported = "This browser doesn't support SVG. Use Chrome, Firefox, Internet Explorer 9 or later.";
            this.createEvents("rollOverMapObject", "rollOutMapObject", "clickMapObject", "selectedObjectChanged", "homeButtonClicked", "zoomCompleted", "dragCompleted", "positionChanged", "writeDevInfo", "click");
            this.zoomDuration = 1;
            this.zoomControl = new d.ZoomControl(a);
            this.fitMapToContainer = !0;
            this.mouseWheelZoomEnabled = this.backgroundZoomsToTop = !1;
            this.allowClickOnSelectedObject = this.useHandCursorOnClickableOjects = this.showBalloonOnSelectedObject = !0;
            this.showObjectsAfterZoom = this.wheelBusy = !1;
            this.zoomOnDoubleClick = this.useObjectColorForBalloon = !0;
            this.allowMultipleDescriptionWindows = !1;
            this.dragMap = this.centerMap = this.linesAboveImages = !0;
            this.colorSteps = 5;
            this.showAreasInList = !0;
            this.showLinesInList = this.showImagesInList = !1;
            this.areasProcessor = new d.AreasProcessor(this);
            this.areasSettings = new d.AreasSettings(a);
            this.imagesProcessor = new d.ImagesProcessor(this);
            this.imagesSettings = new d.ImagesSettings(a);
            this.linesProcessor = new d.LinesProcessor(this);
            this.linesSettings = new d.LinesSettings(a);
            this.showDescriptionOnHover = !1;
            d.AmMap.base.construct.call(this, a);
            this.creditsPosition = "bottom-left";
            this.product = "ammap";
            this.path = "ammap/";
            this.areasClasses = {};
            d.applyTheme(this, a, this.cname)
        },
        initChart: function () {
            this.zoomInstantly = !0;
            var a = this.container;
            if (this.sizeChanged &&
                d.hasSVG && this.chartCreated) {
                this.freeLabelsSet && this.freeLabelsSet.remove();
                this.freeLabelsSet = a.set();
                this.container.setSize(this.realWidth, this.realHeight);
                this.resizeMap();
                this.drawBackground();
                this.redrawLabels();
                this.drawTitles();
                this.processObjects();
                this.rescaleObjects();
                this.zoomControl.init(this, a);
                this.drawBg();
                var b = this.smallMap;
                b && b.init(this, a);
                (b = this.valueLegend) && b.init(this, a);
                this.sizeChanged = !1;
                this.zoomToLongLat(this.zLevelTemp, this.zLongTemp, this.zLatTemp, !0);
                this.previousWidth =
                    this.realWidth;
                this.previousHeight = this.realHeight;
                this.updateSmallMap();
                this.linkSet.toFront()
            } else(d.AmMap.base.initChart.call(this), d.hasSVG) ? (this.dataChanged && (this.parseData(), this.dispatchDataUpdated = !0, this.dataChanged = !1, a = this.legend) && (a.position = "absolute", a.invalidateSize()), this.createDescriptionsDiv(), this.svgAreas = [], this.svgAreasById = {}, this.drawChart()) : (this.chartDiv.style.textAlign = "", this.chartDiv.setAttribute("class", "ammapAlert"), this.chartDiv.innerHTML = this.svgNotSupported,
                this.fire("failed", {
                    type: "failed",
                    chart: this
                }))
        },
        storeTemp: function () {
            var a = this.zoomLongitude();
            isNaN(a) || (this.zLongTemp = a);
            a = this.zoomLatitude();
            isNaN(a) || (this.zLatTemp = a);
            a = this.zoomLevel();
            isNaN(a) || (this.zLevelTemp = a)
        },
        invalidateSize: function () {
            this.storeTemp();
            d.AmMap.base.invalidateSize.call(this)
        },
        validateSize: function () {
            d.hasSVG && this.storeTemp();
            d.AmMap.base.validateSize.call(this)
        },
        handleWheelReal: function (a) {
            if (!this.wheelBusy) {
                this.stopAnimation();
                var b = this.zoomLevel(),
                    c = this.zoomControl,
                    g = c.zoomFactor;
                this.wheelBusy = !0;
                a = d.fitToBounds(0 < a ? b * g : b / g, c.minZoomLevel, c.maxZoomLevel);
                g = this.mouseX / this.mapWidth;
                c = this.mouseY / this.mapHeight;
                g = (this.zoomX() - g) * (a / b) + g;
                b = (this.zoomY() - c) * (a / b) + c;
                this.zoomTo(a, g, b)
            }
        },
        addLegend: function (a, b) {
            a.position = "absolute";
            a.autoMargins = !1;
            a.valueWidth = 0;
            a.switchable = !1;
            d.AmMap.base.addLegend.call(this, a, b);
            void 0 === a.enabled && (a.enabled = !0);
            return a
        },
        handleLegendEvent: function () {
        },
        createDescriptionsDiv: function () {
            if (!this.descriptionsDiv) {
                var a = document.createElement("div"),
                    b = a.style;
                b.position = "absolute";
                b.left = "0px";
                b.top = "0px";
                this.descriptionsDiv = a
            }
            this.containerDiv.appendChild(this.descriptionsDiv)
        },
        drawChart: function () {
            d.AmMap.base.drawChart.call(this);
            var a = this.dataProvider;
            this.dataProvider = a = d.extend(a, new d.MapData, !0);
            this.areasSettings = d.processObject(this.areasSettings, d.AreasSettings, this.theme);
            this.imagesSettings = d.processObject(this.imagesSettings, d.ImagesSettings, this.theme);
            this.linesSettings = d.processObject(this.linesSettings, d.LinesSettings, this.theme);
            var b = this.container;
            this.mapContainer && this.mapContainer.remove();
            this.mapContainer = b.set();
            this.graphsSet.push(this.mapContainer);
            var c;
            a.map && (c = d.maps[a.map]);
            a.mapVar && (c = a.mapVar);
            c ? (this.svgData = c.svg, this.getBounds(), this.buildEverything()) : (a = a.mapURL) && this.loadXml(a);
            this.balloonsSet.toFront()
        },
        drawBg: function () {
            var a = this;
            a.background.click(function () {
                a.handleBackgroundClick()
            })
        },
        buildEverything: function () {
            if (0 < this.realWidth && 0 < this.realHeight) {
                var a = this.container;
                this.zoomControl = d.processObject(this.zoomControl,
                    d.ZoomControl, this.theme);
                this.zoomControl.init(this, a);
                this.drawBg();
                this.buildSVGMap();
                var b = this.smallMap;
                b && (b = this.smallMap = d.processObject(this.smallMap, d.SmallMap, this.theme), b.init(this, a));
                b = this.dataProvider;
                isNaN(b.zoomX) && isNaN(b.zoomY) && isNaN(b.zoomLatitude) && isNaN(b.zoomLongitude) && (this.centerMap ? (b.zoomLatitude = this.coordinateToLatitude(this.mapHeight / 2), b.zoomLongitude = this.coordinateToLongitude(this.mapWidth / 2)) : (b.zoomX = 0, b.zoomY = 0), this.zoomInstantly = !0);
                this.selectObject(this.dataProvider);
                this.processAreas();
                if (b = this.valueLegend) this.valueLegend = b = d.processObject(b, d.ValueLegend, this.theme), b.init(this, a);
                this.objectList && (a = this.objectList = d.processObject(this.objectList, d.ObjectList)) && (this.clearObjectList(), a.init(this));
                this.dispDUpd();
                this.linkSet.toFront();
                this.chartCreated = !0
            } else this.cleanChart()
        },
        hideGroup: function (a) {
            this.showHideGroup(a, !1)
        },
        showGroup: function (a) {
            this.showHideGroup(a, !0)
        },
        showHideGroup: function (a, b) {
            this.showHideReal(this.imagesProcessor.allObjects, a,
                b);
            this.showHideReal(this.areasProcessor.allObjects, a, b);
            this.showHideReal(this.linesProcessor.allObjects, a, b)
        },
        showHideReal: function (a, b, c) {
            var d;
            for (d = 0; d < a.length; d++) {
                var f = a[d];
                if (f.groupId == b) {
                    var e = f.displayObject;
                    e && (c ? (f.hidden = !1, e.show()) : (f.hidden = !0, e.hide()))
                }
            }
        },
        update: function () {
            d.hasSVG && (d.AmMap.base.update.call(this), this.zoomControl && this.zoomControl.update())
        },
        animateMap: function () {
            var a = this;
            a.totalFrames = 1E3 * a.zoomDuration / d.updateRate;
            a.totalFrames += 1;
            a.frame = 0;
            a.tweenPercent =
                0;
            setTimeout(function () {
                a.updateSize.call(a)
            }, d.updateRate)
        },
        updateSize: function () {
            var a = this,
                b = a.totalFrames;
            a.preventHover = !0;
            a.frame <= b ? (a.frame++, b = d.easeOutSine(0, a.frame, 0, 1, b), 1 <= b ? (b = 1, a.preventHover = !1, a.wheelBusy = !1) : setTimeout(function () {
                a.updateSize.call(a)
            }, d.updateRate), .8 < b && (a.preventHover = !1)) : (b = 1, a.preventHover = !1, a.wheelBusy = !1);
            a.tweenPercent = b;
            a.rescaleMapAndObjects()
        },
        rescaleMapAndObjects: function () {
            var a = this.initialScale,
                b = this.initialX,
                c = this.initialY,
                d = this.tweenPercent,
                a = a + (this.finalScale - a) * d;
            this.mapContainer.translate(b + (this.finalX - b) * d, c + (this.finalY - c) * d, a);
            if (this.areasSettings.adjustOutlineThickness)
                for (b = this.dataProvider.areas, c = 0; c < b.length; c++) {
                    var f = b[c],
                        e = f.displayObject;
                    e && e.setAttr("stroke-width", f.outlineThicknessReal / a)
                }
            this.rescaleObjects();
            this.positionChanged();
            this.updateSmallMap();
            1 == d && (d = {
                type: "zoomCompleted",
                chart: this
            }, this.fire(d.type, d))
        },
        updateSmallMap: function () {
            this.smallMap && this.smallMap.update()
        },
        rescaleObjects: function () {
            var a =
                    this.mapContainer.scale,
                b = this.imagesProcessor.objectsToResize,
                c;
            for (c = 0; c < b.length; c++) {
                var d = b[c].image;
                d.translate(d.x, d.y, b[c].scale / a, !0)
            }
            b = this.linesProcessor;
            if (d = b.linesToResize)
                for (c = 0; c < d.length; c++) {
                    var f = d[c];
                    f.line.setAttr("stroke-width", f.thickness / a)
                }
            b = b.objectsToResize;
            for (c = 0; c < b.length; c++) d = b[c], d.translate(d.x, d.y, 1 / a)
        },
        handleTouchStart: function (a) {
            this.handleMouseMove(a);
            this.handleMouseDown(a)
        },
        handleTouchEnd: function (a) {
            this.previousDistance = NaN;
            this.handleReleaseOutside(a)
        },
        handleMouseDown: function (a) {
            d.resetMouseOver();
            this.mouseIsOver = !0;
            a && this.mouseIsOver && a.preventDefault && this.panEventsEnabled && a.preventDefault();
            if (this.chartCreated && !this.preventHover && (this.dragMap && (this.stopAnimation(), this.isDragging = !0, this.mapContainerClickX = this.mapContainer.x, this.mapContainerClickY = this.mapContainer.y), a || (a = window.event), a.shiftKey && !0 === this.developerMode && this.getDevInfo(), a && a.touches)) {
                var b = this.mouseX,
                    c = this.mouseY,
                    g = a.touches.item(1);
                g && (a = g.pageX - d.findPosX(this.div),
                    g = g.pageY - d.findPosY(this.div), this.middleXP = (b + (a - b) / 2) / this.realWidth, this.middleYP = (c + (g - c) / 2) / this.realHeight)
            }
        },
        stopDrag: function () {
            this.isDragging = !1
        },
        handleReleaseOutside: function () {
            if (d.isModern && !this.preventHover) {
                this.stopDrag();
                var a = this.zoomControl;
                a && a.draggerUp && a.draggerUp();
                this.mapWasDragged = !1;
                var a = this.mapContainer,
                    b = this.mapContainerClickX,
                    c = this.mapContainerClickY;
                isNaN(b) || isNaN(c) || !(2 < Math.abs(a.x - b) || Math.abs(a.y - c)) || (this.mapWasDragged = !0, a = {
                    type: "dragCompleted",
                    zoomX: this.zoomX(),
                    zoomY: this.zoomY(),
                    zoomLevel: this.zoomLevel(),
                    chart: this
                }, this.fire(a.type, a));
                !this.mouseIsOver || this.mapWasDragged || this.skipClick || (a = {
                    type: "click",
                    x: this.mouseX,
                    y: this.mouseY,
                    chart: this
                }, this.fire(a.type, a), this.skipClick = !1);
                this.mapContainerClickY = this.mapContainerClickX = NaN;
                this.objectWasClicked = !1;
                this.zoomOnDoubleClick && this.mouseIsOver && (a = (new Date).getTime(), 200 > a - this.previousClickTime && 20 < a - this.previousClickTime && this.doDoubleClickZoom(), this.previousClickTime = a)
            }
        },
        handleTouchMove: function (a) {
            this.handleMouseMove(a)
        },
        resetPinch: function () {
            this.mapWasPinched = !1
        },
        handleMouseMove: function (a) {
            var b = this;
            d.AmMap.base.handleMouseMove.call(b, a);
            b.panEventsEnabled && b.mouseIsOver && a && a.preventDefault && a.preventDefault();
            var c = b.previuosMouseX,
                g = b.previuosMouseY,
                f = b.mouseX,
                e = b.mouseY,
                h = b.zoomControl;
            isNaN(c) && (c = f);
            isNaN(g) && (g = e);
            b.mouse2X = NaN;
            b.mouse2Y = NaN;
            a && a.touches && (a = a.touches.item(1)) && (b.mouse2X = a.pageX - d.findPosX(b.div), b.mouse2Y = a.pageY - d.findPosY(b.div));
            if (a = b.mapContainer) {
                var k = b.mouse2X,
                    l = b.mouse2Y;
                b.pinchTO &&
                clearTimeout(b.pinchTO);
                b.pinchTO = setTimeout(function () {
                    b.resetPinch.call(b)
                }, 1E3);
                var m = b.realHeight,
                    n = b.realWidth,
                    q = b.mapWidth,
                    u = b.mapHeight;
                if (!isNaN(k)) {
                    b.stopDrag();
                    var k = Math.sqrt(Math.pow(k - f, 2) + Math.pow(l - e, 2)),
                        p = b.previousDistance,
                        l = Math.max(b.realWidth, b.realHeight);
                    5 > Math.abs(p - k) && (b.isDragging = !0);
                    if (!isNaN(p)) {
                        var z = 5 * Math.abs(p - k) / l,
                            l = a.scale,
                            l = d.fitToBounds(p < k ? l + l * z : l - l * z, h.minZoomLevel, h.maxZoomLevel),
                            h = b.zoomLevel(),
                            C = b.middleXP,
                            p = b.middleYP,
                            z = m / u,
                            w = n / q,
                            C = (b.zoomX() - C * w) * (l / h) +
                                C * w,
                            p = (b.zoomY() - p * z) * (l / h) + p * z;
                        .1 < Math.abs(l - h) && (b.zoomTo(l, C, p, !0), b.mapWasPinched = !0, clearTimeout(b.pinchTO))
                    }
                    b.previousDistance = k
                }
                k = a.scale;
                b.isDragging && (b.hideBalloon(), b.positionChanged(), c = a.x + (f - c), g = a.y + (e - g), b.preventDragOut && (u = -u * k + m / 2, m /= 2, c = d.fitToBounds(c, -q * k + n / 2, n / 2), g = d.fitToBounds(g, u, m)), a.translate(c, g, k), b.updateSmallMap());
                b.previuosMouseX = f;
                b.previuosMouseY = e
            }
        },
        selectObject: function (a) {
            var b = this;
            a || (a = b.dataProvider);
            a.isOver = !1;
            var c = a.linkToObject;
            "string" == typeof c &&
            (c = b.getObjectById(c));
            a.useTargetsZoomValues && c && (a.zoomX = c.zoomX, a.zoomY = c.zoomY, a.zoomLatitude = c.zoomLatitude, a.zoomLongitude = c.zoomLongitude, a.zoomLevel = c.zoomLevel);
            var d = b.selectedObject;
            d && b.returnInitialColor(d);
            b.selectedObject = a;
            var f = !1,
                e;
            "MapArea" == a.objectType && (a.autoZoomReal && (f = !0), e = b.areasSettings.selectedOutlineColor);
            if (c && !f && ("string" == typeof c && (c = b.getObjectById(c)), isNaN(a.zoomLevel) && isNaN(a.zoomX) && isNaN(a.zoomY))) {
                if (b.extendMapData(c)) return;
                b.selectObject(c);
                return
            }
            b.allowMultipleDescriptionWindows ||
            b.closeAllDescriptions();
            clearTimeout(b.selectedObjectTimeOut);
            clearTimeout(b.processObjectsTimeOut);
            c = b.zoomDuration;
            !f && isNaN(a.zoomLevel) && isNaN(a.zoomX) && isNaN(a.zoomY) ? (b.showDescriptionAndGetUrl(), b.processObjects()) : (b.selectedObjectTimeOut = setTimeout(function () {
                b.showDescriptionAndGetUrl.call(b)
            }, 1E3 * c + 200), b.showObjectsAfterZoom ? b.processObjectsTimeOut = setTimeout(function () {
                b.processObjects.call(b)
            }, 1E3 * c + 200) : b.processObjects());
            c = a.displayObject;
            f = a.selectedColorReal;
            if (c) {
                if (a.bringForwardOnHover &&
                    c.toFront(), !a.preserveOriginalAttributes) {
                    c.setAttr("stroke", a.outlineColorReal);
                    void 0 !== f && c.setAttr("fill", f);
                    void 0 !== e && c.setAttr("stroke", e);
                    if ("MapLine" == a.objectType) {
                        var h = a.lineSvg;
                        h && h.setAttr("stroke", f);
                        if (h = a.arrowSvg) h.setAttr("fill", f), h.setAttr("stroke", f)
                    }
                    if (h = a.imageLabel) {
                        var k = a.selectedLabelColorReal;
                        void 0 !== k && h.setAttr("fill", k)
                    }
                    a.selectable || (c.setAttr("cursor", "default"), h && h.setAttr("cursor", "default"))
                }
            } else b.returnInitialColorReal(a);
            if (c = a.groupId)
                for (h = b.getGroupById(c),
                         k = 0; k < h.length; k++) {
                    var l = h[k];
                    l.isOver = !1;
                    if (c = l.displayObject) {
                        var m = l.selectedColorReal;
                        void 0 !== e && c.setAttr("stroke", e);
                        void 0 !== m ? c.setAttr("fill", m) : b.returnInitialColor(l);
                        "MapLine" == l.objectType && ((c = l.lineSvg) && c.setAttr("stroke", f), c = l.arrowSvg) && (c.setAttr("fill", f), c.setAttr("stroke", f))
                    }
                }
            b.zoomToSelectedObject();
            d != a && (a = {
                type: "selectedObjectChanged",
                chart: b
            }, b.fire(a.type, a))
        },
        returnInitialColor: function (a, b) {
            this.returnInitialColorReal(a);
            b && (a.isFirst = !1);
            if (this.selectedObject.bringForwardOnHover) {
                var c =
                    this.selectedObject.displayObject;
                c && c.toFront()
            }
            if (c = a.groupId) {
                var c = this.getGroupById(c),
                    d;
                for (d = 0; d < c.length; d++) this.returnInitialColorReal(c[d]), b && (c[d].isFirst = !1)
            }
        },
        closeAllDescriptions: function () {
            this.descriptionsDiv.innerHTML = ""
        },
        returnInitialColorReal: function (a) {
            a.isOver = !1;
            var b = a.displayObject;
            if (b) {
                b.toPrevious();
                if ("MapImage" == a.objectType) {
                    var c = a.tempScale;
                    isNaN(c) || b.translate(b.x, b.y, c, !0);
                    a.tempScale = NaN
                }
                c = a.colorReal;
                if ("MapLine" == a.objectType) {
                    var d = a.lineSvg;
                    d && d.setAttr("stroke",
                        c);
                    if (d = a.arrowSvg) d.setAttr("fill", c), d.setAttr("stroke", c)
                }
                a.showAsSelected && (c = a.selectedColorReal);
                "bubble" == a.type && (c = void 0);
                void 0 !== c && b.setAttr("fill", c);
                (d = a.image) && d.setAttr("fill", c);
                b.setAttr("stroke", a.outlineColorReal);
                "MapArea" == a.objectType && (c = 1, this.areasSettings.adjustOutlineThickness && (c = this.zoomLevel()), b.setAttr("fill-opacity", a.alphaReal), b.setAttr("stroke-opacity", a.outlineAlphaReal), b.setAttr("stroke-width", a.outlineThicknessReal / c));
                (c = a.pattern) && b.pattern(c, this.mapScale,
                    this.path);
                (b = a.imageLabel) && !a.labelInactive && b.setAttr("fill", a.labelColorReal)
            }
        },
        zoomToRectangle: function (a, b, c, g) {
            var f = this.realWidth,
                e = this.realHeight,
                h = this.mapSet.scale,
                k = this.zoomControl,
                f = d.fitToBounds(c / f > g / e ? .8 * f / (c * h) : .8 * e / (g * h), k.minZoomLevel, k.maxZoomLevel);
            this.zoomToMapXY(f, (a + c / 2) * h, (b + g / 2) * h)
        },
        zoomToLatLongRectangle: function (a, b, c, g) {
            var f = this.dataProvider,
                e = this.zoomControl,
                h = Math.abs(c - a),
                k = Math.abs(b - g),
                l = Math.abs(f.rightLongitude - f.leftLongitude),
                f = Math.abs(f.topLatitude - f.bottomLatitude),
                e = d.fitToBounds(h / l > k / f ? .8 * l / h : .8 * f / k, e.minZoomLevel, e.maxZoomLevel);
            this.zoomToLongLat(e, a + (c - a) / 2, g + (b - g) / 2)
        },
        getGroupById: function (a) {
            var b = [];
            this.getGroup(this.imagesProcessor.allObjects, a, b);
            this.getGroup(this.linesProcessor.allObjects, a, b);
            this.getGroup(this.areasProcessor.allObjects, a, b);
            return b
        },
        zoomToGroup: function (a) {
            a = "object" == typeof a ? a : this.getGroupById(a);
            var b, c, d, f, e;
            for (e = 0; e < a.length; e++) {
                var h = a[e].displayObject;
                if (h) {
                    var k = h.getBBox(),
                        h = k.y,
                        l = k.y + k.height,
                        m = k.x,
                        k = k.x + k.width;
                    if (h < b || isNaN(b)) b = h;
                    if (l > f || isNaN(f)) f = l;
                    if (m < c || isNaN(c)) c = m;
                    if (k > d || isNaN(d)) d = k
                }
            }
            a = this.mapSet.getBBox();
            c -= a.x;
            d -= a.x;
            f -= a.y;
            b -= a.y;
            this.zoomToRectangle(c, b, d - c, f - b)
        },
        getGroup: function (a, b, c) {
            if (a) {
                var d;
                for (d = 0; d < a.length; d++) {
                    var f = a[d];
                    f.groupId == b && c.push(f)
                }
            }
        },
        zoomToStageXY: function (a, b, c, g) {
            if (!this.objectWasClicked) {
                var f = this.zoomControl;
                a = d.fitToBounds(a, f.minZoomLevel, f.maxZoomLevel);
                f = this.zoomLevel();
                c = this.coordinateToLatitude((c - this.mapContainer.y) / f);
                b = this.coordinateToLongitude((b -
                this.mapContainer.x) / f);
                this.zoomToLongLat(a, b, c, g)
            }
        },
        zoomToLongLat: function (a, b, c, d) {
            b = this.longitudeToCoordinate(b);
            c = this.latitudeToCoordinate(c);
            this.zoomToMapXY(a, b, c, d)
        },
        zoomToMapXY: function (a, b, c, d) {
            var f = this.mapWidth,
                e = this.mapHeight;
            this.zoomTo(a, -(b / f) * a + this.realWidth / f / 2, -(c / e) * a + this.realHeight / e / 2, d)
        },
        zoomToObject: function (a) {
            if (a) {
                var b = a.zoomLatitude,
                    c = a.zoomLongitude,
                    g = a.zoomLevel,
                    f = this.zoomInstantly,
                    e = a.zoomX,
                    h = a.zoomY,
                    k = this.realWidth,
                    l = this.realHeight;
                isNaN(g) || (isNaN(b) || isNaN(c) ?
                    this.zoomTo(g, e, h, f) : this.zoomToLongLat(g, c, b, f));
                this.zoomInstantly = !1;
                "MapImage" == a.objectType && isNaN(a.zoomX) && isNaN(a.zoomY) && isNaN(a.zoomLatitude) && isNaN(a.zoomLongitude) && !isNaN(a.latitude) && !isNaN(a.longitude) && this.zoomToLongLat(a.zoomLevel, a.longitude, a.latitude);
                "MapArea" == a.objectType && (e = a.displayObject.getBBox(), b = this.mapScale, c = e.x * b, g = e.y * b, f = e.width * b, e = e.height * b, k = a.autoZoomReal && isNaN(a.zoomLevel) ? f / k > e / l ? .8 * k / f : .8 * l / e : a.zoomLevel, l = this.zoomControl, k = d.fitToBounds(k, l.minZoomLevel,
                    l.maxZoomLevel), isNaN(a.zoomX) && isNaN(a.zoomY) && isNaN(a.zoomLatitude) && isNaN(a.zoomLongitude) && (a = this.mapSet.getBBox(), this.zoomToMapXY(k, -a.x * b + c + f / 2, -a.y * b + g + e / 2)))
            }
        },
        zoomToSelectedObject: function () {
            this.zoomToObject(this.selectedObject)
        },
        zoomTo: function (a, b, c, g) {
            var f = this.zoomControl;
            a = d.fitToBounds(a, f.minZoomLevel, f.maxZoomLevel);
            f = this.zoomLevel();
            isNaN(b) && (b = this.realWidth / this.mapWidth, b = (this.zoomX() - .5 * b) * (a / f) + .5 * b);
            isNaN(c) && (c = this.realHeight / this.mapHeight, c = (this.zoomY() - .5 * c) * (a /
            f) + .5 * c);
            this.stopAnimation();
            isNaN(a) || (f = this.mapContainer, this.initialX = f.x, this.initialY = f.y, this.initialScale = f.scale, this.finalX = this.mapWidth * b, this.finalY = this.mapHeight * c, this.finalScale = a, this.finalX != this.initialX || this.finalY != this.initialY || this.finalScale != this.initialScale ? g ? (this.tweenPercent = 1, this.rescaleMapAndObjects(), this.wheelBusy = !1) : this.animateMap() : this.wheelBusy = !1)
        },
        loadXml: function (a) {
            var b;
            window.XMLHttpRequest && (b = new XMLHttpRequest);
            b.overrideMimeType && b.overrideMimeType("text/xml");
            b.open("GET", a, !1);
            b.send();
            this.parseXMLObject(b.responseXML);
            this.svgData && this.buildEverything()
        },
        stopAnimation: function () {
            this.frame = this.totalFrames
        },
        processObjects: function () {
            var a = this.container,
                b = this.stageImagesContainer;
            b && b.remove();
            this.stageImagesContainer = b = a.set();
            this.trendLinesSet.push(b);
            var c = this.stageLinesContainer;
            c && c.remove();
            this.stageLinesContainer = c = a.set();
            this.trendLinesSet.push(c);
            var d = this.mapImagesContainer;
            d && d.remove();
            this.mapImagesContainer = d = a.set();
            this.mapContainer.push(d);
            var f = this.mapLinesContainer;
            f && f.remove();
            this.mapLinesContainer = f = a.set();
            this.mapContainer.push(f);
            this.linesAboveImages ? (d.toFront(), b.toFront(), f.toFront(), c.toFront()) : (f.toFront(), c.toFront(), d.toFront(), b.toFront());
            if (a = this.selectedObject) this.imagesProcessor.reset(), this.linesProcessor.reset(), this.linesAboveImages ? (this.imagesProcessor.process(a), this.linesProcessor.process(a)) : (this.linesProcessor.process(a), this.imagesProcessor.process(a));
            this.rescaleObjects()
        },
        processAreas: function () {
            this.areasProcessor.process(this.dataProvider)
        },
        buildSVGMap: function () {
            var a = this.svgData.g.path,
                b = this.container,
                c = b.set();
            void 0 === a.length && (a = [a]);
            var d;
            for (d = 0; d < a.length; d++) {
                var f = a[d],
                    e = f.d,
                    h = f.title;
                f.titleTr && (h = f.titleTr);
                e = b.path(e);
                e.id = f.id;
                if (this.areasSettings.preserveOriginalAttributes) {
                    e.customAttr = {};
                    for (var k in f) "d" != k && "id" != k && "title" != k && (e.customAttr[k] = f[k])
                }
                this.svgAreasById[f.id] = {
                    area: e,
                    title: h,
                    className: f["class"]
                };
                this.svgAreas.push(e);
                c.push(e)
            }
            this.mapSet = c;
            this.mapContainer.push(c);
            this.resizeMap()
        },
        addObjectEventListeners: function (a,
                                           b) {
            var c = this;
            a.mouseup(function (a) {
                c.clickMapObject(b, a)
            }).mouseover(function (a) {
                c.rollOverMapObject(b, !0, a)
            }).mouseout(function (a) {
                c.rollOutMapObject(b, a)
            }).touchend(function (a) {
                c.clickMapObject(b, a)
            }).touchstart(function (a) {
                c.rollOverMapObject(b, !0, a)
            })
        },
        checkIfSelected: function (a) {
            var b = this.selectedObject;
            if (b == a) return !0;
            if (b = b.groupId) {
                var b = this.getGroupById(b),
                    c;
                for (c = 0; c < b.length; c++)
                    if (b[c] == a) return !0
            }
            return !1
        },
        clearMap: function () {
            this.chartDiv.innerHTML = "";
            this.clearObjectList()
        },
        clearObjectList: function () {
            var a =
                this.objectList;
            a && a.div && (a.div.innerHTML = "")
        },
        checkIfLast: function (a) {
            if (a) {
                var b = a.parentNode;
                if (b && b.lastChild == a) return !0
            }
            return !1
        },
        showAsRolledOver: function (a) {
            var b = a.displayObject;
            if (!a.showAsSelected && b && !a.isOver) {
                b.node.onmouseout = function () {
                };
                b.node.onmouseover = function () {
                };
                b.node.onclick = function () {
                };
                !a.isFirst && a.bringForwardOnHover && (b.toFront(), a.isFirst = !0);
                var c = a.rollOverColorReal,
                    d;
                a.preserveOriginalAttributes && (c = void 0);
                if (void 0 != c)
                    if ("MapImage" == a.objectType)(d = a.image) && d.setAttr("fill",
                        c);
                    else if ("MapLine" == a.objectType) {
                        if ((d = a.lineSvg) && d.setAttr("stroke", c), d = a.arrowSvg) d.setAttr("fill", c), d.setAttr("stroke", c)
                    } else b.setAttr("fill", c);
                (c = a.imageLabel) && !a.labelInactive && (d = a.labelRollOverColorReal, void 0 != d && c.setAttr("fill", d));
                c = a.rollOverOutlineColorReal;
                void 0 != c && ("MapImage" == a.objectType ? (d = a.image) && d.setAttr("stroke", c) : b.setAttr("stroke", c));
                if ("MapArea" == a.objectType) {
                    c = this.areasSettings;
                    d = a.rollOverAlphaReal;
                    isNaN(d) || b.setAttr("fill-opacity", d);
                    d = c.rollOverOutlineAlpha;
                    isNaN(d) || b.setAttr("stroke-opacity", d);
                    d = 1;
                    this.areasSettings.adjustOutlineThickness && (d = this.zoomLevel());
                    var f = c.rollOverOutlineThickness;
                    isNaN(f) || b.setAttr("stroke-width", f / d);
                    (c = c.rollOverPattern) && b.pattern(c, this.mapScale, chart.path)
                }
                "MapImage" == a.objectType && (c = a.rollOverScaleReal, isNaN(c) || 1 == c || (a.tempScale = b.scale, b.translate(b.x, b.y, b.scale * c, !0)));
                this.useHandCursorOnClickableOjects && this.checkIfClickable(a) && b.setAttr("cursor", "pointer");
                this.addObjectEventListeners(b, a);
                a.isOver = !0
            }
        },
        rollOverMapObject: function (a, b, c) {
            if (this.chartCreated) {
                this.handleMouseMove();
                var d = this.previouslyHovered;
                d && d != a ? (!1 === this.checkIfSelected(d) && (this.returnInitialColor(d, !0), this.previouslyHovered = null), this.hideBalloon()) : clearTimeout(this.hoverInt);
                if (!this.preventHover) {
                    if (!1 === this.checkIfSelected(a)) {
                        if (d = a.groupId) {
                            var d = this.getGroupById(d),
                                f;
                            for (f = 0; f < d.length; f++) d[f] != a && this.showAsRolledOver(d[f])
                        }
                        this.showAsRolledOver(a)
                    } else(d = a.displayObject) && (this.allowClickOnSelectedObject ? d.setAttr("cursor",
                        "pointer") : d.setAttr("cursor", "default"));
                    if (this.showDescriptionOnHover) this.showDescription(a);
                    else if ((this.showBalloonOnSelectedObject || !this.checkIfSelected(a)) && !1 !== b && (f = this.balloon, b = a.colorReal, d = "", void 0 !== b && this.useObjectColorForBalloon || (b = f.fillColor), (f = a.balloonTextReal) && (d = this.formatString(f, a)), this.balloonLabelFunction && (d = this.balloonLabelFunction(a, this)), d && "" !== d)) {
                        var e, h;
                        "MapArea" == a.objectType && (h = this.getAreaCenterLatitude(a), e = this.getAreaCenterLongitude(a), h = this.latitudeToY(h),
                            e = this.longitudeToX(e));
                        "MapImage" == a.objectType && (e = a.displayObject.x * this.zoomLevel() + this.mapContainer.x, h = a.displayObject.y * this.zoomLevel() + this.mapContainer.y);
                        this.showBalloon(d, b, this.mouseIsOver, e, h)
                    }
                    c = {
                        type: "rollOverMapObject",
                        mapObject: a,
                        chart: this,
                        event: c
                    };
                    this.fire(c.type, c);
                    this.previouslyHovered = a
                }
            }
        },
        longitudeToX: function (a) {
            return this.longitudeToCoordinate(a) * this.zoomLevel() + this.mapContainer.x
        },
        latitudeToY: function (a) {
            return this.latitudeToCoordinate(a) * this.zoomLevel() + this.mapContainer.y
        },
        rollOutMapObject: function (a, b) {
            this.hideBalloon();
            if (this.chartCreated && a.isOver) {
                this.checkIfSelected(a) || this.returnInitialColor(a);
                var c = {
                    type: "rollOutMapObject",
                    mapObject: a,
                    chart: this,
                    event: b
                };
                this.fire(c.type, c)
            }
        },
        formatString: function (a, b) {
            var c = this.nf,
                g = this.pf,
                f = b.title;
            b.titleTr && (f = b.titleTr);
            void 0 == f && (f = "");
            var e = b.value,
                e = isNaN(e) ? "" : d.formatNumber(e, c),
                c = b.percents,
                c = isNaN(c) ? "" : d.formatNumber(c, g),
                g = b.description;
            void 0 == g && (g = "");
            var h = b.customData;
            void 0 == h && (h = "");
            return a = d.massReplace(a, {
                "[[title]]": f,
                "[[value]]": e,
                "[[percent]]": c,
                "[[description]]": g,
                "[[customData]]": h
            })
        },
        clickMapObject: function (a, b) {
            this.hideBalloon();
            if (this.chartCreated && !this.preventHover && !this.mapWasDragged && this.checkIfClickable(a) && !this.mapWasPinched) {
                this.selectObject(a);
                var c = {
                    type: "clickMapObject",
                    mapObject: a,
                    chart: this,
                    event: b
                };
                this.fire(c.type, c);
                this.objectWasClicked = !0
            }
        },
        checkIfClickable: function (a) {
            var b = this.allowClickOnSelectedObject;
            return this.selectedObject == a && b ? !0 : this.selectedObject != a ||
            b ? !0 === a.selectable || "MapArea" == a.objectType && a.autoZoomReal || a.url || a.linkToObject || 0 < a.images.length || 0 < a.lines.length || !isNaN(a.zoomLevel) || !isNaN(a.zoomX) || !isNaN(a.zoomY) || a.description ? !0 : !1 : !1
        },
        resizeMap: function () {
            var a = this.mapSet;
            if (a) {
                var b = 1,
                    c = a.getBBox(),
                    d = this.realWidth,
                    f = this.realHeight,
                    e = c.width,
                    h = c.height;
                this.fitMapToContainer && (b = e / d > h / f ? d / e : f / h);
                a.translate(-c.x * b, -c.y * b, b);
                this.mapScale = b;
                this.mapHeight = h * b;
                this.mapWidth = e * b
            }
        },
        zoomIn: function () {
            this.skipClick = !0;
            var a = this.zoomLevel() *
                this.zoomControl.zoomFactor;
            this.zoomTo(a)
        },
        zoomOut: function () {
            this.skipClick = !0;
            var a = this.zoomLevel() / this.zoomControl.zoomFactor;
            this.zoomTo(a)
        },
        moveLeft: function () {
            this.skipClick = !0;
            var a = this.zoomX() + this.zoomControl.panStepSize;
            this.zoomTo(this.zoomLevel(), a, this.zoomY())
        },
        moveRight: function () {
            this.skipClick = !0;
            var a = this.zoomX() - this.zoomControl.panStepSize;
            this.zoomTo(this.zoomLevel(), a, this.zoomY())
        },
        moveUp: function () {
            this.skipClick = !0;
            var a = this.zoomY() + this.zoomControl.panStepSize;
            this.zoomTo(this.zoomLevel(),
                this.zoomX(), a)
        },
        moveDown: function () {
            this.skipClick = !0;
            var a = this.zoomY() - this.zoomControl.panStepSize;
            this.zoomTo(this.zoomLevel(), this.zoomX(), a)
        },
        zoomX: function () {
            return this.mapSet ? Math.round(1E4 * this.mapContainer.x / this.mapWidth) / 1E4 : NaN
        },
        zoomY: function () {
            return this.mapSet ? Math.round(1E4 * this.mapContainer.y / this.mapHeight) / 1E4 : NaN
        },
        goHome: function () {
            this.selectObject(this.dataProvider);
            var a = {
                type: "homeButtonClicked",
                chart: this
            };
            this.fire(a.type, a)
        },
        zoomLevel: function () {
            return Math.round(1E5 *
                this.mapContainer.scale) / 1E5
        },
        showDescriptionAndGetUrl: function () {
            var a = this.selectedObject;
            if (a) {
                this.showDescription();
                var b = a.url;
                if (b) d.getURL(b, a.urlTarget);
                else if (b = a.linkToObject) {
                    if ("string" == typeof b) {
                        var c = this.getObjectById(b);
                        if (c) {
                            this.selectObject(c);
                            return
                        }
                    }
                    b && a.passZoomValuesToTarget && (b.zoomLatitude = this.zoomLatitude(), b.zoomLongitude = this.zoomLongitude(), b.zoomLevel = this.zoomLevel());
                    this.extendMapData(b) || this.selectObject(b)
                }
            }
        },
        extendMapData: function (a) {
            var b = a.objectType;
            if ("MapImage" !=
                b && "MapArea" != b && "MapLine" != b) return d.extend(a, new d.MapData, !0), this.dataProvider = a, this.zoomInstantly = !0, this.validateData(), !0
        },
        showDescription: function (a) {
            a || (a = this.selectedObject);
            this.allowMultipleDescriptionWindows || this.closeAllDescriptions();
            if (a.description) {
                var b = a.descriptionWindow;
                b && b.close();
                b = new d.DescriptionWindow;
                a.descriptionWindow = b;
                var c = a.descriptionWindowWidth,
                    g = a.descriptionWindowHeight,
                    f = a.descriptionWindowLeft,
                    e = a.descriptionWindowTop,
                    h = a.descriptionWindowRight,
                    k = a.descriptionWindowBottom;
                isNaN(h) || (f = this.realWidth - h);
                isNaN(k) || (e = this.realHeight - k);
                var l = a.descriptionWindowX;
                isNaN(l) || (f = l);
                l = a.descriptionWindowY;
                isNaN(l) || (e = l);
                isNaN(f) && (f = this.mouseX, f = f > this.realWidth / 2 ? f - c - 20 : f + 20);
                isNaN(e) && (e = this.mouseY);
                b.maxHeight = g;
                l = a.title;
                a.titleTr && (l = a.titleTr);
                b.show(this, this.descriptionsDiv, a.description, l);
                a = b.div.style;
                a.position = "absolute";
                a.width = c + "px";
                a.maxHeight = g + "px";
                isNaN(k) || (e -= b.div.offsetHeight);
                isNaN(h) || (f -= b.div.offsetWidth);
                a.left = f + "px";
                a.top = e + "px"
            }
        },
        parseXMLObject: function (a) {
            var b = {
                root: {}
            };
            this.parseXMLNode(b, "root", a);
            this.svgData = b.root.svg;
            this.getBounds()
        },
        getBounds: function () {
            var a = this.dataProvider;
            try {
                var b = this.svgData.defs["amcharts:ammap"];
                a.leftLongitude = Number(b.leftLongitude);
                a.rightLongitude = Number(b.rightLongitude);
                a.topLatitude = Number(b.topLatitude);
                a.bottomLatitude = Number(b.bottomLatitude);
                a.projection = b.projection;
                var c = b.wrappedLongitudes;
                c && (a.rightLongitude += 360);
                a.wrappedLongitudes = c
            } catch (d) {
            }
        },
        recalcLongitude: function (a) {
            var b = this.dataProvider.leftLongitude,
                c = this.dataProvider.wrappedLongitudes;
            return isNaN(a) && c ? a < b ? Number(a) + 360 : a : a
        },
        latitudeToCoordinate: function (a) {
            var b, c = this.dataProvider;
            if (this.mapSet) {
                b = c.topLatitude;
                var d = c.bottomLatitude;
                "mercator" == c.projection && (a = this.mercatorLatitudeToCoordinate(a), b = this.mercatorLatitudeToCoordinate(b), d = this.mercatorLatitudeToCoordinate(d));
                b = (a - b) / (d - b) * this.mapHeight
            }
            return b
        },
        longitudeToCoordinate: function (a) {
            a = this.recalcLongitude(a);
            var b, c = this.dataProvider;
            this.mapSet && (b = c.leftLongitude, b = (a -
            b) / (c.rightLongitude - b) * this.mapWidth);
            return b
        },
        mercatorLatitudeToCoordinate: function (a) {
            89.5 < a && (a = 89.5);
            -89.5 > a && (a = -89.5);
            a = d.degreesToRadians(a);
            a = .5 * Math.log((1 + Math.sin(a)) / (1 - Math.sin(a)));
            return d.radiansToDegrees(a / 2)
        },
        zoomLatitude: function () {
            if (this.mapContainer) return this.coordinateToLatitude((-this.mapContainer.y + this.previousHeight / 2) / this.zoomLevel())
        },
        zoomLongitude: function () {
            if (this.mapContainer) return this.coordinateToLongitude((-this.mapContainer.x + this.previousWidth / 2) / this.zoomLevel())
        },
        getAreaCenterLatitude: function (a) {
            a = a.displayObject.getBBox();
            var b = this.mapScale;
            a = -this.mapSet.getBBox().y * b + (a.y + a.height / 2) * b;
            return this.coordinateToLatitude(a)
        },
        getAreaCenterLongitude: function (a) {
            a = a.displayObject.getBBox();
            var b = this.mapScale;
            a = -this.mapSet.getBBox().x * b + (a.x + a.width / 2) * b;
            return this.coordinateToLongitude(a)
        },
        coordinateToLatitude: function (a) {
            var b;
            if (this.mapSet) {
                var c = this.dataProvider,
                    g = c.bottomLatitude,
                    f = c.topLatitude;
                b = this.mapHeight;
                "mercator" == c.projection ? (c = this.mercatorLatitudeToCoordinate(g),
                    f = this.mercatorLatitudeToCoordinate(f), a = 2 * Math.atan(Math.exp(2 * (a * (c - f) / b + f) * Math.PI / 180)) - .5 * Math.PI, b = d.radiansToDegrees(a)) : b = a / b * (g - f) + f
            }
            return Math.round(1E6 * b) / 1E6
        },
        coordinateToLongitude: function (a) {
            var b, c = this.dataProvider;
            this.mapSet && (b = a / this.mapWidth * (c.rightLongitude - c.leftLongitude) + c.leftLongitude);
            return Math.round(1E6 * b) / 1E6
        },
        milesToPixels: function (a) {
            var b = this.dataProvider;
            return this.mapWidth / (b.rightLongitude - b.leftLongitude) * a / 69.172
        },
        kilometersToPixels: function (a) {
            var b = this.dataProvider;
            return this.mapWidth / (b.rightLongitude - b.leftLongitude) * a / 111.325
        },
        handleBackgroundClick: function () {
            if (this.backgroundZoomsToTop && !this.mapWasDragged) {
                var a = this.dataProvider;
                if (this.checkIfClickable(a)) this.clickMapObject(a);
                else {
                    var b = a.zoomX,
                        c = a.zoomY,
                        d = a.zoomLongitude,
                        f = a.zoomLatitude,
                        a = a.zoomLevel;
                    isNaN(b) || isNaN(c) || this.zoomTo(a, b, c);
                    isNaN(d) || isNaN(f) || this.zoomToLongLat(a, d, f, !0)
                }
            }
        },
        parseXMLNode: function (a, b, c, d) {
            void 0 === d && (d = "");
            var f, e, h;
            if (c) {
                var k = c.childNodes.length;
                for (f = 0; f < k; f++) {
                    e =
                        c.childNodes[f];
                    var l = e.nodeName,
                        m = e.nodeValue ? this.trim(e.nodeValue) : "",
                        n = !1;
                    e.attributes && 0 < e.attributes.length && (n = !0);
                    if (0 !== e.childNodes.length || "" !== m || !1 !== n)
                        if (3 == e.nodeType || 4 == e.nodeType) {
                            if ("" !== m) {
                                e = 0;
                                for (h in a[b]) a[b].hasOwnProperty(h) && e++;
                                e ? a[b]["#text"] = m : a[b] = m
                            }
                        } else if (1 == e.nodeType) {
                            var q;
                            void 0 !== a[b][l] ? void 0 === a[b][l].length ? (q = a[b][l], a[b][l] = [], a[b][l].push(q), a[b][l].push({}), q = a[b][l][1]) : "object" == typeof a[b][l] && (a[b][l].push({}), q = a[b][l][a[b][l].length - 1]) : (a[b][l] = {}, q = a[b][l]);
                            if (e.attributes && e.attributes.length)
                                for (m = 0; m < e.attributes.length; m++) q[e.attributes[m].name] = e.attributes[m].value;
                            void 0 !== a[b][l].length ? this.parseXMLNode(a[b][l], a[b][l].length - 1, e, d + "  ") : this.parseXMLNode(a[b], l, e, d + "  ")
                        }
                }
                e = 0;
                c = "";
                for (h in a[b]) "#text" == h ? c = a[b][h] : e++;
                0 === e && void 0 === a[b].length && (a[b] = c)
            }
        },
        doDoubleClickZoom: function () {
            if (!this.mapWasDragged) {
                var a = this.zoomLevel() * this.zoomControl.zoomFactor;
                this.zoomToStageXY(a, this.mouseX, this.mouseY)
            }
        },
        getDevInfo: function () {
            var a =
                    this.zoomLevel(),
                a = {
                    chart: this,
                    type: "writeDevInfo",
                    zoomLevel: a,
                    zoomX: this.zoomX(),
                    zoomY: this.zoomY(),
                    zoomLatitude: this.zoomLatitude(),
                    zoomLongitude: this.zoomLongitude(),
                    latitude: this.coordinateToLatitude((this.mouseY - this.mapContainer.y) / a),
                    longitude: this.coordinateToLongitude((this.mouseX - this.mapContainer.x) / a),
                    left: this.mouseX,
                    top: this.mouseY,
                    right: this.realWidth - this.mouseX,
                    bottom: this.realHeight - this.mouseY,
                    percentLeft: Math.round(this.mouseX / this.realWidth * 100) + "%",
                    percentTop: Math.round(this.mouseY /
                    this.realHeight * 100) + "%",
                    percentRight: Math.round((this.realWidth - this.mouseX) / this.realWidth * 100) + "%",
                    percentBottom: Math.round((this.realHeight - this.mouseY) / this.realHeight * 100) + "%"
                },
                b = "zoomLevel:" + a.zoomLevel + ", zoomLongitude:" + a.zoomLongitude + ", zoomLatitude:" + a.zoomLatitude + "\n",
                b = b + ("zoomX:" + a.zoomX + ", zoomY:" + a.zoomY + "\n"),
                b = b + ("latitude:" + a.latitude + ", longitude:" + a.longitude + "\n"),
                b = b + ("left:" + a.left + ", top:" + a.top + "\n"),
                b = b + ("right:" + a.right + ", bottom:" + a.bottom + "\n"),
                b = b + ("left:" + a.percentLeft +
                    ", top:" + a.percentTop + "\n"),
                b = b + ("right:" + a.percentRight + ", bottom:" + a.percentBottom + "\n");
            a.str = b;
            this.fire(a.type, a);
            return a
        },
        getXY: function (a, b, c) {
            void 0 !== a && (-1 != String(a).indexOf("%") ? (a = Number(a.split("%").join("")), c && (a = 100 - a), a = Number(a) * b / 100) : c && (a = b - a));
            return a
        },
        getObjectById: function (a) {
            var b = this.dataProvider;
            if (b.areas) {
                var c = this.getObject(a, b.areas);
                if (c) return c
            }
            if (c = this.getObject(a, b.images)) return c;
            if (a = this.getObject(a, b.lines)) return a
        },
        getObject: function (a, b) {
            if (b) {
                var c;
                for (c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (d.id == a) return d;
                    if (d.areas) {
                        var f = this.getObject(a, d.areas);
                        if (f) return f
                    }
                    if (f = this.getObject(a, d.images)) return f;
                    if (d = this.getObject(a, d.lines)) return d
                }
            }
        },
        parseData: function () {
            var a = this.dataProvider;
            this.processObject(a.areas, a, "area");
            this.processObject(a.images, a, "image");
            this.processObject(a.lines, a, "line")
        },
        processObject: function (a, b, c) {
            if (a) {
                var g;
                for (g = 0; g < a.length; g++) {
                    var f = a[g];
                    f.parentObject = b;
                    "area" == c && d.extend(f, new d.MapArea(this.theme), !0);
                    "image" == c && (f = d.extend(f, new d.MapImage(this.theme), !0));
                    "line" == c && (f = d.extend(f, new d.MapLine(this.theme), !0));
                    a[g] = f;
                    f.areas && this.processObject(f.areas, f, "area");
                    f.images && this.processObject(f.images, f, "image");
                    f.lines && this.processObject(f.lines, f, "line")
                }
            }
        },
        positionChanged: function () {
            var a = {
                type: "positionChanged",
                zoomX: this.zoomX(),
                zoomY: this.zoomY(),
                zoomLevel: this.zoomLevel(),
                chart: this
            };
            this.fire(a.type, a)
        },
        getX: function (a, b) {
            return this.getXY(a, this.realWidth, b)
        },
        getY: function (a, b) {
            return this.getXY(a,
                this.realHeight, b)
        },
        trim: function (a) {
            if (a) {
                var b;
                for (b = 0; b < a.length; b++)
                    if (-1 === " \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(b))) {
                        a = a.substring(b);
                        break
                    }
                for (b = a.length - 1; 0 <= b; b--)
                    if (-1 === " \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(b))) {
                        a = a.substring(0, b + 1);
                        break
                    }
                return -1 === " \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(0)) ?
                    a : ""
            }
        },
        destroy: function () {
            d.AmMap.base.destroy.call(this)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.ZoomControl = d.Class({
        construct: function (a) {
            this.cname = "ZoomControl";
            this.panStepSize = .1;
            this.zoomFactor = 2;
            this.maxZoomLevel = 64;
            this.minZoomLevel = 1;
            this.zoomControlEnabled = this.panControlEnabled = !0;
            this.buttonRollOverColor = "#CC0000";
            this.buttonFillColor = "#990000";
            this.buttonFillAlpha = 1;
            this.buttonBorderColor = "#FFFFFF";
            this.buttonIconAlpha = this.buttonBorderThickness = this.buttonBorderAlpha = 1;
            this.gridColor = "#FFFFFF";
            this.homeIconFile = "homeIcon.gif";
            this.gridBackgroundColor =
                "#000000";
            this.gridBackgroundAlpha = .15;
            this.gridAlpha = 1;
            this.buttonSize = 18;
            this.iconSize = 11;
            this.buttonCornerRadius = 0;
            this.gridHeight = 150;
            this.top = this.left = 10;
            d.applyTheme(this, a, this.cname)
        },
        init: function (a, b) {
            var c = this;
            c.chart = a;
            d.remove(c.set);
            var g = b.set();
            d.setCN(a, g, "zoom-control");
            var f = c.buttonSize,
                e = c.zoomControlEnabled,
                h = c.panControlEnabled,
                k = c.buttonFillColor,
                l = c.buttonFillAlpha,
                m = c.buttonBorderThickness,
                n = c.buttonBorderColor,
                q = c.buttonBorderAlpha,
                u = c.buttonCornerRadius,
                p = c.buttonRollOverColor,
                z = c.gridHeight,
                C = c.zoomFactor,
                w = c.minZoomLevel,
                D = c.maxZoomLevel,
                x = c.buttonIconAlpha,
                A = a.getX(c.left),
                r = a.getY(c.top);
            isNaN(c.right) || (A = a.getX(c.right, !0), A = h ? A - 3 * f : A - f);
            isNaN(c.bottom) || (r = a.getY(c.bottom, !0), e && (r -= z + 3 * f), r = h ? r - 3 * f : r + f);
            g.translate(A, r);
            c.previousDY = NaN;
            var v;
            if (e) {
                v = b.set();
                d.setCN(a, v, "zoom-control-zoom");
                g.push(v);
                c.set = g;
                c.zoomSet = v;
                r = d.rect(b, f + 6, z + 2 * f + 6, c.gridBackgroundColor, c.gridBackgroundAlpha, 0, 0, 0, 4);
                d.setCN(a, r, "zoom-bg");
                r.translate(-3, -3);
                r.mouseup(function () {
                    c.handleBgUp()
                }).touchend(function () {
                    c.handleBgUp()
                });
                v.push(r);
                r = new d.SimpleButton;
                r.setIcon(a.pathToImages + "plus.gif", c.iconSize);
                r.setClickHandler(a.zoomIn, a);
                r.init(b, f, f, k, l, m, n, q, u, p, x);
                d.setCN(a, r.set, "zoom-in");
                v.push(r.set);
                r = new d.SimpleButton;
                r.setIcon(a.pathToImages + "minus.gif", c.iconSize);
                r.setClickHandler(a.zoomOut, a);
                r.init(b, f, f, k, l, m, n, q, u, p, x);
                r.set.translate(0, z + f);
                d.setCN(a, r.set, "zoom-out");
                v.push(r.set);
                var A = Math.log(D / w) / Math.log(C) + 1,
                    e = z / A,
                    t;
                for (t = 1; t < A; t++) r = f + t * e, r = d.line(b, [1, f - 2], [r, r], c.gridColor, c.gridAlpha, 1), d.setCN(a,
                    r, "zoom-grid"), v.push(r);
                r = new d.SimpleButton;
                r.setDownHandler(c.draggerDown, c);
                r.setClickHandler(c.draggerUp, c);
                r.init(b, f, e, k, l, m, n, q, u, p);
                d.setCN(a, r.set, "zoom-dragger");
                v.push(r.set);
                c.dragger = r.set;
                c.previousY = NaN;
                z -= e;
                w = Math.log(w / 100) / Math.log(C);
                C = Math.log(D / 100) / Math.log(C);
                c.realStepSize = z / (C - w);
                c.realGridHeight = z;
                c.stepMax = C
            }
            h && (h = b.set(), d.setCN(a, h, "zoom-control-pan"), g.push(h), v && v.translate(f, 4 * f), v = new d.SimpleButton, v.setIcon(a.pathToImages + "panLeft.gif", c.iconSize), v.setClickHandler(a.moveLeft,
                a), v.init(b, f, f, k, l, m, n, q, u, p, x), v.set.translate(0, f), d.setCN(a, v.set, "pan-left"), h.push(v.set), v = new d.SimpleButton, v.setIcon(a.pathToImages + "panRight.gif", c.iconSize), v.setClickHandler(a.moveRight, a), v.init(b, f, f, k, l, m, n, q, u, p, x), v.set.translate(2 * f, f), d.setCN(a, v.set, "pan-right"), h.push(v.set), v = new d.SimpleButton, v.setIcon(a.pathToImages + "panUp.gif", c.iconSize), v.setClickHandler(a.moveUp, a), v.init(b, f, f, k, l, m, n, q, u, p, x), v.set.translate(f, 0), d.setCN(a, v.set, "pan-up"), h.push(v.set), v = new d.SimpleButton,
                v.setIcon(a.pathToImages + "panDown.gif", c.iconSize), v.setClickHandler(a.moveDown, a), v.init(b, f, f, k, l, m, n, q, u, p, x), v.set.translate(f, 2 * f), d.setCN(a, v.set, "pan-down"), h.push(v.set), l = new d.SimpleButton, l.setIcon(a.pathToImages + c.homeIconFile, c.iconSize), l.setClickHandler(a.goHome, a), l.init(b, f, f, k, 0, 0, n, 0, u, p, x), l.set.translate(f, f), d.setCN(a, l.set, "pan-home"), h.push(l.set), g.push(h))
        },
        draggerDown: function () {
            this.chart.stopDrag();
            this.isDragging = !0
        },
        draggerUp: function () {
            this.isDragging = !1
        },
        handleBgUp: function () {
            var a =
                    this.chart,
                b = 100 * Math.pow(this.zoomFactor, this.stepMax - (a.mouseY - this.zoomSet.y - this.set.y - this.buttonSize - this.realStepSize / 2) / this.realStepSize);
            a.zoomTo(b)
        },
        update: function () {
            var a, b = this.zoomFactor,
                c = this.realStepSize,
                g = this.stepMax,
                f = this.dragger,
                e = this.buttonSize,
                h = this.chart;
            this.isDragging ? (h.stopDrag(), a = f.y + (h.mouseY - this.previousY), a = d.fitToBounds(a, e, this.realGridHeight + e), c = 100 * Math.pow(b, g - (a - e) / c), h.zoomTo(c, NaN, NaN, !0)) : (a = Math.log(h.zoomLevel() / 100) / Math.log(b), a = (g - a) * c + e);
            this.previousY =
                h.mouseY;
            this.previousDY != a && f && (f.translate(0, a), this.previousDY = a)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.SimpleButton = d.Class({
        construct: function () {
        },
        init: function (a, b, c, g, f, e, h, k, l, m, n) {
            var q = this;
            q.rollOverColor = m;
            q.color = g;
            m = a.set();
            q.set = m;
            g = d.rect(a, b, c, g, f, e, h, k, l);
            m.push(g);
            if (f = q.iconPath) e = q.iconSize, a = a.image(f, (b - e) / 2, (c - e) / 2, e, e), m.push(a), a.setAttr("opacity", n), a.mousedown(function () {
                q.handleDown()
            }).mouseup(function () {
                q.handleUp()
            }).mouseover(function () {
                q.handleOver()
            }).mouseout(function () {
                q.handleOut()
            });
            g.mousedown(function () {
                q.handleDown()
            }).touchstart(function () {
                q.handleDown()
            }).mouseup(function () {
                q.handleUp()
            }).touchend(function () {
                q.handleUp()
            }).mouseover(function () {
                q.handleOver()
            }).mouseout(function () {
                q.handleOut()
            });
            q.bg = g
        },
        setIcon: function (a, b) {
            this.iconPath = a;
            this.iconSize = b
        },
        setClickHandler: function (a, b) {
            this.clickHandler = a;
            this.scope = b
        },
        setDownHandler: function (a, b) {
            this.downHandler = a;
            this.scope = b
        },
        handleUp: function () {
            var a = this.clickHandler;
            a && a.call(this.scope)
        },
        handleDown: function () {
            var a = this.downHandler;
            a && a.call(this.scope)
        },
        handleOver: function () {
            this.bg.setAttr("fill", this.rollOverColor)
        },
        handleOut: function () {
            this.bg.setAttr("fill", this.color)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.SmallMap = d.Class({
        construct: function (a) {
            this.cname = "SmallMap";
            this.mapColor = "#e6e6e6";
            this.rectangleColor = "#FFFFFF";
            this.top = this.right = 10;
            this.minimizeButtonWidth = 16;
            this.backgroundColor = "#9A9A9A";
            this.backgroundAlpha = 1;
            this.borderColor = "#FFFFFF";
            this.borderThickness = 3;
            this.borderAlpha = 1;
            this.size = .2;
            this.enabled = !0;
            d.applyTheme(this, a, this.cname)
        },
        init: function (a, b) {
            var c = this;
            if (c.enabled) {
                c.chart = a;
                c.container = b;
                c.width = a.realWidth * c.size;
                c.height = a.realHeight *
                c.size;
                d.remove(c.set);
                var g = b.set();
                c.set = g;
                d.setCN(a, g, "small-map");
                var f = b.set();
                c.allSet = f;
                g.push(f);
                c.buildSVGMap();
                var e = c.borderThickness,
                    h = c.borderColor,
                    k = d.rect(b, c.width + e, c.height + e, c.backgroundColor, c.backgroundAlpha, e, h, c.borderAlpha);
                d.setCN(a, k, "small-map-bg");
                k.translate(-e / 2, -e / 2);
                f.push(k);
                k.toBack();
                var l, m, k = c.minimizeButtonWidth,
                    n = new d.SimpleButton;
                n.setIcon(a.pathToImages + "arrowDown.gif", k);
                n.setClickHandler(c.minimize, c);
                n.init(b, k, k, h, 1, 1, h, 1);
                d.setCN(a, n.set, "small-map-down");
                n = n.set;
                c.downButtonSet = n;
                g.push(n);
                var q = new d.SimpleButton;
                q.setIcon(a.pathToImages + "arrowUp.gif", k);
                q.setClickHandler(c.maximize, c);
                q.init(b, k, k, h, 1, 1, h, 1);
                d.setCN(a, q.set, "small-map-up");
                h = q.set;
                c.upButtonSet = h;
                h.hide();
                g.push(h);
                var u, p;
                isNaN(c.top) || (l = a.getY(c.top) + e, p = 0);
                isNaN(c.bottom) || (l = a.getY(c.bottom, !0) - c.height - e, p = c.height - k + e / 2);
                isNaN(c.left) || (m = a.getX(c.left) + e, u = -e / 2);
                isNaN(c.right) || (m = a.getX(c.right, !0) - c.width - e, u = c.width - k + e / 2);
                e = b.set();
                e.clipRect(1, 1, c.width, c.height);
                f.push(e);
                c.rectangleC = e;
                g.translate(m, l);
                n.translate(u, p);
                h.translate(u, p);
                f.mouseup(function () {
                    c.handleMouseUp()
                });
                c.drawRectangle()
            } else d.remove(c.allSet), d.remove(c.downButtonSet), d.remove(c.upButtonSet)
        },
        minimize: function () {
            this.downButtonSet.hide();
            this.upButtonSet.show();
            this.allSet.hide()
        },
        maximize: function () {
            this.downButtonSet.show();
            this.upButtonSet.hide();
            this.allSet.show()
        },
        buildSVGMap: function () {
            var a = this.chart,
                b = {
                    fill: this.mapColor,
                    stroke: this.mapColor,
                    "stroke-opacity": 1
                },
                c = a.svgData.g.path,
                g = this.container,
                f = g.set();
            d.setCN(a, f, "small-map-image");
            var e;
            for (e = 0; e < c.length; e++) {
                var h = g.path(c[e].d).attr(b);
                f.push(h)
            }
            this.allSet.push(f);
            b = f.getBBox();
            c = this.size * a.mapScale;
            g = -b.x * c;
            e = -b.y * c;
            var k = h = 0;
            a.centerMap && (h = (this.width - b.width * c) / 2, k = (this.height - b.height * c) / 2);
            this.mapWidth = b.width * c;
            this.mapHeight = b.height * c;
            this.dx = h;
            this.dy = k;
            f.translate(g + h, e + k, c)
        },
        update: function () {
            var a = this.chart,
                b = a.zoomLevel(),
                c = this.width,
                d = a.mapContainer,
                a = c / (a.realWidth * b),
                c = c / b,
                b = this.height / b,
                f =
                    this.rectangle;
            f.translate(-d.x * a + this.dx, -d.y * a + this.dy);
            0 < c && 0 < b && (f.setAttr("width", Math.ceil(c + 1)), f.setAttr("height", Math.ceil(b + 1)));
            this.rWidth = c;
            this.rHeight = b
        },
        drawRectangle: function () {
            var a = this.rectangle;
            d.remove(a);
            a = d.rect(this.container, 10, 10, "#000", 0, 1, this.rectangleColor, 1);
            d.setCN(this.chart, a, "small-map-rectangle");
            this.rectangleC.push(a);
            this.rectangle = a
        },
        handleMouseUp: function () {
            var a = this.chart,
                b = a.zoomLevel();
            a.zoomTo(b, -((a.mouseX - this.set.x - this.dx - this.rWidth / 2) / this.mapWidth) *
            b, -((a.mouseY - this.set.y - this.dy - this.rHeight / 2) / this.mapHeight) * b)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.AreasProcessor = d.Class({
        construct: function (a) {
            this.chart = a
        },
        process: function (a) {
            this.updateAllAreas();
            this.allObjects = [];
            a = a.areas;
            var b = this.chart,
                c, g = a.length,
                f, e, h = 0,
                k = b.svgAreasById,
                l = !1,
                m = !1,
                n = 0;
            for (f = 0; f < g; f++) {
                e = a[f];
                e = e.value;
                if (!1 === l || l < e) l = e;
                if (!1 === m || m > e) m = e;
                isNaN(e) || (h += Math.abs(e), n++)
            }
            isNaN(b.minValue) || (m = b.minValue);
            isNaN(b.maxValue) || (l = b.maxValue);
            b.maxValueReal = l;
            b.minValueReal = m;
            for (f = 0; f < g; f++) e = a[f], isNaN(e.value) ? e.percents = void 0 : (e.percents =
                (e.value - m) / h * 100, m == l && (e.percents = 100));
            for (f = 0; f < g; f++) {
                e = a[f];
                var q = k[e.id];
                c = b.areasSettings;
                q && q.className && (h = b.areasClasses[q.className]) && (c = h, c = d.processObject(c, d.AreasSettings, b.theme));
                var u = c.color,
                    p = c.alpha,
                    z = c.outlineThickness,
                    C = c.rollOverColor,
                    w = c.selectedColor,
                    D = c.rollOverAlpha,
                    x = c.outlineColor,
                    A = c.outlineAlpha,
                    r = c.balloonText,
                    v = c.selectable,
                    t = c.pattern,
                    y = c.rollOverOutlineColor,
                    E = c.bringForwardOnHover,
                    G = c.preserveOriginalAttributes;
                this.allObjects.push(e);
                e.chart = b;
                e.baseSettings =
                    c;
                e.autoZoomReal = void 0 == e.autoZoom ? c.autoZoom : e.autoZoom;
                h = e.color;
                void 0 == h && (h = u);
                n = e.alpha;
                isNaN(n) && (n = p);
                p = e.rollOverAlpha;
                isNaN(p) && (p = D);
                isNaN(p) && (p = n);
                D = e.rollOverColor;
                void 0 == D && (D = C);
                C = e.pattern;
                void 0 == C && (C = t);
                t = e.selectedColor;
                void 0 == t && (t = w);
                (w = e.balloonText) || (w = r);
                void 0 == c.colorSolid || isNaN(e.value) || (r = Math.floor((e.value - m) / ((l - m) / b.colorSteps)), r == b.colorSteps && r--, r *= 1 / (b.colorSteps - 1), l == m && (r = 1), e.colorReal = d.getColorFade(h, c.colorSolid, r));
                void 0 != e.color && (e.colorReal =
                    e.color);
                void 0 == e.selectable && (e.selectable = v);
                void 0 == e.colorReal && (e.colorReal = u);
                u = e.outlineColor;
                void 0 == u && (u = x);
                x = e.outlineAlpha;
                isNaN(x) && (x = A);
                A = e.outlineThickness;
                isNaN(A) && (A = z);
                z = e.rollOverOutlineColor;
                void 0 == z && (z = y);
                void 0 == e.bringForwardOnHover && (e.bringForwardOnHover = E);
                void 0 == e.preserveOriginalAttributes && (e.preserveOriginalAttributes = G);
                e.alphaReal = n;
                e.rollOverColorReal = D;
                e.rollOverAlphaReal = p;
                e.balloonTextReal = w;
                e.selectedColorReal = t;
                e.outlineColorReal = u;
                e.outlineAlphaReal = x;
                e.rollOverOutlineColorReal = z;
                e.outlineThicknessReal = A;
                e.patternReal = C;
                d.processDescriptionWindow(c, e);
                if (q && (c = q.area, y = q.title, e.enTitle = q.title, y && !e.title && (e.title = y), (q = b.language) ? (y = d.mapTranslations) && (q = y[q]) && q[e.enTitle] && (e.titleTr = q[e.enTitle]) : e.titleTr = void 0, c)) {
                    e.displayObject = c;
                    e.mouseEnabled && b.addObjectEventListeners(c, e);
                    var F;
                    void 0 != h && (F = h);
                    void 0 != e.colorReal && (F = e.showAsSelected || b.selectedObject == e ? e.selectedColorReal : e.colorReal);
                    c.node.setAttribute("class", "");
                    d.setCN(b,
                        c, "map-area");
                    d.setCN(b, c, "map-area-" + c.id);
                    e.preserveOriginalAttributes || (c.setAttr("fill", F), c.setAttr("stroke", u), c.setAttr("stroke-opacity", x), c.setAttr("stroke-width", A), c.setAttr("fill-opacity", n));
                    C && c.pattern(C, b.mapScale, b.path);
                    e.hidden && c.hide()
                }
            }
        },
        updateAllAreas: function () {
            var a = this.chart,
                b = a.areasSettings,
                c = b.unlistedAreasColor,
                g = b.unlistedAreasAlpha,
                f = b.unlistedAreasOutlineColor,
                e = b.unlistedAreasOutlineAlpha,
                h = a.svgAreas,
                k = a.dataProvider,
                l = k.areas,
                m = {},
                n;
            for (n = 0; n < l.length; n++) m[l[n].id] =
                l[n];
            for (n = 0; n < h.length; n++) {
                l = h[n];
                if (b.preserveOriginalAttributes) {
                    if (l.customAttr)
                        for (var q in l.customAttr) l.setAttr(q, l.customAttr[q])
                } else void 0 != c && l.setAttr("fill", c), isNaN(g) || l.setAttr("fill-opacity", g), void 0 != f && l.setAttr("stroke", f), isNaN(e) || l.setAttr("stroke-opacity", e), l.setAttr("stroke-width", b.outlineThickness);
                d.setCN(a, l, "map-area-unlisted");
                if (k.getAreasFromMap && !m[l.id]) {
                    var u = new d.MapArea(a.theme);
                    u.parentObject = k;
                    u.id = l.id;
                    k.areas.push(u)
                }
            }
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.AreasSettings = d.Class({
        construct: function (a) {
            this.cname = "AreasSettings";
            this.alpha = 1;
            this.autoZoom = !1;
            this.balloonText = "[[title]]";
            this.color = "#FFCC00";
            this.colorSolid = "#990000";
            this.unlistedAreasAlpha = 1;
            this.unlistedAreasColor = "#DDDDDD";
            this.outlineColor = "#FFFFFF";
            this.outlineAlpha = 1;
            this.outlineThickness = .5;
            this.selectedColor = this.rollOverOutlineColor = "#CC0000";
            this.unlistedAreasOutlineColor = "#FFFFFF";
            this.unlistedAreasOutlineAlpha = 1;
            this.descriptionWindowWidth =
                250;
            this.adjustOutlineThickness = !1;
            this.bringForwardOnHover = !0;
            d.applyTheme(this, a, this.cname)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.ImagesProcessor = d.Class({
        construct: function (a) {
            this.chart = a;
            this.reset()
        },
        process: function (a) {
            var b = a.images,
                c;
            for (c = 0; c < b.length; c++) this.createImage(b[c], c);
            a.parentObject && a.remainVisible && this.process(a.parentObject)
        },
        createImage: function (a, b) {
            var c = this.chart,
                g = c.container,
                f = c.mapImagesContainer,
                e = c.stageImagesContainer,
                h = c.imagesSettings;
            a.remove && a.remove();
            var k = h.color,
                l = h.alpha,
                m = h.rollOverColor,
                n = h.selectedColor,
                q = h.balloonText,
                u = h.outlineColor,
                p = h.outlineAlpha,
                z = h.outlineThickness,
                C = h.selectedScale,
                w = h.labelPosition,
                D = h.labelColor,
                x = h.labelFontSize,
                A = h.bringForwardOnHover,
                r = h.labelRollOverColor,
                v = h.selectedLabelColor;
            a.index = b;
            a.chart = c;
            a.baseSettings = c.imagesSettings;
            var t = g.set();
            a.displayObject = t;
            var y = a.color;
            void 0 == y && (y = k);
            k = a.alpha;
            isNaN(k) && (k = l);
            void 0 == a.bringForwardOnHover && (a.bringForwardOnHover = A);
            l = a.outlineAlpha;
            isNaN(l) && (l = p);
            p = a.rollOverColor;
            void 0 == p && (p = m);
            m = a.selectedColor;
            void 0 == m && (m = n);
            (n = a.balloonText) || (n = q);
            q = a.outlineColor;
            void 0 == q && (q = u);
            void 0 == q && (q = y);
            u = a.outlineThickness;
            isNaN(u) && (u = z);
            (z = a.labelPosition) || (z = w);
            w = a.labelColor;
            void 0 == w && (w = D);
            D = a.labelRollOverColor;
            void 0 == D && (D = r);
            r = a.selectedLabelColor;
            void 0 == r && (r = v);
            v = a.labelFontSize;
            isNaN(v) && (v = x);
            x = a.selectedScale;
            isNaN(x) && (x = C);
            isNaN(a.rollOverScale);
            a.colorReal = y;
            a.alphaReal = k;
            a.rollOverColorReal = p;
            a.balloonTextReal = n;
            a.selectedColorReal = m;
            a.labelColorReal = w;
            a.labelRollOverColorReal = D;
            a.selectedLabelColorReal = r;
            a.labelFontSizeReal = v;
            a.labelPositionReal =
                z;
            a.selectedScaleReal = x;
            a.rollOverScaleReal = x;
            d.processDescriptionWindow(h, a);
            a.centeredReal = void 0 == a.centered ? h.centered : a.centered;
            v = a.type;
            r = a.imageURL;
            D = a.svgPath;
            p = a.width;
            w = a.height;
            C = a.scale;
            isNaN(a.percentWidth) || (p = a.percentWidth / 100 * c.realWidth);
            isNaN(a.percentHeight) || (w = a.percentHeight / 100 * c.realHeight);
            var E;
            r || v || D || (v = "circle", p = 1, l = k = 0);
            m = x = 0;
            h = a.selectedColorReal;
            if (v) {
                isNaN(p) && (p = 10);
                isNaN(w) && (w = 10);
                "kilometers" == a.widthAndHeightUnits && (p = c.kilometersToPixels(a.width), w = c.kilometersToPixels(a.height));
                "miles" == a.widthAndHeightUnits && (p = c.milesToPixels(a.width), w = c.milesToPixels(a.height));
                if ("circle" == v || "bubble" == v) w = p;
                E = this.createPredefinedImage(y, q, u, v, p, w);
                m = x = 0;
                a.centeredReal ? (isNaN(a.right) || (x = p * C), isNaN(a.bottom) || (m = w * C)) : (x = p * C / 2, m = w * C / 2);
                E.translate(x, m, C)
            } else r ? (isNaN(p) && (p = 10), isNaN(w) && (w = 10), E = g.image(r, 0, 0, p, w), E.node.setAttribute("preserveAspectRatio", "none"), E.setAttr("opacity", k), a.centeredReal && (x = isNaN(a.right) ? -p / 2 : p / 2, m = isNaN(a.bottom) ? -w / 2 : w / 2, E.translate(x, m))) : D && (E =
                g.path(D), q = E.getBBox(), a.centeredReal ? (x = -q.x * C - q.width * C / 2, isNaN(a.right) || (x = -x), m = -q.y * C - q.height * C / 2, isNaN(a.bottom) || (m = -m)) : x = m = 0, E.translate(x, m, C), E.x = x, E.y = m);
            E && (t.push(E), a.image = E, E.setAttr("stroke-opacity", l), E.setAttr("fill-opacity", k), E.setAttr("fill", y), d.setCN(c, E, "map-image"), void 0 != a.id && d.setCN(c, E, "map-image-" + a.id));
            y = a.labelColorReal;
            !a.showAsSelected && c.selectedObject != a || void 0 == h || (E.setAttr("fill", h), y = a.selectedLabelColorReal);
            E = null;
            void 0 !== a.label && (E = d.text(g, a.label,
                y, c.fontFamily, a.labelFontSizeReal, a.labelAlign), d.setCN(c, E, "map-image-label"), void 0 !== a.id && d.setCN(c, E, "map-image-label-" + a.id), y = a.labelBackgroundAlpha, (k = a.labelBackgroundColor) && 0 < y && (l = E.getBBox(), g = d.rect(g, l.width + 16, l.height + 10, k, y), d.setCN(c, g, "map-image-label-background"), void 0 != a.id && d.setCN(c, g, "map-image-label-background-" + a.id), t.push(g), a.labelBG = g), a.imageLabel = E, t.push(E), d.setCN(c, t, "map-image-container"), void 0 != a.id && d.setCN(c, t, "map-image-container-" + a.id));
            isNaN(a.latitude) ||
            isNaN(a.longitude) ? e.push(t) : f.push(t);
            t && (t.rotation = a.rotation);
            this.updateSizeAndPosition(a);
            a.mouseEnabled && c.addObjectEventListeners(t, a);
            a.hidden && t.hide()
        },
        updateSizeAndPosition: function (a) {
            var b = this.chart,
                c = a.displayObject,
                d = b.getX(a.left),
                f = b.getY(a.top),
                e = a.image.getBBox();
            isNaN(a.right) || (d = b.getX(a.right, !0) - e.width * a.scale);
            isNaN(a.bottom) || (f = b.getY(a.bottom, !0) - e.height * a.scale);
            var h = a.longitude,
                k = a.latitude,
                e = this.objectsToResize;
            this.allSvgObjects.push(c);
            this.allObjects.push(a);
            var l = a.imageLabel;
            if (!isNaN(d) && !isNaN(f)) c.translate(d, f);
            else if (!isNaN(k) && !isNaN(h) && (d = b.longitudeToCoordinate(h), f = b.latitudeToCoordinate(k), c.translate(d, f, NaN, !0), a.fixedSize)) {
                d = 1;
                if (a.showAsSelected || b.selectedObject == a) d = a.selectedScaleReal;
                e.push({
                    image: c,
                    scale: d
                })
            }
            this.positionLabel(l, a, a.labelPositionReal)
        },
        positionLabel: function (a, b, c) {
            if (a) {
                var d = b.image,
                    f = 0,
                    e = 0,
                    h = 0,
                    k = 0;
                d && (k = d.getBBox(), e = d.y, f = d.x, h = k.width, k = k.height, b.svgPath && (h *= b.scale, k *= b.scale));
                var d = a.getBBox(),
                    l = d.width,
                    m = d.height;
                "right" == c && (f += h + l / 2 + 5, e += k / 2 - 2);
                "left" == c && (f += -l / 2 - 5, e += k / 2 - 2);
                "top" == c && (e -= m / 2 + 3, f += h / 2);
                "bottom" == c && (e += k + m / 2, f += h / 2);
                "middle" == c && (f += h / 2, e += k / 2);
                a.translate(f + b.labelShiftX, e + b.labelShiftY);
                b.labelBG && b.labelBG.translate(f - d.width / 2 + b.labelShiftX - 9, e + b.labelShiftY - d.height / 2 - 3)
            }
        },
        createPredefinedImage: function (a, b, c, g, f, e) {
            var h = this.chart.container,
                k;
            switch (g) {
                case "circle":
                    k = d.circle(h, f / 2, a, 1, c, b, 1);
                    break;
                case "rectangle":
                    k = d.polygon(h, [-f / 2, f / 2, f / 2, -f / 2], [e / 2, e / 2, -e / 2, -e / 2],
                        a, 1, c, b, 1);
                    break;
                case "bubble":
                    k = d.circle(h, f / 2, a, 1, c, b, 1, !0)
            }
            return k
        },
        reset: function () {
            this.objectsToResize = [];
            this.allSvgObjects = [];
            this.allObjects = [];
            this.allLabels = []
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.ImagesSettings = d.Class({
        construct: function (a) {
            this.cname = "ImagesSettings";
            this.balloonText = "[[title]]";
            this.alpha = 1;
            this.borderAlpha = 0;
            this.borderThickness = 1;
            this.labelPosition = "right";
            this.labelColor = "#000000";
            this.labelFontSize = 11;
            this.color = "#000000";
            this.labelRollOverColor = "#00CC00";
            this.centered = !0;
            this.rollOverScale = this.selectedScale = 1;
            this.descriptionWindowWidth = 250;
            this.bringForwardOnHover = !0;
            d.applyTheme(this, a, this.cname)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.LinesProcessor = d.Class({
        construct: function (a) {
            this.chart = a;
            this.reset()
        },
        process: function (a) {
            var b = a.lines,
                c = this.chart,
                g = c.linesSettings,
                f = this.objectsToResize,
                e = c.mapLinesContainer,
                h = c.stageLinesContainer,
                k = g.thickness,
                l = g.dashLength,
                m = g.arrow,
                n = g.arrowSize,
                q = g.arrowColor,
                u = g.arrowAlpha,
                p = g.color,
                z = g.alpha,
                C = g.rollOverColor,
                w = g.selectedColor,
                D = g.rollOverAlpha,
                x = g.balloonText,
                A = g.bringForwardOnHover,
                r = c.container,
                v;
            for (v = 0; v < b.length; v++) {
                var t = b[v];
                t.chart = c;
                t.baseSettings = g;
                var y = r.set();
                t.displayObject = y;
                this.allSvgObjects.push(y);
                this.allObjects.push(t);
                t.mouseEnabled && c.addObjectEventListeners(y, t);
                if (t.remainVisible || c.selectedObject == t.parentObject) {
                    var E = t.thickness;
                    isNaN(E) && (E = k);
                    var G = t.dashLength;
                    isNaN(G) && (G = l);
                    var F = t.color;
                    void 0 == F && (F = p);
                    var B = t.alpha;
                    isNaN(B) && (B = z);
                    var H = t.rollOverAlpha;
                    isNaN(H) && (H = D);
                    isNaN(H) && (H = B);
                    var J = t.rollOverColor;
                    void 0 == J && (J = C);
                    var U = t.selectedColor;
                    void 0 == U && (U = w);
                    var S = t.balloonText;
                    S || (S = x);
                    var M = t.arrow;
                    if (!M || "none" == M && "none" != m) M = m;
                    var O = t.arrowColor;
                    void 0 == O && (O = q);
                    void 0 == O && (O = F);
                    var P = t.arrowAlpha;
                    isNaN(P) && (P = u);
                    isNaN(P) && (P = B);
                    var N = t.arrowSize;
                    isNaN(N) && (N = n);
                    t.alphaReal = B;
                    t.colorReal = F;
                    t.rollOverColorReal = J;
                    t.rollOverAlphaReal = H;
                    t.balloonTextReal = S;
                    t.selectedColorReal = U;
                    t.thicknessReal = E;
                    void 0 == t.bringForwardOnHover && (t.bringForwardOnHover = A);
                    d.processDescriptionWindow(g, t);
                    var H = this.processCoordinates(t.x, c.realWidth),
                        J = this.processCoordinates(t.y, c.realHeight),
                        L = t.longitudes,
                        S = t.latitudes,
                        K = L.length,
                        Q;
                    if (0 < K)
                        for (H = [], Q = 0; Q < K; Q++) H.push(c.longitudeToCoordinate(L[Q]));
                    K = S.length;
                    if (0 < K)
                        for (J = [], Q = 0; Q < K; Q++) J.push(c.latitudeToCoordinate(S[Q]));
                    if (0 < H.length) {
                        d.dx = 0;
                        d.dy = 0;
                        L = d.line(r, H, J, F, 1, E, G, !1, !1, !0);
                        d.setCN(c, L, "map-line");
                        void 0 != t.id && d.setCN(c, L, "map-line-" + t.id);
                        G = d.line(r, H, J, F, .001, 3, G, !1, !1, !0);
                        d.dx = .5;
                        d.dy = .5;
                        y.push(L);
                        y.push(G);
                        y.setAttr("opacity", B);
                        if ("none" != M) {
                            var I, R, T;
                            if ("end" == M || "both" == M) B = H[H.length - 1], F = J[J.length - 1], 1 < H.length ? (K = H[H.length - 2], I = J[J.length - 2]) :
                                (K = B, I = F), I = 180 * Math.atan((F - I) / (B - K)) / Math.PI, R = B, T = F, I = 0 > B - K ? I - 90 : I + 90;
                            "both" == M && (B = d.polygon(r, [-N / 2, 0, N / 2], [1.5 * N, 0, 1.5 * N], O, P, 1, O, P), y.push(B), B.translate(R, T), B.rotate(I), d.setCN(c, L, "map-line-arrow"), void 0 != t.id && d.setCN(c, L, "map-line-arrow-" + t.id), t.fixedSize && f.push(B));
                            if ("start" == M || "both" == M) B = H[0], T = J[0], 1 < H.length ? (F = H[1], R = J[1]) : (F = B, R = T), I = 180 * Math.atan((T - R) / (B - F)) / Math.PI, R = B, I = 0 > B - F ? I - 90 : I + 90;
                            "middle" == M && (B = H[H.length - 1], F = J[J.length - 1], 1 < H.length ? (K = H[H.length - 2], I = J[J.length -
                            2]) : (K = B, I = F), R = K + (B - K) / 2, T = I + (F - I) / 2, I = 180 * Math.atan((F - I) / (B - K)) / Math.PI, I = 0 > B - K ? I - 90 : I + 90);
                            B = d.polygon(r, [-N / 2, 0, N / 2], [1.5 * N, 0, 1.5 * N], O, P, 1, O, P);
                            d.setCN(c, L, "map-line-arrow");
                            void 0 != t.id && d.setCN(c, L, "map-line-arrow-" + t.id);
                            y.push(B);
                            B.translate(R, T);
                            B.rotate(I);
                            t.fixedSize && f.push(B);
                            t.arrowSvg = B
                        }
                        t.fixedSize && L && (this.linesToResize.push({
                            line: L,
                            thickness: E
                        }), this.linesToResize.push({
                            line: G,
                            thickness: 3
                        }));
                        t.lineSvg = L;
                        t.showAsSelected && !isNaN(U) && L.setAttr("stroke", U);
                        0 < S.length ? e.push(y) : h.push(y);
                        t.hidden && y.hide()
                    }
                }
            }
            a.parentObject && a.remainVisible && this.process(a.parentObject)
        },
        processCoordinates: function (a, b) {
            var c = [],
                d;
            for (d = 0; d < a.length; d++) {
                var f = a[d],
                    e = Number(f);
                isNaN(e) && (e = Number(f.replace("%", "")) * b / 100);
                isNaN(e) || c.push(e)
            }
            return c
        },
        reset: function () {
            this.objectsToResize = [];
            this.allSvgObjects = [];
            this.allObjects = [];
            this.linesToResize = []
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.LinesSettings = d.Class({
        construct: function (a) {
            this.cname = "LinesSettings";
            this.balloonText = "[[title]]";
            this.thickness = 1;
            this.dashLength = 0;
            this.arrowSize = 10;
            this.arrowAlpha = 1;
            this.arrow = "none";
            this.color = "#990000";
            this.descriptionWindowWidth = 250;
            this.bringForwardOnHover = !0;
            d.applyTheme(this, a, this.cname)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.MapObject = d.Class({
        construct: function (a) {
            this.fixedSize = this.mouseEnabled = !0;
            this.images = [];
            this.lines = [];
            this.areas = [];
            this.remainVisible = !0;
            this.passZoomValuesToTarget = !1;
            this.objectType = this.cname;
            d.applyTheme(this, a, "MapObject")
        }
    })
})();
(function (d) {
    d = window.AmCharts;
    d.MapArea = d.Class({
        inherits: d.MapObject,
        construct: function (a) {
            this.cname = "MapArea";
            d.MapArea.base.construct.call(this, a);
            d.applyTheme(this, a, this.cname)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.MapLine = d.Class({
        inherits: d.MapObject,
        construct: function (a) {
            this.cname = "MapLine";
            this.longitudes = [];
            this.latitudes = [];
            this.x = [];
            this.y = [];
            this.arrow = "none";
            d.MapLine.base.construct.call(this, a);
            d.applyTheme(this, a, this.cname)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.MapImage = d.Class({
        inherits: d.MapObject,
        construct: function (a) {
            this.cname = "MapImage";
            this.scale = 1;
            this.widthAndHeightUnits = "pixels";
            this.labelShiftY = this.labelShiftX = 0;
            d.MapImage.base.construct.call(this, a);
            d.applyTheme(this, a, this.cname)
        },
        remove: function () {
            var a = this.displayObject;
            a && a.remove();
            (a = this.imageLabel) && a.remove()
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.degreesToRadians = function (a) {
        return a / 180 * Math.PI
    };
    d.radiansToDegrees = function (a) {
        return a / Math.PI * 180
    };
    d.getColorFade = function (a, b, c) {
        var g = d.hex2RGB(b);
        b = g[0];
        var f = g[1],
            g = g[2],
            e = d.hex2RGB(a);
        a = e[0];
        var h = e[1],
            e = e[2];
        a += Math.round((b - a) * c);
        h += Math.round((f - h) * c);
        e += Math.round((g - e) * c);
        return "rgb(" + a + "," + h + "," + e + ")"
    };
    d.hex2RGB = function (a) {
        return [parseInt(a.substring(1, 3), 16), parseInt(a.substring(3, 5), 16), parseInt(a.substring(5, 7), 16)]
    };
    d.processDescriptionWindow =
        function (a, b) {
            isNaN(b.descriptionWindowX) && (b.descriptionWindowX = a.descriptionWindowX);
            isNaN(b.descriptionWindowY) && (b.descriptionWindowY = a.descriptionWindowY);
            isNaN(b.descriptionWindowLeft) && (b.descriptionWindowLeft = a.descriptionWindowLeft);
            isNaN(b.descriptionWindowRight) && (b.descriptionWindowRight = a.descriptionWindowRight);
            isNaN(b.descriptionWindowTop) && (b.descriptionWindowTop = a.descriptionWindowTop);
            isNaN(b.descriptionWindowBottom) && (b.descriptionWindowBottom = a.descriptionWindowBottom);
            isNaN(b.descriptionWindowWidth) &&
            (b.descriptionWindowWidth = a.descriptionWindowWidth);
            isNaN(b.descriptionWindowHeight) && (b.descriptionWindowHeight = a.descriptionWindowHeight)
        }
})();
(function () {
    var d = window.AmCharts;
    d.MapData = d.Class({
        inherits: d.MapObject,
        construct: function () {
            this.cname = "MapData";
            d.MapData.base.construct.call(this);
            this.projection = "mercator";
            this.topLatitude = 90;
            this.bottomLatitude = -90;
            this.leftLongitude = -180;
            this.rightLongitude = 180;
            this.zoomLevel = 1;
            this.getAreasFromMap = !1
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.DescriptionWindow = d.Class({
        construct: function () {
        },
        show: function (a, b, c, d) {
            var f = this,
                e = document.createElement("div");
            e.style.position = "absolute";
            var h = a.classNamePrefix + "-description-";
            e.className = "ammapDescriptionWindow " + h + "div";
            f.div = e;
            b.appendChild(e);
            var k = document.createElement("img");
            k.className = "ammapDescriptionWindowCloseButton " + h + "close-img";
            k.src = a.pathToImages + "xIcon.gif";
            k.style.cssFloat = "right";
            k.onclick = function () {
                f.close()
            };
            k.onmouseover = function () {
                k.src =
                    a.pathToImages + "xIconH.gif"
            };
            k.onmouseout = function () {
                k.src = a.pathToImages + "xIcon.gif"
            };
            e.appendChild(k);
            b = document.createElement("div");
            b.className = "ammapDescriptionTitle " + h + "title-div";
            b.onmousedown = function () {
                f.div.style.zIndex = 1E3
            };
            e.appendChild(b);
            d = document.createTextNode(d);
            b.appendChild(d);
            d = b.offsetHeight;
            b = document.createElement("div");
            b.className = "ammapDescriptionText " + h + "text-div";
            b.style.maxHeight = f.maxHeight - d - 20 + "px";
            e.appendChild(b);
            b.innerHTML = c
        },
        close: function () {
            try {
                this.div.parentNode.removeChild(this.div)
            } catch (a) {
            }
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.ValueLegend = d.Class({
        construct: function (a) {
            this.cname = "ValueLegend";
            this.enabled = !0;
            this.showAsGradient = !1;
            this.minValue = 0;
            this.height = 12;
            this.width = 200;
            this.bottom = this.left = 10;
            this.borderColor = "#FFFFFF";
            this.borderAlpha = this.borderThickness = 1;
            this.color = "#000000";
            this.fontSize = 11;
            d.applyTheme(this, a, this.cname)
        },
        init: function (a, b) {
            if (this.enabled) {
                var c = a.areasSettings.color,
                    g = a.areasSettings.colorSolid,
                    f = a.colorSteps;
                d.remove(this.set);
                var e = b.set();
                this.set =
                    e;
                d.setCN(a, e, "value-legend");
                var h = 0,
                    k = this.minValue,
                    l = this.fontSize,
                    m = a.fontFamily,
                    n = this.color;
                void 0 == k && (k = a.minValueReal);
                void 0 !== k && (h = d.text(b, k, n, m, l, "left"), h.translate(0, l / 2 - 1), d.setCN(a, h, "value-legend-min-label"), e.push(h), h = h.getBBox().height);
                k = this.maxValue;
                void 0 === k && (k = a.maxValueReal);
                void 0 !== k && (h = d.text(b, k, n, m, l, "right"), h.translate(this.width, l / 2 - 1), d.setCN(a, h, "value-legend-max-label"), e.push(h), h = h.getBBox().height);
                if (this.showAsGradient) c = d.rect(b, this.width, this.height, [c, g], 1, this.borderThickness, this.borderColor, 1, 0, 0), d.setCN(a, c, "value-legend-gradient"), c.translate(0, h), e.push(c);
                else
                    for (l = this.width / f, m = 0; m < f; m++) n = d.getColorFade(c, g, 1 * m / (f - 1)), n = d.rect(b, l, this.height, n, 1, this.borderThickness, this.borderColor, 1), d.setCN(a, n, "value-legend-color"), d.setCN(a, n, "value-legend-color-" + m), n.translate(l * m, h), e.push(n);
                g = c = 0;
                f = e.getBBox();
                h = a.getY(this.bottom, !0);
                l = a.getY(this.top);
                m = a.getX(this.right, !0);
                n = a.getX(this.left);
                isNaN(l) || (c = l);
                isNaN(h) || (c = h - f.height);
                isNaN(n) || (g = n);
                isNaN(m) || (g = m - f.width);
                e.translate(g, c)
            } else d.remove(this.set)
        }
    })
})();
(function () {
    var d = window.AmCharts;
    d.ObjectList = d.Class({
        construct: function (a) {
            this.divId = a
        },
        init: function (a) {
            this.chart = a;
            var b = this.divId;
            this.container && (b = this.container);
            this.div = "object" != typeof b ? document.getElementById(b) : b;
            b = document.createElement("div");
            b.className = "ammapObjectList " + a.classNamePrefix + "-object-list-div";
            this.div.appendChild(b);
            this.addObjects(a.dataProvider, b)
        },
        addObjects: function (a, b) {
            var c = this.chart,
                d = document.createElement("ul");
            d.className = c.classNamePrefix + "-object-list-ul";
            var f;
            if (a.areas)
                for (f = 0; f < a.areas.length; f++) {
                    var e = a.areas[f];
                    void 0 === e.showInList && (e.showInList = c.showAreasInList);
                    this.addObject(e, d)
                }
            if (a.images)
                for (f = 0; f < a.images.length; f++) e = a.images[f], void 0 === e.showInList && (e.showInList = c.showImagesInList), this.addObject(e, d);
            if (a.lines)
                for (f = 0; f < a.lines.length; f++) e = a.lines[f], void 0 === e.showInList && (e.showInList = c.showLinesInList), this.addObject(e, d);
            0 < d.childNodes.length && b.appendChild(d)
        },
        addObject: function (a, b) {
            var c = this;
            if (a.showInList && void 0 !==
                a.title) {
                var d = c.chart,
                    f = document.createElement("li");
                f.className = d.classNamePrefix + "-object-list-li";
                var e = document.createTextNode(a.title),
                    h = document.createElement("a");
                h.className = d.classNamePrefix + "-object-list-a";
                h.appendChild(e);
                f.appendChild(h);
                b.appendChild(f);
                this.addObjects(a, f);
                h.onmouseover = function () {
                    c.chart.rollOverMapObject(a, !1)
                };
                h.onmouseout = function () {
                    c.chart.rollOutMapObject(a)
                };
                h.onclick = function () {
                    c.chart.clickMapObject(a)
                }
            }
        }
    })
})();
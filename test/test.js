!function (t) {
    function e(r) {
        if (n[r])return n[r].exports;
        var i = n[r] = {exports: {}, id: r, loaded: !1};
        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
    "use strict";
    function r() {
        var t = document.createElement("script");
        t.src = "/badScript.js", t.onerror = function (t) {
            l.log(t)
        }, document.body.appendChild(t)
    }

    function o() {
        var t = document.createElement("link");
        t.href = "/badCss.css", t.rel = "stylesheet", t.onerror = function (t) {
            console.log(t), l.log(t)
        }, document.head.appendChild(t)
    }

    function s() {
        c({
            type: "get",
            url: "http://static.galileo.xiaojukeji.com/static/tms/api/poisearch.json",
            dataType: "json",
            success: function (t) {
                alert(t)
            },
            error: function (t) {
                l.log(t)
            }
        })
    }

    function c(t) {
        var e = new XMLHttpRequest;
        e.open(t.type, t.url, t.async), e.onload = function (e) {
            200 != this.status && 304 != this.status || t.success(e)
        }, e.onerror = function (e) {
            t.error(e)
        }, e.send()
    }

    n(1);
    var l = n(5);
    l.init(), document.addEventListener("click", function (t) {
        alert(a)
    }), window.onload = function () {
        l.log("Debugger begins.");
        try {
            console.log(i)
        } catch (t) {
            l.log(t)
        }
        r(), o(), setTimeout(s, 3e3)
    }
}, function (t, e, n) {
    var r = n(2);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(4)(r, {});
    r.locals && (t.exports = r.locals)
}, function (t, e, n) {
    e = t.exports = n(3)(), e.push([t.id, "abbr,address,article,aside,audio,b,blockquote,body,caption,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figure,footer,form,h1,h2,h3,h4,h5,h6,header,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,samp,section,small,span,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font-weight:400;vertical-align:baseline;background:transparent}article,aside,details,figure,footer,header,nav,section,summary{display:block}embed,img,object{max-width:100%}html{overflow-y:scroll}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent;text-decoration:none;outline:none}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted #000;cursor:help}table{border-collapse:collapse;border-spacing:0}th{font-weight:700;vertical-align:bottom}td{font-weight:400;vertical-align:top}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}pre{white-space:pre;white-space:pre-wrap;white-space:pre-line;word-wrap:break-word}input[type=radio]{vertical-align:text-bottom}input[type=checkbox]{vertical-align:bottom}.reset-2Ocmb input[type=checkbox]{vertical-align:baseline}.reset-Kkkjs input{vertical-align:text-bottom}input,select,textarea{font:99% sans-serif}table{font-size:inherit;font:100%}small{font-size:85%}strong{font-weight:700}td,td img{vertical-align:top}sub,sup{font-size:75%;line-height:0;position:relative}sup{top:-.5em}sub{bottom:-.25em}code,kbd,pre,samp{font-family:monospace,sans-serif}.reset-3Rmi-,button,input[type=button],input[type=file],input[type=submit],label{cursor:pointer}button,input,select,textarea{margin:0}button,input[type=button]{width:auto;overflow:visible}.reset-2Ocmb img{-ms-interpolation-mode:bicubic}.reset-1qHNr:after,.reset-1qHNr:before{content:\" \";display:block;height:0;overflow:hidden}.reset-1qHNr:after{clear:both}.reset-1qHNr{zoom:1}.reset-2HqeT:after{display:block;height:2rem;content:'.';visibility:hidden}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;outline:0;font-size:100%;font:inherit;vertical-align:baseline;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-webkit-user-drag:none;//:arial,sans-serif}", ""]), e.locals = {
        ie7: "reset-2Ocmb",
        ie6: "reset-Kkkjs",
        clickable: "reset-3Rmi-",
        clearfix: "reset-1qHNr",
        contentblock: "reset-2HqeT"
    }
}, function (t, e) {
    t.exports = function () {
        var t = [];
        return t.toString = function () {
            for (var t = [], e = 0; e < this.length; e++) {
                var n = this[e];
                n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
            }
            return t.join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var s = e[i];
                "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
            }
        }, t
    }
}, function (t, e, n) {
    function r(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n], i = h[r.id];
            if (i) {
                i.refs++;
                for (var o = 0; o < i.parts.length; o++)i.parts[o](r.parts[o]);
                for (; o < r.parts.length; o++)i.parts.push(l(r.parts[o], e))
            } else {
                for (var s = [], o = 0; o < r.parts.length; o++)s.push(l(r.parts[o], e));
                h[r.id] = {id: r.id, refs: 1, parts: s}
            }
        }
    }

    function i(t) {
        for (var e = [], n = {}, r = 0; r < t.length; r++) {
            var i = t[r], o = i[0], s = i[1], a = i[2], c = i[3], l = {css: s, media: a, sourceMap: c};
            n[o] ? n[o].parts.push(l) : e.push(n[o] = {id: o, parts: [l]})
        }
        return e
    }

    function o(t, e) {
        var n = v(), r = g[g.length - 1];
        if ("top" === t.insertAt)r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), g.push(e); else {
            if ("bottom" !== t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(e)
        }
    }

    function s(t) {
        t.parentNode.removeChild(t);
        var e = g.indexOf(t);
        e >= 0 && g.splice(e, 1)
    }

    function a(t) {
        var e = document.createElement("style");
        return e.type = "text/css", o(t, e), e
    }

    function c(t) {
        var e = document.createElement("link");
        return e.rel = "stylesheet", o(t, e), e
    }

    function l(t, e) {
        var n, r, i;
        if (e.singleton) {
            var o = m++;
            n = y || (y = a(e)), r = u.bind(null, n, o, !1), i = u.bind(null, n, o, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), r = p.bind(null, n), i = function () {
            s(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = a(e), r = f.bind(null, n), i = function () {
            s(n)
        });
        return r(t), function (e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)return;
                r(t = e)
            } else i()
        }
    }

    function u(t, e, n, r) {
        var i = n ? "" : r.css;
        if (t.styleSheet)t.styleSheet.cssText = b(e, i); else {
            var o = document.createTextNode(i), s = t.childNodes;
            s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
        }
    }

    function f(t, e) {
        var n = e.css, r = e.media;
        if (r && t.setAttribute("media", r), t.styleSheet)t.styleSheet.cssText = n; else {
            for (; t.firstChild;)t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }

    function p(t, e) {
        var n = e.css, r = e.sourceMap;
        r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var i = new Blob([n], {type: "text/css"}), o = t.href;
        t.href = URL.createObjectURL(i), o && URL.revokeObjectURL(o)
    }

    var h = {}, d = function (t) {
        var e;
        return function () {
            return "undefined" == typeof e && (e = t.apply(this, arguments)), e
        }
    }, _ = d(function () {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    }), v = d(function () {
        return document.head || document.getElementsByTagName("head")[0]
    }), y = null, m = 0, g = [];
    t.exports = function (t, e) {
        e = e || {}, "undefined" == typeof e.singleton && (e.singleton = _()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
        var n = i(t);
        return r(n, e), function (t) {
            for (var o = [], s = 0; s < n.length; s++) {
                var a = n[s], c = h[a.id];
                c.refs--, o.push(c)
            }
            if (t) {
                var l = i(t);
                r(l, e)
            }
            for (var s = 0; s < o.length; s++) {
                var c = o[s];
                if (0 === c.refs) {
                    for (var u = 0; u < c.parts.length; u++)c.parts[u]();
                    delete h[c.id]
                }
            }
        }
    };
    var b = function () {
        var t = [];
        return function (e, n) {
            return t[e] = n, t.filter(Boolean).join("\n")
        }
    }()
}, function (t, e, n) {
    "use strict";
    t.exports = n(6)["default"]
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {"default": t}
    }

    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }
    }(), s = n(7), a = r(s), c = n(10), l = r(c), u = n(11), f = r(u), p = function () {
        function t(e) {
            i(this, t), this.instance = null, this.errLocation = {}, this.create(e), this.sendErrorData(e)
        }

        return o(t, [{
            key: "create", value: function (t) {
                t.needShowv !== !1 && (this.createWraper(), this.createContent(t))
            }
        }, {
            key: "createWraper", value: function () {
                var t = this;
                if (!h.wraper) {
                    var e = t.parseCSS(), n = +new Date, r = document.createElement("div");
                    r.id = "debugger-" + n, r.style.cssText = e.wrapCss, r.addEventListener("click", function () {
                        h.showWraper ? t.hideWraper() : t.showWraper()
                    }), r.addEventListener("touchmove", function (t) {
                        t.stopPropagation()
                    }), h.wraper = r, document.body.appendChild(r)
                }
            }
        }, {
            key: "createContent", value: function (t) {
                var e = this, n = e.parseCSS(), r = h.errorCount, i = document.createElement("div");
                i.style.cssText = n.contentCss, i.innerHTML = '\n            <p><span style="' + n.errNoCss + '"> err' + r + ": </span> " + t.message + '</p>\n            <div style="' + n.hrCss + '"/></div>\n            <p><span style="' + n.locationCss + '"> location: </span> ' + t.location.replace(/(<anonymous>)|(<\/anonymous>)/gi, "") + "</p>\n            ", e.instance = i, h.wraper.appendChild(i), h.errorCount++, setTimeout(function () {
                }, 1e4)
            }
        }, {
            key: "destroy", value: function () {
                var t = this;
                t.blur().then(function () {
                    var e = t.instance;
                    e && e.parentNode && e.parentNode.removeChild(e)
                })
            }
        }, {
            key: "blur", value: function () {
                var t = this, e = this.instance, n = null;
                return new a["default"](function (r, i) {
                    n = setInterval(function () {
                        var i = t.getCssValue(e, "opacity");
                        i < .1 ? (clearTimeout(n), r()) : e.style.opacity = i - .1
                    }, 50)
                })
            }
        }, {
            key: "showWraper", value: function () {
                h.wraper && (h.wraper.style.transform = "translateY(0px)", h.wraper.style.webkitTransform = "translateY(0px)", h.showWraper = !0)
            }
        }, {
            key: "hideWraper", value: function () {
                if (h.wraper) {
                    var t = this, e = t.getCssValue(h.wraper, "height");
                    h.wraper.style.transform = "translateY(" + (parseFloat(e) - 20) + "px)", h.wraper.style.webkitTransform = "translateY(" + (parseFloat(e) - 20) + "px)", h.showWraper = !1
                }
            }
        }, {
            key: "sendErrorData", value: function (t) {
                if (t.needReport) {
                    var e = t.url, n = t.method, r = {
                        url: location.href,
                        ua: navigator.userAgent,
                        filename: t.filename || this.getFileName(t.location),
                        lineno: t.lineno || this.getLineNo(t.location),
                        colno: t.colno || this.getColNo(t.location),
                        message: t.message || "",
                        location: this.getLocation(t.location) || ""
                    };
                    (0, l["default"])({url: e, method: n, data: r})
                }
            }
        }, {
            key: "parseCSS", value: function () {
                var t = void 0, e = void 0, n = void 0, r = void 0, i = void 0;
                return t = "position: fixed; bottom:0; max-height:100%; overflow:scroll; box-sizing:border-box; opacity: 1; word-wrap: break-word;word-break: break-all; transform: translateY(0px);-webkit-transform: translateY(0px);transition: transform 0.3s ease;-webkit-transition: -webkit-transform 0.3s ease;", e = "background: rgba(0, 0, 0, 0.6);color: #fff;line-height: 1.2;padding: 0.5rem;box-sizing:border-box; border-bottom: 1px solid #f0f0f0;", n = "background: #bd362f; border-radius:4px; color:#fff; padding-left:0.2rem; margin-right:0.2rem", r = "background: #0074cc; border-radius:4px; color:#fff; padding-left:0.2rem; margin-right:0.2rem", i = "margin:0.2rem 0; border-bottom: 1px dashed #999;", {
                    wrapCss: t,
                    contentCss: e,
                    errNoCss: n,
                    locationCss: r,
                    hrCss: i
                }
            }
        }, {
            key: "getCssValue", value: function (t, e) {
                return window.getComputedStyle(t)[e]
            }
        }, {
            key: "getFileName", value: function (t) {
                return this.errLocation.filename ? this.errLocation.filename : this.splitLocation(t).filename
            }
        }, {
            key: "getLineNo", value: function (t) {
                return this.errLocation.lineno ? this.errLocation.lineno : this.splitLocation(t).lineno
            }
        }, {
            key: "getColNo", value: function (t) {
                return this.errLocation.colno ? this.errLocation.colno : this.splitLocation(t).colno
            }
        }, {
            key: "getLocation", value: function (t) {
                return t.replace(/\s*(\(.*\))\s*/, "")
            }
        }, {
            key: "splitLocation", value: function (t) {
                var e = (/^.*\((.*\.js):(\d*):(\d*)\)/.exec(t), RegExp), n = e.$1, r = e.$2, i = e.$3;
                return this.locationObj = {filename: n, lineno: r, colno: i}, this.locationObj
            }
        }]), t
    }(), h = {
        wraper: null,
        showWraper: !0,
        errorCount: 1,
        confData: {needShow: !0, needReport: !1, method: "post", url: ""},
        init: function (t) {
            var e = this;
            t && (e.confData = (0, f["default"])(e.confData, t)), window.addEventListener("load", function () {
                e.listenScriptError()
            })
        },
        listenScriptError: function () {
            var t = this;
            window.addEventListener("error", function () {
                t.log(arguments[0])
            })
        },
        log: function (t) {
            var e = this;
            t = (0, f["default"])(t, e.confData), e.isError(t) ? (t.message = e.getStackMessage(t.stack), t.location = e.getStackLocation(t.stack), new p(t)) : e.isEvent(t) ? e.throwError().then(function (n) {
                var r = t.target;
                t.message = "Resource Error: can't get " + (r.src || r.href) + ".", t.location = e.getStackLocation(n.stack), new p(t)
            }) : e.isErrorEvent(t) ? (t.location = e.getStackLocation(t.error.stack), new p(t)) : e.isXHR(t) ? e.throwError().then(function (n) {
                t.message = "AJAX Error: XMLHttpRequest failed. Did you use $.ajax? the Debugger can't get more detail from error callback. Please check your $.ajax settings.", t.location = e.getStackLocation(n.stack), new p(t)
            }) : e.isString(t) ? e.throwError().then(function (n) {
                new p({message: t, location: e.getStackLocation(n.stack)})
            }) : e.isUndefined(t) ? e.throwError().then(function (n) {
                t.message = "Params Error: Debugger.log(...) must have 1 param in it, but found none", t.location = e.getStackLocation(n.stack), new p(t)
            }) : e.throwError().then(function (n) {
                t.message = "Unknown Error.", t.location = e.getStackLocation(n.stack), new p(t)
            })
        },
        throwError: function () {
            return new a["default"](function (t, e) {
                try {
                    throw new Error
                } catch (n) {
                    t(n)
                }
            })
        },
        getStackMessage: function (t) {
            var e = t.split(/\n+/);
            return e[0].replace(/(^\s+|\s+$)/, "")
        },
        getStackLocation: function (t) {
            var e = t.split(/\n+/);
            return e[e.length - 1].replace(/(^\s+|\s+$)/, "")
        },
        isError: function (t) {
            return t instanceof Error
        },
        isEvent: function (t) {
            return t.constructor === Event
        },
        isErrorEvent: function (t) {
            return t.constructor === ErrorEvent
        },
        isProgressEvent: function (t) {
            return t.constructor === ProgressEvent
        },
        isXHR: function (t) {
            return t.constructor === XMLHttpRequest
        },
        isString: function (t) {
            return "[object String]" === Object.prototype.toString.call(t)
        },
        isUndefined: function (t) {
            return "[object Undefined]" === Object.prototype.toString.call(t)
        }
    };
    e["default"] = h
}, function (t, e, n) {
    (function (e, n, r) {
        !function (e) {
            t.exports = e()
        }(function () {
            var t, i, o;
            return function s(t, e, n) {
                function r(o, a) {
                    if (!e[o]) {
                        if (!t[o]) {
                            var c = "function" == typeof _dereq_ && _dereq_;
                            if (!a && c)return c(o, !0);
                            if (i)return i(o, !0);
                            var l = new Error("Cannot find module '" + o + "'");
                            throw l.code = "MODULE_NOT_FOUND", l
                        }
                        var u = e[o] = {exports: {}};
                        t[o][0].call(u.exports, function (e) {
                            var n = t[o][1][e];
                            return r(n ? n : e)
                        }, u, u.exports, s, t, e, n)
                    }
                    return e[o].exports
                }

                for (var i = "function" == typeof _dereq_ && _dereq_, o = 0; o < n.length; o++)r(n[o]);
                return r
            }({
                1: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t) {
                            var e = new n(t), r = e.promise();
                            return e.setHowMany(1), e.setUnwrap(), e.init(), r
                        }

                        var n = t._SomePromiseArray;
                        t.any = function (t) {
                            return e(t)
                        }, t.prototype.any = function () {
                            return e(this)
                        }
                    }
                }, {}], 2: [function (t, n, r) {
                    "use strict";
                    function i() {
                        this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new f(16), this._normalQueue = new f(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
                        var t = this;
                        this.drainQueues = function () {
                            t._drainQueues()
                        }, this._schedule = u
                    }

                    function o(t, e, n) {
                        this._lateQueue.push(t, e, n), this._queueTick()
                    }

                    function s(t, e, n) {
                        this._normalQueue.push(t, e, n), this._queueTick()
                    }

                    function a(t) {
                        this._normalQueue._pushOne(t), this._queueTick()
                    }

                    var c;
                    try {
                        throw new Error
                    } catch (l) {
                        c = l
                    }
                    var u = t("./schedule"), f = t("./queue"), p = t("./util");
                    i.prototype.setScheduler = function (t) {
                        var e = this._schedule;
                        return this._schedule = t, this._customScheduler = !0, e
                    }, i.prototype.hasCustomScheduler = function () {
                        return this._customScheduler
                    }, i.prototype.enableTrampoline = function () {
                        this._trampolineEnabled = !0
                    }, i.prototype.disableTrampolineIfNecessary = function () {
                        p.hasDevTools && (this._trampolineEnabled = !1)
                    }, i.prototype.haveItemsQueued = function () {
                        return this._isTickUsed || this._haveDrainedQueues
                    }, i.prototype.fatalError = function (t, n) {
                        n ? (e.stderr.write("Fatal " + (t instanceof Error ? t.stack : t) + "\n"), e.exit(2)) : this.throwLater(t)
                    }, i.prototype.throwLater = function (t, e) {
                        if (1 === arguments.length && (e = t, t = function () {
                                throw e
                            }), "undefined" != typeof setTimeout)setTimeout(function () {
                            t(e)
                        }, 0); else try {
                            this._schedule(function () {
                                t(e)
                            })
                        } catch (n) {
                            throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                        }
                    }, p.hasDevTools ? (i.prototype.invokeLater = function (t, e, n) {
                        this._trampolineEnabled ? o.call(this, t, e, n) : this._schedule(function () {
                            setTimeout(function () {
                                t.call(e, n)
                            }, 100)
                        })
                    }, i.prototype.invoke = function (t, e, n) {
                        this._trampolineEnabled ? s.call(this, t, e, n) : this._schedule(function () {
                            t.call(e, n)
                        })
                    }, i.prototype.settlePromises = function (t) {
                        this._trampolineEnabled ? a.call(this, t) : this._schedule(function () {
                            t._settlePromises()
                        })
                    }) : (i.prototype.invokeLater = o, i.prototype.invoke = s, i.prototype.settlePromises = a), i.prototype.invokeFirst = function (t, e, n) {
                        this._normalQueue.unshift(t, e, n), this._queueTick()
                    }, i.prototype._drainQueue = function (t) {
                        for (; t.length() > 0;) {
                            var e = t.shift();
                            if ("function" == typeof e) {
                                var n = t.shift(), r = t.shift();
                                e.call(n, r)
                            } else e._settlePromises()
                        }
                    }, i.prototype._drainQueues = function () {
                        this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue)
                    }, i.prototype._queueTick = function () {
                        this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
                    }, i.prototype._reset = function () {
                        this._isTickUsed = !1
                    }, n.exports = i, n.exports.firstLineError = c
                }, {"./queue": 26, "./schedule": 29, "./util": 36}], 3: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t, e, n, r) {
                        var i = !1, o = function (t, e) {
                            this._reject(e)
                        }, s = function (t, e) {
                            e.promiseRejectionQueued = !0, e.bindingPromise._then(o, o, null, this, t)
                        }, a = function (t, e) {
                            0 === (50397184 & this._bitField) && this._resolveCallback(e.target)
                        }, c = function (t, e) {
                            e.promiseRejectionQueued || this._reject(t)
                        };
                        t.prototype.bind = function (o) {
                            i || (i = !0, t.prototype._propagateFrom = r.propagateFromFunction(), t.prototype._boundValue = r.boundValueFunction());
                            var l = n(o), u = new t(e);
                            u._propagateFrom(this, 1);
                            var f = this._target();
                            if (u._setBoundTo(l), l instanceof t) {
                                var p = {promiseRejectionQueued: !1, promise: u, target: f, bindingPromise: l};
                                f._then(e, s, void 0, u, p), l._then(a, c, void 0, u, p), u._setOnCancel(l)
                            } else u._resolveCallback(f);
                            return u
                        }, t.prototype._setBoundTo = function (t) {
                            void 0 !== t ? (this._bitField = 2097152 | this._bitField, this._boundTo = t) : this._bitField = this._bitField & -2097153
                        }, t.prototype._isBound = function () {
                            return 2097152 === (2097152 & this._bitField)
                        }, t.bind = function (e, n) {
                            return t.resolve(n).bind(e)
                        }
                    }
                }, {}], 4: [function (t, e, n) {
                    "use strict";
                    function r() {
                        try {
                            Promise === o && (Promise = i)
                        } catch (t) {
                        }
                        return o
                    }

                    var i;
                    "undefined" != typeof Promise && (i = Promise);
                    var o = t("./promise")();
                    o.noConflict = r, e.exports = o
                }, {"./promise": 22}], 5: [function (t, e, n) {
                    "use strict";
                    var r = Object.create;
                    if (r) {
                        var i = r(null), o = r(null);
                        i[" size"] = o[" size"] = 0
                    }
                    e.exports = function (e) {
                        function n(t, n) {
                            var r;
                            if (null != t && (r = t[n]), "function" != typeof r) {
                                var i = "Object " + a.classString(t) + " has no method '" + a.toString(n) + "'";
                                throw new e.TypeError(i)
                            }
                            return r
                        }

                        function r(t) {
                            var e = this.pop(), r = n(t, e);
                            return r.apply(t, this)
                        }

                        function i(t) {
                            return t[this]
                        }

                        function o(t) {
                            var e = +this;
                            return e < 0 && (e = Math.max(0, e + t.length)), t[e]
                        }

                        var s, a = t("./util"), c = a.canEvaluate;
                        a.isIdentifier;
                        e.prototype.call = function (t) {
                            var e = [].slice.call(arguments, 1);
                            return e.push(t), this._then(r, void 0, void 0, e, void 0)
                        }, e.prototype.get = function (t) {
                            var e, n = "number" == typeof t;
                            if (n)e = o; else if (c) {
                                var r = s(t);
                                e = null !== r ? r : i
                            } else e = i;
                            return this._then(e, void 0, void 0, t, void 0)
                        }
                    }
                }, {"./util": 36}], 6: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r, i) {
                        var o = t("./util"), s = o.tryCatch, a = o.errorObj, c = e._async;
                        e.prototype["break"] = e.prototype.cancel = function () {
                            if (!i.cancellation())return this._warn("cancellation is disabled");
                            for (var t = this, e = t; t._isCancellable();) {
                                if (!t._cancelBy(e)) {
                                    e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                                    break
                                }
                                var n = t._cancellationParent;
                                if (null == n || !n._isCancellable()) {
                                    t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                                    break
                                }
                                t._isFollowing() && t._followee().cancel(), t._setWillBeCancelled(), e = t, t = n
                            }
                        }, e.prototype._branchHasCancelled = function () {
                            this._branchesRemainingToCancel--
                        }, e.prototype._enoughBranchesHaveCancelled = function () {
                            return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0
                        }, e.prototype._cancelBy = function (t) {
                            return t === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0))
                        }, e.prototype._cancelBranched = function () {
                            this._enoughBranchesHaveCancelled() && this._cancel()
                        }, e.prototype._cancel = function () {
                            this._isCancellable() && (this._setCancelled(), c.invoke(this._cancelPromises, this, void 0))
                        }, e.prototype._cancelPromises = function () {
                            this._length() > 0 && this._settlePromises()
                        }, e.prototype._unsetOnCancel = function () {
                            this._onCancelField = void 0
                        }, e.prototype._isCancellable = function () {
                            return this.isPending() && !this._isCancelled()
                        }, e.prototype.isCancellable = function () {
                            return this.isPending() && !this.isCancelled()
                        }, e.prototype._doInvokeOnCancel = function (t, e) {
                            if (o.isArray(t))for (var n = 0; n < t.length; ++n)this._doInvokeOnCancel(t[n], e); else if (void 0 !== t)if ("function" == typeof t) {
                                if (!e) {
                                    var r = s(t).call(this._boundValue());
                                    r === a && (this._attachExtraTrace(r.e), c.throwLater(r.e))
                                }
                            } else t._resultCancelled(this)
                        }, e.prototype._invokeOnCancel = function () {
                            var t = this._onCancel();
                            this._unsetOnCancel(), c.invoke(this._doInvokeOnCancel, this, t)
                        }, e.prototype._invokeInternalOnCancel = function () {
                            this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel())
                        }, e.prototype._resultCancelled = function () {
                            this.cancel()
                        }
                    }
                }, {"./util": 36}], 7: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e) {
                        function n(t, n, a) {
                            return function (c) {
                                var l = a._boundValue();
                                t:for (var u = 0; u < t.length; ++u) {
                                    var f = t[u];
                                    if (f === Error || null != f && f.prototype instanceof Error) {
                                        if (c instanceof f)return o(n).call(l, c)
                                    } else if ("function" == typeof f) {
                                        var p = o(f).call(l, c);
                                        if (p === s)return p;
                                        if (p)return o(n).call(l, c)
                                    } else if (r.isObject(c)) {
                                        for (var h = i(f), d = 0; d < h.length; ++d) {
                                            var _ = h[d];
                                            if (f[_] != c[_])continue t
                                        }
                                        return o(n).call(l, c)
                                    }
                                }
                                return e
                            }
                        }

                        var r = t("./util"), i = t("./es5").keys, o = r.tryCatch, s = r.errorObj;
                        return n
                    }
                }, {"./es5": 13, "./util": 36}], 8: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e() {
                            this._trace = new e.CapturedTrace(r())
                        }

                        function n() {
                            if (i)return new e
                        }

                        function r() {
                            var t = o.length - 1;
                            if (t >= 0)return o[t]
                        }

                        var i = !1, o = [];
                        return t.prototype._promiseCreated = function () {
                        }, t.prototype._pushContext = function () {
                        }, t.prototype._popContext = function () {
                            return null
                        }, t._peekContext = t.prototype._peekContext = function () {
                        }, e.prototype._pushContext = function () {
                            void 0 !== this._trace && (this._trace._promiseCreated = null, o.push(this._trace))
                        }, e.prototype._popContext = function () {
                            if (void 0 !== this._trace) {
                                var t = o.pop(), e = t._promiseCreated;
                                return t._promiseCreated = null, e
                            }
                            return null
                        }, e.CapturedTrace = null, e.create = n, e.deactivateLongStackTraces = function () {
                        }, e.activateLongStackTraces = function () {
                            var n = t.prototype._pushContext, o = t.prototype._popContext, s = t._peekContext, a = t.prototype._peekContext, c = t.prototype._promiseCreated;
                            e.deactivateLongStackTraces = function () {
                                t.prototype._pushContext = n, t.prototype._popContext = o, t._peekContext = s, t.prototype._peekContext = a, t.prototype._promiseCreated = c, i = !1
                            }, i = !0, t.prototype._pushContext = e.prototype._pushContext, t.prototype._popContext = e.prototype._popContext, t._peekContext = t.prototype._peekContext = r, t.prototype._promiseCreated = function () {
                                var t = this._peekContext();
                                t && null == t._promiseCreated && (t._promiseCreated = this)
                            }
                        }, e
                    }
                }, {}], 9: [function (t, n, r) {
                    "use strict";
                    n.exports = function (n, r) {
                        function i(t, e) {
                            return {promise: e}
                        }

                        function o() {
                            return !1
                        }

                        function s(t, e, n) {
                            var r = this;
                            try {
                                t(e, n, function (t) {
                                    if ("function" != typeof t)throw new TypeError("onCancel must be a function, got: " + H.toString(t));
                                    r._attachCancellationCallback(t)
                                })
                            } catch (i) {
                                return i
                            }
                        }

                        function a(t) {
                            if (!this._isCancellable())return this;
                            var e = this._onCancel();
                            void 0 !== e ? H.isArray(e) ? e.push(t) : this._setOnCancel([e, t]) : this._setOnCancel(t)
                        }

                        function c() {
                            return this._onCancelField
                        }

                        function l(t) {
                            this._onCancelField = t
                        }

                        function u() {
                            this._cancellationParent = void 0, this._onCancelField = void 0
                        }

                        function f(t, e) {
                            if (0 !== (1 & e)) {
                                this._cancellationParent = t;
                                var n = t._branchesRemainingToCancel;
                                void 0 === n && (n = 0), t._branchesRemainingToCancel = n + 1
                            }
                            0 !== (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
                        }

                        function p(t, e) {
                            0 !== (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
                        }

                        function h() {
                            var t = this._boundTo;
                            return void 0 !== t && t instanceof n ? t.isFulfilled() ? t.value() : void 0 : t
                        }

                        function d() {
                            this._trace = new P(this._peekContext())
                        }

                        function _(t, e) {
                            if (V(t)) {
                                var n = this._trace;
                                if (void 0 !== n && e && (n = n._parent), void 0 !== n)n.attachExtraTrace(t); else if (!t.__stackCleaned__) {
                                    var r = j(t);
                                    H.notEnumerableProp(t, "stack", r.message + "\n" + r.stack.join("\n")), H.notEnumerableProp(t, "__stackCleaned__", !0)
                                }
                            }
                        }

                        function v(t, e, n, r, i) {
                            if (void 0 === t && null !== e && Y) {
                                if (void 0 !== i && i._returnedNonUndefined())return;
                                if (0 === (65535 & r._bitField))return;
                                n && (n += " ");
                                var o = "", s = "";
                                if (e._trace) {
                                    for (var a = e._trace.stack.split("\n"), c = C(a), l = c.length - 1; l >= 0; --l) {
                                        var u = c[l];
                                        if (!M.test(u)) {
                                            var f = u.match(q);
                                            f && (o = "at " + f[1] + ":" + f[2] + ":" + f[3] + " ");
                                            break
                                        }
                                    }
                                    if (c.length > 0)for (var p = c[0], l = 0; l < a.length; ++l)if (a[l] === p) {
                                        l > 0 && (s = "\n" + a[l - 1]);
                                        break
                                    }
                                }
                                var h = "a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + s;
                                r._warn(h, !0, e)
                            }
                        }

                        function y(t, e) {
                            var n = t + " is deprecated and will be removed in a future version.";
                            return e && (n += " Use " + e + " instead."), m(n)
                        }

                        function m(t, e, r) {
                            if (st.warnings) {
                                var i, o = new U(t);
                                if (e)r._attachExtraTrace(o); else if (st.longStackTraces && (i = n._peekContext()))i.attachExtraTrace(o); else {
                                    var s = j(o);
                                    o.stack = s.message + "\n" + s.stack.join("\n")
                                }
                                et("warning", o) || E(o, "", !0)
                            }
                        }

                        function g(t, e) {
                            for (var n = 0; n < e.length - 1; ++n)e[n].push("From previous event:"), e[n] = e[n].join("\n");
                            return n < e.length && (e[n] = e[n].join("\n")), t + "\n" + e.join("\n")
                        }

                        function b(t) {
                            for (var e = 0; e < t.length; ++e)(0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--)
                        }

                        function w(t) {
                            for (var e = t[0], n = 1; n < t.length; ++n) {
                                for (var r = t[n], i = e.length - 1, o = e[i], s = -1, a = r.length - 1; a >= 0; --a)if (r[a] === o) {
                                    s = a;
                                    break
                                }
                                for (var a = s; a >= 0; --a) {
                                    var c = r[a];
                                    if (e[i] !== c)break;
                                    e.pop(), i--
                                }
                                e = r
                            }
                        }

                        function C(t) {
                            for (var e = [], n = 0; n < t.length; ++n) {
                                var r = t[n], i = "    (No stack trace)" === r || $.test(r), o = i && rt(r);
                                i && !o && (z && " " !== r.charAt(0) && (r = "    " + r), e.push(r))
                            }
                            return e
                        }

                        function k(t) {
                            for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < e.length; ++n) {
                                var r = e[n];
                                if ("    (No stack trace)" === r || $.test(r))break
                            }
                            return n > 0 && (e = e.slice(n)), e
                        }

                        function j(t) {
                            var e = t.stack, n = t.toString();
                            return e = "string" == typeof e && e.length > 0 ? k(t) : ["    (No stack trace)"], {
                                message: n,
                                stack: C(e)
                            }
                        }

                        function E(t, e, n) {
                            if ("undefined" != typeof console) {
                                var r;
                                if (H.isObject(t)) {
                                    var i = t.stack;
                                    r = e + Q(i, t)
                                } else r = e + String(t);
                                "function" == typeof D ? D(r, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(r)
                            }
                        }

                        function x(t, e, n, r) {
                            var i = !1;
                            try {
                                "function" == typeof e && (i = !0, "rejectionHandled" === t ? e(r) : e(n, r))
                            } catch (o) {
                                I.throwLater(o)
                            }
                            "unhandledRejection" === t ? et(t, n, r) || i || E(n, "Unhandled rejection ") : et(t, r)
                        }

                        function F(t) {
                            var e;
                            if ("function" == typeof t)e = "[function " + (t.name || "anonymous") + "]"; else {
                                e = t && "function" == typeof t.toString ? t.toString() : H.toString(t);
                                var n = /\[object [a-zA-Z0-9$_]+\]/;
                                if (n.test(e))try {
                                    var r = JSON.stringify(t);
                                    e = r
                                } catch (i) {
                                }
                                0 === e.length && (e = "(empty array)")
                            }
                            return "(<" + T(e) + ">, no stack trace)"
                        }

                        function T(t) {
                            var e = 41;
                            return t.length < e ? t : t.substr(0, e - 3) + "..."
                        }

                        function S() {
                            return "function" == typeof ot
                        }

                        function O(t) {
                            var e = t.match(it);
                            if (e)return {fileName: e[1], line: parseInt(e[2], 10)}
                        }

                        function R(t, e) {
                            if (S()) {
                                for (var n, r, i = t.stack.split("\n"), o = e.stack.split("\n"), s = -1, a = -1, c = 0; c < i.length; ++c) {
                                    var l = O(i[c]);
                                    if (l) {
                                        n = l.fileName, s = l.line;
                                        break
                                    }
                                }
                                for (var c = 0; c < o.length; ++c) {
                                    var l = O(o[c]);
                                    if (l) {
                                        r = l.fileName, a = l.line;
                                        break
                                    }
                                }
                                s < 0 || a < 0 || !n || !r || n !== r || s >= a || (rt = function (t) {
                                    if (B.test(t))return !0;
                                    var e = O(t);
                                    return !!(e && e.fileName === n && s <= e.line && e.line <= a)
                                })
                            }
                        }

                        function P(t) {
                            this._parent = t, this._promisesCreated = 0;
                            var e = this._length = 1 + (void 0 === t ? 0 : t._length);
                            ot(this, P), e > 32 && this.uncycle()
                        }

                        var A, L, D, N = n._getDomain, I = n._async, U = t("./errors").Warning, H = t("./util"), V = H.canAttachTrace, B = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, M = /\((?:timers\.js):\d+:\d+\)/, q = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, $ = null, Q = null, z = !1, W = !(0 == H.env("BLUEBIRD_DEBUG")), X = !(0 == H.env("BLUEBIRD_WARNINGS") || !W && !H.env("BLUEBIRD_WARNINGS")), G = !(0 == H.env("BLUEBIRD_LONG_STACK_TRACES") || !W && !H.env("BLUEBIRD_LONG_STACK_TRACES")), Y = 0 != H.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (X || !!H.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                        n.prototype.suppressUnhandledRejections = function () {
                            var t = this._target();
                            t._bitField = t._bitField & -1048577 | 524288
                        }, n.prototype._ensurePossibleRejectionHandled = function () {
                            0 === (524288 & this._bitField) && (this._setRejectionIsUnhandled(), I.invokeLater(this._notifyUnhandledRejection, this, void 0))
                        }, n.prototype._notifyUnhandledRejectionIsHandled = function () {
                            x("rejectionHandled", A, void 0, this)
                        }, n.prototype._setReturnedNonUndefined = function () {
                            this._bitField = 268435456 | this._bitField
                        }, n.prototype._returnedNonUndefined = function () {
                            return 0 !== (268435456 & this._bitField)
                        }, n.prototype._notifyUnhandledRejection = function () {
                            if (this._isRejectionUnhandled()) {
                                var t = this._settledValue();
                                this._setUnhandledRejectionIsNotified(), x("unhandledRejection", L, t, this)
                            }
                        }, n.prototype._setUnhandledRejectionIsNotified = function () {
                            this._bitField = 262144 | this._bitField
                        }, n.prototype._unsetUnhandledRejectionIsNotified = function () {
                            this._bitField = this._bitField & -262145
                        }, n.prototype._isUnhandledRejectionNotified = function () {
                            return (262144 & this._bitField) > 0
                        }, n.prototype._setRejectionIsUnhandled = function () {
                            this._bitField = 1048576 | this._bitField
                        }, n.prototype._unsetRejectionIsUnhandled = function () {
                            this._bitField = this._bitField & -1048577, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
                        }, n.prototype._isRejectionUnhandled = function () {
                            return (1048576 & this._bitField) > 0
                        }, n.prototype._warn = function (t, e, n) {
                            return m(t, e, n || this)
                        }, n.onPossiblyUnhandledRejection = function (t) {
                            var e = N();
                            L = "function" == typeof t ? null === e ? t : H.domainBind(e, t) : void 0
                        }, n.onUnhandledRejectionHandled = function (t) {
                            var e = N();
                            A = "function" == typeof t ? null === e ? t : H.domainBind(e, t) : void 0
                        };
                        var K = function () {
                        };
                        n.longStackTraces = function () {
                            if (I.haveItemsQueued() && !st.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                            if (!st.longStackTraces && S()) {
                                var t = n.prototype._captureStackTrace, e = n.prototype._attachExtraTrace;
                                st.longStackTraces = !0, K = function () {
                                    if (I.haveItemsQueued() && !st.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                                    n.prototype._captureStackTrace = t, n.prototype._attachExtraTrace = e, r.deactivateLongStackTraces(), I.enableTrampoline(), st.longStackTraces = !1
                                }, n.prototype._captureStackTrace = d, n.prototype._attachExtraTrace = _, r.activateLongStackTraces(), I.disableTrampolineIfNecessary()
                            }
                        }, n.hasLongStackTraces = function () {
                            return st.longStackTraces && S()
                        };
                        var J = function () {
                            try {
                                if ("function" == typeof CustomEvent) {
                                    var t = new CustomEvent("CustomEvent");
                                    return H.global.dispatchEvent(t), function (t, e) {
                                        var n = new CustomEvent(t.toLowerCase(), {detail: e, cancelable: !0});
                                        return !H.global.dispatchEvent(n)
                                    }
                                }
                                if ("function" == typeof Event) {
                                    var t = new Event("CustomEvent");
                                    return H.global.dispatchEvent(t), function (t, e) {
                                        var n = new Event(t.toLowerCase(), {cancelable: !0});
                                        return n.detail = e, !H.global.dispatchEvent(n)
                                    }
                                }
                                var t = document.createEvent("CustomEvent");
                                return t.initCustomEvent("testingtheevent", !1, !0, {}), H.global.dispatchEvent(t), function (t, e) {
                                    var n = document.createEvent("CustomEvent");
                                    return n.initCustomEvent(t.toLowerCase(), !1, !0, e), !H.global.dispatchEvent(n)
                                }
                            } catch (e) {
                            }
                            return function () {
                                return !1
                            }
                        }(), Z = function () {
                            return H.isNode ? function () {
                                return e.emit.apply(e, arguments)
                            } : H.global ? function (t) {
                                var e = "on" + t.toLowerCase(), n = H.global[e];
                                return !!n && (n.apply(H.global, [].slice.call(arguments, 1)), !0)
                            } : function () {
                                return !1
                            }
                        }(), tt = {
                            promiseCreated: i,
                            promiseFulfilled: i,
                            promiseRejected: i,
                            promiseResolved: i,
                            promiseCancelled: i,
                            promiseChained: function (t, e, n) {
                                return {promise: e, child: n}
                            },
                            warning: function (t, e) {
                                return {warning: e}
                            },
                            unhandledRejection: function (t, e, n) {
                                return {reason: e, promise: n}
                            },
                            rejectionHandled: i
                        }, et = function (t) {
                            var e = !1;
                            try {
                                e = Z.apply(null, arguments)
                            } catch (n) {
                                I.throwLater(n), e = !0
                            }
                            var r = !1;
                            try {
                                r = J(t, tt[t].apply(null, arguments))
                            } catch (n) {
                                I.throwLater(n), r = !0
                            }
                            return r || e
                        };
                        n.config = function (t) {
                            if (t = Object(t), "longStackTraces" in t && (t.longStackTraces ? n.longStackTraces() : !t.longStackTraces && n.hasLongStackTraces() && K()), "warnings" in t) {
                                var e = t.warnings;
                                st.warnings = !!e, Y = st.warnings, H.isObject(e) && "wForgottenReturn" in e && (Y = !!e.wForgottenReturn)
                            }
                            if ("cancellation" in t && t.cancellation && !st.cancellation) {
                                if (I.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use");
                                n.prototype._clearCancellationData = u, n.prototype._propagateFrom = f, n.prototype._onCancel = c, n.prototype._setOnCancel = l, n.prototype._attachCancellationCallback = a, n.prototype._execute = s, nt = f, st.cancellation = !0
                            }
                            "monitoring" in t && (t.monitoring && !st.monitoring ? (st.monitoring = !0, n.prototype._fireEvent = et) : !t.monitoring && st.monitoring && (st.monitoring = !1, n.prototype._fireEvent = o))
                        }, n.prototype._fireEvent = o, n.prototype._execute = function (t, e, n) {
                            try {
                                t(e, n)
                            } catch (r) {
                                return r
                            }
                        }, n.prototype._onCancel = function () {
                        }, n.prototype._setOnCancel = function (t) {
                        }, n.prototype._attachCancellationCallback = function (t) {
                        }, n.prototype._captureStackTrace = function () {
                        }, n.prototype._attachExtraTrace = function () {
                        }, n.prototype._clearCancellationData = function () {
                        }, n.prototype._propagateFrom = function (t, e) {
                        };
                        var nt = p, rt = function () {
                            return !1
                        }, it = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                        H.inherits(P, Error), r.CapturedTrace = P, P.prototype.uncycle = function () {
                            var t = this._length;
                            if (!(t < 2)) {
                                for (var e = [], n = {}, r = 0, i = this; void 0 !== i; ++r)e.push(i), i = i._parent;
                                t = this._length = r;
                                for (var r = t - 1; r >= 0; --r) {
                                    var o = e[r].stack;
                                    void 0 === n[o] && (n[o] = r)
                                }
                                for (var r = 0; r < t; ++r) {
                                    var s = e[r].stack, a = n[s];
                                    if (void 0 !== a && a !== r) {
                                        a > 0 && (e[a - 1]._parent = void 0, e[a - 1]._length = 1), e[r]._parent = void 0, e[r]._length = 1;
                                        var c = r > 0 ? e[r - 1] : this;
                                        a < t - 1 ? (c._parent = e[a + 1], c._parent.uncycle(), c._length = c._parent._length + 1) : (c._parent = void 0, c._length = 1);
                                        for (var l = c._length + 1, u = r - 2; u >= 0; --u)e[u]._length = l, l++;
                                        return
                                    }
                                }
                            }
                        }, P.prototype.attachExtraTrace = function (t) {
                            if (!t.__stackCleaned__) {
                                this.uncycle();
                                for (var e = j(t), n = e.message, r = [e.stack], i = this; void 0 !== i;)r.push(C(i.stack.split("\n"))), i = i._parent;
                                w(r), b(r), H.notEnumerableProp(t, "stack", g(n, r)), H.notEnumerableProp(t, "__stackCleaned__", !0)
                            }
                        };
                        var ot = function () {
                            var t = /^\s*at\s*/, e = function (t, e) {
                                return "string" == typeof t ? t : void 0 !== e.name && void 0 !== e.message ? e.toString() : F(e)
                            };
                            if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                                Error.stackTraceLimit += 6, $ = t, Q = e;
                                var n = Error.captureStackTrace;
                                return rt = function (t) {
                                    return B.test(t)
                                }, function (t, e) {
                                    Error.stackTraceLimit += 6, n(t, e), Error.stackTraceLimit -= 6
                                }
                            }
                            var r = new Error;
                            if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0)return $ = /@/, Q = e, z = !0, function (t) {
                                t.stack = (new Error).stack
                            };
                            var i;
                            try {
                                throw new Error
                            } catch (o) {
                                i = "stack" in o
                            }
                            return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (Q = function (t, e) {
                                return "string" == typeof t ? t : "object" != typeof e && "function" != typeof e || void 0 === e.name || void 0 === e.message ? F(e) : e.toString()
                            }, null) : ($ = t, Q = e, function (t) {
                                Error.stackTraceLimit += 6;
                                try {
                                    throw new Error
                                } catch (e) {
                                    t.stack = e.stack
                                }
                                Error.stackTraceLimit -= 6
                            })
                        }([]);
                        "undefined" != typeof console && "undefined" != typeof console.warn && (D = function (t) {
                            console.warn(t)
                        }, H.isNode && e.stderr.isTTY ? D = function (t, e) {
                            var n = e ? "[33m" : "[31m";
                            console.warn(n + t + "[0m\n")
                        } : H.isNode || "string" != typeof(new Error).stack || (D = function (t, e) {
                            console.warn("%c" + t, e ? "color: darkorange" : "color: red")
                        }));
                        var st = {warnings: X, longStackTraces: !1, cancellation: !1, monitoring: !1};
                        return G && n.longStackTraces(), {
                            longStackTraces: function () {
                                return st.longStackTraces
                            },
                            warnings: function () {
                                return st.warnings
                            },
                            cancellation: function () {
                                return st.cancellation
                            },
                            monitoring: function () {
                                return st.monitoring
                            },
                            propagateFromFunction: function () {
                                return nt
                            },
                            boundValueFunction: function () {
                                return h
                            },
                            checkForgottenReturns: v,
                            setBounds: R,
                            warn: m,
                            deprecated: y,
                            CapturedTrace: P,
                            fireDomEvent: J,
                            fireGlobalEvent: Z
                        }
                    }
                }, {"./errors": 12, "./util": 36}], 10: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e() {
                            return this.value
                        }

                        function n() {
                            throw this.reason
                        }

                        t.prototype["return"] = t.prototype.thenReturn = function (n) {
                            return n instanceof t && n.suppressUnhandledRejections(), this._then(e, void 0, void 0, {value: n}, void 0)
                        }, t.prototype["throw"] = t.prototype.thenThrow = function (t) {
                            return this._then(n, void 0, void 0, {reason: t}, void 0)
                        }, t.prototype.catchThrow = function (t) {
                            if (arguments.length <= 1)return this._then(void 0, n, void 0, {reason: t}, void 0);
                            var e = arguments[1], r = function () {
                                throw e
                            };
                            return this.caught(t, r)
                        }, t.prototype.catchReturn = function (n) {
                            if (arguments.length <= 1)return n instanceof t && n.suppressUnhandledRejections(), this._then(void 0, e, void 0, {value: n}, void 0);
                            var r = arguments[1];
                            r instanceof t && r.suppressUnhandledRejections();
                            var i = function () {
                                return r
                            };
                            return this.caught(n, i)
                        }
                    }
                }, {}], 11: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t, e) {
                        function n() {
                            return o(this)
                        }

                        function r(t, n) {
                            return i(t, n, e, e)
                        }

                        var i = t.reduce, o = t.all;
                        t.prototype.each = function (t) {
                            return i(this, t, e, 0)._then(n, void 0, void 0, this, void 0)
                        }, t.prototype.mapSeries = function (t) {
                            return i(this, t, e, e)
                        }, t.each = function (t, r) {
                            return i(t, r, e, 0)._then(n, void 0, void 0, t, void 0)
                        }, t.mapSeries = r
                    }
                }, {}], 12: [function (t, e, n) {
                    "use strict";
                    function r(t, e) {
                        function n(r) {
                            return this instanceof n ? (f(this, "message", "string" == typeof r ? r : e), f(this, "name", t), void(Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this))) : new n(r)
                        }

                        return u(n, Error), n
                    }

                    function i(t) {
                        return this instanceof i ? (f(this, "name", "OperationalError"), f(this, "message", t), this.cause = t, this.isOperational = !0, void(t instanceof Error ? (f(this, "message", t.message), f(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new i(t)
                    }

                    var o, s, a = t("./es5"), c = a.freeze, l = t("./util"), u = l.inherits, f = l.notEnumerableProp, p = r("Warning", "warning"), h = r("CancellationError", "cancellation error"), d = r("TimeoutError", "timeout error"), _ = r("AggregateError", "aggregate error");
                    try {
                        o = TypeError, s = RangeError
                    } catch (v) {
                        o = r("TypeError", "type error"), s = r("RangeError", "range error")
                    }
                    for (var y = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), m = 0; m < y.length; ++m)"function" == typeof Array.prototype[y[m]] && (_.prototype[y[m]] = Array.prototype[y[m]]);
                    a.defineProperty(_.prototype, "length", {
                        value: 0,
                        configurable: !1,
                        writable: !0,
                        enumerable: !0
                    }), _.prototype.isOperational = !0;
                    var g = 0;
                    _.prototype.toString = function () {
                        var t = Array(4 * g + 1).join(" "), e = "\n" + t + "AggregateError of:\n";
                        g++, t = Array(4 * g + 1).join(" ");
                        for (var n = 0; n < this.length; ++n) {
                            for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o)i[o] = t + i[o];
                            r = i.join("\n"), e += r + "\n"
                        }
                        return g--, e
                    }, u(i, Error);
                    var b = Error.__BluebirdErrorTypes__;
                    b || (b = c({
                        CancellationError: h,
                        TimeoutError: d,
                        OperationalError: i,
                        RejectionError: i,
                        AggregateError: _
                    }), a.defineProperty(Error, "__BluebirdErrorTypes__", {
                        value: b,
                        writable: !1,
                        enumerable: !1,
                        configurable: !1
                    })), e.exports = {
                        Error: Error,
                        TypeError: o,
                        RangeError: s,
                        CancellationError: b.CancellationError,
                        OperationalError: b.OperationalError,
                        TimeoutError: b.TimeoutError,
                        AggregateError: b.AggregateError,
                        Warning: p
                    }
                }, {"./es5": 13, "./util": 36}], 13: [function (t, e, n) {
                    var r = function () {
                        "use strict";
                        return void 0 === this
                    }();
                    if (r)e.exports = {
                        freeze: Object.freeze,
                        defineProperty: Object.defineProperty,
                        getDescriptor: Object.getOwnPropertyDescriptor,
                        keys: Object.keys,
                        names: Object.getOwnPropertyNames,
                        getPrototypeOf: Object.getPrototypeOf,
                        isArray: Array.isArray,
                        isES5: r,
                        propertyIsWritable: function (t, e) {
                            var n = Object.getOwnPropertyDescriptor(t, e);
                            return !(n && !n.writable && !n.set)
                        }
                    }; else {
                        var i = {}.hasOwnProperty, o = {}.toString, s = {}.constructor.prototype, a = function (t) {
                            var e = [];
                            for (var n in t)i.call(t, n) && e.push(n);
                            return e
                        }, c = function (t, e) {
                            return {value: t[e]}
                        }, l = function (t, e, n) {
                            return t[e] = n.value, t
                        }, u = function (t) {
                            return t
                        }, f = function (t) {
                            try {
                                return Object(t).constructor.prototype
                            } catch (e) {
                                return s
                            }
                        }, p = function (t) {
                            try {
                                return "[object Array]" === o.call(t)
                            } catch (e) {
                                return !1
                            }
                        };
                        e.exports = {
                            isArray: p,
                            keys: a,
                            names: a,
                            defineProperty: l,
                            getDescriptor: c,
                            freeze: u,
                            getPrototypeOf: f,
                            isES5: r,
                            propertyIsWritable: function () {
                                return !0
                            }
                        }
                    }
                }, {}], 14: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t, e) {
                        var n = t.map;
                        t.prototype.filter = function (t, r) {
                            return n(this, t, r, e)
                        }, t.filter = function (t, r, i) {
                            return n(t, r, i, e)
                        }
                    }
                }, {}], 15: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n) {
                        function r(t, e, n) {
                            this.promise = t, this.type = e, this.handler = n, this.called = !1, this.cancelPromise = null
                        }

                        function i(t) {
                            this.finallyHandler = t
                        }

                        function o(t, e) {
                            return null != t.cancelPromise && (arguments.length > 1 ? t.cancelPromise._reject(e) : t.cancelPromise._cancel(), t.cancelPromise = null, !0)
                        }

                        function s() {
                            return c.call(this, this.promise._target()._settledValue())
                        }

                        function a(t) {
                            if (!o(this, t))return f.e = t, f
                        }

                        function c(t) {
                            var r = this.promise, c = this.handler;
                            if (!this.called) {
                                this.called = !0;
                                var l = this.isFinallyHandler() ? c.call(r._boundValue()) : c.call(r._boundValue(), t);
                                if (void 0 !== l) {
                                    r._setReturnedNonUndefined();
                                    var p = n(l, r);
                                    if (p instanceof e) {
                                        if (null != this.cancelPromise) {
                                            if (p._isCancelled()) {
                                                var h = new u("late cancellation observer");
                                                return r._attachExtraTrace(h), f.e = h, f
                                            }
                                            p.isPending() && p._attachCancellationCallback(new i(this))
                                        }
                                        return p._then(s, a, void 0, this, void 0)
                                    }
                                }
                            }
                            return r.isRejected() ? (o(this), f.e = t, f) : (o(this), t)
                        }

                        var l = t("./util"), u = e.CancellationError, f = l.errorObj;
                        return r.prototype.isFinallyHandler = function () {
                            return 0 === this.type
                        }, i.prototype._resultCancelled = function () {
                            o(this.finallyHandler)
                        }, e.prototype._passThrough = function (t, e, n, i) {
                            return "function" != typeof t ? this.then() : this._then(n, i, void 0, new r(this, e, t), void 0)
                        }, e.prototype.lastly = e.prototype["finally"] = function (t) {
                            return this._passThrough(t, 0, c, c)
                        }, e.prototype.tap = function (t) {
                            return this._passThrough(t, 1, c)
                        }, r
                    }
                }, {"./util": 36}], 16: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r, i, o, s) {
                        function a(t, n, r) {
                            for (var o = 0; o < n.length; ++o) {
                                r._pushContext();
                                var s = h(n[o])(t);
                                if (r._popContext(), s === p) {
                                    r._pushContext();
                                    var a = e.reject(p.e);
                                    return r._popContext(), a
                                }
                                var c = i(s, r);
                                if (c instanceof e)return c
                            }
                            return null
                        }

                        function c(t, n, i, o) {
                            if (s.cancellation()) {
                                var a = new e(r), c = this._finallyPromise = new e(r);
                                this._promise = a.lastly(function () {
                                    return c
                                }), a._captureStackTrace(), a._setOnCancel(this)
                            } else {
                                var l = this._promise = new e(r);
                                l._captureStackTrace()
                            }
                            this._stack = o, this._generatorFunction = t, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(d) : d, this._yieldedPromise = null, this._cancellationPhase = !1
                        }

                        var l = t("./errors"), u = l.TypeError, f = t("./util"), p = f.errorObj, h = f.tryCatch, d = [];
                        f.inherits(c, o), c.prototype._isResolved = function () {
                            return null === this._promise
                        }, c.prototype._cleanup = function () {
                            this._promise = this._generator = null, s.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null)
                        }, c.prototype._promiseCancelled = function () {
                            if (!this._isResolved()) {
                                var t, n = "undefined" != typeof this._generator["return"];
                                if (n)this._promise._pushContext(), t = h(this._generator["return"]).call(this._generator, void 0), this._promise._popContext(); else {
                                    var r = new e.CancellationError("generator .return() sentinel");
                                    e.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), t = h(this._generator["throw"]).call(this._generator, r), this._promise._popContext()
                                }
                                this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(t)
                            }
                        }, c.prototype._promiseFulfilled = function (t) {
                            this._yieldedPromise = null, this._promise._pushContext();
                            var e = h(this._generator.next).call(this._generator, t);
                            this._promise._popContext(), this._continue(e)
                        }, c.prototype._promiseRejected = function (t) {
                            this._yieldedPromise = null, this._promise._attachExtraTrace(t), this._promise._pushContext();
                            var e = h(this._generator["throw"]).call(this._generator, t);
                            this._promise._popContext(), this._continue(e)
                        }, c.prototype._resultCancelled = function () {
                            if (this._yieldedPromise instanceof e) {
                                var t = this._yieldedPromise;
                                this._yieldedPromise = null, t.cancel()
                            }
                        }, c.prototype.promise = function () {
                            return this._promise
                        }, c.prototype._run = function () {
                            this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0)
                        }, c.prototype._continue = function (t) {
                            var n = this._promise;
                            if (t === p)return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(t.e, !1);
                            var r = t.value;
                            if (t.done === !0)return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(r);
                            var o = i(r, this._promise);
                            if (!(o instanceof e) && (o = a(o, this._yieldHandlers, this._promise), null === o))return void this._promiseRejected(new u("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", r) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                            o = o._target();
                            var s = o._bitField;
                            0 === (50397184 & s) ? (this._yieldedPromise = o, o._proxy(this, null)) : 0 !== (33554432 & s) ? e._async.invoke(this._promiseFulfilled, this, o._value()) : 0 !== (16777216 & s) ? e._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled()
                        }, e.coroutine = function (t, e) {
                            if ("function" != typeof t)throw new u("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                            var n = Object(e).yieldHandler, r = c, i = (new Error).stack;
                            return function () {
                                var e = t.apply(this, arguments), o = new r((void 0), (void 0), n, i), s = o.promise();
                                return o._generator = e, o._promiseFulfilled(void 0), s
                            }
                        }, e.coroutine.addYieldHandler = function (t) {
                            if ("function" != typeof t)throw new u("expecting a function but got " + f.classString(t));
                            d.push(t)
                        }, e.spawn = function (t) {
                            if (s.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof t)return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                            var r = new c(t, this), i = r.promise();
                            return r._run(e.spawn), i
                        }
                    }
                }, {"./errors": 12, "./util": 36}], 17: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r, i, o, s) {
                        var a = t("./util");
                        a.canEvaluate, a.tryCatch, a.errorObj;
                        e.join = function () {
                            var t, e = arguments.length - 1;
                            if (e > 0 && "function" == typeof arguments[e]) {
                                t = arguments[e];
                                var r
                            }
                            var i = [].slice.call(arguments);
                            t && i.pop();
                            var r = new n(i).promise();
                            return void 0 !== t ? r.spread(t) : r
                        }
                    }
                }, {"./util": 36}], 18: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r, i, o, s) {
                        function a(t, e, n, r) {
                            this.constructor$(t), this._promise._captureStackTrace();
                            var i = l();
                            this._callback = null === i ? e : u.domainBind(i, e), this._preservedValues = r === o ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = [], h.invoke(this._asyncInit, this, void 0)
                        }

                        function c(t, n, i, o) {
                            if ("function" != typeof n)return r("expecting a function but got " + u.classString(n));
                            var s = 0;
                            if (void 0 !== i) {
                                if ("object" != typeof i || null === i)return e.reject(new TypeError("options argument must be an object but it is " + u.classString(i)));
                                if ("number" != typeof i.concurrency)return e.reject(new TypeError("'concurrency' must be a number but it is " + u.classString(i.concurrency)));
                                s = i.concurrency
                            }
                            return s = "number" == typeof s && isFinite(s) && s >= 1 ? s : 0, new a(t, n, s, o).promise()
                        }

                        var l = e._getDomain, u = t("./util"), f = u.tryCatch, p = u.errorObj, h = e._async;
                        u.inherits(a, n), a.prototype._asyncInit = function () {
                            this._init$(void 0, -2)
                        }, a.prototype._init = function () {
                        }, a.prototype._promiseFulfilled = function (t, n) {
                            var r = this._values, o = this.length(), a = this._preservedValues, c = this._limit;
                            if (n < 0) {
                                if (n = n * -1 - 1, r[n] = t, c >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved()))return !0
                            } else {
                                if (c >= 1 && this._inFlight >= c)return r[n] = t, this._queue.push(n), !1;
                                null !== a && (a[n] = t);
                                var l = this._promise, u = this._callback, h = l._boundValue();
                                l._pushContext();
                                var d = f(u).call(h, t, n, o), _ = l._popContext();
                                if (s.checkForgottenReturns(d, _, null !== a ? "Promise.filter" : "Promise.map", l), d === p)return this._reject(d.e), !0;
                                var v = i(d, this._promise);
                                if (v instanceof e) {
                                    v = v._target();
                                    var y = v._bitField;
                                    if (0 === (50397184 & y))return c >= 1 && this._inFlight++, r[n] = v, v._proxy(this, (n + 1) * -1), !1;
                                    if (0 === (33554432 & y))return 0 !== (16777216 & y) ? (this._reject(v._reason()), !0) : (this._cancel(), !0);
                                    d = v._value()
                                }
                                r[n] = d
                            }
                            var m = ++this._totalResolved;
                            return m >= o && (null !== a ? this._filter(r, a) : this._resolve(r), !0)
                        }, a.prototype._drainQueue = function () {
                            for (var t = this._queue, e = this._limit, n = this._values; t.length > 0 && this._inFlight < e;) {
                                if (this._isResolved())return;
                                var r = t.pop();
                                this._promiseFulfilled(n[r], r)
                            }
                        }, a.prototype._filter = function (t, e) {
                            for (var n = e.length, r = new Array(n), i = 0, o = 0; o < n; ++o)t[o] && (r[i++] = e[o]);
                            r.length = i, this._resolve(r)
                        }, a.prototype.preservedValues = function () {
                            return this._preservedValues
                        }, e.prototype.map = function (t, e) {
                            return c(this, t, e, null)
                        }, e.map = function (t, e, n, r) {
                            return c(t, e, n, r)
                        }
                    }
                }, {"./util": 36}], 19: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r, i, o) {
                        var s = t("./util"), a = s.tryCatch;
                        e.method = function (t) {
                            if ("function" != typeof t)throw new e.TypeError("expecting a function but got " + s.classString(t));
                            return function () {
                                var r = new e(n);
                                r._captureStackTrace(), r._pushContext();
                                var i = a(t).apply(this, arguments), s = r._popContext();
                                return o.checkForgottenReturns(i, s, "Promise.method", r), r._resolveFromSyncValue(i), r
                            }
                        }, e.attempt = e["try"] = function (t) {
                            if ("function" != typeof t)return i("expecting a function but got " + s.classString(t));
                            var r = new e(n);
                            r._captureStackTrace(), r._pushContext();
                            var c;
                            if (arguments.length > 1) {
                                o.deprecated("calling Promise.try with more than 1 argument");
                                var l = arguments[1], u = arguments[2];
                                c = s.isArray(l) ? a(t).apply(u, l) : a(t).call(u, l)
                            } else c = a(t)();
                            var f = r._popContext();
                            return o.checkForgottenReturns(c, f, "Promise.try", r), r._resolveFromSyncValue(c), r
                        }, e.prototype._resolveFromSyncValue = function (t) {
                            t === s.errorObj ? this._rejectCallback(t.e, !1) : this._resolveCallback(t, !0)
                        }
                    }
                }, {"./util": 36}], 20: [function (t, e, n) {
                    "use strict";
                    function r(t) {
                        return t instanceof Error && u.getPrototypeOf(t) === Error.prototype
                    }

                    function i(t) {
                        var e;
                        if (r(t)) {
                            e = new l(t), e.name = t.name, e.message = t.message, e.stack = t.stack;
                            for (var n = u.keys(t), i = 0; i < n.length; ++i) {
                                var o = n[i];
                                f.test(o) || (e[o] = t[o])
                            }
                            return e
                        }
                        return s.markAsOriginatingFromRejection(t), t
                    }

                    function o(t, e) {
                        return function (n, r) {
                            if (null !== t) {
                                if (n) {
                                    var o = i(a(n));
                                    t._attachExtraTrace(o), t._reject(o)
                                } else if (e) {
                                    var s = [].slice.call(arguments, 1);
                                    t._fulfill(s)
                                } else t._fulfill(r);
                                t = null
                            }
                        }
                    }

                    var s = t("./util"), a = s.maybeWrapAsError, c = t("./errors"), l = c.OperationalError, u = t("./es5"), f = /^(?:name|message|stack|cause)$/;
                    e.exports = o
                }, {"./errors": 12, "./es5": 13, "./util": 36}], 21: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e) {
                        function n(t, e) {
                            var n = this;
                            if (!o.isArray(t))return r.call(n, t, e);
                            var i = a(e).apply(n._boundValue(), [null].concat(t));
                            i === c && s.throwLater(i.e)
                        }

                        function r(t, e) {
                            var n = this, r = n._boundValue(), i = void 0 === t ? a(e).call(r, null) : a(e).call(r, null, t);
                            i === c && s.throwLater(i.e)
                        }

                        function i(t, e) {
                            var n = this;
                            if (!t) {
                                var r = new Error(t + "");
                                r.cause = t, t = r
                            }
                            var i = a(e).call(n._boundValue(), t);
                            i === c && s.throwLater(i.e)
                        }

                        var o = t("./util"), s = e._async, a = o.tryCatch, c = o.errorObj;
                        e.prototype.asCallback = e.prototype.nodeify = function (t, e) {
                            if ("function" == typeof t) {
                                var o = r;
                                void 0 !== e && Object(e).spread && (o = n), this._then(o, i, void 0, this, t)
                            }
                            return this
                        }
                    }
                }, {"./util": 36}], 22: [function (t, n, r) {
                    "use strict";
                    n.exports = function () {
                        function r() {
                        }

                        function i(t, e) {
                            if ("function" != typeof e)throw new g("expecting a function but got " + d.classString(e));
                            if (t.constructor !== o)throw new g("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n")
                        }

                        function o(t) {
                            this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, t !== w && (i(this, t), this._resolveFromExecutor(t)), this._promiseCreated(), this._fireEvent("promiseCreated", this)
                        }

                        function s(t) {
                            this.promise._resolveCallback(t)
                        }

                        function a(t) {
                            this.promise._rejectCallback(t, !1)
                        }

                        function c(t) {
                            var e = new o(w);
                            e._fulfillmentHandler0 = t, e._rejectionHandler0 = t, e._promise0 = t, e._receiver0 = t
                        }

                        var l, u = function () {
                            return new g("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")
                        }, f = function () {
                            return new o.PromiseInspection(this._target())
                        }, p = function (t) {
                            return o.reject(new g(t))
                        }, h = {}, d = t("./util");
                        l = d.isNode ? function () {
                            var t = e.domain;
                            return void 0 === t && (t = null), t
                        } : function () {
                            return null
                        }, d.notEnumerableProp(o, "_getDomain", l);
                        var _ = t("./es5"), v = t("./async"), y = new v;
                        _.defineProperty(o, "_async", {value: y});
                        var m = t("./errors"), g = o.TypeError = m.TypeError;
                        o.RangeError = m.RangeError;
                        var b = o.CancellationError = m.CancellationError;
                        o.TimeoutError = m.TimeoutError, o.OperationalError = m.OperationalError, o.RejectionError = m.OperationalError, o.AggregateError = m.AggregateError;
                        var w = function () {
                        }, C = {}, k = {}, j = t("./thenables")(o, w), E = t("./promise_array")(o, w, j, p, r), x = t("./context")(o), F = x.create, T = t("./debuggability")(o, x), S = (T.CapturedTrace, t("./finally")(o, j)), O = t("./catch_filter")(k), R = t("./nodeback"), P = d.errorObj, A = d.tryCatch;
                        return o.prototype.toString = function () {
                            return "[object Promise]"
                        }, o.prototype.caught = o.prototype["catch"] = function (t) {
                            var e = arguments.length;
                            if (e > 1) {
                                var n, r = new Array(e - 1), i = 0;
                                for (n = 0; n < e - 1; ++n) {
                                    var o = arguments[n];
                                    if (!d.isObject(o))return p("expecting an object but got A catch statement predicate " + d.classString(o));
                                    r[i++] = o
                                }
                                return r.length = i, t = arguments[n], this.then(void 0, O(r, t, this))
                            }
                            return this.then(void 0, t)
                        }, o.prototype.reflect = function () {
                            return this._then(f, f, void 0, this, void 0)
                        }, o.prototype.then = function (t, e) {
                            if (T.warnings() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
                                var n = ".then() only accepts functions but was passed: " + d.classString(t);
                                arguments.length > 1 && (n += ", " + d.classString(e)), this._warn(n)
                            }
                            return this._then(t, e, void 0, void 0, void 0)
                        }, o.prototype.done = function (t, e) {
                            var n = this._then(t, e, void 0, void 0, void 0);
                            n._setIsFinal()
                        }, o.prototype.spread = function (t) {
                            return "function" != typeof t ? p("expecting a function but got " + d.classString(t)) : this.all()._then(t, void 0, void 0, C, void 0)
                        }, o.prototype.toJSON = function () {
                            var t = {
                                isFulfilled: !1,
                                isRejected: !1,
                                fulfillmentValue: void 0,
                                rejectionReason: void 0
                            };
                            return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t
                        }, o.prototype.all = function () {
                            return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new E(this).promise()
                        }, o.prototype.error = function (t) {
                            return this.caught(d.originatesFromRejection, t)
                        }, o.getNewLibraryCopy = n.exports, o.is = function (t) {
                            return t instanceof o
                        }, o.fromNode = o.fromCallback = function (t) {
                            var e = new o(w);
                            e._captureStackTrace();
                            var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs, r = A(t)(R(e, n));
                            return r === P && e._rejectCallback(r.e, !0), e._isFateSealed() || e._setAsyncGuaranteed(), e
                        }, o.all = function (t) {
                            return new E(t).promise()
                        }, o.cast = function (t) {
                            var e = j(t);
                            return e instanceof o || (e = new o(w), e._captureStackTrace(), e._setFulfilled(), e._rejectionHandler0 = t), e
                        }, o.resolve = o.fulfilled = o.cast, o.reject = o.rejected = function (t) {
                            var e = new o(w);
                            return e._captureStackTrace(), e._rejectCallback(t, !0), e
                        }, o.setScheduler = function (t) {
                            if ("function" != typeof t)throw new g("expecting a function but got " + d.classString(t));
                            return y.setScheduler(t)
                        }, o.prototype._then = function (t, e, n, r, i) {
                            var s = void 0 !== i, a = s ? i : new o(w), c = this._target(), u = c._bitField;
                            s || (a._propagateFrom(this, 3), a._captureStackTrace(), void 0 === r && 0 !== (2097152 & this._bitField) && (r = 0 !== (50397184 & u) ? this._boundValue() : c === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, a));
                            var f = l();
                            if (0 !== (50397184 & u)) {
                                var p, h, _ = c._settlePromiseCtx;
                                0 !== (33554432 & u) ? (h = c._rejectionHandler0, p = t) : 0 !== (16777216 & u) ? (h = c._fulfillmentHandler0, p = e, c._unsetRejectionIsUnhandled()) : (_ = c._settlePromiseLateCancellationObserver, h = new b("late cancellation observer"), c._attachExtraTrace(h), p = e), y.invoke(_, c, {
                                    handler: null === f ? p : "function" == typeof p && d.domainBind(f, p),
                                    promise: a,
                                    receiver: r,
                                    value: h
                                })
                            } else c._addCallbacks(t, e, a, r, f);
                            return a
                        }, o.prototype._length = function () {
                            return 65535 & this._bitField
                        }, o.prototype._isFateSealed = function () {
                            return 0 !== (117506048 & this._bitField)
                        }, o.prototype._isFollowing = function () {
                            return 67108864 === (67108864 & this._bitField)
                        }, o.prototype._setLength = function (t) {
                            this._bitField = this._bitField & -65536 | 65535 & t
                        }, o.prototype._setFulfilled = function () {
                            this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this)
                        }, o.prototype._setRejected = function () {
                            this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this)
                        }, o.prototype._setFollowing = function () {
                            this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this)
                        }, o.prototype._setIsFinal = function () {
                            this._bitField = 4194304 | this._bitField
                        }, o.prototype._isFinal = function () {
                            return (4194304 & this._bitField) > 0
                        }, o.prototype._unsetCancelled = function () {
                            this._bitField = this._bitField & -65537
                        }, o.prototype._setCancelled = function () {
                            this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this)
                        }, o.prototype._setWillBeCancelled = function () {
                            this._bitField = 8388608 | this._bitField
                        }, o.prototype._setAsyncGuaranteed = function () {
                            y.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField)
                        }, o.prototype._receiverAt = function (t) {
                            var e = 0 === t ? this._receiver0 : this[4 * t - 4 + 3];
                            if (e !== h)return void 0 === e && this._isBound() ? this._boundValue() : e
                        }, o.prototype._promiseAt = function (t) {
                            return this[4 * t - 4 + 2]
                        }, o.prototype._fulfillmentHandlerAt = function (t) {
                            return this[4 * t - 4 + 0]
                        }, o.prototype._rejectionHandlerAt = function (t) {
                            return this[4 * t - 4 + 1]
                        }, o.prototype._boundValue = function () {
                        }, o.prototype._migrateCallback0 = function (t) {
                            var e = (t._bitField, t._fulfillmentHandler0), n = t._rejectionHandler0, r = t._promise0, i = t._receiverAt(0);
                            void 0 === i && (i = h), this._addCallbacks(e, n, r, i, null)
                        }, o.prototype._migrateCallbackAt = function (t, e) {
                            var n = t._fulfillmentHandlerAt(e), r = t._rejectionHandlerAt(e), i = t._promiseAt(e), o = t._receiverAt(e);
                            void 0 === o && (o = h), this._addCallbacks(n, r, i, o, null)
                        }, o.prototype._addCallbacks = function (t, e, n, r, i) {
                            var o = this._length();
                            if (o >= 65531 && (o = 0, this._setLength(0)), 0 === o)this._promise0 = n, this._receiver0 = r, "function" == typeof t && (this._fulfillmentHandler0 = null === i ? t : d.domainBind(i, t)), "function" == typeof e && (this._rejectionHandler0 = null === i ? e : d.domainBind(i, e)); else {
                                var s = 4 * o - 4;
                                this[s + 2] = n, this[s + 3] = r, "function" == typeof t && (this[s + 0] = null === i ? t : d.domainBind(i, t)), "function" == typeof e && (this[s + 1] = null === i ? e : d.domainBind(i, e))
                            }
                            return this._setLength(o + 1), o
                        }, o.prototype._proxy = function (t, e) {
                            this._addCallbacks(void 0, void 0, e, t, null)
                        }, o.prototype._resolveCallback = function (t, e) {
                            if (0 === (117506048 & this._bitField)) {
                                if (t === this)return this._rejectCallback(u(), !1);
                                var n = j(t, this);
                                if (!(n instanceof o))return this._fulfill(t);
                                e && this._propagateFrom(n, 2);
                                var r = n._target();
                                if (r === this)return void this._reject(u());
                                var i = r._bitField;
                                if (0 === (50397184 & i)) {
                                    var s = this._length();
                                    s > 0 && r._migrateCallback0(this);
                                    for (var a = 1; a < s; ++a)r._migrateCallbackAt(this, a);
                                    this._setFollowing(), this._setLength(0), this._setFollowee(r)
                                } else if (0 !== (33554432 & i))this._fulfill(r._value()); else if (0 !== (16777216 & i))this._reject(r._reason()); else {
                                    var c = new b("late cancellation observer");
                                    r._attachExtraTrace(c), this._reject(c)
                                }
                            }
                        }, o.prototype._rejectCallback = function (t, e, n) {
                            var r = d.ensureErrorObject(t), i = r === t;
                            if (!i && !n && T.warnings()) {
                                var o = "a promise was rejected with a non-error: " + d.classString(t);
                                this._warn(o, !0)
                            }
                            this._attachExtraTrace(r, !!e && i), this._reject(t)
                        }, o.prototype._resolveFromExecutor = function (t) {
                            var e = this;
                            this._captureStackTrace(), this._pushContext();
                            var n = !0, r = this._execute(t, function (t) {
                                e._resolveCallback(t)
                            }, function (t) {
                                e._rejectCallback(t, n)
                            });
                            n = !1, this._popContext(), void 0 !== r && e._rejectCallback(r, !0)
                        }, o.prototype._settlePromiseFromHandler = function (t, e, n, r) {
                            var i = r._bitField;
                            if (0 === (65536 & i)) {
                                r._pushContext();
                                var o;
                                e === C ? n && "number" == typeof n.length ? o = A(t).apply(this._boundValue(), n) : (o = P, o.e = new g("cannot .spread() a non-array: " + d.classString(n))) : o = A(t).call(e, n);
                                var s = r._popContext();
                                i = r._bitField, 0 === (65536 & i) && (o === k ? r._reject(n) : o === P ? r._rejectCallback(o.e, !1) : (T.checkForgottenReturns(o, s, "", r, this), r._resolveCallback(o)))
                            }
                        }, o.prototype._target = function () {
                            for (var t = this; t._isFollowing();)t = t._followee();
                            return t
                        }, o.prototype._followee = function () {
                            return this._rejectionHandler0
                        }, o.prototype._setFollowee = function (t) {
                            this._rejectionHandler0 = t
                        }, o.prototype._settlePromise = function (t, e, n, i) {
                            var s = t instanceof o, a = this._bitField, c = 0 !== (134217728 & a);
                            0 !== (65536 & a) ? (s && t._invokeInternalOnCancel(), n instanceof S && n.isFinallyHandler() ? (n.cancelPromise = t, A(e).call(n, i) === P && t._reject(P.e)) : e === f ? t._fulfill(f.call(n)) : n instanceof r ? n._promiseCancelled(t) : s || t instanceof E ? t._cancel() : n.cancel()) : "function" == typeof e ? s ? (c && t._setAsyncGuaranteed(), this._settlePromiseFromHandler(e, n, i, t)) : e.call(n, i, t) : n instanceof r ? n._isResolved() || (0 !== (33554432 & a) ? n._promiseFulfilled(i, t) : n._promiseRejected(i, t)) : s && (c && t._setAsyncGuaranteed(), 0 !== (33554432 & a) ? t._fulfill(i) : t._reject(i))
                        }, o.prototype._settlePromiseLateCancellationObserver = function (t) {
                            var e = t.handler, n = t.promise, r = t.receiver, i = t.value;
                            "function" == typeof e ? n instanceof o ? this._settlePromiseFromHandler(e, r, i, n) : e.call(r, i, n) : n instanceof o && n._reject(i)
                        }, o.prototype._settlePromiseCtx = function (t) {
                            this._settlePromise(t.promise, t.handler, t.receiver, t.value)
                        }, o.prototype._settlePromise0 = function (t, e, n) {
                            var r = this._promise0, i = this._receiverAt(0);
                            this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, t, i, e)
                        }, o.prototype._clearCallbackDataAtIndex = function (t) {
                            var e = 4 * t - 4;
                            this[e + 2] = this[e + 3] = this[e + 0] = this[e + 1] = void 0
                        }, o.prototype._fulfill = function (t) {
                            var e = this._bitField;
                            if (!((117506048 & e) >>> 16)) {
                                if (t === this) {
                                    var n = u();
                                    return this._attachExtraTrace(n), this._reject(n)
                                }
                                this._setFulfilled(), this._rejectionHandler0 = t, (65535 & e) > 0 && (0 !== (134217728 & e) ? this._settlePromises() : y.settlePromises(this))
                            }
                        }, o.prototype._reject = function (t) {
                            var e = this._bitField;
                            if (!((117506048 & e) >>> 16))return this._setRejected(), this._fulfillmentHandler0 = t, this._isFinal() ? y.fatalError(t, d.isNode) : void((65535 & e) > 0 ? y.settlePromises(this) : this._ensurePossibleRejectionHandled())
                        }, o.prototype._fulfillPromises = function (t, e) {
                            for (var n = 1; n < t; n++) {
                                var r = this._fulfillmentHandlerAt(n), i = this._promiseAt(n), o = this._receiverAt(n);
                                this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e)
                            }
                        }, o.prototype._rejectPromises = function (t, e) {
                            for (var n = 1; n < t; n++) {
                                var r = this._rejectionHandlerAt(n), i = this._promiseAt(n), o = this._receiverAt(n);
                                this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e)
                            }
                        }, o.prototype._settlePromises = function () {
                            var t = this._bitField, e = 65535 & t;
                            if (e > 0) {
                                if (0 !== (16842752 & t)) {
                                    var n = this._fulfillmentHandler0;
                                    this._settlePromise0(this._rejectionHandler0, n, t), this._rejectPromises(e, n)
                                } else {
                                    var r = this._rejectionHandler0;
                                    this._settlePromise0(this._fulfillmentHandler0, r, t), this._fulfillPromises(e, r)
                                }
                                this._setLength(0)
                            }
                            this._clearCancellationData()
                        }, o.prototype._settledValue = function () {
                            var t = this._bitField;
                            return 0 !== (33554432 & t) ? this._rejectionHandler0 : 0 !== (16777216 & t) ? this._fulfillmentHandler0 : void 0
                        }, o.defer = o.pending = function () {
                            T.deprecated("Promise.defer", "new Promise");
                            var t = new o(w);
                            return {promise: t, resolve: s, reject: a}
                        }, d.notEnumerableProp(o, "_makeSelfResolutionError", u), t("./method")(o, w, j, p, T), t("./bind")(o, w, j, T), t("./cancel")(o, E, p, T), t("./direct_resolve")(o), t("./synchronous_inspection")(o), t("./join")(o, E, j, w, y, l), o.Promise = o, o.version = "3.4.6", t("./map.js")(o, E, p, j, w, T), t("./call_get.js")(o), t("./using.js")(o, p, j, F, w, T), t("./timers.js")(o, w, T), t("./generators.js")(o, p, w, j, r, T), t("./nodeify.js")(o), t("./promisify.js")(o, w), t("./props.js")(o, E, j, p), t("./race.js")(o, w, j, p), t("./reduce.js")(o, E, p, j, w, T), t("./settle.js")(o, E, T), t("./some.js")(o, E, p), t("./filter.js")(o, w), t("./each.js")(o, w), t("./any.js")(o), d.toFastProperties(o), d.toFastProperties(o.prototype), c({a: 1}), c({b: 2}), c({c: 3}), c(1), c(function () {
                        }), c(void 0),
                            c(!1), c(new o(w)), T.setBounds(v.firstLineError, d.lastLineError), o
                    }
                }, {
                    "./any.js": 1,
                    "./async": 2,
                    "./bind": 3,
                    "./call_get.js": 5,
                    "./cancel": 6,
                    "./catch_filter": 7,
                    "./context": 8,
                    "./debuggability": 9,
                    "./direct_resolve": 10,
                    "./each.js": 11,
                    "./errors": 12,
                    "./es5": 13,
                    "./filter.js": 14,
                    "./finally": 15,
                    "./generators.js": 16,
                    "./join": 17,
                    "./map.js": 18,
                    "./method": 19,
                    "./nodeback": 20,
                    "./nodeify.js": 21,
                    "./promise_array": 23,
                    "./promisify.js": 24,
                    "./props.js": 25,
                    "./race.js": 27,
                    "./reduce.js": 28,
                    "./settle.js": 30,
                    "./some.js": 31,
                    "./synchronous_inspection": 32,
                    "./thenables": 33,
                    "./timers.js": 34,
                    "./using.js": 35,
                    "./util": 36
                }], 23: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r, i, o) {
                        function s(t) {
                            switch (t) {
                                case-2:
                                    return [];
                                case-3:
                                    return {}
                            }
                        }

                        function a(t) {
                            var r = this._promise = new e(n);
                            t instanceof e && r._propagateFrom(t, 3), r._setOnCancel(this), this._values = t, this._length = 0, this._totalResolved = 0, this._init(void 0, -2)
                        }

                        var c = t("./util");
                        c.isArray;
                        return c.inherits(a, o), a.prototype.length = function () {
                            return this._length
                        }, a.prototype.promise = function () {
                            return this._promise
                        }, a.prototype._init = function l(t, n) {
                            var o = r(this._values, this._promise);
                            if (o instanceof e) {
                                o = o._target();
                                var a = o._bitField;
                                if (this._values = o, 0 === (50397184 & a))return this._promise._setAsyncGuaranteed(), o._then(l, this._reject, void 0, this, n);
                                if (0 === (33554432 & a))return 0 !== (16777216 & a) ? this._reject(o._reason()) : this._cancel();
                                o = o._value()
                            }
                            if (o = c.asArray(o), null === o) {
                                var u = i("expecting an array or an iterable object but got " + c.classString(o)).reason();
                                return void this._promise._rejectCallback(u, !1)
                            }
                            return 0 === o.length ? void(n === -5 ? this._resolveEmptyArray() : this._resolve(s(n))) : void this._iterate(o)
                        }, a.prototype._iterate = function (t) {
                            var n = this.getActualLength(t.length);
                            this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;
                            for (var i = this._promise, o = !1, s = null, a = 0; a < n; ++a) {
                                var c = r(t[a], i);
                                c instanceof e ? (c = c._target(), s = c._bitField) : s = null, o ? null !== s && c.suppressUnhandledRejections() : null !== s ? 0 === (50397184 & s) ? (c._proxy(this, a), this._values[a] = c) : o = 0 !== (33554432 & s) ? this._promiseFulfilled(c._value(), a) : 0 !== (16777216 & s) ? this._promiseRejected(c._reason(), a) : this._promiseCancelled(a) : o = this._promiseFulfilled(c, a)
                            }
                            o || i._setAsyncGuaranteed()
                        }, a.prototype._isResolved = function () {
                            return null === this._values
                        }, a.prototype._resolve = function (t) {
                            this._values = null, this._promise._fulfill(t)
                        }, a.prototype._cancel = function () {
                            !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel())
                        }, a.prototype._reject = function (t) {
                            this._values = null, this._promise._rejectCallback(t, !1)
                        }, a.prototype._promiseFulfilled = function (t, e) {
                            this._values[e] = t;
                            var n = ++this._totalResolved;
                            return n >= this._length && (this._resolve(this._values), !0)
                        }, a.prototype._promiseCancelled = function () {
                            return this._cancel(), !0
                        }, a.prototype._promiseRejected = function (t) {
                            return this._totalResolved++, this._reject(t), !0
                        }, a.prototype._resultCancelled = function () {
                            if (!this._isResolved()) {
                                var t = this._values;
                                if (this._cancel(), t instanceof e)t.cancel(); else for (var n = 0; n < t.length; ++n)t[n] instanceof e && t[n].cancel()
                            }
                        }, a.prototype.shouldCopyValues = function () {
                            return !0
                        }, a.prototype.getActualLength = function (t) {
                            return t
                        }, a
                    }
                }, {"./util": 36}], 24: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n) {
                        function r(t) {
                            return !C.test(t)
                        }

                        function i(t) {
                            try {
                                return t.__isPromisified__ === !0
                            } catch (e) {
                                return !1
                            }
                        }

                        function o(t, e, n) {
                            var r = h.getDataPropertyOrDefault(t, e + n, b);
                            return !!r && i(r)
                        }

                        function s(t, e, n) {
                            for (var r = 0; r < t.length; r += 2) {
                                var i = t[r];
                                if (n.test(i))for (var o = i.replace(n, ""), s = 0; s < t.length; s += 2)if (t[s] === o)throw new m("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", e))
                            }
                        }

                        function a(t, e, n, r) {
                            for (var a = h.inheritedDataKeys(t), c = [], l = 0; l < a.length; ++l) {
                                var u = a[l], f = t[u], p = r === k || k(u, f, t);
                                "function" != typeof f || i(f) || o(t, u, e) || !r(u, f, t, p) || c.push(u, f)
                            }
                            return s(c, e, n), c
                        }

                        function c(t, r, i, o, s, a) {
                            function c() {
                                var i = r;
                                r === p && (i = this);
                                var o = new e(n);
                                o._captureStackTrace();
                                var s = "string" == typeof u && this !== l ? this[u] : t, c = d(o, a);
                                try {
                                    s.apply(i, _(arguments, c))
                                } catch (f) {
                                    o._rejectCallback(v(f), !0, !0)
                                }
                                return o._isFateSealed() || o._setAsyncGuaranteed(), o
                            }

                            var l = function () {
                                return this
                            }(), u = t;
                            return "string" == typeof u && (t = o), h.notEnumerableProp(c, "__isPromisified__", !0), c
                        }

                        function l(t, e, n, r, i) {
                            for (var o = new RegExp(j(e) + "$"), s = a(t, e, o, n), c = 0, l = s.length; c < l; c += 2) {
                                var u = s[c], f = s[c + 1], d = u + e;
                                if (r === E)t[d] = E(u, p, u, f, e, i); else {
                                    var _ = r(f, function () {
                                        return E(u, p, u, f, e, i)
                                    });
                                    h.notEnumerableProp(_, "__isPromisified__", !0), t[d] = _
                                }
                            }
                            return h.toFastProperties(t), t
                        }

                        function u(t, e, n) {
                            return E(t, e, void 0, t, null, n)
                        }

                        var f, p = {}, h = t("./util"), d = t("./nodeback"), _ = h.withAppended, v = h.maybeWrapAsError, y = h.canEvaluate, m = t("./errors").TypeError, g = "Async", b = {__isPromisified__: !0}, w = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"], C = new RegExp("^(?:" + w.join("|") + ")$"), k = function (t) {
                            return h.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t
                        }, j = function (t) {
                            return t.replace(/([$])/, "\\$")
                        }, E = y ? f : c;
                        e.promisify = function (t, e) {
                            if ("function" != typeof t)throw new m("expecting a function but got " + h.classString(t));
                            if (i(t))return t;
                            e = Object(e);
                            var n = void 0 === e.context ? p : e.context, o = !!e.multiArgs, s = u(t, n, o);
                            return h.copyDescriptors(t, s, r), s
                        }, e.promisifyAll = function (t, e) {
                            if ("function" != typeof t && "object" != typeof t)throw new m("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                            e = Object(e);
                            var n = !!e.multiArgs, r = e.suffix;
                            "string" != typeof r && (r = g);
                            var i = e.filter;
                            "function" != typeof i && (i = k);
                            var o = e.promisifier;
                            if ("function" != typeof o && (o = E), !h.isIdentifier(r))throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                            for (var s = h.inheritedDataKeys(t), a = 0; a < s.length; ++a) {
                                var c = t[s[a]];
                                "constructor" !== s[a] && h.isClass(c) && (l(c.prototype, r, i, o, n), l(c, r, i, o, n))
                            }
                            return l(t, r, i, o, n)
                        }
                    }
                }, {"./errors": 12, "./nodeback": 20, "./util": 36}], 25: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r, i) {
                        function o(t) {
                            var e, n = !1;
                            if (void 0 !== a && t instanceof a)e = f(t), n = !0; else {
                                var r = u.keys(t), i = r.length;
                                e = new Array(2 * i);
                                for (var o = 0; o < i; ++o) {
                                    var s = r[o];
                                    e[o] = t[s], e[o + i] = s
                                }
                            }
                            this.constructor$(e), this._isMap = n, this._init$(void 0, -3)
                        }

                        function s(t) {
                            var n, s = r(t);
                            return l(s) ? (n = s instanceof e ? s._then(e.props, void 0, void 0, void 0, void 0) : new o(s).promise(), s instanceof e && n._propagateFrom(s, 2), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")
                        }

                        var a, c = t("./util"), l = c.isObject, u = t("./es5");
                        "function" == typeof Map && (a = Map);
                        var f = function () {
                            function t(t, r) {
                                this[e] = t, this[e + n] = r, e++
                            }

                            var e = 0, n = 0;
                            return function (r) {
                                n = r.size, e = 0;
                                var i = new Array(2 * r.size);
                                return r.forEach(t, i), i
                            }
                        }(), p = function (t) {
                            for (var e = new a, n = t.length / 2 | 0, r = 0; r < n; ++r) {
                                var i = t[n + r], o = t[r];
                                e.set(i, o)
                            }
                            return e
                        };
                        c.inherits(o, n), o.prototype._init = function () {
                        }, o.prototype._promiseFulfilled = function (t, e) {
                            this._values[e] = t;
                            var n = ++this._totalResolved;
                            if (n >= this._length) {
                                var r;
                                if (this._isMap)r = p(this._values); else {
                                    r = {};
                                    for (var i = this.length(), o = 0, s = this.length(); o < s; ++o)r[this._values[o + i]] = this._values[o]
                                }
                                return this._resolve(r), !0
                            }
                            return !1
                        }, o.prototype.shouldCopyValues = function () {
                            return !1
                        }, o.prototype.getActualLength = function (t) {
                            return t >> 1
                        }, e.prototype.props = function () {
                            return s(this)
                        }, e.props = function (t) {
                            return s(t)
                        }
                    }
                }, {"./es5": 13, "./util": 36}], 26: [function (t, e, n) {
                    "use strict";
                    function r(t, e, n, r, i) {
                        for (var o = 0; o < i; ++o)n[o + r] = t[o + e], t[o + e] = void 0
                    }

                    function i(t) {
                        this._capacity = t, this._length = 0, this._front = 0
                    }

                    i.prototype._willBeOverCapacity = function (t) {
                        return this._capacity < t
                    }, i.prototype._pushOne = function (t) {
                        var e = this.length();
                        this._checkCapacity(e + 1);
                        var n = this._front + e & this._capacity - 1;
                        this[n] = t, this._length = e + 1
                    }, i.prototype._unshiftOne = function (t) {
                        var e = this._capacity;
                        this._checkCapacity(this.length() + 1);
                        var n = this._front, r = (n - 1 & e - 1 ^ e) - e;
                        this[r] = t, this._front = r, this._length = this.length() + 1
                    }, i.prototype.unshift = function (t, e, n) {
                        this._unshiftOne(n), this._unshiftOne(e), this._unshiftOne(t)
                    }, i.prototype.push = function (t, e, n) {
                        var r = this.length() + 3;
                        if (this._willBeOverCapacity(r))return this._pushOne(t), this._pushOne(e), void this._pushOne(n);
                        var i = this._front + r - 3;
                        this._checkCapacity(r);
                        var o = this._capacity - 1;
                        this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = n, this._length = r
                    }, i.prototype.shift = function () {
                        var t = this._front, e = this[t];
                        return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e
                    }, i.prototype.length = function () {
                        return this._length
                    }, i.prototype._checkCapacity = function (t) {
                        this._capacity < t && this._resizeTo(this._capacity << 1)
                    }, i.prototype._resizeTo = function (t) {
                        var e = this._capacity;
                        this._capacity = t;
                        var n = this._front, i = this._length, o = n + i & e - 1;
                        r(this, 0, this, e, o)
                    }, e.exports = i
                }, {}], 27: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r, i) {
                        function o(t, o) {
                            var c = r(t);
                            if (c instanceof e)return a(c);
                            if (t = s.asArray(t), null === t)return i("expecting an array or an iterable object but got " + s.classString(t));
                            var l = new e(n);
                            void 0 !== o && l._propagateFrom(o, 3);
                            for (var u = l._fulfill, f = l._reject, p = 0, h = t.length; p < h; ++p) {
                                var d = t[p];
                                (void 0 !== d || p in t) && e.cast(d)._then(u, f, void 0, l, null)
                            }
                            return l
                        }

                        var s = t("./util"), a = function (t) {
                            return t.then(function (e) {
                                return o(e, t)
                            })
                        };
                        e.race = function (t) {
                            return o(t, void 0)
                        }, e.prototype.race = function () {
                            return o(this, void 0)
                        }
                    }
                }, {"./util": 36}], 28: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r, i, o, s) {
                        function a(t, n, r, i) {
                            this.constructor$(t);
                            var s = p();
                            this._fn = null === s ? n : h.domainBind(s, n), void 0 !== r && (r = e.resolve(r), r._attachCancellationCallback(this)), this._initialValue = r, this._currentCancellable = null, i === o ? this._eachValues = Array(this._length) : 0 === i ? this._eachValues = null : this._eachValues = void 0, this._promise._captureStackTrace(), this._init$(void 0, -5)
                        }

                        function c(t, e) {
                            this.isFulfilled() ? e._resolve(t) : e._reject(t)
                        }

                        function l(t, e, n, i) {
                            if ("function" != typeof e)return r("expecting a function but got " + h.classString(e));
                            var o = new a(t, e, n, i);
                            return o.promise()
                        }

                        function u(t) {
                            this.accum = t, this.array._gotAccum(t);
                            var n = i(this.value, this.array._promise);
                            return n instanceof e ? (this.array._currentCancellable = n, n._then(f, void 0, void 0, this, void 0)) : f.call(this, n)
                        }

                        function f(t) {
                            var n = this.array, r = n._promise, i = d(n._fn);
                            r._pushContext();
                            var o;
                            o = void 0 !== n._eachValues ? i.call(r._boundValue(), t, this.index, this.length) : i.call(r._boundValue(), this.accum, t, this.index, this.length), o instanceof e && (n._currentCancellable = o);
                            var a = r._popContext();
                            return s.checkForgottenReturns(o, a, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", r), o
                        }

                        var p = e._getDomain, h = t("./util"), d = h.tryCatch;
                        h.inherits(a, n), a.prototype._gotAccum = function (t) {
                            void 0 !== this._eachValues && null !== this._eachValues && t !== o && this._eachValues.push(t)
                        }, a.prototype._eachComplete = function (t) {
                            return null !== this._eachValues && this._eachValues.push(t), this._eachValues
                        }, a.prototype._init = function () {
                        }, a.prototype._resolveEmptyArray = function () {
                            this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue)
                        }, a.prototype.shouldCopyValues = function () {
                            return !1
                        }, a.prototype._resolve = function (t) {
                            this._promise._resolveCallback(t), this._values = null
                        }, a.prototype._resultCancelled = function (t) {
                            return t === this._initialValue ? this._cancel() : void(this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel()))
                        }, a.prototype._iterate = function (t) {
                            this._values = t;
                            var n, r, i = t.length;
                            if (void 0 !== this._initialValue ? (n = this._initialValue, r = 0) : (n = e.resolve(t[0]), r = 1), this._currentCancellable = n, !n.isRejected())for (; r < i; ++r) {
                                var o = {accum: null, value: t[r], index: r, length: i, array: this};
                                n = n._then(u, void 0, void 0, o, void 0)
                            }
                            void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(c, c, void 0, n, this)
                        }, e.prototype.reduce = function (t, e) {
                            return l(this, t, e, null)
                        }, e.reduce = function (t, e, n, r) {
                            return l(t, e, n, r)
                        }
                    }
                }, {"./util": 36}], 29: [function (t, i, o) {
                    "use strict";
                    var s, a = t("./util"), c = function () {
                        throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                    }, l = a.getNativePromise();
                    if (a.isNode && "undefined" == typeof MutationObserver) {
                        var u = n.setImmediate, f = e.nextTick;
                        s = a.isRecentNode ? function (t) {
                            u.call(n, t)
                        } : function (t) {
                            f.call(e, t)
                        }
                    } else if ("function" == typeof l && "function" == typeof l.resolve) {
                        var p = l.resolve();
                        s = function (t) {
                            p.then(t)
                        }
                    } else s = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? "undefined" != typeof r ? function (t) {
                        r(t)
                    } : "undefined" != typeof setTimeout ? function (t) {
                        setTimeout(t, 0)
                    } : c : function () {
                        var t = document.createElement("div"), e = {attributes: !0}, n = !1, r = document.createElement("div"), i = new MutationObserver(function () {
                            t.classList.toggle("foo"), n = !1
                        });
                        i.observe(r, e);
                        var o = function () {
                            n || (n = !0, r.classList.toggle("foo"))
                        };
                        return function (n) {
                            var r = new MutationObserver(function () {
                                r.disconnect(), n()
                            });
                            r.observe(t, e), o()
                        }
                    }();
                    i.exports = s
                }, {"./util": 36}], 30: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r) {
                        function i(t) {
                            this.constructor$(t)
                        }

                        var o = e.PromiseInspection, s = t("./util");
                        s.inherits(i, n), i.prototype._promiseResolved = function (t, e) {
                            this._values[t] = e;
                            var n = ++this._totalResolved;
                            return n >= this._length && (this._resolve(this._values), !0)
                        }, i.prototype._promiseFulfilled = function (t, e) {
                            var n = new o;
                            return n._bitField = 33554432, n._settledValueField = t, this._promiseResolved(e, n)
                        }, i.prototype._promiseRejected = function (t, e) {
                            var n = new o;
                            return n._bitField = 16777216, n._settledValueField = t, this._promiseResolved(e, n)
                        }, e.settle = function (t) {
                            return r.deprecated(".settle()", ".reflect()"), new i(t).promise()
                        }, e.prototype.settle = function () {
                            return e.settle(this)
                        }
                    }
                }, {"./util": 36}], 31: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r) {
                        function i(t) {
                            this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1
                        }

                        function o(t, e) {
                            if ((0 | e) !== e || e < 0)return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                            var n = new i(t), o = n.promise();
                            return n.setHowMany(e), n.init(), o
                        }

                        var s = t("./util"), a = t("./errors").RangeError, c = t("./errors").AggregateError, l = s.isArray, u = {};
                        s.inherits(i, n), i.prototype._init = function () {
                            if (this._initialized) {
                                if (0 === this._howMany)return void this._resolve([]);
                                this._init$(void 0, -5);
                                var t = l(this._values);
                                !this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                            }
                        }, i.prototype.init = function () {
                            this._initialized = !0, this._init()
                        }, i.prototype.setUnwrap = function () {
                            this._unwrap = !0
                        }, i.prototype.howMany = function () {
                            return this._howMany
                        }, i.prototype.setHowMany = function (t) {
                            this._howMany = t
                        }, i.prototype._promiseFulfilled = function (t) {
                            return this._addFulfilled(t), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0)
                        }, i.prototype._promiseRejected = function (t) {
                            return this._addRejected(t), this._checkOutcome()
                        }, i.prototype._promiseCancelled = function () {
                            return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(u), this._checkOutcome())
                        }, i.prototype._checkOutcome = function () {
                            if (this.howMany() > this._canPossiblyFulfill()) {
                                for (var t = new c, e = this.length(); e < this._values.length; ++e)this._values[e] !== u && t.push(this._values[e]);
                                return t.length > 0 ? this._reject(t) : this._cancel(), !0
                            }
                            return !1
                        }, i.prototype._fulfilled = function () {
                            return this._totalResolved
                        }, i.prototype._rejected = function () {
                            return this._values.length - this.length()
                        }, i.prototype._addRejected = function (t) {
                            this._values.push(t)
                        }, i.prototype._addFulfilled = function (t) {
                            this._values[this._totalResolved++] = t
                        }, i.prototype._canPossiblyFulfill = function () {
                            return this.length() - this._rejected()
                        }, i.prototype._getRangeError = function (t) {
                            var e = "Input array must contain at least " + this._howMany + " items but contains only " + t + " items";
                            return new a(e)
                        }, i.prototype._resolveEmptyArray = function () {
                            this._reject(this._getRangeError(0))
                        }, e.some = function (t, e) {
                            return o(t, e)
                        }, e.prototype.some = function (t) {
                            return o(this, t)
                        }, e._SomePromiseArray = i
                    }
                }, {"./errors": 12, "./util": 36}], 32: [function (t, e, n) {
                    "use strict";
                    e.exports = function (t) {
                        function e(t) {
                            void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValueField = t._isFateSealed() ? t._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0)
                        }

                        e.prototype._settledValue = function () {
                            return this._settledValueField
                        };
                        var n = e.prototype.value = function () {
                            if (!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                            return this._settledValue()
                        }, r = e.prototype.error = e.prototype.reason = function () {
                            if (!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                            return this._settledValue()
                        }, i = e.prototype.isFulfilled = function () {
                            return 0 !== (33554432 & this._bitField)
                        }, o = e.prototype.isRejected = function () {
                            return 0 !== (16777216 & this._bitField)
                        }, s = e.prototype.isPending = function () {
                            return 0 === (50397184 & this._bitField)
                        }, a = e.prototype.isResolved = function () {
                            return 0 !== (50331648 & this._bitField)
                        };
                        e.prototype.isCancelled = function () {
                            return 0 !== (8454144 & this._bitField)
                        }, t.prototype.__isCancelled = function () {
                            return 65536 === (65536 & this._bitField)
                        }, t.prototype._isCancelled = function () {
                            return this._target().__isCancelled()
                        }, t.prototype.isCancelled = function () {
                            return 0 !== (8454144 & this._target()._bitField)
                        }, t.prototype.isPending = function () {
                            return s.call(this._target())
                        }, t.prototype.isRejected = function () {
                            return o.call(this._target())
                        }, t.prototype.isFulfilled = function () {
                            return i.call(this._target())
                        }, t.prototype.isResolved = function () {
                            return a.call(this._target())
                        }, t.prototype.value = function () {
                            return n.call(this._target())
                        }, t.prototype.reason = function () {
                            var t = this._target();
                            return t._unsetRejectionIsUnhandled(), r.call(t)
                        }, t.prototype._value = function () {
                            return this._settledValue()
                        }, t.prototype._reason = function () {
                            return this._unsetRejectionIsUnhandled(), this._settledValue()
                        }, t.PromiseInspection = e
                    }
                }, {}], 33: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n) {
                        function r(t, r) {
                            if (u(t)) {
                                if (t instanceof e)return t;
                                var i = o(t);
                                if (i === l) {
                                    r && r._pushContext();
                                    var c = e.reject(i.e);
                                    return r && r._popContext(), c
                                }
                                if ("function" == typeof i) {
                                    if (s(t)) {
                                        var c = new e(n);
                                        return t._then(c._fulfill, c._reject, void 0, c, null), c
                                    }
                                    return a(t, i, r)
                                }
                            }
                            return t
                        }

                        function i(t) {
                            return t.then
                        }

                        function o(t) {
                            try {
                                return i(t)
                            } catch (e) {
                                return l.e = e, l
                            }
                        }

                        function s(t) {
                            try {
                                return f.call(t, "_promise0")
                            } catch (e) {
                                return !1
                            }
                        }

                        function a(t, r, i) {
                            function o(t) {
                                a && (a._resolveCallback(t), a = null)
                            }

                            function s(t) {
                                a && (a._rejectCallback(t, f, !0), a = null)
                            }

                            var a = new e(n), u = a;
                            i && i._pushContext(), a._captureStackTrace(), i && i._popContext();
                            var f = !0, p = c.tryCatch(r).call(t, o, s);
                            return f = !1, a && p === l && (a._rejectCallback(p.e, !0, !0), a = null), u
                        }

                        var c = t("./util"), l = c.errorObj, u = c.isObject, f = {}.hasOwnProperty;
                        return r
                    }
                }, {"./util": 36}], 34: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r) {
                        function i(t) {
                            this.handle = t
                        }

                        function o(t) {
                            return clearTimeout(this.handle), t
                        }

                        function s(t) {
                            throw clearTimeout(this.handle), t
                        }

                        var a = t("./util"), c = e.TimeoutError;
                        i.prototype._resultCancelled = function () {
                            clearTimeout(this.handle)
                        };
                        var l = function (t) {
                            return u(+this).thenReturn(t)
                        }, u = e.delay = function (t, o) {
                            var s, a;
                            return void 0 !== o ? (s = e.resolve(o)._then(l, null, null, t, void 0), r.cancellation() && o instanceof e && s._setOnCancel(o)) : (s = new e(n), a = setTimeout(function () {
                                s._fulfill()
                            }, +t), r.cancellation() && s._setOnCancel(new i(a)), s._captureStackTrace()), s._setAsyncGuaranteed(), s
                        };
                        e.prototype.delay = function (t) {
                            return u(t, this)
                        };
                        var f = function (t, e, n) {
                            var r;
                            r = "string" != typeof e ? e instanceof Error ? e : new c("operation timed out") : new c(e), a.markAsOriginatingFromRejection(r), t._attachExtraTrace(r), t._reject(r), null != n && n.cancel()
                        };
                        e.prototype.timeout = function (t, e) {
                            t = +t;
                            var n, a, c = new i(setTimeout(function () {
                                n.isPending() && f(n, e, a)
                            }, t));
                            return r.cancellation() ? (a = this.then(), n = a._then(o, s, void 0, c, void 0), n._setOnCancel(c)) : n = this._then(o, s, void 0, c, void 0), n
                        }
                    }
                }, {"./util": 36}], 35: [function (t, e, n) {
                    "use strict";
                    e.exports = function (e, n, r, i, o, s) {
                        function a(t) {
                            setTimeout(function () {
                                throw t
                            }, 0)
                        }

                        function c(t) {
                            var e = r(t);
                            return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()), e
                        }

                        function l(t, n) {
                            function i() {
                                if (s >= l)return u._fulfill();
                                var o = c(t[s++]);
                                if (o instanceof e && o._isDisposable()) {
                                    try {
                                        o = r(o._getDisposer().tryDispose(n), t.promise)
                                    } catch (f) {
                                        return a(f)
                                    }
                                    if (o instanceof e)return o._then(i, a, null, null, null)
                                }
                                i()
                            }

                            var s = 0, l = t.length, u = new e(o);
                            return i(), u
                        }

                        function u(t, e, n) {
                            this._data = t, this._promise = e, this._context = n
                        }

                        function f(t, e, n) {
                            this.constructor$(t, e, n)
                        }

                        function p(t) {
                            return u.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t
                        }

                        function h(t) {
                            this.length = t, this.promise = null, this[t - 1] = null
                        }

                        var d = t("./util"), _ = t("./errors").TypeError, v = t("./util").inherits, y = d.errorObj, m = d.tryCatch, g = {};
                        u.prototype.data = function () {
                            return this._data
                        }, u.prototype.promise = function () {
                            return this._promise
                        }, u.prototype.resource = function () {
                            return this.promise().isFulfilled() ? this.promise().value() : g
                        }, u.prototype.tryDispose = function (t) {
                            var e = this.resource(), n = this._context;
                            void 0 !== n && n._pushContext();
                            var r = e !== g ? this.doDispose(e, t) : null;
                            return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, r
                        }, u.isDisposer = function (t) {
                            return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose
                        }, v(f, u), f.prototype.doDispose = function (t, e) {
                            var n = this.data();
                            return n.call(t, t, e)
                        }, h.prototype._resultCancelled = function () {
                            for (var t = this.length, n = 0; n < t; ++n) {
                                var r = this[n];
                                r instanceof e && r.cancel()
                            }
                        }, e.using = function () {
                            var t = arguments.length;
                            if (t < 2)return n("you must pass at least 2 arguments to Promise.using");
                            var i = arguments[t - 1];
                            if ("function" != typeof i)return n("expecting a function but got " + d.classString(i));
                            var o, a = !0;
                            2 === t && Array.isArray(arguments[0]) ? (o = arguments[0], t = o.length, a = !1) : (o = arguments, t--);
                            for (var c = new h(t), f = 0; f < t; ++f) {
                                var _ = o[f];
                                if (u.isDisposer(_)) {
                                    var v = _;
                                    _ = _.promise(), _._setDisposable(v)
                                } else {
                                    var g = r(_);
                                    g instanceof e && (_ = g._then(p, null, null, {resources: c, index: f}, void 0))
                                }
                                c[f] = _
                            }
                            for (var b = new Array(c.length), f = 0; f < b.length; ++f)b[f] = e.resolve(c[f]).reflect();
                            var w = e.all(b).then(function (t) {
                                for (var e = 0; e < t.length; ++e) {
                                    var n = t[e];
                                    if (n.isRejected())return y.e = n.error(), y;
                                    if (!n.isFulfilled())return void w.cancel();
                                    t[e] = n.value()
                                }
                                C._pushContext(), i = m(i);
                                var r = a ? i.apply(void 0, t) : i(t), o = C._popContext();
                                return s.checkForgottenReturns(r, o, "Promise.using", C), r
                            }), C = w.lastly(function () {
                                var t = new e.PromiseInspection(w);
                                return l(c, t)
                            });
                            return c.promise = C, C._setOnCancel(c), C
                        }, e.prototype._setDisposable = function (t) {
                            this._bitField = 131072 | this._bitField, this._disposer = t
                        }, e.prototype._isDisposable = function () {
                            return (131072 & this._bitField) > 0
                        }, e.prototype._getDisposer = function () {
                            return this._disposer
                        }, e.prototype._unsetDisposable = function () {
                            this._bitField = this._bitField & -131073, this._disposer = void 0
                        }, e.prototype.disposer = function (t) {
                            if ("function" == typeof t)return new f(t, this, i());
                            throw new _
                        }
                    }
                }, {"./errors": 12, "./util": 36}], 36: [function (t, r, i) {
                    "use strict";
                    function o() {
                        try {
                            var t = R;
                            return R = null, t.apply(this, arguments)
                        } catch (e) {
                            return O.e = e, O
                        }
                    }

                    function s(t) {
                        return R = t, o
                    }

                    function a(t) {
                        return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t
                    }

                    function c(t) {
                        return "function" == typeof t || "object" == typeof t && null !== t
                    }

                    function l(t) {
                        return a(t) ? new Error(m(t)) : t
                    }

                    function u(t, e) {
                        var n, r = t.length, i = new Array(r + 1);
                        for (n = 0; n < r; ++n)i[n] = t[n];
                        return i[n] = e, i
                    }

                    function f(t, e, n) {
                        if (!T.isES5)return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
                        var r = Object.getOwnPropertyDescriptor(t, e);
                        return null != r ? null == r.get && null == r.set ? r.value : n : void 0
                    }

                    function p(t, e, n) {
                        if (a(t))return t;
                        var r = {value: n, configurable: !0, enumerable: !1, writable: !0};
                        return T.defineProperty(t, e, r), t
                    }

                    function h(t) {
                        throw t
                    }

                    function d(t) {
                        try {
                            if ("function" == typeof t) {
                                var e = T.names(t.prototype), n = T.isES5 && e.length > 1, r = e.length > 0 && !(1 === e.length && "constructor" === e[0]), i = D.test(t + "") && T.names(t).length > 0;
                                if (n || r || i)return !0
                            }
                            return !1
                        } catch (o) {
                            return !1
                        }
                    }

                    function _(t) {
                        function e() {
                        }

                        e.prototype = t;
                        for (var n = 8; n--;)new e;
                        return t
                    }

                    function v(t) {
                        return N.test(t)
                    }

                    function y(t, e, n) {
                        for (var r = new Array(t), i = 0; i < t; ++i)r[i] = e + i + n;
                        return r
                    }

                    function m(t) {
                        try {
                            return t + ""
                        } catch (e) {
                            return "[no string representation]"
                        }
                    }

                    function g(t) {
                        return null !== t && "object" == typeof t && "string" == typeof t.message && "string" == typeof t.name
                    }

                    function b(t) {
                        try {
                            p(t, "isOperational", !0)
                        } catch (e) {
                        }
                    }

                    function w(t) {
                        return null != t && (t instanceof Error.__BluebirdErrorTypes__.OperationalError || t.isOperational === !0)
                    }

                    function C(t) {
                        return g(t) && T.propertyIsWritable(t, "stack")
                    }

                    function k(t) {
                        return {}.toString.call(t)
                    }

                    function j(t, e, n) {
                        for (var r = T.names(t), i = 0; i < r.length; ++i) {
                            var o = r[i];
                            if (n(o))try {
                                T.defineProperty(e, o, T.getDescriptor(t, o))
                            } catch (s) {
                            }
                        }
                    }

                    function E(t, n) {
                        return V ? e.env[t] : n
                    }

                    function x() {
                        if ("function" == typeof Promise)try {
                            var t = new Promise(function () {
                            });
                            if ("[object Promise]" === {}.toString.call(t))return Promise
                        } catch (e) {
                        }
                    }

                    function F(t, e) {
                        return t.bind(e)
                    }

                    var T = t("./es5"), S = "undefined" == typeof navigator, O = {e: {}}, R, P = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof n ? n : void 0 !== this ? this : null, A = function (t, e) {
                        function n() {
                            this.constructor = t, this.constructor$ = e;
                            for (var n in e.prototype)r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n])
                        }

                        var r = {}.hasOwnProperty;
                        return n.prototype = e.prototype, t.prototype = new n, t.prototype
                    }, L = function () {
                        var t = [Array.prototype, Object.prototype, Function.prototype], e = function (e) {
                            for (var n = 0; n < t.length; ++n)if (t[n] === e)return !0;
                            return !1
                        };
                        if (T.isES5) {
                            var n = Object.getOwnPropertyNames;
                            return function (t) {
                                for (var r = [], i = Object.create(null); null != t && !e(t);) {
                                    var o;
                                    try {
                                        o = n(t)
                                    } catch (s) {
                                        return r
                                    }
                                    for (var a = 0; a < o.length; ++a) {
                                        var c = o[a];
                                        if (!i[c]) {
                                            i[c] = !0;
                                            var l = Object.getOwnPropertyDescriptor(t, c);
                                            null != l && null == l.get && null == l.set && r.push(c)
                                        }
                                    }
                                    t = T.getPrototypeOf(t)
                                }
                                return r
                            }
                        }
                        var r = {}.hasOwnProperty;
                        return function (n) {
                            if (e(n))return [];
                            var i = [];
                            t:for (var o in n)if (r.call(n, o))i.push(o); else {
                                for (var s = 0; s < t.length; ++s)if (r.call(t[s], o))continue t;
                                i.push(o)
                            }
                            return i
                        }
                    }(), D = /this\s*\.\s*\S+\s*=/, N = /^[a-z$_][a-z$_0-9]*$/i, I = function () {
                        return "stack" in new Error ? function (t) {
                            return C(t) ? t : new Error(m(t))
                        } : function (t) {
                            if (C(t))return t;
                            try {
                                throw new Error(m(t))
                            } catch (e) {
                                return e
                            }
                        }
                    }(), U = function (t) {
                        return T.isArray(t) ? t : null
                    };
                    if ("undefined" != typeof Symbol && Symbol.iterator) {
                        var H = "function" == typeof Array.from ? function (t) {
                            return Array.from(t)
                        } : function (t) {
                            for (var e, n = [], r = t[Symbol.iterator](); !(e = r.next()).done;)n.push(e.value);
                            return n
                        };
                        U = function (t) {
                            return T.isArray(t) ? t : null != t && "function" == typeof t[Symbol.iterator] ? H(t) : null
                        }
                    }
                    var V = "undefined" != typeof e && "[object process]" === k(e).toLowerCase(), B = {
                        isClass: d,
                        isIdentifier: v,
                        inheritedDataKeys: L,
                        getDataPropertyOrDefault: f,
                        thrower: h,
                        isArray: T.isArray,
                        asArray: U,
                        notEnumerableProp: p,
                        isPrimitive: a,
                        isObject: c,
                        isError: g,
                        canEvaluate: S,
                        errorObj: O,
                        tryCatch: s,
                        inherits: A,
                        withAppended: u,
                        maybeWrapAsError: l,
                        toFastProperties: _,
                        filledRange: y,
                        toString: m,
                        canAttachTrace: C,
                        ensureErrorObject: I,
                        originatesFromRejection: w,
                        markAsOriginatingFromRejection: b,
                        classString: k,
                        copyDescriptors: j,
                        hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
                        isNode: V,
                        env: E,
                        global: P,
                        getNativePromise: x,
                        domainBind: F
                    };
                    B.isRecentNode = B.isNode && function () {
                            var t = e.versions.node.split(".").map(Number);
                            return 0 === t[0] && t[1] > 10 || t[0] > 0
                        }(), B.isNode && B.toFastProperties(e);
                    try {
                        throw new Error
                    } catch (M) {
                        B.lastLineError = M
                    }
                    r.exports = B
                }, {"./es5": 13}]
            }, {}, [4])(4)
        }), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise)
    }).call(e, n(8), function () {
        return this
    }(), n(9).setImmediate)
}, function (t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (u === setTimeout)return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout)return u = setTimeout, setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (f === clearTimeout)return clearTimeout(t);
        if ((f === r || !f) && clearTimeout)return f = clearTimeout, clearTimeout(t);
        try {
            return f(t)
        } catch (e) {
            try {
                return f.call(null, t)
            } catch (e) {
                return f.call(this, t)
            }
        }
    }

    function s() {
        _ && h && (_ = !1, h.length ? d = h.concat(d) : v = -1, d.length && a())
    }

    function a() {
        if (!_) {
            var t = i(s);
            _ = !0;
            for (var e = d.length; e;) {
                for (h = d, d = []; ++v < e;)h && h[v].run();
                v = -1, e = d.length
            }
            h = null, _ = !1, o(t)
        }
    }

    function c(t, e) {
        this.fun = t, this.array = e
    }

    function l() {
    }

    var u, f, p = t.exports = {};
    !function () {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            u = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            f = r
        }
    }();
    var h, d = [], _ = !1, v = -1;
    p.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
        d.push(new c(t, e)), 1 !== d.length || _ || i(a)
    }, c.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function () {
        return "/"
    }, p.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function () {
        return 0
    }
}, function (t, e, n) {
    (function (t, r) {
        function i(t, e) {
            this._id = t, this._clearFn = e
        }

        var o = n(8).nextTick, s = Function.prototype.apply, a = Array.prototype.slice, c = {}, l = 0;
        e.setTimeout = function () {
            return new i(s.call(setTimeout, window, arguments), clearTimeout)
        }, e.setInterval = function () {
            return new i(s.call(setInterval, window, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function (t) {
            t.close()
        }, i.prototype.unref = i.prototype.ref = function () {
        }, i.prototype.close = function () {
            this._clearFn.call(window, this._id)
        }, e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout()
            }, e))
        }, e.setImmediate = "function" == typeof t ? t : function (t) {
            var n = l++, r = !(arguments.length < 2) && a.call(arguments, 1);
            return c[n] = !0, o(function () {
                c[n] && (r ? t.apply(null, r) : t.call(null), e.clearImmediate(n))
            }), n
        }, e.clearImmediate = "function" == typeof r ? r : function (t) {
            delete c[t]
        }
    }).call(e, n(9).setImmediate, n(9).clearImmediate)
}, function (t, e, n) {
    var r, i;
    !function (o, s) {
        "use strict";
        r = s, i = "function" == typeof r ? r.call(e, n, e, t) : r, !(void 0 !== i && (t.exports = i))
    }(this, function () {
        "use strict";
        function t(t) {
            var r = ["get", "post", "put", "delete"];
            return t = t || {}, t.baseUrl = t.baseUrl || "", t.method && t.url ? n(t.method, t.baseUrl + t.url, e(t.data), t) : r.reduce(function (r, i) {
                return r[i] = function (r, o) {
                    return n(i, t.baseUrl + r, e(o), t)
                }, r
            }, {})
        }

        function e(t) {
            return t || null
        }

        function n(t, e, n, i) {
            var s = ["then", "catch", "always"], c = s.reduce(function (t, e) {
                return t[e] = function (n) {
                    return t[e] = n, t
                }, t
            }, {}), l = new XMLHttpRequest;
            return l.open(t, e, !0), r(l, i.headers), l.addEventListener("readystatechange", o(c, l), !1), l.send(a(n)), c.abort = function () {
                return l.abort()
            }, c
        }

        function r(t, e) {
            e = e || {}, i(e) || (e["Content-Type"] = "application/x-www-form-urlencoded"), Object.keys(e).forEach(function (n) {
                e[n] && t.setRequestHeader(n, e[n])
            })
        }

        function i(t) {
            return Object.keys(t).some(function (t) {
                return "content-type" === t.toLowerCase()
            })
        }

        function o(t, e) {
            return function n() {
                e.readyState === e.DONE && (e.removeEventListener("readystatechange", n, !1), t.always.apply(t, s(e)), e.status >= 200 && e.status < 300 ? t.then.apply(t, s(e)) : t["catch"].apply(t, s(e)))
            }
        }

        function s(t) {
            var e;
            try {
                e = JSON.parse(t.responseText)
            } catch (n) {
                e = t.responseText
            }
            return [e, t]
        }

        function a(t) {
            return c(t) ? l(t) : t
        }

        function c(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        }

        function l(t) {
            return Object.keys(t).reduce(function (e, n) {
                var r = e ? e + "&" : "";
                return r + u(n) + "=" + u(t[n])
            }, "")
        }

        function u(t) {
            return encodeURIComponent(t)
        }

        return t
    })
}, function (t, e) {
    "use strict";
    function n(t) {
        if (null === t || void 0 === t)throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }

    function r() {
        try {
            if (!Object.assign)return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0])return !1;
            for (var e = {}, n = 0; n < 10; n++)e["_" + String.fromCharCode(n)] = n;
            var r = Object.getOwnPropertyNames(e).map(function (t) {
                return e[t]
            });
            if ("0123456789" !== r.join(""))return !1;
            var i = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                i[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
        } catch (o) {
            return !1
        }
    }

    var i = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
    t.exports = r() ? Object.assign : function (t, e) {
        for (var r, s, a = n(t), c = 1; c < arguments.length; c++) {
            r = Object(arguments[c]);
            for (var l in r)i.call(r, l) && (a[l] = r[l]);
            if (Object.getOwnPropertySymbols) {
                s = Object.getOwnPropertySymbols(r);
                for (var u = 0; u < s.length; u++)o.call(r, s[u]) && (a[s[u]] = r[s[u]])
            }
        }
        return a
    }
}]);
//# sourceMappingURL=Users/didi/work/Projects/WebstormProjects/debuggerjs/test.map
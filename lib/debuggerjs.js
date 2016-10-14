'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by didi on 16/9/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _ajax = require('@fdaciuk/ajax');

var _ajax2 = _interopRequireDefault(_ajax);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DebuggerInstance = function () {
    function DebuggerInstance(error) {
        _classCallCheck(this, DebuggerInstance);

        this.instance = null;
        this.errLocation = {};
        this.create(error);
        this.sendErrorData(error);
    }

    _createClass(DebuggerInstance, [{
        key: 'create',
        value: function create(error) {
            if (error.needShowv === false) return;

            this.createWraper();
            this.createContent(error);
        }
    }, {
        key: 'createWraper',
        value: function createWraper() {
            var me = this;

            if (!Debugger.wraper) {
                var style = me.parseCSS();
                var timeStamp = +new Date();
                var alertBox = document.createElement('div');
                alertBox.id = 'debugger-' + timeStamp;
                alertBox.style.cssText = style.wrapCss;
                alertBox.addEventListener('click', function () {
                    Debugger.showWraper ? me.hideWraper() : me.showWraper();
                });
                alertBox.addEventListener('touchmove', function (e) {
                    e.stopPropagation();
                });
                Debugger.wraper = alertBox;

                document.body.appendChild(alertBox);
            }
        }
    }, {
        key: 'createContent',
        value: function createContent(error) {
            var me = this;
            var style = me.parseCSS();
            var count = Debugger.errorCount;

            var content = document.createElement('div');
            content.style.cssText = style.contentCss;
            content.innerHTML = '\n            <p><span style="' + style.errNoCss + '"> err' + count + ': </span> ' + error.message + '</p>\n            <div style="' + style.hrCss + '"/></div>\n            <p><span style="' + style.locationCss + '"> location: </span> ' + error.location.replace(/(<anonymous>)|(<\/anonymous>)/ig, '') + '</p>\n            ';

            me.instance = content;

            Debugger.wraper.appendChild(content);

            Debugger.errorCount++;

            setTimeout(function () {
                // me.destroy();
            }, 10000);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            var me = this;
            me.blur().then(function () {
                var instance = me.instance;
                instance && instance.parentNode && instance.parentNode.removeChild(instance);
            });
        }
    }, {
        key: 'blur',
        value: function blur() {
            var me = this,
                instance = this.instance,
                timer = null;

            return new _bluebird2.default(function (res, rej) {
                timer = setInterval(function () {
                    var opacity = me.getCssValue(instance, 'opacity');
                    if (opacity < 0.1) {
                        clearTimeout(timer);
                        res();
                    } else {
                        instance.style.opacity = opacity - 0.1;
                    }
                }, 50);
            });
        }
    }, {
        key: 'showWraper',
        value: function showWraper() {
            if (!Debugger.wraper) return;
            Debugger.wraper.style.transform = 'translateY(0px)';
            Debugger.wraper.style.webkitTransform = 'translateY(0px)';
            Debugger.showWraper = true;
        }
    }, {
        key: 'hideWraper',
        value: function hideWraper() {
            if (!Debugger.wraper) return;
            var me = this;
            var wrapHeight = me.getCssValue(Debugger.wraper, 'height');
            Debugger.wraper.style.transform = 'translateY(' + (parseFloat(wrapHeight) - 20) + 'px)';
            Debugger.wraper.style.webkitTransform = 'translateY(' + (parseFloat(wrapHeight) - 20) + 'px)';
            Debugger.showWraper = false;
        }
    }, {
        key: 'sendErrorData',
        value: function sendErrorData(error) {
            if (!error.needReport) return;

            var url = error.url;
            var method = error.method;

            var errorObj = {
                url: location.href,
                ua: navigator.userAgent,
                filename: error.filename || this.getFileName(error.location),
                lineno: error.lineno || this.getLineNo(error.location),
                colno: error.colno || this.getColNo(error.location),
                message: error.message || '',
                location: this.getLocation(error.location) || ''
            };
            (0, _ajax2.default)({
                url: url,
                method: method,
                data: errorObj
            });
        }
    }, {
        key: 'parseCSS',
        value: function parseCSS() {
            var wrapCss = void 0,
                contentCss = void 0,
                errNoCss = void 0,
                locationCss = void 0,
                hrCss = void 0;
            wrapCss = "position: fixed; bottom:0; max-height:100%; overflow:scroll; box-sizing:border-box; opacity: 1; word-wrap: break-word;word-break: break-all; transform: translateY(0px);-webkit-transform: translateY(0px);transition: transform 0.3s ease;-webkit-transition: -webkit-transform 0.3s ease;";
            contentCss = "background: rgba(0, 0, 0, 0.6);color: #fff;line-height: 1.2;padding: 0.5rem;box-sizing:border-box; border-bottom: 1px solid #f0f0f0;";
            errNoCss = "background: #bd362f; border-radius:4px; color:#fff; padding-left:0.2rem; margin-right:0.2rem";
            locationCss = "background: #0074cc; border-radius:4px; color:#fff; padding-left:0.2rem; margin-right:0.2rem";
            hrCss = 'margin:0.2rem 0; border-bottom: 1px dashed #999;';
            return { wrapCss: wrapCss, contentCss: contentCss, errNoCss: errNoCss, locationCss: locationCss, hrCss: hrCss };
        }
    }, {
        key: 'getCssValue',
        value: function getCssValue(target, attr) {
            return window.getComputedStyle(target)[attr];
        }
    }, {
        key: 'getFileName',
        value: function getFileName(location) {
            return this.errLocation.filename ? this.errLocation.filename : this.splitLocation(location).filename;
        }
    }, {
        key: 'getLineNo',
        value: function getLineNo(location) {
            return this.errLocation.lineno ? this.errLocation.lineno : this.splitLocation(location).lineno;
        }
    }, {
        key: 'getColNo',
        value: function getColNo(location) {
            return this.errLocation.colno ? this.errLocation.colno : this.splitLocation(location).colno;
        }
    }, {
        key: 'getLocation',
        value: function getLocation(location) {
            return location.replace(/\s*(\(.*\))\s*/, '');
        }
    }, {
        key: 'splitLocation',
        value: function splitLocation(location) {
            var rs = /^.*\((.*\.js):(\d*):(\d*)\)/.exec(location);
            var RE = RegExp;
            var filename = RE.$1;
            var lineno = RE.$2;
            var colno = RE.$3;

            this.locationObj = { filename: filename, lineno: lineno, colno: colno }; // for cache
            return this.locationObj;
        }
    }]);

    return DebuggerInstance;
}();

var Debugger = {

    wraper: null,

    showWraper: true,

    errorCount: 1,

    confData: {
        needShow: true,
        needReport: false,
        method: 'post',
        url: ''
    },

    init: function init(options) {
        var me = this;

        if (options) {
            me.confData = (0, _objectAssign2.default)(me.confData, options);
        }
        window.addEventListener('load', function () {
            me.listenScriptError();
        });
    },
    listenScriptError: function listenScriptError() {
        var me = this;
        window.addEventListener('error', function () {
            me.log(arguments[0]);
        });
    },
    log: function log(error) {

        var me = this;

        error = (0, _objectAssign2.default)(error, me.confData);

        if (me.isError(error)) {

            error.message = me.getStackMessage(error.stack);
            error.location = me.getStackLocation(error.stack);
            new DebuggerInstance(error);
        } else if (me.isEvent(error)) {
            me.throwError().then(function (e) {
                var target = error.target;
                error.message = "Resource Error: can't get " + (target.src || target.href) + ".";
                error.location = me.getStackLocation(e.stack);
                new DebuggerInstance(error);
            });
        } else if (me.isErrorEvent(error)) {

            error.location = me.getStackLocation(error.error.stack);
            new DebuggerInstance(error);
        } else if (me.isXHR(error)) {

            me.throwError().then(function (e) {
                error.message = "AJAX Error: XMLHttpRequest failed. Did you use $.ajax? the Debugger can't get more detail from error callback. Please check your $.ajax settings.";
                error.location = me.getStackLocation(e.stack);
                new DebuggerInstance(error);
            });
        } else if (me.isString(error)) {
            me.throwError().then(function (e) {
                new DebuggerInstance({
                    message: error,
                    location: me.getStackLocation(e.stack)
                });
            });
        } else if (me.isUndefined(error)) {
            me.throwError().then(function (e) {
                error.message = "Params Error: Debugger.log(...) must have 1 param in it, but found none";
                error.location = me.getStackLocation(e.stack);
                new DebuggerInstance(error);
            });
        } else {
            me.throwError().then(function (e) {
                error.message = "Unknown Error.";
                error.location = me.getStackLocation(e.stack);
                new DebuggerInstance(error);
            });
        }
    },
    throwError: function throwError() {
        return new _bluebird2.default(function (res, rej) {
            try {
                throw new Error();
            } catch (e) {
                res(e);
            }
        });
    },
    getStackMessage: function getStackMessage(stack) {
        var stackArr = stack.split(/\n+/);
        return stackArr[0].replace(/(^\s+|\s+$)/, "");
    },
    getStackLocation: function getStackLocation(stack) {
        var stackArr = stack.split(/\n+/);
        return stackArr[stackArr.length - 1].replace(/(^\s+|\s+$)/, "");
    },
    isError: function isError(error) {
        return error instanceof Error;
    },
    isEvent: function isEvent(error) {
        return error.constructor === Event;
    },
    isErrorEvent: function isErrorEvent(error) {
        return error.constructor === ErrorEvent;
    },
    isProgressEvent: function isProgressEvent(error) {
        return error.constructor === ProgressEvent;
    },
    isXHR: function isXHR(error) {
        return error.constructor === XMLHttpRequest;
    },
    isString: function isString(error) {
        return Object.prototype.toString.call(error) === "[object String]";
    },
    isUndefined: function isUndefined(error) {
        return Object.prototype.toString.call(error) === "[object Undefined]";
    }
};
exports.default = Debugger;
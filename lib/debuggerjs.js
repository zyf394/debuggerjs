'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Debugger = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by didi on 16/9/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _debuggerjs = require('./debuggerjs.less');

var _debuggerjs2 = _interopRequireDefault(_debuggerjs);

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

        this.sendErrorData(error);
        this.create(error);
    }

    _createClass(DebuggerInstance, [{
        key: 'getDefaultData',
        value: function getDefaultData() {}
    }, {
        key: 'create',
        value: function create(error) {
            var me = this;
            if (!error.needShow) return;

            var count = Debugger.errorCount;
            var timeStamp = +new Date();
            var content = '\n            <div >err' + count + ': ' + error.message + '<br/>location: ' + error.location + '</div>\n            ';
            var alertBox = document.createElement('div');
            alertBox.id = 'debugger-' + timeStamp;
            alertBox.className = _debuggerjs2.default.debugger;
            alertBox.innerHTML = content;

            me.instance = alertBox;

            document.body.appendChild(alertBox);

            Debugger.errorCount++;

            setTimeout(function () {
                me.destroy();
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

            return new Promise(function (res, rej) {
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
    }, {
        key: 'compileToCss',
        value: function compileToCss(obj) {
            var cssText = '';
            for (var key in obj) {
                var cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
                var cssVal = obj[key];
                cssText += cssKey + ':' + cssVal + ';';
            }

            return cssText;
        }
    }]);

    return DebuggerInstance;
}();

var Debugger = exports.Debugger = {

    errorCount: 1,

    confData: {
        needShow: true,
        needReport: false,
        method: 'post',
        url: ''
    },

    init: function init(options) {
        if (options) {
            this.confData = (0, _objectAssign2.default)(this.confData, options);
        }
        this.listenScriptError();
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
        return new Promise(function (res, rej) {
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
//# sourceMappingURL=debuggerjs.js.map
/**
 * Created by didi on 16/9/21.
 */
import ajax from '@fdaciuk/ajax';
import objectAssign from 'object-assign';

class DebuggerInstance {
    constructor(error) {
        this.instance = null;
        this.errLocation = {};
        this.create(error);
        this.sendErrorData(error);

    }

    create(error) {
        let me = this;
        if (!error.needShow) return;

        let style = me.parseCSS();
        let count = Debugger.errorCount;
        let timeStamp = +new Date();
        let content = `
            <div style="${style.contentCss}">err${count}: ${error.message}<br/>location: ${error.location}</div>
            `;
        let alertBox = document.createElement('div');
        alertBox.id = 'debugger-' + timeStamp;
        alertBox.style = style.wrapCss;
        alertBox.innerHTML = content;

        me.instance = alertBox;

        document.body.appendChild(alertBox);

        Debugger.errorCount++;

        setTimeout(function () {
            me.destroy();
        }, 10000)
    }

    destroy() {
        let me = this;
        me.blur()
            .then(function () {
                let instance = me.instance;
                instance && instance.parentNode && instance.parentNode.removeChild(instance);
            })
    }

    blur() {
        let me = this,
            instance = this.instance,
            timer = null;

        return new Promise(function (res, rej) {
            timer = setInterval(function () {
                let opacity = me.getCssValue(instance, 'opacity');
                if (opacity < 0.1) {
                    clearTimeout(timer);
                    res()
                } else {
                    instance.style.opacity = opacity - 0.1
                }
            }, 50)
        });

    }

    sendErrorData(error) {
        if (!error.needReport) return;

        const url = error.url;
        const method = error.method;

        let errorObj = {
            url: location.href,
            ua: navigator.userAgent,
            filename: error.filename || this.getFileName(error.location),
            lineno: error.lineno || this.getLineNo(error.location),
            colno: error.colno || this.getColNo(error.location),
            message: error.message || '',
            location: this.getLocation(error.location) || ''
        };
        ajax({
            url: url,
            method: method,
            data: errorObj
        })
    }

    parseCSS(){
        let wrapCss, contentCss;
        wrapCss = "position: relative; opacity: 1; word-wrap: break-word;";
        contentCss = "background: rgba(0, 0, 0, 0.6);font-size: 1rem;color: #fff;line-height: 1.2;padding: 0.5rem 10% 0.5rem 0.5rem;border-bottom: 1px solid #f0f0f0;";
        return {wrapCss, contentCss}
    }
    getCssValue(target, attr) {
        return window.getComputedStyle(target)[attr]
    }

    getFileName(location) {
        return this.errLocation.filename ? this.errLocation.filename : this.splitLocation(location).filename
    }

    getLineNo(location) {
        return this.errLocation.lineno ? this.errLocation.lineno : this.splitLocation(location).lineno
    }

    getColNo(location) {
        return this.errLocation.colno ? this.errLocation.colno : this.splitLocation(location).colno
    }

    getLocation(location) {
        return location.replace(/\s*(\(.*\))\s*/, '')
    }

    splitLocation(location) {
        const rs = /^.*\((.*\.js):(\d*):(\d*)\)/.exec(location);
        const RE = RegExp;
        let [filename,lineno,colno] = [RE.$1, RE.$2, RE.$3];
        this.locationObj = {filename, lineno, colno} // for cache
        return this.locationObj
    }

    compileToCss(obj) {
        let cssText = '';
        for (let key in obj) {
            let cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
            let cssVal = obj[key];
            cssText += (cssKey + ':' + cssVal + ';')
        }

        return cssText;
    }
}
const Debugger = {

    errorCount: 1,

    confData: {
        needShow: true,
        needReport: false,
        method: 'post',
        url: ''
    },

    init(options) {
        let me = this;

        if (options) {
            me.confData = objectAssign(me.confData, options)
        }
        window.addEventListener('load',function () {
            me.listenScriptError();
        })
    },

    listenScriptError(){
        let me = this;
        window.addEventListener('error', function () {
            me.log(arguments[0])
        });
    },
    log(error){

        let me = this;

        error = objectAssign(error, me.confData);

        if (me.isError(error)) {

            error.message = me.getStackMessage(error.stack);
            error.location = me.getStackLocation(error.stack);
            new DebuggerInstance(error);

        } else if (me.isEvent(error)) {
            me.throwError()
                .then(e => {
                    var target = error.target;
                    error.message = "Resource Error: can't get " + (target.src || target.href) + ".";
                    error.location = me.getStackLocation(e.stack);
                    new DebuggerInstance(error);
                });


        } else if (me.isErrorEvent(error)) {

            error.location = me.getStackLocation(error.error.stack);
            new DebuggerInstance(error);

        } else if (me.isXHR(error)) {

            me.throwError()
                .then(e => {
                    error.message = "AJAX Error: XMLHttpRequest failed. Did you use $.ajax? the Debugger can't get more detail from error callback. Please check your $.ajax settings."
                    error.location = me.getStackLocation(e.stack);
                    new DebuggerInstance(error);

                })

        } else if (me.isString(error)) {
            me.throwError()
                .then(e => {
                    new DebuggerInstance({
                        message: error,
                        location: me.getStackLocation(e.stack)
                    });
                })

        } else if (me.isUndefined(error)) {
            me.throwError()
                .then(e => {
                    error.message = "Params Error: Debugger.log(...) must have 1 param in it, but found none";
                    error.location = me.getStackLocation(e.stack);
                    new DebuggerInstance(error);

                });
        } else {
            me.throwError()
                .then(e => {
                    error.message = "Unknown Error.";
                    error.location = me.getStackLocation(e.stack);
                    new DebuggerInstance(error);
                });
        }
    },
    throwError(){
        return new Promise(function (res, rej) {
            try {
                throw new Error();
            } catch (e) {
                res(e)
            }
        })

    },
    getStackMessage(stack){
        let stackArr = stack.split(/\n+/);
        return stackArr[0].replace(/(^\s+|\s+$)/, "");
    },
    getStackLocation(stack){
        let stackArr = stack.split(/\n+/);
        return stackArr[stackArr.length - 1].replace(/(^\s+|\s+$)/, "");
    },
    isError(error){
        return error instanceof Error;
    },
    isEvent(error){
        return error.constructor === Event;
    },
    isErrorEvent(error){
        return error.constructor === ErrorEvent;
    },
    isProgressEvent(error){
        return error.constructor === ProgressEvent;
    },
    isXHR(error){
        return error.constructor === XMLHttpRequest;
    },
    isString(error){
        return Object.prototype.toString.call(error) === "[object String]"
    },
    isUndefined(error){
        return Object.prototype.toString.call(error) === "[object Undefined]"
    }

};
export default Debugger;
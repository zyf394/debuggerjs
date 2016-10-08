/**
 * Created by didi on 16/9/21.
 */

import styles from './debuggerjs.less';
import 'whatwg-fetch';

class DebuggerInstance {
    constructor(error) {
        this.error = {};
        this.style = {};
        this.instance = null;

        this.getErrorObj(error);
        this.sendErrorData(error);
        this.create();
    }

    create() {
        let me = this;
        let error = me.error;
        let count = Debugger.errorCount;
        let timeStamp = +new Date();

        let content = `
            <div >err${count}: ${error.message}<br/>location: ${error.location}</div>
            `;
        let alertBox = document.createElement('div');
        alertBox.id = 'debugger-' + timeStamp;
        alertBox.className = styles.debugger;
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

    getErrorObj(arg) {
        this.error = arg;
    }
    sendErrorData(error){
        if(!error.needReport) return;

        const url = error.url;
        const type = error.type;
        fetch(url, {
            method: type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(error)
        })
    }
    getCssValue(target, attr) {
        return window.getComputedStyle(target)[attr]
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

export const Debugger = {

    errorCount: 1,

    confData:{},
    
    init(options) {
        if(options){
            this.confData = options
        }
        this.listenScriptError();
    },

    listenScriptError(){
        let me = this;
        window.addEventListener('error', function () {
            me.log(arguments[0])
        });
    },
    log(error){

        let me = this;

        error = Object.assign(error, me.confData);

        if (me.isError(error)) {

            error.message = me.getStackMessage(error.stack);
            error.location = me.getStackLocation(error.stack);
            new DebuggerInstance(error);

        }else if (me.isEvent(error)) {
            me.throwError()
                .then(e =>{
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
                .then(e =>{
                    error.message = "AJAX Error: XMLHttpRequest failed. Did you use $.ajax? the Debugger can't get more detail from error callback. Please check your $.ajax settings."
                    error.location = me.getStackLocation(e.stack);
                    new DebuggerInstance(error);

                })

        } else if (me.isString(error)) {
            me.throwError()
                .then(e => {
                    new DebuggerInstance({
                        message: error,
                        location:me.getStackLocation(e.stack)});
                })

        } else if (me.isUndefined(error)) {
            me.throwError()
                .then(e =>{
                    error.message = "Params Error: Debugger.log(...) must have 1 param in it, but found none";
                    error.location = me.getStackLocation(e.stack);
                    new DebuggerInstance(error);

                });
        } else {
            me.throwError()
                .then(e =>{
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
            }catch (e) {
                res(e)
            }
        })

    },
    getStackMessage(stack){
        let stackArr = stack.split(/\n+/);
        return stackArr[0].replace(/(^\s+|\s+$)/,"");
    },
    getStackLocation(stack){
        console.log(stack);
        let stackArr = stack.split(/\n+/);
        return stackArr[stackArr.length - 1].replace(/(^\s+|\s+$)/,"");
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
/**
 * Created by didi on 16/9/21.
 */

import styles from './debugger.less';

class DebuggerInstance {
    constructor(error) {
        this.error = {};
        this.style = {};
        this.instance = null;

        this.getErrorObj(error);
        this.create();
    }

    create() {
        let me = this;
        let error = me.error;
        let timeStamp = +new Date();

        let content = `
            <div >${error.message}
                <span debugger-event="destroy"></span>
            </div>
            `;
        let alertBox = document.createElement('div');
        alertBox.id = 'debugger-' + timeStamp;
        alertBox.className = styles.debugger;
        alertBox.innerHTML = content;
        alertBox.onclick = function (event) {
            let target = event.target;
            if (target.getAttribute('debugger-event') === 'destroy') {
                me.destroy();
            }
            event.stopPropagation(); // prevent click events trigger on other elements again
        };

        me.instance = alertBox;

        document.body.appendChild(alertBox);
    }

    destroy() {
        let me = this;
        let instance = me.instance;
        instance && instance.parentNode && instance.parentNode.removeChild(instance);

        /*me.blur()
            .then(function () {
                let instance = me.instance;
                instance && instance.parentNode && instance.parentNode.removeChild(instance);
            })*/
    }

    blur() {
        let instance = this.instance,
            timer = null;

        return new Promise(function (res, rej) {
            timer = setInterval(function () {
                let opacity = instance.style.opacity;
                if (opacity == 0) {
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
    init() {
        this.listenScriptError();
    },

    listenScriptError(){
        window.addEventListener('error', function () {
            new DebuggerInstance(arguments[0]);
        });
    },
    log(error){
        if(this.isEvent(error)){
            var target = error.target;
            error.message = "Resource Error: can't get " + (target.src || target.href) + ".";
            new DebuggerInstance(error);
        }else if(this.isErrorEvent(error)){
            new DebuggerInstance(error[0]);
        }else if(this.isProgressEvent(error)){
            new DebuggerInstance(error[0]);
        }else if(this.isXHR(error)){
            error.message = "AJAX Error: XMLHttpRequest failed. Did you use $.ajax? the Debugger can't get more detail from error callback. Please check your $.ajax settings."
            new DebuggerInstance(error);
        }else if(this.isString(error)){
            new DebuggerInstance({message: error});
        }else if(this.isUndefined(error)){
            error.message = "Params Error: Debugger.log(...) must have 1 param in it, but found none";
            new DebuggerInstance(error);
        }else{
            error.message = "Unknown Error.";
            new DebuggerInstance(error);        }
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
    isUndefined(){
        return Object.prototype.toString.call(error) === "[object Undefined]"
    }

};
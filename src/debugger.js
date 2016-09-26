/**
 * Created by didi on 16/9/21.
 */


class DebuggerInstance {
    constructor(error) {
        debugger;
        this.error = {};
        this.style = {};
        this.instance = null;

        this.getErrorObj(error);
        this.getCssStyle();
        this.create();
    }

    create() {
        let me = this;
        let error = me.error;
        let style = me.style;
        let timeStamp = +new Date();

        let content = `
            <div style="${style.content}">${error.message}
                <span style="${style.closeBtn}" debugger-event="destroy">X</span>
            </div>
            `;
        let alertBox = document.createElement('div');
        alertBox.id = 'debugger-' + timeStamp;
        alertBox.style = style.wrap;
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

        setTimeout(me.destroy.bind(me), 5000);
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
        let {message, filename, lineno, colno, error} = arg;
        this.error = {message, filename, lineno, colno, error};
    }

    getCssStyle() {
        let style = {
            wrap: {
                position: 'relative',
                opacity: 1
            },
            content: {
                background: 'rgba(0,0,0,0.6)',
                fontSize: '20px',
                color: '#fff',
                lineHeight: 1.2,
                padding: '0.5rem 10% 0.5rem 0.5rem'
            },
            text: {
                color: 'red'
            },
            closeBtn: {
                position: 'absolute',
                top: '.2rem',
                right: '.2rem',
                fontSize: '2rem',
                background: '#f0f0f0',
                padding: '0 0.4rem',
                color: 'rgba(0,0,0,0.6)'
            }
        };

        for (let key in style) {
            style[key] = this.compileToCss(style[key])
        }

        this.style = style;
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

export var Debugger = {
    init() {
        this.listenScriptError();
    },

    listenScriptError(){
        window.addEventListener('error', function () {
            new DebuggerInstance(arguments[0]);
        });
    },
    log(error){
        new DebuggerInstance(error);
    }

};

Debugger.init();
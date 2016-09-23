/**
 * Created by didi on 16/9/21.
 */
;(function (window) {
    class DebugerInstance {
        constructor(error) {
            let [errorMessage,scriptURI,lineNumber,columnNumber,errorObj] = [...error];
            this.error = {errorMessage, scriptURI, lineNumber, columnNumber, errorObj};
            this.style = this.getCssStyle();
            this.create(this.error);
        }

        create(error) {
            this.showAlertBox();
        }

        showAlertBox() {
            let error = this.error;
            let style = this.style;
            let content = `
            <div style="${style.container}">${error.errorMessage}</div>
            `;
            let alertBox = document.createElement('div');
            alertBox.className = 'sofa-debuger';
            alertBox.innerHTML = content;

            document.body.appendChild(alertBox);
        }

        getCssStyle() {
            let style = {
                container: {
                    background: '#000',
                    fontSize: '20px',
                    color: '#fff'
                },
                text: {
                    color: 'red'
                }
            };

            for (let key in style){
                style[key] = this.compileToCss(style[key])
            }

            return style;
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
    let debuger = {
        init () {
            window.onerror = function () {
                new DebugerInstance(arguments);
            };
        }

    };
    debuger.init();
})(window);
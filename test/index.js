/**
 * Created by didi on 16/9/23.
 */

require('./reset.css');

var Debugger = require('../../debuggerjs');
// import  Debugger from '../../debuggerjs';
Debugger.init();
document.addEventListener('click', function (e) {
    alert(a);
});


function loadErrorScript() {
    var script = document.createElement('script');
    script.src = '/badScript.js';
    script.onerror = function (error) {
        Debugger.log(error)
    };
    document.body.appendChild(script);
}
function loadErrorLink() {
    var link = document.createElement('link');
    link.href = '/badCss.css';
    link.rel = 'stylesheet';
    link.onerror = function (error) {
        console.log(error);
        Debugger.log(error)
    };

    document.head.appendChild(link);
}
function loadErrorAjax() {
    ajax({
        type: 'get',
        url: 'http://static.galileo.xiaojukeji.com/static/tms/api/poisearch.json',
        dataType: 'json',
        success: function (res) {
            alert(res)
        },
        error: function (err) {
            Debugger.log(err)
        }
    })
}

function ajax(opt) {
    var xhr = new XMLHttpRequest();
    xhr.open(opt.type, opt.url, opt.async);
    xhr.onload = function (res) {
        if (this.status == 200 || this.status == 304) {
            opt.success(res);
        }
    };
    xhr.onerror = function (error) {
        debugger;
        opt.error(error)
    };
    xhr.send();
}
window.onload = function () {
    Debugger.log('Debugger begins.');
    try {
        console.log(i)
    } catch (err) {
        Debugger.log(err)
    }
    loadErrorScript();
    loadErrorLink();
    setTimeout(loadErrorAjax, 3000);
};
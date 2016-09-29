/**
 * Created by didi on 16/9/23.
 */
(function (e) {
    e.setAttribute("src", "http://172.26.11.24:1234/target/target-script-min.js#anonymous");
    document.getElementsByTagName("body")[0].appendChild(e);
})(document.createElement("script"));

require('./reset.css');

import  {Debugger} from '../src/debuggerjs'
document.addEventListener('touchend',function (e) {
    alert(a);
});

function loadErrorScript() {
    var script = document.createElement('script');
    script.src = '/kkk.js';
    script.onerror = function (error) {
        Debugger.log(error)
    };
    document.body.appendChild(script);
}
function loadErrorLink() {
    var link = document.createElement('link');
    link.href = '/kkk.css';
    link.rel = 'stylesheet';
    link.onerror = function (error) {
        console.log(error);
        Debugger.log(error)
    };
    document.head.appendChild(link);
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
        opt.error(error)
    };
    xhr.send();
}
window.onload = function () {
    Debugger.init();
    Debugger.log('Debugger begins.');
    loadErrorScript();
    loadErrorLink();
    $.ajax({
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
};

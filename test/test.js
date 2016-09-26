/**
 * Created by didi on 16/9/23.
 */

require('./reset.css');
import  {Debugger} from '../src/debugger'

document.onclick = function(){
    alert(a)
}
setTimeout(function(){


},1000);

function loadErrorScript() {
    var script = document.createElement('script');
    script.src = '/kkk.js';
    script.onerror = function () {
        throw Error(arguments)
    };
    document.body.appendChild(script);
}


function ajax(opt){
    var xhr = new XMLHttpRequest();
    xhr.open(opt.type,opt.url,opt.async);
    if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
        opt.success(xhr.response);
    }else {
        opt.error(xhr.response)
    }
    xhr.send();
}

window.onload = function () {
    $.ajax({
        type:'get',
        url:'http://static.galileo.xiaojukeji.com/static/tms/api/poisearch.json',
        dataType:'json',
        success:function(res){
            alert(res)
        },
        error:function(err){
            Debugger.log(err)
        }
    });
};

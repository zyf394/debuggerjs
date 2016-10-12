/**
 * Created by didi on 2016/10/12.
 */
var fs = require('fs');
var postcss =require('postcss');
var path = require('path');
fs.readFile(path.resolve(__dirname, '../src/debuggerjs.css'),'utf-8',function (err, file) {
    console.log(file);
});

postcss([
    require('postcss-modules')({
        generateScopedName: function(name, filename, css) {
            var i     = css.indexOf('.' + name);
            var line  = css.substr(0, i).split(/[\r\n]/).length;
            var file  = path.basename(filename, '.css');

            return '_' + file + '_' + line + '_' + name;
        }
    })
]);
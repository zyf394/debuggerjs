var webpack = require('webpack');
var path = require('path');
var argv = process.argv;
var isUglify = argv.some(function(item, index){
    return item === '-p'
});
var outputFileName = isUglify ? "/[name].min.js" : "/[name].js";

module.exports = {
    entry: {
        debuggerjs: "./src/debuggerjs.js"
    },
    output: {
        path: "./",
        filename: outputFileName
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader?modules&localIdentName=[name]-[hash:base64:5]!less-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

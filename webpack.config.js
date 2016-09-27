var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        debugger: ["./src/debugger.js"],
        test:"./test/test.js",
        zepto:"./test/zepto.js"
    },
    output: {
        path: "./dist/",
        filename: "/[name].js"
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
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'debbger',
        template: './test/index.html',
        filename: './index.html',
        inject: true,
        chunks: ["debugger","test"]
    })
    ]
};

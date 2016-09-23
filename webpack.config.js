var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');
console.log(path.resolve(__dirname,'../../','./common/js'));

module.exports = {
    entry: {
        debugger: "./src/debugger.js",
        test:"./test/test.js"
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
                loader: 'style-loader!css-loader!less-loader'
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
        minify: {
            removeComments: true,
            collapseWhitespace: true
        },
        chunks: ["debugger","test"]
    })
    ]
};

const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
/*const UglifyJSPlugin = require('uglifyjs-webpack-plugin');*/
const common = require('./webpack.common.js');
module.exports = merge(common, {
    /*plugins: [
        new UglifyJSPlugin()
    ]*/
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
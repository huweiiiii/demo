const path = require('path');
/*const webpack = require('webpack');*/
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        another: './src/another-module.js'
    },
    plugins: [
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。
        }),*/
        new HtmlWebpackPlugin({
            title: 'Production'
        })
    ],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    }
};
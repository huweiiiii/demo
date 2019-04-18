const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('_html-webpack-plugin@3.2.0@html-webpack-plugin');
const CleanWebpackPlugin = require('_clean-webpack-plugin@2.0.1@clean-webpack-plugin/dist/clean-webpack-plugin');
module.exports = {
    mode: "production",
    devtool: 'inline-source-map',
    entry: {
        index: path.join(__dirname, '../src/index.js')
    },
    output: {
        filename: '[hash].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ]
};
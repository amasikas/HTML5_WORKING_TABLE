/**
 * Created by saki on 2017/6/8.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const base_config = require('./utils/base');


const ROOT_PATH_ARRAY = path.resolve(__dirname).split(path.sep);
ROOT_PATH_ARRAY.pop();
const ROOT_PATH = ROOT_PATH_ARRAY.join(path.sep);

const project = 'test2';
config = require(`${ROOT_PATH}/${project}/webpack.config.js`);

module.exports = {
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: config.contentBase,
        port: 7070,
        publicPath: "/static/"
    },

    entry: config.entry,
    output: {
        path: config.output_path,
        filename: config.output_filename ? config.output_filename : "bundle.js"
    },
    module: {
        rules: [
            ...base_config.module.rules
        ]
    },

    // plugins: [
    //     new HtmlWebpackPlugin({
    //         filename: path.resolve(__dirname, 'dist/index.html'),
    //         template: path.resolve(__dirname),
    //         hash: true
    //     })
    // ]
};
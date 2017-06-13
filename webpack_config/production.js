/**
 * Created by saki on 2017/6/7.
 */
const webpack = require('webpack');
const path = require('path');
const base_config = require('./utils/base');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ROOT_PATH_ARRAY = path.resolve(__dirname).split(path.sep);
ROOT_PATH_ARRAY.pop();
const ROOT_PATH = ROOT_PATH_ARRAY.join(path.sep);

const project = 'test2';
config = require(`${ROOT_PATH}/${project}/webpack.config.js`);


const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        main: config.entry
    },
    output: {
        path: config.output_path,
        filename: config.output_filename ? config.output_filename : "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"

                })
            },
            ...base_config.module.rules
        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: config.filename_html,
            template: config.template_html,
            hash: true
        }),
        new UglifyJSPlugin({
            sourceMap: true,
            compress: false,
            beautify: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: "vendor.bundle.js"
        }),
        extractSass
    ]
};
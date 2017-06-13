/**
 * Created by saki on 2017/6/8.
 */

const webpack = require('webpack');
const path = require('path');


const config = {
    module:{
        rules:[{
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: []
                }
            }],
            exclude: /node_modules/
        }]
    }
}

module.exports = config;

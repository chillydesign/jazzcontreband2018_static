const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './app/scripts'),
    resolve: {
        alias: {

        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            // $: "jquery",
            // jQuery: "jquery",
            // "window.jQuery": "jquery",
            //_: 'underscore',
            //moment: 'moment'
        })
    ],
    entry: {
        app:  './main.js',
    },
    output: {
        path: path.resolve(__dirname, './app/scripts/min'),
        filename: '[name].bundle.js',
    },
    devtool: 'source-map',
    module: {
        // loaders: [
        //   {
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: 'babel-loader',
        //     query: {
        //       presets: ['es2015', 'stage-0']
        //     }
        //   }
        // ]
    }
};

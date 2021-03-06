'use strict'

const path = require('path');
const webpack = require('webpack');

module.exports = {
    'entry':  {
        'jpslib': [path.resolve(__dirname, 'jpslib.js')]
    },
    'output': {
        'path': path.resolve(__dirname, 'dist'),
        'filename': '[name].min.js',
        'library': '[name]',
        'libraryTarget': 'umd'
    },
    'devtool': false,
    'resolveLoader': {
        'modulesDirectories': [path.resolve(__dirname, './node_modules')]
    },
    'plugins': [
        new webpack.optimize.UglifyJsPlugin({
            'compress': {
                'warnings': false
            }
        })
    ]
};

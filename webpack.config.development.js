const { merge } = require('webpack-merge');
const path = require('path');

const config = require('./webpack.config');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
        devMiddleware: {
            writeToDisk: true
        },
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        port: 9000
    },

    output: {
        path: path.resolve(__dirname, 'public')
    }
})

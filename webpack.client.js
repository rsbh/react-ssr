const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry : './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders : [
            {
                test : /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}


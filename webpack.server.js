const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry : './server/index.js',
    output: {
        path: path.resolve(__dirname, 'server'),
        filename: 'server.js'
    },
    target: "node",
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


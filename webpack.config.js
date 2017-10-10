const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry : './src/App.js',
    output: {
        path: path.resolve(__dirname, 'client/dist'),
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


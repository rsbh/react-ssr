module.exports = {
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
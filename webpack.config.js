var path = require('path');
var webpack = require('webpack');


module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './app/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'app')
        }]
    }
}
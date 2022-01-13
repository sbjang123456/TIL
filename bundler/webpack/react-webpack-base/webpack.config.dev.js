const {merge} = require('webpack-merge');
const common = require('./webpack.config.common.js');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: './build',
        host: 'localhost',
        port: 8081,
        open: true,
        historyApiFallback: true,
        proxy: {'/api/': {target: 'http://localhost:3000/api', changeOrigin: true, pathRewrite: {'^/api': '',},},},
    },
});


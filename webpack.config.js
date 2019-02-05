const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${pkg.name}.min.js`,
        library: pkg.name,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                parallel: true,
                cache: true,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
                exclude: /node_modules/,
            },
        ],
    },
};

const path = require('path');
const pkg = require('./package.json');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: `${pkg.name}.min.js`,
        library: pkg.name,
        libraryExport: 'default',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        umdNamedDefine: true,
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: [
                'babel-loader',
                'eslint-loader',
            ],
        }],
    },
};

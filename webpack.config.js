const path = require('path');
const pkg = require('./package.json');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: `${pkg.name}.min.js`,
        // https://github.com/webpack/webpack/issues/6522
        globalObject: 'typeof self !== \'undefined\' ? self : this',
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

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
            }
        ]
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
};
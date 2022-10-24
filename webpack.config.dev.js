const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index.tsx'],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dev'),
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    watch: true,
    devtool: 'source-map',
    devServer: {
        compress: true,
        port: 8001,
        open: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
        }),
        new ESLintPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.scss$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'img/[name].[ext]' },
                    },
                    'image-webpack-loader',
                ],
            },
        ],
    },
};

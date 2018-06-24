const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const envConfig = require("./env.json");
const env = process.env.NODE_ENV || "development";

const parentDir = path.join(__dirname, '../');
// const config = { ...process.env, APP_CONFIG: JSON.stringify(envConfig[env]) };

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"]
            // },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader',
            //         "css-loader",
            //         "sass-loader"
            //     ]
            // },
            // {
            //     test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            //     exclude: [
            //         /\.html$/,
            //         /\.(js|jsx)$/
            //     ],
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: 'statics/[name]-[hash:8].[ext]'
            //             },
            //         },
            //     ]
            // }
        ]
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new webpack.DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //     chunkFilename: "[id].css"
        // })
    ]
};
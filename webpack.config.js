const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }

        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,

        host: 'localhost', // Defaults to `localhost`
        port: 3000, // Defaults to 8080
        proxy: {
            '^/api/*': {
                target: 'http://localhost:8080/',
                secure: false
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        })
    ]
}
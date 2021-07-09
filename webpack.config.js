const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'public/favicon.png',
            template: path.resolve(__dirname, "public", "index.html")
        })
    ],
    entry: { index: path.resolve(__dirname, "src/react", "index.js") },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ],
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        hot: true,
        open: 'Google Chrome'
    }
};
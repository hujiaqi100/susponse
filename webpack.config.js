const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT = path.resolve(__dirname);
module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.jsx'),
    output: {
        path: path.resolve('dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: 'localhost',
        port: 3300,
        inline: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3100',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ts[x]?$/,
                loader: [
                    'ts-loader'
                ]
            },
            {
                enforce: 'pre',
                test: /\.ts[x]$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: require.resolve('babel-loader'),
                options: {
                    babelrc: true,
                    configFile: false,
                    compact: false,
                    cacheDirectory: true,
                    cacheCompression: false,
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'

            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: 'style-loader', // 从 JS 中创建样式节点
                    },
                    {
                        loader: 'css-loader', // 转化 CSS 为 CommonJS
                    },
                    {
                        loader: 'less-loader', // 编译 Less 为 CSS

                    },
                ],
            }
        ],

    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            '@': ROOT + '/src'
        }
    }
}

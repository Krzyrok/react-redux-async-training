var webpack = require("webpack");

var config = {
    devtool: "eval", // "source-map" if debug, "eval" if speed up
    entry: {
        app: [
            "webpack-dev-server/client?http://localhost:3000",
            "webpack/hot/only-dev-server",
            "./src/entry.jsx"
        ],
        libs: [
            "babel-polyfill",
            "react",
            "react-dom"
        ]
    },
    output: {
        path: __dirname,
        filename: "build/[name].bundle.js"
    },
    module: {
        loaders: [{
            loader: "style!css",
            test: /\.css$/
        }, {
            loaders: ["react-hot", "babel-loader"],
            test: /\.jsx?$/,
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["libs"],
            minChunks: Infinity
            // (with more entries, this ensures that no other module
            //  goes into the libs chunk)
        })
    ]
};

module.exports = config;

var webpack = require("webpack");

var config = {
    entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        "./src/entry.jsx"
    ],
    output: {
        path: __dirname,
        filename: "build/bundle.js"
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
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;

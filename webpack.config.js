var config = {
    entry: [
        // "webpack-dev-server/client?http://0.0.0.0:3000",
        "./src/entry.jsx"
    ],
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            { loader: "style!css", test: /\.css$/ },
            {
                loader: "babel-loader",
                test: /\.jsx?$/,
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};

module.exports = config;

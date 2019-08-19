const path = require('path');

module.exports = (env, options) =>  {
    return {
        entry: './src/index.js',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-react',
                            {"plugins": ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import']}
                        ]
                    }
                },
                {
                    test: /\.scss$/,
                    loaders: [
                        "style-loader", "css-loader", "sass-loader"
                    ]
                },
                {
                    test: /\.(svg|png)/,
                    loaders: [
                        "file-loader"
                    ]
                }
            ]
        },
        output: {
            path: path.join(__dirname, './dist'),
            filename: 'freemius-pricing.js',
            library: ["Freemius"],
            libraryTarget: 'umd',
        },
    };
};
var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,

    entry: {
        // Add as many entry points as you have container-react-components here
        MainApp: './reactjs/MainApp',
        vendors: ['react'],
    },

    output: {
        path: path.resolve('./djreact/static/bundles/local/'),
        filename: "[name]-[hash].js"
    },

    externals: [], // add all vendor libs

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    ], // add all common plugins here

    module: {
        loaders: [] // add all common loaders here
    },

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    },

    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /flexboxgrid/
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
                include: path.join(__dirname, 'node_modules'), // oops, this also includes flexboxgrid
                exclude: /flexboxgrid/ // so we have to exclude it
            }
        ]
    },
}

var path = require("path");
var webpack = require('webpack');
// var BundleTracker = require('webpack-bundle-tracker');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,

    entry: {
        // Add as many entry points as you have container-react-components here
        App: './reactjs/App',
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

    }
};

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    externals: {
        jquery: 'jQuery'
    },
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        alias: {
            applicationStyles: path.resolve(__dirname, './app/styles/app.scss'),
            productsApi: path.resolve(__dirname, './app/api/productsApi'),
            Main: path.resolve(__dirname, './app/components/Main.jsx'),
            Nav: path.resolve(__dirname, './app/components/Nav.jsx'),
            ProductList: path.resolve(__dirname, './app/components/ProductList.jsx'),
            ProductListState: path.resolve(__dirname, './app/components/ProductListState.jsx'),
            ProductItem: path.resolve(__dirname, './app/components/ProductItem.jsx'),
            ProductForm: path.resolve(__dirname, './app/components/ProductForm.jsx'),
            ProductFormState: path.resolve(__dirname, './app/components/ProductFormState.jsx')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
        {
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devtool: 'cheap-module-eval-source-map'
};

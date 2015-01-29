
module.exports = {
    entry: './app.jsx',
    output: {
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.jsx', '.js' ]
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx?stripTypes' }
        ]
    }
};
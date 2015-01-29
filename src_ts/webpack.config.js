
module.exports = {
    entry: './app.ts',
    output: {
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.ts', '.js' ]
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts?sourceMap' }
        ]
    }
};
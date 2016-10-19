module.exports = {
    entry: "./app/app.js", // Entry Point of the App
    output: {
        filename: "bundle.js" // Output file
    },
    watch: true, // Watching changes to auto-compile?
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'

            }
        ],
        loaders: [
            {
                exclude: /node_modules/, // Excluding the `node_modules` folder
                loader: 'babel-loader', // The loader we will be using
                query: {
                    presets: ['es2015'] // Presets for the Babel-Loader
                }
            }
        ]
    },
    jshint: {
        esversion: 6
    },
    resolve: {
        extensions: ['', '.js'] // Extension resolvers
    },
}
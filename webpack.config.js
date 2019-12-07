module.exports = {
    entry: `./index.js`,
    mode: "development",
    output: {
        path: `${__dirname}/dist`,
        filename: "index.js"
    },
    devServer: {
        contentBase: "dist",
        open: true
    }
};
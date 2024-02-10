module.exports = {
    parser: require('postcss-comment'),
    plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('cssnano'),
        require('postcss-preset-env')({
            stage: 1,
        }),
    ],
};
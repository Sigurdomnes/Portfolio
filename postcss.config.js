module.exports = {
    parser: require('postcss-comment'),
    syntax: 'postcss-scss',
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
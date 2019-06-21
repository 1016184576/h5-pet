// https://github.com/michael-ciniawsky/postcss-load-config

var adaptive = require('postcss-adaptive');

module.exports = (ctx) => ({
    // parser: ctx.parser ? 'sugarss' : false,
    // map: ctx.env === 'development' ? ctx.map : false,
    plugins: [
        require('autoprefixer')({ browsers: 'last 5 version' }),
        require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*']
        })
        // adaptive({ remUnit: 75, autoRem: true })
    ]

    // 'postcss-import': {},
    // 'postcss-nested': {},
    // cssnano: ctx.env === 'production' ? {} : false

})
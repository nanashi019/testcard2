module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : '/'
}

module.exports = {
    pwa: {
        workboxOptions: {
            exclude: [/_redirects/]
        }
    }
}
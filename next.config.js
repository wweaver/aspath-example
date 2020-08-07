const nextConfig = {
    rewrites: [
        {
            source: '/test/',
            destination: '/foo/bar'
        }
    ],
    trailingSlash: true
}

module.exports = nextConfig;

const withMDX = require('@next/mdx')()

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
})
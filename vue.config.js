const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProd ? '/portfolio' : '/',
  outputDir: isProd ? 'docs' : '',

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-loader')
      .loader('vue-loader-v16')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },

  css: {
    loaderOptions: {
      scss: {
        data: '@import "@/assets/scss/import.scss";'
      }
    }
  }
}

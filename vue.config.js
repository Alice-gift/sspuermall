module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'src': '@',
        'views': 'src/views',
        'components': 'src/components',
        'network': 'src/network',
        'common': 'src/common',
        'assets': 'src/assets',
      }
    }
  }
}

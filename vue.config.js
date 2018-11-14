var ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  pwa: {
    name: 'Portfolio of Jordy Pereira',
    themeColor: '#ff5722',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#ff5722'
  },
  configureWebpack: {
    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production',
        pngquant: {
          quality: '50'
        }
      })
    ]
  }
}

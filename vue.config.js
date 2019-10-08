const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  },
  parallel: false,
  outputDir: './docs',
  publicPath: process.env.NODE_ENV === 'production' ? './' : './'
};
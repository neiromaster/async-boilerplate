const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       vue: {
    //         test: /[\\/]node_modules[\\/](vue)[\\/]/,
    //         name: 'vue',
    //         chunks: 'all',
    //       },
    //       // core: {
    //       //   test: /[\\/]node_modules[\\/](core-js)[\\/]/,
    //       //   name: 'core',
    //       //   chunks: 'all',
    //       // },
    //     },
    //   },
    // },
    plugins: [new BundleAnalyzerPlugin()],
  },
};

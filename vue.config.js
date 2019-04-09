const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  productionSourceMap: false,

  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
            name: 'vue',
            chunks: 'all',
          },
          quasar: {
            test: /[\\/]node_modules[\\/](quasar)[\\/]/,
            name: 'quasar',
            chunks: 'all',
          },
          // axios: {
          //   test: /[\\/]node_modules[\\/](axios)[\\/]/,
          //   name: 'axios',
          //   chunks: 'all',
          //   // reuseExistingChunk: true,
          // },
        },
      },
    },
    plugins: [new BundleAnalyzerPlugin()],
  },

  pluginOptions: {
    quasar: {
      treeShake: true,
    },
  },

  transpileDependencies: [
    /[\\/]node_modules[\\/]quasar[\\/]/,
  ],
};

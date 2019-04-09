const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  productionSourceMap: false,

  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
            name: 'vue',
            chunks: 'all',
          },
          // quasar: {
          //   test: /[\\/]node_modules[\\/](quasar)[\\/]/,
          //   name: 'quasar',
          //   chunks: 'all',
          // },
          // core: {
          //   test: /[\\/]node_modules[\\/](core-js)[\\/]/,
          //   name: 'core',
          //   chunks: 'all',
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

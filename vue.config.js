const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const cacheGroupsConfig = require('./config/cacheGroups');

module.exports = {
  productionSourceMap: false,

  configureWebpack: config => {
    cacheGroupsConfig(config);
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
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

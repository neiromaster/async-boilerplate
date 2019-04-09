const { lensPath, over, mergeLeft } = require('ramda');
const cacheGroupsLens = lensPath(['splitChunks', 'cacheGroups']);

const cacheGroups = {
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
  rxjs: {
    test: /[\\/]node_modules[\\/](vue-rx|rxjs)[\\/]/,
    name: 'rxjs',
    chunks: 'async',
    reuseExistingChunk: true,
  },
};

module.exports = config => {
  config.optimization = over(cacheGroupsLens, mergeLeft(cacheGroups))(config.optimization);
};

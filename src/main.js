import Vue from 'vue';
// import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';

import bootFuncs from './boot';
// import i18n from './i18n';

Vue.config.productionTip = false;

const app = {
  router,
  store,
  // i18n,
  render: h => h(App),
};

const context = {
  app,
  router,
  store,
  Vue,
};

bootFuncs
  .forEach(boot => boot(context));

new Vue(app).$mount('#app');

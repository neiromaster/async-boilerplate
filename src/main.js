import Vue from 'vue';
// import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';

import * as bootFuncs from './boot';

Vue.config.productionTip = false;

const app = {
  router,
  store,
  render: h => h(App),
};

const context = {
  app,
  router,
  store,
  Vue,
};

Object.values(bootFuncs)
  .forEach(boot => boot(context));

new Vue(app).$mount('#app');

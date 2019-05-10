import Vue from 'vue';
// import './plugins/axios';
import App from './App.vue';
import { createRouter } from './router';
// import { createStore } from './store';

import './registerServiceWorker';

import bootFuncs from './boot';

Vue.config.productionTip = false;

const router = createRouter();
// const store = createStore();

const app = {
  router,
  // store,
  render: h => h(App),
};

const context = {
  app,
  router,
  // store,
  Vue,
};

bootFuncs
  .forEach(boot => boot(context));

new Vue(app).$mount('#app');

import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker';

// import './styles/quasar.styl';
// import lang from 'quasar/lang/ru';
// import '@quasar/extras/roboto-font/roboto-font.css';
// import '@quasar/extras/material-icons/material-icons.css';
// import VueRx from 'vue-rx';
//
// Vue.use(VueRx);
//
// import {
//   Quasar,
//   QLayout,
//   QHeader,
//   QDrawer,
//   QPageContainer,
//   QPage,
//   QToolbar,
//   QToolbarTitle,
//   QBtn,
//   QIcon,
//   QList,
//   QItem,
//   QItemSection,
//   QItemLabel,
// } from 'quasar';
//
// Vue.use(Quasar, {
//   config: {},
//   components: {
//     QLayout,
//     QHeader,
//     QDrawer,
//     QPageContainer,
//     QPage,
//     QToolbar,
//     QToolbarTitle,
//     QBtn,
//     QIcon,
//     QList,
//     QItem,
//     QItemSection,
//     QItemLabel,
//   },
//   directives: {},
//   plugins: {},
//   lang,
// });

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

Object.keys(bootFuncs)
  .forEach(boot => boot(context));

new Vue(app).$mount('#app');

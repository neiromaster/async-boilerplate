import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from '@/layouts/Default.vue';
import { i18nRouterInit } from '@/boot/i18n';

Vue.use(Router);

const routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
      },
    ],
  },
];

export default new Router({
  routes: i18nRouterInit(routes),
});

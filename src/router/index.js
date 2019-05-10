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
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: { name: 'error404' },
  },
];

// eslint-disable-next-line import/prefer-default-export
export function createRouter() {
  return new Router({
    scrollBehavior: () => ({
      x: 0,
      y: 0,
    }),
    routes: i18nRouterInit(routes),
    mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  });
}

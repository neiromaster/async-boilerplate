import Vue from 'vue';
import Router from 'vue-router';
import { i18nRouterInit } from '@/boot/i18n';

import defaultLayout from './defaultLayout';

Vue.use(Router);

const routes = [
  defaultLayout,
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

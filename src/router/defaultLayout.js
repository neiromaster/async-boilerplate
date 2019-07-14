export default {
  path: '',
  component: () => import(/* webpackChunkName: "default" */ '@/layouts/Default.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () => import(/* webpackChunkName: "default" */ '@/views/Home.vue'),
    },
    {
      path: 'about',
      name: 'about',
      component: () => import(/* webpackChunkName: "default" */ '@/views/About.vue'),
    },
  ],
};

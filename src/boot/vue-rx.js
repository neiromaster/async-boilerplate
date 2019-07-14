export default ({ Vue }) => {
  import('vue-rx').then(({ default: VueRx }) => Vue.use(VueRx));
};

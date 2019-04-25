import beforeEach from './beforeEach';

const hooks = { beforeEach };

export default ({ app, router }) => {
  app.router = Object.assign(router, hooks);
};

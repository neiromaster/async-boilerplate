import beforeEach from './beforeEach';

const hooks = { beforeEach };

export default (ctx) => {
  Object.keys(hooks)
    .forEach(k => ctx.router[k](hooks[k](ctx)));
};

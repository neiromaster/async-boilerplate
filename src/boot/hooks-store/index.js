import beforeEach from './beforeEach';

const hooks = { beforeEach };

export default ctx => Object.keys(hooks)
  .reduce((res, k) => {
    res[k] = hooks[k](ctx);
    return res;
  }, {});

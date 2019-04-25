import beforeEach from './beforeEach';

export default ctx => Object.entries({
  beforeEach,
})
  .reduce((res, [k, v]) => {
    res[k] = v(ctx);
    return res;
  }, {});

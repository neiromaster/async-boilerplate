import i18nMiddleware from '@/router/middlewares/i18nMiddleware';
import middlewarePipeline from './middlewarePipeline';

export default ({ Vue }) => (to, from, next) => {
  const middleware = Array.isArray(to.meta.middleware)
    ? [i18nMiddleware, ...to.meta.middleware]
    : [i18nMiddleware, to.meta.middleware];

  const context = {
    Vue,
    to,
    from,
    next,
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
};

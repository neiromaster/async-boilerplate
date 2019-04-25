/* eslint-disable no-param-reassign */
import VueI18n from 'vue-i18n';
import ru from '@/locales/ru.json';

const defaultLocale = 'ru';

export default ({ app, Vue }) => {
  Vue.use(VueI18n);
  app.i18n = new VueI18n({
    locale: defaultLocale, // set locale
    fallbackLocale: defaultLocale,
    messages: { ru }, // set locale messages
  });
};

const loadedLanguages = [defaultLocale]; // our default language that is preloaded
const availableLanguages = ['ru', 'en']; // our default language that is preloaded

function setI18nLanguage(Vue, lang) {
  Vue.i18n.locale = lang;
  Vue.axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html')
    .setAttribute('lang', lang);
  return lang;
}

export function loadLanguageAsync(Vue, lang) {
  if (Vue.i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/locales/${lang}`).then((msgs) => {
        Vue.i18n.setLocaleMessage(lang, msgs.default);
        loadedLanguages.push(lang);
        return setI18nLanguage(Vue, lang);
      });
    }
    return Promise.resolve(setI18nLanguage(lang));
  }
  return Promise.resolve(lang);
}

export function i18nRouterInit(routes) {
  return [
    {
      path: '/',
      redirect: `/${defaultLocale}`,
    },
    {
      path: `/(${availableLanguages.join('|')})`,
      component: {
        render(h) {
          return h('router-view');
        },
      },
      children: routes,
    },
    {
      path: '/(.*)',
      redirect: to => `/${defaultLocale}${to.path}`,
    },
  ];
}

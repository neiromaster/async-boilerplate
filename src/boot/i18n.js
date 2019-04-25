/* eslint-disable no-param-reassign */
import VueI18n from 'vue-i18n';
import messages from '@/locales/ru.json';

export default ({ app, Vue }) => {
  Vue.use(VueI18n);
  app.i18n = new VueI18n({
    locale: 'ru', // set locale
    fallbackLocale: 'ru',
    messages, // set locale messages
  });
};

const loadedLanguages = ['en']; // our default language that is preloaded

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

// function loadLocaleMessages() {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
//   const messages = {};
//   locales.keys()
//     .forEach(key => {
//       const matched = key.match(/([A-Za-z0-9-_]+)\./i);
//       if (matched && matched.length > 1) {
//         const locale = matched[1];
//         messages[locale] = locales(key);
//       }
//     });
//   return messages;
// }
//
// export default new VueI18n({
//   locale: process.env.VUE_APP_I18N_LOCALE || 'en',
//   fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
//   messages: loadLocaleMessages(),
// });

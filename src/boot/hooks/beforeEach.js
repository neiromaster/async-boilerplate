import { loadLanguageAsync, availableLanguages, defaultLocale } from '@/boot/i18n';

export default ({ Vue }) => (to, from, next) => {
  const { lang } = to.params;
  if (availableLanguages.includes(lang)) {
    loadLanguageAsync(Vue, lang)
      .then(() => next());
  } else {
    next({ path: `/${defaultLocale}${to.path}` });
  }
};

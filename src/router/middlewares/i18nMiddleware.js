import { availableLanguages, defaultLocale, loadLanguageAsync } from '@/boot/i18n';

export default ({ Vue, to, next }) => {
  const { lang } = to.params;
  if (availableLanguages.includes(lang)) {
    loadLanguageAsync(Vue, lang)
      .then(() => next());
  } else {
    next({ path: `/${defaultLocale}${to.path}`, replace: true });
  }
};

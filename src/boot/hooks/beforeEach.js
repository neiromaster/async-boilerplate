import { loadLanguageAsync } from '@/boot/i18n';

export default (to, from, next) => {
  const { lang } = to.params;
  loadLanguageAsync(lang)
    .then(() => next());
};

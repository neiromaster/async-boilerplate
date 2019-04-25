import { loadLanguageAsync } from '@/boot/i18n';

export default ({ Vue }) => (to, from, next) => {
  const { lang } = to.params;
  loadLanguageAsync(Vue, lang)
    .then(() => next());
};

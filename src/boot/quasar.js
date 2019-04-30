import lang from 'quasar/lang/ru';
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  Notify,
} from 'quasar';

import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.ie.polyfills';

import(/* webpackPreload: true, webpackChunkName: "quasar" */'../styles/quasar.styl');

export default ({ Vue }) => {
  Vue.use(Quasar, {
    config: {},
    components: {
      QLayout,
      QHeader,
      QDrawer,
      QPageContainer,
      QPage,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QItem,
      QItemSection,
      QItemLabel,
    },
    directives: {},
    plugins: {
      Notify,
    },
    lang,
  });
};

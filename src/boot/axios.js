/* eslint-disable arrow-body-style */
import axios from 'axios';
import { Observable } from 'rxjs';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  baseURL: process.env.baseURL || process.env.apiUrl || '',
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const axiosInstance = axios.create(config);

// axiosInstance.interceptors.request.use(
//   (cfg) => {
//     // Do something before request is sent
//     return cfg;
//   },
//   (error) => {
//     // Do something with request error
//     return Promise.reject(error);
//   },
// );

// Add a response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Do something with response data
//     return response;
//   },
//   (error) => {
//     // Do something with response error
//     return Promise.reject(error);
//   },
// );

const axiosCreateObservable = payload => new Observable((observer) => {
  const source = axios.CancelToken.source();
  axiosInstance({
    ...payload,
    cancelToken: source.token,
  })
    .then((response) => {
      observer.next(response.data);
      observer.complete();
    })
    .catch((error) => {
      observer.error(error);
    });
  return source.cancel;
});

/* eslint-disable-next-line no-unused-vars */
const Plugin = {
  install: (Vue, options) => {
    /* eslint-disable-next-line no-param-reassign */
    Vue.axios = axiosInstance;
    window.axios = axiosInstance;
    Object.defineProperties(Vue.prototype, {
      $axios: {
        get() {
          return axiosInstance;
        },
      },
      $axios$: {
        get() {
          return axiosCreateObservable;
        },
      },
    });
  },
};

export default ({ Vue }) => {
  Vue.use(Plugin);
};

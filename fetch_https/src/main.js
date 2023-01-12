import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vue-js-http-e6fdf/databases/(default)/documents"

axios.interceptors.request.use(
  config => {
    console.log('request', config)
    return config;
  },
  error => {
    return new Promise.reject(error)
  }
)

axios.interceptors.response.use(
  config => {
    console.log('response', config);
    return config;
  },
  error => {
    return new Promise.reject(error)
  }
)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

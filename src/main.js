import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import YmapPlugin from 'vue-yandex-maps'
import Lingallery from 'lingallery';
import store from './store'
import dateFilter from "./filters/date.filter";
import './registerServiceWorker'

Vue.component('lingallery', Lingallery);

Vue.use(YmapPlugin, {
  apiKey: 'ae6a0968-a1fe-4e9d-a883-64dfb71ce553',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA4UddEevlzWyhw3upV1w3Gr5OSGCSDboM',
    libraries: 'places',
    region: 'ru',
    language: 'ru'
  }
})

Vue.filter('date', dateFilter)

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

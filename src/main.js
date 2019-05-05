import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import {Storage} from './modules/storage.js';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

//Global functions

Vue.prototype.$storage = new Storage(window.localStorage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

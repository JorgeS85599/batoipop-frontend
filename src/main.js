import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./js/scripts.js";

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCdW9QyXTV6tXf7JTu_QeU9k2ZAWlXw7n4",
    libraries: "places" 
  },
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


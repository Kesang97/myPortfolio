import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import router from './router'

Vue.config.productionTip = false
Vue.use(VueSweetalert2);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

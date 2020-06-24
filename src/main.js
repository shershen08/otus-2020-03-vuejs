import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'

import router from './routes'

Vue.use(VueRouter)

Vue.config.productionTip = false;

Vue.component('my-nice-comp', {
  template: "<div>A custom component!</div>"
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

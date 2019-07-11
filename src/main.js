import Vue from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueMDCAdapter from 'vue-mdc-adapter'
import router from './router'
import store from './store'


require('dotenv').config()

Vue.use(VueMDCAdapter)

Vue.use(VueSidebarMenu)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ModalWindow from './Plugins/ModalWindow/index.js'

Vue.config.productionTip = false

Vue.use(ModalWindow)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

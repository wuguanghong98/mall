import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import toast from './components/common/toast'

const loading = require('./assets/img/lazyload/loading.jpg')

Vue.use(VueLazyLoad, {
  loading,
})
Vue.use(toast)


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

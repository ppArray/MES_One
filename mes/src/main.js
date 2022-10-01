import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import {Switch,Pagination} from 'element-ui'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Switch)
Vue.use(Pagination)

axios.defaults.baseURL='http://localhost:3000'
Vue.prototype.$http=axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

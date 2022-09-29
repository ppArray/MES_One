import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/pages/login/Login.vue'
import Home from '@/pages/Home/Home.vue'
import HomeRight from '@/pages/Home/Right/Home-Right.vue'
import UserAdd from '@/pages/user/userAdd/UserAdd.vue'
import UserAmend from '@/pages/user/userAmend/userAmend.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    {
      path: '/home', component: Home,
      children: [
        { path: '/',component:HomeRight }
      ]
    },
    { path: '/userAdd', component: UserAdd },
    {path: '/userAmend', component: UserAmend}
  ]
})
export default router
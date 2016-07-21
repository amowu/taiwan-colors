import Vue from 'vue'
import VueRouter from 'vue-router'

import ColorListPage from '../pages/ColorListPage'

Vue.use(VueRouter)

const router = new VueRouter({
  history: false
})

router.map({
  '/': {
    component: ColorListPage
  }
})

router.redirect({
  '*': '/'
})

export default router

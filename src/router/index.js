import Vue from 'vue'
import Router from 'vue-router'
import PlatformAccount from '@/views/PlatformAccount'
import InstitutionalAccount from '@/views/InstitutionalAccount'
import ProductManagement from '@/views/ProductManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlatformAccount',
      component: PlatformAccount
    },{
      path: '/InstitutionalAccount',
      name: 'InstitutionalAccount',
      component: InstitutionalAccount
    },{
      path: '/ProductManagement',
      name: 'ProductManagement',
      component: ProductManagement
    }

  ]
})

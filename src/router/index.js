import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Comp1 from '@/components/Comp1'
import Comp2 from '@/components/Comp2'
import SideComp from '@/components/SideComp'

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Comp1',
      name: 'Comp1',
      component: Comp1
    },
    {
      path: '/Comp2',
      name: 'Comp2',
      component: Comp2
    },
    {
      path: '/SideComp',
      name: 'SideComp',
      component: SideComp
    }
  ]
})

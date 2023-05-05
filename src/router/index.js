import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TargetStock from '@/components/TargetStock'
import CurrentStock from '@/components/CurrentStock'
import ShoppingList from '@/components/ShoppingList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/target-stock',
      name: 'Manage Target Stock',
      component: TargetStock
    },
    {
      path: '/current-stock',
      name: 'Manage Current Stock',
      component: CurrentStock
    },
    {
      path: '/shopping-list',
      name: 'Get Shopping List',
      component: ShoppingList
    }
  ]
})

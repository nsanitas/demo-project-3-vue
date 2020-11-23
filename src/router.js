import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import LayoutComponents from './views/layout-components'
import LayoutComponents1 from './views/layout-components1'
import Page from './views/page'
import ReusableComponents from './views/reusable-components'
import ReusableComponents1 from './views/reusable-components1'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'LayoutComponents',
      path: '/layout-components',
      component: LayoutComponents,
    },
    {
      name: 'LayoutComponents1',
      path: '/layout-components1',
      component: LayoutComponents1,
    },
    {
      name: 'Page',
      path: '/',
      component: Page,
    },
    {
      name: 'ReusableComponents',
      path: '/reusable-components',
      component: ReusableComponents,
    },
    {
      name: 'ReusableComponents1',
      path: '/reusable-components1',
      component: ReusableComponents1,
    },
  ],
})

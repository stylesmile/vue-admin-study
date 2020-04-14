import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import Layout from '@/views/Layout'

import errorPage from '@/views/error-page/404'

import navigatorOneThree from '@/views/navigatorOne/itemThree/itemThree'
import navigatorOneTwo from '@/views/navigatorOne/itemTwo/itemTwo'
import navigatorOneOne from '@/views/navigatorOne/itemOne/itemOne'
import Common from '@/views/navigatorTwo/CommonInvite'

import navigatorTwoOne from '@/views/navigatorTwo/itemOne/itemOne'
import navigatorTwoTwo from '@/views/navigatorTwo/itemTwo/itemTwo'
import navigatorTwoThree from '@/views/navigatorTwo/itemThree/itemThree'
import navigatorTwoFour from '@/views/navigatorTwo/itemFour/itemFour'

/* Layout */
Vue.use(Router)
Vue.use(Element)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    hidden: true
  },
  {
    path: '/home1',
    name: 'home1',
    component: () => import('@/views/Home.vue')
    // hidden: true
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld,
    hidden: true
  },
  {
    path: '/navigatorOne',
    name: 'one',
    component: Layout,
    redirect: '/navigatorOne/itemOne',
    meta: {
      icon: 'icon-dashboard',
      title: 'navigatorOne'
    },
    children: [
      {
        name: '1-itemOne',
        path: 'itemOne',
        component: navigatorOneOne,
        meta: {
          title: 'item one'
          // codes: ['item-one']
        }
      },
      {
        name: '1-itemTwo',
        path: 'itemTwo',
        component: navigatorOneTwo,
        meta: {
          title: 'item two',
          codes: ['item-two'] // 无权限
        }
      },
      {
        name: '1-itemThree',
        path: 'itemThree',
        component: navigatorOneThree,
        meta: {
          title: 'itme three',
          codes: ['item-three'] // 无权限
        }
      }
    ]
  },
  {
    path: '/navigatorTwo',
    name: 'two',
    component: Layout,
    redirect: '/navigatorTwo/itemOne',
    meta: {
      icon: 'icon-58',
      title: 'navigatorTwo'
    },
    // hidden: true,
    children: [
      {
        path: 'itemOne',
        component: navigatorTwoOne,
        meta: {
          title: 'example',
          codes: ['item-one']
        }
      },
      {
        path: 'itemTwo',
        name: 'itemTwo',
        component: Common,
        meta: {
          title: 'item two'
        },
        children: [
          {
            path: 'table1',
            name: 'table1',
            component: navigatorTwoOne,
            meta: {
              title: 'table1'
            }
          },
          {
            path: 'table2',
            name: 'table2',
            component: navigatorTwoTwo,
            meta: {
              title: 'table2'
            }
          },
          {
            name: 'two/id',
            path: 'two/:id',
            component: navigatorTwoThree,
            hidden: true,
            meta: {
              activeMenu: '/navigatorTwo/itemTwo/table2'
            }
          }
        ]
      },
      {
        path: 'itemThree',
        component: navigatorTwoThree,
        meta: {
          title: 'item three'
        }
      },
      {
        path: 'itemFour',
        component: navigatorTwoFour,
        meta: {
          title: 'item four'
        }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: errorPage,
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  debugger
  console.log('newRouter')
  console.log(newRouter)
  router.matcher = newRouter.matcher // reset router
}

export default router

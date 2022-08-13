import {createRouter, createWebHashHistory} from 'vue-router'
import MyEcharts from '@/view/MyEchart/MyEcharts'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/view/CloudMusic/CloudMusic')
    },
    {
        path: '/hello',
        name: 'WordOne',
        component: () => import('@/view/WordOne/WordOne')
    },
    {
        path: '/wrold',
        name: 'WordTwo',
        component: () => import('@/view/WordTwo/WordTwo')
    },
    {
        path: '/t',
        name: 'WordThree',
        component: () => import('@/view/WordThree/WordThree')
    },
    {
        path: '/echarts',
        name: 'MyEcharts',
        component: MyEcharts
    },
    {
        path: '/test',
        name: 'MyTest',
        component: () => import('@/view/EleMent/MyTest'),
        meta: {
            name: 18
        }
    },
    {
        path: '/index',
        name: 'ElContainerMy',
        component: () => import('@/view/ElementUi/ElContainerMy')
    },
    {
        path: '/scroll',
        name: 'MyScroll',
        component: () => import('@/view/myscroll/MyScroll')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// router.beforeEach((to, from) => console.log(to, from))
export default router

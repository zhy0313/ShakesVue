import Vue from 'vue'
import Router from 'vue-router'

// Login
import Login from './../pages/login/Login.vue'

// 404
import Page404 from './../pages/Page404.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '*',
            name: 'page404',
            component: Page404
        }
    ]
})

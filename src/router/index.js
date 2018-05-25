import Vue from 'vue'
import Router from 'vue-router'

// Home
import Home from './../pages/home/home.vue'

// Login
import Login from './../pages/login/Login.vue'

// 404
import Page404 from './../pages/Page404.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
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

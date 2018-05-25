// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import VueI18n from 'vue-i18n'
import './assets/font/iconfont.css'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zh',
    messages: {
        'zh': require('@/assets/lang/zh.json'),
        'en': require('@/assets/lang/en.json')
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: { App },
    template: '<App/>'
})

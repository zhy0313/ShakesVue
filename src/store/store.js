import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
    state: {
        userInfo: {
            userName: ''
        }
    },
    getters: {
        getUserInfo (state) {
            return state.userInfo
        }
    },
    mutations: {
        setUserInfo (state, value) {
            state.userInfo = value
        }
    },
    actions: {
        setUserInfo ({commit}) {
            commit('setUserInfo')
        }
    }
})

export default Store

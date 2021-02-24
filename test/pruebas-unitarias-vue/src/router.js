import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({

    Router: [
        {
            path: '/',
            name: 'home',
            component : () => import ('./views/home.vue')
        },
        {
            path: '/about'
            component : () => import ('./views/about.vue')
        }
    ]
})
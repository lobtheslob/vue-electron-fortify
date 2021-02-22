import Vue from 'vue'
import Router from 'vue-router'

import Fortify from '../components/Fortify.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/src/components',
        name: 'Fortify',
        component: Fortify,
    }], 
});
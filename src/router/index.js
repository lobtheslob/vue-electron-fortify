import Vue from 'vue'
import Router from 'vue-router'

import Fortify from '../components/Fortify'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/src/components',
        name: 'Fortify',
        component: Fortify,
    }], 
});
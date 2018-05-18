import Vue from 'vue';
import Router from 'vue-router';
import GrpHome from '../components/home/home';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'GrpHome',
            component: GrpHome,
        },
    ],
});

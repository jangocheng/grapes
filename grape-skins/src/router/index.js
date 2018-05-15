import Vue from 'vue';
import Router from 'vue-router';
import GrpLayouts from '@/components/layouts/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GrpLayouts',
      component: GrpLayouts,
    },
  ],
});

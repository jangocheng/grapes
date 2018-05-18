// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/scss/font-awesome.scss';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Storage from 'vue-ls';
import app from './app';
import router from './router';
import '@/assets/styles/index.scss';

let storageOptions = {
    namespace: 'grapes_',
    name: 'sessionStorage',
    storage: 'session',
};

Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(Storage, storageOptions);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {app},
    template: '<app/>',
});

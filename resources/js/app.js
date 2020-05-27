import Vue from 'vue'
import router from './router';
import App from './App.vue';
import './bootstrap';
import 'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//And import Bootstrap and BootstrapVue css files:
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
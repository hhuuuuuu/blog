// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Bloading from './components/b-loading.vue'
import store from './store/index'
Vue.config.productionTip = false
Vue.component('b-loading', Bloading)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})

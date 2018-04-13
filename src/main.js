// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Bloading from './components/b-loading.vue'
import bInput from './components/b-input.vue'
import bFormItem from './components/b-form-item.vue'
import bForm from './components/b-form.vue'
import bButton from './components/b-button.vue'
import store from './store/index'
import bus from './event'
import axios from './axios'
Vue.config.productionTip = false
Vue.component('b-loading', Bloading)
Vue.component('b-input', bInput)
Vue.component('b-form-item', bFormItem)
Vue.component('b-form', bForm)
Vue.component('b-button', bButton)
let MyPlugin = {}
MyPlugin.install = function() {
    Vue.prototype.$bus = bus
    Vue.prototype.$http = axios
}
Vue.use(MyPlugin)
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

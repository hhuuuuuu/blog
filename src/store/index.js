import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './actions'
import index from './modules/index'
import home from './modules/home'
import articleList from './modules/article-list'
import defaultImg from '../assets/bg.jpg'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        navList: [
            {
                url: '/home/article/list',
                name: '文章'
            },
            {
                url: '/home/article/content',
                name: 'HOME2'
            },
            {
                url: '',
                name: 'HOME3'
            },
            {
                url: '',
                name: 'HOME4'
            },
            {
                url: '',
                name: 'HOME5'
            },
            {
                url: '',
                name: 'HOME6'
            }
        ],
        defaultImg
    },
    getters: {},
    mutations,
    action,
    modules: {
        index,
        articleList,
        home
    }
})

export default store

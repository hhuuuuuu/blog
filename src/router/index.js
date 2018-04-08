import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index.vue'
import Home from '../page/home.vue'
import ArticleList from '../page/article-list.vue'
import ArticleContent from '../page/article-content.vue'
import Write from '../page/write.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'article/list',
                    name: 'articleList',
                    component: ArticleList
                },
                {
                    path: 'article/content',
                    name: 'articleContent',
                    component: ArticleContent
                },
                {
                    path: '/write',
                    name: 'write',
                    component: Write
                }
            ]
        }
    ]
})

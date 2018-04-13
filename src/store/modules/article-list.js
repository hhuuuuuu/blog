import axios from '../../axios'

export default {
    state: {
        loading: true,
        articleList: []
    },
    getter: {},
    mutations: {
        articleList(state, payload = []) {
            state.articleList = payload
        },
        loading(state, payload) {
            state.loading = payload
        }
    },
    actions: {
        async getArticleList({ state, commit }) {
            let res = await axios.get('/article/all')
            commit('articleList', res)
            commit('loading', false)
        }
    }
}

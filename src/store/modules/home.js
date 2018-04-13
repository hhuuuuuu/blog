export default {
    state: {
        navStyle: {
            backgroundColor: '#000000'
        }
    },
    getter: {},
    mutations: {
        backgroundColor(state, payload) {
            state.backgroundColor = payload
        }
    },
    actions: {
        setBackground({ state, commit }, payload) {
            commit('backgroundColor', payload)
        }
    }
}

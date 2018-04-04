export default {
    state: {
        navStyle: {
            backgroundColor: '#000000'
        }
    },
    getter: {},
    mutaion: {},
    actions: {
        setBackground({ state }, payload) {
            console.log(payload)
            state.navStyle.backgroundColor = payload
        }
    }
}

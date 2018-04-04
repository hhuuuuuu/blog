<template>
    <div class='home-page'>
        <b-nav :nav-style='navStyle'
               :nav-list='navList' />
        <router-view></router-view>
    </div>
</template>

<script>
import bNav from '../components/b-nav.vue'
import { mapState } from 'vuex'
export default {
    components: {
        bNav
    },
    computed: {
        ...mapState({
            navList: state => state.navList,
            navStyle: state => state.home.navStyle
        })
    }
}
</script>

<style scoped lang='scss'>
.home-page {
    background-color: #f6f9fc;
    min-height: 100vh;
    .fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
}
</style>

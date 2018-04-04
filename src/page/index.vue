<template>
    <div class='index-page'>
        <b-nav :nav-list='navList'/>
        <div class='top-background'>
            <div class="intro">
                <h1 class="name">不懂先生</h1>
                <i class="line"></i>
                <p>海阔凭鱼跃，天高任鸟飞</p>
            </div>
        </div>
    </div>
</template>

<script>
import bNav from '../components/b-nav.vue'
import {mapState} from 'vuex'
export default {
    name: 'Index',
    components: {
        bNav
    },
    computed: {
        ...mapState({
            navList: state => state.navList
        })
    }
}
</script>

<style scoped lang="scss">
.index-page {
    font-size: 14px;
    .top-background {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background-image: url('../assets/bg.jpg');
        background-position: center;
        background-size: cover;
        position: relative;
        &:after{
            position: absolute;
            width: 100%;
            height: 100%;
            background: #0000006b;
            content: '';
            z-index: 0;
        };
        .intro {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            z-index: 1;
            .name {
                font-size: 80px;
                color: #ffffff;
            }
            .line {
                width: 400px;
                height: 4px;
                background: #ffffff;
                margin: 30px 0 40px 0;
            }
            p {
                font-size: 28px;
                color: #ffffff;
            }
        }
    }
}
</style>

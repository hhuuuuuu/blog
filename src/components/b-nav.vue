<template>
    <nav class='nav' :style='navStyle'>
        <div class='left'>
            <router-link to='/'>BLOG</router-link>
        </div>
        <div class='right'>
            <ul>
                <li v-for='item in navList' :key='item.name'>
                    <router-link :to="item.url">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    props: {
        navStyle: {
            type: Object
        },
        navList: {
            type: Array
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped lang='scss'>
.nav {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    color: #ffffff;
    padding: 20px 40px;
    z-index: 100;
    .left {
        display: flex;
        align-items: center;
        a {
            font-size: 18px;
            font-weight: 800;
            color: #ffffff;
            text-decoration: none;
        }
    }
    .right {
        font-size: 12px;
        font-weight: 800;
        ul {
            display: flex;
            li {
                list-style: none;
                margin-left: 60px;
                a {
                    color: #ffffff;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>

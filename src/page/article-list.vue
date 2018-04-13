<template>
    <div class='article-list-page'>
        <div class='title'>
            <h1>ALL&nbsp;&nbsp;&nbsp;&nbsp;ARTICLE</h1>
        </div>
        <div class='loading-wrap'
             v-show='loading'>
            <b-loading></b-loading>
        </div>
        <div class='list'
             v-show="!loading">
            <div class='item-wrap'
                 v-for='item in articleList'
                 :key=item.time>
                <div class='item'
                     @click="handleItemClick(item._id)">
                    <div class='img-wrap'>
                        <img :src="item.cover ? `http://localhost:3030/${item.cover}` : defautlImg"
                             alt="blog">
                    </div>
                    <h2>{{item.title}}</h2>
                    <p>{{item.desc}}</p>
                    <span>{{item.created_at}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'ArticelList',
    computed: {
        ...mapState({
            articleList: state => state.articleList.articleList,
            loading: state => state.articleList.loading,
            defautlImg: state => state.defaultImg
        })
    },
    data() {
        return {}
    },
    methods: {
        ...mapActions(['setBackground', 'getArticleList']),
        handleItemClick(id) {
            this.$router.push({
                name: 'articleContent',
                params: {
                    id
                }
            })
        }
    },
    async created() {
        this.setBackground('#000000')
        this.getArticleList()
    }
}
</script>

<style scoped lang='scss'>
.article-list-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    .title {
        display: flex;
        justify-content: center;
        padding: 40px 0 20px 0;
        border-bottom: 2px solid #555555;
        margin: 0 0 20px 0;
        h1 {
            color: #555555;
            font-size: 18px;
        }
    }
    .loading-wrap {
        margin-top: 200px;
    }
    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 1200px;
        .item-wrap {
            width: 25%;
            padding: 20px;
        }
        .item {
            width: 100%;
            display: flex;
            flex-direction: column;
            background: #ffffff;
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
            border-radius: 5px;
            overflow: hidden;
            &:hover {
                box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.1);
            }
            transition: all 0.2s ease;
            cursor: pointer;
            .img-wrap {
                height: 150px;
                width: 100%;
                overflow: hidden;
            }
            img {
                height: 100%;
                width: 100%;
                transition: all 0.8s ease;
                &:hover {
                    transform: scale3d(1.1, 1.1, 1.1);
                }
            }
            h2 {
                font-size: 16px;
                color: #000000;
                font-weight: 400;
                height: 40px;
                line-height: 40px;
                padding: 0 15px;
            }
            p {
                font-size: 14px;
                color: rgba(76, 87, 102, 0.5);
                height: 80px;
                padding: 0 15px;
                line-height: 25px;
            }
            span {
                color: rgba(76, 87, 102, 0.5);
                font-size: 12px;
                padding: 0 15px;
                height: 30px;
                line-height: 30px;
            }
        }
    }
}
</style>

<template>
    <div class='b-form'>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'bForm',
    props: {
        rules: {
            type: Object
        },
        forms: {
            type: Object
        }
    },
    data() {
        return {
            itemList: []
        }
    },
    methods: {
        valiate() {
            this.itemList.forEach(item => {
                item.valiate(this.rules[item.prop], this.forms[item.prop])
            })
        }
    },
    created() {
        this.$bus.$on('addFormItem', formItem => {
            this.itemList.push(formItem)
        })
    },
    mounted() {}
}
</script>

<style lang='scss' scoped>
.b-form{
    display: flex;
    flex-direction: column;
}
</style>

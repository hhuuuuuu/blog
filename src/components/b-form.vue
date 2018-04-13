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
            let legal = true
            this.itemList.forEach(item => {
                let ret = item.valiate(this.rules[item.prop], this.forms[item.prop])
                if (!ret) {
                    legal = false
                }
            })
            return legal
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
.b-form {
    display: flex;
    flex-direction: column;
}
</style>

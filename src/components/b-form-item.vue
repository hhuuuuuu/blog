<template>
    <div class='b-form-item'>
        <label :class='classArray'
               :style='style'>{{label}}</label>
        <div class='b-form-item-content'>
            <slot>B-FROM-ITEM</slot>
            <span class='b-form-item-error'
                  v-if="error.show">{{error.message}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bFormItem',
    props: {
        width: {
            type: String,
            default: '80px'
        },
        position: {
            type: String,
            default: 'left'
        },
        prop: {
            type: String
        },
        label: {
            type: String
        }
    },
    data() {
        return {
            error: {}
        }
    },
    computed: {
        style() {
            return {
                width: this.width
            }
        },
        classArray() {
            const classRes = ['b-form-item-label']
            classRes.push(`b-form-item-label-${this.position}`)
            return classRes
        }
    },
    methods: {
        valiate(rule, value) {
            let legal
            if (!value) {
                legal = false
                this.error = {
                    show: true,
                    message: rule.message || 'error'
                }
                this.$children[0].handleError(legal)
            } else {
                legal = true
                this.error = {
                    show: false
                }
                this.$children[0].handleError(legal)
            }
            return legal
        }
    },
    mounted() {
        this.$bus.$emit('addFormItem', this)
    }
}
</script>

<style class='b-form-item' lang='scss'>
.b-form-item {
    display: flex;
    padding-bottom: 20px;
    .b-form-item-label {
        font-size: 14px;
        display: flex;
        align-items: center;
        padding-right: 12px;
        color: #606266;
    }
    .b-form-item-label-left {
        justify-content: flex-start;
    }
    .b-form-item-label-right {
        justify-content: flex-end;
    }
    .b-form-item-content {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .b-form-item-error {
        position: absolute;
        color: #f56c6c;
        font-size: 12px;
        top: 100%;
    }
}
</style>

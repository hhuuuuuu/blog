<template>
    <div class='b-input'>
        <input :type="type"
               class='b-input-inner'
               :placeholder='placeholder'
               :style="style"
               :value='value'
               @input='handleChange'>
    </div>
</template>

<script>
export default {
    name: 'bInput',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        width: {
            type: String,
            default: '180px'
        },
        value: {
            type: String
        }
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    data() {
        return {
            borderColor: ''
        }
    },
    methods: {
        handleError(legal) {
            this.borderColor = legal ? '' : 'red'
        },
        handleChange(e) {
            this.$emit('change', e.target.value)
        }
    },
    computed: {
        style() {
            return this.borderColor
                ? {
                    width: this.width,
                    borderColor: this.borderColor
                }
                : {
                    width: this.width
                }
        }
    }
}
</script>

<style lang='scss' scoped>
.b-input {
    font-size: 14px;
    .b-input-inner {
        width: 100%;
        border: 1px solid #dcdfe6;
        outline: none;
        transition: border-color 0.2s;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        font-size: inherit;
        color: #606266;
        padding: 0 15px;
        &:focus {
            border-color: #409eff;
        }
        &::-webkit-input-placeholder {
            color: #848fa0ec;
        }
        &::-moz-placeholder {
            color: #848fa0ec;
        }
        &:-moz-placeholder {
            color: #848fa0ec;
        }
        &:-ms-input-placeholder {
            color: #848fa0ec;
        }
    }
}
</style>

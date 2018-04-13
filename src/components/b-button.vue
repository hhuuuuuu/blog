<template>
    <div class='b-button'>
        <button @click='handleClick'>
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    name: 'bUpload',
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>
<style lang='scss' scoped>
.b-button {
    button {
        display: inline-block;
        cursor: pointer;
        background: #409eff;
        border: 1px solid #409eff;
        color: #ffffff;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }
}
</style>

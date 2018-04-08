<template>
    <div class='b-button'>
        <button>
            <slot></slot>
        </button>
    </div>
</template>
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

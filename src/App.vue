<template>
    <div id='app'>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style  lang="scss">
html,
body,
#app {
    min-height: 100%;
}
h1,
h2,
p {
    margin: 0;
    padding: 0;
}
div,
nav,
ul,
li,
input {
    box-sizing: border-box;
}

</style>

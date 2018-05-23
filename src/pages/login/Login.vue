<template>
    <div class="box">{{ title }}</div>
</template>

<script>
    export default {
        data() {
            return {
                title: '登录'
            }
        }
    }
</script>

<style lang="scss">
    $color: green;
    .box {
        background-color: $color;
        font-size: 12px;
    }
</style>
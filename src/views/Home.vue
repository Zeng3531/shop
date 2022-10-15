<template>
    <div>
        <el-button @click="romoveToken">退出登录</el-button>
    </div>
</template>

<script>
export default {

    methods: {
        romoveToken() {
            this.$store.state.token = ''
            this.$router.push('/login')
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
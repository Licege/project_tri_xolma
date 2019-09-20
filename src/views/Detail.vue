<template>
    <div>id {{this.$route.params.Pid}}</div>
</template>

<script>
    export default {
        name: "Detail",
        data() {
            return {
                prodId: this.$route.params.Pid
            }
        }
    }
</script>

<style scoped>

</style>
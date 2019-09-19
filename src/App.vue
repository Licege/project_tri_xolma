<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
  import MainLayout from "./layouts/MainLayout";
  import EmptyLayout from "./layouts/EmptyLayout"

  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty')+'-layout'
      }
    },
    components: {
      MainLayout, EmptyLayout
    }
  }
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: #2c3e50;
}
/*
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>

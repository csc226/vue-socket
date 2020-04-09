<template>
  <div id="app">
    <!-- <router-link to='/socketF'>发消息</router-link>
    <router-link to='/socketJ'>接收消息</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="stylus">
body,ul,li
  margin 0
  list-style none
  padding 0

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>

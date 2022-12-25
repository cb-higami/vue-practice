<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AAAA msg="Welcome to Your Vue.js App" test="aaaaaa"/>
  </div>
</template>

<script>
import AAAA from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    AAAA
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

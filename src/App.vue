<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar/TopBar'
export default {
    name: 'App',
    components: {
        TopBar
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

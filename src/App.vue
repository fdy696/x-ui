<template>
  <div id="app">
    <x-icon icon="download"></x-icon>
  </div>
</template>

<script>
import xIcon from './components/icon/icon.vue'

export default {
  name: 'App',
  components: {
    xIcon
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @main-color;
  font-size: 14px;
}
</style>

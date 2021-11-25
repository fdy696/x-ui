<template>
  <div id="app">
    <x-icon icon="download"></x-icon>
    <x-button></x-button>
    <x-button icon="download">下载</x-button>
    <x-button icon="download" icon-position="right">下载</x-button>
    <x-button loading>加载中...</x-button>
    <x-button disabled>禁用按钮</x-button>
  </div>
</template>

<script>
import xIcon from './components/icon/icon.vue'
import xButton from './components/button/button.vue'
export default {
  name: 'App',
  components: {
    xIcon,
    xButton
  },
  mounted() {
    import('./assets/iconfont.js')
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

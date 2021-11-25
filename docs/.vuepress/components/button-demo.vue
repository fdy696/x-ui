

<template>
  <div class="wrapper">
    <div>
      <x-button></x-button>
      <x-button icon="download">下载</x-button>
      <x-button icon="download" icon-position="right">下载</x-button>
      <x-button loading>加载中...</x-button>
      <x-button disabled>禁用按钮</x-button>
    </div>
  </div>
</template>
<script>
import xButton from '../../../src/components/button/button.vue'
export default {
  components: {xButton},
  data() {
    return {
      loading: true
    }
  },
  mounted () {
    import('../public/iconfont.js')
  },
}
</script>
<style>
div.wrapper {
  margin-top: 10px;
}
</style>
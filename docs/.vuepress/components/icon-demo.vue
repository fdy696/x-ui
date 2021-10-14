<template>
  <div class="wrapper">
    <div>
      <x-icon icon="download" style="width: 2rem;height: 2rem"></x-icon>
      <x-icon icon="awesome" style="width: 2rem;height: 2rem"></x-icon>
      <x-icon icon="loading" style="width: 2rem;height: 2rem"></x-icon>
      <x-icon icon="down" style="width: 2rem;height: 2rem"></x-icon>
      <x-icon icon="up" style="width: 2rem;height: 2rem"></x-icon>
    </div>
  </div>
</template>
<script>
import xIcon from '../../../src/components/icon/icon.vue'
import '../public/iconfont.js'
export default {
  components: {'x-icon': xIcon},
  data() {
    return {
      loading: true
    }
  }
}
</script>
<style scoped>
div.wrapper {
  margin-top: 10px;
}

.x-icon {
  border: 1px solid #bbb;
  border-radius: 4px;
}
</style>
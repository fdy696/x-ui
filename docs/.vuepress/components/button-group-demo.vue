

<template>
  <div class="wrapper">
    <div>
      <x-button-group>
        <x-button icon='left'>前进</x-button>
        <x-button icon='right' iconPosition="right">后退</x-button>
      </x-button-group>
    </div>
  </div>
</template>
<script>
import xButton from '../../../src/components/button/button.vue'
import xButtonGroup from '../../../src/components/button/button-group.vue'
import '../public/iconfont.js'
export default {
  components: {xButton, xButtonGroup},
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
</style>
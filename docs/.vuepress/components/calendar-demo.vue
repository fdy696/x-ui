

<template>
  <div class="wrapper">
    <x-calendar></x-calendar>
  </div>
</template>
<script>
import xCalendar from '../../../src/components/calendar/calendar.vue'
export default {
  components: {
    xCalendar
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
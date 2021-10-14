<template>
  <svg class="x-icon" aria-hidden="true">
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'x-icon',
  props: {
    icon: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.x-icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

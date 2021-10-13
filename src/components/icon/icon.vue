<template>
  <div class="x-icon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
  </div>
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
.icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

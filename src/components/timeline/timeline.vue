<template>
  <ul class="x-timeline">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'x-timeline'
}
</script>

<style lang="less">
li {
  &:last-child {
    .x-timeline-item__line::after {
      display: none;
    }
  }
}
</style>

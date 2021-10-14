<template>
  <div class="collapse__item">
    <div class="collapse__item__title" @click="toggle">
      <slot name="title"></slot>
      <x-icon icon="right" class="icon" :class="{ active: isOpen }"></x-icon>
    </div>
    <div class="collapse__item__content" :class="{ active: isOpen }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import xIcon from '../icon/icon.vue'
export default {
  components: {
    xIcon
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    isOpen() {
      return this.$parent.selected.includes(this.name)
    }
  },
  methods: {
    toggle() {
      if (this.isOpen) {
        this.$parent.onClose(this.name)
      } else {
        this.$parent.onOpen(this.name)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@color: #303133;
@border-radius: 4px;
@border-color: #ebeef5;
.collapse__item {
  margin-top: -1px;
  border-bottom: 1px solid @border-color;
  user-select: none;
  padding: 8px;
  &:first-child {
    border-top-left-radius: @border-radius;
    border-top-right-radius: @border-radius;
  }
  &:last-child {
    border-bottom-left-radius: @border-radius;
    border-bottom-right-radius: @border-radius;
  }
  > .collapse__item__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-weight: 500;
    .icon {
      transform: rotate(0);
      transition: transform 0.3s linear;
      &.active {
        transform: rotate(90deg);
      }
    }
  }
  > .collapse__item__content {
    outline: none;
    font-size: 14px;
    transition: max-height 0.38s;
    max-height: 0px;
    overflow: hidden;
    &.active {
      max-height: 500px;
    }
  }
}
</style>

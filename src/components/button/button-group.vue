<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<style lang="less">
@border-radius: 4px;
.button-group {
  display: inline-flex;
  vertical-align: middle;
  .x-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: @border-radius;
      border-bottom-left-radius: @border-radius;
    }
    &:last-child {
      border-top-right-radius: @border-radius;
      border-bottom-right-radius: @border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
    .icon {
      vertical-align: -2rem;
    }
  }
}
</style>

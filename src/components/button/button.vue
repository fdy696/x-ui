<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    class="x-button"
    :class="{ 'icon-right': iconPosition === 'right' }"
  >
    <x-icon icon="loading" class="loading" v-if="loading"></x-icon>
    <x-icon :icon="icon" v-if="icon && !loading"></x-icon>
    <div class="x-button-content"><slot>Button</slot></div>
  </button>
</template>

<script>
import xIcon from '../icon/icon.vue'
export default {
  name: 'XButton',
  components: {
    xIcon
  },
  mounted() {
    import('../../assets/iconfont.js')
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left', // 默认left
      validator(value) {
        return !(value !== 'left' && value !== 'right')
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@border-color-hover: #666;
@border-color: #999;
@border-color-light: lighten(@border-color, 30%);
@border-radius: 4px;
@box-shadow-color: rgba(0, 0, 0, 0.5);
@button-active-bg: #eee;
@button-bg: white;
@button-height: 32px;
@color: #606266;
@light-color: #333;
@font-size: 14px;
@small-font-size: 12px;
@input-height: 32px;
@red: #f1453d;
@grey: #eee;
@blue: #4a90e2;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.x-button {
  color: @color;
  font-size: @font-size;
  height: @button-height;
  padding: 0 0.9em;
  border-radius: @border-radius;
  border: 1px solid @border-color;
  background: @button-bg;
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  vertical-align: middle; // 必须加，否则一个会下降
  &:hover {
    color: @light-color;
    border-color: @border-color-hover;
    background-color: @button-bg;
  }
  &:active {
    background-color: @button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 0;
    margin-right: 0.1em;
  }
  > loading {
    order: 0;
  }
  > .x-button-content {
    order: 1;
  }
  &.icon-right {
    > .icon {
      order: 1;
      margin-left: 0.1em;
      margin-right: 0;
    }
    > .x-button-content {
      order: 0;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
  &:disabled {
    color: #c0c4cc;
    border-color: #ebeef5;
    cursor: not-allowed;
    &:hover {
      color: #c0c4cc;
    }
    &:active {
      background-color: transparent;
    }
  }
}
</style>

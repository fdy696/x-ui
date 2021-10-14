<template>
  <li class="x-timeline-item">
    <div class="x-timeline-item__line">
      <x-icon :icon="icon" v-if="icon"></x-icon>
      <span class="default__icon" v-else></span>
    </div>
    <section class="x-timeline-item__main">
      <time class="x-timeline-item__main__title"> <slot name="title" /> </time>
      <div class="x-timeline-item__main__content">
        <slot name="content"></slot>
      </div>
    </section>
  </li>
</template>

<script>
import xIcon from '../icon/icon.vue'
export default {
  name: 'x-timeline-item',
  components: {
    xIcon
  },
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.x-timeline-item {
  display: flex;
  .x-timeline-item__line {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10px;
    .default__icon {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      content: '';
      background: #bbb;
    }
    &::after {
      border-left: 1px solid #bbb;
      content: '';
      flex-grow: 1;
    }
  }
}

.x-timeline-item__main {
  display: flex;
  flex-direction: column;
  .x-timeline-item__main__title {
    font-weight: 500;
    margin-top: -1px;
  }
  .x-timeline-item__main__content {
    padding: 0.5rem;
    padding-bottom: 0.7rem;
  }
}
</style>

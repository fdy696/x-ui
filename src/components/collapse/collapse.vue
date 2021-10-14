<template>
  <div class="collapse">
    <div class="collapse__toggle--all" @click="toggleAll">
      <span>{{ text }}</span>
      <x-icon :icon="isAllOpen ? 'up' : 'down'"></x-icon>
    </div>
    <slot :selected="selected"></slot>
  </div>
</template>

<script>
import xIcon from '../icon/icon.vue'
export default {
  name: 'x-collapse',
  components: {
    xIcon
  },
  props: {
    selected: {
      type: Array,
      required: true
    },
    needAll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      names: [],
      isAllOpen: false
    }
  },
  computed: {
    text() {
      return this.isAllOpen ? '收起所有' : '展开所有'
    }
  },
  provide() {
    return {
      selected: this.selected
    }
  },
  mounted() {
    this.$children.forEach((child) => {
      child._props.name && this.names.push(child._props.name)
    })
  },
  methods: {
    onOpen(name) {
      const selected = [...this.selected, name]
      this.$emit('update:selected', selected)
    },
    onClose(name) {
      const selected = [...this.selected].filter((item) => item !== name)
      this.$emit('update:selected', selected)
    },
    toggleAll() {
      if (this.isAllOpen) {
        this.$emit('update:selected', [])
      } else {
        this.$emit('update:selected', [...this.names])
      }
      this.isAllOpen = !this.isAllOpen
    }
  }
}
</script>

<style lang="less" scoped>
.collapse__toggle--all {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #bbb;
  height: 40px;
  padding: 0 8px;
  cursor: pointer;
}
</style>

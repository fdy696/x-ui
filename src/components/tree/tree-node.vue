<template>
  <div class="tree__node">
    <template v-if="data.children && data.children.length">
      <span>{{ data.label }}</span>
      <x-tree-node v-for="item in data.children" :key="item.label" :data="item">
      </x-tree-node>
    </template>
    <template v-else>
      <div class="tree__node__main">
        <span class="tree__node__label">{{ data.label }}</span>
        <div class="tree__node--operate">
          <span @click="appendNode(data)">新增</span>
          <span @click="removeNode(data)">删除</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'xTreeNode',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  inject: ['eventBus'],
  methods: {
    appendNode(data) {
      this.eventBus.$emit('append', data)
    },
    removeNode(data) {
      this.eventBus.$emit('remove', data)
    }
  }
}
</script>

<style lang="less" scoped>
.tree__node {
  padding-left: 1rem;
}
.tree__node__main {
  display: flex;
  .tree__node__label {
    margin-right: 8px;
  }
}
.tree__node--operate {
  span {
    padding-right: 8px;
    color: #bbb;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>

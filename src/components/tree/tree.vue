<template>
  <div class="tree">
    <x-tree-node
      v-for="nodeData in data"
      :key="nodeData.label"
      :data="nodeData"
    >
    </x-tree-node>
  </div>
</template>

<script>
import xTreeNode from './tree-node.vue'
import Vue from 'vue'

function getNode(data, id) {
  const dfs = (node, parentNode) => {
    if (!node) return null
    if (node.id === id) {
      result = node
      parent = parentNode
      return
    }
    node.children &&
      node.children.forEach((item) => {
        item && dfs(item, node)
      })
  }
  let result = null
  let parent = null
  for (const key in data) {
    dfs(data[key], id)
    if (result) return { node: result, parent }
  }
  return { node: result, parent }
}

export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      eventBus: new Vue(),
      flatTreeData: null
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  created() {
    this.eventBus.$on('append', (data) => {
      this.$emit('append', data)
    })
    this.eventBus.$on('remove', (data) => {
      const { parent } = getNode(this.data, data.id)
      this.$emit('remove', data, parent)
    })
  },
  components: {
    xTreeNode
  }
}
</script>

<style lang="less" scoped>
.tree {
  margin-left: -1rem;
}

.append {
  display: inline-flex;
  border: 1px solid red;
}
</style>

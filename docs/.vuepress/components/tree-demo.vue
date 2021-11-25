<template>
  <div class="wrapper">
    <div>
      <x-tree :data="treeData" @append="append" @remove="remove"></x-tree>
    </div>
  </div>
</template>
<script>
let id = 999
import xTree from "../../../src/components/tree/tree.vue";
import xTreeNode from "../../../src/components/tree/tree-node.vue";
export default {
  components: {
    xTree,
    xTreeNode
  },
  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest" + id, children: [] ,parent: data};
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(data,parent) {
      console.log(data,parent)
      const children = parent.children ?? this.treeData
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
  },
  data() {
    return {
      treeData: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
      ],
    }
  }
}
</script>
<style>
div.wrapper {
  margin-top: 10px;
}
</style>
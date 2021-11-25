

<template>
  <div class="wrapper">
    <x-collapse :selected.sync="selected">
      <x-collapse-item name="1">
        <template v-slot:title>
          <span>一致性 Consistency</span>
        </template>
        <template v-slot:content>
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
        </template>
      </x-collapse-item>
      <x-collapse-item name="2">
        <template v-slot:title>
          <span>反馈 Feedback</span>
        </template>
        <template v-slot:content>
          控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
          页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
        </template>
      </x-collapse-item>
      <x-collapse-item name="3">
        <template v-slot:title>
          <span>效率 Efficiency</span>
        </template>
        <template v-slot:content>
          简化流程：设计简洁直观的操作流程；
          清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
        </template>
      </x-collapse-item>
      <x-collapse-item name="4">
        <template v-slot:title>
          <span>可控 Controllability</span>
        </template>
        <template v-slot:content>
          用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
        </template>
      </x-collapse-item>
    </x-collapse>
  </div>
</template>
<script>
import xCollapse from '../../../src/components/collapse/collapse.vue'
import xCollapseItem from '../../../src/components/collapse/collapse-item.vue'
export default {
  components: {
    xCollapse,
    xCollapseItem
  },
  data() {
    return {
      selected: ['1']
    }
  },
  mounted () {
    import('../public/iconfont.js')
  },
}
</script>
<style>
div.wrapper {
  margin-top: 10px;
}
</style>
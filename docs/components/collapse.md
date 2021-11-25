---
title: Collapse 折叠面板
---

# Collapse 折叠面板

### 基本使用

<ClientOnly>
 <collapse-demo/>
</ClientOnly>

### 示例代码：

```vue
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
```

# Attributes

|   参数   |         说明         |  类型   |   可选值    | 默认值 |
| :------: | :------------------: | :-----: | :---------: | :----: |
| selected |   当前展开的折叠项   |  Array  | 折叠项 name | ['1']  |
|   all    | 是否提供全部展开按钮 | Boolean | true、false |  true  |

# Collapse-item

| 参数 |     说明     |  类型  | 可选值 | 默认值 |
| :--: | :----------: | :----: | :----: | :----: |
| name | 当前项的标示 | String |   --   |   --   |

# Collapse-Item Slot

|  参数   |            说明            |
| :-----: | :------------------------: |
|  title  |  Timeline-Item title 内容  |
| content | Timeline-Item content 内容 |

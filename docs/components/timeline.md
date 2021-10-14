---
title: Timeline 时间轴
---

# Timeline 时间轴
#### 基本使用

<timeline-demo/>

#### 示例代码：

```vue
<x-timeline>
  <x-timeline-item icon="youlun">
    <template v-slot:title>
      渡轮
    </template>
    <template v-slot:content>
      渡轮用作运送乘客，可以称为客轮。
    </template>
  </x-timeline-item>
  <x-timeline-item icon="feiji">
    <template v-slot:title>
      飞机
    </template>
    <template v-slot:content>
      飞机是20世纪初最重大的发明之一，公认由美国人莱特兄弟发明。
    </template>
  </x-timeline-item>
  <x-timeline-item icon="gaotie">
    <template v-slot:title>
      高铁
    </template>
    <template v-slot:content>
      高铁一般指高速铁路。高速铁路，简称高铁，是指设计标准等级高、可供列车安全高速行驶的铁路系统。
    </template>
  </x-timeline-item>
  <x-timeline-item icon="yinshi">
    <template v-slot:title>
      饮食
    </template>
    <template v-slot:content>
      中华美食的八大菜系，即鲁、川、粤、闽、苏、浙、湘、皖流派。
    </template>
  </x-timeline-item>
</x-timeline>
```

# Timeline-Item

|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| icon | 设置内置的icon |    String | setting，info，left，right，download，loading，up，down| --

# Timeline-Item Slot

|参数| 说明 |
| :-------------: |:-------------:|
| title | Timeline-Item title内容 |
| content | Timeline-Item content内容 |
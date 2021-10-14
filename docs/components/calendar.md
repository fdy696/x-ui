---
title: Calender 日历组件
---
# Calender 日历组件


#### 基本使用

<button-demo/>

#### 示例代码：

```vue
<x-button></x-button>
<x-button icon="download">下载</x-button>
<x-button icon="download" icon-position="right">下载</x-button>
<x-button loading>加载中...</x-button>
<x-button disabled>禁用按钮</x-button>
```
#### 按钮组使用

<button-group-demo/>

#### 示例代码：

```vue
<x-button-group>
  <x-button icon='left'>前进</x-button>
  <x-button icon='right' iconPosition="right">后退</x-button>
</x-button-group>
```

# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| icon | 设置内置的icon |    String | setting，info，left，right，download，loading，up，down| --
|iconPosition|图标位置|String|left、right|left
| loading      | 加载状态      |  Boolean |true、false| false
| disabled     | 是否禁用      |  Boolean |true、false| false

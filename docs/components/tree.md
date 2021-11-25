---
title: Tree 树组件
---

# Tree 树组件

### 基本使用

<ClientOnly>
 <tree-demo/>
</ClientOnly>

### 示例代码：

```vue
<x-tree :data="treeData" @append="append" @remove="remove"></x-tree>
```

# Attributes

| 参数 |       说明       | 类型  | 可选值 | 默认值 |
| :--: | :--------------: | :---: | :----: | :----: |
| data | 设置 tree 的数据 | Array |   --   |   []   |

# Tree Events

|  参数  |      说明      |
| :----: | :------------: |
| append | 新增节点时触发 |
| remove | 删除节点时触发 |

```

```

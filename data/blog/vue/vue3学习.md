---
title: 工具、命令、代码片段
date: 2024/03/10
tags: ['常用']
summary: 常用的工具命令代码记录
---

# 3.2 新增 v-memo

新增了 `v-memo` 指令，它是一个用于优化计算属性的指令。`v-memo` 的作用是缓存计算结果，当依赖的数据没有发生变化时，可以直接返回缓存的结果，而不会重新计算。

**用法示例**：

```vue
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    const message = computed(() => {
      console.log('Calculating message...')
      return `Clicked ${count.value} times`
    })

    const updateMessage = () => {
      count.value++
    }

    return {
      message,
      updateMessage,
    }
  },
}
</script>
```

在上面的示例中，每次点击按钮时，`message` 计算属性都会重新计算。如果我们希望只有在 `count` 发生变化时才重新计算 `message`，可以使用 `v-memo` 指令。

**使用 `v-memo` 优化计算属性：**

```vue
<template>
  <div>
    <p v-memo:count="count">{{ message }}</p>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { memo } from 'vue'

export default {
  setup() {
    const count = ref(0)

    const message = memo(() => {
      console.log('Calculating message...')
      return `Clicked ${count.value} times`
    })

    const updateMessage = () => {
      count.value++
    }

    return {
      count,
      message,
      updateMessage,
    }
  },
}
</script>
```

**与计算属性的区别**

`v-memo` 指令和计算属性在 Vue 中都用于优化计算过程，但它们之间有一些区别。

**计算属性**：

1. **声明方式**：计算属性是通过 `computed` 函数声明的，通常在 `setup` 函数中使用。
2. **自动依赖追踪**：计算属性会自动追踪其内部用到的响应式数据，并且只有在依赖的响应式数据发生变化时才会重新计算。
3. **模板中的使用**：在模板中，可以直接像普通属性一样使用计算属性，Vue 会自动处理依赖跟踪和更新。

**v-memo 指令：**

1. **声明方式**：`v-memo` 是一个指令，通过在模板中使用 `v-memo:key="value"` 的形式来声明。需要在 `setup` 函数中手动创建 memo 对象。
2. **手动指定依赖**：与计算属性不同，`v-memo` 需要手动指定其依赖的数据。只有在指定的依赖数据发生变化时，`v-memo` 才会重新计算。
3. **更灵活**：相比计算属性，`v-memo` 更加灵活，可以手动控制缓存的条件，适用于一些特定场景的性能优化需求。

总的来说，计算属性适合自动依赖追踪的场景，而 `v-memo` 则更适合需要手动控制缓存条件的场景。根据具体的业务需求和性能优化要求，选择合适的方式来进行计算属性的优化。

# vue 内置指令

**[官方描述](https://cn.vuejs.org/api/built-in-directives.html#v-text)**

```js
1. `v-text`：显示文本内容。
2. `v-html`：渲染富文本内容。
3. `v-if`：条件渲染元素。
4. `v-else-if`：条件链中的 "else if" 块。
5. `v-else`：条件渲染结束。
6. `v-show`：根据条件显示或隐藏元素。
7. `v-on`（简写为 `@`）：绑定事件监听器。
8. `v-bind`（简写为 `:`）：动态绑定元素的属性。
9. `v-model`：实现双向数据绑定。
10. `v-for`：遍历数组或对象，并渲染相应元素。
11. `v-on` 修饰符：修改事件绑定行为。
12. `v-once`：只渲染一次，不再随数据变化。
13. `v-memo`：性能优化，缓存计算结果。
14. `v-pre`：跳过编译过程，显示原始 Mustache 标签。
15. `v-cloak`：在解析完成前隐藏元素，防止显示原始 Mustache 标签。
16. `v-slot`：具名插槽，传递内容给子组件。
17. `v-on:keyup.enter`：监听特定按键事件。
18. `v-on:click.stop`：阻止事件传播。
19. `v-bind:class` 和 `v-bind:style`：动态绑定类名和样式。
```

# 核心虚拟 Dom 和 diff 算法

---
title: pinia访问其他store的action报错
date: 2024/01/15
tags: [VueX, Vue3, pinia]
summary: 解决pinia初始化报错
---

## pinia 访问其他 store 的 action 报错：未初始化调用 getActivePinia()

### 报错信息

初步排查了报错原因：我在 useUserStore 里面调用的别的 store 的 action，就会导致报错未初始化。还有一个点就是我在路由导航 router.beforeEach 中使用了 useUserStore，取消调用就不报错。

```
pinia.js?v=e91dc4f7:1355 Uncaught Error: [🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.
    at useStore (pinia.js?v=e91dc4f7:1355:13)
    at tabs.ts:8:24
```

### 官网提及：在 `setup()` 外部使用 store

如果你需要在其他地方使用 store，你需要将[原本被传递给应用](https://pinia.vuejs.org/zh/ssr/#install-the-plugin) 的 `pinia` 实例传递给 `useStore()` 函数：

```
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

router.beforeEach((to) => {
  // ✅这会正常工作，因为它确保了正确的 store 被用于
  // 当前正在运行的应用
  const main = useMainStore(pinia)

  if (to.meta.requiresAuth && !main.isLoggedIn) return '/login'
})
```

### 解决方法：给每个 store 导出的传递 pinia 实例

```
import pinia from "@/stores";
export function useUserStore() {
  return useUserDefineStore(pinia);
}
```

---
title: 项目配置集成unocss指南
date: 2020/05/25
tags: [Vue3]
summary: vue3+vite+ts集成unocss
---

## 项目配置集成 unocss 指南

#### 什么是 UnoCSS？

Unocss 是一个基于 `Tailwind CSS`的工具 ，它通过静态分析 HTML 和 CSS 代码，自动消除未使用的样式，以减小生成的 CSS 文件大小。这个工具可以帮助开发者在使用 Tailwind CSS 进行开发时，避免将整个框架的样式都打包到最终的 CSS 文件中，而只保留实际使用到的样式，从而减少文件大小和加载时间。

使用 Unocss 可以让开发者更加高效地使用 Tailwind CSS，避免因为使用了大量未使用的样式而导致 CSS 文件过大的问题。它可以作为构建工具的一部分，用于在开发过程中自动优化样式文件，或者作为单独的工具来处理已有的 CSS 文件。

#### 为什么选择 UnoCSS

1. **按需生成样式**: UnoCSS 使用静态分析技术，只生成使用到的 CSS 样式。这意味着您无需手动管理和维护大量的样式文件，而只需编写实际需要的样式代码。这简化了样式管理，减少了样式冗余，并提高了开发效率。
2. **零运行时**: UnoCSS 是在构建阶段处理的工具，不需要 JavaScript 运行时。这意味着生成的 CSS 不会增加额外的客户端计算负担，从而提高页面加载速度并改善用户体验。
3. **易于集成和使用**: UnoCSS 可以与现有的构建工具（如 webpack、Vite 等）和前端框架（如 Vue、React 等）无缝集成。它提供了插件和配置选项，使您可以轻松地与您的项目集成，并根据您的需求进行自定义。
4. **高性能和快速**: UnoCSS 只生成使用到的样式，大大减少了 CSS 文件的大小，从而加快了页面加载速度。它还对样式表进行了优化，使其更紧凑和高效。
5. **开发者友好**: UnoCSS 提供了简洁的 API 和一致的类名命名规则，使得样式编写更加直观和易于理解。它还提供了实时预览和自动补全等功能，提升了开发效率。

#### 安装 UnoCSS

> 可以参考[官方网站](https://unocss.nodejs.cn/integrations/vite)来安装配置

```sh
npm install -D unocss
pnpm add -D unocss
yarn add -D unocss

"devDependencies": {
    "unocss": "^0.58.3"
 }
```

#### 配置 Vite

```js
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UnoCSS()],
})
```

#### 创建 `uno.config.ts` 文件

配置可以参考[官网](https://unocss.nodejs.cn/config/)

```ts
// 我的uno配置
import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { entriesToCss, toArray } from '@unocss/core'
import { darkTheme, lightTheme } from './themes'

// https://unocss.nodejs.cn/config/ 配置参考页面
export default defineConfig<Theme>({
  // 生成 CSS 工具的规则。 后来的条目具有更高的优先级。
  rules: [],
  // 自定义简写以提供自动补齐建议。 如果 values 是一个数组，它将与 | 连接并用 () 封装。
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  // 原始 CSS 注入。
  preflights: [
    {
      getCSS: () => {
        const returnCss: any = []
        // 明亮主题
        const lightCss = entriesToCss(Object.entries(lightTheme))
        const lightRoots = toArray([`*,::before,::after`, `::backdrop`])
        returnCss.push(lightRoots.map((root) => `${root}{${lightCss}}`).join(''))
        // 暗黑主题
        const darkCss = entriesToCss(Object.entries(darkTheme))
        const darkRoots = toArray([
          `html.dark,html.dark *,html.dark ::before,html.dark ::after`,
          `html.dark ::backdrop`,
        ])
        returnCss.push(darkRoots.map((root) => `${root}{${darkCss}}`).join(''))

        return returnCss.join('')
      },
    },
  ],
  theme: {
    colors: {
      'ui-primary': 'rgb(var(--ui-primary))',
      'ui-text': 'rgb(var(--ui-text))',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerCompileClass()],
  configDeps: ['themes/index.ts'],
})
```

#### 将 `virtual:uno.css` 添加到你的主入口中

```ts
// main.ts
import 'virtual:uno.css'
```

#### 运行项目验证

```html
<div class="pa h-full w-full bg-white">
  <div
    class="mx-auto max-w-sm space-y-2 rounded-xl bg-white py-8 px-8 shadow-lg sm:flex sm:items-center sm:space-y-0 sm:space-x-6 sm:py-4"
  >
    <img
      class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
      src="/src/assets/images/avatar.gif"
      alt="Woman's Face"
    />
    <div class="space-y-2 text-center sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg font-semibold text-black">Erin Lindford</p>
        <p class="font-medium text-slate-500">Product Engineer</p>
      </div>
      <button
        class="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Message
      </button>
    </div>
  </div>
</div>
```

![image-20240116153724018](https://iskr.gitee.io/pic/blog/image-20240116153724018.png)

#### 安装 VsCode 插件一起食用

![image-20240116153418715](https://iskr.gitee.io/pic/blog/image-20240116153418715.png)

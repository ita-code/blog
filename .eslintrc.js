module.exports = {
  // ESLint 根配置文件
  root: true,

  // 使用 @typescript-eslint/parser 解析器
  parser: '@typescript-eslint/parser',

  // 代码运行环境定义
  env: {
    browser: true, // 浏览器环境
    amd: true, // 支持 AMD 模块
    node: true, // 支持 Node.js 环境
    es6: true, // 支持 ES6 语法
  },

  // 配置所使用的插件
  plugins: ['@typescript-eslint'],

  // 继承的规则配置
  extends: [
    'eslint:recommended', // 推荐的 ESLint 规则
    'plugin:@typescript-eslint/eslint-recommended', // @typescript-eslint/eslint-plugin 推荐规则
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin 额外规则
    'plugin:jsx-a11y/recommended', // 针对可访问性的推荐规则
    'plugin:prettier/recommended', // Prettier 规则集集成到 ESLint
    'next', // Next.js 框架规则
    'next/core-web-vitals', // Next.js 核心 Web Vitals 规则
  ],

  // 解析器选项配置
  parserOptions: {
    project: true, // 使用 TypeScript 项目配置文件
    tsconfigRootDir: __dirname, // 项目根目录
  },

  // 各种规则的配置
  rules: {
    'prettier/prettier': 'error', // 启用 Prettier 并将格式错误作为错误报告
    'react/react-in-jsx-scope': 'off', // 在 JSX 文件中不需要导入 React 的规则关闭
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'], // 只允许 `Link` 组件作为有效的 anchor 元素
        specialLink: ['hrefLeft', 'hrefRight'], // 特殊的链接属性名
        aspects: ['invalidHref', 'preferButton'], // 异常 href 和首选按钮方面
      },
    ],
    'react/prop-types': 0, // 关于 PropTypes 的规则关闭
    '@typescript-eslint/no-unused-vars': 0, // 关于未使用的变量的规则关闭
    'react/no-unescaped-entities': 0, // 关于未转义实体的规则关闭
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 关于显式模块边界类型的规则关闭
    '@typescript-eslint/no-var-requires': 'off', // 关于 `require` 的规则关闭
    '@typescript-eslint/ban-ts-comment': 'off', // 关于 TypeScript 注释的规则关闭
  },
};

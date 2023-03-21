---
title: .prettierrc.json 文件配置
tags:
  - prettierrc
categories: 思米米的小笔记
date: 2023-03-21
updated: 2023-03-21
---

## .prettierrc.json 文件配置

```json
{
  // 每行代码的最大宽度
  "printWidth": 80,
  // 缩进的空格数
  "tabWidth": 2,
  // 是否使用制表符进行缩进
  "useTabs": false,
  // 是否在语句末尾添加分号
  "semi": true,
  // 是否使用单引号而不是双引号
  "singleQuote": false,
  // 对象字面量中属性名是否使用引号
  "quoteProps": "as-needed",
  // JSX属性值是否使用单引号
  "jsxSingleQuote": false,
  // 数组、对象等结尾是否添加逗号
  "trailingComma": "es5",
  // 是否在对象属性添加空格
  "bracketSpacing": true,
  // JSX标签的末尾标签是否与起始标签在同一行
  "jsxBracketSameLine": false,
  // 箭头函数的参数是否使用圆括号
  "arrowParens": "always",
  // 是否需要在文件顶部插入 @format 标识
  "requirePragma": false,
  // 是否需要在文件顶部插入 @format 标识
  "insertPragma": false,
  // 是否缩进Vue文件中的脚本和样式标签
  "vueIndentScriptAndStyle": false,
  // 是否保留Markdown文本的换行符
  "proseWrap": "preserve"
}

```
<!-- more -->

### 以下是对每个选项的详细说明：

`printWidth`：指定每行代码的最大宽度。默认为 80。
`tabWidth`：指定一个制表符等于多少个空格。默认为 2。
`useTabs`：指定是否使用制表符代替空格缩进。默认为 false。
`semi`：指定是否在语句末尾添加分号。默认为 true。
`singleQuote`：指定是否使用单引号而不是双引号。默认为 false。
`quoteProps`：指定对象属性名称是否使用引号。可以是 “as-needed”、true 或 false。默认为 “as-needed”。
`jsxSingleQuote`：指定 JSX 属性是否使用单引号而不是双引号。默认为 false。
`trailingComma`：指定是否在数组和对象字面量的末尾添加逗号。可能的值是 “none”、“es5”（在 ES5 中有效）和 “all”。默认为 “es5”。
`bracketSpacing`：指定是否在对象字面量中的括号之间添加空格。默认为 true。
`jsxBracketSameLine`：指定是否将多行 JSX 元素的末尾括号放在同一行上。默认为 false。
`arrowParens`：指定箭头函数参数是否永远使用圆括号。可以是 “always”、“avoid”、或 “as-needed”。默认为 “always”。
`requirePragma`：指定是否需要在文件顶部添加 `// @format` 注释才会格式化。默认为 false。
`insertPragma`：指定是否在文件顶部插入 `// @format` 注释。默认为 false。
`vueIndentScriptAndStyle`：指定是否单独缩进 Vue 组件中的 `<script>` 和 `<style>` 标签。默认为 false。
`proseWrap`：指定如何处理文本节点的换行。可以是 “preserve”、“always” 或 “never”。默认为 “preserve”。



> 这里列出了常用的 Prettier 配置选项。如果您需要更多选项，请查阅 Prettier 文档。同时，请注意，不同的编辑器和 IDE 可能有不同的方法来指定配置选项。
>
> 您可以根据项目需求自定义这些选项的值，以达到满足您的代码风格要求。如果您想了解更多有关 `.prettierrc.json` 文件的信息，请参考 [Prettier](https://prettier.io/) 文档。
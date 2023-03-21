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
  "printWidth": 80, // 指定代码行的最大宽度，超过这个宽度会自动换行
  "tabWidth": 2, // 指定一个 tab 键应该代表几个空格宽度
  "useTabs": false, // 是否使用 tab 键缩进代码
  "semi": false, // 是否在语句末尾添加分号
  "singleQuote": true, // 是否使用单引号
  "quoteProps": "as-needed", // 对象字面量中是否将 key 值用引号括起来（as-needed 表示只在必要时添加引号）
  "jsxSingleQuote": false, // 在 JSX 中是否使用单引号
  "trailingComma": "es5", // 控制对象和数组字面量中是否添加尾随逗号
  "bracketSpacing": true, // 是否在对象字面量中的括号前后添加空格
  "jsxBracketSameLine": false, // 在 JSX 中是否将闭合标签放在同一行
  "arrowParens": "always", // 箭头函数参数是否添加括号
  "requirePragma": false, // 是否在文件顶部添加 @format 注释，以表明这个文件已经被 Prettier 格式化过了
  "insertPragma": false, // 是否在文件顶部插入 @format 注释
  "vueIndentScriptAndStyle": false, // 是否在 Vue 文件中缩进 script 和 style 标签
  "proseWrap": "preserve" // 控制是否将 markdown 文件的文本换行（preserve 表示保留原格式）
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

---
title: CSS设置字体
tags:
  - CSS
categories: 思米米的小笔记
date: 2022-05-20
updated: 2022-05-20
---


## CSS初始化字体

```
@font-face {
  font-family: Emoji;
  src: local("Apple Color Emojiji"), local("Segoe UI Emoji"), local("Segoe UI Symbol"), local("Noto Color Emoji");
  unicode-range: U+1F000-1F644, U+203C-3299;
}
body {
  font-family: system-ui, —apple-system, Segoe UI, Rototo, Emoji, Helvetica, Arial, sans-serif;
}​
```
<!-- more -->

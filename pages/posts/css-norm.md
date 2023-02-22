---
title: CSS规范
tags:
  - CSS
categories: 思米米的小笔记
date: 2022-06-01 14:51:55
updated: 2022-06-01 14:51:55
---

## CSS规范

### CSS书写顺序

> 1. 位置属性(position, top, right, z-index, display, float等)
> 2. 大小(width, height, padding, margin)
> 3. 文字系列(font, line-height, letter-spacing, color- text-align等)
> 4. 背景(background, border等)
> 5. 其他(animation, transition等)

```css
*** Bad ***
.example {
    color: red;
    z-index: -1;
    background-color: #9e0;
    display: inline-block;
    font-size: 1.5em;
}

*** Good ***
.example {
    z-index: -1;
    display: inline-block;
    font-size: 1.5em;
    background-color: #9e0;
}
```

<!-- more -->

### 书写规范

> #### 使用CSS缩写属性
>
> CSS有些属性是可以缩写的，比如padding,margin,font等等，这样精简代码同时又能提高用户的阅读体验。

```css
*** Bad ***
.box {
	border-top-style: none;
    font-family: serif;
    font-size: 100%;
    line-height: 1.6;
    padding-bottom: 2em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0;
}
*** Good ***
.box {
    border-top: 0;
    font: 100%/1.6 serif;
    padding 0 1em 2em;
}
```

> #### 去掉小数点前的“0”

```css
*** Bad ***  	font-size: 0.8em;
*** Good ***	font-size: .8em;
```

> #### 简写命名
>
> 很多用户都喜欢简写类名，但前提是要让人看懂你的命名才能简写哦！

```css
*** Bad ***
.navigation {
	margin: 0 0 1em 2em;
}
.atr {
	color: #93c;
}
*** Good ***
#nav {
    margin: 0 0 1em 2em;
}
.author {
    color: #93c;
}
```

> #### 16进制颜色代码缩写
>
> 有些颜色代码是可以缩写的，我们就尽量缩写吧，提高用户体验为主。

```css
*** Bad ***		color: #eebbcc;
*** Good ***	color: #ebc;
```

> #### 连字符CSS选择器命名规范
>
> 1. 长名称或词组可以使用中横线来为选择器命名。
>
> 2. 不建议使用“_”下划线来命名CSS选择器，为什么呢？
>
> - 输入的时候少按一个shift键；
>
> - 浏览器兼容问题 （比如使用_tips的选择器命名，在IE6是无效的）
>
> - 能良好区分JavaScript变量命名（JS变量命名是用“_”）

```css
*** Bad ***
.maintitle {
	color: #e3c;
}
.main_title {
	color: #e3c;
}
*** Good ***
.main-title{
	color: #e3c;
}
```

> #### 不要随意使用id
>
> id在JS是唯一的，不能多次使用，而使用class类选择器却可以重复使用，另外id的优先级优先与class，所以id应该按需使用，而不能滥用。

```css
*** Bad ***
#info-title {
	font-size: 3em;
}
*** Good ***
.info-title {
	font-size: 3em;
}
```

> #### 为选择器添加状态前缀
>
> 有时候可以给选择器添加一个表示状态的前缀，让语义更明了，比如下图是添加了“.is-”前缀。

```css
*** Bad ***
.error {
	background-color: red;
}
*** Good ***
.is-error {
	background-color: red;
}
```

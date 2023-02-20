---
title: 一行代码禁止页面复制、右键
tags:
  - JavaScript
  - 前端
categories:
  - 思米米的小笔记
date: 2022-04-03 13:56:38
updated: 2022-04-03 13:56:38
---

找到 html 文件的`</head>`标签,在`</head>`前面加如下代码就行了！

<!-- more -->

## 一行代码禁止页面复制、右键

```html
//禁止用户复制
<style type="text/css">
	body {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
</style>

// 禁止用户右键
<script langauge="javascript">
	document.oncontextmenu = function (e) {
		return false
	}
</script>
```

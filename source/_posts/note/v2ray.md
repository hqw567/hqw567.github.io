---
title: 使用v2rayN代理Git、PowerShell、CMD的设置
tags: v2ray
categories: 思米米的小笔记
date: 2022-05-17 16:52:12
updated: 2022-05-17 16:52:12
---


## git 命令设置代理

- 设置永久有效

```
git config --global https.proxy http://127.0.0.1:10809
git config --global https.proxy https://127.0.0.1:10809
git config --global http.proxy 'socks5://127.0.0.1:10808'
git config --global https.proxy 'socks5://127.0.0.1:10808'
git config --global --list	#查询代理设置
```
<!-- more -->
## PowerShell 代理设置

- 设置仅本次有效

```
env:HTTP_PROXY="127.0.0.1:10809
$env:HTTPS_PROXY="127.0.0.1:10809
```

## CMD 代理设置

- 设置内容仅本次有效

```
set HTTP_PROXY=127.0.0.1:10809
set HTTPS_PROXY=127.0.0.1:10809
```

## v2rayN下载 https://github.com/2dust/v2rayN/releases
- [v2rayN(Windows客户端)](https://github.com/2dust/v2rayN/releases)
- [v2rayNG(Android App)](https://github.com/2dust/v2rayNG/releases)
---
layout: post
tags:
  - Git
  - Proxy
categories:
  - 思米米的小笔记
title: 给Git和NPM代理加速
date: 2023-05-26 13:51:23
---

开发中不开 Git 和 Node.js，由于某些东西经常抽风，在国内有时候 Git 连接 Github 和 Node.js 使用 NPM 包管理器变得不那么容易，但是如果我们自备小飞机的话就可以让 Git 和 NPM 走本地代理，速度直接起飞😎

<!-- more -->


## 给Git和NPM代理加速

查看本地代理
Clash 是目前 Windows 上最好用的 Vmess/Clash 协议代理工具（确信），下面以 Clash for Windows 为例（其他 V2/Clash/SS/SSR 代理工具同理）


Clash 主界面可以直观看到本地 HTTP 代理和 Socket5 代理的端口，注意下，后面要用的

![](https://img.simimi.cn/img/posts/202305261402938.png)


### 配置 Git 本地代理


#### 配置HTTP 代理

>Git 默认的 HTTP 代理应设置为：(其中 server 是服务器地址，port是代理端口)

``` shell
git config --global http.proxy http://server:port
git config --global https.proxy http://server:port
```

以我的本地代理端口为例，在 Git bash/Windows 终端下输入下面命令回车


```shell
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
```


#### 取消HTTP 代理

>如果哪天需要取消代理，在 Git bash/Windows 终端下输入下面命令回车即可：

```shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```


### 配置本地 NPM 代理

#### HTTP 代理

>默认的 HTTP 代理应设置为：(其中 server 是服务器地址，port是代理端口)

```shell
npm config set proxy http://server:port
npm config set https-proxy http://server:port
```

以我的本地代理端口为例，在 Git bash/Windows 终端下输入下面命令回车

```shell
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890
```
这时本地的 NPM 的 HTTP 代理设置已经完成

#### 取消 NPM 代理

```shell
npm config delete proxy
npm config delete https-proxy
```


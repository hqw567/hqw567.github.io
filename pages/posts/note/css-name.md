---
title: CSS命名参考
tags:
  - CSS
categories: 思米米的小笔记
date: 2022-06-01 14:52:09
updated: 2022-06-01 14:52:09
---

## CSS命名参考

### 页面结构命名

```
page  // 代表整个页面，用于最外层。
wrap  // 外套，将所有元素包在一起的一个外围包，用于最外层
wrapper  // 页面外围控制整体布局宽度，用于最外层
container  // 一个整体容器，用于最外层
head|header  // 页头区域，用于头部
nav  // 导航条
content  // 内容，网站中最重要的内容区域，用于网页中部主体
main  // 网站中的主要区域（表示最重要的一块位置），用于中部主体内容
column  // 栏目
sidebar  // 侧栏
foot|footer  // 页尾、页脚。网站一些附加信息放置区域，（或命名为 copyright）用于底部
```

<!-- more -->

### 导航命名

```
nav|navbar|navigation|nav-wrapper  // 导航条或导航包，代表横向导航
topnav  // 顶部导航
mainbav  // 主导航
subnav  // 子导航
sidebar  // 边导航
leftsidebar|sidebar-l  // 左导航
rightsidebar|sidebar-r  // 右导航
title  // 标题
subtitle  // 二级标题
summary  // 摘要
menu  // 菜单，区域包含一般的链接和菜单
submenu  // 子菜单
drop  // 下拉
dorpmenu  // 下拉菜单
links  // 链接菜单
```

### 功能命名

```
logo  // 标记网站logo标志
banner  // 标语、广告条、顶部广告条
login  // 登陆，（例如: 登录表单 form-login）
loginbar  // 登录条
text  // 文本
register  // 注册
tool|toolbar  // 工具条
search  // 搜索
searchbar  // 搜索条
searchlnput  // 搜索输入框
shop  // 功能区，表示现在的
icon  // 小图标
label  // 商标
homepage  // 首页
subpage  // 二级页面子页面
hot  // 热门热点
list  // 文章列表，（例如: 新闻列表 list-news）
scroll  // 滚动
tab  // 标签
sitemap  // 网站地图
msg|message  // 提示信息
current  // 当前的
joinus  // 加入
status  // 状态
btn  // 按钮，（例如: 搜索按钮可写成  btn-search）
tips  // 小技巧
note  // 注释
guild  // 指南
arr|arrow  // 标记箭头
service  // 服务
breadcrumb  // 页面所处位置导航提示
download  // 下载
vote  // 投票
news  // 新闻
siteinfo  // 网站信息
partner  // 合作伙伴
friendlink  // 友情链接
copyright  // 版权信息
siteinfoCredits  // 信誉
siteinfoLegal  // 法律信息
```

### 状态命名

```
primary // 主要
inof // 提示信息
success // 成功
warning // 一般警告
error // 错误警告
danger // 严重警告
link // 文字链接
plain|ghost // 按钮是否镂空
light // 亮模式
dark // 暗模式
disable // 禁用
active // 激活
checked // 选中
loading // 加载中
```

### 关系命名

```
first // 第一个
last // 最后一个
prev // 上一个
current // 当前项
next // 下一个
forward // 向前
back // 向后
```

### 尺寸命名

```
large // 大
middle // 中
small // 小
mini // 迷你
```

### 位置

```
top // 上
bottom // 下
left // 左
right // 右
center // 居中
```



### CSS 样式文件名

```
index.css //  一般用于首页建立样式
head.css //  头部样式，当多个页面头部设计风格相同时使用。
base.css //  共用样式。
style.css // 独立页面所使用的样式文件。
global.css // 页面样式基础，全局公用样式，页面中必须包含。
layout.css // 布局、版面样式，公用类型较多时使用，一般用在首页级页面和产品类页面中
module.css // 模块，用于产品类页，也可与其它样式配合使用。
master.css // 主要的样式表
columns.css // 专栏样式
themes.css // 主体样式
forms.css // 表单样式
mend.css // 补丁，基于以上样式进行的私有化修补。
print.css // 打印
```

### 注意事项

```
// 使用BEM命名约定，块（block）、元素（element）、修饰符（modifier）

.my-btn {}

.my_btn--primary {}

.my_btn--success {}

.my-btn__inner {}
```

### 注释规范

```
1）文件顶部注释（推荐使用）
   /*
    * @description: 说明
    * @author: 张三
    * @update: zhangsan (2021-04-13 18:32)
    */

2）模块注释
    /* module: module1 by 张三 */
    …
    /* module: module2 by 张三 */
    // 模块注释必须单独写在一行

3）单行注释
    /* this is a short comment */

4）多行注释
   /*
    * this is comment line 1.
    * this is comment line 2.
    */

5）特殊注释

    /* TODO: xxxx by name 2022-06-01 18:32 */
    //用于标注修改、待办等信息

6）区块注释
    /* Header */
    /* Footer */
    /* Gallery */
    // 对一个代码区块注释（可选），将样式语句分区块并在新行中对其注释。
```

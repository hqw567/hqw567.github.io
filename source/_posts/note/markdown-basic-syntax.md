---
title: Markdown语法的基本使用
date: 2022-02-08 19:33:03
update: 2022-02-08 19:33:03
tags:
  - Markdown
categories:
  - 思米米的小分享
---

.md 即 markdown 文件的基本常用编写语法,是一种快速标记、快速排版语言，现在很多前段项目中的说明文件 readme 等都是用.md 文件编写的，而且很多企业也在在鼓励使用这种编辑方式，特别作为一个前端从业者更要学会使用这种语言。下面就简单和大家分享一些.md 基本语法

<!-- more -->

## 一、基本符号：\* - + . >

基本上所有的 markdown 标记都是基于这四个符号或组合，需要注意的是，如果以基本符号开头的标记，注意基本符号后有一个用于分割标记符和内容的空格。

## 二、标题

前面带#号，后面带文字，分别表示 h1-h6,只到 h6，而且 h1 下面会有一条横线。

```
   # 一级标题
   ## 二级标题
   ### 三级标题
   #### 四级标题
   ##### 五级标题
   ###### 六级标题
```

tip：符号后面要带空格，不然 MD 语法不生效。

## 三、列表

### 无序列表

```
    + a
    + b
    + c

    - d
    - e
    - f

    * g
    * h
    * i
```

- a
- b
- c

* d
* e
* f

- g
- h
- i

以上三种形式，效果都是一样的，大家选择适合自己的就好了。

### 有序列表

```
    正常
    1. a
    2. b
    3. c

    错序
    2. a
    3. b
    5. c
```

1. a
2. b
3. c

4. a
5. b
6. c

注意，数字后面的点只能是英文的点，有序列表的序号是根据第一行列表的数字顺序来的，错序列表的序号本来是序号是乱的， 但是还是显示 2 3 5

### 嵌套列表

列表可以嵌套，使用时在嵌套列表前按 tab 或 空格 来缩进,去控制列表的层数

```
    + a
    + b
    + c

        - d
        - e
        - f

            * g
            * h
            * i
```

- a
- b
- c

  - d
  - e
  - f

    - g
    - h
    - i

## 四、引用说明区块

对某个部分做的内容做一些说明或者引用某某的话等，可以用这个语法。

### 正常形式

```
> 引用内容、说明内容。在语句前面加一个 > ，注意是英文的那个右尖括号，注意空格，引用因为是一个区块，理论上是应该什么内容都可以放，比如说：标题，列表，引用等等。
```

> 引用内容、说明内容。在语句前面加一个 > ，注意是英文的那个右尖括号，注意空格，引用因为是一个区块，理论上是应该什么内容都可以放，比如说：标题，列表，引用等等。

### 嵌套区块

这里我只介绍一下我常用的方法，也是个人认为比较规范的一种方法，就是给区块的下一级区块多加一个右尖括号

```
> 一级引用
>> 二级引用
>>> 三级引用
>>>> 四级引用
>>>>> 五级引用
>>>>>> 六级引用
```

> 一级引用
>
> > 二级引用
> >
> > > 三级引用
> > >
> > > > 四级引用
> > > >
> > > > > 五级引用
> > > > >
> > > > > > 六级引用

## 五、代码块

在发布一些技术文章会涉及展示代码的问题，这时候代码块就显得尤为重要。

少量代码，单行使用，直接用`包裹起来就行了

```
` shaoliangdaima,danhangshiyong `
```

`shaoliangdaima,danhangshiyong`

大量代码，需要多行使用，用```包裹起来

````
    ```
        daliangdaima,xuyaoduohangshiyong

        daliangdaima,xuyaoduohangshiyong

        daliangdaima,xuyaoduohangshiyong

        daliangdaima,xuyaoduohangshiyong

        daliangdaima,xuyaoduohangshiyong
    ```

````

```
        daliangdaima,xuyaoduohangshiyong

        daliangdaima,xuyaoduohangshiyong

        daliangdaima,xuyaoduohangshiyong

        daliangdaima,xuyaoduohangshiyong

        daliangdaima,xuyaoduohangshiyong

```

## 六、链接

### 行内式

链接的文字放在[]中，链接地址放在随后的()中，链接也可以带 title 属性，链接地址后面空一格，然后用引号引起来

```
[链接名称](链接地址)

[思米米](https://www.simimi.cn"欢迎"),是一分享各类技术的博客，欢迎大家访问、收藏。

或

<链接地址>
```

[思米米](https://www.simimi.cn"欢迎"),是一分享各类技术的博客，欢迎大家访问、收藏。
<br/>
<https://www.simimi.cn>
<br/>

### 参数式

```
[about]: https://www.simimi.cn/about "思米米的about"
[archives]: https://www.simimi.cn/archives "归档"
[categories]: https://www.simimi.cn/categories "分类"
[中文]: https://www.simimi.cn "思米米"

这里是[about],这是[archives],这是[categories],还支持中文[中文]
```

[about]: https://www.simimi.cn/about '思米米的about'
[archives]: https://www.simimi.cn/archives '归档'
[categories]: https://www.simimi.cn/categories '分类'
[中文]: https://www.simimi.cn '思米米'

这里是[about],这是[archives],这是[categories],还支持中文[中文]

## 七、图片

### 行内式

    + 开头一个感叹号 !
    + 接着一个方括号，里面放上图片的替代文字
    + 接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的 'title' 属性的文字。

```
![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")
```

![思米米](http://static.runoob.com/images/runoob-logo.png)

![思米米](http://static.runoob.com/images/runoob-logo.png 'alt属性')

### 参数式

```
[simimi]: http://static.runoob.com/images/runoob-logo.png

参数式图片，这里是![simimi]
```

[simimi]: http://static.runoob.com/images/runoob-logo.png

参数式图片，这里是![simimi]

用法跟链接的基本一样，唯一的不同就是，图片前面要写一个！（这是必须的），没什么好说的

## 八、分割线

分割线可以由\* - \_（星号，减号，底线）这 3 个符号的至少 3 个符号表示，注意至少要 3 个，且不需要连续，有空格也可以

```
---

- - -

------

***

* * *

******

___

_ _ _

______
```

---

---

---

---

---

---

---

---

---

## 九、Markdown 高级技巧

### 强调字体

一个星号或者是一个下划线包起来，会转换为倾斜，如果是 2 个，会转换为加粗

```
*md*   

**md**

_md_ 

__md__
```

_md_

**md**

_md_

**md**

### 转义

基本上和 js 转义一样,\加需要转义的字符

```
\\

\*

\+

\-

\`

\_
```

\\

\*

\+

\-

\`

\_

### 删除线

用~~把需要显示删除线的字符包裹起来

```
~~删除~~
```

~~删除~~

### 支持的 HTML 元素

不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。

目前支持的 HTML 元素有：

```
<kbd> <b> <i> <em> <sup> <sub> <br>
```

使用<kbd>Ctrl</kbd>+<kbd>D</kbd> 收藏本页面

## 十、表格

```
|表头|表头|表头|
|:-|:-:|-:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|

|表头|表头|表头|
|:---|:---:|---:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|

表头|表头|表头
:-|:-:|-:
abc|bcd|cde
abc|bcd|cde
abc|bcd|cde
```

| 表头 | 表头 | 表头 |
| :--- | :--: | ---: |
| abc  | bcd  |  cde |
| abc  | bcd  |  cde |
| abc  | bcd  |  cde |

<br/>
|表头|表头|表头|
|:---|:---:|---:|
|abc|bcd|cde|
|abc|bcd|cde|
|abc|bcd|cde|
<br/>
表头|表头|表头
:-|:-:|-:
abc|bcd|cde
abc|bcd|cde
abc|bcd|cde

上面三个例子的效果一样，由此可得：

1. 表格的格式不一定要对的非常起，但是为了良好的变成风格，尽量对齐是最好的

2. 分割线后面的冒号表示对齐方式，写在左边表示左对齐，右边为右对齐，两边都写表示居中

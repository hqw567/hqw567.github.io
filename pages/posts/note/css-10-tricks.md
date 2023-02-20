---
title: 10个CSS小技巧
tags:
  - CSS
  - 前端
categories:
  - 思米米的小笔记
date: 2022-02-10 21:22:39
updated: 2022-02-11 21:22:39
---
一个成功的Web App必须有良好的用户体验。当我们谈及改善用户体验时，你会想到什么？

其实，有一点是很容易被开发者忽视的，那就是CSS。我们可以使用一些CSS技巧来改善网页的表现形式、交互细节和可访问性。

而且这些技巧不需要花费太多时间，也不需要消耗服务器资源。你只需要花两个小时学习，然后就可以把它应用到你所有的项目中，并永远改善用户体验。

<!-- more -->
## 可点击区域

有时你的按钮很小，这可能导致用户无法准确点击按钮。这种现象经常发生在移动端上。如果用户点击次数太多，没有点击他们想要的按钮，或者点击错误的按钮，会让他们感到非常沮丧。

那么，如何解决这个问题呢？有些开发者可能会说：把按钮做大点。

但网页中元素的大小往往是固定的，我们不能轻易调整一个元素的大小。而且如果按钮太大，感觉很奇怪。

一个更好的解决方案是在不改变按钮原始尺寸的情况下增加其可点击区域。具体来说：我们可以使用伪元素来增加一个元素的可点击区域。

例如，这里有一个按钮。

`<button id="btn">btn</button>`

然后我们可以为它添加一个伪类。

```
#btn::before {
 content: "";
 position: absolute;
 top: -20px;
 right: -20px;
 bottom: -20px;
 left: -20px;
}
```

这时，如果我们点击按钮周围的区域，我们仍然可以触发按钮的点击事件。

![](https://image-static.segmentfault.com/288/681/2886819424-61fbdc0573521)

事例地址：

[https://codepen.io/bytefishme...](https://codepen.io/bytefishmedium/pen/rNYNoRX)

## 平滑滚动

当页面被`#`链接滚动时，默认效果是这样的。

![](https://image-static.segmentfault.com/195/723/1957235309-61fbdc5eb3871)

这种突然的跳跃会让人感到不舒服。为了解决这个问题，我们可以使用这个CSS样式：`sroll-behavior: smooth`。

![](https://image-static.segmentfault.com/220/773/22077344-61fbdc8dc63c4)

事例地址：[https://codepen.io/bytefishme...](https://codepen.io/bytefishmedium/pen/NWwWoKL)

## 选择所有文本

我们的网页经常需要提供一些内容供用户选择，如电话号码、地址、标题等。而这些文字应该是一个整体，我们希望当用户点击部分文字时，剩余的文字会被自动选择。

![](https://image-static.segmentfault.com/331/165/3311656029-61fbdd15ab86f)

要实现这种效果非常简单，只需使用这个CSS样式：`user-select: all` 。用户选择的CSS属性控制用户是否可以选择文本。如果它的值是 `all`，意味着一个元素的所有内容都将被原子化地选择。

事例地址：[https://codepen.io/bytefishme...](https://codepen.io/bytefishmedium/pen/xxPxMZO)

如果你想在文本被选中后添加一些额外的样式，你可以使用`::selection` 。`::selection` CSS伪元素将样式应用于文档中被用户突出显示的部分（比如在文本上点击和拖动鼠标）。

但要记住。只有某些CSS属性可以和`::selection`一起使用。

- `color`
- `background-color`
- `text-decoration` 及其相关属性
- `text-shadow`
- `stroke-color`, `fill-color` 和 `stroke-width`

事例地址：[https://codepen.io/bytefishme...](https://codepen.io/bytefishmedium/pen/gOXOqMz)

## Cursor

在不同的场景下使用不同的鼠标样式可以帮助读者感知页面的当前状态，从而改善用户的互动体验。

`cursor` CSS属性设置鼠标指针在一个元素上时要显示的鼠标指针（如果有的话）。

光标设置应该告知用户在当前位置可以进行的鼠标操作，包括文本选择、激活帮助或上下文菜单、复制内容、调整表格大小，等等。你可以用一个关键词来指定光标的类型，或者加载一个特定的图标来使用（有可选的回退图像和强制性的关键词作为最后的回退）。

例如：

![](https://image-static.segmentfault.com/428/062/4280629731-61fbe2543890a)

事例地址：[https://codepen.io/bytefishme...](https://codepen.io/bytefishmedium/pen/bGYGzRz)

有很多光标样式，你可以在[MDN文档中](https://link.segmentfault.com/?enc=V%2Fotb5rq2HJW21Z3aXTpkA%3D%3D.ahbw%2FLeOtPx8hQ7c5L%2FUBi6%2BYvNeQ%2B1QN3zkDsD7xtaCH7QBaaJL9bZr2BvCZRdtQnFGGVinPypVBrA1Q%2B%2F4Og%3D%3D)找到它们。

## Text Overflow

现在我们来看看 text-overflow 的问题。如果一个文本容器的内容是从服务器返回的，或者是由用户输入的，那么就很难预测这个文本会有多长。

如果没有任何预防措施，你可能会写出这样的代码。

```
<head>
  <style>
    .container{
      border: 2px solid red;
      width: 200px;
      height: 60px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="username">bytefish</div>
    <p class="profile">FE, UX Designer</p>
  </div>
</body>
```


![imagepng](https://image-static.segmentfault.com/106/600/1066002620-61fbe36d40ba7_fix732 "image.png")

这个容器有一个固定的宽度和高度，包裹着名字和介绍。

但如果有些用户的简介太长，就会导致文本溢出容器，使页面看起来很糟糕。

![imagepng](https://image-static.segmentfault.com/199/774/199774605-61fbe3b0dd288_fix732 "image.png")

在这一点上，我们可以将溢出的文本折叠起来。做到这一点就像添加三行CSS样式一样简单。

```
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

`white-space: nowrap`; 可以使文本不被包起来。然后我们使用`overflow: hidden`来隐藏溢出的文本。最后，我们使用 `text-overflow: ellipsis` 在文本的末尾添加一个圆点，向用户表明有一些隐藏的文本。

![imagepng](https://image-static.segmentfault.com/178/308/1783085763-61fbe60313844_fix732 "image.png")

事例地址：[https://codepen.io/bytefishme...](https://codepen.io/bytefishmedium/pen/VwrwgdQ)

## Image

现在我们来讨论一下图片的风格。网络应用中使用的图片一般由后端提供。你可能已经与后端开发者达成协议，将图片保持在一个固定的尺寸。然后你写下这样的代码。
```
<title>Document</title>
 <style>
 .img-list {
 display: flex;
 flex-direction: row;
 list-style: none;
 }
 </style>

- ![](https://miro.medium.com/fit/c/128/128/1*TyRLQdZO7NdPATwSeut8gg.png)
- ![](https://miro.medium.com/fit/c/128/128/1*pKOfOAOvx-fWzfITATgGRg.jpeg)
- ![](https://miro.medium.com/fit/c/128/128/1*mXOVdfMwS0IEcjPXiikJkg.png)
```
而网页看起来是这样的。

![imagepng](https://image-static.segmentfault.com/399/107/3991076816-61fbe68c431c3_fix732 "image.png")

图片的排列与我们所期望的一样。

通常情况下是没有问题的。但是当我们写代码时，我们不能假设一切都会按照我们的预期发展。我们需要做好充分的准备。如果后端返回的图片不正常，不符合预期的尺寸，可能大也可能小，那么布局就会被打乱。

你可以用这个替换其中一张图片的链接。

```
https://miro.medium.com/max/1400/0*zQaS0awtSTOO-JYa.jpg
```

你会发现，页面突然变得杂乱无章。

![imagepng](https://image-static.segmentfault.com/397/338/3973388868-61fbe70e24d23_fix732 "image.png")

为了防止这个问题，使我们的页面更加健壮，我们可以设置图片的宽度和高度。这样，我们就不必担心后端返回的图片的大小。

```
img {
 width: 128px;
 height: 128px;
}
```

![imagepng](https://image-static.segmentfault.com/404/840/40484028-61fbe73e78a46_fix732 "image.png")

但上述写法有一个缺点：如果图像本身的长宽比与我们设定的长宽比不一致，图像将被压缩或拉伸。

为了保持图像的原始长宽比，我们可以使用 `object-fit: cover` 。

```
img {
 width: 128px;
 height: 128px;
 object-fit: cover;
}
```

`object-fit` 的CSS属性设置一个被替换的元素的内容，如`<img>`或`<video>`，应该如何调整大小以适合其容器。

如果该值是 `cover`，那么被替换的内容的大小将保持其长宽比，同时填充元素的整个内容框。如果对象的长宽比与它的盒子的长宽比不一致，那么该对象将被剪掉以适配。

![imagepng](https://image-static.segmentfault.com/331/293/3312932221-61fbe7d740923_fix732 "image.png")

## 无图片

我们之前讨论的情况都是建立在我们能够得到图片的前提下。但是，在实际应用中，可能由于后端服务的不稳定，或者用户自身的网络信号不好，我们的网页可能无法正确加载图片。

当图片缺失时，浏览器的默认样式是不优雅的，这里我们可以优化它。

我们可以给 `img`元素添加一个 `onerror` 事件。如果在加载图片时出现了错误，那么我们可以通过 `onerro`r事件给该元素添加一个样式，并使用404图片。

`img` 元素:

```
<img src="https://miro.medium.com/xxx.jpg" alt='fireworks picture' onerror="this.classList.add('error');">
```

假设这就是我们的404图像:

```
https://cdn-images-1.medium.com/max/1600/1*we8wfyztsdo12e2Cww6oVA.jpeg
```

![imagepng](https://image-static.segmentfault.com/134/892/1348923011-61fbe961d4fc6_fix732 "image.png")

下面是 css 代码

```
img.error {
 display: inline-block;
 transform: scale(1);
 content: '';
 color: transparent;
 }
img.error::before {
 content: '';
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background: #f5f5f5 url('https://cdn-images-1.medium.com/max/1600/1*we8wfyztsdo12e2Cww6oVA.jpeg') no-repeat center / 100% 100%;
 }
```

这样，当 `img` 元素中的图片链接无法加载图片时，我们的404图片将被使用。

![imagepng](https://image-static.segmentfault.com/197/721/1977218622-61fbe994ae109_fix732 "image.png")

这里还有一点需要优化。在这种情况下，如果原始图片没有被正确加载，用户就不知道这个图片应该是什么。为了方便用户理解，我们可以将 `img` 元素的 `alt` 属性显示在页面上。

```
img.error::after {
 content: attr(alt);
 position: absolute;
 left: 0;
 bottom: 0;
 width: 100%;
 line-height: 2;
 background-color: rgba(0, 0, 0, .5);
 color: white;
 font-size: 12px;
 text-align: center;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 }
```

假设img的 `alt` 属性是这样的。

```
<img src="https://miro.medium.com/xxx.jpg" alt='Log of Medium' >
```

![imagepng](https://image-static.segmentfault.com/216/338/2163385386-61fbea7449318_fix732 "image.png")

事例地址：[https://codepen.io/bytefishme...](https://codepen.io/bytefishmedium/pen/vYWYMxG)

## 色彩对比度

当你在设计颜色组合时，你是否考虑过页面的颜色对比？

你需要知道，世界上有很多色盲和色弱用户。如果你的页面的对比度低，可能会导致他们无法正常使用你的产品。无论是出于人文关怀，还是出于留住客户的考虑，你都应该设计出合适的对比度。

WCAG AA规范指出，所有重要的内容需要有4.5:1以上的色彩对比度。

这里有一个对比度检查器的工具。

[https://webaim.org/resources/...](https://link.segmentfault.com/?enc=h1g2nKKKf3rnywA9pg7xww%3D%3D.n6cxi43OGbDRwZflZ1gzfxaHDS%2FGMp2jJmL2jiXPWleNlRZ82zhk116r64R6tyeX)

事例：

![imagepng](https://image-static.segmentfault.com/112/429/1124293679-61fbebae6c544_fix732 "image.png")

我们也可以使用Chrome DevTool来检查一个元素的颜色对比。然后我们可以发现，Medium的网页也在实践这一原则。

![imagepng](https://image-static.segmentfault.com/148/694/148694987-61fbebf592bc0_fix732 "image.png")

![imagepng](https://image-static.segmentfault.com/800/839/800839036-61fbebffaaefa_fix732 "image.png")

## 总结
俗话说得好，细节决定成败。如果你的项目有很多可以改善用户体验的细节，你就可以让用户感到舒服，你就有更高的成功概率。

~完。
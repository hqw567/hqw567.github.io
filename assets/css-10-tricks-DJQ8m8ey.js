import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-OmfbjWLM.js";import{c as m,w as e,f,e as b,p as r,o as v,h as l,j as y,i as s,r as i}from"./app-B-0E09g4.js";import"./YunComment.vue_vue_type_style_index_0_lang-TDkALwSF.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-BP4tYWCX.js";import"./post-igZqgClT.js";const O={__name:"css-10-tricks",setup(k,{expose:u}){const a=JSON.parse('{"title":"10个CSS小技巧","description":"","frontmatter":{"title":"10个CSS小技巧","tags":["CSS","前端"],"categories":["思米米的小笔记"],"date":"2022-02-15","updated":"2022-02-20"},"headers":[{"level":2,"title":"可点击区域","slug":"可点击区域","link":"#可点击区域","children":[]},{"level":2,"title":"平滑滚动","slug":"平滑滚动","link":"#平滑滚动","children":[]},{"level":2,"title":"选择所有文本","slug":"选择所有文本","link":"#选择所有文本","children":[]},{"level":2,"title":"Cursor","slug":"cursor","link":"#cursor","children":[]},{"level":2,"title":"Text Overflow","slug":"text-overflow","link":"#text-overflow","children":[]},{"level":2,"title":"Image","slug":"image","link":"#image","children":[]},{"level":2,"title":"无图片","slug":"无图片","link":"#无图片","children":[]},{"level":2,"title":"色彩对比度","slug":"色彩对比度","link":"#色彩对比度","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"pages/posts/css-10-tricks.md","path":"/home/runner/work/hqw567.github.io/hqw567.github.io/pages/posts/css-10-tricks.md","lastUpdated":1730869985000}'),o=b(),p=a.frontmatter||{};return o.meta.frontmatter=Object.assign(o.meta.frontmatter||{},a.frontmatter||{}),r("pageData",a),r("valaxy:frontmatter",p),globalThis.$frontmatter=p,u({frontmatter:{title:"10个CSS小技巧",tags:["CSS","前端"],categories:["思米米的小笔记"],date:"2022-02-15",updated:"2022-02-20"}}),(t,n)=>{const g=d;return v(),m(g,{frontmatter:f(p)},{"main-content-md":e(()=>[n[0]||(n[0]=l("p",null,"一个成功的 Web App 必须有良好的用户体验。当我们谈及改善用户体验时，你会想到什么？",-1)),n[1]||(n[1]=l("p",null,"其实，有一点是很容易被开发者忽视的，那就是 CSS。我们可以使用一些 CSS 技巧来改善网页的表现形式、交互细节和可访问性。",-1)),n[2]||(n[2]=l("p",null,"而且这些技巧不需要花费太多时间，也不需要消耗服务器资源。你只需要花两个小时学习，然后就可以把它应用到你所有的项目中，并永远改善用户体验。",-1)),y(" more "),n[3]||(n[3]=l("h2",{id:"可点击区域",tabindex:"-1"},[s("可点击区域 "),l("a",{class:"header-anchor",href:"#可点击区域","aria-label":'Permalink to "可点击区域"'},"​")],-1)),n[4]||(n[4]=l("p",null,"有时你的按钮很小，这可能导致用户无法准确点击按钮。这种现象经常发生在移动端上。如果用户点击次数太多，没有点击他们想要的按钮，或者点击错误的按钮，会让他们感到非常沮丧。",-1)),n[5]||(n[5]=l("p",null,"那么，如何解决这个问题呢？有些开发者可能会说：把按钮做大点。",-1)),n[6]||(n[6]=l("p",null,"但网页中元素的大小往往是固定的，我们不能轻易调整一个元素的大小。而且如果按钮太大，感觉很奇怪。",-1)),n[7]||(n[7]=l("p",null,"一个更好的解决方案是在不改变按钮原始尺寸的情况下增加其可点击区域。具体来说：我们可以使用伪元素来增加一个元素的可点击区域。",-1)),n[8]||(n[8]=l("p",null,"例如，这里有一个按钮。",-1)),n[9]||(n[9]=l("p",null,[l("code",null,'<button id="btn">btn</button>')],-1)),n[10]||(n[10]=l("p",null,"然后我们可以为它添加一个伪类。",-1)),n[11]||(n[11]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"#btn::before {")]),s(`
`),l("span",{class:"line"},[l("span",null,' content: "";')]),s(`
`),l("span",{class:"line"},[l("span",null," position: absolute;")]),s(`
`),l("span",{class:"line"},[l("span",null," top: -20px;")]),s(`
`),l("span",{class:"line"},[l("span",null," right: -20px;")]),s(`
`),l("span",{class:"line"},[l("span",null," bottom: -20px;")]),s(`
`),l("span",{class:"line"},[l("span",null," left: -20px;")]),s(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),n[12]||(n[12]=l("p",null,"这时，如果我们点击按钮周围的区域，我们仍然可以触发按钮的点击事件。",-1)),n[13]||(n[13]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/288/681/2886819424-61fbdc0573521",alt:"",loading:"lazy",decoding:"async"})],-1)),n[14]||(n[14]=l("p",null,"事例地址：",-1)),n[15]||(n[15]=l("p",null,[l("a",{href:"https://codepen.io/bytefishmedium/pen/rNYNoRX",target:"_blank",rel:"noreferrer"},"https://codepen.io/bytefishme…")],-1)),n[16]||(n[16]=l("h2",{id:"平滑滚动",tabindex:"-1"},[s("平滑滚动 "),l("a",{class:"header-anchor",href:"#平滑滚动","aria-label":'Permalink to "平滑滚动"'},"​")],-1)),n[17]||(n[17]=l("p",null,[s("当页面被"),l("code",null,"#"),s("链接滚动时，默认效果是这样的。")],-1)),n[18]||(n[18]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/195/723/1957235309-61fbdc5eb3871",alt:"",loading:"lazy",decoding:"async"})],-1)),n[19]||(n[19]=l("p",null,[s("这种突然的跳跃会让人感到不舒服。为了解决这个问题，我们可以使用这个 CSS 样式："),l("code",null,"sroll-behavior: smooth"),s("。")],-1)),n[20]||(n[20]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/220/773/22077344-61fbdc8dc63c4",alt:"",loading:"lazy",decoding:"async"})],-1)),n[21]||(n[21]=l("p",null,[s("事例地址："),l("a",{href:"https://codepen.io/bytefishmedium/pen/NWwWoKL",target:"_blank",rel:"noreferrer"},"https://codepen.io/bytefishme…")],-1)),n[22]||(n[22]=l("h2",{id:"选择所有文本",tabindex:"-1"},[s("选择所有文本 "),l("a",{class:"header-anchor",href:"#选择所有文本","aria-label":'Permalink to "选择所有文本"'},"​")],-1)),n[23]||(n[23]=l("p",null,"我们的网页经常需要提供一些内容供用户选择，如电话号码、地址、标题等。而这些文字应该是一个整体，我们希望当用户点击部分文字时，剩余的文字会被自动选择。",-1)),n[24]||(n[24]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/331/165/3311656029-61fbdd15ab86f",alt:"",loading:"lazy",decoding:"async"})],-1)),n[25]||(n[25]=l("p",null,[s("要实现这种效果非常简单，只需使用这个 CSS 样式："),l("code",null,"user-select: all"),s(" 。用户选择的 CSS 属性控制用户是否可以选择文本。如果它的值是 "),l("code",null,"all"),s("，意味着一个元素的所有内容都将被原子化地选择。")],-1)),n[26]||(n[26]=l("p",null,[s("事例地址："),l("a",{href:"https://codepen.io/bytefishmedium/pen/xxPxMZO",target:"_blank",rel:"noreferrer"},"https://codepen.io/bytefishme…")],-1)),n[27]||(n[27]=l("p",null,[s("如果你想在文本被选中后添加一些额外的样式，你可以使用"),l("code",null,"::selection"),s(" 。"),l("code",null,"::selection"),s(" CSS 伪元素将样式应用于文档中被用户突出显示的部分（比如在文本上点击和拖动鼠标）。")],-1)),n[28]||(n[28]=l("p",null,[s("但要记住。只有某些 CSS 属性可以和"),l("code",null,"::selection"),s("一起使用。")],-1)),n[29]||(n[29]=l("ul",null,[l("li",null,[l("code",null,"color")]),l("li",null,[l("code",null,"background-color")]),l("li",null,[l("code",null,"text-decoration"),s(" 及其相关属性")]),l("li",null,[l("code",null,"text-shadow")]),l("li",null,[l("code",null,"stroke-color"),s(", "),l("code",null,"fill-color"),s(" 和 "),l("code",null,"stroke-width")])],-1)),n[30]||(n[30]=l("p",null,[s("事例地址："),l("a",{href:"https://codepen.io/bytefishmedium/pen/gOXOqMz",target:"_blank",rel:"noreferrer"},"https://codepen.io/bytefishme…")],-1)),n[31]||(n[31]=l("h2",{id:"cursor",tabindex:"-1"},[s("Cursor "),l("a",{class:"header-anchor",href:"#cursor","aria-label":'Permalink to "Cursor"'},"​")],-1)),n[32]||(n[32]=l("p",null,"在不同的场景下使用不同的鼠标样式可以帮助读者感知页面的当前状态，从而改善用户的互动体验。",-1)),n[33]||(n[33]=l("p",null,[l("code",null,"cursor"),s(" CSS 属性设置鼠标指针在一个元素上时要显示的鼠标指针（如果有的话）。")],-1)),n[34]||(n[34]=l("p",null,"光标设置应该告知用户在当前位置可以进行的鼠标操作，包括文本选择、激活帮助或上下文菜单、复制内容、调整表格大小，等等。你可以用一个关键词来指定光标的类型，或者加载一个特定的图标来使用（有可选的回退图像和强制性的关键词作为最后的回退）。",-1)),n[35]||(n[35]=l("p",null,"例如：",-1)),n[36]||(n[36]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/428/062/4280629731-61fbe2543890a",alt:"",loading:"lazy",decoding:"async"})],-1)),n[37]||(n[37]=l("p",null,[s("事例地址："),l("a",{href:"https://codepen.io/bytefishmedium/pen/bGYGzRz",target:"_blank",rel:"noreferrer"},"https://codepen.io/bytefishme…")],-1)),n[38]||(n[38]=l("p",null,[s("有很多光标样式，你可以在"),l("a",{href:"https://link.segmentfault.com/?enc=V%2Fotb5rq2HJW21Z3aXTpkA%3D%3D.ahbw%2FLeOtPx8hQ7c5L%2FUBi6%2BYvNeQ%2B1QN3zkDsD7xtaCH7QBaaJL9bZr2BvCZRdtQnFGGVinPypVBrA1Q%2B%2F4Og%3D%3D",target:"_blank",rel:"noreferrer"},"MDN 文档中"),s("找到它们。")],-1)),n[39]||(n[39]=l("h2",{id:"text-overflow",tabindex:"-1"},[s("Text Overflow "),l("a",{class:"header-anchor",href:"#text-overflow","aria-label":'Permalink to "Text Overflow"'},"​")],-1)),n[40]||(n[40]=l("p",null,"现在我们来看看 text-overflow 的问题。如果一个文本容器的内容是从服务器返回的，或者是由用户输入的，那么就很难预测这个文本会有多长。",-1)),n[41]||(n[41]=l("p",null,"如果没有任何预防措施，你可能会写出这样的代码。",-1)),n[42]||(n[42]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"<head>")]),s(`
`),l("span",{class:"line"},[l("span",null,"  <style>")]),s(`
`),l("span",{class:"line"},[l("span",null,"    .container{")]),s(`
`),l("span",{class:"line"},[l("span",null,"      border: 2px solid red;")]),s(`
`),l("span",{class:"line"},[l("span",null,"      width: 200px;")]),s(`
`),l("span",{class:"line"},[l("span",null,"      height: 60px;")]),s(`
`),l("span",{class:"line"},[l("span",null,"    }")]),s(`
`),l("span",{class:"line"},[l("span",null,"  </style>")]),s(`
`),l("span",{class:"line"},[l("span",null,"</head>")]),s(`
`),l("span",{class:"line"},[l("span",null,"<body>")]),s(`
`),l("span",{class:"line"},[l("span",null,'  <div class="container">')]),s(`
`),l("span",{class:"line"},[l("span",null,'    <div class="username">bytefish</div>')]),s(`
`),l("span",{class:"line"},[l("span",null,'    <p class="profile">FE, UX Designer</p>')]),s(`
`),l("span",{class:"line"},[l("span",null,"  </div>")]),s(`
`),l("span",{class:"line"},[l("span",null,"</body>")])])]),l("button",{class:"collapse"})],-1)),n[43]||(n[43]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/106/600/1066002620-61fbe36d40ba7_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[44]||(n[44]=l("p",null,"这个容器有一个固定的宽度和高度，包裹着名字和介绍。",-1)),n[45]||(n[45]=l("p",null,"但如果有些用户的简介太长，就会导致文本溢出容器，使页面看起来很糟糕。",-1)),n[46]||(n[46]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/199/774/199774605-61fbe3b0dd288_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[47]||(n[47]=l("p",null,"在这一点上，我们可以将溢出的文本折叠起来。做到这一点就像添加三行 CSS 样式一样简单。",-1)),n[48]||(n[48]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"white-space: nowrap;")]),s(`
`),l("span",{class:"line"},[l("span",null,"overflow: hidden;")]),s(`
`),l("span",{class:"line"},[l("span",null,"text-overflow: ellipsis;")])])]),l("button",{class:"collapse"})],-1)),n[49]||(n[49]=l("p",null,[l("code",null,"white-space: nowrap"),s("; 可以使文本不被包起来。然后我们使用"),l("code",null,"overflow: hidden"),s("来隐藏溢出的文本。最后，我们使用 "),l("code",null,"text-overflow: ellipsis"),s(" 在文本的末尾添加一个圆点，向用户表明有一些隐藏的文本。")],-1)),n[50]||(n[50]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/178/308/1783085763-61fbe60313844_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[51]||(n[51]=l("p",null,[s("事例地址："),l("a",{href:"https://codepen.io/bytefishmedium/pen/VwrwgdQ",target:"_blank",rel:"noreferrer"},"https://codepen.io/bytefishme…")],-1)),n[52]||(n[52]=l("h2",{id:"image",tabindex:"-1"},[s("Image "),l("a",{class:"header-anchor",href:"#image","aria-label":'Permalink to "Image"'},"​")],-1)),n[53]||(n[53]=l("p",null,"现在我们来讨论一下图片的风格。网络应用中使用的图片一般由后端提供。你可能已经与后端开发者达成协议，将图片保持在一个固定的尺寸。然后你写下这样的代码。",-1)),n[54]||(n[54]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"<title>Document</title>")]),s(`
`),l("span",{class:"line"},[l("span",null," <style>")]),s(`
`),l("span",{class:"line"},[l("span",null," .img-list {")]),s(`
`),l("span",{class:"line"},[l("span",null," display: flex;")]),s(`
`),l("span",{class:"line"},[l("span",null," flex-direction: row;")]),s(`
`),l("span",{class:"line"},[l("span",null," list-style: none;")]),s(`
`),l("span",{class:"line"},[l("span",null," }")]),s(`
`),l("span",{class:"line"},[l("span",null," </style>")]),s(`
`),l("span",{class:"line"},[l("span")]),s(`
`),l("span",{class:"line"},[l("span",null,"- ![](https://miro.medium.com/fit/c/128/128/1*TyRLQdZO7NdPATwSeut8gg.png)")]),s(`
`),l("span",{class:"line"},[l("span",null,"- ![](https://miro.medium.com/fit/c/128/128/1*pKOfOAOvx-fWzfITATgGRg.jpeg)")]),s(`
`),l("span",{class:"line"},[l("span",null,"- ![](https://miro.medium.com/fit/c/128/128/1*mXOVdfMwS0IEcjPXiikJkg.png)")])])]),l("button",{class:"collapse"})],-1)),n[55]||(n[55]=l("p",null,"而网页看起来是这样的。",-1)),n[56]||(n[56]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/399/107/3991076816-61fbe68c431c3_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[57]||(n[57]=l("p",null,"图片的排列与我们所期望的一样。",-1)),n[58]||(n[58]=l("p",null,"通常情况下是没有问题的。但是当我们写代码时，我们不能假设一切都会按照我们的预期发展。我们需要做好充分的准备。如果后端返回的图片不正常，不符合预期的尺寸，可能大也可能小，那么布局就会被打乱。",-1)),n[59]||(n[59]=l("p",null,"你可以用这个替换其中一张图片的链接。",-1)),n[60]||(n[60]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"https://miro.medium.com/max/1400/0*zQaS0awtSTOO-JYa.jpg")])])]),l("button",{class:"collapse"})],-1)),n[61]||(n[61]=l("p",null,"你会发现，页面突然变得杂乱无章。",-1)),n[62]||(n[62]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/397/338/3973388868-61fbe70e24d23_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[63]||(n[63]=l("p",null,"为了防止这个问题，使我们的页面更加健壮，我们可以设置图片的宽度和高度。这样，我们就不必担心后端返回的图片的大小。",-1)),n[64]||(n[64]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"img {")]),s(`
`),l("span",{class:"line"},[l("span",null," width: 128px;")]),s(`
`),l("span",{class:"line"},[l("span",null," height: 128px;")]),s(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),n[65]||(n[65]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/404/840/40484028-61fbe73e78a46_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[66]||(n[66]=l("p",null,"但上述写法有一个缺点：如果图像本身的长宽比与我们设定的长宽比不一致，图像将被压缩或拉伸。",-1)),n[67]||(n[67]=l("p",null,[s("为了保持图像的原始长宽比，我们可以使用 "),l("code",null,"object-fit: cover"),s(" 。")],-1)),n[68]||(n[68]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"img {")]),s(`
`),l("span",{class:"line"},[l("span",null," width: 128px;")]),s(`
`),l("span",{class:"line"},[l("span",null," height: 128px;")]),s(`
`),l("span",{class:"line"},[l("span",null," object-fit: cover;")]),s(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),n[69]||(n[69]=l("p",null,[l("code",null,"object-fit"),s(" 的 CSS 属性设置一个被替换的元素的内容，如"),l("code",null,"<img>"),s("或"),l("code",null,"<video>"),s("，应该如何调整大小以适合其容器。")],-1)),n[70]||(n[70]=l("p",null,[s("如果该值是 "),l("code",null,"cover"),s("，那么被替换的内容的大小将保持其长宽比，同时填充元素的整个内容框。如果对象的长宽比与它的盒子的长宽比不一致，那么该对象将被剪掉以适配。")],-1)),n[71]||(n[71]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/331/293/3312932221-61fbe7d740923_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[72]||(n[72]=l("h2",{id:"无图片",tabindex:"-1"},[s("无图片 "),l("a",{class:"header-anchor",href:"#无图片","aria-label":'Permalink to "无图片"'},"​")],-1)),n[73]||(n[73]=l("p",null,"我们之前讨论的情况都是建立在我们能够得到图片的前提下。但是，在实际应用中，可能由于后端服务的不稳定，或者用户自身的网络信号不好，我们的网页可能无法正确加载图片。",-1)),n[74]||(n[74]=l("p",null,"当图片缺失时，浏览器的默认样式是不优雅的，这里我们可以优化它。",-1)),n[75]||(n[75]=l("p",null,[s("我们可以给 "),l("code",null,"img"),s("元素添加一个 "),l("code",null,"onerror"),s(" 事件。如果在加载图片时出现了错误，那么我们可以通过 "),l("code",null,"onerro"),s("r 事件给该元素添加一个样式，并使用 404 图片。")],-1)),n[76]||(n[76]=l("p",null,[l("code",null,"img"),s(" 元素:")],-1)),n[77]||(n[77]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,`<img src="https://miro.medium.com/xxx.jpg" alt='fireworks picture' onerror="this.classList.add('error');">`)])])]),l("button",{class:"collapse"})],-1)),n[78]||(n[78]=l("p",null,"假设这就是我们的 404 图像:",-1)),n[79]||(n[79]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"https://cdn-images-1.medium.com/max/1600/1*we8wfyztsdo12e2Cww6oVA.jpeg")])])]),l("button",{class:"collapse"})],-1)),n[80]||(n[80]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/134/892/1348923011-61fbe961d4fc6_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[81]||(n[81]=l("p",null,"下面是 css 代码",-1)),n[82]||(n[82]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"img.error {")]),s(`
`),l("span",{class:"line"},[l("span",null," display: inline-block;")]),s(`
`),l("span",{class:"line"},[l("span",null," transform: scale(1);")]),s(`
`),l("span",{class:"line"},[l("span",null," content: '';")]),s(`
`),l("span",{class:"line"},[l("span",null," color: transparent;")]),s(`
`),l("span",{class:"line"},[l("span",null," }")]),s(`
`),l("span",{class:"line"},[l("span",null,"img.error::before {")]),s(`
`),l("span",{class:"line"},[l("span",null," content: '';")]),s(`
`),l("span",{class:"line"},[l("span",null," position: absolute;")]),s(`
`),l("span",{class:"line"},[l("span",null," left: 0;")]),s(`
`),l("span",{class:"line"},[l("span",null," top: 0;")]),s(`
`),l("span",{class:"line"},[l("span",null," width: 100%;")]),s(`
`),l("span",{class:"line"},[l("span",null," height: 100%;")]),s(`
`),l("span",{class:"line"},[l("span",null," background: #f5f5f5 url('https://cdn-images-1.medium.com/max/1600/1*we8wfyztsdo12e2Cww6oVA.jpeg') no-repeat center / 100% 100%;")]),s(`
`),l("span",{class:"line"},[l("span",null," }")])])]),l("button",{class:"collapse"})],-1)),n[83]||(n[83]=l("p",null,[s("这样，当 "),l("code",null,"img"),s(" 元素中的图片链接无法加载图片时，我们的 404 图片将被使用。")],-1)),n[84]||(n[84]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/197/721/1977218622-61fbe994ae109_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[85]||(n[85]=l("p",null,[s("这里还有一点需要优化。在这种情况下，如果原始图片没有被正确加载，用户就不知道这个图片应该是什么。为了方便用户理解，我们可以将 "),l("code",null,"img"),s(" 元素的 "),l("code",null,"alt"),s(" 属性显示在页面上。")],-1)),n[86]||(n[86]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"img.error::after {")]),s(`
`),l("span",{class:"line"},[l("span",null," content: attr(alt);")]),s(`
`),l("span",{class:"line"},[l("span",null," position: absolute;")]),s(`
`),l("span",{class:"line"},[l("span",null," left: 0;")]),s(`
`),l("span",{class:"line"},[l("span",null," bottom: 0;")]),s(`
`),l("span",{class:"line"},[l("span",null," width: 100%;")]),s(`
`),l("span",{class:"line"},[l("span",null," line-height: 2;")]),s(`
`),l("span",{class:"line"},[l("span",null," background-color: rgba(0, 0, 0, .5);")]),s(`
`),l("span",{class:"line"},[l("span",null," color: white;")]),s(`
`),l("span",{class:"line"},[l("span",null," font-size: 12px;")]),s(`
`),l("span",{class:"line"},[l("span",null," text-align: center;")]),s(`
`),l("span",{class:"line"},[l("span",null," white-space: nowrap;")]),s(`
`),l("span",{class:"line"},[l("span",null," overflow: hidden;")]),s(`
`),l("span",{class:"line"},[l("span",null," text-overflow: ellipsis;")]),s(`
`),l("span",{class:"line"},[l("span",null," }")])])]),l("button",{class:"collapse"})],-1)),n[87]||(n[87]=l("p",null,[s("假设 img 的 "),l("code",null,"alt"),s(" 属性是这样的。")],-1)),n[88]||(n[88]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,`<img src="https://miro.medium.com/xxx.jpg" alt='Log of Medium' >`)])])]),l("button",{class:"collapse"})],-1)),n[89]||(n[89]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/216/338/2163385386-61fbea7449318_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[90]||(n[90]=l("p",null,[s("事例地址："),l("a",{href:"https://codepen.io/bytefishmedium/pen/vYWYMxG",target:"_blank",rel:"noreferrer"},"https://codepen.io/bytefishme…")],-1)),n[91]||(n[91]=l("h2",{id:"色彩对比度",tabindex:"-1"},[s("色彩对比度 "),l("a",{class:"header-anchor",href:"#色彩对比度","aria-label":'Permalink to "色彩对比度"'},"​")],-1)),n[92]||(n[92]=l("p",null,"当你在设计颜色组合时，你是否考虑过页面的颜色对比？",-1)),n[93]||(n[93]=l("p",null,"你需要知道，世界上有很多色盲和色弱用户。如果你的页面的对比度低，可能会导致他们无法正常使用你的产品。无论是出于人文关怀，还是出于留住客户的考虑，你都应该设计出合适的对比度。",-1)),n[94]||(n[94]=l("p",null,"WCAG AA 规范指出，所有重要的内容需要有 4.5:1 以上的色彩对比度。",-1)),n[95]||(n[95]=l("p",null,"这里有一个对比度检查器的工具。",-1)),n[96]||(n[96]=l("p",null,[l("a",{href:"https://link.segmentfault.com/?enc=h1g2nKKKf3rnywA9pg7xww%3D%3D.n6cxi43OGbDRwZflZ1gzfxaHDS%2FGMp2jJmL2jiXPWleNlRZ82zhk116r64R6tyeX",target:"_blank",rel:"noreferrer"},"https://webaim.org/resources/…")],-1)),n[97]||(n[97]=l("p",null,"事例：",-1)),n[98]||(n[98]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/112/429/1124293679-61fbebae6c544_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[99]||(n[99]=l("p",null,"我们也可以使用 Chrome DevTool 来检查一个元素的颜色对比。然后我们可以发现，Medium 的网页也在实践这一原则。",-1)),n[100]||(n[100]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/148/694/148694987-61fbebf592bc0_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[101]||(n[101]=l("figure",null,[l("img",{src:"https://image-static.segmentfault.com/800/839/800839036-61fbebffaaefa_fix732",alt:"imagepng",loading:"lazy",decoding:"async"}),l("figcaption",null,"image.png")],-1)),n[102]||(n[102]=l("h2",{id:"总结",tabindex:"-1"},[s("总结 "),l("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1)),n[103]||(n[103]=l("p",null,"俗话说得好，细节决定成败。如果你的项目有很多可以改善用户体验的细节，你就可以让用户感到舒服，你就有更高的成功概率。",-1)),n[104]||(n[104]=l("p",null,"~完。",-1))]),"main-header":e(()=>[i(t.$slots,"main-header")]),"main-header-after":e(()=>[i(t.$slots,"main-header-after")]),"main-nav":e(()=>[i(t.$slots,"main-nav")]),"main-content":e(()=>[i(t.$slots,"main-content")]),"main-content-after":e(()=>[i(t.$slots,"main-content-after")]),"main-nav-before":e(()=>[i(t.$slots,"main-nav-before")]),"main-nav-after":e(()=>[i(t.$slots,"main-nav-after")]),comment:e(()=>[i(t.$slots,"comment")]),footer:e(()=>[i(t.$slots,"footer")]),aside:e(()=>[i(t.$slots,"aside")]),"aside-custom":e(()=>[i(t.$slots,"aside-custom")]),default:e(()=>[i(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{O as default};

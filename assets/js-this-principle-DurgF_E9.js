import{_ as d}from"./ValaxyMain.vue_vue_type_style_index_0_lang-OmfbjWLM.js";import{c as E,w as a,f as g,e as y,p,o as u,h as s,i,j as c,r as n}from"./app-B-0E09g4.js";import"./YunComment.vue_vue_type_style_index_0_lang-TDkALwSF.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-BP4tYWCX.js";import"./post-igZqgClT.js";const A={__name:"js-this-principle",setup(b,{expose:o}){const e=JSON.parse('{"title":"JavaScript 的 this 原理","description":"","frontmatter":{"title":"JavaScript 的 this 原理","tags":["JavaScript"],"categories":["思米米的小笔记"],"date":"2022-04-23 17:10:58","updated":"2022-04-23 17:10:58"},"headers":[{"level":2,"title":"一、问题的由来","slug":"一、问题的由来","link":"#一、问题的由来","children":[]},{"level":2,"title":"二、内存的数据结构","slug":"二、内存的数据结构","link":"#二、内存的数据结构","children":[]},{"level":2,"title":"三、函数","slug":"三、函数","link":"#三、函数","children":[]},{"level":2,"title":"四、环境变量","slug":"四、环境变量","link":"#四、环境变量","children":[]}],"relativePath":"pages/posts/js-this-principle.md","path":"/home/runner/work/hqw567.github.io/hqw567.github.io/pages/posts/js-this-principle.md","lastUpdated":1730869985000}'),k=y(),h=e.frontmatter||{};return k.meta.frontmatter=Object.assign(k.meta.frontmatter||{},e.frontmatter||{}),p("pageData",e),p("valaxy:frontmatter",h),globalThis.$frontmatter=h,o({frontmatter:{title:"JavaScript 的 this 原理",tags:["JavaScript"],categories:["思米米的小笔记"],date:"2022-04-23 17:10:58",updated:"2022-04-23 17:10:58"}}),(t,l)=>{const r=d;return u(),E(r,{frontmatter:g(h)},{"main-content-md":a(()=>[l[0]||(l[0]=s("h2",{id:"一、问题的由来",tabindex:"-1"},[i("一、问题的由来 "),s("a",{class:"header-anchor",href:"#一、问题的由来","aria-label":'Permalink to "一、问题的由来"'},"​")],-1)),l[1]||(l[1]=s("p",null,"学懂 JavaScript 语言，一个标志就是理解下面两种写法，可能有不一样的结果。",-1)),l[2]||(l[2]=s("blockquote",null,[s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," obj "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	foo"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () {},")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," obj.foo")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 写法一")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"obj."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"foo"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 写法二")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"foo"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")])])]),s("button",{class:"collapse"})])],-1)),c(" more "),l[3]||(l[3]=s("p",null,[i("上面代码中，虽然"),s("code",null,"obj.foo"),i("和"),s("code",null,"foo"),i("指向同一个函数，但是执行结果可能不一样。请看下面的例子。")],-1)),l[4]||(l[4]=s("blockquote",null,[s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," obj "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"	foo"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"		console."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".bar)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	},")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	bar: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," foo "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," obj.foo")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," bar "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 2")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"obj."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"foo"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"foo"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 2")])])]),s("button",{class:"collapse"})])],-1)),l[5]||(l[5]=s("p",null,[i("这种差异的原因，就在于函数体内部使用了"),s("code",null,"this"),i("关键字。很多教科书会告诉你，"),s("code",null,"this"),i("指的是函数运行时所在的环境。对于"),s("code",null,"obj.foo()"),i("来说，"),s("code",null,"foo"),i("运行在"),s("code",null,"obj"),i("环境，所以"),s("code",null,"this"),i("指向"),s("code",null,"obj"),i("；对于"),s("code",null,"foo()"),i("来说，"),s("code",null,"foo"),i("运行在全局环境，所以"),s("code",null,"this"),i("指向全局环境。所以，两者的运行结果不一样。")],-1)),l[6]||(l[6]=s("p",null,[i("这种解释没错，但是教科书往往不告诉你，为什么会这样？也就是说，函数的运行环境到底是怎么决定的？举例来说，为什么"),s("code",null,"obj.foo()"),i("就是在"),s("code",null,"obj"),i("环境执行，而一旦"),s("code",null,"var foo = obj.foo"),i("，"),s("code",null,"foo()"),i("就变成在全局环境执行？")],-1)),l[7]||(l[7]=s("p",null,[i("本文就来解释 JavaScript 这样处理的原理。理解了这一点，你就会彻底理解"),s("code",null,"this"),i("的作用。")],-1)),l[8]||(l[8]=s("h2",{id:"二、内存的数据结构",tabindex:"-1"},[i("二、内存的数据结构 "),s("a",{class:"header-anchor",href:"#二、内存的数据结构","aria-label":'Permalink to "二、内存的数据结构"'},"​")],-1)),l[9]||(l[9]=s("p",null,[i("JavaScript 语言之所以有"),s("code",null,"this"),i("的设计，跟内存里面的数据结构有关系。")],-1)),l[10]||(l[10]=s("blockquote",null,[s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," obj "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { foo: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"5"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," }")])])]),s("button",{class:"collapse"})])],-1)),l[11]||(l[11]=s("p",null,[i("上面的代码将一个对象赋值给变量"),s("code",null,"obj"),i("。JavaScript 引擎会先在内存里面，生成一个对象"),s("code",null,"{ foo: 5 }"),i("，然后把这个对象的内存地址赋值给变量"),s("code",null,"obj"),i("。")],-1)),l[12]||(l[12]=s("figure",null,[s("img",{src:"https://www.wangbase.com/blogimg/asset/201806/bg2018061801.png",alt:"img",loading:"lazy",decoding:"async"})],-1)),l[13]||(l[13]=s("p",null,[i("也就是说，变量"),s("code",null,"obj"),i("是一个地址（reference）。后面如果要读取"),s("code",null,"obj.foo"),i("，引擎先从"),s("code",null,"obj"),i("拿到内存地址，然后再从该地址读出原始的对象，返回它的"),s("code",null,"foo"),i("属性。")],-1)),l[14]||(l[14]=s("p",null,[i("原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。举例来说，上面例子的"),s("code",null,"foo"),i("属性，实际上是以下面的形式保存的。")],-1)),l[15]||(l[15]=s("figure",null,[s("img",{src:"https://www.wangbase.com/blogimg/asset/201806/bg2018061802.png",alt:"img",loading:"lazy",decoding:"async"})],-1)),l[16]||(l[16]=s("blockquote",null,[s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  foo"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    [[value]]: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"5")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    [[writable]]: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    [[enumerable]]: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    [[configurable]]: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),s("button",{class:"collapse"})])],-1)),l[17]||(l[17]=s("p",null,[i("注意，"),s("code",null,"foo"),i("属性的值保存在属性描述对象的"),s("code",null,"value"),i("属性里面。")],-1)),l[18]||(l[18]=s("h2",{id:"三、函数",tabindex:"-1"},[i("三、函数 "),s("a",{class:"header-anchor",href:"#三、函数","aria-label":'Permalink to "三、函数"'},"​")],-1)),l[19]||(l[19]=s("p",null,"这样的结构是很清晰的，问题在于属性的值可能是一个函数。",-1)),l[20]||(l[20]=s("blockquote",null,[s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," obj "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"foo"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"function"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () {} }")])])]),s("button",{class:"collapse"})])],-1)),l[21]||(l[21]=s("p",null,[i("这时，引擎会将函数单独保存在内存中，然后再将函数的地址赋值给"),s("code",null,"foo"),i("属性的"),s("code",null,"value"),i("属性。")],-1)),l[22]||(l[22]=s("figure",null,[s("img",{src:"https://www.wangbase.com/blogimg/asset/201806/bg2018061803.png",alt:"img",loading:"lazy",decoding:"async"})],-1)),l[23]||(l[23]=s("blockquote",null,[s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  foo"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    [[value]]: 函数的地址")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    ...")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),s("button",{class:"collapse"})])],-1)),l[24]||(l[24]=s("p",null,"由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行。",-1)),l[25]||(l[25]=s("blockquote",null,[s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," f"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," function"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () {}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," obj "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { f: f }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 单独执行")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"f"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// obj 环境执行")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"obj."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"f"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")])])]),s("button",{class:"collapse"})])],-1)),l[26]||(l[26]=s("h2",{id:"四、环境变量",tabindex:"-1"},[i("四、环境变量 "),s("a",{class:"header-anchor",href:"#四、环境变量","aria-label":'Permalink to "四、环境变量"'},"​")],-1)),l[27]||(l[27]=s("p",null,"JavaScript 允许在函数体内部，引用当前环境的其他变量。",-1)),l[28]||(l[28]=s("blockquote",null,[s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," f"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," function"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	console."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(x)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),s("button",{class:"collapse"})])],-1)),l[29]||(l[29]=s("p",null,[i("上面代码中，函数体里面使用了变量"),s("code",null,"x"),i("。该变量由运行环境提供。")],-1)),l[30]||(l[30]=s("p",null,[i("现在问题就来了，由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，"),s("code",null,"this"),i("就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。")],-1)),l[31]||(l[31]=s("blockquote",null,[s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," f"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," function"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	console."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".x)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),s("button",{class:"collapse"})])],-1)),l[32]||(l[32]=s("p",null,[i("上面代码中，函数体里面的"),s("code",null,"this.x"),i("就是指当前运行环境的"),s("code",null,"x"),i("。")],-1)),l[33]||(l[33]=s("blockquote",null,[s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," f"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," function"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	console."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"log"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".x)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," x "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"var"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," obj "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	f: f,")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"	x: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"2"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 单独执行")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"f"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 1")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// obj 环境执行")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"obj."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"f"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 2")])])]),s("button",{class:"collapse"})])],-1)),l[34]||(l[34]=s("p",null,[i("上面代码中，函数"),s("code",null,"f"),i("在全局环境执行，"),s("code",null,"this.x"),i("指向全局环境的"),s("code",null,"x"),i("。")],-1)),l[35]||(l[35]=s("figure",null,[s("img",{src:"https://www.wangbase.com/blogimg/asset/201806/bg2018061804.png",alt:"img",loading:"lazy",decoding:"async"})],-1)),l[36]||(l[36]=s("p",null,[i("在"),s("code",null,"obj"),i("环境执行，"),s("code",null,"this.x"),i("指向"),s("code",null,"obj.x"),i("。")],-1)),l[37]||(l[37]=s("figure",null,[s("img",{src:"https://www.wangbase.com/blogimg/asset/201806/bg2018061805.png",alt:"img",loading:"lazy",decoding:"async"})],-1)),l[38]||(l[38]=s("p",null,[i("回到本文开头提出的问题，"),s("code",null,"obj.foo()"),i("是通过"),s("code",null,"obj"),i("找到"),s("code",null,"foo"),i("，所以就是在"),s("code",null,"obj"),i("环境执行。一旦"),s("code",null,"var foo = obj.foo"),i("，变量"),s("code",null,"foo"),i("就直接指向函数本身，所以"),s("code",null,"foo()"),i("就变成在全局环境执行。")],-1))]),"main-header":a(()=>[n(t.$slots,"main-header")]),"main-header-after":a(()=>[n(t.$slots,"main-header-after")]),"main-nav":a(()=>[n(t.$slots,"main-nav")]),"main-content":a(()=>[n(t.$slots,"main-content")]),"main-content-after":a(()=>[n(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[n(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[n(t.$slots,"main-nav-after")]),comment:a(()=>[n(t.$slots,"comment")]),footer:a(()=>[n(t.$slots,"footer")]),aside:a(()=>[n(t.$slots,"aside")]),"aside-custom":a(()=>[n(t.$slots,"aside-custom")]),default:a(()=>[n(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{A as default};
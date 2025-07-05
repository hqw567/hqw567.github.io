import{_ as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang.CIL-wNNu.js";import"./chunks/@vueuse/motion.BGpQrJjG.js";import{e as h,a as b,u as g}from"./chunks/vue-router.OOYc_mqb.js";import{aa as v,al as l,ag as p,ad as n,af as f,ai as s,O as k,ab as y,a1 as C}from"./framework.BdGZ-rKc.js";import"./app.D3XzE9pG.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.856TSABw.js";import"./chunks/pinia.xb6ucoOY.js";import"./chunks/nprogress.BrJnU_18.js";import"./YunComment.vue_vue_type_style_index_0_lang.D8XNg0Sh.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.Df-oOa0z.js";import"./post.DJQWuogS.js";const S=h("/posts/css-name",async i=>JSON.parse('{"title":"CSS命名参考","description":"","frontmatter":{"title":"CSS命名参考","tags":["CSS"],"categories":"思米米的小笔记","date":"2022-06-01 14:52:09","updated":"2022-06-01 14:52:09"},"headers":[],"relativePath":"pages/posts/css-name.md","lastUpdated":1751687172000}'),{lazy:(i,t)=>i.name===t.name}),M={__name:"css-name",setup(i,{expose:t}){const{data:c}=S(),r=g(),u=b(),o=Object.assign(u.meta.frontmatter||{},c.value?.frontmatter||{});return r.currentRoute.value.data=c.value,C("valaxy:frontmatter",o),globalThis.$frontmatter=o,t({frontmatter:{title:"CSS命名参考",tags:["CSS"],categories:"思米米的小笔记",date:"2022-06-01 14:52:09",updated:"2022-06-01 14:52:09"}}),(e,a)=>{const d=m;return y(),v(d,{frontmatter:k(o)},{"main-content-md":l(()=>[a[0]||(a[0]=n("h2",{id:"css命名参考",tabindex:"-1"},[s("CSS命名参考 "),n("a",{class:"header-anchor",href:"#css命名参考","aria-label":'Permalink to "CSS命名参考"'},"​")],-1)),a[1]||(a[1]=n("h3",{id:"页面结构命名",tabindex:"-1"},[s("页面结构命名 "),n("a",{class:"header-anchor",href:"#页面结构命名","aria-label":'Permalink to "页面结构命名"'},"​")],-1)),a[2]||(a[2]=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"page  // 代表整个页面，用于最外层。")]),s(`
`),n("span",{class:"line"},[n("span",null,"wrap  // 外套，将所有元素包在一起的一个外围包，用于最外层")]),s(`
`),n("span",{class:"line"},[n("span",null,"wrapper  // 页面外围控制整体布局宽度，用于最外层")]),s(`
`),n("span",{class:"line"},[n("span",null,"container  // 一个整体容器，用于最外层")]),s(`
`),n("span",{class:"line"},[n("span",null,"head|header  // 页头区域，用于头部")]),s(`
`),n("span",{class:"line"},[n("span",null,"nav  // 导航条")]),s(`
`),n("span",{class:"line"},[n("span",null,"content  // 内容，网站中最重要的内容区域，用于网页中部主体")]),s(`
`),n("span",{class:"line"},[n("span",null,"main  // 网站中的主要区域（表示最重要的一块位置），用于中部主体内容")]),s(`
`),n("span",{class:"line"},[n("span",null,"column  // 栏目")]),s(`
`),n("span",{class:"line"},[n("span",null,"sidebar  // 侧栏")]),s(`
`),n("span",{class:"line"},[n("span",null,"foot|footer  // 页尾、页脚。网站一些附加信息放置区域，（或命名为 copyright）用于底部")])])]),n("button",{class:"collapse"})],-1)),f(" more "),a[3]||(a[3]=n("h3",{id:"导航命名",tabindex:"-1"},[s("导航命名 "),n("a",{class:"header-anchor",href:"#导航命名","aria-label":'Permalink to "导航命名"'},"​")],-1)),a[4]||(a[4]=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"nav|navbar|navigation|nav-wrapper  // 导航条或导航包，代表横向导航")]),s(`
`),n("span",{class:"line"},[n("span",null,"topnav  // 顶部导航")]),s(`
`),n("span",{class:"line"},[n("span",null,"mainbav  // 主导航")]),s(`
`),n("span",{class:"line"},[n("span",null,"subnav  // 子导航")]),s(`
`),n("span",{class:"line"},[n("span",null,"sidebar  // 边导航")]),s(`
`),n("span",{class:"line"},[n("span",null,"leftsidebar|sidebar-l  // 左导航")]),s(`
`),n("span",{class:"line"},[n("span",null,"rightsidebar|sidebar-r  // 右导航")]),s(`
`),n("span",{class:"line"},[n("span",null,"title  // 标题")]),s(`
`),n("span",{class:"line"},[n("span",null,"subtitle  // 二级标题")]),s(`
`),n("span",{class:"line"},[n("span",null,"summary  // 摘要")]),s(`
`),n("span",{class:"line"},[n("span",null,"menu  // 菜单，区域包含一般的链接和菜单")]),s(`
`),n("span",{class:"line"},[n("span",null,"submenu  // 子菜单")]),s(`
`),n("span",{class:"line"},[n("span",null,"drop  // 下拉")]),s(`
`),n("span",{class:"line"},[n("span",null,"dorpmenu  // 下拉菜单")]),s(`
`),n("span",{class:"line"},[n("span",null,"links  // 链接菜单")])])]),n("button",{class:"collapse"})],-1)),a[5]||(a[5]=n("h3",{id:"功能命名",tabindex:"-1"},[s("功能命名 "),n("a",{class:"header-anchor",href:"#功能命名","aria-label":'Permalink to "功能命名"'},"​")],-1)),a[6]||(a[6]=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"logo  // 标记网站logo标志")]),s(`
`),n("span",{class:"line"},[n("span",null,"banner  // 标语、广告条、顶部广告条")]),s(`
`),n("span",{class:"line"},[n("span",null,"login  // 登陆，（例如: 登录表单 form-login）")]),s(`
`),n("span",{class:"line"},[n("span",null,"loginbar  // 登录条")]),s(`
`),n("span",{class:"line"},[n("span",null,"text  // 文本")]),s(`
`),n("span",{class:"line"},[n("span",null,"register  // 注册")]),s(`
`),n("span",{class:"line"},[n("span",null,"tool|toolbar  // 工具条")]),s(`
`),n("span",{class:"line"},[n("span",null,"search  // 搜索")]),s(`
`),n("span",{class:"line"},[n("span",null,"searchbar  // 搜索条")]),s(`
`),n("span",{class:"line"},[n("span",null,"searchlnput  // 搜索输入框")]),s(`
`),n("span",{class:"line"},[n("span",null,"shop  // 功能区，表示现在的")]),s(`
`),n("span",{class:"line"},[n("span",null,"icon  // 小图标")]),s(`
`),n("span",{class:"line"},[n("span",null,"label  // 商标")]),s(`
`),n("span",{class:"line"},[n("span",null,"homepage  // 首页")]),s(`
`),n("span",{class:"line"},[n("span",null,"subpage  // 二级页面子页面")]),s(`
`),n("span",{class:"line"},[n("span",null,"hot  // 热门热点")]),s(`
`),n("span",{class:"line"},[n("span",null,"list  // 文章列表，（例如: 新闻列表 list-news）")]),s(`
`),n("span",{class:"line"},[n("span",null,"scroll  // 滚动")]),s(`
`),n("span",{class:"line"},[n("span",null,"tab  // 标签")]),s(`
`),n("span",{class:"line"},[n("span",null,"sitemap  // 网站地图")]),s(`
`),n("span",{class:"line"},[n("span",null,"msg|message  // 提示信息")]),s(`
`),n("span",{class:"line"},[n("span",null,"current  // 当前的")]),s(`
`),n("span",{class:"line"},[n("span",null,"joinus  // 加入")]),s(`
`),n("span",{class:"line"},[n("span",null,"status  // 状态")]),s(`
`),n("span",{class:"line"},[n("span",null,"btn  // 按钮，（例如: 搜索按钮可写成  btn-search）")]),s(`
`),n("span",{class:"line"},[n("span",null,"tips  // 小技巧")]),s(`
`),n("span",{class:"line"},[n("span",null,"note  // 注释")]),s(`
`),n("span",{class:"line"},[n("span",null,"guild  // 指南")]),s(`
`),n("span",{class:"line"},[n("span",null,"arr|arrow  // 标记箭头")]),s(`
`),n("span",{class:"line"},[n("span",null,"service  // 服务")]),s(`
`),n("span",{class:"line"},[n("span",null,"breadcrumb  // 页面所处位置导航提示")]),s(`
`),n("span",{class:"line"},[n("span",null,"download  // 下载")]),s(`
`),n("span",{class:"line"},[n("span",null,"vote  // 投票")]),s(`
`),n("span",{class:"line"},[n("span",null,"news  // 新闻")]),s(`
`),n("span",{class:"line"},[n("span",null,"siteinfo  // 网站信息")]),s(`
`),n("span",{class:"line"},[n("span",null,"partner  // 合作伙伴")]),s(`
`),n("span",{class:"line"},[n("span",null,"friendlink  // 友情链接")]),s(`
`),n("span",{class:"line"},[n("span",null,"copyright  // 版权信息")]),s(`
`),n("span",{class:"line"},[n("span",null,"siteinfoCredits  // 信誉")]),s(`
`),n("span",{class:"line"},[n("span",null,"siteinfoLegal  // 法律信息")])])]),n("button",{class:"collapse"})],-1)),a[7]||(a[7]=n("h3",{id:"状态命名",tabindex:"-1"},[s("状态命名 "),n("a",{class:"header-anchor",href:"#状态命名","aria-label":'Permalink to "状态命名"'},"​")],-1)),a[8]||(a[8]=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"primary // 主要")]),s(`
`),n("span",{class:"line"},[n("span",null,"inof // 提示信息")]),s(`
`),n("span",{class:"line"},[n("span",null,"success // 成功")]),s(`
`),n("span",{class:"line"},[n("span",null,"warning // 一般警告")]),s(`
`),n("span",{class:"line"},[n("span",null,"error // 错误警告")]),s(`
`),n("span",{class:"line"},[n("span",null,"danger // 严重警告")]),s(`
`),n("span",{class:"line"},[n("span",null,"link // 文字链接")]),s(`
`),n("span",{class:"line"},[n("span",null,"plain|ghost // 按钮是否镂空")]),s(`
`),n("span",{class:"line"},[n("span",null,"light // 亮模式")]),s(`
`),n("span",{class:"line"},[n("span",null,"dark // 暗模式")]),s(`
`),n("span",{class:"line"},[n("span",null,"disable // 禁用")]),s(`
`),n("span",{class:"line"},[n("span",null,"active // 激活")]),s(`
`),n("span",{class:"line"},[n("span",null,"checked // 选中")]),s(`
`),n("span",{class:"line"},[n("span",null,"loading // 加载中")])])]),n("button",{class:"collapse"})],-1)),a[9]||(a[9]=n("h3",{id:"关系命名",tabindex:"-1"},[s("关系命名 "),n("a",{class:"header-anchor",href:"#关系命名","aria-label":'Permalink to "关系命名"'},"​")],-1)),a[10]||(a[10]=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"first // 第一个")]),s(`
`),n("span",{class:"line"},[n("span",null,"last // 最后一个")]),s(`
`),n("span",{class:"line"},[n("span",null,"prev // 上一个")]),s(`
`),n("span",{class:"line"},[n("span",null,"current // 当前项")]),s(`
`),n("span",{class:"line"},[n("span",null,"next // 下一个")]),s(`
`),n("span",{class:"line"},[n("span",null,"forward // 向前")]),s(`
`),n("span",{class:"line"},[n("span",null,"back // 向后")])])]),n("button",{class:"collapse"})],-1)),a[11]||(a[11]=n("h3",{id:"尺寸命名",tabindex:"-1"},[s("尺寸命名 "),n("a",{class:"header-anchor",href:"#尺寸命名","aria-label":'Permalink to "尺寸命名"'},"​")],-1)),a[12]||(a[12]=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"large // 大")]),s(`
`),n("span",{class:"line"},[n("span",null,"middle // 中")]),s(`
`),n("span",{class:"line"},[n("span",null,"small // 小")]),s(`
`),n("span",{class:"line"},[n("span",null,"mini // 迷你")])])]),n("button",{class:"collapse"})],-1)),a[13]||(a[13]=n("h3",{id:"位置",tabindex:"-1"},[s("位置 "),n("a",{class:"header-anchor",href:"#位置","aria-label":'Permalink to "位置"'},"​")],-1)),a[14]||(a[14]=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"top // 上")]),s(`
`),n("span",{class:"line"},[n("span",null,"bottom // 下")]),s(`
`),n("span",{class:"line"},[n("span",null,"left // 左")]),s(`
`),n("span",{class:"line"},[n("span",null,"right // 右")]),s(`
`),n("span",{class:"line"},[n("span",null,"center // 居中")])])]),n("button",{class:"collapse"})],-1)),a[15]||(a[15]=n("h3",{id:"css-样式文件名",tabindex:"-1"},[s("CSS 样式文件名 "),n("a",{class:"header-anchor",href:"#css-样式文件名","aria-label":'Permalink to "CSS 样式文件名"'},"​")],-1)),a[16]||(a[16]=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"index.css //  一般用于首页建立样式")]),s(`
`),n("span",{class:"line"},[n("span",null,"head.css //  头部样式，当多个页面头部设计风格相同时使用。")]),s(`
`),n("span",{class:"line"},[n("span",null,"base.css //  共用样式。")]),s(`
`),n("span",{class:"line"},[n("span",null,"style.css // 独立页面所使用的样式文件。")]),s(`
`),n("span",{class:"line"},[n("span",null,"global.css // 页面样式基础，全局公用样式，页面中必须包含。")]),s(`
`),n("span",{class:"line"},[n("span",null,"layout.css // 布局、版面样式，公用类型较多时使用，一般用在首页级页面和产品类页面中")]),s(`
`),n("span",{class:"line"},[n("span",null,"module.css // 模块，用于产品类页，也可与其它样式配合使用。")]),s(`
`),n("span",{class:"line"},[n("span",null,"master.css // 主要的样式表")]),s(`
`),n("span",{class:"line"},[n("span",null,"columns.css // 专栏样式")]),s(`
`),n("span",{class:"line"},[n("span",null,"themes.css // 主体样式")]),s(`
`),n("span",{class:"line"},[n("span",null,"forms.css // 表单样式")]),s(`
`),n("span",{class:"line"},[n("span",null,"mend.css // 补丁，基于以上样式进行的私有化修补。")]),s(`
`),n("span",{class:"line"},[n("span",null,"print.css // 打印")])])]),n("button",{class:"collapse"})],-1)),a[17]||(a[17]=n("h3",{id:"注意事项",tabindex:"-1"},[s("注意事项 "),n("a",{class:"header-anchor",href:"#注意事项","aria-label":'Permalink to "注意事项"'},"​")],-1)),a[18]||(a[18]=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"// 使用BEM命名约定，块（block）、元素（element）、修饰符（modifier）")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,".my-btn {}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,".my_btn--primary {}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,".my_btn--success {}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,".my-btn__inner {}")])])]),n("button",{class:"collapse"})],-1)),a[19]||(a[19]=n("h3",{id:"注释规范",tabindex:"-1"},[s("注释规范 "),n("a",{class:"header-anchor",href:"#注释规范","aria-label":'Permalink to "注释规范"'},"​")],-1)),a[20]||(a[20]=n("div",{class:"language- vp-adaptive-theme"},[n("button",{title:"Copy Code",class:"copy"}),n("span",{class:"lang"}),n("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[n("code",{"v-pre":""},[n("span",{class:"line"},[n("span",null,"1）文件顶部注释（推荐使用）")]),s(`
`),n("span",{class:"line"},[n("span",null,"   /*")]),s(`
`),n("span",{class:"line"},[n("span",null,"    * @description: 说明")]),s(`
`),n("span",{class:"line"},[n("span",null,"    * @author: 张三")]),s(`
`),n("span",{class:"line"},[n("span",null,"    * @update: zhangsan (2021-04-13 18:32)")]),s(`
`),n("span",{class:"line"},[n("span",null,"    */")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"2）模块注释")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* module: module1 by 张三 */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    …")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* module: module2 by 张三 */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // 模块注释必须单独写在一行")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"3）单行注释")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* this is a short comment */")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"4）多行注释")]),s(`
`),n("span",{class:"line"},[n("span",null,"   /*")]),s(`
`),n("span",{class:"line"},[n("span",null,"    * this is comment line 1.")]),s(`
`),n("span",{class:"line"},[n("span",null,"    * this is comment line 2.")]),s(`
`),n("span",{class:"line"},[n("span",null,"    */")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"5）特殊注释")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* TODO: xxxx by name 2022-06-01 18:32 */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    //用于标注修改、待办等信息")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"6）区块注释")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* Header */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* Footer */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    /* Gallery */")]),s(`
`),n("span",{class:"line"},[n("span",null,"    // 对一个代码区块注释（可选），将样式语句分区块并在新行中对其注释。")])])]),n("button",{class:"collapse"})],-1))]),"main-header":l(()=>[p(e.$slots,"main-header")]),"main-header-after":l(()=>[p(e.$slots,"main-header-after")]),"main-nav":l(()=>[p(e.$slots,"main-nav")]),"main-content-before":l(()=>[p(e.$slots,"main-content-before")]),"main-content":l(()=>[p(e.$slots,"main-content")]),"main-content-after":l(()=>[p(e.$slots,"main-content-after")]),"main-nav-before":l(()=>[p(e.$slots,"main-nav-before")]),"main-nav-after":l(()=>[p(e.$slots,"main-nav-after")]),comment:l(()=>[p(e.$slots,"comment")]),footer:l(()=>[p(e.$slots,"footer")]),aside:l(()=>[p(e.$slots,"aside")]),"aside-custom":l(()=>[p(e.$slots,"aside-custom")]),default:l(()=>[p(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{M as default,S as usePageData};

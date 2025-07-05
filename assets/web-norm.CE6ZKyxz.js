import{_ as g}from"./ValaxyMain.vue_vue_type_style_index_0_lang.CIL-wNNu.js";import"./chunks/@vueuse/motion.BGpQrJjG.js";import{e as b,a as m,u as v}from"./chunks/vue-router.OOYc_mqb.js";import{aa as h,al as a,ag as i,ad as l,af as f,ai as n,O as k,ab as y,a1 as C}from"./framework.BdGZ-rKc.js";import"./app.D3XzE9pG.js";import"./chunks/dayjs.Byk5cVHE.js";import"./chunks/vue-i18n.856TSABw.js";import"./chunks/pinia.xb6ucoOY.js";import"./chunks/nprogress.BrJnU_18.js";import"./YunComment.vue_vue_type_style_index_0_lang.D8XNg0Sh.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.Df-oOa0z.js";import"./post.DJQWuogS.js";const x=b("/posts/web-norm",async p=>JSON.parse('{"title":"前端开发规范：命名规范、html规范、css规范、js规范","description":"","frontmatter":{"title":"前端开发规范：命名规范、html规范、css规范、js规范","tags":["前端"],"categories":"思米米的小笔记","date":"2022-06-01 14:52:13","updated":"2022-06-01 14:52:13"},"headers":[],"relativePath":"pages/posts/web-norm.md","lastUpdated":1751687172000}'),{lazy:(p,t)=>p.name===t.name}),H={__name:"web-norm",setup(p,{expose:t}){const{data:o}=x(),r=v(),d=m(),u=Object.assign(d.meta.frontmatter||{},o.value?.frontmatter||{});return r.currentRoute.value.data=o.value,C("valaxy:frontmatter",u),globalThis.$frontmatter=u,t({frontmatter:{title:"前端开发规范：命名规范、html规范、css规范、js规范",tags:["前端"],categories:"思米米的小笔记",date:"2022-06-01 14:52:13",updated:"2022-06-01 14:52:13"}}),(e,s)=>{const c=g;return y(),h(c,{frontmatter:k(u)},{"main-content-md":a(()=>[s[0]||(s[0]=l("h2",{id:"前端开发规范-命名规范、html规范、css规范、js规范",tabindex:"-1"},[n("前端开发规范：命名规范、html规范、css规范、js规范 "),l("a",{class:"header-anchor",href:"#前端开发规范-命名规范、html规范、css规范、js规范","aria-label":'Permalink to "前端开发规范：命名规范、html规范、css规范、js规范"'},"​")],-1)),s[1]||(s[1]=l("p",null,"一个好的程序员肯定是要能书写可维护的代码，而不是一次性的代码，怎么能让团队当中其他人甚至一段时间时候你再看你某个时候写的代码也能看懂呢，这就需要规范你的代码了。",-1)),s[2]||(s[2]=l("h2",{id:"命名",tabindex:"-1"},[n("命名 "),l("a",{class:"header-anchor",href:"#命名","aria-label":'Permalink to "命名"'},"​")],-1)),s[3]||(s[3]=l("h3",{id:"驼峰式命名法介绍",tabindex:"-1"},[n("驼峰式命名法介绍 "),l("a",{class:"header-anchor",href:"#驼峰式命名法介绍","aria-label":'Permalink to "驼峰式命名法介绍"'},"​")],-1)),s[4]||(s[4]=l("ul",null,[l("li",null,[l("p",null,"Pascal Case 大驼峰式命名法：首字母大写。eg：StudentInfo、UserInfo、ProductInfo")]),l("li",null,[l("p",null,"Camel Case 小驼峰式命名法：首字母小写。eg：studentInfo、userInfo、productInfo")])],-1)),f(" more "),s[5]||(s[5]=l("h3",{id:"文件资源命名",tabindex:"-1"},[n("文件资源命名 "),l("a",{class:"header-anchor",href:"#文件资源命名","aria-label":'Permalink to "文件资源命名"'},"​")],-1)),s[6]||(s[6]=l("ul",null,[l("li",null,[l("p",null,"文件名不得含有空格")]),l("li",null,[l("p",null,"文件名建议只使用小写字母，不使用大写字母。( 为了醒目，某些说明文件的文件名，可以使用大写字母，比如README、LICENSE。 )")]),l("li",null,[l("p",null,"文件名包含多个单词时，单词之间建议使用半角的连词线 ( - ) 分隔。")]),l("li",null,[l("p",null,[n("引入资源使用相对路径，不要指定资源所带的具体协议 ( "),l("code",null,"http:"),n(","),l("code",null,"https:"),n(" ) ，除非这两者协议都不可用。")])])],-1)),s[7]||(s[7]=l("p",null,"不推荐：",-1)),s[8]||(s[8]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,'<script src="http://cdn.com/foundation.min.js"><\/script>')])])]),l("button",{class:"collapse"})],-1)),s[9]||(s[9]=l("p",null,"推荐",-1)),s[10]||(s[10]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,'<script src="//cdn.com/foundation.min.js"><\/script>')])])]),l("button",{class:"collapse"})],-1)),s[11]||(s[11]=l("h3",{id:"变量命名",tabindex:"-1"},[n("变量命名 "),l("a",{class:"header-anchor",href:"#变量命名","aria-label":'Permalink to "变量命名"'},"​")],-1)),s[12]||(s[12]=l("p",null,[l("strong",null,"命名方式"),n(" : 小驼峰式命名方法 "),l("strong",null,"命名规范"),n(" : 类型+对象描述的方式，如果没有明确的类型，就可以使前缀为名词")],-1)),s[13]||(s[13]=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"类型"),l("th",null,"小写字母")])]),l("tbody",null,[l("tr",null,[l("td",null,"array"),l("td",null,"a")]),l("tr",null,[l("td",null,"boolean"),l("td",null,"b")]),l("tr",null,[l("td",null,"function"),l("td",null,"fn")]),l("tr",null,[l("td",null,"int"),l("td",null,"i")]),l("tr",null,[l("td",null,"object"),l("td",null,"o")]),l("tr",null,[l("td",null,"regular"),l("td",null,"r")]),l("tr",null,[l("td",null,"string"),l("td",null,"s")])])],-1)),s[14]||(s[14]=l("p",null,"推荐",-1)),s[15]||(s[15]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,'let tableTitle = "LoginTable"')])])]),l("button",{class:"collapse"})],-1)),s[16]||(s[16]=l("p",null,"不推荐",-1)),s[17]||(s[17]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,'let getTitle = "LoginTable"')])])]),l("button",{class:"collapse"})],-1)),s[18]||(s[18]=l("h3",{id:"函数",tabindex:"-1"},[n("函数 "),l("a",{class:"header-anchor",href:"#函数","aria-label":'Permalink to "函数"'},"​")],-1)),s[19]||(s[19]=l("p",null,[l("strong",null,"命名方式"),n(" : 小驼峰方式 ( 构造函数使用大驼峰命名法 ) "),l("strong",null,"命名规则"),n(" : 前缀为动词")],-1)),s[20]||(s[20]=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"动词"),l("th",null,"含义"),l("th",null,"返回值")])]),l("tbody",null,[l("tr",null,[l("td",null,"can"),l("td",null,"判断是否可执行某个动作 ( 权限 )"),l("td",null,"函数返回一个布尔值。true：可执行；false：不可执行")]),l("tr",null,[l("td",null,"has"),l("td",null,"判断是否含有某个值"),l("td",null,"函数返回一个布尔值。true：含有此值；false：不含有此值")]),l("tr",null,[l("td",null,"is"),l("td",null,"判断是否为某个值"),l("td",null,"函数返回一个布尔值。true：为某个值；false：不为某个值")]),l("tr",null,[l("td",null,"get"),l("td",null,"获取某个值"),l("td",null,"函数返回一个非布尔值")]),l("tr",null,[l("td",null,"set"),l("td",null,"设置某个值"),l("td",null,"无返回值、返回是否设置成功或者返回链式对象")])])],-1)),s[21]||(s[21]=l("p",null,"推荐：",-1)),s[22]||(s[22]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"//是否可阅读")]),n(`
`),l("span",{class:"line"},[l("span",null,"function canRead(){")]),n(`
`),l("span",{class:"line"},[l("span",null,"    return true;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"//获取姓名")]),n(`
`),l("span",{class:"line"},[l("span",null,"function getName{")]),n(`
`),l("span",{class:"line"},[l("span",null,"    return this.name")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[23]||(s[23]=l("h3",{id:"常量",tabindex:"-1"},[n("常量 "),l("a",{class:"header-anchor",href:"#常量","aria-label":'Permalink to "常量"'},"​")],-1)),s[24]||(s[24]=l("p",null,[l("strong",null,"命名方法"),n(" : 全部大写 "),l("strong",null,"命名规范"),n(" : 使用大写字母和下划线来组合命名，下划线用以分割单词。 推荐：")],-1)),s[25]||(s[25]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null," const MAX_COUNT = 10;")]),n(`
`),l("span",{class:"line"},[l("span",null," const URL = 'http://www.baidu.com';")])])]),l("button",{class:"collapse"})],-1)),s[26]||(s[26]=l("h2",{id:"类的成员",tabindex:"-1"},[n("类的成员 "),l("a",{class:"header-anchor",href:"#类的成员","aria-label":'Permalink to "类的成员"'},"​")],-1)),s[27]||(s[27]=l("ul",null,[l("li",null,"公共属性和方法 : 同变量命名方式"),l("li",null,"私有属性和方法 : 前缀为下划线(_)后面跟公共属性和方法一样的命名方式")],-1)),s[28]||(s[28]=l("p",null,[n("推荐(将"),l("code",null,"name"),n("换成"),l("code",null,"this"),n("是不是更熟悉了呢)")],-1)),s[29]||(s[29]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"function Student(name) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    let _name = name; // 私有成员")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"    // 公共方法")]),n(`
`),l("span",{class:"line"},[l("span",null,"    this.getName = function () {")]),n(`
`),l("span",{class:"line"},[l("span",null,"        return _name;")]),n(`
`),l("span",{class:"line"},[l("span",null,"    }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"    // 公共方式")]),n(`
`),l("span",{class:"line"},[l("span",null,"    this.setName = function (value) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"        _name = value;")]),n(`
`),l("span",{class:"line"},[l("span",null,"    }")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")]),n(`
`),l("span",{class:"line"},[l("span",null,"let st = new Student('tom');")]),n(`
`),l("span",{class:"line"},[l("span",null,"st.setName('jerry');")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log(st.getName()); // => jerry：输出_name私有变量的值")])])]),l("button",{class:"collapse"})],-1)),s[30]||(s[30]=l("h2",{id:"注释规范",tabindex:"-1"},[n("注释规范 "),l("a",{class:"header-anchor",href:"#注释规范","aria-label":'Permalink to "注释规范"'},"​")],-1)),s[31]||(s[31]=l("h3",{id:"单行注释",tabindex:"-1"},[n("单行注释 ( // ) "),l("a",{class:"header-anchor",href:"#单行注释","aria-label":'Permalink to "单行注释 ( // )"'},"​")],-1)),s[32]||(s[32]=l("ul",null,[l("li",null,"单独一行：//(双斜线)与注释文字之间保留一个空格"),l("li",null,"在代码后面添加注释：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格。"),l("li",null,"注释代码：//(双斜线)与代码之间保留一个空格。")],-1)),s[33]||(s[33]=l("p",null,"推荐 :",-1)),s[34]||(s[34]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"// 调用了一个函数；1)单独在一行")]),n(`
`),l("span",{class:"line"},[l("span",null,"setTitle();")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"let maxCount = 10; // 设置最大量；2)在代码后面注释")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"// setName();"),l("span",null," // 3)注释代码")])])]),l("button",{class:"collapse"})],-1)),s[35]||(s[35]=l("h3",{id:"多行注释-注释说明",tabindex:"-1"},[n("多行注释 ( / "),l("em",null,"注释说明"),n(" / ) "),l("a",{class:"header-anchor",href:"#多行注释-注释说明","aria-label":'Permalink to "多行注释 ( / *注释说明* / )"'},"​")],-1)),s[36]||(s[36]=l("ul",null,[l("li",null,[l("p",null,[n("若开始(/"),l("code",null,"*"),n("和结束("),l("code",null,"*"),n("/)都在一行，推荐采用单行注释")])]),l("li",null,[l("p",null,[n("若至少三行注释时，第一行为/"),l("code",null,"*"),n("，最后行为"),l("code",null,"*"),n("/，其他行以"),l("code",null,"*"),n("开始，并且注释文字与"),l("code",null,"*"),n("保留一个空格。")]),l("p",null,"推荐 :"),l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"/*")]),n(`
`),l("span",{class:"line"},[l("span",null,"* 代码执行到这里后会调用setTitle()函数")]),n(`
`),l("span",{class:"line"},[l("span",null,"* setTitle()：设置title的值")]),n(`
`),l("span",{class:"line"},[l("span",null,"*/")]),n(`
`),l("span",{class:"line"},[l("span",null,"setTitle();")])])]),l("button",{class:"collapse"})])])],-1)),s[37]||(s[37]=l("h3",{id:"函数-方法-注释",tabindex:"-1"},[n("函数 ( 方法 ) 注释 "),l("a",{class:"header-anchor",href:"#函数-方法-注释","aria-label":'Permalink to "函数 ( 方法 ) 注释"'},"​")],-1)),s[38]||(s[38]=l("p",null,[n("函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求，参照 "),l("a",{href:"https://baike.baidu.com/item/javadoc",target:"_blank",rel:"noreferrer"},"javadoc(百度百科)"),n(" 语法：")],-1)),s[39]||(s[39]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"/** ")]),n(`
`),l("span",{class:"line"},[l("span",null,"* 函数说明 ")]),n(`
`),l("span",{class:"line"},[l("span",null,"* @关键字 ")]),n(`
`),l("span",{class:"line"},[l("span",null,"*/")])])]),l("button",{class:"collapse"})],-1)),s[40]||(s[40]=l("p",null,"常用注释关键字",-1)),s[41]||(s[41]=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"注释名"),l("th",null,"语法"),l("th",null,"含义"),l("th",null,"示例")])]),l("tbody",null,[l("tr",null,[l("td",null,"@param"),l("td",null,"@param 参数名 {参数类型} 描述信息"),l("td",null,"描述参数的信息"),l("td",null,"@param name {String} 传入名称")]),l("tr",null,[l("td",null,"@return"),l("td",null,"@return {返回类型} 描述信息"),l("td",null,"描述返回值的信息"),l("td",null,"@return {Boolean} true:可执行;false:不可执行")]),l("tr",null,[l("td",null,"@author"),l("td",null,"@author 作者信息 [附属信息：如邮箱、日期]"),l("td",null,"描述此函数作者的信息"),l("td",null,"@author 张三 2015/07/21")]),l("tr",null,[l("td",null,"@version"),l("td",null,"@version XX.XX.XX"),l("td",null,"描述此函数的版本号"),l("td",null,"@version 1.0.3")]),l("tr",null,[l("td",null,"@example"),l("td",null,"@example 示例代码"),l("td",null,"@example setTitle('测试')"),l("td",null,"如下")])])],-1)),s[42]||(s[42]=l("p",null,"推荐 :",-1)),s[43]||(s[43]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"/**")]),n(`
`),l("span",{class:"line"},[l("span",null," - 合并Grid的行")]),n(`
`),l("span",{class:"line"},[l("span",null," - @param grid {Ext.Grid.Panel} 需要合并的Grid")]),n(`
`),l("span",{class:"line"},[l("span",null," - @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。")]),n(`
`),l("span",{class:"line"},[l("span",null," - @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样")]),n(`
`),l("span",{class:"line"},[l("span",null," - @return void")]),n(`
`),l("span",{class:"line"},[l("span",null," - @author polk6 2015/07/21 ")]),n(`
`),l("span",{class:"line"},[l("span",null," - @example")]),n(`
`),l("span",{class:"line"},[l("span",null," - _________________                             _________________")]),n(`
`),l("span",{class:"line"},[l("span",null," - |  年龄 |  姓名 |                             |  年龄 |  姓名 |")]),n(`
`),l("span",{class:"line"},[l("span",null," - -----------------      mergeCells(grid,[0])   -----------------")]),n(`
`),l("span",{class:"line"},[l("span",null," - |  18   |  张三 |              =>             |       |  张三 |")]),n(`
`),l("span",{class:"line"},[l("span",null," - -----------------                             -  18   ---------")]),n(`
`),l("span",{class:"line"},[l("span",null," - |  18   |  王五 |                             |       |  王五 |")]),n(`
`),l("span",{class:"line"},[l("span",null," - -----------------                             -----------------")]),n(`
`),l("span",{class:"line"},[l("span",null,"*/")]),n(`
`),l("span",{class:"line"},[l("span",null,"function mergeCells(grid, cols, isAllSome) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    // Do Something")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[44]||(s[44]=l("h2",{id:"html规范",tabindex:"-1"},[n("HTML规范 "),l("a",{class:"header-anchor",href:"#html规范","aria-label":'Permalink to "HTML规范"'},"​")],-1)),s[45]||(s[45]=l("h3",{id:"文档规范",tabindex:"-1"},[n("文档规范 "),l("a",{class:"header-anchor",href:"#文档规范","aria-label":'Permalink to "文档规范"'},"​")],-1)),s[46]||(s[46]=l("p",null,[n("使用 HTML5 的文档声明类型 : "),l("code",null,"<!DOCTYPE html>")],-1)),s[47]||(s[47]=l("ul",null,[l("li",null,"DOCTYPE标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（DTD）来解析文档。"),l("li",null,"使用文档声明类型的作用是为了防止开启浏览器的怪异模式。"),l("li",null,"没有DOCTYPE文档类型声明会开启浏览器的怪异模式，浏览器会按照自己的解析方式渲染页面，在不同的浏览器下面会有不同的样式。"),l("li",null,"如果你的页面添加了<!DOCTYP>那么，那么就等同于开启了标准模式。浏览器会按照W3C标准解析渲染页面。")],-1)),s[48]||(s[48]=l("h3",{id:"脚本加载",tabindex:"-1"},[n("脚本加载 "),l("a",{class:"header-anchor",href:"#脚本加载","aria-label":'Permalink to "脚本加载"'},"​")],-1)),s[49]||(s[49]=l("p",null,[n("说到js和css的位置，大家应该都知道js放在下面，css放在上面。 但是，如果你的项目只需要兼容ie10+或者只是在移动端访问，那么可以使用HTML5的新属性"),l("code",null,"async"),n("，将脚本文件放在"),l("code",null,"<head>"),n("内 "),l("strong",null,"兼容老旧浏览器(IE9-)时"),n("： 脚本引用写在 body 结束标签之前，并带上 async 属性。这虽然在老旧浏览器中不会异步加载脚本，但它只阻塞了 body 结束标签之前的 DOM 解析，这就大大降低了其阻塞影响。 "),l("strong",null,"而在现代浏览器中"),n("： 脚本将在 DOM 解析器发现 body 尾部的 script 标签才进行加载，此时加载属于异步加载，不会阻塞 CSSOM（但其执行仍发生在 CSSOM 之后）。 综上所述， 所有浏览器中推荐:")],-1)),s[50]||(s[50]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"<html>")]),n(`
`),l("span",{class:"line"},[l("span",null,"  <head>")]),n(`
`),l("span",{class:"line"},[l("span",null,'    <link rel="stylesheet" href="main.css">')]),n(`
`),l("span",{class:"line"},[l("span",null,"  </head>")]),n(`
`),l("span",{class:"line"},[l("span",null,"  <body>")]),n(`
`),l("span",{class:"line"},[l("span",null,"    <!-- body goes here -->")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,'    <script src="main.js" async><\/script>')]),n(`
`),l("span",{class:"line"},[l("span",null,"  </body>")]),n(`
`),l("span",{class:"line"},[l("span",null,"</html>")])])]),l("button",{class:"collapse"})],-1)),s[51]||(s[51]=l("p",null,"只兼容现代浏览器推荐:",-1)),s[52]||(s[52]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"<html>")]),n(`
`),l("span",{class:"line"},[l("span",null,"  <head>")]),n(`
`),l("span",{class:"line"},[l("span",null,'    <link rel="stylesheet" href="main.css">')]),n(`
`),l("span",{class:"line"},[l("span",null,'    <script src="main.js" async><\/script>')]),n(`
`),l("span",{class:"line"},[l("span",null,"  </head>")]),n(`
`),l("span",{class:"line"},[l("span",null,"  <body>")]),n(`
`),l("span",{class:"line"},[l("span",null,"    <!-- body goes here -->")]),n(`
`),l("span",{class:"line"},[l("span",null,"  </body>")]),n(`
`),l("span",{class:"line"},[l("span",null,"</html>")])])]),l("button",{class:"collapse"})],-1)),s[53]||(s[53]=l("h3",{id:"语义化",tabindex:"-1"},[n("语义化 "),l("a",{class:"header-anchor",href:"#语义化","aria-label":'Permalink to "语义化"'},"​")],-1)),s[54]||(s[54]=l("p",null,"我们一直都在说语义化编程，语义化编程，但是在代码中很少有人完全使用正确的元素。使用语义化标签也是有理由SEO的。",-1)),s[55]||(s[55]=l("blockquote",null,[l("p",null,[n("语义化是指：根据元素其被创造出来时的初始意义来使用它。 意思就是用正确的标签干正确的事，而不是只有"),l("code",null,"div"),n("和"),l("code",null,"span"),n("。")])],-1)),s[56]||(s[56]=l("p",null,"不推荐：",-1)),s[57]||(s[57]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"<b>My page title</b>")]),n(`
`),l("span",{class:"line"},[l("span",null,'<div class="top-navigation">')]),n(`
`),l("span",{class:"line"},[l("span",null,'  <div class="nav-item"><a href="#home">Home</a></div>')]),n(`
`),l("span",{class:"line"},[l("span",null,'  <div class="nav-item"><a href="#news">News</a></div>')]),n(`
`),l("span",{class:"line"},[l("span",null,'  <div class="nav-item"><a href="#about">About</a></div>')]),n(`
`),l("span",{class:"line"},[l("span",null,"</div>")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,'<div class="news-page">')]),n(`
`),l("span",{class:"line"},[l("span",null,'  <div class="page-section news">')]),n(`
`),l("span",{class:"line"},[l("span",null,'    <div class="title">All news articles</div>')]),n(`
`),l("span",{class:"line"},[l("span",null,'    <div class="news-article">')]),n(`
`),l("span",{class:"line"},[l("span",null,"      <h2>Bad article</h2>")]),n(`
`),l("span",{class:"line"},[l("span",null,'      <div class="intro">Introduction sub-title</div>')]),n(`
`),l("span",{class:"line"},[l("span",null,'      <div class="content">This is a very bad example for HTML semantics</div>')]),n(`
`),l("span",{class:"line"},[l("span",null,`      <div class="article-side-notes">I think I'm more on the side and should not receive the main credits</div>`)]),n(`
`),l("span",{class:"line"},[l("span",null,'      <div class="article-foot-notes">')]),n(`
`),l("span",{class:"line"},[l("span",null,'        This article was created by David <div class="time">2014-01-01 00:00</div>')]),n(`
`),l("span",{class:"line"},[l("span",null,"      </div>")]),n(`
`),l("span",{class:"line"},[l("span",null,"    </div>")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,'    <div class="section-footer">')]),n(`
`),l("span",{class:"line"},[l("span",null,"      Related sections: Events, Public holidays")]),n(`
`),l("span",{class:"line"},[l("span",null,"    </div>")]),n(`
`),l("span",{class:"line"},[l("span",null,"  </div>")]),n(`
`),l("span",{class:"line"},[l("span",null,"</div>")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,'<div class="page-footer">')]),n(`
`),l("span",{class:"line"},[l("span",null,"  Copyright 2014")]),n(`
`),l("span",{class:"line"},[l("span",null,"</div>")])])]),l("button",{class:"collapse"})],-1)),s[58]||(s[58]=l("p",null,"推荐",-1)),s[59]||(s[59]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"html 代码:")]),n(`
`),l("span",{class:"line"},[l("span",null,"<!-- The page header should go into a header element -->")]),n(`
`),l("span",{class:"line"},[l("span",null,"<header>")]),n(`
`),l("span",{class:"line"},[l("span",null,"  <!-- As this title belongs to the page structure it's a heading and h1 should be used -->")]),n(`
`),l("span",{class:"line"},[l("span",null,"  <h1>My page title</h1>")]),n(`
`),l("span",{class:"line"},[l("span",null,"</header>")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"<!-- All navigation should go into a nav element -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'<nav class="top-navigation">')]),n(`
`),l("span",{class:"line"},[l("span",null,"  <!-- A listing of elements should always go to UL (OL for ordered listings) -->")]),n(`
`),l("span",{class:"line"},[l("span",null,"  <ul>")]),n(`
`),l("span",{class:"line"},[l("span",null,'    <li class="nav-item"><a href="#home">Home</a></li>')]),n(`
`),l("span",{class:"line"},[l("span",null,'    <li class="nav-item"><a href="#news">News</a></li>')]),n(`
`),l("span",{class:"line"},[l("span",null,'    <li class="nav-item"><a href="#about">About</a></li>')]),n(`
`),l("span",{class:"line"},[l("span",null,"  </ul>")]),n(`
`),l("span",{class:"line"},[l("span",null,"</nav>")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,'<!-- The main part of the page should go into a main element (also use role="main" for accessibility) -->')]),n(`
`),l("span",{class:"line"},[l("span",null,'<main class="news-page" role="main">')]),n(`
`),l("span",{class:"line"},[l("span",null,"  <!-- A section of a page should go into a section element. Divide a page into sections with semantic elements. -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'  <section class="page-section news">')]),n(`
`),l("span",{class:"line"},[l("span",null,"    <!-- A section header should go into a section element -->")]),n(`
`),l("span",{class:"line"},[l("span",null,"    <header>")]),n(`
`),l("span",{class:"line"},[l("span",null,"      <!-- As a page section belongs to the page structure heading elements should be used (in this case h2) -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'      <h2 class="title">All news articles</h2>')]),n(`
`),l("span",{class:"line"},[l("span",null,"    </header>")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"    <!-- If a section / module can be seen as an article (news article, blog entry, products teaser, any other")]),n(`
`),l("span",{class:"line"},[l("span",null,"     re-usable module / section that can occur multiple times on a page) a article element should be used -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'    <article class="news-article">')]),n(`
`),l("span",{class:"line"},[l("span",null,"      <!-- An article can contain a header that contains the summary / introduction information of the article -->")]),n(`
`),l("span",{class:"line"},[l("span",null,"      <header>")]),n(`
`),l("span",{class:"line"},[l("span",null,"        <!-- As a article title does not belong to the overall page structure there should not be any heading tag! -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'        <div class="article-title">Good article</div>')]),n(`
`),l("span",{class:"line"},[l("span",null,"        <!-- Small can optionally be used to reduce importance -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'        <small class="intro">Introduction sub-title</small>')]),n(`
`),l("span",{class:"line"},[l("span",null,"      </header>")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"      <!-- For the main content in a section or article there is no semantic element -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'      <div class="content">')]),n(`
`),l("span",{class:"line"},[l("span",null,"        <p>This is a good example for HTML semantics</p>")]),n(`
`),l("span",{class:"line"},[l("span",null,"      </div>")]),n(`
`),l("span",{class:"line"},[l("span",null,"      <!-- For content that is represented as side note or less important information in a given context use aside -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'      <aside class="article-side-notes">')]),n(`
`),l("span",{class:"line"},[l("span",null,"        <p>I think I'm more on the side and should not receive the main credits</p>")]),n(`
`),l("span",{class:"line"},[l("span",null,"      </aside>")]),n(`
`),l("span",{class:"line"},[l("span",null,"      <!-- Articles can also contain footers. If you have footnotes for an article place them into a footer element -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'      <footer class="article-foot-notes">')]),n(`
`),l("span",{class:"line"},[l("span",null,"        <!-- The time element can be used to annotate a timestamp. Use the datetime attribute to specify ISO time")]),n(`
`),l("span",{class:"line"},[l("span",null,"         while the actual text in the time element can also be more human readable / relative -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'        <p>This article was created by David <time datetime="2014-01-01 00:00" class="time">1 month ago</time></p>')]),n(`
`),l("span",{class:"line"},[l("span",null,"      </footer>")]),n(`
`),l("span",{class:"line"},[l("span",null,"    </article>")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"    <!-- In a section, footnotes or similar information can also go into a footer element -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'    <footer class="section-footer">')]),n(`
`),l("span",{class:"line"},[l("span",null,"      <p>Related sections: Events, Public holidays</p>")]),n(`
`),l("span",{class:"line"},[l("span",null,"    </footer>")]),n(`
`),l("span",{class:"line"},[l("span",null,"  </section>")]),n(`
`),l("span",{class:"line"},[l("span",null,"</main>")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"<!-- Your page footer should go into a global footer element -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'<footer class="page-footer">')]),n(`
`),l("span",{class:"line"},[l("span",null,"  Copyright 2014")]),n(`
`),l("span",{class:"line"},[l("span",null,"</footer>")])])]),l("button",{class:"collapse"})],-1)),s[60]||(s[60]=l("h3",{id:"alt标签不为空",tabindex:"-1"},[n("alt标签不为空 "),l("a",{class:"header-anchor",href:"#alt标签不为空","aria-label":'Permalink to "alt标签不为空"'},"​")],-1)),s[61]||(s[61]=l("p",null,[l("img"),n("标签的 alt 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。假设由于下列原因用户无法查看图像，alt 属性可以为图像提供替代的信息：")],-1)),s[62]||(s[62]=l("ul",null,[l("li",null,"网速太慢"),l("li",null,"src 属性中的错误"),l("li",null,"浏览器禁用图像"),l("li",null,"用户使用的是屏幕阅读器")],-1)),s[63]||(s[63]=l("p",null,"从SEO角度考虑，浏览器的爬虫爬不到图片的内容，所以我们要有文字告诉爬虫图片的内容",-1)),s[64]||(s[64]=l("h2",{id:"结构、表现、行为三者分离",tabindex:"-1"},[n("结构、表现、行为三者分离 "),l("a",{class:"header-anchor",href:"#结构、表现、行为三者分离","aria-label":'Permalink to "结构、表现、行为三者分离"'},"​")],-1)),s[65]||(s[65]=l("p",null,"尽量在文档和模板中只包含结构性的 HTML；而将所有表现代码，移入样式表中；将所有动作行为，移入脚本之中。 在此之外，为使得它们之间的联系尽可能的小，在文档和模板中也尽量少地引入样式和脚本文件。 建议：",-1)),s[66]||(s[66]=l("ul",null,[l("li",null,"不使用超过一到两张样式表"),l("li",null,"不使用超过一到两个脚本（学会用合并脚本）"),l("li",null,[n("不使用行内样式（"),l("code",null,"<style>.no-good {}</style>"),n("）")]),l("li",null,[n("不在元素上使用 style 属性（"),l("code",null,'<hr style="border-top: 5px solid black">'),n("）")]),l("li",null,[n("不使用行内脚本（"),l("code",null,"<script>alert('no good')<\/script>"),n("）")]),l("li",null,[n("不使用表象元素（"),l("code",null,"i.e. <b>, <u>, <center>, <font>, <b>"),n("）")]),l("li",null,[n("不使用表象 class 名（"),l("code",null,"i.e. red, left, center"),n("）")])],-1)),s[67]||(s[67]=l("h3",{id:"html只关注内容",tabindex:"-1"},[n("HTML只关注内容 "),l("a",{class:"header-anchor",href:"#html只关注内容","aria-label":'Permalink to "HTML只关注内容"'},"​")],-1)),s[68]||(s[68]=l("ul",null,[l("li",null,"HTML只显示展示内容信息"),l("li",null,"不要引入一些特定的 HTML 结构来解决一些视觉设计问题"),l("li",null,[n("不要将"),l("code",null,"img"),n("元素当做专门用来做视觉设计的元素")]),l("li",null,"样式上的问题应该使用css解决")],-1)),s[69]||(s[69]=l("p",null,"不推荐：",-1)),s[70]||(s[70]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"<!-- We should not introduce an additional element just to solve a design problem  -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'<span class="text-box">')]),n(`
`),l("span",{class:"line"},[l("span",null,'  <span class="square"></span>')]),n(`
`),l("span",{class:"line"},[l("span",null,"  See the square next to me?")]),n(`
`),l("span",{class:"line"},[l("span",null,"</span>")]),n(`
`),l("span",{class:"line"},[l("span",null,"css 代码:")]),n(`
`),l("span",{class:"line"},[l("span",null,".text-box > .square {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  display: inline-block;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  width: 1rem;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  height: 1rem;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  background-color: red;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[71]||(s[71]=l("p",null,"推荐",-1)),s[72]||(s[72]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"html 代码:")]),n(`
`),l("span",{class:"line"},[l("span",null,"<!-- That's clean markup! -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'<span class="text-box">')]),n(`
`),l("span",{class:"line"},[l("span",null,"  See the square next to me?")]),n(`
`),l("span",{class:"line"},[l("span",null,"</span>")]),n(`
`),l("span",{class:"line"},[l("span",null,"css 代码:")]),n(`
`),l("span",{class:"line"},[l("span",null,"/* We use a :before pseudo element to solve the design problem of placing a colored square in front of the text content */")]),n(`
`),l("span",{class:"line"},[l("span",null,".text-box:before {")]),n(`
`),l("span",{class:"line"},[l("span",null,'  content: "";')]),n(`
`),l("span",{class:"line"},[l("span",null,"  display: inline-block;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  width: 1rem;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  height: 1rem;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  background-color: red;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[73]||(s[73]=l("p",null,[l("strong",null,"图片和 SVG 图形能被引入到 HTML 中的唯一理由是它们呈现出了与内容相关的一些信息。")],-1)),s[74]||(s[74]=l("p",null,"不推荐",-1)),s[75]||(s[75]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"html 代码:")]),n(`
`),l("span",{class:"line"},[l("span",null,"<!-- Content images should never be used for design elements!  -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'<span class="text-box">')]),n(`
`),l("span",{class:"line"},[l("span",null,'  <img src="square.svg" alt="Square" />')]),n(`
`),l("span",{class:"line"},[l("span",null,"  See the square next to me?")]),n(`
`),l("span",{class:"line"},[l("span",null,"</span>")])])]),l("button",{class:"collapse"})],-1)),s[76]||(s[76]=l("p",null,"推荐",-1)),s[77]||(s[77]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"html 代码:")]),n(`
`),l("span",{class:"line"},[l("span",null,"<!-- That's clean markup! -->")]),n(`
`),l("span",{class:"line"},[l("span",null,'<span class="text-box">')]),n(`
`),l("span",{class:"line"},[l("span",null,"  See the square next to me?")]),n(`
`),l("span",{class:"line"},[l("span",null,"</span>")]),n(`
`),l("span",{class:"line"},[l("span",null,"css 代码:")]),n(`
`),l("span",{class:"line"},[l("span",null,"/* We use a :before pseudo element with a background image to solve the problem */")]),n(`
`),l("span",{class:"line"},[l("span",null,".text-box:before {")]),n(`
`),l("span",{class:"line"},[l("span",null,'  content: "";')]),n(`
`),l("span",{class:"line"},[l("span",null,"  display: inline-block;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  width: 1rem;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  height: 1rem;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  background: url(square.svg) no-repeat;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  background-size: 100%;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[78]||(s[78]=l("h2",{id:"js规范",tabindex:"-1"},[n("js规范 "),l("a",{class:"header-anchor",href:"#js规范","aria-label":'Permalink to "js规范"'},"​")],-1)),s[79]||(s[79]=l("h3",{id:"避免全局命名空间污染",tabindex:"-1"},[n("避免全局命名空间污染 "),l("a",{class:"header-anchor",href:"#避免全局命名空间污染","aria-label":'Permalink to "避免全局命名空间污染"'},"​")],-1)),s[80]||(s[80]=l("p",null,"防止全局命名空间被污染，我们通常的做法是将代码包裹成一个 IIFE(Immediately-Invoked Function Expression)，创建独立隔绝的定义域。也使得内存在执行完后立即释放。",-1)),s[81]||(s[81]=l("p",null,"IIFE 还可确保你的代码不会轻易被其它全局命名空间里的代码所修改（i.e. 第三方库，window 引用，被覆盖的未定义的关键字等等）。 不推荐:",-1)),s[82]||(s[82]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"let x = 10,")]),n(`
`),l("span",{class:"line"},[l("span",null,"    y = 100;")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"// Declaring letiables in the global scope is resulting in global scope pollution. All letiables declared like this")]),n(`
`),l("span",{class:"line"},[l("span",null,"// will be stored in the window object. This is very unclean and needs to be avoided.")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log(window.x + ' ' + window.y);")])])]),l("button",{class:"collapse"})],-1)),s[83]||(s[83]=l("p",null,"推荐",-1)),s[84]||(s[84]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"// We declare a IIFE and pass parameters into the function that we will use from the global space")]),n(`
`),l("span",{class:"line"},[l("span",null,"(function(log, w, undefined){")]),n(`
`),l("span",{class:"line"},[l("span",null,"  'use strict';")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  let x = 10,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      y = 100;")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  // Will output 'true true'")]),n(`
`),l("span",{class:"line"},[l("span",null,"  log((w.x === undefined) + ' ' + (w.y === undefined));")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"}(window.console.log, window));")])])]),l("button",{class:"collapse"})],-1)),s[85]||(s[85]=l("p",null,"推荐的IIFE写法:",-1)),s[86]||(s[86]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"(function(){")]),n(`
`),l("span",{class:"line"},[l("span",null,"  'use strict';")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  // Code goes here")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"}());")])])]),l("button",{class:"collapse"})],-1)),s[87]||(s[87]=l("p",null,"如果你想引用全局变量或者是外层 IIFE 的变量，可以通过下列方式传参：",-1)),s[88]||(s[88]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"(function($, w, d){")]),n(`
`),l("span",{class:"line"},[l("span",null,"  'use strict';")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  $(function() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    w.alert(d.querySelectorAll('div').length);")]),n(`
`),l("span",{class:"line"},[l("span",null,"  });")]),n(`
`),l("span",{class:"line"},[l("span",null,"}(jQuery, window, document));")])])]),l("button",{class:"collapse"})],-1)),s[89]||(s[89]=l("h3",{id:"严格模式",tabindex:"-1"},[n("严格模式 "),l("a",{class:"header-anchor",href:"#严格模式","aria-label":'Permalink to "严格模式"'},"​")],-1)),s[90]||(s[90]=l("p",null,"ECMAScript 5 严格模式可在整个脚本或独个方法内被激活。它对应不同的 javascript 语境会做更加严格的错误检查。严格模式也确保了 javascript 代码更加的健壮，运行的也更加快速。",-1)),s[91]||(s[91]=l("p",null,"严格模式会阻止使用在未来很可能被引入的预留关键字。",-1)),s[92]||(s[92]=l("p",null,"你应该在你的脚本中启用严格模式，最好是在独立的 IIFE 中应用它。避免在你的脚本第一行使用它而导致你的所有脚本都启动了严格模式，这有可能会引发一些第三方类库的问题。",-1)),s[93]||(s[93]=l("h3",{id:"变量声明",tabindex:"-1"},[n("变量声明 "),l("a",{class:"header-anchor",href:"#变量声明","aria-label":'Permalink to "变量声明"'},"​")],-1)),s[94]||(s[94]=l("p",null,"总是使用 let 来声明变量。如不指定 let，变量将被隐式地声明为全局变量，例如",-1)),s[95]||(s[95]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"let a = b = 0; //b会被隐式的创建为全局变量")])])]),l("button",{class:"collapse"})],-1)),s[96]||(s[96]=l("p",null,"所以，请总是使用 let 来声明变量，并且使用单let模式（将所有的变量在函数最前面只使用一个let定义）。例如：",-1)),s[97]||(s[97]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"(function (){")]),n(`
`),l("span",{class:"line"},[l("span",null,"  'use strict'")]),n(`
`),l("span",{class:"line"},[l("span",null,"  let a = 0,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      b = 0,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      c = 0,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      i,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      j,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      myObject();")]),n(`
`),l("span",{class:"line"},[l("span",null,"}())")])])]),l("button",{class:"collapse"})],-1)),s[98]||(s[98]=l("p",null,"采用严格模式带来的好处是，当你手误输入错误的变量名时，它可以通过报错信息来帮助你定位错误出处。",-1)),s[99]||(s[99]=l("h3",{id:"js声明提前",tabindex:"-1"},[n("js声明提前 "),l("a",{class:"header-anchor",href:"#js声明提前","aria-label":'Permalink to "js声明提前"'},"​")],-1)),s[100]||(s[100]=l("p",null,"javascript会自动将函数作用域内的变量和方法的定义提前（只是提前声明，赋值还是在原处） 例如：",-1)),s[101]||(s[101]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"(function(log){")]),n(`
`),l("span",{class:"line"},[l("span",null,"  'use strict';")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  let a = 10;")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  for(let i = 0; i < a; i++) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    let b = i * i;")]),n(`
`),l("span",{class:"line"},[l("span",null,"    log(b);")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  if(a === 10) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    let f = function() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      log(a);")]),n(`
`),l("span",{class:"line"},[l("span",null,"    };")]),n(`
`),l("span",{class:"line"},[l("span",null,"    f();")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  function x() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    log('Mr. X!');")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span",null,"  x();")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"}(window.console.log));")])])]),l("button",{class:"collapse"})],-1)),s[102]||(s[102]=l("p",null,"提升后的js",-1)),s[103]||(s[103]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"(function(log){")]),n(`
`),l("span",{class:"line"},[l("span",null,"  'use strict';")]),n(`
`),l("span",{class:"line"},[l("span",null,"  // All letiables used in the closure will be hoisted to the top of the function")]),n(`
`),l("span",{class:"line"},[l("span",null,"  let a,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      i,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      b,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      f;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  // All functions in the closure will be hoisted to the top")]),n(`
`),l("span",{class:"line"},[l("span",null,"  function x() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    log('Mr. X!');")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  a = 10;")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  for(i = 0; i < a; i++) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    b = i * i;")]),n(`
`),l("span",{class:"line"},[l("span",null,"    log(b);")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  if(a === 10) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    // Function assignments will only result in hoisted letiables but the function body will not be hoisted")]),n(`
`),l("span",{class:"line"},[l("span",null,"    // Only by using a real function declaration the whole function will be hoisted with its body")]),n(`
`),l("span",{class:"line"},[l("span",null,"    f = function() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      log(a);")]),n(`
`),l("span",{class:"line"},[l("span",null,"    };")]),n(`
`),l("span",{class:"line"},[l("span",null,"    f();")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  x();")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"}(window.console.log));")])])]),l("button",{class:"collapse"})],-1)),s[104]||(s[104]=l("h3",{id:"使用严格等",tabindex:"-1"},[n("使用严格等 "),l("a",{class:"header-anchor",href:"#使用严格等","aria-label":'Permalink to "使用严格等"'},"​")],-1)),s[105]||(s[105]=l("p",null,[n("总是使用 "),l("code",null,"==="),n(" 精确的比较操作符，避免在判断的过程中，由 JavaScript 的强制类型转换所造成的困扰。例如：")],-1)),s[106]||(s[106]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"(function(log){")]),n(`
`),l("span",{class:"line"},[l("span",null,"  'use strict';")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  log('0' == 0); // true")]),n(`
`),l("span",{class:"line"},[l("span",null,"  log('' == false); // true")]),n(`
`),l("span",{class:"line"},[l("span",null,"  log('1' == true); // true")]),n(`
`),l("span",{class:"line"},[l("span",null,"  log(null == undefined); // true")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  let x = {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    valueOf: function() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"      return 'X';")]),n(`
`),l("span",{class:"line"},[l("span",null,"    }")]),n(`
`),l("span",{class:"line"},[l("span",null,"  };")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  log(x == 'X');")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"}(window.console.log));")])])]),l("button",{class:"collapse"})],-1)),s[107]||(s[107]=l("h3",{id:"等同-和严格等-的区别",tabindex:"-1"},[n("等同== 和严格等===的区别 "),l("a",{class:"header-anchor",href:"#等同-和严格等-的区别","aria-label":'Permalink to "等同== 和严格等===的区别"'},"​")],-1)),s[108]||(s[108]=l("ul",null,[l("li",null,"==， 两边值类型不同的时候，要先进行类型转换，再比较。"),l("li",null,"===，不做类型转换，类型不同的一定不等。")],-1)),s[109]||(s[109]=l("p",null,"==等同操作符",-1)),s[110]||(s[110]=l("ul",null,[l("li",null,"如果两个值具有相同类型，会进行===比较，返回===的比较值"),l("li",null,"如果两个值不具有相同类型，也有可能返回true"),l("li",null,"如果一个值是null另一个值是undefined，返回true"),l("li",null,"如果一个值是string另个是number，会把string转换成number再进行比较"),l("li",null,"如果一个值是true，会把它转成1再比较，false会转成0")],-1)),s[111]||(s[111]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"console.log( false == null )      // false")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( false == undefined ) // false")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( false == 0 )         // true")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( false == '' )        // true")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( false == NaN )       // false")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( null == undefined ) // true")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( null == 0 )         // false")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( null == '' )        // false")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( null == NaN )       // false")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( undefined == 0)   // false")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( undefined == '')  // false")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( undefined == NaN) // false")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( 0 == '' )  // true")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log( 0 == NaN ) // false")])])]),l("button",{class:"collapse"})],-1)),s[112]||(s[112]=l("p",null,"总结一下==",-1)),s[113]||(s[113]=l("ul",null,[l("li",null,'false 除了和自身比较为 true 外，和 0，"" 比较也为 true'),l("li",null,"null 只和 undefined 比较时为 true， 反过来 undefined 也仅和 null 比较为 true，没有第二个"),l("li",null,`0 除了和 false 比较为 true，还有空字符串 ''" 和空数组 []`),l("li",null,"空字符串 '' 除了和 false 比较为 true，还有一个数字 0")],-1)),s[114]||(s[114]=l("blockquote",null,[l("p",null,[n("==, >, <, +, -, … 这些操作符所造成的隐式类型转换都是无副作用的，它不会改变变量本身保存的值。，但是，如果你覆写某个对象的 "),l("code",null,"valueOf/toString"),n("的话，==就会产生副作用.")])],-1)),s[115]||(s[115]=l("p",null,"例如：",-1)),s[116]||(s[116]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"Array.prototype.valueOf = function() {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  this[0]++;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  return this;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")]),n(`
`),l("span",{class:"line"},[l("span",null,"let x = [1, 2, 3];")]),n(`
`),l("span",{class:"line"},[l("span",null,"x == 0;")]),n(`
`),l("span",{class:"line"},[l("span",null,"console.log(x);   // [2, 2, 3]")])])]),l("button",{class:"collapse"})],-1)),s[117]||(s[117]=l("p",null,"===操作符：",-1)),s[118]||(s[118]=l("ul",null,[l("li",null,"要是两个值类型不同，返回false"),l("li",null,"要是两个值都是number类型，并且数值相同，返回true"),l("li",null,"要是两个值都是stirng，并且两个值的String内容相同，返回true"),l("li",null,"要是两个值都是true或者都是false，返回true"),l("li",null,"要是两个值都是指向相同的Object，Arraya或者function，返回true"),l("li",null,"要是两个值都是null或者都是undefined，返回true")],-1)),s[119]||(s[119]=l("h2",{id:"真假判断",tabindex:"-1"},[n("真假判断 "),l("a",{class:"header-anchor",href:"#真假判断","aria-label":'Permalink to "真假判断"'},"​")],-1)),s[120]||(s[120]=l("ul",null,[l("li",null,"js中以下内容为假："),l("li",null,"false"),l("li",null,"null"),l("li",null,"undefined"),l("li",null,"0"),l("li",null,"'' (空字符串)"),l("li",null,"NaN")],-1)),s[121]||(s[121]=l("h2",{id:"设置默认参数",tabindex:"-1"},[n("设置默认参数 "),l("a",{class:"header-anchor",href:"#设置默认参数","aria-label":'Permalink to "设置默认参数"'},"​")],-1)),s[122]||(s[122]=l("p",null,"辑操作符 || 和 && 也可被用来返回布尔值。如果操作对象为非布尔对象，那每个表达式将会被自左向右地做真假判断。基于此操作，最终总有一个表达式被返回回来。这在变量赋值时，是可以用来简化你的代码的。例如:如果x不存在且y不存在，x=1；如果x存在y存在，x = y",-1)),s[123]||(s[123]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"if(!x) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  if(!y) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    x = 1;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  } else {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    x = y;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[124]||(s[124]=l("p",null,"等同于：",-1)),s[125]||(s[125]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null," x = x || y || 1;")])])]),l("button",{class:"collapse"})],-1)),s[126]||(s[126]=l("p",null,"这一小技巧经常用来给方法设定默认的参数。",-1)),s[127]||(s[127]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"(function(log){")]),n(`
`),l("span",{class:"line"},[l("span",null,"  'use strict';")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  function multiply(a, b) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    a = a || 1;")]),n(`
`),l("span",{class:"line"},[l("span",null,"    b = b || 1;")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"    log('Result ' + a * b);")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  multiply(); // Result 1")]),n(`
`),l("span",{class:"line"},[l("span",null,"  multiply(10); // Result 10")]),n(`
`),l("span",{class:"line"},[l("span",null,"  multiply(3, NaN); // Result 3")]),n(`
`),l("span",{class:"line"},[l("span",null,"  multiply(9, 5); // Result 45")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"}(window.console.log));")])])]),l("button",{class:"collapse"})],-1)),s[128]||(s[128]=l("h2",{id:"不使用eval-函数",tabindex:"-1"},[n("不使用eval()函数 "),l("a",{class:"header-anchor",href:"#不使用eval-函数","aria-label":'Permalink to "不使用eval()函数"'},"​")],-1)),s[129]||(s[129]=l("p",null,"就如eval的字面意思来说，恶魔，使用eval()函数会带来安全隐患。 eval()函数的作用是返回任意字符串，当作js代码来处理。",-1)),s[130]||(s[130]=l("h2",{id:"this关键字",tabindex:"-1"},[n("this关键字 "),l("a",{class:"header-anchor",href:"#this关键字","aria-label":'Permalink to "this关键字"'},"​")],-1)),s[131]||(s[131]=l("p",null,"只在对象构造器、方法和在设定的闭包中使用 this 关键字。this 的语义在此有些误导。它时而指向全局对象（大多数时），时而指向调用者的定义域（在 eval 中），时而指向 DOM 树中的某一节点（当用事件处理绑定到 HTML 属性上时），时而指向一个新创建的对象（在构造器中），还时而指向其它的一些对象（如果函数被 call() 和 apply() 执行和调用时）。",-1)),s[132]||(s[132]=l("p",null,"正因为它是如此容易地被搞错，请限制它的使用场景：",-1)),s[133]||(s[133]=l("ul",null,[l("li",null,"在构造函数中"),l("li",null,"在对象的方法中（包括由此创建出的闭包内）")],-1)),s[134]||(s[134]=l("h2",{id:"首选函数式风格",tabindex:"-1"},[n("首选函数式风格 "),l("a",{class:"header-anchor",href:"#首选函数式风格","aria-label":'Permalink to "首选函数式风格"'},"​")],-1)),s[135]||(s[135]=l("p",null,"函数式编程让你可以简化代码并缩减维护成本，因为它容易复用，又适当地解耦和更少的依赖。",-1)),s[136]||(s[136]=l("p",null,"接下来的例子中，在一组数字求和的同一问题上，比较了两种解决方案。第一个例子是经典的程序处理，而第二个例子则是采用了函数式编程和 ECMA Script 5.1 的数组方法。 不推荐",-1)),s[137]||(s[137]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"(function(log){")]),n(`
`),l("span",{class:"line"},[l("span",null,"  'use strict';")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  let arr = [10, 3, 7, 9, 100, 20],")]),n(`
`),l("span",{class:"line"},[l("span",null,"      sum = 0,")]),n(`
`),l("span",{class:"line"},[l("span",null,"      i;")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  for(i = 0; i < arr.length; i++) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    sum += arr[i];")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  log('The sum of array ' + arr + ' is: ' + sum)")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"}(window.console.log));")])])]),l("button",{class:"collapse"})],-1)),s[138]||(s[138]=l("p",null,"推荐(函数式编程)：",-1)),s[139]||(s[139]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"(function(log){")]),n(`
`),l("span",{class:"line"},[l("span",null,"  'use strict';")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  let arr = [10, 3, 7, 9, 100, 20];")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  let sum = arr.reduce(function(prevValue, currentValue) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"    return prevValue + currentValue;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  }, 0);")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"  log('The sum of array ' + arr + ' is: ' + sum);")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"}(window.console.log));")])])]),l("button",{class:"collapse"})],-1)),s[140]||(s[140]=l("h2",{id:"修改内建对象的原型链",tabindex:"-1"},[n("修改内建对象的原型链 "),l("a",{class:"header-anchor",href:"#修改内建对象的原型链","aria-label":'Permalink to "修改内建对象的原型链"'},"​")],-1)),s[141]||(s[141]=l("p",null,[n("修改内建的诸如 "),l("code",null,"Object.prototype"),n(" 和 "),l("code",null,"Array.prototype"),n(" 是被严厉禁止的。修改其它的内建对象比如 "),l("code",null,"Function.prototype"),n("，虽危害没那么大，但始终还是会导致在开发过程中难以 debug 的问题，应当也要避免。")],-1)),s[142]||(s[142]=l("h2",{id:"三元条件判断-if-的快捷方法",tabindex:"-1"},[n("三元条件判断（if 的快捷方法） "),l("a",{class:"header-anchor",href:"#三元条件判断-if-的快捷方法","aria-label":'Permalink to "三元条件判断（if 的快捷方法）"'},"​")],-1)),s[143]||(s[143]=l("p",null,"用三元操作符分配或返回语句。在比较简单的情况下使用，避免在复杂的情况下使用。没人愿意用 10 行三元操作符把自己的脑子绕晕。 不推荐：",-1)),s[144]||(s[144]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"if(x === 10) {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  return 'valid';")]),n(`
`),l("span",{class:"line"},[l("span",null,"} else {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  return 'invalid';")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[145]||(s[145]=l("p",null,"推荐：",-1)),s[146]||(s[146]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"return x === 10 ? 'valid' : 'invalid'")])])]),l("button",{class:"collapse"})],-1)),s[147]||(s[147]=l("h2",{id:"css规范",tabindex:"-1"},[n("css规范 "),l("a",{class:"header-anchor",href:"#css规范","aria-label":'Permalink to "css规范"'},"​")],-1)),s[148]||(s[148]=l("h3",{id:"id和class的命名",tabindex:"-1"},[n("id和class的命名 "),l("a",{class:"header-anchor",href:"#id和class的命名","aria-label":'Permalink to "id和class的命名"'},"​")],-1)),s[149]||(s[149]=l("p",null,"ID和class的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称 不推荐 :",-1)),s[150]||(s[150]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,".fw-800 {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  font-weight: 800;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,".red {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  color: red;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[151]||(s[151]=l("p",null,"推荐 :",-1)),s[152]||(s[152]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,".heavy {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  font-weight: 800;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,".important {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  color: red;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[153]||(s[153]=l("h3",{id:"合理的使用id",tabindex:"-1"},[n("合理的使用ID "),l("a",{class:"header-anchor",href:"#合理的使用id","aria-label":'Permalink to "合理的使用ID"'},"​")],-1)),s[154]||(s[154]=l("p",null,"一般情况下ID不应该被用于样式，并且ID的权重很高，所以不使用ID解决样式的问题，而是使用class 不推荐：",-1)),s[155]||(s[155]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"#content .title {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  font-size: 2em;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[156]||(s[156]=l("p",null,"推荐：",-1)),s[157]||(s[157]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,".content .title {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  font-size: 2em;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[158]||(s[158]=l("h3",{id:"css选择器中避免使用标签名",tabindex:"-1"},[n("css选择器中避免使用标签名 "),l("a",{class:"header-anchor",href:"#css选择器中避免使用标签名","aria-label":'Permalink to "css选择器中避免使用标签名"'},"​")],-1)),s[159]||(s[159]=l("p",null,"从结构、表现、行为分离的原则来看，应该尽量避免css中出现HTML标签，并且在css选择器中出现标签名会存在潜在的问题。",-1)),s[160]||(s[160]=l("h3",{id:"使用子选择器",tabindex:"-1"},[n("使用子选择器 "),l("a",{class:"header-anchor",href:"#使用子选择器","aria-label":'Permalink to "使用子选择器"'},"​")],-1)),s[161]||(s[161]=l("p",null,"很多前端开发人员写选择器链的时候不使用 直接子选择器（注：直接子选择器和后代选择器的区别）。 有时，这可能会导致疼痛的设计问题并且有时候可能会很耗性能。 然而，在任何情况下，这是一个非常不好的做法。 如果你不写很通用的，需要匹配到DOM末端的选择器， 你应该总是考虑直接子选择器。 不推荐:",-1)),s[162]||(s[162]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,".content .title {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  font-size: 2rem;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[163]||(s[163]=l("p",null,"推荐",-1)),s[164]||(s[164]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,".content > .title {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  font-size: 2rem;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[165]||(s[165]=l("h3",{id:"尽量使用缩写属性",tabindex:"-1"},[n("尽量使用缩写属性 "),l("a",{class:"header-anchor",href:"#尽量使用缩写属性","aria-label":'Permalink to "尽量使用缩写属性"'},"​")],-1)),s[166]||(s[166]=l("p",null,"尽量使用缩写属性对于代码效率和可读性是很有用的，比如font属性。 不推荐：",-1)),s[167]||(s[167]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"border-top-style: none;")]),n(`
`),l("span",{class:"line"},[l("span",null,"font-family: palatino, georgia, serif;")]),n(`
`),l("span",{class:"line"},[l("span",null,"font-size: 100%;")]),n(`
`),l("span",{class:"line"},[l("span",null,"line-height: 1.6;")]),n(`
`),l("span",{class:"line"},[l("span",null,"padding-bottom: 2em;")]),n(`
`),l("span",{class:"line"},[l("span",null,"padding-left: 1em;")]),n(`
`),l("span",{class:"line"},[l("span",null,"padding-right: 1em;")]),n(`
`),l("span",{class:"line"},[l("span",null,"padding-top: 0;")])])]),l("button",{class:"collapse"})],-1)),s[168]||(s[168]=l("p",null,"推荐：",-1)),s[169]||(s[169]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"border-top: 0;")]),n(`
`),l("span",{class:"line"},[l("span",null,"font: 100%/1.6 palatino, georgia, serif;")]),n(`
`),l("span",{class:"line"},[l("span",null,"padding: 0 1em 2em;")])])]),l("button",{class:"collapse"})],-1)),s[170]||(s[170]=l("h3",{id:"_0后面不带单位",tabindex:"-1"},[n("0后面不带单位 "),l("a",{class:"header-anchor",href:"#_0后面不带单位","aria-label":'Permalink to "0后面不带单位"'},"​")],-1)),s[171]||(s[171]=l("p",null,"省略0后面的单位， 不推荐：",-1)),s[172]||(s[172]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"padding-bottom: 0px;")]),n(`
`),l("span",{class:"line"},[l("span",null,"margin: 0em;")])])]),l("button",{class:"collapse"})],-1)),s[173]||(s[173]=l("p",null,"推荐：",-1)),s[174]||(s[174]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"padding-bottom: 0;")]),n(`
`),l("span",{class:"line"},[l("span",null,"margin: 0;")])])]),l("button",{class:"collapse"})],-1)),s[175]||(s[175]=l("h3",{id:"属性格式",tabindex:"-1"},[n("属性格式 "),l("a",{class:"header-anchor",href:"#属性格式","aria-label":'Permalink to "属性格式"'},"​")],-1)),s[176]||(s[176]=l("ul",null,[l("li",null,"为了保证一致性和可扩展性，每个声明应该用分号结束，每个声明换行。"),l("li",null,"属性名的冒号后使用一个空格。出于一致性的原因， 属性和值（但属性和冒号之间没有空格）的之间始终使用一个空格。"),l("li",null,"每个选择器和属性声明总是使用新的一行。"),l("li",null,"属性选择器或属性值用双引号（””），而不是单引号（”）括起来。"),l("li",null,"URI值（url()）不要使用引号。")],-1)),s[177]||(s[177]=l("p",null,"作为最佳实践，我们应该遵循以下顺序（应该按照下表的顺序）：",-1)),s[178]||(s[178]=l("p",null,"结构性属性：",-1)),s[179]||(s[179]=l("ol",null,[l("li",null,"display"),l("li",null,"position, left, top, right etc."),l("li",null,"overflow, float, clear etc."),l("li",null,"margin, padding")],-1)),s[180]||(s[180]=l("p",null,"表现性属性：",-1)),s[181]||(s[181]=l("ul",null,[l("li",null,"background, border etc."),l("li",null,"font, text")],-1)),s[182]||(s[182]=l("p",null,"不推荐：",-1)),s[183]||(s[183]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null," .box {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  font-family: 'Arial', sans-serif;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  border: 3px solid #ddd;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  left: 30%;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  position: absolute;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  text-transform: uppercase;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  background-color: #eee;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  right: 30%;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  isplay: block;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  font-size: 1.5rem;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  overflow: hidden;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  padding: 1em;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  margin: 1em;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[184]||(s[184]=l("p",null,"推荐：",-1)),s[185]||(s[185]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,".box {")]),n(`
`),l("span",{class:"line"},[l("span",null,"  display: block;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  position: absolute;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  left: 30%;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  right: 30%;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  overflow: hidden;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  margin: 1em;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  padding: 1em;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  background-color: #eee;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  border: 3px solid #ddd;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  font-family: 'Arial', sans-serif;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  font-size: 1.5rem;")]),n(`
`),l("span",{class:"line"},[l("span",null,"  text-transform: uppercase;")]),n(`
`),l("span",{class:"line"},[l("span",null,"}")])])]),l("button",{class:"collapse"})],-1)),s[186]||(s[186]=l("p",null,"相关文章：",-1)),s[187]||(s[187]=l("ul",null,[l("li",null,[l("a",{href:"https://www.cnblogs.com/polk6/p/4660195.html",target:"_blank",rel:"noreferrer"},"JavsScript开发规范")]),l("li",null,[l("a",{href:"https://segmentfault.com/a/1190000006131512",target:"_blank",rel:"noreferrer"},"开发规范（四）JS规范")])],-1))]),"main-header":a(()=>[i(e.$slots,"main-header")]),"main-header-after":a(()=>[i(e.$slots,"main-header-after")]),"main-nav":a(()=>[i(e.$slots,"main-nav")]),"main-content-before":a(()=>[i(e.$slots,"main-content-before")]),"main-content":a(()=>[i(e.$slots,"main-content")]),"main-content-after":a(()=>[i(e.$slots,"main-content-after")]),"main-nav-before":a(()=>[i(e.$slots,"main-nav-before")]),"main-nav-after":a(()=>[i(e.$slots,"main-nav-after")]),comment:a(()=>[i(e.$slots,"comment")]),footer:a(()=>[i(e.$slots,"footer")]),aside:a(()=>[i(e.$slots,"aside")]),"aside-custom":a(()=>[i(e.$slots,"aside-custom")]),default:a(()=>[i(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{H as default,x as usePageData};

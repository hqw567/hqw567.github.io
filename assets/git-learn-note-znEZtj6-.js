import{_ as g}from"./ValaxyMain.vue_vue_type_style_index_0_lang-OmfbjWLM.js";import{c as m,w as e,f as h,e as b,p as u,o as c,h as l,i as n,j as v,r as t}from"./app-B-0E09g4.js";import"./YunComment.vue_vue_type_style_index_0_lang-TDkALwSF.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-BP4tYWCX.js";import"./post-igZqgClT.js";const A={__name:"git-learn-note",setup(k,{expose:p}){const a=JSON.parse('{"title":"Git 学习笔记","description":"","frontmatter":{"title":"Git 学习笔记","sticky":null,"tags":["学习","笔记","Git"],"categories":["思米米的小笔记"],"date":"2022-01-11 16:46:13","updated":"2022-02-10 16:46:13"},"headers":[{"level":2,"title":"ref","slug":"ref","link":"#ref","children":[]},{"level":2,"title":"常用指令","slug":"常用指令","link":"#常用指令","children":[{"level":3,"title":"拉取代码","slug":"拉取代码","link":"#拉取代码","children":[]},{"level":3,"title":"远程仓库","slug":"远程仓库","link":"#远程仓库","children":[]},{"level":3,"title":"代码推送","slug":"代码推送","link":"#代码推送","children":[]},{"level":3,"title":"代码回滚","slug":"代码回滚","link":"#代码回滚","children":[]},{"level":3,"title":"分支管理","slug":"分支管理","link":"#分支管理","children":[]},{"level":3,"title":"清除缓存","slug":"清除缓存","link":"#清除缓存","children":[]},{"level":3,"title":"凭证存储","slug":"凭证存储","link":"#凭证存储","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"合并代码冲突","slug":"合并代码冲突","link":"#合并代码冲突","children":[]},{"level":3,"title":"提交至 GitHub 时出现 invalid-email-address","slug":"提交至-github-时出现-invalid-email-address","link":"#提交至-github-时出现-invalid-email-address","children":[]},{"level":3,"title":"合并两个不同的项目，出现错误","slug":"合并两个不同的项目-出现错误","link":"#合并两个不同的项目-出现错误","children":[]},{"level":3,"title":"删除已经上传至 GitHub 中的文件","slug":"删除已经上传至-github-中的文件","link":"#删除已经上传至-github-中的文件","children":[]},{"level":3,"title":"修改已提交内容","slug":"修改已提交内容","link":"#修改已提交内容","children":[]},{"level":3,"title":"修改之前已经上传的提交","slug":"修改之前已经上传的提交","link":"#修改之前已经上传的提交","children":[]},{"level":3,"title":"删除过去分支已经存在的某个文件","slug":"删除过去分支已经存在的某个文件","link":"#删除过去分支已经存在的某个文件","children":[]},{"level":3,"title":"增加子模块","slug":"增加子模块","link":"#增加子模块","children":[]},{"level":3,"title":"清除本地修改","slug":"清除本地修改","link":"#清除本地修改","children":[]},{"level":3,"title":"关闭 Windows CRLF","slug":"关闭-windows-crlf","link":"#关闭-windows-crlf","children":[]},{"level":3,"title":"Tag 相关","slug":"tag-相关","link":"#tag-相关","children":[]},{"level":3,"title":"全局 gitignore","slug":"全局-gitignore","link":"#全局-gitignore","children":[]},{"level":3,"title":"git 代理","slug":"git-代理","link":"#git-代理","children":[]}]},{"level":2,"title":"详解","slug":"详解","link":"#详解","children":[{"level":3,"title":"git push","slug":"git-push","link":"#git-push","children":[]},{"level":3,"title":"git add","slug":"git-add","link":"#git-add","children":[]},{"level":3,"title":"git reset","slug":"git-reset","link":"#git-reset","children":[]},{"level":3,"title":"git stash","slug":"git-stash","link":"#git-stash","children":[]}]},{"level":2,"title":"Cheat sheet","slug":"cheat-sheet","link":"#cheat-sheet","children":[{"level":3,"title":"git rebase","slug":"git-rebase","link":"#git-rebase","children":[]}]}],"relativePath":"pages/posts/git-learn-note.md","path":"/home/runner/work/hqw567.github.io/hqw567.github.io/pages/posts/git-learn-note.md","lastUpdated":1730869985000}'),r=b(),o=a.frontmatter||{};return r.meta.frontmatter=Object.assign(r.meta.frontmatter||{},a.frontmatter||{}),u("pageData",a),u("valaxy:frontmatter",o),globalThis.$frontmatter=o,p({frontmatter:{title:"Git 学习笔记",sticky:null,tags:["学习","笔记","Git"],categories:["思米米的小笔记"],date:"2022-01-11 16:46:13",updated:"2022-02-10 16:46:13"}}),(s,i)=>{const d=g;return c(),m(d,{frontmatter:h(o)},{"main-content-md":e(()=>[i[0]||(i[0]=l("p",null,"记录 Git 的一些常用指令与问题解决方案。",-1)),i[1]||(i[1]=l("h2",{id:"ref",tabindex:"-1"},[n("ref "),l("a",{class:"header-anchor",href:"#ref","aria-label":'Permalink to "ref"'},"​")],-1)),i[2]||(i[2]=l("ul",null,[l("li",null,[l("a",{href:"https://github.com/git-tips/tips",target:"_blank",rel:"noreferrer"},"git-tips")]),l("li",null,[l("a",{href:"https://github.com/521xueweihan/git-tips",target:"_blank",rel:"noreferrer"},"Git 的奇技淫巧")])],-1)),v(" more "),i[3]||(i[3]=l("h2",{id:"常用指令",tabindex:"-1"},[n("常用指令 "),l("a",{class:"header-anchor",href:"#常用指令","aria-label":'Permalink to "常用指令"'},"​")],-1)),i[4]||(i[4]=l("h3",{id:"拉取代码",tabindex:"-1"},[n("拉取代码 "),l("a",{class:"header-anchor",href:"#拉取代码","aria-label":'Permalink to "拉取代码"'},"​")],-1)),i[5]||(i[5]=l("ul",null,[l("li",null,[l("p",null,[n("从远程仓库获取线上代码: "),l("code",null,"git clone git@github.com:用户名/项目名.git")])]),l("li",null,[l("p",null,[n("关联远程仓库: "),l("code",null,"git remote add origin git@github.com:xxx/xxx.git"),n(" (git clone 后已自动关联)")])]),l("li",null,[l("p",null,[n("git 拉取代码更新项目: "),l("code",null,"git pull origin master")])])],-1)),i[6]||(i[6]=l("h3",{id:"远程仓库",tabindex:"-1"},[n("远程仓库 "),l("a",{class:"header-anchor",href:"#远程仓库","aria-label":'Permalink to "远程仓库"'},"​")],-1)),i[7]||(i[7]=l("ul",null,[l("li",null,[l("p",null,[n("删除远程仓库地址： "),l("code",null,"git remote rm origin")])]),l("li",null,[l("p",null,[n("增加远程仓库地址： "),l("code",null,"git remote add origin git@github.com:xxx/xxx.git"),n(" or "),l("code",null,"git remote add origin https://github.com/xxx/xxx"),n(" ( origin 为远程仓库命名)")])]),l("li",null,[l("p",null,[n("查看远程库信息："),l("code",null,"git remote -v")])]),l("li",null,[l("p",null,"关联多个远程仓库:")])],-1)),i[8]||(i[8]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git remote add github git@github.com:xxx/xxx.git")]),n(`
`),l("span",{class:"line"},[l("span",null,"git remote add gitee git@gitee.com:xxx/xxx.git")]),n(`
`),l("span",{class:"line"},[l("span",null,"git remote add coding git@git.coding.net:xxx/xxx.git")])])]),l("button",{class:"collapse"})],-1)),i[9]||(i[9]=l("h3",{id:"代码推送",tabindex:"-1"},[n("代码推送 "),l("a",{class:"header-anchor",href:"#代码推送","aria-label":'Permalink to "代码推送"'},"​")],-1)),i[10]||(i[10]=l("ul",null,[l("li",null,[l("p",null,"git 初始化： git init")]),l("li",null,[l("p",null,"保存到暂存区： git add -A")]),l("li",null,[l("p",null,[n("输入描述信息并提交到本地的 Git： "),l("code",null,'git commit -m "Say something"')])]),l("li",null,[l("p",null,[n("修改已经提交的描述： "),l("code",null,"git commit --amend"),n(),l("a",{href:"#%E4%BF%AE%E6%94%B9%E5%B7%B2%E6%8F%90%E4%BA%A4%E5%86%85%E5%AE%B9"},"修改已提交内容")])]),l("li",null,[l("p",null,[n("将代码推送到 GitHub： "),l("code",null,"git push"),n(" or "),l("code",null,"git push -u origin master"),n(" ( -u 选项指定一个默认主机,后面就可以不加任何参数使用 git push )")])]),l("li",null,[l("p",null,[n("强制推送： "),l("code",null,"git push -u origin master -f")])]),l("li",null,[l("p",null,[l("a",{href:"#git-push"},"git push详解")])]),l("li",null,[l("p",null,[n("清空文件夹的本地缓存: "),l("code",null,"git rm -r --cached <path>")])])],-1)),i[11]||(i[11]=l("h3",{id:"代码回滚",tabindex:"-1"},[n("代码回滚 "),l("a",{class:"header-anchor",href:"#代码回滚","aria-label":'Permalink to "代码回滚"'},"​")],-1)),i[12]||(i[12]=l("p",null,"在 Git 中，用 HEAD 表示当前版本，，上一个版本就是 HEAD^，上上一个版本就是 HEAD^^，当然往上 100 个版本写 100 个^比较容易数不过来，所以写成 HEAD~100。",-1)),i[13]||(i[13]=l("p",null,[l("code",null,"--hard"),n(" 会包括当前源码回到上次状态。 保留当前更改，只回退 commit 信息可使用 "),l("code",null,"--soft"),n("。 清除缓存区中准备提交的内容，只保留修改的状态，可不加参数，或使用 "),l("code",null,"--mixed"),n("。")],-1)),i[14]||(i[14]=l("ul",null,[l("li",null,[l("p",null,[n("回滚到上一版本："),l("code",null,"git reset --hard HEAD^")])]),l("li",null,[l("p",null,[n("回退到指定版本 "),l("code",null,"git reset --hard id"),n(" (id 为 commit 版本号，填写前数位保证不重复即可)")])]),l("li",null,[l("p",null,[n("通过 "),l("code",null,"git log"),n(" 查看历史版本")])])],-1)),i[15]||(i[15]=l("p",null,[l("a",{href:"#git-reste"},"More Info")],-1)),i[16]||(i[16]=l("h3",{id:"分支管理",tabindex:"-1"},[n("分支管理 "),l("a",{class:"header-anchor",href:"#分支管理","aria-label":'Permalink to "分支管理"'},"​")],-1)),i[17]||(i[17]=l("ul",null,[l("li",null,[l("p",null,[n("显示当前分支 "),l("code",null,"git branch -v")])]),l("li",null,[l("p",null,[n("显示远程分支 "),l("code",null,"git remote -v")])]),l("li",null,[l("p",null,[n("将当前分支切换到 master 分支上: "),l("code",null,"git checkout master")])]),l("li",null,[l("p",null,[n("创建一个名为 xxx 的新分支: "),l("code",null,"git checkout -b xxx"),n(" , "),l("code",null,"-b"),n(" 选项表示创建指定名称的新分支。")])]),l("li",null,[l("p",null,[n("新建远程分支： "),l("code",null,"git push origin"),n(" 推送的分支:远程的分支")])]),l("li",null,[l("p",null,[n("合并分支： "),l("code",null,"git merge fake-branch")])]),l("li",null,[l("p",null,[n("删除分支： "),l("code",null,"git branch -d fake-branch")])]),l("li",null,[l("p",null,[n("删除远程分支："),l("code",null,"git push origin –-delete"),n(" 分支名")])]),l("li",null,[l("p",null,[n("修改分支名称："),l("code",null,"git branch -m old_branch_name new_branch_name")])]),l("li",null,[l("p",null,[n("批量删除分支："),l("code",null,"git branch | grep 'refactor/*' | xargs git branch -d")]),l("ul",null,[l("li",null,[n("譬如删除所有包含 "),l("code",null,"refactor/"),n("名称的分支")])])])],-1)),i[18]||(i[18]=l("h3",{id:"清除缓存",tabindex:"-1"},[n("清除缓存 "),l("a",{class:"header-anchor",href:"#清除缓存","aria-label":'Permalink to "清除缓存"'},"​")],-1)),i[19]||(i[19]=l("ul",null,[l("li",null,[l("p",null,[l("code",null,"git rm --cached [文件路径]")]),l("ul",null,[l("li",null,[l("p",null,[l("code",null,"-r"),n(" 递归")])]),l("li",null,[l("p",null,[l("code",null,"-f"),n(" 强制")])])])])],-1)),i[20]||(i[20]=l("p",null,[n("Example: "),l("code",null,"git rm -r --cached .")],-1)),i[21]||(i[21]=l("h3",{id:"凭证存储",tabindex:"-1"},[l("a",{href:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%87%AD%E8%AF%81%E5%AD%98%E5%82%A8",target:"_blank",rel:"noreferrer"},"凭证存储"),n(),l("a",{class:"header-anchor",href:"#凭证存储","aria-label":'Permalink to "[凭证存储](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%87%AD%E8%AF%81%E5%AD%98%E5%82%A8)"'},"​")],-1)),i[22]||(i[22]=l("p",null,[l("code",null,"git config --global credential.helper store")],-1)),i[23]||(i[23]=l("h2",{id:"faq",tabindex:"-1"},[n("FAQ "),l("a",{class:"header-anchor",href:"#faq","aria-label":'Permalink to "FAQ"'},"​")],-1)),i[24]||(i[24]=l("h3",{id:"合并代码冲突",tabindex:"-1"},[n("合并代码冲突 "),l("a",{class:"header-anchor",href:"#合并代码冲突","aria-label":'Permalink to "合并代码冲突"'},"​")],-1)),i[25]||(i[25]=l("ul",null,[l("li",null,"如果系统中有一些配置文件在服务器上做了配置修改,然后后续开发又新添加一些配置项的时候, 在发布这个配置文件的时候,会发生代码冲突:")],-1)),i[26]||(i[26]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"error: Your local changes to the following files would be overwritten by merge:")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"        protected/config/main.php")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"Please, commit your changes or stash them before you can merge.")])])]),l("button",{class:"collapse"})],-1)),i[27]||(i[27]=l("ul",null,[l("li",null,"如果希望保留生产服务器上所做的改动,仅仅并入新配置项, 处理方法如下:")],-1)),i[28]||(i[28]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git stash")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"git pull")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"git stash pop")])])]),l("button",{class:"collapse"})],-1)),i[29]||(i[29]=l("ul",null,[l("li",null,"反过来,如果希望用代码库中的文件完全覆盖本地工作版本. 方法如下:")],-1)),i[30]||(i[30]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git reset --hard //重置到上次提交的状态")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"git pull")])])]),l("button",{class:"collapse"})],-1)),i[31]||(i[31]=l("blockquote",null,[l("p",null,[n("参见："),l("a",{href:"http://blog.csdn.net/iefreer/article/details/7679631",target:"_blank",rel:"noreferrer"},"http://blog.csdn.net/iefreer/article/details/7679631")])],-1)),i[32]||(i[32]=l("h3",{id:"提交至-github-时出现-invalid-email-address",tabindex:"-1"},[n("提交至 GitHub 时出现 invalid-email-address "),l("a",{class:"header-anchor",href:"#提交至-github-时出现-invalid-email-address","aria-label":'Permalink to "提交至 GitHub 时出现 invalid-email-address"'},"​")],-1)),i[33]||(i[33]=l("ul",null,[l("li",null,[l("p",null,[n("查看 git 设置："),l("code",null,"cat $HOME/.gitconfig")])]),l("li",null,[l("p",null,"正常情况应显示 [user]name 与 email 的信息。")]),l("li",null,[l("p",null,"若无，通过如下代码修改 git 配置。")])],-1)),i[34]||(i[34]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,'git config --global user.name "用户名"')]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,'git config --global user.email "Git账户邮箱"')])])]),l("button",{class:"collapse"})],-1)),i[35]||(i[35]=l("ul",null,[l("li",null,[l("p",null,"修改已经使用 invalid-email 提交的 commit 信息")]),l("li",null,[l("p",null,[n("(若不知道无效邮箱的具体地址，可通过 "),l("code",null,"git log"),n(" 查看提交时的邮箱地址。)")])])],-1)),i[36]||(i[36]=l("blockquote",null,[l("p",null,[l("a",{href:"https://github.com/kadishmal/tilchi.com/wiki/GitHub-Fix-invalid-email-address-in-Repository-History",target:"_blank",rel:"noreferrer"},"GitHub Fix invalid email address in Repository History")])],-1)),i[37]||(i[37]=l("h3",{id:"合并两个不同的项目-出现错误",tabindex:"-1"},[n("合并两个不同的项目，出现错误 "),l("a",{class:"header-anchor",href:"#合并两个不同的项目-出现错误","aria-label":'Permalink to "合并两个不同的项目，出现错误"'},"​")],-1)),i[38]||(i[38]=l("ul",null,[l("li",null,[l("p",null,[l("code",null,"fatal: refusing to merge unrelated histories")])]),l("li",null,[l("p",null,[n("因为他们是两个不同的项目，要把两个不同的项目合并，git 需要添加一句代码，在"),l("code",null,"git pull"),n("后添加"),l("code",null,"--allow-unrelated-histories")])]),l("li",null,[l("p",null,[n("假如我们的源是 "),l("code",null,"origin"),n(" ，分支是 "),l("code",null,"master"),n(": "),l("code",null,"git pull origin master ----allow-unrelated-histories")])])],-1)),i[39]||(i[39]=l("blockquote",null,[l("p",null,[n("参见："),l("a",{href:"http://blog.csdn.net/lindexi_gd/article/details/52554159",target:"_blank",rel:"noreferrer"},"http://blog.csdn.net/lindexi_gd/article/details/52554159")])],-1)),i[40]||(i[40]=l("h3",{id:"删除已经上传至-github-中的文件",tabindex:"-1"},[n("删除已经上传至 GitHub 中的文件 "),l("a",{class:"header-anchor",href:"#删除已经上传至-github-中的文件","aria-label":'Permalink to "删除已经上传至 GitHub 中的文件"'},"​")],-1)),i[41]||(i[41]=l("p",null,[n("上传项目的时候有些需要忽略的文件夹并未加入 "),l("code",null,".gitignore"),n(" 文件中，导致上传了一些并不想上传的文件。")],-1)),i[42]||(i[42]=l("p",null,"我们想要在 github 上面删除，但又不想在本地删除。",-1)),i[43]||(i[43]=l("p",null,"Example:",-1)),i[44]||(i[44]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git rm -r --cached .idea  #--cached不会把本地的 .idea 删除")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"git commit -m 'delete .idea dir'")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"git push -u origin master")])])]),l("button",{class:"collapse"})],-1)),i[45]||(i[45]=l("h3",{id:"修改已提交内容",tabindex:"-1"},[n("修改已提交内容 "),l("a",{class:"header-anchor",href:"#修改已提交内容","aria-label":'Permalink to "修改已提交内容"'},"​")],-1)),i[46]||(i[46]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git commit --amend")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"# 修改 commit message")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,'git commit --amend --author="simimi <me@simimi.cn>"')])])]),l("button",{class:"collapse"})],-1)),i[47]||(i[47]=l("blockquote",null,[l("p",null,[n("参考："),l("a",{href:"https://blog.csdn.net/sodaslay/article/details/72948722",target:"_blank",rel:"noreferrer"},"git 修改已提交的内容 - CSDN")])],-1)),i[48]||(i[48]=l("h3",{id:"修改之前已经上传的提交",tabindex:"-1"},[n("修改之前已经上传的提交 "),l("a",{class:"header-anchor",href:"#修改之前已经上传的提交","aria-label":'Permalink to "修改之前已经上传的提交"'},"​")],-1)),i[49]||(i[49]=l("h4",{id:"修改方法一",tabindex:"-1"},[n("修改方法一 "),l("a",{class:"header-anchor",href:"#修改方法一","aria-label":'Permalink to "修改方法一"'},"​")],-1)),i[50]||(i[50]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git rebase -i HEAD~1   #当前版本的倒数第一次状态")])])]),l("button",{class:"collapse"})],-1)),i[51]||(i[51]=l("ul",null,[l("li",null,[n("显示结果如下，修改 "),l("code",null,"pick"),n(" 为 "),l("code",null,"edit"),n(" ，并按 "),l("code",null,"esc"),n(" 输入 "),l("code",null,":wq"),n(" 保存退出")])],-1)),i[52]||(i[52]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"pick 578ba7a hexo backup")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"​")]),n(`
`),l("span",{class:"line"},[l("span",null,"# Rebase eeb9c17..578ba7a onto eeb9c17 (1 command)")]),n(`
`),l("span",{class:"line"},[l("span",null,"#")]),n(`
`),l("span",{class:"line"},[l("span",null,"# Commands:")]),n(`
`),l("span",{class:"line"},[l("span",null,"#  pick = use commit")]),n(`
`),l("span",{class:"line"},[l("span",null,"#  edit = use commit, but stop for amending //改上面的 pick 为 edit")]),n(`
`),l("span",{class:"line"},[l("span",null,"#  squash = use commit, but meld into previous commit")]),n(`
`),l("span",{class:"line"},[l("span",null,"#")]),n(`
`),l("span",{class:"line"},[l("span",null,"# If you remove a line here THAT COMMIT WILL BE LOST.")]),n(`
`),l("span",{class:"line"},[l("span",null,"# However, if you remove everything, the rebase will be aborted.")]),n(`
`),l("span",{class:"line"},[l("span",null,"12")])])]),l("button",{class:"collapse"})],-1)),i[53]||(i[53]=l("h4",{id:"修改方法二",tabindex:"-1"},[n("修改方法二 "),l("a",{class:"header-anchor",href:"#修改方法二","aria-label":'Permalink to "修改方法二"'},"​")],-1)),i[54]||(i[54]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"# 修改需要修改的地方（只是修改 commit message 就不用做）")]),n(`
`),l("span",{class:"line"},[l("span",null,"git add . #这一步如果只是修改 commit message 不用输入")]),n(`
`),l("span",{class:"line"},[l("span",null,"git commit --amend")]),n(`
`),l("span",{class:"line"},[l("span",null,"# 输入修改后的 commit message，保存")])])]),l("button",{class:"collapse"})],-1)),i[55]||(i[55]=l("ul",null,[l("li",null,[l("p",null,[n("输入 "),l("code",null,"git rebase –continue"),n(" 完成操作")])]),l("li",null,[l("p",null,"推送")])],-1)),i[56]||(i[56]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git push <remote> <branch>")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"# Example: git push origin add-something")])])]),l("button",{class:"collapse"})],-1)),i[57]||(i[57]=l("h4",{id:"修改方法三",tabindex:"-1"},[n("修改方法三 "),l("a",{class:"header-anchor",href:"#修改方法三","aria-label":'Permalink to "修改方法三"'},"​")],-1)),i[58]||(i[58]=l("p",null,"找到想要修改的 commit 的父 commit id",-1)),i[59]||(i[59]=l("ul",null,[l("li",null,[l("code",null,"git rebase -i <父 commit id>")])],-1)),i[60]||(i[60]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"pick 578ba7a hexo backup")]),n(`
`),l("span",{class:"line"},[l("span",null,"2")]),n(`
`),l("span",{class:"line"},[l("span",null,"...")])])]),l("button",{class:"collapse"})],-1)),i[61]||(i[61]=l("p",null,[l("code",null,"pick"),n(" 修改为 "),l("code",null,"reword"),n(", "),l("code",null,":wq"),n(" 退出。")],-1)),i[62]||(i[62]=l("p",null,[n("此时可以修改更改 "),l("code",null,"reword"),n(" 的 commit message，"),l("code",null,"wq"),n(" 退出。")],-1)),i[63]||(i[63]=l("p",null,[n("剩余的 "),l("code",null,"git rebase --skip")],-1)),i[64]||(i[64]=l("blockquote",null,[l("p",null,[l("a",{href:"https://stackoverflow.com/questions/179123/how-to-modify-existing-unpushed-commit-messages",target:"_blank",rel:"noreferrer"},"How to modify existing, unpushed commit messages?"),n(" > "),l("a",{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository",target:"_blank",rel:"noreferrer"},"Removing sensitive data from a repository | GitHub")])],-1)),i[65]||(i[65]=l("h3",{id:"删除过去分支已经存在的某个文件",tabindex:"-1"},[n("删除过去分支已经存在的某个文件 "),l("a",{class:"header-anchor",href:"#删除过去分支已经存在的某个文件","aria-label":'Permalink to "删除过去分支已经存在的某个文件"'},"​")],-1)),i[66]||(i[66]=l("p",null,[n("譬如删除 "),l("code",null,"assets/xxx.psd"),n(" 文件。")],-1)),i[67]||(i[67]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git filter-branch -f --prune-empty --index-filter 'git rm -rf --cached --ignore-unmatch assets/xxx.psd' --tag-name-filter cat -- --all")])])]),l("button",{class:"collapse"})],-1)),i[68]||(i[68]=l("h3",{id:"增加子模块",tabindex:"-1"},[n("增加子模块 "),l("a",{class:"header-anchor",href:"#增加子模块","aria-label":'Permalink to "增加子模块"'},"​")],-1)),i[69]||(i[69]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git submodule add https://github.com/XXX/XXX")])])]),l("button",{class:"collapse"})],-1)),i[70]||(i[70]=l("blockquote",null,[l("p",null,[l("a",{href:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97",target:"_blank",rel:"noreferrer"},"Git 工具 - 子模块")])],-1)),i[71]||(i[71]=l("h3",{id:"清除本地修改",tabindex:"-1"},[n("清除本地修改 "),l("a",{class:"header-anchor",href:"#清除本地修改","aria-label":'Permalink to "清除本地修改"'},"​")],-1)),i[72]||(i[72]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git clean  -d  -fx")])])]),l("button",{class:"collapse"})],-1)),i[73]||(i[73]=l("ul",null,[l("li",null,[l("p",null,"d 删除未被添加到 git 的路径中的文件")]),l("li",null,[l("p",null,"f 强制运行")]),l("li",null,[l("p",null,"x 删除忽略文件已经对 git 来说不识别的文件")])],-1)),i[74]||(i[74]=l("h3",{id:"关闭-windows-crlf",tabindex:"-1"},[n("关闭 Windows CRLF "),l("a",{class:"header-anchor",href:"#关闭-windows-crlf","aria-label":'Permalink to "关闭 Windows CRLF"'},"​")],-1)),i[75]||(i[75]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git config --global core.autocrlf false")])])]),l("button",{class:"collapse"})],-1)),i[76]||(i[76]=l("h3",{id:"tag-相关",tabindex:"-1"},[n("Tag 相关 "),l("a",{class:"header-anchor",href:"#tag-相关","aria-label":'Permalink to "Tag 相关"'},"​")],-1)),i[77]||(i[77]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"# 添加 Tag")]),n(`
`),l("span",{class:"line"},[l("span",null,"git tag v2.0.0")]),n(`
`),l("span",{class:"line"},[l("span")]),n(`
`),l("span",{class:"line"},[l("span",null,"# 推送 Tag")]),n(`
`),l("span",{class:"line"},[l("span",null,"git push origin --tags")]),n(`
`),l("span",{class:"line"},[l("span",null,"​")]),n(`
`),l("span",{class:"line"},[l("span",null,"# 删除远程 Tag")]),n(`
`),l("span",{class:"line"},[l("span",null,"git tag -d 1.2.0")]),n(`
`),l("span",{class:"line"},[l("span",null,"git push origin :refs/tags/1.2.0")])])]),l("button",{class:"collapse"})],-1)),i[78]||(i[78]=l("h3",{id:"全局-gitignore",tabindex:"-1"},[n("全局 gitignore "),l("a",{class:"header-anchor",href:"#全局-gitignore","aria-label":'Permalink to "全局 gitignore"'},"​")],-1)),i[79]||(i[79]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git config --global core.excludesfile $HOME/.gitignore")])])]),l("button",{class:"collapse"})],-1)),i[80]||(i[80]=l("blockquote",null,[l("p",null,[l("a",{href:"https://stackoverflow.com/questions/5724455/can-i-make-a-user-specific-gitignore-file",target:"_blank",rel:"noreferrer"},"https://stackoverflow.com/questions/5724455/can-i-make-a-user-specific-gitignore-file")])],-1)),i[81]||(i[81]=l("h3",{id:"git-代理",tabindex:"-1"},[n("git 代理 "),l("a",{class:"header-anchor",href:"#git-代理","aria-label":'Permalink to "git 代理"'},"​")],-1)),i[82]||(i[82]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"# 设置代理")]),n(`
`),l("span",{class:"line"},[l("span",null,"git config --global http.proxy http://127.0.0.1:1087")]),n(`
`),l("span",{class:"line"},[l("span",null,"git config --global https.proxy https://127.0.0.1:1087")]),n(`
`),l("span",{class:"line"},[l("span",null,"​")]),n(`
`),l("span",{class:"line"},[l("span",null,"# 取消代理")]),n(`
`),l("span",{class:"line"},[l("span",null,"git config --global --unset http.proxy")]),n(`
`),l("span",{class:"line"},[l("span",null,"git config --global --unset https.proxy")])])]),l("button",{class:"collapse"})],-1)),i[83]||(i[83]=l("h2",{id:"详解",tabindex:"-1"},[n("详解 "),l("a",{class:"header-anchor",href:"#详解","aria-label":'Permalink to "详解"'},"​")],-1)),i[84]||(i[84]=l("h3",{id:"git-push",tabindex:"-1"},[n("git push "),l("a",{class:"header-anchor",href:"#git-push","aria-label":'Permalink to "git push"'},"​")],-1)),i[85]||(i[85]=l("ul",null,[l("li",null,"git push origin master")],-1)),i[86]||(i[86]=l("p",null,[n("上面命令表示，将本地的 "),l("code",null,"master"),n(" 分支推送到 "),l("code",null,"origin"),n(" 主机的 "),l("code",null,"master"),n(" 分支。如果 "),l("code",null,"master"),n(" 不存在，则会被新建。")],-1)),i[87]||(i[87]=l("p",null,"如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略。",-1)),i[88]||(i[88]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git push origin")])])]),l("button",{class:"collapse"})],-1)),i[89]||(i[89]=l("p",null,[n("上面命令表示，将当前分支推送到 "),l("code",null,"origin"),n(" 主机的对应分支。如果当前分支只有一个追踪分支，那么主机名都可以省略,使用 "),l("code",null,"git push"),n("。")],-1)),i[90]||(i[90]=l("p",null,[n("如果当前分支与多个主机存在追踪关系，则可以使用 "),l("code",null,"-u"),n(" 选项指定一个默认主机，这样后面就可以不加任何参数使用 "),l("code",null,"git push"),n("。")],-1)),i[91]||(i[91]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git push -u origin master")])])]),l("button",{class:"collapse"})],-1)),i[92]||(i[92]=l("p",null,[n("上面命令将本地的 "),l("code",null,"master"),n(" 分支推送到 "),l("code",null,"origin"),n(" 主机，同时指定 "),l("code",null,"origin"),n(" 为默认主机，后面就可以不加任何参数使用 "),l("code",null,"git push"),n(" 了。")],-1)),i[93]||(i[93]=l("p",null,[n("不带任何参数的 "),l("code",null,"git push"),n(" ，默认只推送当前分支，这叫做 "),l("code",null,"simple"),n(" 方式。此外，还有一种 "),l("code",null,"matching"),n(" 方式，会推送所有有对应的远程分支的本地分支。Git 2.0 版本之前，默认采用 "),l("code",null,"matching"),n(" 方法，现在改为默认采用 "),l("code",null,"simple"),n(" 方式。如果要修改这个设置，可以采用 "),l("code",null,"git config"),n(" 命令。")],-1)),i[94]||(i[94]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"$ git config --global push.default matching")]),n(`
`),l("span",{class:"line"},[l("span",null,"# or")]),n(`
`),l("span",{class:"line"},[l("span",null,"$ git config --global push.default simple")])])]),l("button",{class:"collapse"})],-1)),i[95]||(i[95]=l("p",null,[n("还有一种情况，就是不管是否存在对应的远程分支，将本地的所有分支都推送到远程主机，这时需要使用"),l("code",null,"–all"),n(" 选项。")],-1)),i[96]||(i[96]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git push --all origin")])])]),l("button",{class:"collapse"})],-1)),i[97]||(i[97]=l("p",null,[n("上面命令表示，将所有本地分支都推送到 "),l("code",null,"origin"),n(" 主机。")],-1)),i[98]||(i[98]=l("blockquote",null,[l("p",null,[n("参见: "),l("a",{href:"http://www.yiibai.com/git/git_push.html",target:"_blank",rel:"noreferrer"},"http://www.yiibai.com/git/git_push.html")])],-1)),i[99]||(i[99]=l("h4",{id:"推送给多个远程仓库",tabindex:"-1"},[n("推送给多个远程仓库 "),l("a",{class:"header-anchor",href:"#推送给多个远程仓库","aria-label":'Permalink to "推送给多个远程仓库"'},"​")],-1)),i[100]||(i[100]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"git remote set-url --add origin https://xxx")])])]),l("button",{class:"collapse"})],-1)),i[101]||(i[101]=l("h3",{id:"git-add",tabindex:"-1"},[n("git add "),l("a",{class:"header-anchor",href:"#git-add","aria-label":'Permalink to "git add"'},"​")],-1)),i[102]||(i[102]=l("ul",null,[l("li",null,[l("p",null,[l("code",null,"git add -u"),n(" 提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)")])]),l("li",null,[l("p",null,[l("code",null,"git add ."),n(" 提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件")])]),l("li",null,[l("p",null,[l("code",null,"git add -A"),n(" 提交所有变化（"),l("code",null,"git add --all"),n(" 的缩写）")])])],-1)),i[103]||(i[103]=l("h3",{id:"git-reset",tabindex:"-1"},[n("git reset "),l("a",{class:"header-anchor",href:"#git-reset","aria-label":'Permalink to "git reset"'},"​")],-1)),i[104]||(i[104]=l("p",null,[l("a",{href:"https://git-scm.com/docs/git-reset",target:"_blank",rel:"noreferrer"},"git reset"),n(" | "),l("a",{href:"https://git-scm.com/docs/git-reset",target:"_blank",rel:"noreferrer"},"Git Docs")],-1)),i[105]||(i[105]=l("p",null,"index 也被称为 staging area ，是指一整套即将被下一个提交的文件集合。",-1)),i[106]||(i[106]=l("p",null,[l("code",null,"git add -A"),n(" 便是将当前修改文件加入 staging area 。")],-1)),i[107]||(i[107]=l("h4",{id:"–mixed",tabindex:"-1"},[n("–mixed "),l("a",{class:"header-anchor",href:"#–mixed","aria-label":'Permalink to "--mixed"'},"​")],-1)),i[108]||(i[108]=l("p",null,"默认方式，回退到某个版本，只保留源码，回退 commit 和 index 信息。",-1)),i[109]||(i[109]=l("h4",{id:"–hard",tabindex:"-1"},[n("–hard "),l("a",{class:"header-anchor",href:"#–hard","aria-label":'Permalink to "--hard"'},"​")],-1)),i[110]||(i[110]=l("p",null,"彻底回退到某个版本，本地源码变为上一个版本内容。",-1)),i[111]||(i[111]=l("h4",{id:"–soft",tabindex:"-1"},[n("–soft "),l("a",{class:"header-anchor",href:"#–soft","aria-label":'Permalink to "--soft"'},"​")],-1)),i[112]||(i[112]=l("p",null,"回退到某个版本，只回退 commit 的信息，保留 index 信息。 譬如如果还要提交，直接 commit 即可。",-1)),i[113]||(i[113]=l("h3",{id:"git-stash",tabindex:"-1"},[n("git stash "),l("a",{class:"header-anchor",href:"#git-stash","aria-label":'Permalink to "git stash"'},"​")],-1)),i[114]||(i[114]=l("ul",null,[l("li",null,[l("code",null,"git stash clear"),n(": 清除暂存")])],-1)),i[115]||(i[115]=l("h2",{id:"cheat-sheet",tabindex:"-1"},[n("Cheat sheet "),l("a",{class:"header-anchor",href:"#cheat-sheet","aria-label":'Permalink to "Cheat sheet"'},"​")],-1)),i[116]||(i[116]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"# 设置当前 git 用户名与邮箱")]),n(`
`),l("span",{class:"line"},[l("span",null,'git config user.name "simimi" && git config user.email "me@simimi.cn"')])])]),l("button",{class:"collapse"})],-1)),i[117]||(i[117]=l("h3",{id:"git-rebase",tabindex:"-1"},[n("git rebase "),l("a",{class:"header-anchor",href:"#git-rebase","aria-label":'Permalink to "git rebase"'},"​")],-1)),i[118]||(i[118]=l("p",null,"Bash",-1)),i[119]||(i[119]=l("div",{class:"language- vp-adaptive-theme"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"}),l("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[l("code",{"v-pre":""},[l("span",{class:"line"},[l("span",null,"# 放弃 rebase")]),n(`
`),l("span",{class:"line"},[l("span",null,"git rebase --abort")])])]),l("button",{class:"collapse"})],-1)),i[120]||(i[120]=l("p",null,"To Be Continued.",-1))]),"main-header":e(()=>[t(s.$slots,"main-header")]),"main-header-after":e(()=>[t(s.$slots,"main-header-after")]),"main-nav":e(()=>[t(s.$slots,"main-nav")]),"main-content":e(()=>[t(s.$slots,"main-content")]),"main-content-after":e(()=>[t(s.$slots,"main-content-after")]),"main-nav-before":e(()=>[t(s.$slots,"main-nav-before")]),"main-nav-after":e(()=>[t(s.$slots,"main-nav-after")]),comment:e(()=>[t(s.$slots,"comment")]),footer:e(()=>[t(s.$slots,"footer")]),aside:e(()=>[t(s.$slots,"aside")]),"aside-custom":e(()=>[t(s.$slots,"aside-custom")]),default:e(()=>[t(s.$slots,"default")]),_:3},8,["frontmatter"])}}};export{A as default};
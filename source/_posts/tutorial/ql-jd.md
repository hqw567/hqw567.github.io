---
title: 最新青龙面板薅羊毛教程（全过程）
tags:
  - 教程
  - 京东
  - 薅羊毛
categories:
  - 思米米的小教程
date: 2022-05-9 10:21:10
updated:
---

### 首先安装宝塔面板

使用 centos 7.X 的系统 用 Shell 复制以下命令安装宝塔面板
`yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec`

- 安装好后会提示账号和密码记得保存
- 访问 ip:8888 输了刚刚的账号密码登录即可
  - 如访问不了可能是服务器安全策略（系统防火墙）没有开放 8888 端口号，去服务器开放即可
  - 初次进入宝塔面板要安装运行环境，可先不安装

### 安装 Docker 管理器

登录宝塔面板后面点击左侧-软件商店-然后搜索 Docker 安装即可

<!-- more -->

### 安装青龙面板

打开 Shell 或宝塔终端复制贴贴以下安装

```
    docker run -dit \
    --name QL1 \
    --hostname QL1 \
    --restart always \
    -p 5745:5700 \
    -v $PWD/QL1/config:/ql/config \
    -v $PWD/QL1/log:/ql/log \
    -v $PWD/QL1/db:/ql/db \
    -v $PWD/QL1/scripts:/ql/scripts \
    -v $PWD/QL1/jbot:/ql/jbot \
    whyour/qinglong:latest
```

如需多容器修改`QL1`和`5745`即可 如

```
    docker run -dit \
    --name QL2 \
    --hostname QL2 \
    --restart always \
    -p 5746:5700 \
    -v $PWD/QL2/config:/ql/config \
    -v $PWD/QL2/log:/ql/log \
    -v $PWD/QL2/db:/ql/db \
    -v $PWD/QL2/scripts:/ql/scripts \
    -v $PWD/QL2/jbot:/ql/jbot \
    whyour/qinglong:latest
```

安装成功后在

- 服务器控制面板打开端口号，上面是`5745`，就打开`5745`端口
- 宝塔面板左侧-安全-系统防火墙放行`5745`端口即可
  - 俩都要打开

青龙面板新增任务

- 命令`ql repo https://hub.fastgit.xyz/KingRan/KR.git "jd_|jx_|jdCookie" "activity| backUp" "^jd[^_]|USER|utils|function|sign|sendNotify|ql|JDJR"`
- 定时规则`34 18 * * * *`
- 运行此任务拉取脚本即可

青龙面板添加依赖（必须）

- 点击青龙面板的依赖管理——新建依赖——选择 NodeJs、自动拆分选择是、复制以下的依赖填到名称里——点击确定，等待安装完成

- NodeJs 下

```
    crypto-js
    prettytable
    dotenv
    jsdom
    date-fns
    tough-cookie
    tslib
    ws@7.4.3
    ts-md5
    jsdom -g
    jieba
    fs
    form-data
    json5
    global-agent
    png-js
    @types/node
    require
    typescript
    js-base64
    axios
```

- 同理 Python3 下

```
    requests
    canvas
    ping3
    jieba
```

- Linux 下

```
    bizCode
    bizMsg
    lxml
```

#### 关于青龙容器内部基本操作

#### 所有操作要首先进入当前青龙再使用 `docker exec -it QL1 /bin/bash`，`QL1`是你的容器名称请修改需要操作容器名称

- 更新并重启青龙 `ql update`

- 运行自定义脚本 extra.sh `ql extra`

- 添加单个脚本文件 `ql raw <file_url>`

- 添加单个仓库的指定脚本
  `ql repo <repo_url> <whitelist> <blacklist> <dependence> <branch>`

- 删除旧日志 `ql rmlog <days>`

- 启动 tg-bot `ql bot`

- 检测青龙环境并修复 `ql check`

- 重置登录错误次数 `ql resetlet`

- 禁用两步登录 `ql resettfa`

- 依次执行，如果设置了随机延迟，将随机延迟一定秒数
  `task <file_path>`

- 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出日，同时记录在日志文件中
  `task <file_path> now`

- 并发执行，无论是否设置了随机延迟，均立即运行，前台不产生日，直接记录在日志文件中，且可指定账号执行
  `task <file_path> conc <env_name> <account_number>(可选的)`

- 指定账号执行，无论是否设置了随机延迟，均立即运行
  `task <file_path> desi <env_name> <account_number>`

### 青龙面板的变量第三方手动/半自动提交（上传）管理中间件

- 创建目录并进入
  `mkdir QLTools && cd QLTools`

- [选择 Linux_X64_v1.xx.rar](https://github.com/nuanxinqing123/QLTools/releases) -下载压缩包上传到此目录并解压文件

- 给予文件夹权限
  `chmod 755 QLPanelTools`

- 启动程序排查启动错误
  `./QLPanelTools`

- 程序无误后查看下面后台守护教程

### 程序台守护教程

- 安装 screen
  `yum -y install screen`

- 开启新的终端窗口
  `screen`

  - 直接敲 screen 即可打开新的终端窗口。进入后运行需要运行的进程。
  - 开启完成后，Catrl+a，然后输入 d，回车。即可暂时关闭窗口，但是后台继续运行。

- 恢复终端窗口

```
    screen -r //如果只有一个会话，可直接使用此命令恢复。
    screen -ls //查询所有会话列表
    screen -r 会话 ID //进入指定会话
```

- 如何杀死终端
  `screen -d 会话 ID`

  - 第二种方法
    `Ctrl+a`，输入 `K`，输入 `Y` 确认杀死会话。其实，使用 `exit` 也可。

确认是否成功杀掉会话可直接 `screen -ls`，看下列表中是否还有会话即可。

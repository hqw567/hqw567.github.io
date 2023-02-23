---
title: 2023最新青龙面板薅羊毛教程【全过程】
tags:
  - 教程
  - 羊毛
categories:
  - 思米米的小教程
date: 2022-05-09
updated: 2023-01-30
titleTemplate: "%s - Valaxy"
---

### 首先安装[宝塔面板](https://www.bt.cn/new/index.html)

使用 centos 7.X 的系统 用 Shell 复制以下命令安装宝塔面板

```shell
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```

- 安装好后会提示**账号和密码**记得保存
- 访问 **ip:端口号** 输了刚刚的账号密码登录即可（**端口号**安装完成后终端有提示）
  - 如访问不了可能是服务器安全策略（系统防火墙）没有开放 **安装时终端显示的** 端口号，去服务器开放即可
  - 初次进入宝塔面板要安装运行环境，可先不安装
  <!-- more -->

### 安装 [Docker](https://www.docker.com/) 管理器

#### 宝塔软件商店安装 Docker

登录宝塔面板后面点击左侧-软件商店-然后搜索 Docker 安装即可

#### 或者使用`shell`命令安装

1. docker 安装

```shell
sudo curl -sSL get.docker.com | sh
```

2. 配置国内镜像源 Configure domestic mirror sources

```shell
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://mirror.ccs.tencentyun.com",
        "http://hub-mirror.c.163.com",
        "https://registry.docker-cn.com",
        "http://hub-mirror.c.163.com",
        "https://docker.mirrors.ustc.edu.cn"
    ]
}
EOF
systemctl daemon-reload
systemctl restart docker
```

### 安装青龙面板 [qinglong](https://github.com/whyour/qinglong)

打开 Shell 或宝塔终端复制贴贴以下安装

```shell
  docker run -dit \
  -v $PWD/ql1:/ql/data \
  -p 5744:5700 \
  --name ql1 \
  --hostname ql1 \
  --restart unless-stopped \
  whyour/qinglong:latest
```

如需多容器修改`ql2`和`5745`即可 如

```shell
  docker run -dit \
  -v $PWD/ql2:/ql/data \
  -p 5745:5700 \
  --name ql2 \
  --hostname ql2 \
  --restart unless-stopped \
  whyour/qinglong:latest

```

安装成功后在

- 服务器控制面板打开端口号，上面是`5745`，就打开`5745`端口
- 宝塔面板左侧-安全-系统防火墙放行`5745`端口即可
  - 俩都要打开

青龙面板新增任务

- 命令

```shell
ql repo https://hub.fastgit.xyz/KingRan/KR.git "jd_|jx_|jdCookie" "activity| backUp" "^jd[^_]|USER|utils|function|sign|sendNotify|ql|JDJR"
```

- 定时规则`34 18 * * * *`
- 运行此任务拉取脚本即可

青龙面板添加依赖（必须）

- 点击青龙面板的依赖管理——新建依赖——选择 NodeJs、自动拆分选择是
- 复制以下的依赖填到名称里——点击确定，等待安装完成

- NodeJs 下

```shell
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

```shell
    requests
    canvas
    ping3
    jieba
```

#### 关于青龙容器内部基本操作

#### 所有操作要首先进入当前青龙再使用 `docker exec -it ql1 /bin/bash`

> `ql1`是你的容器名称请修改需要操作容器名称

#### 1.内置命令

```shell
# 更新并重启青龙
ql update
# 运行自定义脚本extra.sh
ql extra
# 添加单个脚本文件
ql raw <file_url>
# 添加单个仓库的指定脚本
ql repo <repo_url> <whitelist> <blacklist> <dependence> <branch> <extensions>
# 删除旧日志
ql rmlog <days>
# 启动tg-bot
ql bot
# 检测青龙环境并修复
ql check
# 重置登录错误次数
ql resetlet
# 禁用两步登录
ql resettfa

# 依次执行，如果设置了随机延迟，将随机延迟一定秒数
task <file_path>
# 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出日，同时记录在日志文件中
task <file_path> now
# 并发执行，无论是否设置了随机延迟，均立即运行，前台不产生日，直接记录在日志文件中，且可指定账号执行
task <file_path> conc <env_name> <account_number>(可选的)
# 指定账号执行，无论是否设置了随机延迟，均立即运行
task <file_path> desi <env_name> <account_number>
# 设置任务超时时间
task -m <max_time> <file_path>
# 实时打印任务日志，创建定时任务时，不用携带此参数
task -l <file_path>
```

#### 2.参数说明

- file_url: 脚本地址
- repo_url: 仓库地址
- whitelist: 拉取仓库时的白名单，即就是需要拉取的脚本的路径包含的字符串，多个竖线分割
- blacklist: 拉取仓库时的黑名单，即就是需要拉取的脚本的路径不包含的字符串，多个竖线分割
- dependence: 拉取仓库需要的依赖文件，会直接从仓库拷贝到 scripts 下的仓库目录，不受黑名单影响，多个竖线分割
- extensions: 拉取仓库的文件后缀，多个竖线分割
- branch: 拉取仓库的分支
- days: 需要保留的日志的天数
- file_path: 任务执行时的文件路径
- env_name: 任务执行时需要并发或者指定时的环境变量名称
- account_number: 任务执行时指定某个环境变量需要执行的账号序号
- max_time: 超时时间，后缀"s"代表秒(默认值), "m"代表分, "h"代表小时, "d"代表天

### 青龙面板的变量第三方手动/半自动提交（上传）管理中间件[QLTools](https://github.com/nuanxinqing123/QLTools)

#### 安装方式一：Supervisord & PM2 & nohup 启动守护

```shell
# 创建目录并进入
mkdir QLTools && cd QLTools

#下载压缩包 QLTools-linux-amd64 上传到此目录并解压文件
https://github.com/nuanxinqing123/QLTools/releases


# 给予权限  程序名称(QLTools-linux-amd64)
chmod 755 程序名称


# 启动程序排查启动错误
./程序名称

# 程序无误后点击下方教程查看程序后台守护教程
```

> 后台守护教程
> 教程地址：[青龙 Tools 的后台进程守护教程附(反代域名)](https://6b7.org/460.html)

#### 安装方式二、Docker 启动
```shell
# 创建 QLTools 目录并进入

mkdir qltools && cd qltools

# Docker 版本提供架构：amd64、arm64、arm-7

docker run --restart=always -itd --name QLTools -v $PWD/config:/QLTools/config -v $PWD/plugin:/QLTools/plugin -p 15000:15000 nuanxinqing123/qltools:latest

# 更新步骤：后台点击更新，稍等 5 分钟左右。手动重启容器即可完成更新（如果更新失败，请删除容器和镜像，然后重新拉取镜像启动）

# 重启命令：docker restart QLTools
```
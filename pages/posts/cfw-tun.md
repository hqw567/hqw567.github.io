---
title: Clash for Windows 中使用全局代理 TUN 模式
tags:
  - Proxy
categories:
  - 思米米的小笔记
date: 2023-02-21
updated: 2023-02-21
password: 123456
hide: true
---

## Clash for Windows TUN 模式

对于不遵循系统代理的软件，TUN 模式可以接管其流量并交由 CFW 处理，在 Windows 中，TUN 模式性能比 TAP 模式好

::: warning 注意
近期大部分浏览器默认已经开启“**安全 DNS**”功能，此功能会影响 TUN 模式劫持 DNS 请求导致反推域名失败，请在浏览器设置中关闭此功能以保证 TUN 模式正常运行
:::

<!-- more -->

## Windows

启动 TUN 模式需要进行如下操作：

1. 点击`General`中`Service Mode`右边`Manage`，在打开窗口中安装服务模式，安装完成应用会自动重启，Service Mode 右边地球图标变为`绿色`即安装成功
2. 点击`General`中`TUN Mode`右边开关启动 TUN 模式

::: tip NOTICE
如果使用`system`作为 TUN stack，需要同时在系统防火墙中将 clash core 放行，方法如下：

在`0.19.27`及以上版本中，点击 Clash Core 版本号前的图标，并在 UAC 弹窗（若有）中允许运行，CFW 将自动配置对应的防火墙规则。

成功配置防火墙规则后该图标作为指示灯亮起。

![](https://docs.cfw.lbyczf.com/assets/img/firewallrule1.7f4f180f.png)

在 [Scoop](https://scoop.sh/) 版上使用此功能需要`0.20.3`及以上版本，并且每次更新 CFW 后都需要更新防火墙规则。如果要通过 Scoop 安装脚本实现自动更新规则，可以参考：[manifest](https://github.com/AkariiinMKII/Scoop4kariiin/blob/440f19c6c1cc70176e04221d16c8e806255ca325/bucket/ClashforWindows.json#L49-L70) [script](https://github.com/AkariiinMKII/Scoop4kariiin/blob/440f19c6c1cc70176e04221d16c8e806255ca325/scripts/ClashforWindows/update-firewall-rules.ps1#L1-L22)
:::

::: tip NOTICE
由于查询防火墙权限受限等原因，指示灯可能无法正常工作，请以系统防火墙列表及 Clash 网卡运行状态为准。

这里提供一个可用于自查的 PowerShell 脚本（可能需要管理员权限）：

```powershell
#Requires -Version 3
#Requires -Modules NetSecurity

$List = Get-NetFirewallRule -Enabled True -Action Allow -Description 'Work with Clash for Windows.' | Where-Object { 'Clash Core' -eq $_.DisplayName }
$Report = foreach ($Rule in $List)
{
    $Program = (Get-NetFirewallApplicationFilter -AssociatedNetFirewallRule $Rule).Program

    [pscustomobject] @{
        Enabled     = $Rule.Enabled
        Action      = $Rule.Action
        Protocol    = (Get-NetFirewallPortFilter -AssociatedNetFirewallRule $Rule).Protocol
        Program     = $Program
        IsPathValid = Test-Path -PathType Leaf -LiteralPath $Program
    }
}
$Report
Pause
```

以 x86-64 版本为例，如果输出类似以下内容，那么规则添加成功（请自行验证 `Program` 路径的有效性）：

```yaml
Enabled     : True
Action      : Allow
Protocol    : TCP
Program     : C:\Program Files\Clash for Windows\resources\static\files\win\x64\clash-win64.exe
IsPathValid : True

Enabled     : True
Action      : Allow
Protocol    : UDP
Program     : C:\Program Files\Clash for Windows\resources\static\files\win\x64\clash-win64.exe
IsPathValid : True
```

:::

<outdated since="0.19.0">

2. 在使用的配置文件中加入如下内容：

```yaml
dns:
  enable: true
  enhanced-mode: fake-ip
  nameserver:
    - 8.8.8.8 # 真实请求DNS，可多设置几个
    - 114.114.114.114
# interface-name: WLAN # 出口网卡名称，或者使用下方的自动检测
tun:
  enable: true
  stack: gvisor # 使用 system 需要 Clash Premium 2021.05.08 及更高版本
  dns-hijack:
    - 198.18.0.2:53 # 请勿更改
  auto-route: true
  auto-detect-interface: true # 自动检测出口网卡
```

::: tip NOTICE
从`Clash Premium 2021.05.08`开始，使用`auto-*`代替`macOS-auto-*`，往后数个版本将暂时兼容旧字段名。此版本同时添加了`system stack`支持。[参考](https://github.com/Dreamacro/clash/releases/tag/premium)
:::

### 注意事项

当`enhanced-mode`设置为`fake-ip`时，会出现系统检测到网卡无法联网，微软系 APP 无法登陆使用等问题，可以通过添加`fake-ip-filter`解决：

```yaml
dns:
  enable: true
  enhanced-mode: fake-ip
  nameserver:
    - 114.114.114.114
  fake-ip-filter:
    - "dns.msftncsi.com"
    - "www.msftncsi.com"
    - "www.msftconnecttest.com"
```

::: tip
TUN 模式更推荐使用 fake-ip 模式
:::

</outdated>

## macOS

启动 TUN 模式需要进行如下操作：

1. 点击`General`中`Service Mode`右边`Manage`，在打开窗口中安装服务模式，安装完成应用会自动重启，Service Mode 右边地球图标变为`绿色`即安装成功
2. 点击`General`中`TUN Mode`右边开关启动 TUN 模式

<outdated since="0.19.0">

2. 在使用的配置文件中加入如下内容：

```yaml
dns:
  enable: true
  enhanced-mode: fake-ip
  nameserver:
    - 114.114.114.114 # 真实请求DNS，可多设置几个
# interface-name: en0 # 出口网卡名称，或者使用下方的自动检测
tun:
  enable: true
  stack: system # 或 gvisor
  dns-hijack: # DNS劫持设置为系统DNS
    - 114.114.114.114 # 可任意设置，但为了保证CFW关闭后能不影响联网，建议设置真实能访问的DNS服务器
  auto-route: true
  auto-detect-interface: true # 自动检测出口网卡
```

::: tip NOTICE
从`Clash Premium 2021.05.08`开始，使用`auto-*`代替`macOS-auto-*`，往后数个版本将暂时兼容旧字段名。[参考](https://github.com/Dreamacro/clash/releases/tag/premium)
:::

::: tip
dns-hijack 不可以劫持局域网地址的 DNS，如 192.168.0.0/16，请务必手动设置系统 DNS
:::

</outdated>

::: tip
若要将此 Mac 设置为代理网关，打开 IP 转发即可：

```
sudo sysctl -w net.inet.ip.forwarding=1
```

这种做法将在机器下次重启后失效，如果想要永久保存，编辑文件`/etc/sysctl.conf`，配置下面变量：

```
net.inet.ip.forwarding=1
net.inet6.ip6.forwarding=1
```

或者使用 LaunchDaemons 进行配置：

1. 新建 `network.forwarding.plist`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>Network Forwarding</string>
    <key>UserName</key>
    <string>root</string>
    <key>GroupName</key>
    <string>wheel</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/sbin/sysctl</string>
        <string>-w</string>
        <string>net.inet.ip.forwarding=1</string>
        <string>net.inet6.ip6.forwarding=1</string>
    </array>
    <key>KeepAlive</key>
    <false/>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```

2. 将文件添加进 `/Library/LaunchDaemons`
3. `sudo launchctl load /Library/LaunchDaemons/network.forwarding.plist`
   :::

## Linux

启动 TUN 模式需要进行如下操作：

1. 点击`General`中`Service Mode`右边`Manage`，在打开窗口中安装服务模式，安装完成应用会自动重启（某些系统需要手动重启 APP），Service Mode 右边地球图标变为`绿色`即安装成功
2. 点击`General`中`TUN Mode`右边开关启动 TUN 模式

<outdated since="0.19.0">

2. 在使用的配置文件中加入如下内容：

```yaml
dns:
  enable: true
  enhanced-mode: fake-ip
  nameserver:
    - 114.114.114.114 # 真实请求DNS，可多设置几个
tun:
  enable: true
  stack: system # 或 gvisor
  dns-hijack:
    - 1.0.0.1:53 # 请勿更改
```

::: tip
Linux 下一般不需要设置`interface-name`字段
:::

</outdated>

## 配置文件参考

[Clash Wiki](https://github.com/Dreamacro/clash/wiki/Clash-Premium-Features)

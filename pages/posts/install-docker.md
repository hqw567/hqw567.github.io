---
layout: post
tags:
  - 学习
  - 笔记
categories:
  - 思米米的小笔记
title: Docker 安装：脚本与 Ubuntu 生产实践
date: 2025-08-08 18:17:44
---

提供两种安装方式：官方脚本快速安装，以及 Ubuntu 生产环境手动安装（含自启、非 root、版本锁定与日志轮转）。

<!-- more -->

### 一键安装（官方脚本）

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

脚本会自动为你的发行版配置官方仓库并安装最新稳定版的 Docker Engine、containerd 等组件。

> 说明：该脚本适合快速体验与开发环境，生产环境建议按发行版文档进行标准安装与配置。

### 生产环境（Ubuntu 手动安装）

适用于 Ubuntu 20.04/22.04/24.04（systemd 环境）。

1) 卸载旧版本（如存在）

```bash
sudo apt-get remove -y docker docker-engine docker.io containerd runc || true
```

2) 添加 Docker 官方仓库

```bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

3) 安装 Docker Engine 与常用组件

```bash
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

（后置步骤见下文）

### 通用后置步骤

#### 启动并设置开机自启（systemd）

```bash
sudo systemctl enable --now docker
```

#### 非 root 使用（可选）

```bash
sudo usermod -aG docker "$USER"
newgrp docker
docker ps
```

#### 验证

```bash
docker --version
docker run --rm hello-world
```

### 可选配置

#### 固定版本安装（生产建议显式版本）

```bash
# 列出可用版本（选一个版本字符串）
apt-cache madison docker-ce | awk '{ print $3 }' | head -n 10

# 示例：用选定的 VERSION_STRING 安装指定版本
sudo apt-get install -y \
  docker-ce=VERSION_STRING \
  docker-ce-cli=VERSION_STRING \
  containerd.io docker-buildx-plugin docker-compose-plugin
```

#### 基础生产配置（日志轮转）

```bash
sudo mkdir -p /etc/docker
cat <<'EOF' | sudo tee /etc/docker/daemon.json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "100m",
    "max-file": "3"
  }
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 参考

- Docker Engine 安装指南： https://docs.docker.com/engine/install/
- Ubuntu 安装章节： https://docs.docker.com/engine/install/ubuntu/
- 官方安装脚本源码： https://github.com/docker/docker-install

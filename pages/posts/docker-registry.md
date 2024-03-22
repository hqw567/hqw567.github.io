---
title: 使用 Docker Registry 搭建私有镜像仓库
tags:
  - Docker
categories:
  - 思米米的小笔记
layout: post
date: 2024-03-22 10:40:10
---

在 Ubuntu 服务器上使用 Docker Registry 搭建私有镜像仓库

1. **安装 Docker**

如果您的 Ubuntu 服务器上还未安装 Docker,请先使用以下命令安装:

```shell
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io
```

2. **启动 Docker Registry 容器**

您可以直接使用官方提供的 Docker Registry 镜像来启动一个 Registry 容器:

```shell
docker run -d -p 5000:5000 --restart=always --name registry registry:latest
```

这条命令会从 Docker Hub 拉取官方的 `registry:latest` 镜像,并以分离模式 (-d) 运行,将容器的 5000 端口映射到主机的 5000 端口 (-p 5000:5000),容器重启时自动重新启动 (--restart=always),命名为 registry。

3. **配置nginx反向代理**

下载nginx官方docker镜像并运行一个新容器作为反向代理:

```shell
docker run -d -p 80:80 --name nginx \
  --link registry:registry \
  -v /path/to/nginx.conf:/etc/nginx/nginx.conf:ro \
  nginx:latest
```

nginx.conf配置文件示例:

```nginx
events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name myregistry.domain.com;

        location / {
            proxy_pass                      http://registry:5000;
            proxy_set_header  Host          $http_host;
            proxy_set_header  X-Real-IP     $remote_addr;
            proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
}
```

4. **启用Registry认证**

对 Registry 进行身份认证,可以使用 `htpasswd` 工具生成一个密码文件,并将其挂载到 Registry 容器中,其中myuser为用户名,mypassword为密码:

```shell
sudo mkdir -p /opt/registry/auth
sudo docker pull httpd:2.4
sudo docker run --rm httpd:2.4 htpasswd -Bbn myuser mypassword > /opt/registry/auth/htpasswd
```

检查密码文件是否生成:

```shell
sudo cat /opt/registry/auth/htpasswd
```

运行registry容器并添加环境变量启用身份验证:

```shell
docker run -d -p 5000:5000 --restart=always --name registry \
  -v /opt/registry/auth:/auth \
  -e "REGISTRY_AUTH=htpasswd" \
  -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm" \
  -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd \
  registry:latest
```

5. **配置Portainer作为可视化Web UI**

启动Portainer容器并与Registry链接:

```shell
docker run -d -p 9000:9000 --name portainer \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --link registry:registry \
  portainer/portainer-ce
```

在Portainer Web UI上连接到本地Docker环境,即可查看和管理registry。

6. **配置域名DNS解析并开放防火墙端口**

将myregistry.domain.com的域名解析到您的服务器IP上。

开放80和5000端口的入站规则,允许访问nginx和registry。

7. **配置本地 Docker 守护进程**

要让本地的 Docker 守护进程能够连接和使用新启动的 Registry 服务,请编辑 `/etc/docker/daemon.json` 文件,添加 `insecure-registries` 配置:

```json
{
  "insecure-registries": ["myregistrydomain.com:5000"]
}
```

将 `myregistrydomain.com:5000` 替换为您服务器的 IP 地址和分配的端口号,比如 `myregistrydomain.com:5000`。

之后重启 Docker 服务:

```shell
sudo systemctl restart docker
```

8. **使用 Registry**

注意 使用前需要登录，推送镜像、拉取镜像等操作都需要先登录，一般只需要操作一次即可会默认记住登录状态:

```shell
docker login -u myuser -p mypassword myregistrydomain.com:5000
```

构建一个镜像并推送到本地仓库:

```shell
docker build -t myregistrydomain.com:5000/my-image:tag .
docker push myregistrydomain.com:5000/my-image:tag
```

从本地仓库拉取并运行镜像:

```shell
docker pull myregistrydomain.com:5000/my-image:tag
docker run myregistrydomain.com:5000/my-image:tag
```

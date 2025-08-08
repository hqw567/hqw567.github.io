---
title: 使用 Docker Registry 搭建私有镜像仓库
tags:
  - Docker
categories:
  - 思米米的小笔记
layout: post
date: 2024-03-22 10:40:10
---

在 Ubuntu 服务器上使用 Docker Registry 搭建私有镜像仓库，并配合 Nginx 提供 TLS 终端与反向代理（推荐）。

安装模式选择（按需任选其一）：

- 使用“已有 Nginx/TLS 终端”（推荐）：运行 Registry 即可；在你现有的 Nginx/Ingress/负载均衡上新增站点，反代到 `registry:5000`（或宿主机 `127.0.0.1:5000`）。
- 使用“容器化 Nginx”：按本文 Nginx 容器示例部署（适合无现有 Web 入口的主机）。
- “无 TLS”（仅内网/测试）：跳过证书与 Nginx 步骤，客户端配置 `insecure-registries` 后直连 `:5000`。

1. **安装 Docker**

请先安装 Docker 引擎（包含 `docker` 与 `containerd`）。建议按照标准步骤安装与启用服务，参考：

- 《Docker 安装：脚本与 Ubuntu 生产实践》（本站文档）
- 官方文档： https://docs.docker.com/engine/install/ubuntu/

2. **准备网络与目录**

```shell
docker network create registry-net || true
sudo mkdir -p /opt/registry/{data,auth,certs}
```

3. **启用 Registry 认证（Basic Auth）**

```shell
sudo docker pull httpd:2.4
sudo docker run --rm httpd:2.4 htpasswd -Bbn myuser mypassword | sudo tee /opt/registry/auth/htpasswd
```

4. **启动 Registry（持久化 + 认证）**

```shell
docker run -d \
  --name registry \
  --restart=always \
  --network registry-net \
  -p 5000:5000 \
  -v /opt/registry/data:/var/lib/registry \
  -v /opt/registry/auth:/auth \
  -e REGISTRY_AUTH=htpasswd \
  -e REGISTRY_AUTH_HTPASSWD_REALM="Registry Realm" \
  -e REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd \
  registry:2
```

5. （可选）**准备证书（若需启用 TLS）**

- 方法 A：Let's Encrypt（首次签发，standalone）

  ```shell
  sudo apt-get update && sudo apt-get install -y certbot
  sudo certbot certonly --standalone \
    -d registry.example.com \
    --email admin@example.com \
    --agree-tos --no-eff-email

  # 将证书链接到 Nginx 挂载目录
  sudo ln -sf /etc/letsencrypt/live/registry.example.com/fullchain.pem /opt/registry/certs/fullchain.pem
  sudo ln -sf /etc/letsencrypt/live/registry.example.com/privkey.pem   /opt/registry/certs/privkey.pem
  ```

  续期（示例，凌晨 3 点，续期前停 Nginx 容器，续期后再启动，避免端口冲突）：

  ```shell
  (crontab -l 2>/dev/null; echo '0 3 * * * certbot renew --pre-hook "docker stop registry-nginx || true" --post-hook "docker start registry-nginx || true"') | crontab -
  ```

- 方法 B：自签名证书（仅内网/测试）

  ```shell
  sudo openssl req -x509 -nodes -newkey rsa:4096 -days 365 \
    -keyout /opt/registry/certs/privkey.pem \
    -out    /opt/registry/certs/fullchain.pem \
    -subj "/CN=registry.example.com"
  ```

  客户端需信任该证书：将 `fullchain.pem` 拷贝到每台客户端的 `/etc/docker/certs.d/registry.example.com/ca.crt` 后重启 Docker。

6. （可选）**配置 Nginx 反向代理（容器方式）**

将 Nginx 与 Registry 置于同一网络，仅暴露 80/443 到公网：

```shell
docker run -d \
  --name registry-nginx \
  --restart=always \
  --network registry-net \
  -p 80:80 -p 443:443 \
  -v /opt/registry/certs:/etc/nginx/certs:ro \
  -v /opt/registry/nginx.conf:/etc/nginx/nginx.conf:ro \
  nginx:latest
```

`/opt/registry/nginx.conf` 示例（TLS 终端 + 大文件推送优化）：

```nginx
events { worker_connections 1024; }

http {
  server {
    listen 80;
    server_name registry.example.com;
    return 301 https://$host$request_uri;
  }

  server {
    listen 443 ssl http2;
    server_name registry.example.com;

    ssl_certificate     /etc/nginx/certs/fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/privkey.pem;

    client_max_body_size 0;
    chunked_transfer_encoding on;

    location / {
      proxy_pass                          http://registry:5000;
      proxy_set_header  Host              $http_host;
      proxy_set_header  X-Real-IP         $remote_addr;
      proxy_set_header  X-Forwarded-For   $proxy_add_x_forwarded_for;
      proxy_set_header  X-Forwarded-Proto $scheme;
      proxy_http_version 1.1;
      proxy_request_buffering off;   # 关闭请求缓冲以支持大镜像推送
      proxy_read_timeout 900;
      proxy_set_header  Connection        "";
    }
  }
}
```

已有 Nginx（宿主机）示例（将证书路径改为你自己的；后端直连映射到宿主 5000 端口）：

```nginx
server {
  listen 80;
  server_name registry.example.com;
  return 301 https://$host$request_uri;
}

server {
  listen 443 ssl http2;
  server_name registry.example.com;

  ssl_certificate     /etc/letsencrypt/live/registry.example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/registry.example.com/privkey.pem;

  client_max_body_size 0;
  chunked_transfer_encoding on;

  location / {
    proxy_pass                          http://127.0.0.1:5000;
    proxy_set_header  Host              $http_host;
    proxy_set_header  X-Real-IP         $remote_addr;
    proxy_set_header  X-Forwarded-For   $proxy_add_x_forwarded_for;
    proxy_set_header  X-Forwarded-Proto $scheme;
    proxy_http_version 1.1;
    proxy_request_buffering off;
    proxy_read_timeout 900;
    proxy_set_header  Connection        "";
  }
}
```

其他反向代理要点（Traefik/Caddy/HAProxy/云负载均衡等）：
- 保留 `Host` 头与 `X-Forwarded-Proto`，使用 HTTP/1.1。
- 关闭请求缓冲或启用流式转发；放宽超时；取消上传大小限制。

提示：如果选择“无 TLS（仅内网/测试）”，可跳过证书与反向代理相关步骤，改用 HTTP 直连 `:5000` 并在客户端配置 `insecure-registries`（不建议对公网开放）。

7. （可选）**配置 Portainer 作为可视化 UI**

```shell
docker volume create portainer_data
docker run -d \
  -p 9000:9000 \
  --name portainer \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v portainer_data:/data \
  --network registry-net \
  portainer/portainer-ce
```

登录 Portainer 后，可在 Registries 中添加凭据，使用 `registry.example.com` 作为地址进行管理。

8. **配置域名与防火墙**

- 将 `registry.example.com` 解析到服务器公网 IP。
- 仅对公网开放 80/443（让 80 跳转到 443）；Registry 5000 端口仅用于容器间通信，不需对公网暴露。

9. **客户端配置**

- 有 TLS（推荐）：无需额外配置，直接登录 `registry.example.com`
  ```shell
  docker login registry.example.com
  ```
- 无 TLS（仅内网/测试）：在客户端 `/etc/docker/daemon.json` 添加 `insecure-registries` 后重启 Docker：
  ```json
  { "insecure-registries": ["registry.example.com:5000"] }
  ```
  ```shell
  sudo systemctl restart docker
  ```

10. **使用 Registry**

注意 使用前需要登录，推送镜像、拉取镜像等操作都需要先登录，一般只需要操作一次即可会默认记住登录状态:

```shell
docker login -u myuser -p mypassword registry.example.com
```

构建一个镜像并推送到本地仓库:

```shell
docker build -t registry.example.com/my-image:tag .
docker push registry.example.com/my-image:tag
```

从本地仓库拉取并运行镜像:

```shell
docker pull registry.example.com/my-image:tag
docker run registry.example.com/my-image:tag
```

11. **维护与清理（可选）**

- 启用删除（删除 tag 后垃圾回收才会释放空间）：在 Registry 环境变量中增加 `REGISTRY_STORAGE_DELETE_ENABLED=true`，重启后生效。
- 垃圾回收（会短暂停机，建议维护窗口执行）：
  ```shell
  docker exec -it registry registry garbage-collect --delete-untagged /etc/docker/registry/config.yml
  ```
  或映射配置文件后按官方指引执行。

参考：
- Registry 官方镜像说明： https://hub.docker.com/_/registry
- 官方文档（部署、存储、GC 等）： https://docs.docker.com/registry/

# YJing Web — 部署指南

## 服务器信息

| 项目 | 值 |
|------|-----|
| 云服务商 | 阿里云 ECS |
| 地域 | 华北2（北京）`cn-beijing` |
| 实例 ID | `i-2zed4kkfifwtnjc28d6e` |
| 公网 IP | `39.107.127.56` |
| 操作系统 | Alibaba Cloud Linux 3.2104 LTS 64位 |
| SSH 用户 | `root` |
| SSH 密钥 | `~/.ssh/id_rsa`（已授权） |

## 生产环境

| 项目 | 值 |
|------|-----|
| 域名 | `https://yjing.org` |
| Web 根目录 | `/var/www/yjing-web/dist/` |
| Nginx 配置 | `/etc/nginx/conf.d/yjing.conf` |
| SSL 证书 | Let's Encrypt，Certbot 自动续期 |

## 常用命令

### SSH 登录服务器
```bash
ssh root@39.107.127.56
```

### 构建并部署（本地执行）
```bash
npm run build && rsync -az --delete dist/ root@39.107.127.56:/var/www/yjing-web/dist/
```

### 查看 Nginx 状态
```bash
ssh root@39.107.127.56 "systemctl status nginx"
```

### 重载 Nginx 配置
```bash
ssh root@39.107.127.56 "nginx -t && systemctl reload nginx"
```

### 查看 Nginx 错误日志
```bash
ssh root@39.107.127.56 "tail -50 /var/log/nginx/error.log"
```

## 阿里云 CLI

已配置 profile `default`，region `cn-beijing`。

```bash
# 查看 ECS 实例状态
aliyun ecs DescribeInstances --RegionId cn-beijing

# 通过云助手在服务器上执行命令（无需 SSH，适合紧急操作）
aliyun ecs RunCommand \
  --RegionId cn-beijing \
  --InstanceId.1 i-2zed4kkfifwtnjc28d6e \
  --Type RunShellScript \
  --CommandContent "your command here" \
  --Timeout 30
```

## 同服务器上的其他站点

| 域名 | 配置文件 | Web 根目录 |
|------|---------|-----------|
| `novapadgo.com` | `/etc/nginx/conf.d/novapadgo.conf` | `/var/www/novapadgo-web/` |

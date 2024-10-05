---
title: Docker 部署
sidebar_position: 1
---

:::info

此 Docker 部署方式参考了 Akira 和 lxk

:::

推荐使用 `docker-compose` 所以这里只介绍 `docker-compose` 使用方式

## 安装

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

> **安装不上自行寻找反代链接进行加速**

:::info

群晖 Nas Docker 自带安装了`docker-compose`

:::

**Ubuntu**

```bash
sudo apt-get update && sudo apt-get install -y python3-pip curl vim git moreutils
pip3 install --upgrade pip
pip install docker-compose
```

安装完成后，通过 `docker-compose version` 查看 `docker-compose` 版本，确认是否安装成功。

![images](https://pic.rmb.bdstatic.com/bjh/241005/6ca4c3243e74a8d449d3d9ec38c6a4eb2169.png)

## 配置

随意（可以在 `home`，可以在 `opt`）创建一个目录名为 `AutoTaskScript` 文件夹，后续迁移重装的时候只需要备份整个 `AutoTaskScript` 目录即可.

在 `AutoTaskScript` 文件夹下新建几个必须的文件

```bash
mkdir logs \
&& wget -O my_crontab_list.sh https://raw.githubusercontent.com/sudojia/AutoTaskScript/script/docker/crontab_list.sh \
&& wget -O docker-compose.yml https://raw.githubusercontent.com/sudojia/AutoTaskScript/refs/heads/script/docker/docker-compose.yml
```

>**还是一样，wget 失败自行寻找反代链接进行加速，或者下载到本地再上传到服务器**

目录结构参考如下：

```markdown
AutoTaskScript
├── logs # 存放日志文件，记录脚本运行过程中的信息，便于问题排查和监控
│   ├── XXXX.log      
│   └── XXXX.log
├── my_crontab_list.sh # 定时任务脚本
└── docker-compose.yml # Docker 容器编排配置文件，用于定义和运行多容器 Docker 应用程序
```

**docker-compose.yml 说明**：

目前与 `lxk` 佬不同在于，使用的是自定义任务并且**覆盖默认任务**（因为我懒，真不想一个一个加）

想跑哪个脚本自行在 `my_crontab_list.sh` 加进去就好了

**my_crontab_list.sh 参考如下**：

```sh
# 每隔 3 天 23:50 清理一次日志
50 23 */3 * * rm -rf /AutoTaskScript/src/logs/*.log

# 以下只是示例，自行删除添加
##############小程序##############
# 霸王茶姬
22 11 * * * node /AutoTaskScript/src/wx_mini/sudojia_bwtea.js >> /AutoTaskScript/src/logs/sudojia_bwtea.log 2>&1

##############客户端##############
# 多娇江山
14 7 * * * node /AutoTaskScript/src/client/sudojia_jiangshan.js >> /AutoTaskScript/src/logs/sudojia_jiangshan.log 2>&1

##############网页端##############
# v2ex
0 9 * * * node /AutoTaskScript/src/web/sudojia_v2ex.js >> /AutoTaskScript/src/logs/sudojia_v2ex.log 2>&1

##############公众号##############
# 水费易
3 9 * * * node /AutoTaskScript/src/public/sudojia_shuifei.js >> /AutoTaskScript/src/logs/sudojia_shuifei.log 2>&1
```

所有文件（`docker-compose.yml`、`my_crontab_list.sh`）都配置好之后执行如下命令

```sh
docker-compose up -d
```

后续只要修改 `docker-compose.yml` 后都需要使用此命令使其更改生效

**其它命令**：

- `docker-compose logs` 打印日志
- `docker-compose pull` 更新镜像
- `docker-compose stop` 停止容器
- `docker-compose restart` 重启容器
- `docker-compose down` 停止并删除容器
- `docker exec -it [CONTAINER ID] sh` 进入容器内部
- `docker exec -it [CONTAINER ID] sh /AutoTaskScript/docker/docker_entrypoint.sh` 手动更新脚本仓库
- `docker exec -it [CONTAINER ID] crontab -l` 查看配置的定时任务

只要有脚本运行，就可以在 `logs` 里查看脚本运行过程中的信息

![images](https://pic.rmb.bdstatic.com/bjh/241005/5438d5a47ddd6d1b35f8827fadd9480c2186.png)

你也可以进入容器内部手动执行脚本看下是否正常：

```sh
docker exec -it [CONTAINER ID] sh  # 进入容器内部, CONTAINER ID: 容器 id，docker ps 查看
```

```sh
node /AutoTaskScript/src/wx_mini/sudojia_bwtea.js | tee -a /AutoTaskScript/src/logs/sudojia_bwtea.log
```

![images](https://pic.rmb.bdstatic.com/bjh/241005/d5a1a813353ee0f259e38315d1966b821130.png)

还有不懂的 [#进群交流](https://t.me/v_script)

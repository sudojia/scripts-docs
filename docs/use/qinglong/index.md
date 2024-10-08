---
title: 青龙面板
sidebar_position: 1
---

查看[青龙面板官方部署教程](https://github.com/whyour/qinglong?tab=readme-ov-file#%E9%83%A8%E7%BD%B2)

安装完成后，访问面板地址即可。

**注意**：青龙 Version：`≥2.17.x`

## 青龙配置

1. 在依赖管理处创建依赖，依赖类型选择 `NodeJS` 并复制如下依赖，自动拆分选择 "是"

   ```shell
   axios
   cheerio
   download
   http-server
   moment
   tunnel
   got
   ws
   ```
   
   ![image](https://pic.rmb.bdstatic.com/bjh/240723/4139e8f0db8ec49c95d8aa56f0cdc6e78406.png)

2. 在订阅管理创建订阅并在名称处粘贴拉库命令即可

   ```shell
   ql repo https://github.com/sudojia/AutoTaskScript.git "sudojia_" "" "utils"
   ```

   `cron` 和名称随意

   :::warning

   如果是国内服务器拉库失败，可尝试以下反代链接拉库：

   `ql repo https://gh-proxy.com/https://github.com/sudojia/AutoTaskScript.git "sudojia_" "" "utils"`

   `ql repo https://ghp.ci/https://github.com/sudojia/AutoTaskScript.git "sudojia_" "" "utils"`

   `ql repo https://git.886.be/https://github.com/sudojia/AutoTaskScript.git "sudojia_" "" "utils"`

   若以上反代链接失效，自行在谷歌搜关键词【GitHub文件加速】

   :::

   ![image](https://pic.rmb.bdstatic.com/bjh/240723/13f815269652d6f3f896280ae651b1211516.png)

   命令解释：

   ```shell
   ql repo https://github.com/sudojia/AutoTaskScript.git "白名单" "黑名单" "依赖文件" "分支" "文件后缀"
   ```

   **白名单**：指要拉取的脚本（多个用 `|` 隔开）

   **黑名单**：指要忽略的脚本（多个用 `|` 隔开）

   **依赖文件**：`utils` 项目运行所必需的框架依赖

   **分支**：拉取仓库的指定分支

   **文件后缀**：要拉取的文件后缀，如 `js|py|sh|ts` 等

   :::info

   按照如上命令说明举一反三即可

   :::

3. 在环境变量创建对应的变量即可，脚本会自动定时运行，你也可以到定时任务里手动运行一次！

   ![image](https://pic.rmb.bdstatic.com/bjh/240723/93139f27658991b5b6b57cfa65f6e6552070.png)

   ![image](https://pic.rmb.bdstatic.com/bjh/240723/ed29d89af957f7818be7fd083f4ea10a1117.png)

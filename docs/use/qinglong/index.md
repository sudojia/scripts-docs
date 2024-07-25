---
title: 青龙面板
sidebar_position: 1
---

查看[青龙面板官方部署教程](https://github.com/whyour/qinglong?tab=readme-ov-file#%E9%83%A8%E7%BD%B2)

安装完成后，访问面板地址即可。

## 青龙配置

1. 在依赖管理处创建依赖，依赖类型选择 `NodeJS` 并复制如下依赖，自动拆分选择 "是"

   ```shell
   axios
   cheerio
   download
   http-server
   moment
   tough-cookie
   tunnel
   ws
   got
   ```

   ![image](https://pic.rmb.bdstatic.com/bjh/240723/4139e8f0db8ec49c95d8aa56f0cdc6e78406.png)

2. 在订阅管理创建订阅并在名称处粘贴拉库命令即可

   ```shell
   ql repo https://github.com/sudojia/scripts.git "sudojia_" "" "utils" "script" "js"
   ```

   `cron` 和名称随意

   ![image](https://pic.rmb.bdstatic.com/bjh/240723/13f815269652d6f3f896280ae651b1211516.png)

   命令解释：

   ```shell
   ql repo https://github.com/sudojia/scripts.git "白名单" "黑名单" "依赖文件" "分支" "文件后缀"
   ```

   **白名单**：指要拉取的脚本，例如：amx|kuro（多个用 `|` 隔开）

   **黑名单**：指要忽略的脚本，例如：colorful|tebu（多个用 `|` 隔开）

   **依赖文件**：固定 `utils`

   **分支**：固定 `script`

   **文件后缀**：固定 `js`

   :::info

   按照如上命令说明举一反三即可

   :::

3. 在环境变量创建对应的变量即可，脚本会自动定时运行，你也可以到定时任务里手动运行一次！

   ![image](https://pic.rmb.bdstatic.com/bjh/240723/93139f27658991b5b6b57cfa65f6e6552070.png)

   ![image](https://pic.rmb.bdstatic.com/bjh/240723/ed29d89af957f7818be7fd083f4ea10a1117.png)

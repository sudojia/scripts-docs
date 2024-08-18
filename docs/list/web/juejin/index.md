---
title: 稀土掘金
sidebar_position: 2
---

脚本名：`sudojia_juejin.js`

[【前往官网】](https://juejin.cn/)

:::warning

在 8/6 号的时候，官方已将我的 3 个号封禁，故掘金已不再维护更新！

:::

:::info

新版掘金已适配，url 多了个验证，所以要多抓一个

手动签到完之后，找到 `https://api.juejin.cn/growth_api/v1/check_in` 然后获取 url 的uuid=123456&spider=0&msToken=xxxxxx&a_bogus=xxxxxx



另外，请勿再提掘金相关的 Issues

:::

## 奖励说明

1. 每日签到获得矿石、矿石可用于兑换实物
2. 每日使用免费抽奖次数抽奖，幸运值满 6000 必出实物
3. 升级任务：成长等级的社区活跃任务！

![image](https://pic.rmb.bdstatic.com/bjh/240723/f83c8eb0a530512a000b965974488a858209.png "签到")

![image](https://pic.rmb.bdstatic.com/bjh/240723/cfe065a533cf5220007187f3892506eb2891.png "十连抽")

![image](https://pic.rmb.bdstatic.com/bjh/240723/92087943a132d7e24b11ed691e7332db3505.png "兑换")

![image](https://pic.rmb.bdstatic.com/bjh/240723/b7e374832555d4be5ec9f70c8d9b335d8026.png "任务")

## 变量说明

|       Env       |                           Value                           |         Remark          |
| :-------------: | :-------------------------------------------------------: | :---------------------: |
| `JUEJIN_COOKIE` | Cookie#uuid=123456&spider=0&msToken=xxxxxx&a_bogus=xxxxxx | 多账号用 `&` 或换行隔开 |

## 获取说明

打开[稀土掘金](https://juejin.cn/) 按 F12 -> 选择 Application -> 点击 Cookies -> 只要 `sessionid` 的值

![image](https://img.gugu.ovh/i/2024/06/10/173932.webp)


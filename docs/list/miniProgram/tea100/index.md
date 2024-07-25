---
title: 茶百道
sidebar_position: 16
---

脚本名：`sudojia_tea100.js`

微信小程序：茶百道

## 奖励说明

1. 每日签到获得一些券
2. 主要 10：30 抢免单券（限时活动）

## 变量说明

|       Env       |   Value    |                 Remark                 |
| :-------------: | :--------: | :------------------------------------: |
| `TEA_100_SSION` | `xxxxxxxx` | 茶百道 Cookie，多账号用 `&` 或换行隔开 |
|  `TEA_ANSWER`   |     A      |       答题变量，默认B，自行更改        |

## 获取说明

抓包 Host: `https://chabaidao-gateway2.shuxinyc.com` 获取请求头 `CSESSION` 的值
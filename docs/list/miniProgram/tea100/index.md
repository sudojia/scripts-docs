---
title: 茶百道
sidebar_position: 16
---

脚本名：`sudojia_tea100.js`

微信小程序：茶百道

暂时移除了答题接口！

## 奖励说明

1. 每日签到只有券，而且还有时效性，并没什么水，可以不跑
2. ~~主要 10：30 抢免单券（限时活动）~~

## 变量说明

|       Env        |   Value    |                 Remark                 |
| :--------------: | :--------: | :------------------------------------: |
| `TEA_100_SSION`  | `xxxxxxxx` | 茶百道 Cookie，多账号用 `&` 或换行隔开 |
| ~~`TEA_ANSWER`~~ |   ~~A~~    |     ~~答题变量，默认B，自行更改~~      |

## 获取说明

抓包 Host: `https://chabaidao-gateway2.shuxinyc.com` 或者 `https://md-h5-gateway.shuxinyc.com` 获取请求头 `CSESSION` 的值
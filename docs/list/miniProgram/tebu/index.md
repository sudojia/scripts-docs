---
title: 特步会员中心
sidebar_position: 14
---

脚本名：`sudojia_tebu.js`

微信小程序：特步会员中心

## 奖励说明

1. 每日签到获得积分
2. 积分可兑换一些会员、券等

<img src="https://pic.rmb.bdstatic.com/bjh/240724/863b53d014bad1dfe5a0d3dcacd18b408429.png" alt="image" height="750"/>

## 变量说明

|     Env     |                            Value                             |         Remark          |
| :---------: | :----------------------------------------------------------: | :---------------------: |
| `TEBU_JSON` | `{"ezr-cop-id":"123456","ezr-vuid":"123456","ezr-userid":"xxxxx","ezr-sv":"1","ezr-st":"123456","ezr-ss":"xxxxx"}` | 多账号用 `&` 或换行隔开 |

## 获取说明

抓包 url: `https://wxa-tp.ezrpro.com/myvip/Base/User/WxAppOnLoginNew` 在**响应** Body 里找到 `Fields` 字段，并复制所有值
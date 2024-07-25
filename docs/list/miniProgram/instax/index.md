---
title: 玩拍由我俱乐部
sidebar_position: 7
---

脚本名：`sudojia_instax.js`

微信小程序：富士instax玩拍由我俱乐部

首次登录在`我的 - 绑定手机号` 加入会员

## 奖励说明

1. 每日签到及抽奖
2. 积分可兑换一些奖品

<img src="https://pic.rmb.bdstatic.com/bjh/240723/c137f9071f3ea196ed8b5f080c05974c324.png" alt="image" height="750"/>

## 变量说明

|      Env       |   Value    |         Remark          |
| :------------: | :--------: | :---------------------: |
| `INSTAX_TOKEN` | `xxxxxxxx` | 多账号用 `&` 或换行隔开 |

## 获取说明

抓包 Host：`instax.app.xcxd.net.cn` 获取请求头 `Authorization` 的值，并且删掉 `Bearer`
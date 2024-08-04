---
title: 七彩虹商城
sidebar_position: 5
---

脚本名：`sudojia_colorful_mall.js`

微信小程序：七彩虹商城

## 奖励说明

1. 每日签到获得积分
2. 积分可兑换鼠标垫、公仔等实物

<img src="https://pic.rmb.bdstatic.com/bjh/240804/5ca5f1858bb266434c72e1841d9d44066799.png" alt="image" height="750"/>

## 变量说明

|       Env        |              Value              |         Remark          |
| :--------------: | :-----------------------------: | :---------------------: |
| `COLORFUL_TOKEN` | `Authorization#X-Authorization` | 多账号用 `&` 或换行隔开 |

## 获取说明

抓包 Host：`https://shopapi.skycolorful.com`  获取请求头 `Authorization` 和 `X-Authorization` 的值，同时删掉 `Bearer`

`Authorization` 和 `X-Authorization` 用 # 分割

`Authorization` 必须在第一位，有顺序要求！
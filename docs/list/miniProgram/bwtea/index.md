---
title: 霸王茶姬
sidebar_position: 5
---

脚本名：`sudojia_bwtea.js`

微信小程序：霸王茶姬

## 奖励说明

1. 每日签到获得积分
2. 积分可兑换一些券

<img src="https://pic.rmb.bdstatic.com/bjh/240723/08227fa97b307ef33897b4aaafbfb2f5969.png" alt="image" height="750"/>

## 变量说明

|      Env       |   Value    |         Remark          |
| :------------: | :--------: | :---------------------: |
| `BW_TEA_TOKEN` | `token#id` | 多账号用 `&` 或换行隔开 |

## 获取说明

抓包 URL：`https://webapi2.qmai.cn/web/seller/oauth/flash-sale-login` 在响应体 **Json** 找到 **token** 和 *user* **下**的 **id**, 用 # 分割

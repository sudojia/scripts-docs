---
title: OPPO商城APP
sidebar_position: 1
---

脚本名：`sudojia_opposhop.js`

## 奖励说明

1. 每日签到获得积分
2. 积分兑换实物

## 变量说明

|        Env        |    Value     |          说明          |
| :---------------: | :----------: | :---------------------:|
| `OPPOSHOP_COOKIE` |   `Cookie`   | 多账号用 `&` 或换行隔开 |
| `OPPO_USER_AGENT` | `User-Agent` | 多账号用 `&` 或换行隔开 |

## 获取说明

- **Mobile 端**：

  抓包 URL：`https://hd.opposhop.cn/api/cn/oapi/users/web/member/check?unpaid=0` 获取 `Cookie` 和 `User-Agent`

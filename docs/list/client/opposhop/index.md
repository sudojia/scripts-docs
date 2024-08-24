---
title: OPPO商城
sidebar_position: 2
---

脚本名：`sudojia_opposhop.js`

## 奖励说明

1. 每日签到获得积分
2. 积分兑换实物

## 变量说明

|        Env        |                    Value                    |          说明           |
| :---------------: | :-----------------------------------------: | :---------------------: |
| `OPPOSHOP_COOKIE` |                  `Cookie`                   | 多账号用 `&` 或换行隔开 |
| `OPPO_USER_AGENT` | `Mozilla/5.0 (Linux; Android 10; xxxxxxxxx` |         单一性          |

## 获取说明

打开抓包、进入我的 - 签到任务，才会出现此 URL

抓包 URL：`https://hd.opposhop.cn/api/cn/oapi/users/web/member/check?unpaid=0` 获取 `Cookie` 和 `User-Agent`

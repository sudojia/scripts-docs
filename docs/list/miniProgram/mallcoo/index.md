---
title: 欣都龙城
sidebar_position: 10
---

脚本名：`sudojia_mallcoo.js`

微信小程序：欣都龙城VCpark

## 奖励说明

1. 每日签到获得积分
2. 积分可以兑换实物、兑换停车票等

<img src="https://pic.rmb.bdstatic.com/bjh/240724/eca37599e5abc8daeb4c874427170b4b5997.png" alt="image" height="750"/>

## 变量说明

|       Env       |   Value    |         Remark          |
| :-------------: | :--------: | :---------------------: |
| `MALLCOO_TOKEN` | `xxxxxxxx` | 多账号用 `&` 或换行隔开 |

## 获取说明

抓包 Host: `https://m.mallcoo.cn` 随便找一个 url，在请求 Body 中获取 Token 的值

```json
{
    "MallId": 10144,
    "Header": {
        "Token": "xxxxxxxxxxx", <---
        "systemInfo": {
            "model": "microsoft",
            "...":"..."
        }
    }
}
```
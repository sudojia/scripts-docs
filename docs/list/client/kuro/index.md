---
title: 库街区
sidebar_position: 1
---

脚本名：`sudojia_kuro.js`

[【前往官网】](https://www.kurobbs.com/)

## 奖励说明

1. 每日签到获得库洛币
2. 鸣潮每日签到获得签到奖励
3. 战双每日签到获得签到奖励

## 变量说明

|     Env      |   Value    |          说明           |
| :----------: | :--------: | :---------------------: |
| `KURO_TOKEN` | `xxxxxxxx` | 多账号用 `&` 或换行隔开 |

## 获取说明

- **PC 端**：

  浏览器打开[库街区](https://www.kurobbs.com/mc/home/9)，登录之后 `F12 -> Application -> 左侧 Local storage -> 找到 auth_token 复制其 Value`

  ![image](https://img.gugu.ovh/i/2024/06/10/173834.webp)

- **Mobile 端**：

  打开 APP 登录，抓包 Host：`https://api.kurobbs.com`， 找到请求头 `token`
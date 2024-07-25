---
title: 皮皮世界
sidebar_position: 2
---

脚本名：`sudojia_ppworld.js`

[【前往官网】](https://pipix.com/)

## 奖励说明

通过喂食宠物升级，升级可解锁对应的等级奖励

一天喂食最大限制三次，每次喂食掉落经验值和喂食奖品

领狗粮接口官方未做限制，可无限领取，脚本已限制领取三次

<img src="https://img.gugu.ovh/i/2024/06/15/201849.webp" alt="image" height="550"/>

## 变量说明

|     Env      |   Value    |          说明           |
| :----------: | :--------: | :---------------------: |
| `PPX_COOKIE` | `xxxxxxxx` | 多账号用 `&` 或换行隔开 |

## 获取说明

- **PC 端**：

  打开[【皮皮虾】](https://pipix.com/)官网，右上角登录之后，F12 -> 选择 Application，点击 Cookies，只要 `sessionid=` 后面的值

  ![image](https://img.gugu.ovh/i/2024/06/15/202827.webp)

- **Mobile 端**：

  打开 APP 登录，抓包 Host：`https://api.pipix.com`，随便哪个 URL，找到 Cookie，复制 `sessionid` 的值
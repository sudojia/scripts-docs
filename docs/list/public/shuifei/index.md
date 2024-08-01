---
title: 水费易
sidebar_position: 1
---

脚本名：`sudojia_shuifei.js`

微信扫码打开

![image](https://pic.rmb.bdstatic.com/bjh/240801/128be2b8c3c50a04dd01f1216a5c8c299606.png)

## 奖励说明

1. 每日签到获得积分
2. 积分可兑换实物

<img src="https://pic.rmb.bdstatic.com/bjh/240801/db09aed130007c920ff9b3662465321e8670.png" alt="image" height="600"/>

## 变量说明

|        Env        |      Value      |         Remark          |
| :---------------: | :-------------: | :---------------------: |
| `SHUI_FEI_COOKIE` | Cookie#memberId | 多账号用 `&` 或换行隔开 |

## 获取说明

抓包 Host：`https://m.ipaiyun.cn`  获取请求头 Cookie 的值和请求 Body 参数 `memberId`，用 # 分割

例如：

```shell
ASP.NET_SessionId=xxxxxx;xxxxxxxxxx#123456
```
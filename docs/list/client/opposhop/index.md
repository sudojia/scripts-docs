---
title: OPPO商城
sidebar_position: 2
---

脚本名：`sudojia_opposhop.js`

## 奖励说明

1. 每日签到获得积分
2. 积分兑换实物

## 变量说明

|         Env         |                    Value                    |          说明           |
| :-----------------: | :-----------------------------------------: | :---------------------: |
|  `OPPOSHOP_COOKIE`  |                  `Cookie`                   | 多账号用 `&` 或换行隔开 |
|  `OPPO_USER_AGENT`  | `Mozilla/5.0 (Linux; Android 10; xxxxxxxxx` |         单一性          |
| `OPPO_ACTIVITY_IDS` |         `签到活动ID#任务列表活动ID`         |     每个月的活动 ID     |

## 获取说明

打开抓包、进入我的 - 签到任务，才会出现此 URL

抓包 URL：`https://hd.opposhop.cn/api/cn/oapi/users/web/member/check?unpaid=0` 获取 `Cookie` 和 `User-Agent`

**OPPO Activity ID 获取**：

1. 打开[签到详细页](https://hd.opposhop.cn/bp/b371ce270f7509f0?nightModelEnable=true&us=wode&um=qiandaobanner)后按 `CTRL + U` 查看源码

2. 键盘键入 `CTRL + F` 搜索 `activityId` 关键词，会有很多个，我们只要在旁边 activityName 看到**每日签到-商城客户端（X月）**这个就是签到活动 ID

   ![images](https://pic.rmb.bdstatic.com/bjh/241001/f7b1a9eb8dc7656884e283897d1c591f9872.png)

3. 继续 Next，然后 `activityName` 是**【商城签到】任务中心（10月）**这个就是任务 ID 了

   ![images](https://pic.rmb.bdstatic.com/bjh/241001/24ed3b2524e655e5f9c1521a4712e8e81985.png)

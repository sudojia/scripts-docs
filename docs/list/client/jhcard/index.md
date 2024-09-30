---
title: 江淮卡友
sidebar_position: 1
---

脚本名：`sudojia_jhcard.js`

各大市场搜：江淮卡友APP

## 奖励说明

每日签到及评论任务

<img src="https://pic.rmb.bdstatic.com/bjh/240930/6be5c66c72e5fd21eb2206fabc2f2c0a9796.png" alt="image" height="750"/>

## 变量说明

|      Env      |    Value     |          说明           |
| :-----------: | :----------: | :---------------------: |
| `JHCARD_BODY` | ` Json Body` | 多账号用 `&` 或换行隔开 |

## 获取说明

抓包 URL：`http://jacwxmp.starnetah.com:18280/v2driver/v2/login`

:::info

获取该 URL 的请求体，不要美化和自动换行，选择原始数据（Raw）

:::

示例：

```json
{"phone":"18888888888","password":"539281948b12751a942459aacb4a9ec1","sendMessageKey":"1aorcomF5n2EVd7Tc6w","deviceType":"1","appType":"0","sign":"XXXXXX"}
```

默认不开启评论任务，如需开启，请在变量后面加个 `#true`

示例：

```json
{"phone":"18888888888","中间省略","sign":"XXXXXX"}#true
```

## 特别说明

江淮容易风控

如账号被冻结，损失的任何一切，都与作者无关❗️❗️❗️

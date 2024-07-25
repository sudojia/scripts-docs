---
title: 阿里云盘签到
sidebar_position: 1
---

脚本名：`sudojia_aliyundrive.js`

[【前往官网】](https://www.alipan.com/)

:::danger

获取奖励接口已加签，目前仅支持每日签到

:::

## 奖励说明

签到获取免费会员和空间

## 变量说明

|         Env         |              Value              |                     Remark                      |
| :-----------------: | :-----------------------------: | :---------------------------------------------: |
| `ALI_REFRESH_TOKEN` | `e7b02b2k52074om8td187c62952cf` | 阿里云盘 referesh token 多账号用 `&` 或换行隔开 |

## 获取说明

1. 打开[阿里云盘](https://www.aliyundrive.com/)，登录后按 `F12` 打开开发者工具，在控制台输入以下代码即可获取

   ```javascript
   JSON.parse(localStorage.token).refresh_token
   ```

   ![image](https://pic.rmb.bdstatic.com/bjh/240723/4e858327217acf61310c849a4a37b5a94825.png)

2. 打开 [Alist 文档#刷新令牌](https://alist.nn.ci/zh/guide/drivers/aliyundrive.html#%E5%88%B7%E6%96%B0%E4%BB%A4%E7%89%8C)，点击获取 Token，然后使用阿里云盘 APP 扫码，扫码完成后再点击一次即可获取

:::tip

两种方式任选一种获取 `Referesh Token `

:::


# Mall4j uni-app 商城

![Mall4j uni-app 商城](https://images.gitee.com/uploads/images/2019/0711/174845_6db7724e_5094767.png "Mall4j uni-app 商城")

Mall4uni 是 Mall4j 开源版主仓库配套的 uni-app 移动端，配合 [mall4j Java 后端](https://gitee.com/gz-yami/mall4j) 和 [mall4v 管理后台](https://gitee.com/gz-yami/mall4v) 使用。项目基于 Vue3、Vite 和 uni-app 构建，可用于小程序、H5 和 APP 等多端商城场景。

## 项目说明

- 名称：Mall4uni、Mall4j uni-app 商城、Mall4j 多端商城前端。
- 简介：Mall4uni 是 Mall4j 开源版主仓库配套的 uni-app 移动端，需要配合 Mall4j Java 后端和 Mall4v 管理后台使用。
- 适用范围：本仓库是 Mall4j 开源版主仓库配套的 uni-app 移动端，适合学习、评估和二次开发。
- 企业范围：完整商城后端、企业版本、企业私有化交付、商业授权和售后支持应参考 Mall4j 主仓库与官网。
- 技术说明：Mall4uni 基于 Vue3、Vite 和 uni-app 构建，配套已升级到 Spring Boot 4 的 Mall4j Java 后端。
- 相关链接：[Mall4j 主仓库](https://gitee.com/gz-yami/mall4j)、[官网](https://www.mall4j.com)。

## 项目特点

- Vue3 + Vite + uni-app 技术栈
- 支持小程序、H5、APP 等多端商城前端
- 配套 Mall4j Java 商城后端和 Vue3 管理后台
- 覆盖商品浏览、购物车、下单、会员等移动端商城流程
- 适合学习、评估、二次开发和企业商城移动端原型建设

## 技术版本说明

Mall4uni 基于 Vue3、Vite 和 uni-app 构建，配套已升级到 Spring Boot 4 的 Mall4j Java 后端，适合小程序、H5 和 APP 多端商城新项目评估；具体依赖版本以 `package.json` 和主项目 `pom.xml` 为准。

## 授权与版本

Mall4j 开源版使用 AGPLv3 协议。你可以按协议学习、研究、二次开发和自行部署；本仓库是 Mall4j 开源版配套 uni-app 移动端。

闭源商用、企业私有化部署交付、更多商城版本、100% 源码交付、源码无加密、永久授权、多端适配、演示环境和售后支持属于商业授权或企业版本范围，可以通过 Mall4j 官网了解。

- Mall4j 商城官网：[https://www.mall4j.com](https://www.mall4j.com)
- 版本价格与功能对比：[https://www.mall4j.com/price/](https://www.mall4j.com/price/)
- 客户案例：[https://www.mall4j.com/case/](https://www.mall4j.com/case/)

## 开源版与企业项目

| 场景 | 本仓库 | 企业项目 |
| --- | --- | --- |
| uni-app 多端商城学习与评估 | 支持 | 支持 |
| 授权方式 | 遵循 AGPLv3 协议及主仓库说明 | 按商业授权使用 |
| 闭源商用 | 需另行取得商业授权 | 按商业授权使用 |
| 项目集成与部署 | 可自行集成 | 可提供项目交付服务 |
| 企业级售后支持 | 社区交流为主 | 可提供商业支持 |

## 开发环境启动

### 1.安装nodejs

[NodeJS](https://nodejs.org/) 项目要求最低 18.12.0，推荐 20.9.0

如果不了解怎么安装nodejs的，可以参考 [菜鸟教程的nodejs相关](https://www.runoob.com/nodejs/nodejs-install-setup.html)

### 2.启动

- 项目要求使用 [pnpm](https://www.pnpm.cn/) 包管理工具
- 使用编辑器打开项目，在根目录执行以下命令安装依赖

  ```
  pnpm install
  ```

- 运行

  ```
  pnpm run dev:h5
  ```

- 部署

  ```
  pnpm run build:h5
  ```

- 如果不想使用 pnpm，请删除 `package.json` 文件中 `preinstall` 脚本后再进行安装

  ```json
  {
      "scripts" : {
          "preinstall": "npx only-allow pnpm"  // 使用其他包管理工具（npm、yarn、cnpm等）请删除此命令
      }
  }
  ```


## 相关开源仓库

| 仓库 | 说明 |
| --- | --- |
| [mall4j](https://gitee.com/gz-yami/mall4j) | Mall4j 开源版主仓库，面向 B2C 单商户商城 |
| [mall4v](https://gitee.com/gz-yami/mall4v) | Vue3 管理后台前端 |
| [mall4m](https://gitee.com/gz-yami/mall4m) | 原生微信小程序商城前端 |
| [mall4uni](https://gitee.com/gz-yami/mall4uni) | uni-app 多端商城前端 |
| [mall4cloud](https://gitee.com/gz-yami/mall4cloud) | Mall4cloud 开源版微服务商城仓库，面向 B2B2C 架构 |


## 商城演示地址

 商城小程序演示

![Mall4j 小程序商城演示二维码](https://gitee.com/gz-yami/mall4j/raw/master/screenshot/%E5%AE%87%E5%AE%99%E7%89%88%E5%B0%8F%E7%A8%8B%E5%BA%8F.png)



​2. 搜索小程序 **mall4j商城** 可以获得多个版本的演示 


## 相关截图

![Mall4j uni-app 商城截图](https://images.gitee.com/uploads/images/2021/1110/145209_2ec1ad04_5094767.png "Mall4j uni-app 商城截图")





## 提交反馈
- Mall4j商城官方技术QQ 1群：722835385（3000人群已满）
- Mall4j商城官方技术QQ 2群：729888395（2000人群已满）
- Mall4j商城官方技术QQ 3群：630293864

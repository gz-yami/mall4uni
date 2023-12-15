![输入图片说明](https://images.gitee.com/uploads/images/2019/0711/174845_6db7724e_5094767.png "在这里输入图片标题")


一个基于springboot的开源商城 uniapp端

Mall4j商城系统uniapp版本，做啥都不愁。即使不跨端，uni-app也是更好的小程序开发框架、更好的App跨平台框架、更方便的H5开发框架。不管领导安排什么样的项目，你都可以快速交付，不需要转换开发思维、不需要更改开发习惯。


该项目仅供学习参考、可供个人学习使用、如需商用联系作者进行授权，否则必将追究法律责任



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


## 项目链接

java后台：https://gitee.com/gz-yami/mall4j

vue后台：https://gitee.com/gz-yami/mall4v

原生微信小程序：https://gitee.com/gz-yami/mall4m

uniapp端：https://gitee.com/gz-yami/mall4uni


## 商城演示地址

 商业版商城小程序演示

![输入图片说明](https://gitee.com/gz-yami/mall4j/raw/master/screenshot/%E5%AE%87%E5%AE%99%E7%89%88%E5%B0%8F%E7%A8%8B%E5%BA%8F.png)



​2. 搜索小程序 **mall4j商城** 可以获得多个版本的演示 


## 相关截图

![商城](https://images.gitee.com/uploads/images/2021/1110/145209_2ec1ad04_5094767.png "商城.png")





## 提交反馈
- Mall4j商城官网 https://www.mall4j.com


- Mall4j商城官方技术QQ 1群：722835385（3000人群已满）
- Mall4j商城官方技术QQ 2群：729888395
- 如需购买商城商业版源码，请联系商务微信

  ![输入图片说明](https://19838323.s21i.faiusr.com/4/4/ABUIABAEGAAgksmNlAYojomK2gIwrAI4rAI!160x160.png)



## mall4cloud微服务商城版本已上线
https://gitee.com/gz-yami/mall4cloud

## 更多信息请查看Mall4j商城官网 <https://www.mall4j.com>

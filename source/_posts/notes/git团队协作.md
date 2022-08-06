---
title: GIT 团队协作
tags:
  - git
  - 笔记分享
categories:
  - 前端技术
  - git
cover: 'https://mzbimgs.mzb0.com/img/git.jpg'
abbrlink: 1179471623
date: 2022-04-15 12:30:47
---
git的团队协作是真的不错，通过远程仓库可以实现团队共用一套代码，实现资源的节约。git的团队协作也非常的简单，下面教程是通过github平台演示，其他平台也都差不多。

### 创建远程仓库

登录github账号，创建一个仓库

![e6316cf40be31402cc138244c81c3b2](https://mzbimgs.mzb0.com/img/e6316cf40be31402cc138244c81c3b2.jpg)

填写仓库信息

### ![53c595f739f11acac0a08d68a9c56b6](https://mzbimgs.mzb0.com/img/53c595f739f11acac0a08d68a9c56b6.jpg)

#### 创建远程仓库别名
```
// 创建别名
git remote add 别名 仓库地址
// 查看别名
git remote -v
// 删除别名
git remote rm 别名
```
远程仓库地址

![a671f2d3c2b16602e1cc5eeb1e80b2a](https://mzbimgs.mzb0.com/img/a671f2d3c2b16602e1cc5eeb1e80b2a.jpg)

#### 推送本地分支到远程仓库
```
git push 别名 分支
```

#### 克隆远程仓库到本地
```
git clone 远程地址
```

### 邀请加入团队

#### 选择团队成员

按照图中步骤操作

![3a99dd84026ccbc7b0cf902583dd808](https://mzbimgs.mzb0.com/img/3a99dd84026ccbc7b0cf902583dd808.jpg)

#### 输入成员的名称

![1b6b944060747242590c9e9070f3dd3](https://mzbimgs.mzb0.com/img/1b6b944060747242590c9e9070f3dd3.jpg)

#### 找到成员，点击邀请

复制地址通过其他通讯方式将链接发给团队成员

复制内容如下:
https://github.com/仓库创建者名称/仓库名称/invitations

![8280d04f9ab943de46f7f881ed2c89a](https://mzbimgs.mzb0.com/img/8280d04f9ab943de46f7f881ed2c89a.jpg)

![a2959e655efd581e3eeed87ba26aad7](https://mzbimgs.mzb0.com/img/a2959e655efd581e3eeed87ba26aad7.jpg)

#### 成员进入地址，选择接受邀请

![2a7748f88d994774dca25e0363e284f](https://mzbimgs.mzb0.com/img/2a7748f88d994774dca25e0363e284f.jpg)

5. 成功之后就会在成员的仓库中出现该仓库，成员就可以修改并提交到该仓库

#### 拉取远程仓库

```
git pull 远程仓库地址或别名 仓库分支
```

做完这些内容之后，团队协作就基本上可以了，在每次提交代码之前尽量先拉取一下最新的代码，当然如果有不同的分支的话，可以根据实际情况来使用不同的命令。这里只是团队协作的步骤，更多的git使用方法请看：[GIT 使用教程 | 梦志博 (mzb0.com)](https://blog.mzb0.com/2255381121.html)


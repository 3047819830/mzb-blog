---
title: javaScript的函数劫持
tags:
  - js函数劫持
  - 前端
category:
  - 学习笔记
  - 前端分享
cover: 'https://mzbimgs.mzb0.com/img/js.png'
abbrlink: 35629
date: 2022-06-06 19:13:41
---

### javaScript的函数劫持



#### 基本概念

函数劫持就是在函数运行之前将函数劫持下来，然后添一些自己的功能。他主要的步骤如下：

1. 使用一个新的变量保存原始函数
2. 在新函数里边添加我们自己的功能
3. 在新函数里边调用原始函数(保存在变量里边的函数)



劫持的概念其实很广泛的，我们也能经常看到网络劫持的例子，经常可以看到网站被运营商劫持，浏览器上边就会显示出运营商所要展示的内容，而不是我们自己的内容。



#### 举例分析

```javascript
// 原始函数
var saveLog = function (log) {
  console.log(`我保存了日志：${log}`);
}

// 1-保存原有函数
var originSaveLog = saveLog;

// 2-改写原有函数
saveLog = function () {
  const args = Array.prototype.slice.call(arguments);
  // 3-在改写后的函数中执行原有函数的逻辑
  originSaveLog.apply(null, args);
  console.log('我要劫持你这个函数，用来做自己的事情');
}

saveLog('test Save Log');

```

在一个函数运行之前就把它劫持下来，添加我们想要的功能。当这个函数实际运行的时候，它已经不是原本的函数了，而是被我们添加上去的功能。这也是我们常见的**钩子函数**的原理之一。

#### 函数劫持的作用

除了为函数增加功能以外，还能够利用函数劫持去追踪恶意用户的信息。一般的XSS攻击会先利用`alert()`等能够输出信息的方法进行测试，这时候我们可以先对原生`alert()`进行劫持，向其输入追踪信息的代码，最后才把原函数释放出去。当有不法分子想通过这些简答的攻击我们，我们就可以听通过劫持到该攻击者的基本信息，从而达到保护的作用。

#### 反劫持

新建一个页面，打开你的开发者工具控制台，输入`alert`，你会看到这样的输出：

```javascript
function alert() { [native code] }
```

然后使用本文开头的那段代码，把`alert()`劫持一下，再重新在控制台输入`alert`，你会看到这样的输出：

```javascript
function (t) => {
    if (confirm('How are you?')) warn(t)
}
```

通过上述的例子可以知道，要看一个函数是否被劫持了，只需要直接把它打印出来即可。针对系统原生的函数，`[native code]`即代表它是纯净无污染的。

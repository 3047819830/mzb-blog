---
title: vue3自定义hooks
tags:
  - vue
  - 前端
category:
  - 学习笔记
  - 前端分享
cover: 'https://mzbimgs.mzb0.com/img/zzddcvue3.png'
abbrlink: 787547004
date: 2022-08-25 21:09:44
---

# vue3的自定义hooks

官方对自定义hook的定义：在vue应用的概念中，“组合式函数“（Composables）是一个利用Vue组合式API来封装和复用**有状态逻辑**的函数。

个人理解：自定义hook就是vue2中的Mixin，就是一些可复用的方法，降低耦合的函数，大幅度提升性能的方法。实质上就是一个函数，将setUp中的组合式API进行封装。

在开发当中经常会遇到一些函数需要多次使用，在不同的组件当中不需要多次重写该功能，只需要将该功能抽离出来，再将其封装成一个函数导出，在需要用到的地方引入即可。

### 实例：

封装一个简单加法计算函数：

~~~js
import {ref} from 'vue'
export function add (unm1,num2) {
    const subNum = ref(0)
    onMounted(() => {
        subNum = num1 + num2
    })
    return subNum
}
~~~

在需要使用该函数的地方引入该函数：

~~~javascript
<template>
	<span>{{subNum}}</span>
</template>

import add from './hooks/userAdd'
let subNum = add()
~~~



vue3的自定义hooks在Mixin的基础上优化了很多东西：

1. Mixin难以追溯的方法与属性，hooks可以！
2. 无法向Mixin传递参数来改变逻辑，hooks可以！
3. Mixin同名变量会被覆盖，hooks可以在引入的时候自定义变量名！

**总结：**

把Mixin和自定义Hook进行比较，一个是Option Api的体现，一个是Composition Api的体现。如果能理解**高内聚低耦合**的思想，那么就能理解为什么Vue3是使用Composition Api，并通过各种自定义Hooks使代码更强壮。像写诗一样写代码。
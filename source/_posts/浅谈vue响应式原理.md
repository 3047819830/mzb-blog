---
title: 浅谈vue响应式原理
abbrlink: 1818604655
date: 2022-08-13 14:43:31
tags:
  - vue
  - 前端
category:
  - 学习笔记
  - 前端分享
cover: 'https://mzbimgs.mzb0.com//img/11.jpg'
---

### 什么是响应式数据？

先说一下什么是响应式数据，简单来说就是就是可以监测的数据，在读取和设置的时候可以通过劫持他来做一些其他 的事情，数据响应式和视图的更新其实是没有关系的，响应式数据是一种机制，在机制执行的时候，视图更新只是一种操作表现，想要实现数据的响应式方法也是不是唯一的，vue2和vue3使用的方法都有所不同。

### vue2的响应式原理

vue2实现响应式的原理是通过**Object.defineProperty**，通过劫持对象的属性，遍历data中的所有数据，这种方法对于数组来说不是特别友善，而且在之后添加的数据就不是响应式的啦，当然可以通过**set()**方法来添加实现响应式。

~~~js
    // 模拟Vue中的data选项
    let data = {
      msg: 'hello world'
    }
    // 模拟Vue的实例
    let vm = {}
    // 数据劫持：当访问或者设置vm中的成员时，做一些劫持后操作
    Object.defineProperty(vm, 'msg', {
      // 当获取值的时候执行
      get () {
        console.log(`数据被读取了，值为${data.msg}`)
        return data.msg
      },
      // 当设置值的时候执行
      set (newValue) {
        console.log(`数据被修改了，新的值为${newValue}`)
        if (newValue === data.msg) {
          return
        }
        data.msg = newValue
      }
    })
~~~

当我们读取vm的msg的时候就会触发get事件，当我们修改vm的msg的时候，就会触发set事件。

![image-20220813152017000](https://mzbimgs.mzb0.com/img/image-20220813152017000.png)

在修改数据的时候可以执行一些修改dom的操作，从而实现数据的响应式，这也是简单的实现vue2数据响应式的原理。

### vue3的响应式原理

vue3和vue2实现响应式的原理不同，vue3实现响应式的原理是ES6的Proxy方法来实现的，Proxy用于创建一个对象 的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

~~~js
    // 模拟Vue中的data选项
    let data = {
      msg: 'hello vue',
      value: 7
    }
    // 模拟Vue实例
    let vm = new Proxy(data, {
      // 执行代理行为的函数 当访问vm的成员会执行
      get (target, key) {
        console.log(`数据被读取了，名为${key},值为${target[key]}`)
        return target[key]
      },
      // 当设置vm的成员会执行
      set (target, key, newValue) {
        console.log(`数据被修改了了，名为${key},值为${newValue}`)
        if (target[key] === newValue) {
          return
        }
        target[key] = newValue
      }
    })
~~~



当读取和修改msg的时候，跟vue2一样，set和get方法会被调用。

![image-20220813154354844](https://mzbimgs.mzb0.com/img/image-20220813154354844.png)

**总结：**

Vue 2

- 底层原理：Object.defineProperty
- 直接监听属性
- 浏览器兼容IE8以上（不兼容IE8）

Vue3

- 底层原理：Proxy
- 直接监听对象，而非属性
- ES6中新增方法，不支持IE浏览器
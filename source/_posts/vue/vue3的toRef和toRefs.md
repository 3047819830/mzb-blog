---
title: vue3的toRef和toRefs
date: 2022-08-25 21:10:25
tags:
  - vue
  - 前端
category:
  - 学习笔记
  - 前端分享
cover: 'https://mzbimgs.mzb0.com/img/zzddcvue3.png'
---

# vue3的toRef和toRefs

 **toRef**

> 可以用来为源**响应式对象**上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。

从定义中可以看出，**toRef针对的是一个响应式对象的prop**。他的作用是创建一个ref对象，他的值指向另一个对象中的某个属性。

简单来说就是将响应式对象的某一个值单独提供给外部使用，并且也是响应式的。

~~~javascript
<template>
	<span>{{textCountRef}}</span>
	<span>{{textCountRef}}</span>
</template>

<script setup>
   import {reactive,toRef} from 'vue'
   let obj = reactive({count: 3, text: '真不错！'});
   let textCountRef = toRef(obj,'count') //第一个参数是对象，第二个参数是属性名
   let textCountRef = toRef(obj,'count')
</script>
~~~

在实际应用当中也是运用非常多的，当模板在渲染一个对象内部的值的时候，需要每次都要去逐层的去读取相应的数据，在模板当中看着非常的不友好，有了这个方法之后就简便很多。

# toRefs

> 将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref。

可以看到toRefs和toRef很像，从名字上他们长的差不多，从作用看他们确实也是差不多。只不过一个是对对象属性单个处理，一个是进行批量处理。

~~~javascript
<script setup>
  import {reactive,toRefs} from 'vue'
  let obj = reactive({
    name: '张三',
    age:18
  });
  
  let name = toRef(obj,'name')
  let age = toRef(obj,'age')
  //等价于
  let {name,age} = toRefs(obj)
  
</script>
~~~

toRefs的一大用途就是变相解构Proxy，首先了解一个常识，Proxy如果解构，基本数据会丢失响应式。

**总结：**

- 初衷： 在保证不丢失响应式的前提下，把对象解构，方便对象数据分解和扩散
- 前提：针对的是响应式对象（reactive封装的）非普通对象
- 注意： 不创造响应式（那是reactive的事情），只是延续响应式
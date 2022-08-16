---
title: vue3中的计算属性和监视属性
date: 2022-08-16 21:12:21
tags:
  - vue
  - 前端
category:
  - 学习笔记
  - 前端分享
cover: 'https://mzbimgs.mzb0.com/img/zzddcvue3.png'
---

## computed函数

computed在vue3中是一个组合式API，在使用之前得引入，他是一个函数，可以在实例当中多次使用。

~~~js
<script>
import {reactive,computed} from 'vue'
export default {
 setup(){
     let data = {
         msg: '高兴！'
     }
     let mood = computed({
         return `今天的心情很${data.msg}`
     })
   }
}
</script>
~~~

这种方法实现简单的计算属性，但是却是一个只读的属性，想要实现读和写需要对其进行完善。

~~~js
<script>
import {reactive,computed} from 'vue'
export default {
 setup(){
     let data = {
         msg: '高兴！'
     }
     let mood = computed({
         get(){
         return `今天的心情很${data.msg}`
         },
         set(value){
           return `今天的心情很${value}  
         }
     })
   }
}
</script>
~~~



## watch函数

vue3的监视属性也是组合式API，在使用的时候也需要引入。

~~~js
<script>
import {ref,watch} from 'vue'
export default {
 setup(){
     let data = ref('你好啊！')
	// 监视属性
     watch(data,(newValue,oldValue) => {
         console.log('data的值变了',newValue,oldValue)
     })
   }
}
</script>
~~~

这是监视一个数据的时候，如果需要监视多个数据，将第一个参数换成一个数组，将要监视的数据放在数组当中，如果要监视reactive里边对象的某一个属性，需要将第一个参数写成一个函数，将想要监视的属性返回出来，监视多个属性也是类似，将函数放在一个数组当中即可。

当然，想要配置监视属性，还有第三个参数，就是配置对象。

~~~js
<script>
import {ref,watch} from 'vue'
export default {
 setup(){
     let data = ref('你好啊！')
	// 监视属性
     watch(data,(newValue,oldValue) => {
         console.log('data的值变了',newValue,oldValue)
     },{
         immediate:true, // 开始就检测一次
         deep:true // 深度监视
     })
   }
}
</script>
~~~


---
title: vue3的setup的两个注意点
date: 2022-08-16 20:38:20
tags:
  - vue
  - 前端
category:
  - 学习笔记
  - 前端分享
cover: 'https://mzbimgs.mzb0.com/img/zzddcvue3.png'
---

## setuo的两个注意点

![](https://mzbimgs.mzb0.com/img/zzddcvue3.png)

setup是vue3新增的生命周期函数，setup的加入就是为了让vue3使用组合式API（Composition API）。使用组合式API更符合**大型项目**的开发，通过setup可以将该部分**抽离成函数**,让其他开发者就不用关心该部分逻辑。

在使用setup之前我们需要注意两个点：

1. setup的执行时机
2. setuo的参数

### setup的执行时机

**vue3**的更新，让生命周期发生了很大的变化，**setup**的执行时机实在**beforeCreated**之前，用于代替created 和beforeCreated。由于在实例还没有创建之前就执行，所以这个时候不能访问**data**中的数据，他的**this**是**undefind**.

~~~js
<script>
export default {
 setup(){
 console.log(this) //undefined
   }
}
</script>
~~~

### setup的参数

**setup**是一个函数，而且还有两个参数：**props**、**context**

#### 1.props

props跟vue2的含义一样，他的值是一个对象，包含了外部组件传递过来的，而且组件内部声明接收了的属性，组件内需要使用props去接收才能将属性保存在props当中，并且保存为一个proxy对象。

~~~js
<script>
export default {
props:['msg']
 setup(props){
 console.log(props)
   }
}
</script>
~~~

#### 2.context

这个参数是一个上下文对象，主要包含了：attrs、slots、emit

1.**attrs**: 外部组件传递而来，组件内部没有声明接收的属性，就相当于vue2的**this.$attrs**

2.**slots**: 收到的插槽内容，相当于vue2的**this.$slots**

3.**emit**: 分发自定事件的函数，相当于vue2的**this.$emit**

~~~js
<script>
export default {
props:['msg']
 setup(props,context){
 	console.log(props) // 接收声明接收的属性
    console.log(context.attrs) // 接收未声明接收的属性
    console.log(slots) // 接收外部组件传过来的插槽内容
    console.log(emit) // 接收外部组件传过来的自定义事件
   }
}
</script>
~~~


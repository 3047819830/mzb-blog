---
title: vue3的provide和inject
tags:
  - vue
  - 前端
category:
  - 学习笔记
  - 前端分享
cover: 'https://mzbimgs.mzb0.com//img/11.jpg'
abbrlink: 3921872361
date: 2022-08-31 22:28:11
---

##  vue3的provide和inject

在开发当中组件通讯是最常见的一个需求，一个好的框架能将组件通讯做的好的那才是真的好，在之前的vue2里，我们最常用的就是props来实现组件传递数据，当然这也并不是唯一的方法，不过却是非常方便的方法，但是总是会有弊端的，他只能实现父子组件之间传递，想要做到后代组件通讯就要使用其他方法。

在vue3当中，他给我们提供了两个组合式API，分别是`provide`和`inject`，`provide`和`inject`可以轻松实现跨层级组件通讯，provide在父组件中返回要传给下级的数据，inject在需要使用这个数据的子辈组件或者孙辈等下级组件中注入数据。

**示例**： 新建一个子组件`inject.vue`：

```js
<template>
  <div>我是inject组件，{{acceptMessage}}</div> // 我是inject组件，你好
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "inject",
  setup() {
    let acceptMessage = inject<any>("message");
    return {
        acceptMessage
    }
  },
});
</script>
```

在父组件中引入inject：

```js
<template>
  <div>
    <inject-component></inject-component>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide } from "vue";
import InjectComponent from "@/components/inject.vue";

export default defineComponent({
  name: "provide",
  components: {
    InjectComponent,
  },
  setup() {
    let text = "你好";
    provide("message", text);
  },
});
</script>
```

这时候在子组件那里就接收到父组件传过来的值。

同样，孙辈组件也是可以接受到父组件穿过来的值的，定义一个孙辈组件，在子组件中引入即可：

```js
// grannson.vue
<template>
  <div>我是grandson组件， {{ acceptMessage }}</div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "grandson",
  setup() {
    let acceptMessage = inject<any>("message");
    return {
      acceptMessage,
    };
  },
});
</script>
```

在子组件中引入：

```js
import grandsonComponent from "@/components/grandson.vue";

<grandson-component></grandson-component>
```

在项目页面中就能看到，`message`都被传进来了

无论层级是多少，只要是后代组件，完全可以实现组件之间的通讯，达到组件传递数据的作用。
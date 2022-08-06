---
title: js数组常用方法
tags:
  - js数组
  - 前端
  - 常用函数
category:
  - 学习笔记
  - 前端分享
cover: 'https://mzbimgs.mzb0.com/img/js.png'
abbrlink: 27818
date: 2022-07-18 19:38:43
---

###  arr.join() - 连接元素转字符串

1. 原数组不变
2. 回调函数参数：*separator*元素之间连接符号，默认为逗号
3. 将数组内的所有元素连接在一起转化为字符串，并返回这个字符串。

~~~js
const originalArr = [1, 2, 3, 4, 5]

originalArr.join() // 返回“1,2,3,4,5”
originalArr.join('-') // 返回“1-2-3-4-5”
~~~

### arr.sort() - 数组排序

1. 会改变原数组
2. 回调函数参数：*sortfunction*规定排序顺序。必须是函数。
3. 将数组中的每个元素按一定条件排序后并返回排序后的新数组，排序顺序可以是字母或数字，并按升序或降序。默认排序顺序为按字母升序。

~~~js
const originalArr =["Banana","Orange","Apple","Mango"]

originalArr.sort() // 返回[Apple,Banana,Mango,Orange]

const points = [40, 100, 1, 5, 25, 10]
points.sort(function(a,b){return b-a}) // 返回[100,40,25,10,5,1]
~~~

### arr.reverse() - 颠倒数组

1. 会改变原数组。
2. 没有回调函数参数。
3. 将数组中的元素颠倒，并返回颠倒后的数组。

~~~js
const originalArr = [1, 2, 3, 4, 5]

originalArr.reverse() // 返回 [5,4,3,2,1]
~~~

### arr.concat() - 连接两个或多个字符串

1. 原数组不变
2. 回调函数参数：将被连接为一个字符串的一个或多个字符串对象。
3. 该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串。

~~~js
const str1 = "Hello ";
const str2 = "world!";
const newStr = str1.concat(str2);
~~~

###  arr.slice() - 数组切片

1. 原数组不变
2. 回调函数参数：*start*规定从何处开始选取。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取；end规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。
3. 该方法返回指定的一个数组片段。

~~~js
const arr = [1, 2, 3, 4, 5, 6, 7]
arr.slice(1,3) // 返回[2, 3]
arr.slice(4) // 返回[5, 6, 7]
arr.slice(4, -1) // 返回[5, 6]
arr.slice(-3) // 返回[5, 6, 7]
~~~

### arr.splice() - 数组插入或删除元素

1. 会改变原始数组。
2. 回调函数参数：index从何处添加/删除元素；*howmany*删除多少元素，必须是数字；*item*要添加到数组的新元素。
3. 该方法在数组指定位置插入或删除元素，并返回删除元素组成的数组。

~~~js
const arr = [1, 2, 3, 4, 5]
arr.splice(2,1) // 返回[3] 此时arr=[1，2，4，5]
arr.splice(5,0,6) // 返回[] 此时arr= [1, 2, 3, 4, 5, 6]
~~~

### arr.push() - 在尾部添加元素

1. 会改变原始数组。
2. 回调函数参数：item(一个或多个)。
3. 该方法依次获取每个参数将其插入数组末尾。

~~~js
const arr = [1, 2, 3]
arr.push(4) // 返回[1, 2, 3， 4]
arr.push(5,6) // 返回[1, 2, 3， 4, 5, 6]
~~~

### arr.pop() - 删除尾部最后一个元素

1. 会改变原始数组。
2. 不需要传参数。
3. 该方法是删除数组的最后一个元素，并返回该元素。

~~~js
const arr = [1, 2, 3, 4, 5]
arr.pop() // 返回[1, 2, 3, 4]
~~~

### arr.unshift() - 在头部添加一个或多个元素

1. 会改变原始数组。
2. 回调函数参数：item（一个或多个）。
3. 函数依次获取每个参数将其插入到数组的最前面。

~~~js
const arr = [1, 2, 3, 4, 5]
arr.unshift(0) // 返回 [0] 此时arr = [0, 1, 2, 3, 4, 5]
~~~

### arr.shift() - 删除头部第一个元素

1. 会改变原始数组。
2. 不需要传参数。
3. 该方法是删除数组的第一个元素，并返回该元素。

~~~js
const arr = [1, 2, 3, 4, 5]
arr.shift() // 返回[2, 3, 4, 5]
~~~



### arr.map() – 更新数组

1. 原数组不变
2. 回调函数参数：item(数组元素)、index(序列)、arr(原数组)
3. 循环原数组，使用return操作输出项，返回新数组，新数组长度和原数组一样

```javascript
const arr = [1, 2, 3, 4, 5]

const newArr = arr.map((item, index, arr) => {
  return item * 2 // 将原数组的每一项都乘以2，输出新数组，原数组不变
})

console.info(newArr) // [2, 4, 6, 8, 10]

```

### arr.filter() – 筛选数组

1. 原数组不变
2. 回调函数参数：item(数组元素)、index(序列)、arr(原数组)
3. 循环原数组，使用return判断是否输出元素，返回新数组，新数组长度小于或等于原数组

```js
const arr = [1, 2, 3, 4, 5]

const newArr = arr.filter((item, index, arr) => {
  return item % 2 == 0 // 将原数组的偶数项输出为新数组，原数组不变
})

console.info(newArr) // [2, 4]
```

### arr.reduce() – 叠加数组

1. 原数组不变
2. 回调函数参数：pre(初始值为数组第一项，此后是上一次操作的返回值)、item(数组元素)、index(序列，下标从1开始)、arr(原数组)
3. 循环原数组，使用return操作输出，直到循环结束，返回一个输出值

```javascript
const arr = [1, 2, 3, 4, 5]

const newArr = arr.reduce((pre, item, index, arr) => {
  // 第一次循环：pre:1, item:2, index:1, pre+item:3
  // 第二次循环：pre:3, item:3, index:2, pre+item:6
  // 第三次循环：pre:6, item:4, index:3, pre+item:10
  // 第四次循环：pre:10, item:5, index:4, pre+item:15
  return pre + item
})

console.info(newArr) // 15
```

### arr.fill() - 填充数组

1. 会改变原始数组。
2. 回调函数参数：*value*（填充的值）、*start*（开始填充的位置）、end（停止填充的位置）。
3. 该方法用于将一个固定值替换数组的元素。

~~~js
const arr = [1, 2, 3, 4, 5]
arr.fill(0) // 返回[0, 0, 0, 0, 0]
arr.fill(0,2) // 返回[1, 2, 0, 0, 0]
~~~

### arr.includes() - 判断元素是否存在

1. 原始数组不变。
2. 回调函数参数: 
3. 该方法用于判断字符串是否包含指定的子字符串。

~~~js
const arr = ['runoob', 'google', 'taobao']
 
arr.includes('runoob') // 返回 true 
arr.includes('baidu') // 返回false
~~~


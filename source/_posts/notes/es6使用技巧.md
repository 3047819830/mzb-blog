---
title: es6使用技巧
tags:
  - es6
  - 前端
category:
  - 学习笔记
  - 前端分享
cover: 'https://mzbimgs.mzb0.com/img/es6.png'
abbrlink: 54265
date: 2022-06-16 20:57:50
---
在实际开发当中，ES6能在开发当中可以让代码可读性变强，让代码量也减少很多，ECMAScript 6（简称 ES6）是 JavaScript 语言的下一代标准，在 2015 年 6 月正式发布。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

#### 取值
```JavaScript
const obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
}
```
需求：将obj的值分别取出

以前的取值方式：

```JavaScript
const a = obj.a;
const b = obj.b;
const c = obj.c;
const d = obj.d;
const e = obj.e;
```
es6之后的取值：

```JavaScript
const {a,b,c,d,e} = obj;

```
如果想创建的变量名和对象的属性名不一致，可以这么写：

```javascript
const {a:a1} = obj;
```

#### 数据合并

```JavaScript
const a = [1,2,3];
const b = [1,5,6];

const obj1 = {
  a:1,
}
const obj2 = {
  b:1,
}
```
需求：将a,b两个数组合并，将obj1和obj2两个对象合并

以前的写法：
```JavaScript
const c = a.concat(b);
const obj = Object.assign({}, obj1, obj2);
```
这样的写法确实可以，但是没能考虑到数组去重

es6之后的合并：

```js
const c = [...new Set([...a,...b])];
const obj = {...obj1,...obj2};
```
#### 拼接字符串

```js
const name = '小明'; 
const score = 59;
```
需求：输出“小明的成绩是59分”

以前的写法：

```js
console.log(name + '的成绩是' + score + '分')
```
es6之后的写法：

```js
console.log(`${name}的分数是${score}分`)
```

#### if中判断条件

以前的写法：

```js
if( type == 1 || type == 2 || type == 3 || type == 4 || ){ //... }
```
es6之后的写法：

```js
const condition = [1,2,3,4]; 
if( condition.includes(type) ){ //... }
```

#### 列表搜索

以前的写法：

```js
const a = [1,2,3,4,5]; c
onst result = a.filter( 
    item => { 
        return item === 3 
} )
```
现在的写法：

```js
const a = [1,2,3,4,5]; 
const result = a.find( 
    item =>{ 
    return item === 3 
} )
```
优点：精确搜索的时候，检索到相应的值之后就不会继续执行，有利于性能的优化

#### 输入框非空的判断

以前的写法：

```js
if(value !== null && value !== undefined && value !== ''){ //... }
```
现在的写法：

```js
if((value??'') !== ''){ //... }
```
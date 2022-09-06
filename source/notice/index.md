---
title: 笔记
date: 2022-09-03 17:21:44
type: notes
---

{% tabs 笔记 %}
<!-- tab BUG集 -->

{% folding red, 1.判断一个对象是否有某一个属性 %}

之前我经常用的是obj['key']是否存在，但后来有一种情况就是，这种属性是存在的，但其值刚好是undefined，这就很尴尬了， 我的这个逻辑就不行了,你应该用obj.hasOwnProperty,他返回一个布尔类型，如果为true，即代表有这个属性。

~~~js
const obj = {name: 'mzb',hobby:undefined}
const res = obj.hasOwnProperty('hobby')
if (res) {
    console.log('这个值存在！')
} else {
    console.log('这个值不存在！')
}
~~~

{% endfolding %}



{% folding red, 2.v-show不支持template 元素 %}

在开发的时候，因为个人习惯，在需要做循环和判断的时候喜欢用一个块级元素将整个模块包裹起来，一般都是用`template` 元素，但是今天遇到一个很神奇的现象，在使用`v-show`的时候，发现并没有想象的作用，通过查阅资料（百度）才知道，原来`v-show`不能用在`template`元素上

{% endfolding %}




<!-- endtab -->



<!-- tab 算法集 -->

{% folding cyan, 1.两数求和 %}

{% note red 'fas fa-bullhorn' flat%}

题目：给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`* 的那 **两个** 整数，并返回它们的数组下标。

{% endnote %}

### 我的答案

~~~js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};
~~~

**结果：**

![image-20220906161845449](https://mzbimgs.mzb0.com/img/image-20220906161845449.png)

### 网友的答案

~~~js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i;
  }
  return [];
};
~~~

**结果：**

![image-20220906162147280](https://mzbimgs.mzb0.com/img/image-20220906162147280.png)

{% endfolding %}

<!-- endtab -->



<!-- tab 随笔记 -->

暂无

<!-- endtab -->
{% endtabs %}

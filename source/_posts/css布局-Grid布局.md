---
title: css布局-Grid布局
abbrlink: 594664827
date: 2022-08-14 11:36:43
category:
  - css布局
tags:
  - css
  - 前端
cover: 'https://mzbimgs.mzb0.com/img/zzcss.png'
---

### 简介

Grid布局是css布局当中一种非常强大的布局方式，他是一个二维系统，通过处理行和列来实现布局方式。主要涉及的概念有网格容器、网格项、网格线、网格单元、网格轨迹、网格区域等。

#### 用法

网格容器只需要将**display**属性定义成**grid**或者**inline-grid**就可以了，然后通过`grid-template-columns: ...| ...;`和`grid-template-row: ...| ...;`来定义网格的列和行，他们的取值就是网格轨迹的大小。

![](https://mzbimgs.mzb0.com/img/3cc2c952c4d8243f491888498f84efb.jpg)

### 1.1.0 display 属性

```css
// 开启 grid 网格布局
display: grid;
display: inline-grid;
```

> 注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align 和 column-*等设置都将失效。

### 1.2.0 grid-template-columns 属性，grid-template-rows 属性

容器指定了网格布局以后，接着就要划分行和列。grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高。

```scss
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
.container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
// 单个 单元格 项的宽度或者高度一定，但是 盒子的宽度高度未知的情况下，要让 单元格自动填充，在一行或一列内尽可能多的填充单元格，则会用到 auto-fill 关键词
grid-template-columns: repeat(auto-fill, 100px);


// 为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。
grid-template-columns: 100px 1fr 2fr;
// 最小值最大值 minmax
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
// 自适应
grid-template-columns: 100px auto 100px;
// 定义网格线名称(4竖线，4横线)
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

### 1.3.0 grid-row-gap 属性，grid-column-gap 属性，grid-gap 属性

设置 网格 行与行 列与列 的间隔

```css
.container {
  grid-row-gap: 20px;
  grid-column-gap: 10px;
}
.container {
  grid-gap: 20px 10px;
}
```

### 1.4.0 grid-template-areas 属性

给单元格划分区域

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c' 'd e f' 'g h i';
}
// a b c d e f g h i 每个字母对应9个单元格中其中一个单元格（网格子项）
```

### 1.5.0 grid-auto-flow 属性

设置网格 排版的 原则；

```scss
默认值 row 先排行再排列；column 先列后行；row-dense 
grid-auto-flow: row; // 默认
grid-auto-flow: column; 
grid-auto-flow: row-dense; // 先行后列，尽量填满行，不留空格
grid-auto-flow: column-dense; // 先列后行，尽量填满列，不留空格
```

### 1.6.0 justify-items 属性；align-items 属性；place-items 属性

单元格内容的对齐方式：

![](https://mzbimgs.mzb0.com/img/af6b3d344d0ac85ccdac01450685a4d.jpg)

```scss
.container {
  justify-items: start | end | center | stretch; // stretch 拉伸占据
  align-items: start | end | center | stretch;
}
// 合并写法
place-items: start end; // 上面的 justify-items align-items 的简写形式
```

### 1.7.0 justify-content 属性；align-content 属性；place-content 属性

justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）;

![](https://mzbimgs.mzb0.com/img/92eb15c1de56011162c0aa08ea31578.jpg)

```scss
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
// 合并写法
place-content: space-around space-evenly;
```

### 1.8.0 grid-auto-columns 属性和 grid-auto-rows 属性

当网格中有子项目 存在于 布局之外时，grid-auto-columns 属性和 grid-auto-rows 属性用来设置浏览器自动创建的多余网格的列宽和行高。

它们的写法与 grid-template-columns 和 grid-template-rows 完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。

## 二、项目属性

### 2.1 grid-column-start/end、grid-row-start/end 属性

根据容器划分的网格线，定义项目边框的起始、结束的网格线位置的一些属性；

2.1.1 基础用法

> grid-column-start属性：左边框所在的垂直网格线；

> grid-column-end属性：右边框所在的垂直网格线；

> grid-row-start属性：上边框所在的水平网格线；

> grid-row-end属性：下边框所在的水平网格线；

```scss
.item-1 {
  // 指定该项目的四个边框的位置
  grid-column-start: 1; // 左边框是第一根网格线
  grid-column-end: 3; // 右边框是第三根网格线
  grid-row-start: 2; // 上边框是第二根网格线
  grid-row-end: 4; // 下边框是第四根网格线
}
```

指定具体网格线的时候，除了使用数值，也可以使用 网格线名称；

2.1.2 span 关键字

这四个属性的值还可以使用 span 关键字，表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。

```scss
.item-1 {
  grid-column-start: span 2; // 左边框到右边框跨越 2 个网格；
}
```

使用这四个属性，如果产生了项目的重叠，则使用 z-index 属性指定项目的重叠顺序。

2.1.3 合并简写写法

```scss
// 上面例子的合并简写写法
.item-1 {
  // 指定该项目的四个边框的位置
  grid-column: 1/3;
  grid-row: 2/4;
}
// 或者用 span 关键词
.item-1 {
  // 指定该项目的四个边框的位置
  grid-column: 1/span 2;
  grid-row: 2/span 3;
}
.item-1 {
  // 斜杠之后的可以省略，则默认跨越一个网格线，效果如下图；
  grid-column: 1;
  grid-row: 1;
}
```

### 2.2 grid-area 属性

属性指定项目放在哪一个区域，可以用 区域名称指定，也可以用 网格线 位置指定；

```scss
.container-areas {
  display: inline-grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  /* 给容器划分区域，并命名 */
  grid-template-areas: 'backBtn title header' 'nav container container' 'footer . .';
}
  /* 1.0 直接指定 项目的 所在 区域 */
.areasitem-backBtn {
  background-color: #c077af;
  /* 使用区域名称指定 项目的 位置 */
  grid-area: backBtn;
  color: #fff;
}
.areasitem-header {
  background-color: #4dc7ec;
  grid-area: header;
  color: #fff;
}
/* 2.0 使用网格线指定 */
.item-1 {
  background-color: #ef342a;
  // 2 / 4 / 3 / 1 分别为 上下右左 的网格线位置；
  grid-area: 2 / 4 / 3 / 1;
}
```

### 2.3 justify-self、align-self 属性

设置单元格内容的水平、垂直位置，类似于 justify-items、align-items 相同的用法，但是只作用于 单个项目；

```lua
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

合并简写形式：

```css
place-self: center center;
```
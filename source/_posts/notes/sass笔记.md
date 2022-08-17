---
title: sass笔记
tags:
  - sacc
  - 前端
category:
  - 学习笔记
  - 前端分享
cover: 'https://mzbimgs.mzb0.com/img/sass.jpg'
abbrlink: 118616040
date: 2022-04-17 21:59:31
---

## 一、介绍

Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库，有助于更好地组织管理样式文件，以及更高效地开发项目。下面是对sass学习的记录笔记，篇幅有点长，请耐心阅读。

[![sass](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)](https://mzbimgs.mzb0.com/img/sass.jpg)

### 特色功能：

- 完全兼容 CSS3
- 在 CSS 基础上增加变量、嵌套 (nesting)、混合 (mixins) 等功能
- 通过[函数](http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html)进行颜色值与属性值的运算
- 提供[控制指令 (control directives)](https://www.sass.hk/docs/#t8)等高级功能
- 自定义输出格式

## 二、安装

### NPM安装

```
PLAINTEXT
npm i -g sass
```

### windows安装

我们可以使用 Windows 的包管理器 [Chocolatey](https://chocolatey.org/) 来安装：

```
PLAINTEXT
choco install sass
```

### Mac OS X (Homebrew)安装

Mac OS 可以使用 [Homebrew](https://brew.sh/) 包管理器来安装：

```
PLAINTEXT
brew install sass/sass/sass
```

## 三、基本语法

### 1.把Sass编译成css

在终端输入(以下都是)：

```
PLAINTEXT
sass style.scss:style.css
```

### 2.自动编译Sass

监视单个文件：

```
PLAINTEXT
sass --watch sass:css
```

监视整个文件夹：

```
PLAINTEXT
sass --watch app/sass:public/css
```

### 3.编译输出格式

**格式：nested、 compact、 expanded、 compressed**

**nested：嵌套格式**

```
PLAINTEXT
sass --watch sass:css --style nested
```

**例子**

style.scss

```
SCSS
body {
    color: #f0f1f1; 
}
```

编译后：style.css

```
CSS
body {
  color: #f0f1f1; }
```

**compact：紧凑格式**

```
PLAINTEXT
sass --watch sass:css --style compact
```

**例子**

style.scss

```
SCSS
body {
    color: #f0f1f1; 
}
```

编译后：style.css

```
CSS
body { color: #f0f1f1; }
```

**expanded：展开格式**

```
PLAINTEXT
sass --watch sass:css --style expanded
```

**例子**

style.scss

```
SCSS
body {
    color: #f0f1f1; 
}
```

编译后：style.css

```
CSS
body {
    color: #f0f1f1; 
}
```

**compressed：压缩格式**

```
PLAINTEXT
sass --watch sass:css --style compressed
```

**例子**

style.scss

```
SCSS
body {
    color: #f0f1f1; 
}
p {
    font: size 1.2rem;
}
```

编译后：style.css

```
CSS
body{color:#f0f1f1}p{font:size 1.2rem}
```

### 4.变量

**声明变量：**

```
SCSS
$default_color: #1269b5;
$default_border: 1px solid #b51212;

body {
    color: $default_color;
    border: $default_border
}
```

### 5.嵌套

**基本语法**

```
SCSS
.nav {
    height: 100px;
    ul {
        margin: 0;
        li {
            float: left;
            list-style: none;
            padding: 0;
        }
    }
}
```

**嵌套时调用父选择器**

```
SCSS
a{
    display: block;
    color: #000;
    padding: 5px;
    &:hover{
        background-color: #0d2f7e;
        color: #fff
    }
}
```

**嵌套属性**

```
SCSS
// 方法一
p {
    font: {
        family: "Helvetica Neue";
        size: 12px;
        width: normal;
    }
}
// 方法二
.div {
    border: 1px solid #000 {
        left: 0; 
        right: 0;
    }
}
```

### 6.混合—Mixins

**基本语法**

```
SCSS
@mixin divbox($color, $background-color) {
    color: $color;
    background-color: $background-color;
}

.seccess-box {
    @include divbox(#f4fdf4, #00ff00 );
}
```

### 7.继承

```
SCSS
div {
padding: 0;
margin: 0;
}
.div {
    @extend div;
    background-color:#f4fdf4;
}
```

### 8.Import

如果需要导入 SCSS 或者 Sass 文件，但又不希望将其编译为 CSS，只需要在文件名前添加下划线，这样会告诉 Sass 不要编译这些文件，但导入语句中却不需要添加下划线。

例如，将文件命名为 `_colors.scss`，便不会编译 `_colours.css` 文件。

```
SCSS
@import "colors";
```

上面的例子，导入的其实是 `_colors.scss` 文件

注意，不可以同时存在添加下划线与未添加下划线的同名文件，添加下划线的文件将会被忽略。

### 9.控制指令

#### @if

当 `@if` 的表达式返回值不是 `false` 或者 `null` 时，条件成立，输出 `{}` 内的代码：

```
SCSS
p {
  @if 1 + 1 == 2 { border: 1px solid; }
  @if 5 < 3 { border: 2px dotted; }
  @if null  { border: 3px double; }
}
```

#### @for

`@for` 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。这个指令包含两种格式：`@for $var from <start> through <end>`，或者 `@for $var from <start> to <end>`，区别在于 `through` 与 `to` 的含义：*当使用 `through` 时，条件范围包含 `<start>` 与 `<end>` 的值，而使用 `to` 时条件范围只包含 `<start>` 的值不包含 `<end>` 的值*。另外，`$var` 可以是任何变量，比如 `$i`；`<start>` 和 `<end>` 必须是整数值。

```
SCSS
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

#### @each

`@each` 指令的格式是 `$var in <list>`, `$var` 可以是任何变量名，比如 `$length` 或者 `$name`，而 `<list>` 是一连串的值，也就是值列表。

`@each` 将变量 `$var` 作用于值列表中的每一个项目，然后输出结果。

```
SCSS
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

#### @while

`@while` 指令重复输出格式直到表达式返回结果为 `false`。这样可以实现比 `@for` 更复杂的循环，只是很少会用到。例如：

```
SCSS
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
.item-6 {
  width: 12em; }

.item-4 {
  width: 8em; }

.item-2 {
  width: 4em; }
```

### 10.自定义函数

```
SCSS
$colors: (light: #ffffff, dark: #000000);

@function color($key){
    @return map-get($colors,$key)
};

body {
    background-color: color(light)
}
```

**设置警告**

```
SCSS
$colors: (light: #ffffff, dark: #000000);

@function color($key){
    @if not map-get($colors,$key) {
        @warn "在$clolors里边没有找到 #{$key} 这个值";
    }
    @return map-get($colors,$key)
};
```

**设置错误**

```
SCSS
$colors: (light: #ffffff, dark: #000000);

@function color($key){
    @if not map-get($colors,$key) {
        @error "在$clolors里边没有找到 #{$key} 这个值";
    }
    @return map-get($colors,$key)
};
```

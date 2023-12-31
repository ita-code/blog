---
title: 弹性布局
date: 2022/12/6
tags: [css]
summary: 常见的flex布局
---

## 一、基本概念

采用 Flex 布局元素,称为 Flex 容器(Flex container),简称“容器”。

在 Flexbox 模型中,有三个概念：

- flex 项(注：也称为 flex 子元素),需要布局的元素
- flex 容器,其包含 flex 项
- 排列方向(direction),这决定 flex 项的布局方向

## 二、容器属性

### flex-direction:

- row(默认值):主轴为水平方向,起点在左端。

- row-reverse:主轴为水平方向,起点在右端。

  ![row-reverse](https://iskr.gitee.io/pic/blog/flex/row-reverse.png)

- column:主轴为垂直方向,起点在上沿。
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019132100670.png#pic_center)

- column-reverse:主轴为垂直方向,起点在下沿。
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/2020101913210660.png#pic_center)

### flex-wrap:

- nowrap(默认):不换行。多余内容溢出
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019132305185.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDkwMzcy,size_16,color_FFFFFF,t_70#pic_center)

- wrap:换行,按顺序第一行在上方
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019132310388.png#pic_center)

- wrap-reverse:换行,第一行在下方
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019132319479.png#pic_center)

### justify-content:

- flex-start(默认值):左对齐
- flex-end:右对齐
- center:居中
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019132341557.png#pic_center)

- space-between:两端对齐,项目之间间隔都相等
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019132356795.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDkwMzcy,size_16,color_FFFFFF,t_70#pic_center)

- space-around:每个项目两侧的间距相等。所以,项目之间的间隔比项目与与边框的间隔大一倍
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/2020101913241146.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDkwMzcy,size_16,color_FFFFFF,t_70#pic_center)

### align-items:

- flex-start:交叉轴为起点对齐
- flex-end:交叉的终点对齐
- center:交叉轴的中点对齐
- baseline:项目的第一行文字的基线对齐
- streach(默认值):如果项目未设置高度或设为 auto,将占满整个容器。

### align-content:

定义了多根轴线的对齐方式,如果项目只有一根轴线,那么该属性将不起作用

- flex-start:与交叉轴的起点对齐
- flex-end:与交叉轴的终点对齐。
- center:与交叉轴的中点对齐
- space-between:与交叉轴两端对齐,轴线之间的间隔平均分布。
- space-around:每根轴线两侧的间隔都相等。10110:1 代表边距,0 代表盒子!
- strech(默认值):轴线占满整个交叉轴

看 demo

### 默认居中

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019132503267.png#pic_center)

### 垂直居中

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019132555932.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDkwMzcy,size_16,color_FFFFFF,t_70#pic_center)

## 三、项目属性

### order 属性

```javascript
		.box {
            border: 1px solid black;
            display: flex;
        }
        .box1,
        .box2,
        .box3 {
            width: 50px;
            height: 50px;
            margin: 20px;
        }
        .box1 {
            order: 3;
            background: blue;
        }
        .box2 {
            background: red;
        }
        .box3 {
            order: 1;
            background: green;
        }
    </style>
    <div class="box">
        <div class="box1">
            box1
        </div>
        <div class="box2">
            box2
        </div>
        <div class="box3">
            box3
        </div>
    </div>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019133657461.png#pic_center)

### flex-grow 属性 flex-grow:1==flex:1

flex-grow 属性定义项目的放大比例,默认为 0,即如果存在剩余空间，也不放大

```javascript
		.box {
            border: 1px solid black;
            display: flex;
        }
        .box1,
        .box2,
        .box3 {
            flex-grow: 1;
            width: 50px;
            height: 50px;
            margin: 20px;
        }
        .box1 {
            background: blue;
        }
        .box2 {
            background: red;
        }
        .box3 {
            background: green;
        }
    </style>
    <div class="box">
        <div class="box1">
            box1
        </div>
        <div class="box2">
            box2
        </div>

        <div class="box3">
            box3
        </div>
    </div>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019132614447.png#pic_center)

### flex-shrink 属性

定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

- 如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。
- 负值对该属性无效。

```javascript
 <style>
        .box {
            width: 100px;
            height: 50px;
            border: 1px solid black;
            display: flex;
        }
        .box1,
        .box2,
        .box3 {
            width: 50px;
            height: 50px;
        }
        .box1 {
            flex-shrink: 6;
            background: blue;
        }
        .box2 {
            background: red;
        }
        .box3 {
            background: green;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="box1">
        </div>
        <div class="box2">
        </div>

        <div class="box3">
        </div>
    </div>
</body>
```

166:1 代表蓝色 6 代表红绿
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019134452399.png#pic_center)

### align-self 属性

align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

```javascript
 .box {
            width: 100px;
            height: 100px;
            border: 1px solid black;
            display: flex;
        }
        .box1,
        .box2,
        .box3 {
            width: 50px;
            height: 50px;
        }
        .box1 {
            align-self: flex-end;
            background: blue;
        }
        .box2 {
            align-self: center ;
            background: red;
        }
        .box3 {
            align-self: flex-start;
            background: green;
        }
    </style>
    <div class="box">
        <div class="box1">
        </div>
        <div class="box2">
        </div>

        <div class="box3">
        </div>
    </div>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201019141443338.png#pic_center)

来自：[巨详细的教程](https://www.cnblogs.com/hellocd/p/10443237.html)

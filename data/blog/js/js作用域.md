---
title: Js作用域
date: 2020/7/05 23:56:54
lastmod: 2020/09/05 23:56:54
tags: [Javascript]
draft: false
summary: 刚接触Javascript时，记录的笔记。
images: https://pan.zealsay.com/zealsay/cover/6.jpg
authors: ['default']
layout: PostLayout
---
> 关于深入理解JS作用域的一些笔记

```javascript
//全局作用域   函数作用域
    // var a = 2;
    //
    // console.log(a);
    function f() {
        var b = 3;
        //  console.log(a);
    }

    // console.log(b);

    //编译阶段  边解释边执行

    //内部原理分成  编译,执行,查询,嵌套,异常（了解）

    //1.编译 2.执行 3.查询 4.嵌套 5.异常
    var a = 2;
    //1.1分词
    //词法单元   var,a,=,2,;
    /*
    数组或对象
      {
        "var":"keyword",//关键字
        "a":"indentifier",//标识符
        "=":"assignment",//分配
        "2":"interger",//整数
        ";":"eos",//(end of statement)结束语句
      }

    */

    //1.2解析
    //抽象语法数（AST  Abstract Snatax Tree）

    //1.3代码生成
    //将AST换成可以执行代码的过程,转换成一组机器的指令
    //简言之，编译过程就是编译器把程序分解成词法单元，将词法单元解析成AST,再把AST转换成机器指令等待执行的过程

    var a = 2;

    //执行阶段
    //1.引擎运行代码时首先查找当前的作用域下，如果是引擎就会直接使用这个变量：如果否，引擎就会继续查找变量
    //2.如果找到了变量，就会将2赋值给当前的变量，否则引擎就会抛出异常

    //查询阶段   LSH查询=  RHS查询   L寻址R寻值
    var a=2;//LSH查询

    function f1(a) {//RHS查询
       // console.log(a);
    }
    f1(2);
    //1.f1()对于f1函数对象进行RHS引用
    //2.函数传参a=2对a进行了LHS引用
    //3.console.log(a);对console对象进行RHS引用，并检查其是否有log()方法
    //4.console.log(a);对a进行RHS引用，并把得到的值传给了console.log(a);

    //嵌套阶段
    //作用域变量的查找机制（**********重要*******）
    //在当前作用域中无法找到某个变量时，引擎就会在最外层嵌套作用域中继续查找你，
    //直到找到该变量，或者是抵达最外层的作用域（全局作用域）为止
    function f2(a) {
        function f3() {
           // console.log(a+b);
        }
        f3();
    }
    var b=2;
    f2(4);

    //异常阶段

    function f3(a) {
        // a=c;//c is not defined
        // b();//b is not a function
        // "use strict";
        c=1;
    }
    f3(3);
    // console.log(c);

    // 词法作用域

    function f4(q) {
        var b=q*2;
        function f5(c) {
          //  console.log(q,b,c);//2,4,12
        }
        f5(b*3);
    }
    f4(2);

    //预解释  变量声明提升   var
    a=2;
    var a;
    //console.log(a);

    //console.log(aaa);//undefined
    var aaa=6;
    //函数声明提升
    adr();
    function adr() {
        // console.log(1);
    }
    // ade();
    var ade=function () {
        // console.log(1);
    }

    //声明  ：变量声明提升和函数声明提升  函数的声明优先于变量声明提升；注意未定义的同名变量会被覆盖
    var aqq;
    function aqq(){}
    // console.log(aqq);
    aqq=10;
    // console.log(aqq);
    //变量的重复声明是无用的，但是函数的重复声明会被覆盖前面的声明（无论是变量还是函数声明，重复情况下）

    //注意：应该避免在同一作用域中重复声明

    var a=1;
    var b=2;
    function ff(x) {
        var a=10;
        function bar(x) {
            var a=100;
            b=x+a;
            return b;

        }
        bar(20);
        bar(200);
    }
    ff(0);
    console.log(a,b);

    //总结：执行环境 相当于作用域链一样
    //在JS中，除了全局作用域，每个函数都会创建自己的作用域。
    //作用域在函数定义的时候已经确定了，与函数调用无关
    //通过作用域，可以查找作用域范围内的变量和函数有哪些，却不知道变量的值是什么。所以作用域是静态
    //对于函数来说，执行环境在函数调用时确定的。执行环境包含作用域内的所有的变量和函数的值。
    //在同一个人作用域下，不同的调用会产生不用的执行环境，从而产生不同的变量和值。所以执行环境是动态
```

> 本文是学习文档视频敲出来的笔记[小马哥的JS文档](https://book.apeland.cn/details/402/)

 

 **不安逸，不浮躁，牛B就是一个学习累积的过程。**


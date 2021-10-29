---
title: 异步的小结
date: 2021-03-05
sidebar: false
isShowComments: true
categories:
 - Javascript
tags:
 - 异步 
---


### 代码执行在做什么时

JavaScript语言的执行环节是`单线程`single thread）

**单线程**指的是一次只能完成一件任务。如果有多个任务，就必须排队，前面一个完成，在执行后面一个任务。故**JS引擎不能同时做两件事，所以说异步不是在做两件事**

以`setTimeout`为例，setTimeout里面的代码一定会在当前环境中的任务执行完了【之后】才执行。

异步意味着不等待任务结束，并没有强制要求两个任务【同时进行】

### 同步

```text
你可以理解为同一个时间，你只能干一件事。今天下班早，你想给女朋友打个电话，女朋友可能跟其他小伙伴一起吃饭呢，
由于手机静音，所以听不到，你就一直打，一直打，啥都没干，把时间都浪费了，这就叫同步。因为js是单线程的嘛，所以js从小就是同步的。

来一段代码：
function second() {
    console.log('second')
}
function first(){
    console.log('first')
    second()
    console.log('Last')
}
first()

这个很简单，执行打印结果：
first、second、last
```

### 消息队列

`同步代码`执行=》调用栈的概念【后进先出】

```text
当执行此代码时，将创建一个全局执行上下文并将其推到调用堆栈的顶部；// 这个不太重要，下面是重点
first()函数先上，现在他在顶部；
然后打印‘first’，然后执行完了，这个时候这个console.log会自动弹走，就是这个console.log虽然是后进来的，但是他先走了；
现在first函数仍然在顶部，他下面还有second函数，所以不会弹走；
执行second()函数,这时候second函数在顶部；
打印‘second’，然后执行完了，弹走这个console.log，这时候second在顶部；
这个时候second函数的事儿都干完了，他也弹走了，这时候first函数在顶部；
浏览器会问，first你还有事吗，first说我还有一个，执行打印‘last’
```

### 异步

```text
来段代码：
const getList = () => {
    setTimeout(() => {
        console.log('我执行了！');
    }, 2000);
};
console.log('Hello World');
getList();
console.log('哈哈哈');

执行顺序是：
Hello World、哈哈哈、我执行了！（两秒以后执行最后一个）
```

### 消息队列

同步的时候，浏览器会维护一个‘执行栈’，除了执行栈，在开启多线程的时候，浏览器还会维护一个消息列表，除了主线程，其余的都是副线程，这些副线程合起来就叫消息列表。 我们用消息列表的概念分析一下上面的代码：

```text
按照执行顺序console.log('Hello World')先执行，浏览器一看，中央军（主线程）！你先过；
然后是getlist函数执行，浏览器看到setTimeout,你是八L（副线程）！你先靠边等着；
然后是console.log('哈哈哈')执行，中央军（主线程）！你也过；
然后浏览器问，还有中央军吗？没了，八L开始过！
```

### 疑点

为什么promise.then比定时器先执行呢？

```text
setTimeout(function() {
    console.log('我是定时器！');
})
new Promise(function(resolve) {
    console.log('我是promise！');//在主线上执行
    resolve();
}).then(function() {
    console.log('我是then！');//微任务副线程
})
console.log('我是主线程！');

执行顺序：
我是promise！
我是主线程！
我是then！
我是定时器！
```

### 事件轮询

浏览器为了提升效率，为js开启了一个不太一样的多线程，因为js不能同时执行嘛，那副线程（注意是副线程里面哈）里面谁执行，这个选择的过程，就可以理解为事件轮询。我们先用事件轮询的顺序分析一下上面的代码，再来上概念

```text
promise函数肯定首先执行，他是主线程嘛，打印‘我是promise’；
然后继续走主线程，打印‘我是主线程’；
然后主线程走完了，开始走消息列表；
（宏任务和微任务一会再讲）
这个时候会先执行promise.then，因为他是微任务，里面的‘我是then！’
消息列表里面在上面的是定时器，但是定时器是宏任务，优先级比较低，所以会往后排；
```

### 宏任务、微任务

```text
**宏任务（Macrotasks）：**js同步执行的代码块，setTimeout、setInterval、XMLHttprequest、setImmediate、I/O、UI rendering等。

**微任务（Microtasks）：**promise、process.nextTick（node环境）、Object.observe, MutationObserver等。

微任务比宏任务要牛逼一点

浏览器执行的顺序：
(1)执行主代码块，这个主代码块也是宏任务
(2)若遇到Promise，把then之后的内容放进微任务队列
(3)遇到setTimeout，把他放到宏任务里面
(4)一次宏任务执行完成，检查微任务队列有无任务 
(5)有的话执行所有微任务 
(6)执行完毕后，开始下一次宏任务。
```
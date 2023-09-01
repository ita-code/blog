---
title: 最全的数组方法以及实例
date: 2020/12/05
lastmod: 2021/09/05
tags: [Javascript]
draft: false
summary: 数组的操作开发中应该是常见的，建议大家一定要学，不会就多上菜鸟看看，这里给大家推荐个最全[工具类](https://www.lodashjs.com/)。这工具类在开发中具有用。
authors: ['default']
layout: PostLayout
---
## 数组的操作开发中应该是常见的，建议大家一定要学，不会就多上菜鸟看看，这里给大家推荐个最全[工具类](https://www.lodashjs.com/)。这工具类在开发中具有用。
`concat()` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

```js
	let str1=['a','b'];
        let str2=['c'];
        let str=str1.concat(str2);
        console.log(str);//(3) ["a", "b", "c"]
		//多个数组合并
	let str=str1.concat(str2,str3);//(4) ["a", "b", "c", "d"]
```

`copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

```js
 	let arr=['1','2','3','4','5'];
        console.log(arr.copyWithin(0,3,4));
        //["4", "2", "3", "4", "5"]从索引为3的地方开始复制索引为4的地方截止！复制到索引从0开始的位置
        console.log(arr.copyWithin(0,3));
        //["4", "5", "3", "4", "5"]从索引为3的地方开始复制默认到结尾！复制到索引从0开始的位置

```

`entries() `方法返回一个新的**Array Iterator**对象，该对象包含数组中每个索引的键/值对。

```js
	let arr=['a','b','c'];

        let newArr=arr.entries();
        console.log(newArr.next().value);// [0, "a"]
        console.log(newArr.next().value);// [1, "b"]
```

`every()` 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

```js
 	let fn = (val) => val < 5;

        let arr=[1,3,5,7];
        console.log(arr.every(fn));//fasle
        let arr1=[1,3,];
        console.log(arr1.every(fn));//true
```

`fill()` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```js
	let arr=[1,2,3,4,5];

        console.log(arr.fill(9,2,4));
        // [1, 2, 9, 9, 5]  把9填充到索引为2（包含）的位置到索引为4（不包含）的地方结束
        console.log(arr.fill(0,3));
        // [1, 2, 9, 0, 0]  把0填充到索引为3（包含）的位置第三个参数默认值为this.lenght
```

`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 

```js
	let arr=[1,2,3,4,5];

        let result=arr.filter(arr=>arr>3);
        console.log(result);//[4, 5]
```

`find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

```js
	let arr = [1, 2, 3, 4, 5];

        let found = arr.find(num => num > 3);
        console.log(found);//4只返回第一位
```

`findIndex()`方法返回数组中满足提供的测试函数的第一个元素的**索引**。若没有找到对应元素则返回-1。

```js
	let arr = [1, 2, 3, 4, 5];

        let fn = (num) => num > 3;

        console.log(arr.findIndex(fn));//3返回的是索引
```

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```js
let arr = [1, 2, 3, [4, 5]];

        console.log(arr.flat());
        //[1, 2, 3, 4, 5]

        let arr1 = [1, 2, 3, [[[4, 5]]]];

        console.log(arr1.flat(2));
        //[1, 2, 3, Array[4,5]]
```

`forEach()` 方法对数组的每个元素执行一次给定的函数。遍历数组的方法

```js
let arr = [1, 2, 3, 4, 5];

        arr.forEach(item=>{
            console.log(item);
        })
        //1,2,3,4,5
```

`includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

```js
	let arr = [1, 2, 3, 4, 5];

        console.log(arr.includes(3));//true
        console.log(arr.includes(0));//falses	
```

`indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

```js
	let arr = [1, 2, 3, 4, 5];

        console.log(arr.indexOf(3));//返回索引2
        console.log(arr.indexOf(0));//返回-1	
        console.log(arr.indexOf(3,3));//-1  从索引3的位置开始匹配

```

`join()` 方法将一个数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN//docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

```js
	let arr = [1, 2, 3, 4, 5];

        console.log(arr.join());//1,2,3,4,5
        console.log(arr.join('_'));//1_2_3_4_5
        console.log(arr.join(' '));//1 2 3 4 5
```

`keys() `方法返回一个包含数组中每个索引键的`Array Iterator`对象。

```js
	let arr = [1, 2, 3, 4, 5];

        let keyArr = arr.keys();
        for(let keys of keyArr){
            console.log(keys);
        }
        //0 1 2 3 4
```

**`values()`** 方法返回一个新的 **`Array Iterator`** 对象，该对象包含数组每个索引的值

```js
	let str=['a','b','c'];

        let strVal=str.values();

        for(let val of strVal){
            console.log(val);// a b c
        }
```

`lastIndexOf()` 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 `fromIndex` 处开始。

```js
	let arr = [1, 2, 3, 2, 1];

        console.log(arr.lastIndexOf(1));//0
        console.log(arr.lastIndexOf(2,-3));//1
```

`map()` 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。

```js
	let arr=[1,2,3,4,5];

        let result=arr.map(x=>x*2);
        console.log(result);// 2 4 6 8 10
```

`pop()`方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

```js
	let arr=[1,2,3,4,5];

        console.log(arr.pop());//5
        console.log(arr);// 1 2 3 4
        console.log(arr.pop());//4
```

`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

```js
	let arr=[1,2,3,4,5];

        arr.push(6);
        console.log(arr);//[1, 2, 3, 4, 5, 6]
        arr.push(7);
        console.log(arr);//[1, 2, 3, 4, 5, 6, 7]
```

`reduce()` 方法对数组中的每个元素执行一个由您提供的**reducer**函数(升序执行)，将其结果汇总为单个返回值。

```js
	let arr=[1,2,3,4];

        let reducer=(s,e)=>s+e;

        console.log(arr.reduce(reducer));//10

        console.log(arr.reduce(reducer,10));//20
```

`reduceRight()` 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。

```js
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
            (accumulator, currentValue) => accumulator.concat(currentValue)
        );

        console.log(array1);
        //  [4, 5, 2, 3, 0, 1]
```

`reverse()` 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

```js
	let str=['one','two','three',1];
        console.log('str:',str);//str: (4) ["one", "two", "three", 1]

        let reversed=str.reverse();
        console.log('reversed',reversed);//reversed (4) [1, "three", "two", "one"]

        console.log(str);//(4) [1, "three", "two", "one"]
```

`shift()` 方法从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度。

```js
	let arr=[1,2,3,5,6];

        let newArr=arr.shift();

        console.log(newArr);//1

        console.log(arr);// [2, 3, 5, 6]
```

`slice()` 方法返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括 `begin`，不包括`end`）。原始数组不会被改变。

```js
	let arr=[1,2,3,5,6];

        console.log(arr.slice(2));//[3, 5, 6]从索引2的位置截取

        console.log(arr.slice(2,4));//[3, 5]从索引2（包括）的位置截取，4（不包括）的位置结束

```

`some()` 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。

```js
 	let arr=[1,2,3,4,5];

        let fn=(num)=>num%2===0;
        let fn1=(num)=>num>6;

        console.log(arr.some(fn));//true

        console.log(arr.some(fn1));//false
```

`sort()` 方法用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的

```js
 	let arr = [54, 4, 78, 66, 99, 12];
        arr.sort()
        console.log(arr);//[12, 4, 54, 66, 78, 99]逐位排列顺序

        const months = ['March', 'Jan', 'Feb', 'Dec'];
        months.sort();
        console.log(months);//["Dec", "Feb", "Jan", "March"]
        let arr1=[12,5,56,52,13,11];
        arr1.sort();
        console.log(arr1);//[11, 12, 13, 5, 52, 56]
```

**`splice()`** 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

```js
 	let arr = [1,2,3,4,5,6];

        arr.splice(1,0,100);

        console.log(arr);//[1, 100, 2, 3, 4, 5, 6]在索引1的位置上0代表插入第三个参数插入的值

        arr.splice(2,1,300);//[1, 100, 300, 3, 4, 5, 6]
        console.log(arr);//在索引2的位置上1代表替换1个第三个参数插入的值

        arr.splice(2,3,700);

        console.log(arr);// [1, 100, 700, 5, 6]在索引2的位置上2代表替换2个第三个参数插入的值
```

**`toLocaleString()`** 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 `toLocaleString` 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

```js
	let arr=[1,'a',new Date()];

        console.log(arr.toLocaleString());//1,a,2020/11/16 下午5:33:59
```

**`toString()`** 返回一个字符串，表示指定的数组及其元素。

```js
	let arr=[1,'a',new Date()];
        console.log(arr.toString());//1,a,Mon Nov 16 2020 17:35:26 GMT+0800 (中国标准时间)
        let str=[1,'a',34,'fn1']
        console.log(str.toString());//1,a,34,fn1
```

**`unshift()`** 方法将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度(该**方法修改原有数组**)**。

```js
	let arr=[1,2,3];
        arr.unshift(4,5);
        console.log(arr);//[4, 5, 1, 2, 3]
```

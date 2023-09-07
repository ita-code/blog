---
title: 事件委托
date: 2021/02/10
tags: [Javascript]
summary: 面试面到了后来就接着学习了一点，感觉打开了新的世界。
---

要理解`DOM`相关事件，我们先要理解`“事件流”`这个概念，事件流描述的是从页面中接收事件的顺序。

事件冒泡：事件开始由最具体的元素接收，然后逐级向上传播到较为不具体的节点或文档。

事件捕获：事件开始由不太具体的节点接收，然后逐级向下传播到最具体的节点。它与事件冒泡是个相反的过程。

`DOM2` 级事件规定的事件流包括三个阶段：事件捕获、目标阶段、事件冒泡。

### 事件委托

事件委托，通俗的说就是将元素的事件委托给它的父级或者更外级的元素处理，它的实现机制就是事件冒泡。

假设有一个列表，要求点击列表项弹出对应的字段：

```html
<ul id="mybox">
  <li id="1">aaa</li>
  <li id="2">bbb</li>
  <li id="3">ccc</li>
</ul>
```

### 不使用事件委托

```javascript
var mybox = document.getElementById('mybox')
var li = mybox.getElementsByTagName('li')

for (var i = 0; i < li.length; i++) {
  li[i].onclick = function (e) {
    var e = event || window.event
    var target = e.target || e.srcElement
    alert(e.target.id + ':' + e.target.innerText)
  }
}
```

存在问题：

- 给每一个列表都绑定事件，消耗内存
- 当有动态添加的元素时，需要重新给元素绑定事件

### 事件委托错误写法

事实上很多同学在网上看到的事件委托的方法都是错的，虽然是错的，但是你面试的时候也可能会过，因为面你的面试官可能也不知道正确的事件委托应该怎么写。

下面我们就来看一下错误版的事件委托是怎么写的：

```
 ul.addEventListener('click', function(e){
     if(e.target.tagName.toLowerCase() === 'li'){
         fn() // 执行某个函数
     }
 })
```

### 事件委托正确写法

错误版事件委托的`bug` 在于，如果用户点击的是 `li`里面的 `span`，就没法触发 `fn`，这显然不对。

那下面我们来看一下正确的事件委托应该怎么写：

```html
<div id="mybox">
  <li id="li01">qwe</li>
  <li id="li02">
    <span>asd</span>
  </li>
  <li id="li03">qwe</li>
  <li id="li04">
    <span>123</span>
  </li>
</div>
```

```javascript
delegate(document.getElementById('mybox'), 'click', 'li', function () {
  console.log('this=>', this)
})

function delegate(element, eventType, selector, fn) {
  element.addEventListener(eventType, (e) => {
    let el = e.target
    while (!el.matches(selector)) {
      if (element === el) {
        el = null
        break
      }
      el = el.parentNode
    }
    el && fn.call(el, e, el)
  })
  return element
}
```

思路是点击 `span`后，递归遍历 `span` 的祖先元素看其中有没有 `ul` 里面的 `li`。

**事件委托的优点**

- 只需要将同类元素的事件委托给父级或者更外级的元素，不需要给所有的元素都绑定事件，减少内存占用空间，提升性能。
- 动态新增的元素无需重新绑定事件

**需要注意的点**

- 事件委托的实现依靠的冒泡，因此不支持事件冒泡的事件就不适合使用事件委托。
- 不是所有的事件绑定都适合使用事件委托，不恰当使用反而可能导致不需要绑定事件的元素也被绑定上了事件。

**jQuery 的 delegate 实现源码**

```javascript
delegate: function( selector, types, data, fn ) {
    return this.on( types, selector, data, fn );
},
function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}
```

> 告诫自己，即使再累也不要忘记学习，成功没有捷径可走，只有一步接着一步走下去。 共勉！
>
> 原文作者[纯纯纯爷们](https://juejin.cn/post/6844904097372438542)文章是我学习作者的后编辑的。

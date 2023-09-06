---
title: 学习Vue的基础性总结
date: 2020/05/25
lastmod: 2020/09/05
tags: [Vue, element ui]
summary: 记录刚开始学习Vue~
---

## vue 里面的一些方法

## created:在模板渲染成 html 前调用，即通常初始化某些属性值，然后再渲染成视图。（操作不了 dom 节点此方法在渲染 html 前调用）

## mounted:在模板渲染成 html 后调用，通常是初始化页面完成后，再对 html 的 dom 节点进行一些需要的操作。

## onkeyup 键盘事件监听

```javascript
<div id="app">
    <button @click="getto" @keyup.13="getto">按钮</button>
</div>
<script>
    var app=new Vue({
        el:"#app",
        mounted() {
            var _this=this;
            document.onkeydown=function(ev){
                var e=ev||window.event;
                console.log(e.keyCode);
                if(e.keyCode13){
                    _this.getto();
                }
            }
        },
        methods: {
            getto(){
                console.log("触发了事件");
            }
        },
    });
</script>
<input
        type="text"
        name=""
        placeholder="请输入手机号的前7位"
        class="input"
        id=""
        v-model="tel"
        @keydown.13="getTel"//监听文本框鼠标按下执行getTel方法
      />
```

## redirect:重定向路由

```javascript
export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [
    // 城市
    {
      path: 'city',
      component: () => import('@/components/City'),
    },
    // 正在热映
    {
      path: 'nowPlaying',
      component: () => import('@/components/NowPlaying'),
    },
    // 即将上映
    {
      path: 'comingSoon',
      component: () => import('@/components/ComingSoon'),
    },
    // 搜索
    {
      path: 'search',
      component: () => import('@/components/Search'),
    },
    {
      path: '/movie',
      redirect: '/movie/nowPlaying',
    },
  ],
}
```

## computed 计算属性：依赖状态改变了，计算属性会重新执行一遍，调用第二次的计算属性会有缓存。

```javascript
    <div id="app">
        <input type="text" name="" id="" @keydown.13="cx" @input="cx" v-model="value">
        <ul>
            <li v-for="item in getArr">{{item}}</li>
        </ul>
    </div>
    <script>
        var app = new Vue({
            el: '#app',
            data() {
                return {
                    arr: ['abb', 'eee', 'dss', 'wer', 'xcvdfg', 'dsf', 'aa', 'echo'],
                    value: '',
                }
            },
            computed: {
                // 一旦计算属性中的依赖状态发生改变，就会重新执行一遍函数
                getArr() {
                    return this.arr.filter(item=>item.indexOf(this.value)>-1);
                }
            },

        })
    </script>
```

## ref&$refs 通信:放在标签上是拿的原生节点，放在组件上 拿到的是对象

```javascript
 <div id="app">
        <input type="text" name="" id="" ref="mytext">
        <button  @click="add">add</button>
        <child  ref='mychild'></child>
    </div>
    <script>
        Vue.component('child',{
            template:`<div>
                <input type='button' value='按钮'>
                <p></p>
                </div>`,
                methods: {
                    ajj(data){
                        console.log("子组件方法",data);
                    }
                },
        })
        var app=new Vue({
            el:'#app',
            methods: {
                add(){
                    // ref  放在标签上是拿的原生节点
                    console.log("111",this.$refs);
                    this.$refs.mychild.ajj("组件传值");
                }
            },
            // ref  放在组件上 拿到的是对象
        })
    </script>
```

## 打包后在本地运行

- 使用 nginx 本地服务器运行

1.  直接去官网下载 http://nginx.org/en/download.htm
2.  解压，解压之后目录如下![在这里插入图片描述](https://img-blog.csdnimg.cn/20201023193358360.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDkwMzcy,size_16,color_FFFFFF,t_70#pic_center)
3.  打开 html 文件夹，删掉里面的内容，将已打包的 dist 文件夹里面的内容，全部复制到 html 文件夹下![在这里插入图片描述](https://img-blog.csdnimg.cn/20201023193501832.png#pic_center)
4.  打开 conf 文件夹，找到 nginx.conf 文件，用编辑器打开找到 http 对象中的 server，将这部分改一下，其他不用动，listen 为端口号![在这里插入图片描述](https://img-blog.csdnimg.cn/20201023193819899.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDkwMzcy,size_16,color_FFFFFF,t_70#pic_center)
5.  启动项目
    > 双击 nginx.exe
6.  浏览器中查看
    > 在地址栏输入 localhost:8808 即可

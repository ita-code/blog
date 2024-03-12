# 创建一个 TypeScript 项目

```sh
# 1、npm 初始化
npm init

# 2、安装typescript作为开发阶段依赖   -D:开发阶段依赖
npm install typescript -D

# 3、在根目录新建 tsconfig.json，配置项具体的意义可以参考 ts 官方文档 或者执行 tsc --init初始化
{
    "version": "1.8.0",
    "compilerOptions": {
        "outDir": "build/compiled",
        "lib": [ "es6" ],
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "sourceMap": true,
        "noImplicitAny": true,
        "declaration": true
    },
    "exclude": [ "build", "node_modules" ]
}

# 4、安装 @types/node 让 node 的核心包具备类型提示
npm install @types/node -D

# 5、在开发阶段为了能直接执行并且监听 ts 文件的变化，安装 ts-node-dev
npm install ts-node-dev -D

# 6、在package.json 中定义一个启动脚本
"scripts": {
    "start": "ts-node-dev src/index.ts"
}

```

# StringORBoolean

- [TypeScript 里 string 和 String，真不是仅仅是大小写的区别](https://juejin.cn/post/7078485459944357925)
- [TypeScript 中的 Boolean 和 boolean 之间有什么区别](https://geek-docs.com/typescript/typescript-questions/151_typescript_what_is_the_difference_between_boolean_and_boolean_in_typescript.html)

# 类型顺序

```ts
1、any unknown //unknown只能赋值给自身或者any，没办法读取任何属性（和方法）
2、Object
3、Number String Boolean
4、number string boolean
5、1      'str'  false 	//原始类型
6、never
```

# `interface` 和 `type`

```ts
1、interface：
用来描述对象的形状，可以包含属性、方法、索引签名等。
可以被合并（extend）。
适合用于定义类、对象的结构。
可以被声明多次，并且会自动合并同名的属性和方法。
2、type：
类似于接口，用来描述对象的形状，也可以包含属性、方法、联合类型等。
可以使用交叉类型（&）进行合并。
可以直接使用类型别名（type alias）来定义复杂类型。
更灵活，可以用来定义联合类型、交叉类型等复杂类型。
⚠️注意：定义多个interface会合并成一个、type不会
```

# 装饰器`@注解`

```ts
//类装饰器     类声明之前添加额外的逻辑、修改类的原型等
//作用：修改类行为、元数据注入、验证和安全性、依赖注入
const Base: ClassDecorator = (target) => {
  target.prototype.log = () => {
    console.log('打印日志:target=>', target)
  }
}

@Base
class Vue {}

const vue1 = new Vue()
vue1.log()
//通过函数柯里化得到name参数
const Base = (name: string) => {
  const fn: ClassDecorator = (target) => {
    target.prototype.log = () => {
      console.log(name, '打印日志:target=>', target)
    }
  }
  return fn
}

@Base('ita hah')
class Vue {}

const vue1 = new Vue()
vue1.log()

//1.类装饰器 ClassDecorator
//2.属性装饰器 PropertyDecorator
//3.参数装饰器 ParameterDecorator
//4.方法装饰器 MethodDecorator PropertyDescriptor 'https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10'
//5.装饰器工厂
import axios from 'axios'
import 'reflect-metadata'
const Base = (base: string) => {
  // 类装饰器
  const fn: ClassDecorator = (target) => {
    //在原有class上添加一个base属性
    target.prototype.base = base
  }
  return fn
}

const Get = (url: string) => {
  // 方法装饰器
  const fn: MethodDecorator = (target: any, key, descriptor: PropertyDescriptor) => {
    axios.get(url).then((res) => {
      //获取key
      const key = Reflect.getMetadata('key', target)
      //回传给方法
      descriptor.value(key ? res.data[key] : res.data)
    })
  }
  return fn
}

const result = () => {
  // 参数装饰器
  const fn: ParameterDecorator = (target: any, key: any, index: number) => {
    console.log('参数装饰器=>', target, key, index)
    Reflect.defineMetadata('key', 'result', target)
  }
  return fn
}

const Log: PropertyDecorator = (target, propertyKey) => {
  let value = target[propertyKey]
  // 重写属性的 getter 和 setter 方法
  const getter = function () {
    console.log(`Getting value: ${value}`)
    return value
  }
  const setter = function (newVal: any) {
    console.log(`Setting value: ${newVal}`)
    value = newVal
  }
  // 重新定义属性
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  })
}

@Base('/api')
export class Http {
  @Log
  public name: string
  constructor(name: string) {
    this.name = name
  }
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  getList(@result() data: any) {
    console.log(data)
  }
  create(name: string) {
    this.name = name
  }
}
```

# `高级用法`和`类型推断`

## 1、对常量数组的类型推断和联合类型的应用

- 常量数组的只读性：使用 `as const` 将数组标记为只读（readonly）元组类型，可以确保数组中的元素值不可变，从而增强代码的可靠性和安全性。
- 联合类型的创建：通过 `typeof types` 和 `[number]` 的组合，可以快速获取常量数组的元素类型，并将它们组合成一个联合类型。这样可以灵活地定义多个可能取值的类型，进而在代码中使用这些类型。
- 类型检查的作用：最后一行代码尝试将一个不属于联合类型的值赋给定义的联合类型变量，这是为了演示 TypeScript 在类型检查方面的严格性。TypeScript 会在编译时检测到这种不匹配，并提示错误，帮助开发人员避免潜在的类型错误。

```ts
const types = ['a', 'b', 'c'] as const
//这里首先定义了一个常量数组 types，并使用 as const 将其标记为只读（readonly）元组类型，这样数组中的元素值将不可变。
type Keys = typeof types[number]
//这里通过 typeof types 获取 types 数组的类型，然后使用 [number] 索引访问操作符获取该数组的元素类型，即 "a" | "b" | "c"。
const keys: Keys = '123'
//这行代码尝试将字符串 "123" 赋值给类型 Keys，即 "a" | "b" | "c"。由于类型不匹配，TypeScript 会在编译时报错，因为 "123" 不属于联合类型 "a" | "b" | "c"。

// 拓展
const types = ['a', 'b', 'c'] as const
type Keys = typeof types[number]
// 定义 dictsValue 对象类型
type DictsValue = {
  [key in Keys]: { value: string; label: string; [key: string]: any }[]
}
const dictsValue: DictsValue = {
  a: [
    { value: '1', label: 'a1' },
    { value: '2', label: 'a2' },
  ],
  b: [
    { value: '1', label: 'b1' },
    { value: '2', label: 'b2' },
  ],
  c: [
    { value: '1', label: 'c1' },
    { value: '2', label: 'c2' },
  ],
}
const { a, d } = dictsValue // 此时会报错，因为 d 未被定义在 dictsValue 中
```

## 2、`keyof` 是 TypeScript 中的一个关键字

- 用于获取对象类型的所有键（属性名）的联合类型。它可以帮助我们在编译时检查对象属性的正确性，并且可以在一些情况下提供更好的类型安全性和自动补全。

- 理解 `keyof` 的推导过程可以简单地分为两个步骤：

  1. 对象类型的键列表推导：`keyof T` 推导出一个类型，该类型是对象类型 `T` 的所有公共键（属性名）的联合类型。例如

     ```ts
     type Person = {
       name: string
       age: number
     }

     type PersonKeys = keyof Person // "name" | "age"
     //在上面的例子中，PersonKeys 的类型推导为 "name" | "age"，因为 Person 类型包含两个属性 name 和 age。
     ```

  2. 索引访问类型推导：`T[keyof T]` 推导出一个类型，该类型是对象类型 `T` 中所有键对应值的联合类型。例如：

     ```ts
     type Person = {
       name: string
       age: number
     }

     type PersonValues = Person[keyof Person] // string | number
     //在上面的例子中，PersonValues 的类型推导为 string | number，因为 Person 类型的键为 "name" | "age"，而对应的值为 string | number。
     ```

     通过理解 `keyof` 的推导过程，我们可以更好地利用它来进行类型操作，例如通过索引访问来获取对象属性的值类型，或者用于泛型约束中进行属性的限制等。

# TS 发布订阅模式

```ts
interface IEventMag {
  on(event: string, listener: Function): void
  off(event: string, listener: Function): void
  emit(event: string, ...args: any[]): void
}
//TS发布订阅模式
class CustomEventMag implements IEventMag {
  // 事件名 => 监听函数
  private events = new Map<string, Function[]>()
  // 注册事件   订阅
  on(event: string, listener: Function): void {
    const listeners = this.events.get(event) || []
    listeners.push(listener)
    this.events.set(event, listeners)
  }
  // 注销事件
  off(event: string, listener: Function): void {
    const listeners = this.events.get(event) || []
    const newListeners = listeners.filter((l) => l !== listener)
    this.events.set(event, newListeners)
  }
  // 触发事件   发布
  emit(event: string, ...args: any[]): void {
    const listeners = this.events.get(event) || []
    listeners.forEach((listener) => listener(...args))
  }
}
const eventBus = new CustomEventMag()
export default eventBus

//发布
import eventBus from '@/utils/eventBus.ts'
eventBus.emit('changeTitle', 'About')

//订阅
import eventBus from '@/utils/eventBus.ts'
eventBus.on('changeTitle', (e: string) => {
  document.title = e
})
```

# Proxy & Reflect

- `Proxy `对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。通过创建一个目标对象和其对应的处理器（handler），你可以定义在目标对象上进行各种操作时的自定义行为。

  ```js
  let target = {}
  let handler = {
    get: function (target, prop) {
      return prop in target ? target[prop] : 'Not found'
    },
  }

  let proxy = new Proxy(target, handler)
  console.log(proxy.foo) // 输出: "Not found"
  ```

- `Reflect `对象提供了一组静态方法，这些方法与 Proxy 处理程序的方法相对应，可以直接在 Reflect 对象上调用。它们提供了与 Proxy 处理程序方法相同的功能，但是作为函数而不是作为构造函数。

  ```JS
  let obj = { x: 1, y: 2 };
  Reflect.has(obj, 'x'); // 返回 true
  ```

- `Proxy` 和 `Reflect` 提供了更灵活和强大的元编程能力，允许你以更直观和高效的方式来拦截和定制 JavaScript 对象上的操作。使用它们，你可以实现诸如数据绑定、属性验证、代理模式等高级功能。

  ```js
  const student = {
    name: '小明',
    age: '18',
  }

  const nProxy = new Proxy(student, {
    // 判断属性是否存在
    has(target, key) {
      console.log('has', key)
      return key in target
    },
    // 删除属性
    deleteProperty(target, key) {
      console.log('delete', key)
      delete target[key]
    },
    // 获取属性
    ownKeys(target) {
      console.log('ownKeys')
      return Reflect.ownKeys(target)
    },
    // 获取属性描述
    getOwnPropertyDescriptor(target, key) {
      console.log('getOwnPropertyDescriptor', key)
      return Reflect.getOwnPropertyDescriptor(target, key)
    },
    // 设置属性描述
    defineProperty(target, key, descriptor) {
      console.log('defineProperty', key, descriptor)
      return Reflect.defineProperty(target, key, descriptor)
    },
    // 获取属性
    get(target, key) {
      console.log('get', key)
      return target[key]
    },
    // 设置属性
    set(target, key, value) {
      console.log('set', key, value)
      target[key] = value
    },
  })

  console.log('判断属性是否存在', 'name' in nProxy)
  console.log('删除属性', delete nProxy.age)
  console.log('获取属性', nProxy.name)
  console.log('获取属性描述', Object.getOwnPropertyDescriptor(nProxy, 'name'))
  console.log('设置属性描述', Object.defineProperty(nProxy, 'gender', { value: 'male' }))
  console.log('获取属性', nProxy.age)
  console.log('设置属性', (nProxy.age = 20))
  ```

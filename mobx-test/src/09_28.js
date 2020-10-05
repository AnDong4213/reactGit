// Object.create()方法实现对象继承与创建新的JavaScript对象   // Object.create(proto [, propertiesObject])

// Object.create()方法是 ECMAScript 5中新增的方法，这个方法用于创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。被创建的对象会继承另一个对象的原型，在创建新对象时还可以指定一些属性。

// 使用Object.create()方法创建新对象时，如果不是继承一个原有的对象，而是要创建一个全新的对象，就要把proto参数设置为null。如果proto参数不是null或一个对象时，会抛出一个TypeError异常。

function Site() {
  this.name = 'Site';
  this.domain = 'domain';

  this.parFunc = function() {
    console.log(999)
  }
}
Site.prototype.create = function(name, domain) {
  this.name = name;
  this.domain = domain;
}

function Itbilu() {
  Site.call(this)
}
Itbilu.prototype = Object.create(Site.prototype, {
  constructor: {
    value: Itbilu,
    enumerable: false
  }
})

// 在不指定propertiesObject设置对象属性时，使用Object.create()方法实现继承与JavaScript原型继承并没有什么区别。因此, 示例的后半部分也可以写成下面这样：
// Itbilu.prototype = Site.prototype

var itbilu  = new Itbilu()
console.log(itbilu instanceof Site)

itbilu.create('IT笔录', 'itbilu.com');
console.log(itbilu.name)
console.log(itbilu.domain)
itbilu.parFunc();

// 上面实现继承还存在一个小小的问题  上面的代码子类的构造器指向了父类，并没有指向自己
console.log(Itbilu.prototype.constructor)  // Site

//  改变构造器
// Itbilu.prototype.constructor = Itbilu;  // 另一种方式，在Object.create里设置constructor
console.log(Itbilu.prototype.constructor)  // Itbilu

/* var o = {a: 1};
console.log(o);
console.log(o.hasOwnProperty('a'));
// console.log(o.__proto__);
console.log(o.hasOwnProperty('toString')); // 为什么不能直接用a.hasOwnProperty('toString')?因为你可能给a添加了一个自定义的hasOwnProperty
console.log(Object.prototype.hasOwnProperty.call(o, 'toString'));

var o1 = Object.create(null, {
  a: {
    writable: false,
    configurable: false,
    value: '1',
    enumerable: false
  }
})
console.log(o1);
// o1.a = 9  // 报错
// console.log(o1);
console.log(Object.keys(o1));  // []
// console.log(o1.hasOwnProperty('a'));  // 报错，没有hasOwnProperty这个属性 */

// 创建的对象和使用{}创建对象已经很相近了，但是还是有一点区别：多了一层__proto__嵌套
/* var o2 = Object.create({},{
  a:{
    writable:true,
    configurable:true,
    value:'1'
  }
})
console.log(o2);
console.log(o2.hasOwnProperty('a'));

var o3 = Object.create(Object.prototype, {
  a:{
    writable:true,
    configurable:true,
    value:'1'
  }
})
console.log(o3);
console.log(o3.hasOwnProperty('a')); */

// 该方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）
// Object.getOwnPropertyDescriptor()
var person = {
  name: '张三',
  age: 18
}
// console.log(Object.getOwnPropertyDescriptor(person))  // undefined
// console.log(Object.getOwnPropertyDescriptor(person, 'name'))  // {value: "张三", writable: true, enumerable: true, configurable: true}

// Object.getOwnPropertyDescriptors()
console.log(Object.getOwnPropertyDescriptors(person))  // 返回所有
console.log(Object.getOwnPropertyDescriptors(person, 'name'))  // 返回所有

/* var ab = 1;
console.log(Object.getOwnPropertyDescriptor(window, ab)); // undefined
console.log(window.ab); */  // undefined











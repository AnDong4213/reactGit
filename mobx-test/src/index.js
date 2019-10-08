/* function Animal() {}
function Dog() {}

Object.defineProperties(Animal.prototype, {
  name: {
    value() {
      return 'Animal'
    }
  },
  say: {
    value() {
      return `I'm ${this.name()}`
    }
  }
})

Dog.prototype = Object.create(Animal.prototype, {
  constructor: {
    value: Dog,
    enumerable: false
  },
  name: {
    value() {
      return 'Dog'
    }
  }
})
// Dog.prototype = Object.create(Animal.prototype)

document.write(new Dog().say())
console.log(Dog.prototype.constructor) */

/* class Animal {
  a = '111'
  name() {
    return 'Animal'
  }
  say() {
    return `I'm ${this.name()}`
  }
}
class Dog extends Animal {
  food = 'bond';
  drink = 'water';

  name() {
    return 'Dog'
  }
}
console.log(new Dog() instanceof Animal)  // true
console.log(new Dog()) */   // Dog {a: "111", food: "bond", drink: "water"}


/* 
  修饰器 基本上，装饰器的行为就是下面这样。
  装饰器是一个对类进行处理的函数。装饰器函数的第一个参数，就是所要装饰的目标类。

  @decorator
  class A {}
  // 等同于
  class A {}
  A = decorator(A) || A;

*/


/* @log
class Numberic {
  PI = 3.1415925;

  add(...num) {
    return num.reduce((p, n) => (p + n), 0)
  }
} */


@testable
class MyTestableClass {
  add(...num) {
    return num.reduce((p, n) => (p + n), 0)
  }
}
function testable(target) {
  console.log(Object.getOwnPropertyDescriptors(target.prototype))
  target.isTestable = true;
}
console.log(MyTestableClass.isTestable)


/* class Math {
  @log
  add(a, b) {
    return a + b;
  }
}
function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

// passed parameters should get logged now
new Math().add(2, 4); */





























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

function log(target) {
  const desc = Object.getOwnPropertyDescriptors(target.prototype)

  // console.log(Object.keys(desc))  //  ["constructor", "add"]
  for (const key of Object.keys(desc)) {
    if (key === 'constructor') {
      continue
    }
    const func = desc[key].value

    if ('function' === typeof func) {
      Object.defineProperty(target.prototype, key, {
        value(...args) {
          console.log('before ' + key)
          const ret = func.apply(this, args)
          console.log('after ' + key)

          // console.log(ret)  // 13
          return ret
        }
      })
    }
  }
  
}
function readonly(target, key, descriptor) {
  descriptor.writable = false
}
function validate(target, key, descriptor) {
  const func = descriptor.value
  descriptor.value = function(...args) {
    for (let num of args) {
      if ('number' !== typeof num) {
        throw new Error(`${num} is not a number`)
      }
    }
    return func.apply(this, args)
  }
}
@log
class Numberic {
  @readonly PI = 3.1415925;

  @validate
  add(...num) {
    return num.reduce((p, n) => (p + n), 10)
  }
}
// console.log(new Numberic().add(1, 2));  //  13
new Numberic().add(1, 'u')



/* function testable(target) {
  console.log(Object.getOwnPropertyDescriptors(target.prototype))
  target.isTestable = true;
}
@testable
class MyTestableClass {
  add(...num) {
    return num.reduce((p, n) => (p + n), 0)
  }
}
console.log(MyTestableClass.isTestable) */  // true
// 上面代码中，testable函数的参数target，就是会被装饰的类。


// 如果觉得一个参数不够用，可以在装饰器外面再封装一层函数
/* function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}
@testable(99)
class MyTestableClass {}
console.log(MyTestableClass.isTestable) */ // 99
// 装饰器testable可以接受参数，这就等于可以修改装饰器的行为。


// 装饰器不仅可以装饰类，还可以装饰类的属性。
/* class Math {
  @log
  add(a, b) {
    return a + b;
  }
}
function log(target, name, descriptor) {
  console.log(descriptor)

  var oldValue = descriptor.value;
  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    console.log(this)
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}
new Math().add(2, 4) */
// 装饰器第一个参数是类的原型对象，上例是Person.prototype，装饰器的本意是要“装饰”类的实例，但是这个时候实例还没生成，所以只能去装饰原型（这不同于类的装饰，那种情况时target参数指的是类本身）；第二个参数是所要装饰的属性名，第三个参数是该属性的描述对象





























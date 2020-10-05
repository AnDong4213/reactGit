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
console.log(new Dog().a) */

var bObj = {
  name: 'bbb',
  age: 24,
  func: function() {
    return 9
  }
}
let bObj2 = Object.getOwnPropertyDescriptors(bObj)
console.log(bObj2)
console.log(Object.keys(bObj2))
for (const key in bObj2) {
  // console.log(key)
  console.log(typeof bObj2[key].value === 'function')
}

function log(target) {
  const desc = Object.getOwnPropertyDescriptors(target.prototype);

  for (const key of Object.keys(desc)) {
    if (key === 'constructor') {
      continue
    }

    const func = desc[key].value;
    if (typeof func === 'function') {
      Object.defineProperty(target.prototype, key, {
        value(...args) {
          console.log('before ' + key);
          const ret = func.apply(this, args);
          console.log('after ' + key);

          return ret;
        }
      })
    }
  }
}

function readonly(target, key, descriptor) {
  // console.log('target', target)
  // console.log('key', key)
  // console.log('descriptor', descriptor)
  descriptor.writable = false
}

function validate(target, key, descriptor) {
  console.log('target', target)
  console.log('key', key)
  console.log('descriptor', descriptor)
  const func = descriptor.value;
  
  descriptor.value = function(...args) {
    for (let val of args) {
      if (typeof val !== 'number') {
        throw new Error(`'${val}' is not a number`)
      }
    }
    return func.apply(this, args)
  }
}

@log
class Numberic {
  @readonly PI = 3.1415

  @validate
  add(...nums) {
    return nums.reduce((p, n) => (p + n), 0)
  }

  minus(...nums) {
    return nums.reduce((p, n) => (p - n), 10)
  }
}

const numInstance = new Numberic();
console.log(numInstance.add(1, 3))
// console.log(numInstance.minus(1, 2))
// numInstance.PI = 99  // Cannot assign to read only property













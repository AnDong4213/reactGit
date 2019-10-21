import {  observable, isArrayLike, computed } from 'mobx'

// array
/* const arr = observable(['a', 'b', 'c'])
console.log(arr, Array.isArray(arr), isArrayLike(arr)); */ // true true

// obj
/* const obj = observable({a: 1, b: 2})
console.log(obj.a) */  //  1
// extendObservable()  新增的属性的观察

// map
/* const map = observable(new Map())
map.set('a', 1)
console.log(map.has('a'))
map.delete('a')
console.log(map.has('a')) */

/* let num = observable.box(20)
let str = observable.box('hello')
let bool = observable.box(true)
str.set('world')
console.log(num.get())
console.log(str.get())
console.log(bool) */


class Store {
  @observable array = []
  @observable obj = {}
  @observable map = new Map()

  @observable string = 'hello'
  @observable number = 20
  @observable bool = false
}

let store = new Store()
let foo = computed(() => {
  return store.string + '/' + store.number
})
foo.observe(change => {
  console.log(change)
})

// console.log(foo.get())


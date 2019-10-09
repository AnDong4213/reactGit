import {  observable, isArrayLike } from 'mobx'

// array
/* const arr = observable(['a', 'b', 'c'])
console.log(arr, Array.isArray(arr), isArrayLike(arr)); */ // true true

// obj
const obj = observable({a: 1, b: 2})
console.log(obj.a)  //  1
// extendObservable()  新增的属性的观察

// map
const map = observable(new Map())
map.set('a', 1)
console.log(map.has('a'))
map.delete('a')
console.log(map.has('a'))


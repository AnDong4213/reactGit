/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/09_30.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/09_30.js":
/*!**********************!*\
  !*** ./src/09_30.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

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
  func: function func() {
    return 9;
  }
};
var bObj2 = Object.getOwnPropertyDescriptors(bObj);
console.log(bObj2);
console.log(Object.keys(bObj2));
for (var key in bObj2) {
  // console.log(key)
  console.log(typeof bObj2[key].value === 'function');
}

function log(target) {
  var desc = Object.getOwnPropertyDescriptors(target.prototype);

  var _loop = function _loop(_key) {
    if (_key === 'constructor') {
      return 'continue';
    }

    var func = desc[_key].value;
    if (typeof func === 'function') {
      Object.defineProperty(target.prototype, _key, {
        value: function value() {
          console.log('before ' + _key);

          for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var ret = func.apply(this, args);
          console.log('after ' + _key);

          return ret;
        }
      });
    }
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(desc)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _key = _step.value;

      var _ret = _loop(_key);

      if (_ret === 'continue') continue;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function readonly(target, key, descriptor) {
  // console.log('target', target)
  // console.log('key', key)
  // console.log('descriptor', descriptor)
  descriptor.writable = false;
}

function validate(target, key, descriptor) {
  console.log('target', target);
  console.log('key', key);
  console.log('descriptor', descriptor);
  var func = descriptor.value;

  descriptor.value = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var val = _step2.value;

        if (typeof val !== 'number') {
          throw new Error('\'' + val + '\' is not a number');
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return func.apply(this, args);
  };
}

var Numberic = log(_class = (_class2 = function () {
  function Numberic() {
    _classCallCheck(this, Numberic);

    _initDefineProp(this, 'PI', _descriptor, this);
  }

  _createClass(Numberic, [{
    key: 'add',
    value: function add() {
      for (var _len3 = arguments.length, nums = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        nums[_key4] = arguments[_key4];
      }

      return nums.reduce(function (p, n) {
        return p + n;
      }, 0);
    }
  }, {
    key: 'minus',
    value: function minus() {
      for (var _len4 = arguments.length, nums = Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
        nums[_key5] = arguments[_key5];
      }

      return nums.reduce(function (p, n) {
        return p - n;
      }, 10);
    }
  }]);

  return Numberic;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'PI', [readonly], {
  enumerable: true,
  initializer: function initializer() {
    return 3.1415;
  }
}), _applyDecoratedDescriptor(_class2.prototype, 'add', [validate], Object.getOwnPropertyDescriptor(_class2.prototype, 'add'), _class2.prototype)), _class2)) || _class;

var numInstance = new Numberic();
console.log(numInstance.add(1, 3));
// console.log(numInstance.minus(1, 2))
// numInstance.PI = 99  // Cannot assign to read only property

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzA5XzMwLmpzIl0sIm5hbWVzIjpbImJPYmoiLCJuYW1lIiwiYWdlIiwiZnVuYyIsImJPYmoyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImNvbnNvbGUiLCJsb2ciLCJrZXlzIiwia2V5IiwidmFsdWUiLCJ0YXJnZXQiLCJkZXNjIiwicHJvdG90eXBlIiwiZGVmaW5lUHJvcGVydHkiLCJhcmdzIiwicmV0IiwiYXBwbHkiLCJyZWFkb25seSIsImRlc2NyaXB0b3IiLCJ3cml0YWJsZSIsInZhbGlkYXRlIiwidmFsIiwiRXJyb3IiLCJOdW1iZXJpYyIsIm51bXMiLCJyZWR1Y2UiLCJwIiwibiIsIm51bUluc3RhbmNlIiwiYWRkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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R0tTLFEsR0FETGpCLEc7Ozs7Ozs7OzswQkFLYztBQUFBLHlDQUFOa0IsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ1gsYUFBT0EsS0FBS0MsTUFBTCxDQUFZLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVdELElBQUlDLENBQWY7QUFBQSxPQUFaLEVBQStCLENBQS9CLENBQVA7QUFDRDs7OzRCQUVjO0FBQUEseUNBQU5ILElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNiLGFBQU9BLEtBQUtDLE1BQUwsQ0FBWSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFXRCxJQUFJQyxDQUFmO0FBQUEsT0FBWixFQUErQixFQUEvQixDQUFQO0FBQ0Q7Ozs7d0VBVEFWLFE7OztXQUFjLE07O3lEQUVkRyxROztBQVVILElBQU1RLGNBQWMsSUFBSUwsUUFBSixFQUFwQjtBQUNBbEIsUUFBUUMsR0FBUixDQUFZc0IsWUFBWUMsR0FBWixDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFaO0FBQ0E7QUFDQSw4RCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvMDlfMzAuanNcIik7XG4iLCIvKiBjbGFzcyBBbmltYWwge1xyXG4gIGEgPSAnMTExJ1xyXG4gIG5hbWUoKSB7XHJcbiAgICByZXR1cm4gJ0FuaW1hbCdcclxuICB9XHJcbiAgc2F5KCkge1xyXG4gICAgcmV0dXJuIGBJJ20gJHt0aGlzLm5hbWUoKX1gXHJcbiAgfVxyXG59XHJcbmNsYXNzIERvZyBleHRlbmRzIEFuaW1hbCB7XHJcbiAgZm9vZCA9ICdib25kJztcclxuICBkcmluayA9ICd3YXRlcic7XHJcblxyXG4gIG5hbWUoKSB7XHJcbiAgICByZXR1cm4gJ0RvZydcclxuICB9XHJcbn1cclxuY29uc29sZS5sb2cobmV3IERvZygpIGluc3RhbmNlb2YgQW5pbWFsKSAgLy8gdHJ1ZVxyXG5jb25zb2xlLmxvZyhuZXcgRG9nKCkuYSkgKi9cclxuXHJcbnZhciBiT2JqID0ge1xyXG4gIG5hbWU6ICdiYmInLFxyXG4gIGFnZTogMjQsXHJcbiAgZnVuYzogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gOVxyXG4gIH1cclxufVxyXG5sZXQgYk9iajIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhiT2JqKVxyXG5jb25zb2xlLmxvZyhiT2JqMilcclxuY29uc29sZS5sb2coT2JqZWN0LmtleXMoYk9iajIpKVxyXG5mb3IgKGNvbnN0IGtleSBpbiBiT2JqMikge1xyXG4gIC8vIGNvbnNvbGUubG9nKGtleSlcclxuICBjb25zb2xlLmxvZyh0eXBlb2YgYk9iajJba2V5XS52YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nKHRhcmdldCkge1xyXG4gIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0YXJnZXQucHJvdG90eXBlKTtcclxuXHJcbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGVzYykpIHtcclxuICAgIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicpIHtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmdW5jID0gZGVzY1trZXldLnZhbHVlO1xyXG4gICAgaWYgKHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQucHJvdG90eXBlLCBrZXksIHtcclxuICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlICcgKyBrZXkpO1xyXG4gICAgICAgICAgY29uc3QgcmV0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciAnICsga2V5KTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRvbmx5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XHJcbiAgLy8gY29uc29sZS5sb2coJ3RhcmdldCcsIHRhcmdldClcclxuICAvLyBjb25zb2xlLmxvZygna2V5Jywga2V5KVxyXG4gIC8vIGNvbnNvbGUubG9nKCdkZXNjcmlwdG9yJywgZGVzY3JpcHRvcilcclxuICBkZXNjcmlwdG9yLndyaXRhYmxlID0gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGUodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcclxuICBjb25zb2xlLmxvZygndGFyZ2V0JywgdGFyZ2V0KVxyXG4gIGNvbnNvbGUubG9nKCdrZXknLCBrZXkpXHJcbiAgY29uc29sZS5sb2coJ2Rlc2NyaXB0b3InLCBkZXNjcmlwdG9yKVxyXG4gIGNvbnN0IGZ1bmMgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gIFxyXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiguLi5hcmdzKSB7XHJcbiAgICBmb3IgKGxldCB2YWwgb2YgYXJncykge1xyXG4gICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ251bWJlcicpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke3ZhbH0nIGlzIG5vdCBhIG51bWJlcmApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpXHJcbiAgfVxyXG59XHJcblxyXG5AbG9nXHJcbmNsYXNzIE51bWJlcmljIHtcclxuICBAcmVhZG9ubHkgUEkgPSAzLjE0MTVcclxuXHJcbiAgQHZhbGlkYXRlXHJcbiAgYWRkKC4uLm51bXMpIHtcclxuICAgIHJldHVybiBudW1zLnJlZHVjZSgocCwgbikgPT4gKHAgKyBuKSwgMClcclxuICB9XHJcblxyXG4gIG1pbnVzKC4uLm51bXMpIHtcclxuICAgIHJldHVybiBudW1zLnJlZHVjZSgocCwgbikgPT4gKHAgLSBuKSwgMTApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBudW1JbnN0YW5jZSA9IG5ldyBOdW1iZXJpYygpO1xyXG5jb25zb2xlLmxvZyhudW1JbnN0YW5jZS5hZGQoMSwgMykpXHJcbi8vIGNvbnNvbGUubG9nKG51bUluc3RhbmNlLm1pbnVzKDEsIDIpKVxyXG4vLyBudW1JbnN0YW5jZS5QSSA9IDk5ICAvLyBDYW5ub3QgYXNzaWduIHRvIHJlYWQgb25seSBwcm9wZXJ0eVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
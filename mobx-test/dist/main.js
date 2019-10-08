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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyTestableClass = testable(_class = function () {
  function MyTestableClass() {
    _classCallCheck(this, MyTestableClass);
  }

  _createClass(MyTestableClass, [{
    key: "add",
    value: function add() {
      for (var _len = arguments.length, num = Array(_len), _key = 0; _key < _len; _key++) {
        num[_key] = arguments[_key];
      }

      return num.reduce(function (p, n) {
        return p + n;
      }, 0);
    }
  }]);

  return MyTestableClass;
}()) || _class;

function testable(target) {
  console.log(Object.getOwnPropertyDescriptors(target.prototype));
  target.isTestable = true;
}
console.log(MyTestableClass.isTestable);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15VGVzdGFibGVDbGFzcyIsInRlc3RhYmxlIiwibnVtIiwicmVkdWNlIiwicCIsIm4iLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsInByb3RvdHlwZSIsImlzVGVzdGFibGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0xNQSxlLEdBRExDLFE7Ozs7Ozs7MEJBRWE7QUFBQSx3Q0FBTEMsR0FBSztBQUFMQSxXQUFLO0FBQUE7O0FBQ1YsYUFBT0EsSUFBSUMsTUFBSixDQUFXLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVdELElBQUlDLENBQWY7QUFBQSxPQUFYLEVBQThCLENBQTlCLENBQVA7QUFDRDs7Ozs7O0FBRUgsU0FBU0osUUFBVCxDQUFrQkssTUFBbEIsRUFBMEI7QUFDeEJDLFVBQVFDLEdBQVIsQ0FBWUMsT0FBT0MseUJBQVAsQ0FBaUNKLE9BQU9LLFNBQXhDLENBQVo7QUFDQUwsU0FBT00sVUFBUCxHQUFvQixJQUFwQjtBQUNEO0FBQ0RMLFFBQVFDLEdBQVIsQ0FBWVIsZ0JBQWdCWSxVQUE1Qjs7QUFHQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiBmdW5jdGlvbiBBbmltYWwoKSB7fVxyXG5mdW5jdGlvbiBEb2coKSB7fVxyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQW5pbWFsLnByb3RvdHlwZSwge1xyXG4gIG5hbWU6IHtcclxuICAgIHZhbHVlKCkge1xyXG4gICAgICByZXR1cm4gJ0FuaW1hbCdcclxuICAgIH1cclxuICB9LFxyXG4gIHNheToge1xyXG4gICAgdmFsdWUoKSB7XHJcbiAgICAgIHJldHVybiBgSSdtICR7dGhpcy5uYW1lKCl9YFxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbkRvZy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFuaW1hbC5wcm90b3R5cGUsIHtcclxuICBjb25zdHJ1Y3Rvcjoge1xyXG4gICAgdmFsdWU6IERvZyxcclxuICAgIGVudW1lcmFibGU6IGZhbHNlXHJcbiAgfSxcclxuICBuYW1lOiB7XHJcbiAgICB2YWx1ZSgpIHtcclxuICAgICAgcmV0dXJuICdEb2cnXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4vLyBEb2cucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShBbmltYWwucHJvdG90eXBlKVxyXG5cclxuZG9jdW1lbnQud3JpdGUobmV3IERvZygpLnNheSgpKVxyXG5jb25zb2xlLmxvZyhEb2cucHJvdG90eXBlLmNvbnN0cnVjdG9yKSAqL1xyXG5cclxuLyogY2xhc3MgQW5pbWFsIHtcclxuICBhID0gJzExMSdcclxuICBuYW1lKCkge1xyXG4gICAgcmV0dXJuICdBbmltYWwnXHJcbiAgfVxyXG4gIHNheSgpIHtcclxuICAgIHJldHVybiBgSSdtICR7dGhpcy5uYW1lKCl9YFxyXG4gIH1cclxufVxyXG5jbGFzcyBEb2cgZXh0ZW5kcyBBbmltYWwge1xyXG4gIGZvb2QgPSAnYm9uZCc7XHJcbiAgZHJpbmsgPSAnd2F0ZXInO1xyXG5cclxuICBuYW1lKCkge1xyXG4gICAgcmV0dXJuICdEb2cnXHJcbiAgfVxyXG59XHJcbmNvbnNvbGUubG9nKG5ldyBEb2coKSBpbnN0YW5jZW9mIEFuaW1hbCkgIC8vIHRydWVcclxuY29uc29sZS5sb2cobmV3IERvZygpKSAqLyAgIC8vIERvZ8Kge2E6IFwiMTExXCIsIGZvb2Q6IFwiYm9uZFwiLCBkcmluazogXCJ3YXRlclwifVxyXG5cclxuXHJcbi8qIFxyXG4gIOS/rumlsOWZqCDln7rmnKzkuIrvvIzoo4XppbDlmajnmoTooYzkuLrlsLHmmK/kuIvpnaLov5nmoLfjgIJcclxuICDoo4XppbDlmajmmK/kuIDkuKrlr7nnsbvov5vooYzlpITnkIbnmoTlh73mlbDjgILoo4XppbDlmajlh73mlbDnmoTnrKzkuIDkuKrlj4LmlbDvvIzlsLHmmK/miYDopoHoo4XppbDnmoTnm67moIfnsbvjgIJcclxuXHJcbiAgQGRlY29yYXRvclxyXG4gIGNsYXNzIEEge31cclxuICAvLyDnrYnlkIzkuo5cclxuICBjbGFzcyBBIHt9XHJcbiAgQSA9IGRlY29yYXRvcihBKSB8fCBBO1xyXG5cclxuKi9cclxuXHJcblxyXG4vKiBAbG9nXHJcbmNsYXNzIE51bWJlcmljIHtcclxuICBQSSA9IDMuMTQxNTkyNTtcclxuXHJcbiAgYWRkKC4uLm51bSkge1xyXG4gICAgcmV0dXJuIG51bS5yZWR1Y2UoKHAsIG4pID0+IChwICsgbiksIDApXHJcbiAgfVxyXG59ICovXHJcblxyXG5cclxuQHRlc3RhYmxlXHJcbmNsYXNzIE15VGVzdGFibGVDbGFzcyB7XHJcbiAgYWRkKC4uLm51bSkge1xyXG4gICAgcmV0dXJuIG51bS5yZWR1Y2UoKHAsIG4pID0+IChwICsgbiksIDApXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRlc3RhYmxlKHRhcmdldCkge1xyXG4gIGNvbnNvbGUubG9nKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldC5wcm90b3R5cGUpKVxyXG4gIHRhcmdldC5pc1Rlc3RhYmxlID0gdHJ1ZTtcclxufVxyXG5jb25zb2xlLmxvZyhNeVRlc3RhYmxlQ2xhc3MuaXNUZXN0YWJsZSlcclxuXHJcblxyXG4vKiBjbGFzcyBNYXRoIHtcclxuICBAbG9nXHJcbiAgYWRkKGEsIGIpIHtcclxuICAgIHJldHVybiBhICsgYjtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbG9nKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xyXG4gIHZhciBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XHJcblxyXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKGBDYWxsaW5nICR7bmFtZX0gd2l0aGAsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gb2xkVmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGVzY3JpcHRvcjtcclxufVxyXG5cclxuLy8gcGFzc2VkIHBhcmFtZXRlcnMgc2hvdWxkIGdldCBsb2dnZWQgbm93XHJcbm5ldyBNYXRoKCkuYWRkKDIsIDQpOyAqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
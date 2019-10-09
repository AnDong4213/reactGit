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

/***/ "./node_modules/mobx/lib/mobx.module.js":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: $mobx, IDerivationState, ObservableMap, ObservableSet, Reaction, _allowStateChanges, _allowStateChangesInsideComputed, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, action, autorun, comparer, computed, configure, createAtom, decorate, entries, extendObservable, flow, get, getAtom, getDebugName, getDependencyTree, getObserverTree, has, intercept, isAction, isArrayLike, isBoxedObservable, isComputed, isComputedProp, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, observable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, reaction, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableSet", function() { return ObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_endAction", function() { return _endAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_startAction", function() { return _startAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableSet", function() { return isObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/** MobX - (c) Michel Weststrate 2015 - 2019 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if ( true && !isPropertyConfigurable(object, prop))
        fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    return thing instanceof Map;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */
function getPlainObjectKeys(object) {
    var enumerables = new Set();
    for (var key in object)
        enumerables.add(key); // *all* enumerables
    Object.getOwnPropertySymbols(object).forEach(function (k) {
        if (Object.getOwnPropertyDescriptor(object, k).enumerable)
            enumerables.add(k);
    }); // *own* symbols
    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
    // as there is no efficient iterator that returns *all* properties
    return Array.from(enumerables);
}
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
function getMapLikeKeys(map) {
    if (isPlainObject(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map(map) || isObservableMap(map))
        return Array.from(map.keys());
    return fail("Cannot get keys from '" + map + "'");
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx = Symbol("mobx administration");
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
        onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    if (target[mobxDidRunLazyInitializersSymbol] === true)
        return;
    var decorators = target[mobxPendingDecorators];
    if (decorators) {
        addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator(arguments))
                fail("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
                var inheritedDecorators = target[mobxPendingDecorators];
                addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail( true &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if ( true && isObservable(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (true) {
        if (typeof thing !== "object")
            return fail("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail( true &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        if (o.proxy === false) {
            return extendObservable({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
            var base = extendObservable({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject(base);
            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject(instance).addComputedProp(instance, propertyName, __assign({ get: get,
        set: set, context: instance }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail( true &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail( true &&
            (globalState.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
function checkIfStateReadsAreAllowed(observable) {
    if ( true &&
        !globalState.allowStateReads &&
        globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (false)
        {}
    if (derivation.observing.length !== 0)
        return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    }
    finally {
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

function createAction(actionName, fn, ref) {
    if (true) {
        invariant(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy && "development" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: globalState.nextActionId++,
        parentActionId: globalState.currentActionId
    };
    globalState.currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (globalState.currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    globalState.currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy && "development" !== "production") {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState.computationDepth = prev;
    }
    return res;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled() && "development" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy && "development" !== "production") {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ObservableValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom));
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        if ( true && !options.get)
            throw "[mobx] missing option for computed: get";
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false,  true &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled() && "development" !== "production") {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue;
}());
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
        /*
         * Current action id.
         */
        this.currentActionId = 0;
        /*
         * Next action id.
         */
        this.nextActionId = 1;
    }
    return MobXGlobals;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    return mockGlobal;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.size > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers.add(node);
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers.delete(node);
    if (observable.observers.size === 0) {
        // deleting last observer
        queueForUnobservation(observable);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.size === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.size === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled() &&
                        "development" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        if (this.isDisposed) {
            return;
            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify && "development" !== "production") {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "development" !== "production") {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx] = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (false)
        {} // dead code elimination can do the rest
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    if (false)
        {}
    var change = __assign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (false)
        {}
    if (change)
        spyReport(__assign({}, change, { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    if (false) {}
    else {
        globalState.spyListeners.push(listener);
        return once(function () {
            globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail( true && "@action fields are not reassignable");
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof view === "function", "Autorun expects a function as first argument");
        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof expression === "function", "First argument to reaction should be a function");
        invariant(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail( true && "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function decorate(thing, decorators) {
     true &&
        invariant(isPlainObject(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
         true &&
            invariant(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable(target, properties, decorators, options) {
    if (true) {
        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
    initializeInstance(target); // Fixes #1740
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
}
function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
    var e_1, _a, e_2, _b;
    if (true) {
        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators) {
            var keys = getPlainObjectKeys(decorators);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    if (!(key in properties))
                        fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    startBatch();
    try {
        var keys = getPlainObjectKeys(properties);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
                if (true) {
                    if (!isPlainObject(properties))
                        fail("'extendObservabe' only accepts plain objects as second argument");
                    if (Object.getOwnPropertyDescriptor(target, key))
                        fail("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + stringifyKey(key) + "' already exists on '" + target + "'");
                    if (isComputed(descriptor.value))
                        fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
                }
                var decorator = decorators && key in decorators
                    ? decorators[key]
                    : descriptor.get
                        ? computedDecorator
                        : defaultDecorator;
                if ( true && typeof decorator !== "function")
                    fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
                var resultDescriptor = decorator(target, key, descriptor, true);
                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
                )
                    Object.defineProperty(target, key, resultDescriptor);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    finally {
        endBatch();
    }
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function flow(generator) {
    if (arguments.length !== 1)
        fail( true && "Flow expects one 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res = gen.return();
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new Error("FLOW_CANCELLED"));
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail( true &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail( true &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value[$mobx].values.has(property))
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail( true &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true &&
            "isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ( true &&
            (isObservableMap(value) || isObservableArray(value)))
            return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            return value[$mobx].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value[$mobx] ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail( true &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj[$mobx].getKeys();
    }
    if (isObservableMap(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail( true &&
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail( true &&
        "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail( true &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj[$mobx];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail( true &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj[$mobx].remove(key);
    }
    else if (isObservableMap(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail( true &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        return adm.has(key);
    }
    else if (isObservableMap(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail( true &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get(obj, key) {
    if (!has(obj, key))
        return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    }
    else if (isObservableMap(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray(obj)) {
        return obj[key];
    }
    else {
        return fail( true &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source))
        keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    getPlainObjectKeys(source).forEach(function (key) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    });
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail( true &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError)
        return fail("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign({}, opts, { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx];
}
function isPropertyKey(val) {
    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (isPropertyKey(name))
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return target[name];
        var adm = getAdm(target);
        var observable = adm.values.get(name);
        if (observable instanceof Atom) {
            var result = observable.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (isPropertyKey(name))
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (!isPropertyKey(name))
            return false;
        set(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (!isPropertyKey(name))
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy = proxy;
    return proxy;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx)
            return target[$mobx];
        if (name === "length")
            return target[$mobx].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx].setArrayLength(value);
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
        }
        if (typeof name === "symbol" || isNaN(name)) {
            target[name] = value;
        }
        else {
            // numeric string
            arrayExtensions.set.call(target, parseInt(name), value);
        }
        return true;
    },
    preventExtensions: function (target) {
        fail("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values, $mobx, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (true) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (true) {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (true) {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx];
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: adm.proxy,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    }
};
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                return nextIndex < keys.length
                    ? { value: self.get(keys[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                if (nextIndex < keys.length) {
                    var key = keys[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var e_1, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other))
                getPlainObjectKeys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other)) {
                if (other.constructor !== Map)
                    fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                other.forEach(function (value, key) { return _this.set(key, value); });
            }
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_2, _a;
                try {
                    for (var _b = __values(_this.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var e_3, _a;
        var res = {};
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_1, _a;
                try {
                    for (var _b = __values(_this._data.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var value = _c.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign({}, change, { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (Array.isArray(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (isES6Set(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (other !== null && other !== undefined) {
                fail("Cannot initialize set from " + other);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet;
}());
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
        if (values === void 0) { values = new Map(); }
        this.target = target;
        this.values = values;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom(name + ".keys");
    }
    ObservableObjectAdministration.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable = this.values.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable(target, propName);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
        this.values.set(propName, observable);
        newValue = observable.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + stringifyKey(propName);
        this.values.set(propName, new ComputedValue(options));
        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx))
        return target[$mobx];
     true &&
        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp(target, $mobx, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx].read(propName);
            },
            set: function (v) {
                this[$mobx].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner[$mobx];
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail( true &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx].atom;
        }
        if (isObservableSet(thing)) {
            return thing[$mobx];
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail( true &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing[$mobx])
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail( true && "please specify a property");
            var observable = thing[$mobx].values.get(property);
            if (!observable)
                fail( true &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
        }
    }
    return fail( true && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing)
        fail("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing[$mobx])
        return thing[$mobx];
    fail( true && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b) {
    return eq(a, b);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    return deepEq(a, b, aStack, bStack);
}
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.slice();
    if (isES6Map(a) || isObservableMap(a))
        return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hoisted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "development";
}
catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production" &&
        process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

// array
/* const arr = observable(['a', 'b', 'c'])
console.log(arr, Array.isArray(arr), isArrayLike(arr)); */ // true true

// obj
var obj = (0, _mobx.observable)({ a: 1, b: 2 });
console.log(obj.a); //  1
// extendObservable()  新增的属性的观察

// map
var map = (0, _mobx.observable)(new Map());
map.set('a', 1);
console.log(map.has('a'));
map.delete('a');
console.log(map.has('a'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vYngvbGliL21vYngubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsib2JqIiwiYSIsImIiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiTWFwIiwic2V0IiwiaGFzIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDLFFBQVEsRUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsbUJBQW1CLEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsbUJBQW1CLEVBQUU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSw2Q0FBNkMsZ0NB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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDLFFBQVEsRUFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSUFBbUksMkJBQTJCO0FBQzlKO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQSxvREFBb0QsOENB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QUFDdkU7QUFDQTtBQUNBLDZDQUE2Qyw0QkFBNEIsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFCQUFxQixFQUFFO0FBQ3JFO0FBQ0EsZ0JBQWdCLEtBQXFDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFxQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQXFDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQXFDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEtBQXFDO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxrREFBa0QsRUFBRTtBQUNyRztBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBcUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxTQUFTLGtCQUFrQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsT0FBTztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQXFDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsUUFBUSxhQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFbThCOzs7Ozs7Ozs7Ozs7O0FDcDZJbjhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7O0FBRUE7QUFDQTsyREFDMkQ7O0FBRTNEO0FBQ0EsSUFBTUEsTUFBTSxzQkFBVyxFQUFDQyxHQUFHLENBQUosRUFBT0MsR0FBRyxDQUFWLEVBQVgsQ0FBWjtBQUNBQyxRQUFRQyxHQUFSLENBQVlKLElBQUlDLENBQWhCLEUsQ0FBb0I7QUFDcEI7O0FBRUE7QUFDQSxJQUFNSSxNQUFNLHNCQUFXLElBQUlDLEdBQUosRUFBWCxDQUFaO0FBQ0FELElBQUlFLEdBQUosQ0FBUSxHQUFSLEVBQWEsQ0FBYjtBQUNBSixRQUFRQyxHQUFSLENBQVlDLElBQUlHLEdBQUosQ0FBUSxHQUFSLENBQVo7QUFDQUgsSUFBSUksTUFBSixDQUFXLEdBQVg7QUFDQU4sUUFBUUMsR0FBUixDQUFZQyxJQUFJRyxHQUFKLENBQVEsR0FBUixDQUFaLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqIE1vYlggLSAoYykgTWljaGVsIFdlc3RzdHJhdGUgMjAxNSAtIDIwMTkgLSBNSVQgTGljZW5zZWQgKi9cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbnZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XG5cbnZhciBPQkZVU0NBVEVEX0VSUk9SID0gXCJBbiBpbnZhcmlhbnQgZmFpbGVkLCBob3dldmVyIHRoZSBlcnJvciBpcyBvYmZ1c2NhdGVkIGJlY2F1c2UgdGhpcyBpcyBhbiBwcm9kdWN0aW9uIGJ1aWxkLlwiO1xudmFyIEVNUFRZX0FSUkFZID0gW107XG5PYmplY3QuZnJlZXplKEVNUFRZX0FSUkFZKTtcbnZhciBFTVBUWV9PQkpFQ1QgPSB7fTtcbk9iamVjdC5mcmVlemUoRU1QVFlfT0JKRUNUKTtcbmZ1bmN0aW9uIGdldE5leHRJZCgpIHtcbiAgICByZXR1cm4gKytnbG9iYWxTdGF0ZS5tb2J4R3VpZDtcbn1cbmZ1bmN0aW9uIGZhaWwobWVzc2FnZSkge1xuICAgIGludmFyaWFudChmYWxzZSwgbWVzc2FnZSk7XG4gICAgdGhyb3cgXCJYXCI7IC8vIHVucmVhY2hhYmxlXG59XG5mdW5jdGlvbiBpbnZhcmlhbnQoY2hlY2ssIG1lc3NhZ2UpIHtcbiAgICBpZiAoIWNoZWNrKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gXCIgKyAobWVzc2FnZSB8fCBPQkZVU0NBVEVEX0VSUk9SKSk7XG59XG4vKipcbiAqIFByaW50cyBhIGRlcHJlY2F0aW9uIG1lc3NhZ2UsIGJ1dCBvbmx5IG9uZSB0aW1lLlxuICogUmV0dXJucyBmYWxzZSBpZiB0aGUgZGVwcmVjYXRlZCBtZXNzYWdlIHdhcyBhbHJlYWR5IHByaW50ZWQgYmVmb3JlXG4gKi9cbnZhciBkZXByZWNhdGVkTWVzc2FnZXMgPSBbXTtcbmZ1bmN0aW9uIGRlcHJlY2F0ZWQobXNnLCB0aGluZykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpbmcpIHtcbiAgICAgICAgcmV0dXJuIGRlcHJlY2F0ZWQoXCInXCIgKyBtc2cgKyBcIicsIHVzZSAnXCIgKyB0aGluZyArIFwiJyBpbnN0ZWFkLlwiKTtcbiAgICB9XG4gICAgaWYgKGRlcHJlY2F0ZWRNZXNzYWdlcy5pbmRleE9mKG1zZykgIT09IC0xKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVwcmVjYXRlZE1lc3NhZ2VzLnB1c2gobXNnKTtcbiAgICBjb25zb2xlLmVycm9yKFwiW21vYnhdIERlcHJlY2F0ZWQ6IFwiICsgbXNnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogTWFrZXMgc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbiBpcyBpbnZva2VkIGF0IG1vc3Qgb25jZS5cbiAqL1xuZnVuY3Rpb24gb25jZShmdW5jKSB7XG4gICAgdmFyIGludm9rZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW52b2tlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW52b2tlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xuZnVuY3Rpb24gdW5pcXVlKGxpc3QpIHtcbiAgICB2YXIgcmVzID0gW107XG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChyZXMuaW5kZXhPZihpdGVtKSA9PT0gLTEpXG4gICAgICAgICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xufVxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICAgIHJldHVybiBwcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBwcm90byA9PT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGFkZEhpZGRlblByb3Aob2JqZWN0LCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRIaWRkZW5GaW5hbFByb3Aob2JqZWN0LCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wKTtcbiAgICByZXR1cm4gIWRlc2NyaXB0b3IgfHwgKGRlc2NyaXB0b3IuY29uZmlndXJhYmxlICE9PSBmYWxzZSAmJiBkZXNjcmlwdG9yLndyaXRhYmxlICE9PSBmYWxzZSk7XG59XG5mdW5jdGlvbiBhc3NlcnRQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc1Byb3BlcnR5Q29uZmlndXJhYmxlKG9iamVjdCwgcHJvcCkpXG4gICAgICAgIGZhaWwoXCJDYW5ub3QgbWFrZSBwcm9wZXJ0eSAnXCIgKyBwcm9wLnRvU3RyaW5nKCkgKyBcIicgb2JzZXJ2YWJsZSwgaXQgaXMgbm90IGNvbmZpZ3VyYWJsZSBhbmQgd3JpdGFibGUgaW4gdGhlIHRhcmdldCBvYmplY3RcIik7XG59XG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKG5hbWUsIGNsYXp6KSB7XG4gICAgdmFyIHByb3BOYW1lID0gXCJpc01vYlhcIiArIG5hbWU7XG4gICAgY2xhenoucHJvdG90eXBlW3Byb3BOYW1lXSA9IHRydWU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBpc09iamVjdCh4KSAmJiB4W3Byb3BOYW1lXSA9PT0gdHJ1ZTtcbiAgICB9O1xufVxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGFyZ3VtZW50IGlzIGFuIGFycmF5LCBkaXNyZWdhcmRpbmcgb2JzZXJ2YWJpbGl0eS5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UoeCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHgpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHgpO1xufVxuZnVuY3Rpb24gaXNFUzZNYXAodGhpbmcpIHtcbiAgICByZXR1cm4gdGhpbmcgaW5zdGFuY2VvZiBNYXA7XG59XG5mdW5jdGlvbiBpc0VTNlNldCh0aGluZykge1xuICAgIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIFNldDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZm9sbG93aW5nOiBvd24ga2V5cywgcHJvdG90eXBlIGtleXMgJiBvd24gc3ltYm9sIGtleXMsIGlmIHRoZXkgYXJlIGVudW1lcmFibGUuXG4gKi9cbmZ1bmN0aW9uIGdldFBsYWluT2JqZWN0S2V5cyhvYmplY3QpIHtcbiAgICB2YXIgZW51bWVyYWJsZXMgPSBuZXcgU2V0KCk7XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdClcbiAgICAgICAgZW51bWVyYWJsZXMuYWRkKGtleSk7IC8vICphbGwqIGVudW1lcmFibGVzXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrKS5lbnVtZXJhYmxlKVxuICAgICAgICAgICAgZW51bWVyYWJsZXMuYWRkKGspO1xuICAgIH0pOyAvLyAqb3duKiBzeW1ib2xzXG4gICAgLy8gTm90ZTogdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBtaXNzaW5nIGVudW1lcmFibGUsIGluaGVyaXRlZCwgc3ltYm9saWMgcHJvcGVydHkgbmFtZXMhIFRoYXQgd291bGQgaG93ZXZlciBwcmV0dHkgZXhwZW5zaXZlIHRvIGFkZCxcbiAgICAvLyBhcyB0aGVyZSBpcyBubyBlZmZpY2llbnQgaXRlcmF0b3IgdGhhdCByZXR1cm5zICphbGwqIHByb3BlcnRpZXNcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbnVtZXJhYmxlcyk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnlLZXkoa2V5KSB7XG4gICAgaWYgKGtleSAmJiBrZXkudG9TdHJpbmcpXG4gICAgICAgIHJldHVybiBrZXkudG9TdHJpbmcoKTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nKGtleSkudG9TdHJpbmcoKTtcbn1cbmZ1bmN0aW9uIGdldE1hcExpa2VLZXlzKG1hcCkge1xuICAgIGlmIChpc1BsYWluT2JqZWN0KG1hcCkpXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcCkpXG4gICAgICAgIHJldHVybiBtYXAubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKF9hLCAxKSwga2V5ID0gX2JbMF07XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9KTtcbiAgICBpZiAoaXNFUzZNYXAobWFwKSB8fCBpc09ic2VydmFibGVNYXAobWFwKSlcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20obWFwLmtleXMoKSk7XG4gICAgcmV0dXJuIGZhaWwoXCJDYW5ub3QgZ2V0IGtleXMgZnJvbSAnXCIgKyBtYXAgKyBcIidcIik7XG59XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBcIlwiICsgdmFsdWUgOiB2YWx1ZTtcbn1cblxudmFyICRtb2J4ID0gU3ltYm9sKFwibW9ieCBhZG1pbmlzdHJhdGlvblwiKTtcbnZhciBBdG9tID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBhdG9tLiBGb3IgZGVidWdnaW5nIHB1cnBvc2VzIGl0IGlzIHJlY29tbWVuZGVkIHRvIGdpdmUgaXQgYSBuYW1lLlxuICAgICAqIFRoZSBvbkJlY29tZU9ic2VydmVkIGFuZCBvbkJlY29tZVVub2JzZXJ2ZWQgY2FsbGJhY2tzIGNhbiBiZSB1c2VkIGZvciByZXNvdXJjZSBtYW5hZ2VtZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEF0b20obmFtZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIkF0b21AXCIgKyBnZXROZXh0SWQoKTsgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSBmYWxzZTsgLy8gZm9yIGVmZmVjdGl2ZSB1bm9ic2VydmluZy4gQmFzZUF0b20gaGFzIHRydWUsIGZvciBleHRyYSBvcHRpbWl6YXRpb24sIHNvIGl0cyBvbkJlY29tZVVub2JzZXJ2ZWQgbmV2ZXIgZ2V0cyBjYWxsZWQsIGJlY2F1c2UgaXQncyBub3QgbmVlZGVkXG4gICAgICAgIHRoaXMuaXNCZWluZ09ic2VydmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmRpZmZWYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdEFjY2Vzc2VkQnkgPSAwO1xuICAgICAgICB0aGlzLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcbiAgICB9XG4gICAgQXRvbS5wcm90b3R5cGUub25CZWNvbWVPYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25CZWNvbWVPYnNlcnZlZExpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5vbkJlY29tZU9ic2VydmVkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBsaXN0ZW5lcigpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXRvbS5wcm90b3R5cGUub25CZWNvbWVVbm9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMub25CZWNvbWVVbm9ic2VydmVkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBsaXN0ZW5lcigpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIG5vdGlmeSBtb2J4IHRoYXQgeW91ciBhdG9tIGhhcyBiZWVuIHVzZWQgc29tZWhvdy5cbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgY3VycmVudGx5IGEgcmVhY3RpdmUgY29udGV4dC5cbiAgICAgKi9cbiAgICBBdG9tLnByb3RvdHlwZS5yZXBvcnRPYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIF9hZnRlcl8gdGhpcyBtZXRob2QgaGFzIGNoYW5nZWQgdG8gc2lnbmFsIG1vYnggdGhhdCBhbGwgaXRzIG9ic2VydmVycyBzaG91bGQgaW52YWxpZGF0ZS5cbiAgICAgKi9cbiAgICBBdG9tLnByb3RvdHlwZS5yZXBvcnRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgIHByb3BhZ2F0ZUNoYW5nZWQodGhpcyk7XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgfTtcbiAgICBBdG9tLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9O1xuICAgIHJldHVybiBBdG9tO1xufSgpKTtcbnZhciBpc0F0b20gPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiQXRvbVwiLCBBdG9tKTtcbmZ1bmN0aW9uIGNyZWF0ZUF0b20obmFtZSwgb25CZWNvbWVPYnNlcnZlZEhhbmRsZXIsIG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIpIHtcbiAgICBpZiAob25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgPT09IHZvaWQgMCkgeyBvbkJlY29tZU9ic2VydmVkSGFuZGxlciA9IG5vb3A7IH1cbiAgICBpZiAob25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciA9PT0gdm9pZCAwKSB7IG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgPSBub29wOyB9XG4gICAgdmFyIGF0b20gPSBuZXcgQXRvbShuYW1lKTtcbiAgICAvLyBkZWZhdWx0IGBub29wYCBsaXN0ZW5lciB3aWxsIG5vdCBpbml0aWFsaXplIHRoZSBob29rIFNldFxuICAgIGlmIChvbkJlY29tZU9ic2VydmVkSGFuZGxlciAhPT0gbm9vcCkge1xuICAgICAgICBvbkJlY29tZU9ic2VydmVkKGF0b20sIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgIT09IG5vb3ApIHtcbiAgICAgICAgb25CZWNvbWVVbm9ic2VydmVkKGF0b20sIG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gYXRvbTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHlDb21wYXJlcihhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG59XG5mdW5jdGlvbiBzdHJ1Y3R1cmFsQ29tcGFyZXIoYSwgYikge1xuICAgIHJldHVybiBkZWVwRXF1YWwoYSwgYik7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyZXIoYSwgYikge1xuICAgIHJldHVybiBPYmplY3QuaXMoYSwgYik7XG59XG52YXIgY29tcGFyZXIgPSB7XG4gICAgaWRlbnRpdHk6IGlkZW50aXR5Q29tcGFyZXIsXG4gICAgc3RydWN0dXJhbDogc3RydWN0dXJhbENvbXBhcmVyLFxuICAgIGRlZmF1bHQ6IGRlZmF1bHRDb21wYXJlclxufTtcblxudmFyIG1vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzU3ltYm9sID0gU3ltYm9sKFwibW9ieCBkaWQgcnVuIGxhenkgaW5pdGlhbGl6ZXJzXCIpO1xudmFyIG1vYnhQZW5kaW5nRGVjb3JhdG9ycyA9IFN5bWJvbChcIm1vYnggcGVuZGluZyBkZWNvcmF0b3JzXCIpO1xudmFyIGVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGUgPSB7fTtcbnZhciBub25FbnVtZXJhYmxlRGVzY3JpcHRvckNhY2hlID0ge307XG5mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eUluaXRpYWxpemVyRGVzY3JpcHRvcihwcm9wLCBlbnVtZXJhYmxlKSB7XG4gICAgdmFyIGNhY2hlID0gZW51bWVyYWJsZSA/IGVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGUgOiBub25FbnVtZXJhYmxlRGVzY3JpcHRvckNhY2hlO1xuICAgIHJldHVybiAoY2FjaGVbcHJvcF0gfHxcbiAgICAgICAgKGNhY2hlW3Byb3BdID0ge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZW51bWVyYWJsZSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGluaXRpYWxpemVJbnN0YW5jZSh0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1twcm9wXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGluaXRpYWxpemVJbnN0YW5jZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbn1cbmZ1bmN0aW9uIGluaXRpYWxpemVJbnN0YW5jZSh0YXJnZXQpIHtcbiAgICBpZiAodGFyZ2V0W21vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzU3ltYm9sXSA9PT0gdHJ1ZSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBkZWNvcmF0b3JzID0gdGFyZ2V0W21vYnhQZW5kaW5nRGVjb3JhdG9yc107XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgICAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsIG1vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzU3ltYm9sLCB0cnVlKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRlY29yYXRvcnMpIHtcbiAgICAgICAgICAgIHZhciBkID0gZGVjb3JhdG9yc1trZXldO1xuICAgICAgICAgICAgZC5wcm9wZXJ0eUNyZWF0b3IodGFyZ2V0LCBkLnByb3AsIGQuZGVzY3JpcHRvciwgZC5kZWNvcmF0b3JUYXJnZXQsIGQuZGVjb3JhdG9yQXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZVByb3BEZWNvcmF0b3IocHJvcGVydHlJbml0aWFsbHlFbnVtZXJhYmxlLCBwcm9wZXJ0eUNyZWF0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yRmFjdG9yeSgpIHtcbiAgICAgICAgdmFyIGRlY29yYXRvckFyZ3VtZW50cztcbiAgICAgICAgdmFyIGRlY29yYXRvciA9IGZ1bmN0aW9uIGRlY29yYXRlKHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvciwgYXBwbHlJbW1lZGlhdGVseVxuICAgICAgICAvLyBUaGlzIGlzIGEgc3BlY2lhbCBwYXJhbWV0ZXIgdG8gc2lnbmFsIHRoZSBkaXJlY3QgYXBwbGljYXRpb24gb2YgYSBkZWNvcmF0b3IsIGFsbG93IGV4dGVuZE9ic2VydmFibGUgdG8gc2tpcCB0aGUgZW50aXJlIHR5cGUgZGVjb3JhdGlvbiBwYXJ0LFxuICAgICAgICAvLyBhcyB0aGUgaW5zdGFuY2UgdG8gYXBwbHkgdGhlIGRlY29yYXRvciB0byBlcXVhbHMgdGhlIHRhcmdldFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChhcHBseUltbWVkaWF0ZWx5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlDcmVhdG9yKHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvciwgdGFyZ2V0LCBkZWNvcmF0b3JBcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhcXVhY2tzTGlrZUFEZWNvcmF0b3IoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICAgICBmYWlsKFwiVGhpcyBmdW5jdGlvbiBpcyBhIGRlY29yYXRvciwgYnV0IGl0IHdhc24ndCBpbnZva2VkIGxpa2UgYSBkZWNvcmF0b3JcIik7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIG1vYnhQZW5kaW5nRGVjb3JhdG9ycykpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5oZXJpdGVkRGVjb3JhdG9ycyA9IHRhcmdldFttb2J4UGVuZGluZ0RlY29yYXRvcnNdO1xuICAgICAgICAgICAgICAgIGFkZEhpZGRlblByb3AodGFyZ2V0LCBtb2J4UGVuZGluZ0RlY29yYXRvcnMsIF9fYXNzaWduKHt9LCBpbmhlcml0ZWREZWNvcmF0b3JzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRbbW9ieFBlbmRpbmdEZWNvcmF0b3JzXVtwcm9wXSA9IHtcbiAgICAgICAgICAgICAgICBwcm9wOiBwcm9wLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5Q3JlYXRvcjogcHJvcGVydHlDcmVhdG9yLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3I6IGRlc2NyaXB0b3IsXG4gICAgICAgICAgICAgICAgZGVjb3JhdG9yVGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgZGVjb3JhdG9yQXJndW1lbnRzOiBkZWNvcmF0b3JBcmd1bWVudHNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUHJvcGVydHlJbml0aWFsaXplckRlc2NyaXB0b3IocHJvcCwgcHJvcGVydHlJbml0aWFsbHlFbnVtZXJhYmxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHF1YWNrc0xpa2VBRGVjb3JhdG9yKGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgIC8vIEBkZWNvcmF0b3JcbiAgICAgICAgICAgIGRlY29yYXRvckFyZ3VtZW50cyA9IEVNUFRZX0FSUkFZO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQGRlY29yYXRvcihhcmdzKVxuICAgICAgICAgICAgZGVjb3JhdG9yQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBkZWNvcmF0b3I7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gcXVhY2tzTGlrZUFEZWNvcmF0b3IoYXJncykge1xuICAgIHJldHVybiAoKChhcmdzLmxlbmd0aCA9PT0gMiB8fCBhcmdzLmxlbmd0aCA9PT0gMykgJiYgdHlwZW9mIGFyZ3NbMV0gPT09IFwic3RyaW5nXCIpIHx8XG4gICAgICAgIChhcmdzLmxlbmd0aCA9PT0gNCAmJiBhcmdzWzNdID09PSB0cnVlKSk7XG59XG5cbmZ1bmN0aW9uIGRlZXBFbmhhbmNlcih2LCBfLCBuYW1lKSB7XG4gICAgLy8gaXQgaXMgYW4gb2JzZXJ2YWJsZSBhbHJlYWR5LCBkb25lXG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh2KSlcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgLy8gc29tZXRoaW5nIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCBhbmQgbXV0YXRlZD9cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuYXJyYXkodiwgeyBuYW1lOiBuYW1lIH0pO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgdW5kZWZpbmVkLCB7IG5hbWU6IG5hbWUgfSk7XG4gICAgaWYgKGlzRVM2TWFwKHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwgeyBuYW1lOiBuYW1lIH0pO1xuICAgIGlmIChpc0VTNlNldCh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc2V0KHYsIHsgbmFtZTogbmFtZSB9KTtcbiAgICByZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIHNoYWxsb3dFbmhhbmNlcih2LCBfLCBuYW1lKSB7XG4gICAgaWYgKHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsKVxuICAgICAgICByZXR1cm4gdjtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHYpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHYpIHx8IGlzT2JzZXJ2YWJsZU1hcCh2KSB8fCBpc09ic2VydmFibGVTZXQodikpXG4gICAgICAgIHJldHVybiB2O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5hcnJheSh2LCB7IG5hbWU6IG5hbWUsIGRlZXA6IGZhbHNlIH0pO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgdW5kZWZpbmVkLCB7IG5hbWU6IG5hbWUsIGRlZXA6IGZhbHNlIH0pO1xuICAgIGlmIChpc0VTNk1hcCh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUubWFwKHYsIHsgbmFtZTogbmFtZSwgZGVlcDogZmFsc2UgfSk7XG4gICAgaWYgKGlzRVM2U2V0KHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zZXQodiwgeyBuYW1lOiBuYW1lLCBkZWVwOiBmYWxzZSB9KTtcbiAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgXCJUaGUgc2hhbGxvdyBtb2RpZmllciAvIGRlY29yYXRvciBjYW4gb25seSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggYXJyYXlzLCBvYmplY3RzLCBtYXBzIGFuZCBzZXRzXCIpO1xufVxuZnVuY3Rpb24gcmVmZXJlbmNlRW5oYW5jZXIobmV3VmFsdWUpIHtcbiAgICAvLyBuZXZlciB0dXJuIGludG8gYW4gb2JzZXJ2YWJsZVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmZ1bmN0aW9uIHJlZlN0cnVjdEVuaGFuY2VyKHYsIG9sZFZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc09ic2VydmFibGUodikpXG4gICAgICAgIHRocm93IFwib2JzZXJ2YWJsZS5zdHJ1Y3Qgc2hvdWxkIG5vdCBiZSB1c2VkIHdpdGggb2JzZXJ2YWJsZSB2YWx1ZXNcIjtcbiAgICBpZiAoZGVlcEVxdWFsKHYsIG9sZFZhbHVlKSlcbiAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihlbmhhbmNlcikge1xuICAgIGludmFyaWFudChlbmhhbmNlcik7XG4gICAgdmFyIGRlY29yYXRvciA9IGNyZWF0ZVByb3BEZWNvcmF0b3IodHJ1ZSwgZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yLCBfZGVjb3JhdG9yVGFyZ2V0LCBkZWNvcmF0b3JBcmdzKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGludmFyaWFudCghZGVzY3JpcHRvciB8fCAhZGVzY3JpcHRvci5nZXQsIFwiQG9ic2VydmFibGUgY2Fubm90IGJlIHVzZWQgb24gZ2V0dGVyIChwcm9wZXJ0eSBcXFwiXCIgKyBzdHJpbmdpZnlLZXkocHJvcGVydHlOYW1lKSArIFwiXFxcIiksIHVzZSBAY29tcHV0ZWQgaW5zdGVhZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluaXRpYWxWYWx1ZSA9IGRlc2NyaXB0b3JcbiAgICAgICAgICAgID8gZGVzY3JpcHRvci5pbml0aWFsaXplclxuICAgICAgICAgICAgICAgID8gZGVzY3JpcHRvci5pbml0aWFsaXplci5jYWxsKHRhcmdldClcbiAgICAgICAgICAgICAgICA6IGRlc2NyaXB0b3IudmFsdWVcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0KS5hZGRPYnNlcnZhYmxlUHJvcChwcm9wZXJ0eU5hbWUsIGluaXRpYWxWYWx1ZSwgZW5oYW5jZXIpO1xuICAgIH0pO1xuICAgIHZhciByZXMgPSBcbiAgICAvLyBFeHRyYSBwcm9jZXNzIGNoZWNrcywgYXMgdGhpcyBoYXBwZW5zIGR1cmluZyBtb2R1bGUgaW5pdGlhbGl6YXRpb25cbiAgICB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgICAgPyBmdW5jdGlvbiBvYnNlcnZhYmxlRGVjb3JhdG9yKCkge1xuICAgICAgICAgICAgLy8gVGhpcyB3cmFwcGVyIGZ1bmN0aW9uIGlzIGp1c3QgdG8gZGV0ZWN0IGlsbGVnYWwgZGVjb3JhdG9yIGludm9jYXRpb25zLCBkZXByZWNhdGUgaW4gYSBuZXh0IHZlcnNpb25cbiAgICAgICAgICAgIC8vIGFuZCBzaW1wbHkgcmV0dXJuIHRoZSBjcmVhdGVkIHByb3AgZGVjb3JhdG9yXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWwoXCJJbmNvcnJlY3QgZGVjb3JhdG9yIGludm9jYXRpb24uIEBvYnNlcnZhYmxlIGRlY29yYXRvciBkb2Vzbid0IGV4cGVjdCBhbnkgYXJndW1lbnRzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIDogZGVjb3JhdG9yO1xuICAgIHJlcy5lbmhhbmNlciA9IGVuaGFuY2VyO1xuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFByZWRlZmluZWQgYmFncyBvZiBjcmVhdGUgb2JzZXJ2YWJsZSBvcHRpb25zLCB0byBhdm9pZCBhbGxvY2F0aW5nIHRlbXBvcmFyaWx5IG9wdGlvbiBvYmplY3RzXG4vLyBpbiB0aGUgbWFqb3JpdHkgb2YgY2FzZXNcbnZhciBkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMgPSB7XG4gICAgZGVlcDogdHJ1ZSxcbiAgICBuYW1lOiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdERlY29yYXRvcjogdW5kZWZpbmVkLFxuICAgIHByb3h5OiB0cnVlXG59O1xuT2JqZWN0LmZyZWV6ZShkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMpO1xuZnVuY3Rpb24gYXNzZXJ0VmFsaWRPcHRpb24oa2V5KSB7XG4gICAgaWYgKCEvXihkZWVwfG5hbWV8ZXF1YWxzfGRlZmF1bHREZWNvcmF0b3J8cHJveHkpJC8udGVzdChrZXkpKVxuICAgICAgICBmYWlsKFwiaW52YWxpZCBvcHRpb24gZm9yIChleHRlbmQpb2JzZXJ2YWJsZTogXCIgKyBrZXkpO1xufVxuZnVuY3Rpb24gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyh0aGluZykge1xuICAgIGlmICh0aGluZyA9PT0gbnVsbCB8fCB0aGluZyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZGVmYXVsdENyZWF0ZU9ic2VydmFibGVPcHRpb25zO1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiB7IG5hbWU6IHRoaW5nLCBkZWVwOiB0cnVlLCBwcm94eTogdHJ1ZSB9O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGluZyAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgIHJldHVybiBmYWlsKFwiZXhwZWN0ZWQgb3B0aW9ucyBvYmplY3RcIik7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaW5nKS5mb3JFYWNoKGFzc2VydFZhbGlkT3B0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaW5nO1xufVxudmFyIGRlZXBEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihkZWVwRW5oYW5jZXIpO1xudmFyIHNoYWxsb3dEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihzaGFsbG93RW5oYW5jZXIpO1xudmFyIHJlZkRlY29yYXRvciA9IGNyZWF0ZURlY29yYXRvckZvckVuaGFuY2VyKHJlZmVyZW5jZUVuaGFuY2VyKTtcbnZhciByZWZTdHJ1Y3REZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihyZWZTdHJ1Y3RFbmhhbmNlcik7XG5mdW5jdGlvbiBnZXRFbmhhbmNlckZyb21PcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yXG4gICAgICAgID8gb3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yLmVuaGFuY2VyXG4gICAgICAgIDogb3B0aW9ucy5kZWVwID09PSBmYWxzZVxuICAgICAgICAgICAgPyByZWZlcmVuY2VFbmhhbmNlclxuICAgICAgICAgICAgOiBkZWVwRW5oYW5jZXI7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCwgYXJyYXkgb3IgZnVuY3Rpb24gaW50byBhIHJlYWN0aXZlIHN0cnVjdHVyZS5cbiAqIEBwYXJhbSB2IHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmVjb21lIG9ic2VydmFibGUuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGUodiwgYXJnMiwgYXJnMykge1xuICAgIC8vIEBvYnNlcnZhYmxlIHNvbWVQcm9wO1xuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBkZWVwRGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxuICAgIGlmIChpc09ic2VydmFibGUodikpXG4gICAgICAgIHJldHVybiB2O1xuICAgIC8vIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgYW5kIG11dGF0ZWQ/XG4gICAgdmFyIHJlcyA9IGlzUGxhaW5PYmplY3QodilcbiAgICAgICAgPyBvYnNlcnZhYmxlLm9iamVjdCh2LCBhcmcyLCBhcmczKVxuICAgICAgICA6IEFycmF5LmlzQXJyYXkodilcbiAgICAgICAgICAgID8gb2JzZXJ2YWJsZS5hcnJheSh2LCBhcmcyKVxuICAgICAgICAgICAgOiBpc0VTNk1hcCh2KVxuICAgICAgICAgICAgICAgID8gb2JzZXJ2YWJsZS5tYXAodiwgYXJnMilcbiAgICAgICAgICAgICAgICA6IGlzRVM2U2V0KHYpXG4gICAgICAgICAgICAgICAgICAgID8gb2JzZXJ2YWJsZS5zZXQodiwgYXJnMilcbiAgICAgICAgICAgICAgICAgICAgOiB2O1xuICAgIC8vIHRoaXMgdmFsdWUgY291bGQgYmUgY29udmVydGVkIHRvIGEgbmV3IG9ic2VydmFibGUgZGF0YSBzdHJ1Y3R1cmUsIHJldHVybiBpdFxuICAgIGlmIChyZXMgIT09IHYpXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgLy8gb3RoZXJ3aXNlLCBqdXN0IGJveCBpdFxuICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiVGhlIHByb3ZpZGVkIHZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQgaW50byBhbiBvYnNlcnZhYmxlLiBJZiB5b3Ugd2FudCBqdXN0IGNyZWF0ZSBhbiBvYnNlcnZhYmxlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0IHVzZSAnb2JzZXJ2YWJsZS5ib3godmFsdWUpJ1wiKTtcbn1cbnZhciBvYnNlcnZhYmxlRmFjdG9yaWVzID0ge1xuICAgIGJveDogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwiYm94XCIpO1xuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUsIHRydWUsIG8uZXF1YWxzKTtcbiAgICB9LFxuICAgIGFycmF5OiBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcImFycmF5XCIpO1xuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBjcmVhdGVPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lKTtcbiAgICB9LFxuICAgIG1hcDogZnVuY3Rpb24gKGluaXRpYWxWYWx1ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKVxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJtYXBcIik7XG4gICAgICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlTWFwKGluaXRpYWxWYWx1ZXMsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwic2V0XCIpO1xuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVNldChpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpO1xuICAgIH0sXG4gICAgb2JqZWN0OiBmdW5jdGlvbiAocHJvcHMsIGRlY29yYXRvcnMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcIm9iamVjdFwiKTtcbiAgICAgICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBpZiAoby5wcm94eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBleHRlbmRPYnNlcnZhYmxlKHt9LCBwcm9wcywgZGVjb3JhdG9ycywgbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdERlY29yYXRvciA9IGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyhvKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gZXh0ZW5kT2JzZXJ2YWJsZSh7fSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG8pO1xuICAgICAgICAgICAgdmFyIHByb3h5ID0gY3JlYXRlRHluYW1pY09ic2VydmFibGVPYmplY3QoYmFzZSk7XG4gICAgICAgICAgICBleHRlbmRPYnNlcnZhYmxlT2JqZWN0V2l0aFByb3BlcnRpZXMocHJveHksIHByb3BzLCBkZWNvcmF0b3JzLCBkZWZhdWx0RGVjb3JhdG9yKTtcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVmOiByZWZEZWNvcmF0b3IsXG4gICAgc2hhbGxvdzogc2hhbGxvd0RlY29yYXRvcixcbiAgICBkZWVwOiBkZWVwRGVjb3JhdG9yLFxuICAgIHN0cnVjdDogcmVmU3RydWN0RGVjb3JhdG9yXG59O1xudmFyIG9ic2VydmFibGUgPSBjcmVhdGVPYnNlcnZhYmxlO1xuLy8gd2VpcmQgdHJpY2sgdG8ga2VlcCBvdXIgdHlwaW5ncyBuaWNlbHkgd2l0aCBvdXIgZnVuY3MsIGFuZCBzdGlsbCBleHRlbmQgdGhlIG9ic2VydmFibGUgZnVuY3Rpb25cbk9iamVjdC5rZXlzKG9ic2VydmFibGVGYWN0b3JpZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIChvYnNlcnZhYmxlW25hbWVdID0gb2JzZXJ2YWJsZUZhY3Rvcmllc1tuYW1lXSk7IH0pO1xuZnVuY3Rpb24gaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IobWV0aG9kTmFtZSkge1xuICAgIGZhaWwoXG4gICAgLy8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgXCJFeHBlY3RlZCBvbmUgb3IgdHdvIGFyZ3VtZW50cyB0byBvYnNlcnZhYmxlLlwiICsgbWV0aG9kTmFtZSArIFwiLiBEaWQgeW91IGFjY2lkZW50YWxseSB0cnkgdG8gdXNlIG9ic2VydmFibGUuXCIgKyBtZXRob2ROYW1lICsgXCIgYXMgZGVjb3JhdG9yP1wiKTtcbn1cblxudmFyIGNvbXB1dGVkRGVjb3JhdG9yID0gY3JlYXRlUHJvcERlY29yYXRvcihmYWxzZSwgZnVuY3Rpb24gKGluc3RhbmNlLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IsIGRlY29yYXRvclRhcmdldCwgZGVjb3JhdG9yQXJncykge1xuICAgIHZhciBnZXQgPSBkZXNjcmlwdG9yLmdldCwgc2V0ID0gZGVzY3JpcHRvci5zZXQ7IC8vIGluaXRpYWxWYWx1ZSBpcyB0aGUgZGVzY3JpcHRvciBmb3IgZ2V0IC8gc2V0IHByb3BzXG4gICAgLy8gT3B0aW1pemF0aW9uOiBmYXN0ZXIgb24gZGVjb3JhdG9yIHRhcmdldCBvciBpbnN0YW5jZT8gQXNzdW1pbmcgdGFyZ2V0XG4gICAgLy8gT3B0aW1pemF0aW9uOiBmaW5kIG91dCBpZiBkZWNsYXJpbmcgb24gaW5zdGFuY2UgaXNuJ3QganVzdCBmYXN0ZXIuIChhbHNvIG1ha2VzIHRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHNpbXBsZXIpLiBCdXQsIG1vcmUgbWVtb3J5IHVzYWdlLi5cbiAgICAvLyBGb3JjaW5nIGluc3RhbmNlIG5vdywgZml4ZXMgaG90IHJlbG9hZGlnIGlzc3VlcyBvbiBSZWFjdCBOYXRpdmU6XG4gICAgdmFyIG9wdGlvbnMgPSBkZWNvcmF0b3JBcmdzWzBdIHx8IHt9O1xuICAgIGFzT2JzZXJ2YWJsZU9iamVjdChpbnN0YW5jZSkuYWRkQ29tcHV0ZWRQcm9wKGluc3RhbmNlLCBwcm9wZXJ0eU5hbWUsIF9fYXNzaWduKHsgZ2V0OiBnZXQsXG4gICAgICAgIHNldDogc2V0LCBjb250ZXh0OiBpbnN0YW5jZSB9LCBvcHRpb25zKSk7XG59KTtcbnZhciBjb21wdXRlZFN0cnVjdERlY29yYXRvciA9IGNvbXB1dGVkRGVjb3JhdG9yKHsgZXF1YWxzOiBjb21wYXJlci5zdHJ1Y3R1cmFsIH0pO1xuLyoqXG4gKiBEZWNvcmF0b3IgZm9yIGNsYXNzIHByb3BlcnRpZXM6IEBjb21wdXRlZCBnZXQgdmFsdWUoKSB7IHJldHVybiBleHByOyB9LlxuICogRm9yIGxlZ2FjeSBwdXJwb3NlcyBhbHNvIGludm9rYWJsZSBhcyBFUzUgb2JzZXJ2YWJsZSBjcmVhdGVkOiBgY29tcHV0ZWQoKCkgPT4gZXhwcilgO1xuICovXG52YXIgY29tcHV0ZWQgPSBmdW5jdGlvbiBjb21wdXRlZChhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIEBjb21wdXRlZFxuICAgICAgICByZXR1cm4gY29tcHV0ZWREZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgaWYgKGFyZzEgIT09IG51bGwgJiYgdHlwZW9mIGFyZzEgPT09IFwib2JqZWN0XCIgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBAY29tcHV0ZWQoeyBvcHRpb25zIH0pXG4gICAgICAgIHJldHVybiBjb21wdXRlZERlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICAvLyBjb21wdXRlZChleHByLCBvcHRpb25zPylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiLCBcIkZpcnN0IGFyZ3VtZW50IHRvIGBjb21wdXRlZGAgc2hvdWxkIGJlIGFuIGV4cHJlc3Npb24uXCIpO1xuICAgICAgICBpbnZhcmlhbnQoYXJndW1lbnRzLmxlbmd0aCA8IDMsIFwiQ29tcHV0ZWQgdGFrZXMgb25lIG9yIHR3byBhcmd1bWVudHMgaWYgdXNlZCBhcyBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdmFyIG9wdHMgPSB0eXBlb2YgYXJnMiA9PT0gXCJvYmplY3RcIiA/IGFyZzIgOiB7fTtcbiAgICBvcHRzLmdldCA9IGFyZzE7XG4gICAgb3B0cy5zZXQgPSB0eXBlb2YgYXJnMiA9PT0gXCJmdW5jdGlvblwiID8gYXJnMiA6IG9wdHMuc2V0O1xuICAgIG9wdHMubmFtZSA9IG9wdHMubmFtZSB8fCBhcmcxLm5hbWUgfHwgXCJcIjsgLyogZm9yIGdlbmVyYXRlZCBuYW1lICovXG4gICAgcmV0dXJuIG5ldyBDb21wdXRlZFZhbHVlKG9wdHMpO1xufTtcbmNvbXB1dGVkLnN0cnVjdCA9IGNvbXB1dGVkU3RydWN0RGVjb3JhdG9yO1xuXG52YXIgSURlcml2YXRpb25TdGF0ZTtcbihmdW5jdGlvbiAoSURlcml2YXRpb25TdGF0ZSkge1xuICAgIC8vIGJlZm9yZSBiZWluZyBydW4gb3IgKG91dHNpZGUgYmF0Y2ggYW5kIG5vdCBiZWluZyBvYnNlcnZlZClcbiAgICAvLyBhdCB0aGlzIHBvaW50IGRlcml2YXRpb24gaXMgbm90IGhvbGRpbmcgYW55IGRhdGEgYWJvdXQgZGVwZW5kZW5jeSB0cmVlXG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiTk9UX1RSQUNLSU5HXCJdID0gLTFdID0gXCJOT1RfVFJBQ0tJTkdcIjtcbiAgICAvLyBubyBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZCBzaW5jZSBsYXN0IGNvbXB1dGF0aW9uXG4gICAgLy8gd29uJ3QgcmVjYWxjdWxhdGUgZGVyaXZhdGlvblxuICAgIC8vIHRoaXMgaXMgd2hhdCBtYWtlcyBtb2J4IGZhc3RcbiAgICBJRGVyaXZhdGlvblN0YXRlW0lEZXJpdmF0aW9uU3RhdGVbXCJVUF9UT19EQVRFXCJdID0gMF0gPSBcIlVQX1RPX0RBVEVcIjtcbiAgICAvLyBzb21lIGRlZXAgZGVwZW5kZW5jeSBjaGFuZ2VkLCBidXQgZG9uJ3Qga25vdyBpZiBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZFxuICAgIC8vIHdpbGwgcmVxdWlyZSB0byBjaGVjayBmaXJzdCBpZiBVUF9UT19EQVRFIG9yIFBPU1NJQkxZX1NUQUxFXG4gICAgLy8gY3VycmVudGx5IG9ubHkgQ29tcHV0ZWRWYWx1ZSB3aWxsIHByb3BhZ2F0ZSBQT1NTSUJMWV9TVEFMRVxuICAgIC8vXG4gICAgLy8gaGF2aW5nIHRoaXMgc3RhdGUgaXMgc2Vjb25kIGJpZyBvcHRpbWl6YXRpb246XG4gICAgLy8gZG9uJ3QgaGF2ZSB0byByZWNvbXB1dGUgb24gZXZlcnkgZGVwZW5kZW5jeSBjaGFuZ2UsIGJ1dCBvbmx5IHdoZW4gaXQncyBuZWVkZWRcbiAgICBJRGVyaXZhdGlvblN0YXRlW0lEZXJpdmF0aW9uU3RhdGVbXCJQT1NTSUJMWV9TVEFMRVwiXSA9IDFdID0gXCJQT1NTSUJMWV9TVEFMRVwiO1xuICAgIC8vIEEgc2hhbGxvdyBkZXBlbmRlbmN5IGhhcyBjaGFuZ2VkIHNpbmNlIGxhc3QgY29tcHV0YXRpb24gYW5kIHRoZSBkZXJpdmF0aW9uXG4gICAgLy8gd2lsbCBuZWVkIHRvIHJlY29tcHV0ZSB3aGVuIGl0J3MgbmVlZGVkIG5leHQuXG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiU1RBTEVcIl0gPSAyXSA9IFwiU1RBTEVcIjtcbn0pKElEZXJpdmF0aW9uU3RhdGUgfHwgKElEZXJpdmF0aW9uU3RhdGUgPSB7fSkpO1xudmFyIFRyYWNlTW9kZTtcbihmdW5jdGlvbiAoVHJhY2VNb2RlKSB7XG4gICAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xuICAgIFRyYWNlTW9kZVtUcmFjZU1vZGVbXCJMT0dcIl0gPSAxXSA9IFwiTE9HXCI7XG4gICAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIkJSRUFLXCJdID0gMl0gPSBcIkJSRUFLXCI7XG59KShUcmFjZU1vZGUgfHwgKFRyYWNlTW9kZSA9IHt9KSk7XG52YXIgQ2F1Z2h0RXhjZXB0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhdWdodEV4Y2VwdGlvbihjYXVzZSkge1xuICAgICAgICB0aGlzLmNhdXNlID0gY2F1c2U7XG4gICAgICAgIC8vIEVtcHR5XG4gICAgfVxuICAgIHJldHVybiBDYXVnaHRFeGNlcHRpb247XG59KCkpO1xuZnVuY3Rpb24gaXNDYXVnaHRFeGNlcHRpb24oZSkge1xuICAgIHJldHVybiBlIGluc3RhbmNlb2YgQ2F1Z2h0RXhjZXB0aW9uO1xufVxuLyoqXG4gKiBGaW5kcyBvdXQgd2hldGhlciBhbnkgZGVwZW5kZW5jeSBvZiB0aGUgZGVyaXZhdGlvbiBoYXMgYWN0dWFsbHkgY2hhbmdlZC5cbiAqIElmIGRlcGVuZGVuY2llc1N0YXRlIGlzIDEgdGhlbiBpdCB3aWxsIHJlY2FsY3VsYXRlIGRlcGVuZGVuY2llcyxcbiAqIGlmIGFueSBkZXBlbmRlbmN5IGNoYW5nZWQgaXQgd2lsbCBwcm9wYWdhdGUgaXQgYnkgY2hhbmdpbmcgZGVwZW5kZW5jaWVzU3RhdGUgdG8gMi5cbiAqXG4gKiBCeSBpdGVyYXRpbmcgb3ZlciB0aGUgZGVwZW5kZW5jaWVzIGluIHRoZSBzYW1lIG9yZGVyIHRoYXQgdGhleSB3ZXJlIHJlcG9ydGVkIGFuZFxuICogc3RvcHBpbmcgb24gdGhlIGZpcnN0IGNoYW5nZSwgYWxsIHRoZSByZWNhbGN1bGF0aW9ucyBhcmUgb25seSBjYWxsZWQgZm9yIENvbXB1dGVkVmFsdWVzXG4gKiB0aGF0IHdpbGwgYmUgdHJhY2tlZCBieSBkZXJpdmF0aW9uLiBUaGF0IGlzIGJlY2F1c2Ugd2UgYXNzdW1lIHRoYXQgaWYgdGhlIGZpcnN0IHhcbiAqIGRlcGVuZGVuY2llcyBvZiB0aGUgZGVyaXZhdGlvbiBkb2Vzbid0IGNoYW5nZSB0aGVuIHRoZSBkZXJpdmF0aW9uIHNob3VsZCBydW4gdGhlIHNhbWUgd2F5XG4gKiB1cCB1bnRpbCBhY2Nlc3NpbmcgeC10aCBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiBzaG91bGRDb21wdXRlKGRlcml2YXRpb24pIHtcbiAgICBzd2l0Y2ggKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUpIHtcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc6XG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5TVEFMRTpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEU6IHtcbiAgICAgICAgICAgIHZhciBwcmV2VW50cmFja2VkID0gdW50cmFja2VkU3RhcnQoKTsgLy8gbm8gbmVlZCBmb3IgdGhvc2UgY29tcHV0ZWRzIHRvIGJlIHJlcG9ydGVkLCB0aGV5IHdpbGwgYmUgcGlja2VkIHVwIGluIHRyYWNrRGVyaXZlZEZ1bmN0aW9uLlxuICAgICAgICAgICAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nLCBsID0gb2JzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IG9ic1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wdXRlZFZhbHVlKG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgbm90IGludGVyZXN0ZWQgaW4gdGhlIHZhbHVlICpvciogZXhjZXB0aW9uIGF0IHRoaXMgbW9tZW50LCBidXQgaWYgdGhlcmUgaXMgb25lLCBub3RpZnkgYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIENvbXB1dGVkVmFsdWUgYG9iamAgYWN0dWFsbHkgY2hhbmdlZCBpdCB3aWxsIGJlIGNvbXB1dGVkIGFuZCBwcm9wYWdhdGVkIHRvIGl0cyBvYnNlcnZlcnMuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBgZGVyaXZhdGlvbmAgaXMgYW4gb2JzZXJ2ZXIgb2YgYG9iamBcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52YXJpYW50U2hvdWxkQ29tcHV0ZShkZXJpdmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKTtcbiAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIGZ1bmN0aW9uIGludmFyaWFudFNob3VsZENvbXB1dGUoZGVyaXZhdGlvbjogSURlcml2YXRpb24pIHtcbi8vICAgICBjb25zdCBuZXdEZXBTdGF0ZSA9IChkZXJpdmF0aW9uIGFzIGFueSkuZGVwZW5kZW5jaWVzU3RhdGVcbi8vICAgICBpZiAoXG4vLyAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiAmJlxuLy8gICAgICAgICAobmV3RGVwU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEUgfHxcbi8vICAgICAgICAgICAgIG5ld0RlcFN0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORylcbi8vICAgICApXG4vLyAgICAgICAgIGZhaWwoXCJJbGxlZ2FsIGRlcGVuZGVuY3kgc3RhdGVcIilcbi8vIH1cbmZ1bmN0aW9uIGlzQ29tcHV0aW5nRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uICE9PSBudWxsOyAvLyBmaWx0ZXIgb3V0IGFjdGlvbnMgaW5zaWRlIGNvbXB1dGF0aW9uc1xufVxuZnVuY3Rpb24gY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQoYXRvbSkge1xuICAgIHZhciBoYXNPYnNlcnZlcnMgPSBhdG9tLm9ic2VydmVycy5zaXplID4gMDtcbiAgICAvLyBTaG91bGQgbmV2ZXIgYmUgcG9zc2libGUgdG8gY2hhbmdlIGFuIG9ic2VydmVkIG9ic2VydmFibGUgZnJvbSBpbnNpZGUgY29tcHV0ZWQsIHNlZSAjNzk4XG4gICAgaWYgKGdsb2JhbFN0YXRlLmNvbXB1dGF0aW9uRGVwdGggPiAwICYmIGhhc09ic2VydmVycylcbiAgICAgICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiQ29tcHV0ZWQgdmFsdWVzIGFyZSBub3QgYWxsb3dlZCB0byBjYXVzZSBzaWRlIGVmZmVjdHMgYnkgY2hhbmdpbmcgb2JzZXJ2YWJsZXMgdGhhdCBhcmUgYWxyZWFkeSBiZWluZyBvYnNlcnZlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIiArIGF0b20ubmFtZSk7XG4gICAgLy8gU2hvdWxkIG5vdCBiZSBwb3NzaWJsZSB0byBjaGFuZ2Ugb2JzZXJ2ZWQgc3RhdGUgb3V0c2lkZSBzdHJpY3QgbW9kZSwgZXhjZXB0IGR1cmluZyBpbml0aWFsaXphdGlvbiwgc2VlICM1NjNcbiAgICBpZiAoIWdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzICYmIChoYXNPYnNlcnZlcnMgfHwgZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPT09IFwic3RyaWN0XCIpKVxuICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgKGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zXG4gICAgICAgICAgICAgICAgPyBcIlNpbmNlIHN0cmljdC1tb2RlIGlzIGVuYWJsZWQsIGNoYW5naW5nIG9ic2VydmVkIG9ic2VydmFibGUgdmFsdWVzIG91dHNpZGUgYWN0aW9ucyBpcyBub3QgYWxsb3dlZC4gUGxlYXNlIHdyYXAgdGhlIGNvZGUgaW4gYW4gYGFjdGlvbmAgaWYgdGhpcyBjaGFuZ2UgaXMgaW50ZW5kZWQuIFRyaWVkIHRvIG1vZGlmeTogXCJcbiAgICAgICAgICAgICAgICA6IFwiU2lkZSBlZmZlY3RzIGxpa2UgY2hhbmdpbmcgc3RhdGUgYXJlIG5vdCBhbGxvd2VkIGF0IHRoaXMgcG9pbnQuIEFyZSB5b3UgdHJ5aW5nIHRvIG1vZGlmeSBzdGF0ZSBmcm9tLCBmb3IgZXhhbXBsZSwgdGhlIHJlbmRlciBmdW5jdGlvbiBvZiBhIFJlYWN0IGNvbXBvbmVudD8gVHJpZWQgdG8gbW9kaWZ5OiBcIikgK1xuICAgICAgICAgICAgICAgIGF0b20ubmFtZSk7XG59XG5mdW5jdGlvbiBjaGVja0lmU3RhdGVSZWFkc0FyZUFsbG93ZWQob2JzZXJ2YWJsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgIWdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyAmJlxuICAgICAgICBnbG9iYWxTdGF0ZS5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gT2JzZXJ2YWJsZSBcIiArIG9ic2VydmFibGUubmFtZSArIFwiIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcIik7XG4gICAgfVxufVxuLyoqXG4gKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gYGZgIGFuZCB0cmFja3Mgd2hpY2ggb2JzZXJ2YWJsZXMgYXJlIGJlaW5nIGFjY2Vzc2VkLlxuICogVGhlIHRyYWNraW5nIGluZm9ybWF0aW9uIGlzIHN0b3JlZCBvbiB0aGUgYGRlcml2YXRpb25gIG9iamVjdCBhbmQgdGhlIGRlcml2YXRpb24gaXMgcmVnaXN0ZXJlZFxuICogYXMgb2JzZXJ2ZXIgb2YgYW55IG9mIHRoZSBhY2Nlc3NlZCBvYnNlcnZhYmxlcy5cbiAqL1xuZnVuY3Rpb24gdHJhY2tEZXJpdmVkRnVuY3Rpb24oZGVyaXZhdGlvbiwgZiwgY29udGV4dCkge1xuICAgIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7XG4gICAgLy8gcHJlIGFsbG9jYXRlIGFycmF5IGFsbG9jYXRpb24gKyByb29tIGZvciB2YXJpYXRpb24gaW4gZGVwc1xuICAgIC8vIGFycmF5IHdpbGwgYmUgdHJpbW1lZCBieSBiaW5kRGVwZW5kZW5jaWVzXG4gICAgY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbik7XG4gICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmcgPSBuZXcgQXJyYXkoZGVyaXZhdGlvbi5vYnNlcnZpbmcubGVuZ3RoICsgMTAwKTtcbiAgICBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnQgPSAwO1xuICAgIGRlcml2YXRpb24ucnVuSWQgPSArK2dsb2JhbFN0YXRlLnJ1bklkO1xuICAgIHZhciBwcmV2VHJhY2tpbmcgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gZGVyaXZhdGlvbjtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKSB7XG4gICAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBDYXVnaHRFeGNlcHRpb24oZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldlRyYWNraW5nO1xuICAgIGJpbmREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbik7XG4gICAgd2FybkFib3V0RGVyaXZhdGlvbldpdGhvdXREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbik7XG4gICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChkZXJpdmF0aW9uLm9ic2VydmluZy5sZW5ndGggIT09IDApXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoZ2xvYmFsU3RhdGUucmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgfHwgZGVyaXZhdGlvbi5yZXF1aXJlc09ic2VydmFibGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIERlcml2YXRpb24gXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIiBpcyBjcmVhdGVkL3VwZGF0ZWQgd2l0aG91dCByZWFkaW5nIGFueSBvYnNlcnZhYmxlIHZhbHVlXCIpO1xuICAgIH1cbn1cbi8qKlxuICogZGlmZnMgbmV3T2JzZXJ2aW5nIHdpdGggb2JzZXJ2aW5nLlxuICogdXBkYXRlIG9ic2VydmluZyB0byBiZSBuZXdPYnNlcnZpbmcgd2l0aCB1bmlxdWUgb2JzZXJ2YWJsZXNcbiAqIG5vdGlmeSBvYnNlcnZlcnMgdGhhdCBiZWNvbWUgb2JzZXJ2ZWQvdW5vYnNlcnZlZFxuICovXG5mdW5jdGlvbiBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pIHtcbiAgICAvLyBpbnZhcmlhbnQoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkcsIFwiSU5URVJOQUwgRVJST1IgYmluZERlcGVuZGVuY2llcyBleHBlY3RzIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xuICAgIHZhciBwcmV2T2JzZXJ2aW5nID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgdmFyIG9ic2VydmluZyA9IChkZXJpdmF0aW9uLm9ic2VydmluZyA9IGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nKTtcbiAgICB2YXIgbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xuICAgIC8vIEdvIHRocm91Z2ggYWxsIG5ldyBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAodGhpcyBsaXN0IGNhbiBjb250YWluIGR1cGxpY2F0ZXMpOlxuICAgIC8vICAgMDogZmlyc3Qgb2NjdXJyZW5jZSwgY2hhbmdlIHRvIDEgYW5kIGtlZXAgaXRcbiAgICAvLyAgIDE6IGV4dHJhIG9jY3VycmVuY2UsIGRyb3AgaXRcbiAgICB2YXIgaTAgPSAwLCBsID0gZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaV07XG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICBkZXAuZGlmZlZhbHVlID0gMTtcbiAgICAgICAgICAgIGlmIChpMCAhPT0gaSlcbiAgICAgICAgICAgICAgICBvYnNlcnZpbmdbaTBdID0gZGVwO1xuICAgICAgICAgICAgaTArKztcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGNhc3QgaXMgJ3NhZmUnIGhlcmUsIGJlY2F1c2UgaWYgZGVwIGlzIElPYnNlcnZhYmxlLCBgZGVwZW5kZW5jaWVzU3RhdGVgIHdpbGwgYmUgdW5kZWZpbmVkLFxuICAgICAgICAvLyBub3QgaGl0dGluZyB0aGUgY29uZGl0aW9uXG4gICAgICAgIGlmIChkZXAuZGVwZW5kZW5jaWVzU3RhdGUgPiBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUpIHtcbiAgICAgICAgICAgIGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSA9IGRlcC5kZXBlbmRlbmNpZXNTdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvYnNlcnZpbmcubGVuZ3RoID0gaTA7XG4gICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmcgPSBudWxsOyAvLyBuZXdPYnNlcnZpbmcgc2hvdWxkbid0IGJlIG5lZWRlZCBvdXRzaWRlIHRyYWNraW5nIChzdGF0ZW1lbnQgbW92ZWQgZG93biB0byB3b3JrIGFyb3VuZCBGRiBidWcsIHNlZSAjNjE0KVxuICAgIC8vIEdvIHRocm91Z2ggYWxsIG9sZCBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAoaXQgaXMgdW5pcXVlIGFmdGVyIGxhc3QgYmluZERlcGVuZGVuY2llcylcbiAgICAvLyAgIDA6IGl0J3Mgbm90IGluIG5ldyBvYnNlcnZhYmxlcywgdW5vYnNlcnZlIGl0XG4gICAgLy8gICAxOiBpdCBrZWVwcyBiZWluZyBvYnNlcnZlZCwgZG9uJ3Qgd2FudCB0byBub3RpZnkgaXQuIGNoYW5nZSB0byAwXG4gICAgbCA9IHByZXZPYnNlcnZpbmcubGVuZ3RoO1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgdmFyIGRlcCA9IHByZXZPYnNlcnZpbmdbbF07XG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZW1vdmVPYnNlcnZlcihkZXAsIGRlcml2YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGRlcC5kaWZmVmFsdWUgPSAwO1xuICAgIH1cbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKG5vdyBpdCBzaG91bGQgYmUgdW5pcXVlKVxuICAgIC8vICAgMDogaXQgd2FzIHNldCB0byAwIGluIGxhc3QgbG9vcC4gZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAvLyAgIDE6IGl0IHdhc24ndCBvYnNlcnZlZCwgbGV0J3Mgb2JzZXJ2ZSBpdC4gc2V0IGJhY2sgdG8gMFxuICAgIHdoaWxlIChpMC0tKSB7XG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaTBdO1xuICAgICAgICBpZiAoZGVwLmRpZmZWYWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgZGVwLmRpZmZWYWx1ZSA9IDA7XG4gICAgICAgICAgICBhZGRPYnNlcnZlcihkZXAsIGRlcml2YXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNvbWUgbmV3IG9ic2VydmVkIGRlcml2YXRpb25zIG1heSBiZWNvbWUgc3RhbGUgZHVyaW5nIHRoaXMgZGVyaXZhdGlvbiBjb21wdXRhdGlvblxuICAgIC8vIHNvIHRoZXkgaGF2ZSBoYWQgbm8gY2hhbmNlIHRvIHByb3BhZ2F0ZSBzdGFsZW5lc3MgKCM5MTYpXG4gICAgaWYgKGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XG4gICAgICAgIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgPSBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGU7XG4gICAgICAgIGRlcml2YXRpb24ub25CZWNvbWVTdGFsZSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyT2JzZXJ2aW5nKGRlcml2YXRpb24pIHtcbiAgICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IgY2xlYXJPYnNlcnZpbmcgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcbiAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgZGVyaXZhdGlvbi5vYnNlcnZpbmcgPSBbXTtcbiAgICB2YXIgaSA9IG9icy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgcmVtb3ZlT2JzZXJ2ZXIob2JzW2ldLCBkZXJpdmF0aW9uKTtcbiAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG59XG5mdW5jdGlvbiB1bnRyYWNrZWQoYWN0aW9uKSB7XG4gICAgdmFyIHByZXYgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24oKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2KTtcbiAgICB9XG59XG5mdW5jdGlvbiB1bnRyYWNrZWRTdGFydCgpIHtcbiAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICAgIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gdW50cmFja2VkRW5kKHByZXYpIHtcbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZVJlYWRzU3RhcnQoYWxsb3dTdGF0ZVJlYWRzKSB7XG4gICAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHM7XG4gICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzO1xuICAgIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXYpIHtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSBwcmV2O1xufVxuLyoqXG4gKiBuZWVkZWQgdG8ga2VlcCBgbG93ZXN0T2JzZXJ2ZXJTdGF0ZWAgY29ycmVjdC4gd2hlbiBjaGFuZ2luZyBmcm9tICgyIG9yIDEpIHRvIDBcbiAqXG4gKi9cbmZ1bmN0aW9uIGNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wKGRlcml2YXRpb24pIHtcbiAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKVxuICAgICAgICByZXR1cm47XG4gICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcbiAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgdmFyIGkgPSBvYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9ic1tpXS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIHJlZikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiLCBcImBhY3Rpb25gIGNhbiBvbmx5IGJlIGludm9rZWQgb24gZnVuY3Rpb25zXCIpO1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbk5hbWUgIT09IFwic3RyaW5nXCIgfHwgIWFjdGlvbk5hbWUpXG4gICAgICAgICAgICBmYWlsKFwiYWN0aW9ucyBzaG91bGQgaGF2ZSB2YWxpZCBuYW1lcywgZ290OiAnXCIgKyBhY3Rpb25OYW1lICsgXCInXCIpO1xuICAgIH1cbiAgICB2YXIgcmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbihhY3Rpb25OYW1lLCBmbiwgcmVmIHx8IHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXMuaXNNb2J4QWN0aW9uID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gZXhlY3V0ZUFjdGlvbihhY3Rpb25OYW1lLCBmbiwgc2NvcGUsIGFyZ3MpIHtcbiAgICB2YXIgcnVuSW5mbyA9IF9zdGFydEFjdGlvbihhY3Rpb25OYW1lLCBzY29wZSwgYXJncyk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHNjb3BlLCBhcmdzKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBydW5JbmZvLmVycm9yID0gZXJyO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICBfZW5kQWN0aW9uKHJ1bkluZm8pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9zdGFydEFjdGlvbihhY3Rpb25OYW1lLCBzY29wZSwgYXJncykge1xuICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKSAmJiAhIWFjdGlvbk5hbWU7XG4gICAgdmFyIHN0YXJ0VGltZSA9IDA7XG4gICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIGwgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgfHwgMDtcbiAgICAgICAgdmFyIGZsYXR0ZW5kQXJncyA9IG5ldyBBcnJheShsKTtcbiAgICAgICAgaWYgKGwgPiAwKVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICAgICAgZmxhdHRlbmRBcmdzW2ldID0gYXJnc1tpXTtcbiAgICAgICAgc3B5UmVwb3J0U3RhcnQoe1xuICAgICAgICAgICAgdHlwZTogXCJhY3Rpb25cIixcbiAgICAgICAgICAgIG5hbWU6IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBvYmplY3Q6IHNjb3BlLFxuICAgICAgICAgICAgYXJndW1lbnRzOiBmbGF0dGVuZEFyZ3NcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBwcmV2RGVyaXZhdGlvbiA9IHVudHJhY2tlZFN0YXJ0KCk7XG4gICAgc3RhcnRCYXRjaCgpO1xuICAgIHZhciBwcmV2QWxsb3dTdGF0ZUNoYW5nZXMgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KHRydWUpO1xuICAgIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7XG4gICAgdmFyIHJ1bkluZm8gPSB7XG4gICAgICAgIHByZXZEZXJpdmF0aW9uOiBwcmV2RGVyaXZhdGlvbixcbiAgICAgICAgcHJldkFsbG93U3RhdGVDaGFuZ2VzOiBwcmV2QWxsb3dTdGF0ZUNoYW5nZXMsXG4gICAgICAgIHByZXZBbGxvd1N0YXRlUmVhZHM6IHByZXZBbGxvd1N0YXRlUmVhZHMsXG4gICAgICAgIG5vdGlmeVNweTogbm90aWZ5U3B5LFxuICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICAgICAgYWN0aW9uSWQ6IGdsb2JhbFN0YXRlLm5leHRBY3Rpb25JZCsrLFxuICAgICAgICBwYXJlbnRBY3Rpb25JZDogZ2xvYmFsU3RhdGUuY3VycmVudEFjdGlvbklkXG4gICAgfTtcbiAgICBnbG9iYWxTdGF0ZS5jdXJyZW50QWN0aW9uSWQgPSBydW5JbmZvLmFjdGlvbklkO1xuICAgIHJldHVybiBydW5JbmZvO1xufVxuZnVuY3Rpb24gX2VuZEFjdGlvbihydW5JbmZvKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLmN1cnJlbnRBY3Rpb25JZCAhPT0gcnVuSW5mby5hY3Rpb25JZCkge1xuICAgICAgICBmYWlsKFwiaW52YWxpZCBhY3Rpb24gc3RhY2suIGRpZCB5b3UgZm9yZ2V0IHRvIGZpbmlzaCBhbiBhY3Rpb24/XCIpO1xuICAgIH1cbiAgICBnbG9iYWxTdGF0ZS5jdXJyZW50QWN0aW9uSWQgPSBydW5JbmZvLnBhcmVudEFjdGlvbklkO1xuICAgIGlmIChydW5JbmZvLmVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IHRydWU7XG4gICAgfVxuICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHJ1bkluZm8ucHJldkFsbG93U3RhdGVDaGFuZ2VzKTtcbiAgICBhbGxvd1N0YXRlUmVhZHNFbmQocnVuSW5mby5wcmV2QWxsb3dTdGF0ZVJlYWRzKTtcbiAgICBlbmRCYXRjaCgpO1xuICAgIHVudHJhY2tlZEVuZChydW5JbmZvLnByZXZEZXJpdmF0aW9uKTtcbiAgICBpZiAocnVuSW5mby5ub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIHNweVJlcG9ydEVuZCh7IHRpbWU6IERhdGUubm93KCkgLSBydW5JbmZvLnN0YXJ0VGltZSB9KTtcbiAgICB9XG4gICAgZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IGZhbHNlO1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXMoYWxsb3dTdGF0ZUNoYW5nZXMsIGZ1bmMpIHtcbiAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQoYWxsb3dTdGF0ZUNoYW5nZXMpO1xuICAgIHZhciByZXM7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzID0gZnVuYygpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGFsbG93U3RhdGVDaGFuZ2VzKSB7XG4gICAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcztcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGFsbG93U3RhdGVDaGFuZ2VzO1xuICAgIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldikge1xuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gcHJldjtcbn1cbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzSW5zaWRlQ29tcHV0ZWQoZnVuYykge1xuICAgIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aDtcbiAgICBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoID0gMDtcbiAgICB2YXIgcmVzO1xuICAgIHRyeSB7XG4gICAgICAgIHJlcyA9IGZ1bmMoKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLmNvbXB1dGF0aW9uRGVwdGggPSBwcmV2O1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG52YXIgT2JzZXJ2YWJsZVZhbHVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPYnNlcnZhYmxlVmFsdWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBlbmhhbmNlciwgbmFtZSwgbm90aWZ5U3B5LCBlcXVhbHMpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJPYnNlcnZhYmxlVmFsdWVAXCIgKyBnZXROZXh0SWQoKTsgfVxuICAgICAgICBpZiAobm90aWZ5U3B5ID09PSB2b2lkIDApIHsgbm90aWZ5U3B5ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoZXF1YWxzID09PSB2b2lkIDApIHsgZXF1YWxzID0gY29tcGFyZXIuZGVmYXVsdDsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBuYW1lKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5lbmhhbmNlciA9IGVuaGFuY2VyO1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMuZXF1YWxzID0gZXF1YWxzO1xuICAgICAgICBfdGhpcy5oYXNVbnJlcG9ydGVkQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnZhbHVlID0gZW5oYW5jZXIodmFsdWUsIHVuZGVmaW5lZCwgbmFtZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgaXNTcHlFbmFibGVkKCkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBvbmx5IG5vdGlmeSBzcHkgaWYgdGhpcyBpcyBhIHN0YW5kLWFsb25lIG9ic2VydmFibGVcbiAgICAgICAgICAgIHNweVJlcG9ydCh7IHR5cGU6IFwiY3JlYXRlXCIsIG5hbWU6IF90aGlzLm5hbWUsIG5ld1ZhbHVlOiBcIlwiICsgX3RoaXMudmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnByZXBhcmVOZXdWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzKTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQ7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhcHBseSBtb2RpZmllclxuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuZW5oYW5jZXIobmV3VmFsdWUsIHRoaXMudmFsdWUsIHRoaXMubmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmVxdWFscyh0aGlzLnZhbHVlLCBuZXdWYWx1ZSkgPyBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQgOiBuZXdWYWx1ZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUuc2V0TmV3VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgaWYgKGhhc0xpc3RlbmVycyh0aGlzKSkge1xuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpXG4gICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIltcIiArIHRoaXMudmFsdWUgKyBcIl1cIjtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZVtTeW1ib2wudG9QcmltaXRpdmVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZVZhbHVlO1xufShBdG9tKSk7XG52YXIgaXNPYnNlcnZhYmxlVmFsdWUgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZVZhbHVlXCIsIE9ic2VydmFibGVWYWx1ZSk7XG5cbi8qKlxuICogQSBub2RlIGluIHRoZSBzdGF0ZSBkZXBlbmRlbmN5IHJvb3QgdGhhdCBvYnNlcnZlcyBvdGhlciBub2RlcywgYW5kIGNhbiBiZSBvYnNlcnZlZCBpdHNlbGYuXG4gKlxuICogQ29tcHV0ZWRWYWx1ZSB3aWxsIHJlbWVtYmVyIHRoZSByZXN1bHQgb2YgdGhlIGNvbXB1dGF0aW9uIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIGJhdGNoLCBvclxuICogd2hpbGUgYmVpbmcgb2JzZXJ2ZWQuXG4gKlxuICogRHVyaW5nIHRoaXMgdGltZSBpdCB3aWxsIHJlY29tcHV0ZSBvbmx5IHdoZW4gb25lIG9mIGl0cyBkaXJlY3QgZGVwZW5kZW5jaWVzIGNoYW5nZWQsXG4gKiBidXQgb25seSB3aGVuIGl0IGlzIGJlaW5nIGFjY2Vzc2VkIHdpdGggYENvbXB1dGVkVmFsdWUuZ2V0KClgLlxuICpcbiAqIEltcGxlbWVudGF0aW9uIGRlc2NyaXB0aW9uOlxuICogMS4gRmlyc3QgdGltZSBpdCdzIGJlaW5nIGFjY2Vzc2VkIGl0IHdpbGwgY29tcHV0ZSBhbmQgcmVtZW1iZXIgcmVzdWx0XG4gKiAgICBnaXZlIGJhY2sgcmVtZW1iZXJlZCByZXN1bHQgdW50aWwgMi4gaGFwcGVuc1xuICogMi4gRmlyc3QgdGltZSBhbnkgZGVlcCBkZXBlbmRlbmN5IGNoYW5nZSwgcHJvcGFnYXRlIFBPU1NJQkxZX1NUQUxFIHRvIGFsbCBvYnNlcnZlcnMsIHdhaXQgZm9yIDMuXG4gKiAzLiBXaGVuIGl0J3MgYmVpbmcgYWNjZXNzZWQsIHJlY29tcHV0ZSBpZiBhbnkgc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWQuXG4gKiAgICBpZiByZXN1bHQgY2hhbmdlZDogcHJvcGFnYXRlIFNUQUxFIHRvIGFsbCBvYnNlcnZlcnMsIHRoYXQgd2VyZSBQT1NTSUJMWV9TVEFMRSBmcm9tIHRoZSBsYXN0IHN0ZXAuXG4gKiAgICBnbyB0byBzdGVwIDIuIGVpdGhlciB3YXlcbiAqXG4gKiBJZiBhdCBhbnkgcG9pbnQgaXQncyBvdXRzaWRlIGJhdGNoIGFuZCBpdCBpc24ndCBvYnNlcnZlZDogcmVzZXQgZXZlcnl0aGluZyBhbmQgZ28gdG8gMS5cbiAqL1xudmFyIENvbXB1dGVkVmFsdWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGNvbXB1dGVkIHZhbHVlIGJhc2VkIG9uIGEgZnVuY3Rpb24gZXhwcmVzc2lvbi5cbiAgICAgKlxuICAgICAqIFRoZSBgbmFtZWAgcHJvcGVydHkgaXMgZm9yIGRlYnVnIHB1cnBvc2VzIG9ubHkuXG4gICAgICpcbiAgICAgKiBUaGUgYGVxdWFsc2AgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBjb21wYXJlciBmdW5jdGlvbiB0byB1c2UgdG8gZGV0ZXJtaW5lIGlmIGEgbmV3bHkgcHJvZHVjZWRcbiAgICAgKiB2YWx1ZSBkaWZmZXJzIGZyb20gdGhlIHByZXZpb3VzIHZhbHVlLiBUd28gY29tcGFyZXJzIGFyZSBwcm92aWRlZCBpbiB0aGUgbGlicmFyeTsgYGRlZmF1bHRDb21wYXJlcmBcbiAgICAgKiBjb21wYXJlcyBiYXNlZCBvbiBpZGVudGl0eSBjb21wYXJpc29uICg9PT0pLCBhbmQgYHN0cnVjdHVhbENvbXBhcmVyYCBkZWVwbHkgY29tcGFyZXMgdGhlIHN0cnVjdHVyZS5cbiAgICAgKiBTdHJ1Y3R1cmFsIGNvbXBhcmlzb24gY2FuIGJlIGNvbnZlbmllbnQgaWYgeW91IGFsd2F5cyBwcm9kdWNlIGEgbmV3IGFnZ3JlZ2F0ZWQgb2JqZWN0IGFuZFxuICAgICAqIGRvbid0IHdhbnQgdG8gbm90aWZ5IG9ic2VydmVycyBpZiBpdCBpcyBzdHJ1Y3R1cmFsbHkgdGhlIHNhbWUuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgZm9yIHdvcmtpbmcgd2l0aCB2ZWN0b3JzLCBtb3VzZSBjb29yZGluYXRlcyBldGMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29tcHV0ZWRWYWx1ZShvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcbiAgICAgICAgdGhpcy5vYnNlcnZpbmcgPSBbXTsgLy8gbm9kZXMgd2UgYXJlIGxvb2tpbmcgYXQuIE91ciB2YWx1ZSBkZXBlbmRzIG9uIHRoZXNlIG5vZGVzXG4gICAgICAgIHRoaXMubmV3T2JzZXJ2aW5nID0gbnVsbDsgLy8gZHVyaW5nIHRyYWNraW5nIGl0J3MgYW4gYXJyYXkgd2l0aCBuZXcgb2JzZXJ2ZWQgb2JzZXJ2ZXJzXG4gICAgICAgIHRoaXMuaXNCZWluZ09ic2VydmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5kaWZmVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnJ1bklkID0gMDtcbiAgICAgICAgdGhpcy5sYXN0QWNjZXNzZWRCeSA9IDA7XG4gICAgICAgIHRoaXMubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcbiAgICAgICAgdGhpcy51bmJvdW5kRGVwc0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fX21hcGlkID0gXCIjXCIgKyBnZXROZXh0SWQoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBDYXVnaHRFeGNlcHRpb24obnVsbCk7XG4gICAgICAgIHRoaXMuaXNDb21wdXRpbmcgPSBmYWxzZTsgLy8gdG8gY2hlY2sgZm9yIGN5Y2xlc1xuICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVHJhY2luZyA9IFRyYWNlTW9kZS5OT05FO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFvcHRpb25zLmdldClcbiAgICAgICAgICAgIHRocm93IFwiW21vYnhdIG1pc3Npbmcgb3B0aW9uIGZvciBjb21wdXRlZDogZ2V0XCI7XG4gICAgICAgIHRoaXMuZGVyaXZhdGlvbiA9IG9wdGlvbnMuZ2V0O1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgXCJDb21wdXRlZFZhbHVlQFwiICsgZ2V0TmV4dElkKCk7XG4gICAgICAgIGlmIChvcHRpb25zLnNldClcbiAgICAgICAgICAgIHRoaXMuc2V0dGVyID0gY3JlYXRlQWN0aW9uKHRoaXMubmFtZSArIFwiLXNldHRlclwiLCBvcHRpb25zLnNldCk7XG4gICAgICAgIHRoaXMuZXF1YWxzID1cbiAgICAgICAgICAgIG9wdGlvbnMuZXF1YWxzIHx8XG4gICAgICAgICAgICAgICAgKG9wdGlvbnMuY29tcGFyZVN0cnVjdHVyYWwgfHwgb3B0aW9ucy5zdHJ1Y3RcbiAgICAgICAgICAgICAgICAgICAgPyBjb21wYXJlci5zdHJ1Y3R1cmFsXG4gICAgICAgICAgICAgICAgICAgIDogY29tcGFyZXIuZGVmYXVsdCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBvcHRpb25zLmNvbnRleHQ7XG4gICAgICAgIHRoaXMucmVxdWlyZXNSZWFjdGlvbiA9ICEhb3B0aW9ucy5yZXF1aXJlc1JlYWN0aW9uO1xuICAgICAgICB0aGlzLmtlZXBBbGl2ZSA9ICEhb3B0aW9ucy5rZWVwQWxpdmU7XG4gICAgfVxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9uQmVjb21lU3RhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb3BhZ2F0ZU1heWJlQ2hhbmdlZCh0aGlzKTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9uQmVjb21lT2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMub25CZWNvbWVPYnNlcnZlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25CZWNvbWVVbm9ic2VydmVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhpcyBjb21wdXRlZCB2YWx1ZS5cbiAgICAgKiBXaWxsIGV2YWx1YXRlIGl0cyBjb21wdXRhdGlvbiBmaXJzdCBpZiBuZWVkZWQuXG4gICAgICovXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0NvbXB1dGluZylcbiAgICAgICAgICAgIGZhaWwoXCJDeWNsZSBkZXRlY3RlZCBpbiBjb21wdXRhdGlvbiBcIiArIHRoaXMubmFtZSArIFwiOiBcIiArIHRoaXMuZGVyaXZhdGlvbik7XG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS5pbkJhdGNoID09PSAwICYmIHRoaXMub2JzZXJ2ZXJzLnNpemUgPT09IDAgJiYgIXRoaXMua2VlcEFsaXZlKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FybkFib3V0VW50cmFja2VkUmVhZCgpO1xuICAgICAgICAgICAgICAgIHN0YXJ0QmF0Y2goKTsgLy8gU2VlIHBlcmYgdGVzdCAnY29tcHV0ZWQgbWVtb2l6YXRpb24nXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY29tcHV0ZVZhbHVlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlbmRCYXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVwb3J0T2JzZXJ2ZWQodGhpcyk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFja0FuZENvbXB1dGUoKSlcbiAgICAgICAgICAgICAgICAgICAgcHJvcGFnYXRlQ2hhbmdlQ29uZmlybWVkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzdWx0KSlcbiAgICAgICAgICAgIHRocm93IHJlc3VsdC5jYXVzZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLmNvbXB1dGVWYWx1ZShmYWxzZSk7XG4gICAgICAgIGlmIChpc0NhdWdodEV4Y2VwdGlvbihyZXMpKVxuICAgICAgICAgICAgdGhyb3cgcmVzLmNhdXNlO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRlcikge1xuICAgICAgICAgICAgaW52YXJpYW50KCF0aGlzLmlzUnVubmluZ1NldHRlciwgXCJUaGUgc2V0dGVyIG9mIGNvbXB1dGVkIHZhbHVlICdcIiArIHRoaXMubmFtZSArIFwiJyBpcyB0cnlpbmcgdG8gdXBkYXRlIGl0c2VsZi4gRGlkIHlvdSBpbnRlbmQgdG8gdXBkYXRlIGFuIF9vYnNlcnZhYmxlXyB2YWx1ZSwgaW5zdGVhZCBvZiB0aGUgY29tcHV0ZWQgcHJvcGVydHk/XCIpO1xuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRlci5jYWxsKHRoaXMuc2NvcGUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgaW52YXJpYW50KGZhbHNlLCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICBcIltDb21wdXRlZFZhbHVlICdcIiArIHRoaXMubmFtZSArIFwiJ10gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGFzc2lnbiBhIG5ldyB2YWx1ZSB0byBhIGNvbXB1dGVkIHZhbHVlLlwiKTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnRyYWNrQW5kQ29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzU3B5RW5hYmxlZCgpICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMuc2NvcGUsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb21wdXRlXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB2YXIgd2FzU3VzcGVuZGVkID0gXG4gICAgICAgIC8qIHNlZSAjMTIwOCAqLyB0aGlzLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlVmFsdWUodHJ1ZSk7XG4gICAgICAgIHZhciBjaGFuZ2VkID0gd2FzU3VzcGVuZGVkIHx8XG4gICAgICAgICAgICBpc0NhdWdodEV4Y2VwdGlvbihvbGRWYWx1ZSkgfHxcbiAgICAgICAgICAgIGlzQ2F1Z2h0RXhjZXB0aW9uKG5ld1ZhbHVlKSB8fFxuICAgICAgICAgICAgIXRoaXMuZXF1YWxzKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZWQ7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5jb21wdXRlVmFsdWUgPSBmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgICAgdGhpcy5pc0NvbXB1dGluZyA9IHRydWU7XG4gICAgICAgIGdsb2JhbFN0YXRlLmNvbXB1dGF0aW9uRGVwdGgrKztcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgICByZXMgPSB0cmFja0Rlcml2ZWRGdW5jdGlvbih0aGlzLCB0aGlzLmRlcml2YXRpb24sIHRoaXMuc2NvcGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmRlcml2YXRpb24uY2FsbCh0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHRoaXMuZGVyaXZhdGlvbi5jYWxsKHRoaXMuc2NvcGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoLS07XG4gICAgICAgIHRoaXMuaXNDb21wdXRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnN1c3BlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5rZWVwQWxpdmUpIHtcbiAgICAgICAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDsgLy8gZG9uJ3QgaG9sZCBvbiB0byBjb21wdXRlZCB2YWx1ZSFcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xuICAgICAgICB2YXIgcHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gYXV0b3J1bihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdGhpcy5nZXQoKTtcbiAgICAgICAgICAgIGlmICghZmlyc3RUaW1lIHx8IGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2VSA9IHVudHJhY2tlZFN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IF90aGlzLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBwcmV2VmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQocHJldlUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICAgICAgICBwcmV2VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS53YXJuQWJvdXRVbnRyYWNrZWRSZWFkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5yZXF1aXJlc1JlYWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmYWlsKFwiW21vYnhdIENvbXB1dGVkIHZhbHVlIFwiICsgdGhpcy5uYW1lICsgXCIgaXMgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlttb2J4LnRyYWNlXSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgaXMgYmVpbmcgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dC4gRG9pbmcgYSBmdWxsIHJlY29tcHV0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gQ29tcHV0ZWQgdmFsdWUgXCIgKyB0aGlzLm5hbWUgKyBcIiBpcyBiZWluZyByZWFkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0LiBEb2luZyBhIGZ1bGwgcmVjb21wdXRlXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgpO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIltcIiArIHRoaXMuZGVyaXZhdGlvbi50b1N0cmluZygpICsgXCJdXCI7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdG9QcmltaXRpdmUodGhpcy5nZXQoKSk7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZVtTeW1ib2wudG9QcmltaXRpdmVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tcHV0ZWRWYWx1ZTtcbn0oKSk7XG52YXIgaXNDb21wdXRlZFZhbHVlID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIkNvbXB1dGVkVmFsdWVcIiwgQ29tcHV0ZWRWYWx1ZSk7XG5cbi8qKlxuICogVGhlc2UgdmFsdWVzIHdpbGwgcGVyc2lzdCBpZiBnbG9iYWwgc3RhdGUgaXMgcmVzZXRcbiAqL1xudmFyIHBlcnNpc3RlbnRLZXlzID0gW1xuICAgIFwibW9ieEd1aWRcIixcbiAgICBcInNweUxpc3RlbmVyc1wiLFxuICAgIFwiZW5mb3JjZUFjdGlvbnNcIixcbiAgICBcImNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvblwiLFxuICAgIFwicmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGVcIixcbiAgICBcIm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uXCIsXG4gICAgXCJhbGxvd1N0YXRlUmVhZHNcIixcbiAgICBcImRpc2FibGVFcnJvckJvdW5kYXJpZXNcIixcbiAgICBcInJ1bklkXCIsXG4gICAgXCJVTkNIQU5HRURcIlxuXTtcbnZhciBNb2JYR2xvYmFscyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2JYR2xvYmFscygpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vYlhHbG9iYWxzIHZlcnNpb24uXG4gICAgICAgICAqIE1vYlggY29tcGF0aWJsaXR5IHdpdGggb3RoZXIgdmVyc2lvbnMgbG9hZGVkIGluIG1lbW9yeSBhcyBsb25nIGFzIHRoaXMgdmVyc2lvbiBtYXRjaGVzLlxuICAgICAgICAgKiBJdCBpbmRpY2F0ZXMgdGhhdCB0aGUgZ2xvYmFsIHN0YXRlIHN0aWxsIHN0b3JlcyBzaW1pbGFyIGluZm9ybWF0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIE4uQjogdGhpcyB2ZXJzaW9uIGlzIHVucmVsYXRlZCB0byB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIE1vYlgsIGFuZCBpcyBvbmx5IHRoZSB2ZXJzaW9uIG9mIHRoZVxuICAgICAgICAgKiBpbnRlcm5hbCBzdGF0ZSBzdG9yYWdlIG9mIE1vYlgsIGFuZCBjYW4gYmUgdGhlIHNhbWUgYWNyb3NzIG1hbnkgZGlmZmVyZW50IHBhY2thZ2UgdmVyc2lvbnNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IDU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBnbG9iYWxseSB1bmlxdWUgdG9rZW4gdG8gc2lnbmFsIHVuY2hhbmdlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5VTkNIQU5HRUQgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1cnJlbnRseSBydW5uaW5nIGRlcml2YXRpb25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhY2tpbmdEZXJpdmF0aW9uID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFyZSB3ZSBydW5uaW5nIGEgY29tcHV0YXRpb24gY3VycmVudGx5PyAobm90IGEgcmVhY3Rpb24pXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXB1dGF0aW9uRGVwdGggPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogRWFjaCB0aW1lIGEgZGVyaXZhdGlvbiBpcyB0cmFja2VkLCBpdCBpcyBhc3NpZ25lZCBhIHVuaXF1ZSBydW4taWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucnVuSWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogJ2d1aWQnIGZvciBnZW5lcmFsIHB1cnBvc2UuIFdpbGwgYmUgcGVyc2lzdGVkIGFtb25nc3QgcmVzZXRzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb2J4R3VpZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcmUgd2UgaW4gYSBiYXRjaCBibG9jaz8gKGFuZCBob3cgbWFueSBvZiB0aGVtKVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbkJhdGNoID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmFibGVzIHRoYXQgZG9uJ3QgaGF2ZSBvYnNlcnZlcnMgYW55bW9yZSwgYW5kIGFyZSBhYm91dCB0byBiZVxuICAgICAgICAgKiBzdXNwZW5kZWQsIHVubGVzcyBzb21lYm9keSBlbHNlIGFjY2Vzc2VzIGl0IGluIHRoZSBzYW1lIGJhdGNoXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtJT2JzZXJ2YWJsZVtdfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wZW5kaW5nVW5vYnNlcnZhdGlvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3Qgb2Ygc2NoZWR1bGVkLCBub3QgeWV0IGV4ZWN1dGVkLCByZWFjdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBlbmRpbmdSZWFjdGlvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFyZSB3ZSBjdXJyZW50bHkgcHJvY2Vzc2luZyByZWFjdGlvbnM/XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzUnVubmluZ1JlYWN0aW9ucyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSXMgaXQgYWxsb3dlZCB0byBjaGFuZ2Ugb2JzZXJ2YWJsZXMgYXQgdGhpcyBwb2ludD9cbiAgICAgICAgICogSW4gZ2VuZXJhbCwgTW9iWCBkb2Vzbid0IGFsbG93IHRoYXQgd2hlbiBydW5uaW5nIGNvbXB1dGF0aW9ucyBhbmQgUmVhY3QucmVuZGVyLlxuICAgICAgICAgKiBUbyBlbnN1cmUgdGhhdCB0aG9zZSBmdW5jdGlvbnMgc3RheSBwdXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hbGxvd1N0YXRlQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyBpdCBhbGxvd2VkIHRvIHJlYWQgb2JzZXJ2YWJsZXMgYXQgdGhpcyBwb2ludD9cbiAgICAgICAgICogVXNlZCB0byBob2xkIHRoZSBzdGF0ZSBuZWVkZWQgZm9yIGBvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbmBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWxsb3dTdGF0ZVJlYWRzID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHN0cmljdCBtb2RlIGlzIGVuYWJsZWQsIHN0YXRlIGNoYW5nZXMgYXJlIGJ5IGRlZmF1bHQgbm90IGFsbG93ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZW5mb3JjZUFjdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNweSBjYWxsYmFja3NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3B5TGlzdGVuZXJzID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHbG9iYWxseSBhdHRhY2hlZCBlcnJvciBoYW5kbGVycyB0aGF0IHJlYWN0IHNwZWNpZmljYWxseSB0byBlcnJvcnMgaW4gcmVhY3Rpb25zXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2FybiBpZiBjb21wdXRlZCB2YWx1ZXMgYXJlIGFjY2Vzc2VkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogKEV4cGVyaW1lbnRhbClcbiAgICAgICAgICogV2FybiBpZiB5b3UgdHJ5IHRvIGNyZWF0ZSB0byBkZXJpdmF0aW9uIC8gcmVhY3RpdmUgY29udGV4dCB3aXRob3V0IGFjY2Vzc2luZyBhbnkgb2JzZXJ2YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIChFeHBlcmltZW50YWwpXG4gICAgICAgICAqIFdhcm4gaWYgb2JzZXJ2YWJsZXMgYXJlIGFjY2Vzc2VkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGxvd3Mgb3ZlcndyaXRpbmcgb2YgY29tcHV0ZWQgcHJvcGVydGllcywgdXNlZnVsIGluIHRlc3RzIGJ1dCBub3QgcHJvZCBhcyBpdCBjYW4gY2F1c2VcbiAgICAgICAgICogbWVtb3J5IGxlYWtzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy8xODY3XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXB1dGVkQ29uZmlndXJhYmxlID0gZmFsc2U7XG4gICAgICAgIC8qXG4gICAgICAgICAqIERvbid0IGNhdGNoIGFuZCByZXRocm93IGV4Y2VwdGlvbnMuIFRoaXMgaXMgdXNlZnVsIGZvciBpbnNwZWN0aW5nIHRoZSBzdGF0ZSBvZlxuICAgICAgICAgKiB0aGUgc3RhY2sgd2hlbiBhbiBleGNlcHRpb24gb2NjdXJzIHdoaWxlIGRlYnVnZ2luZy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9IGZhbHNlO1xuICAgICAgICAvKlxuICAgICAgICAgKiBJZiB0cnVlLCB3ZSBhcmUgYWxyZWFkeSBoYW5kbGluZyBhbiBleGNlcHRpb24gaW4gYW4gYWN0aW9uLiBBbnkgZXJyb3JzIGluIHJlYWN0aW9ucyBzaG91bGQgYmUgc3VwcHJlc3NlZCwgYXNcbiAgICAgICAgICogdGhleSBhcmUgbm90IHRoZSBjYXVzZSwgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzE4MzZcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IGZhbHNlO1xuICAgICAgICAvKlxuICAgICAgICAgKiBDdXJyZW50IGFjdGlvbiBpZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbklkID0gMDtcbiAgICAgICAgLypcbiAgICAgICAgICogTmV4dCBhY3Rpb24gaWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5leHRBY3Rpb25JZCA9IDE7XG4gICAgfVxuICAgIHJldHVybiBNb2JYR2xvYmFscztcbn0oKSk7XG52YXIgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IHRydWU7XG52YXIgaXNvbGF0ZUNhbGxlZCA9IGZhbHNlO1xudmFyIGdsb2JhbFN0YXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XG4gICAgaWYgKGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ID4gMCAmJiAhZ2xvYmFsLl9fbW9ieEdsb2JhbHMpXG4gICAgICAgIGNhbk1lcmdlR2xvYmFsU3RhdGUgPSBmYWxzZTtcbiAgICBpZiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMgJiYgZ2xvYmFsLl9fbW9ieEdsb2JhbHMudmVyc2lvbiAhPT0gbmV3IE1vYlhHbG9iYWxzKCkudmVyc2lvbilcbiAgICAgICAgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IGZhbHNlO1xuICAgIGlmICghY2FuTWVyZ2VHbG9iYWxTdGF0ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghaXNvbGF0ZUNhbGxlZCkge1xuICAgICAgICAgICAgICAgIGZhaWwoXCJUaGVyZSBhcmUgbXVsdGlwbGUsIGRpZmZlcmVudCB2ZXJzaW9ucyBvZiBNb2JYIGFjdGl2ZS4gTWFrZSBzdXJlIE1vYlggaXMgbG9hZGVkIG9ubHkgb25jZSBvciB1c2UgYGNvbmZpZ3VyZSh7IGlzb2xhdGVHbG9iYWxTdGF0ZTogdHJ1ZSB9KWBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEpO1xuICAgICAgICByZXR1cm4gbmV3IE1vYlhHbG9iYWxzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGdsb2JhbC5fX21vYnhHbG9iYWxzKSB7XG4gICAgICAgIGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ICs9IDE7XG4gICAgICAgIGlmICghZ2xvYmFsLl9fbW9ieEdsb2JhbHMuVU5DSEFOR0VEKVxuICAgICAgICAgICAgZ2xvYmFsLl9fbW9ieEdsb2JhbHMuVU5DSEFOR0VEID0ge307IC8vIG1ha2UgbWVyZ2UgYmFja3dhcmQgY29tcGF0aWJsZVxuICAgICAgICByZXR1cm4gZ2xvYmFsLl9fbW9ieEdsb2JhbHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCA9IDE7XG4gICAgICAgIHJldHVybiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMgPSBuZXcgTW9iWEdsb2JhbHMoKSk7XG4gICAgfVxufSkoKTtcbmZ1bmN0aW9uIGlzb2xhdGVHbG9iYWxTdGF0ZSgpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucy5sZW5ndGggfHxcbiAgICAgICAgZ2xvYmFsU3RhdGUuaW5CYXRjaCB8fFxuICAgICAgICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMpXG4gICAgICAgIGZhaWwoXCJpc29sYXRlR2xvYmFsU3RhdGUgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgTW9iWCBpcyBydW5uaW5nIGFueSByZWFjdGlvbnNcIik7XG4gICAgaXNvbGF0ZUNhbGxlZCA9IHRydWU7XG4gICAgaWYgKGNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcbiAgICAgICAgaWYgKC0tZ2V0R2xvYmFsKCkuX19tb2J4SW5zdGFuY2VDb3VudCA9PT0gMClcbiAgICAgICAgICAgIGdldEdsb2JhbCgpLl9fbW9ieEdsb2JhbHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGdsb2JhbFN0YXRlID0gbmV3IE1vYlhHbG9iYWxzKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0R2xvYmFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlO1xufVxuLyoqXG4gKiBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5OyB0aGlzIHdpbGwgYnJlYWsgdGhlIGludGVybmFsIHN0YXRlIG9mIGV4aXN0aW5nIG9ic2VydmFibGVzLFxuICogYnV0IGNhbiBiZSB1c2VkIHRvIGdldCBiYWNrIGF0IGEgc3RhYmxlIHN0YXRlIGFmdGVyIHRocm93aW5nIGVycm9yc1xuICovXG5mdW5jdGlvbiByZXNldEdsb2JhbFN0YXRlKCkge1xuICAgIHZhciBkZWZhdWx0R2xvYmFscyA9IG5ldyBNb2JYR2xvYmFscygpO1xuICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0R2xvYmFscylcbiAgICAgICAgaWYgKHBlcnNpc3RlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZVtrZXldID0gZGVmYXVsdEdsb2JhbHNba2V5XTtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9ICFnbG9iYWxTdGF0ZS5lbmZvcmNlQWN0aW9ucztcbn1cbnZhciBtb2NrR2xvYmFsID0ge307XG5mdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcbiAgICB9XG4gICAgcmV0dXJuIG1vY2tHbG9iYWw7XG59XG5cbmZ1bmN0aW9uIGhhc09ic2VydmVycyhvYnNlcnZhYmxlKSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUub2JzZXJ2ZXJzICYmIG9ic2VydmFibGUub2JzZXJ2ZXJzLnNpemUgPiAwO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJzKG9ic2VydmFibGUpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYnNlcnZlcnM7XG59XG4vLyBmdW5jdGlvbiBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZTogSU9ic2VydmFibGUpIHtcbi8vICAgICBjb25zdCBsaXN0ID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnNcbi8vICAgICBjb25zdCBtYXAgPSBvYnNlcnZhYmxlLm9ic2VydmVyc0luZGV4ZXNcbi8vICAgICBjb25zdCBsID0gbGlzdC5sZW5ndGhcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuLy8gICAgICAgICBjb25zdCBpZCA9IGxpc3RbaV0uX19tYXBpZFxuLy8gICAgICAgICBpZiAoaSkge1xuLy8gICAgICAgICAgICAgaW52YXJpYW50KG1hcFtpZF0gPT09IGksIFwiSU5URVJOQUwgRVJST1IgbWFwcyBkZXJpdmF0aW9uLl9fbWFwaWQgdG8gaW5kZXggaW4gbGlzdFwiKSAvLyBmb3IgcGVyZm9ybWFuY2Vcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGludmFyaWFudCghKGlkIGluIG1hcCksIFwiSU5URVJOQUwgRVJST1Igb2JzZXJ2ZXIgb24gaW5kZXggMCBzaG91bGRuJ3QgYmUgaGVsZCBpbiBtYXAuXCIpIC8vIGZvciBwZXJmb3JtYW5jZVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGludmFyaWFudChcbi8vICAgICAgICAgbGlzdC5sZW5ndGggPT09IDAgfHwgT2JqZWN0LmtleXMobWFwKS5sZW5ndGggPT09IGxpc3QubGVuZ3RoIC0gMSxcbi8vICAgICAgICAgXCJJTlRFUk5BTCBFUlJPUiB0aGVyZSBpcyBubyBqdW5rIGluIG1hcFwiXG4vLyAgICAgKVxuLy8gfVxuZnVuY3Rpb24gYWRkT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xuICAgIC8vIGludmFyaWFudChub2RlLmRlcGVuZGVuY2llc1N0YXRlICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiwgY2FuIGFkZCBvbmx5IGRlcGVuZGVuY2llc1N0YXRlICE9PSAtMVwiKTtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgPT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIGFkZCBhbHJlYWR5IGFkZGVkIG5vZGVcIik7XG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAgIG9ic2VydmFibGUub2JzZXJ2ZXJzLmFkZChub2RlKTtcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID4gbm9kZS5kZXBlbmRlbmNpZXNTdGF0ZSlcbiAgICAgICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gbm9kZS5kZXBlbmRlbmNpZXNTdGF0ZTtcbiAgICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiBkaWRuJ3QgYWRkIG5vZGVcIik7XG59XG5mdW5jdGlvbiByZW1vdmVPYnNlcnZlcihvYnNlcnZhYmxlLCBub2RlKSB7XG4gICAgLy8gaW52YXJpYW50KGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwLCBcIklOVEVSTkFMIEVSUk9SLCByZW1vdmUgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIHJlbW92ZSBhbHJlYWR5IHJlbW92ZWQgbm9kZVwiKTtcbiAgICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnMuZGVsZXRlKG5vZGUpO1xuICAgIGlmIChvYnNlcnZhYmxlLm9ic2VydmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIC8vIGRlbGV0aW5nIGxhc3Qgb2JzZXJ2ZXJcbiAgICAgICAgcXVldWVGb3JVbm9ic2VydmF0aW9uKG9ic2VydmFibGUpO1xuICAgIH1cbiAgICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpID09PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiByZW1vdmUgYWxyZWFkeSByZW1vdmVkIG5vZGUyXCIpO1xufVxuZnVuY3Rpb24gcXVldWVGb3JVbm9ic2VydmF0aW9uKG9ic2VydmFibGUpIHtcbiAgICBpZiAob2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID09PSBmYWxzZSkge1xuICAgICAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmxlbmd0aCA9PT0gMCwgXCJJTlRFUk5BTCBFUlJPUiwgc2hvdWxkIG9ubHkgcXVldWUgZm9yIHVub2JzZXJ2YXRpb24gdW5vYnNlcnZlZCBvYnNlcnZhYmxlc1wiKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID0gdHJ1ZTtcbiAgICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zLnB1c2gob2JzZXJ2YWJsZSk7XG4gICAgfVxufVxuLyoqXG4gKiBCYXRjaCBzdGFydHMgYSB0cmFuc2FjdGlvbiwgYXQgbGVhc3QgZm9yIHB1cnBvc2VzIG9mIG1lbW9pemluZyBDb21wdXRlZFZhbHVlcyB3aGVuIG5vdGhpbmcgZWxzZSBkb2VzLlxuICogRHVyaW5nIGEgYmF0Y2ggYG9uQmVjb21lVW5vYnNlcnZlZGAgd2lsbCBiZSBjYWxsZWQgYXQgbW9zdCBvbmNlIHBlciBvYnNlcnZhYmxlLlxuICogQXZvaWRzIHVubmVjZXNzYXJ5IHJlY2FsY3VsYXRpb25zLlxuICovXG5mdW5jdGlvbiBzdGFydEJhdGNoKCkge1xuICAgIGdsb2JhbFN0YXRlLmluQmF0Y2grKztcbn1cbmZ1bmN0aW9uIGVuZEJhdGNoKCkge1xuICAgIGlmICgtLWdsb2JhbFN0YXRlLmluQmF0Y2ggPT09IDApIHtcbiAgICAgICAgcnVuUmVhY3Rpb25zKCk7XG4gICAgICAgIC8vIHRoZSBiYXRjaCBpcyBhY3R1YWxseSBhYm91dCB0byBmaW5pc2gsIGFsbCB1bm9ic2VydmluZyBzaG91bGQgaGFwcGVuIGhlcmUuXG4gICAgICAgIHZhciBsaXN0ID0gZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gbGlzdFtpXTtcbiAgICAgICAgICAgIG9ic2VydmFibGUuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKG9ic2VydmFibGUub2JzZXJ2ZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBvYnNlcnZhYmxlIGhhZCByZWFjdGl2ZSBvYnNlcnZlcnMsIHRyaWdnZXIgdGhlIGhvb2tzXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGUub25CZWNvbWVVbm9ic2VydmVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb21wdXRlZCB2YWx1ZXMgYXJlIGF1dG9tYXRpY2FsbHkgdGVhcmVkIGRvd24gd2hlbiB0aGUgbGFzdCBvYnNlcnZlciBsZWF2ZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBwcm9jZXNzIGhhcHBlbnMgcmVjdXJzaXZlbHksIHRoaXMgY29tcHV0ZWQgbWlnaHQgYmUgdGhlIGxhc3Qgb2JzZXJ2YWJlIG9mIGFub3RoZXIsIGV0Yy4uXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmFibGUuc3VzcGVuZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxTdGF0ZS5wZW5kaW5nVW5vYnNlcnZhdGlvbnMgPSBbXTtcbiAgICB9XG59XG5mdW5jdGlvbiByZXBvcnRPYnNlcnZlZChvYnNlcnZhYmxlKSB7XG4gICAgY2hlY2tJZlN0YXRlUmVhZHNBcmVBbGxvd2VkKG9ic2VydmFibGUpO1xuICAgIHZhciBkZXJpdmF0aW9uID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICAgIGlmIChkZXJpdmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaW1wbGUgb3B0aW1pemF0aW9uLCBnaXZlIGVhY2ggZGVyaXZhdGlvbiBydW4gYW4gdW5pcXVlIGlkIChydW5JZClcbiAgICAgICAgICogQ2hlY2sgaWYgbGFzdCB0aW1lIHRoaXMgb2JzZXJ2YWJsZSB3YXMgYWNjZXNzZWQgdGhlIHNhbWUgcnVuSWQgaXMgdXNlZFxuICAgICAgICAgKiBpZiB0aGlzIGlzIHRoZSBjYXNlLCB0aGUgcmVsYXRpb24gaXMgYWxyZWFkeSBrbm93blxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGRlcml2YXRpb24ucnVuSWQgIT09IG9ic2VydmFibGUubGFzdEFjY2Vzc2VkQnkpIHtcbiAgICAgICAgICAgIG9ic2VydmFibGUubGFzdEFjY2Vzc2VkQnkgPSBkZXJpdmF0aW9uLnJ1bklkO1xuICAgICAgICAgICAgLy8gVHJpZWQgc3RvcmluZyBuZXdPYnNlcnZpbmcsIG9yIG9ic2VydmluZywgb3IgYm90aCBhcyBTZXQsIGJ1dCBwZXJmb3JtYW5jZSBkaWRuJ3QgY29tZSBjbG9zZS4uLlxuICAgICAgICAgICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdbZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50KytdID0gb2JzZXJ2YWJsZTtcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWQpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLmlzQmVpbmdPYnNlcnZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5vbkJlY29tZU9ic2VydmVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9ic2VydmFibGUub2JzZXJ2ZXJzLnNpemUgPT09IDAgJiYgZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDApIHtcbiAgICAgICAgcXVldWVGb3JVbm9ic2VydmF0aW9uKG9ic2VydmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vLyBmdW5jdGlvbiBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZTogSU9ic2VydmFibGUsIG1zZzogc3RyaW5nKSB7XG4vLyAgICAgLy8gaXQncyBleHBlbnNpdmUgc28gYmV0dGVyIG5vdCBydW4gaXQgaW4gcHJvZHVjaXRvbi4gYnV0IHRlbXBvcmFyaWx5IGhlbHBmdWwgZm9yIHRlc3Rpbmdcbi8vICAgICBjb25zdCBtaW4gPSBnZXRPYnNlcnZlcnMob2JzZXJ2YWJsZSkucmVkdWNlKChhLCBiKSA9PiBNYXRoLm1pbihhLCBiLmRlcGVuZGVuY2llc1N0YXRlKSwgMilcbi8vICAgICBpZiAobWluID49IG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSkgcmV0dXJuIC8vIDwtIHRoZSBvbmx5IGFzc3VtcHRpb24gYWJvdXQgYGxvd2VzdE9ic2VydmVyU3RhdGVgXG4vLyAgICAgdGhyb3cgbmV3IEVycm9yKFxuLy8gICAgICAgICBcImxvd2VzdE9ic2VydmVyU3RhdGUgaXMgd3JvbmcgZm9yIFwiICtcbi8vICAgICAgICAgICAgIG1zZyArXG4vLyAgICAgICAgICAgICBcIiBiZWNhdXNlIFwiICtcbi8vICAgICAgICAgICAgIG1pbiArXG4vLyAgICAgICAgICAgICBcIiA8IFwiICtcbi8vICAgICAgICAgICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZVxuLy8gICAgIClcbi8vIH1cbi8qKlxuICogTk9URTogY3VycmVudCBwcm9wYWdhdGlvbiBtZWNoYW5pc20gd2lsbCBpbiBjYXNlIG9mIHNlbGYgcmVydW5pbmcgYXV0b3J1bnMgYmVoYXZlIHVuZXhwZWN0ZWRseVxuICogSXQgd2lsbCBwcm9wYWdhdGUgY2hhbmdlcyB0byBvYnNlcnZlcnMgZnJvbSBwcmV2aW91cyBydW5cbiAqIEl0J3MgaGFyZCBvciBtYXliZSBpbXBvc3NpYmxlICh3aXRoIHJlYXNvbmFibGUgcGVyZikgdG8gZ2V0IGl0IHJpZ2h0IHdpdGggY3VycmVudCBhcHByb2FjaFxuICogSG9wZWZ1bGx5IHNlbGYgcmVydW5pbmcgYXV0b3J1bnMgYXJlbid0IGEgZmVhdHVyZSBwZW9wbGUgc2hvdWxkIGRlcGVuZCBvblxuICogQWxzbyBtb3N0IGJhc2ljIHVzZSBjYXNlcyBzaG91bGQgYmUgb2tcbiAqL1xuLy8gQ2FsbGVkIGJ5IEF0b20gd2hlbiBpdHMgdmFsdWUgY2hhbmdlc1xuZnVuY3Rpb24gcHJvcGFnYXRlQ2hhbmdlZChvYnNlcnZhYmxlKSB7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY2hhbmdlZCBzdGFydFwiKTtcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFKVxuICAgICAgICByZXR1cm47XG4gICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcbiAgICAvLyBJZGVhbGx5IHdlIHVzZSBmb3IuLm9mIGhlcmUsIGJ1dCB0aGUgZG93bmNvbXBpbGVkIHZlcnNpb24gaXMgcmVhbGx5IHNsb3cuLi5cbiAgICBvYnNlcnZhYmxlLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpIHtcbiAgICAgICAgICAgIGlmIChkLmlzVHJhY2luZyAhPT0gVHJhY2VNb2RlLk5PTkUpIHtcbiAgICAgICAgICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkLm9uQmVjb21lU3RhbGUoKTtcbiAgICAgICAgfVxuICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcbiAgICB9KTtcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjaGFuZ2VkIGVuZFwiKTtcbn1cbi8vIENhbGxlZCBieSBDb21wdXRlZFZhbHVlIHdoZW4gaXQgcmVjYWxjdWxhdGUgYW5kIGl0cyB2YWx1ZSBjaGFuZ2VkXG5mdW5jdGlvbiBwcm9wYWdhdGVDaGFuZ2VDb25maXJtZWQob2JzZXJ2YWJsZSkge1xuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNvbmZpcm1lZCBzdGFydFwiKTtcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFKVxuICAgICAgICByZXR1cm47XG4gICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcbiAgICBvYnNlcnZhYmxlLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlBPU1NJQkxZX1NUQUxFKVxuICAgICAgICAgICAgZC5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuU1RBTEU7XG4gICAgICAgIGVsc2UgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSAvLyB0aGlzIGhhcHBlbnMgZHVyaW5nIGNvbXB1dGluZyBvZiBgZGAsIGp1c3Qga2VlcCBsb3dlc3RPYnNlcnZlclN0YXRlIHVwIHRvIGRhdGUuXG4gICAgICAgIClcbiAgICAgICAgICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcbiAgICB9KTtcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgZW5kXCIpO1xufVxuLy8gVXNlZCBieSBjb21wdXRlZCB3aGVuIGl0cyBkZXBlbmRlbmN5IGNoYW5nZWQsIGJ1dCB3ZSBkb24ndCB3YW4ndCB0byBpbW1lZGlhdGVseSByZWNvbXB1dGUuXG5mdW5jdGlvbiBwcm9wYWdhdGVNYXliZUNoYW5nZWQob2JzZXJ2YWJsZSkge1xuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcIm1heWJlIHN0YXJ0XCIpO1xuICAgIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgIT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSlcbiAgICAgICAgcmV0dXJuO1xuICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEU7XG4gICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XG4gICAgICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRTtcbiAgICAgICAgICAgIGlmIChkLmlzVHJhY2luZyAhPT0gVHJhY2VNb2RlLk5PTkUpIHtcbiAgICAgICAgICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkLm9uQmVjb21lU3RhbGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcIm1heWJlIGVuZFwiKTtcbn1cbmZ1bmN0aW9uIGxvZ1RyYWNlSW5mbyhkZXJpdmF0aW9uLCBvYnNlcnZhYmxlKSB7XG4gICAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInIGlzIGludmFsaWRhdGVkIGR1ZSB0byBhIGNoYW5nZSBpbjogJ1wiICsgb2JzZXJ2YWJsZS5uYW1lICsgXCInXCIpO1xuICAgIGlmIChkZXJpdmF0aW9uLmlzVHJhY2luZyA9PT0gVHJhY2VNb2RlLkJSRUFLKSB7XG4gICAgICAgIHZhciBsaW5lcyA9IFtdO1xuICAgICAgICBwcmludERlcFRyZWUoZ2V0RGVwZW5kZW5jeVRyZWUoZGVyaXZhdGlvbiksIGxpbmVzLCAxKTtcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIG5ldyBGdW5jdGlvbihcImRlYnVnZ2VyO1xcbi8qXFxuVHJhY2luZyAnXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIidcXG5cXG5Zb3UgYXJlIGVudGVyaW5nIHRoaXMgYnJlYWsgcG9pbnQgYmVjYXVzZSBkZXJpdmF0aW9uICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJyBpcyBiZWluZyB0cmFjZWQgYW5kICdcIiArIG9ic2VydmFibGUubmFtZSArIFwiJyBpcyBub3cgZm9yY2luZyBpdCB0byB1cGRhdGUuXFxuSnVzdCBmb2xsb3cgdGhlIHN0YWNrdHJhY2UgeW91IHNob3VsZCBub3cgc2VlIGluIHRoZSBkZXZ0b29scyB0byBzZWUgcHJlY2lzZWx5IHdoYXQgcGllY2Ugb2YgeW91ciBjb2RlIGlzIGNhdXNpbmcgdGhpcyB1cGRhdGVcXG5UaGUgc3RhY2tmcmFtZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGlzIGF0IGxlYXN0IH42LTggc3RhY2stZnJhbWVzIHVwLlxcblxcblwiICsgKGRlcml2YXRpb24gaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlID8gZGVyaXZhdGlvbi5kZXJpdmF0aW9uLnRvU3RyaW5nKCkucmVwbGFjZSgvWypdXFwvL2csIFwiL1wiKSA6IFwiXCIpICsgXCJcXG5cXG5UaGUgZGVwZW5kZW5jaWVzIGZvciB0aGlzIGRlcml2YXRpb24gYXJlOlxcblxcblwiICsgbGluZXMuam9pbihcIlxcblwiKSArIFwiXFxuKi9cXG4gICAgXCIpKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gcHJpbnREZXBUcmVlKHRyZWUsIGxpbmVzLCBkZXB0aCkge1xuICAgIGlmIChsaW5lcy5sZW5ndGggPj0gMTAwMCkge1xuICAgICAgICBsaW5lcy5wdXNoKFwiKGFuZCBtYW55IG1vcmUpXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxpbmVzLnB1c2goXCJcIiArIG5ldyBBcnJheShkZXB0aCkuam9pbihcIlxcdFwiKSArIHRyZWUubmFtZSk7IC8vIE1XRTogbm90IHRoZSBmYXN0ZXN0LCBidXQgdGhlIGVhc2llc3Qgd2F5IDopXG4gICAgaWYgKHRyZWUuZGVwZW5kZW5jaWVzKVxuICAgICAgICB0cmVlLmRlcGVuZGVuY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gcHJpbnREZXBUcmVlKGNoaWxkLCBsaW5lcywgZGVwdGggKyAxKTsgfSk7XG59XG5cbnZhciBSZWFjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWFjdGlvbihuYW1lLCBvbkludmFsaWRhdGUsIGVycm9ySGFuZGxlciwgcmVxdWlyZXNPYnNlcnZhYmxlKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiUmVhY3Rpb25AXCIgKyBnZXROZXh0SWQoKTsgfVxuICAgICAgICBpZiAocmVxdWlyZXNPYnNlcnZhYmxlID09PSB2b2lkIDApIHsgcmVxdWlyZXNPYnNlcnZhYmxlID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5vbkludmFsaWRhdGUgPSBvbkludmFsaWRhdGU7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyID0gZXJyb3JIYW5kbGVyO1xuICAgICAgICB0aGlzLnJlcXVpcmVzT2JzZXJ2YWJsZSA9IHJlcXVpcmVzT2JzZXJ2YWJsZTtcbiAgICAgICAgdGhpcy5vYnNlcnZpbmcgPSBbXTsgLy8gbm9kZXMgd2UgYXJlIGxvb2tpbmcgYXQuIE91ciB2YWx1ZSBkZXBlbmRzIG9uIHRoZXNlIG5vZGVzXG4gICAgICAgIHRoaXMubmV3T2JzZXJ2aW5nID0gW107XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcbiAgICAgICAgdGhpcy5kaWZmVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnJ1bklkID0gMDtcbiAgICAgICAgdGhpcy51bmJvdW5kRGVwc0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fX21hcGlkID0gXCIjXCIgKyBnZXROZXh0SWQoKTtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzVHJhY2tQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVHJhY2luZyA9IFRyYWNlTW9kZS5OT05FO1xuICAgIH1cbiAgICBSZWFjdGlvbi5wcm90b3R5cGUub25CZWNvbWVTdGFsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgIH07XG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzU2NoZWR1bGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zLnB1c2godGhpcyk7XG4gICAgICAgICAgICBydW5SZWFjdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLmlzU2NoZWR1bGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTY2hlZHVsZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBpbnRlcm5hbCwgdXNlIHNjaGVkdWxlKCkgaWYgeW91IGludGVuZCB0byBraWNrIG9mZiBhIHJlYWN0aW9uXG4gICAgICovXG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLnJ1blJlYWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgICAgICAgdGhpcy5faXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzaG91bGRDb21wdXRlKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNUcmFja1BlbmRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25JbnZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc1RyYWNrUGVuZGluZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTcHlFbmFibGVkKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25JbnZhbGlkYXRlIGRpZG4ndCB0cmlnZ2VyIHRyYWNrIHJpZ2h0IGF3YXkuLlxuICAgICAgICAgICAgICAgICAgICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzY2hlZHVsZWQtcmVhY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRFeGNlcHRpb25JbkRlcml2YXRpb24oZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5kQmF0Y2goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLnRyYWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihcIlJlYWN0aW9uIGFscmVhZHkgZGlzcG9zZWRcIikgLy8gTm90ZTogTm90IGEgd2FybmluZyAvIGVycm9yIGluIG1vYnggNCBlaXRoZXJcbiAgICAgICAgfVxuICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgdmFyIHN0YXJ0VGltZTtcbiAgICAgICAgaWYgKG5vdGlmeSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVhY3Rpb25cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uKHRoaXMsIGZuLCB1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNUcmFja1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgLy8gZGlzcG9zZWQgZHVyaW5nIGxhc3QgcnVuLiBDbGVhbiB1cCBldmVyeXRoaW5nIHRoYXQgd2FzIGJvdW5kIGFmdGVyIHRoZSBkaXNwb3NlIGNhbGwuXG4gICAgICAgICAgICBjbGVhck9ic2VydmluZyh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzdWx0KSlcbiAgICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uKHJlc3VsdC5jYXVzZSk7XG4gICAgICAgIGlmIChub3RpZnkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoe1xuICAgICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCkgLSBzdGFydFRpbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmVycm9ySGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIoZXJyb3IsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzKVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJbbW9ieF0gRW5jb3VudGVyZWQgYW4gdW5jYXVnaHQgZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBieSBhIHJlYWN0aW9uIG9yIG9ic2VydmVyIGNvbXBvbmVudCwgaW46ICdcIiArIHRoaXMgKyBcIidcIjtcbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4XSAoZXJyb3IgaW4gcmVhY3Rpb24gJ1wiICsgdGhpcy5uYW1lICsgXCInIHN1cHByZXNzZWQsIGZpeCBlcnJvciBvZiBjYXVzaW5nIGFjdGlvbiBiZWxvdylcIik7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAvKiogSWYgZGVidWdnaW5nIGJyb3VnaHQgeW91IGhlcmUsIHBsZWFzZSwgcmVhZCB0aGUgYWJvdmUgbWVzc2FnZSA6LSkuIFRueCEgKi9cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTcHlFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlwiICsgZXJyb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmKGVycm9yLCBfdGhpcyk7IH0pO1xuICAgIH07XG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBkaXNwb3NlZCB3aGlsZSBydW5uaW5nLCBjbGVhbiB1cCBsYXRlci4gTWF5YmUgbm90IG9wdGltYWwsIGJ1dCByYXJlIGNhc2VcbiAgICAgICAgICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJPYnNlcnZpbmcodGhpcyk7XG4gICAgICAgICAgICAgICAgZW5kQmF0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLmdldERpc3Bvc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IHRoaXMuZGlzcG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICByWyRtb2J4XSA9IHRoaXM7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJSZWFjdGlvbltcIiArIHRoaXMubmFtZSArIFwiXVwiO1xuICAgIH07XG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLnRyYWNlID0gZnVuY3Rpb24gKGVudGVyQnJlYWtQb2ludCkge1xuICAgICAgICBpZiAoZW50ZXJCcmVha1BvaW50ID09PSB2b2lkIDApIHsgZW50ZXJCcmVha1BvaW50ID0gZmFsc2U7IH1cbiAgICAgICAgdHJhY2UodGhpcywgZW50ZXJCcmVha1BvaW50KTtcbiAgICB9O1xuICAgIHJldHVybiBSZWFjdGlvbjtcbn0oKSk7XG5mdW5jdGlvbiBvblJlYWN0aW9uRXJyb3IoaGFuZGxlcikge1xuICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICAgICAgaWYgKGlkeCA+PSAwKVxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuICAgIH07XG59XG4vKipcbiAqIE1hZ2ljIG51bWJlciBhbGVydCFcbiAqIERlZmluZXMgd2l0aGluIGhvdyBtYW55IHRpbWVzIGEgcmVhY3Rpb24gaXMgYWxsb3dlZCB0byByZS10cmlnZ2VyIGl0c2VsZlxuICogdW50aWwgaXQgaXMgYXNzdW1lZCB0aGF0IHRoaXMgaXMgZ29ubmEgYmUgYSBuZXZlciBlbmRpbmcgbG9vcC4uLlxuICovXG52YXIgTUFYX1JFQUNUSU9OX0lURVJBVElPTlMgPSAxMDA7XG52YXIgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZigpOyB9O1xuZnVuY3Rpb24gcnVuUmVhY3Rpb25zKCkge1xuICAgIC8vIFRyYW1wb2xpbmluZywgaWYgcnVuUmVhY3Rpb25zIGFyZSBhbHJlYWR5IHJ1bm5pbmcsIG5ldyByZWFjdGlvbnMgd2lsbCBiZSBwaWNrZWQgdXBcbiAgICBpZiAoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAgfHwgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zKVxuICAgICAgICByZXR1cm47XG4gICAgcmVhY3Rpb25TY2hlZHVsZXIocnVuUmVhY3Rpb25zSGVscGVyKTtcbn1cbmZ1bmN0aW9uIHJ1blJlYWN0aW9uc0hlbHBlcigpIHtcbiAgICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMgPSB0cnVlO1xuICAgIHZhciBhbGxSZWFjdGlvbnMgPSBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zO1xuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAvLyBXaGlsZSBydW5uaW5nIHJlYWN0aW9ucywgbmV3IHJlYWN0aW9ucyBtaWdodCBiZSB0cmlnZ2VyZWQuXG4gICAgLy8gSGVuY2Ugd2Ugd29yayB3aXRoIHR3byB2YXJpYWJsZXMgYW5kIGNoZWNrIHdoZXRoZXJcbiAgICAvLyB3ZSBjb252ZXJnZSB0byBubyByZW1haW5pbmcgcmVhY3Rpb25zIGFmdGVyIGEgd2hpbGUuXG4gICAgd2hpbGUgKGFsbFJlYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICgrK2l0ZXJhdGlvbnMgPT09IE1BWF9SRUFDVElPTl9JVEVSQVRJT05TKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVhY3Rpb24gZG9lc24ndCBjb252ZXJnZSB0byBhIHN0YWJsZSBzdGF0ZSBhZnRlciBcIiArIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TICsgXCIgaXRlcmF0aW9ucy5cIiArXG4gICAgICAgICAgICAgICAgKFwiIFByb2JhYmx5IHRoZXJlIGlzIGEgY3ljbGUgaW4gdGhlIHJlYWN0aXZlIGZ1bmN0aW9uOiBcIiArIGFsbFJlYWN0aW9uc1swXSkpO1xuICAgICAgICAgICAgYWxsUmVhY3Rpb25zLnNwbGljZSgwKTsgLy8gY2xlYXIgcmVhY3Rpb25zXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlbWFpbmluZ1JlYWN0aW9ucyA9IGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVtYWluaW5nUmVhY3Rpb25zLmxlbmd0aDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlYWN0aW9uc1tpXS5ydW5SZWFjdGlvbigpO1xuICAgIH1cbiAgICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcbn1cbnZhciBpc1JlYWN0aW9uID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIlJlYWN0aW9uXCIsIFJlYWN0aW9uKTtcbmZ1bmN0aW9uIHNldFJlYWN0aW9uU2NoZWR1bGVyKGZuKSB7XG4gICAgdmFyIGJhc2VTY2hlZHVsZXIgPSByZWFjdGlvblNjaGVkdWxlcjtcbiAgICByZWFjdGlvblNjaGVkdWxlciA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmbihmdW5jdGlvbiAoKSB7IHJldHVybiBiYXNlU2NoZWR1bGVyKGYpOyB9KTsgfTtcbn1cblxuZnVuY3Rpb24gaXNTcHlFbmFibGVkKCkge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgISFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoO1xufVxuZnVuY3Rpb24gc3B5UmVwb3J0KGV2ZW50KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgcmV0dXJuOyAvLyBkZWFkIGNvZGUgZWxpbWluYXRpb24gY2FuIGRvIHRoZSByZXN0XG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGxpc3RlbmVycyA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgIGxpc3RlbmVyc1tpXShldmVudCk7XG59XG5mdW5jdGlvbiBzcHlSZXBvcnRTdGFydChldmVudCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHJldHVybjtcbiAgICB2YXIgY2hhbmdlID0gX19hc3NpZ24oe30sIGV2ZW50LCB7IHNweVJlcG9ydFN0YXJ0OiB0cnVlIH0pO1xuICAgIHNweVJlcG9ydChjaGFuZ2UpO1xufVxudmFyIEVORF9FVkVOVCA9IHsgc3B5UmVwb3J0RW5kOiB0cnVlIH07XG5mdW5jdGlvbiBzcHlSZXBvcnRFbmQoY2hhbmdlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChjaGFuZ2UpXG4gICAgICAgIHNweVJlcG9ydChfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IHNweVJlcG9ydEVuZDogdHJ1ZSB9KSk7XG4gICAgZWxzZVxuICAgICAgICBzcHlSZXBvcnQoRU5EX0VWRU5UKTtcbn1cbmZ1bmN0aW9uIHNweShsaXN0ZW5lcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnguc3B5XSBJcyBhIG5vLW9wIGluIHByb2R1Y3Rpb24gYnVpbGRzXCIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMgPSBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7IHJldHVybiBsICE9PSBsaXN0ZW5lcjsgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZG9udFJlYXNzaWduRmllbGRzKCkge1xuICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQGFjdGlvbiBmaWVsZHMgYXJlIG5vdCByZWFzc2lnbmFibGVcIik7XG59XG5mdW5jdGlvbiBuYW1lZEFjdGlvbkRlY29yYXRvcihuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZGVzY3JpcHRvci5nZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKFwiQGFjdGlvbiBjYW5ub3QgYmUgdXNlZCB3aXRoIGdldHRlcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBiYWJlbCAvIHR5cGVzY3JpcHRcbiAgICAgICAgICAgIC8vIEBhY3Rpb24gbWV0aG9kKCkgeyB9XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHR5cGVzY3JpcHRcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3JlYXRlQWN0aW9uKG5hbWUsIGRlc2NyaXB0b3IudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSAvLyBmb3IgdHlwZXNjcmlwdCwgdGhpcyBtdXN0IGJlIHdyaXRhYmxlLCBvdGhlcndpc2UgaXQgY2Fubm90IGluaGVyaXQgOi8gKHNlZSBpbmhlcml0YWJsZSBhY3Rpb25zIHRlc3QpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGJhYmVsIG9ubHk6IEBhY3Rpb24gbWV0aG9kID0gKCkgPT4ge31cbiAgICAgICAgICAgIHZhciBpbml0aWFsaXplcl8xID0gZGVzY3JpcHRvci5pbml0aWFsaXplcjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE4uQjogd2UgY2FuJ3QgaW1tZWRpYXRlbHkgaW52b2tlIGluaXRpYWxpemVyOyB0aGlzIHdvdWxkIGJlIHdyb25nXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24obmFtZSwgaW5pdGlhbGl6ZXJfMS5jYWxsKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIGJvdW5kIGluc3RhbmNlIG1ldGhvZHNcbiAgICAgICAgcmV0dXJuIGFjdGlvbkZpZWxkRGVjb3JhdG9yKG5hbWUpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFjdGlvbkZpZWxkRGVjb3JhdG9yKG5hbWUpIHtcbiAgICAvLyBTaW1wbGUgcHJvcGVydHkgdGhhdCB3cml0ZXMgb24gZmlyc3QgaW52b2NhdGlvbiB0byB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZEhpZGRlblByb3AodGhpcywgcHJvcCwgYWN0aW9uKG5hbWUsIHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBib3VuZEFjdGlvbkRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvciwgYXBwbHlUb0luc3RhbmNlKSB7XG4gICAgaWYgKGFwcGx5VG9JbnN0YW5jZSA9PT0gdHJ1ZSkge1xuICAgICAgICBkZWZpbmVCb3VuZEFjdGlvbih0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvci52YWx1ZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICAvLyBpZiAoZGVzY3JpcHRvci52YWx1ZSlcbiAgICAgICAgLy8gVHlwZXNjcmlwdCAvIEJhYmVsOiBAYWN0aW9uLmJvdW5kIG1ldGhvZCgpIHsgfVxuICAgICAgICAvLyBhbHNvOiBiYWJlbCBAYWN0aW9uLmJvdW5kIG1ldGhvZCA9ICgpID0+IHt9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlZmluZUJvdW5kQWN0aW9uKHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvci52YWx1ZSB8fCBkZXNjcmlwdG9yLmluaXRpYWxpemVyLmNhbGwodGhpcykpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBkb250UmVhc3NpZ25GaWVsZHNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZmllbGQgZGVjb3JhdG9yIFR5cGVzY3JpcHQgQGFjdGlvbi5ib3VuZCBtZXRob2QgPSAoKSA9PiB7fVxuICAgIHJldHVybiB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIGRlZmluZUJvdW5kQWN0aW9uKHRoaXMsIHByb3BlcnR5TmFtZSwgdik7XG4gICAgICAgIH0sXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbnZhciBhY3Rpb24gPSBmdW5jdGlvbiBhY3Rpb24oYXJnMSwgYXJnMiwgYXJnMywgYXJnNCkge1xuICAgIC8vIGFjdGlvbihmbigpIHt9KVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMS5uYW1lIHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiLCBhcmcxKTtcbiAgICAvLyBhY3Rpb24oXCJuYW1lXCIsIGZuKCkge30pXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIGFyZzIgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUFjdGlvbihhcmcxLCBhcmcyKTtcbiAgICAvLyBAYWN0aW9uKFwibmFtZVwiKSBmbigpIHt9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZzEgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiBuYW1lZEFjdGlvbkRlY29yYXRvcihhcmcxKTtcbiAgICAvLyBAYWN0aW9uIGZuKCkge31cbiAgICBpZiAoYXJnNCA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBhcHBseSB0byBpbnN0YW5jZSBpbW1lZGlhdGVseVxuICAgICAgICBhZGRIaWRkZW5Qcm9wKGFyZzEsIGFyZzIsIGNyZWF0ZUFjdGlvbihhcmcxLm5hbWUgfHwgYXJnMiwgYXJnMy52YWx1ZSwgdGhpcykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5hbWVkQWN0aW9uRGVjb3JhdG9yKGFyZzIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxufTtcbmFjdGlvbi5ib3VuZCA9IGJvdW5kQWN0aW9uRGVjb3JhdG9yO1xuZnVuY3Rpb24gcnVuSW5BY3Rpb24oYXJnMSwgYXJnMikge1xuICAgIHZhciBhY3Rpb25OYW1lID0gdHlwZW9mIGFyZzEgPT09IFwic3RyaW5nXCIgPyBhcmcxIDogYXJnMS5uYW1lIHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiO1xuICAgIHZhciBmbiA9IHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIgPyBhcmcxIDogYXJnMjtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiAmJiBmbi5sZW5ndGggPT09IDAsIFwiYHJ1bkluQWN0aW9uYCBleHBlY3RzIGEgZnVuY3Rpb24gd2l0aG91dCBhcmd1bWVudHNcIik7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uTmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAhYWN0aW9uTmFtZSlcbiAgICAgICAgICAgIGZhaWwoXCJhY3Rpb25zIHNob3VsZCBoYXZlIHZhbGlkIG5hbWVzLCBnb3Q6ICdcIiArIGFjdGlvbk5hbWUgKyBcIidcIik7XG4gICAgfVxuICAgIHJldHVybiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGZuLCB0aGlzLCB1bmRlZmluZWQpO1xufVxuZnVuY3Rpb24gaXNBY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIgJiYgdGhpbmcuaXNNb2J4QWN0aW9uID09PSB0cnVlO1xufVxuZnVuY3Rpb24gZGVmaW5lQm91bmRBY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGZuKSB7XG4gICAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsIHByb3BlcnR5TmFtZSwgY3JlYXRlQWN0aW9uKHByb3BlcnR5TmFtZSwgZm4uYmluZCh0YXJnZXQpKSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5hbWVkIHJlYWN0aXZlIHZpZXcgYW5kIGtlZXBzIGl0IGFsaXZlLCBzbyB0aGF0IHRoZSB2aWV3IGlzIGFsd2F5c1xuICogdXBkYXRlZCBpZiBvbmUgb2YgdGhlIGRlcGVuZGVuY2llcyBjaGFuZ2VzLCBldmVuIHdoZW4gdGhlIHZpZXcgaXMgbm90IGZ1cnRoZXIgdXNlZCBieSBzb21ldGhpbmcgZWxzZS5cbiAqIEBwYXJhbSB2aWV3IFRoZSByZWFjdGl2ZSB2aWV3XG4gKiBAcmV0dXJucyBkaXNwb3NlciBmdW5jdGlvbiwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gc3RvcCB0aGUgdmlldyBmcm9tIGJlaW5nIHVwZGF0ZWQgaW4gdGhlIGZ1dHVyZS5cbiAqL1xuZnVuY3Rpb24gYXV0b3J1bih2aWV3LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0gRU1QVFlfT0JKRUNUOyB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHZpZXcgPT09IFwiZnVuY3Rpb25cIiwgXCJBdXRvcnVuIGV4cGVjdHMgYSBmdW5jdGlvbiBhcyBmaXJzdCBhcmd1bWVudFwiKTtcbiAgICAgICAgaW52YXJpYW50KGlzQWN0aW9uKHZpZXcpID09PSBmYWxzZSwgXCJBdXRvcnVuIGRvZXMgbm90IGFjY2VwdCBhY3Rpb25zIHNpbmNlIGFjdGlvbnMgYXJlIHVudHJhY2thYmxlXCIpO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IChvcHRzICYmIG9wdHMubmFtZSkgfHwgdmlldy5uYW1lIHx8IFwiQXV0b3J1bkBcIiArIGdldE5leHRJZCgpO1xuICAgIHZhciBydW5TeW5jID0gIW9wdHMuc2NoZWR1bGVyICYmICFvcHRzLmRlbGF5O1xuICAgIHZhciByZWFjdGlvbjtcbiAgICBpZiAocnVuU3luYykge1xuICAgICAgICAvLyBub3JtYWwgYXV0b3J1blxuICAgICAgICByZWFjdGlvbiA9IG5ldyBSZWFjdGlvbihuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrKHJlYWN0aW9uUnVubmVyKTtcbiAgICAgICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgc2NoZWR1bGVyXzEgPSBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKTtcbiAgICAgICAgLy8gZGVib3VuY2VkIGF1dG9ydW5cbiAgICAgICAgdmFyIGlzU2NoZWR1bGVkXzEgPSBmYWxzZTtcbiAgICAgICAgcmVhY3Rpb24gPSBuZXcgUmVhY3Rpb24obmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFpc1NjaGVkdWxlZF8xKSB7XG4gICAgICAgICAgICAgICAgaXNTY2hlZHVsZWRfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVyXzEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZF8xID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVhY3Rpb24uaXNEaXNwb3NlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uLnRyYWNrKHJlYWN0aW9uUnVubmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlYWN0aW9uUnVubmVyKCkge1xuICAgICAgICB2aWV3KHJlYWN0aW9uKTtcbiAgICB9XG4gICAgcmVhY3Rpb24uc2NoZWR1bGUoKTtcbiAgICByZXR1cm4gcmVhY3Rpb24uZ2V0RGlzcG9zZXIoKTtcbn1cbnZhciBydW4gPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZigpOyB9O1xuZnVuY3Rpb24gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cykge1xuICAgIHJldHVybiBvcHRzLnNjaGVkdWxlclxuICAgICAgICA/IG9wdHMuc2NoZWR1bGVyXG4gICAgICAgIDogb3B0cy5kZWxheVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoZikgeyByZXR1cm4gc2V0VGltZW91dChmLCBvcHRzLmRlbGF5KTsgfVxuICAgICAgICAgICAgOiBydW47XG59XG5mdW5jdGlvbiByZWFjdGlvbihleHByZXNzaW9uLCBlZmZlY3QsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSBFTVBUWV9PQkpFQ1Q7IH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiLCBcIkZpcnN0IGFyZ3VtZW50IHRvIHJlYWN0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIG9wdHMgPT09IFwib2JqZWN0XCIsIFwiVGhpcmQgYXJndW1lbnQgb2YgcmVhY3Rpb25zIHNob3VsZCBiZSBhbiBvYmplY3RcIik7XG4gICAgfVxuICAgIHZhciBuYW1lID0gb3B0cy5uYW1lIHx8IFwiUmVhY3Rpb25AXCIgKyBnZXROZXh0SWQoKTtcbiAgICB2YXIgZWZmZWN0QWN0aW9uID0gYWN0aW9uKG5hbWUsIG9wdHMub25FcnJvciA/IHdyYXBFcnJvckhhbmRsZXIob3B0cy5vbkVycm9yLCBlZmZlY3QpIDogZWZmZWN0KTtcbiAgICB2YXIgcnVuU3luYyA9ICFvcHRzLnNjaGVkdWxlciAmJiAhb3B0cy5kZWxheTtcbiAgICB2YXIgc2NoZWR1bGVyID0gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cyk7XG4gICAgdmFyIGZpcnN0VGltZSA9IHRydWU7XG4gICAgdmFyIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhciBlcXVhbHMgPSBvcHRzLmNvbXBhcmVTdHJ1Y3R1cmFsXG4gICAgICAgID8gY29tcGFyZXIuc3RydWN0dXJhbFxuICAgICAgICA6IG9wdHMuZXF1YWxzIHx8IGNvbXBhcmVyLmRlZmF1bHQ7XG4gICAgdmFyIHIgPSBuZXcgUmVhY3Rpb24obmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZmlyc3RUaW1lIHx8IHJ1blN5bmMpIHtcbiAgICAgICAgICAgIHJlYWN0aW9uUnVubmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWlzU2NoZWR1bGVkKSB7XG4gICAgICAgICAgICBpc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICBzY2hlZHVsZXIocmVhY3Rpb25SdW5uZXIpO1xuICAgICAgICB9XG4gICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XG4gICAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XG4gICAgICAgIGlzU2NoZWR1bGVkID0gZmFsc2U7IC8vIFE6IG1vdmUgaW50byByZWFjdGlvbiBydW5uZXI/XG4gICAgICAgIGlmIChyLmlzRGlzcG9zZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHIudHJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IGV4cHJlc3Npb24ocik7XG4gICAgICAgICAgICBjaGFuZ2VkID0gZmlyc3RUaW1lIHx8ICFlcXVhbHModmFsdWUsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmaXJzdFRpbWUgJiYgb3B0cy5maXJlSW1tZWRpYXRlbHkpXG4gICAgICAgICAgICBlZmZlY3RBY3Rpb24odmFsdWUsIHIpO1xuICAgICAgICBpZiAoIWZpcnN0VGltZSAmJiBjaGFuZ2VkID09PSB0cnVlKVxuICAgICAgICAgICAgZWZmZWN0QWN0aW9uKHZhbHVlLCByKTtcbiAgICAgICAgaWYgKGZpcnN0VGltZSlcbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgIH1cbiAgICByLnNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHIuZ2V0RGlzcG9zZXIoKTtcbn1cbmZ1bmN0aW9uIHdyYXBFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLCBiYXNlRm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGJhc2VGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG9uQmVjb21lT2JzZXJ2ZWQodGhpbmcsIGFyZzIsIGFyZzMpIHtcbiAgICByZXR1cm4gaW50ZXJjZXB0SG9vayhcIm9uQmVjb21lT2JzZXJ2ZWRcIiwgdGhpbmcsIGFyZzIsIGFyZzMpO1xufVxuZnVuY3Rpb24gb25CZWNvbWVVbm9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczKSB7XG4gICAgcmV0dXJuIGludGVyY2VwdEhvb2soXCJvbkJlY29tZVVub2JzZXJ2ZWRcIiwgdGhpbmcsIGFyZzIsIGFyZzMpO1xufVxuZnVuY3Rpb24gaW50ZXJjZXB0SG9vayhob29rLCB0aGluZywgYXJnMiwgYXJnMykge1xuICAgIHZhciBhdG9tID0gdHlwZW9mIGFyZzMgPT09IFwiZnVuY3Rpb25cIiA/IGdldEF0b20odGhpbmcsIGFyZzIpIDogZ2V0QXRvbSh0aGluZyk7XG4gICAgdmFyIGNiID0gdHlwZW9mIGFyZzMgPT09IFwiZnVuY3Rpb25cIiA/IGFyZzMgOiBhcmcyO1xuICAgIHZhciBsaXN0ZW5lcnNLZXkgPSBob29rICsgXCJMaXN0ZW5lcnNcIjtcbiAgICBpZiAoYXRvbVtsaXN0ZW5lcnNLZXldKSB7XG4gICAgICAgIGF0b21bbGlzdGVuZXJzS2V5XS5hZGQoY2IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXRvbVtsaXN0ZW5lcnNLZXldID0gbmV3IFNldChbY2JdKTtcbiAgICB9XG4gICAgdmFyIG9yaWcgPSBhdG9tW2hvb2tdO1xuICAgIGlmICh0eXBlb2Ygb3JpZyAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJOb3QgYW4gYXRvbSB0aGF0IGNhbiBiZSAodW4pb2JzZXJ2ZWRcIik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhvb2tMaXN0ZW5lcnMgPSBhdG9tW2xpc3RlbmVyc0tleV07XG4gICAgICAgIGlmIChob29rTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBob29rTGlzdGVuZXJzLmRlbGV0ZShjYik7XG4gICAgICAgICAgICBpZiAoaG9va0xpc3RlbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGF0b21bbGlzdGVuZXJzS2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZShvcHRpb25zKSB7XG4gICAgdmFyIGVuZm9yY2VBY3Rpb25zID0gb3B0aW9ucy5lbmZvcmNlQWN0aW9ucywgY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uID0gb3B0aW9ucy5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24sIGNvbXB1dGVkQ29uZmlndXJhYmxlID0gb3B0aW9ucy5jb21wdXRlZENvbmZpZ3VyYWJsZSwgZGlzYWJsZUVycm9yQm91bmRhcmllcyA9IG9wdGlvbnMuZGlzYWJsZUVycm9yQm91bmRhcmllcywgcmVhY3Rpb25TY2hlZHVsZXIgPSBvcHRpb25zLnJlYWN0aW9uU2NoZWR1bGVyLCByZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSA9IG9wdGlvbnMucmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUsIG9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gb3B0aW9ucy5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbjtcbiAgICBpZiAob3B0aW9ucy5pc29sYXRlR2xvYmFsU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgaXNvbGF0ZUdsb2JhbFN0YXRlKCk7XG4gICAgfVxuICAgIGlmIChlbmZvcmNlQWN0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW5mb3JjZUFjdGlvbnMgPT09IFwiYm9vbGVhblwiIHx8IGVuZm9yY2VBY3Rpb25zID09PSBcInN0cmljdFwiKVxuICAgICAgICAgICAgZGVwcmVjYXRlZChcIkRlcHJlY2F0ZWQgdmFsdWUgZm9yICdlbmZvcmNlQWN0aW9ucycsIHVzZSAnZmFsc2UnID0+ICdcXFwibmV2ZXJcXFwiJywgJ3RydWUnID0+ICdcXFwib2JzZXJ2ZWRcXFwiJywgJ1xcXCJzdHJpY3RcXFwiJyA9PiBcXFwiJ2Fsd2F5cydcXFwiIGluc3RlYWRcIik7XG4gICAgICAgIHZhciBlYSA9IHZvaWQgMDtcbiAgICAgICAgc3dpdGNoIChlbmZvcmNlQWN0aW9ucykge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgY2FzZSBcIm9ic2VydmVkXCI6XG4gICAgICAgICAgICAgICAgZWEgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgIGNhc2UgXCJuZXZlclwiOlxuICAgICAgICAgICAgICAgIGVhID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3RyaWN0XCI6XG4gICAgICAgICAgICBjYXNlIFwiYWx3YXlzXCI6XG4gICAgICAgICAgICAgICAgZWEgPSBcInN0cmljdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmYWlsKFwiSW52YWxpZCB2YWx1ZSBmb3IgJ2VuZm9yY2VBY3Rpb25zJzogJ1wiICsgZW5mb3JjZUFjdGlvbnMgKyBcIicsIGV4cGVjdGVkICduZXZlcicsICdhbHdheXMnIG9yICdvYnNlcnZlZCdcIik7XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPSBlYTtcbiAgICAgICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSBlYSA9PT0gdHJ1ZSB8fCBlYSA9PT0gXCJzdHJpY3RcIiA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiA9ICEhY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uO1xuICAgIH1cbiAgICBpZiAocmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBnbG9iYWxTdGF0ZS5yZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSA9ICEhcmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGU7XG4gICAgfVxuICAgIGlmIChvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gISFvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbjtcbiAgICAgICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzID0gIWdsb2JhbFN0YXRlLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uO1xuICAgIH1cbiAgICBpZiAoY29tcHV0ZWRDb25maWd1cmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBnbG9iYWxTdGF0ZS5jb21wdXRlZENvbmZpZ3VyYWJsZSA9ICEhY29tcHV0ZWRDb25maWd1cmFibGU7XG4gICAgfVxuICAgIGlmIChkaXNhYmxlRXJyb3JCb3VuZGFyaWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXQVJOSU5HOiBEZWJ1ZyBmZWF0dXJlIG9ubHkuIE1vYlggd2lsbCBOT1QgcmVjb3ZlciBmcm9tIGVycm9ycyB3aGVuIGBkaXNhYmxlRXJyb3JCb3VuZGFyaWVzYCBpcyBlbmFibGVkLlwiKTtcbiAgICAgICAgZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9ICEhZGlzYWJsZUVycm9yQm91bmRhcmllcztcbiAgICB9XG4gICAgaWYgKHJlYWN0aW9uU2NoZWR1bGVyKSB7XG4gICAgICAgIHNldFJlYWN0aW9uU2NoZWR1bGVyKHJlYWN0aW9uU2NoZWR1bGVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlY29yYXRlKHRoaW5nLCBkZWNvcmF0b3JzKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIGludmFyaWFudChpc1BsYWluT2JqZWN0KGRlY29yYXRvcnMpLCBcIkRlY29yYXRvcnMgc2hvdWxkIGJlIGEga2V5IHZhbHVlIG1hcFwiKTtcbiAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIgPyB0aGluZy5wcm90b3R5cGUgOiB0aGluZztcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eURlY29yYXRvcnMgPSBkZWNvcmF0b3JzW3Byb3BdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcGVydHlEZWNvcmF0b3JzKSkge1xuICAgICAgICAgICAgcHJvcGVydHlEZWNvcmF0b3JzID0gW3Byb3BlcnR5RGVjb3JhdG9yc107XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBpbnZhcmlhbnQocHJvcGVydHlEZWNvcmF0b3JzLmV2ZXJ5KGZ1bmN0aW9uIChkZWNvcmF0b3IpIHsgcmV0dXJuIHR5cGVvZiBkZWNvcmF0b3IgPT09IFwiZnVuY3Rpb25cIjsgfSksIFwiRGVjb3JhdGU6IGV4cGVjdGVkIGEgZGVjb3JhdG9yIGZ1bmN0aW9uIG9yIGFycmF5IG9mIGRlY29yYXRvciBmdW5jdGlvbnMgZm9yICdcIiArIHByb3AgKyBcIidcIik7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3ApO1xuICAgICAgICB2YXIgbmV3RGVzY3JpcHRvciA9IHByb3BlcnR5RGVjb3JhdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKGFjY0Rlc2NyaXB0b3IsIGRlY29yYXRvcikgeyByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcCwgYWNjRGVzY3JpcHRvcik7IH0sIGRlc2NyaXB0b3IpO1xuICAgICAgICBpZiAobmV3RGVzY3JpcHRvcilcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIG5ld0Rlc2NyaXB0b3IpO1xuICAgIH07XG4gICAgZm9yICh2YXIgcHJvcCBpbiBkZWNvcmF0b3JzKSB7XG4gICAgICAgIF9sb29wXzEocHJvcCk7XG4gICAgfVxuICAgIHJldHVybiB0aGluZztcbn1cblxuZnVuY3Rpb24gZXh0ZW5kT2JzZXJ2YWJsZSh0YXJnZXQsIHByb3BlcnRpZXMsIGRlY29yYXRvcnMsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudChhcmd1bWVudHMubGVuZ3RoID49IDIgJiYgYXJndW1lbnRzLmxlbmd0aCA8PSA0LCBcIidleHRlbmRPYnNlcnZhYmxlJyBleHBlY3RlZCAyLTQgYXJndW1lbnRzXCIpO1xuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHRhcmdldCA9PT0gXCJvYmplY3RcIiwgXCInZXh0ZW5kT2JzZXJ2YWJsZScgZXhwZWN0cyBhbiBvYmplY3QgYXMgZmlyc3QgYXJndW1lbnRcIik7XG4gICAgICAgIGludmFyaWFudCghaXNPYnNlcnZhYmxlTWFwKHRhcmdldCksIFwiJ2V4dGVuZE9ic2VydmFibGUnIHNob3VsZCBub3QgYmUgdXNlZCBvbiBtYXBzLCB1c2UgbWFwLm1lcmdlIGluc3RlYWRcIik7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIHZhciBkZWZhdWx0RGVjb3JhdG9yID0gZ2V0RGVmYXVsdERlY29yYXRvckZyb21PYmplY3RPcHRpb25zKG9wdGlvbnMpO1xuICAgIGluaXRpYWxpemVJbnN0YW5jZSh0YXJnZXQpOyAvLyBGaXhlcyAjMTc0MFxuICAgIGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG9wdGlvbnMubmFtZSwgZGVmYXVsdERlY29yYXRvci5lbmhhbmNlcik7IC8vIG1ha2Ugc3VyZSBvYmplY3QgaXMgb2JzZXJ2YWJsZSwgZXZlbiB3aXRob3V0IGluaXRpYWwgcHJvcHNcbiAgICBpZiAocHJvcGVydGllcylcbiAgICAgICAgZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcik7XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZGVmYXVsdERlY29yYXRvciB8fCAob3B0aW9ucy5kZWVwID09PSBmYWxzZSA/IHJlZkRlY29yYXRvciA6IGRlZXBEZWNvcmF0b3IpO1xufVxuZnVuY3Rpb24gZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcikge1xuICAgIHZhciBlXzEsIF9hLCBlXzIsIF9iO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaW52YXJpYW50KCFpc09ic2VydmFibGUocHJvcGVydGllcyksIFwiRXh0ZW5kaW5nIGFuIG9iamVjdCB3aXRoIGFub3RoZXIgb2JzZXJ2YWJsZSAob2JqZWN0KSBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgY29uc3RydWN0IGFuIGV4cGxpY2l0IHByb3BlcnR5bWFwLCB1c2luZyBgdG9KU2AgaWYgbmVlZC4gU2VlIGlzc3VlICM1NDBcIik7XG4gICAgICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IGdldFBsYWluT2JqZWN0S2V5cyhkZWNvcmF0b3JzKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5c18xID0gX192YWx1ZXMoa2V5cyksIGtleXNfMV8xID0ga2V5c18xLm5leHQoKTsgIWtleXNfMV8xLmRvbmU7IGtleXNfMV8xID0ga2V5c18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBwcm9wZXJ0aWVzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoXCJUcnlpbmcgdG8gZGVjbGFyZSBhIGRlY29yYXRvciBmb3IgdW5zcGVjaWZpZWQgcHJvcGVydHkgJ1wiICsgc3RyaW5naWZ5S2V5KGtleSkgKyBcIidcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlzXzFfMSAmJiAha2V5c18xXzEuZG9uZSAmJiAoX2EgPSBrZXlzXzEucmV0dXJuKSkgX2EuY2FsbChrZXlzXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRCYXRjaCgpO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBrZXlzID0gZ2V0UGxhaW5PYmplY3RLZXlzKHByb3BlcnRpZXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5c18yID0gX192YWx1ZXMoa2V5cyksIGtleXNfMl8xID0ga2V5c18yLm5leHQoKTsgIWtleXNfMl8xLmRvbmU7IGtleXNfMl8xID0ga2V5c18yLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzXzJfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvcGVydGllcywga2V5KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNQbGFpbk9iamVjdChwcm9wZXJ0aWVzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoXCInZXh0ZW5kT2JzZXJ2YWJlJyBvbmx5IGFjY2VwdHMgcGxhaW4gb2JqZWN0cyBhcyBzZWNvbmQgYXJndW1lbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoXCInZXh0ZW5kT2JzZXJ2YWJsZScgY2FuIG9ubHkgYmUgdXNlZCB0byBpbnRyb2R1Y2UgbmV3IHByb3BlcnRpZXMuIFVzZSAnc2V0JyBvciAnZGVjb3JhdGUnIGluc3RlYWQuIFRoZSBwcm9wZXJ0eSAnXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiJyBhbHJlYWR5IGV4aXN0cyBvbiAnXCIgKyB0YXJnZXQgKyBcIidcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXB1dGVkKGRlc2NyaXB0b3IudmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChcIlBhc3NpbmcgYSAnY29tcHV0ZWQnIGFzIGluaXRpYWwgcHJvcGVydHkgdmFsdWUgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBieSBleHRlbmRPYnNlcnZhYmxlLiBVc2UgYSBnZXR0ZXIgb3IgZGVjb3JhdG9yIGluc3RlYWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzICYmIGtleSBpbiBkZWNvcmF0b3JzXG4gICAgICAgICAgICAgICAgICAgID8gZGVjb3JhdG9yc1trZXldXG4gICAgICAgICAgICAgICAgICAgIDogZGVzY3JpcHRvci5nZXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29tcHV0ZWREZWNvcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdERlY29yYXRvcjtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHR5cGVvZiBkZWNvcmF0b3IgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgZmFpbChcIk5vdCBhIHZhbGlkIGRlY29yYXRvciBmb3IgJ1wiICsgc3RyaW5naWZ5S2V5KGtleSkgKyBcIicsIGdvdDogXCIgKyBkZWNvcmF0b3IpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHREZXNjcmlwdG9yID0gZGVjb3JhdG9yKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0RGVzY3JpcHRvciAvLyBvdGhlcndpc2UsIGFzc3VtZSBhbHJlYWR5IGFwcGxpZWQsIGR1ZSB0byBgYXBwbHlUb0luc3RhbmNlYFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByZXN1bHREZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXNfMl8xICYmICFrZXlzXzJfMS5kb25lICYmIChfYiA9IGtleXNfMi5yZXR1cm4pKSBfYi5jYWxsKGtleXNfMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmN5VHJlZSh0aGluZywgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gbm9kZVRvRGVwZW5kZW5jeVRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbn1cbmZ1bmN0aW9uIG5vZGVUb0RlcGVuZGVuY3lUcmVlKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBub2RlLm5hbWVcbiAgICB9O1xuICAgIGlmIChub2RlLm9ic2VydmluZyAmJiBub2RlLm9ic2VydmluZy5sZW5ndGggPiAwKVxuICAgICAgICByZXN1bHQuZGVwZW5kZW5jaWVzID0gdW5pcXVlKG5vZGUub2JzZXJ2aW5nKS5tYXAobm9kZVRvRGVwZW5kZW5jeVRyZWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlclRyZWUodGhpbmcsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIG5vZGVUb09ic2VydmVyVHJlZShnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpO1xufVxuZnVuY3Rpb24gbm9kZVRvT2JzZXJ2ZXJUcmVlKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBub2RlLm5hbWVcbiAgICB9O1xuICAgIGlmIChoYXNPYnNlcnZlcnMobm9kZSkpXG4gICAgICAgIHJlc3VsdC5vYnNlcnZlcnMgPSBBcnJheS5mcm9tKGdldE9ic2VydmVycyhub2RlKSkubWFwKG5vZGVUb09ic2VydmVyVHJlZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIGdlbmVyYXRvcklkID0gMDtcbmZ1bmN0aW9uIGZsb3coZ2VuZXJhdG9yKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpXG4gICAgICAgIGZhaWwoISFwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBcIkZsb3cgZXhwZWN0cyBvbmUgMSBhcmd1bWVudCBhbmQgY2Fubm90IGJlIHVzZWQgYXMgZGVjb3JhdG9yXCIpO1xuICAgIHZhciBuYW1lID0gZ2VuZXJhdG9yLm5hbWUgfHwgXCI8dW5uYW1lZCBmbG93PlwiO1xuICAgIC8vIEltcGxlbWVudGF0aW9uIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90ai9jby9ibG9iL21hc3Rlci9pbmRleC5qc1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzO1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgdmFyIHJ1bklkID0gKytnZW5lcmF0b3JJZDtcbiAgICAgICAgdmFyIGdlbiA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0gaW5pdFwiLCBnZW5lcmF0b3IpLmFwcGx5KGN0eCwgYXJncyk7XG4gICAgICAgIHZhciByZWplY3RvcjtcbiAgICAgICAgdmFyIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdGVwSWQgPSAwO1xuICAgICAgICAgICAgcmVqZWN0b3IgPSByZWplY3Q7XG4gICAgICAgICAgICBmdW5jdGlvbiBvbkZ1bGZpbGxlZChyZXMpIHtcbiAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB2YXIgcmV0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0geWllbGQgXCIgKyBzdGVwSWQrKywgZ2VuLm5leHQpLmNhbGwoZ2VuLCByZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0KHJldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBvblJlamVjdGVkKGVycikge1xuICAgICAgICAgICAgICAgIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHZhciByZXQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gYWN0aW9uKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSB5aWVsZCBcIiArIHN0ZXBJZCsrLCBnZW4udGhyb3cpLmNhbGwoZ2VuLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0KHJldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBuZXh0KHJldCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXQgJiYgdHlwZW9mIHJldC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYW4gYXN5bmMgaXRlcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgcmV0LnRoZW4obmV4dCwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmV0LmRvbmUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVuZGluZ1Byb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkZ1bGZpbGxlZCh1bmRlZmluZWQpOyAvLyBraWNrIG9mZiB0aGUgcHJvY2Vzc1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvbWlzZS5jYW5jZWwgPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIGNhbmNlbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nUHJvbWlzZSlcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsUHJvbWlzZShwZW5kaW5nUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgLy8gRmluYWxseSBibG9jayBjYW4gcmV0dXJuIChvciB5aWVsZCkgc3R1ZmYuLlxuICAgICAgICAgICAgICAgIHZhciByZXMgPSBnZW4ucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgLy8gZWF0IGFueXRoaW5nIHRoYXQgcHJvbWlzZSB3b3VsZCBkbywgaXQncyBjYW5jZWxsZWQhXG4gICAgICAgICAgICAgICAgdmFyIHlpZWxkZWRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJlcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgeWllbGRlZFByb21pc2UudGhlbihub29wLCBub29wKTtcbiAgICAgICAgICAgICAgICBjYW5jZWxQcm9taXNlKHlpZWxkZWRQcm9taXNlKTsgLy8gbWF5YmUgaXQgY2FuIGJlIGNhbmNlbGxlZCA6KVxuICAgICAgICAgICAgICAgIC8vIHJlamVjdCBvdXIgb3JpZ2luYWwgcHJvbWlzZVxuICAgICAgICAgICAgICAgIHJlamVjdG9yKG5ldyBFcnJvcihcIkZMT1dfQ0FOQ0VMTEVEXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0b3IoZSk7IC8vIHRoZXJlIGNvdWxkIGJlIGEgdGhyb3dpbmcgZmluYWxseSBibG9ja1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNhbmNlbFByb21pc2UocHJvbWlzZSkge1xuICAgIGlmICh0eXBlb2YgcHJvbWlzZS5jYW5jZWwgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcHJvbWlzZS5jYW5jZWwoKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0UmVhZHModGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgICB2YXIgdGFyZ2V0O1xuICAgIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSB8fCBpc09ic2VydmFibGVWYWx1ZSh0aGluZykpIHtcbiAgICAgICAgdGFyZ2V0ID0gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcE9ySGFuZGxlciAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgIFwiSW50ZXJjZXB0UmVhZHMgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGEgc3BlY2lmaWMgcHJvcGVydHksIG5vdCB3aXRoIGFuIG9iamVjdCBpbiBnZW5lcmFsXCIpO1xuICAgICAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcE9ySGFuZGxlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiRXhwZWN0ZWQgb2JzZXJ2YWJsZSBtYXAsIG9iamVjdCBvciBhcnJheSBhcyBmaXJzdCBhcnJheVwiKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJBbiBpbnRlcmNlcHQgcmVhZGVyIHdhcyBhbHJlYWR5IGVzdGFibGlzaGVkXCIpO1xuICAgIHRhcmdldC5kZWhhbmNlciA9IHR5cGVvZiBwcm9wT3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wT3JIYW5kbGVyIDogaGFuZGxlcjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB0YXJnZXQuZGVoYW5jZXIgPSB1bmRlZmluZWQ7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0KHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKSB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcik7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gaW50ZXJjZXB0SW50ZXJjZXB0YWJsZSh0aGluZywgcHJvcE9ySGFuZGxlcik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKS5pbnRlcmNlcHQoaGFuZGxlcik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BlcnR5KS5pbnRlcmNlcHQoaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIF9pc0NvbXB1dGVkKHZhbHVlLCBwcm9wZXJ0eSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkgPT09IGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIXZhbHVlWyRtb2J4XS52YWx1ZXMuaGFzKHByb3BlcnR5KSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGF0b20gPSBnZXRBdG9tKHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUoYXRvbSk7XG4gICAgfVxuICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNDb21wdXRlZCh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSlcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcImlzQ29tcHV0ZWQgZXhwZWN0cyBvbmx5IDEgYXJndW1lbnQuIFVzZSBpc09ic2VydmFibGVQcm9wIHRvIGluc3BlY3QgdGhlIG9ic2VydmFiaWxpdHkgb2YgYSBwcm9wZXJ0eVwiKTtcbiAgICByZXR1cm4gX2lzQ29tcHV0ZWQodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNDb21wdXRlZFByb3AodmFsdWUsIHByb3BOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wTmFtZSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcImlzQ29tcHV0ZWQgZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcbiAgICByZXR1cm4gX2lzQ29tcHV0ZWQodmFsdWUsIHByb3BOYW1lKTtcbn1cblxuZnVuY3Rpb24gX2lzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIChpc09ic2VydmFibGVNYXAodmFsdWUpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHZhbHVlKSkpXG4gICAgICAgICAgICByZXR1cm4gZmFpbChcImlzT2JzZXJ2YWJsZShvYmplY3QsIHByb3BlcnR5TmFtZSkgaXMgbm90IHN1cHBvcnRlZCBmb3IgYXJyYXlzIGFuZCBtYXBzLiBVc2UgbWFwLmhhcyBvciBhcnJheS5sZW5ndGggaW5zdGVhZC5cIik7XG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVbJG1vYnhdLnZhbHVlcy5oYXMocHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gRm9yIGZpcnN0IGNoZWNrLCBzZWUgIzcwMVxuICAgIHJldHVybiAoaXNPYnNlcnZhYmxlT2JqZWN0KHZhbHVlKSB8fFxuICAgICAgICAhIXZhbHVlWyRtb2J4XSB8fFxuICAgICAgICBpc0F0b20odmFsdWUpIHx8XG4gICAgICAgIGlzUmVhY3Rpb24odmFsdWUpIHx8XG4gICAgICAgIGlzQ29tcHV0ZWRWYWx1ZSh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpXG4gICAgICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcImlzT2JzZXJ2YWJsZSBleHBlY3RzIG9ubHkgMSBhcmd1bWVudC4gVXNlIGlzT2JzZXJ2YWJsZVByb3AgdG8gaW5zcGVjdCB0aGUgb2JzZXJ2YWJpbGl0eSBvZiBhIHByb3BlcnR5XCIpO1xuICAgIHJldHVybiBfaXNPYnNlcnZhYmxlKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZVByb3AodmFsdWUsIHByb3BOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wTmFtZSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcbiAgICByZXR1cm4gX2lzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcE5hbWUpO1xufVxuXG5mdW5jdGlvbiBrZXlzKG9iaikge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqWyRtb2J4XS5nZXRLZXlzKCk7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShvYmoua2V5cygpKTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iai5rZXlzKCkpO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHsgcmV0dXJuIGluZGV4OyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiJ2tleXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cywgc2V0cyBhbmQgbWFwc1wiKTtcbn1cbmZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqW2tleV07IH0pO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqLmdldChrZXkpOyB9KTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iai52YWx1ZXMoKSk7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmouc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiJ3ZhbHVlcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzLCBzZXRzIGFuZCBtYXBzXCIpO1xufVxuZnVuY3Rpb24gZW50cmllcyhvYmopIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gW2tleSwgb2JqW2tleV1dOyB9KTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgICAgIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFtrZXksIG9iai5nZXQoa2V5KV07IH0pO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSk7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7IHJldHVybiBbaW5kZXgsIGtleV07IH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgXCInZW50cmllcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xufVxuZnVuY3Rpb24gc2V0KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgIHZhciB2YWx1ZXNfMSA9IGtleTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleV8xIGluIHZhbHVlc18xKVxuICAgICAgICAgICAgICAgIHNldChvYmosIGtleV8xLCB2YWx1ZXNfMVtrZXlfMV0pO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgZW5kQmF0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICB2YXIgYWRtID0gb2JqWyRtb2J4XTtcbiAgICAgICAgdmFyIGV4aXN0aW5nT2JzZXJ2YWJsZSA9IGFkbS52YWx1ZXMuZ2V0KGtleSk7XG4gICAgICAgIGlmIChleGlzdGluZ09ic2VydmFibGUpIHtcbiAgICAgICAgICAgIGFkbS53cml0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkbS5hZGRPYnNlcnZhYmxlUHJvcChrZXksIHZhbHVlLCBhZG0uZGVmYXVsdEVuaGFuY2VyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgICAgICBvYmouc2V0KGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgICAgICBvYmouYWRkKGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICBrZXkgPSBwYXJzZUludChrZXksIDEwKTtcbiAgICAgICAgaW52YXJpYW50KGtleSA+PSAwLCBcIk5vdCBhIHZhbGlkIGluZGV4OiAnXCIgKyBrZXkgKyBcIidcIik7XG4gICAgICAgIHN0YXJ0QmF0Y2goKTtcbiAgICAgICAgaWYgKGtleSA+PSBvYmoubGVuZ3RoKVxuICAgICAgICAgICAgb2JqLmxlbmd0aCA9IGtleSArIDE7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiJ3NldCgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZShvYmosIGtleSkge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICBvYmpbJG1vYnhdLnJlbW92ZShrZXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgICAgICBvYmouZGVsZXRlKGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgICAgIG9iai5kZWxldGUoa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgIGtleSA9IHBhcnNlSW50KGtleSwgMTApO1xuICAgICAgICBpbnZhcmlhbnQoa2V5ID49IDAsIFwiTm90IGEgdmFsaWQgaW5kZXg6ICdcIiArIGtleSArIFwiJ1wiKTtcbiAgICAgICAgb2JqLnNwbGljZShrZXksIDEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcIidyZW1vdmUoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBoYXMob2JqLCBrZXkpIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICAgICAgLy8gcmV0dXJuIGtleXMob2JqKS5pbmRleE9mKGtleSkgPj0gMFxuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtaW5pc3RyYXRpb24ob2JqKTtcbiAgICAgICAgcmV0dXJuIGFkbS5oYXMoa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5oYXMoa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5oYXMoa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICByZXR1cm4ga2V5ID49IDAgJiYga2V5IDwgb2JqLmxlbmd0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgXCInaGFzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0KG9iaiwga2V5KSB7XG4gICAgaWYgKCFoYXMob2JqLCBrZXkpKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmouZ2V0KGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcIidnZXQoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9ic2VydmUodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgaWYgKHR5cGVvZiBjYk9yRmlyZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gb2JzZXJ2ZU9ic2VydmFibGVQcm9wZXJ0eSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlLCBmaXJlSW1tZWRpYXRlbHkpO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIG9ic2VydmVPYnNlcnZhYmxlKHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUpO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpLm9ic2VydmUobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XG59XG5mdW5jdGlvbiBvYnNlcnZlT2JzZXJ2YWJsZVByb3BlcnR5KHRoaW5nLCBwcm9wZXJ0eSwgbGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLm9ic2VydmUobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XG59XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBkZXRlY3RDeWNsZXM6IHRydWUsXG4gICAgZXhwb3J0TWFwc0FzT2JqZWN0czogdHJ1ZSxcbiAgICByZWN1cnNlRXZlcnl0aGluZzogZmFsc2Vcbn07XG5mdW5jdGlvbiBjYWNoZShtYXAsIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5kZXRlY3RDeWNsZXMpXG4gICAgICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gdG9KU0hlbHBlcihzb3VyY2UsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pIHtcbiAgICBpZiAoIW9wdGlvbnMucmVjdXJzZUV2ZXJ5dGhpbmcgJiYgIWlzT2JzZXJ2YWJsZShzb3VyY2UpKVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSBcIm9iamVjdFwiKVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIC8vIERpcmVjdGx5IHJldHVybiBudWxsIGlmIHNvdXJjZSBpcyBudWxsXG4gICAgaWYgKHNvdXJjZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgLy8gRGlyZWN0bHkgcmV0dXJuIHRoZSBEYXRlIG9iamVjdCBpdHNlbGYgaWYgY29udGFpbmVkIGluIHRoZSBvYnNlcnZhYmxlXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZVZhbHVlKHNvdXJjZSkpXG4gICAgICAgIHJldHVybiB0b0pTSGVscGVyKHNvdXJjZS5nZXQoKSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7XG4gICAgLy8gbWFrZSBzdXJlIHdlIHRyYWNrIHRoZSBrZXlzIG9mIHRoZSBvYmplY3RcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHNvdXJjZSkpXG4gICAgICAgIGtleXMoc291cmNlKTtcbiAgICB2YXIgZGV0ZWN0Q3ljbGVzID0gb3B0aW9ucy5kZXRlY3RDeWNsZXMgPT09IHRydWU7XG4gICAgaWYgKGRldGVjdEN5Y2xlcyAmJiBzb3VyY2UgIT09IG51bGwgJiYgX19hbHJlYWR5U2Vlbi5oYXMoc291cmNlKSkge1xuICAgICAgICByZXR1cm4gX19hbHJlYWR5U2Vlbi5nZXQoc291cmNlKTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KHNvdXJjZSkgfHwgQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHZhciByZXNfMSA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgW10sIG9wdGlvbnMpO1xuICAgICAgICB2YXIgdG9BZGQgPSBzb3VyY2UubWFwKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7IH0pO1xuICAgICAgICByZXNfMS5sZW5ndGggPSB0b0FkZC5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdG9BZGQubGVuZ3RoOyBpIDwgbDsgaSsrKVxuICAgICAgICAgICAgcmVzXzFbaV0gPSB0b0FkZFtpXTtcbiAgICAgICAgcmV0dXJuIHJlc18xO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KHNvdXJjZSkgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSkgPT09IFNldC5wcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhwb3J0TWFwc0FzT2JqZWN0cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciByZXNfMiA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IFNldCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJlc18yLmFkZCh0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXNfMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXNfMyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgW10sIG9wdGlvbnMpO1xuICAgICAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmVzXzMucHVzaCh0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXNfMztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHNvdXJjZSkgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSkgPT09IE1hcC5wcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhwb3J0TWFwc0FzT2JqZWN0cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciByZXNfNCA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IE1hcCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmVzXzQuc2V0KGtleSwgdG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2VlbikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzXzQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzXzUgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIHt9LCBvcHRpb25zKTtcbiAgICAgICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmVzXzVba2V5XSA9IHRvSlNIZWxwZXIodmFsdWUsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzXzU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRmFsbGJhY2sgdG8gdGhlIHNpdHVhdGlvbiB0aGF0IHNvdXJjZSBpcyBhbiBPYnNlcnZhYmxlT2JqZWN0IG9yIGEgcGxhaW4gb2JqZWN0XG4gICAgdmFyIHJlcyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwge30sIG9wdGlvbnMpO1xuICAgIGdldFBsYWluT2JqZWN0S2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXNba2V5XSA9IHRvSlNIZWxwZXIoc291cmNlW2tleV0sIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiB0b0pTKHNvdXJjZSwgb3B0aW9ucykge1xuICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICBvcHRpb25zID0geyBkZXRlY3RDeWNsZXM6IG9wdGlvbnMgfTtcbiAgICBpZiAoIW9wdGlvbnMpXG4gICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICBvcHRpb25zLmRldGVjdEN5Y2xlcyA9XG4gICAgICAgIG9wdGlvbnMuZGV0ZWN0Q3ljbGVzID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gb3B0aW9ucy5yZWN1cnNlRXZlcnl0aGluZyA9PT0gdHJ1ZVxuICAgICAgICAgICAgOiBvcHRpb25zLmRldGVjdEN5Y2xlcyA9PT0gdHJ1ZTtcbiAgICB2YXIgX19hbHJlYWR5U2VlbjtcbiAgICBpZiAob3B0aW9ucy5kZXRlY3RDeWNsZXMpXG4gICAgICAgIF9fYWxyZWFkeVNlZW4gPSBuZXcgTWFwKCk7XG4gICAgcmV0dXJuIHRvSlNIZWxwZXIoc291cmNlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKTtcbn1cblxuZnVuY3Rpb24gdHJhY2UoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBlbnRlckJyZWFrUG9pbnQgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgIGVudGVyQnJlYWtQb2ludCA9IGFyZ3MucG9wKCk7XG4gICAgdmFyIGRlcml2YXRpb24gPSBnZXRBdG9tRnJvbUFyZ3MoYXJncyk7XG4gICAgaWYgKCFkZXJpdmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgXCIndHJhY2UoYnJlYWs/KScgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYSB0cmFja2VkIGNvbXB1dGVkIHZhbHVlIG9yIGEgUmVhY3Rpb24uIENvbnNpZGVyIHBhc3NpbmcgaW4gdGhlIGNvbXB1dGVkIHZhbHVlIG9yIHJlYWN0aW9uIGV4cGxpY2l0bHlcIik7XG4gICAgfVxuICAgIGlmIChkZXJpdmF0aW9uLmlzVHJhY2luZyA9PT0gVHJhY2VNb2RlLk5PTkUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInIHRyYWNpbmcgZW5hYmxlZFwiKTtcbiAgICB9XG4gICAgZGVyaXZhdGlvbi5pc1RyYWNpbmcgPSBlbnRlckJyZWFrUG9pbnQgPyBUcmFjZU1vZGUuQlJFQUsgOiBUcmFjZU1vZGUuTE9HO1xufVxuZnVuY3Rpb24gZ2V0QXRvbUZyb21BcmdzKGFyZ3MpIHtcbiAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBnZXRBdG9tKGFyZ3NbMF0pO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gZ2V0QXRvbShhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICB9XG59XG5cbi8qKlxuICogRHVyaW5nIGEgdHJhbnNhY3Rpb24gbm8gdmlld3MgYXJlIHVwZGF0ZWQgdW50aWwgdGhlIGVuZCBvZiB0aGUgdHJhbnNhY3Rpb24uXG4gKiBUaGUgdHJhbnNhY3Rpb24gd2lsbCBiZSBydW4gc3luY2hyb25vdXNseSBub25ldGhlbGVzcy5cbiAqXG4gKiBAcGFyYW0gYWN0aW9uIGEgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIHNvbWUgcmVhY3RpdmUgc3RhdGVcbiAqIEByZXR1cm5zIGFueSB2YWx1ZSB0aGF0IHdhcyByZXR1cm5lZCBieSB0aGUgJ2FjdGlvbicgcGFyYW1ldGVyLlxuICovXG5mdW5jdGlvbiB0cmFuc2FjdGlvbihhY3Rpb24sIHRoaXNBcmcpIHtcbiAgICBpZiAodGhpc0FyZyA9PT0gdm9pZCAwKSB7IHRoaXNBcmcgPSB1bmRlZmluZWQ7IH1cbiAgICBzdGFydEJhdGNoKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5hcHBseSh0aGlzQXJnKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3aGVuKHByZWRpY2F0ZSwgYXJnMSwgYXJnMikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxIHx8IChhcmcxICYmIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiKSlcbiAgICAgICAgcmV0dXJuIHdoZW5Qcm9taXNlKHByZWRpY2F0ZSwgYXJnMSk7XG4gICAgcmV0dXJuIF93aGVuKHByZWRpY2F0ZSwgYXJnMSwgYXJnMiB8fCB7fSk7XG59XG5mdW5jdGlvbiBfd2hlbihwcmVkaWNhdGUsIGVmZmVjdCwgb3B0cykge1xuICAgIHZhciB0aW1lb3V0SGFuZGxlO1xuICAgIGlmICh0eXBlb2Ygb3B0cy50aW1lb3V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghZGlzcG9zZXJbJG1vYnhdLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwb3NlcigpO1xuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihcIldIRU5fVElNRU9VVFwiKTtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5vbkVycm9yKVxuICAgICAgICAgICAgICAgICAgICBvcHRzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG9wdHMudGltZW91dCk7XG4gICAgfVxuICAgIG9wdHMubmFtZSA9IG9wdHMubmFtZSB8fCBcIldoZW5AXCIgKyBnZXROZXh0SWQoKTtcbiAgICB2YXIgZWZmZWN0QWN0aW9uID0gY3JlYXRlQWN0aW9uKG9wdHMubmFtZSArIFwiLWVmZmVjdFwiLCBlZmZlY3QpO1xuICAgIHZhciBkaXNwb3NlciA9IGF1dG9ydW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZSgpKSB7XG4gICAgICAgICAgICByLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SGFuZGxlKVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIGVmZmVjdEFjdGlvbigpO1xuICAgICAgICB9XG4gICAgfSwgb3B0cyk7XG4gICAgcmV0dXJuIGRpc3Bvc2VyO1xufVxuZnVuY3Rpb24gd2hlblByb21pc2UocHJlZGljYXRlLCBvcHRzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBvcHRzICYmIG9wdHMub25FcnJvcilcbiAgICAgICAgcmV0dXJuIGZhaWwoXCJ0aGUgb3B0aW9ucyAnb25FcnJvcicgYW5kICdwcm9taXNlJyBjYW5ub3QgYmUgY29tYmluZWRcIik7XG4gICAgdmFyIGNhbmNlbDtcbiAgICB2YXIgcmVzID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZGlzcG9zZXIgPSBfd2hlbihwcmVkaWNhdGUsIHJlc29sdmUsIF9fYXNzaWduKHt9LCBvcHRzLCB7IG9uRXJyb3I6IHJlamVjdCB9KSk7XG4gICAgICAgIGNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRpc3Bvc2VyKCk7XG4gICAgICAgICAgICByZWplY3QoXCJXSEVOX0NBTkNFTExFRFwiKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXMuY2FuY2VsID0gY2FuY2VsO1xuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGdldEFkbSh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0WyRtb2J4XTtcbn1cbmZ1bmN0aW9uIGlzUHJvcGVydHlLZXkodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgdmFsID09PSBcInN5bWJvbFwiO1xufVxuLy8gT3B0aW1pemF0aW9uOiB3ZSBkb24ndCBuZWVkIHRoZSBpbnRlcm1lZGlhdGUgb2JqZWN0cyBhbmQgY291bGQgaGF2ZSBhIGNvbXBsZXRlbHkgY3VzdG9tIGFkbWluaXN0cmF0aW9uIGZvciBEeW5hbWljT2JqZWN0cyxcbi8vIGFuZCBza2lwIGVpdGhlciB0aGUgaW50ZXJuYWwgdmFsdWVzIG1hcCwgb3IgdGhlIGJhc2Ugb2JqZWN0IHdpdGggaXRzIHByb3BlcnR5IGRlc2NyaXB0b3JzIVxudmFyIG9iamVjdFByb3h5VHJhcHMgPSB7XG4gICAgaGFzOiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAkbW9ieCB8fCBuYW1lID09PSBcImNvbnN0cnVjdG9yXCIgfHwgbmFtZSA9PT0gbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xuICAgICAgICAvLyBNV0U6IHNob3VsZCBgaW5gIG9wZXJhdG9yIGJlIHJlYWN0aXZlPyBJZiBub3QsIGJlbG93IGNvZGUgcGF0aCB3aWxsIGJlIGZhc3RlciAvIG1vcmUgbWVtb3J5IGVmZmljaWVudFxuICAgICAgICAvLyBUT0RPOiBjaGVjayBwZXJmb3JtYW5jZSBzdGF0cyFcbiAgICAgICAgLy8gaWYgKGFkbS52YWx1ZXMuZ2V0KG5hbWUgYXMgc3RyaW5nKSkgcmV0dXJuIHRydWVcbiAgICAgICAgaWYgKGlzUHJvcGVydHlLZXkobmFtZSkpXG4gICAgICAgICAgICByZXR1cm4gYWRtLmhhcyhuYW1lKTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gdGFyZ2V0O1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAkbW9ieCB8fCBuYW1lID09PSBcImNvbnN0cnVjdG9yXCIgfHwgbmFtZSA9PT0gbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wpXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdO1xuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtKHRhcmdldCk7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gYWRtLnZhbHVlcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQXRvbSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9ic2VydmFibGUuZ2V0KCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZpeGVzICMxNzk2LCBiZWNhdXNlIGRlbGV0aW5nIGEgcHJvcCB0aGF0IGhhcyBhblxuICAgICAgICAgICAgICAgIC8vIHVuZGVmaW5lZCB2YWx1ZSB3b24ndCByZXRyaWdnZXIgYSBvYnNlcnZlciAobm8gdmlzaWJsZSBlZmZlY3QpLFxuICAgICAgICAgICAgICAgIC8vIHRoZSBhdXRvcnVuIHdvdWxkbid0IHN1YnNjcmliZSB0byBmdXR1cmUga2V5IGNoYW5nZXMgKHNlZSBhbHNvIG5leHQgY29tbWVudClcbiAgICAgICAgICAgICAgICBhZG0uaGFzKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYWtlIHN1cmUgd2Ugc3RhcnQgbGlzdGVuaW5nIHRvIGZ1dHVyZSBrZXlzXG4gICAgICAgIC8vIG5vdGUgdGhhdCB3ZSBvbmx5IGRvIHRoaXMgaGVyZSBmb3Igb3B0aW1pemF0aW9uXG4gICAgICAgIGlmIChpc1Byb3BlcnR5S2V5KG5hbWUpKVxuICAgICAgICAgICAgYWRtLmhhcyhuYW1lKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCFpc1Byb3BlcnR5S2V5KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBzZXQodGFyZ2V0LCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgaWYgKCFpc1Byb3BlcnR5S2V5KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtKHRhcmdldCk7XG4gICAgICAgIGFkbS5yZW1vdmUobmFtZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgb3duS2V5czogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtKHRhcmdldCk7XG4gICAgICAgIGFkbS5rZXlzQXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRhcmdldCk7XG4gICAgfSxcbiAgICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBmYWlsKFwiRHluYW1pYyBvYnNlcnZhYmxlIG9iamVjdHMgY2Fubm90IGJlIGZyb3plblwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5mdW5jdGlvbiBjcmVhdGVEeW5hbWljT2JzZXJ2YWJsZU9iamVjdChiYXNlKSB7XG4gICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGJhc2UsIG9iamVjdFByb3h5VHJhcHMpO1xuICAgIGJhc2VbJG1vYnhdLnByb3h5ID0gcHJveHk7XG4gICAgcmV0dXJuIHByb3h5O1xufVxuXG5mdW5jdGlvbiBoYXNJbnRlcmNlcHRvcnMoaW50ZXJjZXB0YWJsZSkge1xuICAgIHJldHVybiBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycyAhPT0gdW5kZWZpbmVkICYmIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzLmxlbmd0aCA+IDA7XG59XG5mdW5jdGlvbiByZWdpc3RlckludGVyY2VwdG9yKGludGVyY2VwdGFibGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgfHwgKGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzID0gW10pO1xuICAgIGludGVyY2VwdG9ycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGludGVyY2VwdG9ycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgICAgICBpZiAoaWR4ICE9PSAtMSlcbiAgICAgICAgICAgIGludGVyY2VwdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdENoYW5nZShpbnRlcmNlcHRhYmxlLCBjaGFuZ2UpIHtcbiAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbnRlcmNlcHRvcnMgPSBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycztcbiAgICAgICAgaWYgKGludGVyY2VwdG9ycylcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaW50ZXJjZXB0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGNoYW5nZSA9IGludGVyY2VwdG9yc1tpXShjaGFuZ2UpO1xuICAgICAgICAgICAgICAgIGludmFyaWFudCghY2hhbmdlIHx8IGNoYW5nZS50eXBlLCBcIkludGVyY2VwdCBoYW5kbGVycyBzaG91bGQgcmV0dXJuIG5vdGhpbmcgb3IgYSBjaGFuZ2Ugb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNMaXN0ZW5lcnMobGlzdGVuYWJsZSkge1xuICAgIHJldHVybiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyAhPT0gdW5kZWZpbmVkICYmIGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA+IDA7XG59XG5mdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmFibGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnMgfHwgKGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzID0gW10pO1xuICAgIGxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgICAgICBpZiAoaWR4ICE9PSAtMSlcbiAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycyhsaXN0ZW5hYmxlLCBjaGFuZ2UpIHtcbiAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycztcbiAgICBpZiAoIWxpc3RlbmVycylcbiAgICAgICAgcmV0dXJuO1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsaXN0ZW5lcnNbaV0oY2hhbmdlKTtcbiAgICB9XG4gICAgdW50cmFja2VkRW5kKHByZXZVKTtcbn1cblxudmFyIE1BWF9TUExJQ0VfU0laRSA9IDEwMDAwOyAvLyBTZWUgZS5nLiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzg1OVxudmFyIGFycmF5VHJhcHMgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAkbW9ieClcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbJG1vYnhdO1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIilcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbJG1vYnhdLmdldEFycmF5TGVuZ3RoKCk7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5RXh0ZW5zaW9ucy5nZXQuY2FsbCh0YXJnZXQsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiAmJiAhaXNOYU4obmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheUV4dGVuc2lvbnMuZ2V0LmNhbGwodGFyZ2V0LCBwYXJzZUludChuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFycmF5RXh0ZW5zaW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5RXh0ZW5zaW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgdGFyZ2V0WyRtb2J4XS5zZXRBcnJheUxlbmd0aCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBhcnJheUV4dGVuc2lvbnMuc2V0LmNhbGwodGFyZ2V0LCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiIHx8IGlzTmFOKG5hbWUpKSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIG51bWVyaWMgc3RyaW5nXG4gICAgICAgICAgICBhcnJheUV4dGVuc2lvbnMuc2V0LmNhbGwodGFyZ2V0LCBwYXJzZUludChuYW1lKSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgZmFpbChcIk9ic2VydmFibGUgYXJyYXlzIGNhbm5vdCBiZSBmcm96ZW5cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZUFycmF5KGluaXRpYWxWYWx1ZXMsIGVuaGFuY2VyLCBuYW1lLCBvd25lZCkge1xuICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICBpZiAob3duZWQgPT09IHZvaWQgMCkgeyBvd25lZCA9IGZhbHNlOyB9XG4gICAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgb3duZWQpO1xuICAgIGFkZEhpZGRlbkZpbmFsUHJvcChhZG0udmFsdWVzLCAkbW9ieCwgYWRtKTtcbiAgICB2YXIgcHJveHkgPSBuZXcgUHJveHkoYWRtLnZhbHVlcywgYXJyYXlUcmFwcyk7XG4gICAgYWRtLnByb3h5ID0gcHJveHk7XG4gICAgaWYgKGluaXRpYWxWYWx1ZXMgJiYgaW5pdGlhbFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KHRydWUpO1xuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KDAsIDAsIGluaXRpYWxWYWx1ZXMpO1xuICAgICAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3h5O1xufVxudmFyIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBvd25lZCkge1xuICAgICAgICB0aGlzLm93bmVkID0gb3duZWQ7XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIHRoaXMucHJveHkgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGFzdEtub3duTGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5hdG9tID0gbmV3IEF0b20obmFtZSB8fCBcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCgpKTtcbiAgICAgICAgdGhpcy5lbmhhbmNlciA9IGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7IHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBuYW1lICsgXCJbLi5dXCIpOyB9O1xuICAgIH1cbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuZGVoYW5jZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5kZWhhbmNlVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkICYmIHZhbHVlcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAodGhpcy5kZWhhbmNlcik7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkgeyBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IHRoaXMudmFsdWVzLnNsaWNlKCksXG4gICAgICAgICAgICAgICAgYWRkZWRDb3VudDogdGhpcy52YWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHJlbW92ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmdldEFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zZXRBcnJheUxlbmd0aCA9IGZ1bmN0aW9uIChuZXdMZW5ndGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdMZW5ndGggIT09IFwibnVtYmVyXCIgfHwgbmV3TGVuZ3RoIDwgMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBPdXQgb2YgcmFuZ2U6IFwiICsgbmV3TGVuZ3RoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGlmIChuZXdMZW5ndGggPT09IGN1cnJlbnRMZW5ndGgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsc2UgaWYgKG5ld0xlbmd0aCA+IGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBuZXdJdGVtcyA9IG5ldyBBcnJheShuZXdMZW5ndGggLSBjdXJyZW50TGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TGVuZ3RoIC0gY3VycmVudExlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2ldID0gdW5kZWZpbmVkOyAvLyBObyBBcnJheS5maWxsIGV2ZXJ5d2hlcmUuLi5cbiAgICAgICAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5KGN1cnJlbnRMZW5ndGgsIDAsIG5ld0l0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnNwbGljZVdpdGhBcnJheShuZXdMZW5ndGgsIGN1cnJlbnRMZW5ndGggLSBuZXdMZW5ndGgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnVwZGF0ZUFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKG9sZExlbmd0aCwgZGVsdGEpIHtcbiAgICAgICAgaWYgKG9sZExlbmd0aCAhPT0gdGhpcy5sYXN0S25vd25MZW5ndGgpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gTW9kaWZpY2F0aW9uIGV4Y2VwdGlvbjogdGhlIGludGVybmFsIHN0cnVjdHVyZSBvZiBhbiBvYnNlcnZhYmxlIGFycmF5IHdhcyBjaGFuZ2VkLlwiKTtcbiAgICAgICAgdGhpcy5sYXN0S25vd25MZW5ndGggKz0gZGVsdGE7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuc3BsaWNlV2l0aEFycmF5ID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5hdG9tKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID4gbGVuZ3RoKVxuICAgICAgICAgICAgaW5kZXggPSBsZW5ndGg7XG4gICAgICAgIGVsc2UgaWYgKGluZGV4IDwgMClcbiAgICAgICAgICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaW5kZXgpO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gbGVuZ3RoIC0gaW5kZXg7XG4gICAgICAgIGVsc2UgaWYgKGRlbGV0ZUNvdW50ID09PSB1bmRlZmluZWQgfHwgZGVsZXRlQ291bnQgPT09IG51bGwpXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZGVsZXRlQ291bnQsIGxlbmd0aCAtIGluZGV4KSk7XG4gICAgICAgIGlmIChuZXdJdGVtcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgbmV3SXRlbXMgPSBFTVBUWV9BUlJBWTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogZGVsZXRlQ291bnQsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IG5ld0l0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiBFTVBUWV9BUlJBWTtcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gY2hhbmdlLnJlbW92ZWRDb3VudDtcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gY2hhbmdlLmFkZGVkO1xuICAgICAgICB9XG4gICAgICAgIG5ld0l0ZW1zID0gbmV3SXRlbXMubGVuZ3RoID09PSAwID8gbmV3SXRlbXMgOiBuZXdJdGVtcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIF90aGlzLmVuaGFuY2VyKHYsIHVuZGVmaW5lZCk7IH0pO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoRGVsdGEgPSBuZXdJdGVtcy5sZW5ndGggLSBkZWxldGVDb3VudDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJyYXlMZW5ndGgobGVuZ3RoLCBsZW5ndGhEZWx0YSk7IC8vIGNoZWNrcyBpZiBpbnRlcm5hbCBhcnJheSB3YXNuJ3QgbW9kaWZpZWRcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzID0gdGhpcy5zcGxpY2VJdGVtc0ludG9WYWx1ZXMoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gICAgICAgIGlmIChkZWxldGVDb3VudCAhPT0gMCB8fCBuZXdJdGVtcy5sZW5ndGggIT09IDApXG4gICAgICAgICAgICB0aGlzLm5vdGlmeUFycmF5U3BsaWNlKGluZGV4LCBuZXdJdGVtcywgcmVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlcyhyZXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnNwbGljZUl0ZW1zSW50b1ZhbHVlcyA9IGZ1bmN0aW9uIChpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKG5ld0l0ZW1zLmxlbmd0aCA8IE1BWF9TUExJQ0VfU0laRSkge1xuICAgICAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMudmFsdWVzKS5zcGxpY2UuYXBwbHkoX2EsIF9fc3ByZWFkKFtpbmRleCwgZGVsZXRlQ291bnRdLCBuZXdJdGVtcykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMudmFsdWVzLnNsaWNlKGluZGV4LCBpbmRleCArIGRlbGV0ZUNvdW50KTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXNcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmNvbmNhdChuZXdJdGVtcywgdGhpcy52YWx1ZXMuc2xpY2UoaW5kZXggKyBkZWxldGVDb3VudCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm5vdGlmeUFycmF5Q2hpbGRVcGRhdGUgPSBmdW5jdGlvbiAoaW5kZXgsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWQgJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAvLyBUaGUgcmVhc29uIHdoeSB0aGlzIGlzIG9uIHJpZ2h0IGhhbmQgc2lkZSBoZXJlIChhbmQgbm90IGFib3ZlKSwgaXMgdGhpcyB3YXkgdGhlIHVnbGlmaWVyIHdpbGwgZHJvcCBpdCwgYnV0IGl0IHdvbid0XG4gICAgICAgIC8vIGNhdXNlIGFueSBydW50aW1lIG92ZXJoZWFkIGluIGRldmVsb3BtZW50IG1vZGUgd2l0aG91dCBOT0RFX0VOViBzZXQsIHVubGVzcyBzcHlpbmcgaXMgZW5hYmxlZFxuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKHt9LCBjaGFuZ2UsIHsgbmFtZTogdGhpcy5hdG9tLm5hbWUgfSkpO1xuICAgICAgICB0aGlzLmF0b20ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUubm90aWZ5QXJyYXlTcGxpY2UgPSBmdW5jdGlvbiAoaW5kZXgsIGFkZGVkLCByZW1vdmVkKSB7XG4gICAgICAgIHZhciBub3RpZnlTcHkgPSAhdGhpcy5vd25lZCAmJiBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwbGljZVwiLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICByZW1vdmVkOiByZW1vdmVkLFxuICAgICAgICAgICAgICAgIGFkZGVkOiBhZGRlZCxcbiAgICAgICAgICAgICAgICByZW1vdmVkQ291bnQ6IHJlbW92ZWQubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGFkZGVkQ291bnQ6IGFkZGVkLmxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKHt9LCBjaGFuZ2UsIHsgbmFtZTogdGhpcy5hdG9tLm5hbWUgfSkpO1xuICAgICAgICB0aGlzLmF0b20ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICAvLyBjb25mb3JtOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9vYnNlcnZlXG4gICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbjtcbn0oKSk7XG52YXIgYXJyYXlFeHRlbnNpb25zID0ge1xuICAgIGludGVyY2VwdDogZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbJG1vYnhdLmludGVyY2VwdChoYW5kbGVyKTtcbiAgICB9LFxuICAgIG9ic2VydmU6IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkgeyBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgICAgIHJldHVybiBhZG0ub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcbiAgICB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZSgwKTtcbiAgICB9LFxuICAgIHJlcGxhY2U6IGZ1bmN0aW9uIChuZXdJdGVtcykge1xuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5KDAsIGFkbS52YWx1ZXMubGVuZ3RoLCBuZXdJdGVtcyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0aGlzIGFycmF5IGJhY2sgdG8gYSAoc2hhbGxvdykgamF2YXNjcmlwdCBzdHJ1Y3R1cmUuXG4gICAgICogRm9yIGEgZGVlcCBjbG9uZSB1c2UgbW9ieC50b0pTXG4gICAgICovXG4gICAgdG9KUzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgpO1xuICAgIH0sXG4gICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVzZWQgYnkgSlNPTi5zdHJpbmdpZnlcbiAgICAgICAgcmV0dXJuIHRoaXMudG9KUygpO1xuICAgIH0sXG4gICAgLypcbiAgICAgKiBmdW5jdGlvbnMgdGhhdCBkbyBhbHRlciB0aGUgaW50ZXJuYWwgc3RydWN0dXJlIG9mIHRoZSBhcnJheSwgKGJhc2VkIG9uIGxpYi5lczYuZC50cylcbiAgICAgKiBzaW5jZSB0aGVzZSBmdW5jdGlvbnMgYWx0ZXIgdGhlIGlubmVyIHN0cnVjdHVyZSBvZiB0aGUgYXJyYXksIHRoZSBoYXZlIHNpZGUgZWZmZWN0cy5cbiAgICAgKiBCZWNhdXNlIHRoZSBoYXZlIHNpZGUgZWZmZWN0cywgdGhleSBzaG91bGQgbm90IGJlIHVzZWQgaW4gY29tcHV0ZWQgZnVuY3Rpb24sXG4gICAgICogYW5kIGZvciB0aGF0IHJlYXNvbiB0aGUgZG8gbm90IGNhbGwgZGVwZW5kZW5jeVN0YXRlLm5vdGlmeU9ic2VydmVkXG4gICAgICovXG4gICAgc3BsaWNlOiBmdW5jdGlvbiAoaW5kZXgsIGRlbGV0ZUNvdW50KSB7XG4gICAgICAgIHZhciBuZXdJdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgbmV3SXRlbXNbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5KGluZGV4LCBkZWxldGVDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gICAgfSxcbiAgICBzcGxpY2VXaXRoQXJyYXk6IGZ1bmN0aW9uIChpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKSB7XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gICAgfSxcbiAgICBwdXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaXRlbXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoYWRtLnZhbHVlcy5sZW5ndGgsIDAsIGl0ZW1zKTtcbiAgICAgICAgcmV0dXJuIGFkbS52YWx1ZXMubGVuZ3RoO1xuICAgIH0sXG4gICAgcG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZShNYXRoLm1heCh0aGlzWyRtb2J4XS52YWx1ZXMubGVuZ3RoIC0gMSwgMCksIDEpWzBdO1xuICAgIH0sXG4gICAgc2hpZnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKDAsIDEpWzBdO1xuICAgIH0sXG4gICAgdW5zaGlmdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGl0ZW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KDAsIDAsIGl0ZW1zKTtcbiAgICAgICAgcmV0dXJuIGFkbS52YWx1ZXMubGVuZ3RoO1xuICAgIH0sXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyByZXZlcnNlIGJ5IGRlZmF1bHQgbXV0YXRlcyBpbiBwbGFjZSBiZWZvcmUgcmV0dXJuaW5nIHRoZSByZXN1bHRcbiAgICAgICAgLy8gd2hpY2ggbWFrZXMgaXQgYm90aCBhICdkZXJpdmF0aW9uJyBhbmQgYSAnbXV0YXRpb24nLlxuICAgICAgICAvLyBzbyB3ZSBkZXZpYXRlIGZyb20gdGhlIGRlZmF1bHQgYW5kIGp1c3QgbWFrZSBpdCBhbiBkZXJ2aXRhdGlvblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gYG9ic2VydmFibGVBcnJheS5yZXZlcnNlKClgIHdpbGwgbm90IHVwZGF0ZSB0aGUgYXJyYXkgaW4gcGxhY2UuIFVzZSBgb2JzZXJ2YWJsZUFycmF5LnNsaWNlKCkucmV2ZXJzZSgpYCB0byBzdXBwcmVzcyB0aGlzIHdhcm5pbmcgYW5kIHBlcmZvcm0gdGhlIG9wZXJhdGlvbiBvbiBhIGNvcHksIG9yIGBvYnNlcnZhYmxlQXJyYXkucmVwbGFjZShvYnNlcnZhYmxlQXJyYXkuc2xpY2UoKS5yZXZlcnNlKCkpYCB0byByZXZlcnNlICYgdXBkYXRlIGluIHBsYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbG9uZSA9IHRoaXMuc2xpY2UoKTtcbiAgICAgICAgcmV0dXJuIGNsb25lLnJldmVyc2UuYXBwbHkoY2xvbmUsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICBzb3J0OiBmdW5jdGlvbiAoY29tcGFyZUZuKSB7XG4gICAgICAgIC8vIHNvcnQgYnkgZGVmYXVsdCBtdXRhdGVzIGluIHBsYWNlIGJlZm9yZSByZXR1cm5pbmcgdGhlIHJlc3VsdFxuICAgICAgICAvLyB3aGljaCBnb2VzIGFnYWluc3QgYWxsIGdvb2QgcHJhY3RpY2VzLiBMZXQncyBub3QgY2hhbmdlIHRoZSBhcnJheSBpbiBwbGFjZSFcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIGBvYnNlcnZhYmxlQXJyYXkuc29ydCgpYCB3aWxsIG5vdCB1cGRhdGUgdGhlIGFycmF5IGluIHBsYWNlLiBVc2UgYG9ic2VydmFibGVBcnJheS5zbGljZSgpLnNvcnQoKWAgdG8gc3VwcHJlc3MgdGhpcyB3YXJuaW5nIGFuZCBwZXJmb3JtIHRoZSBvcGVyYXRpb24gb24gYSBjb3B5LCBvciBgb2JzZXJ2YWJsZUFycmF5LnJlcGxhY2Uob2JzZXJ2YWJsZUFycmF5LnNsaWNlKCkuc29ydCgpKWAgdG8gc29ydCAmIHVwZGF0ZSBpbiBwbGFjZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLnNsaWNlKCk7XG4gICAgICAgIHJldHVybiBjbG9uZS5zb3J0LmFwcGx5KGNsb25lLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgICAgICB2YXIgaWR4ID0gYWRtLmRlaGFuY2VWYWx1ZXMoYWRtLnZhbHVlcykuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICAgICAgaWYgKGFkbSkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgYWRtLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhZG0uYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhZG0uZGVoYW5jZVZhbHVlKGFkbS52YWx1ZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4LmFycmF5XSBBdHRlbXB0IHRvIHJlYWQgYW4gYXJyYXkgaW5kZXggKFwiICsgaW5kZXggKyBcIikgdGhhdCBpcyBvdXQgb2YgYm91bmRzIChcIiArIGFkbS52YWx1ZXMubGVuZ3RoICsgXCIpLiBQbGVhc2UgY2hlY2sgbGVuZ3RoIGZpcnN0LiBPdXQgb2YgYm91bmQgaW5kaWNlcyB3aWxsIG5vdCBiZSB0cmFja2VkIGJ5IE1vYlhcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKGluZGV4LCBuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgICAgIHZhciB2YWx1ZXMgPSBhZG0udmFsdWVzO1xuICAgICAgICBpZiAoaW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgYXQgaW5kZXggaW4gcmFuZ2VcbiAgICAgICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKGFkbS5hdG9tKTtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHZhbHVlc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKGFkbSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKGFkbSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IGFkbS5wcm94eSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3VmFsdWUgPSBhZG0uZW5oYW5jZXIobmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkID0gbmV3VmFsdWUgIT09IG9sZFZhbHVlO1xuICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgYWRtLm5vdGlmeUFycmF5Q2hpbGRVcGRhdGUoaW5kZXgsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGFkZCBhIG5ldyBpdGVtXG4gICAgICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KGluZGV4LCAwLCBbbmV3VmFsdWVdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIG91dCBvZiBib3VuZHNcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBJbmRleCBvdXQgb2YgYm91bmRzLCBcIiArIGluZGV4ICsgXCIgaXMgbGFyZ2VyIHRoYW4gXCIgKyB2YWx1ZXMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5bXG4gICAgXCJjb25jYXRcIixcbiAgICBcImV2ZXJ5XCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZvckVhY2hcIixcbiAgICBcImluZGV4T2ZcIixcbiAgICBcImpvaW5cIixcbiAgICBcImxhc3RJbmRleE9mXCIsXG4gICAgXCJtYXBcIixcbiAgICBcInJlZHVjZVwiLFxuICAgIFwicmVkdWNlUmlnaHRcIixcbiAgICBcInNsaWNlXCIsXG4gICAgXCJzb21lXCIsXG4gICAgXCJ0b1N0cmluZ1wiLFxuICAgIFwidG9Mb2NhbGVTdHJpbmdcIlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChmdW5jTmFtZSkge1xuICAgIGFycmF5RXh0ZW5zaW9uc1tmdW5jTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICAgICAgYWRtLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgdmFyIHJlcyA9IGFkbS5kZWhhbmNlVmFsdWVzKGFkbS52YWx1ZXMpO1xuICAgICAgICByZXR1cm4gcmVzW2Z1bmNOYW1lXS5hcHBseShyZXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn0pO1xudmFyIGlzT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb25cIiwgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24pO1xuZnVuY3Rpb24gaXNPYnNlcnZhYmxlQXJyYXkodGhpbmcpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodGhpbmcpICYmIGlzT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYnhdKTtcbn1cblxudmFyIF9hO1xudmFyIE9ic2VydmFibGVNYXBNYXJrZXIgPSB7fTtcbi8vIGp1c3QgZXh0ZW5kIE1hcD8gU2VlIGFsc28gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbmVzdGhhcnVzLzEzYjRkNzRmMmVmNGEyZjQzNTdkYmQzZmMyM2MxZTU0XG4vLyBCdXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvMTU1NlxudmFyIE9ic2VydmFibGVNYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZU1hcChpbml0aWFsRGF0YSwgZW5oYW5jZXIsIG5hbWUpIHtcbiAgICAgICAgaWYgKGVuaGFuY2VyID09PSB2b2lkIDApIHsgZW5oYW5jZXIgPSBkZWVwRW5oYW5jZXI7IH1cbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJPYnNlcnZhYmxlTWFwQFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgdGhpcy5lbmhhbmNlciA9IGVuaGFuY2VyO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzW19hXSA9IE9ic2VydmFibGVNYXBNYXJrZXI7XG4gICAgICAgIHRoaXMuX2tleXNBdG9tID0gY3JlYXRlQXRvbSh0aGlzLm5hbWUgKyBcIi5rZXlzKClcIik7XG4gICAgICAgIHRoaXNbU3ltYm9sLnRvU3RyaW5nVGFnXSA9IFwiTWFwXCI7XG4gICAgICAgIGlmICh0eXBlb2YgTWFwICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vYngubWFwIHJlcXVpcmVzIE1hcCBwb2x5ZmlsbCBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci4gQ2hlY2sgYmFiZWwtcG9seWZpbGwgb3IgY29yZS1qcy9lczYvbWFwLmpzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX2hhc01hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5tZXJnZShpbml0aWFsRGF0YSk7XG4gICAgfVxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLl9oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmhhcyhrZXkpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXMoa2V5KTtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5faGFzTWFwLmdldChrZXkpO1xuICAgICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgICAgICAvLyB0b2RvOiByZXBsYWNlIHdpdGggYXRvbSAoYnJlYWtpbmcgY2hhbmdlKVxuICAgICAgICAgICAgdmFyIG5ld0VudHJ5ID0gKGVudHJ5ID0gbmV3IE9ic2VydmFibGVWYWx1ZSh0aGlzLl9oYXMoa2V5KSwgcmVmZXJlbmNlRW5oYW5jZXIsIHRoaXMubmFtZSArIFwiLlwiICsgc3RyaW5naWZ5S2V5KGtleSkgKyBcIj9cIiwgZmFsc2UpKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc01hcC5zZXQoa2V5LCBuZXdFbnRyeSk7XG4gICAgICAgICAgICBvbkJlY29tZVVub2JzZXJ2ZWQobmV3RW50cnksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9oYXNNYXAuZGVsZXRlKGtleSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRyeS5nZXQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBoYXNLZXkgPSB0aGlzLl9oYXMoa2V5KTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogaGFzS2V5ID8gXCJ1cGRhdGVcIiA6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB2YWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzS2V5KSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFZhbHVlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9oYXMoa2V5KSkge1xuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IHRoaXMuX2RhdGEuZ2V0KGtleSkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZUhhc01hcEVudHJ5KGtleSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gX3RoaXMuX2RhdGEuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9kYXRhLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5fdXBkYXRlSGFzTWFwRW50cnkgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9oYXNNYXAuZ2V0KGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgZW50cnkuc2V0TmV3VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuX2RhdGEuZ2V0KGtleSk7XG4gICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS5wcmVwYXJlTmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IGdsb2JhbFN0YXRlLlVOQ0hBTkdFRCkge1xuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9ic2VydmFibGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKHt9LCBjaGFuZ2UsIHsgbmFtZTogdGhpcy5uYW1lLCBrZXk6IGtleSB9KSk7XG4gICAgICAgICAgICBvYnNlcnZhYmxlLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuX2FkZFZhbHVlID0gZnVuY3Rpb24gKGtleSwgbmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5fa2V5c0F0b20pO1xuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUobmV3VmFsdWUsIF90aGlzLmVuaGFuY2VyLCBfdGhpcy5uYW1lICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSwgZmFsc2UpO1xuICAgICAgICAgICAgX3RoaXMuX2RhdGEuc2V0KGtleSwgb2JzZXJ2YWJsZSk7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUudmFsdWU7IC8vIHZhbHVlIG1pZ2h0IGhhdmUgYmVlbiBjaGFuZ2VkXG4gICAgICAgICAgICBfdGhpcy5fdXBkYXRlSGFzTWFwRW50cnkoa2V5LCB0cnVlKTtcbiAgICAgICAgICAgIF90aGlzLl9rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFkZFwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBuYW1lOiB0aGlzLm5hbWUsIGtleToga2V5IH0pKTtcbiAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAodGhpcy5oYXMoa2V5KSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZSh0aGlzLl9kYXRhLmdldChrZXkpLmdldCgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2tleXNBdG9tLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmtleXMoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGtleXMgPSBBcnJheS5mcm9tKHRoaXMua2V5cygpKTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGtleXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8geyB2YWx1ZTogc2VsZi5nZXQoa2V5c1tuZXh0SW5kZXgrK10pLCBkb25lOiBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgIDogeyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGtleXMgPSBBcnJheS5mcm9tKHRoaXMua2V5cygpKTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRJbmRleCA8IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW25leHRJbmRleCsrXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBba2V5LCBzZWxmLmdldChrZXkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZVsoX2EgPSAkbW9ieCwgU3ltYm9sLml0ZXJhdG9yKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9kID0gX19yZWFkKF9jLnZhbHVlLCAyKSwga2V5ID0gX2RbMF0sIHZhbHVlID0gX2RbMV07XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogTWVyZ2UgYW5vdGhlciBvYmplY3QgaW50byB0aGlzIG9iamVjdCwgcmV0dXJucyB0aGlzLiAqL1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpc09ic2VydmFibGVNYXAob3RoZXIpKSB7XG4gICAgICAgICAgICBvdGhlciA9IG90aGVyLnRvSlMoKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChvdGhlcikpXG4gICAgICAgICAgICAgICAgZ2V0UGxhaW5PYmplY3RLZXlzKG90aGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIF90aGlzLnNldChrZXksIG90aGVyW2tleV0pOyB9KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3RoZXIpKVxuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMiksIGtleSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNFUzZNYXAob3RoZXIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyLmNvbnN0cnVjdG9yICE9PSBNYXApXG4gICAgICAgICAgICAgICAgICAgIGZhaWwoXCJDYW5ub3QgaW5pdGlhbGl6ZSBmcm9tIGNsYXNzZXMgdGhhdCBpbmhlcml0IGZyb20gTWFwOiBcIiArIG90aGVyLmNvbnN0cnVjdG9yLm5hbWUpOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgICAgICBvdGhlci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7IHJldHVybiBfdGhpcy5zZXQoa2V5LCB2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBmYWlsKFwiQ2Fubm90IGluaXRpYWxpemUgbWFwIGZyb20gXCIgKyBvdGhlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoX3RoaXMua2V5cygpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gZ3JhYiBhbGwgdGhlIGtleXMgdGhhdCBhcmUgcHJlc2VudCBpbiB0aGUgbmV3IG1hcCBidXQgbm90IHByZXNlbnQgaW4gdGhlIGN1cnJlbnQgbWFwXG4gICAgICAgICAgICAvLyBhbmQgZGVsZXRlIHRoZW0gZnJvbSB0aGUgbWFwLCB0aGVuIG1lcmdlIHRoZSBuZXcgbWFwXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgY2F1c2UgcmVhY3Rpb25zIG9ubHkgb24gY2hhbmdlZCB2YWx1ZXNcbiAgICAgICAgICAgIHZhciBuZXdLZXlzID0gZ2V0TWFwTGlrZUtleXModmFsdWVzKTtcbiAgICAgICAgICAgIHZhciBvbGRLZXlzID0gQXJyYXkuZnJvbShfdGhpcy5rZXlzKCkpO1xuICAgICAgICAgICAgdmFyIG1pc3NpbmdLZXlzID0gb2xkS2V5cy5maWx0ZXIoZnVuY3Rpb24gKGspIHsgcmV0dXJuIG5ld0tleXMuaW5kZXhPZihrKSA9PT0gLTE7IH0pO1xuICAgICAgICAgICAgbWlzc2luZ0tleXMuZm9yRWFjaChmdW5jdGlvbiAoaykgeyByZXR1cm4gX3RoaXMuZGVsZXRlKGspOyB9KTtcbiAgICAgICAgICAgIF90aGlzLm1lcmdlKHZhbHVlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYnNlcnZhYmxlTWFwLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlzQXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHBsYWluIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhpcyBtYXAuXG4gICAgICogTm90ZSB0aGF0IGFsbCB0aGUga2V5cyBiZWluZyBzdHJpbmdpZmllZC5cbiAgICAgKiBJZiB0aGVyZSBhcmUgZHVwbGljYXRpbmcga2V5cyBhZnRlciBjb252ZXJ0aW5nIHRoZW0gdG8gc3RyaW5ncywgYmVoYXZpb3VyIGlzIHVuZGV0ZXJtaW5lZC5cbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS50b1BPSk8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzMsIF9hO1xuICAgICAgICB2YXIgcmVzID0ge307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9kID0gX19yZWFkKF9jLnZhbHVlLCAyKSwga2V5ID0gX2RbMF0sIHZhbHVlID0gX2RbMV07XG4gICAgICAgICAgICAgICAgLy8gV2UgbGllIGFib3V0IHN5bWJvbCBrZXkgdHlwZXMgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTg2M1xuICAgICAgICAgICAgICAgIHJlc1t0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogc3RyaW5naWZ5S2V5KGtleSldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHNoYWxsb3cgbm9uIG9ic2VydmFibGUgb2JqZWN0IGNsb25lIG9mIHRoaXMgbWFwLlxuICAgICAqIE5vdGUgdGhhdCB0aGUgdmFsdWVzIG1pZ3RoIHN0aWxsIGJlIG9ic2VydmFibGUuIEZvciBhIGRlZXAgY2xvbmUgdXNlIG1vYngudG9KUy5cbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS50b0pTID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IE1hcCh0aGlzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlZCBieSBKU09OLnN0cmluZ2lmeVxuICAgICAgICByZXR1cm4gdGhpcy50b1BPSk8oKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKHRoaXMubmFtZSArXG4gICAgICAgICAgICBcIlt7IFwiICtcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5rZXlzKCkpXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBzdHJpbmdpZnlLZXkoa2V5KSArIFwiOiBcIiArIChcIlwiICsgX3RoaXMuZ2V0KGtleSkpOyB9KVxuICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIikgK1xuICAgICAgICAgICAgXCIgfV1cIik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPYnNlcnZlcyB0aGlzIG9iamVjdC4gVHJpZ2dlcnMgZm9yIHRoZSBldmVudHMgJ2FkZCcsICd1cGRhdGUnIGFuZCAnZGVsZXRlJy5cbiAgICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9vYnNlcnZlXG4gICAgICogZm9yIGNhbGxiYWNrIGRldGFpbHNcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBpbnZhcmlhbnQoZmlyZUltbWVkaWF0ZWx5ICE9PSB0cnVlLCBcImBvYnNlcnZlYCBkb2Vzbid0IHN1cHBvcnQgZmlyZUltbWVkaWF0ZWx5PXRydWUgaW4gY29tYmluYXRpb24gd2l0aCBtYXBzLlwiKTtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZU1hcDtcbn0oKSk7XG4vKiAndmFyJyBmaXhlcyBzbWFsbC1idWlsZCBpc3N1ZSAqL1xudmFyIGlzT2JzZXJ2YWJsZU1hcCA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlTWFwXCIsIE9ic2VydmFibGVNYXApO1xuXG52YXIgX2EkMTtcbnZhciBPYnNlcnZhYmxlU2V0TWFya2VyID0ge307XG52YXIgT2JzZXJ2YWJsZVNldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlU2V0KGluaXRpYWxEYXRhLCBlbmhhbmNlciwgbmFtZSkge1xuICAgICAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkgeyBlbmhhbmNlciA9IGRlZXBFbmhhbmNlcjsgfVxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk9ic2VydmFibGVTZXRAXCIgKyBnZXROZXh0SWQoKTsgfVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzW19hJDFdID0gT2JzZXJ2YWJsZVNldE1hcmtlcjtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5fYXRvbSA9IGNyZWF0ZUF0b20odGhpcy5uYW1lKTtcbiAgICAgICAgdGhpc1tTeW1ib2wudG9TdHJpbmdUYWddID0gXCJTZXRcIjtcbiAgICAgICAgaWYgKHR5cGVvZiBTZXQgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9ieC5zZXQgcmVxdWlyZXMgU2V0IHBvbHlmaWxsIGZvciB0aGUgY3VycmVudCBicm93c2VyLiBDaGVjayBiYWJlbC1wb2x5ZmlsbCBvciBjb3JlLWpzL2VzNi9zZXQuanNcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmhhbmNlciA9IGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7IHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBuYW1lKTsgfTtcbiAgICAgICAgaWYgKGluaXRpYWxEYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UoaW5pdGlhbERhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhfdGhpcy5fZGF0YS52YWx1ZXMoKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVsZXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrRm4sIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGVfMiwgX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbi5jYWxsKHRoaXNBcmcsIHZhbHVlLCB2YWx1ZSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVTZXQucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnNpemU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLl9hdG9tKTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgLy8gVE9ETzogaWRlYWxseSwgdmFsdWUgPSBjaGFuZ2UudmFsdWUgd291bGQgYmUgZG9uZSBoZXJlLCBzbyB0aGF0IHZhbHVlcyBjYW4gYmVcbiAgICAgICAgICAgIC8vIGNoYW5nZWQgYnkgaW50ZXJjZXB0b3IuIFNhbWUgYXBwbGllcyBmb3Igb3RoZXIgU2V0IGFuZCBNYXAgYXBpJ3MuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fZGF0YS5hZGQoX3RoaXMuZW5oYW5jZXIodmFsdWUsIHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9hdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXModmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9hdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fZGF0YS5kZWxldGUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5oYXModGhpcy5kZWhhbmNlVmFsdWUodmFsdWUpKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgICAgICB2YXIga2V5cyA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xuICAgICAgICB2YXIgdmFsdWVzID0gQXJyYXkuZnJvbSh0aGlzLnZhbHVlcygpKTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IHZhbHVlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBba2V5c1tpbmRleF0sIHZhbHVlc1tpbmRleF1dLCBkb25lOiBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgIDogeyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICAgICAgdmFyIG9ic2VydmFibGVWYWx1ZXMgPSBBcnJheS5mcm9tKHRoaXMuX2RhdGEudmFsdWVzKCkpO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgb2JzZXJ2YWJsZVZhbHVlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBzZWxmLmRlaGFuY2VWYWx1ZShvYnNlcnZhYmxlVmFsdWVzW25leHRJbmRleCsrXSksIGRvbmU6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpc09ic2VydmFibGVTZXQob3RoZXIpKSB7XG4gICAgICAgICAgICBvdGhlciA9IG90aGVyLnRvSlMoKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvdGhlcikpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBfdGhpcy5hZGQodmFsdWUpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRVM2U2V0KG90aGVyKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIF90aGlzLmFkZCh2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZhaWwoXCJDYW5ub3QgaW5pdGlhbGl6ZSBzZXQgZnJvbSBcIiArIG90aGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIC8vIFRPRE8gJ2ZpcmVJbW1lZGlhdGVseScgY2FuIGJlIHRydWU/XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgaW52YXJpYW50KGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggc2V0cy5cIik7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUudG9KUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiWyBcIiArIEFycmF5LmZyb20odGhpcykuam9pbihcIiwgXCIpICsgXCIgXVwiO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGVbKF9hJDEgPSAkbW9ieCwgU3ltYm9sLml0ZXJhdG9yKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVTZXQ7XG59KCkpO1xudmFyIGlzT2JzZXJ2YWJsZVNldCA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlU2V0XCIsIE9ic2VydmFibGVTZXQpO1xuXG52YXIgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXQsIHZhbHVlcywgbmFtZSwgZGVmYXVsdEVuaGFuY2VyKSB7XG4gICAgICAgIGlmICh2YWx1ZXMgPT09IHZvaWQgMCkgeyB2YWx1ZXMgPSBuZXcgTWFwKCk7IH1cbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlZmF1bHRFbmhhbmNlciA9IGRlZmF1bHRFbmhhbmNlcjtcbiAgICAgICAgdGhpcy5rZXlzQXRvbSA9IG5ldyBBdG9tKG5hbWUgKyBcIi5rZXlzXCIpO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KS5nZXQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoa2V5LCBuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgaWYgKG9ic2VydmFibGUgaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlKSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlLnNldChuZXdWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW50ZXJjZXB0XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IGluc3RhbmNlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnByZXBhcmVOZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIC8vIG5vdGlmeSBzcHkgJiBvYnNlcnZlcnNcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgbWFwID0gdGhpcy5wZW5kaW5nS2V5cyB8fCAodGhpcy5wZW5kaW5nS2V5cyA9IG5ldyBNYXAoKSk7XG4gICAgICAgIHZhciBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KVxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmdldCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBleGlzdHMgPSAhIXRoaXMudmFsdWVzLmdldChrZXkpO1xuICAgICAgICAgICAgLy8gUG9zc2libGUgb3B0aW1pemF0aW9uOiBEb24ndCBoYXZlIGEgc2VwYXJhdGUgbWFwIGZvciBub24gZXhpc3Rpbmcga2V5cyxcbiAgICAgICAgICAgIC8vIGJ1dCBzdG9yZSB0aGVtIGluIHRoZSB2YWx1ZXMgbWFwIGluc3RlYWQsIHVzaW5nIGEgc3BlY2lhbCBzeW1ib2wgdG8gZGVub3RlIFwibm90IGV4aXN0aW5nXCJcbiAgICAgICAgICAgIGVudHJ5ID0gbmV3IE9ic2VydmFibGVWYWx1ZShleGlzdHMsIHJlZmVyZW5jZUVuaGFuY2VyLCB0aGlzLm5hbWUgKyBcIi5cIiArIHN0cmluZ2lmeUtleShrZXkpICsgXCI/XCIsIGZhbHNlKTtcbiAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBlbnRyeSk7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZ2V0KCk7IC8vIHJlYWQgdG8gc3Vic2NyaWJlXG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuYWRkT2JzZXJ2YWJsZVByb3AgPSBmdW5jdGlvbiAocHJvcE5hbWUsIG5ld1ZhbHVlLCBlbmhhbmNlcikge1xuICAgICAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkgeyBlbmhhbmNlciA9IHRoaXMuZGVmYXVsdEVuaGFuY2VyOyB9XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUodGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSB8fCB0YXJnZXQsXG4gICAgICAgICAgICAgICAgbmFtZTogcHJvcE5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKG5ld1ZhbHVlLCBlbmhhbmNlciwgdGhpcy5uYW1lICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkocHJvcE5hbWUpLCBmYWxzZSk7XG4gICAgICAgIHRoaXMudmFsdWVzLnNldChwcm9wTmFtZSwgb2JzZXJ2YWJsZSk7XG4gICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTsgLy8gb2JzZXJ2YWJsZVZhbHVlIG1pZ2h0IGhhdmUgY2hhbmdlZCBpdFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wTmFtZSwgZ2VuZXJhdGVPYnNlcnZhYmxlUHJvcENvbmZpZyhwcm9wTmFtZSkpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5QWRkaXRpb24ocHJvcE5hbWUsIG5ld1ZhbHVlKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuYWRkQ29tcHV0ZWRQcm9wID0gZnVuY3Rpb24gKHByb3BlcnR5T3duZXIsIC8vIHdoZXJlIGlzIHRoZSBwcm9wZXJ0eSBkZWNsYXJlZD9cbiAgICBwcm9wTmFtZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCB0aGlzLm5hbWUgKyBcIi5cIiArIHN0cmluZ2lmeUtleShwcm9wTmFtZSk7XG4gICAgICAgIHRoaXMudmFsdWVzLnNldChwcm9wTmFtZSwgbmV3IENvbXB1dGVkVmFsdWUob3B0aW9ucykpO1xuICAgICAgICBpZiAocHJvcGVydHlPd25lciA9PT0gdGFyZ2V0IHx8IGlzUHJvcGVydHlDb25maWd1cmFibGUocHJvcGVydHlPd25lciwgcHJvcE5hbWUpKVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BlcnR5T3duZXIsIHByb3BOYW1lLCBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyhwcm9wTmFtZSkpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZXMuaGFzKGtleSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRhcmdldCxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJyZW1vdmVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YXJ0QmF0Y2goKTtcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgICAgICB2YXIgb2xkT2JzZXJ2YWJsZSA9IHRoaXMudmFsdWVzLmdldChrZXkpO1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gb2xkT2JzZXJ2YWJsZSAmJiBvbGRPYnNlcnZhYmxlLmdldCgpO1xuICAgICAgICAgICAgb2xkT2JzZXJ2YWJsZSAmJiBvbGRPYnNlcnZhYmxlLnNldCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgLy8gbm90aWZ5IGtleSBhbmQga2V5c2V0IGxpc3RlbmVyc1xuICAgICAgICAgICAgdGhpcy5rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmdLZXlzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5wZW5kaW5nS2V5cy5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkpXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnNldChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIHByb3BcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnRhcmdldFtrZXldO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZW1vdmVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoX19hc3NpZ24oe30sIGNoYW5nZSwgeyBuYW1lOiB0aGlzLm5hbWUsIGtleToga2V5IH0pKTtcbiAgICAgICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIGVuZEJhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaWxsZWdhbEFjY2VzcyA9IGZ1bmN0aW9uIChvd25lciwgcHJvcE5hbWUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaGFwcGVucyBpZiBhIHByb3BlcnR5IGlzIGFjY2Vzc2VkIHRocm91Z2ggdGhlIHByb3RvdHlwZSBjaGFpbiwgYnV0IHRoZSBwcm9wZXJ0eSB3YXNcbiAgICAgICAgICogZGVjbGFyZWQgZGlyZWN0bHkgYXMgb3duIHByb3BlcnR5IG9uIHRoZSBwcm90b3R5cGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEUuZy46XG4gICAgICAgICAqIGNsYXNzIEEge1xuICAgICAgICAgKiB9XG4gICAgICAgICAqIGV4dGVuZE9ic2VydmFibGUoQS5wcm90b3R5cGUsIHsgeDogMSB9KVxuICAgICAgICAgKlxuICAgICAgICAgKiBjbGFzc0IgZXh0ZW5zIEEge1xuICAgICAgICAgKiB9XG4gICAgICAgICAqIGNvbnNvbGUubG9nKG5ldyBCKCkueClcbiAgICAgICAgICpcbiAgICAgICAgICogSXQgaXMgdW5jbGVhciB3aGV0aGVyIHRoZSBwcm9wZXJ0eSBzaG91bGQgYmUgY29uc2lkZXJlZCAnc3RhdGljJyBvciBpbmhlcml0ZWQuXG4gICAgICAgICAqIEVpdGhlciB1c2UgYGNvbnNvbGUubG9nKEEueClgXG4gICAgICAgICAqIG9yOiBkZWNvcmF0ZShBLCB7IHg6IG9ic2VydmFibGUgfSlcbiAgICAgICAgICpcbiAgICAgICAgICogV2hlbiB1c2luZyBkZWNvcmF0ZSwgdGhlIHByb3BlcnR5IHdpbGwgYWx3YXlzIGJlIHJlZGVjbGFyZWQgYXMgb3duIHByb3BlcnR5IG9uIHRoZSBhY3R1YWwgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIGNvbnNvbGUud2FybihcIlByb3BlcnR5ICdcIiArIHByb3BOYW1lICsgXCInIG9mICdcIiArIG93bmVyICsgXCInIHdhcyBhY2Nlc3NlZCB0aHJvdWdoIHRoZSBwcm90b3R5cGUgY2hhaW4uIFVzZSAnZGVjb3JhdGUnIGluc3RlYWQgdG8gZGVjbGFyZSB0aGUgcHJvcCBvciBhY2Nlc3MgaXQgc3RhdGljYWxseSB0aHJvdWdoIGl0J3Mgb3duZXJcIik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPYnNlcnZlcyB0aGlzIG9iamVjdC4gVHJpZ2dlcnMgZm9yIHRoZSBldmVudHMgJ2FkZCcsICd1cGRhdGUnIGFuZCAnZGVsZXRlJy5cbiAgICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9vYnNlcnZlXG4gICAgICogZm9yIGNhbGxiYWNrIGRldGFpbHNcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIGludmFyaWFudChmaXJlSW1tZWRpYXRlbHkgIT09IHRydWUsIFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgZmlyZSBpbW1lZGlhdGVseSBwcm9wZXJ0eSBmb3Igb2JzZXJ2YWJsZSBvYmplY3RzLlwiKTtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgY2FsbGJhY2spO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUubm90aWZ5UHJvcGVydHlBZGRpdGlvbiA9IGZ1bmN0aW9uIChrZXksIG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRoaXMudGFyZ2V0LFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbih7fSwgY2hhbmdlLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdLZXlzKSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnBlbmRpbmdLZXlzLmdldChrZXkpO1xuICAgICAgICAgICAgaWYgKGVudHJ5KVxuICAgICAgICAgICAgICAgIGVudHJ5LnNldCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleXNBdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuZ2V0S2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHRoaXMua2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgLy8gcmV0dXJuIFJlZmxlY3Qub3duS2V5cyh0aGlzLnZhbHVlcykgYXMgYW55XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy52YWx1ZXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9kID0gX19yZWFkKF9jLnZhbHVlLCAyKSwga2V5ID0gX2RbMF0sIHZhbHVlID0gX2RbMV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb247XG59KCkpO1xuZnVuY3Rpb24gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgbmFtZSwgZGVmYXVsdEVuaGFuY2VyKSB7XG4gICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJcIjsgfVxuICAgIGlmIChkZWZhdWx0RW5oYW5jZXIgPT09IHZvaWQgMCkgeyBkZWZhdWx0RW5oYW5jZXIgPSBkZWVwRW5oYW5jZXI7IH1cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgJG1vYngpKVxuICAgICAgICByZXR1cm4gdGFyZ2V0WyRtb2J4XTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgaW52YXJpYW50KE9iamVjdC5pc0V4dGVuc2libGUodGFyZ2V0KSwgXCJDYW5ub3QgbWFrZSB0aGUgZGVzaWduYXRlZCBvYmplY3Qgb2JzZXJ2YWJsZTsgaXQgaXMgbm90IGV4dGVuc2libGVcIik7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHRhcmdldCkpXG4gICAgICAgIG5hbWUgPSAodGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgfHwgXCJPYnNlcnZhYmxlT2JqZWN0XCIpICsgXCJAXCIgKyBnZXROZXh0SWQoKTtcbiAgICBpZiAoIW5hbWUpXG4gICAgICAgIG5hbWUgPSBcIk9ic2VydmFibGVPYmplY3RAXCIgKyBnZXROZXh0SWQoKTtcbiAgICB2YXIgYWRtID0gbmV3IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXQsIG5ldyBNYXAoKSwgc3RyaW5naWZ5S2V5KG5hbWUpLCBkZWZhdWx0RW5oYW5jZXIpO1xuICAgIGFkZEhpZGRlblByb3AodGFyZ2V0LCAkbW9ieCwgYWRtKTtcbiAgICByZXR1cm4gYWRtO1xufVxudmFyIG9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIGNvbXB1dGVkUHJvcGVydHlDb25maWdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIGdlbmVyYXRlT2JzZXJ2YWJsZVByb3BDb25maWcocHJvcE5hbWUpIHtcbiAgICByZXR1cm4gKG9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdIHx8XG4gICAgICAgIChvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSA9IHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1skbW9ieF0ucmVhZChwcm9wTmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHRoaXNbJG1vYnhdLndyaXRlKHByb3BOYW1lLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xufVxuZnVuY3Rpb24gZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcihvd25lcikge1xuICAgIHZhciBhZG0gPSBvd25lclskbW9ieF07XG4gICAgaWYgKCFhZG0pIHtcbiAgICAgICAgLy8gYmVjYXVzZSBjb21wdXRlZCBwcm9wcyBhcmUgZGVjbGFyZWQgb24gcHJvdHksXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IGluc3RhbmNlIG1pZ2h0IG5vdCBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgICAgIGluaXRpYWxpemVJbnN0YW5jZShvd25lcik7XG4gICAgICAgIHJldHVybiBvd25lclskbW9ieF07XG4gICAgfVxuICAgIHJldHVybiBhZG07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyhwcm9wTmFtZSkge1xuICAgIHJldHVybiAoY29tcHV0ZWRQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdIHx8XG4gICAgICAgIChjb21wdXRlZFByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gPSB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGdsb2JhbFN0YXRlLmNvbXB1dGVkQ29uZmlndXJhYmxlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS5yZWFkKHByb3BOYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS53cml0ZShwcm9wTmFtZSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbn1cbnZhciBpc09ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb25cIiwgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKTtcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykge1xuICAgIGlmIChpc09iamVjdCh0aGluZykpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxuICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UodGhpbmcpO1xuICAgICAgICByZXR1cm4gaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYnhdKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09IFwib2JqZWN0XCIgJiYgdGhpbmcgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSkge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJJdCBpcyBub3QgcG9zc2libGUgdG8gZ2V0IGluZGV4IGF0b21zIGZyb20gYXJyYXlzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XS5hdG9tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVTZXQodGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpbmdbJG1vYnhdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpKSB7XG4gICAgICAgICAgICB2YXIgYW55VGhpbmcgPSB0aGluZztcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBhbnlUaGluZy5fa2V5c0F0b207XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGFueVRoaW5nLl9kYXRhLmdldChwcm9wZXJ0eSkgfHwgYW55VGhpbmcuX2hhc01hcC5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKCFvYnNlcnZhYmxlKVxuICAgICAgICAgICAgICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgIFwidGhlIGVudHJ5ICdcIiArIHByb3BlcnR5ICsgXCInIGRvZXMgbm90IGV4aXN0IGluIHRoZSBvYnNlcnZhYmxlIG1hcCAnXCIgKyBnZXREZWJ1Z05hbWUodGhpbmcpICsgXCInXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxuICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UodGhpbmcpO1xuICAgICAgICBpZiAocHJvcGVydHkgJiYgIXRoaW5nWyRtb2J4XSlcbiAgICAgICAgICAgIHRoaW5nW3Byb3BlcnR5XTsgLy8gU2VlICMxMDcyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5KVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcInBsZWFzZSBzcGVjaWZ5IGEgcHJvcGVydHlcIik7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaW5nWyRtb2J4XS52YWx1ZXMuZ2V0KHByb3BlcnR5KTtcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZSlcbiAgICAgICAgICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICBcIm5vIG9ic2VydmFibGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgZm91bmQgb24gdGhlIG9ic2VydmFibGUgb2JqZWN0ICdcIiArIGdldERlYnVnTmFtZSh0aGluZykgKyBcIidcIik7XG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBdG9tKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUodGhpbmcpIHx8IGlzUmVhY3Rpb24odGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKGlzUmVhY3Rpb24odGhpbmdbJG1vYnhdKSkge1xuICAgICAgICAgICAgLy8gZGlzcG9zZXIgZnVuY3Rpb25cbiAgICAgICAgICAgIHJldHVybiB0aGluZ1skbW9ieF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQ2Fubm90IG9idGFpbiBhdG9tIGZyb20gXCIgKyB0aGluZyk7XG59XG5mdW5jdGlvbiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpIHtcbiAgICBpZiAoIXRoaW5nKVxuICAgICAgICBmYWlsKFwiRXhwZWN0aW5nIHNvbWUgb2JqZWN0XCIpO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24oZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbiAgICBpZiAoaXNBdG9tKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUodGhpbmcpIHx8IGlzUmVhY3Rpb24odGhpbmcpKVxuICAgICAgICByZXR1cm4gdGhpbmc7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCh0aGluZykgfHwgaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSlcbiAgICAgICAgcmV0dXJuIHRoaW5nO1xuICAgIC8vIEluaXRpYWxpemVycyBydW4gbGF6aWx5IHdoZW4gdHJhbnNwaWxpbmcgdG8gYmFiZWwsIHNvIG1ha2Ugc3VyZSB0aGV5IGFyZSBydW4uLi5cbiAgICBpbml0aWFsaXplSW5zdGFuY2UodGhpbmcpO1xuICAgIGlmICh0aGluZ1skbW9ieF0pXG4gICAgICAgIHJldHVybiB0aGluZ1skbW9ieF07XG4gICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJDYW5ub3Qgb2J0YWluIGFkbWluaXN0cmF0aW9uIGZyb20gXCIgKyB0aGluZyk7XG59XG5mdW5jdGlvbiBnZXREZWJ1Z05hbWUodGhpbmcsIHByb3BlcnR5KSB7XG4gICAgdmFyIG5hbWVkO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBuYW1lZCA9IGdldEF0b20odGhpbmcsIHByb3BlcnR5KTtcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZU1hcCh0aGluZykgfHwgaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSlcbiAgICAgICAgbmFtZWQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZyk7XG4gICAgZWxzZVxuICAgICAgICBuYW1lZCA9IGdldEF0b20odGhpbmcpOyAvLyB2YWxpZCBmb3IgYXJyYXlzIGFzIHdlbGxcbiAgICByZXR1cm4gbmFtZWQubmFtZTtcbn1cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIpO1xufVxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL2Jsb2IvNWMyMzdhN2M2ODJmYjY4ZmQ1Mzc4MjAzZjBiZjIyZGNlMTYyNDg1NC91bmRlcnNjb3JlLmpzI0wxMTg2LUwxMjg5XG4vLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuZnVuY3Rpb24gZXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXG4gICAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXG4gICAgaWYgKGEgPT09IGIpXG4gICAgICAgIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcbiAgICAvLyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb25seSBlcXVhbCB0byBpdHNlbGYgKHN0cmljdCBjb21wYXJpc29uKS5cbiAgICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgaWYgKGEgIT09IGEpXG4gICAgICAgIHJldHVybiBiICE9PSBiO1xuICAgIC8vIEV4aGF1c3QgcHJpbWl0aXZlIGNoZWNrc1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGE7XG4gICAgaWYgKHR5cGUgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBiICE9IFwib2JqZWN0XCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZGVlcEVxKGEsIGIsIGFTdGFjaywgYlN0YWNrKTtcbn1cbi8vIEludGVybmFsIHJlY3Vyc2l2ZSBjb21wYXJpc29uIGZ1bmN0aW9uIGZvciBgaXNFcXVhbGAuXG5mdW5jdGlvbiBkZWVwRXEoYSwgYiwgYVN0YWNrLCBiU3RhY2spIHtcbiAgICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgICBhID0gdW53cmFwKGEpO1xuICAgIGIgPSB1bndyYXAoYik7XG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKTtcbiAgICBpZiAoY2xhc3NOYW1lICE9PSB0b1N0cmluZy5jYWxsKGIpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgICAgLy8gU3RyaW5ncywgbnVtYmVycywgcmVndWxhciBleHByZXNzaW9ucywgZGF0ZXMsIGFuZCBib29sZWFucyBhcmUgY29tcGFyZWQgYnkgdmFsdWUuXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFJlZ0V4cF1cIjpcbiAgICAgICAgLy8gUmVnRXhwcyBhcmUgY29lcmNlZCB0byBzdHJpbmdzIGZvciBjb21wYXJpc29uIChOb3RlOiAnJyArIC9hL2kgPT09ICcvYS9pJylcbiAgICAgICAgY2FzZSBcIltvYmplY3QgU3RyaW5nXVwiOlxuICAgICAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcbiAgICAgICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gYG5ldyBTdHJpbmcoXCI1XCIpYC5cbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgYSA9PT0gXCJcIiArIGI7XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IE51bWJlcl1cIjpcbiAgICAgICAgICAgIC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG4gICAgICAgICAgICAvLyBPYmplY3QoTmFOKSBpcyBlcXVpdmFsZW50IHRvIE5hTi5cbiAgICAgICAgICAgIGlmICgrYSAhPT0gK2EpXG4gICAgICAgICAgICAgICAgcmV0dXJuICtiICE9PSArYjtcbiAgICAgICAgICAgIC8vIEFuIGBlZ2FsYCBjb21wYXJpc29uIGlzIHBlcmZvcm1lZCBmb3Igb3RoZXIgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICAgICAgICByZXR1cm4gK2EgPT09IDAgPyAxIC8gK2EgPT09IDEgLyBiIDogK2EgPT09ICtiO1xuICAgICAgICBjYXNlIFwiW29iamVjdCBEYXRlXVwiOlxuICAgICAgICBjYXNlIFwiW29iamVjdCBCb29sZWFuXVwiOlxuICAgICAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxuICAgICAgICAgICAgLy8gbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZCBkYXRlcyB3aXRoIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9uc1xuICAgICAgICAgICAgLy8gb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgICAgICAgcmV0dXJuICthID09PSArYjtcbiAgICAgICAgY2FzZSBcIltvYmplY3QgU3ltYm9sXVwiOlxuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC52YWx1ZU9mLmNhbGwoYSkgPT09IFN5bWJvbC52YWx1ZU9mLmNhbGwoYikpO1xuICAgIH1cbiAgICB2YXIgYXJlQXJyYXlzID0gY2xhc3NOYW1lID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gICAgaWYgKCFhcmVBcnJheXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhICE9IFwib2JqZWN0XCIgfHwgdHlwZW9mIGIgIT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzIG9yIGBBcnJheWBzXG4gICAgICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJlxuICAgICAgICAgICAgISh0eXBlb2YgYUN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgIGFDdG9yIGluc3RhbmNlb2YgYUN0b3IgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgYkN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgIGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpICYmXG4gICAgICAgICAgICAoXCJjb25zdHJ1Y3RvclwiIGluIGEgJiYgXCJjb25zdHJ1Y3RvclwiIGluIGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQXNzdW1lIGVxdWFsaXR5IGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpY1xuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxuICAgIC8vIEluaXRpYWxpemluZyBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICAvLyBJdCdzIGRvbmUgaGVyZSBzaW5jZSB3ZSBvbmx5IG5lZWQgdGhlbSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzIGNvbXBhcmlzb24uXG4gICAgYVN0YWNrID0gYVN0YWNrIHx8IFtdO1xuICAgIGJTdGFjayA9IGJTdGFjayB8fCBbXTtcbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgLy8gTGluZWFyIHNlYXJjaC4gUGVyZm9ybWFuY2UgaXMgaW52ZXJzZWx5IHByb3BvcnRpb25hbCB0byB0aGUgbnVtYmVyIG9mXG4gICAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKVxuICAgICAgICAgICAgcmV0dXJuIGJTdGFja1tsZW5ndGhdID09PSBiO1xuICAgIH1cbiAgICAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gICAgYVN0YWNrLnB1c2goYSk7XG4gICAgYlN0YWNrLnB1c2goYik7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMuXG4gICAgaWYgKGFyZUFycmF5cykge1xuICAgICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICAgIGlmIChsZW5ndGggIT09IGIubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIGlmICghZXEoYVtsZW5ndGhdLCBiW2xlbmd0aF0sIGFTdGFjaywgYlN0YWNrKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgICAgICB2YXIga2V5ID0gdm9pZCAwO1xuICAgICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgYm90aCBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXMgYmVmb3JlIGNvbXBhcmluZyBkZWVwIGVxdWFsaXR5LlxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYikubGVuZ3RoICE9PSBsZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXG4gICAgICAgICAgICBrZXkgPSBrZXlzW2xlbmd0aF07XG4gICAgICAgICAgICBpZiAoIShoYXMkMShiLCBrZXkpICYmIGVxKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gdW53cmFwKGEpIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkoYSkpXG4gICAgICAgIHJldHVybiBhLnNsaWNlKCk7XG4gICAgaWYgKGlzRVM2TWFwKGEpIHx8IGlzT2JzZXJ2YWJsZU1hcChhKSlcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYS5lbnRyaWVzKCkpO1xuICAgIGlmIChpc0VTNlNldChhKSB8fCBpc09ic2VydmFibGVTZXQoYSkpXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGEuZW50cmllcygpKTtcbiAgICByZXR1cm4gYTtcbn1cbmZ1bmN0aW9uIGhhcyQxKGEsIGtleSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwga2V5KTtcbn1cblxuZnVuY3Rpb24gbWFrZUl0ZXJhYmxlKGl0ZXJhdG9yKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGdldFNlbGY7XG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuZnVuY3Rpb24gZ2V0U2VsZigpIHtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLypcblRoZSBvbmx5IHJlYXNvbiBmb3IgdGhpcyBmaWxlIHRvIGV4aXN0IGlzIHB1cmUgaG9ycm9yOlxuV2l0aG91dCBpdCByb2xsdXAgY2FuIG1ha2UgdGhlIGJ1bmRsaW5nIGZhaWwgYXQgYW55IHBvaW50IGluIHRpbWU7IHdoZW4gaXQgcm9sbHMgdXAgdGhlIGZpbGVzIGluIHRoZSB3cm9uZyBvcmRlclxuaXQgd2lsbCBjYXVzZSB1bmRlZmluZWQgZXJyb3JzIChmb3IgZXhhbXBsZSBiZWNhdXNlIHN1cGVyIGNsYXNzZXMgb3IgbG9jYWwgdmFyaWFibGVzIG5vdCBiZWluZyBob2lzdGVkKS5cbldpdGggdGhpcyBmaWxlIHRoYXQgd2lsbCBzdGlsbCBoYXBwZW4sXG5idXQgYXQgbGVhc3QgaW4gdGhpcyBmaWxlIHdlIGNhbiBtYWdpY2FsbHkgcmVvcmRlciB0aGUgaW1wb3J0cyB3aXRoIHRyaWFsIGFuZCBlcnJvciB1bnRpbCB0aGUgYnVpbGQgc3VjY2VlZHMgYWdhaW4uXG4qL1xuXG4vKipcbiAqIChjKSBNaWNoZWwgV2VzdHN0cmF0ZSAyMDE1IC0gMjAxOFxuICogTUlUIExpY2Vuc2VkXG4gKlxuICogV2VsY29tZSB0byB0aGUgbW9ieCBzb3VyY2VzISBUbyBnZXQgYW4gZ2xvYmFsIG92ZXJ2aWV3IG9mIGhvdyBNb2JYIGludGVybmFsbHkgd29ya3MsXG4gKiB0aGlzIGlzIGEgZ29vZCBwbGFjZSB0byBzdGFydDpcbiAqIGh0dHBzOi8vbWVkaXVtLmNvbS9AbXdlc3RzdHJhdGUvYmVjb21pbmctZnVsbHktcmVhY3RpdmUtYW4taW4tZGVwdGgtZXhwbGFuYXRpb24tb2YtbW9ic2VydmFibGUtNTU5OTUyNjJhMjU0Iy54dmJoNnFkNzRcbiAqXG4gKiBTb3VyY2UgZm9sZGVyczpcbiAqID09PT09PT09PT09PT09PVxuICpcbiAqIC0gYXBpLyAgICAgTW9zdCBvZiB0aGUgcHVibGljIHN0YXRpYyBtZXRob2RzIGV4cG9zZWQgYnkgdGhlIG1vZHVsZSBjYW4gYmUgZm91bmQgaGVyZS5cbiAqIC0gY29yZS8gICAgSW1wbGVtZW50YXRpb24gb2YgdGhlIE1vYlggYWxnb3JpdGhtOyBhdG9tcywgZGVyaXZhdGlvbnMsIHJlYWN0aW9ucywgZGVwZW5kZW5jeSB0cmVlcywgb3B0aW1pemF0aW9ucy4gQ29vbCBzdHVmZiBjYW4gYmUgZm91bmQgaGVyZS5cbiAqIC0gdHlwZXMvICAgQWxsIHRoZSBtYWdpYyB0aGF0IGlzIG5lZWQgdG8gaGF2ZSBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgdmFsdWVzIGlzIGluIHRoaXMgZm9sZGVyLiBJbmNsdWRpbmcgdGhlIG1vZGlmaWVycyBsaWtlIGBhc0ZsYXRgLlxuICogLSB1dGlscy8gICBVdGlsaXR5IHN0dWZmLlxuICpcbiAqL1xuaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnhdIE1vYlggNSsgcmVxdWlyZXMgUHJveHkgYW5kIFN5bWJvbCBvYmplY3RzLiBJZiB5b3VyIGVudmlyb25tZW50IGRvZXNuJ3Qgc3VwcG9ydCBTeW1ib2wgb3IgUHJveHkgb2JqZWN0cywgcGxlYXNlIGRvd25ncmFkZSB0byBNb2JYIDQuIEZvciBSZWFjdCBOYXRpdmUgQW5kcm9pZCwgY29uc2lkZXIgdXBncmFkaW5nIEpTQ29yZS5cIik7XG59XG50cnkge1xuICAgIC8vIGRlZmluZSBwcm9jZXNzLmVudiBpZiBuZWVkZWRcbiAgICAvLyBpZiB0aGlzIGlzIG5vdCBhIHByb2R1Y3Rpb24gYnVpbGQgaW4gdGhlIGZpcnN0IHBsYWNlXG4gICAgLy8gKGluIHdoaWNoIGNhc2UgdGhlIGV4cHJlc3Npb24gYmVsb3cgd291bGQgYmUgc3Vic3RpdHV0ZWQgd2l0aCAncHJvZHVjdGlvbicpXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG59XG5jYXRjaCAoZSkge1xuICAgIHZhciBnID0gZ2V0R2xvYmFsKCk7XG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICBnLnByb2Nlc3MgPSB7fTtcbiAgICBnLnByb2Nlc3MuZW52ID0ge307XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHRlc3RDb2RlTWluaWZpY2F0aW9uKCkgeyB9XG4gICAgaWYgKHRlc3RDb2RlTWluaWZpY2F0aW9uLm5hbWUgIT09IFwidGVzdENvZGVNaW5pZmljYXRpb25cIiAmJlxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgcHJvY2Vzcy5lbnYuSUdOT1JFX01PQlhfTUlOSUZZX1dBUk5JTkcgIT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIC8vIHRyaWNrIHNvIGl0IGRvZXNuJ3QgZ2V0IHJlcGxhY2VkXG4gICAgICAgIHZhciB2YXJOYW1lID0gW1wicHJvY2Vzc1wiLCBcImVudlwiLCBcIk5PREVfRU5WXCJdLmpvaW4oXCIuXCIpO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0geW91IGFyZSBydW5uaW5nIGEgbWluaWZpZWQgYnVpbGQsIGJ1dCAnXCIgKyB2YXJOYW1lICsgXCInIHdhcyBub3Qgc2V0IHRvICdwcm9kdWN0aW9uJyBpbiB5b3VyIGJ1bmRsZXIuIFRoaXMgcmVzdWx0cyBpbiBhbiB1bm5lY2Vzc2FyaWx5IGxhcmdlIGFuZCBzbG93IGJ1bmRsZVwiKTtcbiAgICB9XG59KSgpO1xuaWYgKHR5cGVvZiBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZHlrb2cvbW9ieC1kZXZ0b29scy9cbiAgICBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5pbmplY3RNb2J4KHtcbiAgICAgICAgc3B5OiBzcHksXG4gICAgICAgIGV4dHJhczoge1xuICAgICAgICAgICAgZ2V0RGVidWdOYW1lOiBnZXREZWJ1Z05hbWVcbiAgICAgICAgfSxcbiAgICAgICAgJG1vYng6ICRtb2J4XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7ICRtb2J4LCBJRGVyaXZhdGlvblN0YXRlLCBPYnNlcnZhYmxlTWFwLCBPYnNlcnZhYmxlU2V0LCBSZWFjdGlvbiwgYWxsb3dTdGF0ZUNoYW5nZXMgYXMgX2FsbG93U3RhdGVDaGFuZ2VzLCBhbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkIGFzIF9hbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkLCBfZW5kQWN0aW9uLCBnZXRBZG1pbmlzdHJhdGlvbiBhcyBfZ2V0QWRtaW5pc3RyYXRpb24sIGdldEdsb2JhbFN0YXRlIGFzIF9nZXRHbG9iYWxTdGF0ZSwgaW50ZXJjZXB0UmVhZHMgYXMgX2ludGVyY2VwdFJlYWRzLCBpc0NvbXB1dGluZ0Rlcml2YXRpb24gYXMgX2lzQ29tcHV0aW5nRGVyaXZhdGlvbiwgcmVzZXRHbG9iYWxTdGF0ZSBhcyBfcmVzZXRHbG9iYWxTdGF0ZSwgX3N0YXJ0QWN0aW9uLCBhY3Rpb24sIGF1dG9ydW4sIGNvbXBhcmVyLCBjb21wdXRlZCwgY29uZmlndXJlLCBjcmVhdGVBdG9tLCBkZWNvcmF0ZSwgZW50cmllcywgZXh0ZW5kT2JzZXJ2YWJsZSwgZmxvdywgZ2V0LCBnZXRBdG9tLCBnZXREZWJ1Z05hbWUsIGdldERlcGVuZGVuY3lUcmVlLCBnZXRPYnNlcnZlclRyZWUsIGhhcywgaW50ZXJjZXB0LCBpc0FjdGlvbiwgaXNBcnJheUxpa2UsIGlzT2JzZXJ2YWJsZVZhbHVlIGFzIGlzQm94ZWRPYnNlcnZhYmxlLCBpc0NvbXB1dGVkLCBpc0NvbXB1dGVkUHJvcCwgaXNPYnNlcnZhYmxlLCBpc09ic2VydmFibGVBcnJheSwgaXNPYnNlcnZhYmxlTWFwLCBpc09ic2VydmFibGVPYmplY3QsIGlzT2JzZXJ2YWJsZVByb3AsIGlzT2JzZXJ2YWJsZVNldCwga2V5cywgb2JzZXJ2YWJsZSwgb2JzZXJ2ZSwgb25CZWNvbWVPYnNlcnZlZCwgb25CZWNvbWVVbm9ic2VydmVkLCBvblJlYWN0aW9uRXJyb3IsIHJlYWN0aW9uLCByZW1vdmUsIHJ1bkluQWN0aW9uLCBzZXQsIHNweSwgdG9KUywgdHJhY2UsIHRyYW5zYWN0aW9uLCB1bnRyYWNrZWQsIHZhbHVlcywgd2hlbiB9O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7ICBvYnNlcnZhYmxlLCBpc0FycmF5TGlrZSB9IGZyb20gJ21vYngnXHJcblxyXG4vLyBhcnJheVxyXG4vKiBjb25zdCBhcnIgPSBvYnNlcnZhYmxlKFsnYScsICdiJywgJ2MnXSlcclxuY29uc29sZS5sb2coYXJyLCBBcnJheS5pc0FycmF5KGFyciksIGlzQXJyYXlMaWtlKGFycikpOyAqLyAvLyB0cnVlIHRydWVcclxuXHJcbi8vIG9ialxyXG5jb25zdCBvYmogPSBvYnNlcnZhYmxlKHthOiAxLCBiOiAyfSlcclxuY29uc29sZS5sb2cob2JqLmEpICAvLyAgMVxyXG4vLyBleHRlbmRPYnNlcnZhYmxlKCkgIOaWsOWinueahOWxnuaAp+eahOinguWvn1xyXG5cclxuLy8gbWFwXHJcbmNvbnN0IG1hcCA9IG9ic2VydmFibGUobmV3IE1hcCgpKVxyXG5tYXAuc2V0KCdhJywgMSlcclxuY29uc29sZS5sb2cobWFwLmhhcygnYScpKVxyXG5tYXAuZGVsZXRlKCdhJylcclxuY29uc29sZS5sb2cobWFwLmhhcygnYScpKVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
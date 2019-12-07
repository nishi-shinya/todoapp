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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/App.js */ \"./src/App.js\");\n\nconst app = new _src_App_js__WEBPACK_IMPORTED_MODULE_0__[\"App\"]();\napp.mount();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _model_TodoListModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/TodoListModel.js */ \"./src/model/TodoListModel.js\");\n/* harmony import */ var _model_TodoItemModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/TodoItemModel.js */ \"./src/model/TodoItemModel.js\");\n/* harmony import */ var _view_TodoListView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/TodoListView.js */ \"./src/view/TodoListView.js\");\n/* harmony import */ var _view_html_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/html-util.js */ \"./src/view/html-util.js\");\n\n\n\n\n\n\nclass App {\n    constructor() {\n        this.todoListModel = new _model_TodoListModel_js__WEBPACK_IMPORTED_MODULE_0__[\"TodoListModel\"]();\n    }\n\n    mount(){\n        const formElement = document.querySelector(\"#js-form\");\n        const inputElement = document.querySelector(\"#js-form-input\");\n        const containerElement = document.querySelector(\"#js-todo-list\");\n        const todoItemCountElement = document.querySelector(\"#js-todo-count\");\n        this.todoListModel.onChange(() => {\n            const todoItems = this.todoListModel.getTodoItems();\n            const todoListView = new _view_TodoListView_js__WEBPACK_IMPORTED_MODULE_2__[\"TodoListView\"]();\n            const todoListElement = todoListView.createElement(todoItems, {\n                onUpdateTodo: ({ id, completed }) => {\n                    this.todoListModel.updateTodo({ id, completed});\n                },\n                onDeleteTodo: ({ id }) => {\n                    this.todoListModel.deleteTodo({ id });\n                }           \n            });\n            Object(_view_html_util_js__WEBPACK_IMPORTED_MODULE_3__[\"render\"])(todoListElement, containerElement);\n            todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;\n        })    \n        formElement.addEventListener(\"submit\", (event) => {\n            event.preventDefault();\n            this.todoListModel.addTodo(new _model_TodoItemModel_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoItemModel\"]({\n                title: inputElement.value,\n                completed: false\n            }))\n            inputElement.value = \"\";\n        });\n    }\n}\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/EventEmitter.js":
/*!*****************************!*\
  !*** ./src/EventEmitter.js ***!
  \*****************************/
/*! exports provided: EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventEmitter\", function() { return EventEmitter; });\nclass EventEmitter {\n    constructor(){\n        this._listeners = new Map();\n    }\n\n    addEventListener(type, listener) {\n        if(!this._listeners.has(type)){\n            this._listeners.set(type, new Set());\n        }\n        const listenerSet = this._listeners.get(type);\n        listenerSet.add(listener);\n    }\n\n    emit(type) {\n        const listenerSet = this._listeners.get(type);\n        if(!listenerSet) {\n            return;\n        }\n        listenerSet.forEach(listener => {\n            listener.call(this);\n        });\n    }\n\n\n    removeEventListener(type, listener) {\n        const listenerSet = this._listeners.get(type);\n        if(!listenerSet) {\n            return;\n        }\n        listenerSet.forEach(ownListener => {\n            if(ownListener === listener) {\n                listenerSet.delete(listener);\n            }\n        });\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/EventEmitter.js?");

/***/ }),

/***/ "./src/model/TodoItemModel.js":
/*!************************************!*\
  !*** ./src/model/TodoItemModel.js ***!
  \************************************/
/*! exports provided: TodoItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoItemModel\", function() { return TodoItemModel; });\nlet todoIdx = 0;\n\nclass TodoItemModel {\n    constructor({ title, completed }) {\n        this.id = todoIdx++;\n        this.title = title;\n        this.completed = completed;\n    }\n}\n\n//# sourceURL=webpack:///./src/model/TodoItemModel.js?");

/***/ }),

/***/ "./src/model/TodoListModel.js":
/*!************************************!*\
  !*** ./src/model/TodoListModel.js ***!
  \************************************/
/*! exports provided: TodoListModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListModel\", function() { return TodoListModel; });\n/* harmony import */ var _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventEmitter.js */ \"./src/EventEmitter.js\");\n\n// import { threadId } from \"worker_threads\";\n\nclass TodoListModel extends _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"] {\n    constructor(items = []) {\n        super();\n        this.items = items;\n    }\n\n    getTotalCount() {\n        return this.items.length;\n    }\n\n    getTodoItems(){\n        return this.items;\n    }\n\n    onChange(listener) {\n        this.addEventListener(\"change\", listener);\n    }\n\n    emitChange() {\n        this.emit(\"change\");\n    }\n\n    addTodo(todoItem) {\n        this.items.push(todoItem);\n        this.emitChange();\n    }\n\n    updateTodo({ id, completed }) {\n        const todoItem = this.items.find(todo => todo.id === id);\n        if(!todoItem) {\n            return;\n        }\n        todoItem.completed = completed;\n        this.emitChange();\n    }\n\n    deleteTodo({ id }) {\n        this.items = this.items.filter(todo => {\n            return todo.id !== id;\n        })\n        this.emitChange();\n    }\n}\n\n//# sourceURL=webpack:///./src/model/TodoListModel.js?");

/***/ }),

/***/ "./src/view/TodoItemView.js":
/*!**********************************!*\
  !*** ./src/view/TodoItemView.js ***!
  \**********************************/
/*! exports provided: TodoItemView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoItemView\", function() { return TodoItemView; });\n/* harmony import */ var _html_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-util.js */ \"./src/view/html-util.js\");\n\n\nclass TodoItemView {\n    createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {\n        const todoItemElement = todoItem.completed\n        ? _html_util_js__WEBPACK_IMPORTED_MODULE_0__[\"element\"]`<li><input type=\"checkbox\" class=\"checkbox\" checked>\n        <s>${todoItem.title}</s>\n        <button class=\"delete\">x</button>\n        </input></li>`\n        : _html_util_js__WEBPACK_IMPORTED_MODULE_0__[\"element\"]`<li><input type=\"checkbox\" class=\"checkbox\">\n        ${todoItem.title}\n        <button class=\"delete\">x</button>\n        </input></li>`; \n        const inputCheckboxElement = todoItemElement.querySelector(\".checkbox\");\n        inputCheckboxElement.addEventListener(\"change\", () => {\n            onUpdateTodo({\n                id: todoItem.id,\n                completed: !todoItem.completed\n            });\n        });\n        const deleteButtonElement = todoItemElement.querySelector(\".delete\");\n        deleteButtonElement.addEventListener(\"click\", () => {\n            onDeleteTodo({\n                id: todoItem.id,\n            });\n        });\n        return todoItemElement;\n    }\n}\n\n//# sourceURL=webpack:///./src/view/TodoItemView.js?");

/***/ }),

/***/ "./src/view/TodoListView.js":
/*!**********************************!*\
  !*** ./src/view/TodoListView.js ***!
  \**********************************/
/*! exports provided: TodoListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListView\", function() { return TodoListView; });\n/* harmony import */ var _html_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-util.js */ \"./src/view/html-util.js\");\n/* harmony import */ var _TodoItemView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItemView.js */ \"./src/view/TodoItemView.js\");\n\n\n\nclass TodoListView {\n    createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {\n        const todoListElement = _html_util_js__WEBPACK_IMPORTED_MODULE_0__[\"element\"]`<ul />`;\n        todoItems.forEach(todoItem => {\n            const todoItemView = new _TodoItemView_js__WEBPACK_IMPORTED_MODULE_1__[\"TodoItemView\"]();\n            const todoItemElement = todoItemView.createElement(todoItem, {\n                onDeleteTodo,\n                onUpdateTodo\n            });\n            todoListElement.appendChild(todoItemElement);\n        });\n        return todoListElement;\n    }\n}\n\n//# sourceURL=webpack:///./src/view/TodoListView.js?");

/***/ }),

/***/ "./src/view/html-util.js":
/*!*******************************!*\
  !*** ./src/view/html-util.js ***!
  \*******************************/
/*! exports provided: escapeSpecialChars, htmlToElement, element, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeSpecialChars\", function() { return escapeSpecialChars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlToElement\", function() { return htmlToElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"element\", function() { return element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction escapeSpecialChars(str) {\n    return str\n    .replace(/&/g, \"&amp;\")\n    .replace(/</g, \"&lt;\")\n    .replace(/>/g, \"&gt;\")\n    .replace(/\"/g, \"&quot;\")\n    .replace(/'/g, \"&#039;\");\n}\n\nfunction htmlToElement(html) {\n    const template = document.createElement(\"template\");\n    template.innerHTML = html;\n    return template.content.firstElementChild;\n}\n\nfunction element(strings, ...values) {\n    const htmlString = strings.reduce((result, str, i ) => {\n        const value = values[i - 1];\n        if(typeof value === \"string\") {\n            return result + escapeSpecialChars(value) + str;\n        } else {\n            return result * String(value) + str;\n        }\n    })\n    return htmlToElement(htmlString);\n}\n\nfunction render(bodyElement, containerElement) {\n    containerElement.innerHTML = \"\";\n    containerElement.appendChild(bodyElement);\n}\n\n//# sourceURL=webpack:///./src/view/html-util.js?");

/***/ })

/******/ });
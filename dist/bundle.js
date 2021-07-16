/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/calculation.js":
/*!**********************************!*\
  !*** ./assets/js/calculation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculation\": () => (/* binding */ calculation)\n/* harmony export */ });\n/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command */ \"./assets/js/command.js\");\n/* harmony import */ var _receiver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receiver */ \"./assets/js/receiver.js\");\n\r\n\r\n\r\nconst result = document.querySelector('.calc__result');\r\n\r\nfunction calculation(num1, num2, oper) {\r\n\r\n  const command = new Map([\r\n    ['+', new _command__WEBPACK_IMPORTED_MODULE_0__.AddCommand(+num2)],\r\n    ['-', new _command__WEBPACK_IMPORTED_MODULE_0__.SubCommand(+num2)],\r\n    ['*', new _command__WEBPACK_IMPORTED_MODULE_0__.MulCommand(+num2)],\r\n    ['/', new _command__WEBPACK_IMPORTED_MODULE_0__.DivCommand(+num2)],\r\n    ['%', new _command__WEBPACK_IMPORTED_MODULE_0__.PrcCommand(+num2)],\r\n    ['x2', new _command__WEBPACK_IMPORTED_MODULE_0__.SsqCommand(+num2)],\r\n    ['2x', new _command__WEBPACK_IMPORTED_MODULE_0__.SrtCommand(+num2)],\r\n    ['x3', new _command__WEBPACK_IMPORTED_MODULE_0__.TsqCommand(+num2)],\r\n    ['3x', new _command__WEBPACK_IMPORTED_MODULE_0__.TrtCommand(+num2)],\r\n    ['^', new _command__WEBPACK_IMPORTED_MODULE_0__.YsqCommand(+num2)],\r\n    ['^(1/', new _command__WEBPACK_IMPORTED_MODULE_0__.YrtCommand(+num2)],\r\n    ['exp', new _command__WEBPACK_IMPORTED_MODULE_0__.ExpCommand(+num2)],\r\n    ['log', new _command__WEBPACK_IMPORTED_MODULE_0__.LogCommand(+num2)],\r\n    ['10x', new _command__WEBPACK_IMPORTED_MODULE_0__.XsqCommand(+num2)],\r\n    ['1/x', new _command__WEBPACK_IMPORTED_MODULE_0__.OdivCommand(+num2)]\r\n  ]);\r\n\r\n  // console.log('зашли в калькулятор бля');\r\n  // console.log(`num1:${num1} num2:${num2} opearator:${oper}`);\r\n\r\n  const calculator = new _receiver__WEBPACK_IMPORTED_MODULE_1__.Calculator();\r\n  calculator.setValue(+num1, oper);\r\n\r\n  if (command.has(oper)) {\r\n\r\n    calculator.execute(command.get(oper));\r\n\r\n  } else if (oper === 'AC') {\r\n\r\n    calculator.setValue(0, oper);\r\n\r\n  } else if (oper === 'undo') {\r\n\r\n    calculator.undo();\r\n\r\n  }\r\n\r\n  // const value = `${calculator.getCurrentValue().toFixed(3)}`.replace(/0*$/, '');\r\n  const value = Number((calculator.getCurrentValue()).toFixed(15));\r\n  result.value = value;\r\n  return value;\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://calculator/./assets/js/calculation.js?");

/***/ }),

/***/ "./assets/js/command.js":
/*!******************************!*\
  !*** ./assets/js/command.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddCommand\": () => (/* binding */ AddCommand),\n/* harmony export */   \"SubCommand\": () => (/* binding */ SubCommand),\n/* harmony export */   \"MulCommand\": () => (/* binding */ MulCommand),\n/* harmony export */   \"DivCommand\": () => (/* binding */ DivCommand),\n/* harmony export */   \"PrcCommand\": () => (/* binding */ PrcCommand),\n/* harmony export */   \"SsqCommand\": () => (/* binding */ SsqCommand),\n/* harmony export */   \"SrtCommand\": () => (/* binding */ SrtCommand),\n/* harmony export */   \"TsqCommand\": () => (/* binding */ TsqCommand),\n/* harmony export */   \"TrtCommand\": () => (/* binding */ TrtCommand),\n/* harmony export */   \"YsqCommand\": () => (/* binding */ YsqCommand),\n/* harmony export */   \"YrtCommand\": () => (/* binding */ YrtCommand),\n/* harmony export */   \"ExpCommand\": () => (/* binding */ ExpCommand),\n/* harmony export */   \"LogCommand\": () => (/* binding */ LogCommand),\n/* harmony export */   \"XsqCommand\": () => (/* binding */ XsqCommand),\n/* harmony export */   \"OdivCommand\": () => (/* binding */ OdivCommand)\n/* harmony export */ });\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ \"./assets/js/interface.js\");\n\r\n\r\nconst add = (x, y) => x + y;\r\nconst sub = (x, y) => x - y;\r\nconst mul = (x, y) => x * y;\r\nconst div = (x, y) => x / y;\r\nconst prc = (x) => x / 100;\r\nconst reprc = (x) => x * 100;\r\nconst ssq = (x) => x ** 2;\r\nconst srt = (x) => x ** (1 / 2);\r\nconst tsq = (x) => x ** 3;\r\nconst trt = (x) => x ** (1 / 3);\r\nconst ysq = (x, y) => x ** y;\r\nconst yrt = (x, y) => x ** (1 / y);\r\nconst exp = (x) => Math.E ** x;\r\nconst reexp = (x) => Math.E ** (1 / x);\r\nconst log = (x) => Math.exp(x) / Math.exp(10);\r\nconst xsq = (x) => 10 ** (x);\r\nconst rexsq = (x) => 1000 ** (1 / x);\r\nconst odiv = (x) => 1 / x;\r\nconst reodiv = (x) => x ** (-1);\r\n\r\nconst AddCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(add, sub, value); // сложение\r\n\r\n};\r\n\r\nconst SubCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(sub, add, value); // вычетание\r\n\r\n};\r\n\r\nconst MulCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(mul, div, value); // умножение\r\n\r\n};\r\n\r\nconst DivCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(div, mul, value); // деление\r\n\r\n};\r\n\r\nconst PrcCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(prc, reprc, value); // процент\r\n\r\n};\r\n\r\nconst SsqCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(ssq, srt, value); // возведение в квадрат\r\n\r\n};\r\n\r\nconst SrtCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(srt, ssq, value); // корень из квадрата\r\n\r\n};\r\n\r\nconst TsqCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(tsq, trt, value); // возведение в третью степень\r\n\r\n};\r\n\r\nconst TrtCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(trt, tsq, value); // корень из третьей степени\r\n\r\n};\r\n\r\nconst YsqCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(ysq, yrt, value); // возведение в y степень\r\n\r\n};\r\n\r\nconst YrtCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(yrt, ysq, value); // корень из y степени\r\n\r\n};\r\n\r\nconst ExpCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(exp, reexp, value); // экпонента от х\r\n\r\n};\r\n\r\nconst LogCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(log, xsq, value); // экпонента от х\r\n\r\n};\r\n\r\nconst XsqCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(xsq, log, value);\r\n\r\n};\r\n\r\nconst OdivCommand = function (value) {\r\n\r\n  return new _interface__WEBPACK_IMPORTED_MODULE_0__.Command(odiv, reodiv, value);\r\n\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://calculator/./assets/js/command.js?");

/***/ }),

/***/ "./assets/js/interface.js":
/*!********************************!*\
  !*** ./assets/js/interface.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Command\": () => (/* binding */ Command)\n/* harmony export */ });\nconst Command = function (execute, undo, value) {\r\n\r\n  this.execute = execute;\r\n  this.undo = undo;\r\n  this.value = value;\r\n\r\n};\r\n\n\n//# sourceURL=webpack://calculator/./assets/js/interface.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculation */ \"./assets/js/calculation.js\");\n\r\n\r\nconst operatr = document.querySelectorAll('.operation');\r\nconst numer = document.querySelectorAll('.num');\r\nconst result = document.querySelector('.calc__result');\r\nconst equals = document.querySelector('.calc__butt-equels');\r\nconst clear = document.querySelector('.clear');\r\nconst undo = document.querySelector('.undo');\r\n\r\nlet operator = '';\r\nlet number1 = '';\r\nlet number2 = '';\r\n\r\n\r\nfunction showResult() {\r\n\r\n  number1 = (0,_calculation__WEBPACK_IMPORTED_MODULE_0__.calculation)(number1, number2, operator);\r\n  number2 = '';\r\n  result.value = number1;\r\n\r\n}\r\n\r\nfunction hasPoint(parameter) {\r\n\r\n  number1 += '';\r\n  if (parameter === '.' && operator === '') {\r\n\r\n    if (number1.indexOf('.') === -1) {\r\n\r\n      number1 += '.';\r\n      result.value += '.';\r\n\r\n    }\r\n\r\n  } else if (parameter === '.' && operator !== '') {\r\n\r\n    if (number2.indexOf('.') === -1) {\r\n\r\n      number2 += '.';\r\n      result.value += '.';\r\n\r\n    }\r\n\r\n  }\r\n\r\n}\r\n\r\nfunction clickNumber(event) {\r\n\r\n  const button = event.target;\r\n  const parameter = button.dataset.value;\r\n  const isNumber = (typeof Number(parameter) === 'number');\r\n  const isNan = Number.isNaN(parseInt(parameter, 10));\r\n  const zero = '0';\r\n\r\n  hasPoint(parameter);\r\n\r\n  if (isNumber && !isNan && operator === '') {\r\n\r\n    // console.log('клик по первому числу');\r\n    if (result.value === zero) {\r\n\r\n      result.value = '';\r\n\r\n    }\r\n    number1 += parameter;\r\n    result.value += parameter;\r\n\r\n  } else if (isNumber && !isNan && operator !== '') {\r\n\r\n    // console.log('клик по второму числу');\r\n    number2 += parameter;\r\n    result.value += parameter;\r\n\r\n  }\r\n\r\n}\r\n\r\nfunction clickOperator(event) {\r\n\r\n  const button = event.target;\r\n  const parameter = button.dataset.value;\r\n  if (operator !== '' && number2 !== '') {\r\n\r\n    // console.log('нажали на второй оператор');\r\n    showResult();\r\n\r\n  }\r\n  // console.log('нажали оператор');\r\n  operator = parameter;\r\n  result.value += parameter;\r\n  const operators = ['%', '2x', 'x2', '3x', 'x3', 'exp', 'log', '10x', '1/x'];\r\n  if (operators.includes(operator)) {\r\n\r\n    showResult();\r\n\r\n  }\r\n\r\n}\r\n\r\nfunction clickEquels() {\r\n\r\n  if (number2 !== '') {\r\n\r\n    // console.log('нажали на равно');\r\n    showResult();\r\n\r\n  }\r\n  operator = '';\r\n\r\n}\r\n\r\nfunction clickClear() {\r\n\r\n  operator = 'AC';\r\n  showResult();\r\n  operator = '';\r\n\r\n}\r\n\r\nfunction cancel() {\r\n\r\n  operator = 'undo';\r\n  showResult();\r\n  operator = '';\r\n\r\n}\r\n\r\noperatr.forEach((but) => {\r\n\r\n  but.addEventListener('mousedown', clickOperator);\r\n\r\n});\r\n\r\nnumer.forEach((but) => {\r\n\r\n  but.addEventListener('mousedown', clickNumber);\r\n\r\n});\r\n\r\nequals.addEventListener('mousedown', clickEquels);\r\nclear.addEventListener('mousedown', clickClear);\r\nundo.addEventListener('mousedown', cancel);\r\n\n\n//# sourceURL=webpack://calculator/./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/receiver.js":
/*!*******************************!*\
  !*** ./assets/js/receiver.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calculator\": () => (/* binding */ Calculator)\n/* harmony export */ });\n\r\nconst commands = [];\r\nconst Calculator = function () {\r\n\r\n  let current = 0;\r\n  let i = 0;\r\n\r\n  return {\r\n    execute(command) {\r\n\r\n      console.log(`добавлен ${++i} в стек ${current} :  ${command.value}`);\r\n      current = command.execute(current, command.value);\r\n      commands.push(command);\r\n      console.log(commands);\r\n\r\n    },\r\n    undo() {\r\n\r\n      if (commands.length > 0) {\r\n\r\n        const command = commands.pop();\r\n        console.log(`удален  ${--i} из стек текущий ${current} : команд вэлю ${command.value}`);\r\n        current = command.undo(current, command.value);\r\n\r\n      }\r\n\r\n    },\r\n    setValue(value, oper) {\r\n\r\n      current = value;\r\n      if (oper === 'AC') {\r\n\r\n        commands.length = 0;\r\n\r\n      }\r\n\r\n    },\r\n\r\n    getCurrentValue() {\r\n\r\n      return current;\r\n\r\n    }\r\n  };\r\n\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://calculator/./assets/js/receiver.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/main.js");
/******/ 	
/******/ })()
;
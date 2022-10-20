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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n\nvar data = [{\n  min: 0,\n  max: 18.4,\n  classification: \"Menor que 18,5\",\n  info: \"Magreza\",\n  obesity: \"0\"\n}, {\n  min: 18.5,\n  max: 24.9,\n  classification: \"Entre 18,5 e 24,9\",\n  info: \"Normal\",\n  obesity: \"0\"\n}, {\n  min: 25,\n  max: 29.9,\n  classification: \"Entre 25,0 e 29,9\",\n  info: \"Sobrepeso\",\n  obesity: \"I\"\n}, {\n  min: 30,\n  max: 39.9,\n  classification: \"Entre 30,0 e 39,9\",\n  info: \"Obesidade\",\n  obesity: \"II\"\n}, {\n  min: 40,\n  max: 99,\n  classification: \"Maior que 40,0\",\n  info: \"Obesidade grave\",\n  obesity: \"III\"\n}];\nvar imcResult = document.getElementById(\"container-result\");\nvar imcCalc = document.getElementById(\"container-calc\");\nvar imcDivHide = document.getElementById(\"result-classification\");\nvar heightInput = document.getElementById(\"height\");\nvar weightInput = document.getElementById(\"weight\");\nvar calcBtn = document.getElementById(\"calc\");\nvar clearBtn = document.getElementById(\"clear\");\nvar numberImc = document.querySelector(\"#number-imc span\");\nvar infoImc = document.querySelector(\"#info-imc span\");\nvar backBtn = document.getElementById(\"back\");\nfunction classificationData(data) {\n  data.forEach(function (item) {\n    var div = document.createElement(\"div\");\n    div.classList.add(\"table-data\");\n    var classification = document.createElement(\"p\");\n    classification.innerText = item.classification;\n    var info = document.createElement(\"p\");\n    info.innerText = item.info;\n    var obesity = document.createElement(\"p\");\n    obesity.innerText = item.obesity;\n    div.appendChild(classification);\n    div.appendChild(obesity);\n    div.appendChild(info);\n    imcDivHide.appendChild(div);\n  });\n}\nfunction clearInputs() {\n  heightInput.value = \"\";\n  weightInput.value = \"\";\n  numberImc.className = \"\";\n  infoImc.className = \"\";\n}\nfunction validDigits(text) {\n  return text.replace(/[^0-9,]/g, \"\");\n}\nfunction calcImc(weightInput, heightInput) {\n  var imc = weightInput / (heightInput * heightInput);\n  return imc.toFixed(1);\n}\nfunction showResults() {\n  imcCalc.classList.toggle(\"hide\");\n  imcResult.classList.toggle(\"hide\");\n}\nclassificationData(data);\n[heightInput, weightInput].forEach(function (el) {\n  el.addEventListener(\"input\", function (e) {\n    var updateValue = validDigits(e.target.value);\n    e.target.value = updateValue;\n  });\n});\nclearBtn.addEventListener(\"click\", clearInputs);\ncalcBtn.addEventListener(\"click\", function (el) {\n  el.preventDefault();\n  var weight = +weightInput.value.replace(\",\", \".\");\n  var height = +heightInput.value.replace(\",\", \".\");\n  if (!weightInput || !heightInput) return;\n  var imc = calcImc(weight, height);\n  var info;\n  data.forEach(function (item) {\n    if (imc > item.min && imc < item.max) {\n      info = item.info;\n    }\n  });\n  if (!info) return;\n  numberImc.innerText = imc;\n  infoImc.innerText = info;\n  switch (info) {\n    case \"Magreza\":\n      numberImc.classList.add(\"low\");\n      infoImc.classList.add(\"low\");\n      break;\n    case \"Normal\":\n      numberImc.classList.add(\"good\");\n      infoImc.classList.add(\"good\");\n      break;\n    case \"Sobrepeso\":\n      numberImc.classList.add(\"low\");\n      infoImc.classList.add(\"low\");\n      break;\n    case \"Obesidade\":\n      numberImc.classList.add(\"medium\");\n      infoImc.classList.add(\"medium\");\n      break;\n    case \"Obesidade grave\":\n      numberImc.classList.add(\"high\");\n      infoImc.classList.add(\"high\");\n      break;\n  }\n  showResults();\n});\nbackBtn.addEventListener(\"click\", function () {\n  clearInputs();\n  showResults();\n});\n\n//# sourceURL=webpack://imc/./src/index.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://imc/./src/styles/index.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
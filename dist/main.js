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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst { calculateIncome } = __webpack_require__(/*! ./util */ \"./src/util.js\");\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst initApp = () => {\r\n  // Initializes the app, registers the button click listener\r\n  console.log(\"app init\");\r\n  const newUserButton = document.querySelector('#calculateTax');\r\n  newUserButton.addEventListener('click', calculateIncome);\r\n  return 0;\r\n};\r\n\r\n\r\n\r\n// Start the app!\r\ninitApp();\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { validateInput } = __webpack_require__(/*! ./validations */ \"./src/validations.js\");\r\n\r\n\r\nexports.constants = {\r\n  lowThreshold: 18200,\r\n  firstTier: 37000,\r\n  firstTierBase: 3572,\r\n  secondTier: 80000,\r\n  secondTierBase: 17547,\r\n  thirdTier: 180000,\r\n  thirdTierBase: 54547,\r\n};\r\n\r\n\r\n\r\nexports.actualIncome = (income, age, medicareLevy, TBRLevy, LILevy) => {\r\n  result = income - this.returnTax(income, age, medicareLevy, TBRLevy, LILevy);\r\n  return result;\r\n};\r\n\r\n\r\nexports.returnTax = (income, age, medicareLevy, TBRLevy, LILevy) => {\r\n  const stage1 = 0.19;\r\n  const stage2 = 0.325;\r\n  const stage3 = 0.37;\r\n  const stage4 = 0.45;\r\n  const medicareLevyCharge = 0.02;\r\n  const TBRLevyCharge = 0.02;\r\n  if (income <= this.constants.lowThreshold) {\r\n    return 0.0;\r\n  } else if (income <= this.constants.firstTier) {\r\n    if (LILevy) {\r\n      if (income > 20543) {\r\n        return this.medicareTax(medicareLevy, income, 20543, stage1, medicareLevyCharge);\r\n      } else {\r\n        return 0;\r\n      }\r\n    } else {\r\n      return this.medicareTax(medicareLevy, income, this.constants.lowThreshold, stage1, medicareLevyCharge);\r\n    }\r\n  } else if (income <= this.constants.secondTier) {\r\n    return this.constants.firstTierBase + this.medicareTax(medicareLevy, income, this.constants.firstTier, stage2, medicareLevyCharge);\r\n  } else if (income <= this.constants.thirdTier) {\r\n    return this.constants.secondTierBase + this.medicareTax(medicareLevy, income, this.constants.secondTier, stage3, medicareLevyCharge);\r\n  } else {\r\n    if (TBRLevy) {\r\n      return this.constants.thirdTierBase + this.medicareTax(medicareLevy, income, this.constants.thirdTier, stage4, medicareLevyCharge) +\r\n        (income - this.constants.thirdTierBase) * TBRLevyCharge;\r\n    }\r\n    return this.constants.thirdTierBase + this.medicareTax(medicareLevy, income, this.constants.thirdTier, stage4, medicareLevyCharge);\r\n\r\n  }\r\n};\r\n\r\n\r\nexports.medicareTax = (levy, income, threshold, taxRate, additionalTax) => {\r\n  if (levy) {\r\n    return (income - threshold) * taxRate + income * additionalTax;\r\n  } else {\r\n    return (income - threshold) * taxRate;\r\n  }\r\n};\r\n\r\n\r\nexports.createParagraph = (text, id) => {\r\n\r\n  const data = document.createTextNode(text);\r\n  const p = document.createElement(\"p\");\r\n  p.appendChild(data);\r\n  p.id = id;\r\n  return p;\r\n\r\n};\r\n\r\nexports.conversion = (bool) => {\r\n  if (bool) {\r\n    return \"Yes\";\r\n  }\r\n  return \"No\";\r\n};\r\n\r\n\r\nexports.calculateIncome = () => {\r\n\r\n  event.preventDefault();\r\n\r\n  console.log(\"before validate\");\r\n\r\n\r\n  const name = document.querySelector('input#name').value;\r\n  const age = document.querySelector('input#age').value;\r\n  const income = document.querySelector('input#income').value;\r\n  const ml = document.querySelector('input#medicareLevy').checked;\r\n  const tl = document.querySelector('input#TBRLevy').checked;\r\n  const ll = document.querySelector('input#LILevy').checked;\r\n  const id = Date.now();\r\n\r\n  if (validateInput(name, age, income)) {\r\n\r\n    const div = document.createElement(\"div\");\r\n    div.setAttribute(\"class\", \"col-sm-12 mb-2\");\r\n    div.setAttribute(\"id\", id);\r\n    const card = document.createElement(\"div\");\r\n    card.setAttribute(\"class\", \"card\");\r\n    const cardBody = document.createElement(\"div\");\r\n    cardBody.setAttribute(\"class\", \"card-body\");\r\n\r\n\r\n\r\n    const h5 = document.createElement(\"h5\");\r\n    h5.setAttribute(\"class\", \"card-title\");\r\n    var text = document.createTextNode(`Tax Calculation for ${name} ( Age : ${age} )`);\r\n    h5.appendChild(text);\r\n\r\n    const row = document.createElement(\"div\");\r\n    row.setAttribute(\"class\", \"row mb-3\");\r\n\r\n    const col1 = document.createElement(\"div\");\r\n    col1.setAttribute(\"class\", \"col-6\");\r\n\r\n    const col2 = document.createElement(\"div\");\r\n    col2.setAttribute(\"class\", \"col-6\");\r\n\r\n    col1.appendChild(this.createParagraph(`Income : ${income}`, 'income-p'));\r\n    col1.appendChild(this.createParagraph(`Tax payable : ${this.returnTax(income, age, ml, tl, ll)}`, 'tax'));\r\n    col1.appendChild(this.createParagraph(`Income after Tax : ${this.actualIncome(income, age, ml, tl, ll)}`, 'income-after-tax'));\r\n    col2.appendChild(this.createParagraph(`Medicare Levy : ${this.conversion(ml)}`, 'ml'));\r\n    col2.appendChild(this.createParagraph(`TBR Levy : ${this.conversion(tl)}`, 'tl'));\r\n    col2.appendChild(this.createParagraph(`LILevy : ${this.conversion(ll)}`, 'll'));\r\n\r\n\r\n\r\n    row.appendChild(col1);\r\n    row.appendChild(col2);\r\n    cardBody.appendChild(h5);\r\n    cardBody.appendChild(row);\r\n    card.appendChild(cardBody);\r\n    div.appendChild(card);\r\n\r\n    document.getElementById(\"calculated\").insertBefore(div, document.getElementById(\"calculated\").firstChild);\r\n  } else {\r\n    alert(\"please fill all the inputs properly\");\r\n  }\r\n\r\n};\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "./src/validations.js":
/*!****************************!*\
  !*** ./src/validations.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nexports.validateInput = (name, age, income) => {\r\n    if (this.validateName(name) && this.validateAge(age) && this.validateIncome(income)) {\r\n        return true;\r\n    }\r\n    return false;\r\n};\r\n\r\nexports.validateName = (name) => {\r\n    if (name) {\r\n        return true;\r\n    }\r\n    else {\r\n        return false;\r\n    }\r\n};\r\n\r\nexports.validateAge = (age) => {\r\n    if (age) {\r\n        return true;\r\n    }\r\n    else {\r\n        return false;\r\n    }\r\n};\r\n\r\nexports.validateIncome = (income) => {\r\n    if (income) {\r\n        return true;\r\n    }\r\n    else {\r\n        return false;\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/validations.js?");

/***/ })

/******/ });
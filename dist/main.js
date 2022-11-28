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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n;\nvar Worker = /** @class */ (function () {\n    function Worker() {\n        this.address = {\n            street: \"some street\",\n            streetNumber: \"23\",\n            city: \"Zürich\",\n            country: \"CH\"\n        };\n        this.profile = {\n            firstName: \"Cemil\",\n            lastName: \"Dogan\",\n            birthDay: new Date(),\n            gender: \"male\"\n        };\n    }\n    return Worker;\n}());\nvar person = new Worker();\nconsole.log(\"hello world\", person.profile, person.address);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
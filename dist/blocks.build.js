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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flow_columns_flow_columns_js__ = __webpack_require__(/*! ./flow-columns/flow-columns.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fancy_list_fancy_list_js__ = __webpack_require__(/*! ./fancy-list/fancy-list.js */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fancy_list_fancy_list_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fancy_list_fancy_list_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9mbG93LWNvbHVtbnMvZmxvdy1jb2x1bW5zLmpzJztcbmltcG9ydCAnLi9mYW5jeS1saXN0L2ZhbmN5LWxpc3QuanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ./src/flow-columns/flow-columns.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__);\n\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nregisterBlockType('forte-press/flow-columns', {\n\ttitle: __(\"Flow Columns  - Forte Press\"),\n\ticon: 'columns',\n\tcategory: 'common',\n\tkeywords: [__('newspaper-block'), __('Newspaper Block')],\n\tsupports: {\n\t\talign: ['wide', 'full', 'center']\n\t},\n\tattributes: {\n\t\talign: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'wide'\n\t\t},\n\t\tcolumns: {\n\t\t\ttype: 'int',\n\t\t\tdefault: 3\n\t\t},\n\t\tminWidth: {\n\t\t\ttype: 'int',\n\t\t\tdefault: 200\n\t\t}\n\n\t},\n\n\t/**\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\tedit: function edit(props) {\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InspectorControls\"],\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_3__wordpress_components__[\"PanelBody\"],\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__[\"RangeControl\"], {\n\t\t\t\t\t\tlabel: __('Columns'),\n\t\t\t\t\t\tvalue: attributes.columns\n\t\t\t\t\t\t// onChange={ ( value ) => updateColumns( count, value ) }\n\t\t\t\t\t\t, onChange: function onChange(value) {\n\t\t\t\t\t\t\treturn setAttributes({ columns: value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tmin: 2,\n\t\t\t\t\t\tmax: 6\n\t\t\t\t\t}),\n\t\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__[\"RangeControl\"], {\n\t\t\t\t\t\tlabel: __('Minimum Column Width'),\n\t\t\t\t\t\tvalue: attributes.minWidth,\n\t\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\t\treturn setAttributes({ minWidth: value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tmin: 100,\n\t\t\t\t\t\tmax: 600\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: props.className,\n\t\t\t\t\tstyle: {\n\t\t\t\t\t\tcolumns: attributes.minWidth + 'px ' + attributes.columns\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"], null)\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\tvar attributes = props.attributes;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className,\n\t\t\t\tstyle: {\n\t\t\t\t\tcolumns: attributes.minWidth + 'px ' + attributes.columns\n\t\t\t\t} },\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InnerBlocks\"].Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mbG93LWNvbHVtbnMvZmxvdy1jb2x1bW5zLmpzP2UxYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IElubmVyQmxvY2tzLCBJbnNwZWN0b3JDb250cm9scyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IFBhbmVsQm9keSwgUmFuZ2VDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2ZvcnRlLXByZXNzL2Zsb3ctY29sdW1ucycsIHtcblx0dGl0bGU6IF9fKFwiRmxvdyBDb2x1bW5zICAtIEZvcnRlIFByZXNzXCIpLFxuXHRpY29uOiAnY29sdW1ucycsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0a2V5d29yZHM6IFtfXygnbmV3c3BhcGVyLWJsb2NrJyksIF9fKCdOZXdzcGFwZXIgQmxvY2snKV0sXG5cdHN1cHBvcnRzOiB7XG5cdFx0YWxpZ246IFsnd2lkZScsICdmdWxsJywgJ2NlbnRlciddXG5cdH0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRhbGlnbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnd2lkZSdcblx0XHR9LFxuXHRcdGNvbHVtbnM6IHtcblx0XHRcdHR5cGU6ICdpbnQnLFxuXHRcdFx0ZGVmYXVsdDogM1xuXHRcdH0sXG5cdFx0bWluV2lkdGg6IHtcblx0XHRcdHR5cGU6ICdpbnQnLFxuXHRcdFx0ZGVmYXVsdDogMjAwXG5cdFx0fVxuXG5cdH0sXG5cblx0LyoqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgKi9cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSYW5nZUNvbnRyb2wsIHtcblx0XHRcdFx0XHRcdGxhYmVsOiBfXygnQ29sdW1ucycpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY29sdW1uc1xuXHRcdFx0XHRcdFx0Ly8gb25DaGFuZ2U9eyAoIHZhbHVlICkgPT4gdXBkYXRlQ29sdW1ucyggY291bnQsIHZhbHVlICkgfVxuXHRcdFx0XHRcdFx0LCBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBjb2x1bW5zOiB2YWx1ZSB9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRtaW46IDIsXG5cdFx0XHRcdFx0XHRtYXg6IDZcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmFuZ2VDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogX18oJ01pbmltdW0gQ29sdW1uIFdpZHRoJyksXG5cdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5taW5XaWR0aCxcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IG1pbldpZHRoOiB2YWx1ZSB9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRtaW46IDEwMCxcblx0XHRcdFx0XHRcdG1heDogNjAwXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsXG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbHVtbnM6IGF0dHJpYnV0ZXMubWluV2lkdGggKyAncHggJyArIGF0dHJpYnV0ZXMuY29sdW1uc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCBudWxsKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIEZyb250ZW5kIEhUTUwuXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXM7XG5cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsXG5cdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0Y29sdW1uczogYXR0cmlidXRlcy5taW5XaWR0aCArICdweCAnICsgYXR0cmlidXRlcy5jb2x1bW5zXG5cdFx0XHRcdH0gfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zsb3ctY29sdW1ucy9mbG93LWNvbHVtbnMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./src/flow-columns/editor.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mbG93LWNvbHVtbnMvZWRpdG9yLnNjc3M/YzE2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zsb3ctY29sdW1ucy9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*************************************!*\
  !*** ./src/flow-columns/style.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mbG93LWNvbHVtbnMvc3R5bGUuc2Nzcz81MmNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmxvdy1jb2x1bW5zL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: BlockControls, InnerBlocks, InspectorControls, RichText */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),
/* 5 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: PanelBody, RangeControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 6 */
/*!**************************************!*\
  !*** ./src/fancy-list/fancy-list.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(/*! ./edit */ 8);\n\n/**\n * WordPress dependencies\n */\n\n// import { list as icon } from '@wordpress/icons';\n\n/**\n * Internal dependencies\n */\n\n// import save from './save';\n// const { __ } = wp.i18n; \nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nregisterBlockType('forte-press/fancy-list', {\n\ttitle: Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__[\"__\"])(\"Fancy List  - Forte Press\"),\n\ticon: 'editor-ol',\n\tcategory: 'common',\n\tkeywords: [Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__[\"__\"])('numbered list'), Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_i18n__[\"__\"])('list')],\n\tattributes: {},\n\n\t/**\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Component.\n  */\n\t// edit: ( props ) => {\n\n\n\t// \treturn (\t\t\t\n\t// \t\t<div  className={ props.className } >\n\t// \t\t\t<h1>Hello List</h1>\n\n\t// \t\t</div>\n\t// \t);\n\t// },\n\tedit: __WEBPACK_IMPORTED_MODULE_3__edit__[\"a\" /* default */],\n\n\t/**\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\tvar attributes = props.attributes;\n\n\n\t\treturn wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"RichText\"].Content, { tagName: 'ol', value: attributes.content });\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mYW5jeS1saXN0L2ZhbmN5LWxpc3QuanM/OWJkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IF9fLCBfeCB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG4vLyBpbXBvcnQgeyBsaXN0IGFzIGljb24gfSBmcm9tICdAd29yZHByZXNzL2ljb25zJztcbmltcG9ydCB7IFJpY2hUZXh0LCBCbG9ja0NvbnRyb2xzLCBSaWNoVGV4dFNob3J0Y3V0LCB1c2VCbG9ja1Byb3BzIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9jay1lZGl0b3InO1xuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0Jztcbi8vIGltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG4vLyBjb25zdCB7IF9fIH0gPSB3cC5pMThuOyBcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnZm9ydGUtcHJlc3MvZmFuY3ktbGlzdCcsIHtcblx0dGl0bGU6IF9fKFwiRmFuY3kgTGlzdCAgLSBGb3J0ZSBQcmVzc1wiKSxcblx0aWNvbjogJ2VkaXRvci1vbCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0a2V5d29yZHM6IFtfXygnbnVtYmVyZWQgbGlzdCcpLCBfXygnbGlzdCcpXSxcblx0YXR0cmlidXRlczoge30sXG5cblx0LyoqXG4gICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzLlxuICAqIEByZXR1cm5zIHtNaXhlZH0gSlNYIENvbXBvbmVudC5cbiAgKi9cblx0Ly8gZWRpdDogKCBwcm9wcyApID0+IHtcblxuXG5cdC8vIFx0cmV0dXJuIChcdFx0XHRcblx0Ly8gXHRcdDxkaXYgIGNsYXNzTmFtZT17IHByb3BzLmNsYXNzTmFtZSB9ID5cblx0Ly8gXHRcdFx0PGgxPkhlbGxvIExpc3Q8L2gxPlxuXG5cdC8vIFx0XHQ8L2Rpdj5cblx0Ly8gXHQpO1xuXHQvLyB9LFxuXHRlZGl0OiBlZGl0LFxuXG5cdC8qKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHsgdGFnTmFtZTogJ29sJywgdmFsdWU6IGF0dHJpYnV0ZXMuY29udGVudCB9KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmFuY3ktbGlzdC9mYW5jeS1saXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: __ */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),
/* 8 */
/*!********************************!*\
  !*** ./src/fancy-list/edit.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = FancyListEdit;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_blocks__ = __webpack_require__(/*! @wordpress/blocks */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_blocks__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__);\n/**\n * WordPress dependencies\n */\n\n\n\n\n\nfunction FancyListEdit(props) {\n    var attributes = props.attributes,\n        setAttributes = props.setAttributes,\n        className = props.className;\n\n    return wp.element.createElement(\n        'div',\n        null,\n        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"BlockControls\"], null),\n        wp.element.createElement(\n            __WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"InspectorControls\"],\n            null,\n            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__[\"PanelBody\"], { title: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Style') })\n        ),\n        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_block_editor__[\"RichText\"], {\n            tagName: 'ol',\n            multiline: 'li',\n            className: className,\n            value: attributes.content,\n            onChange: function onChange(content) {\n                return setAttributes({ content: content });\n            },\n            placeholder: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Enter text...', 'custom-block'),\n            keepPlaceholderOnFocus: true\n        })\n    );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mYW5jeS1saXN0L2VkaXQuanM/MjdmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgX18sIF94LCBpc1JUTCB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBjcmVhdGVCbG9jayB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcbmltcG9ydCB7IFJpY2hUZXh0LCBCbG9ja0NvbnRyb2xzLCBJbnNwZWN0b3JDb250cm9scywgUmljaFRleHRTaG9ydGN1dCwgdXNlQmxvY2tQcm9wcyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IFBhbmVsQm9keSwgUGFuZWxDb2xvclNldHRpbmdzLCBQYW5lbFJvdywgRnJhZ21lbnQsIFJhbmdlQ29udHJvbCB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhbmN5TGlzdEVkaXQocHJvcHMpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEJsb2NrQ29udHJvbHMsIG51bGwpLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGFuZWxCb2R5LCB7IHRpdGxlOiBfXygnU3R5bGUnKSB9KVxuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICAgICAgICAgIHRhZ05hbWU6ICdvbCcsXG4gICAgICAgICAgICBtdWx0aWxpbmU6ICdsaScsXG4gICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmNvbnRlbnQsXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogY29udGVudCB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogX18oJ0VudGVyIHRleHQuLi4nLCAnY3VzdG9tLWJsb2NrJyksXG4gICAgICAgICAgICBrZWVwUGxhY2Vob2xkZXJPbkZvY3VzOiB0cnVlXG4gICAgICAgIH0pXG4gICAgKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mYW5jeS1saXN0L2VkaXQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ }),
/* 10 */
/*!************************************!*\
  !*** ./src/fancy-list/editor.scss ***!
  \************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFuY3ktbGlzdC9lZGl0b3Iuc2Nzcz8yNjUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmFuY3ktbGlzdC9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ })
/******/ ]);
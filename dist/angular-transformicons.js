(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AngularTransformicons"] = factory();
	else
		root["AngularTransformicons"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(1);
	
	var transformicons = ['addrm-plus-check', 'addrm-plus-circle', 'addrm-plus-minusfold', 'addrm-plus-minusrotate', 'addrm-remove-check', 'addrm-remove-chevron-down', 'addrm-remove-chevron-left', 'addrm-remove-chevron-right', 'addrm-remove-chevron-up', 'grid-collapse', 'grid-rearrange', 'indicator-svgchevron', 'loader-circlearrow', 'loader-spinner360', 'mail-envelope', 'menu-arrow360', 'menu-arrowleft', 'menu-arrowup', 'menu-minus', 'menu-xbutterfly', 'menu-xcross', 'search-xcross', 'vid-play'];
	
	// http://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
	function camelize(str) {
	  return str.replace(/(_|-)/g, ' ').replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
	    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
	  }).replace(/\s+/g, '');
	}
	
	transformicons = transformicons.map(function (template) {
	  return {
	    name: camelize(template),
	    template: __webpack_require__(5)("./" + template + '.hbs')
	  };
	});
	
	var TRANSFORM_CLASS = 'tcon-transform';
	
	angular.module('hj.transformicons', []);
	
	transformicons.forEach(function (transformicon) {
	  angular.module('hj.transformicons').directive(transformicon.name, function () {
	    return {
	      restrict: 'EA',
	      replace: true,
	      template: transformicon.template,
	      scope: {
	        bindTransfrom: '=',
	        bindEvents: '='
	      },
	      link: function link($scope, $element) {
	
	        $scope.$watch('bindTransfrom', function (transform) {
	          if (transform === true) {
	            $element.addClass(TRANSFORM_CLASS);
	          } else {
	            $element.removeClass(TRANSFORM_CLASS);
	          }
	        });
	
	        if ($scope.bindEvents) {
	
	          $element.on('click', function () {
	            if ($element.hasClass(TRANSFORM_CLASS)) {
	              $element.removeClass(TRANSFORM_CLASS);
	            } else {
	              $element.addClass(TRANSFORM_CLASS);
	            }
	          });
	        }
	      }
	    };
	  });
	});
	
	exports.default = 'hj.transformicons';

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 versions\", \"ios >= 6\", \"safari >= 5\", \"ie >= 9\"]}!./../node_modules/sass-loader/index.js?sourceMap!./transformicons.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 versions\", \"ios >= 6\", \"safari >= 5\", \"ie >= 9\"]}!./../node_modules/sass-loader/index.js?sourceMap!./transformicons.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "button {\n  color: currentColor; }\n\n@-webkit-keyframes chevron-pulse {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 1; }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@keyframes chevron-pulse {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 1; }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n.tcon {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: none;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 40px;\n  background: transparent;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: transparent; }\n  .tcon > * {\n    display: block; }\n  .tcon:hover, .tcon:focus {\n    outline: none; }\n  .tcon::-moz-focus-inner {\n    border: 0; }\n\n.tcon-menu__lines {\n  display: inline-block;\n  height: 5.71429px;\n  width: 40px;\n  border-radius: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background: currentColor;\n  position: relative; }\n  .tcon-menu__lines::before, .tcon-menu__lines::after {\n    display: inline-block;\n    height: 5.71429px;\n    width: 40px;\n    border-radius: 0;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    background: currentColor;\n    content: '';\n    position: absolute;\n    left: 0;\n    -webkit-transform-origin: 2.85714px center;\n        -ms-transform-origin: 2.85714px center;\n            transform-origin: 2.85714px center;\n    width: 100%; }\n  .tcon-menu__lines::before {\n    top: 10px; }\n  .tcon-menu__lines::after {\n    top: -10px; }\n  .tcon-transform .tcon-menu__lines {\n    -webkit-transform: scale3d(0.8, 0.8, 0.8);\n            transform: scale3d(0.8, 0.8, 0.8); }\n\n.tcon-menu--arrow, .tcon-menu--arrowleft {\n  width: auto; }\n  .tcon-menu--arrow.tcon-transform .tcon-menu__lines::before, .tcon-transform.tcon-menu--arrowleft .tcon-menu__lines::before, .tcon-menu--arrow.tcon-transform .tcon-menu__lines::after, .tcon-transform.tcon-menu--arrowleft .tcon-menu__lines::after {\n    top: 0;\n    width: 22.22222px; }\n  .tcon-menu--arrow.tcon-transform .tcon-menu__lines::before, .tcon-transform.tcon-menu--arrowleft .tcon-menu__lines::before {\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n            transform: rotate3d(0, 0, 1, 45deg); }\n  .tcon-menu--arrow.tcon-transform .tcon-menu__lines::after, .tcon-transform.tcon-menu--arrowleft .tcon-menu__lines::after {\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n            transform: rotate3d(0, 0, 1, -45deg); }\n\n.tcon-grid {\n  padding: 1rem; }\n  .tcon-grid .tcon-grid__item {\n    width: 0.5rem;\n    height: 0.5rem;\n    background: currentColor;\n    color: currentColor;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n\n.tcon-grid.tcon-transform .tcon-grid__item {\n  -webkit-transform: rotate3d(0, 0, 1, -45deg) scale3d(0.8, 0.8, 0.8);\n          transform: rotate3d(0, 0, 1, -45deg) scale3d(0.8, 0.8, 0.8); }\n\n.tcon-plus {\n  height: 40px;\n  position: relative;\n  -webkit-transform: scale(0.75);\n      -ms-transform: scale(0.75);\n          transform: scale(0.75);\n  width: 40px; }\n  .tcon-plus::before, .tcon-plus::after {\n    content: \"\";\n    border-radius: 2px;\n    display: block;\n    width: 85%;\n    height: 25%;\n    position: absolute;\n    top: 37%;\n    left: 8%;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    background: black; }\n  .tcon-plus:after {\n    -webkit-transform: rotate(90deg);\n        -ms-transform: rotate(90deg);\n            transform: rotate(90deg); }\n\n.tcon-remove {\n  height: 40px;\n  position: relative;\n  -webkit-transform: scale(0.75);\n      -ms-transform: scale(0.75);\n          transform: scale(0.75);\n  width: 40px; }\n  .tcon-remove::before, .tcon-remove::after {\n    content: \"\";\n    display: block;\n    height: 25%;\n    width: 85%;\n    position: absolute;\n    top: 37%;\n    left: 8%;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    background: currentColor; }\n  .tcon-remove::before {\n    -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n            transform: rotate(45deg); }\n  .tcon-remove::after {\n    -webkit-transform: rotate(-45deg);\n        -ms-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n\n.tcon-search__item {\n  display: inline-block;\n  height: 30px;\n  width: 30px;\n  border-radius: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background: transparent;\n  position: relative;\n  -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n  .tcon-search__item::before, .tcon-search__item::after {\n    display: inline-block;\n    height: 30px;\n    width: 30px;\n    border-radius: 0;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    background: transparent;\n    content: '';\n    position: absolute;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    margin: auto; }\n  .tcon-search__item::before {\n    height: 4px;\n    left: 0;\n    background: currentColor;\n    border-radius: 2.85714px; }\n  .tcon-search__item::after {\n    right: 0;\n    background: currentColor;\n    border-radius: 50%;\n    width: 12.00012px;\n    height: 12.00012px;\n    border: 2px solid black;\n    -webkit-transform-origin: 50% 50%;\n        -ms-transform-origin: 50% 50%;\n            transform-origin: 50% 50%; }\n\n.tcon-svgchevron {\n  height: 40px;\n  width: 40px; }\n\n.tcon-svgchevron path {\n  -webkit-animation: chevron-pulse 3s infinite cubic-bezier(0.4, 0, 0.2, 1);\n          animation: chevron-pulse 3s infinite cubic-bezier(0.4, 0, 0.2, 1);\n  fill: transparent;\n  stroke: currentColor;\n  stroke-width: 1px; }\n\n.tcon-svgchevron path.a1 {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s; }\n\n.tcon-svgchevron path.a2 {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n\n.tcon-svgchevron path.a3 {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n\n.tcon-menu--xbutterfly {\n  width: auto; }\n  .tcon-menu--xbutterfly .tcon-menu__lines::before, .tcon-menu--xbutterfly .tcon-menu__lines::after {\n    -webkit-transform-origin: 50% 50%;\n        -ms-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transition: top .3s .6s ease, -webkit-transform .3s ease;\n    transition: top .3s .6s ease, -webkit-transform .3s ease;\n    transition: top .3s .6s ease, transform .3s ease;\n    transition: top .3s .6s ease, transform .3s ease, -webkit-transform .3s ease; }\n  .tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines {\n    background: transparent; }\n    .tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::before, .tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::after {\n      top: 0;\n      -webkit-transition: top .3s ease, -webkit-transform .3s .5s ease;\n      transition: top .3s ease, -webkit-transform .3s .5s ease;\n      transition: top .3s ease, transform .3s .5s ease;\n      transition: top .3s ease, transform .3s .5s ease, -webkit-transform .3s .5s ease;\n      width: 40px; }\n    .tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::before {\n      -webkit-transform: rotate3d(0, 0, 1, 45deg);\n              transform: rotate3d(0, 0, 1, 45deg); }\n    .tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::after {\n      -webkit-transform: rotate3d(0, 0, 1, -45deg);\n              transform: rotate3d(0, 0, 1, -45deg); }\n\n.tcon-menu--xcross {\n  width: auto; }\n  .tcon-menu--xcross.tcon-transform .tcon-menu__lines {\n    background: transparent; }\n    .tcon-menu--xcross.tcon-transform .tcon-menu__lines::before, .tcon-menu--xcross.tcon-transform .tcon-menu__lines::after {\n      -webkit-transform-origin: 50% 50%;\n          -ms-transform-origin: 50% 50%;\n              transform-origin: 50% 50%;\n      top: 0;\n      width: 40px; }\n    .tcon-menu--xcross.tcon-transform .tcon-menu__lines::before {\n      -webkit-transform: rotate3d(0, 0, 1, 45deg);\n              transform: rotate3d(0, 0, 1, 45deg); }\n    .tcon-menu--xcross.tcon-transform .tcon-menu__lines::after {\n      -webkit-transform: rotate3d(0, 0, 1, -45deg);\n              transform: rotate3d(0, 0, 1, -45deg); }\n\n.tcon-menu--minus {\n  width: auto; }\n  .tcon-menu--minus.tcon-transform .tcon-menu__lines::before, .tcon-menu--minus.tcon-transform .tcon-menu__lines::after {\n    -webkit-transform: none;\n        -ms-transform: none;\n            transform: none;\n    top: 0;\n    width: 40px; }\n\n.tcon-menu--arrow360left.tcon-transform {\n  -webkit-transform: scale3d(0.8, 0.8, 0.8) rotate3d(0, 0, 1, 360deg);\n          transform: scale3d(0.8, 0.8, 0.8) rotate3d(0, 0, 1, 360deg); }\n\n.tcon-menu--arrowup {\n  width: auto; }\n  .tcon-menu--arrowup.tcon-transform {\n    -webkit-transform: scale3d(0.8, 0.8, 0.8) rotate3d(0, 0, 1, 90deg);\n            transform: scale3d(0.8, 0.8, 0.8) rotate3d(0, 0, 1, 90deg); }\n\n.tcon-grid--collapse .tcon-grid__item {\n  -webkit-box-shadow: -0.625rem 0, -0.625rem 0.625rem, 0.625rem 0, 0.625rem -0.625rem, 0 -0.625rem, -0.625rem -0.625rem, 0 0.625rem, 0.625rem 0.625rem;\n          box-shadow: -0.625rem 0, -0.625rem 0.625rem, 0.625rem 0, 0.625rem -0.625rem, 0 -0.625rem, -0.625rem -0.625rem, 0 0.625rem, 0.625rem 0.625rem; }\n\n.tcon-grid--collapse.tcon-transform .tcon-grid__item {\n  -webkit-box-shadow: -0.5rem 0, 0 0 transparent, 0.5rem 0, 0 0 transparent, 0 -0.5rem, 0 0 transparent, 0 0.5rem, 0 0 transparent;\n          box-shadow: -0.5rem 0, 0 0 transparent, 0.5rem 0, 0 0 transparent, 0 -0.5rem, 0 0 transparent, 0 0.5rem, 0 0 transparent; }\n\n.tcon-grid--rearrange .tcon-grid__item {\n  -webkit-box-shadow: -0.625rem -0.625rem, 0 -0.625rem, 0.625rem -0.625rem, -0.625rem 0, 0.625rem 0, -0.625rem 0.625rem, 0 0.625rem, 0.625rem 0.625rem;\n          box-shadow: -0.625rem -0.625rem, 0 -0.625rem, 0.625rem -0.625rem, -0.625rem 0, 0.625rem 0, -0.625rem 0.625rem, 0 0.625rem, 0.625rem 0.625rem; }\n\n.tcon-grid--rearrange.tcon-transform .tcon-grid__item {\n  -webkit-box-shadow: 0 -0.5rem, 0 -1rem, 0.5rem 0, -1rem 0, 1rem 0, -0.5rem 0, 0 1rem, 0 0.5rem;\n          box-shadow: 0 -0.5rem, 0 -1rem, 0.5rem 0, -1rem 0, 1rem 0, -0.5rem 0, 0 1rem, 0 0.5rem; }\n\n.tcon-remove--check.tcon-transform::before {\n  -webkit-transform: rotate(-135deg) translate(5%, -10%);\n      -ms-transform: rotate(-135deg) translate(5%, -10%);\n          transform: rotate(-135deg) translate(5%, -10%);\n  top: 50%;\n  width: 55%; }\n\n.tcon-remove--check.tcon-transform::after {\n  -webkit-transform: rotate(-45deg) translate(20%, 10%);\n      -ms-transform: rotate(-45deg) translate(20%, 10%);\n          transform: rotate(-45deg) translate(20%, 10%);\n  top: 50%;\n  width: 85%; }\n\n.tcon-remove--chevron-left.tcon-transform::before {\n  left: 20%;\n  -webkit-transform: translate(0, -55%) rotate(-45deg);\n      -ms-transform: translate(0, -55%) rotate(-45deg);\n          transform: translate(0, -55%) rotate(-45deg);\n  width: 62%; }\n\n.tcon-remove--chevron-left.tcon-transform::after {\n  left: 20%;\n  -webkit-transform: translate(0, 55%) rotate(45deg);\n      -ms-transform: translate(0, 55%) rotate(45deg);\n          transform: translate(0, 55%) rotate(45deg);\n  width: 62%; }\n\n.tcon-remove--chevron-right.tcon-transform::before {\n  left: 20%;\n  -webkit-transform: translate(0, 55%) rotate(-45deg);\n      -ms-transform: translate(0, 55%) rotate(-45deg);\n          transform: translate(0, 55%) rotate(-45deg);\n  width: 62%; }\n\n.tcon-remove--chevron-right.tcon-transform::after {\n  left: 20%;\n  -webkit-transform: translate(0, -55%) rotate(45deg);\n      -ms-transform: translate(0, -55%) rotate(45deg);\n          transform: translate(0, -55%) rotate(45deg);\n  width: 62%; }\n\n.tcon-remove--chevron-down.tcon-transform::before {\n  left: 5%;\n  -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n          transform: rotate(-135deg);\n  width: 59%; }\n\n.tcon-remove--chevron-down.tcon-transform::after {\n  left: auto;\n  right: 10%;\n  -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n          transform: rotate(135deg);\n  width: 60%; }\n\n.tcon-remove--chevron-up.tcon-transform::before {\n  left: 5%;\n  -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  width: 59%; }\n\n.tcon-remove--chevron-up.tcon-transform::after {\n  left: auto;\n  right: 10%;\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n  width: 60%; }\n\n.tcon-plus--check.tcon-transform::before {\n  -webkit-transform: rotate(-135deg) translate(5%, -10%);\n      -ms-transform: rotate(-135deg) translate(5%, -10%);\n          transform: rotate(-135deg) translate(5%, -10%);\n  top: 50%;\n  width: 55%; }\n\n.tcon-plus--check.tcon-transform::after {\n  -webkit-transform: rotate(-45deg) translate(20%, 10%);\n      -ms-transform: rotate(-45deg) translate(20%, 10%);\n          transform: rotate(-45deg) translate(20%, 10%);\n  top: 50%;\n  width: 85%; }\n\n.tcon-plus--minus.tcon-transform::before {\n  -webkit-transform: rotate(180deg) translate(0, 0);\n      -ms-transform: rotate(180deg) translate(0, 0);\n          transform: rotate(180deg) translate(0, 0);\n  width: 62%; }\n\n.tcon-plus--minus.tcon-transform::after {\n  -webkit-transform: rotate(-180deg) translate(-37.5%, 0);\n      -ms-transform: rotate(-180deg) translate(-37.5%, 0);\n          transform: rotate(-180deg) translate(-37.5%, 0);\n  width: 62%; }\n\n.tcon-plus--minusfold {\n  height: 40px;\n  position: relative;\n  -webkit-transform: scale(1);\n      -ms-transform: scale(1);\n          transform: scale(1);\n  width: 40px; }\n  .tcon-plus--minusfold::before, .tcon-plus--minusfold::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    -webkit-transition: .3s all ease-in-out;\n    transition: .3s all ease-in-out;\n    border-radius: 5px;\n    top: 50%;\n    -webkit-transform: translate(50%, -50%) rotate(0);\n        -ms-transform: translate(50%, -50%) rotate(0);\n            transform: translate(50%, -50%) rotate(0);\n    width: 50%;\n    height: 3.33333px;\n    background: currentColor; }\n  .tcon-plus--minusfold::after {\n    top: 50%;\n    width: 50%;\n    height: 3.33333px;\n    -webkit-transform: translate(50%, -50%) rotate(90deg);\n        -ms-transform: translate(50%, -50%) rotate(90deg);\n            transform: translate(50%, -50%) rotate(90deg); }\n  .tcon-plus--minusfold.tcon-transform::after {\n    -webkit-transform: translate(50%, -50%) rotate(0);\n        -ms-transform: translate(50%, -50%) rotate(0);\n            transform: translate(50%, -50%) rotate(0); }\n\n.tcon-plus--circle {\n  border: 3.33333px solid currentColor;\n  border-radius: 80%;\n  position: relative;\n  background: transparent; }\n  .tcon-plus--circle::before, .tcon-plus--circle::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    -webkit-transition: .3s all ease-in-out;\n    transition: .3s all ease-in-out;\n    border-radius: 5px;\n    top: 50%;\n    -webkit-transform: translate(50%, -50%) rotate(0);\n        -ms-transform: translate(50%, -50%) rotate(0);\n            transform: translate(50%, -50%) rotate(0);\n    width: 50%;\n    height: 3.33333px;\n    background: currentColor; }\n  .tcon-plus--circle::after {\n    top: 50%;\n    width: 50%;\n    height: 3.33333px;\n    -webkit-transform: translate(50%, -50%) rotate(90deg);\n        -ms-transform: translate(50%, -50%) rotate(90deg);\n            transform: translate(50%, -50%) rotate(90deg); }\n  .tcon-plus--circle.tcon-transform::before {\n    -webkit-transform: translate(50%, -50%) rotate(45deg);\n        -ms-transform: translate(50%, -50%) rotate(45deg);\n            transform: translate(50%, -50%) rotate(45deg); }\n  .tcon-plus--circle.tcon-transform::after {\n    -webkit-transform: translate(50%, -50%) rotate(-45deg);\n        -ms-transform: translate(50%, -50%) rotate(-45deg);\n            transform: translate(50%, -50%) rotate(-45deg); }\n\n.tcon-mail--envelope {\n  width: 40px;\n  height: 20px;\n  background: #3D3F41;\n  position: relative; }\n  .tcon-mail--envelope:before, .tcon-mail--envelope:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    width: 40px; }\n  .tcon-mail--envelope:before {\n    left: 0;\n    border-left: 40px solid #BCBCBD;\n    border-top: 20px solid transparent; }\n  .tcon-mail--envelope:after {\n    right: 0;\n    border-right: 40px solid #A5ACAE;\n    border-top: 20px solid transparent; }\n  .tcon-mail--envelope.tcon-transform .tcon-mail--envelope__flap {\n    -webkit-transform: rotate3d(360, 0, 0, 180deg);\n            transform: rotate3d(360, 0, 0, 180deg);\n    -webkit-transform-origin: 0 100%;\n        -ms-transform-origin: 0 100%;\n            transform-origin: 0 100%; }\n\n.tcon-mail--envelope__flap {\n  border-bottom: 10px solid transparent;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-color: transparent;\n  border-bottom-color: #AEB3B5;\n  position: absolute;\n  -webkit-transform: rotate3d(0, 0, 0, 0deg);\n          transform: rotate3d(0, 0, 0, 0deg);\n  -webkit-transform-origin: 0 100%;\n      -ms-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transition: 0.2s -webkit-transform ease-in-out;\n  transition: 0.2s -webkit-transform ease-in-out;\n  transition: 0.2s transform ease-in-out;\n  transition: 0.2s transform ease-in-out, 0.2s -webkit-transform ease-in-out;\n  top: -10px;\n  left: 0; }\n\n.tcon-search--xcross.tcon-transform {\n  -webkit-transform: scale3d(0.8, 0.8, 0.8);\n          transform: scale3d(0.8, 0.8, 0.8); }\n  .tcon-search--xcross.tcon-transform .tcon-search__item::before, .tcon-search--xcross.tcon-transform .tcon-search__item::after {\n    border-radius: 2.85714px;\n    background: currentColor; }\n  .tcon-search--xcross.tcon-transform .tcon-search__item::after {\n    height: 4px;\n    width: 100%;\n    top: 0;\n    right: 0;\n    border: 0;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n            transform: rotate3d(0, 0, 1, 90deg); }\n\n.tcon-vid--play {\n  height: 40px;\n  padding-top: 0;\n  padding-bottom: 0;\n  width: 40px;\n  -webkit-transition: 0.375s all ease-in-out;\n  transition: 0.375s all ease-in-out;\n  -webkit-transform-origin: center center;\n      -ms-transform-origin: center center;\n          transform-origin: center center; }\n  .tcon-vid--play:after {\n    border-style: solid;\n    border-width: 20px 0 20px 20px;\n    border-color: transparent transparent transparent currentColor;\n    content: \"\";\n    display: block;\n    height: 0;\n    -webkit-transform: translateX(25%);\n        -ms-transform: translateX(25%);\n            transform: translateX(25%);\n    width: 40px; }\n  .tcon-vid--play.tcon-transform {\n    background: currentColor;\n    -webkit-transform: rotate(-360deg);\n        -ms-transform: rotate(-360deg);\n            transform: rotate(-360deg); }\n\n.tcon-loader--spinner360 {\n  border-radius: 80%;\n  display: block;\n  height: 40px;\n  width: 40px;\n  position: relative;\n  -webkit-animation: tcon-spin360 0.675s linear infinite forwards;\n          animation: tcon-spin360 0.675s linear infinite forwards;\n  background: currentColor; }\n  .tcon-loader--spinner360:before, .tcon-loader--spinner360:after {\n    content: \"\";\n    display: block;\n    position: absolute; }\n  .tcon-loader--spinner360:before {\n    border-radius: 0 90px 90px 0;\n    height: 40px;\n    width: 50%;\n    top: 0;\n    right: 0;\n    z-index: 1;\n    background: currentColor;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(currentColor), to(currentColor));\n    background-image: -webkit-linear-gradient(currentColor, currentColor);\n    background-image: linear-gradient(currentColor, currentColor); }\n  .tcon-loader--spinner360:after {\n    border-radius: 80%;\n    height: 30px;\n    width: 30px;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 1;\n    background: currentColor; }\n\n@-webkit-keyframes tcon-spin360 {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes tcon-spin360 {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.tcon-visuallyhidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n  .tcon-visuallyhidden:active, .tcon-visuallyhidden:focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    width: auto; }\n", "", {"version":3,"sources":["/./src/src/src/transformicons.scss","/./src/src/node_modules/Transformicons/dist/sass/base/_config-svgchevron.scss","/./src/src/node_modules/Transformicons/dist/sass/style/_tcon-button.scss","/./src/src/node_modules/Transformicons/dist/sass/base/_config-globals.scss","/./src/src/node_modules/Transformicons/dist/sass/style/_menu-lines.scss","/./src/src/node_modules/Transformicons/dist/sass/style/_menu-arrows.scss","/./src/src/node_modules/Transformicons/dist/sass/style/_grid3X3.scss","/./src/src/node_modules/Transformicons/dist/sass/base/_config-grid.scss","/./src/src/node_modules/Transformicons/dist/sass/style/_addrm-plus.scss","/./src/src/node_modules/Transformicons/dist/sass/style/_addrm-remove.scss","/./src/src/node_modules/Transformicons/dist/sass/style/_search-item.scss","/./src/src/node_modules/Transformicons/dist/sass/base/_config-search.scss","/./src/src/node_modules/Transformicons/dist/sass/style/_indicator-svgchevron.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_menu-xbutterfly.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_menu-xcross.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_menu-minus.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_menu-arrow360.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_menu-arrowup.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_grid-collapse.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_grid-rearrange.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_addrm-remove-check.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_addrm-remove-chevron-left.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_addrm-remove-chevron-right.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_addrm-remove-chevron-down.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_addrm-remove-chevron-up.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_addrm-plus-check.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_addrm-plus-minusrotate.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_addrm-plus-minusfold.scss","/./src/src/node_modules/Transformicons/dist/sass/base/_config-addrm.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_addrm-plus-circle.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_mail-envelope.scss","/./src/src/node_modules/Transformicons/dist/sass/base/_config-mail.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_search-xcross.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_vid-play.scss","/./src/src/node_modules/Transformicons/dist/sass/type/_loader-spinner360.scss","/./src/src/node_modules/Transformicons/dist/sass/base/_config-loader.scss","/./src/src/node_modules/Transformicons/dist/sass/utilities/_tcons-hiddentxt.scss"],"names":[],"mappings":"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","file":"transformicons.scss","sourcesContent":["$tcon-menu-radius: 0;\n$tcon-menu-color: currentColor;\n\n$tcon-plus-color: currentColor;\n$tcon-remove-color: currentColor;\n\n$tcon-grid-color: currentColor;\n\n$spinner_color: currentColor;\n$spinner_bg: currentColor;\n$spinner_inner_bg: currentColor;\n\n$tcon-search-color: currentColor;\n$tcon-search-glass-color: currentColor;\n\n$tcon-svgchevron-color: currentColor;\n\n$tcon-vidplay-color: currentColor;\n\nbutton {\n  color: currentColor;\n}\n\n@import '../node_modules/Transformicons/dist/sass/index/_tcons.scss';\n","$tcon-svgchevron-size: $tcon-size !default;\n$tcon-svgchevron-color: black !default;\n$tcon-svgchevron-strokew: 1px !default;\n$tcon-svgchevron-timing: 3s !default;\n\n@keyframes chevron-pulse {\n  0%   { opacity: 0; }\n  40%  { opacity: 1; }\n  80%  { opacity: 0; }\n  100% { opacity: 0; }\n}\n",".tcon {\n  appearance: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: $tcon-size;\n  transition: $tcon-transition;\n  user-select: none;\n  width: $tcon-size;\n  background: transparent;\n  outline: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-tap-highlight-color: transparent;\n\n  > * {\n    display: block;\n  }\n\n  &:hover,\n  &:focus {\n    outline: none; // see issue #36 https://github.com/grayghostvisuals/transformicons/issues/36\n  }\n  &::-moz-focus-inner {\n    border: 0;\n  }\n}\n","$tcon-size: 40px !default;\n$tcon-transition: .3s !default;\n$tcon-jstransform: 'tcon-transform' !default;\n","@mixin tcon-menu-lines {\n  display: inline-block;\n  height: ($tcon-size / 7);\n  width: $tcon-size;\n  border-radius: $tcon-menu-radius;\n  transition: $tcon-transition;\n  background: $tcon-menu-color;\n}\n\n.tcon-menu__lines {\n  @include tcon-menu-lines;\n  position: relative;\n\n  &::before,\n  &::after {\n    @include tcon-menu-lines;\n    content: '';\n    position: absolute;\n    left: 0;\n    transform-origin: ($tcon-size / 14) center;\n    width: 100%;\n  }\n\n  &::before {\n    top: ($tcon-size / 4);\n  }\n\n  &::after {\n    top: -($tcon-size / 4);\n  }\n\n  .#{$tcon-jstransform} & {\n    transform: scale3d(.8, .8, .8);\n  }\n}",".tcon-menu--arrow {\n  width: auto;\n\n  &.#{$tcon-jstransform} {\n    .tcon-menu__lines {\n      &::before,\n      &::after {\n        top: 0;\n        width: ($tcon-size / 1.8);\n      }\n\n      &::before {\n        transform: rotate3d(0, 0, 1, 45deg);\n      }\n\n      &::after {\n        transform: rotate3d(0, 0, 1, -45deg);\n      }\n    }\n  }\n}",".tcon-grid {\n  padding: $tcon-grid-base*2;\n  .tcon-grid__item {\n    width: $tcon-grid-base;\n    height: $tcon-grid-base;\n    background: $tcon-grid-color;\n    color: $tcon-grid-color;\n    transition: $tcon-transition;\n  }\n}\n\n.tcon-grid.#{$tcon-jstransform} {\n  .tcon-grid__item {\n    transform: map-values($tcon-grid-morph);\n  }\n}","$tcon-grid-color: black !default;\n$tcon-grid-transition: .3s !default;\n$tcon-grid-base: .5rem !default;\n$tcon-grid-space: ($tcon-grid-base / 4) !default;\n$tcon-grid-morph: (\n  transform: rotate3d(0, 0, 1, -45deg) scale3d(.8, .8, .8)\n);",".tcon-plus {\n  height: $tcon-size;\n  position: relative;\n  transform: scale(.75);\n  width: $tcon-size;\n\n  &::before,\n  &::after {\n    content: \"\";\n    border-radius: 2px;\n    display: block;\n    width: 85%;\n    height: 25%;\n    position: absolute;\n    top: 37%;\n    left: 8%;\n    transition: $tcon-transition;\n    background: black;\n  }\n\n  &:after {\n    transform: rotate(90deg);\n  }\n}\n",".tcon-remove {\n  height: $tcon-size;\n  position: relative;\n  transform: scale(.75);\n  width: $tcon-size;\n\n  &::before,\n  &::after {\n    content: \"\";\n    display: block;\n    height: 25%;\n    width: 85%;\n    position: absolute;\n    top: 37%;\n    left: 8%;\n    transition: $tcon-transition;\n    background: $tcon-remove-color;\n  }\n\n  &::before {\n    transform: rotate(45deg);\n  }\n\n  &::after {\n    transform: rotate(-45deg);\n  }\n}\n","@mixin search-item {\n  display: inline-block;\n  height: $tcon-search-size;\n  width: $tcon-search-size;\n  border-radius: 0;\n  transition: $tcon-transition;\n  background: transparent;\n}\n\n.tcon-search__item {\n  @include search-item;\n  position: relative;\n  transform: rotate(-45deg);\n\n  &::before,\n  &::after {\n    @include search-item;\n    content: '';\n    position: absolute;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n  }\n\n  &::before {\n    height: $tcon-search-handle-width;\n    left: 0;\n    background: $tcon-search-color;\n    border-radius: $tcon-search-radius;\n  }\n\n  &::after {\n    right: 0;\n    background: $tcon-search-glass-color;\n    border-radius: 50%;\n    width: $tcon-search-glass-radius;\n    height: $tcon-search-glass-radius;\n    border: $tcon-search-glass-border-width solid black;\n    transform-origin: 50% 50%;\n  }\n}","$tcon-search-size: ($tcon-size * 0.75) !default;\n$tcon-search-radius: ($tcon-size / 14) !default;\n$tcon-search-color: black !default;\n$tcon-search-glass-color: white !default;\n$tcon-search-handle-width: ($tcon-size / 10) !default;\n$tcon-search-glass-radius: ($tcon-size / 3.3333) !default;\n$tcon-search-glass-border-width: ($tcon-size / 20) !default;",".tcon-svgchevron {\n  height: $tcon-svgchevron-size;\n  width: $tcon-svgchevron-size;\n}\n\n.tcon-svgchevron path {\n  animation: chevron-pulse $tcon-svgchevron-timing infinite cubic-bezier(0.4, 0, 0.2, 1);\n  fill: transparent;\n  stroke: $tcon-svgchevron-color;\n  stroke-width: $tcon-svgchevron-strokew;\n}\n\n@for $i from 1 through 3 {\n  .tcon-svgchevron path.a#{$i} {\n    animation-delay: -($i - ($i/2)) + 0.5s;\n  }\n}\n",".tcon-menu--xbutterfly {\n  width: auto;\n\n  .tcon-menu__lines {\n    &::before,\n    &::after {\n      transform-origin: 50% 50%;\n      transition: top .3s .6s ease, transform .3s ease;\n    }\n  }\n\n  &.#{$tcon-jstransform} {\n    .tcon-menu__lines {\n      background: transparent;\n\n      &::before,\n      &::after {\n        top: 0;\n        transition: top .3s ease, transform .3s .5s ease;\n        width: $tcon-size;\n      }\n\n      &::before {\n        transform: rotate3d(0, 0, 1, 45deg);\n      }\n\n      &::after {\n        transform: rotate3d(0, 0, 1, -45deg);\n      }\n    }\n  }\n}\n",".tcon-menu--xcross {\n  width: auto;\n\n  &.#{$tcon-jstransform} {\n    .tcon-menu__lines {\n      background: transparent;\n\n      &::before,\n      &::after {\n        transform-origin: 50% 50%;\n        top: 0;\n        width: $tcon-size;\n      }\n\n      &::before {\n        transform: rotate3d(0, 0, 1, 45deg);\n      }\n\n      &::after {\n        transform: rotate3d(0, 0, 1, -45deg);\n      }\n    }\n  }\n}",".tcon-menu--minus {\n  width: auto;\n\n  &.#{$tcon-jstransform} {\n    .tcon-menu__lines {\n      &::before,\n      &::after {\n        transform: none;\n        top:0;\n        width: $tcon-size;\n      }\n    }\n  }\n}\n",".tcon-menu--arrow360left {\n  &.#{$tcon-jstransform} {\n    @each $property, $value in $tcon-menu-arrow360left-transformation {\n      #{$property} : #{$value};\n    }\n  }\n}",".tcon-menu--arrowup {\n  width: auto;\n  &.#{$tcon-jstransform} {\n    @each $property, $value in $tcon-menu-arrowleft-transformation {\n      #{$property} : #{$value};\n    }\n  }\n}",".tcon-grid--collapse {\n  .tcon-grid__item {\n    box-shadow:\n      -($tcon-grid-base+$tcon-grid-space) 0,\n      -($tcon-grid-base+$tcon-grid-space) ($tcon-grid-base+$tcon-grid-space),\n      $tcon-grid-base+$tcon-grid-space 0,\n      ($tcon-grid-base+$tcon-grid-space) (-($tcon-grid-base+$tcon-grid-space)),\n      0 0 -($tcon-grid-base+$tcon-grid-space),\n      -($tcon-grid-base+$tcon-grid-space) 0 -($tcon-grid-base+$tcon-grid-space),\n      0 ($tcon-grid-base+$tcon-grid-space),\n      ($tcon-grid-base+$tcon-grid-space) ($tcon-grid-base+$tcon-grid-space);\n  }\n\n  &.#{$tcon-jstransform} {\n    .tcon-grid__item {\n      box-shadow:\n        -$tcon-grid-base 0,\n        0 0 transparent,\n        $tcon-grid-base 0,\n        0 0 transparent,\n        0 0 -$tcon-grid-base,\n        0 0 transparent,\n        0 $tcon-grid-base,\n        0 0 transparent;\n    }\n  }\n}",".tcon-grid--rearrange {\n  .tcon-grid__item {\n    box-shadow:\n      -($tcon-grid-base+$tcon-grid-space) 0 -($tcon-grid-base+$tcon-grid-space),\n      0 0 -($tcon-grid-base+$tcon-grid-space),\n      ($tcon-grid-base+$tcon-grid-space) (-($tcon-grid-base + $tcon-grid-space)),\n      -($tcon-grid-base+$tcon-grid-space) 0,\n      $tcon-grid-base+$tcon-grid-space 0,\n      -($tcon-grid-base+$tcon-grid-space) ($tcon-grid-base + $tcon-grid-space),\n      0 ($tcon-grid-base+$tcon-grid-space),\n      ($tcon-grid-base+$tcon-grid-space) ($tcon-grid-base + $tcon-grid-space);\n  }\n}\n\n.tcon-grid--rearrange.#{$tcon-jstransform}  { \n  .tcon-grid__item {\n      box-shadow:\n        0 0 -$tcon-grid-base,\n        0 0 -$tcon-grid-base * 2,\n             $tcon-grid-base 0,\n            -$tcon-grid-base * 2 0,\n             $tcon-grid-base * 2 0,\n            -$tcon-grid-base 0,\n           0 $tcon-grid-base * 2,\n           0 $tcon-grid-base;\n  }\n}",".tcon-remove--check {\n  &.#{$tcon-jstransform} {\n    &::before {\n      transform: rotate(-135deg) translate(5%, -10%);\n      top: 50%;\n      width: 55%;\n    }\n\n    &::after {\n      transform: rotate(-45deg) translate(20%, 10%);\n      top: 50%;\n      width: 85%;\n    }\n  }\n}\n",".tcon-remove--chevron-left {\n  &.#{$tcon-jstransform} {\n    &::before {\n      left: 20%;\n      transform: translate(0, -55%) rotate(-45deg) ;\n      width: 62%;\n    }\n\n    &::after {\n      left: 20%;\n      transform: translate(0, 55%) rotate(45deg);\n      width: 62%;\n    }\n  }\n}\n",".tcon-remove--chevron-right {\n  &.#{$tcon-jstransform} {\n    &::before {\n      left: 20%;\n      transform: translate(0, 55%) rotate(-45deg) ;\n      width: 62%;\n    }\n\n    &::after {\n      left: 20%;\n      transform: translate(0, -55%) rotate(45deg);\n      width: 62%;\n    }\n  }\n}\n",".tcon-remove--chevron-down {\n  &.#{$tcon-jstransform} {\n    &::before {\n      left: 5%;\n      transform: rotate(-135deg);\n      width: 59%;\n    }\n\n    &::after {\n      left: auto;\n      right: 10%;\n      transform: rotate(135deg);\n      width: 60%;\n    }\n  }\n}\n",".tcon-remove--chevron-up {\n  &.#{$tcon-jstransform} {\n    &::before {\n      left: 5%;\n      transform: rotate(-45deg);\n      width: 59%;\n    }\n\n    &::after {\n      left: auto;\n      right: 10%;\n      transform: rotate(45deg);\n      width: 60%;\n    }\n  }\n}\n",".tcon-plus--check {\n  &.#{$tcon-jstransform} {\n    &::before {\n      transform: rotate(-135deg) translate(5%, -10%);\n      top: 50%;\n      width: 55%;\n    }\n\n    &::after {\n      transform: rotate(-45deg) translate(20%, 10%); \n      top: 50%;\n      width: 85%;\n    }\n  }\n}\n",".tcon-plus--minus {\n  &.#{$tcon-jstransform} {\n    &::before {\n      transform: rotate(180deg) translate(0, 0);\n      width: 62%;\n    }\n\n    &::after {\n      transform: rotate(-180deg) translate(-37.5%, 0); \n      width: 62%;\n    }\n  }\n}\n",".tcon-plus--minusfold {\n  height: $tcon-size;\n  position: relative;\n  transform: scale(1);\n  width: $tcon-size;\n\n  &::before,\n  &::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    transition: .3s all ease-in-out;\n    border-radius: $tcon-plus-radius;\n    top: 50%;\n    transform: translate(50%, -50%) rotate(0);\n    width: 50%;\n    height: ($tcon-size / 12);\n    background: $tcon-plus-color;\n  }\n\n  &::after {\n    top: 50%;\n    width: 50%;\n    height: ($tcon-size / 12);\n    transform: translate(50%, -50%) rotate(90deg);\n  }\n\n  &.#{$tcon-jstransform} {\n    &::after {\n      transform: translate(50%, -50%) rotate(0);\n    }\n  }\n}","$tcon-plus-bg: transparent !default;\n$tcon-circle-radius: 80% !default;\n$tcon-plus-radius: ($tcon-size / 8) !default;\n$tcon-plus-color: black !default;\n$tcon-remove-color: black !default;\n",".tcon-plus--circle {\n  border: ($tcon-size / 12) solid $tcon-plus-color;\n  border-radius: $tcon-circle-radius;\n  position: relative;\n  background: $tcon-plus-bg;\n\n  &::before,\n  &::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    transition: .3s all ease-in-out;\n    border-radius: $tcon-plus-radius;\n    top: 50%;\n    transform: translate(50%, -50%) rotate(0);\n    width: 50%;\n    height: ($tcon-size / 12);\n    background: $tcon-plus-color;\n  }\n\n  &::after {\n    top: 50%;\n    width: 50%;\n    height: $tcon-size/12;\n    transform: translate(50%, -50%) rotate(90deg);\n  }\n\n  &.#{$tcon-jstransform} {\n    &::before {\n      transform: translate(50%, -50%) rotate(45deg);\n    }\n\n    &::after {\n      transform: translate(50%, -50%) rotate(-45deg);\n    }\n  }\n}\n",".tcon-mail--envelope {\n  width: $tcon-envelope-size;\n  height: $tcon-envelope-size/2;\n  background: #3D3F41;\n  position: relative;\n\n  &:before,\n  &:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    width: $tcon-envelope-size;\n  }\n\n  &:before {\n    left: 0;\n    border-left: $tcon-envelope-size solid #BCBCBD;\n    border-top: $tcon-envelope-size/2 solid transparent;\n  }\n\n  &:after {\n    right: 0;\n    border-right: $tcon-envelope-size solid #A5ACAE;\n    border-top: $tcon-envelope-size/2 solid transparent;\n  }\n\n  &.tcon-transform .tcon-mail--envelope__flap {\n    transform: rotate3d(360, 0, 0, 180deg);\n    transform-origin: 0 100%;\n  }\n}\n\n.tcon-mail--envelope__flap {\n  border-bottom: $tcon-envelope-size/4 solid transparent;\n  border-left: $tcon-envelope-size/2 solid transparent;\n  border-right: $tcon-envelope-size/2 solid transparent;\n  border-color: transparent;\n  border-bottom-color: #AEB3B5;\n  position: absolute;\n  transform: rotate3d(0,0,0,0deg);\n  transform-origin: 0 100%;\n  transition: $tcon-envelope-transition;\n  top: -$tcon-envelope-size/4;\n  left: 0;\n}","$tcon-envelope-size: 40px !default;\n$tcon-envelope-morph: (\n  transform: .2s transform ease-in-out\n) !default;\n$tcon-envelope-transition: map-values($tcon-envelope-morph) !default;",".tcon-search--xcross {\n  &.#{$tcon-jstransform} {\n    transform: scale3d(.8, .8, .8);\n    \n    .tcon-search__item {\n      &::before, &::after {\n        border-radius: $tcon-search-radius;\n        background: $tcon-search-color;\n      }\n\n      &::after {\n        height: $tcon-search-handle-width;\n        width: 100%;\n        top: 0;\n        right: 0;\n        border: 0;\n        transform: rotate3d(0, 0, 1, 90deg);\n      }\n    }\n  }\n}",".tcon-vid--play {\n  height: $tcon-vidplay-size;\n  padding-top: 0;\n  padding-bottom: 0;\n  width: $tcon-vidplay-size;\n\n  @each $property, $value in $tcon-vidplay-settings {\n    #{$property} : #{$value};\n  }\n\n  &:after {\n    border-style: solid;\n    border-width: $tcon-vidplay-size/2 0 $tcon-vidplay-size/2 $tcon-vidplay-size/2; // http://triangle.designyourcode.io\n    border-color: transparent transparent transparent $tcon-vidplay-color;\n    content: \"\";\n    display: block;\n    height: 0;\n    transform: translateX(25%);\n    width: $tcon-vidplay-size;\n  }\n\n  &.#{$tcon-jstransform} {\n    @each $property, $value in $tcon-vidplay-transformation {\n      #{$property} : #{$value};\n    }\n  }\n}",".tcon-loader--spinner360 {\n  border-radius: 80%;\n  display: block;\n  height: $spinner_size;\n  width: $spinner_size;\n  position: relative;\n  animation: tcon-spin360 $spinner_speed linear infinite forwards;\n  background: $spinner_bg;\n\n  &:before,\n  &:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n  }\n\n  &:before {\n    border-radius: 0 $spinner_fill_radius $spinner_fill_radius 0;\n    height: $spinner_size;\n    width: 50%;\n    top: 0; right: 0;\n    z-index: 1;\n    background: $spinner_color;\n    background-image: linear-gradient($spinner_bg, $spinner_color);\n  }\n\n  &:after {\n    border-radius: $spinner_radius;\n    height: $spinner_inner_circle;\n    width: $spinner_inner_circle;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    background: $spinner_inner_bg;\n  }\n}\n\n@keyframes tcon-spin360 {\n  to {\n    transform: rotate(360deg);\n  }\n}","$spinner_speed: .675s !default;\n$spinner_radius: 80% !default;\n$spinner_fill_radius: 90px !default;\n\n$spinner_size: 40px !default;\n$spinner_thickness: 10px !default;\n$spinner_inner_circle: $spinner_size - $spinner_thickness !default;\n\n$spinner_color: black !default;\n$spinner_bg: lightgray !default;\n$spinner_inner_bg: white !default;","// see issue #7 https://github.com/grayghostvisuals/transformicons/issues/7#issuecomment-59813596\n.tcon-visuallyhidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n\n  &:active,\n  &:focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    width: auto;\n  }\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./addrm-plus-check.hbs": 6,
		"./addrm-plus-circle.hbs": 7,
		"./addrm-plus-minusfold.hbs": 8,
		"./addrm-plus-minusrotate.hbs": 9,
		"./addrm-remove-check.hbs": 10,
		"./addrm-remove-chevron-down.hbs": 11,
		"./addrm-remove-chevron-left.hbs": 12,
		"./addrm-remove-chevron-right.hbs": 13,
		"./addrm-remove-chevron-up.hbs": 14,
		"./grid-collapse.hbs": 15,
		"./grid-rearrange.hbs": 16,
		"./indicator-svgchevron.hbs": 17,
		"./loader-circlearrow.hbs": 18,
		"./loader-spinner360.hbs": 19,
		"./mail-envelope.hbs": 20,
		"./menu-arrow360.hbs": 21,
		"./menu-arrowleft.hbs": 22,
		"./menu-arrowup.hbs": 23,
		"./menu-minus.hbs": 24,
		"./menu-xbutterfly.hbs": 25,
		"./menu-xcross.hbs": 26,
		"./search-xcross.hbs": 27,
		"./vid-play.hbs": 28
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 5;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-plus tcon-plus--check\" aria-label=\"add item\">\n  <span class=\"tcon-visuallyhidden\">add item</span>\n</button>"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-plus--circle\" aria-label=\"add item\">\n  <span class=\"tcon-visuallyhidden\">add item</span>\n</button>"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-plus--minusfold\" aria-label=\"add item\">\n  <span class=\"tcon-visuallyhidden\">add item</span>\n</button>"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-plus tcon-plus--minus\" aria-label=\"add item\">\n  <span class=\"tcon-visuallyhidden\">add item</span>\n</button>"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-remove tcon-remove--check\" aria-label=\"remove item\">\n  <span class=\"tcon-visuallyhidden\">remove item</span>\n</button>\n"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-remove tcon-remove--chevron-down\" aria-label=\"remove item\">\n  <span class=\"tcon-visuallyhidden\">remove item</span>\n</button>\n"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-remove tcon-remove--chevron-left\" aria-label=\"remove item\">\n  <span class=\"tcon-visuallyhidden\">remove item</span>\n</button>\n"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-remove tcon-remove--chevron-right\" aria-label=\"remove item\">\n  <span class=\"tcon-visuallyhidden\">remove item</span>\n</button>\n"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-remove tcon-remove--chevron-up\" aria-label=\"remove item\">\n  <span class=\"tcon-visuallyhidden\">remove item</span>\n</button>\n"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-grid tcon-grid--collapse\" aria-label=\"toggle grid\">\n  <span class=\"tcon-grid__item\" aria-hidden=\"true\"></span>\n  <span class=\"tcon-visuallyhidden\">toggle grid</span>\n</button>"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-grid tcon-grid--rearrange\" aria-label=\"toggle grid\">\n  <span class=\"tcon-grid__item\" aria-hidden=\"true\"></span>\n  <span class=\"tcon-visuallyhidden\">toggle grid</span>\n</button>"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<span class=\"tcon-indicator\" aria-label=\"scroll\" aria-hidden=\"true\">\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tcon-svgchevron\" viewBox=\"0 0 30 36\">\n    <path class=\"a3\" d=\"M0,0l15,16L30,0\"></path>\n    <path class=\"a2\" d=\"M0,10l15,16l15-16\"></path>\n    <path class=\"a1\" d=\"M0,20l15,16l15-16\"></path>\n  </svg>\n</span>\n"

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<span class=\"arrow arrow-animate\">\n  <span class=\"arrow-item\"><span class=\"curve\"></span></span>\n  <span class=\"arrow-item\"><span class=\"curve\"></span></span>\n</span>"

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<span class=\"tcon-loader--spinner360\" aria-label=\"loading\">\n  <span class=\"tcon-visuallyhidden\">loading</span>\n</span>"

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-mail--envelope\" role=\"button\" aria-label=\"open mailbox\">\n  <span class=\"tcon-mail--envelope__flap\" aria-hidden=\"true\"></span>\n  <span class=\"tcon-visuallyhidden\">open mailbox</span>\n</button>"

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-menu--arrow tcon-menu--arrow360left\" aria-label=\"toggle menu\">\n  <span class=\"tcon-menu__lines\" aria-hidden=\"true\"></span>\n  <span class=\"tcon-visuallyhidden\">toggle menu</span>\n</button>"

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-menu--arrow tcon-menu--arrowleft\" aria-label=\"toggle menu\">\n  <span class=\"tcon-menu__lines\" aria-hidden=\"true\"></span>\n  <span class=\"tcon-visuallyhidden\">toggle menu</span>\n</button>"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-menu--arrow tcon-menu--arrowup\" aria-label=\"toggle menu\">\n  <span class=\"tcon-menu__lines\" aria-hidden=\"true\"></span>\n  <span class=\"tcon-visuallyhidden\">toggle menu</span>\n</button>"

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-menu--minus\" aria-label=\"toggle menu\">\n  <span class=\"tcon-menu__lines\" aria-hidden=\"true\"></span>\n  <span class=\"tcon-visuallyhidden\">toggle menu</span>\n</button>"

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-menu--xbutterfly\" aria-label=\"toggle menu\">\n  <span class=\"tcon-menu__lines\" aria-hidden=\"true\"></span>\n  <span class=\"tcon-visuallyhidden\">toggle menu</span>\n</button>"

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-menu--xcross\" aria-label=\"toggle menu\">\n  <span class=\"tcon-menu__lines\" aria-hidden=\"true\"></span>\n  <span class=\"tcon-visuallyhidden\">toggle menu</span>\n</button>"

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-search--xcross\" aria-label=\"toggle search\">\n  <span class=\"tcon-search__item\" aria-hidden=\"true\"></span>\n  <span class=\"tcon-visuallyhidden\">toggle search</span>\n</button>"

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"tcon tcon-vid--play\" role=\"button\" aria-label=\"play video\">\n  <span class=\"tcon-visuallyhidden\">play video</span>\n</button>"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-transformicons.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("hadoken"), require("phaser"));
	else if(typeof define === 'function' && define.amd)
		define(["hadoken", "phaser"], factory);
	else if(typeof exports === 'object')
		exports["HadokenExample"] = factory(require("hadoken"), require("phaser"));
	else
		root["HadokenExample"] = factory(root["Hadoken"], root["Phaser"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_hadoken__, __WEBPACK_EXTERNAL_MODULE_phaser__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/ExampleConfig.js":
/*!**********************************!*\
  !*** ./example/ExampleConfig.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.mkKeyboardHadokenConfig = exports.mkGamepadHadokenConfig = exports.SS = exports.HURICANE_KICK = exports.QBC = exports.HADOKEN = exports.QFC = exports.ATTACKS = exports.KICKS = exports.PUNCHES = exports.ACTION = exports.GamepadInputs = exports.DIRECTIONS = exports.ABSOLUTE_DIRECTIONS = exports.DPAD = exports.DPAD_COMBINATIONS = exports.DVORAK_LAYOUT = exports.QWERTY_LAYOUT = exports.KeymapArrows = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _KeymapArrows, _KeymapDvorak, _KeymapQwerty;\n\nvar _phaser = __webpack_require__(/*! phaser */ \"phaser\");\n\nvar _phaser2 = _interopRequireDefault(_phaser);\n\nvar _hadoken = __webpack_require__(/*! hadoken */ \"hadoken\");\n\nvar _hadoken2 = _interopRequireDefault(_hadoken);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar common = _hadoken2.default.Common.default;\nvar Filters = common.Filters;\nvar _common$Gamepad = common.Gamepad,\n    mkButtonInput = _common$Gamepad.mkButtonInput,\n    mkStandardLeftStickInput = _common$Gamepad.mkStandardLeftStickInput,\n    mkBasicStickDpadMapper = _common$Gamepad.mkBasicStickDpadMapper;\n\nvar Match = common.Matchers;\nvar SimpleMatcher = common.SimpleMatcher;\nvar StandardButtons = common.StandardButtons.default;\nvar KeyboardCommon = common.Keyboard;\n\nvar c = _phaser2.default.Input.Keyboard.KeyCodes;\n\n// This maps a keyboard key code to a named input\nvar KeymapArrows = exports.KeymapArrows = (_KeymapArrows = {}, _defineProperty(_KeymapArrows, c.DOWN, 'down'), _defineProperty(_KeymapArrows, c.UP, 'up'), _defineProperty(_KeymapArrows, c.RIGHT, 'right'), _defineProperty(_KeymapArrows, c.LEFT, 'left'), _KeymapArrows);\n\n// For the Dvorak layout this maps the homerow keys to various attakcs\nvar KeymapDvorak = (_KeymapDvorak = {}, _defineProperty(_KeymapDvorak, c.A, 'punch:light'), _defineProperty(_KeymapDvorak, c.O, 'punch:hard'), _defineProperty(_KeymapDvorak, c.E, 'kick:light'), _defineProperty(_KeymapDvorak, c.U, 'kick:hard'), _defineProperty(_KeymapDvorak, c.I, 'guard'), _KeymapDvorak);\n\n// For the Qwerty layout this maps the homerow keys to various attakcs\nvar KeymapQwerty = (_KeymapQwerty = {}, _defineProperty(_KeymapQwerty, c.A, 'punch:light'), _defineProperty(_KeymapQwerty, c.S, 'punch:hard'), _defineProperty(_KeymapQwerty, c.D, 'kick:light'), _defineProperty(_KeymapQwerty, c.F, 'kick:hard'), _defineProperty(_KeymapQwerty, c.G, 'guard'), _KeymapQwerty);\n\nvar QWERTY_LAYOUT = exports.QWERTY_LAYOUT = _extends({}, KeymapArrows, KeymapQwerty);\nvar DVORAK_LAYOUT = exports.DVORAK_LAYOUT = _extends({}, KeymapArrows, KeymapDvorak);\n\n// This specifies how a set of combined inputs get constructed\nvar DPAD_COMBINATIONS = exports.DPAD_COMBINATIONS = {\n  'down+left': ['down', 'left'],\n  'down+right': ['down', 'right'],\n  'up+left': ['up', 'left'],\n  'up+right': ['up', 'right']\n\n  // gives a constant name to dpad directions\n};var DPAD = exports.DPAD = {\n  up: 'up',\n  up_forward: 'up+forward',\n  forward: 'forward',\n  down_forward: 'down+forward',\n  down: 'down',\n  down_backward: 'down+backward',\n  backward: 'backward',\n  up_backward: 'up+backward'\n\n  // Absolute directions that an input can produce: [up, up+right, ...]\n};var ABSOLUTE_DIRECTIONS = exports.ABSOLUTE_DIRECTIONS = ['up', 'down', 'left', 'right'].concat(_toConsumableArray(Object.keys(DPAD_COMBINATIONS)));\n\n// what directions could be used to construct a move sequence:\n// [up, up+forward, ...]\nvar DIRECTIONS = exports.DIRECTIONS = Object.keys(DPAD).map(function (k) {\n  return DPAD[k];\n});\n\n// configures inputs for a gamepad\nvar GamepadInputs = exports.GamepadInputs = [mkButtonInput(StandardButtons.LeftDpad.Up, 'up'), mkButtonInput(StandardButtons.LeftDpad.Down, 'down'), mkButtonInput(StandardButtons.LeftDpad.Left, 'left'), mkButtonInput(StandardButtons.LeftDpad.Right, 'right'), mkButtonInput(StandardButtons.RightCluster.Down, 'punch:light'), mkButtonInput(StandardButtons.RightCluster.Right, 'punch:hard'), mkButtonInput(StandardButtons.RightCluster.Left, 'kick:light'), mkButtonInput(StandardButtons.RightCluster.Up, 'kick:hard'), mkButtonInput(StandardButtons.Right.Trigger, 'kick:light'), mkButtonInput(StandardButtons.Left.Shoulder, 'guard'), mkStandardLeftStickInput('left-stick', mkBasicStickDpadMapper(), ABSOLUTE_DIRECTIONS)];\n\n// All the non-movement actions a player could take as part of a move sequence\nvar ACTION = exports.ACTION = {\n  punch_light: 'punch:light',\n  punch_hard: 'punch:hard',\n  kick_light: 'kick:light',\n  kick_hard: 'kick:hard',\n  guard: 'guard'\n\n  // various classes of actions\n\n};var PUNCHES = exports.PUNCHES = [ACTION.punch_light, ACTION.punch_hard];\nvar KICKS = exports.KICKS = [ACTION.kick_light, ACTION.kick_hard];\nvar ATTACKS = exports.ATTACKS = [].concat(PUNCHES, KICKS);\n\n// quarter forward circle\nvar QFC = exports.QFC = [DPAD.down, DPAD.down_forward, DPAD.forward];\nvar HADOKEN = exports.HADOKEN = [].concat(QFC, [Match.OneWithPrefix('punch:')]);\n\n// quarter backward circle\nvar QBC = exports.QBC = [DPAD.down, DPAD.down_backward, DPAD.backward];\nvar HURICANE_KICK = exports.HURICANE_KICK = [].concat(QBC, [Match.OneWithPrefix('kick:')]);\n\n// summon suffering\nvar SS = exports.SS = [DPAD.down_forward, DPAD.up_backward, DPAD.forward, DPAD.down, DPAD.down_forward, DPAD.down_backward, Match.All(ACTION.punch_light, ACTION.guard)];\n\n// This is shared between both keyboard and gamepad hadokens\nvar mkCommonHadokenConfig = function mkCommonHadokenConfig(getFacing) {\n  return {\n    bufferLimitType: 'time',\n    bufferLimit: 5000,\n\n    // the following functions will be applied to inputs before trying to match\n    filters: Filters.NewChain(\n    // convert two directional inputs into a diagonal, if applicable\n    Filters.CoalesseInputs(DPAD_COMBINATIONS),\n    // change formats from right/left to forward/backward based on the\n    // player's facing\n    Filters.MapToFacing(getFacing),\n    // only accept the most recent direction\n    Filters.OnlyMostRecent(DIRECTIONS),\n    // and the most recent attack\n    Filters.OnlyMostRecent(ATTACKS)),\n\n    // defines a set of moves to register (and how that match should happen)\n    matchers: [{ name: 'hadoken', match: SimpleMatcher.New(HADOKEN) }, { name: 'huricane_kick', match: SimpleMatcher.New(HURICANE_KICK) }, {\n      name: 'summon_suffering',\n      match: SimpleMatcher.New(SS, { stepDelay: 800, totalDelay: 6000 })\n    }]\n  };\n};\n\n// the two controller variations\n\nvar mkGamepadHadokenConfig = exports.mkGamepadHadokenConfig = function mkGamepadHadokenConfig(getFacing, pad) {\n  return _extends({}, mkCommonHadokenConfig(getFacing), {\n    gamepad: pad,\n    buttonMap: GamepadInputs\n  });\n};\n\nvar dvorakMapper = KeyboardCommon.NewSimpleMapper(DVORAK_LAYOUT);\nvar qwertykMapper = KeyboardCommon.NewSimpleMapper(QWERTY_LAYOUT);\n\nvar mkKeyboardHadokenConfig = exports.mkKeyboardHadokenConfig = function mkKeyboardHadokenConfig(getFacing, getLayout) {\n  return _extends({}, mkCommonHadokenConfig(getFacing), {\n    keymapFn: function keymapFn(code) {\n      return getLayout() === 'dvorak' ? dvorakMapper(code) : qwertykMapper(code);\n    }\n  });\n};\n\n//# sourceURL=webpack://HadokenExample/./example/ExampleConfig.js?");

/***/ }),

/***/ "./example/index.ts":
/*!**************************!*\
  !*** ./example/index.ts ***!
  \**************************/
/*! exports provided: selectKeymap, selectInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectKeymap\", function() { return selectKeymap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectInput\", function() { return selectInput; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var hadoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hadoken */ \"hadoken\");\n/* harmony import */ var hadoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hadoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ExampleConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExampleConfig */ \"./example/ExampleConfig.js\");\n/* harmony import */ var _ExampleConfig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ExampleConfig__WEBPACK_IMPORTED_MODULE_2__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\nvar Events = hadoken__WEBPACK_IMPORTED_MODULE_1___default.a.Base.Events;\r\nvar _a = hadoken__WEBPACK_IMPORTED_MODULE_1___default.a.Adapters, Gamepad = _a.Gamepad, PhaserKeyboard = _a.PhaserKeyboard;\r\nvar common = hadoken__WEBPACK_IMPORTED_MODULE_1___default.a.Common.default;\r\nvar isStandardMapping = common.Gamepad.isStandardMapping;\r\nvar DemoScene = /** @class */ (function (_super) {\r\n    __extends(DemoScene, _super);\r\n    function DemoScene() {\r\n        var _this = _super.call(this, 'demoscene') || this;\r\n        _this.facing = 'right';\r\n        _this.keymap = 'qwerty';\r\n        _this.displayCount = 12;\r\n        _this.hadoken = null;\r\n        _this.kbh = null;\r\n        _this.gph = null;\r\n        return _this;\r\n    }\r\n    DemoScene.prototype.preload = function () {\r\n        var _this = this;\r\n        ['1', '2', '3', '4', '6', '7', '8', '9', 'punch', 'punch_hard', 'kick', 'kick_hard', 'guard'].forEach(function (n) {\r\n            _this.load.image(\"input_\" + n, \"./assets/\" + n + \".png\");\r\n        });\r\n    };\r\n    DemoScene.prototype.create = function () {\r\n        this._constructUI();\r\n        this._connectKB();\r\n        this.stickUI = this.add.graphics();\r\n        this.stickUI.lineStyle(3, 0xff0000);\r\n        this.stickInfo = this.add.text(20, 70, '');\r\n    };\r\n    // disables the keyboard hadoken and switches to the gamepad hadoken; if a\r\n    // gamepad hasn't been attached yet this will kick that process off and wait\r\n    // until phaser detects one\r\n    DemoScene.prototype._connectPad = function () {\r\n        var _this = this;\r\n        if (this.kbh !== null) {\r\n            this.kbh.pause();\r\n        }\r\n        if (this.gph !== null) {\r\n            this.hadoken = this.gph;\r\n            this.hadoken.resume();\r\n            return;\r\n        }\r\n        var ch = this.cameras.main.height;\r\n        var txt = this.add.text(0, ch / 2, 'Waiting for Gamepad', { fontFamily: \"Impact, ArialBlack\", fontSize: 50, color: '#3300cc', align: 'center' });\r\n        txt.setX(this.cameras.main.width / 2 - txt.width / 2);\r\n        txt.setY(ch / 2 - txt.height / 2);\r\n        var tween = this.add.tween({\r\n            targets: txt,\r\n            alpha: .4,\r\n            duration: 500,\r\n            easy: 'Power2',\r\n            repeat: -1,\r\n            yoyo: -1,\r\n        });\r\n        // this will be called to finish wiring up the gamepad controller once\r\n        // phaser detects that it's available\r\n        var attach = function (pad) {\r\n            tween.stop();\r\n            txt.destroy();\r\n            if (!isStandardMapping(pad)) {\r\n                alert('Gamepad + browser combination error, see dev console for details');\r\n                console.error('The browser doesn\\'t understand how to remap the attached');\r\n                console.error('controller into the standard gamepad mapping. Because this demo');\r\n                console.error('did not implement a remapping interface we bail instead of');\r\n                console.error('getting into a weird state where keys are nonsense.');\r\n                selectInput('keyboard');\r\n                return;\r\n            }\r\n            _this.gph = new Gamepad.Hadoken(_this, _ExampleConfig__WEBPACK_IMPORTED_MODULE_2__[\"mkGamepadHadokenConfig\"](function () { return _this.facing; }, pad));\r\n            // hadoken will emit a match event when a move's input sequence is matched\r\n            _this.gph.emitter.on(Events.Match, _this._onMoveMatched, _this);\r\n            _this.hadoken = _this.gph;\r\n        };\r\n        if (this.input.gamepad.total > 0) {\r\n            attach(this.input.gamepad.pad1);\r\n        }\r\n        else {\r\n            this.input.gamepad.once('connected', attach);\r\n        }\r\n    };\r\n    // disables the gamepad hadoken and switches to the keyboard hadoken; if a\r\n    // keyboard hadoken doesn't exist creates it\r\n    DemoScene.prototype._connectKB = function () {\r\n        var _this = this;\r\n        if (this.gph !== null) {\r\n            this.gph.pause();\r\n        }\r\n        if (this.kbh !== null) {\r\n            this.hadoken = this.kbh;\r\n            this.hadoken.resume();\r\n            return;\r\n        }\r\n        this.kbh = new PhaserKeyboard.Hadoken(this, _ExampleConfig__WEBPACK_IMPORTED_MODULE_2__[\"mkKeyboardHadokenConfig\"](function () { return _this.facing; }, function () { return _this.keymap; }));\r\n        // hadoken will emit a match event when a move's input sequence is matched\r\n        this.kbh.emitter.on(Events.Match, this._onMoveMatched, this);\r\n        this.hadoken = this.kbh;\r\n    };\r\n    // creates all the objects required to present the control mapping, history\r\n    // bar, move match texet, and joystick info\r\n    DemoScene.prototype._constructUI = function () {\r\n        var ch = this.cameras.main.height;\r\n        var cw = this.cameras.main.width;\r\n        var boxesCount = this.displayCount;\r\n        var boxBorder = 12;\r\n        var bb2 = boxBorder / 2;\r\n        var offsetX = 40;\r\n        var offsetY = 3 / 5 * ch;\r\n        var boxWidth = (cw - boxesCount * boxBorder - 2 * offsetX) / boxesCount;\r\n        var boxHeight = boxWidth;\r\n        this.lastMatched = null;\r\n        this.boxG = [];\r\n        for (var i = 0; i < boxesCount; i++) {\r\n            this.boxG.push([]);\r\n            for (var j = 0; j < 3; j++) {\r\n                var bx = offsetX + i * ((i === 0 ? bb2 : boxBorder) + boxWidth);\r\n                var by = offsetY + j * (boxHeight + bb2);\r\n                var img = this.add.image(bx, by, 'input_6');\r\n                img.setOrigin(0);\r\n                img.setDisplaySize(boxWidth, boxHeight);\r\n                this.boxG[i].push(img);\r\n            }\r\n        }\r\n        this.controls = [];\r\n        var txtCfg = { fontFamily: \"Impact, ArialBlack\", fontSize: 35, color: '#3300cc', align: 'center' };\r\n        var col1 = cw / 3;\r\n        var col2 = cw / 2;\r\n        var col3 = 2 / 3 * cw;\r\n        this.controls.push(this.add.text(col1, 0, ' : A', txtCfg));\r\n        var row1 = this.controls[0].height / 2;\r\n        this.controls[0].setY(row1);\r\n        var row2 = row1 + this.controls[0].height + 4;\r\n        this.controls.push(this.add.text(col1, row2, ' : S', txtCfg));\r\n        this.controls.push(this.add.text(col2, row1, ' : D', txtCfg));\r\n        this.controls.push(this.add.text(col2, row2, ' : F', txtCfg));\r\n        this.controls.push(this.add.text(col3, row1 + (row2 - row1) / 2, ' : G', txtCfg));\r\n        var offset = this.controls[0].width;\r\n        var sz = this.controls[0].height;\r\n        this.add.image(col1 - offset, row1, 'input_punch').setDisplaySize(sz, sz).setOrigin(0);\r\n        this.add.image(col2 - offset, row1, 'input_punch_hard').setDisplaySize(sz, sz).setOrigin(0);\r\n        this.add.image(col1 - offset, row2, 'input_kick').setDisplaySize(sz, sz).setOrigin(0);\r\n        this.add.image(col2 - offset, row2, 'input_kick_hard').setDisplaySize(sz, sz).setOrigin(0);\r\n        this.add.image(col3 - offset, row1 + (row2 - row1) / 2, 'input_guard').setDisplaySize(sz, sz).setOrigin(0);\r\n    };\r\n    DemoScene.prototype._onMoveMatched = function (data) {\r\n        if (this.lastMatched) {\r\n            this.lastMatched.setVisible(false);\r\n        }\r\n        var ch = this.cameras.main.height;\r\n        var txt = this.add.text(0, ch / 3, data.name, { fontFamily: \"Impact, ArialBlack\", fontSize: 64, color: '#3300cc', align: 'center' });\r\n        this.lastMatched = txt;\r\n        txt.setShadow(2, 2, \"#333333\", 2, true, true);\r\n        txt.setOrigin(0);\r\n        txt.setX(this.cameras.main.width / 2 - (txt.width / 2));\r\n        this.add.tween({\r\n            targets: txt,\r\n            alpha: 0,\r\n            delay: 500,\r\n            duration: 1200,\r\n            ease: 'Power2',\r\n        });\r\n        if (this.hadoken !== null) {\r\n            var hData_1 = this.hadoken.hadokenData;\r\n            var m = data.meta;\r\n            m.indicies.forEach(function (idx) {\r\n                var state = hData_1.processedHistory[idx].state;\r\n                console.log(\"  \" + idx + \" => [\" + Object.keys(state).join(', ') + \"]\");\r\n            });\r\n        }\r\n    };\r\n    DemoScene.prototype._drawInputHistory = function () {\r\n        var nameMapping = {\r\n            'down+backward': '1',\r\n            'down': '2',\r\n            'down+forward': '3',\r\n            'backward': '4',\r\n            'forward': '6',\r\n            'up+backward': '7',\r\n            'up': '8',\r\n            'up+forward': '9',\r\n            'punch:light': 'punch',\r\n            'punch:hard': 'punch_hard',\r\n            'kick:light': 'kick',\r\n            'kick:hard': 'kick_hard',\r\n            'guard': 'guard',\r\n        };\r\n        this.stickInfo.setText('');\r\n        if (this.stickUI) {\r\n            this.stickUI.clear();\r\n        }\r\n        if (this.stickUI && this.hadoken instanceof Gamepad.Hadoken) {\r\n            var stickCx = 85;\r\n            var stickCy = 40;\r\n            var stickCr = 25;\r\n            this.stickUI.lineStyle(2, 0xff0000, 1);\r\n            this.stickUI.strokeCircle(stickCx, stickCy, stickCr);\r\n            var stickData = this.hadoken.analogData.stick;\r\n            var _a = stickData['left-stick'] || { angle: 0, value: 0 }, angle = _a.angle, value = _a.value;\r\n            var angleRad = angle / 57.295827;\r\n            var x2 = (value * stickCr) * Math.cos(angleRad) + stickCx;\r\n            var y2 = (value * stickCr) * Math.sin(angleRad) + stickCy;\r\n            this.stickUI.lineStyle(2, 0xff0000, 1);\r\n            this.stickUI.strokeLineShape(new phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Geom.Line(85, 40, x2, y2));\r\n            this.stickInfo.setText(\"angle: \" + +angle.toFixed(4) + \"\\nvalue: \" + +value.toFixed(4));\r\n        }\r\n        var history = this.hadoken !== null\r\n            ? this.hadoken.hadokenData.processedHistory.filter(function (h) { return Object.keys(h.state).length; }).slice(-1 * this.displayCount)\r\n            : [];\r\n        var i = 0;\r\n        var _loop_1 = function () {\r\n            var state = history[i].state;\r\n            var inputs = Object.keys(state);\r\n            var col = this_1.boxG[i];\r\n            if (inputs.length > 3) {\r\n                console.error(\"inputs > 3: [\" + inputs.join(', ') + \"]\");\r\n            }\r\n            var directions = _ExampleConfig__WEBPACK_IMPORTED_MODULE_2__[\"DIRECTIONS\"].filter(function (i) { return inputs.indexOf(i) !== -1; });\r\n            var attacks = _ExampleConfig__WEBPACK_IMPORTED_MODULE_2__[\"ATTACKS\"].filter(function (i) { return inputs.indexOf(i) !== -1; });\r\n            var guard = inputs.indexOf('guard') == -1 ? [] : ['guard'];\r\n            var j = 0;\r\n            if (directions.length) {\r\n                col[j].setTexture(\"input_\" + nameMapping[directions[0]]);\r\n                col[j].setVisible(true);\r\n                j++;\r\n            }\r\n            if (attacks.length) {\r\n                col[j].setTexture(\"input_\" + nameMapping[attacks[0]]);\r\n                col[j].setVisible(true);\r\n                j++;\r\n            }\r\n            if (guard.length) {\r\n                col[j].setTexture(\"input_\" + nameMapping[guard[0]]);\r\n                col[j].setVisible(true);\r\n                j++;\r\n            }\r\n            for (; j < 3; j++) {\r\n                col[j].setVisible(false);\r\n            }\r\n        };\r\n        var this_1 = this;\r\n        for (; i < history.length; i++) {\r\n            _loop_1();\r\n        }\r\n        for (; i < this.displayCount; i++) {\r\n            for (var j = 0; j < 3; j++) {\r\n                this.boxG[i][j].setVisible(false);\r\n            }\r\n        }\r\n    };\r\n    DemoScene.prototype.switchInputTo = function (typ) {\r\n        if (typ === 'keyboard') {\r\n            this._connectKB();\r\n        }\r\n        if (typ === 'gamepad') {\r\n            this._connectPad();\r\n        }\r\n    };\r\n    DemoScene.prototype.update = function () {\r\n        this._drawInputHistory();\r\n        if (this.hadoken && this.hadoken.hadokenData.matchedMove !== null) {\r\n            console.log(\"matched: \" + this.hadoken.hadokenData.matchedMove);\r\n        }\r\n    };\r\n    return DemoScene;\r\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene));\r\nvar phaserConfig = {\r\n    type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,\r\n    parent: 'phaser-display',\r\n    backgroundColor: '0x9a9a9a',\r\n    width: 800,\r\n    height: 400,\r\n    scene: [DemoScene],\r\n    input: {\r\n        gamepad: true,\r\n    }\r\n};\r\nvar game = new phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game(phaserConfig);\r\n// hook for demo page to swap keymaps\r\nfunction selectKeymap(newmap) {\r\n    var scn = game.scene.getScene('demoscene');\r\n    scn.keymap = newmap;\r\n    var nowQwerty = newmap === 'qwerty';\r\n    var letters = nowQwerty\r\n        ? ['A', 'S', 'D', 'F', 'G']\r\n        : ['A', 'O', 'E', 'U', 'I'];\r\n    letters.forEach(function (l, i) { scn.controls[i].setText(\" : \" + l); });\r\n    var qwEle = document.getElementById('keymap-qwerty');\r\n    qwEle.className = 'selectable' + (nowQwerty ? ' selected' : '');\r\n    var dvEle = document.getElementById('keymap-dvorak');\r\n    dvEle.className = 'selectable' + (nowQwerty ? '' : ' selected');\r\n}\r\n// hook for the demo page to switch between keyboard & gamepad\r\nfunction selectInput(typ) {\r\n    var scn = game.scene.getScene('demoscene');\r\n    scn.switchInputTo(typ);\r\n    var nowKB = typ === 'keyboard';\r\n    var kbEle = document.getElementById('input-keyboard');\r\n    kbEle.className = 'selectable' + (nowKB ? ' selected' : '');\r\n    var gpEle = document.getElementById('input-gamepad');\r\n    gpEle.className = 'selectable' + (nowKB ? '' : ' selected');\r\n    var keymapEle = document.getElementById('keymap-select-section');\r\n    if (nowKB) {\r\n        keymapEle.style.display = 'block';\r\n        selectKeymap(scn.keymap);\r\n    }\r\n    else {\r\n        var letters = ['A', 'B', 'X', 'Y', 'LS'];\r\n        letters.forEach(function (l, i) { scn.controls[i].setText(\" : \" + l); });\r\n        keymapEle.style.display = 'none';\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://HadokenExample/./example/index.ts?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./example/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\falun\\Projects\\phaser\\phaser3-hadoken\\example\\index.ts */\"./example/index.ts\");\n\n\n//# sourceURL=webpack://HadokenExample/multi_./example/index.ts?");

/***/ }),

/***/ "hadoken":
/*!**************************************************************************************************************!*\
  !*** external {"umd":"hadoken","commonjs2":"hadoken","commonjs":"hadoken","amd":"hadoken","root":"Hadoken"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_hadoken__;\n\n//# sourceURL=webpack://HadokenExample/external_%7B%22umd%22:%22hadoken%22,%22commonjs2%22:%22hadoken%22,%22commonjs%22:%22hadoken%22,%22amd%22:%22hadoken%22,%22root%22:%22Hadoken%22%7D?");

/***/ }),

/***/ "phaser":
/*!*********************************************************************************************************!*\
  !*** external {"umd":"phaser","commonjs2":"phaser","commonjs":"phaser","amd":"phaser","root":"Phaser"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_phaser__;\n\n//# sourceURL=webpack://HadokenExample/external_%7B%22umd%22:%22phaser%22,%22commonjs2%22:%22phaser%22,%22commonjs%22:%22phaser%22,%22amd%22:%22phaser%22,%22root%22:%22Phaser%22%7D?");

/***/ })

/******/ });
});
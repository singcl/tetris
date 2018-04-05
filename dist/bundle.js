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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepCopy = __webpack_require__(10);

Object.defineProperty(exports, 'deepCopy', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_deepCopy).default;
  }
});

var _lineIndex = __webpack_require__(12);

Object.defineProperty(exports, 'lineIndex', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lineIndex).default;
  }
});

var _rotateArray = __webpack_require__(14);

Object.defineProperty(exports, 'rotateArray', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_rotateArray).default;
  }
});

var _matrixString = __webpack_require__(13);

Object.defineProperty(exports, 'matrixString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_matrixString).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gameType = __webpack_require__(7);

Object.defineProperty(exports, 'gameType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_gameType).default;
  }
});

var _pointType = __webpack_require__(8);

Object.defineProperty(exports, 'pointType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pointType).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var deafultColors = ['#ffc107', '#2196f3', '#673ab7', '#f44336', '#009688', '#ffeb3b'];

// 方块

var Brick = function () {
  function Brick(configs /*: { shape: matrix, color?: string }*/) {
    _classCallCheck(this, Brick);

    this.shape = configs.shape;
    this.color = configs.color || deafultColors[Math.random() * deafultColors.length | 0];
  }

  // 获取方块的位置信息


  _createClass(Brick, [{
    key: 'getShape',
    value: function getShape() /*: matrix*/ {
      return this.shape;
    }
  }]);

  return Brick;
}();

exports.default = Brick;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Brick = __webpack_require__(2);

var _Brick2 = _interopRequireDefault(_Brick);

var _utils = __webpack_require__(0);

var _enum = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 游戏的核心控制
// 用来进行方块数据的移动
var Game = function () {
  function Game() {
    var configs /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      width: 8,
      height: 20,
      oldBrickColor: '#4caf50',
      backColor: '#9e9e9e'
    };

    _classCallCheck(this, Game);

    this.width = configs.width;
    this.height = configs.height;
    this.oldBrickColor = configs.oldBrickColor;
    this.backColor = configs.backColor;
  }

  _createClass(Game, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.status = _enum.gameType.start;

      this.oldMatrix = new Array(this.height).fill(0).map(function (_ /*: number*/) /*: arr*/ {
        return new Array(_this.width).fill(_enum.pointType.empty);
      });

      // test
      // this.oldMatrix.map((row, rowIndex) => {
      //   row[6] = pointType.oldBrick
      // })
      // test end
      this.matrix = (0, _utils.deepCopy)(this.oldMatrix);
    }
  }, {
    key: 'loadBrick',
    value: function loadBrick(brick /*: Brick*/, position /*: pos*/) {
      var matrix = this.matrix,
          status = this.status;


      if (status === _enum.gameType.over) return;

      this.brick = brick;
      this.nextPosition = position;
      this.status = _enum.gameType.running;

      var blend = this.blend = brick.getShape();

      var _position = _slicedToArray(position, 2),
          x = _position[0],
          y = _position[1];

      // can not put


      if (blend.some(function (arr /*: arr*/, row /*: number*/) /*: boolean*/ {
        return !!arr && arr.some(function (item /*: number*/, col /*: number*/) /*: boolean*/ {
          var matrixRow = matrix[row + y];
          return !!(item && matrixRow && matrixRow[col + x]);
        });
      })) {
        this.status = _enum.gameType.over;
        return;
      }

      this.updateMatrix();
    }

    // 更新当前brick的位置

  }, {
    key: 'updateMatrix',
    value: function updateMatrix() {
      var oldMatrix = this.oldMatrix,
          nextPosition = this.nextPosition,
          status = this.status;


      if (status === _enum.gameType.over) return;

      this.matrix = (0, _utils.deepCopy)(oldMatrix);
      this.position = nextPosition;

      this.setup();
    }

    // 将当前活动的方块装载到矩阵中

  }, {
    key: 'setup',
    value: function setup() {
      var matrix = this.matrix,
          position = this.position,
          blend = this.blend;


      if (!blend || !position) return;

      var _position2 = _slicedToArray(position, 2),
          x = _position2[0],
          y = _position2[1];

      // put brick


      blend.forEach(function (arr /*: arr*/, row /*: number*/) {
        return arr && arr.forEach(function (item /*: number*/, col /*: number*/) {
          var matrixRow = matrix[row + y];
          if (item && matrixRow) {
            matrixRow[col + x] = item;
          }
        });
      });
    }

    // 进行移动的操作

  }, {
    key: 'move',
    value: function move(pos /*: 'down' | 'left' | 'right' | 'bottom'*/) {
      var position = this.position,
          brick = this.brick,
          height = this.height,
          width = this.width,
          matrix = this.matrix,
          oldMatrix = this.oldMatrix,
          blend = this.blend,
          status = this.status;


      if (!position || !brick || !blend || status === _enum.gameType.over) return;

      var firstRow = blend[0];

      if (!firstRow) return;

      var brickWidth = firstRow.length;

      var _position3 = _slicedToArray(position, 2),
          x = _position3[0],
          y = _position3[1];

      this.nextPosition = null;
      switch (pos) {
        case 'down':
          // 自然下降
          this.nextPosition = [x, y + 1];
          break;
        case 'left':
          // 左移
          if (x <= 0 || blend.some(function (row, rowIndex) {
            var _pos = oldMatrix[y + rowIndex];
            return row && row[0] && _pos && _pos[x - 1];
          })) return; // 左侧有障碍物，无法移动
          this.nextPosition = [x - 1, y];
          break;
        case 'right':
          // 右移
          if (x >= width - brickWidth || blend.some(function (row, rowIndex) {
            var _pos = oldMatrix[y + rowIndex];
            return row && row[brickWidth - 1] && _pos && _pos[x + brickWidth];
          })) return; // 右侧有障碍物，无法移动
          this.nextPosition = [x + 1, y];
          break;
        case 'bottom':
          // 下降到底部
          var topLine = (0, _utils.lineIndex)(this.oldMatrix, false);
          var deep = Math.min.apply(Math, (0, _utils.lineIndex)(this.blend, true).map(function (deep, colIndex) {
            return topLine[x + colIndex] - deep;
          })); // 获取最多可以下降到的坐标
          this.nextPosition = [x, deep];
          break;
        case 'rotate':
          // 旋转
          var newBlend = (0, _utils.rotateArray)(this.blend);

          var newFirstRow = newBlend[0];

          var rangeLen = newFirstRow ? newFirstRow.length + x - width : 0;

          if (newBlend.some(function (row, rowIndex) {
            var _pos = oldMatrix[y + rowIndex];
            return row && _pos && row.some(function (col, colIndex) {
              return col && _pos[colIndex + x];
            });
          })) {
            return; // console.log('有障碍物')
          } else if (rangeLen > 0) {
            this.nextPosition = [x - rangeLen, y];
          } else {
            this.nextPosition = position;
          }

          this.blend = newBlend;
          break;
        default:
          // 其余情况不处理
          return;
      }
      this.updateMatrix();

      this.bottomDetection();
    }

    // 触底检测

  }, {
    key: 'bottomDetection',
    value: function bottomDetection() {
      var matrix = this.matrix,
          position = this.position,
          status = this.status,
          blend = this.blend,
          height = this.height;


      if (!blend || !position || status === _enum.gameType.over) return;

      var _position4 = _slicedToArray(position, 2),
          x = _position4[0],
          y = _position4[1];

      var blIndex = (0, _utils.lineIndex)(blend, true); // 这里边获取的下标 + 当前方块的坐标，如果对应的在矩阵中有值，就说明触底了。

      var blPos = blIndex.map(function (index, colIndex) {
        return [x + colIndex, y + index];
      });

      var result = blPos.some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            col = _ref2[0],
            row = _ref2[1];

        return row === height || matrix[row][col] === _enum.pointType.oldBrick;
      });

      if (result) {
        // merge brick
        this.mergeBrick();

        // unload brick
        this.unloadBrick();

        this.removeFullLine();
      }
    }

    // 触底后进行合并，将之前的方块塞入背景中，移除方块的引用，等待新的方块

  }, {
    key: 'mergeBrick',
    value: function mergeBrick() {
      var _this2 = this;

      var matrix = this.matrix,
          oldMatrix = this.oldMatrix,
          blend = this.blend,
          position = this.position,
          status = this.status;


      if (!position || !blend) return;

      var _position5 = _slicedToArray(position, 2),
          x = _position5[0],
          y = _position5[1];

      blend.forEach(function (row, rowIndex) {
        row && row.forEach(function (col, colIndex) {
          var yPos = rowIndex + y;
          var xPos = colIndex + x;

          var oldMatrixRow = _this2.oldMatrix[yPos];
          var matrixRow = _this2.matrix[yPos];
          if (col && oldMatrixRow && matrixRow) {
            oldMatrixRow[xPos] = matrixRow[xPos] = _enum.pointType.oldBrick;
          }
        });
      });
    }

    // 移除整行的方块

  }, {
    key: 'removeFullLine',
    value: function removeFullLine() {
      var oldMatrix = this.oldMatrix,
          width = this.width;


      var fullLineCount = 0;
      oldMatrix.forEach(function (row, rowIndex) {
        if (!!row && row.every(function (_) {
          return _ === _enum.pointType.oldBrick || _ === _enum.pointType.newBrick;
        })) {
          oldMatrix[rowIndex] = null;
          fullLineCount++;
        }
      });

      // 如果有移除的行
      if (fullLineCount) {
        this.oldMatrix = new Array(fullLineCount).fill(0).map(function (_) {
          return new Array(width).fill(_enum.pointType.empty);
        }).concat(oldMatrix.filter(function (_) {
          return _;
        }));
        this.updateMatrix();
      }
    }

    // 卸载方块

  }, {
    key: 'unloadBrick',
    value: function unloadBrick() {
      this.status = _enum.gameType.free;
      this.brick = null;
      this.blend = null;
      this.position = null;
      this.nextPosition = null;
    }

    // 调试用的方法，也可以作为console版本游戏来看待

  }, {
    key: 'log',
    value: function log() {
      console.clear();
      console.log(this.matrix.map(function (arr /*: arr*/) /*: string*/ {
        return arr ? arr.join('') : '';
      }).join('\n'));
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(3);

var _Game2 = _interopRequireDefault(_Game);

var _Brick = __webpack_require__(2);

var _Brick2 = _interopRequireDefault(_Brick);

var _enum = __webpack_require__(1);

var _view = __webpack_require__(16);

var _data = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _Game2.default();

var renderCanvas = new _view.RenderCanvas(document.getElementById('canvas'));

game.init();
loadBrick();
renderCanvas.render(game);

window.addEventListener('keyup', function (e /*: KeyboardEvent*/) {
  if (game.status === _enum.gameType.over) return;
  var arrow = {
    '83': 'bottom',
    '68': 'right',
    '65': 'left',
    '87': 'rotate'
  };

  game.move(arrow[e.keyCode]);
  renderCanvas.render(game);
  if (game.status === _enum.gameType.free) {
    refreshMatrix();
  }
});

var interval = setInterval(refreshMatrix, 500);

function refreshMatrix() {
  if (game.status === _enum.gameType.free) {
    loadBrick();
  } else if (game.status === _enum.gameType.over) {
    clearInterval(interval);
  } else {
    game.move('down');
  }
  renderCanvas.render(game);
}

function loadBrick() {
  var shape = (0, _data.getShape)();
  var brick = new _Brick2.default({
    shape: shape
  });

  game.loadBrick(brick, [Math.random() * (8 - shape.length + 1) | 0, 0]);
}

document.querySelectorAll('.controller-btn').forEach(function (item) {
  item.addEventListener('click', function (e /*: any*/) {
    var type = e.target.dataset.type;

    if (['bottom', 'rotate', 'left', 'right'].includes(type)) {
      game.move(type);
      renderCanvas.render(game);
    }
  });
});

// test shape
// [
//   [
//     pointType.newBrick,
//     pointType.newBrick,
//     pointType.newBrick,
//     pointType.newBrick
//   ]
// ]

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getShape = __webpack_require__(19);

Object.defineProperty(exports, 'getShape', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getShape).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _enum = __webpack_require__(1);

var _utils = __webpack_require__(0);

var newBrick = _enum.pointType.newBrick,
    empty = _enum.pointType.empty;


var shapes = [[[newBrick, newBrick, newBrick], [empty, empty, newBrick]], [[newBrick, newBrick, newBrick, newBrick]], [[newBrick, newBrick, newBrick], [empty, newBrick, empty]], [[newBrick, newBrick], [newBrick, newBrick]]];

shapes.forEach(function (item) {
  var rotate1 = (0, _utils.rotateArray)(item);
  var rotate2 = (0, _utils.rotateArray)(rotate1);
  var rotate3 = (0, _utils.rotateArray)(rotate2);
  shapes = shapes.concat([rotate1, rotate2, rotate3]);
});

module.exports = shapes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buildEnum = __webpack_require__(18);

var _buildEnum2 = _interopRequireDefault(_buildEnum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {
  start: 1,
  over: 0,
  free: 2, // 空闲状态，等待新方块的插入
  running: 3 // 正常运行中
};

module.exports = (0, _buildEnum2.default)(obj);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _buildEnum = __webpack_require__(18);

var _buildEnum2 = _interopRequireDefault(_buildEnum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {
  empty: 0,
  newBrick: 1,
  oldBrick: 2
};

module.exports = (0, _buildEnum2.default)(obj);

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 一个针对性很强的深拷贝
 * @param {matrix} arg
 */
module.exports = function (arg /*: matrix*/) /*: matrix*/ {
  return [].concat(_toConsumableArray(arg.map(function (row /*: arr*/) /*: arr*/ {
    return [].concat(_toConsumableArray(row));
  })));
};

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var cache = {}; // 添加一个缓存对象

module.exports = function (arg /*: matrix*/, bottom /*: boolean*/) {
  var key = (0, _.matrixString)(arg);

  if (cache[key]) return cache[key];

  return cache[key] = (0, _.rotateArray)(arg).map(filterIndex(bottom));
};

/**
 * 获取每一列对应的下标
 * @param {boolean} bottom
 */
function filterIndex(bottom /*: boolean*/) {
  return function (row /*: arr*/) /*: number*/ {
    var result = getIndex(bottom ? row : [].concat(row).reverse());
    return bottom ? result >= 0 ? row.length - result : result : result === -1 ? row.length : result;
  };
}

/**
 * 获取当前下标，如果没有则返回-1
 * @param {martix} arr
 * @param {number} index
 */
function getIndex(arr /*: arr*/) /*: number*/ {
  var index /*: number*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (index >= arr.length) return -1;

  return arr[index] ? index : getIndex(arr, index + 1);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arr /*: matrix*/) /*: string*/ {
  return arr.map(function (row) {
    return row.join('');
  }).join('|');
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (arg /*: matrix*/) /*: matrix*/ {
  var rowLen = arg.length;
  var colLen = arg[0].length;

  var newArg = new Array(colLen).fill(0).map(function (_) {
    return new Array(rowLen).fill(0);
  });

  arg = [].concat(arg).reverse();

  newArg.forEach(function (row, rowIndex) {
    row.forEach(function (_, col) {
      newArg[rowIndex][col] = arg[col][rowIndex];
    });
  });

  return newArg;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enum = __webpack_require__(1);

var _utils = __webpack_require__(0);

var _Game = __webpack_require__(3);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderCanvas = function () {
  function RenderCanvas(canvas /*: HTMLCanvasElement*/) {
    _classCallCheck(this, RenderCanvas);

    if (!canvas) return;

    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;

    // clone elements
    var backCanvas = this.backCanvas = canvas.cloneNode(true);
    var offsetTop = canvas.offsetTop,
        offsetLeft = canvas.offsetLeft;

    backCanvas.setAttribute('id', (canvas.getAttribute('id') || '_canvas') + '_back');
    canvas.parentElement && canvas.parentElement.appendChild(backCanvas);
    backCanvas.style.position = 'absolute';
    backCanvas.style.top = offsetTop + 'px';
    backCanvas.style.left = offsetLeft + 'px';
    backCanvas.style.zIndex = '2';
    this.backContext = backCanvas.getContext('2d');

    var brickCanvas = this.brickCanvas = canvas.cloneNode(true);
    brickCanvas.setAttribute('id', (canvas.getAttribute('id') || '_canvas') + '_brick');
    canvas.parentElement && canvas.parentElement.appendChild(brickCanvas);
    brickCanvas.style.position = 'absolute';
    brickCanvas.style.top = offsetTop + 'px';
    brickCanvas.style.left = offsetLeft + 'px';
    brickCanvas.style.zIndex = '3';
    this.brickContext = brickCanvas.getContext('2d');
  }

  _createClass(RenderCanvas, [{
    key: 'render',
    value: function render(game /*: Game*/) {
      var matrix = game.matrix,
          brick = game.brick,
          oldBrickColor = game.oldBrickColor,
          backColor = game.backColor;
      var width = this.width,
          height = this.height,
          context = this.context,
          backContext = this.backContext,
          brickContext = this.brickContext;


      if (!matrix) return;

      var firstLine = matrix[0];

      if (!firstLine) return;

      this.renderBack(backColor);

      var cellWidth = width / firstLine.length;
      var cellHeight = height / matrix.length;

      var _ref = brick || {},
          brickColor = _ref.color;

      var backPoints = (0, _utils.matrixString)(matrix.map(function (row) {
        return row && row.map(function (col) {
          return Number(col === _enum.pointType.oldBrick);
        });
      }));

      var sameBack = this.lastBackPoints && backPoints === this.lastBackPoints;

      if (!sameBack) {
        this.cleanBack();
      }

      this.cleanBrick();

      // render brick
      matrix.forEach(function (row, rowIndex) {
        row && row.forEach(function (col, colIndex) {
          switch (col) {
            case _enum.pointType.newBrick:
              brickContext.fillStyle = brickColor;
              brickContext.fillRect(colIndex * cellWidth, rowIndex * cellHeight, cellWidth, cellHeight);
              break;
            case _enum.pointType.oldBrick:
              backContext.fillStyle = oldBrickColor;

              backContext.fillRect(colIndex * cellWidth, rowIndex * cellHeight, cellWidth, cellHeight);
              break;
            default:
              return;
          }
        });
      });
    }
  }, {
    key: 'renderBack',
    value: function renderBack() {
      var backColor /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'gray';
      var context = this.context,
          width = this.width,
          height = this.height;


      context.fillStyle = backColor;
      context.fillRect(0, 0, width, height);
    }
  }, {
    key: 'cleanBrick',
    value: function cleanBrick() {
      this.brickCanvas.width = this.brickCanvas.width;
    }
  }, {
    key: 'cleanBack',
    value: function cleanBack() {
      this.backCanvas.width = this.backCanvas.width;
    }
  }]);

  return RenderCanvas;
}();

exports.default = RenderCanvas;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RenderCanvas = __webpack_require__(15);

Object.defineProperty(exports, 'RenderCanvas', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RenderCanvas).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

module.exports = function (obj) {
  var newObj = {};

  Object.entries(Object.assign(newObj, obj)).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        value = _ref2[0],
        key = _ref2[1];

    return newObj[key] = value;
  });

  return newObj;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _shapes2.default[Math.random() * len | 0];
};

var _shapes = __webpack_require__(6);

var _shapes2 = _interopRequireDefault(_shapes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var len = _shapes2.default.length;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
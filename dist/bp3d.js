(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bp3d", [], factory);
	else if(typeof exports === 'object')
		exports["bp3d"] = factory();
	else
		root["bp3d"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Bin {

  constructor(name, w, h, d, mw) {
    this.name = '';
    this.width = 0;
    this.height = 0;
    this.depth = 0;
    this.maxWeight = 0;
    this.items = [];

    this.name = name;
    this.width = w;
    this.height = h;
    this.depth = d;
    this.maxWeight = mw;
  }

  getName() {
    return this.name;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getDepth() {
    return this.depth;
  }

  getMaxWeight() {
    return this.maxWeight;
  }

  getItems() {
    return this.items;
  }

  getVolume() {
    return this.getWidth() * this.getHeight() * this.getDepth();
  }

  putItem(item, p) {
    let box = this;
    let fit = false;

    item.position = p;
    for (let i = 0; i < 6; i++) {
      item.rotationType = i;
      let d = item.getDimension();

      if (box.getWidth() < p[0] + d[0] || box.getHeight() < p[1] + d[1] || box.getDepth() < p[2] + d[2]) {
        continue;
      }

      fit = true;

      for (let j = 0; j < box.items.length; j++) {
        let _j = box.items[j];
        if (_j.intersect(item)) {
          fit = false;
          break;
        }
      }

      if (fit) {
        box.items.push(item);
      }

      return fit;
    }

    return fit;
  }

}
/* unused harmony export default */


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const RotationType_WHD = 0;
/* unused harmony export RotationType_WHD */

const RotationType_HWD = 1;
/* unused harmony export RotationType_HWD */

const RotationType_HDW = 2;
/* unused harmony export RotationType_HDW */

const RotationType_DHW = 3;
/* unused harmony export RotationType_DHW */

const RotationType_DWH = 4;
/* unused harmony export RotationType_DWH */

const RotationType_WDH = 5;
/* unused harmony export RotationType_WDH */


const WidthAxis = 0;
/* harmony export (immutable) */ __webpack_exports__["d"] = WidthAxis;

const HeightAxis = 1;
/* harmony export (immutable) */ __webpack_exports__["b"] = HeightAxis;

const DepthAxis = 2;
/* harmony export (immutable) */ __webpack_exports__["a"] = DepthAxis;


const StartPosition = [0, 0, 0];
/* harmony export (immutable) */ __webpack_exports__["c"] = StartPosition;


const RotationTypeStrings = {
  [RotationType_WHD]: 'RotationType_WHD (w,h,d)',
  [RotationType_HWD]: 'RotationType_HWD (h,w,d)',
  [RotationType_HDW]: 'RotationType_HDW (h,d,w)',
  [RotationType_DHW]: 'RotationType_DHW (d,h,w)',
  [RotationType_DWH]: 'RotationType_DWH (d,w,h)',
  [RotationType_WDH]: 'RotationType_WDH (w,d,h)'
};
/* unused harmony export RotationTypeStrings */


class Item {
  // x, y, z

  constructor(name, w, h, d, wg) {
    this.name = '';
    this.width = 0;
    this.height = 0;
    this.depth = 0;
    this.weight = 0;
    this.rotationType = RotationType_WHD;
    this.position = [];

    this.name = name;
    this.width = w;
    this.height = h;
    this.depth = d;
    this.weight = wg;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getDepth() {
    return this.depth;
  }

  getWeight() {
    return this.weight;
  }

  getRotationType() {
    return this.rotationType;
  }

  getRotationTypeString() {
    return RotationTypeStrings[this.getRotationType()];
  }

  getDimension() {
    let d;
    switch (this.rotationType) {
      case RotationType_WHD:
        d = [this.getWidth(), this.getHeight(), this.getDepth()];
        break;
      case RotationType_HWD:
        d = [this.getHeight(), this.getWidth(), this.getDepth()];
        break;
      case RotationType_HDW:
        d = [this.getHeight(), this.getDepth(), this.getWidth()];
        break;
      case RotationType_DHW:
        d = [this.getDepth(), this.getHeight(), this.getWidth()];
        break;
      case RotationType_DWH:
        d = [this.getDepth(), this.getWidth(), this.getHeight()];
        break;
      case RotationType_WDH:
        d = [this.getWidth(), this.getDepth(), this.getHeight()];
        break;
    }
    return d;
  }

  intersect(i2) {
    return rectIntersect(this, i2, WidthAxis, HeightAxis) && rectIntersect(this, i2, HeightAxis, DepthAxis) && rectIntersect(this, i2, WidthAxis, DepthAxis);
  }

  getVolume() {
    return this.getWidth() * this.getHeight() * this.getDepth();
  }
}
/* unused harmony export default */


const rectIntersect = (i1, i2, x, y) => {
  let d1, d2, cx1, cy1, cx2, cy2, ix, iy;

  d1 = i1.getDimension();
  d2 = i2.getDimension();

  cx1 = i1.position[x] + d1[x] / 2;
  cy1 = i1.position[y] + d1[y] / 2;
  cx2 = i2.position[x] + d2[x] / 2;
  cy2 = i2.position[y] + d2[y] / 2;

  ix = Math.max(cx1, cx2) - Math.min(cx1, cx2);
  iy = Math.max(cy1, cy2) - Math.min(cy1, cy2);

  return ix < (d1[x] + d2[x]) / 2 && iy < (d1[y] + d2[y]) / 2;
};
/* unused harmony export rectIntersect */


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__2D__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__3D__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BP2D", function() { return __WEBPACK_IMPORTED_MODULE_0__2D__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BP3D", function() { return __WEBPACK_IMPORTED_MODULE_1__3D__["default"]; });





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bin__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Item__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Packer__ = __webpack_require__(4);
/* unused harmony reexport Bin */
/* unused harmony reexport Item */
/* unused harmony reexport Packer */






/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bin__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Item__ = __webpack_require__(1);



class Packer {
  constructor() {
    this.bins = [];
    this.items = [];
    this.unfitItems = [];
  }

  addBin(bin) {
    this.bins.push(bin);
  }

  addItem(item) {
    this.items.push(item);
  }

  findFittedBin(i) {
    for (let _i = 0; _i < this.bins.length; _i++) {
      let b = this.bins[_i];

      if (!b.putItem(i, __WEBPACK_IMPORTED_MODULE_1__Item__["c" /* StartPosition */])) {
        continue;
      }

      if (b.items.length === 1 && b.items[0] === i) {
        b.items = [];
      }

      return b;
    }
    return null;
  }

  getBiggerBinThan(b) {
    let v = b.getVolume();
    for (let _i = 0; _i < this.bins; _i++) {
      let b2 = this.bins[_i];
      if (b2.getVolume() > v) {
        return b2;
      }
    }
    return null;
  }

  unfitItem() {
    if (this.items.length === 0) {
      return;
    }
    this.unfitItems.push(this.items[0]);
    this.items.splice(0, 1);
  }

  packToBin(b, items) {
    let fitted = false;
    let b2 = null;
    let unpacked = [];
    let fit = b.putItem(items[0], __WEBPACK_IMPORTED_MODULE_1__Item__["c" /* StartPosition */]);

    if (!fit) {
      let b2 = this.getBiggerBinThan(b);
      if (b2) {
        return this.packToBin(b2, items);
      }
      return this.items;
    }

    // Pack unpacked items.
    for (let _i = 1; _i < this.items.length; _i++) {
      let item = this.items[_i];

      // Try available pivots in current bin that are not intersect with
      // existing items in current bin.
      lookup: for (let _pt = 0; _pt < 3; _pt++) {
        for (let _j = 0; _j < b.items.length; _j++) {
          let pv;
          let ib = b.items[_j];
          switch (_pt) {
            case __WEBPACK_IMPORTED_MODULE_1__Item__["d" /* WidthAxis */]:
              pv = [ib.position[0] + ib.getWidth(), ib.position[1], ib.position[2]];
              break;
            case __WEBPACK_IMPORTED_MODULE_1__Item__["b" /* HeightAxis */]:
              pv = [ib.position[0], ib.position[1] + ib.getHeight(), ib.position[2]];
              break;
            case __WEBPACK_IMPORTED_MODULE_1__Item__["a" /* DepthAxis */]:
              pv = [ib.position[0], ib.position[1], ib.position[2] + ib.getDepth()];
              break;
          }

          if (b.putItem(item, pv)) {
            fitted = true;
            break lookup;
          }
        }
      }

      if (!fitted) {
        while (b2 !== null) {
          b2 = this.getBiggerBinThan(b);
          if (b2) {
            b2.items.push(item);
            let left = this.packToBin(b2, b2.items);
            if (left.length === 0) {
              b = b2;
              fitted = true;
              break;
            }
          }
        }

        if (!fitted) {
          unpacked.push(item);
        }
      }
    }

    return unpacked;
  }

  pack() {
    this.bins.sort((a, b) => {
      return a.getVolume() > b.getVolume();
    });

    this.items.sort((a, b) => {
      return a.getVolume() > b.getVolume();
    });

    while (this.items.length > 0) {
      let bin = this.findFittedBin(this.items[0]);

      if (bin === null) {
        this.unfitItem();
        continue;
      }

      this.items = this.packToBin(bin, this.items);
    }

    return null;
  }
}
/* unused harmony export default */


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bin__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Box__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Packer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heuristics__ = __webpack_require__(15);
/* unused harmony reexport Bin */
/* unused harmony reexport Box */
/* unused harmony reexport Packer */
/* unused harmony reexport heuristics */







/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Score {

  constructor(score_1, score_2) {
    this.score_1 = 0;
    this.score_2 = 0;

    this.score_1 = score_1 || 0;
    this.score_2 = score_2 || 0;
  }

  compare(other) {
    if (this.score_1 > other.score_1 || this.score_1 === other.score_1 && this.score_2 > other.score_2) return -1;else if (this.score_1 < other.score_1 || this.score_1 === other.score_1 && this.score_2 < other.score_2) return 1;else return 0;
  }

  assign(other) {
    this.score_1 = other.score_1;
    this.score_2 = other.score_2;
  }

  isBlank() {
    return this.score_1 === 0;
  }

  decreaseBy(delta) {
    this.score_1 += delta;
    this.score_2 += delta;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Score;

Score.MAX_INT = Number.MAX_SAFE_INTEGER;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heuristics_BestShortSideFit__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



class Bin {

  constructor(width, height, heuristic) {
    this.width = null;
    this.height = null;
    this.boxes = [];
    this.heuristic = null;
    this.freeRectangles = [];

    this.width = width;
    this.height = height;
    this.freeRectangles = [new FreeSpaceBox(width, height)];
    this.heuristic = heuristic || new __WEBPACK_IMPORTED_MODULE_0__heuristics_BestShortSideFit__["a" /* default */]();
    this.area = width * height;
  }

  get efficiency() {
    let boxesArea = 0;
    this.boxes.forEach(box => {
      boxesArea += box.area;
    });
    return boxesArea * 100 / this.area;
  }

  insert(box) {
    if (box.packed) return false;

    this.heuristic.findPositionForNewNode(box, this.freeRectangles);
    if (!box.packed) return false;
    let numRectanglesToProcess = this.freeRectangles.length;
    let i = 0;

    while (i < numRectanglesToProcess) {
      if (this.splitFreeNode(this.freeRectangles[i], box)) {
        this.freeRectangles.splice(i, 1);
        numRectanglesToProcess--;
      } else {
        i++;
      }
    }

    this.pruneFreeList();
    this.boxes.push(box);

    return true;
  }

  scoreFor(box) {
    return this.heuristic.findPositionForNewNode(_extends({}, box), this.freeRectangles);
  }

  isLargerThan(box) {
    return this.width >= box.width && this.height >= box.height || this.height >= box.width && this.width >= box.height;
  }

  label() {
    return `${this.width}x${this.height} ${this.efficiency}%`;
  }

  splitFreeNode(freeNode, usedNode) {
    // Test with SAT if the rectangles even intersect.
    if (usedNode.x >= freeNode.x + freeNode.width || usedNode.x + usedNode.width <= freeNode.x || usedNode.y >= freeNode.y + freeNode.height || usedNode.y + usedNode.height <= freeNode.y) {
      return false;
    }

    this.trySplitFreeNodeVertically(freeNode, usedNode);
    this.trySplitFreeNodeHorizontally(freeNode, usedNode);

    return true;
  }

  trySplitFreeNodeVertically(freeNode, usedNode) {
    if (usedNode.x < freeNode.x + freeNode.width && usedNode.x + usedNode.width < freeNode.x) {
      this.tryLeaveFreeSpaceAtTop(freeNode, usedNode);
      this.tryLeaveFreeSpaceAtBottom(freeNode, usedNode);
    }
  }

  tryLeaveFreeSpaceAtTop(freeNode, usedNode) {
    if (usedNode.y > freeNode.y && usedNode.y < freeNode.y + freeNode.height) {
      let newNode = _extends({}, freeNode);
      newNode.height = usedNode.y - newNode.y;
      this.freeRectangles.push(newNode);
    }
  }

  tryLeaveFreeSpaceAtBottom(freeNode, usedNode) {
    if (usedNode.y + usedNode.height < freeNode.y + freeNode.height) {
      let newNode = _extends({}, freeNode);
      newNode.y = usedNode.y + usedNode.height;
      newNode.height = freeNode.y + freeNode.height - (usedNode.y + usedNode.height);
      this.freeRectangles.push(newNode);
    }
  }

  trySplitFreeNodeHorizontally(freeNode, usedNode) {
    if (usedNode.y < freeNode.y + freeNode.height && usedNode.y + usedNode.height > freeNode.y) {
      this.tryLeaveFreeSpaceOnLeft(freeNode, usedNode);
      this.tryLeaveFreeSpaceOnRight(freeNode, usedNode);
    }
  }

  tryLeaveFreeSpaceOnLeft(freeNode, usedNode) {
    if (usedNode.x > freeNode.x && usedNode.x < freeNode.x + freeNode.width) {
      let newNode = _extends({}, freeNode);
      newNode.width = usedNode.x - newNode.y;
      this.freeRectangles.push(newNode);
    }
  }

  tryLeaveFreeSpaceOnRight(freeNode, usedNode) {
    if (usedNode.x + usedNode.width < freeNode.x + freeNode.width) {
      let newNode = _extends({}, freeNode);
      newNode.x = usedNode.x + usedNode.width;
      newNode.width = freeNode.x + freeNode.width - (usedNode.x + usedNode.width);
      this.freeRectangles.push(newNode);
    }
  }

  /**
   * Goes through the free rectangle list and removes any redundant entries.
   */
  pruneFreeList() {
    let i = 0;
    while (i < this.freeRectangles.length) {
      let j = i + 1;
      if (j === this.freeRectangles.length) {
        break;
      }
      while (j < this.freeRectangles.length) {
        if (this.isContainedIn(this.freeRectangles[i], this.freeRectangles[j])) {
          this.freeRectangles.splice(i, 1);
          i--;
          break;
        }
        if (this.isContainedIn(this.freeRectangles[j], this.freeRectangles[i])) {
          this.freeRectangles.splice(j, 1);
        } else {
          j++;
        }
        i++;
      }
    }
  }

  isContainedIn(rectA, rectB) {
    return rectA.x >= rectB.x && rectA.y >= rectB.y && rectA.x + rectA.width <= rectB.x + rectB.width && rectA.y + rectA.height <= rectB.y + rectB.height;
  }
}
/* unused harmony export default */


class FreeSpaceBox {

  constructor(width, height) {
    this.x = 0;
    this.y = 0;
    this.width = null;
    this.height = null;

    this.width = width;
    this.height = height;
  }

}
/* unused harmony export FreeSpaceBox */


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Score__ = __webpack_require__(6);



class BestShortSideFit extends __WEBPACK_IMPORTED_MODULE_0__Base__["a" /* default */] {

  calculateScore(freeRect, rectWidth, rectHeight) {
    let leftOverHoriz = Math.abs(freeRect.width - rectWidth);
    let leftOverVert = Math.abs(freeRect.height - rectHeight);
    let args = [leftOverHoriz, leftOverVert].sort((a, b) => a - b);
    let score = new __WEBPACK_IMPORTED_MODULE_1__Score__["a" /* default */](args[0], args[1]);
    return score;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BestShortSideFit;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(6);


class Base {

  findPositionForNewNode(box, freeRects) {
    let bestScore = new __WEBPACK_IMPORTED_MODULE_0__Score__["a" /* default */]();
    let width = box.width;
    let height = box.height;

    freeRects.forEach(freeRect => {
      this.tryPlaceRectIn(freeRect, box, width, height, bestScore);
      this.tryPlaceRectIn(freeRect, box, height, width, bestScore);
    });

    return bestScore;
  }

  tryPlaceRectIn(freeRect, box, rectWidth, rectHeight, bestScore) {
    if (freeRect.width >= rectWidth && freeRect.height >= rectHeight) {
      let score = this.calculateScore(freeRect, rectWidth, rectHeight);
      if (score.compare(bestScore) <= 0) {
        box.x = freeRect.x;
        box.y = freeRect.y;
        box.width = rectWidth;
        box.height = rectHeight;
        box.packed = true;
        bestScore.assign(score);
      }
    }
  }

  calculateScore(freeRect, rectWidth, rectHeight) {
    throw "NotImplementedError";
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Base;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Box {

  constructor(width, height) {
    this.width = null;
    this.height = null;
    this.area = null;
    this.x = 0;
    this.y = 0;
    this.packed = false;

    this.width = width;
    this.height = height;
    this.area = this.width * this.height;
  }

  rotate() {
    let { width, height } = this;
    this.width = height;
    this.height = width;
  }

  label() {
    return `${this.width}x${this.height} at [${this.x},${this.y}]`;
  }

}
/* unused harmony export default */


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Score__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ScoreBoard__ = __webpack_require__(12);



class Packer {

  constructor(bins) {
    this.bins = [];
    this.unpackedBoxes = [];

    this.bins = bins;
  }

  pack(boxes, options = {}) {
    let packedBoxes = [];
    let entry;
    boxes = boxes.filter(box => !box.packed);
    if (boxes.length === 0) return packedBoxes;

    let limit = options.limit || 100;
    let board = new __WEBPACK_IMPORTED_MODULE_1__ScoreBoard__["a" /* default */](this.bins, boxes);
    while (entry = board.bestFit()) {
      entry.bin.insert(entry.box);
      board.removeBox(entry.box);
      board.recalculateBin(entry.bin);
      packedBoxes.push(entry.box);
      if (packedBoxes.length >= limit) {
        break;
      }
    };

    return packedBoxes;
  }

}
/* unused harmony export default */


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ScoreBoardEntry__ = __webpack_require__(13);
// #       box_1 box_2 box_3 ...
// # bin_1  100   200    0
// # bin_2   0     5     0
// # bin_3   9    100    0
// # ...


class ScoreBoard {

  constructor(bins, boxes) {
    this.entries = [];

    bins.forEach(bin => {
      this.addBinEntries(bin, boxes);
    });
  }

  addBinEntries(bin, boxes) {
    boxes.forEach(box => {
      let entry = new __WEBPACK_IMPORTED_MODULE_0__ScoreBoardEntry__["a" /* default */](bin, box);
      entry.calculate();
      this.entries.push(entry);
    });
  }

  any() {
    return this.boxes.some(box => box);
  }

  largestNotFitingBox() {
    let unfit = null;
    let fittingBoxes = this.entries.filter(entry => entry.fit).map(entry => entry.box);

    this.entries.forEach(entry => {
      if (!this.fittingBoxes.contains(entry.box)) {
        return;
      }
      if (unfit === null || unfit.box.area < entry.box.area) {
        this.unfit = entry;
      }
    });

    return unfit.box ? unfit : false;
  }

  bestFit() {
    let best = null;
    for (let i = 0; i < this.entries.length; i++) {
      let entry = this.entries[i];
      if (!entry.fit()) {
        continue;
      }
      if (best === null || entry.score.compare(best.score) <= 0) {
        best = entry;
      }
    }
    return best;
  }

  removeBox(box) {
    this.entries = this.entries.filter(entry => {
      return entry.box !== box;
    });
  }

  addBin(bin) {
    this.addBinEntries(bin, this.currentBoxes());
  }

  recalculateBin(bin) {
    this.entries.filter(entry => entry.bin === bin).forEach(entry => entry.calculate());
  }

  currentBoxes() {
    return [...new Set(this.entries.map(entry => entry.box))];
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScoreBoard;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ScoreBoardEntry {

  constructor(bin, box) {
    this.bin = null;
    this.box = null;
    this.score = null;

    this.bin = bin;
    this.box = box;
  }

  calculate() {
    this.score = this.bin.scoreFor(this.box);
    return this.score;
  }

  fit() {
    return !this.score.isBlank();
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ScoreBoardEntry;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Score__ = __webpack_require__(6);



class BestAreaFit extends __WEBPACK_IMPORTED_MODULE_0__Base__["a" /* default */] {

  calculateScore(freeRect, rectWidth, rectHeight) {
    let areaFit = freeRect.width * freeRect.height - rectWidth * rectHeight;
    let leftOverHoriz = Math.abs(freeRect.width - rectWidth);
    let leftOverVert = Math.abs(freeRect.height - rectHeight);
    let shortSideFit = Math.min(leftOverHoriz, leftOverVert);
    return new __WEBPACK_IMPORTED_MODULE_1__Score__["a" /* default */](areaFit, shortSideFit);
  }

}
/* unused harmony export default */


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BestAreaFit__ = __webpack_require__(14);
/* unused harmony reexport BestAreaFit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BestLongSideFit__ = __webpack_require__(16);
/* unused harmony reexport BestLongSideFit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BestShortSideFit__ = __webpack_require__(8);
/* unused harmony reexport BestShort */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BottomLeft__ = __webpack_require__(17);
/* unused harmony reexport BottomLeft */





/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Score__ = __webpack_require__(6);



class BestLongSideFit extends __WEBPACK_IMPORTED_MODULE_0__Base__["a" /* default */] {

  calculateScore(freeRect, rectWidth, rectHeight) {
    let leftOverHoriz = Math.abs(freeRect.width - rectWidth);
    let leftOverVert = Math.abs(freeRect.height - rectHeight);
    let args = [leftOverHoriz, leftOverVert].sort((a, b) => a - b).reverse();
    return new __WEBPACK_IMPORTED_MODULE_1__Score__["a" /* default */](args[0], args[1]);
  }

}
/* unused harmony export default */


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Score__ = __webpack_require__(6);



class BottomLeft extends __WEBPACK_IMPORTED_MODULE_0__Base__["a" /* default */] {

  calculateScore(freeRect, rectWidth, rectHeight) {
    let topSideY = freeRect.y + rectHeight;
    return new __WEBPACK_IMPORTED_MODULE_1__Score__["a" /* default */](topSideY, freeRect.x);
  }

}
/* unused harmony export default */


/***/ })
/******/ ]);
});
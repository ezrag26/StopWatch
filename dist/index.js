"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Time = function Time(milliseconds) {
  var ms = milliseconds % 1000;
  var seconds = Math.floor(milliseconds / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  return {
    ms: ms,
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days
  };
};

var LeadingZeros = function LeadingZeros(num, digits) {
  var zeros = '';

  while (--digits) {
    zeros += '0';
    if (num < 1 + zeros) num = '0' + num;
  }

  return num;
};

var Clock = function Clock(_ref) {
  var milliseconds = _ref.milliseconds;
  var time = Time(milliseconds);
  var ms = time.ms;
  var seconds = time.seconds % 60;
  var minutes = time.minutes % 60;
  var hours = time.hours % 24;
  var days = time.days % 365;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '3em'
    }
  }, /*#__PURE__*/_react["default"].createElement("table", {
    border: 'solid 1px black',
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, LeadingZeros(days, 3)), /*#__PURE__*/_react["default"].createElement("td", null, LeadingZeros(hours, 2)), /*#__PURE__*/_react["default"].createElement("td", null, LeadingZeros(minutes, 2)), /*#__PURE__*/_react["default"].createElement("td", null, LeadingZeros(seconds, 2)), /*#__PURE__*/_react["default"].createElement("td", null, LeadingZeros(ms, 3)))), /*#__PURE__*/_react["default"].createElement("tfoot", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "DAYS"), /*#__PURE__*/_react["default"].createElement("td", null, "HOURS"), /*#__PURE__*/_react["default"].createElement("td", null, "MINS"), /*#__PURE__*/_react["default"].createElement("td", null, "SECS"), /*#__PURE__*/_react["default"].createElement("td", null, "MS"))))));
};

var StopWatch = function StopWatch() {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      timestamps = _useState2[0],
      setTimestamps = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      time = _useState4[0],
      setTime = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      intervalId = _useState6[0],
      setIntervalId = _useState6[1];

  var isEven = function isEven(num) {
    return num % 2 === 0;
  };

  var addTimestamp = function addTimestamp() {
    setTimestamps(timestamps.concat(Date.now()));
  };

  var startPauseButtonText = function startPauseButtonText() {
    return isEven(timestamps.length) ? 'Start' : 'Pause';
  };

  var startPauseBackgroundColor = function startPauseBackgroundColor() {
    return isEven(timestamps.length) ? 'green' : 'red';
  };

  var removeAllTimestamps = function removeAllTimestamps() {
    setTimestamps([]);
  };

  var start = function start() {
    var acc = timestamps.reduce(function (acc, val, i) {
      return isEven(i) ? acc - val : acc + val;
    }, 0);
    setIntervalId(setInterval(function () {
      setTime(acc + Date.now());
    }, 10));
  };

  var pause = function pause() {
    clearInterval(intervalId);
  };

  var reset = function reset() {
    clearInterval(intervalId);
    setTime(0);
  };

  (0, _react.useEffect)(function () {
    if (!isEven(timestamps.length)) start();else if (timestamps.length > 0) pause();else reset();
  }, [timestamps]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Clock, {
    milliseconds: time
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: '30px'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: addTimestamp,
    style: {
      backgroundColor: startPauseBackgroundColor()
    }
  }, startPauseButtonText()), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: removeAllTimestamps,
    style: {
      backgroundColor: 'lightblue'
    }
  }, "Reset")));
};

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(StopWatch, null), document.querySelector('#root'));
//# sourceMappingURL=index.js.map
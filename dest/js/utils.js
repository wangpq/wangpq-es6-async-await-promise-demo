"use strict";var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var Animal = function () {
  function Animal() {_classCallCheck(this, Animal);
    console.log("==constructor animal==");
  }_createClass(Animal, [{ key: "sayHello", value: function sayHello()

    {
      return "hello,Animal";
    } }]);return Animal;}();


var GztUtils = {
  add: function add(x, y) {
    return x + y;
  } };var



Circle = function () {
  function Circle() {var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;_classCallCheck(this, Circle);
    this.PI = 3.14;
    this.nR = radius;
    this.sMessage = "半径为" + this.nR + "的圆面积:";
  }_createClass(Circle, [{ key: "getArea", value: function getArea()
    {
      return this.PI * this.nR * this.nR;
    } }, { key: "sayCircleArea", value: function sayCircleArea()
    {
      return this.sMessage + this.getArea();
    } }]);return Circle;}();


module.exports = {
  Animal: Animal,
  GztUtils: GztUtils,
  Circle: Circle };
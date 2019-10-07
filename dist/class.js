"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Generic1 = /** @class */ (function () {
    function Generic1(type) {
        this.type = type;
    }
    return Generic1;
}());
var Imp1 = /** @class */ (function (_super) {
    __extends(Imp1, _super);
    function Imp1() {
        return _super.call(this, "implementation 1") || this;
    }
    Imp1.prototype.log = function (text) {
        console.log(text);
    };
    return Imp1;
}(Generic1));
exports.Imp1 = Imp1;
var instance1 = new Imp1();
instance1.log(instance1.type);
var Generic2 = /** @class */ (function () {
    function Generic2(type) {
        this.type = type;
    }
    Generic2.prototype.getType = function () {
        return this.type;
    };
    return Generic2;
}());
var Imp2 = /** @class */ (function (_super) {
    __extends(Imp2, _super);
    function Imp2() {
        return _super.call(this, "implementation 2") || this;
    }
    Imp2.prototype.log = function (text) {
        console.log(text);
    };
    Imp2.prototype.printType = function () {
        this.log(_super.prototype.getType.call(this));
    };
    return Imp2;
}(Generic2));
exports.Imp2 = Imp2;
var instance2 = new Imp2();
instance2.log(instance2.getType());
var instance3 = new Imp2();
instance3.log("instance of interface");
var instance4 = new Imp2();
instance4.printType();

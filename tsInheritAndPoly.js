var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Inherit = /** @class */ (function () {
    function Inherit(name) {
        this.name = name;
    }
    Inherit.prototype.greet = function () {
        console.log('lets try inheritance');
    };
    return Inherit;
}());
var b = new Inherit('madhu');
b.greet();
var InheritExtend = /** @class */ (function (_super) {
    __extends(InheritExtend, _super);
    function InheritExtend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InheritExtend.prototype.greet = function () {
        console.log('inheritance achieved');
    };
    InheritExtend.prototype.greetNormal = function () {
        _super.prototype.greet.call(this);
    };
    return InheritExtend;
}(Inherit));
var a = new InheritExtend('madhuSudhan');
a.greet();
a.greetNormal();

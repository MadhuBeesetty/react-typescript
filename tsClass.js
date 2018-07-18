var idontknowts = /** @class */ (function () {
    function idontknowts(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }
    idontknowts.prototype.display = function () {
        return this.firstName + this.secondName;
    };
    return idontknowts;
}());
var a = new idontknowts('madhuSudhan', 'beesetty');
console.log(a.display());

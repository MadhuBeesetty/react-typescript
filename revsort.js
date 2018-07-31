var fun = function (arr) {
    var a = arr.sort();
    var b = arr.reverse();
    return a.concat(b);
};
console.log(fun([5, 1, 6, 7, 2, 8]));

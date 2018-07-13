var fun = function () {
    var my = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        my[_i] = arguments[_i];
    }
    for (var i = 0; i < my.length - 1; i++) {
        console.log(my[i] + my[i + 1]);
    }
};
fun(1, 2, 3);

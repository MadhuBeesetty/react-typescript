var fun = function (arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (!obj[i]) {
            obj[i] = arr[i];
        }
        else {
            obj[i] = obj[i] + 1;
        }
    }
    console.log(obj);
};
fun([1, 2, 3, 4, 5]);

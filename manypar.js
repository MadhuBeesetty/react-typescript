var fun = function (name, i, sum) {
    if (i === void 0) { i = 0; }
    if (sum === void 0) { sum = 0; }
    if (i == name.length)
        return sum;
    sum = sum + name[i];
    return fun(name, i + 1, sum);
};
console.log(fun([123, 123, 123, 132]));

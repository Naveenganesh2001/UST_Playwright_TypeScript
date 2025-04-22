function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    // return numbers.reduce((total, num) => total + num, 0); // take 2 param data, accept
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        total += num;
    }
    return total;
}
var res = sum(1, 2, 3);
console.log(res);

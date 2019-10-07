function print(text) {
    console.log(text);
}
var lessThen = function (x, y) {
    return x < y;
};
function inc0(x, y) {
    var i = y || 0;
    return x + i;
}
function inc1(x, y) {
    if (y === void 0) { y = 1; }
    return x + y;
}
function countArray(n) {
    return n.reduce(function (x, y) { return x + y; }, 0);
}
function counNumbers() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (x, y) { return x + y; }, 0);
}
print("functions!");
console.log(lessThen(1, 2));
console.log(inc0(4, 1));
console.log(inc0(5));
console.log(inc1(4));
console.log(countArray([1, 2, 3]));
console.log(counNumbers(1, 2, 3));
// arrow functions
var letters = ["a", "b", "c"];
var aLetter;
aLetter = letters.filter(function (l) {
    return l === "a";
});
console.log(aLetter);
aLetter = letters.filter(function (l) { return l === "a"; });
console.log(aLetter);
var moreThen;
moreThen = function (x, y) { return x > y; };
console.log(moreThen(1, 2));

function add(a, b) {
    return a + b;
}
var f = add(10, 20);
console.log(f);
function multiply(c, d) {
    return c * d;
}
var e = multiply(12.2, 2);
console.log(e);
var anoAdd = function (a, b) {
    return a + b;
};
var res = anoAdd(100, 20);
console.log(res);
var anoAdd1 = function (a, b) {
    return a + b;
};
var res1 = anoAdd1(1000, 210);
console.log(res1);
function fun(shouldinitialize) {
    if (shouldinitialize) {
        var x = 10;
    }
    return x;
}
console.log(fun(true));
console.log("--------");
var student = {
    rollno: 127,
    name: "Parul Singh",
    percentage: 88
};
console.log(student);
student.rollno = 91;
console.log(student);

var number = [10, 20, 30, 40];
console.log(number);
var strArr = ['Mumbai', 'Delhi'];
console.log(strArr);
console.log("Size of array" + number.length);
for (var i = 0; i < number.length; i++)
    console.log(number[i]);
number.forEach(function (ele) {
    console.log(ele);
});
for (var i in strArr)
    console.log(strArr[i]);
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var i = number_1[_i];
    console.log(i);
}
var x;
x = ["Hello", 123];
console.log(x);
console.log(x[0].substr(1));

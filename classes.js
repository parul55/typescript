var Student = /** @class */ (function () {
    function Student(rollno, name) {
        this.rollno = rollno;
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log(this.rollno + " " + this.name);
    };
    return Student;
}());
var obj = new Student(12, "Parul");
obj.display();
var add1 = function (a, b) { return a + b; };
console.log(add1(10, 21));
console.log("-------------");
var message = function () {
    console.log("Hello world");
    console.log("Lambda!!");
};
message();
var raiseValue = function (x) { return x + 1; };
console.log(raiseValue(10));

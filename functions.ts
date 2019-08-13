function add(a:number,b:number):number{
    return a+b;
}
let f=add(10,20);
console.log(f);

function multiply(c,d){
    return c*d;
}
let e=multiply(12.2,2)
console.log(e);
let anoAdd = function(a:number,b:number):number{
    return a+b;
};
let res=anoAdd(100,20);
console.log(res);
let anoAdd1 : (x:number,y:number) => number = 
function(a:number,b:number):number{
    return a+b;
};
let res1=anoAdd1(1000,210);
console.log(res1);
function fun(shouldinitialize: boolean){
    if(shouldinitialize){
        var x=10
    }
    return x;
}
console.log(fun(true));
console.log("--------");
let student = {
    rollno:127,
    name : "Parul Singh",
    percentage : 88
};
console.log(student)
student.rollno=91
console.log(student);
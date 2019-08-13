let number : number[] = [10,20,30,40];
console.log(number);
let strArr : Array<string> = ['Mumbai','Delhi'];
console.log(strArr);
console.log("Size of array"+number.length);
for(let i=0;i<number.length;i++)
    console.log(number[i]);
number.forEach(ele=>{
    console.log(ele);
})
for(let i in strArr)
    console.log(strArr[i]);
for(let i of number)
    console.log(i);
let x : [string,number];
x=["Hello",123];
console.log(x);
console.log(x[0].substr(1));
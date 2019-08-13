class Student{
    rollno:number;
    name: string;
    constructor(rollno:number,name:string){
        this.rollno=rollno;
        this.name=name;
    }
    display():void{
        console.log(this.rollno+" "+this.name);
    }
}
let obj:Student =new Student(12,"Parul");
obj.display();

let add1 = (a,b) => a+b;
console.log(add1(10,21));

console.log("-------------")

let message=() =>{
    console.log("Hello world")
    console.log("Lambda!!")
}
message();

let raiseValue = x => x+1;
console.log(raiseValue(10));
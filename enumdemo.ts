enum color {red,green,blue,yellow}
let c : number = color.green;
console.log(c);
console.log(color);
let cname: string =color[1];
console.log(cname);
enum color1 {pink=1,silver,white=3,black}
console.log(color1);
enum days {monday,tuesday,wednesday,thursday,friday,saturday}
for(let e in days)
console.log(days[e]);
//color1.forEach(element => {
//    for(let i of element)
//    console.log(color1[i]);
//});

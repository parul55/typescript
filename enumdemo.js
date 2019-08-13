var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
    color[color["yellow"] = 3] = "yellow";
})(color || (color = {}));
var c = color.green;
console.log(c);
console.log(color);
var cname = color[1];
console.log(cname);
var color1;
(function (color1) {
    color1[color1["pink"] = 1] = "pink";
    color1[color1["silver"] = 2] = "silver";
    color1[color1["white"] = 3] = "white";
    color1[color1["black"] = 4] = "black";
})(color1 || (color1 = {}));
console.log(color1);
var days;
(function (days) {
    days[days["monday"] = 0] = "monday";
    days[days["tuesday"] = 1] = "tuesday";
    days[days["wednesday"] = 2] = "wednesday";
    days[days["thursday"] = 3] = "thursday";
    days[days["friday"] = 4] = "friday";
    days[days["saturday"] = 5] = "saturday";
})(days || (days = {}));
for (var e in days)
    console.log(days[e]);
//color1.forEach(element => {
//    for(let i of element)
//    console.log(color1[i]);
//});

var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c1 = Color.Green;
var c2 = 0; //0 is same as Color.Red
console.log(c1);
console.log(Color[c1]);
console.log("------------------FOR LOOP--------------------");
for (var x in Color)
    console.log(x);
console.log("------------------FOR LOOP (only values)--------------------");
for (var x in Color) {
    if (isNaN(Number(x)))
        console.log(x);
}
/*
    
    
OUTPUT:
______________________

0
Green
------------------FOR LOOP--------------------
0
1
2
Red
Green
Blue
*/ 

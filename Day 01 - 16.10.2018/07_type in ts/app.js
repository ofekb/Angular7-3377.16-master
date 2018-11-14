var Dog = /** @class */ (function () {
    function Dog() {
        this.age = 6;
    }
    return Dog;
}());
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Pink"] = 2] = "Pink";
})(Color || (Color = {}));
function func() {
    console.log("func is OK");
}
//---------------pointer to Dog---------------
var dogPointer = Dog;
console.log((new dogPointer()).age);
//---------------pointer to Color--------------
var colorPointer = Color;
console.log(colorPointer[0]);
//---------------pointer to func---------------
var funcPointer = func;
funcPointer();

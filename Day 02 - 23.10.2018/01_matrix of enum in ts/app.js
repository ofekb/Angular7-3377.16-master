var PositionType;
(function (PositionType) {
    PositionType[PositionType["center"] = 0] = "center";
    PositionType[PositionType["main"] = 1] = "main";
    PositionType[PositionType["sub"] = 2] = "sub";
    PositionType[PositionType["up"] = 3] = "up";
    PositionType[PositionType["down"] = 4] = "down";
})(PositionType || (PositionType = {}));
// get a number from the user
var num = Number(prompt("enter a number"));
// create empty matrix with the rank of the input number
var mat = new Array(num);
for (var i = 0; i < mat.length; i++) {
    mat[i] = new Array(num);
}
//fill every element in the matrix with a matching description
for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat.length; j++) {
        if ((i == j) && (i + j == (num - 1)))
            mat[i][j] = PositionType.center;
        else if (i == j)
            mat[i][j] = PositionType.main;
        else if (i + j == (num - 1))
            mat[i][j] = PositionType.sub;
        else if (i < j)
            mat[i][j] = PositionType.up;
        else
            mat[i][j] = PositionType.down;
    }
}
//create a html table that shows all the elements in the matrix
var res = "<table border='1'>";
for (var i = 0; i < mat.length; i++) {
    res += "<tr>";
    for (var j = 0; j < mat.length; j++) {
        res += "<td>" + PositionType[mat[i][j]] + "</td>";
    }
    res += "</tr>";
}
document.write(res + "</table>");

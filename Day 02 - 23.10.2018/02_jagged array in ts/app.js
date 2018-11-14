var numOfRows = 5;
var numOfColEven = 3;
var numOfColOdd = 4;
var matrix = new Array(numOfRows);
for (var i = 0; i < matrix.length; i++) {
    matrix[i] = new Array((i % 2) ? numOfColEven : numOfColOdd);
    for (var j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = i;
    }
}
console.log(matrix);



let numOfRows: number = 5;

let numOfColEven=3;
let numOfColOdd=4;


let matrix: number[][] = new Array<Array<number>>(numOfRows);

for (let i = 0; i < matrix.length; i++) {
   
    matrix[i] = new Array<number>( (i%2) ? numOfColEven : numOfColOdd);
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j]=i;
    }

}


console.log(matrix);


/*
OUTPUT:
______________________________
[ [ 0, 0, 0, 0 ],
  [ 1, 1, 1 ],
  [ 2, 2, 2, 2 ],
  [ 3, 3, 3 ],
  [ 4, 4, 4, 4 ] ]
*/
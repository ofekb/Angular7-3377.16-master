
enum PositionType{
    "center",
    "main",
    "sub",
    "up",
    "down"
}


// get a number from the user
let num: number = Number(prompt("enter a number"));


// create empty matrix with the rank of the input number
let mat: PositionType[][] = new Array<Array<PositionType>>(num);

for (let i = 0; i < mat.length; i++) {
   mat[i] = new Array<PositionType>(num);
}


//fill every element in the matrix with a matching description
for (let i = 0; i < mat.length; i++) {
   for (let j = 0; j < mat.length; j++) {
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
let res:string="<table border='1'>";

for (let i = 0; i < mat.length; i++) {
    res+="<tr>";
   for (let j = 0; j < mat.length; j++) {
     res+=`<td>${PositionType[mat[i][j]]}</td>`;
   }
   res+="</tr>";
}

document.write(res + "</table>");


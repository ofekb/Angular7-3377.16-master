enum Color {
    Red,
    Green,
    Blue
}


let c1: Color = Color.Green;

let c2: Color = 0;  //0 is same as Color.Red

console.log(c1);  
console.log(Color[c1]); 


console.log("------------------FOR LOOP--------------------");
for (let x in Color)
    console.log(x);

    console.log("------------------FOR LOOP (only values)--------------------");
    for (let x in Color){
        if(isNaN(Number(x)))
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
------------------FOR LOOP (only values)--------------------
Red
Green
Blue
*/
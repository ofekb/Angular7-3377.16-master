class Dog{
    public age:number=6;
}

enum Color {
    Black,
    Yellow,
    Pink
}


function func():void{
    console.log("func is OK");
}


//---------------pointer to Dog---------------
let dogPointer: typeof Dog=Dog
console.log((new dogPointer()).age);  //--> 6

//---------------pointer to Color--------------
let colorPointer: typeof Color=Color;
console.log(colorPointer[0]);   //--> black

//---------------pointer to func---------------
let funcPointer:()=>void=func;
funcPointer();   //--> func is OK



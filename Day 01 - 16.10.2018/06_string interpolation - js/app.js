//Unterminated string literal
/*
let str1="
Bob
Alice";
*/

//Unterminated string literal
/*
let str2='
Bob
Alice';
*/

let str3=`
Bob
Alice`;


console.log(str3);

let res1="1+1="+(1+1)+"!";
let res2='1+1='+(1+1)+'!';
let res3=`1+1=${1+1}!`;

console.log(res1);
console.log(res2);
console.log(res3);
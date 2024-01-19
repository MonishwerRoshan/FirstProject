/* LESSON - 1 */

//============================================

// alert("Hello World");
// console.log("Welcome to tutor joes");
// console.log(43);
// console.log(18.45);
// console.log(true);
// console.log([4,8,3,5]);
// console.log({name:"vijay", age:49});
// console.table({name:"vijay", age:49});
// console.error("Be Careful");
// console.warn("don't try this");
// console.time("timer");
// for(let i =0; i<5; i++){
//     console.log(i);
// }
// console.timeEnd("timer");

//============================================


/* LESSON - 2 */

//============================================

/* var, let, const - keywords*/

/* 1997 - var */
/* 2015 - ES6 - let, const */

// var a = 10;
// var b = 10;
// console.log(a + b);

/*
//=======1.Scope==========
//Note
// Var - Global Scope
// Let, Const - Local Scope

if(true){
    // var msg = ("hello world");
    // let msg = ("hello world");
    const msg = ("hello world");
    console.log(msg);
}
console.log(msg);

 */

//========2.Variable Redeclaration========

// var a = 20;
// console.log(a);

// var a = 40;
// console.log(a);

// let a = 20;
// console.log(a);

// let a = 40;
// console.log(a);

// const a = 20;
// console.log(a);

// const a = 40;
// console.log(a);

//==========3.Value Assigning==========

// var a = 20;
// console.log(a);
 
// a = 40;
// console.log(a);

// let a = 20;
// console.log(a);
 
// a = 40;
// console.log(a);

// const a = 20;
// console.log(a);
 
// a = 40;
// console.log(a);

//note - we can assign value to constant using array

// const person = {fname:"vijay",age:49};
// console.log(person);
// console.table(person);
// person.fname = "vijaykumar";
// console.log(person);
// console.table(person);

//============================================

/* LESSON - 3 */

/* Data types in javascript */

//note - Js is dynamic programming

//c,c++,java
// int a = 10;
// string b = "hello";

//js
//let a = 10;
//let names = "vijay";

//note - it will understand the datatypes by using the value


/*

//Primitive datatypes

1.Number
2.string
3.boolean
4.null - object
5.undefined
6.symbol - E6

//reference datatypes

1.array
2.object - literals
3.date

*/

/*
var a = 23.4;
var fname = "vijay";
var isYoung = true;
var phoneNo = null;
var b;
console.log(a);
console.log(typeof b);

//ES6 2015
//note - it will generate unique characters every time

const s1 = Symbol();
const s2 = Symbol();
console.log(s1 == s2);


let val1 = ["red","green"];
let val2 = {"name":"vijay"};
let d = new Date();//need to create new instance (new)
console.log(typeof d);
console.log(d);
*/

/* LESSON - 4 */

/* Type Conversion */
//String(), toString()

/*
let a = 10;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = 20.4;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = new Date();
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = [1,2,3,4,5];
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = 24;
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);
*/

//String to number
/*
a = "24";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

//we cannot convert object and letters to number

a = [1,2,3,4,5];
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = "hello";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = "24";
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);

a = "24.33";
console.log(a, typeof a);
a = parseFloat(a);
console.log(a, typeof a);
*/


/* LESSON - 5 */
//Type Coercion

/*
let a = "10";
let b = 10;
console.log(a + b);//become string and concatinate

let c = "10";
let d = 10;
c = Number(c);
console.log(c + d);
*/

/* LESSON - 6 */
//Operators

//1.Arithmetic Operators
/*
let a = 10;
let b = 30;
let c;
// c = a + b;
// c = a - b;
// c = a * b;
// c = a / b;
//  c = a % b;
//  c = 2 ** 2; // 2016
c = ++a;
c = --b;
console.log(c);*/

//2.Assignment Operators

/*
let a = 10;

// a = a + 5; or +=

// a += 5;
// a -= 5;
// a *= 5;
// a /= 5;
// a %= 5;
console.log(a);
*/

//3.Comparison Operators
/*
a = 10;
b = "10";
console.log(a == b);
console.log(a === b);
console.log(a != b);
*/

//4.Relational Opertors

// let a = 10;
// let b = 20;

// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

//5.Logical Operators

/*
let mark = 35;
let a = true;
console.log(mark >= 35 && mark <= 100);
console.log(mark >= 40 && mark <= 100);
console.log(mark >= 40 || mark <= 100);

console.log(a);
console.log(!a);
*/

//6.Strict Equality or Identity Operators

// let a  =10;
// let b = "10";
// console.log(a == b);
// console.log(a === b);

//7.Conditional or ternary operators
/*
const age = 18;
const result = age>=18?"Eligible":"Not Eligible";
console.log(result);
*/
//Handling null values
/*
function msg(names){
    const result = names?names:"No Names";
    console.log("Hello my name is "+result);
}
msg();
msg("Vijay");

user = {"name":"vijay","age":"25"}
console.log(user);
console.log(user.names);
*/

// const greet = () =>{
//     return "hello";
// }
// console.log(greet());

/*
const greet = (user) =>{
const result = user.names?user.names:"no name";
    return "hello "+result;
}
console.log(greet(user));
*/

//conditional chains

/*
avg >= 90 A grade
avg >= 80 B grade
C grade
*/

/*
const avg = 90;
const grade = avg>=90?"A grade":avg>=80?"B grade":"C grade";
console.log(grade);
*/

//8.Bitwise operators

//Bitwise &

// const a = 12;
// const b = 24;

// console.log(a & b);

// a =  1100
// b = 11000
//     01000 = 8

// &=

// let a = 12;
// let b = 24;

// a&=b;
// console.log(a);//result of bitwise & of a and b


//Bitwise |

// let a1 = 12;
// let a2 = 24;
// console.log(a1 | a2);

//|=
// a|=b;
// console.log(a);

//Bitwise ~

// a = 40;
// console.log(~a);

//Bitwise ^(XOR)
//  a = 2;
//  b = 3;

 /*
 0010
 0011
 0001 = 1 -> diffent value means 1 and same means 0
 */

//  console.log(a ^ b);

 //Bitwise <<
//  a = 5;
//  b = 2;
 /*
 00000101

 00010100 = 20 -> a left shift by 2 using b value.
 */
//  console.log(a << b);

//  a <<= b;
//  console.log(a);


//Bitwise >>

// a = 5;
// b = 2;
/*
00000101
00000001 = 1
*/
// console.log(a >> b);

// a = 8;
// b = 2;
/*
00001000
00000010 = 2
*/
// console.log(a >> b);

// a >>= b;
// console.log(a);



//9. nullish coalescing operator (?? ??=)

// const val = null?? "no Value";
// console.log(val);

// const val1 = null??45;
// console.log(val1);

//??=

// const user = {name:"vijay"};
// // const user = {name:"vijay",city:"chennai"};
// console.log(user);
// console.log(user.name);
// console.log(user.city);
// user.city??="chennai its a temporary value";
// console.log(user.city);


//10. Increment (++) or Decrement (--)

// let n1 = 2;
// n1++;
// console.log(n1);

// let n2 = 5;
// n2--;
// console.log(n2);

/*
Postfix increment
Prefix increment
*/

// let x = 5;
// let y = x++;
// console.log(y);
// console.log("x =",x,"y =",y);

// let x1 = 5;
// let y1 = ++x1;
// console.log(y1);
// console.log("x1 =",x1,"y1 =",y1);


/* LESSON - 7 */

/* IF STATEMENT */

/*
if(condition){

}
*/

// let age = 12;
// if(age >= 18){
//     console.log("You are eligible to vote");
// }

/* IF ELSE STATEMENT */

// let age = prompt("Enter your age: ");12
// if(age != null && age >= 18){
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("You are not eligible to vote12012");
// }


/* ELSE IF STATEMENT */

//example - 1;

// let number = 2;
// if(number < 0){
//     console.log(number," The number is negative number");
// }
// else if(number > 0){
//     console.log(number," The number is positive number");
// }
// else{
//     console.log("The number is 0");
// }

//example - 2;

// let avg = 100;
// if(avg >= 90 && avg <= 100){
//     console.log("Grade A");
// }
// else if(avg >= 80 && avg <= 89){
//     console.log("Grade B");
// }
// else if(avg >= 70 && avg <= 79){
//     console.log("Grade C");
// }
// else{
//     console.log("grade D");
// }

/* NESTED IF STATEMENT */

// let english =99, tamil = 98, maths = 74;
// let total, avg;
// total = english+tamil+maths;
// avg = total / 3;
// console.log("Total : "+total);
// console.log("Average : "+avg.toFixed(2));

// if(english >= 35 && tamil >= 35 && maths >= 35){
//     console.log("Result : Pass");
//     if(avg > 90 && avg <= 100){
//         console.log("Grade : A grade");
//     }
//     else if(avg > 80 && avg <= 90){
//         console.log("Grade : B grade");
//     }
//     else if(avg > 70 && avg <= 80){
//         console.log("Grade : C grade");
//     }
//     else{
//         console.log("Grade : D grade");
//     }
// }
// else{
//     console.log("Result : fail");
// }


/* SWITCH STATEMENT */

// let num = 4;
// switch (num) {
//   case 1:
//     console.log("One");
//     break;
//   case 2:
//     console.log("Two");
//     break;
//   case 3:
//     console.log("Three");
//     break;
//   case 4:
//     console.log("Four");
//     break;
//   default:
//     console.log("Invalid Data");
//     break;
// }


/* COMBINING CASE STATEMENT */

// let letters = "a";
// switch (letters) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//     console.log(letters + " Is an vowel");
//     break;
//   default:
//     console.log(letters + " Is not a vowel");
//     break;
// }


/* WHILE LOOP */

// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

/* DO WHILE LOOP */

// let table = 2;limit = 5;i = 1;
// do{
//     console.log(table+"X"+i+"="+(table * i));
//     i++;
// }
// while(i <= limit)


/* FOR LOOP */

// for(let i = 0; i<= 10;i++){
//     console.log(i);
// }

// let arr = [];

// for(let i = 0; i<= 10;i++){
//     arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for(let i = 0; i<= 10;i+=2){
//     arr.push(i);
// }
// console.log(arr);

/* NESTED FOR LOOP */

// let numbers = [];
// for(let i = 0; i< 3; i++){
//     numbers.push([]);
//     for(let j = 0; j<3; j++){
//         numbers[i].push(j);
//     }
// }
// console.log(numbers);
// console.table(numbers);

//FOR OF LOOP - for array(foreach another name of for of)

//notes

// we don't need the length of the array instead we can use for of loop to get the length of the array.

// let names = ["vijay","ajith","vikram","surya","jayam ravi"];
// for(let i = 0; i< names.length; i++){
//     console.log(names[i]);
// }
// console.log("========For of loop=========");
// for( let values of names){
//     console.log(values);
// }

//FOR IN LOOP - for object

// let user = {
//     name:"vijay",
//     age:49,
//     job:"actor",
//     city:"chennai"
// }

// for(let vals in user){
//     console.log(vals+" : "+user[vals]);    
// }


//Looping over objects by converting to an array


// let user = {
//     name:"vijay",
//     age:49,
//     job:"actor",
//     city:"chennai"
// }

// let arr1 = Object.keys(user);
// console.log(arr1);

// let arr2 = Object.values(user);
// console.log(arr2);

// for(let i = 0; i< arr1.length;i++){
//     console.log(arr1[i]+" : "+arr2[i]);    
//     // console.log(user[arr1[i]]);
// }

//Break statement 

// for(let i = 1; i<= 10; i++){
//     console.log(i);
//     if(i == 4){
//         break;
//     }    
// }

//continue statement

// for(let i = 1; i<= 10; i++){
//     console.log(i);
//     if(i == 4){
//         continue;
//     }    
// }

// for(let i = 1; i<=10;i++){    
//     if(i % 2 == 0){
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 1; i<=10;i++){    
//     if(i % 2 == 1){
//         continue;
//     }
//     console.log(i);
// }

//Label block 

// let arr = [
//     ["vijay","vikram"],
//     ["surya","vignesh"],
//     ["vinay","ajith"]
// ];

// for(let group of arr)
// {
//     inner:
//     for(let members of group)
//     {
//         if(members.startsWith("v")){
//             console.log("value found", members);
//             break inner;
//         };
//     }    
// }


//MATH FUNCTION

// let c;
// c = Math.PI;
// c = Math.E;
// c = Math.round(3.5);
// c = Math.round(3.4);
// c = Math.floor(3.9);
// c = Math.ceil(3.1);
// c = Math.trunc(3.9);
// c = Math.sqrt(4);
// c = Math.abs(-4);
// c = Math.pow(2,6);
// c = Math.min(2,6,9,4,3);
// c = Math.max(2,6,9,4,3);
// c = Math.random();
// c = Math.floor(Math.random() * 5+1);
// c = Math.sign(0);
// console.log(c);

//STRING FUNCTIONS

/*
let firstName = "vijayy";
let lastName = "kumar";

//Concatenation
let c = firstName + " " +lastName;
console.log("Concatenation : "+c);

//Concat
c = firstName.concat(' ',lastName);
console.log("Concat :",c);

//Append
c = "Ajith";
c += " Kumar";
console.log("Append :",c);

//Escaping
c = 'She can\'t run';
console.log(c);

//Length
c = firstName.length;
console.log(c);

//toUpperCase
c = firstName.toUpperCase();
console.log(c);

//toLowerCase
c = firstName.toLowerCase();
console.log(c);

//indexOf
c = firstName.indexOf("j");
console.log(c);

//lastIndexOf
c = firstName.lastIndexOf("y");
console.log(c);

//charAt
c = firstName.charAt(0);
console.log(c);

//charCodeAt
c = firstName.charCodeAt(0);
console.log(c);

//substr - ignore ending index
c = firstName.substr(0, 4); //0 - starting, 2 - length, substr - depricated function
console.log(c);

//substring - ignore ending index
c = firstName.substring(0, 4); //0 - starting, 2 - index
console.log(c);

let vals = "01234567890";
vals = vals.substring(4);
console.log(vals);

vals = vals.substring(4, 0);//automatic interchange will happen
console.log(vals);

vals = vals.substring(-3);
console.log(vals);//never accept negative value

// vals = vals.substring(45,56);// return empty value for the invalid index
// console.log("Invalid :",vals);

//slice
let text = "0123456789";
c = text.slice(2,4);//ignore ending index
console.log("Normal Slice :",c);

c = text.slice(4,2);//no interchange
console.log("Interchange :",c);

c = text.substring(45,56);// return empty value for the invalid index
console.log("Invalid :",c);

c = text.slice(-3);//accept negative values
console.log(c);

//split // array format
let a = "hello welcome to my house";
a = a.split(" ");
console.log(a);
console.table(a);

//replace 
let b = "hello world";
console.log(b);
b = b.replace("world","universe");
console.log(b);

//replace all
let d = "hello world hello";
console.log(b);
d = d.replaceAll("world","universe");
console.log(d);

//includes in js
let pets = ["dog","cat","goat","cow"];
let result = pets.includes("dog");
console.log(result);

//trim
let val1 = " vijay ";
console.log(val1, val1.length);

let output = val1.trim();
console.log(output, output.length);

//padStart
let val2 = "5";
let result1 = val2.padStart(4,0);
console.log(result1);

//padEnd
val2 = "5";
result1 = val2.padEnd(4,0);
console.log(result1);

//Long literals

//method - 1
let longString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."+" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"+" and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."+" It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
console.log(longString);

//method - 2
longString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\ Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type \ and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\ It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
console.log(longString);

//String.fromCharCode()
console.log(String.fromCharCode(65,66,67,68,69,70));
*/

//FUNCTION

//Function with return type

// function add(a,b){ //function declaration
//     return a + b;
// }
// console.log(add(12,12));

//Function with arbitrary arguments

//NOTE

//arbitrary function used to handle multiple arguments when users enters
//arbitrary function having default keyword as arguments which stores user value in an array.


// function sum(){
//     var total = 0;
//     for(let i = 0;i<arguments.length;i++){
//         total += arguments[i];
//     }
//     return total;
// }
// console.log(sum(25,25));

//process
/*
total = [];
sum(25, 25)

total += arguments[i]
total = total + arguments[i] 0 = 25, 1 = 25
25 = 25 + 25[1] - index 1
[25, 25]
index
[0,1]
 */

//NOTE
//if we want own keyword we have to use spread operators

// function total(...myDatas){
//     var total = 0;
//     for(let i = 0;i<myDatas.length;i++){
//         total += myDatas[i];
//     }
//     return total;
// }
// console.log(total(25,25,100,50));


//Function as expression in js
//NOTE - if we assign a function to a variable is called function expression

// let add = function(a,b){
// return a + b;
// }
// console.log(add); //function definition is the output here
// console.log(add(50,50)); 

//Arrow function - ES6
//flat arrow

// let add = (a,b) => {
// return a + b;
// }
// console.log(add(20,20));

//1. arrow function with map

let values = [1,2,3,4,5];
let doubledNumbers = values.map(val1 => val1 * 2);
console.log(values);
console.log(doubledNumbers);









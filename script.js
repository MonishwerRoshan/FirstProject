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

// let values = [1,2,3,4,5];
// let doubledNumbers = values.map(val1 => val1 * 2);//val1 -> own variable
// console.log(values);
// console.log(doubledNumbers);

// //2. arrow function with filter

// let fruits = ["banana","apple","orange","watermelon"];
// let filteredFruits = fruits.filter(newFruits => newFruits.length > 6);
// console.log(fruits);
// console.log(filteredFruits);

// //3. arrow function with reduce

// console.log(values);
// let reducedNumbers = values.reduce((total,values) => total + values, 0);
// console.log(reducedNumbers);

// //4. arrow function to create a closure

// let newVal = () => {
//     let count = 0;
//     return () => {
//         count ++;
//         return count;
//     }
// }
// let storedvaribale = newVal();
// console.log(storedvaribale);
// console.log(storedvaribale());
// console.log(storedvaribale());
// console.log(storedvaribale());
// console.log(storedvaribale());


//Callback Function
//a function which is called in an another function as parameters is called callback function
//the function which is receive the callbackfunction is called higherorder function

// function callbackFunction(){
//     console.log("Iam callback function");
// }
// callbackFunction();

// function callbackFunction(){
//     console.log("Iam callback function");
// }

// function higherOrderfunction(callbkfun){
//     callbkfun();
// }
// higherOrderfunction(callbackFunction)//callback function

// //settimeout(function,1000)

// setTimeout(function (){
//     console.log("hello");
// },1000);

// setInterval(function (){
//     console.log("hello");
// },1000);

// let num = [1,2,3,4];
// num.forEach(function (nums){
// console.log(nums);
// })


//Block scope function scope
//note

//referenceerror -> a variable which is called outside of the block
//we have to user let,const in an block level scope

// if(true){
//     console.log("hello");
// }

// if(true){
//     var vals = "hello"
//     console.log(vals);
// }
// console.log(vals);

//function scope
//note
//in function scope we have to use var keyword instead of let and const

// function helo(){
//     let values = "hello";
//     console.log(values);

//     function helo2(){
//         console.log(values);
//     }
//     helo2();
// }
// helo();

//ARRAY

// let a = [1,2,3,4,5];
// console.log(a);
// console.table(a);
// console.log(a[1]);

// let b = ["vijay",49,true,{
//     name:"vijay",
//     age:49,
//     City:"chennai",
//     job:"actor"
// }]
// console.log(b);
// console.table(b);


//ARRAY METHODS

/*
//1.FOREACH - to access every element from the array

//value, index, array
//index, array - Not Compulsary
//value - we can change this name as we want

let number = [1,2,3,4,5,6,7,8,9,10];
// number.forEach((value) => {
//     console.log(value);
// })

number.forEach((value,index) => {
    console.log("Index "+index+" Value "+value);
})



let users = [
    {name:"vijay",age:49},
    {name:"ajith",age:49},
    {name:"vikram",age:49},
    {name:"surya",age:49},
]
// users.forEach((value) => {
//     console.table(value);
// })

users.forEach((value) => {
    console.log(value.name);
})
*/

//EXPLORING foreach method

// /*Example 1*/
// let fruits = ["apple","orange","banana","watermelon"];
// fruits.forEach(fruit => {
//     console.log(fruit);
// })

// /*Example 2*/
// let numbers = [1,4,2,5,6];
// let total = 0;
// numbers.forEach(number =>{
//     total += number;    // total = 0; total = total(0) + number(1), total = 1;
// })
// console.log(total);

// /*Example 3*/
// let double_number = [];
// numbers.forEach(number => {
//     double_number.push(number * 2);
// })
// console.log(numbers);
// console.log(double_number);

// /*Example 4*/
// let max = numbers[0];
// numbers.forEach(number => {
//     if(number > max){
//         max = number;
//     }
// })
// console.log(max);

// /*Example 5*/
// let arr = [34,56,43,56];
// let totals = 0;
// arr.forEach(avg => {    
//     totals += avg;   
// })
// console.log(totals)
// console.log(totals / arr.length);


// let arr = [1,2,3,4,5,6,7,8,9,10];
// var even_numbers = [];
// arr.forEach(value => {    
//     if(value % 2 == 0){
//         even_numbers.push(value);        
//     }    
// })
// console.log(even_numbers);

// let names = ["vijay","ajith","vikram","surya"];
// names.forEach((names_,index) => {
//     names[index] = names_.toUpperCase();
// })
// console.log(names);


//2.MAP FUNCTION - to access every element and we can change anything by using this map function
/*
//example - 1
const numbers = [1,2,3,4,5,6,7,8,9,10];

let sqrt = numbers.map(value => {
    return Math.sqrt(value).toFixed(2);
})
console.log(sqrt);
console.table(sqrt);
*/

//I tried this example - 2
// const names = [
//     {name:"vijay",age:49,city:"chennai",salary:15000},
//     {name:"vijay",age:49,city:"chennai",salary:15000},
//     {name:"vijay",age:49,city:"chennai",salary:15000},
//     {name:"vijay",age:49,city:"chennai",salary:15000},
//     {name:"vijay",age:10,city:"chennai",salary:15000}
// ]
// let eligible_age = [];
// let eligible = names.map(value => {
//     let result = value.age >= 18;
//     if(result){
//         eligible_age.push("Eligible");
//     }    
//     else{
//         eligible_age.push("Not Eligible")
//     }
// })
// console.log(eligible_age);

/*Example - 2*/
/*
const names = [
    {name:"vijay",age:49,city:"chennai",salary:15000},
    {name:"ajith",age:49,city:"chengalpattu",salary:15000},
    {name:"vikram",age:15,city:"tambaram",salary:15000},
    {name:"surya",age:49,city:"coimbatore",salary:15000},
    {name:"jayam ravi",age:10,city:"madurai",salary:15000}
]

let eligible = names.map(value => ({
    // name:value.name,
    // age:value.age,
    // city:value.city,
    // salary:value.salary,
    ...value,
    status:value.age>=18?"Eligible":"Not Eligible"
}))
console.log(eligible);
console.table(eligible);
*/

//2.MAP FUNCTION  - it wont affect original array instead it will create new array

//1.Simple Transformation
// const numbers = [1,2,3,4,5];
// let new_array = numbers.map(number => {
//     return number * 2;
// })
// console.log(numbers);
// console.log(new_array);

/*
originalarray.map(current_value,index,originalarray);
*/

//Modify array elements
// let arr = ["hello","world"];
// let arr_ = arr.map(num => {
//     return num.toUpperCase();
// })
// console.log(arr);
// console.log(arr_);

//Combining Arrays
// let fruits = ["apple","orange"];
// let colors = ["red","orange"];

// let fruitColors = fruits.map((fruit,index) => {
//     return fruit +"-"+colors[index];
// })
// console.log(fruitColors);

//filtering an array
// let n = [1,2,3,4,5];

// let bool_value = n.map(check => {
//     return check % 2 == 0;
// })
// console.log(bool_value);

//Extraction property from an array

// let names = [
//     {name:"monish",age:24},
//     {name:"mona",age:26}
// ]

// let new_arr = names.map(val => {
//     return val.name;
// })
// console.log(new_arr);

//Modifying an array of objects

// let users = [
//     {name:"monish",age:24},
//     {name:"mona",age:26}
// ]

// let new_arrays = users.map(values => {
//     return {
//         name:values.name,
//         age:values.age + 1
//     }
// });
// console.log(users);
// console.log(new_arrays);


// const fruits = ["apple","banana","watermelon","grapes"];
// let fruits_modified = fruits.map(function (current_value, index, array){
//     return {
//         fruit_name:current_value,
//         fruit_length:current_value.length,
//         fruit_position:index,
//         fruit_array_length:array.length,
//     };
// });
// console.log(fruits_modified);
// console.table(fruits_modified);


//FILTER - main method

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let num = numbers.filter(values => {
//     return values % 2 == 0;
// });
// console.log(num);

// let users = [
//     {name:"alice",age:24},
//     {name:"bob",age:45}
// ]

// let modified_datas = users.filter(values => {
//     return values.age > 30;
// })
// console.log(modified_datas);

// let words = ['cat','dog','elephant','fish','giraffe'];
// let new_words = words.filter(values => {
//     return values.length >= 4;
// })
// console.log(new_words);

// let items = [
//     {name:"apple",category:"fruit"},
//     {name:"carrot",category:"vegetable"},
//     {name:"banana",category:"fruit"}
// ];
// let filtered_items = items.filter(values => {
//     return values.category === "fruit"
// })
// console.log(filtered_items);

// let words = ['cat','dog','elephant','fish','giraffe'];
// let startwithE = words.filter(values => {
//     return values.startsWith("e");
// });
// console.log(startwithE);

// const products = [
//     {name:"apple",category:"fruit",price:120},
//     {name:"carrot",category:"vegetable",price:70},
//     {name:"orange",category:"fruit",price:110},
//     {name:"mango",category:"fruit",price:90},
//     {name:"grapes",category:"fruit",price:100},
// ];

// let updated_products = products.filter(values => {
//     return values.category === "fruit" && values.price > 100;
// });
// console.log(products);
// console.log(updated_products);


// let booksInfo = [
//     {title:"the magic html",author:"john joe",year:"2013-2015"},
//     {title:"the magic world of design",author:"joe",year:"2013-2015"},
//     {title:"the  html",author:"john joe",year:"2013-2015"},
//     {title:"the wonders",author:"john joe",year:"2013-2015"},
//     {title:"daily habits",author:"john joe",year:"2013-2015"},
// ]

// let myterms = booksInfo.filter(values => {
//     return values.title.includes("html");
// })
// console.log(myterms);
// console.table(myterms);

// let booksInfo = [
//     {title:"the magic HTML",author:"john joe",year:2013},
//     {title:"the magic world of design",author:"joe",year:2016},
//     {title:"the  HTML",author:"john joe",year:2011},
//     {title:"the wonders",author:"john joe",year:2014},
//     {title:"daily habits",author:"john joe",year:2010},
// ]

// let short_terms = "HTML";
// short_terms = short_terms.toLowerCase();
// let short_terms_year = 2010;

// let myterms = booksInfo.filter(values => {
//     return values.title.toLowerCase().includes(short_terms) || values.year === short_terms_year;
// })
// console.log(myterms);
// console.table(myterms);

//REDUCE()

/*
array.reduce(function(accumulator,currentValue,currentIndex,array){

},inititalValue);
*/

// let numbers = [1,2,3,4,5];
// let sum = numbers.reduce((accumulator,currentValue) => {
//     return accumulator + currentValue;
// });
// console.log(sum);

//Flattening an array
// let nestedArray = [[1,2],[3,4],[5,6]];
// let flattenedArray = nestedArray.reduce((accumulator,currentValue) => {
//     return accumulator.concat(currentValue);
// });
// console.log(flattenedArray);

// let colors = ['red','green','blue','yellow','orange','red'];
// let colorsCounts = colors.reduce((accumulator,currentValue) => {
//         if(currentValue in accumulator){
//             accumulator[currentValue]++;
//         }
//         else{
//             accumulator[currentValue]=1;
//         }
//         return accumulator;
// },{});
// console.log(colorsCounts);

// let numbers = [34,32,56,76,87,12];
// let largestNumber = numbers.reduce((accumulator,currentvalue) => {
//     return Math.max(accumulator,currentvalue);
// });
// console.log(largestNumber);

// let people = [
//     {name:"rakesh",age:45,city:"chennai"},
//     {name:"sam",age:45,city:"salem"},
//     {name:"gopi",age:45,city:"chennai"}
// ];

// let groupedBycity = people.reduce((accumulator,currentValue) => {
//     if(currentValue.city in accumulator){
//         accumulator[currentValue.city].push(currentValue);
//     }
//     else{
//         accumulator[currentValue.city] = [currentValue];
//     }
//     return accumulator;
// },{});
// console.log(groupedBycity);

//SLICE

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// //slice(start,end)
// console.log(numbers);
// console.log("slice :"+numbers.slice());
// console.log("slice :"+numbers.slice(2));
// console.log("slice :"+numbers.slice(2,5));

//SPLICE

/*
splice is to remove elements in array it will change original array

removed_element = splice(start,length,new elements)
*/

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log("before splice : "+numbers);
// let removedElements = numbers.splice(2);
// console.log("removed Elements : "+removedElements);
// console.log("after splice : "+numbers);


// const numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log("before splice : "+numbers);
// let removedElements = numbers.splice(2,2);
// console.log("removed Elements : "+removedElements);
// console.log("after splice : "+numbers);

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log("before splice : "+numbers);
// let removedElements = numbers.splice(2,2,15,20);
// console.log("removed Elements : "+removedElements);
// console.log("after splice : "+numbers);

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log("before splice : "+numbers);
// let removedElements = numbers.splice(2,2,[15,20]);
// console.log("removed Elements : "+removedElements);
// console.log(numbers);

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log("before splice : "+numbers);
// let removedElements = numbers.splice(2,0,100,200);
// console.log("removed Elements : "+removedElements);
// console.log("after splice : "+numbers);

//CONCAT

// let a = [10,20,30];
// let b = [40,50,60];
// let c = [70,80,90];

// let d = a.concat(b);
// console.log(d);

// d = a.concat(b,c);
// console.log(d);

// d = a.concat(b,c,100,110);
// console.log(d);

// d = a.concat(b,c,"hello","worlds");
// console.log(d);

// d = a.concat(b,c,["hello","worlds"]);
// console.log(d);

//SORT 

// let names = ['sam','arjun','arya','vijay','surya'];
// console.log("Before sort : "+names);
// names.sort();
// console.log("After sort : "+names);

// let numbers = [43,56,12,34,89,56,123];
// console.log("Before sort : "+numbers);
// numbers.sort();
// console.log("After sort : "+numbers);

// numbers.sort((a,b) => {
// return a - b;
// });
// console.log(numbers);

// numbers.sort((a,b) => {
//     return b - a;
//     });
//     console.log(numbers);



// const products = [
//     {name:"apple",category:"fruit",price:120},
//     {name:"carrot",category:"vegetable",price:70},
//     {name:"orange",category:"fruit",price:110},
//     {name:"mango",category:"fruit",price:90},
//     {name:"grapes",category:"fruit",price:100},
// ];

// products.sort((a,b) => {
//     return a.price - b.price;
// });
// console.log(products);



// const products2 = [
//     {name:"apple",category:"fruit",price:120},
//     {name:"carrot",category:"vegetable",price:70},
//     {name:"orange",category:"fruit",price:110},
//     {name:"mango",category:"fruit",price:90},
//     {name:"grapes",category:"fruit",price:100},
// ];

// products2.sort((a,b) => {
//     if(a.name > b.name) return 1;
//     if(a.name < b.name) return -1;
//     else{
//         return 0;
//     }
// });
// console.log(products2);


//FILL(value,start,end) - It will affect the original array

// let val = [1,2,3,4,5];
// console.log("Before Fill :",val);
// // val.fill(20);
// // val.fill(20,1);
// val.fill(20,3,4);
// console.log("After Fill :",val);


//INCLUDES(value, start_index)

// let products = ['pen','pencil','eraser','box','pen'];
// let result = products.includes("pen");
// console.log(result);
// result = products.includes("scale");
// console.log(result);
// result = products.includes("pen",2);
// console.log(result);

//JOIN(seperator)

// let products = ['pen','pencil','eraser','box','pen'];
// let result = products.join();//Default , as seperator
// console.log(result);
// result = products.join('|');// | as seperator
// console.log(result);

//REVERSE

// let numbers = [1,2,3,4,5,6];
// console.log("Before Reverse : "+numbers);
// numbers.reverse();
// console.log("After Reverse : "+numbers);

//Array Element With Length Property
// let n = {0:10,1:20,2:30,3:40,length:4};
// console.log(n);

// Array.prototype.reverse.call(n);
// console.log(n);

//PUSH - insert element at the end of the array

// let n = [1,2,3,4,5];
// console.log(n);
// console.log(n.push(60));//It returns length of the array
// console.log(n);
// console.log(n.push(70,85,90,100));
// console.log(n);

// let fruits = ["Apple"];
// console.log(fruits);
// console.log(fruits.push("orange"));
// console.log(fruits);
// console.log(fruits.push("banana","pineapple"));
// console.log(fruits);

// let user1 = ["vijay","ajith"];
// let user2 = ["vikram","surya"];

// // user1.push(user2);
// // console.log(user1);

// user1.push(...user2);//Spread operator
// console.log(user1);


//POP - remove element at the end of the array

// let users = ["ram","ravi","sam","vijay"];
// console.log(users);
// console.log(users.pop());//It returns removed elements
// console.log(users);
// console.log(users.pop());
// console.log(users);


//SHIFT() - remove elements from the starting index

// let students = ["vijay","ajith","vikram","surya"];

// console.log("before shift :"+students);
// let removed_elements = students.shift();

// console.log("after shift :"+students);
// console.log("Removed Element :"+removed_elements);


//UNSHIFT() - remove elements from the starting index

// let students = ["vijay","ajith","vikram","surya"];

// console.log("before unshift :"+students);
// let length = students.unshift("Hello");

// console.log("after unshift :"+students);
// console.log("length :"+length);


//IndexOf()

// let students = ["vijay","ajith","vikram","surya"];
// let i = students.indexOf("surya");
// console.log(i);

// let names = "vijay kumar";
// let result = names.indexOf("a",5);
// console.log(result);


//LastIndexOf()
// let students = ["vijay","ajith","vikram","surya",'ravi','arjun','surya'];

// let i = students.lastIndexOf("surya");
// console.log(i);

// let names = 'vijay kumar is a vijay kumar';
// let result = names.lastIndexOf("vijay");
// console.log(result);


//Every And Some

// let n = [12,34,23,65];
// let result = n.every(value => {
//     return value % 2 == 0;
// });
// console.log(result);

// let n1 = [12,34,23,65];
// let result1 = n1.some(value => {
//     return value % 2 == 0;
// });
// console.log(result1);

// function checking(helo){
// return helo % 2 == 0;
// };

// let result3 = n.every(checking);
// console.log(result3);

// let result4 = n.some(checking);
// console.log(result4);


// let users = [
//     {name:"vijay",age:23},
//     {name:"vijay",age:27},
//     {name:"vijay",age:23},
//     {name:"vijay",age:17}
// ];

// function eligible(datas){
//     return datas.age >= 18;
// };

// let values = users.every(eligible);
// console.log(values);

// let values2 = users.some(eligible);
// console.log(values2);


//PRIMITIVE AND REFERENCE datatypes


// PRIMITIVE
// let name = "vijay kumar";
// console.log(typeof name);
// let age = 25;
// console.log(typeof age);
// let isTrue = true;
// console.log(typeof isTrue);
// let x;
// console.log(typeof x);
// let id = Symbol();
// console.log(typeof id);

// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);
// a = 50;
// console.log(a);
// console.log(b);

//REFERENCE
//Object
// let user = {name:"vijay",age:24};
// let user2 = user;
// console.log(user);
// console.log(user2);
// user.age = 49;
// console.log(user);
// console.log(user2);

// //Array
// let arr1 = [10,20,30];
// let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// arr1.push(40);
// console.log(arr1);
// console.log(arr2);

// //Object clone use spread and object.assign() 
// let obj1 = {a:1,b:2};
// let obj2 = {c:3,d:4};
// // let obj3 = Object.assign({},obj1,obj2);
// let obj3 = {...obj1,...obj2};
// console.log(obj3);
// obj2.c=5;
// console.log(obj3);

//Multiples ways to clone an array

// let originalArray = [1,2,3,4];

//Spread Operator
// let clonedArray  = [...originalArray];
// console.log(clonedArray);

//Slice
// let clonedArray = originalArray.slice();
// console.log(clonedArray);

//Concat
// let clonedArray = [].concat(originalArray);
// console.log(clonedArray);

//ArrayFrom
// let clonedArray = Array.from(originalArray);
// console.log(clonedArray);

//JSON.parse(), JSON.stringify()
// let clonedArray = JSON.parse(JSON.stringify(originalArray));
// console.log(clonedArray);


//Use of const for creating array

// const a = 10;
// console.log(a);
// a=20; -> Assignment to constant variable.

// const users = ['ram','ravi','sam','saran'];
// console.log(users);
// users.push("kavin");
// console.log(users);
//users = ["hello"]; -> Assignment to constant variable.


/*OBJECTS*/

//creating objects - this -> current object
//OBJECT LITERAL NOTATION
const student = {
    fullName:"vijay",
    father:"sandhirasekar",
    age:49,
    address:"chennai,saaligramam",
    city:"chennai",
    about:function(){
        return `${this.fullName} if from ${this.city}`;
    },
    eligibility:function(){
        return this.age >= 18;
    },
};
console.log(student);
console.log(student.about());
console.log(student.eligibility());

//=================================================

//incase we need 1000 objects
//FACTORY FUNCTION

// function addStudent(fullName,father,age,address,city){
//     let user = {};
//     user.fullName = fullName;
//     user.father = father;
//     user.age = age;
//     user.address = address;
//     user.city = city;
//     user.about = function(){
//         return `${this.fullName} if from ${this.city}`;
//     },
//     user.eligibility = function(){
//         return this.age >= 18;
//     };
//     return user;
// };
// console.log(addStudent("vijay","sandhirasekar",49,"chennai,saaligramam","chennai"));


//=================================================

//passing reference of the function

// const studentMethod = {
//     about:function(){
//         return `${this.fullName} if from ${this.city}`;
//     },
//     eligibility:function(){
//         return this.age >= 18;
//     }  
// };

// function addStudent(fullName,father,age,address,city){
//     let user = {};
//     user.fullName = fullName;
//     user.father = father;
//     user.age = age;
//     user.address = address;
//     user.city = city;
//     user.about = studentMethod.about;
//     user.eligibility = studentMethod.eligibility;

//     return user;
// };
// console.log(addStudent("vijay","sandhirasekar",49,"chennai,saaligramam","chennai"));

//=================================================

//PROTOTYPE INHERITANCE


//we can create multiple methods we dont need to pass the reference to the addstudent
// const studentMethod = {
//     about:function(){
//         return `${this.fullName} if from ${this.city}`;
//     },
//     eligibility:function(){
//         return this.age >= 18;
//     }  
// };

// function addStudent(fullName,father,age,address,city){
//     let user = Object.create(studentMethod);//prototype
//     user.fullName = fullName;
//     user.father = father;
//     user.age = age;
//     user.address = address;
//     user.city = city;
//     return user;
// };
// console.log(addStudent("vijay","sandhirasekar",49,"chennai,saaligramam","chennai"));

//prototype example

// let obj1 = {
//     key1:"value1",
//     key2:"value2",
// };
// console.log(obj1);

// let obj2 = {
//     key3:"value3",
// };
// console.log(obj2);

let obj1 = {
    key1:"value1",
    key2:"value2",
};
console.log(obj1);

let obj2 = Object.create(obj1);
obj2.key3 = "value3";
obj2.key2 = "hey";
console.log(obj2);
console.log(obj2.key1);//first it will check the key in this obj2 if it is not there then it will search in the inheritance prototype of obj1.
console.log(obj2.key2);
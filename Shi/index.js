//ALERT//
alert('My first page');

//VARIABLES// 
//NOTE: var was used earlier which is now replaced with let variable.
//If you want to use more than one word like "my age", then use camelcase(first letter small and second as capital) like myAge//
let age = 25;
var year = 2021;

console.log(age, year);//This is the result shown 

//When you need to change the value of variable, you don't need to define it again, just add another value//
age = 27;
console.log(age);

//When you don't want any value to be changed of the variable, then you define the variable as const//

const student = 50;

console.log(student);

// student = 100; //this will show the error as student has been assigned variable const which can not be altered//



//DATATYPES
//1. STRINGS// strings has quotes(single or double doesn't matter)

let email = 'shivanilal4.sl@gmail.com';

console.log(email);

// a. STRINGS CONCATENATION// It just means "joining of two values"

let firstName = 'Shivani';
let lastName = 'Lal';
//let fullName = firstName + lastName;
//to put space between the 2 values, just add a space
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//b. STRING CHARACTERS// This counts the characters and starts with 0, and is defined with []
console.log(fullName[3]);

//c. STRING LENGTHS, defines the length of the string

console.log(fullName.length);

//d. string methods, defined by () paranthesis.

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//COMMON STRING METHOdS
//1. lastIndexOf

let myEmail = 'shivanilal4.sl@gmail.com';

let show = myEmail.lastIndexOf('l');

console.log(show);

//2. Slice

let myName = 'shivani';
let result = myName.slice(3,6);
console.log(result);

//3. replace

let lName = "shivanilal";
let rr = lName.replace('v','m');
console.log(rr);

//2. NUMBERS
//math operators= +, =, *, /, **, %

let circle = 10;
const pi = 3.14;
console.log(circle, pi);

console.log(2*5);

let showResult = 15 * (10**5);
console.log(showResult);

//3. ARRAYS


let names = ['shi','vi','ohh'];
console.log(names);

let namestwo = ['shi', 'vi', 'ohh'];
console.log(namestwo[2]);

//override

namestwo[2] = 'ram';
console.log(namestwo[2]);
 console.log(names.length);

 //arrayn methods
 //a. join

 let nameName = ['shi','va','ni'];
 let showShow = nameName.join('+');
 console.log(showShow);

let mmndnc = nameName.join('-');
console.log(mmndnc);

let abcd = nameName.lastIndexOf('va');
console.log(abcd);

let efg = nameName.indexOf('ni');
console.log(efg);

//concat


//Here I am concatinating(joining nameName with om prakash kabira

let results = nameName.concat(['om','prakash','kabira']);
console.log(results);

//push

let resultss = nameName.push('omi');
console.log(resultss);

function functionOne(){
    document.getElementById("demo3").innerHTML="like this";
}
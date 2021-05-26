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
//STRINGS// strings has quotes(single or double doesn't matter)

let email = 'shivanilal4.sl@gmail.com';

console.log(email);

//STRINGS CONCATENATION// It just means "joining of two values"

let firstName = 'Shivani';
let lastName = 'Lal';
//let fullName = firstName + lastName;
//to put space between the 2 values, just add a space
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//STRING CHARACTERS// This counts the characters and starts with 0, and is defined with []
console.log(fullName[3]);

//STRING LENGTHS, defines the length of the string

console.log(fullName.length);

//string methods, defined by () paranthesis.

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//COMMON STRING METHOS
//lastIndexOf

let email = 'shivanilal4.sl@gmail.com';

let show = email.lastIndexOf('m');

console.log(show);
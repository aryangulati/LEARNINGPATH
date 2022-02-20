// Run this first run HTML and then go to inspect element and then console in chrome V8 engine
//comment 
console.log("Hello World");
//---------------------------------------------------------------
// VARIABLES 

// ECMAScript 6 introduced the let statement.
//earlier we used var to define varibales.
let name; //by deafult the variable we defined are undefined 
console.log(name);
let name_1="Manan";
console.log(name_1);


//RULES for Variables in Javascript
//Cannot be a reserved keyword
//should be meaningful
//cannot start with a number (1name)
//cannot contain a space or hyphen (-)
//are case-sensitive 

let firstName;
let FirstName; // they are two differnet variable 
// case senstive

// let FirstName = "Aryan" , LastName= "Gulati";
//but mordern best practice is to declared each variable 
//in single line 
let FrstName = "Aryan";
let LastName= "Gulati";
//---------------------------------------------------------------------
//CONSTANT

const interestRate =0.3;
// interestRate =1; //will give error  Assignment to constant variable
console.log(interestRate);
//---------------------------------------------------------------------
// Two categories of types
//Primitive / Value Types 
// Reference Types

// PRIMITIVES TYPES                REFERENCE TYPES 
// String                           object
// Number                           array
// boolean                         function
// NULL



let namee ='string';
let age =30;
let isApproved =true;
let isApprovedyes =false;
let firstname=undefined; //explicitly mentioned it to undefined
let lastname =null; 
//in ES6 we have another a primitove symbol

//------------------------------------------------------------------------

// JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE
console.log(typeof(age));
age = "aryankiage";
console.log(typeof(age));
console.log(typeof(namee));
console.log(typeof(isApproved));
console.log(typeof(lastname)); //Null is object 
console.log(typeof(firstname)); // undefined type is undefined

//----------------------------------------------------------------------------

//OBJECT

//Syntax

// let nameofobject{
//     properties of object in key value pair
// }

let person = {
    name:"amit",
    age:40
};

console.log(person);

//suppose if we want to change properties /keys or work with them
//two ways

//DOT Notation;

 person.name = "aryan";
 console.log(person.name);
 //it easy to use approach


// Bracket Notation
person['age'] = 22;
console.log(person);

//it used when we dont know what property we will goingto access for example
let selection ='name';
person['name'] ="mary";

console.log(person.name);

//-------------------------------------------------------------------------------

// ARRAYS

// Data Structure used to represnt list of items 

let arr = []; //it indicate an empty array
console.log(typeof(arr));

let selectedColors =["red","blue"];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors =["red","blue","greeen "];
console.log(selectedColors);

selectedColors[3] ="orange";
console.log(selectedColors);


// Object in array and size of array are dynamic unlike any other programming languages
selectedColors[4] = 1;

console.log(selectedColors);

//as array is object so it has some defined properties that we can see using dot or bracket notation

console.log(selectedColors.length);


//------------------------------------------------------------------------

// FUNCTIONS

//Syntax 

// function nameoffunction() {
//     defination of function or anything we want to execute using this function
// }


function greet() {
    console.log("hello, greetings");
}

//we doesn't require  ; to end our function as we are n't declaring something 

greet();

function displayname(name) {  //passing parameter
    console.log("name"+ name);
}

displayname('aryan'); //passing arguments

function display2name(name,lastname){
    console.log("name :"+name+"last name :"+lastname);
}

display2name("aryan","gulati");
display2name("aryan"); //it will give undefined as we are only passing one arguments

function square(number){
    return number*number;
}

let sqnumber = square(2);
console.log(sqnumber);

// console.log(square(2));

//----------------------------------------------------------------------------------









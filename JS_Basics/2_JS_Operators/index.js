// Run this first run HTML and then go to inspect element and then console in chrome V8 engine

// Arithmetic Operator

let x =10;
let y = 2;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//Increment (++)
console.log(x++);
console.log(x);

//Decrement (--)
console.log(--x);

//---------------------------------------------------------------------------------------------------------------------------------

// Assignment Operator

x= 10;
x=x+5;
x +=5;

x = x*3;
x*=3;

//---------------------------------------------------------------------------------------------------------------------------------
//Comparsion Operator

x =1;
//Relational operator
console.log(x>0);
console.log(x>=1);
console.log(x<1);
console.log(x<=1);

//Equality Operator
console.log(x===0);
console.log(x!==0);

//---------------------------------------------------------------------------------------------------------------------------------
//VVVVV IMPORTANT  VVVVVVV

//EQUALITY OPERATOR

//Strict Equality Operator (Type +Value)
console.log(1===1);
console.log("1"===1);

//Loose Equality operator (Value)
console.log(1==1);
console.log('1' == 1); //it convernt other into same type
console.log(true == 1);

//---------------------------------------------------------------------------------------------------------------------------------

// Ternary Operator / Conditional Operator

let points = 90;
let type = points >100? 'gold': 'silver';

console.log(type);

//---------------------------------------------------------------------------------------------------------------------------------

//Logical Operator
// Logical OR (||)

// Logical And (&&)

let highIncome = false;
let goodCreditScore =false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible',eligibleForLoan);

//NOT(!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused' , applicationRefused) ;

//---------------------------------------------------------------------------------------------------------------------------------

//VVVVV IMPORTANT  VVVVVVV
//Concept of falsy and truthy
//Falsy
//undefined
//null
//0
//false
//''
//NaN
console.log(false || true);
console.log(false || "aryan");
console.log(false || 1);
//Anything that is not Falsy ->Truthy

console.log(false || 1 || 2); //Short-circuiting

//example of Logical OR (||)
let useColor = undefined;
let defaultColor = 'blue';

let currentColor =useColor || defaultColor;
console.log(currentColor);

//---------------------------------------------------------------------------------------------------------------------------------

//BITWISE OPERATOR
//1 = 00000001
//2 = 00000010
//3 = 00000011 = BITWISE OR
//0 = 00000000 = BITWISE AND

console.log(1|2);
console.log(1&2);



// It usually doesn't use in FSE 
// Real world example of Bitwise
//its confusing there can be good real world cases
const readpremission =4;
const writepremission =2;
const executepremission =1;

let my_permission =0;
my_permission = my_permission | writepremission;

let message = 
 (my_permission & readpremission)? "yes":"no";

console.log(message);

//---------------------------------------------------------------------------------------------------------------------------------

//Operator Predence
x = 2+3*4;
console.log(x);
x= (2+3)*4;
console.log(x);


//SWAP value of Variables

let a = "arayan";
let b ="amit";

let temp = a;
a = b;
b=temp;

console.log(a);
console.log(b);





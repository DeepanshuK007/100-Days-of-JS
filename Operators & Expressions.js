/*Some of the diff operators in JS are:
  ** Exponentiation % Modulus  
  Comparison Operator- ===  Equal value and type
  !==  Not equal value and not equal type*/

let switch = true;
// switch = false;
let a = 6;
let b = 5;

//Arithmetic operators
console.log("a + b =", a+b)
console.log("a - b =", a-b)
console.log("a / b =", a/b) //Unlike C/C++ it wont give us the roundoff value and leave the remainder but will give is the accurate value. 
console.log("a * b =", a*b)
console.log("a ** b =", a**b)
console.log("a % b =", a%b)

//Assignment Operators
let assignment = 1;
assignment += 5
console.log("a is now = ", a)
assignment **= 5
console.log("a is now = ", a)

//Comparison Operators
let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
//=== is false here as both teh values are 6 but one is of int type and one os of string type.
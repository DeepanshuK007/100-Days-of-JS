/*var a = 7;
  a = identifier, 7 is a literal
  
  Rules for choosing variable names:
  1. Letters, digits, underscore & sign allowed
  2. Must begin with a $, _ or a letter
  3. JavaScript reserved words cannot be used as a variable name.
  4. It is too case sensitive.

  */

console.log("Hello");
let a = 7;
console.log(a);
a = "Deep";
console.log(a);
let 8deep = 7; //Will throw an error

/*Before ES6 in JS to define any var var was used but now it is avoided as due to some reasons it can include some bugs in your code.
const is used to declare constants. These are those identifies whose values donot change throughout the code.
let is used to declare block scoped variables.*/

/*1. var is globally scoped while let and constare block scoped. 
  2. var can be upadated & redeclared(changed datatype) within its scope
  3. let can be updated bit not redeclared.
  4. const can nither be updated nor be redeclared.
  5. var variables are initialized with undefined (datatype) 
    whereas let and const variables are not initialized.
  6. const must be initialized during declaration unlike let and 
     var.*/

const author;  //Throws an error.
const author = "Deepanshu"
let a = 40;
var b = "Deep";
let c = null
var b = 10;
let d = undefined
let e = '%';
e = 3;      //Here if we uuse let here then we are redeclaring e.
console.log("Hello");
let a = 7;
console.log(a);
{
    let a = 8;
    console.log(a); //Scope of let is till the end of a block
}
console.log(a);


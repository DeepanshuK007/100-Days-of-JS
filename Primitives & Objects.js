/*Primitive DataTypes & Objects:
  Primitive data types are a set of basic data types in javascript.
  Object is a non primitive datatype in JS
  Primitive datatypes: 1.Null  2.Number  3.String  4.Symbol
                       5.Undefined  6.Boolean  7.BigInt
  Pneumonic: NNSSBBU
                       
Object:
An object in JS can be created as follows:
 const item = {
              name : "Led Bulb"
              price : "150"
              }
*/

let a = null  //Null
let b = 58;   //Number
//Primitives in JS
let c = true; //Boolean
let d = BigInt("536") + BigInt("4"); //BigInt
let e = "Deep";  //String
let f = Symbol("Go Deep");  //Symbol
let g = undefined;  //Undefined  let g
console.log(a, b, c, d, e, f, g)
console.log(typeof e)

//Objects- These are used to make a key value pair which can be stored in the form of a database and can be accessed in the neer future.
const item = {
   "Deep" : true,
   "Rahul" : "Good Boy",
   "Viraj" : Symbol("Goo Deeep"),
   "Ashish" : undefined
}
console.log(item["Ashish"])
//Here all the names of ppl are the Keys and their respective values. We can access their values by the syntax item[""];

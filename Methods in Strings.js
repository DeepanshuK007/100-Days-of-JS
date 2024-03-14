//String Properties and Methods.

//1. length method
let name = "DeePanShu Kumar"
let x = name.length  //name.length ->  this would also print 
console.log(x)  //Output will not count from 0 

//2. toUpperCase() method
let y = name.toUpperCase()
console.log(y)

//toLowerCase method()
let z = name.toLowerCase()
console.log(z)

//slice method()
//let q = name.slice(2)
let q = name.slice(2, 6)  //In case of 2 arguments the first argument gives us the block from we have to print and the 2nd argument gives us the block from which we have to slice. In short 2nd block will get printed but not the 6th. 
console.log(q)

//replace() method
let r = name.replace("ee", "i")
console.log(r,"\n")

//trim() method
let s = name.trim()
console.log(s, "\n")

//concat() method 
//console.log("\n")
//console.log(name + " Bhai")
let t = name.concat(name, " Bhau")
console.log(t)

//Strings are immutable(unchangable). In order to access the character at an index we use the following syntax,

let a = name[0] 
let b = name[11] 
console.log(a)
console.log(b)

//includes() method
let Name = "Kalki07"
console.log(Name.includes("07"))         //True
console.log(Name.includes("l", 2))       //True
console.log(Name.includes("Dog"))        //False

//startsWith() method
console.log(Name.startsWith("Kal"))      //True
console.log(Name.startsWith("0", 5))     //True

//endsWith() method
console.log(Name.endsWith("0"))          //False
console.log(Name.endsWith("Kalki", 4))   //False








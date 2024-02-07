//Arrays
//Arrays asre variables which can hold more than one value
const fruits = ["Banana", "Apple", "Grapes"]
const a1 = [7, "Deep", true] //JS arrays can hold diff types of datatypes 

//Accessing Values
let numbers = [1, 3, 5, 7]
let x = numbers[0]
console.log(numbers[0])
//Arrays are mutable and can be changed, Strings are immutable and cannot be changed. 

//Finding the length
//Indexing start from 0, so 1 has 0 index value and 7 has 1 index 
//value and so on. 
let y = numbers[0] 
console.log(numbers.length)

//Changing the values
numbers[2] = 8  //"numbers" now become [7,2,8,9]
console.log(numbers)

//In JS, arrays are objects. The 'typeof' operator on arrays returns objects
const n = [1, 7, 9]
console.log(typeof n)   //returns object
//Arrays can hold many values under a single name.
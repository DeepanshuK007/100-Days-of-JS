//Map, Filter & Reduce are also called higher order array methods.
//These all does not change the original array

/*map()- Creates a new array by performing some operation on each array element.
   Syntax: a.map((value/index/array) => {
             return value * value;
          })*/
console.log("map loop")
const a = [1, 2, 3]
let u = a.map((value) => {
      return(value * value);
})
console.log(u)
//The above code will print in the form of an array but the below wont as we have not created a new arr to take the returned value like u in the above code.

//Can simultanously also print the index(position), whole array.
a.map((value, index) => {
    console.log((value * value), index) 
})

/*filter()- Filters an array with values that passes a test. Creates a new array, doesnot modify the exising array.
  Syntax: array_name.filter((func_name) =>{
            console.log(a>2)
          }) */
let a2 = a.filter((value) => {
          return value > 1     
})
console.log(x)
//Here we have created a new arr a2 which gets the elements from array a which satisfies the condition.

/*reduce() method- Reduces an array to a single value
    Syntax:     array_name.reduce(operation)*/
const n = [1, 4, 5, 7, 4]
let y = a.reduce((e1, e2) => {
      return (e1 + e2)
})
console.log(y)
/*Here we have created a code to reduce to the sum of all the elements. For that we have passed two arguments in it which will be:
Case 1: First two elements
Case 2: After the sum of the first two elements the sum will be e1 and e2 will be the 3rd element and soo on..*/
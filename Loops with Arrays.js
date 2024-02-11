//Using Loops in Arrays
console.log("Printing elements in the array");
let specimens = [1, 5, 2, 8, 4]
for(let i = 0; i < specimens.length; i++){
   console.log(specimens[i])
}

//For creating a code that would print multiplication of each element of the array.
/*forEach loop
  Syntax: array_name.forEach((value/index/array) => {
              //funcion logic
          })*/
console.log("forEach loop")          
specimens.forEach((element) => {
    console.log(element * element)
})

/*map()- Creates a new array by performing some operation on each array element.
   Syntax: a.map((value/index/array) => {
             return value * value;
          })*/
console.log("map loop")
const a = [1, 2, 3]
a.map((element) => {
      console.log(element * element);
})

/*filter()- Filters an array with values that passes a test. Creates a new array
  Syntax: array_name.filter(test_condition) */
  //console.log(specimens.filter(greater_than_2))

/*reduce() method- Reduces an array to a single value
    Syntax:     array_name.reduce(operation)*/
const n = [1, 4, 5, 7, 4]
let x = n.reduce(add)
console.log(x)

/*Array.from- Used to create an array from any other object
This is used in case of HTML Collection. U get to see it when u work with DOM. And you have to convert this collection in an array and there comes the use of Array.from.
 Syntax: Array.from(obj_name) */
let name = "Deepanshu"
let y = Array.from(name)
console.log(y)

//for...of loop can be used to get the values from the array. Shortcut to access the elements of the array, no need of for loops
for (let element of n){
   console.log(element)
}

//for..in loop can be used to get the keys from an array.
for (let i in n){
    console.log(i)    //console.log(n[i]) can be used also for accessing the elements of the array.
}
//prints the position of the elements as those are the keys to the values by default
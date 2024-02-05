
let elements = [1, 3, 5, 7]
for(var i = 0; i < 2; i++){
    console.log(i)
}
//Array Methods
//1. toString()- Converts an array to a string of comma seperated values.
let x = elements.toString()
console.log(x)

//2. join()- joins all the elements using a seperator.
let y = elements.join("-")
console.log(y)

//3. pop()- removes last element from the array
let z = elements.pop()
console.log(z)  //7

//4. push()- Adds a new element at the end of the array
let n = elements.push(9)
console.log(n)
console.log(elements) // [1, 3, 5, 9] This modifies the last element of the array as the passed argument
//modifies the original array and returns the new array length

//5. shift()- Removes first element and returns it.
let m = elements.shift()
console.log(m)         // 1
console.log(elements)  //[3, 5, 9]

//6. unshift()- Adds elements to the beginning. Returns new array length.
let p = elements.unshift(7)
console.log(p)
console.log(elements)

//pop and push, removes and adds the last element respectively from an array. shift & unshift, removes and adds an element respectively to the begining of the array. 
//All of these methods just shows the no of elements or the called element but not the whole array. For that u need to print the whole array.
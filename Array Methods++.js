//Some more array methods.

//7. delete x[] method- array elements can be deleted using the delete operator
let specimen = [2, 5, 6, 9]
let x = delete specimen[3]
console.log(specimen)

//8. concat()- used to join array to the given array.
let a = []
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]
let z = a1.concat(a2, a3)  //Returns [1, 2, 3, 4, 5, 6, 7, 8, 9]
let u = a.concat(a1, a2) 
// If u want a array concatinating only two arrays then create an array with no elements and call the concat() method from it
console.log(z)
console.log(u)

//concat returns a new array and does not change the existing arrays

//9. sort() method- this is usued to sort an array alphabetically.
let a4 = [5, 7, 9, 0]
let y = a4.sort()
console.log(y)
//sort() method works like an optional compare func in which we pas i, i+1 as arguments.

//10. splice()- splice can be used to add new items to an array.
//const numbers = [1,2,3,4,5]
//let v = numbers.splice(2,1,23,24)
let v = a4.splice(1, 2, 45)
//here, 1 is the position to add, 2 diprics the no. of elements to remove, and 23, 24 are the elements to be added
console.log(v)  //splice method returns deleted items, and modifies the array.
console.log(a4)

//11. slice()- slices out a piece from an array. It creates a new array. //Shows the sliced elements
let num = [1, 2, 3, 4]
let e = num.slice(2)  //Output [3, 4], slices from the sec element
let f = num.slice(0, 2)  //Output [1, 2], these are the sliced elements. 0th position element will get sliced but not the 2nd. means now if u print the array this would not show those elements
console.log(e)
//console.log(num)
console.log(f)
console.log(num)  //Doesnot modifies the original array creates a duplicate arr for sliced elements.

//12. reverse()- Reverses the elements in the source array
let g = num.reverse()
console.log(g)


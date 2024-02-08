//for Loops
let sum = 0
let n = prompt("Enter a number of your choice: \n")
for(var i = 0; i < n; i++){ //let i
  sum += i
}
console.log("Sum of first " + n + " natural nos is: " + sum)
console.log(i) //This will only print the value of i only if the scope of i is global and this can be done by var 

//for in Loops prints the Keys in the obj created
let obj = {
   Deep : 87,
   Rahul : 80,
   Viraj : 65,
   Ashish : 70
}
console.log("Names in the obj are: ")
for(let a in obj){
  console.log(a)
}

for(let a in obj){
  console.log("Marks of " + a + " is " + obj[a])
}

//for of Loops prints the Values of the objs 
for (let b of "Harry"){
   console.log(b)
}
//This is also used in case of arrays.
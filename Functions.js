alert("Find averages")
let n = prompt("Enter the first number: \n")
n = Number.parseInt(n)
let m = prompt("Enter the sec number: \n")
m = Number.parseInt(m)

function Average(x, y) {
    return ((x + y)/2)
    console.log("Done")
}

console.log("The average of two numbers is: " + Average(n, m))
 
//To round off the numbers:   
//return Math.round((x + y)/2)

//Another way of creating a func
const sum = (p, q) => {
    return p + q
}
console.log("Sum of two number is: " + sum(9, 8))

const Intro => {
   console.log("Nameaste, Kaise ho aap?")
}
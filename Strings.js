//Strings
let name = "Harry"
console.log(name[0])
console.log(name[1])
//console.log(name[])
let friend = 'Prakash'
console.log(friend)  

//String Literals
let boy1 = `Rohan`
let boy2 = 'Prad\'eep'
let relation = `${boy1} is a "friend" of ${boy2}`
//This is the syntax used to put the value of a variable(String Interpolation) in the string, use *Backtics*. 
//You can also put double/single quotes in the string
console.log(relation)

//Escape Sequence Characters
//If you are writing your string in single inverted commas and want to use a single inverted comma in it ex-Deep's, it can be done by \', simillarly we have \" 
console.log('This is Deep\'s \"T Shirt\"') 
console.log(boy2.length)  //Here the length of the string will come out to be 8 bcuz it will also include to single quote character.

//Other Escape sequence tags are \n, \t, \r(Used to return cursor to the start of the present line   )
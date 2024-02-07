let a = prompt("Hey whats your age?")
//Whenever prompt is used inJS it askes the user on the window of the site to enter what is quoted in the prompt
//Similarly if alert() is used instead, a dialogue box pops up with just a comment on it.

a = Number.parseInt(a) //Converting the string into number and is called typecasting. The code you provided is attempting to parse the variable a as an integer using the Number.parseInt() method.
//Meaning of parse is analyse a sentence into its parts and describe its syntactic roles
console.log(typeof a)
if(a>0){
  alert("This is a valid age") //alt+shift+down arr.
}
else if(a<7 && a>5){
  alert("You are just a kid who can just learn a bicycle")
  if(a>18 && a<70){
  alert("You are eligible for learning a 2 wheeler.")
}
}
else {
  alert("This is not a valid age")
}
//Semi colon at th eend of the code is not a compulsation here as JS is a smart and lineant lang
console.log("You can", a<18 ? "not drive" : "drive")

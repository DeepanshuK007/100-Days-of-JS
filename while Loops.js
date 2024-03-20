//while Loop
let n = prompt("Enter th evalue of n : \n")
n = Number.parseInt(n)
let i = 0;
while(i<n){      
  console.log(i)
  i++;
}

//do while Loop 
//Here even if the condition is on applicaple then too the loop will execute once.
let n = prompt("Enter a no of your choice: \n");
n = Number.parseInt(n);
let i = 0;
do{
   console.log(i++);
}
while(i<=n);
//Here if the value of i is kept greater than than the entered value n then too the loop will execute once.


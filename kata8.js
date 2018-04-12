{

var prompt = require("prompt-sync")();
var randomnumber = Math.floor(Math.random() * 20);

var sum = 0;

var answer = prompt("Guess a number: ");


if (answer == randomnumber)

		{
			return(console.log("You got it! You took 1 attempt!"));
		}

while (isNaN(answer))

		{
			sum++;
			console.log("Not a number! Try again!");
			console.log("\n");
			var answer = prompt("Guess a number: ");
		}


while (answer != (randomnumber))

{
	if (answer < randomnumber)

		{ 
			sum++;
			
			console.log("Too Low!");
			console.log("\n");
			var answer = prompt("Guess a number: ");
		}

	else if (answer > randomnumber)

		{
			sum++;
			
			console.log("Too High!");
			console.log("\n");
			var answer = prompt("Guess a number: ");	
		}

}

console.log("\n");
console.log("You got it! You took " + (sum+1) + " attempts!");
console.log("\n");


}

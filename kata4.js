var calculateChange = function(total, cash) 

{

console.log("\n");

var change = cash - total;

// Twenty Dollar Denomination

var twenty = Math.floor(change/2000);
change-=(twenty * 2000);

if(twenty >= 1)

	{
		console.log("twenty: " + twenty);
	}


// Ten Dollar Denomination

var ten = Math.floor(change/1000);
change-=(ten * 1000);

if(ten >= 1)

	{
		console.log("ten: " + ten);
	}


// Five Dollar Denomination

var five = Math.floor(change/500);
change-=(five * 500);

if(five >= 1)

	{
		console.log("five: " + five);
	}


// Two Dollar Denomination

var twoDollar = Math.floor(change/200)
change-=(twoDollar * 200);

if(twoDollar >= 1)

	{
		console.log("twoDollar: " + twoDollar);
	}


// One Dollar Denomination

var dollar = Math.floor(change/100);
change-=(dollar * 100);

if(dollar >= 1)

	{
		console.log("dollar: " + dollar);
	}


// Quarter (25c) Denomination

var quarter = Math.floor(change/25);
change-=(quarter * 25);

if(quarter >= 1)

	{
		console.log("quarter: " + quarter);
	}


// Dime (10c) Denomination

var dime = Math.floor(change/10);
change-=(dime * 10);

if(dime >= 1)

	{
		console.log("dime: " + dime);
	}


// Nickel (5c) Denomination

var nickel = Math.floor(change/5);
change-=(nickel * 5);

if(nickel >= 1)

	{
		console.log("nickel: " + nickel);
	}


// Penny (1c) Denomination

var penny = Math.floor(change/1);

if(penny >= 1)

	{
		console.log("penny: " + penny);
	}

return "\n";

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

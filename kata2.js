
var conditionalSum = function(values,condition)

{

if (condition == "even")

{

var sum = 0;

for(var i = 0; i <= values.length; i++)

{

if(values[i] % 2 == 0)

			{

					sum+=values[i];

			}

	}

return sum;

	}

else if (condition == "odd")

{

var sum = 0;

for(var i = 0; i <= values.length; i++)

{

if(values[i] % 1 == 0 && values[i] % 2 != 0)

			{

					sum+=values[i];

			}

	}

return sum;

}

}


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

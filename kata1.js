var repeatNumbers = function(data) 

{


var concat = [].concat.apply([],data);


	console.log("\n");

	var str1 = "";


	for (var i = 1; i <= concat[1]; i++)

		{

			str1+=concat[0];
	
		}

	
	
	if (concat[2] != undefined)

	{

	console.log(str1 + ",");

	
	var str2 = "";

	for (var i2 = 1; i2 <= concat[3]; i2++)

		{

			str2+=concat[2];			

		}
	
	}


	else

		{
			console.log(str1);
			return 0;
		}


	
	if (concat[4] != undefined)

	{

	console.log(str2 + ",");

	var str3 = "";

	for (var i3 = 1; i3 <= concat[5]; i3++)

		{

			str3+=concat[4];

		}

	console.log(str3 + "\n");
	
	}

	
	else
	
		{
			console.log(str2);
			return 0;
		}

}


repeatNumbers([[10, 4]]);
repeatNumbers([[1, 2], [2, 3]]);
repeatNumbers([[10, 4], [34, 6], [92, 2]]);

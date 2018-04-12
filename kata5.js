
var camelCase = function(input)

{

var words = input.split(" ");
var str = " ";

var LowerCase = words[0];
str += words[0];

for (var i = 1; i <= words.length-1; i++)
    {
      var UpperCase1 = words[i].charAt(0).toUpperCase()+words[i].slice(1);
      str += UpperCase1;
    }

return str;

}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
